class Cliente{
    nome;
    cpf;
    
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor){
            this._saldo -= valor;
        }
    }

    depositar(valor) {
        if (valor > 0){
            this._saldo += valor;
        }
    }
}


//Cliente 1
const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233300;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

//Cliente 2
const cliente2 = new Cliente()
cliente2.nome = 'Bruno';
cliente2.cpf = 22233344400;

const contaCorrenteBruno = new ContaCorrente();
contaCorrenteBruno.agencia = 1002;
contaCorrenteBruno.depositar(0);


//Logs
console.log(contaCorrenteRicardo);
