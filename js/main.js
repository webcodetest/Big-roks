$( document ).ready(function() {

    $("#burger").on( "click", function() {
      $(this).toggleClass("show");
      $(".mobile-menu").toggleClass("show");
      $(".overlay").toggleClass("show");
    });

    $(".mobile-menu__close").on( "click", function() {
      $("#burger").toggleClass("show");
      $(".mobile-menu").toggleClass("show");
      $(".overlay").toggleClass("show");
    });

    $(".overlay").on( "click", function() {
      $("#burger").toggleClass("show");
      $(".mobile-menu").toggleClass("show");
      $(".overlay").toggleClass("show");
    });

    $( ".tab-title" ).each(function(e) {
      $(this).on( "click", function() {
        let numCurrent = $(this).attr("data-val");
        $(".tab-title").removeClass("active");
        $(this).addClass("active");
        $(".services__text").removeClass("active");
        $(".services__image").removeClass("active");
        $(".services__image.image-" + numCurrent).addClass("active");
        $(".services__text.services__text-" + numCurrent).addClass("active");
      });
    });

    var reviews = new Swiper('.reviews-slider', {
      spaceBetween: 0,
      slidesPerView: 1,
      allowTouchMove: true,
      navigation: {
        nextEl: '.reviews-nav .slider-next',
        prevEl: '.reviews-nav .slider-prev',
      },
      pagination: {
        el: '.reviews-slider .swiper-pagination',
      },
    });

    var results = new Swiper('.results-slider', {
      spaceBetween: 200,
      slidesPerView: 1,
      allowTouchMove: true,
      navigation: {
        nextEl: '.results-nav .slider-next',
        prevEl: '.results-nav .slider-prev',
      },
      pagination: {
        el: '.results-slider .swiper-pagination',
      },
    });

    // document.getElementById("horizontal-scroller").addEventListener('wheel', function(event) {
    //   if (event.deltaMode == event.DOM_DELTA_PIXEL) {
    //     var modifier = 1;
    //     // иные режимы возможны в Firefox
    //   } else if (event.deltaMode == event.DOM_DELTA_LINE) {
    //     var modifier = parseInt(getComputedStyle(this).lineHeight);
    //   } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
    //     var modifier = this.clientHeight;
    //   }
    //   if (event.deltaY != 0) {
    //     // замена вертикальной прокрутки горизонтальной
    //     this.scrollLeft += modifier * event.deltaY;
    //     event.preventDefault();
    //   }
    // });

    $(window).scroll(function(event) {
      if($(window).scrollTop() > 115){
        $(".fixed-link-desktop").removeClass("hidden");
      }else{
        $(".fixed-link-desktop").addClass("hidden");
      }
      if($(".animate-block__row").length){
        var containerOffset = $(".animate-block__row").offset().top - $(window).scrollTop() - 100;
        var imageRow = $(".animate-block__images-row");
        
        if(containerOffset <= 0){
          if (event.deltaMode == event.DOM_DELTA_PIXEL) {
            var modifier = 1;
            // иные режимы возможны в Firefox
          } else if (event.deltaMode == event.DOM_DELTA_LINE) {
            var modifier = parseInt(getComputedStyle(imageRow).lineHeight);
          } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
            var modifier = imageRow.clientHeight;
          }
          $(".animate-block__image").css("transform", "translateX(" +  containerOffset + "px)");
        }
      }
      
    });


    $( ".animate-block__image img" ).each(function(e) {
      let imageWidth = $(".animate-block__right").width();
      $(this).width(imageWidth / 1.3);
      let imageHeight = $(this).height();
      $(".animate-block__left-item-content").height(imageHeight - 30);
    });

    $( ".post-content__nav a" ).each(function() {
      $( this ).click(function(e) {
        e.preventDefault();
        $( ".post-content__nav a" ).removeClass("active");
        $( this ).addClass("active");
        if($(window).width() < 575){
          $('html, body').animate({
            scrollTop: $($( this ).attr("href")).offset().top - 60
          }, 1000);
          return false;
        }else{
          $('html, body').animate({
            scrollTop: $($( this ).attr("href")).offset().top - 100
          }, 1000);
          return false;
        }
      });
    });

    $( ".post-content__content h2" ).each(function(index) {
      $(this).attr("id", "title-" + index );
    });
    $(window).scroll(function(event) {
      if($( ".post-content__content h2" ).length){
        $( ".post-content__content h2" ).each(function() {
          if($(this).offset().top - $(window).scrollTop() < 200 && $(this).offset().top - $(window).scrollTop() > 0){
            $( ".post-content__nav a" ).removeClass("active");
            $( ".post-content__nav a[href='#" + $(this).attr('id') + "']" ).addClass("active");
          }
        });
      }
    });

    $( ".forms-toggle .btn-1" ).each(function() {
      $(this).on( "click", function(e) {
        e.preventDefault();
        $( ".forms-toggle .btn-1" ).removeClass("active");
        $( this ).addClass("active");

        let targetForm = $(this).attr("data-val");

        $(".contact-forms__left .form-title").removeClass("active");
        $(".contact-forms__left .form-title." + targetForm).addClass("active");

        $(".contact-form").removeClass("active");
        $(".contact-form." + targetForm).addClass("active");

      });
    });

    AOS.init();
});