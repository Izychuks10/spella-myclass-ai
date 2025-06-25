//  ========================================= student our chart

const ctp = document.getElementById('hoursChart').getContext('2d');
  const hoursChart = new Chart(ctp, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
               'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Study',
          data: [45, 55, 40, 50, 35, 42, 48, 43, 50, 39, 49, 38],
          backgroundColor: '#00c49a'
        },
        {
          label: 'Exam',
          data: [22, 20, 18, 37, 30, 26, 30, 26, 25, 20, 40, 30],
          backgroundColor: '#a0f0d0'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            usePointStyle: true
          }
        },
        title: {
          display: true,
          text: ''
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Hours'
          }
        }
      }
    }
  });