export const stores_indicator_1 = {
    header: {
        name: 'Sucursales',
        averageNegative: 'Mg Negativo Promedio',
        qty: 'Cantidad',
        amout: 'Monto',
    },
    value: [
        {
            id: 1,
            zone_id: 1,
            name: 'Los Almendros',
            averageNegative: '-40%',
            qty: '390',
            amout: '-7.495.228',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 2,
            zone_id: 1,
            name: 'Las Carmelitas',
            averageNegative: '-28%',
            qty: '180',
            amout: '-6.524.351',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 3,
            zone_id: 1,
            name: 'Los Perales',
            averageNegative: '-25%',
            qty: '175',
            amout: '-5.871.916',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 4,
            zone_id: 1,
            name: 'Zarmiento',
            averageNegative: '-22%',
            qty: '151',
            amout: '-5.284.724',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 5,
            zone_id: 1,
            name: 'Zapallar',
            averageNegative: '-20%',
            qty: '127',
            amout: '-4.756.252',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 6,
            zone_id: 1,
            name: 'San Pedro',
            averageNegative: '-18%',
            qty: '103',
            amout: '-4.280.627',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 7,
            zone_id: 1,
            name: 'Calama',
            averageNegative: '-15%',
            qty: '79',
            amout: '-3.852.564',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 8,
            zone_id: 1,
            name: 'La Paz',
            averageNegative: '-10%',
            qty: '55',
            amout: '-3.467.308',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 9,
            zone_id: 1,
            name: 'Piñones',
            averageNegative: '-5%',
            qty: '31',
            amout: '-3.120.577',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 9,
            zone_id: 1,
            name: 'Total',
            averageNegative: '-20%',
            qty: '1.291',
            amout: '-44.653.546',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
    ],
    children: 'ordenes',
    breadcrumb: [
        {
            label: 'Zonas',
            to: '/indicador/1/zonas',
        },
        {
            label: 'Zona Norte',
            to: '/indicador/1/zonas/1/almacenes',
        }
    ],
    params: 'store_id',
    document: {
        url: 'https://demo.auditorvirtual.cl/export/venta-con-margen-negativo-zona-norte.xlsx',
        name: 'venta-con-margen-negativo-zona-norte.xlsx'
    },
    chart: {
        type: 'bar',
        labels: ['Los Almendros', 'Las Carmelitas', 'Los Perales', 'Zarmiento', 'Zapallar', 'San Pedro', 'Calama', 'La Paz', 'Piñones'],
        datasets: [
            {
                label: 'Cantidad',
                data: [390, 180, 175, 151, 127, 103, 79, 55, 31],
                fill: true,
                borderColor: '#022597',
                tension: 0.4,
                backgroundColor: '#022597'
            },
            {
                label: 'Monto',
                data: [-7495228, -6524351, -5871916, -5284724, -4756252, -4280627, -3852564, -3467308, -3120577],
                fill: true,
                borderColor: '#fdb954',
                tension: 0.4,
                backgroundColor: '#fdb954'
            }
        ]
    }
 }