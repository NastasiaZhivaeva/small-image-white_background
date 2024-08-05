$(document).ready(function(){
  $('.slick-container').slick({
      dots: true,
      swipe: true,
      infinite: false,
      accessibility: true,
      cssEase: 'ease',
      adaptiveHeight: true,
      customPaging: function(slider, i) {
          return '<button class="slick-dot"></button>';
      },
      appendDots: $('.slick-dots'),
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next')
  });

  function adjustDotSpacing() {
      var dots = $('.slick-dots li');
      dots.each(function() {
          var button = $(this).find('button');
          if ($(this).hasClass('slick-active')) {
              button.css({
                  'width': '48px',
                  'background-color': 'var( --secondary-neutral)'
              });
          } else {
              button.css({
                  'width': '8px',
                  'background-color': 'var(  --neutral-inactive)'
              });
          }
      });

      dots.css('margin', '0 4px');
      $('.slick-dots li.slick-active').css('margin', '0 4px');
  }

  $('.slick-container').on('swipe', function(event, slick, direction){
      adjustDotSpacing();
  });
  $('.slick-prev, .slick-next').on('click', function() {
      adjustDotSpacing();
  });

  adjustDotSpacing();
});
