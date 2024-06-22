(function() {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.btn');
    const clear = document.querySelector('.btn-clear');
    const equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            const value = e.target.dataset.num;
            if (value !== undefined) {
                screen.value += value;
            }
            console.log('Button clicked:', value);
        });
    });

    equal.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = "";
        } else {
            try {
                const answer = eval(screen.value);
                screen.value = answer;
            } catch (error) {
                screen.value = "Error";
            }
        }
        console.log('Equal button clicked, screen value:', screen.value);
    });

    clear.addEventListener('click', function(e) {
        screen.value = "";
        console.log('Clear button clicked');
    });

})();