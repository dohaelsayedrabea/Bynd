(function($) {
    "use strict";
    /*
  < !-- ============================================================== -->
  < !--Loading js -- >
  < !-- ============================================================== -->
*/
    $(window).on('load', function() {
        setTimeout(function() { // allowing 3 secs to fade out loader
            $('.screen').fadeOut('slow');
        }, 3500);
    });
    /*
      < !-- ============================================================== -->
      < !--scroll to top -- >
      < !-- ============================================================== -->
    */
    var offSetTop = 100;
    var $scrollToTopButton = $('.scrollToTop');
    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > offSetTop) {
            $scrollToTopButton.fadeIn();
        } else {
            $scrollToTopButton.fadeOut();
        }
    });

    //Click event to scroll to top
    $scrollToTopButton.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    document.addEventListener("mousemove", function(event) {
        const x = event.pageX - 10;
        const y = event.pageY - 10;
        const cursor = document.querySelector("#cursor");
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
    });

    $('.bannerSection').on("mouseover", function() {
        $('#cursor').css({ 'transform': 'scale(1)' });
        $('#cursor').css({ 'display': 'flex' });
        $('.cursorSpecific').addClass('show');
    });

    $('.bannerSection').on("mouseleave", function() {
        $('#cursor').css({ 'display': 'none' });
        $('.cursorSpecific').removeClass('show');
    });

})(jQuery);




/*
    < !-- ============================================================== -->
    < !--Header -- >
    < !-- ============================================================== -->
  */
var $menuTrigger = $('.js-menuToggle');
var $topNav = $('.js-topPushNav');
var $openLevel = $('.js-openLevel');
var $closeLevel = $('.js-closeLevel');
var $closeLevelTop = $('.js-closeLevelTop');
var $navLevel = $('.js-pushNavLevel');

function openPushNav() {
    $topNav.addClass('isOpen');
    $('body').addClass('pushNavIsOpen');
}

function closePushNav() {
    $topNav.removeClass('isOpen');
    $openLevel.siblings().removeClass('isOpen');
    $('body').removeClass('pushNavIsOpen');
}

$menuTrigger.on('click touchstart', function(e) {
    e.preventDefault();
    if ($topNav.hasClass('isOpen')) {
        closePushNav();
    } else {
        openPushNav();
    }
});

$openLevel.on('click touchstart', function() {
    $(this).next($navLevel).addClass('isOpen');
});

$closeLevel.on('click touchstart', function() {
    $(this).closest($navLevel).removeClass('isOpen');
});

$closeLevelTop.on('click touchstart', function() {
    closePushNav();
});

$('.screen').click(function() {
    closePushNav();
});
/*
    < !-- ============================================================== -->
    < !--cursor -- >
    < !-- ============================================================== -->
  */
const $bigBall = document.querySelector('.cursor__ball--big');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener('mouseenter', onMouseHover);
}

// Move the cursor
function onMouseMove(e) {
    TweenMax.to($bigBall, .4, {
        x: e.pageX - 15,
        y: e.pageY - 15
    })
}

// Hover an element
function onMouseHover() {
    TweenMax.to($bigBall, .3, {
        scale: 1
    })
}

/*
  < !-- ============================================================== -->
  < !--typeScript js -- >
  < !-- ============================================================== -->
*/

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('build paltform')
    .pauseFor(2500)
    .deleteAll()
    .typeString('mobile app')
    .pauseFor(2500)
    .deleteAll()
    .typeString('build paltform')
    .pauseFor(2500)
    .start();