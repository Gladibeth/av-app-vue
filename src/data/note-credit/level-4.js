export const bills_indicator_3 = {
    header: {
        type: 'Tipo',
        docDate: 'Fecha Documento',
        docNum: 'Nro Documento',
        docType: 'Tipo de Documento',
        docTime: 'Hora transacción',
        codCashier: 'Cod_Cajero',
        cashier: 'Cajero',
        sku: 'SKU',
        description: 'Descripción',
        qty: 'Cantidad',
        prineNeto: 'Precio Neto',
        tax: 'Iva',
        totalNcr: 'Total NCR',
    },
    value: [
        {
            id: 1,
            order_id: 1,
            docDate: '27/6/2020',
            docNum: '45937320',
            docType: 'Nota Crédito',
            docTime: '11:37:00',
            codCashier: '167',
            cashier: 'NATALY NATAL',
            sku: '34531658731',
            description: 'Cepillo de Banco Prof',
            qty: '1',
            prineNeto: '453.756',
            tax: '86.214',
            totalNcr: '539.970',
            type: 'NOTA DE CREDITO',
            status: 'active',
        },
        {
            id: 2,
            order_id: 1,
            docDate: '5/11/2019',
            docNum: '101459641',
            docType: 'Factura',
            docTime: '16:02:00',
            codCashier: '230',
            cashier: 'IVETTE VETTE',
            sku: '34531658732',
            description: 'Cepillo de Banco hoby',
            qty: '1',
            prineNeto: '221.314',
            tax: '42.050',
            totalNcr: '263.364',
            type: 'DOCUMENTO ORIGINAL',
            status: 'active',
        },
    ],
    children: null,
    document: {
        url: 'https://demo.auditorvirtual.cl/export/boleta-10101536.xlsx',
        name: 'boleta-10101536.xlsx'
    },
    chart: {
        type: 'bar',
        labels: ['Nota Crédito', 'Factura'],
        datasets: [
            {
                label: 'Total NCR',
                data: [539970, 263364],
                fill: true,
                borderColor: '#022597',
                tension: 0.4,
                backgroundColor: '#022597',
            }
        ]
    }

 }