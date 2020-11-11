import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//Cliente 1
const cliente1 = new Cliente('Ricardo', 11122233300);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(1000);
contaCorrenteRicardo.sacar(50);

//Logs
console.log(contaCorrenteRicardo);