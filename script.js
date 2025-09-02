window.addEventListener("load", () => {
  const headerImg = document.getElementById("header-img");

  // Preload images
  const staticImg = new Image();
  staticImg.src = "imgs/header.png";

  const gifImg = new Image();
  gifImg.src = "imgs/header.gif";

  // Start with the static image
  headerImg.src = staticImg.src;

  // Swap to gif once it's loaded
  gifImg.onload = () => {
    headerImg.src = gifImg.src;

    // After 2130ms, switch back to static image
    setTimeout(() => {
      headerImg.src = staticImg.src;
    }, 2130);
  };
});
