module.exports = {
  html        : true,
  images      : true,
  fonts       : true,
  static      : true,
  svgSprite   : true,
  ghPages     : true,
  stylesheets : true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
			app: ["./app.js"],
			catalog: ["./catalog.js"],
			product: ["./product.js"]
    }
  },

  browserSync: {
    proxy: 'http://kare.dev.rockettool.ru/',
    files: ['public/**'],
    serveStatic: ['public'],
    rewriteRules: [
      {
        match: new RegExp(/<link href="\/local\/templates\/kare_redisign\/css\/fonts\.css\?14944915562349" type="text\/css"  data-template-style="true"  rel="stylesheet" \/>/),
        fn: function() {
          return '';
        }
      },
      {
        match: new RegExp(/<link href="\/local\/templates\/kare_redisign\/css\/styles\.css\?149449155699052" type="text\/css"  data-template-style="true"  rel="stylesheet" \/>/),
        fn: function() {
          return '';
        }
      },
      {
        match: new RegExp(/<link href="\/local\/templates\/kare_redisign\/css\/custom\.css\?149449155683923" type="text\/css"  data-template-style="true"  rel="stylesheet" \/>/),
        fn: function() {
          return '';
        }
      },
      {
        match: new RegExp(/<link href="\/local\/templates\/kare_redisign\/css\/fonts\.css" rel='stylesheet' type='text\/css'>/),
        fn: function() {
          return '';
        }
      },
      {
        match: new RegExp(/<link href="\/local\/templates\/kare_redisign\/css\/new_main_page\.css\?v=2" rel='stylesheet' type='text\/css'>/),
        fn: function() {
          return '';
        }
      },
      {
        match: new RegExp('local/templates/kare_redisign/css/styles_new.css'),
        fn: function() {
          return 'stylesheets/app.css';
        }
      }
    ],
    // server: {
    //   // should match `dest` in
    //   // path-config.json
    //   baseDir: 'public'
    // }
  },

  production: {
    rev: true
  }
}
