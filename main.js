// main.js
const ServicoPilotos = require('./services/ServicoPilotos');
const ServicoAeronaves = require('./services/ServicoAeronaves');
const ServicoAerovias = require('./services/ServicoAerovias');
const ServicoPlanosDeVoo = require('./services/ServicoPlanosDeVoo');

const servicoPilotos = new ServicoPilotos();
const servicoAeronaves = new ServicoAeronaves();
const servicoAerovias = new ServicoAerovias();
const servicoPlanosDeVoo = new ServicoPlanosDeVoo();

// Carregar pilotos do arquivo
servicoPilotos.carregarPilotosDoArquivo('data/pilotos.txt');

// Carregar aeronaves do arquivo
servicoAeronaves.carregarAeronavesDoArquivo('data/aeronaves.txt');

// Carregar aerovias do arquivo
servicoAerovias.carregarAeroviasDoArquivo('data/aerovias.txt');

// Carregar planos de voo do arquivo
servicoPlanosDeVoo.carregarPlanosDeVooDoArquivo('data/planosDeVoo.txt');

// Listar pilotos (exemplo)
console.log('Lista de Pilotos:');
console.log(servicoPilotos.pilotos);

// Listar aeronaves (exemplo)
console.log('\nLista de Aeronaves:');
console.log(servicoAeronaves.aeronaves);

// Listar aerovias (exemplo)
console.log('\nLista de Aerovias:');
console.log(servicoAerovias.aerovias);

// Listar planos de voo (exemplo)
console.log('\nLista de Planos de Voo:');
console.log(servicoPlanosDeVoo.planosDeVoo);