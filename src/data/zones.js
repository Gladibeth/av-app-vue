export const zones = {
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
    document: {
        url: 'https://demo.auditorvirtual.cl/export/zonas.xlsx',
        name: 'zonas.xlsx'
    },
    chart: {
        type: 'line',
        labels: ['Zona Norte', 'Zona Central', 'Zona Metropolitana', 'Zona Sur', 'Zona Austral'],
        datasets: [
            {
                label: 'Cantidad de casos',
                data: [60, 72, 90, 48, 36],
                fill: true,
                borderColor: '#022597',
                tension: 0.4,
                backgroundColor: 'rgba(7, 75, 185, 0.3)'
            },
            {
                label: 'Monto',
                data: [85698000, 77968256, 64256897, 16896457, 6987258],
                fill: true,
                borderColor: '#fdb954',
                tension: 0.4,
                backgroundColor: 'rgba(7, 75, 185, 0.3)'
            }
        ]
    }
 }