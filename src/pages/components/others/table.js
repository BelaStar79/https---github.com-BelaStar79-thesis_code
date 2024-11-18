// variable that stores the ID to locate data
export let id_row = 0;
export function setIdRow(id) {
  id_row = id;
}
export let id_rowTwo = 0;
export function setIdRowTwo(id) {
  id_rowTwo = id;
}



// variables random 
const activo = "Sí";
const fecha_inicio = "01/01/2024";
const fecha_fin = "01/02/2024";
const turno = "12 horas";
const horario = "07:00 pm";
const valor = 1;
const nombreRecurso = "Llave local";
export const empty_list = [];
export let personas = {
  0:{ci: "00000000000",solapin: "A000000",cargo: "Administrador",expediente:"T00000", sexo:"Femenino", residente:"Si", categoria:"Administrador", provincia:"La Habana", municipio:"Centro Habana", nombre: "Nombre Administrador",usuario: "admin"},
  1:{ci: "00000000001",solapin: "T000001",cargo: "Trabajador",expediente:"T00001", sexo:"Masculino", residente:"Si", categoria:"Trabajador", provincia:"Pinar del Río", municipio:"Viñales", nombre: "Nombre Usuario Uno",usuario: "nuuno"},
  2:{ci: "00000000002",solapin: "E000002",cargo: "Estudiante",expediente:"T00002", sexo:"Femenino", residente:"Si", categoria:"Estudiante", provincia:"Artemisa", municipio:"Guanajay", nombre: "Nombre Usuario Dos",usuario: "nudos"},
  3:{ci: "00000000003",solapin: "E000003",cargo: "Estudiante",expediente:"T00003", sexo:"Masculino", residente:"Si", categoria:"Estudiante", provincia:"Mayabeque", municipio:"San José de la Lajas", nombre: "Nombre Usuario Tres",usuario: "nutres"},
  4:{ci: "00000000004",solapin: "T000004",cargo: "Trabajador",expediente:"T00004", sexo:"Masculino", residente:"Si", categoria:"Trabajador", provincia:"Matanzas", municipio:"Varadero", nombre: "Nombre Usuario Cuatro",usuario: "nucuatro"},
  5:{ci: "00000000005",solapin: "E000005",cargo: "Estudiante",expediente:"T00005", sexo:"Masculino", residente:"Si", categoria:"Estudiante", provincia:"Cienfuegos", municipio:"Cienfuegos", nombre: "Nombre Usuario Cinco",usuario: "nucinco"},
  6:{ci: "00000000006",solapin: "E000006",cargo: "Estudiante",expediente:"T00006", sexo:"Masculino", residente:"Si", categoria:"Estudiante", provincia:"Villa Clara", municipio:"Santa Clara", nombre: "Nombre Usuario Seis",usuario: "nuseis"},
  7:{ci: "00000000007",solapin: "T000007",cargo: "Trabajador",expediente:"T00007", sexo:"Masculino", residente:"Si", categoria:"Trabajador", provincia:"Sancti Spíritus", municipio:"Trinidad", nombre: "Nombre Usuario Siete",usuario: "nusiete"},
  8:{ci: "00000000008",solapin: "E000008",cargo: "Estudiante",expediente:"T00008", sexo:"Femenino", residente:"Si", categoria:"Estudiante", provincia:"Ciego de Ávila", municipio:"Morón", nombre: "Nombre Usuario Ocho",usuario: "nuocto"},
  9:{ci: "00000000009",solapin: "E000009",cargo: "Estudiante",expediente:"T00009", sexo:"Masculino", residente:"Si", categoria:"Estudiante", provincia:"Camagüey", municipio:"Camagüey", nombre: "Nombre Usuario Nueve",usuario: "nunueve"},
  10:{ci: "00000000010",solapin: "T000010",cargo: "Trabajador",expediente:"T00010", sexo:"Masculino", residente:"Si", categoria:"Trabajador", provincia:"Las Tunas", municipio:"Puerto Padre", nombre: "Nombre Usuario Diez",usuario: "nudiez"},
  11:{ci: "00000000011",solapin: "E000011",cargo: "Estudiante",expediente:"T00011", sexo:"Masculino", residente:"Si", categoria:"Estudiante", provincia:"Las Tunas", municipio:"Las Tunas", nombre: "Nombre Usuario Once",usuario: "nuonce"},
  12:{ci: "00000000012",solapin: "E000012",cargo: "Estudiante",expediente:"T00012", sexo:"Masculino", residente:"Si", categoria:"Estudiante", provincia:"La Habana", municipio:"Diez de Octubre", nombre: "Nombre Usuario Doce",usuario: "nudoce"},
  13:{ci: "00000000013",solapin: "T000013",cargo: "Trabajador",expediente:"T00013", sexo:"Masculino", residente:"Si", categoria:"Trabajador", provincia:"Pinar del Río", municipio:"", nombre: "Nombre Usuario Trece",usuario: "nutrece"},
  14:{ci: "00000000014",solapin: "E000014",cargo: "Estudiante",expediente:"T000014", sexo:"Femenino", residente:"Si", categoria:"Estudiante", provincia:"Artemisa", municipio:"Bauta", nombre: "Nombre Usuario Catorce",usuario: "nucatorce"},
  15:{ci: "00000000015",solapin: "E000015",cargo: "Estudiante",expediente:"T00015", sexo:"Femenino", residente:"Si", categoria:"Estudiante", provincia:"Mayabeque", municipio:"Jaruco", nombre: "Nombre Usuario Quince",usuario: "nuquince"},
  16:{ci: "00000000016",solapin: "T000016",cargo: "Trabajador",expediente:"T00016", sexo:"Masculino", residente:"Si", categoria:"Trabajador", provincia:"Matanzas", municipio:"Cárdenas", nombre: "Nombre Usuario Dieciseis",usuario: "nudieciseis"},
  17:{ci: "00000000017",solapin: "E000017",cargo: "Estudiante",expediente:"T00017", sexo:"Masculino", residente:"Si", categoria:"Estudiante", provincia:"Cienfuegos", municipio:"Aguada de pasajeros", nombre: "Nombre Usuario Diecisiete",usuario: "nudiecisiete"},
  18:{ci: "00000000018",solapin: "E000018",cargo: "Estudiante",expediente:"T00018", sexo:"Femenino", residente:"Si", categoria:"Estudiante", provincia:"Villa Clara", municipio:"Remedios", nombre: "Nombre Usuario Dieciocho",usuario: "nudieciocho"},
  19:{ci: "00000000019",solapin: "T000019",cargo: "Trabajador",expediente:"T00019", sexo:"Masculino", residente:"Si", categoria:"Trabajador", provincia:"Sancti Spíritus", municipio:"Cabaiguán", nombre: "Nombre Usuario Diecinueve",usuario: "nudiecinueve"},
  20:{ci: "00000000020",solapin: "E000020",cargo: "Estudiante",expediente:"T00020", sexo:"Masculino", residente:"Si", categoria:"Estudiante", provincia:"Ciego de Ávila", municipio:"Morón", nombre: "Nombre Usuario Veinte",usuario: "nuveinte"},
  21:{ci: "00000000021",solapin: "E000021",cargo: "Estudiante",expediente:"T00021", sexo:"Masculino", residente:"Si", categoria:"Estudiante", provincia:"Camagüey", municipio:"Florida", nombre: "Nombre Usuario Veintiuno",usuario: "nuveintiuno"},
  22:{ci: "00000000022",solapin: "T000022",cargo: "Trabajador",expediente:"T00022", sexo:"Femenino", residente:"Si", categoria:"Trabajador", provincia:"Holgín", municipio:"Moa", nombre: "Nombre Usuario Veintidós",usuario: "nuveintidos"},
  23:{ci: "00000000023",solapin: "E000023",cargo: "Estudiante",expediente:"T00023", sexo:"Masculino", residente:"Si", categoria:"Estudiante", provincia:"Holgín", municipio:"Gibara", nombre: "Nombre Usuario Veintitrés",usuario: "nuveintitres"},
  24:{ci: "00000000024",solapin: "E000024",cargo: "Estudiante",expediente:"T00024", sexo:"Masculino", residente:"Si", categoria:"Estudiante", provincia:"Granma", municipio:"Bayamo", nombre: "Nombre Usuario Veinticuatro",usuario: "nuveinticuatro"},
  25:{ci: "00000000025",solapin: "T000025",cargo: "Trabajador",expediente:"T00025", sexo:"Femenino", residente:"Si", categoria:"Trabajador", provincia:"Granma", municipio:"Manzanillo", nombre: "Nombre Usuario Veinticinco",usuario: "nuveinticinco"},
  26:{ci: "00000000026",solapin: "E000026",cargo: "Estudiante",expediente:"T00026", sexo:"Masculino", residente:"Si", categoria:"Estudiante", provincia:"Santiago de Cuba", municipio:"Palmasoriano", nombre: "Nombre Usuario Veintiséis",usuario: "nuveintiseis"},
  27:{ci: "00000000027",solapin: "E000027",cargo: "Estudiante",expediente:"T00027", sexo:"Masculino", residente:"Si", categoria:"Estudiante", provincia:"Santiago de Cuba", municipio:"Segundo Frente", nombre: "Nombre Usuario Veintisiete",usuario: "nuveintisiete"},
  28:{ci: "00000000028",solapin: "T000028",cargo: "Trabajador",expediente:"T00028", sexo:"Masculino", residente:"Si", categoria:"Trabajador", provincia:"Guantánamo", municipio:"Maisí", nombre: "Nombre Usuario Veintiocho",usuario: "nuveintiocho"},
  29:{ci: "00000000029",solapin: "T000029",cargo: "Trabajador",expediente:"T000029", sexo:"Masculino", residente:"Si", categoria:"Trabajador", provincia:"Guantánamo", municipio:"Baracoa", nombre: "Nombre Usuario Veintinueve",usuario: "nuveintinueve"},
  30:{ci: "00000000030",solapin: "T000030",cargo: "Trabajador",expediente:"T00030", sexo:"Masculino", residente:"Si", categoria:"Trabajador", provincia:"Guantánamo", municipio:"Caimanera", nombre: "Nombre Usuario Treinta",usuario: "nutreinta"},
};
export let zonas = [
  {id: 1, activo:activo, planificador: personas[0].nombre, responsable: personas[1].nombre, nombre: "Docentes"},
  {id: 2, activo:activo, planificador: personas[0].nombre, responsable: personas[19].nombre, nombre: "Comedores"},
  {id: 3, activo:activo, planificador: personas[0].nombre, responsable: personas[28].nombre, nombre: "Rectorado"},
];
export let estructuras = [
  {id: 1, activo:activo, id_zona: zonas[0].id, nombre: "Docente 1"},
  {id: 2, activo:activo, id_zona: zonas[0].id, nombre: "Docente 2"},
  {id: 3, activo:activo, id_zona: zonas[0].id, nombre: "Docente 3"},
  {id: 4, activo:activo, id_zona: zonas[0].id, nombre: "Docente 4"},
  {id: 5, activo:activo, id_zona: zonas[0].id, nombre: "Docente FTE"},
  {id: 6, activo:activo, id_zona: zonas[0].id, nombre: "Docente CITEC"},
  {id: 7, activo:activo, id_zona: zonas[1].id, nombre: "Complejo Comedor 1"},
  {id: 8, activo:activo, id_zona: zonas[1].id, nombre: "Complejo Comedor 2"},
  {id: 9, activo:activo, id_zona: zonas[1].id, nombre: "Complejo Comedor 3"},
  {id: 10, activo:activo, id_zona: zonas[2].id, nombre: "Rectorado"},
];
export let posta = [
  {id: 1, activo:activo, id_estructura:estructuras[0].id, estructura: estructuras[0].nombre, cantidad: 1, descripcion:"", nombre: "1er piso Docente 1"},
  {id: 2, activo:activo, id_estructura:estructuras[0].id, estructura: estructuras[0].nombre, cantidad: 1, descripcion:"", nombre: "2do piso Docente 1"},
  {id: 3, activo:activo, id_estructura:estructuras[0].id, estructura: estructuras[0].nombre, cantidad: 1, descripcion:"", nombre: "3er piso Docente 1"},
  {id: 4, activo:activo, id_estructura:estructuras[1].id, estructura: estructuras[1].nombre, cantidad: 1, descripcion:"", nombre: "1er piso Docente 2"},
  {id: 5, activo:activo, id_estructura:estructuras[1].id, estructura: estructuras[1].nombre, cantidad: 1, descripcion:"", nombre: "2do piso Docente 2"},
  {id: 6, activo:activo, id_estructura:estructuras[1].id, estructura: estructuras[1].nombre, cantidad: 1, descripcion:"", nombre: "3er piso Docente 2"},
  {id: 7, activo:activo, id_estructura:estructuras[2].id, estructura: estructuras[2].nombre, cantidad: 1, descripcion:"", nombre: "1er piso Docente 3"},
  {id: 8, activo:activo, id_estructura:estructuras[2].id, estructura: estructuras[2].nombre, cantidad: 1, descripcion:"", nombre: "2do piso Docente 3"},
  {id: 9, activo:activo, id_estructura:estructuras[2].id, estructura: estructuras[2].nombre, cantidad: 1, descripcion:"", nombre: "3er piso Docente 3"},
  {id: 10, activo:activo, id_estructura:estructuras[3].id, estructura: estructuras[3].nombre, cantidad: 1, descripcion:"", nombre: "1er piso Docente 4"},
  {id: 11, activo:activo, id_estructura:estructuras[3].id, estructura: estructuras[3].nombre, cantidad: 1, descripcion:"", nombre: "2do piso Docente 4"},
  {id: 12, activo:activo, id_estructura:estructuras[3].id, estructura: estructuras[3].nombre, cantidad: 1, descripcion:"", nombre: "3er piso Docente 4"},
  {id: 13, activo:activo, id_estructura:estructuras[4].id, estructura: estructuras[4].nombre, cantidad: 1, descripcion:"", nombre: "1er piso Docente FTE"},
  {id: 14, activo:activo, id_estructura:estructuras[4].id, estructura: estructuras[4].nombre, cantidad: 1, descripcion:"", nombre: "2do piso Docente FTE"},
  {id: 15, activo:activo, id_estructura:estructuras[4].id, estructura: estructuras[4].nombre, cantidad: 1, descripcion:"", nombre: "3er piso Docente FTE"},
  {id: 16, activo:activo, id_estructura:estructuras[5].id, estructura: estructuras[5].nombre, cantidad: 1, descripcion:"", nombre: "1er piso Docente CITEC"},
  {id: 17, activo:activo, id_estructura:estructuras[5].id, estructura: estructuras[5].nombre, cantidad: 1, descripcion:"", nombre: "2do piso Docente CITEC"},
  {id: 18, activo:activo, id_estructura:estructuras[5].id, estructura: estructuras[5].nombre, cantidad: 1, descripcion:"", nombre: "3er piso Docente CITEC"},
  {id: 19, activo:activo, id_estructura:estructuras[6].id, estructura: estructuras[6].nombre, cantidad: 1, descripcion:"", nombre: "Comedor 1 Complejo Comedor 1"},
  {id: 20, activo:activo, id_estructura:estructuras[6].id, estructura: estructuras[6].nombre, cantidad: 1, descripcion:"", nombre: "Comedor 2 Complejo Comedor 1"},
  {id: 21, activo:activo, id_estructura:estructuras[6].id, estructura: estructuras[6].nombre, cantidad: 1, descripcion:"", nombre: "Comedor 3 Complejo Comedor 1"},
  {id: 22, activo:activo, id_estructura:estructuras[7].id, estructura: estructuras[7].nombre, cantidad: 1, descripcion:"", nombre: "Comedor 1 Complejo Comedor 2"},
  {id: 23, activo:activo, id_estructura:estructuras[7].id, estructura: estructuras[7].nombre, cantidad: 1, descripcion:"", nombre: "Comedor 2 Complejo Comedor 2"},
  {id: 24, activo:activo, id_estructura:estructuras[7].id, estructura: estructuras[7].nombre, cantidad: 1, descripcion:"", nombre: "Comedor 3 Complejo Comedor 2"},
  {id: 25, activo:activo, id_estructura:estructuras[8].id, estructura: estructuras[8].nombre, cantidad: 1, descripcion:"", nombre: "Comedor 1 Complejo Comedor 3"},
  {id: 26, activo:activo, id_estructura:estructuras[8].id, estructura: estructuras[8].nombre, cantidad: 1, descripcion:"", nombre: "Comedor 2 Complejo Comedor 3"},
  {id: 27, activo:activo, id_estructura:estructuras[8].id, estructura: estructuras[8].nombre, cantidad: 1, descripcion:"", nombre: "Comedor 3 Complejo Comedor 3"},
  {id: 28, activo:activo, id_estructura:estructuras[9].id, estructura: estructuras[9].nombre, cantidad: 1, descripcion:"", nombre: "1er piso Rectorado"},
  {id: 29, activo:activo, id_estructura:estructuras[9].id, estructura: estructuras[9].nombre, cantidad: 1, descripcion:"", nombre: "2do piso Rectorado"},
  {id: 30, activo:activo, id_estructura:estructuras[9].id, estructura: estructuras[9].nombre, cantidad: 1, descripcion:"", nombre: "Parqueo Rectorado"},
];
export let equipos = [
  {id: 1, nombre: "Equipo 1", responsable: personas[1].nombre, estructura: estructuras[0].nombre, activo:activo, cantidad:3, ids_personas: [1,2,3]},
  {id: 2, nombre: "Equipo 2", responsable: personas[4].nombre, estructura: estructuras[1].nombre, activo:activo, cantidad:3, ids_personas: [4,5,6]},
  {id: 3, nombre: "Equipo 3", responsable: personas[7].nombre, estructura: estructuras[2].nombre, activo:activo, cantidad:3, ids_personas: [7,8,9]},
  {id: 4, nombre: "Equipo 4", responsable: personas[10].nombre, estructura: estructuras[3].nombre, activo:activo, cantidad:3, ids_personas: [10,11,12]},
  {id: 5, nombre: "Equipo 5", responsable: personas[13].nombre, estructura: estructuras[4].nombre, activo:activo, cantidad:3, ids_personas: [13,14,15]},
  {id: 6, nombre: "Equipo 6", responsable: personas[16].nombre, estructura: estructuras[5].nombre, activo:activo, cantidad:3, ids_personas: [16,17,18]},
  {id: 7, nombre: "Equipo 7", responsable: personas[19].nombre, estructura: estructuras[6].nombre, activo:activo, cantidad:3, ids_personas: [19,20,21]},
  {id: 8, nombre: "Equipo 8", responsable: personas[22].nombre, estructura: estructuras[7].nombre, activo:activo, cantidad:3, ids_personas: [22,23,24]},
  {id: 9, nombre: "Equipo 9", responsable: personas[25].nombre, estructura: estructuras[8].nombre, activo:activo, cantidad:3, ids_personas: [25,26,27]},
  {id: 10, nombre: "Equipo 10", responsable: personas[28].nombre, estructura: estructuras[9].nombre, activo:activo, cantidad:3, ids_personas: [28,29,30]},
];



