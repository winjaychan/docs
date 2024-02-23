import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "云学习",
  description: "云上学习，知识同享",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '我的主页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      { text: 'JVM实践', link: '/jvm/' },
      { text: '高并发实践', link: '/concurrency/' },
      { text: '算法知识', link: '/algorithm/' }
    ],

    sidebar: {
      // '/': [
      //   {
      //     text: 'Examples',
      //     items: [
      //       { text: 'Markdown Examples', link: '/markdown-examples' },
      //       { text: 'Runtime API Examples', link: '/api-examples' }
      //     ]
      //   }
      // ],
      '/jvm/': [
        {
          text: 'JVM实践',
          items: [
            { text: '前言', link: '/jvm/' },
            { text: 'jvm1', link: '/jvm/jvm1' }
          ]
        }
      ],
      '/concurrency/': [
        {
          text: '高并发实践',
          items: [
            { text: '前言', link: '/concurrency/' },
          ]
        }
      ]
    },

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],
    
    footer: {
      copyright: 'Copyright © 2019-present 粤ICP备2022104367号-1'
    }
  },
  head: [
    [
      'script',
      { async:'', src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9489861553796481", crossorigin:"anonymous" }
    ]
  ],
})
