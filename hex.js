
window.onload = () => {
    resize();
    calc();
}


function resize() {
    document.getElementById("exp").style.height = "0";
    document.getElementById("exp").style.height = document.getElementById("exp").scrollHeight + "px";
}


const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F"];

function incremented(s, i) {
    i++;
    
    while (isBlank(s[i])) {
        i++;
    }
    
    return i;
}

function isBlank(chr) {
    return chr == " " || chr == "\n";
}

function expr(s, i) {
    const term0 = term(s, i);
    let value = term0[0];
    i = term0[1];
    
    while (s[i] == "+" || s[i] == "-") {
        let op = s[i];
        i = incremented(s, i);
        const term1 = term(s, i);
        let operand = term1[0];
        i = term1[1];
        
        if (op == "+") {
            value += operand;
        } else {
            value -= operand;
        }
    }
    
    return [value, i];
}

function term(s, i) {
    const factor0 = factor(s, i);
    let value = factor0[0];
    i = factor0[1];
    
    while (s[i] == "*" || s[i] == "/") {
        let op = s[i];
        i = incremented(s, i);
        const factor1 = factor(s, i);
        let operand = factor1[0];
        i = factor1[1];
        
        if (op == "*") {
            value *= operand;
        } else {
            value /= operand;
        }
    }
    
    return [value, i];
}

function factor(s, i) {
    if (DIGITS.includes(s[i])) {
        return number(s, i);
    } else if (s[i] == "(") {
        i = incremented(s, i);
        
        // <factor> ::= <number> | '(' ['-'] <expr> ')'
        // let sign = 1;
        // if (s[i] == "-") {
        //     sign = -1;
        //     i = incremented(s, i);
        // }
        
        const exp = expr(s, i);
        let value = exp[0];
        i = exp[1];
        
        if (s[i] == ")") {
            i = incremented(s, i);
        } else {
            throw new Error("parenthesis not closed");
        }
        
        // value *= sign;
        
        return [value, i];
    } else if (s[i] == "-") {  // <factor> ::= <number> | '(' <expr> ')' | '-' <factor>
        i = incremented(s, i);
        
        const fctr = factor(s, i);
        let value = fctr[0];
        i = fctr[1];
        
        return [value * -1, i];
    } else {
        if (s[i] === undefined) {
            throw new Error(`expression ended unexpectedly`);
        } else {
            throw new Error(`expected a digit, '-' or '(', but found '${s[i]}' (${i})`);
        }
    }
}

function number(s, i) {
    let value = parseInt(s[i], 16);
    i = incremented(s, i);
    
    while (DIGITS.includes(s[i])) {
        value = value * 16 + parseInt(s[i], 16);
        i = incremented(s, i);
    }
    
    if (s[i] == ".") {
        i = incremented(s, i);
        
        let place = 16;
        
        while (DIGITS.includes(s[i])) {
            value += parseInt(s[i], 16) / place;
            place *= 16;
            i = incremented(s, i);
        }
    }
    
    return [value, i];
}

function calc() {
    const expression = document.getElementById("exp").value;
    let i = 0;
    let value = 0;
    
    // 計算
    if (expression == "") {
        value = 0;
    } else {
        while (isBlank(expression[i])) {
            i++;
        }
        
        try {
            const rval = expr(expression, i);
            value = rval[0];
            i = rval[1];
            
            // 途中終了を検知
            if (i < expression.length) {
                throw new Error(`parse falsely completed before '${expression[i]}' (${i})`);
            }
        } catch (e) {
            document.getElementById("val").textContent = e.message;
            return;
        }
    }
    
    // 16進数化
    let result = value.toString(16);
    
    // 表示
    document.getElementById("val").textContent = result;
}