// All related to user
export let usuarios = [
    {
        id: 0,
        user: "admin",
        password: "admin"
    },
];

export function addUsuarios(user, password) {
  if (usuarios.length === 0) {
    usuarios.push({id:0, user:user, password:password});
  } else {
    usuarios.push({ id: ((usuarios[usuarios.length - 1].id) + 1), user: user, password: password });
  }
};
function findIdUsuarios(user) {
  for(let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].user === user) {
      return usuarios[i].id;
    }
  }
};
function findForIdUsuarios(id) {
  for(let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].id === id) {
      return i;
    }
  }
};
export function deleteUsuarios(user){
  usuarios.splice(findForIdUsuarios(findIdUsuarios(user)));
};
export function setPasswordUsuarios(user, password){
  usuario[findForIdUsuarios(findIdUsuarios(user))].password = password;
};



// All related to planning
export let planificaciones = [
  {id_zona:zonas[0].id, id_planificacion:1,nombre_region_guardia:zonas[0].nombre,fecha_inicio:fecha_inicio,fecha_fin:fecha_fin,nombre_planificacion:"Guardia en Docente 1"},
  {id_zona:zonas[0].id, id_planificacion:2,nombre_region_guardia:zonas[0].nombre,fecha_inicio:fecha_inicio,fecha_fin:fecha_fin,nombre_planificacion:"Guardia en Docente 2"},
  {id_zona:zonas[0].id, id_planificacion:3,nombre_region_guardia:zonas[0].nombre,fecha_inicio:fecha_inicio,fecha_fin:fecha_fin,nombre_planificacion:"Guardia en Docente 3"},
  {id_zona:zonas[0].id, id_planificacion:4,nombre_region_guardia:zonas[0].nombre,fecha_inicio:fecha_inicio,fecha_fin:fecha_fin,nombre_planificacion:"Guardia en Docente 4"},
  {id_zona:zonas[0].id, id_planificacion:5,nombre_region_guardia:zonas[0].nombre,fecha_inicio:fecha_inicio,fecha_fin:fecha_fin,nombre_planificacion:"Guardia en Docente FTE"},
  {id_zona:zonas[0].id, id_planificacion:6,nombre_region_guardia:zonas[0].nombre,fecha_inicio:fecha_inicio,fecha_fin:fecha_fin,nombre_planificacion:"Guardia en Docente CITEC"},
  {id_zona:zonas[1].id, id_planificacion:7,nombre_region_guardia:zonas[1].nombre,fecha_inicio:fecha_inicio,fecha_fin:fecha_fin,nombre_planificacion:"Guardia en Complejo Comedor 1"},
  {id_zona:zonas[1].id, id_planificacion:8,nombre_region_guardia:zonas[1].nombre,fecha_inicio:fecha_inicio,fecha_fin:fecha_fin,nombre_planificacion:"Guardia en Complejo Comedor 2"},
  {id_zona:zonas[1].id, id_planificacion:9,nombre_region_guardia:zonas[1].nombre,fecha_inicio:fecha_inicio,fecha_fin:fecha_fin,nombre_planificacion:"Guardia en Complejo Comedor 3"},
  {id_zona:zonas[2].id, id_planificacion:10,nombre_region_guardia:zonas[2].nombre,fecha_inicio:fecha_inicio,fecha_fin:fecha_fin,nombre_planificacion:"Guardia en Rectorado"},
];
export function addPlanificaciones(nombre_planificacion, nombre_region_guardia, fecha_inicio, fecha_fin) {
  if (planificaciones.length === 0) {
    planificaciones.push({
      id:0, 
      nombre_planificacion:nombre_planificacion, 
      nombre_region_guardia:nombre_region_guardia, 
      fecha_inicio:fecha_inicio, 
      fecha_fin:fecha_fin
    });
  } else {
    planificaciones.push({ 
      id: ((usuarios[planificaciones.length - 1].id) + 1), 
      nombre_planificacion:nombre_planificacion, 
      nombre_region_guardia:nombre_region_guardia, 
      fecha_inicio:fecha_inicio, 
      fecha_fin:fecha_fin
    });
  }
};
export function findIdPlanificaciones(field, value) {
  for(let i = 0; i < planificaciones.length; i++) {
    switch (field) {
      case "nombre_planificacion":
        if (planificaciones[i].nombre_planificacion === value) {
          return planificaciones[i].id;
        }
        break;
      case "nombre_region_guardia":
        if (planificaciones[i].nombre_region_guardia === value) {
          return planificaciones[i].id;
        }
        break;
      case "fecha_inicio":
        if (planificaciones[i].fecha_inicio === value) {
          return planificaciones[i].id;
        }
        break;
      case "fecha_fin":
        if (planificaciones[i].fecha_fin === value) {
          return planificaciones[i].id;
        }
        break;
    }
  }
};
export function findForIdPlanificaciones(id) {
  for(let i = 0; i < planificaciones.length; i++) {
    if (planificaciones[i].id === id) {
      return i;
    }
  }
};
export function deletePlanificaciones(nombre_planificacion){
  planificaciones.splice(findForIdPlanificaciones(findIdPlanificaciones(nombre_planificacion)));
};
export function setPlanificaciones(id_planificacion, nombre_planificacion, nombre_region_guardia, fecha_inicio, fecha_fin){
  planificaciones[id_planificacion].nombre_planificacion = nombre_planificacion;
  planificaciones[id_planificacion].nombre_region_guardia = nombre_region_guardia;
  planificaciones[id_planificacion].fecha_inicio = fecha_inicio;
  planificaciones[id_planificacion].fecha_fin = fecha_fin;
};
export let detallesPlanificaciones = {
  0: [
    {nombre:personas[1].nombre, posta:posta[0].nombre, turnos:turno, fecha:planificaciones[0].fecha_inicio},
    {nombre:personas[2].nombre, posta:posta[1].nombre, turnos:turno, fecha:planificaciones[0].fecha_inicio},
    {nombre:personas[3].nombre, posta:posta[2].nombre, turnos:turno, fecha:planificaciones[0].fecha_inicio},
  ],
  1: [
    {nombre:personas[4].nombre, posta:posta[3].nombre, turnos:turno, fecha:planificaciones[1].fecha_inicio},
    {nombre:personas[5].nombre, posta:posta[4].nombre, turnos:turno, fecha:planificaciones[1].fecha_inicio},
    {nombre:personas[6].nombre, posta:posta[5].nombre, turnos:turno, fecha:planificaciones[1].fecha_inicio},
  ],
  2: [
    {nombre:personas[7].nombre, posta:posta[6].nombre, turnos:turno, fecha:planificaciones[2].fecha_inicio},
    {nombre:personas[8].nombre, posta:posta[7].nombre, turnos:turno, fecha:planificaciones[2].fecha_inicio},
    {nombre:personas[9].nombre, posta:posta[8].nombre, turnos:turno, fecha:planificaciones[2].fecha_inicio},
  ],
  3: [
    {nombre:personas[10].nombre, posta:posta[9].nombre, turnos:turno, fecha:planificaciones[3].fecha_inicio},
    {nombre:personas[11].nombre, posta:posta[10].nombre, turnos:turno, fecha:planificaciones[3].fecha_inicio},
    {nombre:personas[12].nombre, posta:posta[11].nombre, turnos:turno, fecha:planificaciones[3].fecha_inicio},
  ],
  4: [
    {nombre:personas[13].nombre, posta:posta[12].nombre, turnos:turno, fecha:planificaciones[4].fecha_inicio},
    {nombre:personas[14].nombre, posta:posta[13].nombre, turnos:turno, fecha:planificaciones[4].fecha_inicio},
    {nombre:personas[15].nombre, posta:posta[14].nombre, turnos:turno, fecha:planificaciones[4].fecha_inicio},
  ],
  5: [
    {nombre:personas[16].nombre, posta:posta[15].nombre, turnos:turno, fecha:planificaciones[5].fecha_inicio},
    {nombre:personas[17].nombre, posta:posta[16].nombre, turnos:turno, fecha:planificaciones[5].fecha_inicio},
    {nombre:personas[18].nombre, posta:posta[17].nombre, turnos:turno, fecha:planificaciones[5].fecha_inicio},
  ],
  6: [
    {nombre:personas[19].nombre, posta:posta[18].nombre, turnos:turno, fecha:planificaciones[6].fecha_inicio},
    {nombre:personas[20].nombre, posta:posta[19].nombre, turnos:turno, fecha:planificaciones[6].fecha_inicio},
    {nombre:personas[21].nombre, posta:posta[20].nombre, turnos:turno, fecha:planificaciones[6].fecha_inicio},
  ],
  7: [
    {nombre:personas[22].nombre, posta:posta[21].nombre, turnos:turno, fecha:planificaciones[7].fecha_inicio},
    {nombre:personas[23].nombre, posta:posta[22].nombre, turnos:turno, fecha:planificaciones[7].fecha_inicio},
    {nombre:personas[24].nombre, posta:posta[23].nombre, turnos:turno, fecha:planificaciones[7].fecha_inicio},
  ],
  8: [
    {nombre:personas[25].nombre, posta:posta[24].nombre, turnos:turno, fecha:planificaciones[8].fecha_inicio},
    {nombre:personas[26].nombre, posta:posta[25].nombre, turnos:turno, fecha:planificaciones[8].fecha_inicio},
    {nombre:personas[27].nombre, posta:posta[26].nombre, turnos:turno, fecha:planificaciones[8].fecha_inicio},
  ],
  9: [
    {nombre:personas[28].nombre, posta:posta[27].nombre, turnos:turno, fecha:planificaciones[9].fecha_inicio},
    {nombre:personas[29].nombre, posta:posta[28].nombre, turnos:turno, fecha:planificaciones[9].fecha_inicio},
    {nombre:personas[30].nombre, posta:posta[29].nombre, turnos:turno, fecha:planificaciones[9].fecha_inicio},
  ],
};
export let detallesManualPlaning = [
  [
    {nombre:personas[1].nombre, ci:personas[1].ci, solapin:personas[1].solapin, estructura:estructuras[0].nombre, cargo:personas[1].cargo},
    {nombre:personas[2].nombre, ci:personas[2].ci, solapin:personas[2].solapin, estructura:estructuras[0].nombre, cargo:personas[2].cargo},
    {nombre:personas[3].nombre, ci:personas[3].ci, solapin:personas[3].solapin, estructura:estructuras[0].nombre, cargo:personas[3].cargo},
  ],
  [
    {nombre:personas[4].nombre, ci:personas[4].ci, solapin:personas[4].solapin, estructura:estructuras[1].nombre, cargo:personas[4].cargo},
    {nombre:personas[5].nombre, ci:personas[5].ci, solapin:personas[5].solapin, estructura:estructuras[1].nombre, cargo:personas[5].cargo},
    {nombre:personas[6].nombre, ci:personas[6].ci, solapin:personas[6].solapin, estructura:estructuras[1].nombre, cargo:personas[6].cargo},
  ],
  [
    {nombre:personas[7].nombre, ci:personas[7].ci, solapin:personas[7].solapin, estructura:estructuras[2].nombre, cargo:personas[7].cargo},
    {nombre:personas[8].nombre, ci:personas[8].ci, solapin:personas[8].solapin, estructura:estructuras[2].nombre, cargo:personas[8].cargo},
    {nombre:personas[9].nombre, ci:personas[9].ci, solapin:personas[9].solapin, estructura:estructuras[2].nombre, cargo:personas[9].cargo},
  ],
  [
    {nombre:personas[10].nombre, ci:personas[10].ci, solapin:personas[10].solapin, estructura:estructuras[3].nombre, cargo:personas[10].cargo},
    {nombre:personas[11].nombre, ci:personas[11].ci, solapin:personas[11].solapin, estructura:estructuras[3].nombre, cargo:personas[10].cargo},
    {nombre:personas[12].nombre, ci:personas[12].ci, solapin:personas[12].solapin, estructura:estructuras[3].nombre, cargo:personas[10].cargo},
  ],
  [
    {nombre:personas[13].nombre, ci:personas[13].ci, solapin:personas[13].solapin, estructura:estructuras[4].nombre, cargo:personas[13].cargo},
    {nombre:personas[14].nombre, ci:personas[14].ci, solapin:personas[14].solapin, estructura:estructuras[4].nombre, cargo:personas[14].cargo},
    {nombre:personas[15].nombre, ci:personas[15].ci, solapin:personas[15].solapin, estructura:estructuras[4].nombre, cargo:personas[15].cargo},
  ],
  [
    {nombre:personas[16].nombre, ci:personas[16].ci, solapin:personas[16].solapin, estructura:estructuras[5].nombre, cargo:personas[16].cargo},
    {nombre:personas[17].nombre, ci:personas[17].ci, solapin:personas[17].solapin, estructura:estructuras[5].nombre, cargo:personas[17].cargo},
    {nombre:personas[18].nombre, ci:personas[18].ci, solapin:personas[18].solapin, estructura:estructuras[5].nombre, cargo:personas[18].cargo},
  ],
  [
    {nombre:personas[19].nombre, ci:personas[19].ci, solapin:personas[19].solapin, estructura:estructuras[6].nombre, cargo:personas[19].cargo},
    {nombre:personas[20].nombre, ci:personas[20].ci, solapin:personas[20].solapin, estructura:estructuras[6].nombre, cargo:personas[20].cargo},
    {nombre:personas[21].nombre, ci:personas[21].ci, solapin:personas[21].solapin, estructura:estructuras[6].nombre, cargo:personas[21].cargo},
  ],
  [
    {nombre:personas[22].nombre, ci:personas[22].ci, solapin:personas[22].solapin, estructura:estructuras[7].nombre, cargo:personas[22].cargo},
    {nombre:personas[23].nombre, ci:personas[23].ci, solapin:personas[23].solapin, estructura:estructuras[7].nombre, cargo:personas[23].cargo},
    {nombre:personas[24].nombre, ci:personas[24].ci, solapin:personas[24].solapin, estructura:estructuras[7].nombre, cargo:personas[24].cargo},
  ],
  [
    {nombre:personas[25].nombre, ci:personas[25].ci, solapin:personas[25].solapin, estructura:estructuras[8].nombre, cargo:personas[25].cargo},
    {nombre:personas[26].nombre, ci:personas[26].ci, solapin:personas[26].solapin, estructura:estructuras[8].nombre, cargo:personas[26].cargo},
    {nombre:personas[27].nombre, ci:personas[27].ci, solapin:personas[27].solapin, estructura:estructuras[8].nombre, cargo:personas[27].cargo},
  ],
  [
    {nombre:personas[28].nombre, ci:personas[28].ci, solapin:personas[28].solapin, estructura:estructuras[9].nombre, cargo:personas[28].cargo},
    {nombre:personas[29].nombre, ci:personas[29].ci, solapin:personas[29].solapin, estructura:estructuras[9].nombre, cargo:personas[29].cargo},
    {nombre:personas[30].nombre, ci:personas[30].ci, solapin:personas[30].solapin, estructura:estructuras[9].nombre, cargo:personas[30].cargo},
  ],
];
export let guard_area = [
  {id: 1,nombre:personas[1].nombre, ci:personas[1].ci, solapin:personas[1].solapin, estructura:estructuras[0].nombre, cargo:personas[1].cargo, id_zona: estructuras[0].id_zona},
  {id: 2,nombre:personas[4].nombre, ci:personas[4].ci, solapin:personas[4].solapin, estructura:estructuras[1].nombre, cargo:personas[4].cargo, id_zona: estructuras[1].id_zona},
  {id: 3,nombre:personas[7].nombre, ci:personas[7].ci, solapin:personas[7].solapin, estructura:estructuras[2].nombre, cargo:personas[7].cargo, id_zona: estructuras[2].id_zona},
  {id: 4,nombre:personas[10].nombre, ci:personas[10].ci, solapin:personas[10].solapin, estructura:estructuras[3].nombre, cargo:personas[10].cargo, id_zona: estructuras[3].id_zona},
  {id: 5,nombre:personas[13].nombre, ci:personas[13].ci, solapin:personas[13].solapin, estructura:estructuras[4].nombre, cargo:personas[13].cargo, id_zona: estructuras[4].id_zona},
  {id: 6,nombre:personas[16].nombre, ci:personas[16].ci, solapin:personas[16].solapin, estructura:estructuras[5].nombre, cargo:personas[16].cargo, id_zona: estructuras[5].id_zona},
  {id: 7,nombre:personas[19].nombre, ci:personas[19].ci, solapin:personas[19].solapin, estructura:estructuras[6].nombre, cargo:personas[19].cargo, id_zona: estructuras[6].id_zona},
  {id: 8,nombre:personas[22].nombre, ci:personas[22].ci, solapin:personas[22].solapin, estructura:estructuras[7].nombre, cargo:personas[22].cargo, id_zona: estructuras[7].id_zona},
  {id: 9,nombre:personas[25].nombre, ci:personas[25].ci, solapin:personas[25].solapin, estructura:estructuras[8].nombre, cargo:personas[25].cargo, id_zona: estructuras[8].id_zona},
  {id: 10,nombre:personas[28].nombre, ci:personas[28].ci, solapin:personas[28].solapin, estructura:estructuras[9].nombre, cargo:personas[28].cargo, id_zona: estructuras[9].id_zona},
];
export let horario_turno = [
  [
    {posta:posta[0].nombre, horario:horario, turno:turno},
    {posta:posta[1].nombre, horario:horario, turno:turno},
    {posta:posta[2].nombre, horario:horario, turno:turno},
  ],
  [
    {posta:posta[3].nombre, horario:horario, turno:turno},
    {posta:posta[4].nombre, horario:horario, turno:turno},
    {posta:posta[5].nombre, horario:horario, turno:turno},
  ],
  [
    {posta:posta[6].nombre, horario:horario, turno:turno},
    {posta:posta[7].nombre, horario:horario, turno:turno},
    {posta:posta[8].nombre, horario:horario, turno:turno},
  ],
  [
    {posta:posta[9].nombre, horario:horario, turno:turno},
    {posta:posta[10].nombre, horario:horario, turno:turno},
    {posta:posta[11].nombre, horario:horario, turno:turno},
  ],
  [
    {posta:posta[12].nombre, horario:horario, turno:turno},
    {posta:posta[13].nombre, horario:horario, turno:turno},
    {posta:posta[14].nombre, horario:horario, turno:turno},
  ],
  [
    {posta:posta[15].nombre, horario:horario, turno:turno},
    {posta:posta[16].nombre, horario:horario, turno:turno},
    {posta:posta[17].nombre, horario:horario, turno:turno},
  ],
  [
    {posta:posta[18].nombre, horario:horario, turno:turno},
    {posta:posta[19].nombre, horario:horario, turno:turno},
    {posta:posta[20].nombre, horario:horario, turno:turno},
  ],
  [
    {posta:posta[21].nombre, horario:horario, turno:turno},
    {posta:posta[22].nombre, horario:horario, turno:turno},
    {posta:posta[23].nombre, horario:horario, turno:turno},
  ],
  [
    {posta:posta[24].nombre, horario:horario, turno:turno},
    {posta:posta[25].nombre, horario:horario, turno:turno},
    {posta:posta[26].nombre, horario:horario, turno:turno},
  ],
  [
    {posta:posta[27].nombre, horario:horario, turno:turno},
    {posta:posta[28].nombre, horario:horario, turno:turno},
    {posta:posta[29].nombre, horario:horario, turno:turno},
  ],
];
export let potencial = [
  {id:1, nombre:personas[1].nombre, ci:personas[1].ci, solapin:personas[1].solapin, cargo:personas[1].cargo, estructura:estructuras[0].nombre, expediente:personas[1].expediente, sexo:personas[1].sexo, residente:personas[1].residente, provincia:personas[1].provincia, municipio:personas[1].municipio, categoria:personas[1].categoria},
  {id:2, nombre:personas[2].nombre, ci:personas[2].ci, solapin:personas[2].solapin, cargo:personas[2].cargo, estructura:estructuras[0].nombre, expediente:personas[2].expediente, sexo:personas[2].sexo, residente:personas[2].residente, provincia:personas[2].provincia, municipio:personas[2].municipio, categoria:personas[2].categoria},
  {id:3, nombre:personas[3].nombre, ci:personas[3].ci, solapin:personas[3].solapin, cargo:personas[3].cargo, estructura:estructuras[0].nombre, expediente:personas[3].expediente, sexo:personas[3].sexo, residente:personas[3].residente, provincia:personas[3].provincia, municipio:personas[3].municipio, categoria:personas[3].categoria},
  {id:4, nombre:personas[4].nombre, ci:personas[4].ci, solapin:personas[4].solapin, cargo:personas[4].cargo, estructura:estructuras[1].nombre, expediente:personas[4].expediente, sexo:personas[4].sexo, residente:personas[4].residente, provincia:personas[4].provincia, municipio:personas[4].municipio, categoria:personas[4].categoria},
  {id:5, nombre:personas[5].nombre, ci:personas[5].ci, solapin:personas[5].solapin, cargo:personas[5].cargo, estructura:estructuras[1].nombre, expediente:personas[5].expediente, sexo:personas[5].sexo, residente:personas[5].residente, provincia:personas[5].provincia, municipio:personas[5].municipio, categoria:personas[5].categoria},
  {id:6, nombre:personas[6].nombre, ci:personas[6].ci, solapin:personas[6].solapin, cargo:personas[6].cargo, estructura:estructuras[1].nombre, expediente:personas[6].expediente, sexo:personas[6].sexo, residente:personas[6].residente, provincia:personas[6].provincia, municipio:personas[6].municipio, categoria:personas[6].categoria},
  {id:7, nombre:personas[7].nombre, ci:personas[7].ci, solapin:personas[7].solapin, cargo:personas[7].cargo, estructura:estructuras[2].nombre, expediente:personas[7].expediente, sexo:personas[7].sexo, residente:personas[7].residente, provincia:personas[7].provincia, municipio:personas[7].municipio, categoria:personas[7].categoria},
  {id:8, nombre:personas[8].nombre, ci:personas[8].ci, solapin:personas[8].solapin, cargo:personas[8].cargo, estructura:estructuras[2].nombre, expediente:personas[8].expediente, sexo:personas[8].sexo, residente:personas[8].residente, provincia:personas[8].provincia, municipio:personas[8].municipio, categoria:personas[8].categoria},
  {id:9, nombre:personas[9].nombre, ci:personas[9].ci, solapin:personas[9].solapin, cargo:personas[9].cargo, estructura:estructuras[2].nombre, expediente:personas[9].expediente, sexo:personas[9].sexo, residente:personas[9].residente, provincia:personas[9].provincia, municipio:personas[9].municipio, categoria:personas[9].categoria},
  {id:10, nombre:personas[10].nombre, ci:personas[10].ci, solapin:personas[10].solapin, cargo:personas[10].cargo, estructura:estructuras[3].nombre, expediente:personas[10].expediente, sexo:personas[10].sexo, residente:personas[10].residente, provincia:personas[10].provincia, municipio:personas[10].municipio, categoria:personas[10].categoria},
  {id:11, nombre:personas[11].nombre, ci:personas[11].ci, solapin:personas[11].solapin, cargo:personas[11].cargo, estructura:estructuras[3].nombre, expediente:personas[11].expediente, sexo:personas[11].sexo, residente:personas[11].residente, provincia:personas[11].provincia, municipio:personas[11].municipio, categoria:personas[11].categoria},
  {id:12, nombre:personas[12].nombre, ci:personas[12].ci, solapin:personas[12].solapin, cargo:personas[12].cargo, estructura:estructuras[3].nombre, expediente:personas[12].expediente, sexo:personas[12].sexo, residente:personas[12].residente, provincia:personas[12].provincia, municipio:personas[12].municipio, categoria:personas[12].categoria},
  {id:13, nombre:personas[13].nombre, ci:personas[13].ci, solapin:personas[13].solapin, cargo:personas[13].cargo, estructura:estructuras[4].nombre, expediente:personas[13].expediente, sexo:personas[13].sexo, residente:personas[13].residente, provincia:personas[13].provincia, municipio:personas[13].municipio, categoria:personas[13].categoria},
  {id:14, nombre:personas[14].nombre, ci:personas[14].ci, solapin:personas[14].solapin, cargo:personas[14].cargo, estructura:estructuras[4].nombre, expediente:personas[14].expediente, sexo:personas[14].sexo, residente:personas[14].residente, provincia:personas[14].provincia, municipio:personas[14].municipio, categoria:personas[14].categoria},
  {id:15, nombre:personas[15].nombre, ci:personas[15].ci, solapin:personas[15].solapin, cargo:personas[15].cargo, estructura:estructuras[4].nombre, expediente:personas[15].expediente, sexo:personas[15].sexo, residente:personas[15].residente, provincia:personas[15].provincia, municipio:personas[15].municipio, categoria:personas[15].categoria},
  {id:16, nombre:personas[16].nombre, ci:personas[16].ci, solapin:personas[16].solapin, cargo:personas[16].cargo, estructura:estructuras[5].nombre, expediente:personas[16].expediente, sexo:personas[16].sexo, residente:personas[16].residente, provincia:personas[16].provincia, municipio:personas[16].municipio, categoria:personas[16].categoria},
  {id:17, nombre:personas[17].nombre, ci:personas[17].ci, solapin:personas[17].solapin, cargo:personas[17].cargo, estructura:estructuras[5].nombre, expediente:personas[17].expediente, sexo:personas[17].sexo, residente:personas[17].residente, provincia:personas[17].provincia, municipio:personas[17].municipio, categoria:personas[17].categoria},
  {id:18, nombre:personas[18].nombre, ci:personas[18].ci, solapin:personas[18].solapin, cargo:personas[18].cargo, estructura:estructuras[5].nombre, expediente:personas[18].expediente, sexo:personas[18].sexo, residente:personas[18].residente, provincia:personas[18].provincia, municipio:personas[18].municipio, categoria:personas[18].categoria},
  {id:19, nombre:personas[19].nombre, ci:personas[19].ci, solapin:personas[19].solapin, cargo:personas[19].cargo, estructura:estructuras[6].nombre, expediente:personas[19].expediente, sexo:personas[19].sexo, residente:personas[19].residente, provincia:personas[19].provincia, municipio:personas[19].municipio, categoria:personas[19].categoria},
  {id:20, nombre:personas[20].nombre, ci:personas[20].ci, solapin:personas[20].solapin, cargo:personas[20].cargo, estructura:estructuras[6].nombre, expediente:personas[20].expediente, sexo:personas[20].sexo, residente:personas[20].residente, provincia:personas[20].provincia, municipio:personas[20].municipio, categoria:personas[20].categoria},
  {id:21, nombre:personas[21].nombre, ci:personas[21].ci, solapin:personas[21].solapin, cargo:personas[21].cargo, estructura:estructuras[6].nombre, expediente:personas[21].expediente, sexo:personas[21].sexo, residente:personas[21].residente, provincia:personas[21].provincia, municipio:personas[21].municipio, categoria:personas[21].categoria},
  {id:22, nombre:personas[22].nombre, ci:personas[22].ci, solapin:personas[22].solapin, cargo:personas[22].cargo, estructura:estructuras[7].nombre, expediente:personas[22].expediente, sexo:personas[22].sexo, residente:personas[22].residente, provincia:personas[22].provincia, municipio:personas[22].municipio, categoria:personas[22].categoria},
  {id:23, nombre:personas[23].nombre, ci:personas[23].ci, solapin:personas[23].solapin, cargo:personas[23].cargo, estructura:estructuras[7].nombre, expediente:personas[23].expediente, sexo:personas[23].sexo, residente:personas[23].residente, provincia:personas[23].provincia, municipio:personas[23].municipio, categoria:personas[23].categoria},
  {id:24, nombre:personas[24].nombre, ci:personas[24].ci, solapin:personas[24].solapin, cargo:personas[24].cargo, estructura:estructuras[7].nombre, expediente:personas[24].expediente, sexo:personas[24].sexo, residente:personas[24].residente, provincia:personas[24].provincia, municipio:personas[24].municipio, categoria:personas[24].categoria},
  {id:25, nombre:personas[25].nombre, ci:personas[25].ci, solapin:personas[25].solapin, cargo:personas[25].cargo, estructura:estructuras[8].nombre, expediente:personas[25].expediente, sexo:personas[25].sexo, residente:personas[25].residente, provincia:personas[25].provincia, municipio:personas[25].municipio, categoria:personas[25].categoria},
  {id:26, nombre:personas[26].nombre, ci:personas[26].ci, solapin:personas[26].solapin, cargo:personas[26].cargo, estructura:estructuras[8].nombre, expediente:personas[26].expediente, sexo:personas[26].sexo, residente:personas[26].residente, provincia:personas[26].provincia, municipio:personas[26].municipio, categoria:personas[26].categoria},
  {id:27, nombre:personas[27].nombre, ci:personas[27].ci, solapin:personas[27].solapin, cargo:personas[27].cargo, estructura:estructuras[8].nombre, expediente:personas[27].expediente, sexo:personas[27].sexo, residente:personas[27].residente, provincia:personas[27].provincia, municipio:personas[27].municipio, categoria:personas[27].categoria},
  {id:28, nombre:personas[28].nombre, ci:personas[28].ci, solapin:personas[28].solapin, cargo:personas[28].cargo, estructura:estructuras[9].nombre, expediente:personas[28].expediente, sexo:personas[28].sexo, residente:personas[28].residente, provincia:personas[28].provincia, municipio:personas[28].municipio, categoria:personas[28].categoria},
  {id:29, nombre:personas[29].nombre, ci:personas[29].ci, solapin:personas[29].solapin, cargo:personas[29].cargo, estructura:estructuras[9].nombre, expediente:personas[29].expediente, sexo:personas[29].sexo, residente:personas[29].residente, provincia:personas[29].provincia, municipio:personas[29].municipio, categoria:personas[29].categoria},
  {id:30, nombre:personas[30].nombre, ci:personas[30].ci, solapin:personas[30].solapin, cargo:personas[30].cargo, estructura:estructuras[9].nombre, expediente:personas[30].expediente, sexo:personas[30].sexo, residente:personas[30].residente, provincia:personas[30].provincia, municipio:personas[30].municipio, categoria:personas[30].categoria},
  {id:31, nombre:personas[0].nombre, ci:personas[0].ci, solapin:personas[0].solapin, cargo:personas[0].cargo, estructura:"Centro de Informatización", expediente:personas[0].expediente, sexo:personas[0].sexo, residente:personas[0].residente, provincia:personas[0].provincia, municipio:personas[0].municipio, categoria:personas[0].categoria},
];
export let recurso = [
  {id: 1, nombre:nombreRecurso, valor:valor},
];
export let variables = [
  {id:1, nombre:"Femenino", activo:activo},
  {id:2, nombre:"Masculino", activo:activo},
  {id:3, nombre:"Externo", activo:activo},
  {id:4, nombre:"Interno", activo:activo},
  {id:5, nombre:"Discapacitado", activo:activo},
  {id:6, nombre:"Enfermo", activo:activo},
  {id:7, nombre:"3ra edad", activo:activo},
  {id:8, nombre:"licencia", activo:activo},
];
export let patrones = [
  {id:1, activo:activo, tipo:"semana", periodicidad: 4, nombre:"Patrón 1"},
  {id:2, activo:activo, tipo:"mes", periodicidad: 2, nombre:"Patrón 2"},
];



