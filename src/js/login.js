document.addEventListener('DOMContentLoaded', function() {
	//1.找节点
	var username = document.querySelector('#name');
	var usninf = document.querySelector('#usninf');
	var usninf1 = document.querySelector('#usninf1');
	var isok = false;
	var btn = document.querySelector('#login1'); //name top 不能用作id名
	var psw = document.querySelector('#password');

	btn.onclick = function() {
		var val1 = username.value.trim();
		var val2 = psw.value.trim();
		if(val1 && val2) {
			//非空
			var url = '../api/login.php';
			var data = `username=${val1}&psw=${val2}&time=${new Date()}`;
			ajax('GET', url, data, function(str) {
				console.log(str);
				if(str=='yes'){
					location.href = '../main.html';
				}else {
			alert('登录失败');
		}
			});
		}					
		 
		
//					alert('登录失败');
	}

});