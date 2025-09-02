window.addEventListener("load", () => {
  const headerImg = document.getElementById("header-img");

  // First show the static image (already set as default in HTML)
  headerImg.src = "imgs/header.png";

  // Then show the gif
  headerImg.src = "imgs/header.gif";

  // After 2130ms switch back to static image
  setTimeout(() => {
    headerImg.src = "imgs/header.png";
  }, 2130);
});
