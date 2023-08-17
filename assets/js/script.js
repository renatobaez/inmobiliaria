const data =[
{
	name: "Casa de campo",
	description: "Un lugar ideal para descansar de la ciudad",
	src: "./assets/img/01.jpg",
	rooms: 2,
	meters: 170
},
{
	name: "Casa de playa",
  description: "Despierta tus días oyendo el oceano",
  src: "./assets/img/06.jpg",
  rooms: 2,
  meters: 130
},
{
	name: "Casa en el centro",
  description: "Ten cerca de ti todo lo que necesitas",
  src: "./assets/img/03.jpg",
  rooms: 1,
  meters: 80
},
{
	name: "Casa rodante",
  description: "Conviertete en un nómada del mundo sin salir de tu casa",
  src: "./assets/img/05.jpg",
  rooms: 1,
  meters: 6
},
{
	name: "Departamento",
  description: "Desde las alturas todo se ve mejor",
  src: "./assets/img/02.jpg",
  rooms: 3,
  meters: 200
},
{
	name: "Mansión",
  description: "Vive una vida lujosa en la mansión de tus sueños",
  src: "./assets/img/04.jpg",
  rooms: 5,
  meters: 500
}
]
/* ELEMENTOS BUSQUEDA */
const btnSearch = document.querySelector("#btnSearch")
const formFrom = document.querySelector("#from")
const formTo = document.querySelector("#to")
const formRooms = document.querySelector("#rooms")
/* ELEMENTOS RESULTADO */
const titleProducts = document.querySelector(".title-products")
const products = document.querySelector(".products")

const template = (product) => {
	return (`
			<div class="card">
				<img class="card-img-top" src="${product.src}" alt="${product.name}">
				<div class="card-title">${product.name}</div>
				<ul class="card-details">
					<li>Cuartos: ${product.rooms}</li>
					<li>Metros: ${product.meters}</li>
				</ul>
				<div class="card-text">${product.description}</div>
				<button>Ver más</button>
			</div>`)
}

const getProducts = (rooms = null, mfrom = null, mto = null) => {
	let html = ""
	let count = 0;
	for (let product of data) {
		if(rooms === null && mfrom === null && mto === null){
			count++;
			html += template(product)
		}else if(product.rooms >= rooms && product.meters >= mfrom && product.meters <= mto){
			count++;
			html += template(product)
		}
	}
	titleProducts.innerHTML = `Total: ${count}`
	products.innerHTML = html
}
btnSearch.addEventListener("click" , () =>{
	if(formRooms.value != '' && formTo.value != '' && formFrom.value != ''){
		getProducts(formRooms.value, formFrom.value , formTo.value)
	}else {
		alert("Faltan campos por llenar")
		getProducts()
	}
})
getProducts()