const usuarios = {
    admin: {
        id: 1,
        user: "admin",
        password: "admin"
    },
};
export { usuarios };



const planificaciones = [
  {nombre_planificacion:"noviembre 2021 Gastex-DIRCOM-Producción",nombre_region_guardia:"Gastex-DIRCOM-Producción",fecha_inicio:"01/11/2021",fecha_fin:"31/11/2021"},
  {nombre_planificacion:"GOE Docente 6 noviembre",nombre_region_guardia:"Docente 6",fecha_inicio:"11/11/2021", fecha_fin:"31/11/2021"},
  {nombre_planificacion:"noviembre Rectorado Transporte", nombre_region_guardia:"Rectorado-Transporte", fecha_inicio:"11/11/2021", fecha_fin:"31/11/2021"},
  {nombre_planificacion:"noviembre_2021_Rectorado_Trans", nombre_region_guardia:"Rectorado-Transporte", fecha_inicio:"11/11/2021", fecha_fin:"31/11/2021"},
  {nombre_planificacion:"mayo 2018 Bohio", nombre_region_guardia:"Gastex", fecha_inicio:"01/05/2018", fecha_fin:"31/05/2018"},
];
export { planificaciones };



const guard_area = [
    {nombre: 'Elizabeth Gonzalez Prieto', ci: '12345678901', solapin: 'E123456', cargo: 'Estuduante', estructura: 'IDF1'}, 
    {nombre: 'Ian Nelson Lahey', ci: '12345678902', solapin: 'E234561', cargo: 'Estuduante', estructura: 'IDF2'},
    {nombre: 'John Wesley Shipp', ci: '12345678903', solapin: 'E345612', cargo: 'Estuduante', estructura: 'IDF3'},
    {nombre: 'Chris William Martin', ci: '12345678904', solapin: 'E456123', cargo: 'Estuduante', estructura: 'IDF4'},
    {nombre: 'Carlota Garcia Tornes', ci: '12345678905', solapin: 'E561234', cargo: 'Estuduante', estructura: 'IDF5'},
    {nombre: 'Raúl Fernández de Pablo', ci: '12345678906', solapin: 'E612345', cargo: 'Estuduante', estructura: 'IDF6'}
];
export { guard_area };



const posts = [
  {posta: 'Direccion de extensión universitaria', zona: "Centro cultural", cantidad: 2, activo: "Sí"},
  {posta: 'Choferes de guardia', zona: "Choferes de guardia", cantidad: 2, activo: "Sí"},
  {posta: 'Complejo 1 - C3', zona: "Complejo Cmedor 1", cantidad: 1, activo: "Sí"},
  {posta: 'Complejo 1 - CC', zona: "Complejo Cmedor 1", cantidad: 1, activo: "Sí"},
  {posta: 'Complejo 1 - C1', zona: "Complejo Cmedor 1", cantidad: 1, activo: "Sí"},
];
export {posts};



const guard_groups = [
  {grupo: "Centro de Gobierno Electrónico", zona: "Casona", personasAsociadas:0},
  {grupo: "Centro de Indentificación y Seguridad Digital", zona: "Casona", personasAsociadas:0},
  {grupo: "Centro de Información de Entidades", zona: "Casona", personasAsociadas:0},
  {grupo: "Centro de Información de la Gestión Documental", zona: "Casona", personasAsociadas:0},
  {grupo: "Centro de Innovación y Calidad en la Educación", zona: "Casona", personasAsociadas:0},
];
export {guard_groups};



const potential = [
  {nombre: 'Elizabeth Gonzalez Prieto', ci: '12345678901', solapin: 'E123456', cargo: 'Estuduante', estructura: 'IDF1'}, 
    {nombre: 'Ian Nelson Lahey', ci: '12345678902', solapin: 'E234561', cargo: 'Estuduante', estructura: 'IDF2'},
    {nombre: 'John Wesley Shipp', ci: '12345678903', solapin: 'E345612', cargo: 'Estuduante', estructura: 'IDF3'},
    {nombre: 'Chris William Martin', ci: '12345678904', solapin: 'E456123', cargo: 'Estuduante', estructura: 'IDF4'},
    {nombre: 'Carlota Garcia Tornes', ci: '12345678905', solapin: 'E561234', cargo: 'Estuduante', estructura: 'IDF5'},
    {nombre: 'Raúl Fernández de Pablo', ci: '12345678906', solapin: 'E612345', cargo: 'Estuduante', estructura: 'IDF6'}
];
export {potential};



