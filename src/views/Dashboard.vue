<template>
  <Navbar :name="'Dashboard'"/>
  <div class="bg-gray-100 pb-6 h-90vh overflow-y-scroll main-scrollbar container-dashboard">
    <div class="max-w-medium w-1920 m-0-auto ">
      <div class="grid grid-cols-3 gap-4 pt-10 pb-4">
        <div class="bg-white px-8 py-8 shadow-3xl rounded-md flex flex-col justify-around">
          <div class="grid grid-cols-2 mb-8">
            <span class="text-gray-900 font-semibold font-inter text-sm uppercase flex items-center">
              VENTAS MARGEN NEGATIVO
            </span>
            <div class="flex justify-end">
              <!-- <Button class="mr-4"  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <path d="M21.5306 10.2806L17.0306 14.7806C16.8899 14.9213 16.699 15.0004 16.5 15.0004C16.301 15.0004 16.1101 14.9213 15.9694 14.7806C15.8286 14.6399 15.7496 14.449 15.7496 14.25C15.7496 14.051 15.8286 13.8601 15.9694 13.7194L19.1897 10.5H15.4688C13.6394 10.4995 11.8617 11.107 10.4153 12.2271C8.96889 13.3472 7.93578 14.9162 7.47844 16.6875C7.42871 16.8802 7.30447 17.0452 7.13305 17.1463C6.96163 17.2474 6.75707 17.2763 6.56437 17.2266C6.37168 17.1768 6.20663 17.0526 6.10554 16.8812C6.00444 16.7097 5.97558 16.5052 6.02531 16.3125C6.56495 14.2186 7.78571 12.3637 9.49537 11.0398C11.205 9.71596 13.3064 8.99835 15.4688 8.99999H19.1916L15.9694 5.78061C15.8997 5.71093 15.8444 5.62821 15.8067 5.53716C15.769 5.44612 15.7496 5.34854 15.7496 5.24999C15.7496 5.15144 15.769 5.05386 15.8067 4.96282C15.8444 4.87177 15.8997 4.78905 15.9694 4.71936C16.1101 4.57863 16.301 4.49957 16.5 4.49957C16.5985 4.49957 16.6961 4.51898 16.7872 4.55669C16.8782 4.59441 16.9609 4.64968 17.0306 4.71936L21.5306 9.21936C21.6004 9.28902 21.6557 9.37174 21.6934 9.46278C21.7312 9.55383 21.7506 9.65143 21.7506 9.74999C21.7506 9.84855 21.7312 9.94615 21.6934 10.0372C21.6557 10.1282 21.6004 10.211 21.5306 10.2806ZM18 19.5H3.75V8.24999C3.75 8.05108 3.67098 7.86031 3.53033 7.71966C3.38968 7.57901 3.19891 7.49999 3 7.49999C2.80109 7.49999 2.61032 7.57901 2.46967 7.71966C2.32902 7.86031 2.25 8.05108 2.25 8.24999V19.5C2.25 19.8978 2.40804 20.2793 2.68934 20.5606C2.97064 20.842 3.35218 21 3.75 21H18C18.1989 21 18.3897 20.921 18.5303 20.7803C18.671 20.6397 18.75 20.4489 18.75 20.25C18.75 20.0511 18.671 19.8603 18.5303 19.7197C18.3897 19.579 18.1989 19.5 18 19.5Z" fill="#535353"/>
                      </svg>
                  </Button>
                  <Button >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="#535353"/>
                      </svg>
                  </Button> -->
            </div>
          </div>
          <div class="chart-container ">
            <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
          </div>
          <div class="grid grid-cols-1 gap-3">
            <DataTable tableClass="custom-table-blue" :value="data1Right">
              <Column field="month" header="Mes"></Column>
              <Column field="qty" header="Cant."></Column>
              <Column field="sale" header="Monto"></Column>
              <Column field="count" header="Costo"></Column>
              <Column field="amount" header="Margen"></Column>
            </DataTable>
          </div>
        </div>
        <div class="bg-white px-8 py-8 shadow-3xl rounded-md flex flex-col justify-around">
          <div class="grid grid-cols-2 mb-8">
            <span class="text-gray-900 font-semibold font-inter text-sm uppercase flex items-center">
              NOTAS DE CRÉDITOS MAYOR AL DOCUMENTO DE VENTA
            </span>
            <div class="flex justify-end">
              <!-- <Button class="mr-4"  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <path d="M21.5306 10.2806L17.0306 14.7806C16.8899 14.9213 16.699 15.0004 16.5 15.0004C16.301 15.0004 16.1101 14.9213 15.9694 14.7806C15.8286 14.6399 15.7496 14.449 15.7496 14.25C15.7496 14.051 15.8286 13.8601 15.9694 13.7194L19.1897 10.5H15.4688C13.6394 10.4995 11.8617 11.107 10.4153 12.2271C8.96889 13.3472 7.93578 14.9162 7.47844 16.6875C7.42871 16.8802 7.30447 17.0452 7.13305 17.1463C6.96163 17.2474 6.75707 17.2763 6.56437 17.2266C6.37168 17.1768 6.20663 17.0526 6.10554 16.8812C6.00444 16.7097 5.97558 16.5052 6.02531 16.3125C6.56495 14.2186 7.78571 12.3637 9.49537 11.0398C11.205 9.71596 13.3064 8.99835 15.4688 8.99999H19.1916L15.9694 5.78061C15.8997 5.71093 15.8444 5.62821 15.8067 5.53716C15.769 5.44612 15.7496 5.34854 15.7496 5.24999C15.7496 5.15144 15.769 5.05386 15.8067 4.96282C15.8444 4.87177 15.8997 4.78905 15.9694 4.71936C16.1101 4.57863 16.301 4.49957 16.5 4.49957C16.5985 4.49957 16.6961 4.51898 16.7872 4.55669C16.8782 4.59441 16.9609 4.64968 17.0306 4.71936L21.5306 9.21936C21.6004 9.28902 21.6557 9.37174 21.6934 9.46278C21.7312 9.55383 21.7506 9.65143 21.7506 9.74999C21.7506 9.84855 21.7312 9.94615 21.6934 10.0372C21.6557 10.1282 21.6004 10.211 21.5306 10.2806ZM18 19.5H3.75V8.24999C3.75 8.05108 3.67098 7.86031 3.53033 7.71966C3.38968 7.57901 3.19891 7.49999 3 7.49999C2.80109 7.49999 2.61032 7.57901 2.46967 7.71966C2.32902 7.86031 2.25 8.05108 2.25 8.24999V19.5C2.25 19.8978 2.40804 20.2793 2.68934 20.5606C2.97064 20.842 3.35218 21 3.75 21H18C18.1989 21 18.3897 20.921 18.5303 20.7803C18.671 20.6397 18.75 20.4489 18.75 20.25C18.75 20.0511 18.671 19.8603 18.5303 19.7197C18.3897 19.579 18.1989 19.5 18 19.5Z" fill="#535353"/>
                      </svg>
                  </Button>
                  <Button >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="#535353"/>
                      </svg>
                  </Button> -->
            </div>
          </div>
          <div class="chart-container ">
            <Chart type="bar" :data="chartData2" :options="chartOptions2" class="h-30rem" />

          </div>
          <DataTable tableClass="custom-table-variable" :value="data2">
            <Column field="reason" header="Mes"></Column>
            <Column field="jan" header="VENTA"></Column>
            <Column field="feb" header="NOTAS DE CRÉDITO"></Column>
            <Column field="mar" header="PÉRDIDA"></Column>
          </DataTable>
        </div>
        <div class="bg-white px-8 py-8 shadow-3xl rounded-md flex flex-col justify-around">
          <div class="grid grid-cols-2 mb-8">
            <span class="text-gray-900 font-semibold font-inter text-sm uppercase flex items-center">
              PERDIDAS DE INVENTARIOS 
            </span>
            <div class="flex justify-end">
              <!-- <Button class="mr-4"  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <path d="M21.5306 10.2806L17.0306 14.7806C16.8899 14.9213 16.699 15.0004 16.5 15.0004C16.301 15.0004 16.1101 14.9213 15.9694 14.7806C15.8286 14.6399 15.7496 14.449 15.7496 14.25C15.7496 14.051 15.8286 13.8601 15.9694 13.7194L19.1897 10.5H15.4688C13.6394 10.4995 11.8617 11.107 10.4153 12.2271C8.96889 13.3472 7.93578 14.9162 7.47844 16.6875C7.42871 16.8802 7.30447 17.0452 7.13305 17.1463C6.96163 17.2474 6.75707 17.2763 6.56437 17.2266C6.37168 17.1768 6.20663 17.0526 6.10554 16.8812C6.00444 16.7097 5.97558 16.5052 6.02531 16.3125C6.56495 14.2186 7.78571 12.3637 9.49537 11.0398C11.205 9.71596 13.3064 8.99835 15.4688 8.99999H19.1916L15.9694 5.78061C15.8997 5.71093 15.8444 5.62821 15.8067 5.53716C15.769 5.44612 15.7496 5.34854 15.7496 5.24999C15.7496 5.15144 15.769 5.05386 15.8067 4.96282C15.8444 4.87177 15.8997 4.78905 15.9694 4.71936C16.1101 4.57863 16.301 4.49957 16.5 4.49957C16.5985 4.49957 16.6961 4.51898 16.7872 4.55669C16.8782 4.59441 16.9609 4.64968 17.0306 4.71936L21.5306 9.21936C21.6004 9.28902 21.6557 9.37174 21.6934 9.46278C21.7312 9.55383 21.7506 9.65143 21.7506 9.74999C21.7506 9.84855 21.7312 9.94615 21.6934 10.0372C21.6557 10.1282 21.6004 10.211 21.5306 10.2806ZM18 19.5H3.75V8.24999C3.75 8.05108 3.67098 7.86031 3.53033 7.71966C3.38968 7.57901 3.19891 7.49999 3 7.49999C2.80109 7.49999 2.61032 7.57901 2.46967 7.71966C2.32902 7.86031 2.25 8.05108 2.25 8.24999V19.5C2.25 19.8978 2.40804 20.2793 2.68934 20.5606C2.97064 20.842 3.35218 21 3.75 21H18C18.1989 21 18.3897 20.921 18.5303 20.7803C18.671 20.6397 18.75 20.4489 18.75 20.25C18.75 20.0511 18.671 19.8603 18.5303 19.7197C18.3897 19.579 18.1989 19.5 18 19.5Z" fill="#535353"/>
                      </svg>
                  </Button>
                  <Button >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="#535353"/>
                      </svg>
                  </Button> -->
            </div>
          </div>
          <div class="chart-container ">
            <Chart type="bar" :data="chartData3" :options="chartOptions3" class="h-30rem" />
          </div>
          <DataTable tableClass="custom-table-variable" :value="data3">
            <Column field="type" header="Tipo ajuste"></Column>
            <Column field="ago" header="AGO"></Column>
            <Column field="sep" header="SEP"></Column>
            <Column field="oct" header="OCT"></Column>
          </DataTable>
        </div>
      </div>
      <div class="grid grid-cols-custom211 gap-4">
        <div class="bg-white px-8 py-8 shadow-3xl rounded-md flex flex-col justify-around">
          <div class="grid grid-cols-2 mb-3">
            <span class="text-gray-900 font-semibold font-inter text-sm uppercase flex items-center">
              % de uso de panel de control
            </span>
            <div class="flex justify-end">
              <!-- <Button class="mr-4"  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <path d="M21.5306 10.2806L17.0306 14.7806C16.8899 14.9213 16.699 15.0004 16.5 15.0004C16.301 15.0004 16.1101 14.9213 15.9694 14.7806C15.8286 14.6399 15.7496 14.449 15.7496 14.25C15.7496 14.051 15.8286 13.8601 15.9694 13.7194L19.1897 10.5H15.4688C13.6394 10.4995 11.8617 11.107 10.4153 12.2271C8.96889 13.3472 7.93578 14.9162 7.47844 16.6875C7.42871 16.8802 7.30447 17.0452 7.13305 17.1463C6.96163 17.2474 6.75707 17.2763 6.56437 17.2266C6.37168 17.1768 6.20663 17.0526 6.10554 16.8812C6.00444 16.7097 5.97558 16.5052 6.02531 16.3125C6.56495 14.2186 7.78571 12.3637 9.49537 11.0398C11.205 9.71596 13.3064 8.99835 15.4688 8.99999H19.1916L15.9694 5.78061C15.8997 5.71093 15.8444 5.62821 15.8067 5.53716C15.769 5.44612 15.7496 5.34854 15.7496 5.24999C15.7496 5.15144 15.769 5.05386 15.8067 4.96282C15.8444 4.87177 15.8997 4.78905 15.9694 4.71936C16.1101 4.57863 16.301 4.49957 16.5 4.49957C16.5985 4.49957 16.6961 4.51898 16.7872 4.55669C16.8782 4.59441 16.9609 4.64968 17.0306 4.71936L21.5306 9.21936C21.6004 9.28902 21.6557 9.37174 21.6934 9.46278C21.7312 9.55383 21.7506 9.65143 21.7506 9.74999C21.7506 9.84855 21.7312 9.94615 21.6934 10.0372C21.6557 10.1282 21.6004 10.211 21.5306 10.2806ZM18 19.5H3.75V8.24999C3.75 8.05108 3.67098 7.86031 3.53033 7.71966C3.38968 7.57901 3.19891 7.49999 3 7.49999C2.80109 7.49999 2.61032 7.57901 2.46967 7.71966C2.32902 7.86031 2.25 8.05108 2.25 8.24999V19.5C2.25 19.8978 2.40804 20.2793 2.68934 20.5606C2.97064 20.842 3.35218 21 3.75 21H18C18.1989 21 18.3897 20.921 18.5303 20.7803C18.671 20.6397 18.75 20.4489 18.75 20.25C18.75 20.0511 18.671 19.8603 18.5303 19.7197C18.3897 19.579 18.1989 19.5 18 19.5Z" fill="#535353"/>
                      </svg>
                  </Button>
                  <Button >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="#535353"/>
                      </svg>
                  </Button> -->
            </div>
          </div>
          <!-- table -->
          <!-- <div class="grid grid-cols-2 mb-5">
            <dl>
              <dd class="text-2xs text-gray-200">Productos: $100.00</dd>
              <dd class="text-2xs text-gray-200">Financiamiento: 100 unid.</dd>
            </dl>
            <dl>
              <dd class="text-2xs text-gray-200">Orden: $100.00</dd>
              <dd class="text-2xs text-gray-200">Planes: 100 unid.</dd>
            </dl>
          </div> -->
          <!-- Graps -->
          <div class="grid grid-cols-custom21 gap-4 mb-3">
            <div class="chart-container flex justify-center" :style="{border: '1px solid #dddddd'}">
              <Chart type="doughnut" :data="chartData4" :options="chartOptions4" class="custom-doughnut-chart" /> 
            </div>
            <div  class="flex justify-center items-center" :style="{border: '1px solid #dddddd'}">
              <p class="text-gray-200 flex flex-col items-center font-medium text-2xs">
                <span class="uppercase">Conexiones</span>
                <strong class="text-primary-900 text-md">719</strong>
                hras/hombre
              </p>
            </div>
          </div>

          <!-- table -->
          <DataTable tableClass="custom-table" :value="data4">
            <Column field="process" header="Proceso"></Column>
            <Column field="description" header="Descripción"></Column>
            <Column field="connections" header="Conexiones"></Column>
          </DataTable>
        </div>
        <div class="bg-white px-8 py-8 shadow-3xl rounded-md flex flex-col justify-around">
          <div class="grid grid-cols-2 mb-3">
            <span class="text-gray-900 font-semibold font-inter text-sm uppercase flex items-center">
              Anulación de documento
            </span>
            <div class="flex justify-end">
              <!-- <Button class="mr-4"  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <path d="M21.5306 10.2806L17.0306 14.7806C16.8899 14.9213 16.699 15.0004 16.5 15.0004C16.301 15.0004 16.1101 14.9213 15.9694 14.7806C15.8286 14.6399 15.7496 14.449 15.7496 14.25C15.7496 14.051 15.8286 13.8601 15.9694 13.7194L19.1897 10.5H15.4688C13.6394 10.4995 11.8617 11.107 10.4153 12.2271C8.96889 13.3472 7.93578 14.9162 7.47844 16.6875C7.42871 16.8802 7.30447 17.0452 7.13305 17.1463C6.96163 17.2474 6.75707 17.2763 6.56437 17.2266C6.37168 17.1768 6.20663 17.0526 6.10554 16.8812C6.00444 16.7097 5.97558 16.5052 6.02531 16.3125C6.56495 14.2186 7.78571 12.3637 9.49537 11.0398C11.205 9.71596 13.3064 8.99835 15.4688 8.99999H19.1916L15.9694 5.78061C15.8997 5.71093 15.8444 5.62821 15.8067 5.53716C15.769 5.44612 15.7496 5.34854 15.7496 5.24999C15.7496 5.15144 15.769 5.05386 15.8067 4.96282C15.8444 4.87177 15.8997 4.78905 15.9694 4.71936C16.1101 4.57863 16.301 4.49957 16.5 4.49957C16.5985 4.49957 16.6961 4.51898 16.7872 4.55669C16.8782 4.59441 16.9609 4.64968 17.0306 4.71936L21.5306 9.21936C21.6004 9.28902 21.6557 9.37174 21.6934 9.46278C21.7312 9.55383 21.7506 9.65143 21.7506 9.74999C21.7506 9.84855 21.7312 9.94615 21.6934 10.0372C21.6557 10.1282 21.6004 10.211 21.5306 10.2806ZM18 19.5H3.75V8.24999C3.75 8.05108 3.67098 7.86031 3.53033 7.71966C3.38968 7.57901 3.19891 7.49999 3 7.49999C2.80109 7.49999 2.61032 7.57901 2.46967 7.71966C2.32902 7.86031 2.25 8.05108 2.25 8.24999V19.5C2.25 19.8978 2.40804 20.2793 2.68934 20.5606C2.97064 20.842 3.35218 21 3.75 21H18C18.1989 21 18.3897 20.921 18.5303 20.7803C18.671 20.6397 18.75 20.4489 18.75 20.25C18.75 20.0511 18.671 19.8603 18.5303 19.7197C18.3897 19.579 18.1989 19.5 18 19.5Z" fill="#535353"/>
                      </svg>
                  </Button>
                  <Button >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="#535353"/>
                      </svg>
                  </Button> -->
            </div>
          </div>
   
          <!-- Graps -->
          <div class="chart-container flex justify-center">
              <Chart type="doughnut" :data="chartData5" :options="chartOptions5" class="custom-doughnut-chart" /> 
          </div>

          <!-- table -->
          <DataTable tableClass="custom-table" :value="data5">
            <Column field="type" header="Tipo"></Column>
            <Column field="description" header="Descripción"></Column>
            <Column field="percentage" header="%"></Column>
        </DataTable>
        </div>
        <div class="bg-white px-8 py-8 shadow-3xl rounded-md flex flex-col justify-around">
          <div class="grid grid-cols-2 mb-3">
            <span class="text-gray-900 font-semibold font-inter text-sm uppercase flex items-center">
              % de inventario cíclicos
            </span>
            <div class="flex justify-end">
               <!-- <Button class="mr-4"  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <path d="M21.5306 10.2806L17.0306 14.7806C16.8899 14.9213 16.699 15.0004 16.5 15.0004C16.301 15.0004 16.1101 14.9213 15.9694 14.7806C15.8286 14.6399 15.7496 14.449 15.7496 14.25C15.7496 14.051 15.8286 13.8601 15.9694 13.7194L19.1897 10.5H15.4688C13.6394 10.4995 11.8617 11.107 10.4153 12.2271C8.96889 13.3472 7.93578 14.9162 7.47844 16.6875C7.42871 16.8802 7.30447 17.0452 7.13305 17.1463C6.96163 17.2474 6.75707 17.2763 6.56437 17.2266C6.37168 17.1768 6.20663 17.0526 6.10554 16.8812C6.00444 16.7097 5.97558 16.5052 6.02531 16.3125C6.56495 14.2186 7.78571 12.3637 9.49537 11.0398C11.205 9.71596 13.3064 8.99835 15.4688 8.99999H19.1916L15.9694 5.78061C15.8997 5.71093 15.8444 5.62821 15.8067 5.53716C15.769 5.44612 15.7496 5.34854 15.7496 5.24999C15.7496 5.15144 15.769 5.05386 15.8067 4.96282C15.8444 4.87177 15.8997 4.78905 15.9694 4.71936C16.1101 4.57863 16.301 4.49957 16.5 4.49957C16.5985 4.49957 16.6961 4.51898 16.7872 4.55669C16.8782 4.59441 16.9609 4.64968 17.0306 4.71936L21.5306 9.21936C21.6004 9.28902 21.6557 9.37174 21.6934 9.46278C21.7312 9.55383 21.7506 9.65143 21.7506 9.74999C21.7506 9.84855 21.7312 9.94615 21.6934 10.0372C21.6557 10.1282 21.6004 10.211 21.5306 10.2806ZM18 19.5H3.75V8.24999C3.75 8.05108 3.67098 7.86031 3.53033 7.71966C3.38968 7.57901 3.19891 7.49999 3 7.49999C2.80109 7.49999 2.61032 7.57901 2.46967 7.71966C2.32902 7.86031 2.25 8.05108 2.25 8.24999V19.5C2.25 19.8978 2.40804 20.2793 2.68934 20.5606C2.97064 20.842 3.35218 21 3.75 21H18C18.1989 21 18.3897 20.921 18.5303 20.7803C18.671 20.6397 18.75 20.4489 18.75 20.25C18.75 20.0511 18.671 19.8603 18.5303 19.7197C18.3897 19.579 18.1989 19.5 18 19.5Z" fill="#535353"/>
                      </svg>
                  </Button>
                  <Button >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="#535353"/>
                      </svg>
                  </Button> -->
            </div>
          </div>
          <!-- table -->
          <div class="grid grid-cols-3 gap-3 mt-5">
            <p class="flex flex-col bg-gray-100 text-2xs justify-center items-center px-4 py-2 text-gray-200
            capitalize">
              <strong class="text-primary-900 text-md">25</strong>
              plan
            </p>
            <p class="flex flex-col bg-gray-100 text-2xs justify-center items-center px-4 py-2 text-gray-200
            capitalize">
              <strong class="text-primary-900 text-md">15</strong>
              Realizados
            </p>
            <p class="flex flex-col bg-gray-100 text-2xs justify-center items-center p-4 text-gray-200
            capitalize">
              <strong class="text-primary-900 text-md">60%</strong>
              cumplimiento
            </p>
          </div>
          <div class="chart-container flex justify-center" >
            <Chart type="doughnut" :data="chartData6" :options="chartOptions6" class="custom-doughnut-chart" /> 
          </div>
        </div>
      </div>
    </div>
  </div>
  <Toast ref="dashboardToast" />
