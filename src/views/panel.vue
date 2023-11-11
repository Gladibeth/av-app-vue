<template>
  <Navbar :name="'Panel de control Auditor Virtual'"/>
  <div class="bg-gray-100  h-screen">
    <div class="max-w-medium w-1920 m-0-auto py-5">

      <!-- Title -->
      <div class="flex justify-end mb-4">
        <div class="flex items-center">
          <Button icon="pi pi-ellipsis-v" :style="{border: '2px solid #8d8e93'}" class="border-2 text-gray-800 rounded-full py-1 px-2 text-md mr-6" label="Info" @click="visibleRight = true"  />
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <g clip-path="url(#clip0_57_268)">
            <path d="M16.9999 2.83334C24.8242 2.83334 31.1666 9.17576 31.1666 17C31.1666 24.8243 24.8242 31.1667 16.9999 31.1667C9.17567 31.1667 2.83325 24.8243 2.83325 17C2.83325 9.17576 9.17567 2.83334 16.9999 2.83334ZM16.9999 22.6667C16.6242 22.6667 16.2639 22.8159 15.9982 23.0816C15.7325 23.3473 15.5833 23.7076 15.5833 24.0833C15.5833 24.4591 15.7325 24.8194 15.9982 25.0851C16.2639 25.3508 16.6242 25.5 16.9999 25.5C17.3756 25.5 17.736 25.3508 18.0017 25.0851C18.2673 24.8194 18.4166 24.4591 18.4166 24.0833C18.4166 23.7076 18.2673 23.3473 18.0017 23.0816C17.736 22.8159 17.3756 22.6667 16.9999 22.6667ZM16.9999 9.20834C15.6379 9.20834 14.3317 9.7494 13.3686 10.7125C12.4056 11.6756 11.8645 12.9818 11.8645 14.3438C11.8645 14.7195 12.0138 15.0798 12.2794 15.3455C12.5451 15.6112 12.9054 15.7604 13.2812 15.7604C13.6569 15.7604 14.0172 15.6112 14.2829 15.3455C14.5486 15.0798 14.6978 14.7195 14.6978 14.3438C14.6983 13.9259 14.8125 13.516 15.0282 13.1581C15.2439 12.8002 15.5529 12.5078 15.9221 12.3121C16.2914 12.1165 16.7069 12.0251 17.1241 12.0476C17.5414 12.0702 17.9447 12.2059 18.2907 12.4401C18.6367 12.6744 18.9124 12.9985 19.0882 13.3776C19.2641 13.7566 19.3334 14.1764 19.2889 14.5919C19.2443 15.0074 19.0875 15.4029 18.8352 15.736C18.583 16.0692 18.2448 16.3274 17.857 16.4829C16.8993 16.8654 15.5833 17.8458 15.5833 19.4792V19.8333C15.5833 20.2091 15.7325 20.5694 15.9982 20.8351C16.2639 21.1008 16.6242 21.25 16.9999 21.25C17.3756 21.25 17.736 21.1008 18.0017 20.8351C18.2673 20.5694 18.4166 20.2091 18.4166 19.8333C18.4166 19.4877 18.4874 19.3148 18.7863 19.1675L18.9096 19.1108C20.0157 18.6659 20.9326 17.8499 21.5031 16.803C22.0736 15.756 22.2621 14.5432 22.0363 13.3725C21.8106 12.2017 21.1846 11.146 20.2657 10.3863C19.3468 9.62651 18.1922 9.21008 16.9999 9.20834Z" fill="#A0A0A0"/>
            </g>
            <defs>
            <clipPath id="clip0_57_268">
            <rect width="34" height="34" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </div>
      </div>
      <!-- Filter component -->
      <div class="bg-white grid grid-cols-custom-filter shadow-3xl gap-5 p-4 mb-6 ">
        <div class="flex items-center">
          <span>Filtar por:</span>
        </div>
        <div>
          <div class="flex mb-3">
            <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 14C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13C18 12.7348 17.8946 12.4804 17.7071 12.2929C17.5196 12.1054 17.2652 12 17 12C16.7348 12 16.4804 12.1054 16.2929 12.2929C16.1054 12.4804 16 12.7348 16 13C16 13.2652 16.1054 13.5196 16.2929 13.7071C16.4804 13.8946 16.7348 14 17 14ZM17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17C18 16.7348 17.8946 16.4804 17.7071 16.2929C17.5196 16.1054 17.2652 16 17 16C16.7348 16 16.4804 16.1054 16.2929 16.2929C16.1054 16.4804 16 16.7348 16 17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18ZM13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13ZM13 17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17ZM7 14C7.26522 14 7.51957 13.8946 7.70711 13.7071C7.89464 13.5196 8 13.2652 8 13C8 12.7348 7.89464 12.4804 7.70711 12.2929C7.51957 12.1054 7.26522 12 7 12C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13C6 13.2652 6.10536 13.5196 6.29289 13.7071C6.48043 13.8946 6.73478 14 7 14ZM7 18C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17C8 16.7348 7.89464 16.4804 7.70711 16.2929C7.51957 16.1054 7.26522 16 7 16C6.73478 16 6.48043 16.1054 6.29289 16.2929C6.10536 16.4804 6 16.7348 6 17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18Z" fill="#535353"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7 1.75C7.19891 1.75 7.38968 1.82902 7.53033 1.96967C7.67098 2.11032 7.75 2.30109 7.75 2.5V3.263C8.412 3.25 9.141 3.25 9.943 3.25H14.056C14.859 3.25 15.588 3.25 16.25 3.263V2.5C16.25 2.30109 16.329 2.11032 16.4697 1.96967C16.6103 1.82902 16.8011 1.75 17 1.75C17.1989 1.75 17.3897 1.82902 17.5303 1.96967C17.671 2.11032 17.75 2.30109 17.75 2.5V3.327C18.01 3.347 18.256 3.372 18.489 3.403C19.661 3.561 20.61 3.893 21.359 4.641C22.107 5.39 22.439 6.339 22.597 7.511C22.75 8.651 22.75 10.106 22.75 11.944V14.056C22.75 15.894 22.75 17.35 22.597 18.489C22.439 19.661 22.107 20.61 21.359 21.359C20.61 22.107 19.661 22.439 18.489 22.597C17.349 22.75 15.894 22.75 14.056 22.75H9.944C8.106 22.75 6.65 22.75 5.511 22.597C4.339 22.439 3.39 22.107 2.641 21.359C1.893 20.61 1.561 19.661 1.403 18.489C1.25 17.349 1.25 15.894 1.25 14.056V11.944C1.25 10.106 1.25 8.65 1.403 7.511C1.561 6.339 1.893 5.39 2.641 4.641C3.39 3.893 4.339 3.561 5.511 3.403C5.744 3.372 5.991 3.347 6.25 3.327V2.5C6.25 2.30109 6.32902 2.11032 6.46967 1.96967C6.61032 1.82902 6.80109 1.75 7 1.75ZM5.71 4.89C4.705 5.025 4.125 5.279 3.702 5.702C3.279 6.125 3.025 6.705 2.89 7.711C2.867 7.881 2.848 8.061 2.832 8.25H21.168C21.152 8.06 21.133 7.881 21.11 7.71C20.975 6.705 20.721 6.125 20.298 5.702C19.875 5.279 19.295 5.025 18.289 4.89C17.262 4.752 15.907 4.75 14 4.75H10C8.093 4.75 6.739 4.752 5.71 4.89ZM2.75 12C2.75 11.146 2.75 10.403 2.763 9.75H21.237C21.25 10.403 21.25 11.146 21.25 12V14C21.25 15.907 21.248 17.262 21.11 18.29C20.975 19.295 20.721 19.875 20.298 20.298C19.875 20.721 19.295 20.975 18.289 21.11C17.262 21.248 15.907 21.25 14 21.25H10C8.093 21.25 6.739 21.248 5.71 21.11C4.705 20.975 4.125 20.721 3.702 20.298C3.279 19.875 3.025 19.295 2.89 18.289C2.752 17.262 2.75 15.907 2.75 14V12Z" fill="#535353"/>
            </svg>
            <label>Fecha desde:</label>
          </div>
          <Calendar class="bg-gray-400  rounded p-3 outline-none w-full" v-model="dateTo" dateFormat="dd/mm/yy" showButtonBar />
        </div>
        <div>
          <div class="flex mb-3">
            <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 14C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13C18 12.7348 17.8946 12.4804 17.7071 12.2929C17.5196 12.1054 17.2652 12 17 12C16.7348 12 16.4804 12.1054 16.2929 12.2929C16.1054 12.4804 16 12.7348 16 13C16 13.2652 16.1054 13.5196 16.2929 13.7071C16.4804 13.8946 16.7348 14 17 14ZM17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17C18 16.7348 17.8946 16.4804 17.7071 16.2929C17.5196 16.1054 17.2652 16 17 16C16.7348 16 16.4804 16.1054 16.2929 16.2929C16.1054 16.4804 16 16.7348 16 17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18ZM13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13ZM13 17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17ZM7 14C7.26522 14 7.51957 13.8946 7.70711 13.7071C7.89464 13.5196 8 13.2652 8 13C8 12.7348 7.89464 12.4804 7.70711 12.2929C7.51957 12.1054 7.26522 12 7 12C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13C6 13.2652 6.10536 13.5196 6.29289 13.7071C6.48043 13.8946 6.73478 14 7 14ZM7 18C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17C8 16.7348 7.89464 16.4804 7.70711 16.2929C7.51957 16.1054 7.26522 16 7 16C6.73478 16 6.48043 16.1054 6.29289 16.2929C6.10536 16.4804 6 16.7348 6 17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18Z" fill="#535353"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7 1.75C7.19891 1.75 7.38968 1.82902 7.53033 1.96967C7.67098 2.11032 7.75 2.30109 7.75 2.5V3.263C8.412 3.25 9.141 3.25 9.943 3.25H14.056C14.859 3.25 15.588 3.25 16.25 3.263V2.5C16.25 2.30109 16.329 2.11032 16.4697 1.96967C16.6103 1.82902 16.8011 1.75 17 1.75C17.1989 1.75 17.3897 1.82902 17.5303 1.96967C17.671 2.11032 17.75 2.30109 17.75 2.5V3.327C18.01 3.347 18.256 3.372 18.489 3.403C19.661 3.561 20.61 3.893 21.359 4.641C22.107 5.39 22.439 6.339 22.597 7.511C22.75 8.651 22.75 10.106 22.75 11.944V14.056C22.75 15.894 22.75 17.35 22.597 18.489C22.439 19.661 22.107 20.61 21.359 21.359C20.61 22.107 19.661 22.439 18.489 22.597C17.349 22.75 15.894 22.75 14.056 22.75H9.944C8.106 22.75 6.65 22.75 5.511 22.597C4.339 22.439 3.39 22.107 2.641 21.359C1.893 20.61 1.561 19.661 1.403 18.489C1.25 17.349 1.25 15.894 1.25 14.056V11.944C1.25 10.106 1.25 8.65 1.403 7.511C1.561 6.339 1.893 5.39 2.641 4.641C3.39 3.893 4.339 3.561 5.511 3.403C5.744 3.372 5.991 3.347 6.25 3.327V2.5C6.25 2.30109 6.32902 2.11032 6.46967 1.96967C6.61032 1.82902 6.80109 1.75 7 1.75ZM5.71 4.89C4.705 5.025 4.125 5.279 3.702 5.702C3.279 6.125 3.025 6.705 2.89 7.711C2.867 7.881 2.848 8.061 2.832 8.25H21.168C21.152 8.06 21.133 7.881 21.11 7.71C20.975 6.705 20.721 6.125 20.298 5.702C19.875 5.279 19.295 5.025 18.289 4.89C17.262 4.752 15.907 4.75 14 4.75H10C8.093 4.75 6.739 4.752 5.71 4.89ZM2.75 12C2.75 11.146 2.75 10.403 2.763 9.75H21.237C21.25 10.403 21.25 11.146 21.25 12V14C21.25 15.907 21.248 17.262 21.11 18.29C20.975 19.295 20.721 19.875 20.298 20.298C19.875 20.721 19.295 20.975 18.289 21.11C17.262 21.248 15.907 21.25 14 21.25H10C8.093 21.25 6.739 21.248 5.71 21.11C4.705 20.975 4.125 20.721 3.702 20.298C3.279 19.875 3.025 19.295 2.89 18.289C2.752 17.262 2.75 15.907 2.75 14V12Z" fill="#535353"/>
            </svg>
            <label>Fecha hasta:</label>
          </div>
          <Calendar class="bg-gray-400  rounded p-3 outline-none w-full"  v-model="dateFrom" dateFormat="dd/mm/yy" showButtonBar />
        </div>
        <div class="card flex flex-col justify-content-center">
          <div class="flex mb-3">
            <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3.5 11V14C3.5 17.771 3.5 19.657 4.672 20.828C5.843 22 7.729 22 11.5 22H12.5C16.271 22 18.157 22 19.328 20.828C20.5 19.657 20.5 17.771 20.5 14V11" stroke="#535353" stroke-width="1.5"/>
              <path d="M9.50001 2H14.5L15.152 8.517C15.195 8.95677 15.1454 9.40065 15.0066 9.82013C14.8677 10.2396 14.6426 10.6254 14.3457 10.9526C14.0489 11.2799 13.6868 11.5415 13.2828 11.7204C12.8788 11.8994 12.4419 11.9919 12 11.9919C11.5582 11.9919 11.1212 11.8994 10.7172 11.7204C10.3132 11.5415 9.95114 11.2799 9.65428 10.9526C9.35741 10.6254 9.13231 10.2396 8.99346 9.82013C8.8546 9.40065 8.80505 8.95677 8.84801 8.517L9.50001 2Z" stroke="#535353" stroke-width="1.5"/>
              <path d="M3.33002 5.351C3.50802 4.461 3.59702 4.016 3.77802 3.655C3.96662 3.27904 4.23217 2.94694 4.55743 2.68025C4.88269 2.41356 5.26039 2.21826 5.66602 2.107C6.05602 2 6.51002 2 7.41802 2H9.50002L8.77502 9.245C8.73676 9.65963 8.61428 10.0621 8.41508 10.4277C8.21588 10.7934 7.94414 11.1145 7.61651 11.3715C7.28888 11.6285 6.91225 11.8159 6.50968 11.9223C6.1071 12.0287 5.68706 12.0518 5.27525 11.9901C4.86344 11.9285 4.46853 11.7835 4.11471 11.564C3.76089 11.3445 3.45559 11.0551 3.21751 10.7135C2.97943 10.3718 2.81357 9.98523 2.73009 9.5773C2.64662 9.16936 2.64727 8.74867 2.73202 8.341L3.33002 5.351ZM20.67 5.351C20.492 4.461 20.403 4.016 20.222 3.655C20.0334 3.27904 19.7679 2.94694 19.4426 2.68025C19.1174 2.41356 18.7397 2.21826 18.334 2.107C17.944 2 17.49 2 16.582 2H14.5L15.225 9.245C15.2633 9.65963 15.3858 10.0621 15.585 10.4277C15.7842 10.7934 16.0559 11.1145 16.3835 11.3715C16.7112 11.6285 17.0878 11.8159 17.4904 11.9223C17.8929 12.0287 18.313 12.0518 18.7248 11.9901C19.1366 11.9285 19.5315 11.7835 19.8853 11.564C20.2392 11.3445 20.5445 11.0551 20.7825 10.7135C21.0206 10.3718 21.1865 9.98523 21.27 9.5773C21.3534 9.16936 21.3528 8.74867 21.268 8.341L20.67 5.351Z" stroke="#535353" stroke-width="1.5"/>
              <path d="M9.5 21.5V18.5C9.5 17.565 9.5 17.098 9.701 16.75C9.83265 16.522 10.022 16.3326 10.25 16.201C10.598 16 11.065 16 12 16C12.935 16 13.402 16 13.75 16.201C13.978 16.3326 14.1674 16.522 14.299 16.75C14.5 17.098 14.5 17.565 14.5 18.5V21.5" stroke="#535353" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <label>Surcusal</label>
          </div>
          <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Todas las sucursales" class="w-full bg-gray-400 rounded " />
        </div>
        <div class="flex items-end justify-center text-center">
          <Button :disabled="disableButtom" @click="filter" icon="pi pi-search" class="bg-orange-900 w-full rounded-none py-3 px-5 text-md  text-white" label="Buscar" />

        </div>
      </div>

      <!-- Columns -->
      <div class="grid grid-cols-custom052 gap-4">
        <div class="bg-primary-400 p-4 h-65vh overflow-y-scroll main-scrollbar column-red">
          <div class="flex justify-between items-center mb-4">
            <Button @click="active = 0" rounded label="Comercial" :outlined="active !== 0" class="bg-primary-500 font-medium text-primary-900  rounded-full p-2 text-2xs"/>
            <Button @click="active = 1" rounded label="Proceso" :outlined="active !== 1" class=" mx-1 bg-primary-500 font-medium text-primary-900 rounded-full p-2 text-2xs text-gray-800 " />
            <Button @click="active = 2" rounded label="Concepto" :outlined="active !== 2" class="bg-primary-500 font-medium text-primary-900 rounded-full p-2 text-2xs text-gray-800"/>
          </div>

          <TabView v-model:activeIndex="active">
            <TabPanel>
              <!-- CHECKBOXS -->
              <div class="bg-white p-4 mb-4 rounded-lg h-20vh overflow-y-scroll main-scrollbar ">
                  <div v-for="group of uniqueGroups" :key="group" class="flex items-center">
                      <Checkbox class="mr-2 mb-4 custom-checkbox" v-model="selectedGroup" :inputId="group.key" name="group" :value="group.name" />
                      <label class="pb-3 text-sm" :for="group.key">{{ group.name }}</label>
                  </div>
              </div>
              <!-- CHECKBOXS -->
              <p class="text-gray-900 mb-3 font-medium text-sm">Indicadores</p>
              <div class="bg-white mb-4 p-4 rounded-lg h-20vh overflow-y-scroll main-scrollbar ">
                  <div v-for="indicator of uniqueIndicators" :key="indicator.key" class="flex items-center">
                      <Checkbox class="mr-2 mb-4 custom-checkbox" v-model="selectedIndicator" :inputId="indicator.key" name="indicator" :value="indicator.name" />
                      <label class="pb-3 text-sm" :for="indicator.key">{{ indicator.name }}</label>
                  </div>
              </div>

              <div>
                <p class="text-gray-900 mb-3 font-medium text-sm">Niveles de urgencia</p>
                <div class="mb-2 flex justify-center">
                    <span class="text-gray-800 text-medium text-sm">{{ value[0] }} - {{ value[1] }}</span>
                  </div>
                <div class="slider-container">
                  <Slider v-model="value" range class="custom-slider" />
                
                </div>
                <div class="flex justify-between mt-2">
                  <div class="text-gray-800 text-medium text-sm">Bajo</div>
                  <div class="text-gray-800 text-medium text-sm">Medio</div>
                  <div class="text-gray-800 text-medium text-sm">Alto</div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <!-- CHECKBOXS -->
              <div class="bg-white p-4 mb-4 rounded-lg h-20vh overflow-y-scroll main-scrollbar ">
                <div v-for="group of uniqueGroups" :key="group" class="flex items-center">
                    <Checkbox class="mr-2 mb-4 custom-checkbox" v-model="selectedGroup" :inputId="group.key" name="group" :value="group.name" />
                    <label class="pb-3 text-sm" :for="group.key">{{ group.name }}</label>
                </div>
            </div>
            <!-- CHECKBOXS -->
            <p class="text-gray-900 mb-3 font-medium text-sm">Indicadores</p>
            <div class="bg-white mb-4 p-4 rounded-lg h-20vh overflow-y-scroll main-scrollbar ">
                <div v-for="indicator of uniqueIndicators" :key="indicator.key" class="flex items-center">
                    <Checkbox class="mr-2 mb-4 custom-checkbox" v-model="selectedIndicator" :inputId="indicator.key" name="indicator" :value="indicator.name" />
                    <label class="pb-3 text-sm" :for="indicator.key">{{ indicator.name }}</label>
                </div>
            </div>

            <div>
              <p class="text-gray-900 mb-3 font-medium text-sm">Niveles de urgencia</p>
              <div class="mb-2 flex justify-center">
                  <span class="text-gray-800 text-medium text-sm">{{ value[0] }} - {{ value[1] }}</span>
                </div>
              <div class="slider-container">
                <Slider v-model="value" range class="custom-slider" />
              
              </div>
              <div class="flex justify-between mt-2">
                <div class="text-gray-800 text-medium text-sm">Bajo</div>
                <div class="text-gray-800 text-medium text-sm">Medio</div>
                <div class="text-gray-800 text-medium text-sm">Alto</div>
              </div>
            </div>
            </TabPanel>
            <TabPanel>
            <!-- CHECKBOXS -->
              <div class="bg-white p-4 mb-4 rounded-lg h-20vh overflow-y-scroll main-scrollbar ">
                <div v-for="group of uniqueGroups" :key="group" class="flex items-center">
                    <Checkbox class="mr-2 mb-4 custom-checkbox" v-model="selectedGroup" :inputId="group.key" name="group" :value="group.name" />
                    <label class="pb-3 text-sm" :for="group.key">{{ group.name }}</label>
                </div>
            </div>
            <!-- CHECKBOXS -->
            <p class="text-gray-900 mb-3 font-medium text-sm">Indicadores</p>
            <div class="bg-white mb-4 p-4 rounded-lg h-20vh overflow-y-scroll main-scrollbar ">
                <div v-for="indicator of uniqueIndicators" :key="indicator.key" class="flex items-center">
                    <Checkbox class="mr-2 mb-4 custom-checkbox" v-model="selectedIndicator" :inputId="indicator.key" name="indicator" :value="indicator.name" />
                    <label class="pb-3 text-sm" :for="indicator.key">{{ indicator.name }}</label>
                </div>
            </div>

            <div>
              <p class="text-gray-900 mb-3 font-medium text-sm">Niveles de urgencia</p>
              <div class="mb-2 flex justify-center">
                  <span class="text-gray-800 text-medium text-sm">{{ value[0] }} - {{ value[1] }}</span>
                </div>
              <div class="slider-container">
                <Slider v-model="value" range class="custom-slider" />
              
              </div>
              <div class="flex justify-between mt-2">
                <div class="text-gray-800 text-medium text-sm">Bajo</div>
                <div class="text-gray-800 text-medium text-sm">Medio</div>
                <div class="text-gray-800 text-medium text-sm">Alto</div>
              </div>
            </div>
            </TabPanel>
        </TabView>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <!-- columns -->
          <div class="bg-red-100 p-4 h-65vh overflow-y-scroll main-scrollbar column-red">
            <!-- Cards -->
            <div v-for="item in dataEmergency" class="bg-white rounded-md p-4 h-fit mb-4 ">
              <router-link :to="{ name: 'zonas'}">
                <p class="flex justify-between items-center mb-4">
                  <span class="custom-icon-quare mr-3 bg-red-900">
                  </span>
                  <span class="text-gray-900 font-semibold font-inter text-sm uppercase">{{ item.name }}</span>
                  <Tag class="font-normal  uppercase text-xs rounded" value="urgente" severity="danger"></Tag>
                </p>
                <div class="flex justify-between items-center">
                  <div class="w-10/12">
                    <ProgressBar  class="h-2" :value="item.average"></ProgressBar>
                    
                  </div>
                  <div class="text-center text-red-900 font-semibold">{{ item.average }}%</div>
                </div>
                <div class="grid grid-cols-2 mt-2">
                  <dl>
                    <dt class="font-medium text-sm">Mes anterior:</dt>
                    <dd class="text-2xs text-gray-200">Monto: {{item.monthOld.amount}}</dd>
                    <dd class="text-2xs text-gray-200">Cantidad: {{item.monthOld.qty }}.</dd>
                  </dl>
                  <dl>
                    <dt class="font-medium text-sm">Mes actual:</dt>
                    <dd class="text-2xs text-gray-200">Monto: {{item.monthNew.amount}}</dd>
                    <dd class="text-2xs text-gray-200">Cantidad: {{item.monthNew.qty }}.</dd>
                  </dl>
                </div>
              </router-link>
              </div>
          </div>
          <!-- columns -->
          <div class="bg-orange-100 p-4  h-65vh overflow-y-scroll main-scrollbar  column-orange">
            <!-- Cards -->
            <div  v-for="item in dataWarning" class="bg-white rounded-md p-4 h-fit  mb-4">
              <router-link :to="{ name: 'zonas'}">
              <p class="flex justify-between items-center mb-4">
                <span class="custom-icon-quare mr-3 bg-orange-400">
                </span>
                <span class="text-gray-900 font-semibold font-inter text-sm uppercase">{{ item.name }}</span>
                <!-- no content -->
                <div></div>
              </p>
              <div class="flex justify-between items-center">
                <div class="w-10/12">
                  <ProgressBar  class="h-2" :value="item.average"></ProgressBar>
                  
                </div>
                <div class="text-center text-orange-400 font-semibold">{{ item.average }}%</div>
              </div>
              <div class="grid grid-cols-2 mt-2">
                <dl>
                  <dt class="font-medium text-sm">Mes anterior:</dt>
                  <dd class="text-2xs text-gray-200">Monto: {{item.monthOld.amount}}</dd>
                  <dd class="text-2xs text-gray-200">Cantidad: {{item.monthOld.qty }}.</dd>
                </dl>
                <dl>
                  <dt class="font-medium text-sm">Mes actual:</dt>
                  <dd class="text-2xs text-gray-200">Monto: {{item.monthNew.amount}}</dd>
                  <dd class="text-2xs text-gray-200">Cantidad: {{item.monthNew.qty }}.</dd>
                </dl>
              </div>
            </router-link>
            </div>
          </div>
          <!-- columns -->
          <div class="bg-green-100 p-4  h-65vh overflow-y-scroll main-scrollbar  column-green">
            <!-- Cards -->
            <div v-for="item in dataInfo" class="bg-white rounded-md p-4 h-fit  mb-4">
              <router-link :to="{ name: 'zonas'}">
              <p class="flex justify-between items-center mb-4">
                <span class="custom-icon-quare mr-3 bg-green-900">
                </span>
                <span class="text-gray-900 font-semibold font-inter text-sm uppercase">{{ item.name }}</span>
                <!-- no content -->
                <span></span>
              </p>
              <div class="flex justify-between items-center">
                <div class="w-10/12">
                  <ProgressBar  class="h-2" :value="item.average"></ProgressBar>
                  
                </div>
                <div class="text-center text-green-900 font-semibold">{{ item.average }}%</div>
              </div>
              <div class="grid grid-cols-2 mt-2">
                <dl>
                  <dt class="font-medium text-sm text-green-900">Mes anterior:</dt>
                  <dd class="text-2xs text-gray-200">Monto: {{item.monthOld.amount}}</dd>
                  <dd class="text-2xs text-gray-200">Cantidad: {{item.monthOld.qty }}.</dd>
                </dl>
                <dl>
                  <dt class="font-medium text-sm  text-green-900">Mes actual:</dt>
                  <dd class="text-2xs text-gray-200">Monto: {{item.monthNew.amount}}</dd>
                  <dd class="text-2xs text-gray-200">Cantidad: {{item.monthNew.qty }}.</dd>
                </dl>
              </div>
            </router-link>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sidebar -->
  <Sidebar v-model:visible="visibleRight" position="right" class="sidebar-info w-4/12">
    <template #header>

        <p class="font-medium text-md text-900">Guía informativa:</p>
    </template>
    <div>
      <div class="bg-white h-90vh overflow-y-scroll main-scrollbar px-6 py-3">
        <!-- card -->
        <Card v-for="guide in guideInform" class="bg-white pt-2 pb-5 h-fit rounded-lg mb-4 shadow-3xl">
          <template #title>
            <p class="flex items-center mb-2">
              <span :class="['h-4 w-4 rounded-full flex mr-2', guide.color ]"></span>
              <span class="text-gray-900 font-semibold font-inter text-sm">{{ guide.name }}</span>
            </p>
          </template>
          <template #content>
            <p class="text-gray-200 text-sm ">
              {{ guide.description }}
            </p>
          </template>
        </Card>
        <!-- card -->
      </div>
    </div>
  </Sidebar>
