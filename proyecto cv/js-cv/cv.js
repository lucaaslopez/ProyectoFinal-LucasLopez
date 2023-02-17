  
let acc = document.getElementsByClassName("pulsable");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const contenido = this.nextElementSibling;
    if (contenido.style.display === "block") {
    contenido.style.display = "none";
    } else {
    contenido.style.display === "block";
    }
});
}

const persona = '{"name":{"title":"Mr","first":"Eugenio","last":"Duran"},"location":{"street":{"number":8171,"name":"Calle de La Almudena"},"city":"Mérida","state":"Canarias","country":"Spain","postcode":89285,"coordinates":{"latitude":"-36.6434","longitude":"-24.6740"},"timezone":{"offset":"-10:00","description":"Hawaii"}},"email":"eugenio.duran@example.com","phone":"981-283-717","cell":"675-480-702","id":{"name":"DNI","value":"15873262-B"},"picture":{"large":"https://randomuser.me/api/portraits/men/79.jpg","medium":"https://randomuser.me/api/portraits/med/men/79.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/79.jpg"},"nat":"ES"}'
const obj = JSON.parse(persona);
console.log(obj);
document.getElementById("nombre").innerHTML = obj.name.first+" "+obj.name.last;
document.getElementById("domicilio").innerHTML = obj.location.street.name+" "+obj.location.street.number+". <br>"+obj.location.city+", "+obj.location.state+", "+obj.location.country;
document.getElementById("documento").innerHTML = obj.id.name+" "+obj.id.value;
document.getElementById("email").innerHTML = obj.email;
document.getElementById("telefonos").innerHTML = "Teléfono Fijo: " + obj.phone +", "+"<br>Teléfono Celular: "+obj.cell;
document.getElementById("fotocv").src= obj.picture.large;
