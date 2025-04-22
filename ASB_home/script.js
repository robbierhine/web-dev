const fonts = ['GBI', 'Franklin Gothic', 'Shlop', 'Arcade'];

const element = document.getElementById('myText');


    function getRandomFont() {
        const randomIndex = Math.floor(Math.random() * fonts.length);
        return fonts[randomIndex];
    }

    function setRandomFont() {
        element.style.fontFamily = getRandomFont();
    }

    setRandomFont();
    setInterval(setRandomFont, 3000);


// const fonts = ['GBI', 'Franklin Gothic', 'Shlop', 'Arcade'];
// const element = document.getElementById('myText');

// function getRandomFont() {
//     const randomIndex = Math.floor(Math.random() * fonts.length);
//     return fonts[randomIndex];
// }

// function setRandomFonts() {
//     const words = element.querySelectorAll('h1');
//     words.forEach(word => {
//         word.style.fontFamily = `'${getRandomFont()}', sans-serif`;
//     });
// }

// setRandomFonts();  // Set initial fonts
// setInterval(setRandomFonts, 3000);  // Change fonts every 3 seconds

