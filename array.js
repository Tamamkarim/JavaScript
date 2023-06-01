const pelit = ["Minecraft", "Skyrim", "League of Legends", "Elden Ring"];
let pituus = pelit.length;

let teksti = "<ul>";
for (let i = 0; i < pituus; i++) {
  teksti += "<li>" + pelit[i] + "</li>";
}
teksti += "</ul>";

document.getElementById("demo").innerHTML = teksti;
