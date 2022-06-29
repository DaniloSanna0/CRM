export class User {
  id!: number;
  email!: string;
  password!: string;
  nome!: string;
  cognome!: string;

  constructor(){
    this.email = '';
    this.password = '';
    this.nome = '';
    this.cognome = '';
  }
}
