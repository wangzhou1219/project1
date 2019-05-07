var oinp=document.getElementById("inp");
oinp.onfocus=function(){oinp.placeholder=""}
oinp.onblur=function(){oinp.placeholder="请输入型号或者名称"};
var index=0;
//banner轮播图
var timer=null;
bannertime();
function bannertime(){
    timer=setInterval(function(){
        index++;
        if(index==2){
            index=0;  
            $(".imgs ul li").eq(index+1).fadeOut(1000)
            $(".imgs ul li").eq(index).fadeIn(1000);
        }else{
            $(".imgs ul li").eq(index-1).fadeOut(1000);
            $(".imgs ul li").eq(index).fadeIn(1000);
        }
        $(".imgs ol li").css("background-position","right 0");
        $(".imgs ol li").eq(index).css("background-position","0 0");
    },2000)
}

        $(".imgs ol li").click(function(){
            clearInterval(timer);
            let pindex= $(this).index();
            $(".imgs ol li").css("background-position","right 0");
            $(this).css("background-position","0 0");
            $(".imgs ul li").eq(1-pindex).fadeOut(1000)
            $(".imgs ul li").eq(pindex).fadeIn(1000);
        })
        $(".imgs ol li").mouseleave(function(){
            bannertime();
        })

//地图选项卡
var $citylist=$(".city ul li");
var $maplist=$(".map li");
var shoparr=["../image/shops/beijing.jpg","../image/shops/shenzhen.jpg","../image/shops/tianjin.jpg","../image/shops/chengdu.jpg","../image/shops/zhejiang.jpg","../image/shops/jiangsu.jpg","../image/shops/fujian.jpg","../image/shops/hainan.jpg","../image/shops/chongqing.jpg","../image/shops/hunan.jpg","../image/shops/hebei.jpg","../image/shops/jiangxi.jpg"]
var $shopimg=$(".shop img")
$citylist.mouseenter(function(){
    $citylist.removeClass("select");
    $(this).addClass("select");
    let cindex=$(this).index();
    $maplist.css("display","none");
    $maplist.eq(cindex).css("display","block");
    $shopimg.attr("src",shoparr[cindex]);
})
//取消placeholder
