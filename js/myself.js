window.onload=function(){
	var memberNavSign = document.getElementsByClassName('member-nav-sigin')[0];
	var proMain = document.getElementsByClassName('pro-main')[0];
	memberNavSign.onclick = function(event){
		proMain.style.display = 'inline-block';
		event.stopPropagation();
	}
	document.onclick = function(event){
		proMain.style.display = 'none';
	}
    proMain.onclick = function(event){
    	event.stopPropagation();
    }
}