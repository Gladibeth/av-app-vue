<template>
  <Navbar :name="'Email'"/>
  <div  class="m-10">
    <div class="mail-container p-3">
     <i class="pi pi-envelope text-gray-900"></i> <label class="text-gray-900" for=""> Ingrese correo para envio de demo</label>
      <InputText class="p-inputwrapper p-inputwrapper-filled bg-gray-400 rounded p-3 outline-none w-10/12 mr-3" type="text" v-model="email" />
      <Button @click="sendEmail"  class="p-button p-component bg-orange-900 w-36 rounded-none py-3 px-5 text-md text-white" label="enviar"/>
      <span v-if="!isEmailValid" style="color: red;">Correo electrónico no válido</span>
    </div>
  </div>
  <div class="main-mail mail-container">
    <div class="mail-img">
      <div class="mail-banner-info">
        <div>
          <img class="mail-logo" src="http://imgfz.com/i/QojKdWn.png" alt="Logo AV">
          <h1>SU RESUMEN DIARIO 
            DE INDICADORES RELEVANTES
          </h1>
        </div>
        <a href="#" class="button">Ver en sitio web</a>
      </div>
    </div>
    <div class="mail-content">
      <p>Estimados:</p>
      <p>
        A continuación le enviamos las alertas correspondientes al resumen diario con los indicaros más relevantes para su negocio.
        Le recomendamos mantenerse informado de todos los indicadores.
      </p>
      <p>
        <strong>
          A continuación le mostramos un resumen de las alertas tempranas correspondientes al mes de enero 2023.
        </strong>
      </p>

      <div class="mail-card border-blue">
        <div class="mail-card__header flex flex-between">
          <div class="flex">
            <span class="mail-card__icon"></span>
            <h3>Proceso de venta</h3>
          </div>
          <span class="mail-card__tag">
            Urgencia
          </span>
        </div>
        <div class="mail-card__table">
          <table>
            <thead>
              <tr>
                <th>Indicador</th>
                <th>Monto de Ingreso en $</th>
                <th>Cant. de Casos</th>
                <th>Riesgos</th>
                <th>Recomendación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Venta con Descuento Alto</td>
                <td>3,000,000</td>
                <td>20</td>
                <td>Financiero</td>
                <td>Restringir aplicación de descuento</td>
              </tr>
              <tr>
                <td>Venta con Descuento Alto</td>
                <td>3,000,000</td>
                <td>20</td>
                <td>Financiero</td>
                <td>Restringir aplicación de descuento</td>
              </tr>
       
            </tbody>
          </table>
        </div>
      </div>
      <div class="mail-card border-pink">
        <div class="mail-card__header flex flex-between">
          <div class="flex">
            <span class="mail-card__icon"></span>
            <h3>Proceso de venta</h3>
          </div>
          <span class="mail-card__tag">
            Urgencia
          </span>
        </div>
        <div class="mail-card__table">
          <table>
            <thead>
              <tr>
                <th>Indicador</th>
                <th>Monto de Ingreso en $</th>
                <th>Cant. de Casos</th>
                <th>Riesgos</th>
                <th>Recomendación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Venta con Descuento Alto</td>
                <td>3,000,000</td>
                <td>20</td>
                <td>Financiero</td>
                <td>Restringir aplicación de descuento</td>
              </tr>
              <tr>
                <td>Venta con Descuento Alto</td>
                <td>3,000,000</td>
                <td>20</td>
                <td>Financiero</td>
                <td>Restringir aplicación de descuento</td>
              </tr>
       
            </tbody>
          </table>
        </div>
      </div>
      <div class="mail-card border-red">
        <div class="mail-card__header flex flex-between">
          <div class="flex">
            <span class="mail-card__icon"></span>
            <h3>Proceso de venta</h3>
          </div>
          <span class="mail-card__tag">
            Urgencia
          </span>
        </div>
        <div class="mail-card__table">
          <table>
            <thead>
              <tr>
                <th>Indicador</th>
                <th>Monto de Ingreso en $</th>
                <th>Cant. de Casos</th>
                <th>Riesgos</th>
                <th>Recomendación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Venta con Descuento Alto</td>
                <td>3,000,000</td>
                <td>20</td>
                <td>Financiero</td>
                <td>Restringir aplicación de descuento</td>
              </tr>
              <tr>
                <td>Venta con Descuento Alto</td>
                <td>3,000,000</td>
                <td>20</td>
                <td>Financiero</td>
                <td>Restringir aplicación de descuento</td>
              </tr>
       
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <p class="flex-center">
      <strong class="width-300 text-center">
        Agradecemos su confienza, Equipo de Auditor Virtual
      </strong>
    </p>
    
    <div class="mail-footer">
      <p>www.auditorvirtual.com</p>
    </div>
  </div>
  <Toast />
