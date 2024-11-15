const usuario_list = {
    admin: {
        id: 1,
        password: "admin"
    },
    user: {
        id: 2,
        password: "user"
    }
};
export { usuario_list };


const asistencia_list = {
    1: {
        asistencia: true,
        fecha_hora: ""
    },
};
export { asistencia_list };


const plaanificacion_list = {
    1: {
        nombre_planificacion: "noviembre 2021 Gastex-DIRCOM-Producción",
        fecha_inicio: "01/11/2021",
        fecha_fin: "31/11/2021",
        id_persona_publicacion: "1",
        fecha_publicacion: "31/10/2021",
        id_region_guardia: 1,
        id_estado_plan: 1
    },
    2: {
        nombre_planificacion: "GOE DOcente 6 noviembre",
        fecha_inicio: "11/11/2021",
        fecha_fin: "31/11/2021",
        id_persona_publicacion: 1,
        fecha_publicacion: "10/11/2021",
        id_region_guardia: 2,
        id_estado_plan: 1
    },
    3: {
        nombre_planificacion: "noviembre Rectorado Transporte",
        fecha_inicio: "11/11/2021",
        fecha_fin: "31/11/2021",
        id_persona_publicacion: 1,
        fecha_publicacion: "10/11/2021",
        id_region_guardia: 3,
        id_estado_plan: 1
    },
    4: {
        nombre_planificacion: "noviembre_2021_Rectorado_Trans",
        fecha_inicio: "11/11/2021",
        fecha_fin: "31/11/2021",
        id_persona_publicacion: 1,
        fecha_publicacion: "30/11/2021",
        id_region_guardia: 3,
        id_estado_plan: ""
    },
    5: {
        nombre_planificacion: "mayo 2018 Bohio",
        fecha_inicio: "01/05/2018",
        fecha_fin: "31/05/2018",
        id_persona_publicacion: 1,
        fecha_publicacion: "01/05/2018",
        id_region_guardia: 4,
        id_estado_plan: ""
    },
};
export { plaanificacion_list };



const zona_list = {
    1: {
        nombre_region_guardia: "Gastex-DIRCOM-Producción",
        activo: true,
        id_responsable: 2,
        id_planificador: 1,
        id_estructura: 1
    },
    2: {
        nombre_region_guardia: "Docente 6",
        activo: true,
        id_responsable: 2,
        id_planificador: 1,
        id_estructura: 1
    },
    3: {
        nombre_region_guardia: "Rectorado-Transporte",
        activo: true,
        id_responsable: 2,
        id_planificador: 1,
        id_estructura: 1
    },
    4: {
        nombre_region_guardia: "Gastex",
        activo: true,
        id_responsable: 2,
        id_planificador: 1,
        id_estructura: 1
    },
}
export { zona_list };






