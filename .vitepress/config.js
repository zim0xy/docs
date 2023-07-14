import { defineConfig } from 'vitepress'

const sidebars = {
  gettingStarted: {
    text: 'Начало Работы',
    collapsed: true,
    items: [
      { text: 'Вступление', link: '/getting-started/introduction' },
    ],
  },
  Topic: {
    text: 'Темы',
    collapsed: true,
     items: [
      { text: 'OAuth2', link: '/topics/oauth2' },
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
    next: 'Следующая страница',
    prev: 'Предыдущая страница',
    i18nRouting: true,
    logo: { 
        light: 'https://raw.githubusercontent.com/zim0xy/releases/main/products/content/logo-in-light-theme.svg',
        dark: 'https://raw.githubusercontent.com/zim0xy/releases/main/products/content/logo-in-dark-theme.svg',
    },
    siteTitle: false,
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                noResultsText: 'Ничего не найдено.',
                resetButtonTitle: 'четкие критерии запроса',
                footer: {
                  selectText: 'что-бы выбрать',
                  navigateText: 'что-бы переключать',
                  closeText: 'что-бы закрыть'
                }
              }
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zim0xy' },
      { icon: 'discord', link: 'https://discord.gg/PVBxgDwaJE' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><title>VK</title><path d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z"/></svg>'
        },
        link: 'https:/vk.com/zimoxy_official',
        ariaLabel: 'vk'
      }
    ],
    editLink: {
      pattern: 'https://github.com/zim0xy/docs/edit/main/:path',
      text: 'Изменить эту страницу на GitHub',
    },
    footer: {
      message: 'Все права защищены.',
      copyright: '© Zimoxy, Inc., 2023 г.',
      next: 'Следующая страница',
      prev: 'Предыдущая страница',
    },
    sidebar: {
      '/': [
        sidebars['gettingStarted','Topic'],
      ],
    },
    lastUpdatedText: 'Последнее обновление',
    outlineTitle: 'На этой странице'
  },
  head: [
    ['meta', { property: 'og:image', content: 'https://github.com/zim0xy/releases/blob/main/products/content/Thumbnail.png?raw=true' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'twitter:domain', content: 'docs.zimoxy.dev' }],
    ['meta', { property: 'twitter:image', content: 'https://github.com/zim0xy/releases/blob/main/products/content/Thumbnail.png?raw=true' }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  ],
  titleTemplate: 'Zimoxy | :title',
})
