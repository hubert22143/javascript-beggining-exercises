        const calc = (str) => {
            const operators = {
                '+': (a,b) => a+b,
                '-': (a,b) => a-b,
                '*': (a,b) => a*b,
                '/': (a,b) => a/b,
                '**': (a,b) => a**b,
            }
            const [num1, operator, num2] = str.split(' ');
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            if(operator in operators){
                return operators[operator](a,b);
            }else{
                throw new Error("Unknown syntax");
            }
        }
        const result1 = calc("2 ** 5");
        alert(result1);