</template>
 
 
<script>
import {defineAsyncComponent,onBeforeMount,ref, watch  } from 'vue'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'
import Sidebar from 'primevue/sidebar'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Slider from 'primevue/slider';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import { zones } from '../data/zones.js'
import { guide } from '../data/guide-informative.js'
import { indicators } from '../data/indicators.js'
import { isWithinInterval, parse, format } from 'date-fns';
import { es } from 'date-fns/locale';

export default{
  components: {
      Navbar: defineAsyncComponent( () => import('../components/Navbar.vue')),
      Button,
      Calendar,
      Dropdown,
      Tag,
      ProgressBar,
      Sidebar,
      Card,
      Checkbox,
      Slider,
      TabView,
      TabPanel
  },
  setup(){
    const selectedCity = ref();
    const cities = ref(zones.value);
    const dateTo = ref('01/11/2023');
    const dateFrom = ref('30/11/2023');
    const visibleRight = ref(false);
    const progressValue = ref(50);
    const allData = ref(indicators.value)
    const allDataFilterByDate = ref([])
    const data = ref(indicators.value)
    const dataEmergency = ref( data.value.filter(item => item.groupBy === 'emergency'))
    const dataWarning = ref( data.value.filter(item => item.groupBy === 'warning'))
    const dataInfo = ref( data.value.filter(item => item.groupBy === 'info'))
    const active = ref(0);
    const guideInform = ref(guide.value)

    const loadGroup = () => {
      return data.value.reduce((acc, indicator) => {
        const sanitizedGroupName = indicator.type.charAt(0).toUpperCase() + indicator.type.slice(1);
        const sanitizedGroupKey = sanitizedGroupName.replace(/\s+/g, '-');
        const existingGroup = acc.find(item => item.key === sanitizedGroupKey);
        if (!existingGroup) {
            acc.push({ name: sanitizedGroupName, key: sanitizedGroupKey });
        }

        return acc;
      }, [])
    }

    const loadIndicator = () => {
      return data.value.reduce((acc, indicator) => {
        const sanitizedGroupName = indicator.name.charAt(0).toUpperCase() + indicator.name.slice(1).toLowerCase();
        const sanitizedGroupKey = sanitizedGroupName.replace(/\s+/g, '-');
        const existingGroup = acc.find(item => item.key === sanitizedGroupKey);
        if (!existingGroup) {
          acc.push({ name: sanitizedGroupName, key: sanitizedGroupKey });
        }
        
        return acc;
      }, [])
    }
    const uniqueGroups = ref(loadGroup());
    const uniqueIndicators = ref(loadIndicator());
    const selectedGroup = ref([]);
    const selectedIndicator = ref([]);
    const value = ref([20, 80]);
    const disableButtom = ref(false);

    const formatAndSetLocalStorage = (date, key) => {
      const formattedDate = formatDateFilter(date.value);
      localStorage.setItem(key, formatDate(formattedDate));
      return formattedDate;
    };

    onBeforeMount(() => {
      
      const dateTo = ref(localStorage.getItem('dateTo') ?? '01/11/2023');
      const dateFrom = ref(localStorage.getItem('dateFrom') ?? '30/11/2023');

      dateTo.value = formatAndSetLocalStorage(dateTo, 'dateTo');
      dateFrom.value = formatAndSetLocalStorage(dateFrom, 'dateFrom');

      filterOrders(dateTo.value, dateFrom.value);
    });

    const formatDateFilter = (fechaString) => {
      return parse(fechaString, 'dd/MM/yyyy', new Date());
    };

    // Método para formatear un objeto de fecha en el formato deseado
    const formatDate = (fecha) => {
      return format(fecha, 'dd/MM/yyyy', { locale: es });
    };

    const formatLongDate = (dateString) => {
      // Intentar parsear la fecha
      const date = parse(dateString, 'dd/MM/yyyy', new Date());

      console.log(date)

      // Verificar si la date ya está en formato largo
      const isLongDate = date.toString() !== 'Invalid Date';

      // Si es date larga, devolver la date original
      if (!isLongDate) {
        return dateString;
      }

      // Si no es date larga, formatearla en formato largo
      return date;
    };


    const filter = () => {
      const formattedDateTo = formatLongDate(dateTo.value);
      const formattedDateFrom = formatLongDate(dateFrom.value);

      localStorage.setItem('dateTo', formatDate(formattedDateTo))
      localStorage.setItem('dateFrom', formatDate(formattedDateFrom))

      filterOrders(formattedDateTo, formattedDateFrom);
    };
   
    function filterOrders(dateTo, dateFrom) {
      let result = filterOrdersByDateRange([dateTo, dateFrom], allData.value)
      
      if(result.length > 0){
        data.value = result
      }else{
        data.value = allData.value
      }
      allDataFilterByDate.value = data.value
      uniqueIndicators.value = loadIndicator();
    }

    function filterOrdersByDateRange(dates, data) {
      return data.filter(item => {
        const orderDate = new Date(item.dateCreated);
        const start = new Date(dates[0]);
        const end = new Date(dates[1]);
        
        orderDate.setUTCHours(0, 0, 0, 0);
        start.setUTCHours(0, 0, 0, 0);
        end.setUTCHours(0, 0, 0, 0);

        return isWithinInterval(orderDate, { start, end });
      });
    }

    watch(
      () => [dateTo.value, dateFrom.value],
      () => {
        const isDatesValid = dateTo.value !== null && dateFrom.value !== null;
        disableButtom.value = !isDatesValid;
      }
    )

    watch(
      () => data.value,
      (value) => {
        dataEmergency.value = value.filter(item => item.groupBy === 'emergency')
        dataWarning.value = value.filter(item => item.groupBy === 'warning')
        dataInfo.value = value.filter(item => item.groupBy === 'info')
        // uniqueIndicators.value = loadIndicator();
      }
    )

    watch(
      () => selectedGroup.value,
      (value) => {
    
        if(value.length > 0){
          data.value = allDataFilterByDate.value.filter(item => {
            let name = item.type.charAt(0).toUpperCase() + item.type.slice(1)
            return Object.values(value).includes(name)
          })
        }else{
          data.value = allDataFilterByDate.value
        }
        uniqueIndicators.value = loadIndicator();
      }
    )

    watch(
      () => selectedIndicator.value,
      (value) => {

        if(value.length > 0){
          data.value = allDataFilterByDate.value.filter(item => {
            let name = item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase();
            return Object.values(value).includes(name)
          })
        }else{
          if(Object.values(selectedGroup.value).length == 0){
            data.value = allDataFilterByDate.value
          }else{
            data.value = allDataFilterByDate.value.filter(item => {
            let name = item.type.charAt(0).toUpperCase() + item.type.slice(1)
            return Object.values(selectedGroup.value).includes(name)
          })
          }
        }
      }
    )

    return{
      selectedCity,
      cities,
      visibleRight,
      progressValue,
      selectedGroup,
      selectedIndicator,
      value,
      dateTo,
      dateFrom,
      dataEmergency,
      dataWarning,
      dataInfo,
      uniqueGroups,
      uniqueIndicators,
      disableButtom,
      filter,
      active,
      guideInform
    }
  }
}
</script>
<style scope>
  .p-tabview-nav{
    display: none;
  }
  .p-tabview-panels{
    @apply !bg-primary-400;
    @apply !p-0;
  }
</style>