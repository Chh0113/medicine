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
//	console.log(two);


	var list=document.querySelector('#xuanran_neirong');
	var aLis=list.getElementsByTagName('li');
//	console.log(aLis);
//	var list1 = document.querySelector('#list2');
	var page=document.querySelector('#page');
//	console.log(page);
	var prev=document.querySelector('#prev');
	var next=document.querySelector('#next');
	
	var rows=0;
	
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
		
		
		
		item1.onclick = function(){
			two.style.display = "block";
			b.style.backgroundPosition = "-70px -70px";
		}
		two.onclick = function(){
			third.style.display = "block";
		}
		
		
		
		
		
		
		/*数据渲染*/
		
		
function creat(arr){
			//数据渲染函数封装
//			console.log(arr);
//	var html='';
	var res=arr.datalist.map(function(item){
		return `<li data-id="${item.id}">
					<div id="kuang">
						<img src="${item.urlimg}">
					</div>
					<div class="w">
						<p class="name"> 
							<a href="" target="_blank" title="泰勒宁 ">${item.title}&nbsp;
								<em style="display:none"></em>
							</a>&nbsp; 
						</p>
						<p class="pri"> 
							<strong class="price_info prinfo_7092" prinfo="7092">${item.price}</strong>
						</p>
					</div>
					<div id="way">
						<span class="sta">在售 </span>
						<a href="" target="_blank" class="detlink">查看详情</a>
						<a id="onlinelist" href="" class="hovlink">在线咨询</a>
					</div>
				</li>`;
	}).join('');
	
	list.innerHTML=res;
	
	
	
	
	
//	var arry = [];
//	for(var i=0;i<aLis.length;i++){
//		arry.push(aLis[i].innerHTML);
//	}
//	
//	console.log(arry);
	
//	arry.sort(function(a,b){
//		return a-b;//升序
//	});
	
//	console.log(arr1);
	
//	for(var i=0;i<arr.length;i++){
//		aLis[i].innerHTML=arr[i];
//	}
//	
	
	
	
	
	
	
	for(var i=0;i<aLis.length;i++){
        //aLis[i].index=i;
//      console.log(aLis[i]);
        aLis[i].onclick=function(){
        	console.log(666);
            console.log(this.getAttribute('id'));
            location.href='xiangqing.html?id='+this.getAttribute('id');
        }
    }
}


                  
                 

		
		//1.创建对象
