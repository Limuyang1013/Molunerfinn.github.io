$(function(){var e=$('<i class="fa fa-clipboard" aria-hidden="true"></i>'),t=$('<div class="copy-notice"></div>');$("figure.highlight").prepend(e),$("figure.highlight").prepend(t),$(".highlight .fa-clipboard").on("click",function(){var e=window.getSelection(),t=document.createRange();t.selectNodeContents($(this).next("table").find(".code pre")[0]),e.removeAllRanges(),e.addRange(t);e.toString();!function(e,t){if(document.queryCommandSupported&&document.queryCommandSupported("copy"))try{document.execCommand("copy"),$(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).velocity({translateX:-30,opacity:1},{loop:1,duration:750,easing:"easeOutQuint"})}catch(e){return $(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.error).velocity({translateX:-30,opacity:1},{loop:1,duration:750,easing:"easeOutQuint"}),!1}else $(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport)}(0,this),e.removeAllRanges()})});