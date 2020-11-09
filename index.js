import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//Cliente 1
const cliente1 = new Cliente('Ricardo', 11122233300);

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(1000);

const valorSacado = contaCorrenteRicardo.sacar(50);

//Cliente 2
const cliente2 = new Cliente('Bruno', 22233344400)

const contaCorrenteBruno = new ContaCorrente();
contaCorrenteBruno.agencia = 1002;
contaCorrenteBruno.cliente = cliente2;
contaCorrenteBruno.depositar(100);

contaCorrenteRicardo.transferir(500, contaCorrenteBruno);

//Logs
console.log(cliente2);