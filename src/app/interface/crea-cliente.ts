import { AddressClass } from "./address-class";
import { Utente } from "./utente"

export class CreaCliente implements Utente{
    
    id!: number;
    email!:string;
    password!:string;
    nome!:string;
    cognome!:string;
    date!:any;
    PIva!:number;
    indirizzo:AddressClass

    
    constructor( 
        ){
            this.email= '';
            this.password= '';
            this.nome= '';
            this.cognome= '';
            this.date= new Date().toLocaleDateString();
            this.PIva = getRandomInt(10000000000);
            this.indirizzo = new AddressClass()
        }
        
    }
    
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
      }