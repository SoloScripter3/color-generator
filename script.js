const colorBox = document.querySelector('.color-box');

const generateButton = document.getElementById('btn');

const colorName = document.getElementById('color');

const body = document.querySelector('body');


const generateColor = () => {
    let colorString = '#';
    let alphaNums = '0123456789abcdef';
    for(let i = 0;i < 6;i++){
        let randomNum = Math.floor(Math.random() * 15);
        colorString += alphaNums.charAt(randomNum);
    }
    colorBox.style.backgroundColor = colorString;
    colorName.innerText = colorString;
    body.style.backgroundColor = colorString;
}

generateButton.addEventListener('click', generateColor);