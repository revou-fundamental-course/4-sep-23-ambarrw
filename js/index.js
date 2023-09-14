function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function hitungLuasKeliling(){
    var Sisi, Luas, Keliling;

    Sisi = parseInt(document.getElementById("sisi").value);
    
    Keliling = 4 * Sisi;
    Luas = Sisi * Sisi;

    document.getElementById("keliling").value = Keliling;
    document.getElementById("luas").value = Luas;
}


function hitungKelilingPersegi(sisi) {
  let keliling = 4 * sisi;
  document.getElementById("keliling").value = Keliling;
  return keliling;
}
