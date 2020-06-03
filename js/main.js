$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.counter').countUp({
    
      'time': 2000,
    
      'delay': 10
    
    });
    
// function activeMenu(){
//     var tagLi= document.getElementsByTagName("li");
//    $(tagLi).toggleClass("active");
// }
var header = document.getElementById("menu");
var tagLi = header.getElementsByTagName("li");
console.log(tagLi);
for(var i=0;i<tagLi.length;i++){
    tagLi[i].addEventListener("click",function(){
        var current =document.getElementsByClassName("active");
        current[0].className=current[0].className.replace("active","");
        this.className +="active";
    })
}
// backtotop
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