<template>
  <div class="grid grid-cols-2">
    <div class="flex justify-center">
      <div class="flex flex-col items-center justify-center w-9/12">
        <svg class="mb-6" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
          <path d="M50.0007 41.6666C59.2054 41.6666 66.6673 34.2047 66.6673 25C66.6673 15.7952 59.2054 8.33331 50.0007 8.33331C40.7959 8.33331 33.334 15.7952 33.334 25C33.334 34.2047 40.7959 41.6666 50.0007 41.6666Z" stroke="#02299B" stroke-width="5"/>
          <path d="M83.3337 72.9166C83.3337 83.2708 83.3337 91.6666 50.0003 91.6666C16.667 91.6666 16.667 83.2708 16.667 72.9166C16.667 62.5625 31.592 54.1666 50.0003 54.1666C68.4087 54.1666 83.3337 62.5625 83.3337 72.9166Z" stroke="#02299B" stroke-width="5"/>
        </svg>
        <h2 class="text-lg text-gray-900 mb-2 font-medium font-inter">Bienvenido a auditor virtual</h2>
        <p class="text-md text-gray-900 mb-8 font-medium font-inter text-center">
          Ingresa para ver todas las estadísticas financieras de tu negocio.
        </p>
        <Form 
          @submit="onSubmitLogin"
          class="w-full">
          <div class="flex flex-col gap-2 w-full mb-5">
            <label for="email" class="font-inter text-gray-900">Correo*</label>
            <span class="relative">
              <i class="pi pi-envelope absolute right-4 top-5 text-gray-900" style="font-size: 1.2rem" />
              <input
              id="email"
              type="email"
              name="email"
              class="bg-gray-100 p-4 w-full outline-none rounded-none"
              v-bind="email" 
              v-model="formData.mail"
              >
              <span class="p-error">{{ errors.email }}</span>
            </span>
          </div>
          <div class="flex flex-col gap-2 w-full mb-10">
            <label for="password" class="font-inter text-gray-900">Contraseña*</label>
            <span class="relative">
              <i class="pi pi-eye absolute right-4 top-5 text-gray-900" style="font-size: 1.2rem" />
              <input
              type="password"
              id="password"
              name="password" 
              class="bg-gray-100 p-4 w-full outline-none rounded-none"
              autocomplete="current-password"
              v-bind="password"
              v-model="formData.password"
              >

              <span class="p-error">{{ errors.password }}</span>
            </span>
          </div>
          <div class="flex flex-col items-center text-center">
            <Button
              type="submit"
              class="bg-orange-900 w-fit rounded-none outline-none py-3 px-20 mb-4 text-lg text-white font-normal"
              label="Ingresar"
            />
            <span class="font-medium text-gray-900 text-sm">¿Has olvidado tu contraseña? <a class="text-primary-900">Haz clic aquí</a></span>
          </div>
        </Form>
      </div>
    </div>
    <div class="h-screen w-full">
      <img class="h-screen w-full" src="../../assets/img/sign-in.png" />
    </div>
  </div>
  <Toast />
</template>

<script>
import { useRouter } from 'vue-router'
import {useForm, Form, Field, ErrorMessage} from 'vee-validate'
import { useToast } from "primevue/usetoast"
import * as yup from 'yup'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Password from 'primevue/password'
import Toast from 'primevue/toast';

export default{
name: 'Sign-in',
 components:{
  InputText, 
  Button,
  Password,
  Toast,
  Form,
  ErrorMessage,
  Field,
 },
 setup(){

    const formData = {
      mail: null,
      password: null,
    };

    const router = useRouter();

    const toast = useToast();
    
    const { errors, defineInputBinds } = useForm({
      validationSchema: yup.object({
        email: yup.string().required('Introduce tu correo').email('El correo tiene un formato erróneo'),
        password: yup.string().required('Introduce tu contraseña').min(4, 'Contraseña demasiado corta'),
        })
    });

    const email = defineInputBinds('email');
    const password = defineInputBinds('password');
    
    const showSuccess = () => {
        toast.add({ severity: 'success', summary: 'Sesión iniciada', life: 3000 });
    };

    const showError = () => {
        toast.add({ severity: 'error', summary: 'Inicio de sesión fallido. ', detail: 'Verifica tus credenciales.', life: 3000 });
    };

    const onSubmitLogin = () => {
      const { mail, password } = formData;
      const users = [
        { mail: 'admin@av.com', password: '1234' },
      ];

      const user = users.find((user) => user.mail === mail && user.password === password);

      if (user) {
        localStorage.setItem('isLogin', true);

        showSuccess();

        setTimeout(() => {
          router.push({ name: "dashboard" });
        }, 500);

      } else {
        showError();
      }
    };

    return {
      formData,
      onSubmitLogin,
      errors,
      email,
      password
    };

 }
}
</script>
