module.exports = {
  title: '个人主页',
  description: 'lien的知识库',
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
        { text: '关于', link: '/about/' },
        { text: 'Github', link: 'https://github.com/LienJack/' },
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
    },
    sidebarDepth: 1,
  },
}