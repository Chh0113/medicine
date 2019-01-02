document.addEventListener('DOMContentLoaded', function() {
	var sitemap = document.querySelector('.sitemap');
	var sitemap1 = document.querySelector('#sit');
	var sitemaps = document.querySelector('#sitemaps');
	var sitemapx = document.querySelector('#sitemapx');
	var sitecur = document.querySelector('#sit1');	
	var sitemenu = document.querySelector('#sit2');
	var sceva = document.querySelector('#sceva');
	var secnav = document.querySelector('.secnav');
	var secnav1 = document.querySelector('.secnav1');
	var channel1 = document.querySelector('#channel1');
	var channel2 = document.querySelector('#channel2');
	var seon = document.querySelector('#seon');
	var seon1 = document.querySelector('#seon1');
	var list=document.querySelector('#mart_right_left');
//	var summry = list.getElementById("gsbtn");
//	var mart5 = document.querySelector(".mart5");
//	var tijiao = document.querySelector(".tijiao");
//	var buttom = document.querySelector(".button");
	var nwadd_bla = document.querySelector(".nwadd_bla");
	var box1 = document.querySelector(".box1");
	
	var htou = document.querySelector('#head_tou');
	var caidan = document.querySelector('.caidan');
	var emm = document.querySelector('#emm');
//	var s = document.querySelector('s');
	var sub = document.querySelector('#sub');
	var item = document.querySelector('.in-item');
	var sss = document.querySelector('#sortlist');
	var item1 = document.querySelector('#ii');
	var two = document.querySelector('.menu_sec');
	var third = document.querySelector("#innerDiv_345");
	var b = document.querySelector('b');
//	console.log(summry);


	var list = document.querySelector('#xuanran_neirong');	
	var rows = 0;
	var proflo = document.querySelector('#proflo');
	var but = document.querySelector('#mart20_right_bottom');
	var top=but.offsetTop;
	
//		buttom.onclick = function(){
//			nwadd_bla.style.display = "block";
//			box1.style.display = "block";
//		}
		
//		carscript();
	
		sitemap.onmousemove = function(){
			sitemaps.style.display="block";
			sitemapx.style.display="block";
			
		}
		sitemap.onmouseout = function(){
			sitemaps.style.display="none";
			sitemapx.style.display="none";
			
		}
		
		sitemap1.onmousemove = function(){			
			sitecur.style.display="block";
			sitemenu.style.display="block";
		}
		sitemap1.onmouseout = function(){
			sitecur.style.display="none";
			sitemenu.style.display="none";
		}
		
		secnav.onmousemove = function(){
			seon.style.borderBottomColor = "#FFFFFF";
			seon.style.borderTopColor = "transparent";
			seon.style.marginBottom = "2px";
			channel1.style.display = "block";
		}
		
		secnav.onmouseout = function(){
			seon.style.borderBottomColor = "transparent";
			seon.style.borderTopColor = "#FFFFFF";
			seon.style.marginBottom = "-2px";
			channel1.style.display = "none";
		}
		
		secnav1.onmousemove = function(){
			seon1.style.borderBottomColor = "#FFFFFF";
			seon1.style.borderTopColor = "transparent";
			seon1.style.marginBottom = "2px";
			channel2.style.display = "block";
		}
		
		secnav1.onmouseout = function(){
			seon1.style.borderBottomColor = "transparent";
			seon1.style.borderTopColor = "#FFFFFF";
			seon1.style.marginBottom = "-2px";
			channel2.style.display = "none";
		}
		

		htou.onmousemove = function(){
			caidan.style.display="block";
			emm.style.backgroundImage="url(../images/allgbg01.png)";
			
		}
		htou.onmouseout = function(){			
			caidan.style.display="none";
			emm.style.backgroundImage="url(../images/allgbg.png)";
			sub.style.display="none";
		}
		
//		window.onscroll=function(){
//					//获取滚动距离
//			var scrollTop=window.scrollY;
//			if(scrollTop>=top){
//				proflo.style.display='block';
//			}else{
//				proflo.style.display='none';
//			}
//		}
		
		
		
		var list1=document.querySelector('#mart_right_left');
//		var list1 = document.querySelector('#list2');
		var page=document.querySelector('#page');
		
		var detid=location.search.split('?')[1].split('=')[1];
//		console.log(list1);
		
		
		
		function detdata(arr){
		var	html =`<h1 data-id="${arr[0].id}"><s class="v7_rx"></s>${arr[0].title}</h1>
					<div id="price">
						<div class="leflable">会&nbsp;员&nbsp;价</div>
						<div class="flolef" id="">${arr[0].price}</div>
					</div>
					<div style="font-size: 14px; color: #f00;">右侧扫码关注“康德乐大药房”公众号即可领券，活动时间：2018.12.01-2018.12.31</div>
					
					<ul class="summary">			
						<li class="mar_pri">
							<div class="dt"> 通&nbsp;用&nbsp;名 ： </div>
							<div id="name" class="dd"> ${arr[0].name}</div>
							<div style="clear: both;"></div>
						</li>
						<li class="mar_pri">
							<div class="dt"> 厂&nbsp;&nbsp;&nbsp;&nbsp;家 ： </div>
							<div class="dd"> ${arr[0].arr}</div>
							<div style="clear: both;"></div>
						</li>      
						<li class="mar_pri">
							<div class="dt"> 批准文号 ： </div>
							<div class="dd"> ${arr[0].num}</div>
							<div style="clear: both;"></div>
						</li>
						<li class="speco">
							<div class="dt"> 规　　格 ： </div>
							<div class="dd" style="position:relative;">
							<div class="item selected"> 
							<a href="" class="cur" target="_self">${arr[0].bs}</a> 
							<b></b>
							</div>														
							</div>
						</li>			
						<li class="speco dptaocan" style="display:none;">
						    <div class="dt"> 优惠套餐 ： </div>
						    <div class="dd"></div>
						</li>
							<div style="clear: both;"></div>
					</ul>
					<ul class="summary summary1">
						<li class="speco">
							<div class="dt"> 附近门店 </div>
							<div class="dd">
							<div class="chocity1223 mart6">            	
							<span class="area_add" id="area">广州越秀店</span><b></b>            
							<div class="choallcity1223">
								
							<div style="clear: both;"></div>
							</div>
						
							<div style="clear: both;"></div>
							</div>
				  			<div style="clear: both;"></div>
				  			</div>			
							<div style="clear: both;"></div>
						</li>
						<li class="speco mart5">
							<div class="dt"> 数　　量  </div>
							<div class="dd">
							<div class="num_box">
							<input type="text" value="1" id="buy-num" class="addNumber" name="addNumber">
							<a href="" class="add_icon" id="add_icon" onclick="add"></a>
							<a href="" class="reduce_icon" id="reduce_icon" onclick=""></a>
							<div style="clear: both;"></div>
							</div>
							<div class="tijiao">
							<a class="button">提交需求</a>
							</div>
							<div class="forsale button"> <a id="addcart" onclick="carscript();">加入购物车	</a></div>
				  			<div style="clear: both;"></div>
			 				</div>
							<div style="clear: both;"></div>
						</li>
						<li class="speco mart10">
				  		<div class="dt">  </div>
				  		<div class="dd">
						本品为处方药，您成功预定后，展示药品的药店会根据处方审核结果主动与您联系。
												（如需协助请拨打 <span class="red">400-168-0606</span>）
						    <div style="clear: both;"></div>
				        </div>
						<div style="clear: both;"></div>
						</li>
						<li class="speco mart5">
						<div class="dt pinkred"> </div>
						<div class="dd samepro">
							<div class="support">        	
							<div class="labcon">
								<a href="" class="service"><em class="supicon"></em>正品保证</a>
								<a href="" class="service"><em class="supicon"></em>提供发票</a>
								<a href="" class="service"><em class="supicon"></em>隐私包装</a>
							<div style="clear: both;"></div>	
							</div>
							<div style="clear: both;"></div>
							</div>
						</div>
						<div style="clear: both;"></div>
						</li>
						<div style="clear: both;"></div>
					</ul>`;

			list1.innerHTML=html;
}	
					
		//1.创建对象
		//				var xhr=new XMLHttpRequest();
				var url='../api/detail.php';
				var data=`id=${detid}`;
				ajax('GET',url,data,function(str){
//					console.log(str);
					var arr=JSON.parse(str);
		//			var arr=arr0.list;
//					console.log(arr);
					detdata(arr);
				
//					creat(arr);


				
			var res=(location.search).slice(1);
			console.log(res);
			var id=res.split('=')[1];
//			var res=arr.datalist.map(function(item){
//			console.log(arr);
			 	console.log(id);

				$("#addcart").on("click",function(){
//				if( document.cookie ){
				console.log(666);
//				var theok=confirm('您确定删除该商品嘛？');
				var id=arr[0].id;
				
				var name = arr[0].name;
				var images = "1.jpg";
				var price = arr[0].price;
				var bs = arr[0].bs
				var qua = $(this).parent().prev().prev().children().eq(2).val();
				console.log(arr[0].id);
				console.log(images);
				console.log(arr[0].price);
				console.log(arr[0].bs);
				console.log(arr[0].qua);
				var url='../api/addcart.php';
				var data=`id=${id}&images=${images}&name=${name}&price=${price}&qua=${qua}&bs=${bs}`;
				ajax('GET',url,data,function(str){
					console.log(str);
					if( str == '插入成功' ){
//						var okse=confirm('已加入购物车');
					}else{
						var okse=confirm('加入失败');
					}
			})
		
		})	
			 		
		
//			}	
			
			
			
//		add	= function(){
//			input.value++:
//		}
			
		carscript = function(){
			nwadd_bla.style.display = "block";
			box1.style.display = "block";
		}	
//		carscript();

//}
		
})		
		

})