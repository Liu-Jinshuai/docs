module.exports = {
    base: '/printeaseDocs/',
    title: 'Printease',
    themeConfig: {
        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'About printease', link: '/src/guide/about-printease' },
                    { text: 'Getting Started', link: '/src/guide/gettingStarted' }
                ]
            },
            {
                text: 'tutorial',
                items: [
                    { text: 'Set encoding', link: '/src/guide/set-encoding' },
                    { text: 'Print text', link: '/src/guide/print-text' },
                    { text: 'Print Bar code', link: '/src/guide/print-barcode' },
                    { text: 'Print QR code', link: '/src/guide/print-qr-code' },
                    { text: 'Print image', link: '/src/guide/print-image' },
                ]
            },
            {
                text: 'utils',
                items: [
                    { text: 'Data sharding', link: '/src/guide/data-sharding' },
                ]
            },
            {
                text: 'api',
                items: [
                    { text: 'Tspl', link: '/src/api/tspl', },
                    {
                        text: 'ImagePixelInformation', items: [
                            { text: 'javascript', link: '/src/api/ImagePixelInformation/JavaScriptImagePixelInformation' },
                            { text: 'uniapp', link: '/src/api/ImagePixelInformation/UniappImagePixelInformation' },
                        ]
                    },
                    {
                        text: 'dataProcessing', link: '/src/api/dataProcessing'
                    }
                ]
            }
        ],
        editLink: {
            pattern: 'https://github.com/Liu-Jinshuai/printeaseDocs/tree/master/:path',
            text: 'Edit this page on GitHub'
        }
    }
}