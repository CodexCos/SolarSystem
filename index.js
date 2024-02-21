const button = document.querySelector('button');
const img = document.querySelector('.planet-image');
const error = document.querySelector('.error');
const option = document.querySelector('option');




button.addEventListener('click', () =>{
    let inputValue = document.querySelector('#mass').value;
    let select = document.querySelector('select');
    if(inputValue === ''){
        img.style.display = 'none';
        error.textContent = 'Mass is required.';
    }
    else if(isNaN(inputValue)){
        img.style.display = 'none';
        error.textContent = 'Please enter a number.';
    }
    else if(inputValue && select.value === '0'){
        img.style.display = 'none';
        error.textContent = 'You did not choose a planet yet.';

    }
    else if(select.value === '1'){
        
        let result = inputValue * 3.7;
        error.textContent = `${result.toFixed(2)} N`;
        img.style.display = 'inline';
        img.src = './images/mercury.png';
    }
    else if(select.value === '2'){
        let result = inputValue * 8.87;
        error.textContent = `${result.toFixed(2)} N`;
        img.style.display = 'inline';
        img.src = './images/venus.png';
    }
    else if(select.value === '3'){
        let result = inputValue * 9.807;
        error.textContent = `${result.toFixed(2)} N`;
        img.style.display = 'inline';
        img.src = './images/earth.png';
    }
    else if(select.value === '4'){
        let result = inputValue * 1.62;
        error.textContent = `${result.toFixed(2)} N`;
        img.style.display = 'inline';
        img.src = './images/moon.png';
    }
    else if(select.value === '5'){
        let result = inputValue * 3.71;
        error.textContent = `${result.toFixed(2)} N`;
        img.style.display = 'inline';
        img.src = './images/mars.png';
    }
    else if(select.value === '6'){
        let result = inputValue * 24.79;
        error.textContent = `${result.toFixed(2)} N`;
        img.style.display = 'inline';
        img.src = './images/jupiter.png';
    }
    else if(select.value === '7'){
        let result = inputValue * 10.44;
        error.textContent = `${result.toFixed(2)} N`;
        img.style.display = 'inline';
        img.src = './images/saturn.png';
    }
    else if(select.value === '8'){
        let result = inputValue * 8.87;
        error.textContent = `${result.toFixed(2)} N`;
        img.style.display = 'inline';
        img.src = './images/uranus.png';
    }
    else if(select.value === '9'){
        let result = inputValue * 11.15;
        error.textContent = `${result.toFixed(2)} N`;
        img.style.display = 'inline';
        img.src = './images/neptune.png';
    }
    else if(select.value === '10'){
        let result = inputValue * 0.62;
        error.textContent = `${result.toFixed(2)} N`;
        img.style.display = 'inline';
        img.src = './images/pluto.png';
    }

})