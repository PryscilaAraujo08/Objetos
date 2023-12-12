// interfaceUsuario.js
const readline = require('readline-sync');
const ServicoPilotos = require('./caminho-do-seu-arquivo/ServicoPilotos');
const ServicoAeronaves = require('./caminho-do-seu-arquivo/ServicoAeronaves');
const ServicoAerovias = require('./caminho-do-seu-arquivo/ServicoAerovias');
const ServicoPlanosDeVoo = require('./caminho-do-seu-arquivo/ServicoPlanosDeVoo');
const Piloto = require('./caminho-do-seu-arquivo/Piloto'); // Certifique-se de importar as classes corretas
const Aeronave = require('./caminho-do-seu-arquivo/Aeronave'); // Certifique-se de importar as classes corretas
const Aerovia = require('./caminho-do-seu-arquivo/Aerovia'); // Certifique-se de importar as classes corretas
const PlanoDeVoo = require('./caminho-do-seu-arquivo/PlanoDeVoo'); // Certifique-se de importar as classes corretas

class InterfaceUsuario {
  constructor() {
    this.servicoPilotos = new ServicoPilotos();
    this.servicoAeronaves = new ServicoAeronaves();
    this.servicoAerovias = new ServicoAerovias();
    this.servicoPlanosDeVoo = new ServicoPlanosDeVoo();
  }

  exibirMenu() {
    let opcao;
    do {
      console.log('\n===== Menu Principal =====');
      console.log('1. Adicionar Piloto');
      console.log('2. Listar Pilotos');
      console.log('3. Adicionar Aeronave');
      console.log('4. Listar Aeronaves');
      console.log('5. Adicionar Aerovia');
      console.log('6. Listar Aerovias');
      console.log('7. Submeter Plano de Voo');
      console.log('8. Listar Planos de Voo');
      console.log('0. Sair');

      opcao = readline.questionInt('Escolha uma opção: ');

      switch (opcao) {
        case 1:
          this.adicionarPiloto();
          break;
        case 2:
          this.listarPilotos();
          break;
        case 3:
          this.adicionarAeronave();
          break;
        case 4:
          this.listarAeronaves();
          break;
        case 5:
          this.adicionarAerovia();
          break;
        case 6:
          this.listarAerovias();
          break;
        case 7:
          this.submeterPlanoDeVoo();
          break;
        case 8:
          this.listarPlanosDeVoo();
          break;
        case 0:
          console.log('Saindo do programa.');
          break;
        default:
          console.log('Opção inválida. Tente novamente.');
      }
    } while (opcao !== 0);
  }

  adicionarPiloto() {
    const matricula = readline.question('Digite a matrícula do piloto: ');
    const nome = readline.question('Digite o nome do piloto: ');
    const habilitacao = readline.question('Digite a habilitação do piloto: ');

    const novoPiloto = new Piloto(matricula, nome, habilitacao);
    this.servicoPilotos.adicionarPiloto(novoPiloto);
    console.log('Piloto adicionado com sucesso!');
  }

  listarPilotos() {
    const pilotos = this.servicoPilotos.listarPilotos();
    console.log('\nLista de Pilotos:');
    console.log(pilotos);
  }

  adicionarAeronave() {
    const prefixo = readline.question('Digite o prefixo da aeronave: ');
    const tipo = readline.question('Digite o tipo da aeronave: ');
    const velocidadeCruzeiro = readline.question('Digite a velocidade de cruzeiro da aeronave: ');
    const autonomia = readline.question('Digite a autonomia da aeronave: ');

    const novaAeronave = new Aeronave(prefixo, tipo, velocidadeCruzeiro, autonomia);
    this.servicoAeronaves.adicionarAeronave(novaAeronave);
    console.log('Aeronave adicionada com sucesso!');
  }

  listarAeronaves() {
    const aeronaves = this.servicoAeronaves.listarAeronaves();
    console.log('\nLista de Aeronaves:');
    console.log(aeronaves);
  }

  adicionarAerovia() {
    const identificador = readline.question('Digite o identificador da aerovia: ');
    const aeroportoOrigem = readline.question('Digite o aeroporto de origem da aerovia: ');
    const aeroportoDestino = readline.question('Digite o aeroporto de destino da aerovia: ');
    const tamanho = readline.question('Digite o tamanho da aerovia: ');

    const novaAerovia = new Aerovia(identificador, aeroportoOrigem, aeroportoDestino, parseInt(tamanho));
    this.servicoAerovias.adicionarAerovia(novaAerovia);
    console.log('Aerovia adicionada com sucesso!');
  }

  listarAerovias() {
    const aerovias = this.servicoAerovias.listarAerovias();
    console.log('\nLista de Aerovias:');
    console.log(aerovias);
  }

  submeterPlanoDeVoo() {
    // Implemente a lógica para submeter um plano de voo usando this.servicoPlanosDeVoo
    // Exemplo: this.servicoPlanosDeVoo.submeterPlanoDeVoo(novoPlanoDeVoo);
  }

  listarPlanosDeVoo() {
    const planosDeVoo = this.servicoPlanosDeVoo.listarPlanosDeVoo();
    console.log('\nLista de Planos de Voo:');
    console.log(planosDeVoo);
  }



}

// Exemplo de uso
const interfaceUsuario = new InterfaceUsuario();
interfaceUsuario.exibirMenu();