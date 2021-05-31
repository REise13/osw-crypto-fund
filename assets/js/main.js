// Initialize feather icons
  feather.replace()

    
// Initialize MagnificPopup 
  $(document).ready(function(){
    $('.image-popup-vertical-fit').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true
      }
    });
  });

    
// Language switcher
  function toggleSwitcher() {
    var switcher = document.getElementById('language-switcher');
    if (switcher.style.left === "-190px") {
      switcher.style.left = "-0px";
    }
    else {
      switcher.style.left = "-190px";
    }
  };
