// JavaScript Document

function init(){
	var winW = document.documentElement.clientWidth;
	var winH = document.documentElement.clientHeight;
	var bg = document.getElementById("bg");		
	var h=winH-(winW*(0.02*1920)/1920+175);
	bg.style.height = h+"px";
	if(document.getElementsByClassName("page_pop")){
		var page_top=document.getElementsByClassName("page_pop");
		for(i=0;i<page_top.length;i++){
			h=page_top[i].offsetHeight;
			page_top[i].style.marginTop=-h/2+"px";
		}
	}
}