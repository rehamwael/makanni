
var ticketButton = document.querySelectorAll('.match .org-button');
var mainPage = document.getElementById('mainPage');
var subPageOne = document.getElementById('subPageOne');
var subPageTow = document.getElementById('subPageTow');
var CancleBack = document.getElementById('CancleBack');
var byTicketButton = document.querySelector('.bottom-details .org-button');
var backIcon = document.querySelector('#subPageTow .icon-back');
var matches = document.getElementById('matches');
var AllChecked = document.querySelectorAll('.seat.available');
var checkoutButton = document.getElementById('checkout');
var subPageThree = document.getElementById('subPageThree');
var subPagefour = document.getElementById('subPagefour');
var CancleBack3 = document.getElementById('Check-back');
var securePayment = document.getElementById('secure-payment');


for (var i = 0; i < ticketButton.length; i++) {
	ticketButton[i].addEventListener("click", function(){
		mainPage.classList.add("hidden");
		subPageOne.classList.remove("hidden");
	});
}

CancleBack.addEventListener("click", function(){		
	initialzize();
});
CancleBack3.addEventListener("click", function(){		
		subPageTow.classList.remove("hidden");
		subPageThree.classList.add("hidden");
});
matches.addEventListener("click", function(){		
	initialzize();
	subPageTow.classList.add("hidden");
	subPageThree.classList.add("hidden");
});

byTicketButton.addEventListener("click", function(){		
		subPageOne.classList.add("hidden");
		subPageTow.classList.remove("hidden");	
});
backIcon.addEventListener("click", function(){		
		subPageTow.classList.add("hidden");
		subPageOne.classList.remove("hidden");	
});

function initialzize(){
	subPageOne.classList.add("hidden");
	mainPage.classList.remove("hidden");
}
for (var i = 0; i < AllChecked.length; i++) {
	AllChecked[i].addEventListener("click", function(){
		document.getElementById('blockShow').classList.remove("hidden");
		document.getElementById('contentChangeCol').classList.remove("col-md-10");
        document.getElementById('contentChangeCol').classList.add("col-md-7");
        document.getElementById('BlockInfo').classList.add("hidden");
        document.getElementById('BlockConetent').classList.remove("hidden");
        document.getElementById('add-row').classList.add("row");
        document.querySelector('.col-centered').classList.add("col-md-9");
		
	});
}


checkoutButton.addEventListener("click", function(){		
		subPageTow.classList.add("hidden");
		subPageThree.classList.remove("hidden");	
});

securePayment.addEventListener("click", function(){		
		subPagefour.classList.remove("hidden");
});