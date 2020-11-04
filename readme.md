## Estudos sobre JavaScript: Orientação a Objeto

1- Primeiramente o projeto proposto pelo curso é o seguinte: Criando um banco com algumas informações, nome do cliente, cpf, saldo e saque.
Ao longo do curso pode ser que eles coloquem mais funcionalidades dentro do programa.

## Inicio de tudo

1- Criamos o nosso index.js e estamos rodando ele no node para ver a saida do log.

2- Atualmente estamos repetindo muito as linhas de código, pois inicialmente temos, nome, cpf, saldo e agencia. Toda essa estrutura está sendo repetida e isso não é legal, imagina se temos dezenas de clientes e precisamos agora adicionar RG por exemplo, vamos ter que ir manualmente e adicionar em todos esses 'n' clientes.

## Classe:

1- Uma classe seria um molde ou seja, quando temos que repetir varias vezes certas informações, como nome, cpf, saldo e agencia.

2- Ou seja, vamos trabalhar com classes para resolver esses problemas de repeticao.

3- Vamos ver a estrutura básica de como criar uma classe:

class NomeDaClasse {
    bloco de definição
}

Muito importante dar um bom nome para classe.
Dentro da classe, não chamamos de variaveis as coisas e sim de ATRIBUTOS, é o mesmo conceito.

Nossa estrutura no código ficou a seguinte:

class Cliente{
    nome;
    cpf;
    angencia;
    saldo;
}

E para criar um novo cliente, fazemos o seguinte:

const cliente1 = new Cliente();

//Cliente 1
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233300;
cliente1.agencia = 1001;
cliente1.saldo = 0;

Quando damos um new Cliente por exemplo, isso se chama objeto, dai vem o nome programação orientada a objeto. Ou seja estamos criando um novo objeto a partir deste molde.
O cliente1 é uma instancia da nossa classe Cliente.

## Metodo:

1- Vamos criar um metodo dentro da classe ContaCorrente, resolvemos dividir as informações da conta em duas classes distintas, uma vai cuidar do nome e cpf do cliente e a outra as informações do banco em si, como saldo e agencia.

2- Até o momento ficou assim as classes:

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

3- Vamos explicar o que seria esse metodo sacar. Vamos criar uma forma do cliente mexer em sua conta corrente, sacar dinheiro até o momento, atribuimos um saldo para ele:

contaCorrenteRicardo.saldo = 100;

4- Agora o metodo sacar retorna um valor, e criamos uma condicional para o cliente não ficar negativo, ou seja, nunca teremos menos que 0 em conta.
Então this.saldo (quer dizer, que o saldo desta conta(seja ela qual for), tem que ser maior ou igual ao valor que desejamos sacar, caso contrario ele não entra na condição, ao entrar na condição do if vamos pegar this.saldo e subtrair do valor).
This quer dizer este.