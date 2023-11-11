<template>
  <header class="bg-gradient-to-r from-primary-200 to-primary-900">
    <nav class=" max-w-medium w-1920 m-0-auto py-1 flex justify-between items-center ">
      <div class="flex justify-center">
				<img class="w-50 h-50 " src="../assets/img/logo-av.png">
        <button class="navbar-burger flex items-center text-blue-600 p-3" @click="visibleLeft = true">
          <svg class="block h-5 w-5 " fill="#ffffff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
        
      </div>
      <div>
        <h2 class="text-white text-lg font-inter">{{ name }}</h2>
      </div>
			<div class="relative">
				<a @click="onToggleActive" class="cursor-pointer flex items-center flex-col py-2  text-sm text-white transition duration-200" href="#">
					<div class="flex justify-center px-2 py-2  rounded-full ">
						<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
						<g clip-path="url(#clip0_92_23)">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M25.9999 4.33334C37.9664 4.33334 47.6666 14.0335 47.6666 26C47.6742 31.0005 45.9449 35.8483 42.7743 39.715L42.8176 39.7627L42.5316 40.0053C40.4998 42.4087 37.9677 44.3394 35.1123 45.6627C32.2569 46.986 29.1471 47.6699 25.9999 47.6667C19.6083 47.6667 13.8666 44.8998 9.90161 40.5015L9.46827 40.0032L9.18227 39.7648L9.22561 39.7128C6.05525 35.8468 4.32596 30.9997 4.33328 26C4.33328 14.0335 14.0334 4.33334 25.9999 4.33334ZM25.9999 36.8333C21.9699 36.8333 18.3278 38.116 15.6151 39.8775C18.6101 42.1257 22.2551 43.3387 25.9999 43.3333C29.7448 43.3387 33.3898 42.1257 36.3848 39.8775C33.2848 37.892 29.6812 36.8357 25.9999 36.8333ZM25.9999 8.66668C22.7381 8.66658 19.5424 9.58689 16.7802 11.3218C14.018 13.0567 11.8014 15.5359 10.3851 18.4742C8.96889 21.4126 8.41052 24.691 8.77418 27.9325C9.13785 31.174 10.4088 34.2472 12.4409 36.7987C15.9531 34.2788 20.7458 32.5 25.9999 32.5C31.2541 32.5 36.0468 34.2788 39.5589 36.7987C41.5911 34.2472 42.862 31.174 43.2257 27.9325C43.5894 24.691 43.031 21.4126 41.6148 18.4742C40.1985 15.5359 37.9819 13.0567 35.2197 11.3218C32.4575 9.58689 29.2618 8.66658 25.9999 8.66668ZM25.9999 13C28.2985 13 30.5029 13.9131 32.1282 15.5384C33.7535 17.1637 34.6666 19.3681 34.6666 21.6667C34.6666 23.9652 33.7535 26.1696 32.1282 27.7949C30.5029 29.4203 28.2985 30.3333 25.9999 30.3333C23.7014 30.3333 21.497 29.4203 19.8717 27.7949C18.2464 26.1696 17.3333 23.9652 17.3333 21.6667C17.3333 19.3681 18.2464 17.1637 19.8717 15.5384C21.497 13.9131 23.7014 13 25.9999 13ZM25.9999 17.3333C24.8507 17.3333 23.7485 17.7899 22.9358 18.6025C22.1232 19.4152 21.6666 20.5174 21.6666 21.6667C21.6666 22.8159 22.1232 23.9181 22.9358 24.7308C23.7485 25.5435 24.8507 26 25.9999 26C27.1492 26 28.2514 25.5435 29.0641 24.7308C29.8767 23.9181 30.3333 22.8159 30.3333 21.6667C30.3333 20.5174 29.8767 19.4152 29.0641 18.6025C28.2514 17.7899 27.1492 17.3333 25.9999 17.3333Z" fill="white"/>
						</g>
						<defs>
							<clipPath id="clip0_92_23">
								<rect width="52" height="52" fill="white"/>
							</clipPath>
						</defs>
					</svg>
					</div>
				</a>

				<div v-if="toggleActive" class="absolute top-22 right-0 w-36 shadow-lg shadow-indigo-500/40 flex justify-center px-5 py-2 bg-white" >
					<a @click="logout" class="text-sm cursor-pointer" href="" >
						Cerrar sesion
					</a>
				</div>
			</div>
			
    </nav>
	
		<Sidebar v-model:visible="visibleLeft">
			<div>
				<ul>
					<li v-for="{name, title, icon} in links" class="mb-5">
						<RouterLink :to="{name}">
							<i :class="['pi mr-3 text-primary-200 hover:text-primary-200', icon]"></i>
							{{ title }}
						</RouterLink>
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

		const links = [
			{
				name: 'dashboard',
				title: 'Dashboard',
				icon: 'pi-chart-pie'
			},
			{
				name: 'panel',
				title: 'Panel de control',
				icon: 'pi-table'
			},
			{
				name: 'executive-summary',
				title: 'Resumen ejecutivo',
				icon: 'pi-chart-bar'
			}
		]

		const onToggleActive = (()=>{
			toggleActive.value = !toggleActive.value;
		})

		const logout = (event) => {
			event.preventDefault(); 
			localStorage.setItem('isLogin', false); 
      router.push({name: 'sign-in'}); 
    };
		return{
			visibleLeft,
			onToggleActive,
			toggleActive,
			logout,
			links
		}
	}
 }
</script>

<style>
</style>