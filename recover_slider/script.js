/*$(document).ready(function(){
  $('.your-class').slick({
    setting-name: setting-value
  });
});*/


BannersSlide();
NavSlide();

function BannersSlide(){

    let banners = [

        ' http://forward-motors.com/modules/mod_image_show_gk4/cache/banners.neste-turbo-lxe10w40summer-bannergk-is-346.jpg ',
        ' http://forward-motors.com/modules/mod_image_show_gk4/cache/banners.filtron-protect-plusgk-is-346.jpg ',
        ' http://forward-motors.com/modules/mod_image_show_gk4/cache/banners.banner-akcija-mf2020springgk-is-346.jpg ',
        ' http://forward-motors.com/modules/mod_image_show_gk4/cache/banners.filtron-benefit-programm2020gk-is-346.jpg ',
        ' http://forward-motors.com/modules/mod_image_show_gk4/cache/banners.banner-valeo-loyaltygk-is-346.jpg ',
        ' http://forward-motors.com/modules/mod_image_show_gk4/cache/banners.assort-airlines1gk-is-346.jpg ',
        ' http://forward-motors.com/modules/mod_image_show_gk4/cache/densoliga-bannergk-is-346.jpg ',
        ' http://forward-motors.com/modules/mod_image_show_gk4/cache/banners.kyb-akcija2019gk-is-346.jpg '
    ];


/* Banner */
    let image = document.querySelector('.banner__image');
    let loader = document.querySelector('.banner__loader');
    let progress = document.querySelector('.progress');
    let line = document.querySelector('.banner__line');

    let i = 1;
    let iLast = banners.length;
    let width = 0;
    let firstRun = 'true';

    let loadingId = setTimeout(Loading, 2000);

    function Loading() {
        if (firstRun){
            smoothly(loader, 'src', ' ');
            loader.style.zIndex = '-500';
            firstRun = 'false';
        };

        ActionStart();
        line.classList.remove('animate');
    }

    function ActionStart(){
        BarEvent();        // 5000
       // let timerId = setInterval(ChangeImg, 6000);
    }

    function BarEvent(){
        let barId = setInterval(Move, 50);

        function Move(){
            width++;
            progress.style.width = width + '%';

            if (width >= 100){

                width = 0;

                clearInterval(barId);

                let timerId = setTimeout(ChangeImg, 500);
            };

        }
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

        progress.style.width = '0';

        LineAnimation();


        let timer2Id = setTimeout(Loading, 500);
    }

    function LineAnimation(){
        line.classList.add('animate');

    }
};


function NavSlide() {

    const sliderBtn = document.querySelectorAll(".button__round");
    const sliderItems = document.querySelectorAll(".slider__item");
   /* const sliderRoundBtn = document.querrySelectorAll(".button__round");*/

    sliderBtn.forEach(onSlideClick);

    function onSlideClick(btnitem){
        btnitem.addEventListener("click", function(){
            let currentBtn = btnitem;
            let slideId = currentBtn.getAttribute("data-btn");
            let currentSlide = document.querySelector(slideId);

            if( ! currentBtn.classList.contains('active')){
                sliderBtn.forEach(function(btnitem){
                   btnitem.classList.remove("active");
                });

                sliderItems.forEach(function(btnitem){
                   btnitem.classList.remove("active");
                });
                currentBtn.classList.add("active");
                currentSlide.classList.add("active");
            }
        });

    }

    document.querySelector(".button__round").click();

}

function NavSlide() {

    const sliderBtn = document.querySelectorAll(".button__round");
    const sliderItems = document.querySelectorAll(".slider__item");
    const sliderBlock = document.querySelector(".slider__block");
   /* const sliderRoundBtn = document.querrySelectorAll(".button__round");*/

    sliderBtn.forEach(onSlideClick);

    function onSlideClick(btnitem){
        btnitem.addEventListener("click", function(){
            let currentBtn = btnitem;
            let slideId = currentBtn.getAttribute("data-btn");

            console.log(slideId);

            switch(slideId) {
                case '#btn_1': sliderBlock.style.transform = 'translate(0%)';
                    break;
                case '#btn_2': sliderBlock.style.transform = 'translate(-20%)';
                    break;
                case '#btn_3': sliderBlock.style.transform = 'translate(-40%)';
                    break;
                case '#btn_4': sliderBlock.style.transform = 'translate(-60%)';
                    break;
                case '#btn_5': sliderBlock.style.transform = 'translate(-80%)';
                    break;

            };



            let currentSlide = document.querySelector(slideId);

            if( ! currentBtn.classList.contains('active')){
                sliderBtn.forEach(function(btnitem){
                   btnitem.classList.remove("active");
                });

                sliderItems.forEach(function(btnitem){
                   btnitem.classList.remove("active");
                });
                currentBtn.classList.add("active");
                currentSlide.classList.add("active");
            }
        });

    }

    document.querySelector(".button__round").click();

}

