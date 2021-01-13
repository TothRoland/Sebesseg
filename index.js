function szamol() {
    let ut = document.getElementById("ut").value;
    let ido = document.getElementById("ido").value;
    let sebesseg = +ut * +ido;
    document.getElementById("szorzat").innerHTML = "Sebesség: " + sebesseg + " km/h";
}