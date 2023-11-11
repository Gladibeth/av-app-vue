<template>
    <Navbar :name="'Panel de control'"/>
    <div class="h-90vh overflow-y-scroll main-scrollbar">
        <div class="max-w-medium w-1920 m-0-auto  ">
            <div>
                <div class="card flex items-center justify-content-center">
                    <div>
                        <i class="pi pi-arrow-left pr-5 text-gray-800 text-lg mt-5" @click="goBack"></i>
                    </div>
                    <div class="flex mt-5 p-3 card-detail items-center flex-wrap">
                        <div class="p-3 pb-0">
                            <div class="flex">
                                <span class="custom-icon-quare mr-3 bg-red-900"></span>
                                <p class="text-gray-900">VENTAS CON MARGENES NEGATIVOS</p>
                            </div>
                            <Breadcrumb :model="items" class="pl-0 pt-2 text-sm text-gray-800" />
                        </div>
                        <div class="flex">
                            <div class="pr-10">
                                <p class="text-gray-800 text-sm flex"> 
                                    <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M14.1667 11.6667C14.3877 11.6667 14.5996 11.5789 14.7559 11.4226C14.9122 11.2663 15 11.0543 15 10.8333C15 10.6123 14.9122 10.4004 14.7559 10.2441C14.5996 10.0878 14.3877 10 14.1667 10C13.9457 10 13.7337 10.0878 13.5774 10.2441C13.4211 10.4004 13.3333 10.6123 13.3333 10.8333C13.3333 11.0543 13.4211 11.2663 13.5774 11.4226C13.7337 11.5789 13.9457 11.6667 14.1667 11.6667ZM14.1667 15C14.3877 15 14.5996 14.9122 14.7559 14.7559C14.9122 14.5996 15 14.3877 15 14.1667C15 13.9457 14.9122 13.7337 14.7559 13.5774C14.5996 13.4211 14.3877 13.3333 14.1667 13.3333C13.9457 13.3333 13.7337 13.4211 13.5774 13.5774C13.4211 13.7337 13.3333 13.9457 13.3333 14.1667C13.3333 14.3877 13.4211 14.5996 13.5774 14.7559C13.7337 14.9122 13.9457 15 14.1667 15ZM10.8333 10.8333C10.8333 11.0543 10.7455 11.2663 10.5893 11.4226C10.433 11.5789 10.221 11.6667 10 11.6667C9.77899 11.6667 9.56702 11.5789 9.41074 11.4226C9.25446 11.2663 9.16667 11.0543 9.16667 10.8333C9.16667 10.6123 9.25446 10.4004 9.41074 10.2441C9.56702 10.0878 9.77899 10 10 10C10.221 10 10.433 10.0878 10.5893 10.2441C10.7455 10.4004 10.8333 10.6123 10.8333 10.8333ZM10.8333 14.1667C10.8333 14.3877 10.7455 14.5996 10.5893 14.7559C10.433 14.9122 10.221 15 10 15C9.77899 15 9.56702 14.9122 9.41074 14.7559C9.25446 14.5996 9.16667 14.3877 9.16667 14.1667C9.16667 13.9457 9.25446 13.7337 9.41074 13.5774C9.56702 13.4211 9.77899 13.3333 10 13.3333C10.221 13.3333 10.433 13.4211 10.5893 13.5774C10.7455 13.7337 10.8333 13.9457 10.8333 14.1667ZM5.83333 11.6667C6.05435 11.6667 6.26631 11.5789 6.42259 11.4226C6.57887 11.2663 6.66667 11.0543 6.66667 10.8333C6.66667 10.6123 6.57887 10.4004 6.42259 10.2441C6.26631 10.0878 6.05435 10 5.83333 10C5.61232 10 5.40036 10.0878 5.24408 10.2441C5.0878 10.4004 5 10.6123 5 10.8333C5 11.0543 5.0878 11.2663 5.24408 11.4226C5.40036 11.5789 5.61232 11.6667 5.83333 11.6667ZM5.83333 15C6.05435 15 6.26631 14.9122 6.42259 14.7559C6.57887 14.5996 6.66667 14.3877 6.66667 14.1667C6.66667 13.9457 6.57887 13.7337 6.42259 13.5774C6.26631 13.4211 6.05435 13.3333 5.83333 13.3333C5.61232 13.3333 5.40036 13.4211 5.24408 13.5774C5.0878 13.7337 5 13.9457 5 14.1667C5 14.3877 5.0878 14.5996 5.24408 14.7559C5.40036 14.9122 5.61232 15 5.83333 15Z" fill="#A0A0A0"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83317 1.45831C5.99893 1.45831 6.1579 1.52416 6.27511 1.64137C6.39232 1.75858 6.45817 1.91755 6.45817 2.08331V2.71915C7.00984 2.70831 7.61734 2.70831 8.28567 2.70831H11.7132C12.3823 2.70831 12.9898 2.70831 13.5415 2.71915V2.08331C13.5415 1.91755 13.6074 1.75858 13.7246 1.64137C13.8418 1.52416 14.0007 1.45831 14.1665 1.45831C14.3323 1.45831 14.4912 1.52416 14.6084 1.64137C14.7257 1.75858 14.7915 1.91755 14.7915 2.08331V2.77248C15.0082 2.78915 15.2132 2.80998 15.4073 2.83581C16.384 2.96748 17.1748 3.24415 17.799 3.86748C18.4223 4.49165 18.699 5.28248 18.8307 6.25915C18.9582 7.20915 18.9582 8.42165 18.9582 9.95331V11.7133C18.9582 13.245 18.9582 14.4583 18.8307 15.4075C18.699 16.3841 18.4223 17.175 17.799 17.7991C17.1748 18.4225 16.384 18.6991 15.4073 18.8308C14.4573 18.9583 13.2448 18.9583 11.7132 18.9583H8.2865C6.75484 18.9583 5.5415 18.9583 4.59234 18.8308C3.61567 18.6991 2.82484 18.4225 2.20067 17.7991C1.57734 17.175 1.30067 16.3841 1.169 15.4075C1.0415 14.4575 1.0415 13.245 1.0415 11.7133V9.95331C1.0415 8.42165 1.0415 7.20831 1.169 6.25915C1.30067 5.28248 1.57734 4.49165 2.20067 3.86748C2.82484 3.24415 3.61567 2.96748 4.59234 2.83581C4.7865 2.80998 4.99234 2.78915 5.20817 2.77248V2.08331C5.20817 1.91755 5.27402 1.75858 5.39123 1.64137C5.50844 1.52416 5.66741 1.45831 5.83317 1.45831ZM4.75817 4.07498C3.92067 4.18748 3.43734 4.39915 3.08484 4.75165C2.73234 5.10415 2.52067 5.58748 2.40817 6.42581C2.389 6.56748 2.37317 6.71748 2.35984 6.87498H17.6398C17.6265 6.71665 17.6107 6.56748 17.5915 6.42498C17.479 5.58748 17.2673 5.10415 16.9148 4.75165C16.5623 4.39915 16.079 4.18748 15.2407 4.07498C14.3848 3.95998 13.2557 3.95831 11.6665 3.95831H8.33317C6.744 3.95831 5.61567 3.95998 4.75817 4.07498ZM2.2915 9.99998C2.2915 9.28831 2.2915 8.66915 2.30234 8.12498H17.6973C17.7082 8.66915 17.7082 9.28831 17.7082 9.99998V11.6666C17.7082 13.2558 17.7065 14.385 17.5915 15.2416C17.479 16.0791 17.2673 16.5625 16.9148 16.915C16.5623 17.2675 16.079 17.4791 15.2407 17.5916C14.3848 17.7066 13.2557 17.7083 11.6665 17.7083H8.33317C6.744 17.7083 5.61567 17.7066 4.75817 17.5916C3.92067 17.4791 3.43734 17.2675 3.08484 16.915C2.73234 16.5625 2.52067 16.0791 2.40817 15.2408C2.29317 14.385 2.2915 13.2558 2.2915 11.6666V9.99998Z" fill="#A0A0A0"/>
                                        </svg>
                                    Fecha desde
                                </p>
                                <p class="pl-5 text-gray-800 text-sm">01-01-2023</p>
                            </div>
                            <div>
                                <p class="text-gray-800 text-sm flex"> 
                                    <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M14.1667 11.6667C14.3877 11.6667 14.5996 11.5789 14.7559 11.4226C14.9122 11.2663 15 11.0543 15 10.8333C15 10.6123 14.9122 10.4004 14.7559 10.2441C14.5996 10.0878 14.3877 10 14.1667 10C13.9457 10 13.7337 10.0878 13.5774 10.2441C13.4211 10.4004 13.3333 10.6123 13.3333 10.8333C13.3333 11.0543 13.4211 11.2663 13.5774 11.4226C13.7337 11.5789 13.9457 11.6667 14.1667 11.6667ZM14.1667 15C14.3877 15 14.5996 14.9122 14.7559 14.7559C14.9122 14.5996 15 14.3877 15 14.1667C15 13.9457 14.9122 13.7337 14.7559 13.5774C14.5996 13.4211 14.3877 13.3333 14.1667 13.3333C13.9457 13.3333 13.7337 13.4211 13.5774 13.5774C13.4211 13.7337 13.3333 13.9457 13.3333 14.1667C13.3333 14.3877 13.4211 14.5996 13.5774 14.7559C13.7337 14.9122 13.9457 15 14.1667 15ZM10.8333 10.8333C10.8333 11.0543 10.7455 11.2663 10.5893 11.4226C10.433 11.5789 10.221 11.6667 10 11.6667C9.77899 11.6667 9.56702 11.5789 9.41074 11.4226C9.25446 11.2663 9.16667 11.0543 9.16667 10.8333C9.16667 10.6123 9.25446 10.4004 9.41074 10.2441C9.56702 10.0878 9.77899 10 10 10C10.221 10 10.433 10.0878 10.5893 10.2441C10.7455 10.4004 10.8333 10.6123 10.8333 10.8333ZM10.8333 14.1667C10.8333 14.3877 10.7455 14.5996 10.5893 14.7559C10.433 14.9122 10.221 15 10 15C9.77899 15 9.56702 14.9122 9.41074 14.7559C9.25446 14.5996 9.16667 14.3877 9.16667 14.1667C9.16667 13.9457 9.25446 13.7337 9.41074 13.5774C9.56702 13.4211 9.77899 13.3333 10 13.3333C10.221 13.3333 10.433 13.4211 10.5893 13.5774C10.7455 13.7337 10.8333 13.9457 10.8333 14.1667ZM5.83333 11.6667C6.05435 11.6667 6.26631 11.5789 6.42259 11.4226C6.57887 11.2663 6.66667 11.0543 6.66667 10.8333C6.66667 10.6123 6.57887 10.4004 6.42259 10.2441C6.26631 10.0878 6.05435 10 5.83333 10C5.61232 10 5.40036 10.0878 5.24408 10.2441C5.0878 10.4004 5 10.6123 5 10.8333C5 11.0543 5.0878 11.2663 5.24408 11.4226C5.40036 11.5789 5.61232 11.6667 5.83333 11.6667ZM5.83333 15C6.05435 15 6.26631 14.9122 6.42259 14.7559C6.57887 14.5996 6.66667 14.3877 6.66667 14.1667C6.66667 13.9457 6.57887 13.7337 6.42259 13.5774C6.26631 13.4211 6.05435 13.3333 5.83333 13.3333C5.61232 13.3333 5.40036 13.4211 5.24408 13.5774C5.0878 13.7337 5 13.9457 5 14.1667C5 14.3877 5.0878 14.5996 5.24408 14.7559C5.40036 14.9122 5.61232 15 5.83333 15Z" fill="#A0A0A0"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83317 1.45831C5.99893 1.45831 6.1579 1.52416 6.27511 1.64137C6.39232 1.75858 6.45817 1.91755 6.45817 2.08331V2.71915C7.00984 2.70831 7.61734 2.70831 8.28567 2.70831H11.7132C12.3823 2.70831 12.9898 2.70831 13.5415 2.71915V2.08331C13.5415 1.91755 13.6074 1.75858 13.7246 1.64137C13.8418 1.52416 14.0007 1.45831 14.1665 1.45831C14.3323 1.45831 14.4912 1.52416 14.6084 1.64137C14.7257 1.75858 14.7915 1.91755 14.7915 2.08331V2.77248C15.0082 2.78915 15.2132 2.80998 15.4073 2.83581C16.384 2.96748 17.1748 3.24415 17.799 3.86748C18.4223 4.49165 18.699 5.28248 18.8307 6.25915C18.9582 7.20915 18.9582 8.42165 18.9582 9.95331V11.7133C18.9582 13.245 18.9582 14.4583 18.8307 15.4075C18.699 16.3841 18.4223 17.175 17.799 17.7991C17.1748 18.4225 16.384 18.6991 15.4073 18.8308C14.4573 18.9583 13.2448 18.9583 11.7132 18.9583H8.2865C6.75484 18.9583 5.5415 18.9583 4.59234 18.8308C3.61567 18.6991 2.82484 18.4225 2.20067 17.7991C1.57734 17.175 1.30067 16.3841 1.169 15.4075C1.0415 14.4575 1.0415 13.245 1.0415 11.7133V9.95331C1.0415 8.42165 1.0415 7.20831 1.169 6.25915C1.30067 5.28248 1.57734 4.49165 2.20067 3.86748C2.82484 3.24415 3.61567 2.96748 4.59234 2.83581C4.7865 2.80998 4.99234 2.78915 5.20817 2.77248V2.08331C5.20817 1.91755 5.27402 1.75858 5.39123 1.64137C5.50844 1.52416 5.66741 1.45831 5.83317 1.45831ZM4.75817 4.07498C3.92067 4.18748 3.43734 4.39915 3.08484 4.75165C2.73234 5.10415 2.52067 5.58748 2.40817 6.42581C2.389 6.56748 2.37317 6.71748 2.35984 6.87498H17.6398C17.6265 6.71665 17.6107 6.56748 17.5915 6.42498C17.479 5.58748 17.2673 5.10415 16.9148 4.75165C16.5623 4.39915 16.079 4.18748 15.2407 4.07498C14.3848 3.95998 13.2557 3.95831 11.6665 3.95831H8.33317C6.744 3.95831 5.61567 3.95998 4.75817 4.07498ZM2.2915 9.99998C2.2915 9.28831 2.2915 8.66915 2.30234 8.12498H17.6973C17.7082 8.66915 17.7082 9.28831 17.7082 9.99998V11.6666C17.7082 13.2558 17.7065 14.385 17.5915 15.2416C17.479 16.0791 17.2673 16.5625 16.9148 16.915C16.5623 17.2675 16.079 17.4791 15.2407 17.5916C14.3848 17.7066 13.2557 17.7083 11.6665 17.7083H8.33317C6.744 17.7083 5.61567 17.7066 4.75817 17.5916C3.92067 17.4791 3.43734 17.2675 3.08484 16.915C2.73234 16.5625 2.52067 16.0791 2.40817 15.2408C2.29317 14.385 2.2915 13.2558 2.2915 11.6666V9.99998Z" fill="#A0A0A0"/>
                                        </svg>
                                    Fecha desde
                                </p>
                                <p class="pl-5 text-gray-800 text-sm">01-01-2023</p>
                            </div>
                        </div>
                        <div>
                            <button @click="downloadDocument" class="btn btn-bg-primary mr-3 p-2 px-5 bg-primary flex"> 
                                <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M3.83301 7.18752V2.87502C3.83301 2.62085 3.93397 2.3771 4.1137 2.19738C4.29342 2.01765 4.53718 1.91669 4.79134 1.91669H18.208C18.4622 1.91669 18.7059 2.01765 18.8857 2.19738C19.0654 2.3771 19.1663 2.62085 19.1663 2.87502V20.125C19.1663 20.3792 19.0654 20.6229 18.8857 20.8027C18.7059 20.9824 18.4622 21.0834 18.208 21.0834H4.79134C4.53718 21.0834 4.29342 20.9824 4.1137 20.8027C3.93397 20.6229 3.83301 20.3792 3.83301 20.125V15.8125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.854 7.1875H16.2915M13.4165 11.0208H16.2915M13.4165 14.8542H16.2915" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                    <path d="M4.7915 10.0625L7.6665 12.9375M7.6665 10.0625L4.7915 12.9375M1.9165 7.1875H10.5415V15.8125H1.9165V7.1875Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                Exportar</button>
                        </div>
                        <div v-if="headOrder" class="py-4 pl-3" style="width: 100%;">
                            <table>
                                <thead>
                                    <tr style="border-bottom: none !important;">
                                        <td class="text-gray-800 font-bold" style="width: 130px;">Fecha</td>
                                        <td class="text-gray-800 font-bold" style="width: 130px;">N documento</td>
                                        <td class="text-gray-800 font-bold" style="width: 130px;">Tipo</td>
                                        <td class="text-gray-800 font-bold" style="width: 130px;">Hora</td>
                                        <td class="text-gray-800 font-bold" style="width: 130px;">N terminal</td>
                                        <td class="text-gray-800 font-bold" style="width: 200px;">Cajero</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="border-bottom: none !important;">
                                        <td class="text-gray-800 text-sm">{{ headOrder.dateCreated }}</td>
                                        <td class="text-gray-800 text-sm">{{ headOrder.docNum }}</td>
                                        <td class="text-gray-800 text-sm">{{ headOrder.docType }}</td>
                                        <td class="text-gray-800 text-sm">{{ headOrder.docTime }}</td>
                                        <td class="text-gray-800 text-sm">{{ headOrder.numTerminal }}</td>
                                        <td class="text-gray-800 text-sm">{{ headOrder.cashier }}</td>
                                    </tr>
                                </tbody>
                            </table>
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
                    <Column v-for="field in Object.keys(header)" :key="field" :field="field" :header="getFieldHeader(field)" class="text-sm font-medium py-3">
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
                <!-- <div class="mt-10 flex mt-5 p-5 card-detail items-center">
                    <Chart class="custom-chart-medium" type="bar" :data="chartData3" :options="chartOptions3"  />
                    <Chart type="bar" :data="chartData3" :options="chartOptions3" class="h-50rem"  />
                </div> -->
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
        const documentExport = ref('');
        const headOrder = ref(null);

        const downloadDocument = () => {
            const link = document.createElement('a');
            link.href = documentExport.value.url;
            link.download = documentExport.value.name;
            link.click();
        };

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
        }

        const loadData = (params) => {

            headOrder.value = null
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

            switch (routeSegments.pop()) {
            case 'almacenes':
                getData(stores,  params.id);
                break;
            case 'ordenes':
                getData(orders, params.id);
                break;
            case 'factura':
                getData(bills,  params.id);
                headOrder.value = orders.value.find((order) => order.id == params.id);
                break;
            case 'zonas':
                getData(zones);
                break;
            }

        };

        const getData = (object, id = null) => {
            dataTable.value = !id ? object.value.filter((order) => order.store_id == id) : object.value;
            header.value = object.header;
            children.value = object.children;
            documentExport.value = object.document;
        }

        onMounted(() => {
            loadData(route.params);
            chartData.value = setChartData();
            chartOptions.value = setChartOptions();
            chartData3.value = setChartData3();
            chartOptions3.value = setChartOptions3();
        });

        watch(
            () => route.params,
            (to) => {
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
            chartOptions3,
            headOrder,
            downloadDocument
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