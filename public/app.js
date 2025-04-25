const images = ['peeter.png', 'koer.webp'];
const targetImage = document.querySelector('.image img');
let i = 1;
targetImage.addEventListener('click', () => {

    targetImage.style.opacity = '0';

    setTimeout(() => {
        if (i === images.length) {
            i = 0;
        }

        targetImage.src = 'images/' + images[i];
        i++;

        targetImage.style.opacity = '1';
    }, 200)

//shift+alt+f ---vali kõik kood ja vajuta, siis korrastab koodi

})