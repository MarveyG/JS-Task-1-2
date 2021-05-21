function convertFahrToCelcius(){
    var c = document.getElementById('data').value;
    var f = (c - 32) / 1.8; 
    if (f == (c - 32) / 1.8) {
    document.getElementById('res').innerText = `${c} deg C = ${f.toFixed(4)} deg Fahr`;
    }
    else if (f != (c - 32) / 1.8) {
    document.getElementById('res').innerText = `${c} is not a valid number but something else, like an array or object or lettter ${f}`;
    }
}