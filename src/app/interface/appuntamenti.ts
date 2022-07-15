export class Appuntamenti {
    id!:number | undefined;
    title!:string;
    start!:Date;
    end!:Date;
    dataCreazione:string

    constructor(){
        this.dataCreazione = new Date().toLocaleDateString();
    }
}
