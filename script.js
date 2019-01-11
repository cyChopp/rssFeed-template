const buttonNav = document.querySelector('.btn');
const nav = document.querySelector('.navWrapper');
const mainContent = document.querySelector('.mainContent')
const feedColumns = document.querySelectorAll('.feedColumn');
const collapse = document.querySelector('.collapse');
const changeDropDownMenu = document.querySelector('#changeClass');
const collapseNav = document.querySelector('.collapseNav');


// |----------------|
// | MAIN ANIMATION |
// |----------------|


let closeNav = false;

buttonNav.addEventListener('click', moveNav);

function moveNav(){

	if (closeNav) {
		nav.classList.add('navClose');
		closeNav=false;
		mainContent.style.left = '0px';
	}else{
		nav.classList.remove('navClose');
		closeNav=true;;
		mainContent.style.left = '250px';
	}
}			

// |---------------|
// | NAV ANIMATION |
// |---------------|

let openMore= false;

collapse.addEventListener('click',function(){	

	collapseNav.classList.toggle('collapseClose');

	if (openMore) {
		changeDropDownMenu.classList.add('collapseB');
		changeDropDownMenu.classList.remove('collapse');
		openMore= false;
	}else {
		openMore=true;
		changeDropDownMenu.classList.remove('collapseB');
		changeDropDownMenu.classList.add('collapse');
	}
});

// |-------------------|
// | CONTENT ANIMATION |
// |-------------------|

function toggleOpen() {

  this.classList.toggle('open');
}

feedColumns.forEach(column => column.addEventListener('click',toggleOpen));

// |--------------|
// | FEED FINDER  |
// |--------------|

// $(document).ready(function() {
// 	//feed to parse
// 	var feed = "https://www.w3schools.com/html/html_forms.asp";
	
// 	$.ajax(feed, {
// 		accepts:{
// 			xml:"application/rss+xml"
// 		},
// 		dataType:"xml",
// 		success:function(data) {
// 			//Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript

// 			$(data).find("item").each(function () { 
// 				var el = $(this);
// 				console.log("------------------------");
// 				console.log("title      : " + el.find("title").text());
// 				console.log("link       : " + el.find("link").text());
// 				console.log("description: " + el.find("description").text());
// 			});
// 		}	
// 	});
	
// });