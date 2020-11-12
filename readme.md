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

5- Atributo privado, atualmente não foi implementado o sistema de private do JS (#saldo) <-- Sintaxe proposta.
Porém as boas praticas "Resolveram" isso, todo atributo que estiver com _saldo no começo do nome é privado e não deve ser chamado fora do metodo!

## Sobre return:

1- Se queremos devolver um valor para quem chamou a função, precisamos fazer um retorno com a instrução return seguida daquilo que deve ser devolvido, nesse caso o próprio valor.

2- No JavaScript, se um método não possui a palavra-chave return - ou seja, se ele não devolve um valor explicitamente -, ele sempre devolve um undefined. Outra característica interessante é que toda vez que um método encontra a palavra-chave return, a sua execução é encerrada. Sendo assim, se passarmos a instrução return valor para antes da nossa condicional e executarmos nosso código, o 50 será exibido no console, mas o saque não será efetuado com sucesso.

3- Podemos também usar o return como early retunr, que evita que tenhamos muitos if's dentro de if's e assim dificultando a leitura do código, básicamente, estamos colocando as condições que NÃO queremos primeiro e dando return e deixando a execução para o final, caso tudo seja false ele opera, vou deixar um exemplo para melhor entendimento:

 depositar(valor) {
        if (valor <= 0) return 
        this._saldo += valor;
    }
Ou seja, ele só vai executar o this._saldo se o primeiro if foi falso e não se ele for verdadeiro.

## Modularizamos:

1- Vamos trabalhar com modulos, para melhor manutenção e não ter arquivos gigantes com milhoes de linhas de códigos.

2- Até o momento, separamos os modulos em dois arquivos separados o ContaCorrente.js e Cliente.js, veja que os arquivos estão com letra maiuscula no inicio, sendo assim identificando que se trata de um arquivo de modulo.

3- Não podemos esquecer de exportar os modulos:

export class Cliente{
    nome;
    cpf;
    
}

4- E depois importar o modulo correspondente para dentro do arquivo index ou qualquer outra que ira usa-lo.

## Package.json:

1-Para melhorarmos a organização do nosso código e podermos separar as classes em diversos arquivos, precisamos usar módulos de Javascript e, para isso, criamos um arquivo chamado package.json. Mas o que é esse arquivo?

O package.json é um arquivo muito utilizado em aplicações JS modernas que guarda vários dados de nossa aplicação. O arquivo gerado para este curso tem apenas algumas informações.

{
  "name": "bytebank",
  "version": "1.0.0",
  "description": "Projeto do Bytebank para seus clientes",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "type": "module"
}
Algumas delas são simples de entender, como nome, versão, descrição e autor. Outras, como o campo script, já são mais difíceis de entender sem uma explicação mais detalhada.

Como desenvolvedores é normal queremos reaproveitar código de outras pessoas e bibliotecas que estão disponíveis para nosso time. Dessa forma, agilizamos o desenvolvimento de nossas aplicações. Mas onde podemos encontrar essas bibliotecas e código feitos pela comunidade?

Achamos essas bibliotecas dentro de gerenciadores de pacote – pense neles como um lugar centralizado onde toda a comunidade pode subir e compartilhar códigos para que outros desenvolvedores usem. E é justamente para organizar essa série de pacotes e bibliotecas que o package.json foi criado. Com ele é fácil de saber qual a versão do pacote, o nome dele, quem fez aquele código etc.

No caso do Javascript o gerenciador de pacotes mais utilizado é o NPM – Node package manager.

"Ok, mas e essa tag de script?"

Até este momento no curso não fizemos muitas operações complicadas, pois só estamos usando o terminal para chamar o interpretador do NodeJS e pedindo para ele executar o arquivo que queremos. Mas conforme nosso projeto cresce ou usamos outras bibliotecas para desenvolver a aplicação, é comum que o comando que precisamos rodar no terminal fique longo ou que ele precise de alguns parâmetros especiais. Como normalmente estamos trabalhando em equipe, não queremos que alguém na nossa equipe precise ficar perguntando o tempo todo qual o comando precisa escrever para o programa rodar. É nesse momento que usamos os scripts do package.json.

Podemos escrever um script com o comando que colocaríamos no terminal, por exemplo:

"scripts": {
    "start": "node index.js"
}
E ao invés de escrever esse comando podemos chamar o script com o comando npm start. Dessa forma não precisamos lembrar de todo o comando sempre que vamos executar o programa. Se você quiser saber mais, veja na documentação do NPM (https://docs.npmjs.com/cli/v6/using-npm/scripts) os tipos de scripts e os casos de uso.

"E por que eu preciso disso no meu programa agora?"

Como esse arquivo de configurações está presente em praticamente todo projeto de Javascript moderno, algumas ferramentas usam-no para colocar informações de configuração que elas precisam. No caso do NodeJS eles escolheram adicionar uma propriedade chamada "type" dentro desse arquivo e, sempre que vão executar algum código JS, eles leem essa propriedade e configuram o interpretador do JS de acordo com o valor lido.

Como os módulos JS são uma coisa nova e experimental, dentro desse interpretador do Node não é interessante deixá-lo configurado para tratar todo arquivo como um módulo, pois muitos projetos antigos teriam problemas ao atualizar a versão do Node que estão usando.

Então, esta é a opção que eles encontraram para deixar quem quisesse usar os módulos JS conseguir configurar a ferramenta para fazer os testes, e quem não quisesse não teria problemas e não precisaria mudar nenhuma configuração.

Se você quiser saber mais sobre as propriedades que esse arquivo suportam você pode encontrá-las nesta página da documentação (https://docs.npmjs.com/cli/v6/configuring-npm/package-json).

## Sobre o metodo transferir:

1- Inicialmente vamos atualizar com este novo metodo o arquivo da conta corrente, que possui as informações de saldo.

2- Este metodo vai receber dois parametros, sendo ele valor e conta, pois queremos saber o valor que ira ser transferido e para qual conta ele sera transferido:

transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

Criamos uma variavel de nome valorSacado que ira receber o metodo sacar com o parametro de valor, logo depois o valor sacado ira passar pelo metodo depositar (ja com todas as suas regras) e ira jogar na conta correspondente.

3- Para chamar e executar este metodo:

contaCorrenteRicardo.transferir(500, contaCorrenteBruno);

Estamos transferindo da conta do Ricardo para conta do Bruno 500 reais.

## Construtor:

1- Agora nos deixamos o cpf privado, pois o numero dado de cpf nunca muda e se muda, deve ser bem raro o caso.

2- Entretanto, só queremos que essa atribuição seja feita no momento da criação de um novo Cliente, em nenhum outro momento do ciclo de vida do nosso objeto. Para essa e outras situações existem os construtores (constructor()), uma função especial que recebe, por exemplo, os atributos que a classe precisa para criar um objeto - nesse caso, nome e cpf.

3-  constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }

4- Com esse construtor, podemos já iniciar a criação de um cliente com os parametros:

const cliente1 = new Cliente('Ricardo', 11122233300);

Sendo assim, sem a necessidade de chamar os metodos ou atributos para atribuir a eles os valores.

5- Nem sempre é interessante ter construtores para deixar o código 'menor', as vezes temos que ter muitos parametros e desta forma não é legal. Analisar sempre a demanda do projeto e ter nomes interessantes para os metodos.

6- No novo modulo do curso, é falado que alguns atributos (não sei se todos), podem sser criados dentro do constructor e sendo assim, ficando sem a necessidade de declarar eles fora do constructor, pois, já criamos e refenciamos. 
Ex:

constructor (saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

Já estamos criando automaticamente o _saldo em privado e referenciando de onde ele ira tirar os dados para receber algum valor.

## Static:

1- Se quisermos saber o número de contas no total que temos em nosso sistema? Devemos criar um atributo para contar elas e um contador para ir somando a cada chamada de criaçao do construtor de contas.

2- Neste caso iremos criar um atributos estatico que vale para todos os metodos e construtores.

3- Com isso, toda vez que o construtor de ContaCorrente for chamado, somaremos 1 ao atributo numeroDeContas da classe ContaCorrente como um todo, e não de um objeto específico. Inclusive, se executarmos nosso código nesse ponto, repare que não mais receberemos os valores de numeroDeContas.

4- Como fazer:

static numeroDeContas = 0;

constructor(agencia, cliente){
    this.agencia = agencia;
    this._cliente = cliente;
    ContaCorrente.numeroDeContas += 1;
}

## Continuidade do curso:

1- Agora vamos aprimorar nosso conhecimento e colocar novas funções em nosso banco.

2- Primeiramente vamos criar uma conta poupança.

## Extends:

1- Agora se precisarmos de informações de outra classe, podemos estender informações já existentes de outra classe.

Ex:

export class ContaCorrente extends Conta {
    ...
}

Agora tudo que existe na classe Conta também pode ser utilizado pela classe ContaCorrente. Eliminando assim, muitas linhas de códigos repetidas.
Isso é o que chamamos de herança, a ContaCorrente está herdando tudo da classe Conta.

## Um pouco sobre sobreescreve metodos:

1- Para não precisarmos ter códigos repetidos e com comportamentos levemente diferentes, podemos sobreescrever alguns metodos para assim manipular melhor nosso código.

2- Na classe Cliente temos todo o nosso modelo de sacar, sendo assim, queremos modificar a taxa de saque da conta corrente, então devemos chamar o metodo e sobreescrever um comportamento dentro dele.
Ex:

//Dentro do arquivo ContaCorrente
sacar(valor) {

        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }

Ou seja, estamos pegando o metodo sacar da classe Conta e chamando ele dentro da classe ContaCorrente, e mudando a taxa de saque.
