<template>
  <header class="bg-gradient-to-r from-primary-200 to-primary-900">
    <nav class=" max-w-medium w-1920 m-0-auto py-1 flex justify-between items-center ">
      <div class="flex justify-center">
        <button class="navbar-burger flex items-center text-blue-600 p-3">
          <svg class="block h-5 w-5 " fill="#ffffff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
        <img class="w-50 h-50 " src="../assets/img/logo-av.png">
      </div>
      <div>
        <h2 class="text-white text-xl font-inter">Dashboard</h2>
      </div>
      <a class="flex items-center flex-col py-2  text-sm text-white transition duration-200" href="#">
        <div class="flex justify-center px-2 py-2  rounded-full w-35 h-35 bg-white hover:bg-gray-100">
          <i class="pi pi-user text-primary-900" style="font-size: 1.5rem"></i>
        </div>
        <span>Usuario</span>
      </a>
    </nav>
	<div class="navbar-menu relative z-50 hidden">
		<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div class="flex items-center mb-8">
			
				<button class="navbar-close">
					<svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
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
			<div class="mt-auto">
				<div class="pt-6">
					<a class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
					<a class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Sign Up</a>
				</div>
				<p class="my-4 text-xs text-center text-gray-400">
					<span>Copyright © 2021</span>
				</p>
			</div>
		</nav>
	</div>
  </header>
</template>
<script>
 
</script>
<style>
</style>