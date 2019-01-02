document.addEventListener('DOMContentLoaded', function() {
	var name = document.querySelector('.name');
	var usninf = document.querySelector('#usninf');
	var usninf1 = document.querySelector('#usninf1');
	var usninf2 = document.querySelector('#usninf2');
	var usninf3 = document.querySelector('#usninf3');
	var isok = false;
	var btn = document.querySelector('.xiayibu'); //name top 不能用作id名
	var psw = document.querySelector('.password2');
//	var psw1 = document.querySelector('.password_box2');
	//验证用户名是否存在：不存在才能注册
	name.onblur = function() {
		var val = name.value.trim(); //失去焦点的时候拿到表单数据

		//发送请求
		var url = '../api/checkname.php';
		var data = `name=${val}&time=${new Date()}`;
		ajax('GET', url, data, function(str) { //这个形参会接收成功得到的数据
			console.log(str); //
			if(str == '0') { //已存在
				usninf.innerHTML = '用户名不可用';
				usninf.style.color = 'red';
			} else {
				//不存在
				usninf.innerHTML = '用户名可用';
				usninf.style.color = 'green';
				isok = true;
			}
		});
	}

	//注册功能
	btn.onclick = function() {
		if(isok) {
			//可以注册的用户名
			var val1 = name.value.trim();
			var val2 = psw.value.trim();
//			var val3 = psw1.value.trim();
			//发送请求
			var url = '../api/reg.php';
			var data = `name=${val1}&psw=${val2}&time=${new Date()}`;
			ajax('GET', url, data, function(str) {
				console.log(str);
				if(str == 'yes') { //成功注册跳转到登陆页面
					console.log(66);
					location.href = 'login.html';
				}else{
					alert('注册失败');

				}
			});
		}
	}


});