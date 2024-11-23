//Jquery
$("button").on("click", function () {
    $(this).closest(".faq").toggleClass("active");
});

//Vanilla JS
const toggle = document.querySelectorAll(".faq-toggle");

toggle.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  });
});