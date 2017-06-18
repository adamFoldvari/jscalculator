var buttons = document.querySelectorAll('button')
var operators = ['%', '*', '/', '+', '-', '(', ')']
var wasEval = false;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(e) {
        var screen = document.querySelector('p');
        var screenValue = screen.innerHTML;
        var buttonValue = this.innerHTML;
        
        if (wasEval) {
            screen.innerHTML = '';
            wasEval = false;
        }

        if (buttonValue == 'C') {
            screen.innerHTML = ""; 
        }
        else if (buttonValue == '='){
            var evaluation = eval(screen.innerHTML);

            if (evaluation == 'Infinity') {
                screen.innerHTML = 'Error: zero divison'
            }
            else if(evaluation == undefined) {
                screen.innerHTML = 'Enter an operation'
            }
            else {
                screen.innerHTML = eval(screen.innerHTML);
            }
            wasEval = true;
        }
        else if (buttonValue == 'A'){
            screen.innerHTML = screen.innerHTML
        }
        else if (operators.indexOf(buttonValue) > -1) {
            var lastCharacter = screenValue[screenValue.length-1];
            
            if (screenValue == '' && buttonValue == '-') {
                screen.innerHTML = screen.innerHTML + buttonValue;
            }

            else if (screenValue != '' && operators.indexOf(lastCharacter) == -1) {
                screen.innerHTML = screen.innerHTML + buttonValue;
            }

            else if(screenValue != '' && operators.indexOf(lastCharacter) > -1) {
                screen.innerHTML = screenValue.replace(/.$/, buttonValue);
            }
            
        
          }
        else {
            screen.innerHTML = screen.innerHTML + buttonValue
        }

    }
}