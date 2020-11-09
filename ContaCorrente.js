import { Cliente } from "./Cliente.js";

export class ContaCorrente {

//Atributos
    static numeroDeContas = 0;
    agencia;  
    _cliente;
//Fim Atributos

//Construtores
constructor(agencia, cliente){
    this.agencia = agencia;
    this._cliente = cliente;
    ContaCorrente.numeroDeContas += 1;
}
//Fim construtores

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
        if (this._saldo >= valor){
            this._saldo -= valor;

            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) return 
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
//Fim Metodos