const property =[
{
	nombre: "Casa de campo",
	descripcion: "Un lugar ideal para descansar de la ciudad",
	src: "./assets/img/01.jpg",
	cuartos: 2,
	metros: 170
},
{
	nombre: "Casa de playa",
  descripcion: "Despierta tus días oyendo el oceano",
  src: "./assets/img/06.jpg",
  cuartos: 2,
  metros: 130
},
{
	nombre: "Casa en el centro",
  descripcion: "Ten cerca de ti todo lo que necesitas",
  src: "./assets/img/03.jpg",
  cuartos: 1,
  metros: 80
},
{
	nombre: "Casa rodante",
  descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
  src: "./assets/img/05.jpg",
  cuartos: 1,
  metros: 6
},
{
	nombre: "Departamento",
  descripcion: "Desde las alturas todo se ve mejor",
  src: "./assets/img/02.jpg",
  cuartos: 3,
  metros: 200
},
{
	nombre: "Mansión",
  descripcion: "Vive una vida lujosa en la mansión de tus sueños",
  src: "./assets/img/04.jpg",
  cuartos: 5,
  metros: 500
}
]
const products = (rooms = null, mfrom = null, mto = null) => {
	let html = ""
	count = 0;
	for (let product of property) {
		if(rooms === null && mfrom === null && mto === null){
			count++;
			html += `
			<div class="card">
				<img class="card-img-top" src="${product.src}" alt="${product.nombre}">
				<div class="card-title">${product.nombre}</div>
				<ul class="card-details">
					<li>Cuartos: ${product.cuartos}</li>
					<li>Metros: ${product.metros}</li>
				</ul>
				<div class="card-text">${product.descripcion}</div>
				<button>Ver más</button>
			</div>`
		}else if(product.cuartos >= rooms && product.metros >= mfrom && product.metros <= mto){
			count++;
			html += `
				<div class="card">
					<img class="card-img-top" src="${product.src}" alt="${product.nombre}">
					<div class="card-title">${product.nombre}</div>
					<ul class="card-details">
						<li>Cuartos: ${product.cuartos}</li>
						<li>Metros: ${product.metros}</li>
					</ul>
					<div class="card-text">${product.descripcion}</div>
					<button>Ver más</button>
				</div>`
		}
	}
	const titleProducts = document.querySelector(".title-products")
	titleProducts.innerHTML = `Total: ${count}`

	const d = document.querySelector(".products")
	d.innerHTML = html
	
}
const btnSearch = document.querySelector("#btnSearch")
const formFrom = document.querySelector("#from")
const formTo = document.querySelector("#to")
const formRooms = document.querySelector("#rooms")
btnSearch.addEventListener("click" , () =>{
	if(formRooms.value != '' && formTo.value != '' && formFrom.value != ''){
		products(formRooms.value, formFrom.value , formTo.value)
	}else {
		alert("Faltan campos por llenar")
		products()
	}
})
products()