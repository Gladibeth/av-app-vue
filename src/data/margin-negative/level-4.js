export const bills_indicator_1 = {
    header: {
        // name: 'Nombre',
        sku: 'SKU',
        qtyProduct: 'Cantidad de productos',
        cost: 'Costo',
        amountPaid: 'Valor Pagado',
        amount: 'Monto',
        margin: 'Margen',
    },
    value: [
        {
            id: 1,
            order_id: 2,
            docNum: '8081229',
            docType: 'Factura',
            docTime: '18:35:35',
            numTerminal: '175',
            cashier: '10.520.106-9 Lorena Campos',
            name: 'Product 1',
            sku: '32131654498',
            qtyProduct: '1',
            cost: '171.000',
            amountPaid: '19.990',
            amount: '-151.010',
            margin: '-88%',
            status: 'active',
            dateCreated: '24/10/2023',
            dateModified: '23/10/2023',
        },
    ],
    children: null,
    breadcrumb: [
        {
            label: 'Zonas',
            to: '/indicador/1/zonas',
        },
        {
            label: 'Zona Norte',
            to: '/indicador/1/zonas/1/almacenes',
        },
        {
          label: 'Los Almendros',
          to: '/indicador/1/zonas/1/almacenes/1/ordenes',
        },
        {
            label: 'Factura - 8081229',
            to: '/indicador/1/zonas/1/almacenes/1/ordenes/2/factura',
        }
    ],
    document: {
        url: 'https://demo.auditorvirtual.cl/export/venta-con-margen-negativo-factura-8081229.xlsx',
        name: 'venta-con-margen-negativo-factura-8081229.xlsx'
    },
    chart: {
        type: 'bar',
        labels: ['Product 1'],
        datasets: [
            {
                label: 'Cantidad de productos',
                data: [1],
                fill: true,
                borderColor: '#022597',
                tension: 0.4,
                backgroundColor: '#022597',
            },
            {
                label: 'Monto',
                data: [-151010],
                fill: true,
                borderColor: '#fdb954',
                tension: 0.4,
                backgroundColor: '#fdb954',
            }
        ]
    }

 }