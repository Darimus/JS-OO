// Classe Abstrata
export class Conta {

    constructor (cliente, agencia, saldoInicial){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

        if(this.constructor == Conta){
            throw new Error('Você não deveria instanciar um objeto do tipo Conta, pois ela é uma classe abstrata');
        }
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

        throw new Error("O metodo sacar é um valor abstrato, você esquece de chamar ele em algum momento");
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