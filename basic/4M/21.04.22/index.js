function handleResize() {
  if (window.innerWidth <= 600) {
    document.body.style.backgroundColor = "#3498db";
  } else if (window.innerWidth > 600 && window.innerWidth < 800) {
    document.body.style.backgroundColor = "#8e44ad";
  } else {
    document.body.style.backgroundColor = "#f1c40f";
  }
}

window.addEventListener("resize", handleResize);
