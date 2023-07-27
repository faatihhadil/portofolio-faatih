$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 450){
            $('#header').addClass("sticky");
        }else{
            $('#header').removeClass("sticky");
        }
    });
   
})

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 450){
            $('#footer').addClass("sticky");
        }else{
            $('#footer').removeClass("sticky");
        }
    });
   
})
