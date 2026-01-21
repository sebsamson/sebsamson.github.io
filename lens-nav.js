(() => {
  const storageKey = "sebsamson.lensHome";
  const lensHomeByFrom = {
    design: "game-design-leadership-consultation.html",
    leadership: "game-direction-production.html",
  };
  const fromByLensHome = Object.fromEntries(
    Object.entries(lensHomeByFrom).map(([from, lensHome]) => [lensHome, from]),
  );

  const lensAssetsByFrom = {
    design: {
      writings: "design-writings.html",
      highlights: "design-studio-highlights.html",
      cv: "pdf/sebastien-samson-cv-game-design-consultation.pdf",
    },
    leadership: {
      writings: "leadership-writings.html",
      highlights: "production-studio-highlights.html",
      cv: "pdf/sebastien-samson-cv-game-direction-production.pdf",
    },
  };

  const setStoredLensHome = (lensHome) => {
    if (!lensHome) return;
    try {
      sessionStorage.setItem(storageKey, lensHome);
    } catch {
      // Ignore storage failures (privacy mode, disabled storage, etc.)
    }
  };

  const getStoredLensHome = () => {
    try {
      return sessionStorage.getItem(storageKey) || "";
    } catch {
      return "";
    }
  };

  const getLensHomeFromSearch = () => {
    const params = new URLSearchParams(window.location.search);
    const from = (params.get("from") || "").toLowerCase();
    return lensHomeByFrom[from] || "";
  };

  const getLensHomeFromReferrer = () => {
    const referrer = document.referrer || "";
    for (const lensHome of Object.values(lensHomeByFrom)) {
      if (referrer.includes(`/${lensHome}`) || referrer.endsWith(lensHome)) return lensHome;
    }
    return "";
  };

  const getSafeReferrerHref = () => {
    const referrer = document.referrer || "";
    if (!referrer) return "";
    try {
      const refUrl = new URL(referrer, window.location.href);
      const normalizeHostname = (hostname) => (hostname || "").toLowerCase().replace(/^www\./, "");

      const sameOrigin = refUrl.origin === window.location.origin;
      const bothOpaque = refUrl.origin === "null" && window.location.origin === "null";
      const sameSiteByHostname =
        refUrl.protocol === window.location.protocol &&
        normalizeHostname(refUrl.hostname) === normalizeHostname(window.location.hostname);

      if (!sameOrigin && !bothOpaque && !sameSiteByHostname) return "";
      if (refUrl.href === window.location.href) return "";
      return refUrl.href;
    } catch {
      return "";
    }
  };

  const getSafeReturnHref = () => {
    try {
      const params = new URLSearchParams(window.location.search);
      const returnValue = params.get("return") || "";
      if (!returnValue) return "";

      // Only allow same-origin (or same opaque origin) returns.
      const returnUrl = new URL(returnValue, window.location.href);
      const sameOrigin = returnUrl.origin === window.location.origin;
      const bothOpaque = returnUrl.origin === "null" && window.location.origin === "null";
      if (!sameOrigin && !bothOpaque) return "";

      // Only allow navigating back to local HTML pages (avoid open redirects to downloads, etc).
      const path = (returnUrl.pathname || "").toLowerCase();
      if (!path.endsWith(".html")) return "";

      return returnUrl.href;
    } catch {
      return "";
    }
  };

  const getFromKey = (...lensHomes) => {
    for (const lensHome of lensHomes) {
      if (!lensHome) continue;
      const from = fromByLensHome[lensHome];
      if (from) return from;
    }
    return "";
  };

  const buildLensMenuHtml = (fromKey) => {
    const lensHome = lensHomeByFrom[fromKey];
    const lensAssets = lensAssetsByFrom[fromKey];
    if (!lensHome || !lensAssets) return "";

    const currentFile = (window.location.pathname.split("/").pop() || "").toLowerCase();
    const withCurrent = (href) => {
      const hrefFile = (href.split("?")[0] || "").toLowerCase();
      const isCurrent = hrefFile === currentFile;
      return isCurrent ? ' aria-current="page"' : "";
    };

    return [
      `<a href="${lensHome}"${withCurrent(lensHome)}>Home</a>`,
      `<span class="menu-separator">|</span>`,
      `<a href="games.html?from=${encodeURIComponent(fromKey)}"${withCurrent("games.html")}>Experience</a>`,
      `<span class="menu-separator">|</span>`,
      `<a href="${lensAssets.writings}"${withCurrent(lensAssets.writings)}>Writings</a>`,
      `<span class="menu-separator">|</span>`,
      `<a href="${lensAssets.highlights}"${withCurrent(lensAssets.highlights)}>Highlights</a>`,
      `<span class="menu-separator">|</span>`,
      `<a href="${lensAssets.cv}">CV</a>`,
    ].join(" ");
  };

  const maybeSwapPrimaryMenu = (fromKey) => {
    if (!fromKey) return;

    const nav = document.querySelector('nav.menu[aria-label="Primary"]');
    if (!nav) return;

    const html = nav.innerHTML || "";
    const lensHome = lensHomeByFrom[fromKey];
    if (!lensHome) return;

    const alreadyLensMenu = html.includes(lensHome);
    const isGenericMenu = html.includes('href="index.html"') || html.includes("href='index.html'");
    if (alreadyLensMenu) return;
    if (!isGenericMenu) return;

    const lensMenu = buildLensMenuHtml(fromKey);
    if (lensMenu) nav.innerHTML = lensMenu;
  };

  const declaredLensHome = document.body?.getAttribute("data-lens-home") || "";
  if (declaredLensHome) setStoredLensHome(declaredLensHome);

  const lensHomeFromSearch = getLensHomeFromSearch();
  if (lensHomeFromSearch) setStoredLensHome(lensHomeFromSearch);

  const lensHomeFromReferrer = getLensHomeFromReferrer();
  const target =
    lensHomeFromSearch || lensHomeFromReferrer || getStoredLensHome() || "";

  const fromKey = getFromKey(
    lensHomeFromSearch,
    lensHomeFromReferrer,
    declaredLensHome,
    getStoredLensHome(),
  );
  maybeSwapPrimaryMenu(fromKey);

  const decorateLinksMode = document.body?.getAttribute("data-lens-decorate-links") || "";
  if (decorateLinksMode === "projects") {
    const currentReturn = `${window.location.pathname.split("/").pop() || ""}${window.location.search || ""}`;
    document.querySelectorAll("main a[href]").forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (!href) return;
      if (href.startsWith("#")) return;
      if (href.startsWith("mailto:")) return;
      if (href.startsWith("http://") || href.startsWith("https://")) return;
      if (!href.endsWith(".html")) return;
      if (href === "index.html" || href === "games.html") return;
      if (href.includes("?") || href.includes("#")) return;

      const returnParam = `return=${encodeURIComponent(currentReturn)}`;
      const nextHref = fromKey
        ? `${href}?from=${encodeURIComponent(fromKey)}&${returnParam}`
        : `${href}?${returnParam}`;

      link.setAttribute("href", nextHref);
    });
  }

  const backLink = document.querySelector("a[data-back-link]");
  if (!backLink) return;

  const safeReturnHref = getSafeReturnHref();
  if (safeReturnHref) {
    backLink.href = safeReturnHref;
    return;
  }

  const safeReferrerHref = getSafeReferrerHref();
  if (safeReferrerHref) {
    backLink.href = safeReferrerHref;
    return;
  }

  if (target) backLink.href = target;
})();
