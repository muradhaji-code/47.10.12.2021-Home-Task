$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    margin: 15,
    dots: false,
    items: 1,
    responsive: {
      480: {
        items: 2,
      },
      768: {
        items: 4,
      },
      992: {
        items: 6,
      },
    },
  });
});
