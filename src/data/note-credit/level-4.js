export const bills_indicator_3 = {
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
            order_id: 1,
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
    document: {
        url: 'https://demo.auditorvirtual.cl/export/boleta-10101536.xlsx',
        name: 'boleta-10101536.xlsx'
    },
    chart: {
        type: 'line',
        labels: ['Product 1', 'Product 2'],
        datasets: [
            {
                label: 'Cantidad de productos',
                data: [1, 2],
                fill: true,
                borderColor: '#022597',
                tension: 0.4,
                backgroundColor: 'rgba(7, 75, 185, 0.3)',
            },
            {
                label: 'Monto',
                data: [-3939279, -2939279],
                fill: true,
                borderColor: '#fdb954',
                tension: 0.4,
                backgroundColor: 'rgba(7, 75, 185, 0.3)',
            }
        ]
    }

 }