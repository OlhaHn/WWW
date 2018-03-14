var xVal = 0;
var yVal = 0;
var penguin = document.getElementById('tux');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var make_visible = function(){ 
	var menu_el = document.getElementById('menu');
	menu_el.style.display='block'; 
	menu_el.style.position = "absolute";
	menu_el.style.left = xVal+'px';
	menu_el.style.top = yVal+'px';
};

var make_unvisible = function(){
	var menu_el = document.getElementById('menu');
	menu_el.style.display = 'none'
}

var update_values = function(event){
	xVal = event.pageX;
	yVal = event.pageY;
};
var option1_function = function(){
	document.body.style.background = '#ff8';
}
var option2_function = function(){
    document.body.style.background = 'white';
	penguin.style.border = 'thin dotted red'
}
var option3_function = function(){
	alert('Ymmm yammy. Thank you!!!');
}
document.oncontextmenu = function(e){ return false; }
penguin.addEventListener('mousemove', update_values, false);
penguin.addEventListener('contextmenu', make_visible, false);
document.body.addEventListener('click', make_unvisible, false);
option1.addEventListener('click', option1_function, false);
option2.addEventListener('click', option2_function, false);
option3.addEventListener('click', option3_function, false);