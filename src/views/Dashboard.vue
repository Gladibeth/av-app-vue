<template>
  <Navbar :name="'Dashboard'"/>
  <div class="bg-gray-100 pb-6 h-90vh overflow-y-scroll">
    <div class="max-w-medium w-1920 m-0-auto ">
      <div class="grid grid-cols-3 gap-4 pt-10 pb-4">
        <div class="bg-white px-4 py-8">
          <div class="grid grid-cols-2 mb-8">
            <span class="text-gray-900 font-semibold font-inter text-sm uppercase flex items-center">
              Productos por hora
            </span>
            <div class="flex justify-end">
              <Button icon="pi pi-external-link" class="bg-white w-fit border-2 border-gray-800 rounded-none py-1 px-3 text-md w-fit mr-2 text-gray-800" :style="{border: '2px solid #8d8e93'}"  />
              <Button icon="pi pi-file-pdf"  class="bg-white w-fit border-2 border-gray-800 rounded-none  py-1 px-3 w-fit  text-2xs  text-gray-800" :style="{border: '2px solid #8d8e93'}"  iconPos="right" label="Descargar" />
            </div>
          </div>
          <div class="chart-container ">
            <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <DataTable tableClass="custom-table-blue" :value="data1Left">
              <Column field="month" header=""></Column>
              <Column field="count" header="Cant."></Column>
              <Column field="amount" header="Monto"></Column>
            </DataTable>
            <DataTable tableClass="custom-table-yellow" :value="data1Right">
              <Column field="month" header=""></Column>
              <Column field="count" header="Cant."></Column>
              <Column field="amount" header="Monto"></Column>
            </DataTable>
          </div>
        </div>
        <div class="bg-white px-4 py-8">
          <div class="grid grid-cols-2 mb-8">
            <span class="text-gray-900 font-semibold font-inter text-sm uppercase flex items-center">
              Notas de créditos manuales
            </span>
            <div class="flex justify-end">
              <Button icon="pi pi-external-link" class="bg-white w-fit border-2 border-gray-800 rounded-none py-1 px-3 text-md w-fit mr-2 text-gray-800" :style="{border: '2px solid #8d8e93'}"  />
              <Button icon="pi pi-file-pdf"  class="bg-white w-fit border-2 border-gray-800 rounded-none  py-1 px-3 w-fit  text-2xs  text-gray-800" :style="{border: '2px solid #8d8e93'}"  iconPos="right" label="Descargar" />
            </div>
          </div>
          <div class="chart-container ">
            <Chart type="bar" :data="chartData2" :options="chartOptions2" class="h-30rem" />

          </div>
          <DataTable tableClass="custom-table-variable" :value="data2">
            <Column field="reason" header="Motivo"></Column>
            <Column field="jan" header="ENE"></Column>
            <Column field="feb" header="FEB"></Column>
            <Column field="mar" header="MAR"></Column>
          </DataTable>
        </div>

        <div class="bg-white px-4 py-8">
          <div class="grid grid-cols-2 mb-8">
            <span class="text-gray-900 font-semibold font-inter text-sm uppercase flex items-center">
              Ajustes relevantes de existencia
            </span>
            <div class="flex justify-end">
              <Button icon="pi pi-external-link" class="bg-white w-fit border-2 border-gray-800 rounded-none py-1 px-3 text-md w-fit mr-2 text-gray-800" :style="{border: '2px solid #8d8e93'}"  />
              <Button icon="pi pi-file-pdf"  class="bg-white w-fit border-2 border-gray-800 rounded-none  py-1 px-3 w-fit  text-2xs  text-gray-800" :style="{border: '2px solid #8d8e93'}"  iconPos="right" label="Descargar" />
            </div>
          </div>
          <div class="chart-container ">
            <Chart type="bar" :data="chartData3" :options="chartOptions3" class="h-30rem" />
          </div>
          <DataTable tableClass="custom-table-variable" :value="data3">
            <Column field="type" header="Tipo ajuste"></Column>
            <Column field="jan" header="ENE"></Column>
            <Column field="feb" header="FEB"></Column>
            <Column field="mar" header="MAR"></Column>
          </DataTable>
        </div>
     
      
      </div>
      <div class="grid grid-cols-custom211 gap-4">
        <div class="bg-white px-4 py-8">
          <div class="grid grid-cols-2 mb-3">
            <span class="text-gray-900 font-semibold font-inter text-sm uppercase flex items-center">
              % de uso de panel de control
            </span>
            <div class="flex justify-end">
              <Button icon="pi pi-external-link" class="bg-white w-fit border-2 border-gray-800 rounded-none py-1 px-3 text-md w-fit mr-2 text-gray-800" :style="{border: '2px solid #8d8e93'}"  />
              <Button icon="pi pi-file-pdf"  class="bg-white w-fit border-2 border-gray-800 rounded-none  py-1 px-3 w-fit  text-2xs  text-gray-800" :style="{border: '2px solid #8d8e93'}"  iconPos="right" label="Descargar" />
            </div>
          </div>
          <!-- table -->
          <div class="grid grid-cols-2 mb-5">
            <dl>
              <dd class="text-2xs text-gray-200">Productos: $100.00</dd>
              <dd class="text-2xs text-gray-200">Financiamiento: 100 unid.</dd>
            </dl>
            <dl>
              <dd class="text-2xs text-gray-200">Orden: $100.00</dd>
              <dd class="text-2xs text-gray-200">Planes: 100 unid.</dd>
            </dl>
          </div>
          <!-- Graps -->
          <div class="grid grid-cols-custom21 gap-4 mb-3">
            <div class="chart-container flex justify-center" :style="{border: '1px solid #dddddd'}">
              <Chart type="doughnut" :data="chartData4" :options="chartOptions4" class="custom-doughnut-chart" /> 
            </div>
            <div  class="flex justify-center items-center" :style="{border: '1px solid #dddddd'}">
              <p class="text-gray-200 flex flex-col items-center font-medium text-2xs">
                <span class="uppercase">Conexiones</span>
                <strong class="text-primary-900 text-md">754</strong>
                hras/hombre
              </p>
            </div>
          </div>

          <!-- table -->
          <DataTable tableClass="custom-table" :value="data4">
            <Column field="process" header="Proceso"></Column>
            <Column field="description" header="Descripción"></Column>
            <Column field="connections" header="Conexiones"></Column>
          </DataTable>
        </div>
        <div class="bg-white px-4 py-8">
          <div class="grid grid-cols-2 mb-3">
            <span class="text-gray-900 font-semibold font-inter text-sm uppercase flex items-center">
              Anulación de documento
            </span>
            <div class="flex justify-end">
              <Button icon="pi pi-external-link" class="bg-white w-fit border-2 border-gray-800 rounded-none py-1 px-3 text-md w-fit mr-2 text-gray-800" :style="{border: '2px solid #8d8e93'}"  />
              <Button icon="pi pi-file-pdf"  class="bg-white w-fit border-2 border-gray-800 rounded-none  py-1 px-3 w-fit  text-2xs  text-gray-800" :style="{border: '2px solid #8d8e93'}"  iconPos="right" label="Descargar" />
            </div>
          </div>
   
          <!-- Graps -->
          <div class="chart-container flex justify-center">
              <Chart type="doughnut" :data="chartData5" :options="chartOptions5" class="custom-doughnut-chart" /> 
          </div>

          <!-- table -->
          <DataTable tableClass="custom-table" :value="data5">
            <Column field="type" header="Tipo"></Column>
            <Column field="description" header="Descripción"></Column>
            <Column field="percentage" header="%"></Column>
        </DataTable>
        </div>
        <div class="bg-white px-4 py-8">
          <div class="grid grid-cols-2 mb-3">
            <span class="text-gray-900 font-semibold font-inter text-sm uppercase flex items-center">
              % de inventario cíclicos
            </span>
            <div class="flex justify-end">
              <Button icon="pi pi-external-link" class="bg-white w-fit border-2 border-gray-800 rounded-none py-1 px-3 text-md w-fit mr-2 text-gray-800" :style="{border: '2px solid #8d8e93'}"  />
              <Button icon="pi pi-file-pdf"  class="bg-white w-fit border-2 border-gray-800 rounded-none  py-1 px-3 w-fit  text-2xs  text-gray-800" :style="{border: '2px solid #8d8e93'}"  iconPos="right" label="Descargar" />
            </div>
          </div>
          <!-- table -->
          <div class="grid grid-cols-3 gap-3 mt-5">
            <p class="flex flex-col bg-gray-100 text-2xs justify-center items-center px-4 py-2 text-gray-200
            capitalize">
              <strong class="text-primary-900 text-md">25</strong>
              plan
            </p>
            <p class="flex flex-col bg-gray-100 text-2xs justify-center items-center px-4 py-2 text-gray-200
            capitalize">
              <strong class="text-primary-900 text-md">15</strong>
              Realizados
            </p>
            <p class="flex flex-col bg-gray-100 text-2xs justify-center items-center p-4 text-gray-200
            capitalize">
              <strong class="text-primary-900 text-md">60%</strong>
              cumplimiento
            </p>
          </div>
          <div class="chart-container flex justify-center" >
            <Chart type="doughnut" :data="chartData6" :options="chartOptions6" class="custom-doughnut-chart" /> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
 
