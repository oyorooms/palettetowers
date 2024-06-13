$(function(){

  AOS.init({
    offset: 10,
    throttleDelay: 200,
    once: true
  });

  $(".hamburger__wrap").click(function () {
    $(this).toggleClass("open");
    $('.nav-p').toggleClass("active")
    $('body').toggleClass("lock")
  });

  $(".more-option").click(function () {
    var popupId = $(this).data('popup');
    $('#' + popupId).show();
  });


});
