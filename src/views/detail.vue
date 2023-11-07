<template>
    <Navbar :name="'Panel de control'"/>
    <div class="h-90vh overflow-scroll">
        <div class="max-w-medium w-1920 m-0-auto  ">
            <div>
                <div class="card flex items-center justify-content-center">
                    <div>
                        <i class="pi pi-arrow-left pr-5 text-gray-800 text-lg mt-5" @click="goBack"></i>
                    </div>
                    <div class="flex mt-5 p-3 card-detail items-center">
                        <div class="p-3 pb-0">
                            <div class="flex">
                                <i class="pi pi-exclamation-triangle   h-fit text-red-900 mr-2" style="font-size: 1.2rem;"></i>
                                <p class="text-gray-900">VENTAS CON MARGENES NEGATIVOS</p>
                            </div>
                            <Breadcrumb :model="items" class="pl-0 pt-2 text-sm text-gray-800" />
                        </div>
                        <div class="flex">
                            <div class="pr-10">
                                <p class="text-gray-800 text-sm"> <i class="pi pi-calendar"></i> Fecha desde</p>
                                <p class="pl-5 text-gray-800 text-sm">01-01-2023</p>
                            </div>
                            <div>
                                <p class="text-gray-800 text-sm"> <i class="pi pi-calendar"></i> Fecha desde</p>
                                <p class="pl-5 text-gray-800 text-sm">01-01-2023</p>
                            </div>
                        </div>
                        <div>
                            <button class="btn btn-bg-primary mr-3 p-2 px-5 bg-primary"> <i class="pi pi-file-export"></i> Exportar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pt-10">
                <DataTable :value="dataTable" sortField="price" :sortOrder="-1" resizableColumns columnResizeMode="fit" showGridlines tableStyle="min-width: 50rem">
                    <Column v-if="children" :field="'icon'" style="width: 50px;">
                    <template #body="slotProps">
                        <router-link :to="{ name: children, params: { id: slotProps.data.id } }">
                        <i class="pi pi-eye text-primary-900 font-normal" style="font-size: 1.3rem;"></i>
                        </router-link>
                    </template>
                    </Column>
                    <Column v-for="field in Object.keys(header)" :key="field" :field="field" :header="getFieldHeader(field)" class="text-2xs py-3">
                    <template #body="slotProps">
                        <span>
                        {{ getFieldData(slotProps.data, field) }}
                        </span>
                    </template>
                    </Column>
                </DataTable>

                <div class="mt-10 flex mt-5 p-5 card-detail items-center">
                    <Chart class="custom-chart-full" type="line" :data="chartData" :options="chartOptions"  />
                </div>
                <div class="mt-10 flex mt-5 p-5 card-detail items-center">
                    <Chart class="custom-chart-medium" type="bar" :data="chartData3" :options="chartOptions3"  />
                    <!-- <Chart type="bar" :data="chartData3" :options="chartOptions3" class="h-50rem"  /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {defineAsyncComponent, ref, onMounted, watch, defineProps } from 'vue'
import DataTable from 'primevue/datatable'
// import Button from 'primevue/button';
import Chart from 'primevue/chart';
import Column from 'primevue/column'
import Breadcrumb from 'primevue/breadcrumb';
import { zones } from '../data/zones.js'
import { stores } from '../data/stores.js'
import { orders } from '../data/orders.js'
import { bills } from '../data/bills.js'
import { useRoute, useRouter } from 'vue-router';

