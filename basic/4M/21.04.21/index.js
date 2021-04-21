const title = document.querySelector("h2");

const superEventHandler = {
  function: [
    function handleenter() {
      title.innerHTML = "The mouse is here";
      title.style.color = "#1abc9c";
    },

    function handleleave() {
      title.innerHTML = "The mouse is gone";
      title.style.color = "#3498db";
    },

    function handleResize() {
      title.innerHTML = "You just resized!";
      title.style.color = "#9b59b6";
    },

    function handleAuxclick() {
      title.innerHTML = "That was a right click!";
      title.style.color = "#e74c3c";
    }
  ]
};

title.addEventListener("mouseenter", superEventHandler.function[0]);
title.addEventListener("mouseleave", superEventHandler.function[1]);
window.addEventListener("resize", superEventHandler.function[2]);
window.addEventListener("auxclick", superEventHandler.function[3]);
