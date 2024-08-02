
window.onload = () => {
    resize();
    calc();
}


function resize() {
    document.getElementById("exp").style.height = "0";
    document.getElementById("exp").style.height = document.getElementById("exp").scrollHeight + "px";
}


const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F"];
let depth = 0;

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
    depth++; console.log(" ".repeat(depth)+"Expr called");

    const term0 = term(s, i);
    let value = term0[0];
    i = term0[1];

    while (s[i] == "+" || s[i] == "-") {
        console.log(" ".repeat(depth+1)+"Operator found: "+s[i]);

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

    console.log(" ".repeat(depth)+"Expr exit"); depth--;

    return [value, i];
}

function term(s, i) {
    depth++; console.log(" ".repeat(depth)+"Term called");

    const factor0 = factor(s, i);
    let value = factor0[0];
    i = factor0[1];

    while (s[i] == "*" || s[i] == "/") {
        console.log(" ".repeat(depth+1)+"Operator found: "+s[i]);

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

    console.log(" ".repeat(depth)+"Term exit");  depth--;

    return [value, i];
}

function factor(s, i) {
    depth++; console.log(" ".repeat(depth)+"Factor called");

    if (DIGITS.includes(s[i])) {
        console.log(" ".repeat(depth+1)+"Digit found: "+s[i]);

        const vals = number(s, i);

        console.log(" ".repeat(depth)+"Factor exit"); depth--;

        return vals;
    } else if (s[i] == "(") {
        console.log(" ".repeat(depth+1)+"Parenthesis opened: "+s[i]);

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
            console.log(" ".repeat(depth+1)+"Parenthesis closed: "+s[i]);

            i = incremented(s, i);
        } else {
            throw new Error("Parenthesis not closed");
        }

        // value *= sign;

        console.log(" ".repeat(depth)+"Factor exit"); depth--;

        return [value, i];
    } else if (s[i] == "-") {  // <factor> ::= <number> | '(' <expr> ')' | '-' <factor>
        console.log(" ".repeat(depth+1)+"Minus sign found: "+s[i]);

        i = incremented(s, i);

        const fctr = factor(s, i);
        let value = fctr[0];
        i = fctr[1];

        console.log(" ".repeat(depth)+"Factor exit"); depth--;

        return [value * -1, i];
    } else {
        if (s[i] === undefined) {
            throw new Error(`Expression ended unexpectedly`);
        } else {
            throw new Error(`Expected a digit, <code>-</code> or <code>(</code>, but found <code>${s[i]}</code> (${i})`);
        }
    }
}

function number(s, i) {
    depth++; console.log(" ".repeat(depth)+"Number called");

    let value = parseInt(s[i], 16);
    i = incremented(s, i);

    while (DIGITS.includes(s[i])) {
        console.log(" ".repeat(depth+1)+"Digit found: "+s[i]);

        value = value * 16 + parseInt(s[i], 16);
        i = incremented(s, i);
    }

    if (s[i] == ".") {
        console.log(" ".repeat(depth+1)+"Point found: "+s[i]);

        i = incremented(s, i);

        let place = 16;

        while (DIGITS.includes(s[i])) {
            console.log(" ".repeat(depth+1)+"Digit found: "+s[i]);

            value += parseInt(s[i], 16) / place;
            place *= 16;
            i = incremented(s, i);
        }
    }

    console.log(" ".repeat(depth)+"Number exit"); depth--;

    return [value, i];
}

function calc() {
    depth=0; console.log("".repeat(depth)+"Calc called");

    const expression = document.getElementById("exp").value;
    let i = 0;
    let value = 0;

    // 計算
    if (expression == "") {
        console.log("".repeat(depth+1)+"Input is null");
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
                throw new Error(`Parse terminated before <code>${expression[i]}</code> (${i})`);
            }
        } catch (e) {
            document.getElementById("val").innerHTML = e.message;
            console.log("Calc aborted")
            return;
        }
    }

    // 16進数化
    let result = value.toString(16);

    // 表示
    document.getElementById("val").textContent = result;

    console.log(" ".repeat(depth)+"Calc exit");
}
