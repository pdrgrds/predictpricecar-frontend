export interface IConfigForm {
    module: 'general' | 'historial' | 'adiccional';
}

export const initIConfigForm: IConfigForm = {
    module: 'general'
}