
export class FatturaClass {
    id!:number;
    numeroFattura:string;
    prodotti!:string;
    scadenza!:Number;
    data_emissione:string;

    constructor()
        {
         this.data_emissione = new Date().toLocaleDateString();
         this.numeroFattura = 'DS' + getRandomInt(1000000)
        }

    }
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
      }
