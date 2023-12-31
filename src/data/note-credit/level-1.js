export const zones_indicator_3 = {
    header: {
        name: 'Nombre',
        qtyStores: 'Cantidad de tiendas',
        valueSales: 'Valor Dctos. Venta',
        valueCredit: 'Valor Notas de Crédito',
        lossFinancial: 'Pérdida Financiera',
    },
    value: [
        {
            id: 3,
            indicator_id: 3,
            name: 'Zona Metropolitana',
            qtyStores: '9',
            valueSales: '27.838.412',
            valueCredit: '45.944.885',
            lossFinancial: '-18.106.472',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 1,
            indicator_id: 3,
            name: 'Zona Norte',
            qtyStores: '9',
            valueSales: '17.816.584',
            valueCredit: '29.404.726',
            lossFinancial: '-11.588.142',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 2,
            indicator_id: 3,
            name: 'Zona Central',
            qtyStores: '9',
            valueSales: '22.270.730',
            valueCredit: '36.755.908',
            lossFinancial: '-14.485.178',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 4,
            indicator_id: 3,
            name: 'Zona Sur',
            qtyStores: '9',
            valueSales: '25.054.571',
            valueCredit: '41.350.396',
            lossFinancial: '-16.295.825',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        },
        {
            id: 5,
            indicator_id: 3,
            name: 'Zona Austral',
            qtyStores: '9',
            valueSales: '22.549.114',
            valueCredit: '37.215.356',
            lossFinancial: '-14.666.242',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        }, 
        {
            id: 5,
            indicator_id: 3,
            name: 'Total',
            qtyStores: '45',
            valueSales: '115.529.412',
            valueCredit: '190.671.271',
            lossFinancial: '-75.141.859',
            status: 'active',
            dateCreated: '2021-01-01',
            dateModified: '2021-01-01',
        }, 
    ],
    children: 'almacenes',
    breadcrumb: [
        {
            label: 'Zonas',
            to: '/indicador/3/zonas',
        }
    ],
    params: 'zone_id', 
    document: {
        url: 'https://demo.auditorvirtual.cl/export/nota-de-credito-mayor-al-documento-de-venta-zonas.xlsx',
        name: 'nota-de-credito-mayor-al-documento-de-venta-zonas.xlsx'
    },
    chart: {
        type: 'bar',
        labels: [  "Zona Metropolitana", "Zona Norte", "Zona Central", "Zona Sur", "Zona Austral"],
        datasets: [
            {
                label: 'Pérdida Financiera',
                data: [ -18106472, -11588142, -14485178, -16295825, -14666242 ],
                fill: true,
                borderColor: '#022597',
                tension: 0.4,
                backgroundColor: '#022597'
            }
        ]
    }
 }