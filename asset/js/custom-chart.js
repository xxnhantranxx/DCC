jQuery(document).ready(function($){
	$(document).ready(function(){
    var ctx = document.getElementById("verticalChart");
    if($(window).width() < 850){
      ctx.height = 200;
      var vChartCanvas = document.getElementById("verticalChart").getContext("2d");
            var planetData = {
              labels: ["CO2", "CH4", "N20", "CO", "NOx", "NMVOCs", "SOx"],
              datasets:[
                {
                    label: 'Việt Nam',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor:'#114f9a',
                    borderColor: '#114f9a',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#114f9a',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: '#114f9a',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 5,
                    pointHitRadius: 10,
                    barThickness: 15,
                    data: [120807.28,86000.22,98755.91,142000.22,131668.2,135265.14,120225.15]
                  },
                ]
            };
    }else{
      ctx.height = 67;
      var vChartCanvas = document.getElementById("verticalChart").getContext("2d");
            var planetData = {
              labels: ["CO2", "CH4", "N20", "CO", "NOx", "NMVOCs", "SOx"],
              datasets:[
                {
                    label: 'Việt Nam',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor:'#114f9a',
                    borderColor: '#114f9a',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#114f9a',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: '#114f9a',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 5,
                    pointHitRadius: 10,
                    barThickness: 30,
                    data: [120807.28,86000.22,98755.91,142000.22,131668.2,135265.14,120225.15]
                  },
                ]
            };
    }

             var chartOptions = {             
              plugins: {
                legend: {
                  display: false
                },
                 datalabels: {
                    font: {
                             weight: "bold"
                         },
                    color: "#010",
                   
                  formatter: (value, verticalChart) => {
                   return '100%';
                    
                }
                },
                   
               },
              scales: {
                xAxes: [{
                  
                }],
                yAxes: [{
                  stacked: false,
                  
                    gridLines: {
                      drawOnChartArea: false,
                      display: false
                    },
                    
                }, {
                 
                }]
              }
            };

            var barChart = new Chart(verticalChart, {
              type: 'bar',
              data: planetData,
              options: chartOptions
            });
    });	
});
