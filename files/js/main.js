var buttons = document.querySelectorAll('span');
var operators = ['+', '-', '*', '/', '%',];
var wasEval = false;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(e){
        var screen = document.querySelector('#screen');
        var screenValue = screen.innerHTML;
        var buttonValue = this.innerHTML;

        if (wasEval) {
            screen.innerHTML = '';
            wasEval = false;
        }

        if (buttonValue == 'C') {
            screen.innerHTML = '';
        }

        else if (buttonValue == '=') {
            var equation = screenValue;
            equation = screen.innerHTML;
            screen.innerHTML = eval(equation);
            wasEval = true;
        }

        else if (operators.indexOf(buttonValue) > -1) {
            var lastChar = screenValue[screenValue.length - 1]

            if (screenValue != '' && operators.indexOf(lastChar) == -1 ) {
                screen.innerHTML += buttonValue;
            }
            else if (screenValue == '' && buttonValue == '-'){
                screen.innerHTML += buttonValue
            }
            if (operators.indexOf(lastChar) > -1 && screenValue.length > 1) {
                screen.innerHTML = screenValue.replace(/.$/, buttonValue);
            }
        }

        else {
            screen.innerHTML += buttonValue;
        }
    }
}