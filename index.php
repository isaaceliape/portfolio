<!doctype html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="theme-color" content="#000000">
    <meta property="og:url" content="http://sclp.co">
    <meta property="og:type" content="website">
    <meta property="og:title" content="sclp ● ■ ▲">
    <meta property="og:description" content="sclp is a collection of isaac eliape’s work on web development and ui engineering">
    <meta property="og:image" content="http://sclp.co/OpenGraph.png">
    <link rel="apple-touch-icon" href="./apple_icon_iphone.png">
    <link rel="apple-touch-icon" sizes="152x152" href="./apple_icon_ipad.png">
    <link rel="apple-touch-icon" sizes="180x180" href="./apple_icon_iphone_retina.png">
    <link rel="apple-touch-icon" sizes="167x167" href="./apple_icon_ipad_retina.png">
    <meta name="apple-mobile-web-app-capable" content="no">
    <meta name="apple-mobile-web-app-title" content="sclp">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="manifest" href="/manifest.json">
    <link rel="shortcut icon" href="./favicon.ico?v4">
    <title>S C L P &nbsp; ● ■ ▲</title>

    <link rel="stylesheet" href="build/css/main.css">
  </head>

  <body class="App">
    <img src="assets/images/gamepad.png" alt="gamepad instructions" class="gamepad-message"/>
    <div class="cursor">+</div>
    <h1 class="menu show">
      <span>menu</span>
      <div class="icons">
        <img src="assets/images/Oval-black.svg"  />
        <img src="assets/images/Rectangle-black.svg"  />
        <img src="assets/images/Triangle-black.svg"  />
      </div>
    </h1>
    <h1 class="subtitle"></h1>
    <nav class="nav">
      <h1 class="close">close</h1>

      <div class="icon-wrapper circle" data-ratio="120">
        <img src="assets/images/Oval.svg" class="icon" />
      </div>
      <div class="icon-wrapper square" data-ratio="120">
        <img src="assets/images/Rectangle.svg" class="icon" />
      </div>
      <div class="icon-wrapper triangle" data-ratio="300">
        <img src="assets/images/Triangle.svg" class="icon" />
      </div>

      <ul class="nav-list">
        <li class="nav-item"><span class="link" data-page-id="about"data-icon-id="circle">about</span></li>
        <li class="nav-item"><span class="link" data-page-id="services"data-icon-id="square">services</span></li>
        <li class="nav-item"><span class="link" data-page-id="awards"data-icon-id="triangle">awards</span></li>
      </ul>
    </nav>
    <section class="page home">
      <div class="projects">
        <ul class="project-list">
          <div id="js-canvas-wrapper" class="canvas-wrapper"></div>
          <li class="project-item"><span>sclp</span></li>
          <li class="project-item" data-project-id="hpmagicwords"><span class="marquee">hpmagicwords</span></li>
          <li class="project-item" data-project-id="gettyendeless"><span class="marquee">gettyendeless</span></li>
          <li class="project-item" data-project-id="flplny"><span class="marquee">flplny</span></li>
          <li class="project-item" data-project-id="fundacaolemann"><span class="marquee">fundacaolemann</span></li>
        </ul>
      </div>
      <div class="project-detail">
        <div class="project-wrapper">
          <div class="project-hit-area"></div>
          <div class="project-content">
            <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, animi?</p>
            <ul class="list-itens">
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
            <p class="project-link">
              <a href="#" class="marquee" target="_blank">launch website</a>
            </p>
            <div class="close">close</div>
          </div>
        </div>
      </div>
    </section>

    <section class="page about">
      <p class="description">sclp is a collection of isaac eliape’s work on web development and ui engineering</p>
      <div class="call-to-action">
        <a href="https://linkedin.com/in/isaaceliape" target="_blank" class="marquee" rel="noopener noreferrer">linkedin</a>
      </div>
      <img src="assets/images/perfil.jpg" alt="Isaac Eliape" class="portrait">
      <a class="contact-link" href="mailto:hello@sclp.co?subject=site contact"><span class="contact-text">contact</span><span class="contact-email">hello@sclp.co</span></a>
      <div class="close">close</div>
    </section>

    <section class="page services">
      <ul class="services-list">
        <li class="services-list-item">ui engenneering</li>
        <li class="services-list-item">web applications  </li>
        <li class="services-list-item">single page apps</li>
        <li class="services-list-item">landing pages</li>
        <li class="services-list-item">animations</li>
        <li class="services-list-item">api integrations</li>
        <li class="services-list-item">css/html</li>
        <li class="services-list-item">javascript</li>
        <li class="services-list-item">cms</li>
      </ul>
      <div class="close">close</div>
    </section>

    <section class="page awards">
      <ul class="awards-list">
        <li class="awards-list-item">2 cannes lions</li>
        <li class="awards-list-item">3 awwwards</li>
        <li class="awards-list-item">1 css awards</li>
        <li class="awards-list-item">1 css light</li>
        <li class="awards-list-item">1 css nectar</li>
        <li class="awards-list-item">1 site inspire</li>
        <li class="awards-list-item">2 fwa</li>
      </ul>
      <div class="close">close</div>
    </section>

    <script src="build/js/bundle.js"></script>
    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <script>
        (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        e.src='https://www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
        ga('create','UA-XXXXX-X','auto');ga('send','pageview');
    </script>
  </body>
</html>
