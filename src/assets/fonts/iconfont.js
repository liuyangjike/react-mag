(function(window){var svgSprite='<svg><symbol id="icon-arrow-right-copy" viewBox="0 0 1024 1024"><path d="M336.733 119.667l-56.278 55.72 334.857 337.154-337.673 334.315 55.802 56.184 393.944-390.040z"  ></path></symbol><symbol id="icon-caidan" viewBox="0 0 1024 1024"><path d="M905.848832 706.56c22.84544 0 41.744384 18.75968 41.744384 41.603072 0 23.6032-18.898944 42.364928-41.744384 42.364928L301.010944 790.528c-22.833152 0-41.728-18.75968-41.728-42.364928 0-22.843392 18.896896-41.603072 41.728-41.603072L905.848832 706.56zM139.56096 215.488512c29.927424 0 53.557248 24.406016 53.557248 53.54496 0 29.927424-23.631872 53.559296-53.557248 53.559296C110.422016 322.592768 86.016 298.960896 86.016 269.033472 86.016 239.894528 110.422016 215.488512 139.56096 215.488512L139.56096 215.488512zM301.010944 317.44c-22.833152 0-41.728-19.13856-41.728-41.984s18.896896-41.984 41.728-41.984l604.837888 0c22.84544 0 41.744384 19.13856 41.744384 41.984s-18.898944 41.984-41.744384 41.984L301.010944 317.44zM301.010944 569.344c-22.833152 0-41.728-19.140608-41.728-41.984s18.896896-41.984 41.728-41.984l604.837888 0c22.84544 0 41.744384 19.140608 41.744384 41.984s-18.898944 41.984-41.744384 41.984L301.010944 569.344zM139.56096 458.835968c29.927424 0 53.557248 23.63392 53.557248 53.557248 0 29.140992-23.631872 53.557248-53.557248 53.557248C110.422016 565.950464 86.016 541.534208 86.016 512.393216 86.016 482.46784 110.422016 458.835968 139.56096 458.835968L139.56096 458.835968zM139.56096 701.407232c29.927424 0 53.557248 24.420352 53.557248 53.559296 0 29.925376-23.631872 53.54496-53.557248 53.54496C110.422016 808.511488 86.016 784.893952 86.016 754.968576 86.016 725.827584 110.422016 701.407232 139.56096 701.407232L139.56096 701.407232z"  ></path></symbol><symbol id="icon-dingdan" viewBox="0 0 1024 1024"><path d="M726.2 233.2V169H297v64.2H169V855h686.1V233.2H726.2zM343 215h337.3v82.5H343V215z m466.1 594H214.9V279.2h82v64.3h429.3v-64.3H809V809z"  ></path><path d="M320 425.5h384.1v46H320zM320 553.3h384.1v46H320zM320 681.1h384.1v46H320z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)