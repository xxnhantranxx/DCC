jQuery(document).ready(function($){
  $(document).ready(function(){
    var ctx = document.getElementById("verticalChart");
    if($(window).width() < 850){
///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
//                                     Giảm phát biểu đồ                                             //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
      ctx.height = 900;
      var vChartCanvas = document.getElementById("verticalChart").getContext("2d");
            var planetData = {
              // labels: ["2018", "2019", "2020"],
              // datasets: [InNetwork, OutNetwork,Else ]
            labels: ["Năng lượng", "Nông nghiệp","Sử dụng đất", "Chất thải rắn", "Công nghiệp"],
            datasets:[
              {//0
                label: 'Số liệu công bố',
                fill: true,
                lineTension: 0.1,
                backgroundColor:'#8eb937',
                borderColor: '#8eb937',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#8eb937',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: '#8eb937',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                barThickness: 15,           
                data:[28000, 18000,18900,20000,13000,]        
              },
             {//1
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
                data:[6000, 7200,16000,17000,15000,]
              },
            ]
          };
        }else{
        ctx.height = 320;
        var vChartCanvas = document.getElementById("verticalChart").getContext("2d");
             var planetData = {
    // labels: ["2018", "2019", "2020"],
    // datasets: [InNetwork, OutNetwork,Else ]
            labels: ["Năng lượng", "Nông nghiệp","Sử dụng đất", "Chất thải rắn", "Công nghiệp"],
            datasets:[
              {
                //0
                label: 'Số liệu công bố',
                fill: true,
                lineTension: 0.1,
                backgroundColor:'#8eb937',
                borderColor: '#8eb937',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#8eb937',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: '#8eb937',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                barThickness: 35,  
                data:[28000, 18000,18900,20000,13000,] 
              
              },
              {//1
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
                data:[400, 99,16000,17000,15000,]
                  },
               ]
            };
          }

             var chartOptions = {             
              plugins: {
                htmlLegend: {
                  // ID of the container to put the legend in
                  containerID: 'legend-container',
                },
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
              options: chartOptions,
            });




///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
//                                     Trong nước biểu đồ                                            //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////


    var ctx = document.getElementById("verticalChart1");
    if($(window).width() < 850){
      ctx.height = 500;
      var vChartCanvas = document.getElementById("verticalChart1").getContext("2d");
            var planetData = {
              // labels: ["2018", "2019", "2020"],
              // datasets: [InNetwork, OutNetwork,Else ]
            labels: ["Giảm nhẹ", "Thích ứng","Khác"],
            datasets:[
              {
                //0
                label: 'Số liệu',
                fill: true,
                lineTension: 0.1,
                backgroundColor:['#8eb937','#d3bd3a','#4285f4'],
                borderColor: '#8eb937',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#8eb937',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: '#8eb937',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                barThickness: 35,  
                data:[720000, 100000,60000]           
              },
            ]
          };
        }else{
        ctx.height = 500;
        var vChartCanvas = document.getElementById("verticalChart1").getContext("2d");
             var planetData = {
            // labels: ["2018", "2019", "2020"],
            // datasets: [InNetwork, OutNetwork,Else ]
            labels: ["Giảm nhẹ", "Thích ứng","Khác"],
            datasets:[
              {
                //0
                label: 'Số liệu',
                fill: true,
                lineTension: 0.1,
                backgroundColor:['#8eb937','#d3bd3a','#4285f4'],
                borderColor: '#8eb937',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#8eb937',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: '#8eb937',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                barThickness: 35,  
                data:[720000, 100000,60000]           
              },
            ]
          };
        }

        var chartOptions = {             
              plugins: {
                htmlLegend: {
                  // ID of the container to put the legend in
                  containerID: 'legend-container',
                },
              legend: {
                  display: false,
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
                    
                }]
            }
        };
      var barChart = new Chart(verticalChart1, {
        type: 'bar',
        data: planetData,
        options: chartOptions,
      });

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
//                                     Quốc tế biểu đồ                                               //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////


    var ctx = document.getElementById("verticalChart2");
    if($(window).width() < 850){
      ctx.height = 500;
      var vChartCanvas = document.getElementById("verticalChart2").getContext("2d");
            var planetData = {
              // labels: ["2018", "2019", "2020"],
              // datasets: [InNetwork, OutNetwork,Else ]
            labels: ["Giảm nhẹ", "Thích ứng","Khác"],
            datasets:[
              {
                //0
                label: 'Số liệu',
                fill: true,
                lineTension: 0.1,
                backgroundColor:['#8eb937','#d3bd3a','#4285f4'],
                borderColor: '#8eb937',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#8eb937',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: '#8eb937',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                barThickness: 35,  
                data:[620000, 200000,110000]           
              },
            ]
          };
        }else{
        ctx.height = 500;
        var vChartCanvas = document.getElementById("verticalChart2").getContext("2d");
             var planetData = {
            // labels: ["2018", "2019", "2020"],
            // datasets: [InNetwork, OutNetwork,Else ]
            labels: ["Giảm nhẹ", "Thích ứng","Khác"],
            datasets:[
              {
                //0
                label: 'Số liệu',
                fill: true,
                lineTension: 0.1,
                backgroundColor:['#8eb937','#d3bd3a','#4285f4'],
                borderColor: '#8eb937',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#8eb937',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: '#8eb937',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                barThickness: 35,  
                data:[620000, 200000,110000]          
              },
            ]
          };
        }

        var chartOptions = {             
              plugins: {
                htmlLegend: {
                  // ID of the container to put the legend in
                  containerID: 'legend-container',
                },
              legend: {
                  display: false,
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
                    
                }]
            }
        };
      var barChart = new Chart(verticalChart2, {
        type: 'bar',
        data: planetData,
        options: chartOptions,
      });
///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
//                               Kiểm kê quốc gia khí nhà kính                                       //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////


    var ctx = document.getElementById("verticalChart3");
    if($(window).width() < 850){
      ctx.height = 400;
      var vChartCanvas = document.getElementById("verticalChart3").getContext("2d");
            var planetData = {
              // labels: ["2018", "2019", "2020"],
              // datasets: [InNetwork, OutNetwork,Else ]
            labels: ["CO2", "CH4", "N20", "CO", "NOx", "NMVOCs", "SOx"],
            datasets:[
              {
                //0
                label: 'Số liệu',
                fillColor: "#4285f4",
                strokeColor: "#4285f4",
                fill: true,
                lineTension: 0.1,
                backgroundColor:['#4285f4'],
                borderColor: '#8eb937',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#8eb937',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: '#8eb937',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                barThickness: 35,  
                data: [120807.28,86000.22,98755.91,142000.22,131668.2,135265.14,120225.15]         
              },
            ]
          };
        }else{
        ctx.height = 270;
        var vChartCanvas = document.getElementById("verticalChart3").getContext("2d");
             var planetData = {
            // labels: ["2018", "2019", "2020"],
            // datasets: [InNetwork, OutNetwork,Else ]
            labels: ["CO2", "CH4", "N20", "CO", "NOx", "NMVOCs", "SOx"],
            datasets:[
              {
                //0
                label: 'Số liệu',
                fill: true,
                fillColor: "#4285f4",
                strokeColor: "#4285f4",
                lineTension: 0.1,
                backgroundColor:['#4285f4'],
                borderColor: '#8eb937',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#8eb937',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: '#8eb937',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                barThickness: 35,  
                data: [120807.28,86000.22,98755.91,142000.22,131668.2,135265.14,120225.15]            
              },
            ]
          };
        }

        var chartOptions = {        
          plugins: {
            legend: {
              display: false,
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
                    
            }]
          }
        };
      var barChart = new Chart(verticalChart3, {
        type: 'bar',
        data: planetData,
        options: chartOptions,
      });
    }); 
});
