$(function () {


  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    prevArrow: '<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-chevron-right next" aria-hidden="true"></i>',
  });

  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: ['facebook', 'twitter', 'linkedin', 'pinterest', 'download'],
    spinner: 'rotating-plane'
  });

  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 2000, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'

  });



});

var btn = document.querySelector('button');
var bell = document.querySelectorAll("i")[6];
btn.addEventListener("click", bgchange);

function bgchange() {

  if (btn.style.background == "red") {
    btn.style.background = "gray";
    btn.innerHTML = 'SUBSCRIBED';
  } else {
    btn.style.background = "red";
    btn.innerHTML = 'subscribe';

  }
};

// bell icon js ============



var char = [a,b,c]