console.log('Script starts executing');

window.addEventListener('load', () => {
    // Danger! This code uses the DOM.
    // Must wait until page finished LOADing.
    let actionButton = document.querySelector('#actionButton');

    if( actionButton ) {
        console.log('Action button has loaded');
        actionButton.addEventListener('click', event => {
            console.log('You clicked the button!');
        })
    } else {
        console.log('Action button is null!');
    }
})

console.log('Script finishes executing');
