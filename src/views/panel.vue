<template>
  <Navbar :name="'Panel de control Auditor Virtual'"/>
  <div class="bg-gray-100  h-screen">
    <div class="max-w-medium w-1920 m-0-auto py-5">
      <!-- Filter component -->
      <div class="bg-white grid grid-cols-custom-filter gap-5 p-4 mx-10">
        <div class="flex items-center">
          <span>Filtar por:</span>
        </div>
        <div>
          <div class="flex">
            <i class="pi pi-calendar mr-3"></i>
            <label>Fecha desde:</label>
          </div>
          <Calendar class="bg-gray-100 p-3 outline-none w-full" v-model="date" dateFormat="dd/mm/yy" showButtonBar />
        </div>
        <div>
          <div class="flex">
            <i class="pi pi-calendar mr-3"></i>
            <label>Fecha hasta:</label>
          </div>
          <Calendar class="bg-gray-100 p-3 outline-none w-full"  v-model="date2" dateFormat="dd/mm/yy" showButtonBar />
        </div>
        <div class="card flex flex-col justify-content-center">
          <div class="flex">
            <i class="pi pi-building mr-3"></i>
            <label>Surcusal</label>
          </div>
          <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Seleccionar Sucursal" class="w-full bg-gray-100 rounded-none" />
        </div>
        <div class="flex items-end justify-center text-center">
          <Button icon="pi pi-search" class="bg-orange-900 w-full rounded-none py-3 px-5 text-md  text-white" label="Buscar" />

        </div>
      </div>
      
      <!-- Title -->
      <div class="flex justify-between">
        <p class="text-gray-900 font-medium text-md py-5">Indicadores agrupados por prioridad:</p>
        <div class="flex items-center">
          <Button icon="pi pi-ellipsis-v" :style="{border: '2px solid #8d8e93'}" class="border-2 text-gray-800 rounded-full py-1 px-2 text-md mr-2" label="Info" @click="visibleRight = true"  />
          <div class="bg-gray-800 rounded-full h-35 w-35 flex justify-center items-center">
            <i class="pi pi-question text-white"></i>
          </div>
        </div>
      </div>

      <!-- Columns -->
      <div class="grid grid-cols-custom052 gap-4">
        <div class="bg-primary-400 p-4 h-65vh overflow-scroll column-red">
          <div class="flex justify-between items-center mb-4">
            <span class="bg-primary-500 font-medium text-primary-900 rounded-full p-2 text-2xs">Comercial</span>
            <span class="rounded-full p-2 text-2xs text-gray-800" >Proceso</span>
            <span class="rounded-full p-2 text-2xs text-gray-800">Concepto</span>
          </div>

          <!-- CHECKBOXS -->
          <div class="bg-white p-4 mb-4 rounded-lg h-20vh overflow-scroll ">
              <div v-for="group of uniqueGroups" :key="group" class="flex">
                  <Checkbox class="mr-2 mb-4 custom-checkbox" v-model="selectedGroup" :inputId="group.key" name="group" :value="group.name" />
                  <label :for="group.key">{{ group.name }}</label>
              </div>
          </div>
          <!-- CHECKBOXS -->
          <p class="text-gray-900 mb-3 font-medium text-sm">Indicadores</p>
          <div class="bg-white mb-4 p-4 rounded-lg h-20vh overflow-scroll ">
              <div v-for="indicator of uniqueIndicators" :key="indicator.key" class="flex">
                  <Checkbox class="mr-2 mb-4 custom-checkbox" v-model="selectedIndicator" :inputId="indicator.key" name="indicator" :value="indicator.name" />
                  <label :for="indicator.key">{{ indicator.name }}</label>
              </div>
          </div>

          <div>
            <p class="text-gray-900 mb-3 font-medium text-sm">Niveles de urgencia</p>
            <div class="mb-2 flex justify-center">
                <span class="text-gray-800 text-medium text-sm">{{ value[0] }} - {{ value[1] }}</span>
              </div>
            <div class="slider-container">
              <Slider v-model="value" range class="custom-slider" />
             
            </div>
            <div class="flex justify-between mt-2">
              <div class="text-gray-800 text-medium text-sm">Bajo</div>
              <div class="text-gray-800 text-medium text-sm">Medio</div>
              <div class="text-gray-800 text-medium text-sm">Alto</div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <!-- columns -->
          <div class="bg-red-100 p-4 h-65vh overflow-scroll column-red">
            <!-- Cards -->
            <div v-for="item in dataEmergency" class="bg-gray-100 p-4 h-fit  mb-4 border-t-3 border-primary-100">
              <router-link :to="{ name: 'zonas'}">
                <p class="flex justify-between items-center mb-4">
                  <i class="pi pi-exclamation-triangle   h-fit text-red-900 mr-2" style="font-size: 1.2rem;"></i>
                  <span class="text-gray-900 font-semibold font-inter text-sm uppercase">{{ item.name }}</span>
                  <Tag class="font-normal uppercase text-xs rounded-none" value="urgente" severity="danger"></Tag>
                </p>
                <div class="flex justify-between items-center">
                  <div class="w-10/12">
                    <ProgressBar  class="rounded-none h-1" :value="item.average"></ProgressBar>
                    
                  </div>
                  <div class="text-center text-red-900 font-semibold">{{ item.average }}%</div>
                </div>
                <div class="grid grid-cols-2 mt-2">
                  <dl>
                    <dt class="font-medium text-sm">Mes anterior:</dt>
                    <dd class="text-2xs text-gray-200">Monto: {{item.monthOld.amount}}</dd>
                    <dd class="text-2xs text-gray-200">Cantidad: {{item.monthOld.qty }}.</dd>
                  </dl>
                  <dl>
                    <dt class="font-medium text-sm">Mes actual:</dt>
                    <dd class="text-2xs text-gray-200">Monto: {{item.monthNew.amount}}</dd>
                    <dd class="text-2xs text-gray-200">Cantidad: {{item.monthNew.qty }}.</dd>
                  </dl>
                </div>
              </router-link>
              </div>
          </div>
          <!-- columns -->
          <div class="bg-orange-100 p-4  h-65vh overflow-scroll  column-orange">
            <!-- Cards -->
            <div  v-for="item in dataWarning" class="bg-gray-100 p-4 h-fit  mb-4 border-t-3 border-orange-200">
              <router-link :to="{ name: 'zonas'}">
              <p class="flex justify-between items-center mb-4">
                <i class="pi pi-exclamation-triangle   h-fit text-orange-300 mr-2" style="font-size: 1.2rem;"></i>
                <span class="text-gray-900 font-semibold font-inter text-sm uppercase">{{ item.name }}</span>
                <!-- no content -->
                <div></div>
              </p>
              <div class="flex justify-between items-center">
                <div class="w-10/12">
                  <ProgressBar  class="rounded-none h-1" :value="item.average"></ProgressBar>
                  
                </div>
                <div class="text-center text-orange-300 font-semibold">{{ item.average }}%</div>
              </div>
              <div class="grid grid-cols-2 mt-2">
                <dl>
                  <dt class="font-medium text-sm">Mes anterior:</dt>
                  <dd class="text-2xs text-gray-200">Monto: {{item.monthOld.amount}}</dd>
                  <dd class="text-2xs text-gray-200">Cantidad: {{item.monthOld.qty }}.</dd>
                </dl>
                <dl>
                  <dt class="font-medium text-sm">Mes actual:</dt>
                  <dd class="text-2xs text-gray-200">Monto: {{item.monthNew.amount}}</dd>
                  <dd class="text-2xs text-gray-200">Cantidad: {{item.monthNew.qty }}.</dd>
                </dl>
              </div>
            </router-link>
            </div>
          </div>
          <!-- columns -->
          <div class="bg-green-100 p-4  h-65vh overflow-scroll  column-green">
            <!-- Cards -->
            <div v-for="item in dataInfo" class="bg-gray-100 p-4 h-fit  mb-4 border-t-3 border-orange-300">
              <router-link :to="{ name: 'zonas'}">
              <p class="flex justify-between items-center mb-4">
                <i class="pi pi-exclamation-triangle   h-fit text-green-900 mr-2" style="font-size: 1.2rem;"></i>
                <span class="text-gray-900 font-semibold font-inter text-sm uppercase">{{ item.name }}</span>
                <!-- no content -->
                <span></span>
              </p>
              <div class="flex justify-between items-center">
                <div class="w-10/12">
                  <ProgressBar  class="rounded-none h-1" :value="item.average"></ProgressBar>
                  
                </div>
                <div class="text-center text-green-900 font-semibold">{{ item.average }}%</div>
              </div>
              <div class="grid grid-cols-2 mt-2">
                <dl>
                  <dt class="font-medium text-sm text-green-900">Mes anterior:</dt>
                  <dd class="text-2xs text-gray-200">Monto: {{item.monthOld.amount}}</dd>
                  <dd class="text-2xs text-gray-200">Cantidad: {{item.monthOld.qty }}.</dd>
                </dl>
                <dl>
                  <dt class="font-medium text-sm  text-green-900">Mes actual:</dt>
                  <dd class="text-2xs text-gray-200">Monto: {{item.monthNew.amount}}</dd>
                  <dd class="text-2xs text-gray-200">Cantidad: {{item.monthNew.qty }}.</dd>
                </dl>
              </div>
            </router-link>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sidebar -->
  <Sidebar v-model:visible="visibleRight" position="right" class="sidebar-info w-4/12">
    <template #header>

        <p class="font-medium text-md tracking-widest text-900">Guía informativa:</p>
    </template>
    <div>
      <div class="bg-gray-100 h-90vh overflow-scroll px-6 py-3">
        <!-- card -->
        <Card class="bg-white pt-2 pb-5 h-fit rounded-lg mb-4">
          <template #title>
            <p class="flex items-center mb-2">
              <span class="h-2 w-2 bg-primary-100 rounded-full flex mr-2"></span>
              <span class="text-gray-900 font-semibold font-inter text-sm">Descripción:</span>
            </p>
          </template>
          <template #content>
            <p class="text-gray-200 text-sm ">
              Transacciones facturadas fuera del horario de atensión a público
            </p>
          </template>
        </Card>

        <Card class="bg-white pt-2 pb-5 h-fit rounded-lg mb-4">
          <template #title>
            <p class="flex items-center mb-2">
              <span class="h-2 w-2 bg-pink-200 rounded-full flex mr-2"></span>
              <span class="text-gray-900 font-semibold font-inter text-sm">Descripción:</span>
            </p>
          </template>
          <template #content>
            <p class="text-gray-200 text-sm ">
              Transacciones facturadas fuera del horario de atensión a público
            </p>
          </template>
        </Card>

        <Card class="bg-white pt-2 pb-5 h-fit rounded-lg mb-4">
          <template #title>
            <p class="flex items-center mb-2">
              <span class="h-2 w-2 bg-orange-300 rounded-full flex mr-2"></span>
              <span class="text-gray-900 font-semibold font-inter text-sm">Descripción:</span>
            </p>
          </template>
          <template #content>
            <p class="text-gray-200 text-sm ">
              Transacciones facturadas fuera del horario de atensión a público
            </p>
          </template>
        </Card>

        <Card class="bg-white pt-2 pb-5 h-fit rounded-lg mb-4">
          <template #title>
            <p class="flex items-center mb-2">
              <span class="h-2 w-2 bg-orange-300 rounded-full flex mr-2"></span>
              <span class="text-gray-900 font-semibold font-inter text-sm">Descripción:</span>
            </p>
          </template>
          <template #content>
            <p class="text-gray-200 text-sm ">
              Transacciones facturadas fuera del horario de atensión a público
            </p>
          </template>
        </Card>

        <Card class="bg-white pt-2 pb-5 h-fit rounded-lg mb-4">
          <template #title>
            <p class="flex items-center mb-2">
              <span class="h-2 w-2 bg-pink-200 rounded-full flex mr-2"></span>
              <span class="text-gray-900 font-semibold font-inter text-sm">Descripción:</span>
            </p>
          </template>
          <template #content>
            <p class="text-gray-200 text-sm ">
              Transacciones facturadas fuera del horario de atensión a público
            </p>
          </template>
        </Card>
       
        <Card class="bg-white pt-2 pb-5 h-fit rounded-lg mb-4">
          <template #title>
            <p class="flex items-center mb-2">
              <span class="h-2 w-2 bg-orange-300 rounded-full flex mr-2"></span>
              <span class="text-gray-900 font-semibold font-inter text-sm">Descripción:</span>
            </p>
          </template>
          <template #content>
            <p class="text-gray-200 text-sm ">
              Transacciones facturadas fuera del horario de atensión a público
            </p>
          </template>
        </Card>

        <Card class="bg-white pt-2 pb-5 h-fit rounded-lg mb-4">
          <template #title>
            <p class="flex items-center mb-2">
              <span class="h-2 w-2 bg-orange-300 rounded-full flex mr-2"></span>
              <span class="text-gray-900 font-semibold font-inter text-sm">Descripción:</span>
            </p>
          </template>
          <template #content>
            <p class="text-gray-200 text-sm ">
              Transacciones facturadas fuera del horario de atensión a público
            </p>
          </template>
        </Card>
  
     
      </div>
    </div>
  </Sidebar>
