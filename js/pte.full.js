(function(d){function p(a,b,e,c){c={data:c||0===c||!1===c?c:b?b.data:{},_wrap:b?b._wrap:null,tmpl:null,parent:b||null,nodes:[],calls:D,nest:E,wrap:F,html:G,update:H};a&&d.extend(c,a,{nodes:[],parent:b});e&&(c.tmpl=e,c._ctnt=c._ctnt||c.tmpl(d,c),c.key=++q,(v.length?r:k)[q]=c);return c}function s(a,b,e){var c;e=e?d.map(e,function(b){return"string"===typeof b?a.key?b.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+n+'="'+a.key+'" $2'):b:s(b,a,b._ctnt)}):a;if(b)return e;e=e.join("");e.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,
function(b,a,e,j){c=d(e).get();x(c);a&&(c=w(a).concat(c));j&&(c=c.concat(w(j)))});return c?c:w(e)}function w(a){var b=document.createElement("div");b.innerHTML=a;return d.makeArray(b.childNodes)}function y(a){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+d.trim(a).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
function(a,e,c,g,h,f,j){a=d.tmpl.tag[c];if(!a)throw"Unknown template tag: "+c;c=a._default||[];f&&!/\w$/.test(h)&&(h+=f,f="");h?(h=t(h),j=j?","+t(j)+")":f?")":"",j=f?-1<h.indexOf(".")?h+t(f):"("+h+").call($item"+j:h,f=f?j:"(typeof("+h+")==='function'?("+h+").call($item):("+h+"))"):f=j=c.$1||"null";g=t(g);return"');"+a[e?"close":"open"].split("$notnull_1").join(h?"typeof("+h+")!=='undefined' && ("+h+")!=null":"true").split("$1a").join(f).split("$1").join(j).split("$2").join(g||c.$2||"")+"__.push('"})+
"');}return __;")}function z(a,b){a._wrap=s(a,!0,d.isArray(b)?b:[A.test(b)?b:d(b).html()]).join("")}function t(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function x(a){function b(a){function b(a){a+=e;f=h[a]=h[a]||p(f,k[f.parent.key+e]||f.parent)}var c,g=a,f,j;if(j=a.getAttribute(n)){for(;g.parentNode&&1===(g=g.parentNode).nodeType&&!(c=g.getAttribute(n)););if(c!==j){g=g.parentNode?11===g.nodeType?0:g.getAttribute(n)||0:0;if(!(f=k[j]))f=r[j],f=p(f,k[g]||r[g]),f.key=++q,k[q]=f;l&&
b(j)}a.removeAttribute(n)}else if(l&&(f=d.data(a,"tmplItem")))b(f.key),k[f.key]=f,g=(g=d.data(a.parentNode,"tmplItem"))?g.key:0;if(f){for(c=f;c&&c.key!=g;)c.nodes.push(a),c=c.parent;delete f._ctnt;delete f._wrap;d.data(a,"tmplItem",f)}}var e="_"+l,c,g,h={},f,j,m;f=0;for(j=a.length;f<j;f++)if(1===(c=a[f]).nodeType){g=c.getElementsByTagName("*");for(m=g.length-1;0<=m;m--)b(g[m]);b(c)}}function D(a,b,d,c){if(!a)return v.pop();v.push({_:a,tmpl:b,item:this,data:d,options:c})}function E(a,b,e){return d.tmpl(d.template(a),
b,e,this)}function F(a,b){var e=a.options||{};e.wrapped=b;return d.tmpl(d.template(a.tmpl),a.data,e,a.item)}function G(a,b){var e=this._wrap;return d.map(d(d.isArray(e)?e.join(""):e).filter(a||"*"),function(a){if(b)a=a.innerText||a.textContent;else{var d;if(!(d=a.outerHTML))d=document.createElement("div"),d.appendChild(a.cloneNode(!0)),d=d.innerHTML;a=d}return a})}function H(){var a=this.nodes;d.tmpl(null,null,null,this).insertBefore(a[0]);d(a).remove()}var B=d.fn.domManip,n="_tmplitem",A=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
k={},r={},u,C={key:0,data:{}},q=0,l=0,v=[];d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(e){var c=[];e=d(e);var g,h,f;g=1===this.length&&this[0].parentNode;u=k||{};if(g&&11===g.nodeType&&1===g.childNodes.length&&1===e.length)e[b](this[0]),c=this;else{h=0;for(f=e.length;h<f;h++)l=h,g=(0<h?this.clone(!0):this).get(),d(e[h])[b](g),c=c.concat(g);l=0;c=this.pushStack(c,a,e.selector)}e=u;u=null;d.tmpl.complete(e);
return c}});d.fn.extend({tmpl:function(a,b,e){return d.tmpl(this[0],a,b,e)},tmplItem:function(){return d.tmplItem(this[0])},template:function(a){return d.template(a,this[0])},domManip:function(a,b,e,c){if(a[0]&&d.isArray(a[0])){for(var g=d.makeArray(arguments),h=a[0],f=h.length,j=0,m;j<f&&!(m=d.data(h[j++],"tmplItem")););m&&l&&(g[2]=function(a){d.tmpl.afterManip(this,a,e)});B.apply(this,g)}else B.apply(this,arguments);l=0;u||d.tmpl.complete(k);return this}});d.extend({tmpl:function(a,b,e,c){var g=
!c;if(g)c=C,a=d.template[a]||d.template(null,a),r={};else if(!a)return a=c.tmpl,k[c.key]=c,c.nodes=[],c.wrapped&&z(c,c.wrapped),d(s(c,null,c.tmpl(d,c)));if(!a)return[];"function"===typeof b&&(b=b.call(c||{}));e&&e.wrapped&&z(e,e.wrapped);b=d.isArray(b)?d.map(b,function(b){return b?p(e,c,a,b):null}):[p(e,c,a,b)];return g?d(s(c,null,b)):b},tmplItem:function(a){var b;for(a instanceof d&&(a=a[0]);a&&1===a.nodeType&&!(b=d.data(a,"tmplItem"))&&(a=a.parentNode););return b||C},template:function(a,b){return b?
("string"===typeof b?b=y(b):b instanceof d&&(b=b[0]||{}),b.nodeType&&(b=d.data(b,"tmpl")||d.data(b,"tmpl",y(b.innerHTML))),"string"===typeof a?d.template[a]=b:b):a?"string"!==typeof a?d.template(null,a):d.template[a]||d.template(null,A.test(a)?a:d(a)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});d.extend(d.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},
open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){k={}},afterManip:function(a,
b,e){var c=11===b.nodeType?d.makeArray(b.childNodes):1===b.nodeType?[b]:[];e.call(a,b);x(c);l++}})})(jQuery);
