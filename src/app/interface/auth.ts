export interface Auth {
        accessToken: string;
        user: {
          email: string;
          id: string;
          nome: string;
        }
}
