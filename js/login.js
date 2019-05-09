var farr=[];
$("#uphone").blur(function(){
	let num=$(this).val();
	if(re1.test(num)){
		$("#uphonere").html("");
		$("#uphonere").css("color","green");
		farr[0]=1;
	}else{
		$("#uphonere").html("手机号格式错误");	
		$("#uphonere").css("color","red");
		farr[0]=0;
	}	
})
$("#upwd").blur(function(){
	let num=$(this).val();
	if(re3.test(num)){
		$("#upwdre").html("");
		$("#upwdre").css("color","green");
		farr[1]=1;
	}else{
		$("#upwdre").html("密码格式错误");	
		$("#upwdre").css("color","red");
		farr[1]=0;
	}	
})
let str = document.cookie;
let arr = str.split("; ");
let userTxt = "";
for( let i = 0 ; i  < arr.length ; i++ ){
			let item = arr[i].split("=");
			if( item[0] == "user" ){
				userTxt = item[1];
			}
		}
let userJson = JSON.parse( userTxt );
$("#but").click(function(){
	if(farr[0]*farr[1]){
		if(uphone.value == userJson.phone && upwd.value == userJson.pwd){
			alert("登录成功");
			location.href = `index.html?userphone=${userJson.phone}`;			
		}else{
			alert("手机号或密码不正确,请重新输入");
			location.href = "login.html";
		}
	}else{
		if(farr[0]==0){
			$("#uphonere").html("请输入正确的手机号");	
		}
		if(farr[1]==0){
			$("#upwdre").html("请输入正确的密码格式");	
		}
	}
	return false;
	
})
