<template>
  <div class="grid grid-cols-2">
    <div class="flex justify-center ">
      <div class="flex flex-col items-center justify-center w-9/12">
        <i class="pi pi-user text-primary-900 mb-5" style="font-size: 3rem"></i>
        <h2 class="text-lg text-gray-900 mb-2 font-medium font-inter">Bienvenido a auditor virual</h2>
        <p  class="text-md text-gray-900 mb-8 font-medium font-inter text-center">Ingresa para ver todas las estadísticas financieras de tu negocio.</p>
        <form @submit="login" class="w-full">
          <div class="flex flex-col gap-2 w-full mb-5">
            <label for="email" class="font-inter">Correo*</label>
            <span class="relative ">
              <i class="pi pi-envelope  absolute right-4 top-5 text-primary-900" style="font-size: 1.2rem" />
              <InputText id="email"  type="email" v-model="formData.mail" aria-required="required" class="bg-gray-100 p-4 w-full outline-none rounded-none"  aria-describedby="email-help" />
            </span>
            
          </div>
          <div class="flex flex-col gap-2 w-full mb-10">
            <label for="password" class="font-inter">Contraseña*</label>
            <span class="relative ">
              <i class="pi pi-lock  absolute right-4 top-5 text-primary-900" style="font-size: 1.2rem" />
              <Password :feedback="false" id="password" v-model="formData.password"  class="bg-gray-100 w-full rounded-none  outline-none" />
            </span>
            
          </div>
          <div class="flex flex-col text-center">
            <Button type="submit" class="bg-orange-900 rounded-none outline-none py-3 px-20 mb-4 text-lg  text-white font-normal" label="Ingresar" />

            <span class="font-medium text-sm">¿Haz olvidado tu contraseña? <a class="text-primary-900 ">Haz click aquí</a></span>
          </div>
        </form>
      </div>
    </div>
    <div class="h-screen">
      <img class="h-screen" src="../../assets/img/sign-in.png">
    </div>
  </div>
</template>
 
 
<script>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router' // Importa el enrutador de Vue
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Password from 'primevue/password';

export default{
 components:{
  InputText, 
  Button,
  Password 
 },
 setup(){
  const formData = {
    mail: null,
    password: null,
  };

  const router = useRouter(); 


  const login = (event) => {
    event.preventDefault(); 

      const { mail, password } = formData;

      const users = [
        { mail: 'admin@av.com', password: '1234' },
      ];

      const user = users.find((user) => user.mail === mail && user.password === password);

      if (user) {
        localStorage.setItem('isLogin', true); 
        router.push('/');
      } else {
        alert('Inicio de sesión fallido. Verifica tus credenciales.');
      }
    };

    return {
      formData,
      login,
    };

 }
}
</script>
