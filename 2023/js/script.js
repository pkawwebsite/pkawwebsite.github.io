(function($){
  window.onload = function(){
    $('.loading').css('opacity','0');
    $('body').css('overflow-y','auto');
    $('.carousel-caption').addClass("animate__animated animate__fadeIn");
    $('.navbar').addClass("animate__animated animate__fadeInDown");
    if($('.page-title').length){
      $('.page-title').addClass("animate__animated animate__fadeIn");
    }
    $('.main-module').addClass("animate__animated animate__fadeIn");
    setTimeout(function(){
      $('.loading').css('display','none');
    }, 1000);
  }



  $(document).ready(function(){
    $(document).scroll(function() {
      var scroH = $(document).scrollTop();
      if(scroH >500){
        $('#go-top-btn').css("right", "20px");
      }
      else {
        $('#go-top-btn').css("right", "-50px");
      }
//      if(scroH > 80){
//        $('.navbar').css("height","60px");
//        $('.nav-item a').css("font-size","15px");
//        $('.navbar-brand').css("height","40px");
//      }else {
//        $('.navbar').css("height","80px");
//        $('.nav-item a').css("font-size","16px");
//        $('.navbar-brand').css("height","60px");
//      }
      $('.navbar-collapse').collapse('hide');
    });

    $('.nav-link, .news-link, .dropdown-item').bind("click", function() {
      var headerHeight = $(".navbar").height();
      var target = $(this).attr("href"); //Get the target
      var scrollToPosition = window.innerHeight - headerHeight;
      var $this = $(this);
      var target_height = $this.css("height");
      if(target == "#" || target[0] != "#")
        return;
//      $('.main-module').each(function(){
//        if(!$(this).hasClass("d-none")){
//            $(this).addClass("animate__animated animate__fadeOut");
//            $temp = $(this)
//            setTimeout(function(){
//                $temp.addClass("d-none");
//            }, 1500);
//        }
//      });
      $('.show-panel').addClass("animate__animated animate__fadeOut");
      setTimeout(function(){
          $('.show-panel').addClass("d-none");
          $('.show-panel').removeClass("show-panel");
      }, 1000);
      setTimeout(function(){
        $(target).removeClass("d-none animate__fadeOut");
        $("#main-body").css("height",$(target).css("height"));
        $(target).addClass("animate__animated animate__fadeIn show-panel");
      }, 1000);

      $('html, body').animate({scrollTop: scrollToPosition }, 800);
    });

    $('.navbar').hover(function(){
//      if($(document).scrollTop() > 100){
//        $('.navbar').css("height","80px");
//        $('.nav-item a').css("font-size","16px");
//        $('.navbar-brand img').css("height","60px");
//      }
    }, function(){
//      if($(document).scrollTop() > 100){
//        $('.navbar').css("height","60px");
//        $('.nav-item a').css("font-size","15px");
//        $('.navbar-brand img').css("height","40px");
//      }
      $('.navbar-collapse').collapse('hide');
    });

    $('#go-top-btn').bind("click", function(e) {
      $('html, body').animate({scrollTop: 0}, 800);
      e.preventDefault();
    });

    $.prototype.tooltip = (function (tooltip) {
      return function (config) {
        try {
          return tooltip.call(this, config);
        } catch (ex) {
          if (ex instanceof TypeError && config === "destroy") {
            return tooltip.call(this, "dispose");
          }
        }
      };
    })($.prototype.tooltip);

    $.fn.shuffle = function() {
      var m = this.length, t, i;
      while (m) {
        i = Math.floor(Math.random() * m--);

        t = this[m];
        this[m] = this[i];
        this[i] = t;
      }
      return this;
    };

    var supportflag=false;
	$(window).on('scroll', function() {
      if($('#supporting-org').length){
        var supportcount = 0;
        var scrollTop = $(this).scrollTop();
        var topDistance = $('#supporting-org').offset().top;
        if (topDistance -window.innerHeight + 0.5*$('#supporting-org').outerHeight()<= scrollTop && supportflag == false) {
          supportflag=true;
          $('#supporting-org img').shuffle().each(function() {
            var $this = $(this)
            var t = setTimeout(function(){
              $this.addClass("animate__animated animate__fadeIn");
            }, supportcount * 500);
            supportcount++;
          });
        }
      }
    });

  });
})(jQuery);