export default{
    components: {
        Navbar: defineAsyncComponent( () => import('../components/Navbar.vue')),
        DataTable,
        Column,
        Breadcrumb,
        Chart
    },
    setup(){
        const route = useRoute();
        const router = useRouter();
        const dataTable = ref([])
        const header = ref([])
        const children = ref([])
        const previousRoute = ref(null);
        const items = ref([]);
        const chartData = ref();
        const chartOptions = ref();
        const chartData3 = ref();
        const chartOptions3 = ref();

        const goBack = () => {
            if (previousRoute.value) {
                router.push(previousRoute.value);
            } else {
                router.go(-1);
            }
        };

        const formatCurrency = (value) => {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }

        const getFieldHeader = (field) => {
            return header.value[field];
        }

        const getFieldData = (data, field) => {
            return data[field];
        }

        const sliceArray = (arrayOriginal, tamanoSubarray) => {
        const resultado = [];
        for (let i = 0; i < arrayOriginal.length; i += tamanoSubarray) {
            const subarray = arrayOriginal.slice(i, i + tamanoSubarray);
            resultado.push(subarray);
        }
        return resultado;
        }

        const getLabel = (segment) =>{

            switch (segment[1]) {
                case 'almacenes':
                    return zones.value.find((item) => item.id == segment[0]).name;
                case 'ordenes':
                    return stores.value.find((item) => item.id == segment[0]).name;
                case 'factura':
                    let result = bills.value.find((item) => item.id == segment[0]);
                    return result.docType + ' > ' + result.docNum;
                case 'zonas':
                    return 'Zonas';
                default:
                    return 'Detalle';
            }
            return route.params.id;
        }

        const loadData = (params) => {
            items.value = []
            const routeSegments = route.path.split('/').filter(segment => segment !== '');

            const itemsSegments = sliceArray(routeSegments, 2);

            for (let i = 0; i < itemsSegments.length; i++) {
                const currentSegment = itemsSegments[i];

                // Construir la URL concatenando los segmentos específicos
                const url = '/' + itemsSegments.slice(0, i + 1).flat().join('/');

                items.value.push({
                    label: getLabel(currentSegment),
                    to: url
                });
            }

            const segment = routeSegments.pop();

            switch (segment) {
            case 'almacenes':
                dataTable.value = stores.value.filter((store) => store.zone_id == params.id);
                header.value = stores.header;
                children.value = stores.children;
                break;

            case 'ordenes':
                dataTable.value = orders.value.filter((order) => order.store_id == params.id);
                header.value = orders.header;
                children.value = orders.children;
                break;

            case 'factura':
                dataTable.value = bills.value.filter((bill) => bill.order_id == params.id);
                header.value = bills.header;
                children.value = bills.children;
                break;

            case 'zonas':
                dataTable.value = zones.value;
                header.value = zones.header;
                children.value = zones.children;
                break;

            default:

                break;
            }

        };

        onMounted(() => {
            loadData(route.params);
            chartData.value = setChartData();
            chartOptions.value = setChartOptions();
            chartData3.value = setChartData3();
            chartOptions3.value = setChartOptions3();
        });

        watch(
            () => route.params,
            (to, from) => {
                loadData(to);
            }
        );

        const setChartData = () => {
            const documentStyle = getComputedStyle(document.documentElement);

            return {
                labels: ['Zona norte', 'Zona central', 'Zona metropolina', 'Zona sur',
            'Zona austral'],
                datasets: [

                    {
                        label: 'Cantidad de caos',
                        data: [12, 51, 62, 33, 21, 62, 45, 80, 95],
                        fill: true,
                        borderColor: documentStyle.getPropertyValue('--blue-700'),
                        tension: 0.4,
                        backgroundColor: 'rgba(7, 75, 185, 0.3)'
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

         // 3
         const setChartData3 = () =>  {
            const documentStyle = getComputedStyle(document.documentElement);

            return {
                labels: [' '],
                datasets: [
                    {
                        type: 'bar',
                        label: 'Boletas',
                        backgroundColor: documentStyle.getPropertyValue('--blue-700'),
                        data: [5, 20, 12, 15, 25, ]
                    },
                    
                ]
            };
        };
        const setChartOptions3 = () =>  {
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
                        labels: {
                            color: textColor
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
                            color: surfaceBorder
                        }
                    },
                    y: {
                        stacked: true,
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
        return {
            items,
            dataTable,
            header,
            children,
            formatCurrency,
            getFieldHeader,
            getFieldData,
            goBack,
            chartData,
            chartOptions,
            chartData3,
            chartOptions3
        }
    },
}
</script>

<style scope>
thead th{
    background: #022597;
    color: #ffffff;
}
.card-detail{
    width: 100%;
    justify-content: space-between;
    border: 1px solid #ccc;
    box-shadow: 3px 4px 5px 1px #cfcfcf;
    border-radius: 8px; 
}
.btn-bg-primary{
    background: #022597;
    color: #ffffff;
    font-weight: 600;
}

tbody tr {
    border-bottom: 1px solid #ccc !important; /* Color para filas pares */
}

tbody tr:nth-child(even) {
    background-color: #f0f0f0; /* Color para filas pares */
}
  
tbody tr:nth-child(odd) {
    background-color: #ffffff; /* Color para filas impares */
}
</style>