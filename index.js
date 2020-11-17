import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

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


//Funcionarios
const gerenteBruno = new Gerente ('Bruno', 7000, 11110000000);
gerenteBruno.cadastrarSenha('123');

const diretorBruno = new Diretor ('Passos', 20000, 12345678900);
diretorBruno.cadastrarSenha('1234');

const gerenteEstaLogado = SistemaAutenticacao.login(gerenteBruno, '123');
const diretorEstaLogado = SistemaAutenticacao.login(diretorBruno, '1234');


//Logs
console.log(gerenteEstaLogado, diretorEstaLogado);