</template>
 
 
<script>
import {defineAsyncComponent,ref, watch  } from 'vue'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'
import Sidebar from 'primevue/sidebar'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Slider from 'primevue/slider';
import { indicators } from '../data/indicators.js'

export default{
  components: {
      Navbar: defineAsyncComponent( () => import('../components/Navbar.vue')),
      Button,
      Calendar,
      Dropdown,
      Tag,
      ProgressBar,
      Sidebar,
      Card,
      Checkbox,
      Slider
  },
  setup(){
    const selectedCity = ref();
    const cities = ref([
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ]);
    const date = ref(null);
    const date2 = ref(null);
    const visibleRight = ref(false);
    const progressValue = ref(50);
    const allData = ref(indicators.value)
    const data = ref(indicators.value)
    const dataEmergency = ref( data.value.filter(item => item.groupBy === 'emergency'))
    const dataWarning = ref( data.value.filter(item => item.groupBy === 'warning'))
    const dataInfo = ref( data.value.filter(item => item.groupBy === 'info'))
    
    const loadGroup = () => {
      return data.value.reduce((acc, indicator) => {
        const sanitizedGroupName = indicator.type.charAt(0).toUpperCase() + indicator.type.slice(1);
        const sanitizedGroupKey = sanitizedGroupName.replace(/\s+/g, '-');
        const existingGroup = acc.find(item => item.key === sanitizedGroupKey);
        if (!existingGroup) {
            acc.push({ name: sanitizedGroupName, key: sanitizedGroupKey });
        }

        return acc;
      }, [])
    }

    const loadIndicator = () => {
      return data.value.reduce((acc, indicator) => {
        const sanitizedGroupName = indicator.name.charAt(0).toUpperCase() + indicator.name.slice(1).toLowerCase();
        const sanitizedGroupKey = sanitizedGroupName.replace(/\s+/g, '-');
        const existingGroup = acc.find(item => item.key === sanitizedGroupKey);
        if (!existingGroup) {
          acc.push({ name: sanitizedGroupName, key: sanitizedGroupKey });
        }
        
        return acc;
      }, [])
    }
    const uniqueGroups = ref(loadGroup());
    const uniqueIndicators = ref(loadIndicator());
    const selectedGroup = ref([]);
    const selectedIndicator = ref([]);
    const value = ref([20, 80]);


    watch(
      () => selectedGroup.value,
      (value) => {
    
        if(value.length > 0){
          data.value = allData.value.filter(item => {
            let name = item.type.charAt(0).toUpperCase() + item.type.slice(1)
            return Object.values(value).includes(name)
          })
        }else{
          data.value = allData.value
        }

        dataEmergency.value = data.value.filter(item => item.groupBy === 'emergency')
        dataWarning.value = data.value.filter(item => item.groupBy === 'warning')
        dataInfo.value = data.value.filter(item => item.groupBy === 'info')
        uniqueIndicators.value = loadIndicator();
      }
    )

    watch(
      () => selectedIndicator.value,
      (value) => {

        if(value.length > 0){
          data.value = allData.value.filter(item => {
            let name = item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase();
            return Object.values(value).includes(name)
          })
        }else{
          if(Object.values(selectedGroup.value).length == 0){
            data.value = allData.value
          }else{
            data.value = allData.value.filter(item => {
            let name = item.type.charAt(0).toUpperCase() + item.type.slice(1)
            return Object.values(selectedGroup.value).includes(name)
          })
          }
        }
        dataEmergency.value = data.value.filter(item => item.groupBy === 'emergency')
        dataWarning.value = data.value.filter(item => item.groupBy === 'warning')
        dataInfo.value = data.value.filter(item => item.groupBy === 'info')
      }
    )


    return{
      selectedCity,
      cities,
      visibleRight,
      progressValue,
      selectedGroup,
      selectedIndicator,
      value,
      date,
      date2,
      dataEmergency,
      dataWarning,
      dataInfo,
      uniqueGroups,
      uniqueIndicators
    }
  }
}
</script>
<style>

</style>