export class Conta {

    constructor (cliente, agencia, saldoInicial){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    //Acessores
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    _saldo = 0;

    get saldo(){
        return this._saldo;
    }
    //Fim Acessores

    //Metodos
    sacar(valor) {

        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa) {

        const valorSacado = taxa * valor;

        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;

            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        if (valor <= 0) return 
        this._saldo += valor;
    }

    transferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
    //Fim Metodos

}