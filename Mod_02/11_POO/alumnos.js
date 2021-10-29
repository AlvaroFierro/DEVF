// Clase alumnos
// El metodo constructor es un metodo especial para crear e inicializar un objeto creado con una clase. Solo puede haber un metodo espacial con el nombre "constructor" en una clase. Si esta contiene ma de una ocurrencia del metodo constructor se arrojara un error

// Propiedades: son parametros obtenidos en la clase, cada instancia del objeto tiene dichas propiedades. Las propiedades deben establecerse a la propiead prototipo de la clase (funcion), para que la herencia funcione correctamente

// This para trabajar con propiedades dentro de la case se utiliza la palabra reservada this, que se refiere al objeto actual. El acceso (lectura o escritura) a un apropiedad desde fuera de la clase se hace con la sintaxis:

// NombreDeLaInstancia. priedad. Desde dentro de la clase la sintaxis es this.Propiedad que se utiliza para obtener o establecer el valor de la propiedad

//Metodos: ALgoritmo asociado a un objeto (o a una clase de objetos), cuya ejecucion se desencadena tras la recepcion de un "mensaje". Desde el punto de vista del comportamiento, es lo que el objeto puede hacer.

class Alumno {
  constructor(nombre, apellido, curso) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.curso = curso;
  }

  estudiar() {
    return "estoy estudiando";
  }
}

const Alvaro = new Alumno("Alvaro", "Fierro", "Master en code");
const Alumno2 = new Alumno("Otro ", "alumno", "profesional en code");
console.log(Alvaro);
console.log(Alumno2);
