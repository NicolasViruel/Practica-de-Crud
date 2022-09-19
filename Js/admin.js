//importo la clase del producto
import{Producto} from "../Interface/Producto.js";


//obtengo los input del formulario
let inputCodigo= document.getElementById("inputCodigo");
let inputProducto = document.getElementById("inputProducto");
let inputDescripcion = document.getElementById("inputDescripcion");
let inputPrecio = document.getElementById("inputPrecio");
let inputUrl = document.getElementById("inputUrl");
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
    //agrego la funcion (crearFilaProducto con nuevoProducto) para que los producto que valla creando se me agreguen sin necesidad de actualizar la pagina
    crearFilaProducto(nuevoProducto);
}

//ahora la etiqueta form escucha el evento
form.addEventListener("submit" , handleSubmit)

//traigo el Tbody del html

let tbodyListaProductos = document.getElementById("bodyListaProductos")

//ahora necesito recorrer el arrayProductos y me valla creando uno por uno
//entonces primero creo una funcion y desp lo recorro con un Foreach

const crearFilaProducto = (producto) =>{
    tbodyListaProductos.innerHTML += `
    <tr>
        <th>${producto.codigo}</th>
        <th>${producto.producto}</th>
        <th>${producto.descripcion}</th>
        <th>${producto.precio}</th>
        <th>${producto.url}</th>
        <th class="text-center">
      <button class="btn btn-primary my-1">Borrar</button>
      <button class="btn btn-warning my-1">Editar</button>
        </th>
  </tr>
    `
}
//recorro el array
arrProductos.forEach(element => {
    crearFilaProducto(element)
});
