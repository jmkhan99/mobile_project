const memo_form = document.querySelector('.memo_box');
const food_category_select = document.querySelector('#food_category');
const name_input = document.querySelector('.food_name_input');
const month_input = document.querySelector('.month_input');
const day_input = document.querySelector('.day_input');
const meat_list_ul = document.querySelector('.meat_list_ul');
const vege_list_ul = document.querySelector('.vege_list_ul');
const seafood_list_ul = document.querySelector('.seafood_list_ul');
const canned_list_ul = document.querySelector('.canned_list_ul');
const etc_list_ul = document.querySelector('.etc_list_ul');
let meat_list = [];
let vege_list = [];
let seafood_list = [];
let canned_list = [];
let etc_list = [];
if(localStorage.getItem('meat_list')){
	let meat_list_local = localStorage.getItem('meat_list')
	meat_list = JSON.parse(meat_list_local);
	meat_list.forEach(function(item){
		let $li = document.createElement('li');
		let $span = document.createElement('span');
		let $span2 = document.createElement('span');
		let $btn = document.createElement('button');
		let $del_img = document.createElement('img');		
		$span.innerText = item.name;
		$span2.innerText = '(' + item.month +'월 '+ item.day + '일 까지)';
		$span.setAttribute('id', 'food_name');
		$span2.setAttribute('id', 'food_day');
		$btn.setAttribute('id','delete_button');
		$li.appendChild($span);
		$li.appendChild($span2);
		$del_img.setAttribute('src', 'images/ref/delete_button.png');
		$btn.appendChild($del_img);			
		$li.appendChild($btn);
		$li.setAttribute('id', item.id);
		meat_list_ul.appendChild($li);
		let id_li = document.getElementById(item.id);
		input_clear();
		$btn.addEventListener('click', function(){
			meat_list_ul.removeChild(id_li);
			var meat_list_local = localStorage.getItem('meat_list');
			meat_list = JSON.parse(meat_list_local);
			meat_list = meat_list.filter(function(meat_list_item){
				return meat_list_item.id !== item.id
			});
			meat_list_strigify = JSON.stringify(meat_list);
			localStorage.setItem('meat_list', meat_list_strigify);
		})	
		$btn.addEventListener('mouseleave',function(){
			$del_img.setAttribute('src','images/ref/delete_button.png');						
		});			
		$btn.addEventListener('mouseenter',function(){
			$del_img.setAttribute('src','images/ref/delete_button_red.png');					
		});			
	})
}
if(localStorage.getItem('vege_list')){
	let vege_list_local = localStorage.getItem('vege_list')
	vege_list = JSON.parse(vege_list_local);
	vege_list.forEach(function(item){
		let $li = document.createElement('li');
		let $span = document.createElement('span');
		let $span2 = document.createElement('span');
		let $btn = document.createElement('button');
		let $del_img = document.createElement('img');		
		$span.innerText = item.name;
		$span2.innerText = '(' + item.month +'월 '+ item.day + '일 까지)';
		$span.setAttribute('id', 'food_name');
		$span2.setAttribute('id', 'food_day');
		$btn.setAttribute('id','delete_button');
		$li.appendChild($span);
		$li.appendChild($span2);
		$del_img.setAttribute('src', 'images/ref/delete_button.png');
		$btn.appendChild($del_img);			
		$li.appendChild($btn);
		$li.setAttribute('id', item.id);
		vege_list_ul.appendChild($li);
		let id_li = document.getElementById(item.id);
		input_clear();
		$btn.addEventListener('click', function(){
			vege_list_ul.removeChild(id_li);
			var vege_list_local = localStorage.getItem('vege_list');
			vege_list = JSON.parse(vege_list_local);
			vege_list = vege_list.filter(function(vege_list_item){
				return vege_list_item.id !== item.id
			});
			vege_list_strigify = JSON.stringify(vege_list);
			localStorage.setItem('vege_list', vege_list_strigify);
		})	
		$btn.addEventListener('mouseleave',function(){
			$del_img.setAttribute('src','images/ref/delete_button.png');						
		});			
		$btn.addEventListener('mouseenter',function(){
			$del_img.setAttribute('src','images/ref/delete_button_red.png');					
		});			
	})
}
if(localStorage.getItem('seafood_list')){
	let seafood_list_local = localStorage.getItem('seafood_list')
	seafood_list = JSON.parse(seafood_list_local);
	seafood_list.forEach(function(item){
		let $li = document.createElement('li');
		let $span = document.createElement('span');
		let $span2 = document.createElement('span');
		let $btn = document.createElement('button');
		let $del_img = document.createElement('img');		
		$span.innerText = item.name;
		$span2.innerText = '(' + item.month +'월 '+ item.day + '일 까지)';
		$span.setAttribute('id', 'food_name');
		$span2.setAttribute('id', 'food_day');
		$btn.setAttribute('id','delete_button');
		$li.appendChild($span);
		$li.appendChild($span2);
		$del_img.setAttribute('src', 'images/ref/delete_button.png');
		$btn.appendChild($del_img);			
		$li.appendChild($btn);
		$li.setAttribute('id', item.id);
		seafood_list_ul.appendChild($li);
		let id_li = document.getElementById(item.id);
		input_clear();
		$btn.addEventListener('click', function(){
			seafood_list_ul.removeChild(id_li);
			var seafood_list_local = localStorage.getItem('seafood_list');
			seafood_list = JSON.parse(seafood_list_local);
			seafood_list = seafood_list.filter(function(seafood_list_item){
				return seafood_list_item.id !== item.id
			});
			seafood_list_strigify = JSON.stringify(seafood_list);
			localStorage.setItem('seafood_list', seafood_list_strigify);
		})	
		$btn.addEventListener('mouseleave',function(){
			$del_img.setAttribute('src','images/ref/delete_button.png');						
		});			
		$btn.addEventListener('mouseenter',function(){
			$del_img.setAttribute('src','images/ref/delete_button_red.png');					
		});			
	})
}
if(localStorage.getItem('canned_list')){
	let canned_list_local = localStorage.getItem('canned_list')
	canned_list = JSON.parse(canned_list_local);
	canned_list.forEach(function(item){
		let $li = document.createElement('li');
		let $span = document.createElement('span');
		let $span2 = document.createElement('span');
		let $btn = document.createElement('button');
		let $del_img = document.createElement('img');			
		$span.innerText = item.name;
		$span2.innerText = '(' + item.month +'월 '+ item.day + '일 까지)';
		$span.setAttribute('id', 'food_name');
		$span2.setAttribute('id', 'food_day');
		$btn.setAttribute('id','delete_button');
		$li.appendChild($span);
		$li.appendChild($span2);
		$del_img.setAttribute('src', 'images/ref/delete_button.png');
		$btn.appendChild($del_img);			
		$li.appendChild($btn);
		$li.setAttribute('id', item.id);
		canned_list_ul.appendChild($li);
		let id_li = document.getElementById(item.id);
		input_clear();
		$btn.addEventListener('click', function(){
			canned_list_ul.removeChild(id_li);
			var canned_list_local = localStorage.getItem('canned_list');
			canned_list = JSON.parse(canned_list_local);
			canned_list = canned_list.filter(function(canned_list_item){
				return canned_list_item.id !== item.id
			});
			canned_list_strigify = JSON.stringify(canned_list);
			localStorage.setItem('canned_list', canned_list_strigify);
		})	
		$btn.addEventListener('mouseleave',function(){
			$del_img.setAttribute('src','images/ref/delete_button.png');						
		});			
		$btn.addEventListener('mouseenter',function(){
			$del_img.setAttribute('src','images/ref/delete_button_red.png');					
		});		
	})
}
if(localStorage.getItem('etc_list')){
	let etc_list_local = localStorage.getItem('etc_list')
	etc_list = JSON.parse(etc_list_local);
	etc_list.forEach(function(item){
		let $li = document.createElement('li');
		let $span = document.createElement('span');
		let $span2 = document.createElement('span');
		let $btn = document.createElement('button');
		let $del_img = document.createElement('img');		
		$span.innerText = item.name;
		$span2.innerText = '(' + item.month +'월 '+ item.day + '일 까지)';
		$span.setAttribute('id', 'food_name');
		$span2.setAttribute('id', 'food_day');
		$btn.setAttribute('id','delete_button');
		$li.appendChild($span);
		$li.appendChild($span2);
		$del_img.setAttribute('src', 'images/ref/delete_button.png');
		$btn.appendChild($del_img);		
		$li.appendChild($btn);
		$li.setAttribute('id', item.id);
		etc_list_ul.appendChild($li);
		let id_li = document.getElementById(item.id);
		input_clear();
		$btn.addEventListener('click', function(){
			etc_list_ul.removeChild(id_li);
			var etc_list_local = localStorage.getItem('etc_list');
			etc_list = JSON.parse(etc_list_local);
			etc_list = etc_list.filter(function(etc_list_item){
				return etc_list_item.id !== item.id
			});
			etc_list_strigify = JSON.stringify(etc_list);
			localStorage.setItem('etc_list', etc_list_strigify);
		})	
		$btn.addEventListener('mouseleave',function(){
			$del_img.setAttribute('src','images/ref/delete_button.png');						
		});			
		$btn.addEventListener('mouseenter',function(){
			$del_img.setAttribute('src','images/ref/delete_button_red.png');					
		});			
	})
}

