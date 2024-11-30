export interface ConfigData { 
    listEvaluation: {
        combustible: string;
        descripcion: string;
        kilometro: number;
        link: string;
        precio: number;
        tipo: string;
        titulo: string;
        uri: string;
    }[];
    listBrandPremiun: {
        uri: string;
        titulo: string;
        link: string;
    }[];
    lisToptBlog: {
        uri: string;
        categoria: string;
        user: string;
        fecha: string;
        descripcion: string;
    }[]
}