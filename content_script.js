setInterval(() => {
  const el = document.querySelector("[data-testid='lock-screen-experiment.ui.lock-screen-navigation.lock-screen-navigation-header']");
  if (el) {
    el.parentElement.style.height = "60px";
    el.parentNode.childNodes[1].style.display = "none";
  }
}, 500);
