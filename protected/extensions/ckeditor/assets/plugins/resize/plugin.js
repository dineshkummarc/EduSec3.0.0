<<<<<<< HEAD
﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.add('resize',{init:function(a){var b=a.config;if(b.resize_enabled){var c=null,d,e;function f(i){var j=i.data.$.screenX-d.x,k=i.data.$.screenY-d.y,l=e.width+j*(a.lang.dir=='rtl'?-1:1),m=e.height+k;a.resize(Math.max(b.resize_minWidth,Math.min(l,b.resize_maxWidth)),Math.max(b.resize_minHeight,Math.min(m,b.resize_maxHeight)));};function g(i){CKEDITOR.document.removeListener('mousemove',f);CKEDITOR.document.removeListener('mouseup',g);if(a.document){a.document.removeListener('mousemove',f);a.document.removeListener('mouseup',g);}};var h=CKEDITOR.tools.addFunction(function(i){if(!c)c=a.getResizable();e={width:c.$.offsetWidth||0,height:c.$.offsetHeight||0};d={x:i.screenX,y:i.screenY};CKEDITOR.document.on('mousemove',f);CKEDITOR.document.on('mouseup',g);if(a.document){a.document.on('mousemove',f);a.document.on('mouseup',g);}});a.on('themeSpace',function(i){if(i.data.space=='bottom')i.data.html+='<div class="cke_resizer" title="'+CKEDITOR.tools.htmlEncode(a.lang.resize)+'"'+' onmousedown="CKEDITOR.tools.callFunction('+h+', event)"'+'></div>';},a,null,100);}}});CKEDITOR.config.resize_minWidth=750;CKEDITOR.config.resize_minHeight=250;CKEDITOR.config.resize_maxWidth=3000;CKEDITOR.config.resize_maxHeight=3000;CKEDITOR.config.resize_enabled=true;
=======
﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.add('resize',{init:function(a){var b=a.config;if(b.resize_enabled){var c=null,d,e;function f(i){var j=i.data.$.screenX-d.x,k=i.data.$.screenY-d.y,l=e.width+j*(a.lang.dir=='rtl'?-1:1),m=e.height+k;a.resize(Math.max(b.resize_minWidth,Math.min(l,b.resize_maxWidth)),Math.max(b.resize_minHeight,Math.min(m,b.resize_maxHeight)));};function g(i){CKEDITOR.document.removeListener('mousemove',f);CKEDITOR.document.removeListener('mouseup',g);if(a.document){a.document.removeListener('mousemove',f);a.document.removeListener('mouseup',g);}};var h=CKEDITOR.tools.addFunction(function(i){if(!c)c=a.getResizable();e={width:c.$.offsetWidth||0,height:c.$.offsetHeight||0};d={x:i.screenX,y:i.screenY};CKEDITOR.document.on('mousemove',f);CKEDITOR.document.on('mouseup',g);if(a.document){a.document.on('mousemove',f);a.document.on('mouseup',g);}});a.on('themeSpace',function(i){if(i.data.space=='bottom')i.data.html+='<div class="cke_resizer" title="'+CKEDITOR.tools.htmlEncode(a.lang.resize)+'"'+' onmousedown="CKEDITOR.tools.callFunction('+h+', event)"'+'></div>';},a,null,100);}}});CKEDITOR.config.resize_minWidth=750;CKEDITOR.config.resize_minHeight=250;CKEDITOR.config.resize_maxWidth=3000;CKEDITOR.config.resize_maxHeight=3000;CKEDITOR.config.resize_enabled=true;
>>>>>>> repo-a/master
