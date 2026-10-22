// Dados extraídos da tabela de projeção
const anos = ['Ano 1', 'Ano 2', 'Ano 3', 'Ano 4', 'Ano 5', 'Ano 6', 'Ano 7', 'Ano 8'];
const valoresFinais = [1800.00, 3870.00, 6241.50, 8949.38, 12032.22, 15532.75, 19498.20, 23980.80];
const rendimentos = [0.00, 180.00, 387.00, 624.15, 894.94, 1203.22, 1553.28, 1949.82];

// 1. Gráfico de Linha: Evolução Patrimonial
const ctxLine = document.getElementById('lineChart').getContext('2d');
new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: anos,
        datasets: [{
            label: 'Valor Final Acumulado (R$)',
            data: valoresFinais,
            borderColor: '#0d9488',
            backgroundColor: 'rgba(13, 148, 136, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.3,
            pointBackgroundColor: '#115e59',
            pointRadius: 5
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return 'R$ ' + value.toLocaleString('pt-BR');
                    }
                }
            }
        }
    }
});

// 2. Gráfico de Barras: Rendimentos dos Juros Compostos
const ctxBar = document.getElementById('barChart').getContext('2d');
new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: anos,
        datasets: [{
            label: 'Rendimento no Ano (R$)',
            data: rendimentos,
            backgroundColor: '#f59e0b',
            borderRadius: 6
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return 'R$ ' + value.toLocaleString('pt-BR');
                    }
                }
            }
        }
    }
});