memo_form.addEventListener('submit', function(e){
	e.preventDefault();
	let food_category = food_category_select.value;
	let food_name = name_input.value;
	let month = month_input.value;
	let day = day_input.value;
	let id=Date.now();
	
	if(food_category == 'select'){
		alert('재료 종류를 선택하세요')
	}else if(!food_name.trim()){
		alert('재료 이름을 입력하세요.')
		name_input.focus();
	}else if(month > 12 || month < 1){
		alert('1~12 사이의 숫자(월)를 입력하세요.')
		month_input.focus();
	}else if(day > 31 || day < 1){
		alert('1~31 사이의 숫자(일)를 입력하세요.')
		day_input.focus();
	}else if (food_category == 'meat'){
		let $li = document.createElement('li');
		let $span = document.createElement('span');
		let $span2 = document.createElement('span');
		let $btn = document.createElement('button');
		let $del_img = document.createElement('img');
		$span.innerText = food_name;
		$span2.innerText = '(' + month +'월 '+ day + '일 까지)';
		$span.setAttribute('id', 'food_name');
		$span2.setAttribute('id', 'food_day');
		$btn.setAttribute('id','delete_button');
		$li.appendChild($span);
		$li.appendChild($span2);
		$del_img.setAttribute('src', 'images/ref/delete_button.png');
		$btn.appendChild($del_img);
		$li.appendChild($btn);
		$li.setAttribute('id', id);
		meat_list.push({id:id, name:food_name, month:month, day:day, category:food_category});
		let meat_list_stringify = JSON.stringify(meat_list);
		localStorage.setItem('meat_list', meat_list_stringify);
		meat_list_ul.appendChild($li);
		let id_li = document.getElementById(id);
		input_clear();
		$btn.addEventListener('click', function(){
			meat_list_ul.removeChild(id_li);
			var meat_list_local = localStorage.getItem('meat_list');
			meat_list = JSON.parse(meat_list_local);
			meat_list = meat_list.filter(function(meat_list_item){
				return meat_list_item.id !== id
			});
			meat_list_strigify = JSON.stringify(meat_list);
			localStorage.setItem('meat_list', meat_list_strigify);
		})
		$btn.addEventListener('mouseleave',function(){
			$del_img.setAttribute('src','images/ref/delete_button.png');						
		});			
		$btn.addEventListener('mouseenter',function(){
			$del_img.setAttribute('src','images/ref/delete_button_red.png');					
		});				
	}else if (food_category == 'vege'){
		let $li = document.createElement('li');
		let $span = document.createElement('span');
		let $span2 = document.createElement('span');
		let $btn = document.createElement('button');
		let $del_img = document.createElement('img');
		$span.innerText = food_name;
		$span2.innerText = '(' + month +'월 '+ day + '일 까지)';
		$span.setAttribute('id', 'food_name');
		$span2.setAttribute('id', 'food_day');
		$btn.setAttribute('id','delete_button');
		$li.appendChild($span);
		$li.appendChild($span2);
		$del_img.setAttribute('src', 'images/ref/delete_button.png');
		$btn.appendChild($del_img);		
		$li.appendChild($btn);
		$li.setAttribute('id', id);
		vege_list.push({id:id, name:food_name, month:month, day:day, category:food_category});
		let vege_list_stringify = JSON.stringify(vege_list);
		localStorage.setItem('vege_list', vege_list_stringify);		
		vege_list_ul.appendChild($li);
		let id_li = document.getElementById(id);
		input_clear();
		$btn.addEventListener('click', function(){
			vege_list_ul.removeChild(id_li);
			var vege_list_local = localStorage.getItem('vege_list');
			vege_list = JSON.parse(vege_list_local);
			vege_list = vege_list.filter(function(vege_list_item){
				return vege_list_item.id !== id
			});
			vege_list_strigify = JSON.stringify(vege_list);
			localStorage.setItem('vege_list', vege_list_strigify);
		})
		$btn.addEventListener('mouseleave',function(){
			$del_img.setAttribute('src','images/ref/delete_button.png');						
		});			
		$btn.addEventListener('mouseenter',function(){
			$del_img.setAttribute('src','images/ref/delete_button_red.png');					
		});			
	}else if (food_category == 'seafood'){
		let $li = document.createElement('li');
		let $span = document.createElement('span');
		let $span2 = document.createElement('span');
		let $btn = document.createElement('button');
		let $del_img = document.createElement('img');		
		$span.innerText = food_name;
		$span2.innerText = '(' + month +'월 '+ day + '일 까지)';
		$span.setAttribute('id', 'food_name');
		$span2.setAttribute('id', 'food_day');
		$btn.setAttribute('id','delete_button');
		$li.appendChild($span);
		$li.appendChild($span2);
		$del_img.setAttribute('src', 'images/ref/delete_button.png');
		$btn.appendChild($del_img);			
		$li.appendChild($btn);
		$li.setAttribute('id', id);
		seafood_list.push({id:id, name:food_name, month:month, day:day, category:food_category});		
		let seafood_list_stringify = JSON.stringify(seafood_list);
		localStorage.setItem('seafood_list', seafood_list_stringify);		
		seafood_list_ul.appendChild($li);
		let id_li = document.getElementById(id);
		input_clear();
		$btn.addEventListener('click', function(){
			seafood_list_ul.removeChild(id_li);
			var seafood_list_local = localStorage.getItem('seafood_list');
			seafood_list = JSON.parse(seafood_list_local);
			seafood_list = seafood_list.filter(function(seafood_list_item){
				return seafood_list_item.id !== id
			});
			seafood_list_strigify = JSON.stringify(seafood_list);
			localStorage.setItem('seafood_list', seafood_list_strigify);
		})
		$btn.addEventListener('mouseleave',function(){
			$del_img.setAttribute('src','images/ref/delete_button.png');						
		});			
		$btn.addEventListener('mouseenter',function(){
			$del_img.setAttribute('src','images/ref/delete_button_red.png');				
		});			
		
	}else if (food_category == 'canned'){
		let $li = document.createElement('li');
		let $span = document.createElement('span');
		let $span2 = document.createElement('span');
		let $btn = document.createElement('button');
		let $del_img = document.createElement('img');		
		$span.innerText = food_name;
		$span2.innerText = '(' + month +'월 '+ day + '일 까지)';
		$span.setAttribute('id', 'food_name');
		$span2.setAttribute('id', 'food_day');
		$btn.setAttribute('id','delete_button');
		$li.appendChild($span);
		$li.appendChild($span2);
		$del_img.setAttribute('src', 'images/ref/delete_button.png');
		$btn.appendChild($del_img);			
		$li.appendChild($btn);
		$li.setAttribute('id', id);
		canned_list.push({id:id, name:food_name, month:month, day:day, category:food_category});		
		let canned_list_stringify = JSON.stringify(canned_list);
		localStorage.setItem('canned_list', canned_list_stringify);		
		canned_list_ul.appendChild($li);
		let id_li = document.getElementById(id);
		input_clear();
		$btn.addEventListener('click', function(){
			canned_list_ul.removeChild(id_li);
			var canned_list_local = localStorage.getItem('canned_list');
			canned_list = JSON.parse(canned_list_local);
			canned_list = canned_list.filter(function(canned_list_item){
				return canned_list_item.id !== id
			});
			canned_list_strigify = JSON.stringify(canned_list);
			localStorage.setItem('canned_list', canned_list_strigify);
		})
		$btn.addEventListener('mouseleave',function(){
			$del_img.setAttribute('src','images/ref/delete_button.png');						
		});			
		$btn.addEventListener('mouseenter',function(){
			$del_img.setAttribute('src','images/ref/delete_button_red.png');				
		});			
	}else if (food_category == 'etc'){
		let $li = document.createElement('li');
		let $span = document.createElement('span');
		let $span2 = document.createElement('span');
		let $btn = document.createElement('button');
		let $del_img = document.createElement('img');		
		$span.innerText = food_name;
		$span2.innerText = '(' + month +'월 '+ day + '일 까지)';
		$span.setAttribute('id', 'food_name');
		$span2.setAttribute('id', 'food_day');
		$btn.setAttribute('id','delete_button');
		$li.appendChild($span);
		$li.appendChild($span2);
		$del_img.setAttribute('src', 'images/ref/delete_button.png');
		$btn.appendChild($del_img);			
		$li.appendChild($btn);
		$li.setAttribute('id', id);
		etc_list.push({id:id, name:food_name, month:month, day:day, category:food_category});		
		let etc_list_stringify = JSON.stringify(etc_list);
		localStorage.setItem('etc_list', etc_list_stringify);		
		etc_list_ul.appendChild($li);
		let id_li = document.getElementById(id);
		input_clear();
		$btn.addEventListener('click', function(){
			etc_list_ul.removeChild(id_li);
			var etc_list_local = localStorage.getItem('etc_list');
			etc_list = JSON.parse(etc_list_local);
			etc_list = etc_list.filter(function(etc_list_item){
				return etc_list_item.id !== id
			});
			etc_list_strigify = JSON.stringify(etc_list);
			localStorage.setItem('etc_list', etc_list_strigify);
		})
		$btn.addEventListener('mouseleave',function(){
			$del_img.setAttribute('src','images/ref/delete_button.png');						
		});			
		$btn.addEventListener('mouseenter',function(){
			$del_img.setAttribute('src','images/ref/delete_button_red.png');				
		});			
	}
});


function input_clear (){
	food_category_select.value = 'select';
	name_input.value = '';
	month_input.value = '';
	day_input.value = '';
}
