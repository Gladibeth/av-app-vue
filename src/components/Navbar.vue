<template>
  <header class="bg-gradient-to-r from-primary-200 to-primary-900">
    <nav class=" max-w-medium w-1920 m-0-auto py-1 flex justify-between items-center ">
      <div class="flex justify-center">
        <button class="navbar-burger flex items-center text-blue-600 p-3" @click="visibleLeft = true">
          <svg class="block h-5 w-5 " fill="#ffffff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
        <img class="w-50 h-50 " src="../assets/img/logo-av.png">
      </div>
      <div>
        <h2 class="text-white text-xl font-inter">{{ name }}</h2>
      </div>
			<div class="relative">
				<a @click="onToggleActive" class="flex items-center flex-col py-2  text-sm text-white transition duration-200" href="#">
					<div class="flex justify-center px-2 py-2  rounded-full w-35 h-35 bg-white hover:bg-gray-100">
						<i class="pi pi-user text-primary-900" style="font-size: 1.5rem"></i>
					</div>
					<span>Usuario</span>
				</a>

				<div v-if="toggleActive" class="absolute top-20 right-0 w-36 shadow-lg shadow-indigo-500/40 flex justify-center px-5 py-2 bg-white" >
					<a @click="logout" class="text-sm cursor-pointer" href="" >
						Cerrar sesion
					</a>
				</div>
			</div>
			
    </nav>
	
		<Sidebar v-model:visible="visibleLeft">
			<div>
				<ul>
					<li class="mb-1">
						<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Lorem</a>
					</li>
					<li class="mb-1">
						<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Lorem</a>
					</li>
					
				</ul>
			</div>
		</Sidebar>
		
  </header>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import Sidebar from 'primevue/sidebar'
import Dropdown from 'primevue/dropdown';

 export default{
	components:{
		Sidebar,
		Dropdown
	},
	props: {
		name: {type: String, required: true}
	},
	setup(){
		const visibleLeft = ref(false);
		const toggleActive = ref(false);

		const router = useRouter();

		const onToggleActive = (()=>{
			toggleActive.value = !toggleActive.value;
		})


		const logout = (event) => {
			event.preventDefault(); 
			localStorage.setItem('isLogin', false); 
      router.push('/sign-in'); 
    };
		return{
			visibleLeft,
			onToggleActive,
			toggleActive,
			logout
		}
	}
 }
</script>

<style>
</style>