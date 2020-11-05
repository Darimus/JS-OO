import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//Cliente 1
const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233300;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);

//Cliente 2
const cliente2 = new Cliente()
cliente2.nome = 'Bruno';
cliente2.cpf = 22233344400;

const contaCorrenteBruno = new ContaCorrente();
contaCorrenteBruno.agencia = 1002;
contaCorrenteBruno.depositar(0);


//Logs
console.log(valorSacado);
