$('.nav-btn').click(function(){
    // var onoff = true;
    // if(onoff){
    //     // console.log(onoff);
    //     $('.nav-img').attr("src","img/nav-open.png");
    //     onoff = false;
    // }else{
    //     // console.log(onoff);
    //     $('.nav-img').attr("src","img/nav-start.png");
    //     onoff = true;
    // }
    $('.nav-img').toggleClass('active');
    // $('.nav').toggle();
    if($('.nav-img').hasClass('active')){
        $('.nav').css("display","block");
    }else{
        $('.nav').css("display","none");
    }
})