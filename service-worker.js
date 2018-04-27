/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/0tolearnfe/index.html","fe625249f5094e394747d80ddc3e4f48"],["/2016/index.html","2b44bb59a647d210555209a2241be933"],["/2017-summary/index.html","66f63a0e05ca9ade9a652fb915313d51"],["/Electron-vs-nwjs-part2/index.html","a096c9ac62ab76be1b8fe8361b613833"],["/Electron-vs-nwjs/index.html","7213f02692be08c402b52951eb95be3f"],["/FullScreenBackground(css)/index.html","fc1b934e073c08fa08233ab82e9e3c95"],["/PC-Chrome-PWA/index.html","37cbbe1e41f2168e4731a45b53d9fa90"],["/PerfectMoviePerWeek3/index.html","a7abab210f24fe54ecf09548085be693"],["/PerfectMoviePerWeek4/index.html","c0f6774cd777021fcf3901df698cc131"],["/PerfectMoviePerWeek5/index.html","95434cb87a256e5fda88e6d934a43a6a"],["/Use-Jest-To-Test-Vue-Koa/index.html","cae4fc87a9a4ed5492662e60b6d4f2e0"],["/Vue+Koa/index.html","f142daadf64e555578ee514e6d0c38fb"],["/WEEK89/index.html","31a30f25d1192d7128317238012c22ff"],["/WEEK90/index.html","6f8d43a66a0eb6016fd8365b3d17491e"],["/WEEK91/index.html","9f6e2340fd8befb64bd83d9839bdc5a9"],["/WEEK92/index.html","448198e304a6733fd84e8db9b5c64a40"],["/WEEK93/index.html","af0334dbfde0f12aa0bdf225e84c3962"],["/Webpack-Optimize/index.html","77852b1d966f6430e3ff0ae4d4386cf9"],["/about/index.html","4b4859f53ebae71daf01ff7b4af7494b"],["/archives/2015/05/index.html","c5c1fdf827838d2fa92dc7b269f1b883"],["/archives/2015/06/index.html","161668da38b484d66d84954b97555e38"],["/archives/2015/06/page/2/index.html","eee8058ec3ac067b0fd2a4872ba60f88"],["/archives/2015/08/index.html","92aa9529a6cb1fcd1e7edccccb28b968"],["/archives/2015/09/index.html","7f5a0b6c9eff707e5edc00b5c9b627c7"],["/archives/2015/11/index.html","6a105b58c4906ad4b31a34a9959d40c9"],["/archives/2015/12/index.html","e5ac4397037b3467c97ae87d684a4892"],["/archives/2015/index.html","73e8efae961a1d367c989dea61697fa4"],["/archives/2015/page/2/index.html","a3076e69a2df50ae1022a10af4bb827d"],["/archives/2015/page/3/index.html","309d478910fcf65c472bcdbc6e9c25b2"],["/archives/2015/page/4/index.html","5e95ee73923f0f7a3b1a518ad53b98c8"],["/archives/2016/02/index.html","000a9e1c6075fc900b47140379c31039"],["/archives/2016/03/index.html","4a2b17b1f8d0956226868b4ec5dc291a"],["/archives/2016/04/index.html","4af71335d9d226de6787e4d0d0a45134"],["/archives/2016/05/index.html","e419b355ce52191a9926b93b3ca6f77a"],["/archives/2016/06/index.html","36812284d618a9c27c0ca4a5ff7a2602"],["/archives/2016/07/index.html","33e5dd60050902d2a2c7d0687b7b0713"],["/archives/2016/08/index.html","6369e4a38b02fc5c22f98998a812dbfe"],["/archives/2016/11/index.html","baf777a5a7bb27a4669363f3385c41ca"],["/archives/2016/12/index.html","055c17d428c29c53e7bc93a7bc6ab792"],["/archives/2016/index.html","e3706fcfa790f850aa80ef1c54e927bd"],["/archives/2016/page/2/index.html","eebe219c29654bb14d1ccb39be0ec0b7"],["/archives/2017/01/index.html","4c98ff89dfd635276988b424d6fbd0c0"],["/archives/2017/04/index.html","aac342637ccbc003136f489cf2dc7d38"],["/archives/2017/05/index.html","63d36844913cd2e9aa500315194269d3"],["/archives/2017/06/index.html","49adec8b1aec83624757339d164b9a5b"],["/archives/2017/07/index.html","732af3cdcf24a3c6c750fb50b84c3e19"],["/archives/2017/09/index.html","56a941eceac0153869f9f9413bd5250b"],["/archives/2017/10/index.html","8e5afc88f3d5dfc2717047df8cf3811c"],["/archives/2017/11/index.html","66b9f04a322998599b4563924f0df2ca"],["/archives/2017/12/index.html","a7396018dbc5d8f43faaf39238d8b637"],["/archives/2017/index.html","cae665db6efac164778423d88b310fca"],["/archives/2017/page/2/index.html","fb06252304cedcd1916e1bf1f0e7e6b4"],["/archives/2018/01/index.html","03704e98c0d9c0574128d0af793e46e2"],["/archives/2018/02/index.html","d7bf61a3e3a3436feac8b2b1dc2706e3"],["/archives/2018/03/index.html","c2c2d4d5ed1b4dbe230b2d247cea3c45"],["/archives/2018/04/index.html","cf6b81971f42ce17ece8b07f1cc8f126"],["/archives/2018/index.html","c07ab0ed76079f234194b9fa7802a791"],["/archives/2018/page/2/index.html","d45216e9c293f51a1bd361a499c2592a"],["/archives/index.html","c4cfde11436f5634d95d0db24220f5be"],["/archives/page/2/index.html","16e0157e916995b5c0505c622406ea69"],["/archives/page/3/index.html","d0b05f0cfe7ad4f737a06a211645db60"],["/archives/page/4/index.html","e473be0383da2a3eb33cc84a8fa66eea"],["/archives/page/5/index.html","20e331d9cd25c2d05452a92c9d3e8391"],["/archives/page/6/index.html","32bfe39c14c1411ce92d259c6f99573c"],["/archives/page/7/index.html","ac066322937da0ce168528c79e89797d"],["/archives/page/8/index.html","95bb282209651fe42eb09d62f1d38096"],["/archives/page/9/index.html","b0dc79cd320a2276e2a254d418c25d0e"],["/atom.xml","73e4dda733b6d3ae86b22613a46e8412"],["/categories/HEXO日常/index.html","c8c72b458f570d7c67b7e073d387bc58"],["/categories/HEXO日常/日志/index.html","484b2d783d71c37e8323543f77cb5818"],["/categories/Linux/index.html","42ea95c8e29652010c9514e044b1bf14"],["/categories/Linux/日志/index.html","8537f1879022d0fc1553129dc0ecc35e"],["/categories/Web/index.html","46e0f626cd19f49ec02ec0a2cdcaebb4"],["/categories/Web/page/2/index.html","cd4dc75f818767afbd1e45cc115255b5"],["/categories/Web/page/3/index.html","d7165fbe245fc5bcd141d488c6c58ddc"],["/categories/Web/page/4/index.html","793fbffd56bc98a807db86dde75f118e"],["/categories/Web/page/5/index.html","16918c46725a9c20571fb002d79fa65c"],["/categories/Web/开发/Nodejs/index.html","01fffb37a5791a88913633d5f479f211"],["/categories/Web/开发/electron/index.html","d172a7b991a85fe2b5dbf1752506421a"],["/categories/Web/开发/index.html","96231c8d182d7b06630554fefd195d0c"],["/categories/Web/开发/page/2/index.html","3098b9def45743417e94bf56a314ab5b"],["/categories/Web/开发/page/3/index.html","20c6bf10ae93197dadb124a81ebe3850"],["/categories/Web/开发/page/4/index.html","c15c73f8a3b201f8d9f985274f7d30d0"],["/categories/Web/日志/index.html","e8d8597c50698cdddab5d680deaf954e"],["/categories/Web/日志/翻译/index.html","6837438d9861d1694398af11345f2205"],["/categories/Web/日志/随笔/index.html","28481bb053c17365854d9a51630c25e8"],["/categories/WordPress日常/index.html","91c11bf842906ec505346953c7817f3c"],["/categories/WordPress日常/page/2/index.html","5dc99127af48fd9251fae1166c9e98ad"],["/categories/WordPress日常/日志/index.html","4dabbeb56a83934fc5ec495d66b0a798"],["/categories/WordPress日常/日志/page/2/index.html","e250a486eb9ef704274537a5947a6ca7"],["/categories/hexo/index.html","48e37edfce2766378601119e56a8b41b"],["/categories/index.html","ff71a2edaa49c6cca679be7a7f4efb6f"],["/categories/其他/index.html","3d6823d0847ab522803820b0785a153c"],["/categories/其他/极客/index.html","992bf5d9788ae6cabf617e2bc6fe8351"],["/categories/周电/index.html","eb7812456cd4196c71995ca1831c9ef8"],["/categories/周电/日志/index.html","7a1584d2ecf53ee77ffdb23b1a580cf9"],["/categories/日志/index.html","d4277d4af3c644609c0f1742e46d0b99"],["/categories/日志/周电/index.html","534b75260dbd0aa690f93359d3ef4274"],["/categories/日志/随笔/index.html","b1313ca818d87b4c8a38145e65daa949"],["/centos-1/index.html","77d0043ca9d724f7a4288e960f8d5753"],["/centos7-1inwin8-1/index.html","42ad2dd6c01758e101c62692f72ab8a9"],["/css/index.css","7cbf14358b0253ace32707d10ff026cb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/electron-vue-1/index.html","1511f43fd9889bf572e06861d59a74a0"],["/electron-vue-2/index.html","3f53c0e0fe7a7bba4ef62b518b765678"],["/electron-vue-3/index.html","1ab66f9f6cbce27b771389f61635cbdf"],["/electron-vue-4/index.html","4e078164028b62d12e2ce191377391cb"],["/electron-vue-5/index.html","d0fc268cc96aaba2b960279038148218"],["/element-default-theme/index.html","14b5503b98b72b5dbc5032f705df4ce7"],["/fe-be-router-render/index.html","b5c8187392a7a719d966152bbe650686"],["/fethefirst-2/index.html","b8bdbccea39b90bb3a416999e664531e"],["/fethefirst/index.html","ff834aaa28d0080452734f4bc0565eb6"],["/gear-system/index.html","084a35893429de859628af9e2f513715"],["/git-ssh2https/index.html","40fc5e419ae4897cf556671b78f19d48"],["/hello-world-1/index.html","25ba56e76dd244a9a8d0ae91d7e45e99"],["/hexo-travisci-https/index.html","985f1d7fcb13153a8f2bc6a9deda2bc6"],["/hexodaily-1/index.html","95fe6c79b73faa4963eb42ef315dda60"],["/iTerm2-lrzsz/index.html","2382dba1a164830e349bf1de5f43f546"],["/images/icons/icon-144.png","77ff48fc0e9d1928e7de882687a2206b"],["/images/icons/icon-192.png","84dc14588b23f97779da8f8b0969d4ad"],["/images/icons/icon-36.png","5c953ea6f63a79f355784c3f9f895b70"],["/images/icons/icon-48.png","8b51531a5c3dd42e5c67451b890c4472"],["/images/icons/icon-72.png","bf9669545978443a03c14e07664dc885"],["/images/icons/icon-96.png","7669c9f2e04be5935dd5b43832d3bd97"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","4639914bc9caa5cc8083f8956eaac33c"],["/jquery-1/index.html","9bc22df9bc0629506138e6d05994e5cd"],["/js/copy.js","48b75585cc96794afdcbbb88d1aea958"],["/js/fancybox.js","1992ba5db02e1d04932b0ba98988c9d8"],["/js/fireworks.js","20ecd7a49483cdda7bd33b8f5a11253f"],["/js/head.js","802d516f90b4e87c40edc27d3eb4ba79"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","ea9bda0bc76027cefc32061684ff3fc8"],["/js/search/algolia.js","2febeac19b5e529a3e1b1e6de4d031f1"],["/js/search/local-search.js","0ea42411a9ea0a3359c1bcec1a558824"],["/js/sidebar.js","e3308924d89861ff54f17f8de0f864f0"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","3e9daf655da50b0eda5324a81a2b9720"],["/js/utils.js","8250feefdfa7ac2e0bc56194a507580b"],["/make-a-hexo-theme/index.html","b13afc6a4e24b99540e3b3eabb5b6f3d"],["/make-a-picgo/index.html","b6c36e1628f7d8d703678aa88be31a90"],["/manifest.json","1ae58b354c872862c45f7b8eaa5c935f"],["/markdown-wordpress/index.html","538fd2a41902765db754aa434c43d6c7"],["/marklinejs/index.html","8afc4a158a915a508c1b092ff3787276"],["/myfe/index.html","0add11b1cf65b5b4cf3e8aea15bce3a2"],["/nodejs-1/index.html","4d70e6119565ea7de583f1c9760e5873"],["/nodejs-2/index.html","b75e9f57beb8904e338265b6be840cff"],["/nodejs-3/index.html","85d89043b531d0c096d4477027d77d1c"],["/nokian1-root/index.html","8e86039b42e7045b53f84ae9efbba442"],["/notebook2016/index.html","a3610d42deded1acb83741dbf3205bfd"],["/page/2/index.html","179b6885ecc6e0bdcc600ea283ab5308"],["/page/3/index.html","97db30fa6c7d0e455ca6f8d82ea627c4"],["/page/4/index.html","39782bf0089c4db74bb6d2e7b3076c31"],["/page/5/index.html","bd42a4967334a46a8a2c557b236f2056"],["/page/6/index.html","9fbcdaf1c4c0f2334d831c6e12695c3d"],["/page/7/index.html","b7b17ade45fd173f992b37f8b7e46e60"],["/page/8/index.html","79909f45fc23548b35eafbf94d429128"],["/page/9/index.html","a9fe6d6d3834e8e4b5b73fc5d573eab3"],["/sitemap.xml","5abeaae88aaaee7dc1736c6fc842616e"],["/slide-support/index.html","db893613de37aafc75806967c03af20e"],["/slides/index.html","b498f88ac35afdf34d36d4f2b9e4a439"],["/something&nothing/index.html","e4ad1ae2e42da41a8204c0690b8a8a52"],["/something-about-settimeout/index.html","3789c7df13b5028c9922300285283762"],["/tags/Electron-vue/index.html","91b17f4381839f2dab51241464aa1a7f"],["/tags/Electron/index.html","ddf23e3d8dbe34be44799d566a7db12a"],["/tags/JS/index.html","ec191d2db167c93f2e4b86cf67cddaff"],["/tags/Mac/index.html","b5a00c7fe4b385b46ef583bd4a3a68a1"],["/tags/Nodejs/index.html","b258ca5af511fce345d7afd989ef2d94"],["/tags/NokiaN1/index.html","181138194880469a68848979c164fb58"],["/tags/PWA/index.html","9adba16637f1f5d4054ad6920d31a320"],["/tags/Vue/index.html","32f0e46d83145e0e67605332774afe69"],["/tags/Webpack/index.html","d25a2995e298066bddb9e4de3b83db46"],["/tags/electron/index.html","0c4bf50ddb778126cdec68b7dcaceff5"],["/tags/git/index.html","87e9c7f4cf949fe47f26a388d6d37176"],["/tags/hexo/index.html","a342575f452127446c5cf4079501a8d0"],["/tags/index.html","7a913d6e7a95665d4c403997eb5251a2"],["/tags/vue/index.html","04b0e66a962bf915828426060b74b7d6"],["/tags/web/index.html","02181efcb5c69718a6ebf493c01d16cd"],["/tags/前端/index.html","4b15c78b75e124516cf086fed462dbf8"],["/tags/前端/page/2/index.html","e498ec94702f33ffdef1fa8245e06a8f"],["/tags/前端/page/3/index.html","7c1b6ea0bd6cfeba2c14b955a718d3f3"],["/tags/前端/page/4/index.html","725190145c3c3a05258fa3a7031f46ff"],["/tags/后端/index.html","dd0db3d6e29c385ab6166c942d314867"],["/tags/更新日志/index.html","53fdb6393289cabb3251d8c9b5ad85ef"],["/tags/电影/index.html","ccb5ee7bf97752ea6dea23ba49b54bc9"],["/tags/电影/page/2/index.html","d46d1ec7c1397c338491b52f30687f56"],["/tags/笔记/index.html","4ee7056efff0c8930ce8f9ef4733a14b"],["/tags/随笔/index.html","ca42c26da00ed226afac2d78fb0c5b36"],["/thinkself-1/index.html","2a267f92dc9b7cfd081de62e79555a78"],["/vue-components/index.html","28a00e98d4fd0fd6c02f7e6f2c5603c1"],["/vuejs-1/index.html","817856c07e5d6df2408495a444abac12"],["/wdinst3/index.html","236efe931eb97f997d8cf982de8a7406"],["/wordpress-theme-setup-record/index.html","dec3681f0318036d5ee2d733912a01dd"],["/wpdaily-0616/index.html","3ef108348974135d75ba6795a45b6a1d"],["/wpdaily-0618/index.html","a800a54cfb2a75abcc7abfe4bc3c6cbc"],["/wpdaily0606-1/index.html","0a0a81c43284a9999945943cb9fcdada"],["/wpdaily0611/index.html","396f231a539de7b14a5cf4a320e8fc68"],["/wpdaily0613/index.html","1c7c6608c82af136beabfac90c3c5ecf"],["/wpdaily0620/index.html","d307ca0302f471da806987c2b46dd924"],["/wpdaily0808/index.html","ab7094b887fe95c9932fd678301667dd"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.bootcss.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"molunerfinn.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"ws1.sinaimg.cn"});




