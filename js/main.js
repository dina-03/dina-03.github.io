let big = document.getElementsById("big");
let imgsrc = {
  1: "./img/ph-01.jpeg",
  2: "./img/ph-02.jpeg",
  3: "./img/ph-03.jpeg",
  4: "./img/ph-04.jpeg",
  5: "./img/ph-05.jpeg",
  6: "./img/ph-06.jpeg",
  7: "./img/ph-07.jpeg",
  8: "./img/ph-08.jpeg",
  9: "./img/ph-09.jpeg",
  10: "./img/ph-10.jpeg",
  11: "./img/ph-11.jpeg",
};
function imageSelect(target) {
  let img = new Image();
  img.src = imgsrc[target.dataset.key];
  img.onload = function () {
    big.src = img.src;
  }
};

document.body.addEventListener("click", function (event) {
  if (event.target.classList.contains("small")) {
    imageSelect(event.target);
  }
});
