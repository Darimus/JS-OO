import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

//Construtores
    constructor(cliente, agencia){
        super(cliente, agencia, 0);
        ContaCorrente.numeroDeContas += 1;
    }

    //O metodo sacar está sobreescrevendo o comportamento de sacar da classe mãe
    sacar(valor) {

        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}
