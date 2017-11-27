
var ticketButton = document.querySelectorAll('.match .org-button');
var mainPage = document.getElementById('mainPage');
var subPageOne = document.getElementById('subPageOne');
var subPageTow = document.getElementById('subPageTow');
var CancleBack = document.getElementById('CancleBack');
var byTicketButton = document.querySelector('.bottom-details .org-button');
var backIcon = document.querySelector('#subPageTow .icon-back');







for (var i = 0; i < ticketButton.length; i++) {
	ticketButton[i].addEventListener("click", function(){
		mainPage.classList.add("hidden");
		subPageOne.classList.remove("hidden");
	});
}

CancleBack.addEventListener("click", function(){		
		subPageOne.classList.add("hidden");
		mainPage.classList.remove("hidden");
});

byTicketButton.addEventListener("click", function(){		
		subPageOne.classList.add("hidden");
		subPageTow.classList.remove("hidden");	
});
backIcon.addEventListener("click", function(){		
		subPageTow.classList.add("hidden");
		subPageOne.classList.remove("hidden");	
});