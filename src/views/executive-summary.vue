<template>
  <Navbar/>
  <div class="bg-gray-100  h-screen">
    <div class="max-w-medium w-1920 m-0-auto ">
      <div class="grid grid-cols-custom13 gap-4 mb-4">
        <div class="bg-white h-48">
          <div class=" flex bg-gray-300 p-3 py-3 mb-4">
            <span class="text-gray-900 text-sm font-semibold font-inter">Emisión de Documentos con tienda cerrada</span>
            <i class="pi pi-external-link bg-gray-900 px-3 py-2 text-sm h-fit text-white"></i>
          </div>
          <div class="h-screen bg-white px-4">
            <div class="bg-gray-100 p-4 h-fit rounded-lg mb-4">
              <p>
                <i class="pi pi-list   h-fit text-gray-900 mr-2"></i>
                <span class="text-gray-900 font-semibold font-inter text-sm">Descripción:</span>
              </p>
              <p class="text-gray-200 text-sm ">
                Transacciones facturadas fuera del horario de atensión a público
              </p>
            </div>

            <div class="bg-gray-100 p-4 h-fit rounded-lg mb-4">
              <p>
                <i class="pi pi-exclamation-triangle   h-fit text-red-900 mr-2"></i>
                <span class="text-gray-900 font-semibold font-inter text-sm">Riesgo:</span>
              </p>
              <p class="text-gray-200 text-sm ">
                Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.
              </p>
            </div>

            <div class="bg-gray-100 p-4 h-fit rounded-lg mb-4">
              <p>
                <i class="pi pi-sitemap  h-fit text-gray-900 mr-2"></i>
                <span class="text-gray-900 font-semibold font-inter text-sm">Análisis de situación identificada:</span>
              </p>
              <p class="text-gray-200 text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
            <div class="bg-gray-100 p-4 h-fit rounded-lg mb-4">
              <p>
                <i class="pi pi-flag   h-fit text-green-900 mr-2"></i>
                <span class="text-gray-900 font-semibold font-inter text-sm">Recomendaciones:</span>
              </p>
              <p class="text-gray-200 text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </div>
          </div>
        </div>
        <div class="h-48">
          <div class="grid grid-cols-2 gap-4 mb-4 ">
            <div class="bg-white h-48">
              hola
            </div>
            <div class="bg-white h-48">
              hola
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
import {defineAsyncComponent } from 'vue'
export default{
  components: {
      Navbar: defineAsyncComponent( () => import('../components/Navbar.vue'))
  },
  setup(){
    return{

    }
  }
}
</script>
<style scoped>
 
</style>