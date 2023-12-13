export const zones_indicator_1 = {
    header: {
        name: 'Nombre',
        qtyStores: 'Cantidad de Almacenes',
        qtyUnit: 'Cantidad de Unidades',
        amout: 'Monto Total',
    },
    value: [
        {
            id: 1,
            indicator_id: 1,
            name: 'Zona Norte',
            qtyStores: '9',
            qtyUnit: '1.291',
            amout: '-44.653.546',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 2,
            indicator_id: 1,
            name: 'Zona Central',
            qtyStores: '9',
            qtyUnit: '1.162',
            amout: '-40.188.191',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 3,
            indicator_id: 1,
            name: 'Zona Metropolitana',
            qtyStores: '9',
            qtyUnit: '1.046',
            amout: '-36.169.372',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 4,
            indicator_id: 1,
            name: 'Zona Sur',
            qtyStores: '9',
            qtyUnit: '941',
            amout: '-32.552.435',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 5,
            indicator_id: 1,
            name: 'Zona Austral',
            qtyStores: '9',
            qtyUnit: '847',
            amout: '-29.297.191',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        }, 
        {
            id: 5,
            indicator_id: 1,
            name: 'Total',
            qtyStores: '45',
            qtyUnit: '5.287',
            amout: '-182.860.735',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        }, 
    ],
    children: 'almacenes',
    params: 'zone_id', 
    breadcrumb: [
        {
            label: 'Zonas',
            to: '/indicador/1/zonas',
        }
    ],
    document: {
        url: 'https://demo.auditorvirtual.cl/export/venta-con-margen-negativo-zonas.xlsx',
        name: 'venta-con-margen-negativo-zonas.xlsx'
    },
    chart: {
        type: 'bar',
        labels: ['Zona Norte', 'Zona Central', 'Zona Metropolitana', 'Zona Sur', 'Zona Austral'],
        datasets: [
            {
                label: 'Cantidad de unidades',
                data: [1291, 1162, 1046, 942, 847],
                fill: true,
                borderColor: '#022597',
                tension: 0.4,
                backgroundColor: '#022597',
            },
            {
                label: 'Monto',
                data: [-44653546, -40188191, -36169372, -32552435, -29297191],
                fill: true,
                borderColor: '#fdb954',
                tension: 0.4,
                backgroundColor: '#fdb954',
            }
        ]
    }
 }