</template>

<script>

import { defineAsyncComponent, ref, watch } from 'vue'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { useToast } from "primevue/usetoast"
import Toast from 'primevue/toast';
import axios from 'axios';

export default{
  components: {
      Navbar: defineAsyncComponent( () => import('../components/Navbar.vue')),
      InputText,
      Button,
      Toast,
     
  },
  setup(){
    const toast = useToast();

    const email = ref(null)
    const isEmailValid = ref(true);

    const validateEmail = () => {
      // Expresión regular para validar el formato de un correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isEmailValid.value = emailRegex.test(email.value);
    };

   const  sendEmail = () => {
    validateEmail();

    if (!isEmailValid.value) {
      return;
    }
      const data = {
        to: email.value,
      };
      // Realiza la solicitud HTTP al servidor PHP
      axios.post('/email/send-mail.php', data)
        .then(response => {
          if(response.data.success){
            toast.add({ severity: 'success', summary: 'Exitoso', detail: response.data.message, life: 3000 });
            email.value = null;
          }else{
            toast.add({ severity: 'error', summary: 'Fallo', detail: response.data.message, life: 3000 });
          }
        })
        .catch(error => {
          toast.add({ severity: 'error', summary: 'Fallo envio de correo', detail: 'no se pudo enviar el correo electronico', life: 3000 });
        });
    }
  
    return{
      email,
      isEmailValid,
      sendEmail
    }
  }
}

</script>

<style scope>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

h1 {
  color: #ffffff;
  margin: 0;
}

p {
  color: #97989d;
  font-size: 17px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}


th {
  background-color: #fcbabc;
  background-color: #fcbabc;
  text-align: left;
  padding: 5px;
}
td{
  text-align: left;
  padding: 5px;
  color: #97989d;
  
}
tr{
  border-bottom: 1px solid #ddd;
}
.border-blue{
  border-top: 4px solid #96d4ec;
}
.border-pink{
  border-top: 4px solid #ecbfeb;
}
.border-red{
  border-top: 4px solid #de8f7e;
}
.text-center{
  text-align: center;
}
.flex{
  display: flex;
  align-items: center;
}
.flex-between{
  justify-content: space-between;
}
.flex-center{
  display: flex;
  justify-content: center;
  align-items: center;
}
.width-300{
  width: 300px;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #f79b0f;
  color: #fff;
  text-decoration: none;
  border-radius: 0px;
}
.mail-logo{
  width:200px;
  margin-bottom: 40px;
}
.mail-img{
  background-repeat: no-repeat;
  height: 350px;
  background-position: center;
  background-size: cover;
  background-image: url(http://imgfz.com/i/502OqIh.png);
  padding: 0 20px 40px 20px;
  display: flex;

}
.mail-banner-info{
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
}

.mail-banner-info h1{
  width: 60%;
}
.mail-content{
  padding: 20px;
  background-color: #f7f8fe;
}
.mail-card{
  background-color: #ffffff;
  padding: 20px;
  margin: 10px 0 20px;
}

.mail-card__icon{
  background-color: #ed555e;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  display: block;
  transform: rotate(45deg);
  margin-right: 10px;
}
.mail-card__tag{
  background-color: #ed555e;
  color: #ffffff;
  padding: 5px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
}
.mail-footer{
  background-color: #0e1b8b;
  padding: 5px;
  text-align: center;
}
.mail-footer p{
  color: #ffffff;
}
.mail-container{
    max-width: 1024px;
    margin: auto;
}
</style>