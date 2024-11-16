export class Planning {

    constructor(
        id_planificacion, 
        id_estado_plan, 
        nombre_planificacion,
        id_region_guardia,
        fecha_inicio,
        fecha_fin,
        id_persona_publicacion,
        fecha_publicacion) {
        this.id_planificacion = id_planificacion;
        this.id_estado_plan = id_estado_plan;
        this.id_region_guardia = id_region_guardia;
        this.nombre_planificacion = nombre_planificacion;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.id_persona_publicacion = id_persona_publicacion;
        this.fecha_publicacion = fecha_publicacion;
    }

}

export class PlanningColumn{
    constructor(
        nombre_planificacion,
        fecha_inicio,
        fecha_fin,
        nombre_region_guardia,
    ){
        this.nombre_planificacion = nombre_planificacion;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.nombre_region_guardia = nombre_region_guardia;
    }
}