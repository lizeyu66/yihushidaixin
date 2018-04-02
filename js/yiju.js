// 首页
{
    $(".icon_p").each(function(index,ele){
        $(this).mouseenter(function(){
            $(".icons").eq(index).show();
            $(".iconss").eq(index).show();

        })
        $(this).mouseleave(function(){
            $(".icons").eq(index).hide();
            $(".iconss").eq(index).hide();

        })
    })

        $(".alzs_tuk_jiantou").click(function(){
            $(".alzs_tuk_jiantou").addClass("active").siblings(".active").removeClass("active");
            $(".alzs_tuk_tu1").hide();
            $(".alzs_tuk_tu2").show();
        })
    $(".alzs_tuk_jiantou1").click(function(){
        $(".alzs_tuk_jiantou1").addClass("active").siblings(".active").removeClass("active");
        $(".alzs_tuk_tu1").show();
        $(".alzs_tuk_tu2").hide();
    })
}
//产品介绍
{
    $(".choices").each(function(index,ele){
        $(this).mouseenter(function(){
            $(this).addClass("active").siblings(".active").removeClass("active");
            $(".chanpin1").eq(index).addClass("active1").siblings(".active1").removeClass("active1");;
        })

    })
}
{
    let chanpin=document.querySelectorAll(".chanpin1");
    let choice=document.querySelectorAll(".choices");
    let next=document.querySelector(".next1");
    let prev=document.querySelector(".prev1");

    let n=0;
    function move(){
        n++;
        if(n===chanpin.length){
            n=0;
        }
        if(n<0){
            n=chanpin.length-1;
        }
        for(let i=0;i<chanpin.length;i++){
            chanpin[i].classList.remove("active1");
            choice[i].classList.remove("active");
        }
        choice[n].classList.add("active");
        chanpin[n].classList.add("active1");
    }

    next.onclick=function(){
        move();
    }
    prev.onclick=function(){
        n-=2;
        move();
    }

}
//案例展示
{
    $(".choices2").each(function(index,ele){
        $(this).mouseenter(function(){
            $(this).addClass("actives").siblings(".actives").removeClass("actives");
            $(".chanpin2").eq(index).addClass("active2").siblings(".active2").removeClass("active2");;
        })

    })
    let chanpins=document.querySelectorAll(".chanpin2");
    let choices=document.querySelectorAll(".choices2");
    let nexts=document.querySelector(".nexts");
    let prevs=document.querySelector(".prevs");

    let n=0;
    function move(){
        n++;
        if(n===chanpins.length){
            n=0;
        }
        if(n<0){
            n=chanpins.length-1;
        }
        for(let i=0;i<chanpin.length;i++){
            chanpins[i].classList.remove("active2");
            choices[i].classList.remove("actives");
        }
        choices[n].classList.add("actives");
        chanpins[n].classList.add("active2");
    }

    nexts.onclick=function(){
        move();
    }
    prevs.onclick=function(){
        n-=2;
        move();
    }

}