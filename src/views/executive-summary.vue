<template>
  <Navbar :name="'Resumen ejecutivo Auditor Virtual'"/>
  <div class="bg-gray-100  h-screen">
    <div class="max-w-medium w-1920 m-0-auto ">
      <div class="grid  gap-4" :class="[hideActive ? 'grid-cols-custom13' : 'grid-cols-1']">
        <div class="bg-secundary-300 p-3 relative sidebar-general" :class="[hideActive ? 'active' : 'inactive']">
          <!-- Icon hide -->
          <div class="bg-secundary-300 rounded-full flex justify-center items-center absolute icon-sidebar-close w-11 h-11"  @click="hideSidebar">
            <i class="pi" :class="[hideActive ? 'pi-angle-left' : 'pi-angle-right']"></i>
          </div>
          <div class=" flex p-3 mt-3">
              <Dropdown v-model="selectedDocument" :options="listDocuments" optionLabel="name" placeholder="Emisión de documentos con tienda..." display="chip" class="w-full bg-white rounded !text-sm">
              </Dropdown>
          </div>
          <div class="h-90vh overflow-y-scroll main-scrollbar bg-secundary-300 px-4 pt-4 ">
            <!-- card -->
            <Card v-for="item in searchDocument" class="bg-white h-fit rounded-md mb-4 shadow-3xl" :key="item">
                <template #title>
                  <p>
                    <i class="pi h-fit text-gray-900 mr-2" :class="item.icon"></i>
                    <span class="text-gray-900 font-semibold font-inter text-sm">{{ item.name }}:</span>
                  </p>
                </template>
                <template #content>
                  <p class="text-gray-200 text-sm ">
                   {{  item.description }}
                  </p>
                </template>
            </Card>
          </div>
        </div>
        <div class="h-85vh overflow-y-scroll main-scrollbar py-10">
          <div>
            <p class="font-bold mb-5 ml-4 text-gray-900 text-lg">{{ selectedDocument.name }}</p>
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4 ">
            <ExecutiveGraphics/>
          </div>
        </div>
      </div>

  
    </div>
  </div>
</template>
 
<script>
import { defineAsyncComponent, ref, watch } from 'vue'
import Card from 'primevue/card'
import Chart from 'primevue/chart'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import MultiSelect from 'primevue/multiselect'
import { indicators } from '../data/indicators.js'

export default{
  components: {
      Navbar: defineAsyncComponent( () => import('../components/Navbar.vue')),
      ExecutiveGraphics: defineAsyncComponent( () => import('../components/ExecutiveGraphics.vue')),
      Card,
      Chart,
      Button,
      Dropdown,
      MultiSelect
  },
  setup(){
    const listDocuments = ref(indicators.value)
    const selectedIndicator = ref(listDocuments.value[0])
    const selectedDocument = ref(selectedIndicator.value);
    const searchDocument = ref(selectedIndicator.value.tags)
    const hideActive = ref(true)

    watch(() => selectedDocument.value,
      (value)=>{
      if(Object.keys(value).length){
        searchDocument.value = value.tags
      }else{
        searchDocument.value = listDocuments.value
      }
    })

    const hideSidebar = (()=>{
      hideActive.value = !hideActive.value
    })

    return{
      selectedDocument,
      hideActive,
      hideSidebar,
      listDocuments,
      searchDocument
    }
  }
}
</script>
