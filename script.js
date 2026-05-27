(() => {
  const PAGE_CLASS_NAMES = [
    "page-hero",
    "page-intro-story",
    "page-gears",
    "page-outtro-story",
  ];

  const PAGE_CLASSES = {
    home: ["page-hero"],
    intro: ["page-intro-story"],
    gears: ["page-gears"],
    outtro: ["page-intro-story", "page-outtro-story"],
  };

  const PAGE_NAMES = new Set(Object.keys(PAGE_CLASSES));
  const TRANSITION_MS = 650;

  let currentPage = "home";

  function normalizePageName(pageName) {
    return PAGE_NAMES.has(pageName) ? pageName : "home";
  }

  function getPageFromHash() {
    const hashPage = window.location.hash.replace(/^#/, "");
    return normalizePageName(hashPage || "home");
  }

  function getActivePageElement() {
    return document.querySelector(`[data-page="${currentPage}"]`);
  }

  function updateBodyPageClass(pageName) {
    document.body.classList.remove(...PAGE_CLASS_NAMES);
    document.body.classList.add("page", ...PAGE_CLASSES[pageName]);
    document.body.dataset.activePage = pageName;
  }

  function updateUrl(pageName) {
    const url = new URL(window.location.href);
    url.hash = pageName === "home" ? "" : pageName;
    history.pushState({ page: pageName }, "", url);
  }

  function closeInstructionPanel() {
    const instructionPanel = document.getElementById("instruction-panel");
    if (!instructionPanel) return;

    instructionPanel.classList.remove("is-open");
    instructionPanel.setAttribute("aria-hidden", "true");
  }

  function setActivePage(pageName, options = {}) {
    const nextPage = normalizePageName(pageName);
    currentPage = nextPage;

    document.querySelectorAll("[data-page]").forEach((page) => {
      const isActive = page.dataset.page === nextPage;
      page.classList.toggle("is-active", isActive);
      page.setAttribute("aria-hidden", String(!isActive));
    });

    updateBodyPageClass(nextPage);

    if (nextPage !== "gears") {
      closeInstructionPanel();
    }

    if (options.pushState) {
      updateUrl(nextPage);
    }

    document.dispatchEvent(
      new CustomEvent("lifeform:pagechange", {
        detail: { page: nextPage },
      })
    );
  }

  function showLoaderBetween(callback) {
    const loader = document.querySelector(".page-loader");

    if (!loader) {
      callback();
      return;
    }

    loader.classList.add("is-active");

    setTimeout(() => {
      callback();
      requestAnimationFrame(() => {
        loader.classList.remove("is-active");
      });
    }, TRANSITION_MS);
  }

  function transitionToPage(pageName) {
    const nextPage = normalizePageName(pageName);
    if (nextPage === currentPage) return;

    showLoaderBetween(() => {
      setActivePage(nextPage, { pushState: true });
    });
  }

  function bindPageNavigation() {
    document.querySelectorAll("[data-page-target]").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        transitionToPage(link.dataset.pageTarget);
      });
    });

    window.addEventListener("popstate", () => {
      setActivePage(getPageFromHash());
    });

    window.addEventListener("hashchange", () => {
      setActivePage(getPageFromHash());
    });
  }

  function initPageApp() {
    setActivePage(getPageFromHash());
    bindPageNavigation();

    window.addEventListener("load", () => {
      document.querySelector(".page-loader")?.classList.remove("is-active");
    });
  }

  window.lifeformShowPage = transitionToPage;

  // =========================
  // LIFE TITLE CYCLE
  // =========================

  const words = ["eLif", "Life", "ifeL", "feLi"];
  const titleSelectors = ["[data-life-cycle]"];

  function startTitleCycle(element) {
    let index = 0;
    element.textContent = words[index];

    gsap.to(
      {},
      {
        duration: 0.55,
        repeat: -1,
        onRepeat: () => {
          index = (index + 1) % words.length;
          element.textContent = words[index];
        },
      }
    );
  }

  function initLifeTitleCycle() {
    if (!window.gsap) return;

    const elements = titleSelectors.flatMap((selector) => {
      return Array.from(document.querySelectorAll(selector));
    });

    [...new Set(elements)].forEach(startTitleCycle);
  }

  // ==========================================================
  // GSAP TYPEWRITER
  // ==========================================================

  let activeStory = null;

  function clearActiveStory() {
    if (activeStory?.tween) {
      activeStory.tween.kill();
    }

    activeStory = null;
  }

  function resetStoryControls(story) {
    story.target.textContent = "";

    if (story.hint) {
      story.hint.textContent = "<press SPACE to move forward>";
    }

    if (story.nextArrow) {
      gsap.set(story.nextArrow, {
        autoAlpha: 0,
        x: 20,
      });
    }

    if (story.skipLink) {
      gsap.set(story.skipLink, {
        autoAlpha: 1,
      });
    }

    if (story.finalActions) {
      story.finalActions.setAttribute("aria-hidden", "true");
      gsap.set(story.finalActions, {
        autoAlpha: 0,
        y: 12,
      });
    }
  }

  function initActiveStoryPage() {
    const page = getActivePageElement();
    const target = page?.querySelector("[data-story-target]");

    clearActiveStory();

    if (!page || !target) {
      return;
    }

    if (!window.gsap || !window.TextPlugin) {
      console.warn("GSAP or TextPlugin is missing.");
      return;
    }

    gsap.registerPlugin(TextPlugin);

    const paragraphs = Array.from(page.querySelectorAll("[data-intro-text]"))
      .map((element) => element.dataset.introText)
      .filter(Boolean);

    if (!paragraphs.length) {
      return;
    }

    activeStory = {
      currentIndex: 0,
      finalActions: page.querySelector("[data-story-final-actions]"),
      hint: page.querySelector("[data-story-hint]"),
      isFinished: false,
      isTyping: false,
      nextArrow: page.querySelector("[data-story-next]"),
      paragraphs,
      skipLink: page.querySelector("[data-story-skip]"),
      target,
      tween: null,
    };

    resetStoryControls(activeStory);
  }

  function showFinalStoryControls(story) {
    story.isFinished = true;

    if (story.hint) {
      story.hint.textContent = story.finalActions
        ? "<choose where to go>"
        : "<click arrow to continue>";
    }

    if (story.nextArrow) {
      gsap.to(story.nextArrow, {
        autoAlpha: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    }

    if (story.skipLink) {
      gsap.to(story.skipLink, {
        autoAlpha: 0,
        duration: 0.25,
        ease: "power2.out",
      });
    }

    if (story.finalActions) {
      story.finalActions.setAttribute("aria-hidden", "false");
      gsap.to(story.finalActions, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    }
  }

  function typeNextParagraph() {
    const story = activeStory;

    if (!story || story.isTyping || story.isFinished) {
      return;
    }

    if (story.currentIndex >= story.paragraphs.length) {
      showFinalStoryControls(story);
      return;
    }

    const paragraph = story.paragraphs[story.currentIndex];

    story.isTyping = true;
    story.target.textContent = "";

    story.tween = gsap.to(story.target, {
      text: paragraph,
      duration: Math.max(1.15, paragraph.length * 0.025),
      ease: "none",
      onUpdate: () => {
        const frame = window.frameCount || 0;
        if (frame % 3 === 0 && window.lifeformAudio?.playTypeTone) {
          window.lifeformAudio.playTypeTone();
        }
      },
      onComplete: () => {
        story.isTyping = false;
        story.currentIndex += 1;
        story.tween = null;

        if (story.currentIndex >= story.paragraphs.length) {
          showFinalStoryControls(story);
        }
      },
    });
  }

  function bindStoryKeyboard() {
    document.addEventListener("keydown", (event) => {
      if (event.code !== "Space" || !activeStory) {
        return;
      }

      event.preventDefault();
      typeNextParagraph();
    });
  }

  function init() {
    initPageApp();
    initLifeTitleCycle();
    initActiveStoryPage();
    bindStoryKeyboard();

    document.addEventListener("lifeform:pagechange", initActiveStoryPage);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
