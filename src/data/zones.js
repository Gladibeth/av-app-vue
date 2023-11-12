export const zones = {
    header: {
        name: 'Nombre',
        qtyStores: 'Cantidad de Almacenes',
        qtyCases: 'Cantidad de Casos',
        amout: 'Monto Total',
    },
    value: [
        {
            id: 1,
            name: 'Zona Norte',
            qtyStores: '10',
            qtyCases: '60',
            amout: '85.698.000',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 2,
            name: 'Zona Central',
            qtyStores: '12',
            qtyCases: '72',
            amout: '77.968.256',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 3,
            name: 'Zona Metropolitana',
            qtyStores: '15',
            qtyCases: '90',
            amout: '64.256.897',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 4,
            name: 'Zona Sur',
            qtyStores: '8',
            qtyCases: '48',
            amout: '16.896.457',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 5,
            name: 'Zona Austral',
            qtyStores: '6',
            qtyCases: '36',
            amout: '6.987.258',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        }, 
    ],
    children: 'almacenes',
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