import { Utente } from "./utente"

export class ClassePrincipale implements Utente{
    
    id: number;
    email:string;
    password:string;
    nome:string;
    cognome:string;
    date:any;
    
    
    constructor( 
        id: number,
        email:string,
        password:string,
        nome:string,
        cognome:string){
        
        this.id = id 
        this.email=email
        this.password=password
        this.nome=nome
        this.cognome=cognome
        this.date= new Date().toLocaleDateString();
    }

}
