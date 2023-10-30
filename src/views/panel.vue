<template>
  <Navbar :name="'Panel de control Auditor Virtual'"/>
  <div class="bg-gray-100  h-screen">
    <div class="max-w-medium w-1920 m-0-auto py-5">
      <!-- Filter component -->
      <div class="bg-white grid grid-cols-custom-filter gap-5 p-4">
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

      <div class="grid grid-cols-3 gap-4">
        <!-- columns -->
        <div class="bg-red-100 p-4 h-65vh overflow-scroll column-red">
          <!-- Cards -->
          <div class="bg-gray-100 p-4 h-fit  mb-4 border-t-3 border-primary-100">
            <p class="flex justify-between items-center mb-4">
              <i class="pi pi-exclamation-triangle   h-fit text-red-900 mr-2" style="font-size: 1.2rem;"></i>
              <span class="text-gray-900 font-semibold font-inter text-sm uppercase">Ventas con margenes negativos</span>
              <Tag class="font-normal uppercase text-xs rounded-none" value="urgente" severity="danger"></Tag>
            </p>
            <div class="flex justify-between items-center">
              <div class="w-10/12">
                <ProgressBar  class="rounded-none h-1" :value="progressValue"></ProgressBar>
                
              </div>
              <div class="text-center text-red-900 font-semibold">{{ progressValue }}%</div>
            </div>
            <div class="grid grid-cols-2 mt-2">
              <dl>
                <dt class="font-medium text-sm">Mes anterior:</dt>
                <dd class="text-2xs text-gray-200">Monto: $100.00</dd>
                <dd class="text-2xs text-gray-200">Cantidad: 100 unid.</dd>
              </dl>
              <dl>
                <dt class="font-medium text-sm">Mes actual:</dt>
                <dd class="text-2xs text-gray-200">Monto: $100.00</dd>
                <dd class="text-2xs text-gray-200">Cantidad: 100 unid.</dd>
              </dl>
            </div>
          </div>
          <!-- Cards -->
          <div class="bg-gray-100 p-4 h-fit  mb-4 border-t-3 border-pink-200">
            <p class="flex justify-between items-center mb-4">
              <i class="pi pi-exclamation-triangle   h-fit text-red-900 mr-2" style="font-size: 1.2rem;"></i>
              <span class="text-gray-900 font-semibold font-inter text-sm uppercase">Notas de crédito reiteradas en sucrsales</span>
              <Tag class="font-normal uppercase text-xs rounded-none" value="urgente" severity="danger"></Tag>
            </p>
            <div class="flex justify-between items-center">
              <div class="w-10/12">
                <ProgressBar  class="rounded-none h-1" :value="progressValue"></ProgressBar>
                
              </div>
              <div class="text-center text-red-900 font-semibold">{{ progressValue }}%</div>
            </div>
            <div class="grid grid-cols-2 mt-2">
              <dl>
                <dt class="font-medium text-sm">Mes anterior:</dt>
                <dd class="text-2xs text-gray-200">Monto: $100.00</dd>
                <dd class="text-2xs text-gray-200">Cantidad: 100 unid.</dd>
              </dl>
              <dl>
                <dt class="font-medium text-sm">Mes actual:</dt>
                <dd class="text-2xs text-gray-200">Monto: $100.00</dd>
                <dd class="text-2xs text-gray-200">Cantidad: 100 unid.</dd>
              </dl>
            </div>
          </div>
           <!-- Cards -->
           <div class="bg-gray-100 p-4 h-fit  mb-4 border-t-3 border-orange-200">
            <p class="flex justify-between items-center mb-4">
              <i class="pi pi-exclamation-triangle   h-fit text-red-900 mr-2" style="font-size: 1.2rem;"></i>
              <span class="text-gray-900 font-semibold font-inter text-sm uppercase">Mercaderías  en tránsito por tiempo excesivo</span>
              <Tag class="font-normal uppercase text-xs rounded-none" value="urgente" severity="danger"></Tag>
            </p>
            <div class="flex justify-between items-center">
              <div class="w-10/12">
                <ProgressBar  class="rounded-none h-1" :value="progressValue"></ProgressBar>
                
              </div>
              <div class="text-center text-red-900 font-semibold">{{ progressValue }}%</div>
            </div>
            <div class="grid grid-cols-2 mt-2">
              <dl>
                <dt class="font-medium text-sm">Mes anterior:</dt>
                <dd class="text-2xs text-gray-200">Monto: $100.00</dd>
                <dd class="text-2xs text-gray-200">Cantidad: 100 unid.</dd>
              </dl>
              <dl>
                <dt class="font-medium text-sm">Mes actual:</dt>
                <dd class="text-2xs text-gray-200">Monto: $100.00</dd>
                <dd class="text-2xs text-gray-200">Cantidad: 100 unid.</dd>
              </dl>
            </div>
          </div>
        </div>
        <!-- columns -->
        <div class="bg-orange-100 p-4  h-65vh overflow-scroll  column-orange">
          <!-- Cards -->
          <div class="bg-gray-100 p-4 h-fit  mb-4 border-t-3 border-orange-200">
            <p class="flex justify-between items-center mb-4">
              <i class="pi pi-exclamation-triangle   h-fit text-orange-300 mr-2" style="font-size: 1.2rem;"></i>
              <span class="text-gray-900 font-semibold font-inter text-sm uppercase">Variación inusual de costos</span>
              <!-- no content -->
              <div></div>
            </p>
            <div class="flex justify-between items-center">
              <div class="w-10/12">
                <ProgressBar  class="rounded-none h-1" :value="progressValue"></ProgressBar>
                
              </div>
              <div class="text-center text-orange-300 font-semibold">{{ progressValue }}%</div>
            </div>
            <div class="grid grid-cols-2 mt-2">
              <dl>
                <dt class="font-medium text-sm">Mes anterior:</dt>
                <dd class="text-2xs text-gray-200">Monto: $100.00</dd>
                <dd class="text-2xs text-gray-200">Cantidad: 100 unid.</dd>
              </dl>
              <dl>
                <dt class="font-medium text-sm">Mes actual:</dt>
                <dd class="text-2xs text-gray-200">Monto: $100.00</dd>
                <dd class="text-2xs text-gray-200">Cantidad: 100 unid.</dd>
              </dl>
            </div>
          </div>
          <!-- Cards -->
          <div class="bg-gray-100 p-4 h-fit  mb-4 border-t-3 border-orange-200">
            <p class="flex justify-between items-center mb-4">
              <i class="pi pi-exclamation-triangle   h-fit text-orange-300 mr-2" style="font-size: 1.2rem;"></i>
              <span class="text-gray-900 font-semibold font-inter text-sm uppercase">Variación elevada de precios</span>
              <!-- no content -->
              <div></div>
            </p>
            <div class="flex justify-between items-center">
              <div class="w-10/12">
                <ProgressBar  class="rounded-none h-1" :value="progressValue"></ProgressBar>
                
              </div>
              <div class="text-center text-orange-300 font-semibold">{{ progressValue }}%</div>
            </div>
            <div class="grid grid-cols-2 mt-2">
              <dl>
                <dt class="font-medium text-sm">Mes anterior:</dt>
                <dd class="text-2xs text-gray-200">Monto: $100.00</dd>
                <dd class="text-2xs text-gray-200">Cantidad: 100 unid.</dd>
              </dl>
              <dl>
                <dt class="font-medium text-sm">Mes actual:</dt>
                <dd class="text-2xs text-gray-200">Monto: $100.00</dd>
                <dd class="text-2xs text-gray-200">Cantidad: 100 unid.</dd>
              </dl>
            </div>
          </div>
           <!-- Cards -->
          <div class="bg-gray-100 p-4 h-fit  mb-4 border-t-3 border-pink-200">
            <p class="flex justify-between items-center mb-4">
              <i class="pi pi-exclamation-triangle   h-fit text-orange-300 mr-2" style="font-size: 1.2rem;"></i>
              <span class="text-gray-900 font-semibold font-inter text-sm uppercase">Notas de creditos manuales</span>
              <!-- no content -->
              <div></div>
            </p>
            <div class="flex justify-between items-center">
              <div class="w-10/12">
                <ProgressBar  class="rounded-none h-1" :value="progressValue"></ProgressBar>
                
              </div>
              <div class="text-center text-orange-300 font-semibold">{{ progressValue }}%</div>
            </div>
            <div class="grid grid-cols-2 mt-2">
              <dl>
                <dt class="font-medium text-sm">Mes anterior:</dt>
                <dd class="text-2xs text-gray-200">Monto: $100.00</dd>
                <dd class="text-2xs text-gray-200">Cantidad: 100 unid.</dd>
              </dl>
              <dl>
                <dt class="font-medium text-sm">Mes actual:</dt>
                <dd class="text-2xs text-gray-200">Monto: $100.00</dd>
                <dd class="text-2xs text-gray-200">Cantidad: 100 unid.</dd>
              </dl>
            </div>
          </div>
        </div>
        <!-- columns -->
        <div class="bg-green-100 p-4  h-65vh overflow-scroll  column-green">
          <!-- Cards -->
          <div class="bg-gray-100 p-4 h-fit  mb-4 border-t-3 border-orange-300">
            <p class="flex justify-between items-center mb-4">
              <i class="pi pi-exclamation-triangle   h-fit text-green-900 mr-2" style="font-size: 1.2rem;"></i>
              <span class="text-gray-900 font-semibold font-inter text-sm uppercase">Ajustes de inventario</span>
              <!-- no content -->
              <span></span>
            </p>
            <div class="flex justify-between items-center">
              <div class="w-10/12">
                <ProgressBar  class="rounded-none h-1" :value="progressValue"></ProgressBar>
                
              </div>
              <div class="text-center text-green-900 font-semibold">{{ progressValue }}%</div>
            </div>
            <div class="grid grid-cols-2 mt-2">
              <dl>
                <dt class="font-medium text-sm text-green-900">Mes anterior:</dt>
                <dd class="text-2xs text-gray-200">Monto: $100.00</dd>
                <dd class="text-2xs text-gray-200">Cantidad: 100 unid.</dd>
              </dl>
              <dl>
                <dt class="font-medium text-sm  text-green-900">Mes actual:</dt>
                <dd class="text-2xs text-gray-200">Monto: $100.00</dd>
                <dd class="text-2xs text-gray-200">Cantidad: 100 unid.</dd>
              </dl>
            </div>
          </div>
          <!-- Cards -->
          <div class="bg-gray-100 p-4 h-fit  mb-4 border-t-3 border-pink-200">
            <p class="flex justify-between items-center mb-4">
              <i class="pi pi-exclamation-triangle   h-fit text-green-900 mr-2" style="font-size: 1.2rem;"></i>
              <span class="text-gray-900 font-semibold font-inter text-sm uppercase">Notas de crédito sin venta original</span>
              <!-- no content -->
              <span></span>
            </p>
            <div class="flex justify-between items-center">
              <div class="w-10/12">
                <ProgressBar  class="rounded-none h-1" :value="progressValue"></ProgressBar>
                
              </div>
              <div class="text-center text-green-900 font-semibold">{{ progressValue }}%</div>
            </div>
            <div class="grid grid-cols-2 mt-2">
              <dl>
                <dt class="font-medium text-sm text-green-900">Mes anterior:</dt>
                <dd class="text-2xs text-gray-200">Monto: $100.00</dd>
                <dd class="text-2xs text-gray-200">Cantidad: 100 unid.</dd>
              </dl>
              <dl>
                <dt class="font-medium text-sm text-green-900">Mes actual:</dt>
                <dd class="text-2xs text-gray-200">Monto: $100.00</dd>
                <dd class="text-2xs text-gray-200">Cantidad: 100 unid.</dd>
              </dl>
            </div>
          </div>
           <!-- Cards -->
           <div class="bg-gray-100 p-4 h-fit  mb-4 border-t-3 border-primary-300">
            <p class="flex justify-between items-center mb-4">
              <i class="pi pi-exclamation-triangle   h-fit text-green-900 mr-2" style="font-size: 1.2rem;"></i>
              <span class="text-gray-900 font-semibold font-inter text-sm uppercase">Ventas con modificación de precio</span>
              <!-- no content -->
              <span></span>
            </p>
            <div class="flex justify-between items-center">
              <div class="w-10/12">
                <ProgressBar  class="rounded-none h-1" :value="progressValue"></ProgressBar>
                
              </div>
              <div class="text-center text-green-900  font-semibold">{{ progressValue }}%</div>
            </div>
            <div class="grid grid-cols-2 mt-2">
              <dl>
                <dt class="font-medium text-sm text-green-900 ">Mes anterior:</dt>
                <dd class="text-2xs text-gray-200">Monto: $100.00</dd>
                <dd class="text-2xs text-gray-200">Cantidad: 100 unid.</dd>
              </dl>
              <dl>
                <dt class="font-medium text-sm text-green-900 ">Mes actual:</dt>
                <dd class="text-2xs text-gray-200">Monto: $100.00</dd>
                <dd class="text-2xs text-gray-200">Cantidad: 100 unid.</dd>
              </dl>
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
import {defineAsyncComponent,ref  } from 'vue'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'
import Sidebar from 'primevue/sidebar'
import Card from 'primevue/card';
export default{
  components: {
      Navbar: defineAsyncComponent( () => import('../components/Navbar.vue')),
      Button,
      Calendar,
      Dropdown,
      Tag,
      ProgressBar,
      Sidebar,
      Card
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
    const visibleRight = ref(false);
    const progressValue = ref(50);
    
    return{
      selectedCity,
      cities,
      visibleRight,
      progressValue
    }
  }
}
</script>
<style>

</style>


