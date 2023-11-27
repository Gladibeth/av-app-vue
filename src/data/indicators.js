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
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis de situación identificada:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
            ]
        },
        {
            id: 2,
            name: 'PÉRDIDAS DE INVENTARIO',
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
            dateCreated: '11/01/2023',
            dateModified: '10/10/2023',
            tags: [
                {
                    icon: 'pi pi-list',
                    name: 'Descripción:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis de situación identificada:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
            ]
        },
        {
            id: 3,
            name: 'NOTAS DE CREDITO MAYOR AL DOCUMENTO DE VENTA',
            average: '50',
            type: 'lienas de credito',
            tab: 'crediticios',
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
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis de situación identificada:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis de situación identificada:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
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
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis de situación identificada:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis de situación identificada:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis de situación identificada:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
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
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis de situación identificada:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                    icon: 'pi pi-list',
                    name: 'Descripción:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
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
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis de situación identificada:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
            ]
        },
        {
            id: 7,
            name: 'Notas de Crédito Mayor a documento Venta',
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
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-list',
                    name: 'Descripción:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis de situación identificada:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
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
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    icon: 'pi pi-list',
                    name: 'Descripción:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis de situación identificada:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
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
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis de situación identificada:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis de situación identificada:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis de situación identificada:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
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
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-exclamation-triangle',
                    name: 'Riesgo:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis de situación identificada:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis de situación identificada:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-sitemap',
                    name: 'Análisis de situación identificada:',
                    description: 'Transacciones facturadas fuera del horario de atensión a público'
                },
                {
                    icon: 'pi pi-flag',
                    name: 'Recomendaciones:',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
            ]
        },
    ],
    children: null
 }