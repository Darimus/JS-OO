import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

//Construtores
    constructor(cliente, agencia){
        super(cliente, agencia, 0);
        ContaCorrente.numeroDeContas += 1;
    }
}
