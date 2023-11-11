export const bills = {
    header: {
        name: 'Nombre',
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
            docNum: '10101536',
            docType: 'Boleta',
            docTime: '21:25:00',
            numTerminal: '151.516',
            cashier: '10.520.106-9 Lorena Campos',
            name: 'Product 1',
            sku: '32131654498',
            qtyProduct: '1',
            cost: '6.565.465',
            amountPaid: '2.626.186',
            amount: '-3.939.279',
            margin: '-60%',
            status: 'active',
            dateCreated: '23/10/2023',
            dateModified: '23/10/2023',
        },
        {
            id: 2,
            order_id: 1,
            docNum: '14321536',
            docType: 'Boleta',
            docTime: '21:25:00',
            numTerminal: '151.516',
            cashier: '10.520.106-9 Lorena Campos',
            name: 'Product 2',
            sku: '32131654498',
            qtyProduct: '2',
            cost: '6.565.465',
            amountPaid: '2.626.186',
            amount: '-2.939.279',
            margin: '-60%',
            status: 'active',
            dateCreated: '23/10/2023',
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