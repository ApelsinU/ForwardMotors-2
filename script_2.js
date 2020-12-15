let banners = [
	' http://forward-motors.com/modules/mod_image_show_gk4/cache/banners.neste-turbo-lxe10w40summer-bannergk-is-346.jpg ',
	' http://forward-motors.com/modules/mod_image_show_gk4/cache/banners.filtron-protect-plusgk-is-346.jpg ',
	' http://forward-motors.com/modules/mod_image_show_gk4/cache/banners.banner-akcija-mf2020springgk-is-346.jpg ',
	' http://forward-motors.com/modules/mod_image_show_gk4/cache/banners.filtron-benefit-programm2020gk-is-346.jpg ',
	' http://forward-motors.com/modules/mod_image_show_gk4/cache/banners.banner-valeo-loyaltygk-is-346.jpg ',
	' http://forward-motors.com/modules/mod_image_show_gk4/cache/banners.assort-airlines1gk-is-346.jpg ',
	' http://forward-motors.com/modules/mod_image_show_gk4/cache/densoliga-bannergk-is-346.jpg ',
	' http://forward-motors.com/modules/mod_image_show_gk4/cache/banners.kyb-akcija2019gk-is-346.jpg ',
];

let i = 1;
let iLast = banners.length;
let width = 0;
let firstRun = 'true';


let image = document.querySelector('.banner__image');
let loader = document.querySelector('.banner__loader');
let progress = document.querySelector('.progress');
let line = document.querySelector('.banner__line');

function ActionStart(){

	// BarEvent 
	let barId = setInterval(Move, 60);
	function Move(){
		if (width >= 100){
			// Change image
			let imgId = setTimeout(ChangeImg, 4000);

			//Restart
			progress.style.width = '0';
			width = 0;

			clearInterval(barId);

			LineMove();
		};	
		width++;
		progress.style.width = width + '%';
	}
}

function Loader() {
	if (firstRun){
		smoothly(loader, 'src', '');
		firstRun = 'false';
	};
	
	ActionStart();
	/*let pauseId = setTimeout(ActionPause, 6000);*/
	/* Анимация с полоской, + обнуление двух таймеров и запуск заново */
	
}

function ChangeImg(){
	// Get next image
	if(i == iLast){
		i = 0;
	};
	
	NextImage = banners[i];   
	i++;

	// Change image
	smoothly(image, 'src', NextImage);
}

function LineMove(){
	let OpONId = setTimeout(OpON,2000);
	let OpOFFId = setTimeout(OpOFF,2000);

	let actionId = setTimeout(ActionStart,4000);
}

function OpON() {
	line.style.display = 'none'; 
}

function OpOFF() {
	line.style.display = 'block';
}

let loaderId = setTimeout(Loader, 2000);