<template>
  <Navbar :name="'Resumen ejecutivo Auditor Virtual'"/>
  <div class="bg-gray-100  h-screen">
    <div class="max-w-medium w-1920 m-0-auto ">
      <div class="grid grid-cols-custom13 gap-4">
        <div class="bg-white">
          <div class=" flex bg-gray-300 p-3 py-3">
            <span class="text-gray-900 text-sm font-semibold font-inter">Emisión de Documentos con tienda cerrada</span>
            <i class="pi pi-external-link bg-gray-900 px-3 py-2 text-sm h-fit text-white"></i>
          </div>
          <div class="h-85vh overflow-scroll bg-white px-4 pt-4 ">
            <!-- card -->
            <Card class="bg-gray-100 h-fit rounded-lg mb-4">
                <template #title>
                  <p>
                    <i class="pi pi-list   h-fit text-gray-900 mr-2"></i>
                    <span class="text-gray-900 font-semibold font-inter text-sm">Descripción:</span>
                  </p>
                </template>
                <template #content>
                  <p class="text-gray-200 text-sm ">
                    Transacciones facturadas fuera del horario de atensión a público
                  </p>
                </template>
            </Card>

            <Card class="bg-gray-100 h-fit rounded-lg mb-4">
                <template #title>
                  <p>
                    <i class="pi pi-exclamation-triangle   h-fit text-red-900 mr-2"></i>
                    <span class="text-gray-900 font-semibold font-inter text-sm">Riesgo:</span>
                  </p>
                </template>
                <template #content>
                  <p class="text-gray-200 text-sm ">
                    Transacciones facturadas fuera del horario de atensión a público
                  </p>
                </template>
            </Card>

            <Card class="bg-gray-100 h-fit rounded-lg mb-4">
                <template #title>
                  <p>
                    <i class="pi pi-sitemap  h-fit text-gray-900 mr-2"></i>
                    <span class="text-gray-900 font-semibold font-inter text-sm">Análisis de situación identificada:</span>
                  </p>
                </template>
                <template #content>
                  <p class="text-gray-200 text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
                </template>
            </Card>

            <Card class="bg-gray-100 h-fit rounded-lg mb-4">
                <template #title>
                  <p>
                    <i class="pi pi-flag   h-fit text-green-900 mr-2"></i>
                    <span class="text-gray-900 font-semibold font-inter text-sm">Recomendaciones:</span>
                  </p>
                </template>
                <template #content>
                  <p class="text-gray-200 text-sm ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </p>
                </template>
            </Card>

            <Card class="bg-gray-100 h-fit rounded-lg mb-4">
                <template #title>
                  <p>
                    <i class="pi pi-flag   h-fit text-green-900 mr-2"></i>
                    <span class="text-gray-900 font-semibold font-inter text-sm">Recomendaciones:</span>
                  </p>
                </template>
                <template #content>
                  <p class="text-gray-200 text-sm ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </p>
                </template>
            </Card>
          </div>
        </div>
        <div class="h-48 py-10">
          <div class="grid grid-cols-2 gap-4 mb-4 ">
            <div class="bg-white px-4 py-8">
              <div class="grid grid-cols-2 mb-8">
                <span class="text-gray-900 font-semibold font-inter text-sm uppercase flex items-center">
                  Evolution por documento
                </span>
                <div class="flex justify-end">
                  <Button icon="pi pi-external-link" class="bg-white w-full border-2 border-gray-800 rounded-none py-1 px-3 text-md w-fit mr-2 text-gray-800" :style="{border: '2px solid #8d8e93'}"  />
                  <Button icon="pi pi-file-pdf"  class="bg-white w-full border-2 border-gray-800 rounded-none  py-1 px-3 w-fit  text-2xs  text-gray-800" :style="{border: '2px solid #8d8e93'}"  iconPos="right" label="Descargar" />
                </div>
              </div>
              <div class="chart-container ">
                <Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem" />
              </div>
              
              
            </div>
            <div class="bg-white px-4 py-8">
              <div class="grid grid-cols-2 mb-8">
                <span class="text-gray-900 font-semibold font-inter text-sm uppercase flex items-center">
                  Evolution por documento
                </span>
                <div class="flex justify-end">
                  <Button icon="pi pi-external-link" class="bg-white w-full border-2 border-gray-800 rounded-none py-1 px-3 text-md w-fit mr-2 text-gray-800" :style="{border: '2px solid #8d8e93'}"  />
                  <Button icon="pi pi-file-pdf"  class="bg-white w-full border-2 border-gray-800 rounded-none  py-1 px-3 w-fit  text-2xs  text-gray-800" :style="{border: '2px solid #8d8e93'}"  iconPos="right" label="Descargar" />
                </div>
              </div>
              <div class="chart-container ">
                <Chart type="doughnut" :data="chartData1" :options="chartOptions1" class="h-30rem" /> 
              </div>
            </div>
            <div class="bg-white h-48">
              hola
            </div>
            <div class="bg-white h-48">
              hola
            </div>
          </div>
        </div>
      </div>

  
    </div>
  </div>
</template>
 
 
<script>
import {defineAsyncComponent,ref, onMounted } from 'vue'
import Card from 'primevue/card'
import Chart from 'primevue/chart'
import Button from 'primevue/button'
export default{
  components: {
      Navbar: defineAsyncComponent( () => import('../components/Navbar.vue')),
      Card,
      Chart,
      Button
  },
  setup(){
    onMounted(() => {
        chartData.value = setChartData();
        chartOptions.value = setChartOptions();

        chartData1.value = setChartData1();
        chartOptions1.value = setChartOptions1();
    });

    const chartData = ref();
    const chartOptions = ref();

    const chartData1 = ref();
    const chartOptions1 = ref();

    const setChartData = () =>  {
        const documentStyle = getComputedStyle(document.documentElement);

        return {
            labels: ['ENE', 'FEB', 'MAR', ],
            datasets: [
                {
                    type: 'bar',
                    label: 'Ventas de factura',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [50, 25, 12, 48, 90, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Venta Bol. Personal',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [21, 84, 24, 75, 37, 65, 34]
                },
                {
                    type: 'bar',
                    label: 'Venta Bol. Normal',
                    backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };
    };
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
                        display: false // Oculta la cuadrícula del eje Y
                      },
                      ticks: {
                        display: false // Oculta los números del eje Y
                      }
                }
            }
        };
    }


    const setChartData1 = () => {
        const documentStyle = getComputedStyle(document.body);

        return {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                }
            ]
        };
    };

    const setChartOptions1 = () => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        return {
            plugins: {
                legend: {
                  position: 'right',
                  labels: {
                      cutout: '60%',
                      color: textColor,
                      boxWidth: 10
                  }
                }
            }
        };
    };

    
    return{
      chartData,
      chartOptions,
      chartData1,
      chartOptions1
    }
  }
}
</script>
<style>
.chart-container {
  width: 400px; 
  height: 300px; 
}

</style>