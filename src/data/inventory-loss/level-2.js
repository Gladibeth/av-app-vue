export const stores_indicator_2 = {
    header: {
        name: 'Sucursales',
        total_units: 'Total de Unidades',
        average_promedium_loss_sku: 'Valor Promedio Perdida por SKU',
        loss_clain: 'Pérdida Siniestros',
        loss_theft: 'Pérdida Robos',
        loss_unexplained: 'Pérdida No Explicada',
        loss_deterioration: 'Pérdida Deterioros',
        loss_total: 'Total de Pérdidas',
    },
    value: [
        {
            "id": "1",
            "zone_id": "4",
            "name": "El Volcán",
            "total_units": "12.945",
            "average_promedium": "12.003",
            "loss_clain": "16.975.383",
            "loss_theft": "48.584.665",
            "loss_unexplained": "47.193.731",
            "loss_deterioration": "42.625.836",
            "loss_total": "155.379.615"
          },
          {
            "id": "2",
            "zone_id": "4",
            "name": "Los Lagos",
            "total_units": "11.651",
            "average_promedium": "10.505",
            "loss_clain": "12.238.850",
            "loss_theft": "15.910.505",
            "loss_unexplained": "73.433.102",
            "loss_deterioration": "20.806.045",
            "loss_total": "122.388.503"
          },
          {
            "id": "3",
            "zone_id": "4",
            "name": "Los Ríos",
            "total_units": "10.485",
            "average_promedium": "8.723",
            "loss_clain": "9.146.458",
            "loss_theft": "11.890.395",
            "loss_unexplained": "54.878.748",
            "loss_deterioration": "15.548.979",
            "loss_total": "91.464.580"
          },
          {
            "id": "4",
            "zone_id": "4",
            "name": "Los Saltos",
            "total_units": "9.437",
            "average_promedium": "7.851",
            "loss_clain": "7.408.631",
            "loss_theft": "9.631.220",
            "loss_unexplained": "44.451.786",
            "loss_deterioration": "12.594.673",
            "loss_total": "74.086.310"
          },
          {
            "id": "5",
            "zone_id": "4",
            "name": "Los Bosques",
            "total_units": "8.493",
            "average_promedium": "7.066",
            "loss_clain": "6.000.991",
            "loss_theft": "7.801.288",
            "loss_unexplained": "36.005.947",
            "loss_deterioration": "10.201.685",
            "loss_total": "60.009.911"
          },
          {
            "id": "6",
            "zone_id": "4",
            "name": "Los Campos",
            "total_units": "7.644",
            "average_promedium": "6.359",
            "loss_clain": "4.860.803",
            "loss_theft": "6.319.044",
            "loss_unexplained": "29.164.817",
            "loss_deterioration": "8.263.365",
            "loss_total": "48.608.028"
          },
          {
            "id": "7",
            "zone_id": "4",
            "name": "Los Afluentes",
            "total_units": "6.880",
            "average_promedium": "5.723",
            "loss_clain": "3.937.250",
            "loss_theft": "5.118.425",
            "loss_unexplained": "23.623.502",
            "loss_deterioration": "6.693.325",
            "loss_total": "39.372.503"
          },
          {
            "id": "8",
            "zone_id": "4",
            "name": "La Cordillera",
            "total_units": "6.192",
            "average_promedium": "5.151",
            "loss_clain": "3.189.173",
            "loss_theft": "4.145.925",
            "loss_unexplained": "19.135.036",
            "loss_deterioration": "5.421.594",
            "loss_total": "31.891.727"
          },
          {
            "id": "9",
            "zone_id": "4",
            "name": "La Laguna",
            "total_units": "5.572",
            "average_promedium": "4.636",
            "loss_clain": "2.583.230",
            "loss_theft": "3.358.199",
            "loss_unexplained": "15.499.379",
            "loss_deterioration": "4.391.491",
            "loss_total": "25.832.299"
          },
          {
            "id": "10",
            "zone_id": "4",
            "name": "Total Zona Sur",
            "total_units": "79.298",
            "average_promedium": "8.185",
            "loss_clain": "66.340.769",
            "loss_theft": "112.759.667",
            "loss_unexplained": "343.386.048",
            "loss_deterioration": "126.546.992",
            "loss_total": "649.033.476"
          }
    ],
    children: 'ordenes',
    params: 'store_id',
    document: {
        url: 'https://demo.auditorvirtual.cl/export/zona-norte.xlsx',
        name: 'zona-norte.xlsx'
    },
    chart: {
        type: 'bar',
        labels: ['Los Almendros', 'Las Carmelitas', 'Los Perales', 'Zarmiento', 'Zapallar', 'San Pedro', 'Calama', 'La Paz', 'Piñones'],
        datasets: [
            {
                label: 'Total de Unidades',
                // values total_units
                data: [12945, 11651, 10485, 9437, 8493, 7644, 6880, 6192, 5572],
                fill: true,
                borderColor: '#022597',
                tension: 0.4,
                backgroundColor: '#022597'
            },
            {
                label: 'Total de Pérdidas',
                //loss_total values array items loss_total 
                data: [ 155379615, 122388503, 91464580, 74086310, 60009911, 48608028, 39372503, 31891727, 25832299],
                fill: true,
                borderColor: '#fdb954',
                tension: 0.4,
                backgroundColor: '#fdb954'
            }
        ]
    }
 }