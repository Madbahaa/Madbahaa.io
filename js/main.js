$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

$('#cate1').magnificPopup({
    items: [
      {
        src: 'images/winksun/mar/52.jpg'
      },
      {
        src: 'images/winksun/mar/53.jpg'
      },
      {
        src: 'images/winksun/mar/51.jpg'
      },
      {
        src: 'images/winksun/mar/54.jpg'
      },
      {
        src: 'images/winksun/mar/55.jpg'
      },
      {
        src: 'images/winksun/mar/56.jpg'
      },
      {
        src: 'images/winksun/mar/57.jpg'
      },
      {
        src: 'images/winksun/mar/58.jpg'
      },
      {
        src: 'images/winksun/mar/59.jpg'
      },
      {
        src: 'images/winksun/mar/60.jpg'
      },
      {
        src: 'images/winksun/mar/61.jpg'
      },
      {
        src: 'images/winksun/mar/62.jpg'
      },


    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
});

$('#cate2').magnificPopup({
    items: [
      {
        src: 'images/winksun/anif/1.jpg'
      },
      {
        src: 'images/winksun/anif/2.jpg'
      },
      {
        src: 'images/winksun/anif/3.jpg'
      },
      {
        src: 'images/winksun/anif/4.jpg'
      },
      {
        src: 'images/winksun/anif/5.jpg'
      },
      {
        src: 'images/winksun/anif/6.jpg'
      },
      {
        src: 'images/winksun/anif/7.jpg'
      },

    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
});

$('#cate3').magnificPopup({
    items: [
      {
        src: 'images/winksun/baptem/45.jpg'
      },
      {
        src: 'images/winksun/baptem/46.jpg'
      },
      {
        src: 'images/winksun/baptem/47.jpg'
      },
      {
        src: 'images/winksun/baptem/48.jpg'
      },
      {
        src: 'images/winksun/baptem/49.jpg'
      },
      {
        src: 'images/winksun/baptem/50.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
});

$('#cate4').magnificPopup({
    items: [
      {
        src: 'images/winksun/art/20.jpg'
      },
      {
        src: 'images/winksun/art/21.jpg'
      },
      {
        src: 'images/winksun/art/22.jpg'
      },
      {
        src: 'images/winksun/art/23.jpg'
      },
      {
        src: 'images/winksun/art/24.jpg'
      },
      {
        src: 'images/winksun/art/25.jpg'
      },
      {
        src: 'images/winksun/art/26.jpg'
      },
      {
        src: 'images/winksun/art/27.jpg'
      },
      {
        src: 'images/winksun/art/28.jpg'
      },
      {
        src: 'images/winksun/art/29.jpg'
      },
      {
        src: 'images/winksun/art/30.jpg'
      },
      {
        src: 'images/winksun/art/31.jpg'
      },
      {
        src: 'images/winksun/art/32.jpg'
      },
      {
        src: 'images/winksun/art/33.jpg'
      },
      {
        src: 'images/winksun/art/34.jpg'
      },
      {
        src: 'images/winksun/art/35.jpg'
      },
      {
        src: 'images/winksun/art/36.jpg'
      },
      {
        src: 'images/winksun/art/37.jpg'
      },
      {
        src: 'images/winksun/art/38.jpg'
      },
      {
        src: 'images/winksun/art/39.jpg'
      },
      {
        src: 'images/winksun/art/40.jpg'
      },
      {
        src: 'images/winksun/art/42.jpg'
      },
      {
        src: 'images/winksun/art/41.jpg'
      },
      {
        src: 'images/winksun/art/43.jpg'
      },
      {
        src: 'images/winksun/art/44.jpg'
      },


    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
});

$('#cate5').magnificPopup({
    items: [
      {
        src: 'images/winksun/arch/8.jpg'
      },
      {
        src: 'images/winksun/arch/9.jpg'
      },
      {
        src: 'images/winksun/arch/10.jpg'
      },
      {
        src: 'images/winksun/arch/11.jpg'
      },
      {
        src: 'images/winksun/arch/12.jpg'
      },
      {
        src: 'images/winksun/arch/13.jpg'
      },
      {
        src: 'images/winksun/arch/14.jpg'
      },
      {
        src: 'images/winksun/arch/15.jpg'
      },
      {
        src: 'images/winksun/arch/16.jpg'
      },
      {
        src: 'images/winksun/arch/17.jpg'
      },
      {
        src: 'images/winksun/arch/18.jpg'
      },
      {
        src: 'images/winksun/arch/19.jpg'
      },

    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
});

$('#vid').magnificPopup({
    items: [

      {
          src: 'videos/winksun/2.mp4',
          type: 'iframe'
      },
      {
          src: 'videos/winksun/3.mp4',
          type: 'iframe'
      },
      
      {
          src: 'videos/winksun/5.mp4',
          type: 'iframe'
      },
      {
          src: 'videos/winksun/01.mp4',
          type: 'iframe'
      },


    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
});
