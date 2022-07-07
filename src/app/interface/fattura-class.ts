
export class FatturaClass {
    id!:number;
    clienteId!:string;
    numeroFattura:string;
    prodotti!:string;
    scadenza!:Date;
    data_emissione:string;
    IVA:string;
    constructor()
        {
         this.data_emissione = new Date().toLocaleDateString();
         this.numeroFattura = 'DS' + getRandomInt(1000000);
         this.IVA = "22%"
        }

    }
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
      }
