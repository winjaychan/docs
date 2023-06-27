import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
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
