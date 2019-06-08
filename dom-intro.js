// Immediately invoked function expression. IIFE

(function () {



    function clickHandler(message) {
        alert('hi.....' + message)
    }

    // Get a refrerence to myButon
    let myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function () {
        clickHandler('hi from IIFE')
    })

})();