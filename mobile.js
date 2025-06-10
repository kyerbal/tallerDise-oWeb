var popupvectorIcon = document.getElementById("popupvectorIcon");
if (popupvectorIcon) {
  popupvectorIcon.addEventListener("click", function (e) {
    window.location.href = "./MockupCelu.html";
  });
}
var callToAction = document.getElementById("callToAction");
if (callToAction) {
  callToAction.addEventListener("click", function () {
    var anchor = document.querySelector("[data-scroll-to='cuartaSeccionForm']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}
var cTA = document.getElementById("cTA");
if (cTA) {
  cTA.addEventListener("click", function () {
    var popup = document.getElementById("exitoContainer");
    if (!popup) return;
    var popupStyle = popup.style;
    if (popupStyle) {
      popupStyle.display = "flex";
      popupStyle.zIndex = 100;
      popupStyle.backgroundColor = "rgba(0, 0, 0, 0.75)";
      popupStyle.alignItems = "center";
      popupStyle.justifyContent = "center";
    }
    popup.setAttribute("closable", "");
    var onClick =
      popup.onClick ||
      function (e) {
        if (e.target === popup && popup.hasAttribute("closable")) {
          popupStyle.display = "none";
        }
      };
    popup.addEventListener("click", onClick);
  });
}
var vectorIcon = document.getElementById("vectorIcon");
if (vectorIcon) {
  vectorIcon.addEventListener("click", function () {
    var anchor = document.querySelector(
      "[data-scroll-to='primeraSeccinContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}
var vectorIcon1 = document.getElementById("vectorIcon1");
if (vectorIcon1) {
  vectorIcon1.addEventListener("click", function () {
    var anchor = document.querySelector(
      "[data-scroll-to='segundaSeccinContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}
var carteraIcon = document.getElementById("carteraIcon");
if (carteraIcon) {
  carteraIcon.addEventListener("click", function () {
    var anchor = document.querySelector(
      "[data-scroll-to='terceraSeccinContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}
