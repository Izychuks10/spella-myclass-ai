// =============================== profile toggle section

const profile = document.getElementById('profile-pic');
const profileItem = document.getElementById('profile-item');

// Toggle dropdown when clicking on profile
profile.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents the event from bubbling to the document
    profileItem.style.display = profileItem.style.display === "block" ? "none" : "block";
});

// Hide dropdown when clicking outside of it
document.addEventListener('click', (event) => {
    // Check if the click is not on the dropdown or the profile pic
    if (!profile.contains(event.target) && !profileItem.contains(event.target)) {
        profileItem.style.display = "none";
    }
});



// ============================= parent chart section


    const ctx = document.getElementById('studyChart').getContext('2d');
    const studyChart = new Chart(ctx, {
        type: 'line',
        data: {
        labels: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [
            {
            label: 'Study',
            data: [5, 15, 10, 20, 5, 30, 18, 15, 10, 12, 8, 14],
            borderColor: '#4a90e2',
            backgroundColor: 'rgba(74,144,226,0.2)',
            tension: 0.4,
            fill: true,
            pointRadius: 5
            },
            {
            label: 'Test',
            data: [8, 12, 18, 40, 10, 45, 22, 25, 18, 22, 17, 20],
            borderColor: '#2ecc71',
            backgroundColor: 'rgba(46,204,113,0.2)',
            tension: 0.4,
            fill: true,
            pointRadius: 5
            }
        ]
        },
        options: {
        responsive: true,
        plugins: {
            tooltip: {
            mode: 'index',
            intersect: false
            },
            legend: {
            display: true,
            position: 'top'
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




    // ===================================== donut chart section ================

    var options = {
    series: [65.2, 25.0, 9.8],
    chart: {
      type: 'donut',
    //   width: 280
    },
    labels: ['Exams', 'Study', 'Text'],
    colors: ['#347eff', '#20e3b2', '#fd8f39'],
    dataLabels: {
      formatter: function (val) {
        return val.toFixed(1) + "%"
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        }
      }
    },
    legend: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#donutChart"), options);
  chart.render();



