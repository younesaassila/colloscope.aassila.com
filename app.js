if (document.referrer.includes("physiquempsi4.free.fr") || !isPWA()) {
  location.href = "https://www.colloscope.com/";
} else {
  setTheme();
  showWarning();
}

function isPWA() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone ||
    document.referrer.includes("android-app://") ||
    localStorage.getItem("mode") === "standalone"
  );
}

function setTheme() {
  if (!localStorage.getItem("theme")) {
    var browserSupport = !(
      window.matchMedia("(prefers-color-scheme: dark)").media === "not all"
    );
    var prefersDarkColorScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (browserSupport && prefersDarkColorScheme) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }

  var theme = localStorage.getItem("theme");
  document.body.classList.add(`theme-${theme}`);
}

function showWarning() {
  document.body.innerHTML += /* html */ `
    <header>
      <h1>Colloscope</h1>
    </header>

    <section>
      <h2>Avertissement</h2>

      <p>
        Tu utilises un ancien raccourci pour accéder au colloscope, risquant ainsi
        de ne pas bénéficier d'une expérience optimale.
      </p>

      <p>
        Il t'est fortement recommandé de supprimer l'actuel raccourci en faveur de
        la nouvelle application disponible sur colloscope.com.
      </p>
    </section>

    <a href="https://www.colloscope.com/">Continuer vers colloscope.com</a>
  `;
}
