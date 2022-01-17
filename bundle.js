(()=>{"use strict";var n={887:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),i=e.n(t),a=e(645),o=e.n(a)()(i());o.push([n.id,".container-cards {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-auto-rows: 1fr;\r\n  grid-gap: 21px;\r\n}\r\n\r\n.container-cards__col {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-gap: 21px;\r\n}\r\n\r\n.container-cards__row {\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n  grid-gap: 21px;\r\n}\r\n.container-card__item {\r\n  border-radius: 15px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  transition: box-shadow 0.3s ease;;\r\n}\r\n.container-card__item .like-img {\r\n  position: absolute;\r\n  width: auto;\r\n  height: auto;\r\n  right:10px ;\r\n  top: 10px;\r\n}\r\n\r\n.container-card__item img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.container-card__item:hover img {\r\n  transform: scale(1.1);\r\n}\r\n.container-card__item:hover {\r\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .container-cards {\r\n    grid-template-columns: 1fr;\r\n    grid-auto-rows: 1fr;\r\n  }\r\n}\r\n",""]);const s=o},698:(n,r,e)=>{e.d(r,{Z:()=>_});var t=e(81),i=e.n(t),a=e(645),o=e.n(a),s=e(667),l=e.n(s),c=new URL(e(343),e.b),d=new URL(e(32),e.b),m=new URL(e(46),e.b),p=new URL(e(616),e.b),f=new URL(e(184),e.b),h=new URL(e(697),e.b),u=o()(i()),g=l()(c),b=l()(d),v=l()(m),x=l()(p),y=l()(f),w=l()(h);u.push([n.id,"/* sofia-regular - latin */\r\n@font-face {\r\n    font-family: 'Sofia Pro';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local(''),\r\n         url("+g+") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\r\n         url("+b+") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n  }\r\n\r\n  /* sofia- bold - latin */\r\n@font-face {\r\n    font-family: 'Sofia Pro';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    src: local(''),\r\n         url("+v+") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\r\n         url("+x+") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n  }\r\n\r\n  /* Circular Std-regular - latin */\r\n@font-face {\r\n    font-family: 'Circular Std';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local(''),\r\n         url("+y+") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\r\n         url("+w+") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n  }",""]);const _=u},248:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),i=e.n(t),a=e(645),o=e.n(a)()(i());o.push([n.id,".header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-top: 29px;\r\n  padding-bottom: 58px;\r\n}\r\n\r\n.main-logo {\r\n  display: flex;\r\n  align-items: flex-end;\r\n  margin-right: 100px;\r\n}\r\n\r\n.header-cards {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.search-line {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.search-line input {\r\n  border: none;\r\n  padding: 5px;\r\n}\r\n\r\n.search-line input:focus {\r\n  outline: solid 1px gray;\r\n}\r\n.search-link {\r\n  margin-right: 21px;\r\n}\r\n\r\n.form-search input::-webkit-input-placeholder {\r\n  size: 17px;\r\n  color: rgb(189, 189, 189, 1);\r\n}\r\n.form-search input::-moz-placeholder {\r\n  size: 17px;\r\n  color: rgb(189, 189, 189, 1);\r\n}\r\n.form-search input:-ms-input-placeholder {\r\n  size: 17px;\r\n  color: rgb(189, 189, 189, 1);\r\n}\r\n.form-search input::-ms-input-placeholder {\r\n  size: 17px;\r\n  color: rgb(189, 189, 189, 1);\r\n}\r\n.form-search input::placeholder {\r\n  size: 17px;\r\n  color: rgb(189, 189, 189, 1);\r\n}\r\n\r\n.header-menu {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.main-menu {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  list-style-type: none;\r\n  margin-right: 50px;\r\n}\r\n\r\n.main-menu__item a {\r\n  text-decoration: none;\r\n  color: rgba(0, 0, 0, 1);\r\n}\r\n.main-menu__item {\r\n  margin-right: 42px;\r\n}\r\n\r\n.main-menu__item:last-child {\r\n  margin-right: 0;\r\n}\r\n\r\n.main-menu__item a:hover {\r\n  padding-bottom: 7px;\r\n  border-bottom: solid 3px;\r\n}\r\n\r\n.person-data {\r\n  display: flex;\r\n  align-items: flex-end;\r\n}\r\n\r\n.person-data__item {\r\n  margin-right: 30px;\r\n}\r\n.person-data__item a{\r\n  text-decoration: none;\r\n}\r\n.person-data__item:last-child {\r\n  margin-right: 0;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .header {\r\n    flex-direction: column;\r\n  }\r\n  .header-cards {\r\n    flex-direction: column;\r\n  }\r\n  .main-logo {\r\n    margin-bottom: 20px;\r\n  }\r\n  .search-line {\r\n    justify-content: flex-start;\r\n  }\r\n  .header-menu {\r\n    width: 100%;\r\n    overflow: auto;\r\n  }\r\n  .main-menu {\r\n    padding: 0;\r\n  }\r\n}\r\n",""]);const s=o},133:(n,r,e)=>{e.d(r,{Z:()=>g});var t=e(81),i=e.n(t),a=e(645),o=e.n(a),s=e(667),l=e.n(s),c=new URL(e(862),e.b),d=new URL(e(951),e.b),m=new URL(e(519),e.b),p=o()(i()),f=l()(c),h=l()(d),u=l()(m);p.push([n.id,"@font-face {\n  font-family: 'icomoon';\n  src:\n    url("+f+") format('truetype'),\n    url("+h+") format('woff'),\n    url("+u+') format(\'svg\');\n  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n  \n\n}\n\n[class^="ic-"], [class*=" ic-"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \'icomoon\' !important;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  color: black;\n \n  \n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.ic-search:before {\n  content: "\\e900";\n}\n.ic-person:before {\n  content: "\\e901";\n}\n.ic-basket:before {\n  content: "\\e902";\n}\n',""]);const g=p},238:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),i=e.n(t),a=e(645),o=e.n(a)()(i());o.push([n.id,'html {\r\n  box-sizing: border-box;\r\n}\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n  font-family: "Circular Std", Arial, Helvetica, sans-serif;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  white-space:nowrap;\r\n  color: rgba(0, 0, 0, 1);\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.wrapper {\r\n  width: 1330px;\r\n  margin: 0 auto;\r\n  max-width: 100%;\r\n  padding: 0 10px 50px 10px;\r\n}\r\n\r\n.wrapper-main {\r\n  width: 1075px;\r\n  margin: 0 auto;\r\n  max-width: 100%;\r\n}\r\n\r\n.main-section {\r\n  display: flex;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .main-section {\r\n    flex-direction: column;\r\n  }\r\n}\r\n',""]);const s=o},819:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),i=e.n(t),a=e(645),o=e.n(a)()(i());o.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\n html {\r\n    line-height: 1.15; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n  }\r\n  \r\n  /* Sections\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the margin in all browsers.\r\n   */\r\n  \r\n  body {\r\n    margin: 0;\r\n  }\r\n  \r\n  /**\r\n   * Render the `main` element consistently in IE.\r\n   */\r\n  \r\n  main {\r\n    display: block;\r\n  }\r\n  \r\n  /**\r\n   * Correct the font size and margin on `h1` elements within `section` and\r\n   * `article` contexts in Chrome, Firefox, and Safari.\r\n   */\r\n  \r\n  h1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n  }\r\n  \r\n  /* Grouping content\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * 1. Add the correct box sizing in Firefox.\r\n   * 2. Show the overflow in Edge and IE.\r\n   */\r\n  \r\n  hr {\r\n    box-sizing: content-box; /* 1 */\r\n    height: 0; /* 1 */\r\n    overflow: visible; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n  \r\n  pre {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n  }\r\n  \r\n  /* Text-level semantics\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the gray background on active links in IE 10.\r\n   */\r\n  \r\n  a {\r\n    background-color: transparent;\r\n  }\r\n  \r\n  /**\r\n   * 1. Remove the bottom border in Chrome 57-\r\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n   */\r\n  \r\n  abbr[title] {\r\n    border-bottom: none; /* 1 */\r\n    text-decoration: underline; /* 2 */\r\n    text-decoration: underline dotted; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct font weight in Chrome, Edge, and Safari.\r\n   */\r\n  \r\n  b,\r\n  strong {\r\n    font-weight: bolder;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n  \r\n  code,\r\n  kbd,\r\n  samp {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct font size in all browsers.\r\n   */\r\n  \r\n  small {\r\n    font-size: 80%;\r\n  }\r\n  \r\n  /**\r\n   * Prevent `sub` and `sup` elements from affecting the line height in\r\n   * all browsers.\r\n   */\r\n  \r\n  sub,\r\n  sup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  sub {\r\n    bottom: -0.25em;\r\n  }\r\n  \r\n  sup {\r\n    top: -0.5em;\r\n  }\r\n  \r\n  /* Embedded content\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the border on images inside links in IE 10.\r\n   */\r\n  \r\n  img {\r\n    border-style: none;\r\n  }\r\n  \r\n  /* Forms\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * 1. Change the font styles in all browsers.\r\n   * 2. Remove the margin in Firefox and Safari.\r\n   */\r\n  \r\n  button,\r\n  input,\r\n  optgroup,\r\n  select,\r\n  textarea {\r\n    font-family: inherit; /* 1 */\r\n    font-size: 100%; /* 1 */\r\n    line-height: 1.15; /* 1 */\r\n    margin: 0; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Show the overflow in IE.\r\n   * 1. Show the overflow in Edge.\r\n   */\r\n  \r\n  button,\r\n  input { /* 1 */\r\n    overflow: visible;\r\n  }\r\n  \r\n  /**\r\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n   * 1. Remove the inheritance of text transform in Firefox.\r\n   */\r\n  \r\n  button,\r\n  select { /* 1 */\r\n    text-transform: none;\r\n  }\r\n  \r\n  /**\r\n   * Correct the inability to style clickable types in iOS and Safari.\r\n   */\r\n  \r\n  button,\r\n  [type="button"],\r\n  [type="reset"],\r\n  [type="submit"] {\r\n    -webkit-appearance: button;\r\n  }\r\n  \r\n  /**\r\n   * Remove the inner border and padding in Firefox.\r\n   */\r\n  \r\n  button::-moz-focus-inner,\r\n  [type="button"]::-moz-focus-inner,\r\n  [type="reset"]::-moz-focus-inner,\r\n  [type="submit"]::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n  }\r\n  \r\n  /**\r\n   * Restore the focus styles unset by the previous rule.\r\n   */\r\n  \r\n  button:-moz-focusring,\r\n  [type="button"]:-moz-focusring,\r\n  [type="reset"]:-moz-focusring,\r\n  [type="submit"]:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n  }\r\n  \r\n  /**\r\n   * Correct the padding in Firefox.\r\n   */\r\n  \r\n  fieldset {\r\n    padding: 0.35em 0.75em 0.625em;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the text wrapping in Edge and IE.\r\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n   * 3. Remove the padding so developers are not caught out when they zero out\r\n   *    `fieldset` elements in all browsers.\r\n   */\r\n  \r\n  legend {\r\n    box-sizing: border-box; /* 1 */\r\n    color: inherit; /* 2 */\r\n    display: table; /* 1 */\r\n    max-width: 100%; /* 1 */\r\n    padding: 0; /* 3 */\r\n    white-space: normal; /* 1 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n   */\r\n  \r\n  progress {\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  /**\r\n   * Remove the default vertical scrollbar in IE 10+.\r\n   */\r\n  \r\n  textarea {\r\n    overflow: auto;\r\n  }\r\n  \r\n  /**\r\n   * 1. Add the correct box sizing in IE 10.\r\n   * 2. Remove the padding in IE 10.\r\n   */\r\n  \r\n  [type="checkbox"],\r\n  [type="radio"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Correct the cursor style of increment and decrement buttons in Chrome.\r\n   */\r\n  \r\n  [type="number"]::-webkit-inner-spin-button,\r\n  [type="number"]::-webkit-outer-spin-button {\r\n    height: auto;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the odd appearance in Chrome and Safari.\r\n   * 2. Correct the outline style in Safari.\r\n   */\r\n  \r\n  [type="search"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    outline-offset: -2px; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Remove the inner padding in Chrome and Safari on macOS.\r\n   */\r\n  \r\n  [type="search"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inability to style clickable types in iOS and Safari.\r\n   * 2. Change font properties to `inherit` in Safari.\r\n   */\r\n  \r\n  ::-webkit-file-upload-button {\r\n    -webkit-appearance: button; /* 1 */\r\n    font: inherit; /* 2 */\r\n  }\r\n  \r\n  /* Interactive\r\n     ========================================================================== */\r\n  \r\n  /*\r\n   * Add the correct display in Edge, IE 10+, and Firefox.\r\n   */\r\n  \r\n  details {\r\n    display: block;\r\n  }\r\n  \r\n  /*\r\n   * Add the correct display in all browsers.\r\n   */\r\n  \r\n  summary {\r\n    display: list-item;\r\n  }\r\n  \r\n  /* Misc\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Add the correct display in IE 10+.\r\n   */\r\n  \r\n  template {\r\n    display: none;\r\n  }\r\n  \r\n  /**\r\n   * Add the correct display in IE 10.\r\n   */\r\n  \r\n  [hidden] {\r\n    display: none;\r\n  }\r\n  ',""]);const s=o},716:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),i=e.n(t),a=e(645),o=e.n(a)()(i());o.push([n.id,'.side-box {\r\n  font-family: "Sofia Pro", Arial, Helvetica, sans-serif;\r\n  margin-right: 85px;\r\n}\r\n.side-menu {\r\n  list-style-type: none;\r\n  margin-top: 45px;\r\n  padding: 0;\r\n}\r\n\r\n.side-menu a {\r\n  text-decoration: none;\r\n}\r\n\r\n.side-box h1 {\r\n  font-weight: 800;\r\n  font-size: 30px;\r\n  margin-bottom: 45px;\r\n}\r\n\r\n.side-menu__item {\r\n  margin-bottom: 25px;\r\n  transition: transform 0.2s ease;\r\n}\r\n\r\n.side-menu__item a {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.side-menu__item span {\r\n  font-size: 16px;\r\n  color: rgba(0, 0, 0, 1);\r\n}\r\n\r\n.side-menu__item:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.side-menu__item img {\r\n  padding-right: 10px;\r\n}\r\n\r\n.helper {\r\n  display: inline-block;\r\n  position: relative;\r\n  bottom: -300px;\r\n  left: 30px;\r\n  z-index: 2;\r\n  transition: transform 0.2s ease;\r\n}\r\n\r\n.helper a {\r\n  text-decoration: none;\r\n  color: rgba(0, 0, 0, 1);\r\n}\r\n\r\n.helper span {\r\n  color: rgba(0, 0, 0, 1);\r\n}\r\n\r\n.helper img {\r\n  margin-right: 33px;\r\n}\r\n\r\n.side-menu__item:hover {\r\n  transform: translateX(10px);\r\n}\r\n\r\n.helper:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .side-box {\r\n    margin-right: 0;\r\n  }\r\n  .side-menu {\r\n    display: flex;\r\n    width: 100%;\r\n    overflow: auto;\r\n  }\r\n  .side-menu__item {\r\n    margin-right: 20px;\r\n  }\r\n  .side-menu__item:last-child {\r\n    margin-right: 0;\r\n  }\r\n  .side-menu__item:hover {\r\n    transform: none;\r\n  }\r\n  .helper {\r\n    position: unset;\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n',""]);const s=o},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(t)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);t&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),r.push(d))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},o=[],s=0;s<n.length;s++){var l=n[s],c=t.base?l[0]+t.base:l[0],d=a[c]||0,m="".concat(c," ").concat(d);a[c]=d+1;var p=e(m),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var h=i(f,t);t.byIndex=s,r.splice(s,0,{identifier:m,updater:h,references:1})}o.push(m)}return o}function i(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,i){var a=t(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var s=e(a[o]);r[s].references--}for(var l=t(n,i),c=0;c<a.length;c++){var d=e(a[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=l}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,i&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},697:(n,r,e)=>{n.exports=e.p+"1dd319b87a915b106596.woff"},184:(n,r,e)=>{n.exports=e.p+"2858431679b815919f95.woff2"},616:(n,r,e)=>{n.exports=e.p+"086ed00f3060992f2938.woff"},46:(n,r,e)=>{n.exports=e.p+"1d7186488612ac20891f.woff2"},32:(n,r,e)=>{n.exports=e.p+"c4e6d42592d5d49c4030.woff"},343:(n,r,e)=>{n.exports=e.p+"9c6504c5f5dc77ba26d5.woff2"},519:(n,r,e)=>{n.exports=e.p+"f4e2413bf4c796ab11ae.svg"},862:(n,r,e)=>{n.exports=e.p+"a663c9d4b3bb7d671209.ttf"},951:(n,r,e)=>{n.exports=e.p+"43855f706ad355690c9c.woff"},992:(n,r,e)=>{n.exports=e.p+"defc35b91e81635d2ee3.svg"},202:(n,r,e)=>{n.exports=e.p+"a4b7f735ee8b81d1828f.svg"},333:(n,r,e)=>{n.exports=e.p+"61db1befc152f5595a23.svg"},380:(n,r,e)=>{n.exports=e.p+"6e6902a7d2d87b26c9db.svg"},126:(n,r,e)=>{n.exports=e.p+"e53c5264d90c051d45fd.svg"},83:(n,r,e)=>{n.exports=e.p+"83f12cd40c465f885d2b.svg"},44:(n,r,e)=>{n.exports=e.p+"0e9807cd030fdaf459d1.svg"},67:(n,r,e)=>{n.exports=e.p+"463445097892ae9231ae.svg"},968:(n,r,e)=>{n.exports=e.p+"6d192a9e9af86c0b5ba5.svg"},833:(n,r,e)=>{n.exports=e.p+"8a805a93eff5491f6512.png"},65:(n,r,e)=>{n.exports=e.p+"97ed8bbf7d3dd50932c9.png"},963:(n,r,e)=>{n.exports=e.p+"88fcfbf88219615d4e7d.png"},830:(n,r,e)=>{n.exports=e.p+"e6dfe931c3346a384e2f.png"},477:(n,r,e)=>{n.exports=e.p+"944276bc86b410b9c660.png"},383:(n,r,e)=>{n.exports=e.p+"a42f9555c7e5e93e082e.png"},9:(n,r,e)=>{n.exports=e.p+"94425ba35355b55fdd8e.png"},885:(n,r,e)=>{n.exports=e.p+"243c16aa708e90aaac91.png"},73:(n,r,e)=>{n.exports=e.p+"9a5da67f2f0d3c4c1e4a.svg"}},r={};function e(t){var i=r[t];if(void 0!==i)return i.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,(()=>{var n=e(379),r=e.n(n),t=e(795),i=e.n(t),a=e(569),o=e.n(a),s=e(565),l=e.n(s),c=e(216),d=e.n(c),m=e(589),p=e.n(m),f=e(819),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=o().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var u=e(698),g={};g.styleTagTransform=p(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=d(),r()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals;var b=e(133),v={};v.styleTagTransform=p(),v.setAttributes=l(),v.insert=o().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=d(),r()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;var x=e(238),y={};y.styleTagTransform=p(),y.setAttributes=l(),y.insert=o().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=d(),r()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals;var w=e(248),_={};_.styleTagTransform=p(),_.setAttributes=l(),_.insert=o().bind(null,"head"),_.domAPI=i(),_.insertStyleElement=d(),r()(w.Z,_),w.Z&&w.Z.locals&&w.Z.locals;var k=e(716),S={};S.styleTagTransform=p(),S.setAttributes=l(),S.insert=o().bind(null,"head"),S.domAPI=i(),S.insertStyleElement=d(),r()(k.Z,S),k.Z&&k.Z.locals&&k.Z.locals;var z=e(887),C={};C.styleTagTransform=p(),C.setAttributes=l(),C.insert=o().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=d(),r()(z.Z,C),z.Z&&z.Z.locals&&z.Z.locals;var E=e(44),I=e(67),Z=e(380),A=e(968),T=e(202),R=e(333),$=e(126),F=e(83),j=e(992),P=e(833),L=e(65),O=e(963),M=e(830),U=e(477),H=e(383),N=e(9),B=e(885),G=e(73);document.body.append((()=>{const n=document.createElement("div");return n.innerHTML=`\n    <div class="container wrapper">\n    <header class="header">\n      <div class="main-logo">\n    <img src=${E} alt="logo" />\n      </div>\n      <div class="header-cards wrapper-main">\n        <div class="search-line">\n          <div class="search-link">\n            <span class="ic-search"></span>\n          </div>\n          <form\n            class="form-search"\n            action="#"\n            method="GET"\n            enctype="multipart/form-data"\n          >\n            <input\n              type="search"\n              name="search"\n              placeholder="Search store"\n              autofocus\n            />\n          </form>\n        </div>\n        <div class="header-menu">\n          <ul class="main-menu">\n            <li class="main-menu__item">\n              <a href="#">products</a>\n            </li>\n            <li class="main-menu__item">\n              <a href="#">story</a>\n            </li>\n            <li class="main-menu__item">\n              <a href="#">manufacturing</a>\n            </li>\n            <li class="main-menu__item">\n              <a href="#">packaging</a>\n            </li>\n          </ul>\n          <div class="person-data">\n            <div class="person-data__item">\n              <a href="#">\n                <i class="ic-basket"></i>\n              </a>\n            </div>\n            <div class="person-data__item">\n              <a href="#">\n                <i class="ic-person"></i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n    <section class="main-section">\n      <aside class="side-box">\n        <h1>Explore</h1>\n        <ul class="side-menu">\n          <li class="side-menu__item">\n            <a href="#">\n              <img src=${I} alt="new-in-link" />\n              <span>New In</span>\n            </a>\n          </li>\n          <li class="side-menu__item">\n            <a href="#">\n              <img src=${Z} alt="clothing-link" />\n              <span>Clothing</span>\n            </a>\n          </li>\n          <li class="side-menu__item">\n            <a href="#">\n              <img src=${A} alt="shoes-link" />\n              <span>Shoes</span>\n            </a>\n          </li>\n          <li class="side-menu__item">\n            <a href="#">\n              <img\n                src=${T}\n                alt="accessories-link"\n              />\n              <span>Accessories</span>\n            </a>\n          </li>\n          <li class="side-menu__item">\n            <a href="#">\n              <img src=${R} alt="activewear-link" />\n              <span>Activewear</span>\n            </a>\n          </li>\n          <li class="side-menu__item">\n            <a href="#">\n              <img src=${$} alt="gifts-living-link" />\n              <span>Gifts & Living</span>\n            </a>\n          </li>\n          <li class="side-menu__item">\n            <a href="#">\n              <img\n                src=${F}\n                alt="inspiration-link"\n              />\n              <span>Inspiration</span>\n            </a>\n          </li>\n        </ul>\n        <div class="helper">\n          <a href="#">\n            <img src=${j} alt="help-link" />\n            <span>Help Center</span>\n          </a>\n        </div>\n      </aside>\n      <main>\n        <div class="container-cards wrapper-main">\n          <div class="container-cards__row">\n            <div class="container-card__item">\n              <img src=${P} alt="img01" />\n            </div>\n            <div class="container-card__item">\n              <img src=${L} alt="img02" />\n            </div>\n          </div>\n          <div class="container-cards__col">\n            <div class="container-card__item">\n              <img src=${O} alt="img03" />\n              <img class="like-img" src=${G} alt="like" />\n            </div>\n            <div class="container-card__item">\n              <img src=${M} alt=img04" />\n              <img class="like-img" src=${G} alt="like" />\n            </div>\n          </div>\n          <div class="container-cards__col">\n            <div class="container-card__item">\n              <img src=${U} alt=img05" />\n              <img class="like-img" src=${G} alt="like" />\n            </div>\n            <div class="container-card__item">\n              <img src=${H} alt="img06" />\n              <img class="like-img" src=${G} alt="like" />\n            </div>\n          </div>\n          <div class="container-cards__row">\n            <div class="container-card__item">\n              <img src=${N} alt="img07" />\n            </div>\n            <div class="container-card__item">\n              <img src=${B} alt="img08" />\n            </div>\n          </div>\n        </div>\n      </main>\n    </section>\n  </div>\n    `,n})())})()})();