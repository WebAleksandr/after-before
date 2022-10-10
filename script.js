"use strict";
window.addEventListener('DOMContentLoaded', () => {
    const sliderContol = document.querySelector('.slider-controler'),
        beforeContainer = document.querySelector('.slider-container-before'),
        sliderContainer = document.querySelector(".slider-conatiner"),
        uploadAfter = document.querySelector('#upload-after'),
        chosenAfter = document.querySelector('.after'),
        uploadBefore = document.querySelector('#upload-before'),
        chosenBefore = document.querySelector('.before'),
        controlColor = document.querySelector('#upload-color'),
        controlReset = document.querySelector('#upload-reset'),
        blurBtn = document.querySelector('.btn1'),
        huerBtn = document.querySelector('.btn2'),
        sepiaBtn = document.querySelector('.btn3'),
        invertBtn = document.querySelector('.btn4'),
        one_container = document.querySelectorAll('.one-container');


    const slider = (event) => {
        event.preventDefault();
        console.log(event);
        let PosX = event.layerX;
        let size = sliderContainer.offsetWidth;

        beforeContainer.style.width = PosX + 'px';
        sliderContol.style.left = PosX + 'px';

        if (PosX < 10) {
            beforeContainer.style.width = 0;
            sliderContol.style.left = 0;
        }

        if (PosX + 10 > size) {
            beforeContainer.style.width = size + 'px';
            sliderContol.style.left = size + 'px';
        }


    }

    sliderContainer.addEventListener('mousemove', slider);
    // =================================================================

    const afterImage = (e) => {
        e.preventDefault();

        let reader = new FileReader();

        reader.readAsDataURL(uploadAfter.files[0]);

        reader.onload = () => {
            chosenAfter.setAttribute('src', reader.result);
        }
    }

    const beforeImage = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        reader.readAsDataURL(uploadBefore.files[0]);

        reader.onload = () => {
            chosenBefore.setAttribute('src', reader.result);
        }
    }

    uploadAfter.addEventListener('change', afterImage);
    uploadBefore.addEventListener('change', beforeImage);

    // ============================

    const changeColor = () => {
        let color = document.querySelector('#upload-color').value;
        sliderContol.style.backgroundColor = color;

    };
    controlColor.addEventListener('change', changeColor);


    const changeReset = () => {
        sliderContol.style.backgroundColor = '';
    }
    controlReset.addEventListener('click', changeReset);

    // ========================

    const blur = () => {
        chosenAfter.classList.toggle('blur-anim');
        one_container[4].classList.toggle('active');

    }
    blurBtn.addEventListener('click', blur);


    const hue = () => {
        chosenAfter.classList.toggle('hue-anim');
        one_container[5].classList.toggle('active');
    }
    huerBtn.addEventListener('click', hue);


    const sepia = () => {
        chosenAfter.classList.toggle('sepia-anim');
        one_container[6].classList.toggle('active');
    }

    sepiaBtn.addEventListener('click', sepia);


    const invert = () => {
        chosenAfter.classList.toggle('invert-anim');
        one_container[7].classList.toggle('active');
    }

    invertBtn.addEventListener('click', invert);


});