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

const copyBtn = document.getElementById("copy");
const tokenEl = document.getElementById("token");

copyBtn.addEventListener("click", () => {
  const token = tokenEl.textContent.trim();

  navigator.clipboard
    .writeText(token)
    .then(() => {
      copyBtn.textContent = "COPIED"; // Feedback to user
      setTimeout(() => {
        copyBtn.textContent = "COPY THE TOKEN"; // Reset text after 2s
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});
