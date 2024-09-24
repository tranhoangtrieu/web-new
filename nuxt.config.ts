
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  
  app: {
    baseURL: '/web-hp/',
    head: {
      title: 'Web-HP',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone-no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
          crossorigin: ''
        },
        { rel: 'stylesheet', 
          href:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' 
        }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', type: 'text/javascript' },
        { src:'https://code.jquery.com/jquery-3.7.1.min.js', type: 'text/javascript'}
      ]
    }
  },

 
  
  
//https://raw.githubusercontent.com/tranhoangtrieu/web-hp/refs/heads/gh-pages/

})