<script>
import {defineAsyncComponent, onMounted, ref } from 'vue'
import Chart from 'primevue/chart'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

export default{
  components: {
      Navbar: defineAsyncComponent( () => import('../components/Navbar.vue')),
      Chart,
      Button,
      DataTable,
      Column
  },
  setup(){

    onMounted(() => {
        chartData.value = setChartData();
        chartOptions.value = setChartOptions();

        chartData2.value = setChartData2();
        chartOptions2.value = setChartOptions2();

        chartData3.value = setChartData3();
        chartOptions3.value = setChartOptions3();

        chartData4.value = setChartData4();
        chartOptions4.value = setChartOptions4();

        chartData5.value = setChartData5();
        chartOptions5.value = setChartOptions5();

        chartData6.value = setChartData6();
        chartOptions6.value = setChartOptions6();
    });

    const chartData = ref();
    const chartOptions = ref();

    const chartData2 = ref();
    const chartOptions2 = ref();


    const chartData3 = ref();
    const chartOptions3 = ref();

    const chartData4 = ref();
    const chartOptions4 = ref();

    const chartData5 = ref();
    const chartOptions5 = ref();
    
    const chartData6 = ref();
    const chartOptions6 = ref();
    

    const data1Right = ref([
      { month: 'ENE',count:250,amount: 'M $1.500'},
      { month: 'FEB',count:200,amount: 'M $1.500'},
      { month: 'MAR',count:180,amount: 'M $1.500'},
      { month: 'ABR',count:200,amount: 'M $1.500'},
    ])
    const data1Left = ref([
      { month: 'ENE',count:250,amount: 'M $1.500'},
      { month: 'FEB',count:200,amount: 'M $1.500'},
      { month: 'MAR',count:180,amount: 'M $1.500'},
      { month: 'ABR',count:200,amount: 'M $1.500'},
    ])

    const data2 = ref([
      { reason: 'Falla de producto',jan: 'M 10.000', feb: 'M 10.000',mar: 'M 10.000', amount: 'M $1.500'},
      { reason: 'Quiebre de stock',jan: 'M 10.000', feb: 'M 10.000',mar: 'M 10.000', amount: 'M $1.500'},
      { reason: 'Falla de producto',jan: 'M 10.000', feb: 'M 10.000',mar: 'M 10.000', amount: 'M $1.500'},
      { reason: 'Quiebre de stock',jan: 'M 10.000', feb: 'M 10.000',mar: 'M 10.000', amount: 'M $1.500'},
    ])

    const data3 = ref([
      { type: 'Dif. inventario',jan: 'M 10.000', feb: 'M 10.000',mar: 'M 10.000', amount: 'M $1.500'},
      { type: 'Mermas',jan: 'M 10.000', feb: 'M 10.000',mar: 'M 10.000', amount: 'M $1.500'},
      { type: 'Dif. inventario',jan: 'M 10.000', feb: 'M 10.000',mar: 'M 10.000', amount: 'M $1.500'},
      { type: 'Mermas',jan: 'M 10.000', feb: 'M 10.000',mar: 'M 10.000', amount: 'M $1.500'},
    ])

    const data4 = ref([
      { process: 'Ventas',description:'Analisis',connections: 349},
      { process: 'Existencias', description: 'Extracción de datos y análisis', connections: 370 },
    ])

    const data5 = ref([
      { type: 'Boletas', description: '40', percentage: '15%' },
      { type: 'Facturas', description: '60', percentage: '27%' },
      { type: 'Guías', description: '120', percentage: '55%' },
    ]);


    const setChartData = () => {
        const documentStyle = getComputedStyle(document.documentElement);

        return {
            labels: ['ENE', 'FEB', 'MAR', 'ABR'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-700'),
                    tension: 0.4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--yellow-400'),
                    tension: 0.4
                }
            ]
        };
    };
    const setChartOptions = () => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        return {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                  position: 'bottom',
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
    }

    const setChartData2 = () => {
        const documentStyle = getComputedStyle(document.documentElement);

        return {
            labels: ['ENE', 'FEB', 'MAR',],
            datasets: [
             
                {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: documentStyle.getPropertyValue('--yellow-400'),
                    data: [21, 84, 24, 75, 37, 65, 34],
                    borderColor: 'white',
                    borderWidth: 2
                },
                {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: documentStyle.getPropertyValue('--blue-700'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };
    };
    const setChartOptions2 = () => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        return {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                        color: textColor,
                        boxWidth: 10
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            },
            categoryPercentage: 0.3
        };
    }


    const setChartData3 = () => {
        const documentStyle = getComputedStyle(document.documentElement);

        return {
            labels: ['ENE', 'FEB', 'MAR',],
            datasets: [
             
                {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: documentStyle.getPropertyValue('--yellow-400'),
                    data: [21, 84, 24, 75, 37, 65, 34],
                    borderColor: 'white',
                    borderWidth: 2
                },
                {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: documentStyle.getPropertyValue('--blue-700'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };
    };
    const setChartOptions3 = () => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        return {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                        color: textColor,
                        boxWidth: 10
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            },
            categoryPercentage: 0.3
        };
    }

    // 4
    const setChartData4 = () => {
      const documentStyle = getComputedStyle(document.body);

      return {
          labels: ['Ventas', 'Existencia'],
          datasets: [
              {
                  data: [540, 325],
                  backgroundColor: [documentStyle.getPropertyValue('--blue-700'), documentStyle.getPropertyValue('--blue-200')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-600'), documentStyle.getPropertyValue('--blue-600')]
              }
          ]
      };
    };
    
    const setChartOptions4 = () => {
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
    };

     // 5
     const setChartData5 = () => {
        const documentStyle = getComputedStyle(document.body);

        return {
            labels: ['Boletas', 'Facturas', 'Guías'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-700'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--blue-200')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--green-600'), documentStyle.getPropertyValue('--yellow-600'), documentStyle.getPropertyValue('--blue-400')]
                }
            ]
        };
    };
    
    const setChartOptions5 = () => {
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
    };

     // 6
     const setChartData6 = () => {
      const documentStyle = getComputedStyle(document.body);

      return {
          labels: ['Ventas', 'Existencia'],
          datasets: [
              {
                  data: [540, 325],
                  backgroundColor: [documentStyle.getPropertyValue('--blue-700'), documentStyle.getPropertyValue('--blue-200')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-600'), documentStyle.getPropertyValue('--blue-600')]
              }
          ]
      };
    };
    
    const setChartOptions6 = () => {
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
    };

   
    return{
      chartData,
      chartOptions,
      chartData2,
      chartOptions2,
      chartData3,
      chartOptions3,
      chartData4,
      chartOptions4,
      chartData5,
      chartOptions5,
      chartData6,
      chartOptions6,
      data1Left,
      data1Right,
      data2,
      data3,
      data4,
      data5,
    }
  }
}
</script>
<style scoped>
 
</style>