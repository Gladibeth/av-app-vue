export const indicators = {
    value: [
        {
            id: 1,
            name: 'VENTAS CON MARGENES NEGATIVOS',
            average: '50',
            type: 'venta',
            tab: 'operacionales',
            groupBy: 'emergency',
            monthOld: {
                amount: '$100.000',
                qty: '100 unid',
            },
            monthNew: {
                amount: '$100.000',
                qty: '100 unid',
            },
            status: 'active',
            dateCreated: '11/10/2023',
            dateModified: '11/10/2023',
            tags: [
                {
                    icon: 'pi pi-list',
                    name: 'Descripción:',
                    description: 'Ventas cuyo precio de venta es inferior al costo del producto '
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Pérdidas financieras en el proceso de venta'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis:',
                    description: 'Verificar si existen errores en la fijación de precios y/o costos'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Revisar procedimientos, controles en sistema de costeo y fijación de precios'
                },
            ]
        },
        {
            id: 2,
            name: 'PÉRDIDAS DE INVENTARIO',
            average: '50',
            type: 'Existencia/Inventarios',
            tab: 'operacionales',
            groupBy: 'emergency',
            monthOld: {
                amount: '$100.000',
                qty: '100 unid',
            },
            monthNew: {
                amount: '$100.000',
                qty: '100 unid',
            },
            status: 'active',
            dateCreated: '11/01/2023',
            dateModified: '10/10/2023',
            tags: [
                {
                    icon: 'pi pi-list',
                    name: 'Descripción:',
                    description: 'Modificación de saldos de inventario,con efecto en pérdidas por valores elevados'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Pérdidas de inventario, procedimientos de control insuficientes'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis:',
                    description: 'Identifcar la naturaleza del movimiento de inventario, existencia de autorización y proceso afectado'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Programar inventarios de control cíclicos y mejorar controles operacionales'
                },
            ]
        },
        {
            id: 3,
            name: 'NOTAS DE CREDITO MAYOR AL DOCUMENTO DE VENTA',
            average: '50',
            type: 'Post venta',
            tab: 'operacionales',
            groupBy: 'emergency',
            monthOld: {
                amount: '$100.000',
                qty: '100 unid',
            },
            monthNew: {
                amount: '$100.000',
                qty: '100 unid',
            },
            status: 'active',
            dateCreated: '11/01/2023',
            dateModified: '10/10/2023',
            tags: [
                {
                    icon: 'pi pi-list',
                    name: 'Descripción:',
                    description: 'Notas de Crédito emitidas en unidades y/o precios, mayores al documento de venta que la origina'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Pérdidas financieras en el proceso de post venta'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis:',
                    description: 'Identificar que si esta inconsitencia se da por la modificación de valores al emitir la Nota de Crédito o hacer referencia a otro documento de venta'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Revisar posibles problemas en los sistemas, configuración adecuada de perfiles de usuarios para intervenir los sistemas'
                },
            ]
        },
        {
            id: 4,
            name: 'CUENTAS CONTABLES CON SALDOS INVERSOS',
            average: '50',
            type: 'Saldos',
            tab: 'contables',
            groupBy: 'warning',
            monthOld: {
                amount: '$100.000',
                qty: '100 unid',
            },
            monthNew: {
                amount: '$100.000',
                qty: '100 unid',
            },
            status: 'active',
            dateCreated: '12/10/2023',
            dateModified: '23/10/2023',
            tags: [
                {
                    icon: 'pi pi-list',
                    name: 'Descripción:',
                    description: 'Notas de Crédito emitidas en unidades y/o precios, mayores al documento de venta que la origina'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Pérdidas financieras en el proceso de post venta'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis:',
                    description: 'Identificar que si esta inconsitencia se da por la modificación de valores al emitir la Nota de Crédito o hacer referencia a otro documento de venta'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Revisar posibles problemas en los sistemas, configuración adecuada de perfiles de usuarios para intervenir los sistemas'
                },
            ]
        },
        {
            id: 5,
            name: 'Recepciones no encasilladas (WMS)',
            average: '50',
            type: 'Recepcion nacional',
            tab: 'logisticos',
            groupBy: 'warning',
            monthOld: {
                amount: '$100.000',
                qty: '100 unid',
            },
            monthNew: {
                amount: '$100.000',
                qty: '100 unid',
            },
            status: 'active',
            dateCreated: '11/20/2023',
            dateModified: '23/10/2023',
            tags: [
                {
                    icon: 'pi pi-list',
                    name: 'Descripción:',
                    description: 'Notas de Crédito emitidas en unidades y/o precios, mayores al documento de venta que la origina'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Pérdidas financieras en el proceso de post venta'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis:',
                    description: 'Identificar que si esta inconsitencia se da por la modificación de valores al emitir la Nota de Crédito o hacer referencia a otro documento de venta'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Revisar posibles problemas en los sistemas, configuración adecuada de perfiles de usuarios para intervenir los sistemas'
                },
            ]
        },
        {
            id: 6,
            name: 'Importaciones en Tránsito sin recepción por tiempo excesivo',
            average: '50',
            type: 'Recepcion importaciones',
            tab: 'logisticos',
            groupBy: 'warning',
            monthOld: {
                amount: '$100.000',
                qty: '100 unid',
            },
            monthNew: {
                amount: '$100.000',
                qty: '100 unid',
            },
            status: 'active',
            dateCreated: '12/12/2023',
            dateModified: '23/10/2023',
            tags: [
                {
                    icon: 'pi pi-list',
                    name: 'Descripción:',
                    description: 'Notas de Crédito emitidas en unidades y/o precios, mayores al documento de venta que la origina'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Pérdidas financieras en el proceso de post venta'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis:',
                    description: 'Identificar que si esta inconsitencia se da por la modificación de valores al emitir la Nota de Crédito o hacer referencia a otro documento de venta'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Revisar posibles problemas en los sistemas, configuración adecuada de perfiles de usuarios para intervenir los sistemas'
                },
            ]
        },
        {
            id: 7,
            name: 'Notas de Crédito Reiteradas',
            average: '50',
            type: 'Post venta',
            tab: 'operacionales',
            groupBy: 'info',
            monthOld: {
                amount: '$100.000',
                qty: '100 unid',
            },
            monthNew: {
                amount: '$100.000',
                qty: '100 unid',
            },
            status: 'active',
            dateCreated: '11/30/2023',
            dateModified: '23/10/2023',
            tags: [
                {
                    icon: 'pi pi-list',
                    name: 'Descripción:',
                    description: 'Notas de Crédito emitidas en unidades y/o precios, mayores al documento de venta que la origina'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Pérdidas financieras en el proceso de post venta'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis:',
                    description: 'Identificar que si esta inconsitencia se da por la modificación de valores al emitir la Nota de Crédito o hacer referencia a otro documento de venta'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Revisar posibles problemas en los sistemas, configuración adecuada de perfiles de usuarios para intervenir los sistemas'
                },
            ]
        },
        {
            id: 8,
            name: "SKU's en Staging por tiempo excesivo",
            average: '50',
            type: 'almacenamiento',
            tab: 'logisticos',
            groupBy: 'info',
            monthOld: {
                amount: '$100.000',
                qty: '100 unid',
            },
            monthNew: {
                amount: '$100.000',
                qty: '100 unid',
            },
            status: 'active',
            dateCreated: '12/31/2023',
            dateModified: '23/10/2023',
            tags: [
                {
                    icon: 'pi pi-list',
                    name: 'Descripción:',
                    description: 'Notas de Crédito emitidas en unidades y/o precios, mayores al documento de venta que la origina'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Pérdidas financieras en el proceso de post venta'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis:',
                    description: 'Identificar que si esta inconsitencia se da por la modificación de valores al emitir la Nota de Crédito o hacer referencia a otro documento de venta'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Revisar posibles problemas en los sistemas, configuración adecuada de perfiles de usuarios para intervenir los sistemas'
                },
            ]
        },
        {
            id: 9,
            name: 'Diarios Manuales posterior a fecha de cierre contable',
            average: '50',
            type: 'Ajustes',
            tab: 'contables',
            groupBy: 'info',
            monthOld: {
                amount: '$100.000',
                qty: '100 unid',
            },
            monthNew: {
                amount: '$100.000',
                qty: '100 unid',
            },
            status: 'active',
            dateCreated: '11/28/2023',
            dateModified: '23/10/2023',
            tags: [
                {
                    icon: 'pi pi-list',
                    name: 'Descripción:',
                    description: 'Notas de Crédito emitidas en unidades y/o precios, mayores al documento de venta que la origina'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Pérdidas financieras en el proceso de post venta'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis:',
                    description: 'Identificar que si esta inconsitencia se da por la modificación de valores al emitir la Nota de Crédito o hacer referencia a otro documento de venta'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Revisar posibles problemas en los sistemas, configuración adecuada de perfiles de usuarios para intervenir los sistemas'
                },
            ]
        },
        {
            id: 10,
            name: 'Sobre stock con compras',
            average: '50',
            type: 'Compras',
            tab: 'operacionales',
            groupBy: 'warning',
            monthOld: {
                amount: '$100.000',
                qty: '100 unid',
            },
            monthNew: {
                amount: '$100.000',
                qty: '100 unid',
            },
            status: 'active',
            dateCreated: '11/28/2023',
            dateModified: '23/10/2023',
            tags: [
                {
                    icon: 'pi pi-list',
                    name: 'Descripción:',
                    description: 'Notas de Crédito emitidas en unidades y/o precios, mayores al documento de venta que la origina'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Pérdidas financieras en el proceso de post venta'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis:',
                    description: 'Identificar que si esta inconsitencia se da por la modificación de valores al emitir la Nota de Crédito o hacer referencia a otro documento de venta'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Revisar posibles problemas en los sistemas, configuración adecuada de perfiles de usuarios para intervenir los sistemas'
                },
            ]
        },
        {
            id: 11,
            name: 'Refacturaciones reiteradas en Cuentas por Cobrar',
            average: '50',
            type: 'cuentas por cobrar',
            tab: 'crediticios',
            groupBy: 'warning',
            monthOld: {
                amount: '$100.000',
                qty: '100 unid',
            },
            monthNew: {
                amount: '$100.000',
                qty: '100 unid',
            },
            status: 'active',
            dateCreated: '11/28/2023',
            dateModified: '23/10/2023',
            tags: [
                {
                    icon: 'pi pi-list',
                    name: 'Descripción:',
                    description: 'Notas de Crédito emitidas en unidades y/o precios, mayores al documento de venta que la origina'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Pérdidas financieras en el proceso de post venta'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis:',
                    description: 'Identificar que si esta inconsitencia se da por la modificación de valores al emitir la Nota de Crédito o hacer referencia a otro documento de venta'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Revisar posibles problemas en los sistemas, configuración adecuada de perfiles de usuarios para intervenir los sistemas'
                },
            ]
        },
    ],
    children: null
 }