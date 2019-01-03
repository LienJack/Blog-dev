module.exports = {
  title: 'lien的知识库',
  description: 'Beta测试版（持续更新）',
  base: '/Blog/',
  themeConfig: {
    nav: [
        { text: '主页', link: '/' },
        { text: '知识',
          items: [
            { text: 'JavaScript', link: '/knowledge/js/' },
            { text: 'css', link: '/knowledge/css/' },
            { text: '网络', link: '/knowledge/network/' },
            { text: '数据结构', link: '/knowledge/dataStructure/' },
          ] 
        },
        { text: '工程', link: '/work/' },
        { text: '杂文', link: '/essay/' },
        { text: '关于', link: '/about/' },
        { text: 'Github', link: 'https://github.com/LienJack/Blog-dev' },
    ],
    sidebar: {
      '/knowledge/js/': [
        {
          title: 'javascript',
          children: [
            '',
            '1.type',
            '1.typeDetail',
            '2.scope',
            '3.this',
            '4.oop',
            '5.async'
          ]
        }
      ],
    '/knowledge/learn/':[
      {
        title: '学习前端心得',
        children: [
          '',
          'develop.md',
          'more.md',
          'ssh.md'
        ]
      }
    ],
    '/essay/':[
      {
        title: '收藏的杂文',
        children: [
          '',
          '20190103',
        ]
      }
    ]
    },
    sidebarDepth: 1,
  },
}