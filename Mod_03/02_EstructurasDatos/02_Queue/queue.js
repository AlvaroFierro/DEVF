// Queue (cola);

class Queue {
  constructor() {
    this.collection = [];
  }

  queue(newElement) {
    this.collection.push(newElement);

    return this.collection;
  }

  dequeue() {
    if (this.collection.length === 0) return null;

    return this.collection.shift();
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  front() {
    if (this.collection.length === 0) return null;

    return this.collection[0];
  }

  back() {
    if (this.collection.length === 0) return null;

    return this.collection[this.collection.length - 1];
  }

  size() {
    return this.collection.length;
  }

  print() {
    return this.collection;
  }
}

const miColeccion = new Queue();
miColeccion.queue(1);
miColeccion.queue(2);
console.log("front", miColeccion.front());
console.log("back", miColeccion.back());
console.log("size", miColeccion.size());
console.log("print", miColeccion.print());

console.log(miColeccion);
console.log(miColeccion.isEmpty());

const elemento = miColeccion.dequeue();
const elemento2 = miColeccion.dequeue();
console.log(elemento2);

console.log(miColeccion.isEmpty());

const elemento3 = miColeccion.dequeue();
console.log("front", miColeccion.front());
console.log("size", miColeccion.size());
console.log("print", miColeccion.print());

console.log(miColeccion.isEmpty());
