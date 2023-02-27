const accordion = document.querySelectorAll(".accordion-header");

accordion.forEach((trigger) =>
  trigger.addEventListener("click", toggleAccordion)
);

function toggleAccordion() {
  const items = document.querySelectorAll(".accordion-item");
  const thisItem = this.parentNode;

  items.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("active");
      return;
    }
    item.classList.remove("active");
  });
}


$("#first-cta").click(function() {
  $('html, body').animate({
      scrollTop: $("#section_4").offset().top
  }, 100);
});
$("#second-cta").click(function() {
  $('html, body').animate({
      scrollTop: $("#section_7").offset().top
  }, 100);
});