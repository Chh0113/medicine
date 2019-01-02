document.addEventListener('DOMContentLoaded', function() {
	var caidan = document.querySelector('.caidan');
	var sub = document.querySelector('#sub');

		caidan.onmouseover = function(){
			sub.style.display = "block";
		}
		caidan.onmouseout = function(){
			sub.style.display = "none";
		}
		
		
		
		
		var s1 = new Swiper('.swiper-container', {
				autoplay: { //自动轮播+延时两秒
					delay:2000,
					disableOnInteraction:false
				},
				loop: true,//无缝回路轮播
				speed: 500,//切换速度
				navigation: {//上下按钮
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				pagination: {//焦点跟随
					el: '.swiper-pagination',
					clickable: true,//点击焦点跳到指定图片
					renderBullet: function(index, className) {
						return '<span class="' + className + '">' + (index + 1) + '</span>';//生成焦点数字
					}
				},
				mousewheel:true//滚动滑轮可以切图

			});
			
			var oBox=document.getElementById('swiper-container');
			
			oBox.onmouseover=function(){//鼠标经过停止
				s1.autoplay.stop();
			}
			
			oBox.onmouseout=function(){//鼠标经过离开
				s1.autoplay.start();
			}
			
			
			
			
			var list=document.querySelector('#stl');
			var page=document.querySelector('#page');
			var list1 = document.querySelector('#stl1');
			var list2 = document.querySelector('#stl2');
			var list3 = document.querySelector('#stl3');
			
			
			function creat(arr){
			var res=(location.search).slice(1);
				
			var id=res.split('=')[1];
			var res=arr.datalist.map(function(item){
			
		return `<li class="proitem"> 
                	<div class="pro_img">
                		<a href="" target="_blank" title="万艾可">
                			<img class="lazy" title="万艾可" width="140" height="140" src="${item.img}" style="display: inline;"></a>
                	</div> 
                    <div class="pro_info"> 
                        <p class="pro_name">
                        	<a href="" title="万艾可" target="_blank">${item.title}</a>
                        </p> 
                        <p class="pro_pric price_info prinfo_5974" prinfo="5974">￥${item.price}</p>
                    <div style="clear: both;"></div> 
                    </div> 
				<div style="clear: both;"></div> 
				</li>`;
	}).join('');
	
	list.innerHTML=res;
	list1.innerHTML = res;
	list2.innerHTML = res;
	list3.innerHTML = res;
	
						
				}




		
		//1.创建对象
//				var xhr=new XMLHttpRequest();
		var url='api/goodslist.php';
		var data=`page=1&qty=10&time=new Date()`;
		ajax('GET',url,data,function(str){
//			console.log(str);
			var arr=JSON.parse(str);
			console.log(arr);
				creat(arr);

		})


})