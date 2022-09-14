const monedaE1_one = document.getElementById("moneda-uno")
const monedaE1_two = document.getElementById("moneda-dos")
const cantidadE1_one = document.getElementById("cantidad-uno")
const cantidadE1_two = document.getElementById("cantidad-dos")
const cambioE1= document.getElementById("cambio")
const tazaE1 = document.getElementById("taza")


// fetch (obtenga el tipo de cambio y el dom)
function calculate(){
    const moneda_one = monedaE1_one.value
    const moneda_two = monedaE1_two.value
}
const headers = { "Content-Type": "application/json" }

let url =" https://v6.exchangerate-api.com/v6/520e0c3747c6a6cd88570820/latest/USD" + monedaE1_one;
fetch (url)
    .then(res => res.json())
    .then(data =>{
        const taza=data.rates[monedaE1_two];
        cambioE1.innerText = `1 ${ monedaE1_one } = ${taza} ${ monedaE1_two }`;
        cantidadE1_two.value = (cantidadE1_one.value * taza).toFixed(2);
    });

//eventos 
monedaE1_one.addEventListener("change",calculate);
cantidadE1_one.addEventListener("input",calculate);
monedaE1_two.addEventListener("change",calculate);
cantidadE1_two.addEventListener("input",calculate);

taza.addEventListener('click',()=>{
    const temp = monedaE1_two.value; 
    monedaE1_one.value = monedaE1_two.value;
    monedaE1_two.value=temp;
    calculate();
})

calculate();
swal.fire("Actualmente las divisas de cambio pueden camiar a lo largo de la semana")
