var ctx = document.getElementById('myChart').getContext('2d');
var data = [10, 15, 40, 25, 65, 30, 35, 40, 45, 55];

// Separate the data into two segments: below and above 30
var below30 = data.map(function(value) {
    return value <= 50 ? value :50;
});
var between30 = data.map(function(value) {
    return value >=50  ? value - 50 : 0;
});

var above40 = data.map(function(value) {
    return value >=52 ? value - 50 : 0;
});

var myChart = new Chart(ctx, {
    type: 'bar',
    legend:'Bar Graph',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [{
            label: 'Below 50',
            data: below30,
            backgroundColor: '#3490F3',
            borderWidth: 1
        }, 
        {
            label: 'break',
            data: between30,
            backgroundColor: '#fff',
            borderWidth: 1
        },
        {
            label: 'Above 52',
            data: above40,
            backgroundColor: '#3490F3',
            borderWidth: 1
        },
    ]
    },
    options: {
        scales: {
            x: {
                stacked: true,
                grid: {
                    drawOnChartArea: false,

                }
            },
            y: {
                beginAtZero: true,
                stacked: true,
                ticks: {
                    stepSize: 10
                }
            }
        },
        
    },
    
  
});
