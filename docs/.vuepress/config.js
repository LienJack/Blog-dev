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
            { text: 'css', link: '/lien-ui/' },
            { text: '关于', link: '/about/' }
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
              '1.typeDetail'
            ]
          }
        ],
    },
    sidebarDepth: 1,
    // lastUpdated: 'Last Updated', 
},
  
}