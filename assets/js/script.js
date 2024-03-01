let accordianEls = document.querySelectorAll(".accordian");
const sideNavEl = document.getElementById("side-nav");
const mobileTogglerEl = document.getElementById("mobile-toggler");
const sideNavCloseEl = document.querySelector("#side-nav .header .close")
const sideNavOverlayEl = document.querySelector("#side-nav .overlay")

mobileTogglerEl.addEventListener("click", sideNav);
sideNavCloseEl.addEventListener("click", sideNav);
sideNavOverlayEl.addEventListener("click", sideNav);

function sideNav() {
    sideNavEl.classList.toggle('active');
    if(sideNavEl.classList.contains('active')){
        document.body.classList.add('stay');
    }
    else {
        document.body.classList.remove('stay');
    }
}

accordianEls.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (!elem.classList.contains("active")) {
      resetAccordians();
    }
    elem.classList.toggle("active");
    let panels = document.querySelectorAll(
      "." + elem.getAttribute("data-accordian-panel")
    );

    panels.forEach((panel) => {
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.opacity = 0;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.opacity = 1;
      }
    });
  });
});

function resetAccordians() {
  let panelEls = document.querySelectorAll(".accordian-panel");

  accordianEls.forEach((elem) => {
    if (elem.classList.contains("active")) {
      elem.classList.remove("active");

      let panels = document.querySelectorAll(
        "." + elem.getAttribute("data-accordian-panel")
      );

      panels.forEach((panel) => {
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.style.opacity = 0;
        }
      });
    }
  });
}
