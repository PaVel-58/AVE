"Use strict"

function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
  document.getElementById("mySidenav").style.padding = "150px 200px 0 0";
  document.getElementById("button_menu").style.display = "none";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.padding = "0"
  document.getElementById("button_menu").style.display = "block";
}



let tab = function() {
	let tabNav = document.querySelectorAll('.nav-tabs__item'),
		tabContent = document.querySelectorAll('.tab'),
		headButton = document.querySelector('.header__button'),
		tabName;
	tabNav.forEach(item => {
		item.addEventListener('click', selectTabNav);
	});
	function selectTabNav() {
		tabNav.forEach(item => {
			item.classList.remove('active');
		});
		this.classList.add('active');
		tabName = this.getAttribute('data-tab-name');
		selectTabContent(tabName);
		headTab();
	}
	function selectTabContent(tabName) {
		tabContent.forEach(item => {
			item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active'); 
		});
	}
	function headTab() {
		if (tabName != 'tab1') {
			headButton.classList.add('active');
		} else {
			headButton.classList.remove('active');
		}
	}
}

tab();

function selectButton() {
	let button = document.querySelectorAll('.hire__button'),
	    active = document.querySelectorAll('.is-active');
	
	button.forEach(item => {
		item.addEventListener('click', activeButton);
	});
	function activeButton() {
		button.forEach(item => {
			this.classList.contains(active) ? this.classList.remove('is-active') : this.classList.add('is-active'); 
		});
	}
}

selectButton();

$('.works__slider').slick({
	slideToShow: 3,
	centerMode: true,
	centerPadding: 0 
});