const assistance = [
  {turno:'31/05/2022', posta:'Dirección de Extensión Universitaria', nombre:'Doce horas noche desde las 19', zona: 'Centro cultural', cantidad: '1'},
  {turno:'31/05/2022', posta:'Dirección de Extensión Universitaria', nomre:'Doce horas noche desde las 19', zona: 'Centro cultural', cantidad: '1'},
  {turno:'31/05/2022', posta:'Docente 1 Viejo', nomre:'1er noche Docente 1 Viejo', zona: 'Gastex-DIRCOM-Producción', cantidad: '1'},
];
export {assistance};



const incident = [];
export {incident};



const duty_officer = [
  {fecha:'01/12/2021', oficialGuardia:'Alvaro Alejandro Acosta Ruiz', cantidad:'', cantidadReal:''}
];
export {duty_officer};



const guard = [
  {zona: "Dirección de Extensión Universitaria", nombre: "Yosvaney Herrera Ricardo", area: "Dirección de Extensión Universitaria", turno: "12 horas", horaInicio: "07:00 am", horaFin: "07:00 pm"},
  {zona: "Dirección de Extensión Universitaria", nombre: "Evelyn Fonsece Naranjo", area: "Dirección de Extensión Universitaria", turno: "12 horas", horaInicio: "07:00 am", horaFin: "07:00 pm"},
  {zona: "Dirección de Extensión Universitaria", nombre: "Susel García Cedeño", area: "Rectorado", turno: "12 horas", horaInicio: "07:00 am", horaFin: "07:00 pm"},
  {zona: "Dirección de Extensión Universitaria", nombre: "Dayannis Garcés Rodríguez", area: "Dirección de Extensión Universitaria", turno: "12 horas", horaInicio: "07:00 am", horaFin: "07:00 pm"},
];
export {guard};



const quantitative_potential = [
  {estructura: "Centro de Estudio de Matemática y Computación", recursosHumanos: 12, potencial: 8, pendientes: 4},
  {estructura: "Centro de Gobierno Electrónico", recursosHumanos: 4, potencial: 3, pendientes: 1},
  {estructura: "Centro de Idiomas", recursosHumanos: 24, potencial: 19, pendientes: 5},
  {estructura: "Centro de Información de Entidades", recursosHumanos: 3, potencial: 2, pendientes: 1},
  {estructura: "Centro de Informatización de la Gestión Documental", recursosHumanos: 46, potencial: 41, pendientes: 5},
];
export {quantitative_potential};



const frequency = [
  {zona: "Casona", cantidad: 122, horas: 0, turnos: 0, frecuencia: 122, personasHoras: 122},
  {zona: "Centro Cultural", cantidad: 125, horas: 0, turnos: 0, frecuencia: 125, personasHoras: 125},
  {zona: "Complejo Cmedor 1", cantidad: 182, horas: 0, turnos: 0, frecuencia: 182, personasHoras: 182},
  {zona: "Complejo Cmedor 2", cantidad: 182, horas: 0, turnos: 0, frecuencia: 182, personasHoras: 182},
  {zona: "Complejo Cmedor 3", cantidad: 206, horas: 0, turnos: 0, frecuencia: 206, personasHoras: 206},
];
export {frequency};



const assistance_report = [
  {fecha:"07/12/2018 12:14", nombre: "Yarelys Seoane Alonso", ci: "00000000000", usuario: "yerelys", solapin: "T157931", estructura: "Facultad 4", presente: "Si"}
];
export {assistance_report}

