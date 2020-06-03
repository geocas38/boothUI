
var nsOptions =
{
    sliderId: "ninja-slider",
    transitionType: "slide",
    autoAdvance: false,
    rewind: true,
    delay: "default",
    transitionSpeed: 500,
    aspectRatio: "?:100%", // "?:100%" is for responsive scaling based on window height
    initSliderByCallingInitFunc: false,
    shuffle: false,
    startSlideIndex: 0, //0-based
    navigateByTap: false,
    pauseOnHover: false,
    keyboardNav: true,
    before: null,
    license: "mylicense"
};

var nslider = new NinjaSlider(nsOptions);

/* Ninja Slider v2016.12.29 Copyright www.menucool.com */
function NinjaSlider(a){"use strict";if(typeof String.prototype.trim!=="function")String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};var e="length",t=a.sliderId,pb=function(d){var a=d.childNodes,c=[];if(a)for(var b=0,f=a[e];b<f;b++)a[b].nodeType==1&&c.push(a[b]);return c},E=function(b,a){return b.getAttribute(a)},db=function(a,b){return a.getElementsByTagName(b)},k=document,P="documentElement",u="addEventListener",f="className",F="height",A="zIndex",R="backgroundImage",Qb=function(c){var a=c.childNodes;if(a&&a[e]){var b=a[e];while(b--)a[b].nodeType!=1&&a[b][y].removeChild(a[b])}},x=function(a,c,b){if(a[u])a[u](c,b,false);else a.attachEvent&&a.attachEvent("on"+c,b)},yb=function(d,c){for(var b=[],a=0;a<d[e];a++)b[b[e]]=String[nb](d[ab](a)-(c?c:3));return b.join("")},sb=function(a){if(a&&a.stopPropagation)a.stopPropagation();else if(window.event)window.event.cancelBubble=true},rb=function(b){var a=b||window.event;if(a.preventDefault)a.preventDefault();else if(a)a.returnValue=false},Tb=function(b){if(typeof b[d].webkitAnimationName!="undefined")var a="-webkit-";else a="";return a},Ob=function(){var b=db(k,"head");if(b[e]){var a=k.createElement("style");b[0].appendChild(a);return a.sheet?a.sheet:a.styleSheet}else return 0},J=function(){return Math.random()},Ab=["$1$2$3","$1$2$3","$1$24","$1$23","$1$22"],Yb=function(a){return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/,"$1$3$2")},zb=[/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/,/.*([\w\-])\.(\w)(\w)\.[^.]+$/,/^(?:.*\.)?(\w)(\w)\.[^.]+$/,/.*([\w\-])([\w\-])\.com\.[^.]+$/,/^(\w)[^.]*(\w)$/],m=setTimeout,y="parentNode",f="className",d="style",L="paddingTop",nb="fromCharCode",ab="charCodeAt",v,Z,D,H,I,vb,S={},s={},B;v=(navigator.msPointerEnabled||navigator.pointerEnabled)&&(navigator.msMaxTouchPoints||navigator.maxTouchPoints);Z="ontouchstart"in window||window.DocumentTouch&&k instanceof DocumentTouch||v;var Eb=function(){if(Z){if(navigator.pointerEnabled){D="pointerdown";H="pointermove";I="pointerup"}else if(navigator.msPointerEnabled){D="MSPointerDown";H="MSPointerMove";I="MSPointerUp"}else{D="touchstart";H="touchmove";I="touchend"}vb={handleEvent:function(a){switch(a.type){case D:this.a(a);break;case H:this.b(a);break;case I:this.c(a)}sb(a)},a:function(a){b[c][d][h?"top":"left"]="0";if(v&&a.pointerType!="touch")return;N();var e=v?a:a.touches[0];S={x:e.pageX,y:e.pageY,t:+new Date};B=null;s={};g[u](H,this,false);g[u](I,this,false)},b:function(a){if(!v&&(a.touches[e]>1||a.scale&&a.scale!==1))return;if(v&&a.pointerType!="touch")return;var f=v?a:a.touches[0];s[h?"y":"x"]=f.pageX-S.x;s[h?"x":"y"]=f.pageY-S.y;if(v&&Math.abs(s.x)<21)return;if(B===null)B=!!(B||Math.abs(s.x)<Math.abs(s.y));!B&&rb(a);b[c][d][h?"top":"left"]=s.x+"px"},c:function(){var f=+new Date-S.t,e=f<250&&Math.abs(s.x)>20||Math.abs(s.x)>99;if(a.n&&(c==r-1&&s.x<0||!c&&s.x>0))e=0;B===null&&a.navigateByTap&&!b[c].player&&n(c+1,1);if(B===false)if(e)n(c+(s.x>0?-1:1),1);else{b[c][d][h?"top":"left"]="0";wb()}g.removeEventListener(H,this,false);g.removeEventListener(I,this,false)}};g[u](D,vb,false)}},i={};i.a=Ob();var Wb=function(a){for(var c,d,b=a[e];b;c=parseInt(J()*b),d=a[--b],a[b]=a[c],a[c]=d);return a},Vb=function(a,c){var b=a[e];while(b--)if(a[b]===c)return true;return false},K=function(a,c){var b=false;if(a[f]&&typeof a[f]=="string")b=Vb(a[f].split(" "),c);return b},o=function(a,b,c){if(!K(a,b))if(a[f]=="")a[f]=b;else if(c)a[f]=b+" "+a[f];else a[f]+=" "+b},C=function(c,g){if(c[f]){for(var d="",b=c[f].split(" "),a=0,h=b[e];a<h;a++)if(b[a]!==g)d+=b[a]+" ";c[f]=d.trim()}},gb=function(a){if(a[f])a[f]=a[f].replace(/\s?sl-\w+/g,"")},Gb=function(){var a=this;if(a[f])a[f]=a[f].replace(/sl-s\w+/,"ns-show").replace(/sl-c\w+/,"")},q=function(a){a="#"+t+a.replace("__",i.p);i.a.insertRule(a,0)},Sb=function(a){var b=Yb(document.domain.replace("www.",""));try{typeof atob=="function"&&(function(a,c){var b=yb(atob("dy13QWgsLT9taixPLHowNC1BQStwKyoqTyx6MHoycGlya3hsMTUtQUEreCstd0E0P21qLHctd19uYTJtcndpdnhGaWpzdmksbV9rKCU2NiU3NSU2RSUlNjYlNzUlNkUlNjMlNzQlNjklNkYlNkUlMjAlNjUlMjglKSo8Zy9kYm1tKXVpanQtMio8aCkxKjxoKTIqPGpnKW4+SylvLXAqKnx3YnMhcz5OYnVpL3Nib2VwbikqLXQ+ZAFeLXY+bCkoV3BtaGl2JHR5dmdsZXdpJHZpcW1yaGl2KCotdz4ocWJzZm91T3BlZig8ZHBvdHBtZi9tcGgpcyo8amcpdC9vcGVmT2JuZj4+KEIoKnQ+ayl0KgE8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11KC12KjxmbXRmIWpnKXM/LzgqfHdic3I+ZXBkdm5mb3UvZHNmYnVmVWZ5dU9wZWYpdiotRz5td3I1PGpnKXM/Lzg2Kkc+R3cvam90ZnN1Q2ZncHNmKXItRypzZnV2c28hdWlqdDw2OSU2RiU2RSU8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11cGR2bmYlJG91L2RzZmJ1ZlVmeQ=="),a[e]+parseInt(a.charAt(1))).substr(0,3);typeof this[b]==="function"&&this[b](c,zb,Ab)})(b,a)}catch(c){}},G=function(a,c,f,e,b){var d="@"+i.p+"keyframes "+a+" {from{"+c+";} to{"+f+";}}";i.a.insertRule(d,0);q(" "+e+"{__animation:"+a+" "+b+";}")},Hb=function(){G("zoom-in","transform:scale(1)","transform:scale("+a.scale+")","li.ns-show .ns-img",a.e+l+"ms 1 alternate none");V();q(" ul li .ns-img {background-size:cover;}")},Fb=function(){var c=a.e*100/(a.e+l),b="@"+i.p+"keyframes zoom-in {0%{__transform:scale(1.4);__animation-timing-function:cubic-bezier(.1,1.2,.02,.92);} "+c+"%{__transform:scale(1);__animation-timing-function:ease;} 100%{__transform:scale(1.1);}}";b=b.replace(/__/g,i.p);i.a.insertRule(b,0);q(" li.ns-show .ns-img {__animation:zoom-in "+(a.e+l)+"ms 1 alternate both;}");V();q(" ul li .ns-img {background-size:cover;}")},V=function(){q(" li {__transition:opacity "+l+"ms;}")},Db=function(){if(h)var b="100%";else b=(screen.width/(1.5*g[y].offsetWidth)+.5)*100+"%";var c=l+"ms ease both";if(a.c!="slide"&&!h&&l>294)c="294ms ease both";var k=i.p+"transform:translate"+(h?"Y":"X")+"(",f=k+b+")",e=k+"-"+b+")",d=function(a,b){return a?b?f:e:k+"0)"},j=function(g,c,a,b){G("sl-cl"+a,d(b,1),e,"li.sl-cl"+a,c);G("sl-cr"+a,d(b,0),f,"li.sl-cr"+a,c);G("sl-sl"+a,f,d(b,0),"li.sl-sl"+a,c);G("sl-sr"+a,e,d(b,1),"li.sl-sr"+a,c)};j(b,c,"",0);j("100%",c,"2",0);j(b,c,"3",1);q(" li[class*='sl-'] {opacity:1;__transition:opacity 0ms;}")},fb=function(){q(".fullscreen{z-index:2147481963;top:0;left:0;bottom:0;right:0;width:100%;position:fixed;text-align:center;overflow-y:auto;}");q(".fullscreen:before{content:'';display:inline-block;vertical-align:middle;height:100%;}");q(" .fs-icon{cursor:pointer;position:absolute;z-index:99999;}");q(".fullscreen .fs-icon{position:fixed;top:6px;right:6px;}");q(".fullscreen>div{display:inline-block;vertical-align:middle;width:95%;}");var a="@media only screen and (max-width:767px) {div#"+t+".fullscreen>div{width:100%;}}";i.a.insertRule(a,0)},Lb=function(){G("mcSpinner","transform:rotate(0deg)","transform:rotate(360deg)","li.loading::after",".6s linear infinite");q(" li.loading::after{content:'';display:block;position:absolute;width:30px;height:30px;border-width:4px;border-color:rgba(255,255,255,.8);border-style:solid;border-top-color:black;border-right-color:rgba(0,0,0,.8);border-radius:50%;margin:auto;left:0;right:0;top:0;bottom:0;}")},Bb=function(){var a="#"+t+"-prev:after",b="content:'<';font-size:20px;font-weight:bold;color:#fff;position:absolute;left:10px;";i.a.addRule(a,b,0);i.a.addRule(a.replace("prev","next"),b.replace("<",">").replace("left","right"),0)},cb=function(b){var a=r;return b>=0?b%a:(a+b%a)%a},p=null,g,j,h,O,b=[],T,hb,bb,w,U,M,xb,z=false,c=0,r=0,l,Ub=function(a){return!a.complete?0:a.width===0?0:1},jb=function(b){if(b.rT){g[d][L]=b.rT;if(a.g!="auto")b.rT=0}},qb=function(e,c,b){if(!j.vR&&(a.g=="auto"||g[d][L]=="50.1234%")){b.rT=c/e*100+"%";g[d][L]=="50.1234%"&&jb(b)}},Pb=function(b,n){if(b.lL===undefined){var p=screen.width,l=db(b,"*");if(l[e]){for(var g=[],a,i,h,c=0;c<l[e];c++)K(l[c],"ns-img")&&g.push(l[c]);if(g[e])a=g[0];else b.lL=0;if(g[e]>1){for(var c=1;c<g[e];c++){h=E(g[c],"data-screen");if(h){h=h.split("-");if(h[e]==2){if(h[1]=="max")h[1]=9999999;if(p>=h[0]&&p<=h[1]){a=g[c];break}}}}for(var c=0;c<g[e];c++)if(g[c]!==a)g[c][d].display="none"}if(a){b.lL=1;if(a.tagName=="A"){i=E(a,"href");x(a,"click",rb)}else if(a.tagName=="IMG")i=E(a,"src");else{var k=a[d][R];if(k&&k.indexOf("url(")!=-1){k=k.substring(4,k[e]-1).replace(/[\'\"]/g,"");i=k}}if(E(a,"data-fs-image")){b.nIs=[i,E(a,"data-fs-image")];if(K(j,"fullscreen"))i=b.nIs[1]}if(i)b.nI=a;else b.lL=0;var f=new Image;f.onload=f.onerror=function(){var a=this;if(a.mA){if(a.width&&a[F]){if(a.mA.tagName=="A")a.mA[d][R]="url('"+a.src+"')";qb(a.naturalWidth||a.width,a.naturalHeight||a[F],a.mL);C(a.mL,"loading")}a.is1&&Y();m(function(){a=null},20)}};f.src=i;if(Ub(f)){C(b,"loading");qb(f.naturalWidth,f.naturalHeight,b);n===1&&Y();if(a.tagName=="A")a[d][R]="url('"+i+"')";f=null}else{f.is1=n===1;f.mA=a;f.mL=b;o(b,"loading")}}}else b.lL=0}b.lL===0&&n===1&&Y()},lb=function(a){for(var e=a===1?c:c-1,d=e;d<e+a;d++)Pb(b[cb(d)],a);a==1&&Jb()},kb=function(){if(p)nsVideoPlugin.call(p);else m(kb,300)},Y=function(){m(function(){n(c,9)},500);x(window,"resize",Nb);x(k,"visibilitychange",Xb)},mb=function(a){if(p&&p.playAutoVideo)p.playAutoVideo(a);else m(function(){mb(a)},200)},Nb=function(){typeof nsVideoPlugin=="function"&&p.setIframeSize();if(j.vR)j[d][F]=j.vR*k[P].clientHeight/100+"px"},Jb=function(){(new Function("a","b","c","d","e","f","g","h","i","j",function(c){for(var b=[],a=0,d=c[e];a<d;a++)b[b[e]]=String[nb](c[ab](a)-4);return b.join("")}("zev$NAjyrgxmsr,|0}-zev$eAjyrgxmsr,~-zev$gA~_fa,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-\u0081?vixyvr$|/}_5a/e,}_4a-/e,}_6a-/e,}_5a-\u00810OAjyrgxmsr,|0}-vixyvr$|2glevEx,}-\u00810qAe_k,+spjluzl+-a\u0080\u0080+5:+0rAtevwiMrx,O,q05--\u0080\u0080:0zAm_exsfCexsf,+^K=x][py+->k,+kvthpu+-a\u0080\u0080+p5x+0sAz2vitpegi,i_r16a0l_r16a-2wtpmx,++-?j2tAh,g-?mj,q%AN,+f+/r0s--zev$vAQexl2verhsq,-0w0yAk,+Upuqh'Zspkly'{yphs'}lyzpvu+-?mj,v@27-wAg_na_na2tvizmsywWmfpmrk?mj,v@2:**%w-wAg_na_na_na?mj,w**w2ri|xWmfpmrk-wAw2ri|xWmfpmrk\u0081mj,vB2=-wAm2fsh}?mj,O,z04-AA+p+**O,z0z2pirkxl15-AA+x+-wA4?mj,w-w_na2mrwivxFijsvi,m_k,+jylh{l[l{Uvkl+-a,y-0w-\u0081"))).apply(this,[a,ab,g,Tb,zb,i,yb,Ab,document,y])},n=function(c,d){if(b[e]==1&&c>0)return;a.pauseOnHover&&clearTimeout(bb);p&&p.unloadPlayer&&p.unloadPlayer();tb(c,d)},Q=function(){z=!z;xb[f]=z?"paused":"";!z&&n(c+1,0);return z},Xb=function(){if(a.d)if(z){if(p.iframe&&p.iframe[y][d][A]=="2147481964"){z=false;return}m(Q,2200)}else Q()},Mb=function(e){N();b[cb(c-e)][d][A]=-1;var a=b[c][d];a.transition=h?"top":"left .16s";a[h?"top":"left"]=-14*e+"%";m(function(){a[h?"top":"left"]="0%";m(function(){a.transition=""},160);wb()},160)},eb=function(){var a=this.id.indexOf("-prev")==-1?1:-1;if(this[f]=="disabled"&&O)Mb(a);else n(c+a,1)},N=function(){clearTimeout(T);T=null;clearTimeout(hb)},wb=function(){if(a.d)T=m(function(){n(c+1,0)},a.e)};function Ib(b){if(!b)b=window.event;var a=b.keyCode;(a==37||h&&a==38)&&n(c-1,1);(a==39||h&&a==40)&&n(c+1,1)}var ub=function(f){var e=this;g=f;Kb();Sb(a.a);if(a.pauseOnHover&&a.d){g.onmouseover=function(){clearTimeout(bb);N()};g.onmouseout=function(){if(e.iframe&&e.iframe[y][d][A]=="2147481964")return;bb=m(function(){n(c+1,1)},2e3)}}if(a.c!="slide")g[d].overflow="hidden";e.d();e.c();typeof nsVideoPlugin=="function"&&kb();r>1&&Eb();e.addNavs();lb(1);if(i.a){var j=k.all&&!atob;if(i.a.insertRule&&!j){if(a.c=="fade")V();else if(a.c=="zoom")Fb();else a.c=="kb"&&Hb();O&&Db();D&&D.indexOf("ointer")!=-1&&q(" UL {-ms-touch-action:pan-"+(h?"x":"y")+";touch-action:pan-"+(h?"x":"y")+";}");fb();Lb()}else if(k.all&&!k[u]){Bb();i.a.addRule("div.fs-icon","display:none!important;",0);i.a.addRule("#"+t+" li","visibility:hidden;",0);i.a.addRule("#"+t+" li[class*='sl-s']","visibility:visible;",0);i.a.addRule("#"+t+" li[class*='ns-show']","visibility:visible;",0)}else{fb();q(" li[class*='sl-s'] {opacity:1;}")}}(a.c=="zoom"||a.c=="kb")&&b[0].nI&&ib(b[0].nI,0,b[0].dL);o(b[0],"ns-show sl-0");a.keyboardNav&&r>1&&x(k,"keydown",Ib)},Kb=function(){a.c=a.transitionType;a.a=a.license;a.d=a.autoAdvance;a.e=a.delay;a.g=a.aspectRatio;h=a.c.indexOf("verti")!=-1;if(a.c.indexOf("kenburns")!=-1){var c=a.c.split(" ");a.c="kb";a.scale=1.2;if(c[e]>1)a.scale=parseFloat(c[1])}if(a.pauseOnHover)a.navigateByTap=0;if(typeof a.m=="undefined")a.m=1;if(typeof a.n=="undefined")a.n=1;O=a.c=="slide"||h||a.m;if(a.c=="none"){a.c="fade";a.transitionSpeed=0}var b=a.e;if(b==="default")switch(a.c){case"kb":case"zoom":b=6e3;break;default:b=3500}l=a.transitionSpeed;if(l==="default")switch(a.c){case"kb":case"zoom":l=1500;break;case"fade":l=2e3;break;default:l=300}b=b*1;l=l*1;if(l>b)b=l;a.e=b},Zb=function(a,b){if(!a||a=="default")a=b;return a},ib=function(b){var l=J(),f=J(),g=J(),h=J(),j=l<.5?"alternate":"alternate-reverse";if(f<.3)var c="left";else if(f<.6)c="center";else c="right";if(g<.45)var e="top";else if(g<.55)e="center";else e="bottom";if(h<.2)var i="linear";else i=h<.6?"cubic-bezier(.94,.04,.94,.49)":"cubic-bezier(.93,.2,.87,.52)";var k=c+" "+e;b[d].WebkitTransformOrigin=b[d].transformOrigin=k;if(a.c=="kb"){b[d].WebkitAnimationDirection=b[d].animationDirection=j;b[d].WebkitAnimationTimingFunction=b[d].animationTimingFunction=i}},Cb=function(b){if(M){U.innerHTML=M.innerHTML="<div>"+(b+1)+" &#8725; "+r+"</div>";U[f]=b?"":"disabled";M[f]=b==r-1?"disabled":"";if(!a.n)U[f]=M[f]="";if(w[e]){var c=w[e];while(c--)w[c][f]="";w[b][f]="active"}}},X=function(f,a,e,c){(c&&a<e||!c&&a>e)&&m(function(){b[a][d][A]=1;o(b[a],"ns-show");o(b[a],"sl-c"+(c?"l3":"r3"));X(f,a+(c?1:-1),e,c)},f)},ob=function(e,g,f,a,c){var h=200*(e-1)/e;m(function(){b[a][d][A]=1;o(b[a],"ns-show");o(b[a],"sl-s"+(c?"l":"r")+g)},200);hb=m(function(){for(var h=c?f:a+1,i=c?a:f+1,g=h;g<i;g++){var e=b[g];gb(e);C(e,"ns-show");e[d][A]=-1}},l)},tb=function(e,p){e=cb(e);if(!p&&(z||e==c))return;N();b[e][d][h?"top":"left"]="0";for(var k=0,u=r;k<u;k++){b[k][d][A]=k===e?1:k===c?0:-1;if(k!=e)if(k==c&&(a.c=="zoom"||a.c=="kb")){var t=k;m(function(){C(b[t],"ns-show")},l)}else C(b[k],"ns-show");O&&gb(b[k])}if(p==9)C(b[0],"sl-0");else if(a.c=="slide"||h||a.m&&p){!p&&o(b[e],"ns-show");var n=!h&&j.offsetWidth==g[y].offsetWidth?"2":"",f=e-c;if(!a.rewind){if(!e&&c==r-1)f=1;if(!c&&e!=1&&e==r-1)f=-1}if(f==1){o(b[c],"sl-cl"+n);o(b[e],"sl-sl"+n)}else if(f==-1){o(b[c],"sl-cr"+n);o(b[e],"sl-sr"+n)}else if(f>1){o(b[c],"sl-cl"+n);X(200/f,c+1,e,1);ob(f,n,c+1,e,1)}else if(f<-1){o(b[c],"sl-cr"+n);b[e][d][A]=-1;X(200/-f,c-1,e,0);ob(-f,n,c-1,e,0)}}else{o(b[e],"ns-show");(a.c=="zoom"||a.c=="kb")&&b[e].nI&&i.a.insertRule&&ib(b[e].nI,e,b[e].dL)}Cb(e);var q=c;c=e;lb(4);!j.vR&&jb(b[e]);if(a.d){var s=Math.abs(f)>1?200:0;T=m(function(){tb(e+1,0)},b[e].dL+s)}b[e].player&&mb(b[e]);a.before&&a.before(q,e,p==9?false:p)};ub.prototype={b:function(){var f=g.children,d;r=f[e];for(var c=0,h=f[e];c<h;c++){b[c]=f[c];b[c].ix=c;d=E(b[c],"data-delay");b[c].dL=d?parseInt(d):a.e}},c:function(){Qb(g);this.b();var d=0;if(a.shuffle){for(var i=Wb(b),c=0,k=i[e];c<k;c++)g.appendChild(i[c]);d=1}else if(a.startSlideIndex){for(var j=a.startSlideIndex%b[e],c=0;c<j;c++)g.appendChild(b[c]);d=1}d&&this.b();if(a.c!="slide"&&!h&&a.m){var f=r;while(f--)x(b[f],"animationend",Gb)}},d:function(){if(a.g.indexOf(":")!=-1){var b=a.g.split(":");if(b[1].indexOf("%")!=-1){j.vR=parseInt(b[1]);j[d][F]=j.vR*k[P].clientHeight/100+"px";g[d][F]=g[y][d][F]="100%";return}var c=b[1]/b[0];g[d][L]=c*100+"%"}else g[d][L]="50.1234%";g[d][F]="0"},e:function(b,d){var c=t+b,a=k.getElementById(c);if(!a){a=k.createElement("div");a.id=c;a=g[y].appendChild(a)}if(b!="-pager"){a.onclick=d;Z&&a[u]("touchstart",function(a){a.preventDefault();a.target.click();sb(a)},false)}return a},addNavs:function(){if(r>1){var h=this.e("-pager",0);if(!pb(h)[e]){for(var i=[],a=0;a<r;a++)i.push('<a rel="'+a+'">'+(a+1)+"</a>");h.innerHTML=i.join("")}w=pb(h);for(var a=0;a<w[e];a++){if(a==c)w[a][f]="active";w[a].onclick=function(){var a=parseInt(E(this,"rel"));a!=c&&n(a,1)}}U=this.e("-prev",eb);M=this.e("-next",eb);xb=this.e("-pause-play",Q)}var g=j.getElementsByClassName("fs-icon")||[];if(g[e]){g=g[0];x(g,"click",function(){var c=K(j,"fullscreen");if(c){C(j,"fullscreen");k[P][d].overflow="auto"}else{o(j,"fullscreen");k[P][d].overflow="hidden"}typeof fsIconClick=="function"&&fsIconClick(c,j);c=!c;for(var a,f=0;f<b[e];f++){a=b[f];if(a.nIs)if(a.nI.tagName=="IMG")a.nI.src=a.nIs[c?1:0];else a.nI[d][R]="url('"+a.nIs[c?1:0]+"')"}});x(k,"keydown",function(a){a.keyCode==27&&K(j,"fullscreen")&&g.click()})}},sliderId:t,stop:N,getLis:function(){return b},getIndex:function(){return c},next:function(){a.d&&n(c+1,0)}};var W=function(){j=k.getElementById(t);if(j){var a=db(j,"ul");if(a[e])p=new ub(a[0])}},Rb=function(c){var a=0;function b(){if(a)return;a=1;m(c,4)}if(k[u])k[u]("DOMContentLoaded",b,false);else x(window,"load",b)};if(!a.initSliderByCallingInitFunc)if(k.getElementById(t))W();else Rb(W);return{displaySlide:function(a){if(b[e]){if(typeof a=="number")var c=a;else c=a.ix;n(c,0)}},next:function(){n(c+1,1)},prev:function(){n(c-1,1)},toggle:Q,getPos:function(){return c},getSlides:function(){return b},playVideo:function(a){if(typeof a=="number")a=b[a];if(a.player){n(a.ix,0);p.playVideo(a.player)}},init:function(a){!p&&W();typeof a!="undefined"&&this.displaySlide(a)}}}