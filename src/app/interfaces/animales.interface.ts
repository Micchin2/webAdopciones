export interface Animales {
    data:  Datum[];
    links: Links;
    meta:  Meta;
}

export interface Datum {
    id:                number;
    nombre:            string;
    tipo:              Tipo;
    color:             Color;
    edad:              string;
    estado:            Estado;
    genero:            Genero;
    desc_fisica:       string;
    desc_personalidad: string;
    desc_adicional:    string;
    esterilizado:      number;
    vacunas:           number;
    imagen:            string;
    equipo:            Equipo;
    region:            Region;
    comuna:            string;
    url:               string;
}

export enum Color {
    F65B2A = "#F65B2A",
    Ffd700 = "#FFD700",
    The9370DB = "#9370DB",
}

export enum Equipo {
    AdopcionesCallejeritosDeLaVega = "Adopciones Callejeritos de la Vega",
    FundaciónAperrando = "Fundación Aperrando",
    FundaciónNuevoComienzo = "Fundación Nuevo Comienzo",
    FundaciónRescatandoHuellasDePucón = "Fundación Rescatando Huellas de Pucón",
    Privado = "Privado",
}

export enum Estado {
    Adopcion = "adopcion",
    Encontrado = "encontrado",
}

export enum Genero {
    Hembra = "hembra",
    Macho = "macho",
}

export enum Region {
    Coquimbo = "Coquimbo",
    LaAraucanía = "La Araucanía",
    LosRíos = "Los Ríos",
    Maule = "Maule",
    OHiggins = "O'Higgins",
    Rm = "RM",
    Tarapacá = "Tarapacá",
    Valparaíso = "Valparaíso",
}

export enum Tipo {
    Conejo = "Conejo",
    Gato = "Gato",
    Perro = "Perro",
}

export interface Links {
    first: string;
    last:  string;
    prev:  null;
    next:  null;
}

export interface Meta {
    current_page: number;
    from:         number;
    last_page:    number;
    links:        Link[];
    path:         string;
    per_page:     number;
    to:           number;
    total:        number;
}

export interface Link {
    url:    null | string;
    label:  string;
    active: boolean;
}