//				var xhr=new XMLHttpRequest();
		var url='../api/goodslist.php';
		var data=`page=1&qty=12&time=new Date()`;
		
		ajax('GET',url,data,function(str){
//			console.log(str);
			var arr=JSON.parse(str);
//			console.log(arr);
				creat(arr);
			//根据数据总长度，创建页码
				var num=Math.ceil(arr.total/arr.qty);
				rows=num;//总页数
				
				for(var i=0;i<num;i++){
					page.innerHTML+=`<span>${i+1}</span>`;
				}
				
				page.children[0].className='active';			
//			console.log(arr);
			
			
			
			
		
		
//			function scoreSort(cellnum){
//					//创建真数组，借助真数组方法
//					console.log(arr);
//					var res=[];
//					for (let i in arr) {
//					    res.push(arr[i]); //属性
//					    //arr.push(obj[i]); //值
//					    var arr2=res[1];
//					}
//					console.log(arr2);
//					
//					arr.sort(function(a,b){
//						//tr tr[i].cells[2]
//						var n1=toNum(a.cells[cellnum]);
//						var n2=toNum(b.cells[cellnum]);
//						return n2-n1;//降序
//					});
//					
//					//把排好序的数组，倒回到tbody里面
//					for(var i=0;i<arr.length;i++){
//						tbody.appendChild(arr[i]);//替换
//					}
//					
//					addid();//排序好就加上排名
//					
//				}
		
		
		
		
		
		
		
		
		
		})
			
				
		
		
		
		//5.利用事件委托绑定事件
		var now=1;				
		
		page.onclick=function(ev){
			var ev = ev || window.event;
			//点哪个是哪个
			if(ev.target.tagName.toLowerCase() == 'span'){
				//ev.target  等同  this
				now=ev.target.innerText;//获取页码
//						console.log(num);
				//设置参数
				var url='../api/goodslist.php';
				var data=`page=${now}&qty=12&time=new Date()`;
				ajax('GET',url,data,function(str){
//							console.log(str);
					var arr=JSON.parse(str);
						creat(arr);//渲染数据
						
						//清空
						for(var i=0;i<page.children.length;i++){
							page.children[i].className='';
						}
						page.children[now-1].className='active';
						
//								update();
					
				})
						
			}
			
		}
		
		
		//6.至少有两页，才出现，如果已经是第一页：prev隐藏；如果是最后一页了，next隐藏
		
		prev.onclick=function(){
			now--;
			if(now<=1){
				now=1;//最小第一页
			}
			
//					update();
			
			var xhr=new XMLHttpRequest();
			var url=`../api/goodslist.php?page=${now}&qty=12&time=new Date()`;
			xhr.open('GET',url,true);
			xhr.send();
			xhr.onreadystatechange=function(){
					if(xhr.readyState==4 && xhr.status==200){
						var str=xhr.responseText;
						var arr=JSON.parse(str);
						creat(arr);//渲染数据
						
						//清空
						for(var i=0;i<page.children.length;i++){
							page.children[i].className='';
						}
						page.children[now-1].className='active';
					}
				}
		}
		
		
		next.onclick=function(){
			now++;
			if(now>=rows){
				now=rows;//最大就是最后一页
				
			}	
//					update();
			var xhr=new XMLHttpRequest();
			var url=`../api/goodslist.php?page=${now}&qty=12&time=new Date()`;
			xhr.open('GET',url,true);
			xhr.send();
			xhr.onreadystatechange=function(){
					if(xhr.readyState==4 && xhr.status==200){
						var str=xhr.responseText;
						var arr=JSON.parse(str);
						creat(arr);//渲染数据
						
						//清空
						for(var i=0;i<page.children.length;i++){
							page.children[i].className='';
						}
						page.children[now-1].className='active';
					}
				}
		}
				
		
	//价格排序
	var pagesort=0;
	Pricerank.onclick=function(){
		pagesort++;
		if(pagesort>=3){
			pagesort=3;
		}
		var url='../api/alllist.php';
		var data=`qty=12&page=${pagesort}`;
		ajax('GET',url,data,function(str){
			var arr0=JSON.parse(str);
			var arr=arr0.sortdesc;
			console.log(arr0);
//			creat(arr);
			
			//最大那一页的点击
//			ListContentUl.onclick=function(ev){
//			var ev = ev || window.event;
//			if( ev.target.className=='last' ){
//	//			console.log(1111);
//				var chis=pageview.querySelectorAll('a');
//				console.log(chis);
//				for( var i=0;i<chis.length;i++ ){
//					if( chis[i].className=='pageactive' ){
//						now=i;
//					}
//				}
//				now++;
//				if( now>=2 ){
//					now=2;
//				}
//				console.log(now);
//				
//				for( var i=0;i<chis.length;i++ ){
//					chis[i].className='';
//				}
//				
//				chis[now].className='pageactive';
//				
//				var url='../api/alllist.php';
//				var data=`qty=12&page=${now+1}`;
//				ajax('GET',url,data,function(str){
//					var arr0=JSON.parse(str);
//					var arr=arr0.sortdesc;
//					console.log(arr);
//					cearce(arr);
//				})
//			}
//		}
		//分页点击
//		var now= 0;
//		pageview.onclick=function(ev){
//			var ev= ev || window.event;
//			if( ev.target.tagName.toLowerCase()=='a' ){
//				var pagenum=ev.target.innerText;
//	//			console.log(pagenum);
//				var url='../api/alllist.php';
//				var data=`qty=12&page=${pagenum}`;
//				ajax('GET',url,data,function(str){
//	//				console.log(str);
//					var arr0=JSON.parse(str);
//					var arr=arr0.sortdesc;
//	//				console.log(arr);
//					cearce(arr);
//					var chis=pageview.querySelectorAll('a');
//					console.log(chis);
//					for( var i=0;i<chis.length;i++ ){
//						chis[i].className='';
//					}
//					chis[pagenum-1].className='pageactive';
//	//				now=pagenum;
//				})
//			}
//			
//			//点击下一页切换
//			if( ev.target.className=='next' ){
//				
//				var chis=pageview.querySelectorAll('a');
//				console.log(chis);
//				for( var i=0;i<chis.length;i++ ){
//					if( chis[i].className=='pageactive' ){
//						now=i;
//					}
//				}
//				now++;
//				if( now>=2 ){
//					now=2;
//				}
//				console.log(now);
//				
//				for( var i=0;i<chis.length;i++ ){
//					chis[i].className='';
//				}
//				
//				chis[now].className='pageactive';
//				
//				var url='../api/alllist.php';
//				var data=`qty=8&page=${now+1}`;
//				ajax('GET',url,data,function(str){
//					var arr0=JSON.parse(str);
//					var arr=arr0.sortdesc;
//					console.log(arr);
//					cearce(arr);
//					litteimg();
//				})
//			}
//			//点击上一页切换
//			if( ev.target.className=='prev' ){
//		
//				var chis=pageview.querySelectorAll('a');
//				console.log(chis);
//				for( var i=0;i<chis.length;i++ ){
//					if( chis[i].className=='pageactive' ){
//						now=i;
//					}
//				}
//				now--;
//				if( now<=0 ){
//					now=0;
//				}
//				console.log(now);
//				
//				for( var i=0;i<chis.length;i++ ){
//					chis[i].className='';
//				}
//				
//				chis[now].className='pageactive';
//				
//				var url='../api/alllist.php';
//				var data=`qty=12&page=${now+1}`;
//				ajax('GET',url,data,function(str){
//					var arr0=JSON.parse(str);
//					var arr=arr0.sortdesc;
//					console.log(arr);
//					cearce(arr);
//					litteimg();
//				})
//			}
//		}
		})
	}





})