export let guard_groups = [
  {grupo: "Centro de Gobierno Electrónico", zona: "Casona", personasAsociadas:0},
  {grupo: "Centro de Indentificación y Seguridad Digital", zona: "Casona", personasAsociadas:0},
  {grupo: "Centro de Información de Entidades", zona: "Casona", personasAsociadas:0},
  {grupo: "Centro de Información de la Gestión Documental", zona: "Casona", personasAsociadas:0},
  {grupo: "Centro de Innovación y Calidad en la Educación", zona: "Casona", personasAsociadas:0},
];
export let potential = [
  {nombre: 'Elizabeth Gonzalez Prieto', ci: '12345678901', solapin: 'E123456', cargo: 'Estuduante', estructura: 'IDF1'}, 
    {nombre: 'Ian Nelson Lahey', ci: '12345678902', solapin: 'E234561', cargo: 'Estuduante', estructura: 'IDF2'},
    {nombre: 'John Wesley Shipp', ci: '12345678903', solapin: 'E345612', cargo: 'Estuduante', estructura: 'IDF3'},
    {nombre: 'Chris William Martin', ci: '12345678904', solapin: 'E456123', cargo: 'Estuduante', estructura: 'IDF4'},
    {nombre: 'Carlota Garcia Tornes', ci: '12345678905', solapin: 'E561234', cargo: 'Estuduante', estructura: 'IDF5'},
    {nombre: 'Raúl Fernández de Pablo', ci: '12345678906', solapin: 'E612345', cargo: 'Estuduante', estructura: 'IDF6'}
];
export let assistance = [
  {turno:'31/05/2022', posta:'Dirección de Extensión Universitaria', nombre:'Doce horas noche desde las 19', zona: 'Centro cultural', cantidad: '1'},
  {turno:'31/05/2022', posta:'Dirección de Extensión Universitaria', nomre:'Doce horas noche desde las 19', zona: 'Centro cultural', cantidad: '1'},
  {turno:'31/05/2022', posta:'Docente 1 Viejo', nomre:'1er noche Docente 1 Viejo', zona: 'Gastex-DIRCOM-Producción', cantidad: '1'},
];
export let incident = [];
export let duty_officer = [
  {fecha:'01/12/2021', oficialGuardia:'Alvaro Alejandro Acosta Ruiz', cantidad:'', cantidadReal:''}
];
export let guard = [
  {zona: "Dirección de Extensión Universitaria", nombre: "Yosvaney Herrera Ricardo", area: "Dirección de Extensión Universitaria", turno: "12 horas", horaInicio: "07:00 am", horaFin: "07:00 pm"},
  {zona: "Dirección de Extensión Universitaria", nombre: "Evelyn Fonsece Naranjo", area: "Dirección de Extensión Universitaria", turno: "12 horas", horaInicio: "07:00 am", horaFin: "07:00 pm"},
  {zona: "Dirección de Extensión Universitaria", nombre: "Susel García Cedeño", area: "Rectorado", turno: "12 horas", horaInicio: "07:00 am", horaFin: "07:00 pm"},
  {zona: "Dirección de Extensión Universitaria", nombre: "Dayannis Garcés Rodríguez", area: "Dirección de Extensión Universitaria", turno: "12 horas", horaInicio: "07:00 am", horaFin: "07:00 pm"},
];
export let quantitative_potential = [
  {estructura: "Centro de Estudio de Matemática y Computación", recursosHumanos: 12, potencial: 8, pendientes: 4},
  {estructura: "Centro de Gobierno Electrónico", recursosHumanos: 4, potencial: 3, pendientes: 1},
  {estructura: "Centro de Idiomas", recursosHumanos: 24, potencial: 19, pendientes: 5},
  {estructura: "Centro de Información de Entidades", recursosHumanos: 3, potencial: 2, pendientes: 1},
  {estructura: "Centro de Informatización de la Gestión Documental", recursosHumanos: 46, potencial: 41, pendientes: 5},
];
export let frequency = [
  {zona: "Casona", cantidad: 122, horas: 0, turnos: 0, frecuencia: 122, personasHoras: 122},
  {zona: "Centro Cultural", cantidad: 125, horas: 0, turnos: 0, frecuencia: 125, personasHoras: 125},
  {zona: "Complejo Cmedor 1", cantidad: 182, horas: 0, turnos: 0, frecuencia: 182, personasHoras: 182},
  {zona: "Complejo Cmedor 2", cantidad: 182, horas: 0, turnos: 0, frecuencia: 182, personasHoras: 182},
  {zona: "Complejo Cmedor 3", cantidad: 206, horas: 0, turnos: 0, frecuencia: 206, personasHoras: 206},
];
export let assistance_report = [
  {fecha:"07/12/2018 12:14", nombre: "Yarelys Seoane Alonso", ci: "00000000000", usuario: "yerelys", solapin: "T157931", estructura: "Facultad 4", presente: "Si"}
];
export let details = [];



