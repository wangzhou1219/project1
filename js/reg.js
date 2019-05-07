cancelph();
function cancelph(){
	let str="";
$("input").focus(function(){
	str=$(this).attr("placeholder");
	$(this).attr("placeholder","")
})
$("input").blur(function(){
	$(this).attr("placeholder",str);
})
}
var imgarr=["../image/81.jpg","../image/82.jpg","../image/83.jpg","../image/84.jpg",
"../image/85.jpg","../image/86.jpg","../image/87.jpg","../image/88.jpg","../image/89.jpg","../image/90.jpg","../image/91.jpg","../image/92.jpg","../image/93.jpg","../image/94.jpg","../image/95.jpg","../image/96.jpg","../image/97.jpg","../image/98.jpg","../image/99.jpg"];
$("#next").click(function(){
	let count=rand(0,7);
	$("#numimg").attr("src",imgarr[count]);
})
$("#numimg").click(function(){
	let count=rand(0,7);
	$("#numimg").attr("src",imgarr[count]);
})

var re1=/^\d{11}$/;
var re2=/^\d{6}$/;
var re3=/^(?=.*\d)(?=.*[a-z]).{6,20}$/;
var flagarr=[];
$("#phone").blur(function(){
	let num=$(this).val();
	if(re1.test(num)){
		$("#phonere").html("手机号格式正确");
		$("#phonere").css("color","green");
		flagarr[0]=1;
	}else{
		$("#phonere").html("手机号格式错误");	
		$("#phonere").css("color","red");
		flagarr[0]=0;
	}	
})

$("#duanxin").blur(function(){
		let num=$(this).val();
	if(re2.test(num)){
		$("#duanxinre").html("短信格式正确");
		$("#duanxinre").css("color","green");
		flagarr[1]=1;
	}else{
		$("#duanxinre").html("短信格式错误");	
		$("#duanxinre").css("color","red");	
		flagarr[1]=0;
	}	
})

$("#mima1").blur(function(){	
			let num=$(this).val();
	if(re3.test(num)){
		$("#mima1re").html("密码格式正确");
		$("#mima1re").css("color","green");
		flagarr[2]=1;
	}else{
		$("#mima1re").html("密码格式错误");	
		$("#mima1re").css("color","red");	
		flagarr[2]=0;
	}	
})

$("#mima2").blur(function(){
	let num=$(this).val();
	let num2=$("#mima1").val();
	if(num==num2){
		$("#mima2re").html("密码一致");
		$("#mima2re").css("color","green");
		flagarr[3]=1;
	}else{
		$("#mima2re").html("两次密码不一致");	
		$("#mima2re").css("color","red");
		flagarr[3]=0;
	}	
})
$("#sub").click(function(){
	if(flagarr[0]*flagarr[1]*flagarr[2]*flagarr[3]){
		let userJson = {
			"phone" : phone.value,
			"pwd" : mima1.value
		}
		document.cookie = "user=" + JSON.stringify( userJson );
		location.href = "login.html";
	}else{
		if(flagarr[0]==0){
			$("#phonere").html("请输入正确的手机号");
		}
		if(flagarr[1]==0){
			$("#duanxinre").html("请输入正确的验证码");
		}
		if(flagarr[2]==0){
			$("#mima1re").html("请输入正确的密码格式");
		}
		if(flagarr[2]==0){
			$("#mima2re").html("请确认两次密码一致");
		}
	}
	return false;
})
