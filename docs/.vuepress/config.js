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
            { text: 'UI框架', link: '/lien-ui/' },
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
                        '1start-learn',
                        '2vue-constructor',
                        '3vue-example',
                        '4vue-normalize',
                        '5vue-merge',
                        '6vue-init-start',
                        '7vue-reactive',
                        '8vue-reactive-dep-watch',
                        '9vue-state-init',
                        '80vue-compiler-start',
                        '81vue-lexical-analysis',
                        '82vue-parsing',
                        '83vue-parsing-2',
                        '84vue-codegen',
                        '85vue-vdom',
                        '86vue-vdom-patch'
                      ]
                    }
                     ],
        },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated', 
},
  
}