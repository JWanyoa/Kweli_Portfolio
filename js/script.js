$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}
		else{
			$('.navbar').removeClass("sticky");
		}
	})

	//Navbar toggle menu script
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass('active');
	})
});