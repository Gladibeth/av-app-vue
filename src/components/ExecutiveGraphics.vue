<template>
  <div class="bg-white px-8 py-8 shadow-3xl rounded-md flex flex-col justify-around">
    <div class="grid grid-cols-2 mb-3">
      <span class="text-gray-900 font-semibold font-inter text-sm uppercase flex items-center">
        Evolution por documento
      </span>
      <div class="flex justify-end">
        <Button class="mr-4"  >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M21.5306 10.2806L17.0306 14.7806C16.8899 14.9213 16.699 15.0004 16.5 15.0004C16.301 15.0004 16.1101 14.9213 15.9694 14.7806C15.8286 14.6399 15.7496 14.449 15.7496 14.25C15.7496 14.051 15.8286 13.8601 15.9694 13.7194L19.1897 10.5H15.4688C13.6394 10.4995 11.8617 11.107 10.4153 12.2271C8.96889 13.3472 7.93578 14.9162 7.47844 16.6875C7.42871 16.8802 7.30447 17.0452 7.13305 17.1463C6.96163 17.2474 6.75707 17.2763 6.56437 17.2266C6.37168 17.1768 6.20663 17.0526 6.10554 16.8812C6.00444 16.7097 5.97558 16.5052 6.02531 16.3125C6.56495 14.2186 7.78571 12.3637 9.49537 11.0398C11.205 9.71596 13.3064 8.99835 15.4688 8.99999H19.1916L15.9694 5.78061C15.8997 5.71093 15.8444 5.62821 15.8067 5.53716C15.769 5.44612 15.7496 5.34854 15.7496 5.24999C15.7496 5.15144 15.769 5.05386 15.8067 4.96282C15.8444 4.87177 15.8997 4.78905 15.9694 4.71936C16.1101 4.57863 16.301 4.49957 16.5 4.49957C16.5985 4.49957 16.6961 4.51898 16.7872 4.55669C16.8782 4.59441 16.9609 4.64968 17.0306 4.71936L21.5306 9.21936C21.6004 9.28902 21.6557 9.37174 21.6934 9.46278C21.7312 9.55383 21.7506 9.65143 21.7506 9.74999C21.7506 9.84855 21.7312 9.94615 21.6934 10.0372C21.6557 10.1282 21.6004 10.211 21.5306 10.2806ZM18 19.5H3.75V8.24999C3.75 8.05108 3.67098 7.86031 3.53033 7.71966C3.38968 7.57901 3.19891 7.49999 3 7.49999C2.80109 7.49999 2.61032 7.57901 2.46967 7.71966C2.32902 7.86031 2.25 8.05108 2.25 8.24999V19.5C2.25 19.8978 2.40804 20.2793 2.68934 20.5606C2.97064 20.842 3.35218 21 3.75 21H18C18.1989 21 18.3897 20.921 18.5303 20.7803C18.671 20.6397 18.75 20.4489 18.75 20.25C18.75 20.0511 18.671 19.8603 18.5303 19.7197C18.3897 19.579 18.1989 19.5 18 19.5Z" fill="#535353"/>
            </svg>
        </Button>
        <Button >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="#535353"/>
            </svg>
        </Button>
      </div>
    </div>
    <div class="chart-container ">
      <Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem" />
    </div>
    
    
  </div>
  <div class="bg-white px-8 py-8 shadow-3xl rounded-md flex flex-col justify-around">
    <div class="grid grid-cols-2 mb-3">
      <span class="text-gray-900 font-semibold font-inter text-sm uppercase flex items-center">
        Mes actual por zonales por mm$
      </span>
      <div class="flex justify-end">
        <Button class="mr-4"  >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M21.5306 10.2806L17.0306 14.7806C16.8899 14.9213 16.699 15.0004 16.5 15.0004C16.301 15.0004 16.1101 14.9213 15.9694 14.7806C15.8286 14.6399 15.7496 14.449 15.7496 14.25C15.7496 14.051 15.8286 13.8601 15.9694 13.7194L19.1897 10.5H15.4688C13.6394 10.4995 11.8617 11.107 10.4153 12.2271C8.96889 13.3472 7.93578 14.9162 7.47844 16.6875C7.42871 16.8802 7.30447 17.0452 7.13305 17.1463C6.96163 17.2474 6.75707 17.2763 6.56437 17.2266C6.37168 17.1768 6.20663 17.0526 6.10554 16.8812C6.00444 16.7097 5.97558 16.5052 6.02531 16.3125C6.56495 14.2186 7.78571 12.3637 9.49537 11.0398C11.205 9.71596 13.3064 8.99835 15.4688 8.99999H19.1916L15.9694 5.78061C15.8997 5.71093 15.8444 5.62821 15.8067 5.53716C15.769 5.44612 15.7496 5.34854 15.7496 5.24999C15.7496 5.15144 15.769 5.05386 15.8067 4.96282C15.8444 4.87177 15.8997 4.78905 15.9694 4.71936C16.1101 4.57863 16.301 4.49957 16.5 4.49957C16.5985 4.49957 16.6961 4.51898 16.7872 4.55669C16.8782 4.59441 16.9609 4.64968 17.0306 4.71936L21.5306 9.21936C21.6004 9.28902 21.6557 9.37174 21.6934 9.46278C21.7312 9.55383 21.7506 9.65143 21.7506 9.74999C21.7506 9.84855 21.7312 9.94615 21.6934 10.0372C21.6557 10.1282 21.6004 10.211 21.5306 10.2806ZM18 19.5H3.75V8.24999C3.75 8.05108 3.67098 7.86031 3.53033 7.71966C3.38968 7.57901 3.19891 7.49999 3 7.49999C2.80109 7.49999 2.61032 7.57901 2.46967 7.71966C2.32902 7.86031 2.25 8.05108 2.25 8.24999V19.5C2.25 19.8978 2.40804 20.2793 2.68934 20.5606C2.97064 20.842 3.35218 21 3.75 21H18C18.1989 21 18.3897 20.921 18.5303 20.7803C18.671 20.6397 18.75 20.4489 18.75 20.25C18.75 20.0511 18.671 19.8603 18.5303 19.7197C18.3897 19.579 18.1989 19.5 18 19.5Z" fill="#535353"/>
            </svg>
        </Button>
        <Button >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="#535353"/>
            </svg>
        </Button>
      </div>
    </div>
    <div class="chart-container flex justify-center">
      <Chart type="doughnut" :data="chartData1" :options="chartOptions1" class="custom-doughnut-chart" /> 
    </div>
  </div>
  <div class="bg-white px-8 py-8 shadow-3xl rounded-md flex flex-col justify-around">
    <div class="grid grid-cols-2 mb-3">
      <span class="text-gray-900 font-semibold font-inter text-sm uppercase flex items-center">
        Mes actual por tipo doc en mm$
      </span>
      <div class="flex justify-end">
        <Button class="mr-4"  >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M21.5306 10.2806L17.0306 14.7806C16.8899 14.9213 16.699 15.0004 16.5 15.0004C16.301 15.0004 16.1101 14.9213 15.9694 14.7806C15.8286 14.6399 15.7496 14.449 15.7496 14.25C15.7496 14.051 15.8286 13.8601 15.9694 13.7194L19.1897 10.5H15.4688C13.6394 10.4995 11.8617 11.107 10.4153 12.2271C8.96889 13.3472 7.93578 14.9162 7.47844 16.6875C7.42871 16.8802 7.30447 17.0452 7.13305 17.1463C6.96163 17.2474 6.75707 17.2763 6.56437 17.2266C6.37168 17.1768 6.20663 17.0526 6.10554 16.8812C6.00444 16.7097 5.97558 16.5052 6.02531 16.3125C6.56495 14.2186 7.78571 12.3637 9.49537 11.0398C11.205 9.71596 13.3064 8.99835 15.4688 8.99999H19.1916L15.9694 5.78061C15.8997 5.71093 15.8444 5.62821 15.8067 5.53716C15.769 5.44612 15.7496 5.34854 15.7496 5.24999C15.7496 5.15144 15.769 5.05386 15.8067 4.96282C15.8444 4.87177 15.8997 4.78905 15.9694 4.71936C16.1101 4.57863 16.301 4.49957 16.5 4.49957C16.5985 4.49957 16.6961 4.51898 16.7872 4.55669C16.8782 4.59441 16.9609 4.64968 17.0306 4.71936L21.5306 9.21936C21.6004 9.28902 21.6557 9.37174 21.6934 9.46278C21.7312 9.55383 21.7506 9.65143 21.7506 9.74999C21.7506 9.84855 21.7312 9.94615 21.6934 10.0372C21.6557 10.1282 21.6004 10.211 21.5306 10.2806ZM18 19.5H3.75V8.24999C3.75 8.05108 3.67098 7.86031 3.53033 7.71966C3.38968 7.57901 3.19891 7.49999 3 7.49999C2.80109 7.49999 2.61032 7.57901 2.46967 7.71966C2.32902 7.86031 2.25 8.05108 2.25 8.24999V19.5C2.25 19.8978 2.40804 20.2793 2.68934 20.5606C2.97064 20.842 3.35218 21 3.75 21H18C18.1989 21 18.3897 20.921 18.5303 20.7803C18.671 20.6397 18.75 20.4489 18.75 20.25C18.75 20.0511 18.671 19.8603 18.5303 19.7197C18.3897 19.579 18.1989 19.5 18 19.5Z" fill="#535353"/>
            </svg>
        </Button>
        <Button >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="#535353"/>
            </svg>
        </Button>
      </div>
    </div>
    <div class="chart-container  flex justify-center">
      <Chart type="doughnut" :data="chartData2" :options="chartOptions2" class="custom-doughnut-chart" /> 
    </div>
  </div>
  <div class="bg-white px-8 py-8 shadow-3xl rounded-md flex flex-col justify-around">
    <div class="grid grid-cols-2 mb-3">
      <span class="text-gray-900 font-semibold font-inter text-sm uppercase flex items-center">
        Evolution por documento
      </span>
      <div class="flex justify-end">
        <Button class="mr-4"  >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M21.5306 10.2806L17.0306 14.7806C16.8899 14.9213 16.699 15.0004 16.5 15.0004C16.301 15.0004 16.1101 14.9213 15.9694 14.7806C15.8286 14.6399 15.7496 14.449 15.7496 14.25C15.7496 14.051 15.8286 13.8601 15.9694 13.7194L19.1897 10.5H15.4688C13.6394 10.4995 11.8617 11.107 10.4153 12.2271C8.96889 13.3472 7.93578 14.9162 7.47844 16.6875C7.42871 16.8802 7.30447 17.0452 7.13305 17.1463C6.96163 17.2474 6.75707 17.2763 6.56437 17.2266C6.37168 17.1768 6.20663 17.0526 6.10554 16.8812C6.00444 16.7097 5.97558 16.5052 6.02531 16.3125C6.56495 14.2186 7.78571 12.3637 9.49537 11.0398C11.205 9.71596 13.3064 8.99835 15.4688 8.99999H19.1916L15.9694 5.78061C15.8997 5.71093 15.8444 5.62821 15.8067 5.53716C15.769 5.44612 15.7496 5.34854 15.7496 5.24999C15.7496 5.15144 15.769 5.05386 15.8067 4.96282C15.8444 4.87177 15.8997 4.78905 15.9694 4.71936C16.1101 4.57863 16.301 4.49957 16.5 4.49957C16.5985 4.49957 16.6961 4.51898 16.7872 4.55669C16.8782 4.59441 16.9609 4.64968 17.0306 4.71936L21.5306 9.21936C21.6004 9.28902 21.6557 9.37174 21.6934 9.46278C21.7312 9.55383 21.7506 9.65143 21.7506 9.74999C21.7506 9.84855 21.7312 9.94615 21.6934 10.0372C21.6557 10.1282 21.6004 10.211 21.5306 10.2806ZM18 19.5H3.75V8.24999C3.75 8.05108 3.67098 7.86031 3.53033 7.71966C3.38968 7.57901 3.19891 7.49999 3 7.49999C2.80109 7.49999 2.61032 7.57901 2.46967 7.71966C2.32902 7.86031 2.25 8.05108 2.25 8.24999V19.5C2.25 19.8978 2.40804 20.2793 2.68934 20.5606C2.97064 20.842 3.35218 21 3.75 21H18C18.1989 21 18.3897 20.921 18.5303 20.7803C18.671 20.6397 18.75 20.4489 18.75 20.25C18.75 20.0511 18.671 19.8603 18.5303 19.7197C18.3897 19.579 18.1989 19.5 18 19.5Z" fill="#535353"/>
            </svg>
        </Button>
        <Button >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="#535353"/>
            </svg>
        </Button>
      </div>
    </div>
    <div class="chart-container ">
      <Chart type="bar" :data="chartData3" :options="chartOptions3"  />
    </div>
    
    
  </div>
