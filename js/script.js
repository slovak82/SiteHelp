$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// $(".header_link").click(function () {
//     $('.header__burger,.header__menu').removeClass("active");
//     $('body').removeClass('lock');
// });

// $(document).ready(function () {
//     $('#girl').click(function (event) {
//         $('.header__burger,.header__menu').toggleClass('active');
//         $('body').toggleClass('lock');
//     });
// });


// var slideNow = 1;
// var slideCount = $('#slidewrapper').children().length;
// var slideInterval = 3000;
// var navBtnId = 0;
// var translateWidth = 0;

// $(document).ready(function () {
//     var switchInterval = setInterval(nextSlide, slideInterval);

//     $('#viewport').hover(function () {
//         clearInterval(switchInterval);
//     }, function () {
//         switchInterval = setInterval(nextSlide, slideInterval);
//     });

//     $('#next-btn').click(function () {
//         nextSlide();
//     });

//     $('#prev-btn').click(function () {
//         prevSlide();
//     });

//     $('.slide-nav-btn').click(function () {
//         navBtnId = $(this).index();

//         if (navBtnId + 1 != slideNow) {
//             translateWidth = -$('#viewport').width() * (navBtnId);
//             $('#slidewrapper').css({
//                 'transform': 'translate(' + translateWidth + 'px, 0)',
//                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//             });
//             slideNow = navBtnId + 1;
//         }
//     });
// });


// function nextSlide() {
//     if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
//         $('#slidewrapper').css('transform', 'translate(0, 0)');
//         slideNow = 1;
//     } else {
//         translateWidth = -$('#viewport').width() * (slideNow);
//         $('#slidewrapper').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)',
//             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//         });
//         slideNow++;
//     }
// }

// function prevSlide() {
//     if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
//         translateWidth = -$('#viewport').width() * (slideCount - 1);
//         $('#slidewrapper').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)',
//             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//         });
//         slideNow = slideCount;
//     } else {
//         translateWidth = -$('#viewport').width() * (slideNow - 2);
//         $('#slidewrapper').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)',
//             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//         });
//         slideNow--;
//     }
// }




// ------------------------

$(document).ready(function () {
    $('.spoiler-body').hide();
    $('.spoiler-title').click(function () {
        $(this).next().toggle()
    });
});

// function viewDiv() {
//     document.getElementById("div1").style.display = "block";
// };
// function viewDiv() {
//     document.getElementsByClassName("check1").style.display = "block";
// };

let scr_w = screen.width;
let scr_h = screen.height;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    var i;
    var slides;
    var dots;


    if (scr_w < 724) {
        slides = document.getElementsByClassName("mySlides");
        dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    else if (scr_w > 724) {

        slides = document.getElementsByClassName("mySlidesimba");
        dots = document.getElementsByClassName("dotimba");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}
var slideIndex = 1;
showSlides(slideIndex);
// ---------------------

// function showSlides_desktop(n) {
// var i;
// var slides = 4;
// var dots = 4
// if (n > slides.length) { slideIndex = 1 }
// if (n < 1) { slideIndex = slides.length }
// for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
// }
// for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
// }
// slides[slideIndex - 1].style.display = "block";
// dots[slideIndex - 1].className += " active";
// }
// let ScreenWidth = screen.width;


// if (ScreenWidth > 726) {


// }






// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 4000); // Change image every 2 seconds
// }