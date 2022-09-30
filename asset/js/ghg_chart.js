jQuery(document).ready(function($){
  $(document).ready(function(){
    var ctx = document.getElementById("verticalChart");
    if($(window).width() < 850){
      ctx.height = 700;
      var vChartCanvas = document.getElementById("verticalChart").getContext("2d");
            var planetData = {
              // labels: ["2018", "2019", "2020"],
              // datasets: [InNetwork, OutNetwork,Else ]
            labels: ["2013", "2014","2015", "2016", "2017","2018"],
            datasets:[
              {
                label: 'Số liệu công bố',
                fill: true,
                lineTension: 0.1,
                backgroundColor:'#019fe2',
                borderColor: '#019fe2',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#019fe2',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: '#019fe2',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                barThickness: 15,           
                data:[28000, 23000,24000,25500,27000,25820]        
              },
             {
                label: 'Đã xác thực',
                fill: false,
                lineTension: 0.1,
                backgroundColor:'#d3bd3b',
                borderColor: '#d3bd3b',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#d3bd3b',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: '#d3bd3b',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                barThickness: 15,
                data:[3000, 8000,9200,13520,16000,19999]
              },
            ]
          };
        }else{
        ctx.height = 320;
        var vChartCanvas = document.getElementById("verticalChart").getContext("2d");
             var planetData = {
    // labels: ["2018", "2019", "2020"],
    // datasets: [InNetwork, OutNetwork,Else ]
            labels: ["2013", "2014","2015", "2016", "2017","2018"],
            datasets:[
              {
                
                label: 'Số liệu công bố',
                fill: true,
                lineTension: 0.1,
                backgroundColor:'#019fe2',
                borderColor: '#019fe2',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#019fe2',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: '#019fe2',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                barThickness: 35,  
                data:[28000, 23000,24000,25500,27000,25820]  
              
              },
              {
                label: 'Đã xác thực',
                fill: false,
                lineTension: 0.1,
                backgroundColor:'#d3bd3b',
                borderColor: '#d3bd3b',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#d3bd3b',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: '#d3bd3b',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                barThickness: 35,
                data:[3000, 8000,9200,13520,16000,19999]
                  },
               ]
            };
          }

             var chartOptions = {             
              plugins: {
                legend: {
                  display: true,
                  position:'bottom',
                  labels:{
                    padding:40,
                    font: {
                        size: 14
                    }
                  }
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
