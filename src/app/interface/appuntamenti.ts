let ciao =  `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`

export class Appuntamenti {
    id!:number;
    appuntamento!:Date | null
    dataCreazione:string

    constructor(){
        this.dataCreazione = ciao
    }
}
