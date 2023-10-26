<template>
  <Navbar/>
  <div class="bg-gray-100  h-screen">
    <div class="max-w-medium w-1920 m-0-auto ">
      <div class="grid grid-cols-3 gap-4 mb-4 py-10">
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

      <div class="grid grid-cols-custom211 gap-4">
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