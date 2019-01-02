document.addEventListener('DOMContentLoaded', function() {
	var list = document.querySelector('.nwc_item');
	function creat(arr){
			//数据渲染函数封装
	var res=arr.datalist.map(function(item){
		return `<ul id="${item.id}" style="border-bottom: #dcdcdc 1px solid;">
				          <li class="nwcwid01" style="width: 50px;">
				            <input onclick="alltotal();" type="checkbox" class="all" name="checkItem" value="444038">          
				          </li>
				          <li class="nwcwid02" style="text-align: left;width: 180px;">
				          	<a href="" target="_blank">
				          		<img style="width: 80px;margin-top: 2.5px;" src="../images/${item.images}" alt="急支糖浆">
				          	</a>
				          </li>
				          <li class="nwcwid03" style="width: 240px;text-align: left !important;">
				          	<a href="" title="急支糖浆" target="_blank" class="f6">${item.name}</a><br>
				          		<em class="cgui_ge">${item.bs}</em>
				          </li>
				        
				          <li class="nwcwid04 nwprif" style="width: 130px;margin-top: 30px;display: block;"><font id="shopprice444038">${item.price}</font></li>
				          <li class="nwcwid04" style="width: 130px;">
				            <div  id="shuju" class="quantity" style="margin-top: 30px;"> 
				            	<a href="javascript:;" class="decrement"></a>
				              <input name="good" type="text" id="number" value="${item.qua}" style="border:1px solid #ccc; ">
				              <a href="javascript:;" onclick="" class="increment"></a>
				              <div style="clear: both;"></div>
				            </div>
				          </li>
				          <li class="nwcwid04 nwprif" style="width: 130px;"><strong id="subtotal" style="margin-top: 20px;display: block;">${item.price}</strong></li>
				          <li class="nwcwid01 del" style="width: 50px;float: right;margin-top: 27px;">
				          	<a href="javascript:;">删除</a>
				          </li>
				           <div style="clear: both;"></div>
				        </ul>`;
	}).join('');
	
	list.innerHTML=res;
}


                  
                 

		
		//1.创建对象
//				var xhr=new XMLHttpRequest();
		var url='../api/carts.php';
		var data=`page=1&qty=5&time=new Date()`;
		
		ajax('GET',url,data,function(str){
//			console.log(str);
			var arr=JSON.parse(str);
//			console.log(arr);
				creat(arr);
				
				
				
		//全选		
		var $allCheck = $(":checkbox").filter("#all");
		var $otherCheck = $(":checkbox").not("#all");
		$allCheck.on("click",function(){
			$otherCheck.prop("checked",this.checked);
		//  this.checked? $trs.addClass('selected') : $trs.removeClass('selected');
			alltotal();
        })
				
				
				
				//共计
		function smalltotal(now){
			var num=now.parent().find('#number').val();
//			console.log(num);
			var price=now.parent().prev().text();
//			console.log(price);
			price=$.trim(price);
			var smallprice=price*num;
			now.parent().next().html(smallprice);
		}

			//删除当行
			$(".del").on("click",function(){
				console.log(666);
				var theok=confirm('您确定删除该商品嘛？');
				var id=$(this).parent().attr('id');
//				console.log(id);
				var url='../api/delcart.php';
				var data=`id=${id}`;
				ajax('GET',url,data,function(str){
//					console.log(str);
				})
				if( theok ){
					$(this).parent().remove();
				}
			})
			
			
			
			//减数量
		$('.cartMain_hd').on('click',".decrement",function(){
			console.log(666);
			var val=$(this).next().val();
			val--;
			if(val<=1){
				val=1;
			}
			$(this).next().val(val);
			smalltotal($(this));
			alltotal();
//			console.log($(this).parent().parent().attr('class'))
			var id=$(this).parent().parent().parent().attr('id');
			var url='../api/selectcart.php';
			var data=`qua=${val}&id=${id}`;
			// ajax('GET',url,data,function(str){
			// 	console.log(str);
			// })
		})
		
		
		//加数量
		$('.cartMain_hd').on('click','.increment',function(){
			var val=$(this).prev().val();
			val++;
			$(this).prev().val(val);
			smalltotal($(this));
			alltotal();
			var id=$(this).parent().parent().parent().attr('id');
			
			var url='../api/selectcart.php';
			var data=`qua=${val}&id=${id}`;
			// ajax('GET',url,data,function(str){
			// 	console.log(str);
			// })
		})
		
		//总数量和总价格
			var arr=[];
			alltotal= function (){
				arr.length=0;
				var len=$('.all').size();
				// console.log(len);
				// console.log($('.all').eq(0).prop('checked'));
				//把已经被勾选的那一行的下标存进数组里面
				for( var i=0;i<len;i++ ){
					if( $('.all').eq(i).prop('checked') ){
						arr.push(i);
					}
				}
				// console.log(arr);
				
				
				var num = arr.length;
				var allprice=0;
				for( var i=0;i<arr.length;i++ ){
					var shuliang = $('.nwc_item ul #number').eq(arr[i]).val();
					var price1=$('.nwc_item ul #subtotal').eq(arr[i]).text().split('￥')[1];
					// var 
					price1=$.trim(price1);
					allprice+=Number(price1);
				}
				console.log(num);
				console.log(allprice);
				$('.piece_num').html(num);
				$('.total_text').html('￥'+allprice);
			}
			
		})
		
		
		
		
			
		
		
		
})