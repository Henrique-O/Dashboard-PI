// script.js

function adicionarLinha() {
    // Captura os valores dos campos de entrada
    var descricao = document.getElementById('txtdescricao').value;
    var qtdVendasPeriodo = document.getElementById('txtqtdVendasPeriodo').value;
    var periodo = document.getElementById('datePeriodo').value;
    var precoVenda = document.getElementById('numberprecoVenda').value;
    var estimativaMax = document.getElementById('numberestimativaMax').value;

    // Referência à tabela
    var tabela = document.getElementById('minhaTabela');

    // Cria uma nova linha na tabela
    var novaLinha = tabela.insertRow(-1);

    // Insere células na nova linha
    var celulaDescricao = novaLinha.insertCell(0);
    var celulaPeriodo = novaLinha.insertCell(1);
    var celulaQtd = novaLinha.insertCell(2);
    var celulaPreco = novaLinha.insertCell(3);
    var celulaProjecao = novaLinha.insertCell(4);
    var celulaAcoes = novaLinha.insertCell(5);

    // Preenche as células com os valores capturados e aplica a cor
    celulaDescricao.innerHTML = '<span style="color: #663398;">' + descricao + '</span>';
    celulaPeriodo.innerHTML = '<span style="color: #663398;">' + periodo + '</span>';
    celulaQtd.innerHTML = '<span style="color: #663398;">' + qtdVendasPeriodo + '</span>';
    celulaPreco.innerHTML = '<span style="color: #663398;">R$ ' + precoVenda + '</span>';
    celulaProjecao.innerHTML = '';  // Aqui você pode adicionar a lógica para calcular a projeção
    celulaAcoes.innerHTML = '<img src="asserts/img/Caneta.svg" alt="editar"> <img src="asserts/img/Lixeira.svg" alt="Lixeira" style="cursor:pointer;" onclick="excluirLinha(this)">';
    novaLinha.classList.add('linhaTabela');
}

function excluirLinha(botaoLixeira) {
    // Obtém a referência à linha que contém o botão de lixeira clicado
    var linha = botaoLixeira.closest('tr');

    // Remove a linha da tabela
    linha.remove();
}

function adicionarLinhaMO() {
    // Captura os valores dos campos de entrada
    var cargo = document.getElementById('txtcargo').value;
    var provisao = document.getElementById('numberprovisao').value;
    var encargo = document.getElementById('txtencargo').value;
    var colaboradores = document.getElementById('txtColaboradores').value;
    var decimoTerceiro = document.getElementById('numberdecimoTerceiro').value;
    var inss = document.getElementById('txtinss').value;
    var ferias = document.getElementById('numberferias').value;
    var alimentacao = document.getElementById('numberalimentacao').value;
    var transporte = document.getElementById('numbertransporte').value;

    // Referência à tabela
    var tabela = document.getElementById('minhaTabelaMO');

    // Cria uma nova linha na tabela
    var novaLinha = tabela.insertRow(-1);

    // Insere células na nova linha
    var celulacargo = novaLinha.insertCell(0);
    var celulaprovisao = novaLinha.insertCell(1);
    var celulaencargo = novaLinha.insertCell(2); 
    var celuladecimoTerceiro = novaLinha.insertCell(3);
    var celulaferias = novaLinha.insertCell(4);
    var celulainss = novaLinha.insertCell(5);
    var celulaalimentacao = novaLinha.insertCell(6);
    var celulatransporte = novaLinha.insertCell(7);
    var celulaTotal = novaLinha.insertCell(8);
    var celulaAcoes = novaLinha.insertCell(9);

    // Preenche as células com os valores capturados e aplica a cor
    celulacargo.innerHTML = '<span style="color: #663398;">' + cargo + '</span>';
    celulaprovisao.innerHTML = '<span style="color: #663398;"> ' + provisao + '</span>';
    celulaencargo.innerHTML = '<span style="color: #663398;">' + encargo + '</span>';
    celuladecimoTerceiro.innerHTML = '<span style="color: #663398;">R$ ' + decimoTerceiro + '</span>';
    celulaferias.innerHTML = '<span style="color: #663398;">R$ ' + ferias + '</span>';
    celulainss.innerHTML = '<span style="color: #663398;">' + inss + '</span>';
    celulaalimentacao.innerHTML = '<span style="color: #663398;">R$ ' + alimentacao + '</span>';
    celulatransporte.innerHTML = '<span style="color: #663398;">R$ ' + transporte + '</span>';
    celulaAcoes.innerHTML = '<img src="asserts/img/Caneta.svg" alt="editar"> <img src="asserts/img/Lixeira.svg" alt="Lixeira" style="cursor:pointer;" onclick="excluirLinha(this)">';
    novaLinha.classList.add('linhaTabela');
}

const adicionarButton = document.querySelector('.btn-secondary.btn-lg.btn-block');
const proximoButton = document.querySelector('.btn-secondary.btn-lg.btn-block');

