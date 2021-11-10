document.addEventListener("DOMContentLoaded",function(){
	let posBanner = document.getElementById('header__navbar').offsetTop;
	let navbar = document.getElementById('header__navbar');
	let statusNav = true;
	window.addEventListener('scroll', function(){
		if(window.pageYOffset > posBanner){
			if(statusNav == true){
				statusNav = false;
				navbar.classList.add('changeScroll');
			}
		}
		else if(statusNav == false){
			statusNav = true;
			navbar.classList.remove('changeScroll');
		}
	})
},false)