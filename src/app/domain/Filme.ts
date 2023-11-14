//linkar a classe cliente com o componente que quero usar

import { Diretor } from "./Diretor";

export class Filme {

   id?: number;
   titulo?: string;
   ano?: number;
   sinopse?: string;
   data?: string; 
   diretor?:Diretor[];
   
}
    
