export class Producto{
    constructor(codigo, producto, descripcion, precio, url){
        this.codigo = codigo
        this.producto = producto
        this.descripcion = descripcion
        this.precio = precio
        this.url = url;
    }
    //comienzo con los metodos Gett
    get Codigo(){
        return this.codigo
    }
    get Producto(){
        return this.producto
    }
    get Descripcion(){
        return this.descripcion
    }
    get Precio(){
        return this.precio
    }
    get Url(){
        return this.url
    }
    //comienzo con los metodos Sett

    set setCodigo(codigo){
        this.codigo = codigo
    }
    set setProducto(producto){
        this.producto = producto
    }
    set setDescripcion(Descripcion){
        this.Descripcion = Descripcion
    }
    set setPrecio(Precio){
        this.Precio = Precio
    }
    set setUrl(Url){
        this.Url = Url
    }




}

