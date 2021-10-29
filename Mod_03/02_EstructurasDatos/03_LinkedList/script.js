// LinkedList
// Una lista enlazada es una estructura de datos en la que cada elemento tiene una referencia al siguiente.

const list = {
  head: {
    // Cabeza del nodo
    value: 1,
    next: {
      value: "Hola",
      next: {
        value: { nombre: "Alvaro" },
        next: {
          value: true,
          next: {
            // Comienzo nodo
            value: NaN, // Valor del nodo
            next: null, // Valor del siguiente nodo
          }, // Fin nodo
        },
      },
    },
  },
};

console.log(list.head.next.next.next.next.value);

const LinkedList2 = {
  head: {
    value: 400,
    next: {
      value: 300,
      next: {
        value: 200,
        next: {
          value: 100,
          next: null,
        },
      },
    },
  },
};
console.log(LinkedList2);
