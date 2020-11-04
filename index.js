class Cliente{
    nome;
    cpf;
    
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}


//Cliente 1
const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233300;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.saldo = 100;

contaCorrenteRicardo.sacar(50);

//Cliente 2
const cliente2 = new Cliente()
cliente2.nome = 'Bruno';
cliente2.cpf = 22233344400;

const contaCorrenteBruno = new ContaCorrente();
contaCorrenteBruno.agencia = 1002;
contaCorrenteBruno.saldo = 0;


//Logs
console.log(contaCorrenteBruno);
console.log(contaCorrenteRicardo);
console.log(cliente1);
console.log(cliente2);