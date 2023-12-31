export const zones_indicator_2 = {
    header: {
        name: 'Nombre',
        qtyStores: 'Cantidad de Almacenes',
        qtyUnit: 'Cantidad de Unidades',
        loss_clain: 'Pérdida Siniestros',
        loss_theft: 'Pérdida Robos',
        loss_unexplained: 'Pérdida No Explicada',
        loss_deterioration: 'Pérdida Deterioros',
        loss_total: 'Total Pérdidas',
    },
    value: [
        {
            "id": "4",
            "indicator_id": "2",
            "name": "Zona Sur",
            "qtyStores": "9",
            "qtyUnit": "79.298",
            "loss_clain": "66.340.769",
            "loss_theft": "112.759.667",
            "loss_unexplained": "343.386.048",
            "loss_deterioration": "126.546.992",
            "loss_total": "649.033.476",
            "status": "active",
            "dateCreated": "2021-01-04"
        },
        {
          "id": "1",
          "indicator_id": "2",
          "name": "Zona Norte",
          "qtyStores": "9",
          "qtyUnit": "74.520",
          "loss_clain": "42.583.086",
          "loss_theft": "55.358.012",
          "loss_unexplained": "255.498.518",
          "loss_deterioration": "72.391.247",
          "loss_total": "425.830.864",
          "status": "active",
          "dateCreated": "2021-01-01"
        },
        {
          "id": "2",
          "indicator_id": "2",
          "name": "Zona Central",
          "qtyStores": "9",
          "qtyUnit": "70.310",
          "loss_clain": "47.314.540",
          "loss_theft": "61.508.903",
          "loss_unexplained": "283.887.242",
          "loss_deterioration": "80.434.719",
          "loss_total": "473.145.404",
          "status": "active",
          "dateCreated": "2021-01-02"
        },
        {
          "id": "3",
          "indicator_id": "2",
          "name": "Zona Metropolitana",
          "qtyStores": "9",
          "qtyUnit": "71.369",
          "loss_clain": "52.571.712",
          "loss_theft": "68.343.225",
          "loss_unexplained": "315.430.269",
          "loss_deterioration": "89.371.910",
          "loss_total": "525.717.116",
          "status": "active",
          "dateCreated": "2021-01-03"
        },
        {
          "id": "5",
          "indicator_id": "2",
          "name": "Zona Austral",
          "qtyStores": "9",
          "qtyUnit": "67.068",
          "loss_clain": "58.413.013",
          "loss_theft": "75.936.917",
          "loss_unexplained": "350.478.077",
          "loss_deterioration": "99.302.122",
          "loss_total": "584.130.129",
          "status": "active",
          "dateCreated": "2021-01-05"
        },
        {
          "id": "6",
          "indicator_id": "2",
          "name": "Total",
          "qtyStores": "45",
          "qtyUnit": "362.565",
          "loss_clain": "267.223.121",
          "loss_theft": "373.906.723",
          "loss_unexplained": "1.548.680.155",
          "loss_deterioration": "468.046.989",
          "loss_total": "2.657.856.988",
          "status": "active",
          "dateCreated": "2021-01-06"
        }
      ],
    children: 'almacenes',
    breadcrumb: [
        {
            label: 'Zonas',
            to: '/indicador/2/zonas',
        }
    ],
    params: 'zone_id', 
    document: {
        url: 'https://demo.auditorvirtual.cl/export/perdida-de-inventario-zonas.xlsx',
        name: 'perdida-de-inventario-zonas.xlsx'
    },
    chart: {
        type: 'bar',
        labels: ['Zona Sur', 'Zona Norte', 'Zona Central', 'Zona Metropolitana', 'Zona Austral'],
        datasets: [
            {
                label: 'Cantidad de casos',
                data: [  79298, 74520, 70310, 71369, 67068 ],
                fill: true,
                borderColor: '#022597',
                tension: 0.4,
                backgroundColor: '#022597'
            },
            {
                label: 'Monto',
                data: [649033476, 425830864, 473145404, 525717116, 584130129],
                fill: true,
                borderColor: '#fdb954',
                tension: 0.4,
                backgroundColor: '#fdb954'
            }
        ]
    }
 }