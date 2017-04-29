 window.onload=function(){
 	var oBroadBox = document.getElementById('broad_box');
 	var aLi = oBroadBox.getElementsByTagName('li');
 	for (var i = 0; i < aLi.length; i++) { 		
 		aLi[i].onclick=function(){
 			for (var j = 0; j < aLi.length; j++) {
 				aLi[j].className="";
 			}
 			this.className='ac';
 		}
 	}
 }