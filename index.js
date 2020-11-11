import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

//Cliente 1
const cliente1 = new Cliente('Ricardo', 11122233300);

//Conta Corrente
const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001, 0);
contaCorrenteRicardo.depositar(1000);
contaCorrenteRicardo.sacar(50);

//Conta Poupança
const contaPoupancaRicardo = new ContaPoupanca(cliente1, 1001, 0)
contaPoupancaRicardo.depositar(50);
contaPoupancaRicardo.sacar(5);

//Logs
console.log(contaCorrenteRicardo);
console.log(contaPoupancaRicardo);