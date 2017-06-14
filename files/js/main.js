var keys = $('#calculator span')
var operators = ['+', '-', 'x', '÷'];


for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		var input = document.querySelector('#screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
        
        if(btnVal == 'C') {
			input.innerHTML = '';
		}
        
        else if(btnVal == '=') {
			var equation = inputVal;		
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');			
			input.innerHTML = eval(equation);
		}

        else if(operators.indexOf(btnVal) > -1) {
			var lastChar = inputVal[inputVal.length - 1];
        
			if(inputVal != '' && operators.indexOf(lastChar) == -1) {
				input.innerHTML += btnVal;
            }
	
			else if(inputVal == '' && btnVal == '-'){ 
				input.innerHTML += btnVal;
            }

			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
        }

		else {
			input.innerHTML += btnVal;

        }
    }
}
