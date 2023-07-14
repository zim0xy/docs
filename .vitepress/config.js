import { defineConfig } from 'vitepress'

const sidebars = {
  gettingStarted: {
    text: 'Начало Работы',
    collapsed: true,
    items: [
      { text: 'Вступление', link: '/getting-started/introduction' },
    ],
  }
}

export default defineConfig({
  lang: 'ru-RU',
  title: 'Zimoxy',
  description:
    'Платформа для разработчиков Zimoxy это набор инструментов API и ресурсов прекрасно сочитаюшихся с приложениями, чтобы помочь вам создавать, интегрировать сервисы Zimoxy в ваше приложение.',
  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: 'with-subfolders',
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  themeConfig: {
    logo: '/images/logo.png',
    siteTitle: 'Zimoxy',
    algolia: {
      appId: '1GIFSU1REV',
      apiKey: '6a9bb2036e456356e224ece74546ca14',
      indexName: 'hono',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zim0xy' },
      { icon: 'discord', link: 'https://discord.gg/PVBxgDwaJE' },
      { icon: 'vk', link: 'https:/vk.com/zimoxy_official' },
    ],
    editLink: {
      pattern: 'https://github.com/zim0xy/docs/edit/main/:path',
      text: 'Изменить эту страницу на GitHub',
    },
    footer: {
      message: 'Выпущено под лицензией MIT.',
      copyright: 'Copyright © 2023-present Zimoxy, Inc.',
    },
    sidebar: {
      '/': [
        sidebars['gettingStarted'],
      ],
    },
  },
  head: [
    ['meta', { property: 'og:image', content: 'https://hono.dev/images/hono-title.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'twitter:domain', content: 'hono.dev' }],
    ['meta', { property: 'twitter:image', content: 'https://hono.dev/images/hono-title.png' }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  ],
  titleTemplate: 'Zimoxy | :title',
})
