import { AddressClass } from "./address-class";
import { Utente } from "./utente"

let ciao =  `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`

export class CreaCliente implements Utente{
    
    id!: number;
    email!:string;
    password!:string;
    nome!:string;
    cognome!:string;
    date!:any;
    PIva!:any;
    indirizzo:AddressClass

    
    constructor( 
        ){
            this.email= '';
            this.password= '';
            this.nome= '';
            this.cognome= '';
            this.date= ciao;
            this.PIva = getRandomInt(10000000000);
            this.indirizzo = new AddressClass()
        }
        
    }
    
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
      }