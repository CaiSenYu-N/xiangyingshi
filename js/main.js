$('.nav-btn').click(function(){
    $('.nav-img').toggleClass('active');
    // $('.nav').toggle();
    if($('.nav-img').hasClass('active')){
        $('.nav').css("display","block");
    }else{
        $('.nav').css("display","none");
    }
})
// window.onresize=function(){
//     $('.header-center').css('width','100%');
//     $('.nav').css('display','block');
// }