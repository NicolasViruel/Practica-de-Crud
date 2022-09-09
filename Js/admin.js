//importo la clase del producto
import{Producto} from "../Interface/Producto.js";


//obtengo los input del formulario
let inputCodigo= document.getElementById("inputCodigo");
let inputProducto = document.getElementById("inputProducto");
let inputDescripcion = document.getElementById("inputDescripcion");
let inputPrecio = document.getElementById("inputPrecio");
let Url = document.getElementById("inputUrl");
let form = document.getElementById("form")
console.log(form);
// creo array donde voy a guardar los productos (Json.parse compara si ya hay algo guardado en el localStorage)
let arrProductos = JSON.parse(localStorage.getItem("listaProductos")) || []


//Funciones

const handleSubmit=(e)=>{
    e.preventDefault();
   const nuevoProducto = new Producto (inputCodigo.value , inputProducto.value,
    inputDescripcion.value, inputPrecio.value , inputUrl.value)
    
    console.log(nuevoProducto)

    //Guardo primero en un array
    arrProductos.push(nuevoProducto)
    console.log(arrProductos);
    //Para guardar en localStorage
    localStorage.setItem("listaProductos", JSON.stringify(arrProductos));
    //Para resetear el Formulario (este caso utilizo la variable Form)
    form.reset()
}

//ahora la etiqueta form escucha el evento
form.addEventListener("submit" , handleSubmit)