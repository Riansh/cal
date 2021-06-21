let textvalue = document.getElementById("textval");

function display(val) {
    textvalue.value += val;
}

function calculate() {
    let x = textvalue.value;
    try {
        var y = eval(x);
        if (Number.isInteger(y))
            textvalue.value = y;
        else
            textvalue.value = y.toFixed(2);
    } catch (err) {
        alert(err.message);

    }
}

function clr() {
    textvalue.value = "";
}