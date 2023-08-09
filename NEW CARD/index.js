let cars = ['car1', 'car2', 'car3'];

let btn = document.getElementById('changeButton');
let img = document.querySelector('img');
let msg = document.getElementById('msg');
let i = 1;
btn.addEventListener('click', () => {
    if(i == 1){
        img.src = '2.jpg';
        msg.textContent = 'The Aston Martin Vanquish is a high-performance grand tourer introduced by the British luxury automobile manufacturer in 2001 as a successor to the Aston Martin Vantage (1993). The car was designed by Ian Callum and unveiled at the 2001 Geneva Motor Show.';
        i = 2;
    }
    else if(i == 2){
        img.src = '3.jpg';
        msg.textContent = '3D Car Configurators: Many car manufacturers provide online 3D car configurators that allow you to customize and visualize different components, such as wheels, colors, interiors, and more.';
    }
    else{
        img.src = '1.jpg';
        msg.textContent = 'The Aston Martin Vanquish is a high-performance grand tourer introduced by the British luxury automobile manufacturer in 2001 as a successor to the Aston Martin Vantage (1993). The car was designed by Ian Callum and unveiled at the 2001 Geneva Motor Show.';
        i = 1;
    }

})