(() => {
  "use strict";
  const root = document.documentElement;
  root.classList.add("js");
  const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Optional persistence. */ } };
  const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  const applyTheme = theme => { root.dataset.theme = theme; };
  applyTheme(read("fp.theme") || getSystemTheme());
  document.getElementById("themeToggle")?.addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    applyTheme(next); save("fp.theme", next);
  });
  const menu = document.getElementById("navMenu");
  const toggle = document.getElementById("navToggle");
  const menuLabel = () => toggle?.setAttribute("aria-label", root.lang === "en"
    ? (menu?.classList.contains("is-open") ? "Close menu" : "Open menu")
    : (menu?.classList.contains("is-open") ? "Chiudi menu" : "Apri menu"));
  const closeMenu = () => { menu?.classList.remove("is-open"); toggle?.setAttribute("aria-expanded", "false"); menuLabel(); };
  toggle?.addEventListener("click", () => {
    const open = menu?.classList.toggle("is-open"); toggle.setAttribute("aria-expanded", String(open)); menuLabel();
  });
  menu?.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menu?.classList.contains("is-open")) { closeMenu(); toggle?.focus(); }
  });
  // Each message keeps a static Italian fallback, including when scripts or storage fail.
  const messages = [...document.querySelectorAll("[data-en]")].map(el => ({ el, it: el.innerHTML, en: el.dataset.en }));
  const labels = [...document.querySelectorAll("[data-en-aria]")].map(el => ({ el, it: el.getAttribute("aria-label"), en: el.dataset.enAria }));
  const meta = document.querySelector('meta[name="description"]');
  const descriptions = {
    it: "Federico Del Pup — laureato in Informatica a Udine, studente di Computer Science a Padova. Progetti personali e sviluppo web.",
    en: "Federico Del Pup — Computer Science graduate from Udine, Computer Science student in Padua. Personal projects and web development."
  };
  const setLanguage = lang => {
    root.lang = lang;
    messages.forEach(({el,it,en}) => { el.innerHTML = lang === "en" ? en : it; });
    labels.forEach(({el,it,en}) => el.setAttribute("aria-label", lang === "en" ? en : it));
    document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    if (meta && document.getElementById("home")) meta.content = descriptions[lang];
    menuLabel();
  };
  const requested = new URLSearchParams(location.search).get("lang");
  const initial = requested === "en" || requested === "it" ? requested : read("fp.lang");
  setLanguage(initial === "en" ? "en" : "it");
  document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click", () => {
    setLanguage(button.dataset.lang); save("fp.lang", button.dataset.lang);
    const url = new URL(location.href); url.searchParams.set("lang", button.dataset.lang);
    history.replaceState(null, "", url);
  }));
  const year = document.getElementById("year"); if (year) year.textContent = new Date().getFullYear();
})();
