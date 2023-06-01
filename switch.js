let paiva;
switch (new Date().getDay()) {
  case 0:
    paiva = "Sunnuntai";
    break;
  case 1:
    paiva = "Maanantai";
    break;
  case 2:
    paiva = "Tiistai";
    break;
  case 3:
    paiva = "Keskiviikko";
    break;
  case 4:
    paiva = "Torstai";
    break;
  case 5:
    paiva = "Perjantai";
    break;
  case 6:
    paiva = "Lauantai";
}
document.getElementById("demo").innerHTML = 
"Tänään on " + paiva + ".";