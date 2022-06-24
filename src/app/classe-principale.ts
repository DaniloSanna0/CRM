import { Utente } from "./utente"

let ciao =  `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`

export class ClassePrincipale implements Utente{
    
    email:string;
    password:string;
    nome:string;
    cognome:string;
    date:any;

    
    constructor( 
        email:string,
        password:string,
        nome:string,
        cognome:string){
        
        this.email=email
        this.password=password
        this.nome=nome
        this.cognome=cognome
        this.date= ciao
    }

}
