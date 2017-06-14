var buttons = document.querySelectorAll('span');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(e){
        var screen = document.querySelector('#screen')
        var screenValue = screen.innerHTML
        var buttonValue = this.innerHTML

        if (buttonValue == 'C') {
            screen.innerHTML = ''
        }

        // else if (buttonValue == )
    }
}