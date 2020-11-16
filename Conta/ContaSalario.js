export class ContaSalario extends Conta{

    constructor (cliente, agencia, saldoInicial){
        super(cliente, agencia, saldoInicial);
    }

    sacar(valor){
        let taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}