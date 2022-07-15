import { CreaCliente } from "./crea-cliente";

export class FatturaClass {
    id!:number;
    clienteId!:number;
    numeroFattura:string;
    prodotti!:string;
    scadenza!:Date;
    data_emissione:string;
    IVA:string;
    pagata!:boolean;
    clienteInfo!:CreaCliente
    constructor()
        {
         this.data_emissione = new Date().toLocaleDateString();
         this.numeroFattura = 'DS' + getRandomInt(1000000);
         this.IVA = "22%";
         this.pagata = false;
        }

    }
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
      }
