const button = document.getElementById("more-button");
const moreText = document.getElementById("more-text");

button.addEventListener("click", () => {
  moreText.style.display = "block";
  button.style.display = "none";
});