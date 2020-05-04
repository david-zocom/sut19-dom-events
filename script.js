console.log('Script starts executing');

window.addEventListener('load', () => {
    // Danger! This code uses the DOM.
    // Must wait until page finished LOADing.
    let actionButton = document.querySelector('#actionButton');
    let resultDiv = document.querySelector('#result');
    let colorButton1 = document.querySelector('#color1');
    let colorButton2 = document.querySelector('#color2');

    if( actionButton ) {
        console.log('Action button has loaded');
        actionButton.addEventListener('click', event => {
            console.log('You clicked the button!');
            resultDiv.innerHTML = 'Text has been changed <br>for the better!';
        })
    } else {
        console.log('Action button is null!');
    }

    colorButton1.addEventListener('click', event => {
        resultDiv.classList.toggle('color1');
    })
    colorButton2.addEventListener('click', event => {
        resultDiv.classList.toggle('color2');
    })


    let addMovieButton = document.querySelector('#addMovie');
    let inputMovieName = document.querySelector('#movieName');
    let movieList = document.querySelector('#movieList');

    addMovieButton.addEventListener('click', e => {
        let movieName = inputMovieName.value;
        let newEl = document.createElement('li');
        newEl.innerText = movieName;
        newEl.addEventListener('click', e => {
            newEl.classList.toggle('selected');
        })
        movieList.appendChild(newEl);
    });
})

console.log('Script finishes executing');









//
