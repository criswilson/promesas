class Persona {
  constructor(nombre, instagram) {
    this.nombre = nombre;
    this.instagram = instagram;
  }
}

const data = [
  [`Cristián Wilson`, `@je_suis_wilson`],
  [`Robertito`, `@roberto8754`],
  [`Maxi Trusso`],
  [`Alberto Fernández`, `@alferdez`],
];

const personas = [];

for (let i = 0; i < data.length; i++) {
  personas[i] = new Persona(data[i][0], data[i][1]);
}

const obtenerPersona = (id) => {
  return new Promise((resolve, reject) => {
    if (personas[id] == undefined) reject(`No se ha encontrado la persona`);
    else {
      resolve(personas[id]);
    }
  });
};

const obtenerInstagram = (id) => {
  return new Promise((resolve, reject) => {
    if (personas[id].instagram == undefined)
      reject(`No se ha encontrado el instagram`);
    else {
      resolve(personas[id].instagram);
    }
  });
};

let id = 4;

obtenerPersona(id)
  .then((persona) => {
    console.log(persona.nombre);
    return obtenerInstagram(id);
  })
  .then((instagram) => {
    console.log(instagram);
  })
  .catch((e) => {
    console.log(e);
  });

// let nombre = `Pedoro`;

// const promesa = new Promise((resolve, reject) => {
//   if (nombre !== `Pedro`) reject`Lo siento, el nombre no es Pedro`;
//   else resolve(nombre);
// });

// promesa
//   .then((resultado) => {
//     console.log(resultado);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// class Persona {
//   constructor(nombre, instagram) {
//     this.nombre = nombre;
//     this.instagram = instagram;
//   }
// }

// const data = [
//   [`Cristián Wilson`, `@je_suis_wilson`],
//   [`Robertito`, `@roberto8754`],
//   [`Maxi Trusso`],
//   [`Alberto Fernández`, `@alferdez`],
// ];

// const personas = [];

// for (let i = 0; i < data.length; i++) {
//   personas[i] = new Persona(data[i][0], data[i][1]);
// }

// const obtenerPersona = (id) => {
//   if (personas[id] == undefined) {
//     cb(`No se ha encontrado la persona`);
//   } else {
//     cb(null, personas[id], id);
//   }
// };

// const obtenerInstagram = (id, cb) => {
//   if (personas[id].instagram == undefined) {
//     cb(`No se ha encontrado el instagram`);
//   } else {
//     cb(null, personas[id].instagram);
//   }
// };

// obtenerPersona(3, (err, persona, id) => {
//   if (err) console.log(err);
//   else {
//     console.log(persona.nombre);
//     obtenerInstagram(id, (err, instagram) => {
//       if (err) console.log(err);
//       else console.log(instagram);
//     });
//   }
// });
