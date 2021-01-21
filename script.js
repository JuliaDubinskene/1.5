//Initialize Swiper
const slider = document.querySelector('.swiper-container');

let mySwiper;

function mobileSlider() {
    if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 1.3,
            slidesPerColumn: 1,
            slidesPerColumnFill:"row",
            loop: true,
            spaceBetween: 0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,   
            },
        });
        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 768) {
        slider.dataset.mobile = 'false';
        if (slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }

        let buttonLookAll = document.querySelector('.swiper-look-all__btn');
        let lookAllImage = document.querySelector('.swiper-look-all__image');
        let buttonAllContainer = document.querySelector('.swiper-look-all');

        buttonLookAll.addEventListener('click',function (evt){
            let hiddenItem = document.querySelectorAll('.swiper__slide_hidden');
            let isNotHaveClass = !hiddenItem[0].classList.contains('swiper__slide_show');

            evt.preventDefault();

            if (isNotHaveClass) {
               for (let i = 0; i < hiddenItem.length; i++) { 
                    hiddenItem[i].classList.add('swiper__slide_show');
                }
               buttonLookAll.textContent = 'Скрыть';
               lookAllImage.classList.add('rotate');
               buttonAllContainer.classList.add('swiper-look-all_top');
            }
            else {
               for (let i = 0; i < hiddenItem.length; i++) {
                    hiddenItem[i].classList.remove('swiper__slide_show');
                }
               buttonLookAll.textContent = 'Показать все';
               lookAllImage.classList.remove('rotate');
               buttonAllContainer.classList.remove('swiper-look-all_top');

            }

        });
    }

    else {
        

        buttonLookAll.addEventListener('click',function (evt){
           
            evt.preventDefault();

            if (isNotHaveClass) {
               for (let i = 0; i < hiddenItem.length; i++) { 
                    hiddenItem[i].classList.add('swiper__slide_show');
                }
               buttonLookAll.textContent = 'Скрыть';
               lookAllImage.classList.add('rotate');
               buttonAllContainer.classList.add('swiper-look-all_top');
            }
            else {
               for (let i = 0; i < hiddenItem.length; i++) {
                    hiddenItem[i].classList.remove('swiper__slide_show');
                }
               buttonLookAll.textContent = 'Показать все';
               lookAllImage.classList.remove('rotate');
               buttonAllContainer.classList.remove('swiper-look-all_top');

            }

        });
    }
}

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
});



















        



