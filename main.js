const videoContainer = document.querySelectorAll("video");

const activeVideo = document.querySelector(".active-video video");

const closeActiveVideo = document.querySelector(".close-activeVideo");


videoContainer.forEach((video) => {
  video.addEventListener("click", () => {
    activeVideo.setAttribute("src", video.src);
    activeVideo.parentElement.style.display = "block";
  });
});

closeActiveVideo.addEventListener("click", (e) => {
  activeVideo.parentElement.style.display = "none";
});
