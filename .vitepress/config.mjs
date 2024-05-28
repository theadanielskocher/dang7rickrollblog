import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "dang7rickroll's website",
 // description: "Một programmer gà",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
  //    { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'About', link: '/about' },
      { text: 'Markdown Editor', link: '/markdowneditor.md'},
      { text: 'Music', link: '/music'}
    ],

    // sidebar: [
    //   {
    //     text: 'CP',
    //     items: [
    //       { text: 'Tổ hợp (Combinatorics)', link: 'posts/CP/combinatorics.md'},
    //       { text: 'Gray Code', link: 'posts/CP/graycode.md'},
    //     ]
    //   },
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/theadanielskocher' },
      { icon: 'facebook', link: 'https://facebook.com/godnient'}
    ],

      search: {
        provider: 'local'
      },

      footer: {
        message: 'Powered by Vitepress & Surge',
        copyright: 'Developed by Nguyen Dinh Hai Dang'
      }
  },


   markdown: {
        math : true
   },

  lastUpdated: false

}
)



