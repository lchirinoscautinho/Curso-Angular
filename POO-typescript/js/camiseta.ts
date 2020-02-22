/*
class Camiseta{
                //Propiedades y caracteristicas del Objeto.
    
    public color:string;
    public modelo:string;
    public marca:string;
    public talla:string;
    public precio:number;
    
}

//instanciar clase camiseta:

var camiseta = new Camiseta();

camiseta.color="Rojo";
camiseta.modelo="Manga larga";
camiseta.marca="Nike";
camiseta.talla="L";
camiseta.precio= 10;

var playera = new Camiseta();

playera.color="Azul";
playera.modelo="Manga corta";
playera.marca="Adidas";
playera.talla="M";
playera.precio= 15;

console.log(camiseta, playera);  */

// Con propiedad Private 

class Camiseta{
    //Propiedades y caracteristicas del Objeto.

private color:string;
private modelo:string;
private marca:string;
private talla:string;
private precio:number;

//Metodos (funciones o accione del objeto).

constructor(color, modelo, marca, talla, precio){  // Fija los valores iniciales de una clase determinada
    this.color= color;
    this.modelo= modelo;
    this.marca= marca;
    this.talla= talla;
    this.precio= precio;
}

    public setColor(color){         //Metodo para modificar las propiedades de la clase private
        this.color=color;
    }

    public getColor(){
        return this.color;
    }

}

//instanciar clase camiseta:

var camiseta = new Camiseta("rojo","manga larga","nike","L","16");
    camiseta.setColor("Morado");

/*var playera = new Camiseta();
    playera.setColor("Naranja");*/

console.log(camiseta);