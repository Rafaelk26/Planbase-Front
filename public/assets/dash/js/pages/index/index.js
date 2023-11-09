const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Entradas',
            data: [65, 59, 80, 81, 56, 55, 40, 57, 14, 35, 43, 56],
            fill: false,
            borderColor: '#77ff31',
            tension: 0.1,
          },
          {
            label: 'Saídas',
            data: [5, 35, 10, 14, 40, 35, 75, 40, 89, 65, 35, 27],
            fill: false,
            borderColor: '#ee3939',
            tension: 0.1,
          },
        ],
      };
      
      const config = {
        type: 'line',
        data: data,
        options: {
          scales: {
            x: {
              grid: {
                color: '#000' // Configura a cor das linhas de grade do eixo x como cinza
              },
              beginAtZero: true,
              ticks: {
                color: 'white' // Configura a cor dos números do eixo x para branco
              }
            },
            y: {
              grid: {
                color: '#000' // Configura a cor das linhas de grade do eixo y como cinza
              },
              beginAtZero: true,
              ticks: {
                color: 'white' // Configura a cor dos números do eixo y para branco
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: 'white' // Configura a cor do texto da legenda para branco
              }
            }
          }
        }
      };
    
      var myChart = new Chart(document.getElementById('myChart'), config);