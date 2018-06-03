let suma = 0;

function add () {
    let number = document.getElementById("no.").value;
    suma += +number;

    document.getElementById("sum").value = suma;
    document.getElementById("no.").value = '';
}