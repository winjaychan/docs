import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "云学习",
  description: "云上学习，知识同享",
  lastUpdated: true,
  sitemap:{
    hostname:'https://wwwcloud.com.cn',
    lastmodDateOnly: false,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo.png',
    search: {
      provider: 'local'
    },
    outline: {
      level: [2,6],
      label: '页内导航'
    },
    docFooter:{
      prev: '上一篇',
      next: '下一篇'
    },
    nav: [
      { text: '我的主页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      { text: 'JVM实践', link: '/jvm/' },
      { text: 'AI大模型', link: '/ai/' },
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
          text: '栏目简介',
          items: [
            { text: '前言', link: '/jvm/' }
          ]
        },
        {
          text: 'JVM常用工具',
          items: [
            { text: 'jvm命令', link: '/jvm/tools/jvm_commands' },
            { text: 'arthas', link: '/jvm/tools/arthas' },
          ]
        },
        {
          text: 'JVM调优'
        }
      ],
      '/ai/': [
        {
          text: 'AI大模型',
          items: [
            {text: '前言', link: '/ai/'},
          ]
        },
        {
          text: '大型语言模型工具',
          items: [
            {text: 'Ollama', link: '/ai/tools/ollama'},
            {text: 'Open WebUI工具', link: '/ai/tools/open-webui'},
          ]
        },
        {
          text: 'Gemma模型',
          items: [
            {text: 'Gemma初体验', link: '/ai/llm/gemma/gemma_experience'},
          ]
        },
        {
          text: 'Spring生态',
          items: [
            {text: 'Spring AI', link: '/ai/spring/spring-ai'},
          ]
        }
      ],
      '/concurrency/': [
        {
          text: '栏目简介',
          items: [
            { text: '前言', link: '/concurrency/' },
          ]
        }
      ],
      '/algorithm/': [
        {
          text: '栏目简介',
          items: [
            { text: '前言', link: '/algorithm/' },
          ]
        }
      ],
      '/others/': [
        {
          text: '栏目简介',
          items: [
            { text: '前言', link: '/others/' },
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
    // ]
    footer: {
      //<a href="https://beian.miit.gov.cn/" target="_blank">您的备案号</a>
      copyright: 'Copyright © 2022-present <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2022104367号-1</a>'
    }
  },
  head: [
    [
      'meta',
      {name: 'keywords', content: '云学习, AI, JVM, 高并发, 算法'}
    ],
    // <meta name="google-site-verification" content="DqaJ5af0X2ZDs294k3G-JzOtkAlKW0zPiqgnCcZ2OdI" />
    //<meta name="google-site-verification" content="DqaJ5af0X2ZDs294k3G-JzOtkAlKW0zPiqgnCcZ2OdI" />
    //res.wwwcloud.com.cn/
    // http://res.wwwcloud.com.cn/page/?s=323828
    // <meta http-equiv="Content-Security-Policy" content="script-src 'self' https://example.com"></meta>
    // [
    //   'meta',
    //   {'http-equiv':'Content-Security-Policy', content:"default-src 'self'; script-src 'self' http://wm.lrswl.com"}
    // ],
    [
      'meta',
      {name:'google-site-verification', content:'DqaJ5af0X2ZDs294k3G-JzOtkAlKW0zPiqgnCcZ2OdI'}
    ],
    [
      'script',
      { async:"true", src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9489861553796481", crossorigin:"anonymous" },
    ],
    [
      'script',
      { async:"true", src: "http://wm.lrswl.com/page/?s=323828" }
    ],
    [
      'script',
      { async:"true", src: "http://wm.lrswl.com/page/s.php?s=323829&w=468&h=60" }
    ]
    
    // [
    //   'script',
    //   {},
    //   `var script = document.createElement('script');
    //   script.src = 'http://wm.lrswl.com/page/?s=323828';
    //   document.head.appendChild(script);`
    // ]

  ],
})
