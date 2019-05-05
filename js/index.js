var oinp=document.getElementById("inp");
oinp.onfocus=function(){
    oinp.placeholder="";
}
oinp.onblur=function(){
    oinp.placeholder="请输入型号或者名称";
}