</template>
 
 
<script>
import {defineAsyncComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import Chart from 'primevue/chart'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Toast from 'primevue/toast';
import { useToast } from "primevue/usetoast";


export default{
  components: {
      Navbar: defineAsyncComponent( () => import('../components/Navbar.vue')),
      Chart,
      Button,
      DataTable,
      Column,
      Toast
  },
  setup(){
    const route = useRoute();
    const dashboardToast = ref(null);
    const toast = useToast();
    const hasShownMessage = ref(false); 

    onMounted(() => {
        if (!hasShownMessage.value) { 
          showDashboardMessage();
          hasShownMessage.value = true; 
        }
        chartData.value = setChartData();
        chartOptions.value = setChartOptions();

        chartData2.value = setChartData2();
        chartOptions2.value = setChartOptions2();

        chartData3.value = setChartData3();
        chartOptions3.value = setChartOptions3();

        chartData4.value = setChartData4();
        chartOptions4.value = setChartOptions4();

        chartData5.value = setChartData5();
        chartOptions5.value = setChartOptions5();

        chartData6.value = setChartData6();
        chartOptions6.value = setChartOptions6();

    });

    const chartData = ref();
    const chartOptions = ref();

    const chartData2 = ref();
    const chartOptions2 = ref();


    const chartData3 = ref();
    const chartOptions3 = ref();

    const chartData4 = ref();
    const chartOptions4 = ref();

    const chartData5 = ref();
    const chartOptions5 = ref();
    
    const chartData6 = ref();
    const chartOptions6 = ref();
    

    const data1Right = ref([
      { month: 'JUL',count:'M $759.000',amount: 'M $219.000', qty: 5682, sale: 'M $540.000'},
      { month: 'AGO',count:'M $696.000',amount: 'M $201.000', qty: 5480, sale: 'M $495.000' },
      { month: 'SEP',count:'M $664.000',amount: 'M $192.000', qty: 5390, sale: 'M $472.000' },
      { month: 'OCT',count:'M $632.860',amount: 'M $182.860', qty: 5287, sale: 'M $450.000' },
    ])

    const data2 = ref([
      { reason: 'JUL',jan: 'M$ 120.000', feb: 'M$ 190.000',mar: 'M$ 70.000'},
      { reason: 'AGO',jan: 'M$ 80.000', feb: 'M$ 100.000',mar: 'M$ 20.000'},
      { reason: 'SEP',jan: 'M$ 180.000', feb: 'M$ 270.000',mar: 'M$ 90.000'},
      { reason: 'OCT',jan: 'M$ 115.000', feb: 'M$190.000',mar: 'M$ 75.000'},
    ])

    const data3 = ref([
      { type: 'Siniestros',ago: 'M$ 95.000', sep: 'M$ 55.000',oct: 'M$ 66.000'},
      { type: 'Robos',ago: 'M$ 150.000', sep: 'M$ 100.000',oct: 'M$ 112.000'},
      { type: 'Pérdida no explicada',ago: 'M$ 430.000', sep: 'M$ 290.000',oct: 'M$ 343.000'},
      { type: 'Deterioros',ago: 'M$ 165.000', sep: 'M$ 150.000',oct: 'M$ 126.000'},
    ])

    const data4 = ref([
      { process: 'Ventas',description:'Analisis',connections: 349},
      { process: 'Existencias', description: 'Extracción de datos y análisis', connections: 370 },
    ])

    const data5 = ref([
      { type: 'Boletas', description: '40', percentage: '18%' },
      { type: 'Facturas', description: '60', percentage: '27%' },
      { type: 'Guías', description: '120', percentage: '55%' },
    ]);

    const showDashboardMessage = () => {
      const fromSignIn = route.query.fromSignIn;
      if (fromSignIn) {
        toast.add({
          severity: 'success',
          summary: 'Inicio con éxito',
          life: 1000 
        });
      }
    };


    const setChartData = () => {
        const documentStyle = getComputedStyle(document.documentElement);

        return {
            labels: ['JUL', 'AGO', 'SEP', 'OCT'],
            datasets: [
                {
                    label: 'Ventas',
                    data: [540000, 495000, 472000, 450000],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-700'),
                    tension: 0.4
                },
                {
                    label: 'Costo',
                    data: [759000, 696000, 664000, 632860],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--yellow-400'),
                    tension: 0.4
                },
                {
                    label: 'Margen',
                    data: [219000, 201000, 192000, 182860],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--red-400'),
                    tension: 0.4
                }
            ]
        };
    };
    const setChartOptions = () => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        return {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                  position: 'bottom',
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
    }

    const setChartData2 = () => {
        const documentStyle = getComputedStyle(document.documentElement);

        return {
            labels: ['JUL', 'AGO', 'SEP', 'OCT'],
            datasets: [
                {
                    type: 'bar',
                    label: 'VENTA',
                    backgroundColor: documentStyle.getPropertyValue('--red-700'),
                    data: [120000, 80000, 180000, 115000]
                },
                {
                    type: 'bar',
                    label: 'NOTAS DE CRÉDITO',
                    backgroundColor: documentStyle.getPropertyValue('--blue-700'),
                    data: [190000, 100000, 270000, 190000]
                },
                {
                    type: 'bar',
                    label: 'PÉRDIDA',
                    backgroundColor: documentStyle.getPropertyValue('--yellow-400'),
                    data: [70000, 20000, 90000, 75000],
                    borderColor: 'white',
                    borderWidth: 2
                }
            ]
        };
    };
    const setChartOptions2 = () => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        return {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                        color: textColor,
                        boxWidth: 10
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            },
            categoryPercentage: 0.3
        };
    }


    const setChartData3 = () => {
        const documentStyle = getComputedStyle(document.documentElement);

        return {
            labels: ['AGO', 'SEP', 'OCT'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Siniestros',
                    backgroundColor: documentStyle.getPropertyValue('--green-400'),
                    data: [95000, 55000, 66000],
                    borderColor: 'white',
                    borderWidth: 2
                },
                {
                    type: 'bar',
                    label: 'Robos',
                    backgroundColor: documentStyle.getPropertyValue('--red-700'),
                    data: [150000, 100000, 112000]
                },
                {
                    type: 'bar',
                    label: 'Pérdida no explicada',
                    backgroundColor: documentStyle.getPropertyValue('--yellow-400'),
                    data: [430000, 290000, 343000],
                    borderColor: 'white',
                    borderWidth: 2
                },
                {
                    type: 'bar',
                    label: 'Deterioros',
                    backgroundColor: documentStyle.getPropertyValue('--blue-700'),
                    data: [165000, 150000, 126000]
                }
            ]
        };
    };
    const setChartOptions3 = () => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        return {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                        color: textColor,
                        boxWidth: 10
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            },
            categoryPercentage: 0.3
        };
    }

    // 4
    const setChartData4 = () => {
      const documentStyle = getComputedStyle(document.body);

      return {
          labels: ['Ventas', 'Existencia'],
          datasets: [
              {
                  data: [349, 370],
                  backgroundColor: [documentStyle.getPropertyValue('--blue-700'), documentStyle.getPropertyValue('--blue-200')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-600'), documentStyle.getPropertyValue('--blue-600')]
              }
          ]
      };
    };
    
    const setChartOptions4 = () => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        return {
            cutout: '65%',
            plugins: {
                legend: {
                  position: 'right',
                  labels: {
                      
                      color: textColor,
                      boxWidth: 10
                  }
                }
            }
        };
    };

     // 5
     const setChartData5 = () => {
        const documentStyle = getComputedStyle(document.body);

        return {
            labels: ['Boletas', 'Facturas', 'Guías'],
            datasets: [
                {
                    data: [18, 27, 55],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-700'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--blue-200')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--green-600'), documentStyle.getPropertyValue('--yellow-600'), documentStyle.getPropertyValue('--blue-400')]
                }
            ]
        };
    };
    
    const setChartOptions5 = () => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        return {
            cutout: '65%',
            plugins: {
                legend: {
                  position: 'right',
                  labels: {
                      
                      color: textColor,
                      boxWidth: 10
                  }
                }
            }
        };
    };

     // 6
     const setChartData6 = () => {
      const documentStyle = getComputedStyle(document.body);

      return {
          labels: ['Ventas', 'Existencia'],
          datasets: [
              {
                  data: [540, 325],
                  backgroundColor: [documentStyle.getPropertyValue('--blue-700'), documentStyle.getPropertyValue('--blue-200')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-600'), documentStyle.getPropertyValue('--blue-600')]
              }
          ]
      };
    };
    
    const setChartOptions6 = () => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        return {
            cutout: '65%',
            plugins: {
                legend: {
                  position: 'right',
                  labels: {
                      
                      color: textColor,
                      boxWidth: 10
                  }
                }
            }
        };
    };

   
    return{
      chartData,
      chartOptions,
      chartData2,
      chartOptions2,
      chartData3,
      chartOptions3,
      chartData4,
      chartOptions4,
      chartData5,
      chartOptions5,
      chartData6,
      chartOptions6,
      data1Right,
      data2,
      data3,
      data4,
      data5,
      dashboardToast,
    }
  }
}
</script>
<style>
.container-dashboard td, .container-dashboard th span{
  font-size: 10px !important;
 }
</style>