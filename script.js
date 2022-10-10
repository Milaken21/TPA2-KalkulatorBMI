let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let berat = parseInt(document.getElementById('berat-input').value);
    let tinggi = parseInt(document.getElementById('tinggi-input').value);
    let bmi = (berat / (tinggi * tinggi) * 10000);
    document.getElementById('bmi-output').value = bmi ;

}
)


function hanyaAngka(event) {
    var angka = (event.which) ? event.which : event.keyCode
    if (angka != 46 && angka > 31 && (angka < 48 || angka > 57))
        return false;
    return true;
}

function resetForm() {
    document.getElementById("inputForm").reset();
}