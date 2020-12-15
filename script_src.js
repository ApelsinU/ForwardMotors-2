/*$(document).ready(function(){
  $('.your-class').slick({
    setting-name: setting-value
  });
});*/


BannersSlide();

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

    let i = 1;
    let iLast = banners.length;
    let width = 0;
    let firstRun = 'true';

    let image = document.querySelector('.banner__image');
    let loader = document.querySelector('.banner__loader');
    let progress = document.querySelector('.progress');

    let loadingId = setTimeout(Loading, 2000);

    function Loading() {
        if (firstRun){
            smoothly(loader, 'src', ' ');
            firstRun = 'false';
        };

        ActionStart();
    }

    function ActionStart(){
        BarEvent();        // 6000
        let timerId = setInterval(ChangeImg, 6000);
    }

    function BarEvent(){
        let barId = setInterval(Move, 60);

        function Move(){
            if (width >= 100){
                progress.style.width = '0';
                width = 0;
            };

            width++;
            progress.style.width = width + '%';
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
    }
}