adicionarButton.addEventListener('click', () => {
  // Add the data from the form to the table
  const cargo = document.getElementById('txtcargo').value;
  const salarioMensal = parseFloat(document.getElementById('numberprovisao').value);
  const quantidadeFuncionarios = parseInt(document.getElementById('txtColaboradores').value);
  const avisoPrevio = salarioMensal / 12;
  const decimoTerceiro = salarioMensal / 12;
  const ferias = (salarioMensal / 12) + (salarioMensal / 12 * 0.3);
  const encargo = document.getElementById('txtencargo').value;
  const colaboradores = document.getElementById('txtColaboradores').value;
  const inss = document.getElementById('txtinss').value;
  const beneficio = document.getElementById('numberferias').value;
  const valorAlimentacao = parseFloat(document.getElementById('txtAlimentacao').value);
  const valorTransporte = parseFloat(document.getElementById('txtTransporte').value);
  // Create a new row for the table
const row = document.createElement('tr');

// Cálculos adicionais
  const fgts = (salarioMensal + avisoPrevio + ferias) * 0.08;
  const inssEmpresa = (salarioMensal + avisoPrevio + ferias) * 0.2;

  const alimentacao = valorAlimentacao * 22; // Assuming 22 working days in a month
  const transporte = valorTransporte * 22; // Assuming 22 working days in a month
  const totalMensal = quantidadeFuncionarios * salarioMensal + (avisoPrevio + decimoTerceiro + ferias + fgts + inssEmpresa + alimentacao + transporte);

row.innerHTML = `
  <td>${cargo}</td>
  <td>R$: ${avisoPrevio.toFixed(2)}</td>
  <td>R$: ${encargo}</td>
  <td>R$: ${decimoTerceiro.toFixed(2)}</td>
  <td>R$: ${ferias.toFixed(2)}</td>
  <td>R$: ${inss}</td>
  <td>R$: ${beneficio}</td>
  <td>28/07/2024</td>
  <td>R$: ${totalMensal.toFixed(2)}</td>
  <img src="asserts/img/Caneta.svg" alt="editar"> <img src="asserts/img/Lixeira.svg" alt="Lixeira" style="cursor:pointer;" onclick="excluirLinha(this)"></td>
`;


  // Append the new row to the table body
  document.querySelector('tbody').appendChild(row);

  // Clear the form fields
  document.getElementById('txtcargo').value = '';
  document.getElementById('numberprovisao').value = '';
  document.getElementById('txtencargo').value = '';
  document.getElementById('txtColaboradores').value = '';
  document.getElementById('decimoTerceiro').value = '';
  document.getElementById('txtinss').value = '';
  document.getElementById('numberferias').value = '';
});

proximoButton.addEventListener('click', () => {
  // Retrieve the data from the form
  const salarioMensal = parseFloat(document.getElementById('txtcargo').value);
  const quantidadeFuncionarios = parseInt(document.getElementById('txtColaboradores').value);
  const valorAlimentacao = parseFloat(document.getElementById('txtAlimentacao').value);
  const valorTransporte = parseFloat(document.getElementById('txtTransporte').value);

  // Calculate provision
  const avisoPrevio = salarioMensal / 12;
  const decimoTerceiro = salarioMensal / 12;
  const ferias = (salarioMensal / 12) + (salarioMensal / 12 * 0.3);

  // Calculate social charges
  const fgts = (salarioMensal + avisoPrevio + ferias) * 0.08;
  const inssEmpresa = (salarioMensal + avisoPrevio + ferias) * 0.2;

  // Calculate benefits
  const alimentacao = valorAlimentacao * 22; // Assuming 22 working days in a month
  const transporte = valorTransporte * 22; // Assuming 22 working days in a month
  
 
  // Calculate total monthly cost
  const totalMensal = quantidadeFuncionarios * salarioMensal + (avisoPrevio + decimoTerceiro + ferias + fgts + inssEmpresa + alimentacao + transporte);

  // Display the result or use it as needed
  console.log('Total Monthly Cost:', totalMensal);
});


//Script para o icone exibir uma tabela
document.addEventListener('DOMContentLoaded', function () {
    var detalheIcon = document.querySelector('.detalhe');
    var explicacaoBox = document.getElementById('explicacaoBox');

    detalheIcon.addEventListener('click', function () {
        // Alternar a visibilidade da caixa de explicação
        if (explicacaoBox.style.display === 'none' || explicacaoBox.style.display === '') {
            explicacaoBox.style.display = 'block';
        } else {
            explicacaoBox.style.display = 'none';
        }
    });

    // Fechar a caixa de explicação se clicar fora dela
    document.addEventListener('click', function (event) {
        if (!explicacaoBox.contains(event.target) && event.target !== detalheIcon) {
            explicacaoBox.style.display = 'none';
        }
    });
});
