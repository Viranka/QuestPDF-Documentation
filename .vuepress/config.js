module.exports = {
    title: 'Quest PDF',
    description: 'QuestPDF is a modern library that can help you with generating PDF documents in your .NET application by using friendly, discoverable and predictable C# fluent API.',
    head: [
        ['link', { rel: 'icon', href: '/favicon.svg' }],
        ['link', { rel: 'icon', href: '/favicon.png' }],
    ],
    evergreen: true,
    base: '/documentation',
    dest: '/workspace/dist',
    themeConfig: {
        displayAllHeaders: true,
        sidebarDepth: 3,
        nav: [
            { text: 'Homepage', link: 'https://www.questpdf.com' },
            { text: 'Documentation', link: '/' },
            { text: 'Sample code', link: 'https://github.com/QuestPDF/QuestPDF' },
            { text: 'Nuget', link: 'https://www.nuget.org/packages/QuestPDF/' }
        ],
        sidebar: {
            '/': [
                '/',
                'releases',
                'getting-started',
                'api-reference',
                'patterns-and-practices',
                'acknowledgements'
            ]
        }
    },
    markdown: {
        plugins: {
            'markdown-it-imsize': {}
        }
    },
    plugins: {
        '@vuepress/google-analytics':
          {
            'ga': 'UA-133910186-6' // UA-00000000-0
          }
    }
}