</template>
 
 
<script>
import { onMounted, ref } from 'vue'
import Chart from 'primevue/chart'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'

export default{
  components: {
      Chart,
      Button,
      Dropdown,
  },
  setup(){
    const chartData = ref();
    const chartOptions = ref();

    const chartData1 = ref();
    const chartOptions1 = ref();

    const chartData2 = ref();
    const chartOptions2 = ref();

    const chartData3 = ref();
    const chartOptions3 = ref();

    onMounted(() => {
        chartData.value = setChartData();
        chartOptions.value = setChartOptions();

        chartData1.value = setChartData1();
        chartOptions1.value = setChartOptions1();

        chartData2.value = setChartData2();
        chartOptions2.value = setChartOptions2();

        chartData3.value = setChartData3();
        chartOptions3.value = setChartOptions3();
    });

    const setChartData = () =>  {
        const documentStyle = getComputedStyle(document.documentElement);

        return {
            labels: ['ENE', 'FEB', 'MAR', ],
            datasets: [
                {
                    type: 'bar',
                    label: 'Ventas de factura',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [50, 25, 12, 48, 90, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Venta Bol. Personal',
                    backgroundColor: documentStyle.getPropertyValue('--yellow-400'),
                    data: [21, 84, 24, 75, 37, 65, 34]
                },
                {
                    type: 'bar',
                    label: 'Venta Bol. Normal',
                    backgroundColor: documentStyle.getPropertyValue('--blue-700'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };
    }
    const setChartOptions = () =>  {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        return {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    position: 'right',
                    labels: {
                        color: textColor,
                        boxWidth: 10
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    stacked: true,
                    grid: {
                        display: false 
                      },
                      ticks: {
                        display: false 
                      }
                }
            },
            categoryPercentage: 0.2
        };
    }

    // 1
    const setChartData1 = () => {
        const documentStyle = getComputedStyle(document.body);

        return {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-700'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--cyan-200')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-800'), documentStyle.getPropertyValue('--yellow-600'), documentStyle.getPropertyValue('--cyan-400')]
                }
            ]
        };
    }
    const setChartOptions1 = () => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        return {
            cutout: '65%',
            plugins: {
                legend: {
                  position: 'right',
                  labels: {
                      color: textColor,
                      boxWidth: 10
                  }
                }
            }
        };
    }

    // 2
    const setChartData2 = () => {
        const documentStyle = getComputedStyle(document.body);

        return {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-700'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--cyan-200')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--green-600'), documentStyle.getPropertyValue('--yellow-600'), documentStyle.getPropertyValue('--cyan-400')]
                }
            ]
        };
    }
    const setChartOptions2 = () => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        return {
            cutout: '65%',
            plugins: {
                legend: {
                  position: 'right',
                  labels: {
                      
                      color: textColor,
                      boxWidth: 10
                  }
                }
            }
        };
    }

    // 3
    const setChartData3 = () => {
        const documentStyle = getComputedStyle(document.documentElement);

        return {
            labels: ['ENE', 'FEB', 'MAR', 'ABR', ],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: documentStyle.getPropertyValue('--blue-700'),
                    borderColor: documentStyle.getPropertyValue('--blue-700'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: documentStyle.getPropertyValue('--cyan-200'),
                    borderColor: documentStyle.getPropertyValue('--blue-100'),
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
    }
    const setChartOptions3 = () => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        return {
            indexAxis: 'y',
            // maintainAspectRatio: false,
            aspectRatio: 2,
            plugins: {
                legend: {
                  position: 'right',
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                  barThickness: 20,
                    ticks: {
                        color: textColorSecondary,
                        align: 'start'
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            },
            // categoryPercentage: 1
        };
    }

    return{
      chartData,
      chartOptions,
      chartData1,
      chartOptions1,
      chartData2,
      chartOptions2,
      chartData3,
      chartOptions3,
    }
  }
 
}
</script>
