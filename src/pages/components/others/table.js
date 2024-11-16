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



export let planificaciones = [
  {id_planificacion: 1, nombre_planificacion:"noviembre 2021 Gastex-DIRCOM-Producción",nombre_region_guardia:"Gastex-DIRCOM-Producción",fecha_inicio:"01/11/2021",fecha_fin:"31/11/2021"},
  {id_planificacion: 2, nombre_planificacion:"GOE Docente 6 noviembre",nombre_region_guardia:"Docente 6",fecha_inicio:"11/11/2021", fecha_fin:"31/11/2021"},
  {id_planificacion: 3, nombre_planificacion:"noviembre Rectorado Transporte", nombre_region_guardia:"Rectorado-Transporte", fecha_inicio:"11/11/2021", fecha_fin:"31/11/2021"},
  {id_planificacion: 4, nombre_planificacion:"noviembre_2021_Rectorado_Trans", nombre_region_guardia:"Rectorado-Transporte", fecha_inicio:"11/11/2021", fecha_fin:"31/11/2021"},
  {id_planificacion: 5, nombre_planificacion:"mayo 2018 Bohio", nombre_region_guardia:"Gastex", fecha_inicio:"01/05/2018", fecha_fin:"31/05/2018"},
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
function findIdPlanificaciones(field, value) {
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
function findForIdPlanificaciones(id) {
  for(let i = 0; i < planificaciones.length; i++) {
    if (planificaciones[i].id === id) {
      return i;
    }
  }
};
export function deletePlanificaciones(nombre_planificacion){
  planificaciones.splice(findForIdPlanificaciones(findIdPlanificaciones(nombre_planificacion)));
};
export function setPlanificaciones(nombre_planificacion_old, nombre_planificacion, nombre_region_guardia, fecha_inicio, fecha_fin){
  const index = findForIdPlanificaciones(findIdPlanificaciones(nombre_planificacion_old));
  planificaciones[index].nombre_planificacion = nombre_planificacion;
  planificaciones[index].nombre_region_guardia = nombre_region_guardia;
  planificaciones[index].fecha_inicio = fecha_inicio;
  planificaciones[index].fecha_fin = fecha_fin;
};



export let guard_area = [
    {id_region_guardia: 1, nombre: 'Elizabeth Gonzalez Prieto', ci: '12345678901', solapin: 'E123456', cargo: 'Estuduante', estructura: 'IDF1'}, 
    {id_region_guardia: 2, nombre: 'Ian Nelson Lahey', ci: '12345678902', solapin: 'E234561', cargo: 'Estuduante', estructura: 'IDF2'},
    {id_region_guardia: 3, nombre: 'John Wesley Shipp', ci: '12345678903', solapin: 'E345612', cargo: 'Estuduante', estructura: 'IDF3'},
    {id_region_guardia: 4, nombre: 'Chris William Martin', ci: '12345678904', solapin: 'E456123', cargo: 'Estuduante', estructura: 'IDF4'},
    {id_region_guardia: 5, nombre: 'Carlota Garcia Tornes', ci: '12345678905', solapin: 'E561234', cargo: 'Estuduante', estructura: 'IDF5'},
    {id_region_guardia: 6, nombre: 'Raúl Fernández de Pablo', ci: '12345678906', solapin: 'E612345', cargo: 'Estuduante', estructura: 'IDF6'}
];



export let posts = [
  {posta: 'Direccion de extensión universitaria', zona: "Centro cultural", cantidad: 2, activo: "Sí"},
  {posta: 'Choferes de guardia', zona: "Choferes de guardia", cantidad: 2, activo: "Sí"},
  {posta: 'Complejo 1 - C3', zona: "Complejo Cmedor 1", cantidad: 1, activo: "Sí"},
  {posta: 'Complejo 1 - CC', zona: "Complejo Cmedor 1", cantidad: 1, activo: "Sí"},
  {posta: 'Complejo 1 - C1', zona: "Complejo Cmedor 1", cantidad: 1, activo: "Sí"},
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


