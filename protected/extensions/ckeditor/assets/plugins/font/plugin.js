<<<<<<< HEAD
﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

(function(){function a(b,c,d,e,f,g,h){var i=b.config,j=f.split(';'),k=[],l={};for(var m=0;m<j.length;m++){var n={},o=j[m].split('/'),p=j[m]=o[0];n[d]=k[m]=o[1]||p;l[p]=new CKEDITOR.style(h,n);}b.ui.addRichCombo(c,{label:e.label,title:e.panelTitle,voiceLabel:e.voiceLabel,className:'cke_'+(d=='size'?'fontSize':'font'),multiSelect:false,panel:{css:[i.contentsCss,CKEDITOR.getUrl(b.skinPath+'editor.css')],voiceLabel:e.panelVoiceLabel},init:function(){this.startGroup(e.panelTitle);for(var q=0;q<j.length;q++){var r=j[q];this.add(r,'<span style="font-'+d+':'+k[q]+'">'+r+'</span>',r);}},onClick:function(q){b.focus();b.fire('saveSnapshot');var r=l[q];if(this.getValue()==q)r.remove(b.document);else r.apply(b.document);b.fire('saveSnapshot');},onRender:function(){b.on('selectionChange',function(q){var r=this.getValue(),s=q.data.path,t=s.elements;for(var u=0,v;u<t.length;u++){v=t[u];for(var w in l)if(l[w].checkElementRemovable(v,true)){if(w!=r)this.setValue(w);return;}}this.setValue('',g);},this);}});};CKEDITOR.plugins.add('font',{requires:['richcombo','styles'],init:function(b){var c=b.config;a(b,'Font','family',b.lang.font,c.font_names,c.font_defaultLabel,c.font_style);a(b,'FontSize','size',b.lang.fontSize,c.fontSize_sizes,c.fontSize_defaultLabel,c.fontSize_style);}});})();CKEDITOR.config.font_names='Arial/Arial, Helvetica, sans-serif;Comic Sans MS/Comic Sans MS, cursive;Courier New/Courier New, Courier, monospace;Georgia/Georgia, serif;Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;Tahoma/Tahoma, Geneva, sans-serif;Times New Roman/Times New Roman, Times, serif;Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;Verdana/Verdana, Geneva, sans-serif';CKEDITOR.config.font_defaultLabel='';CKEDITOR.config.font_style={element:'span',styles:{'font-family':'#(family)'},overrides:[{element:'font',attributes:{face:null}}]};CKEDITOR.config.fontSize_sizes='8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px';CKEDITOR.config.fontSize_defaultLabel='';CKEDITOR.config.fontSize_style={element:'span',styles:{'font-size':'#(size)'},overrides:[{element:'font',attributes:{size:null}}]};
=======
﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

(function(){function a(b,c,d,e,f,g,h){var i=b.config,j=f.split(';'),k=[],l={};for(var m=0;m<j.length;m++){var n={},o=j[m].split('/'),p=j[m]=o[0];n[d]=k[m]=o[1]||p;l[p]=new CKEDITOR.style(h,n);}b.ui.addRichCombo(c,{label:e.label,title:e.panelTitle,voiceLabel:e.voiceLabel,className:'cke_'+(d=='size'?'fontSize':'font'),multiSelect:false,panel:{css:[i.contentsCss,CKEDITOR.getUrl(b.skinPath+'editor.css')],voiceLabel:e.panelVoiceLabel},init:function(){this.startGroup(e.panelTitle);for(var q=0;q<j.length;q++){var r=j[q];this.add(r,'<span style="font-'+d+':'+k[q]+'">'+r+'</span>',r);}},onClick:function(q){b.focus();b.fire('saveSnapshot');var r=l[q];if(this.getValue()==q)r.remove(b.document);else r.apply(b.document);b.fire('saveSnapshot');},onRender:function(){b.on('selectionChange',function(q){var r=this.getValue(),s=q.data.path,t=s.elements;for(var u=0,v;u<t.length;u++){v=t[u];for(var w in l)if(l[w].checkElementRemovable(v,true)){if(w!=r)this.setValue(w);return;}}this.setValue('',g);},this);}});};CKEDITOR.plugins.add('font',{requires:['richcombo','styles'],init:function(b){var c=b.config;a(b,'Font','family',b.lang.font,c.font_names,c.font_defaultLabel,c.font_style);a(b,'FontSize','size',b.lang.fontSize,c.fontSize_sizes,c.fontSize_defaultLabel,c.fontSize_style);}});})();CKEDITOR.config.font_names='Arial/Arial, Helvetica, sans-serif;Comic Sans MS/Comic Sans MS, cursive;Courier New/Courier New, Courier, monospace;Georgia/Georgia, serif;Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;Tahoma/Tahoma, Geneva, sans-serif;Times New Roman/Times New Roman, Times, serif;Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;Verdana/Verdana, Geneva, sans-serif';CKEDITOR.config.font_defaultLabel='';CKEDITOR.config.font_style={element:'span',styles:{'font-family':'#(family)'},overrides:[{element:'font',attributes:{face:null}}]};CKEDITOR.config.fontSize_sizes='8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px';CKEDITOR.config.fontSize_defaultLabel='';CKEDITOR.config.fontSize_style={element:'span',styles:{'font-size':'#(size)'},overrides:[{element:'font',attributes:{size:null}}]};
>>>>>>> repo-a/master
