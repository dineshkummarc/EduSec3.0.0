<<<<<<< HEAD
﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.add('pagebreak',{init:function(a){a.addCommand('pagebreak',CKEDITOR.plugins.pagebreakCmd);a.ui.addButton('PageBreak',{label:a.lang.pagebreak,command:'pagebreak'});a.addCss('img.cke_pagebreak{background-image: url('+CKEDITOR.getUrl(this.path+'images/pagebreak.gif')+');'+'background-position: center center;'+'background-repeat: no-repeat;'+'clear: both;'+'display: block;'+'float: none;'+'width: 100%;'+'border-top: #999999 1px dotted;'+'border-bottom: #999999 1px dotted;'+'height: 5px;'+'}');},afterInit:function(a){var b=a.dataProcessor,c=b&&b.dataFilter;if(c)c.addRules({elements:{div:function(d){var e=d.attributes.style,f=e&&d.children.length==1&&d.children[0],g=f&&f.name=='span'&&f.attributes.style;if(g&&/page-break-after\s*:\s*always/i.test(e)&&/display\s*:\s*none/i.test(g))return a.createFakeParserElement(d,'cke_pagebreak','div');}}});},requires:['fakeobjects']});CKEDITOR.plugins.pagebreakCmd={exec:function(a){var b=CKEDITOR.dom.element.createFromHtml('<div style="page-break-after: always;"><span style="display: none;">&nbsp;</span></div>');b=a.createFakeElement(b,'cke_pagebreak','div');var c=a.getSelection().getRanges();for(var d,e=0;e<c.length;e++){d=c[e];if(e>0)b=b.clone(true);d.splitBlock('p');d.insertNode(b);}}};
=======
﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.add('pagebreak',{init:function(a){a.addCommand('pagebreak',CKEDITOR.plugins.pagebreakCmd);a.ui.addButton('PageBreak',{label:a.lang.pagebreak,command:'pagebreak'});a.addCss('img.cke_pagebreak{background-image: url('+CKEDITOR.getUrl(this.path+'images/pagebreak.gif')+');'+'background-position: center center;'+'background-repeat: no-repeat;'+'clear: both;'+'display: block;'+'float: none;'+'width: 100%;'+'border-top: #999999 1px dotted;'+'border-bottom: #999999 1px dotted;'+'height: 5px;'+'}');},afterInit:function(a){var b=a.dataProcessor,c=b&&b.dataFilter;if(c)c.addRules({elements:{div:function(d){var e=d.attributes.style,f=e&&d.children.length==1&&d.children[0],g=f&&f.name=='span'&&f.attributes.style;if(g&&/page-break-after\s*:\s*always/i.test(e)&&/display\s*:\s*none/i.test(g))return a.createFakeParserElement(d,'cke_pagebreak','div');}}});},requires:['fakeobjects']});CKEDITOR.plugins.pagebreakCmd={exec:function(a){var b=CKEDITOR.dom.element.createFromHtml('<div style="page-break-after: always;"><span style="display: none;">&nbsp;</span></div>');b=a.createFakeElement(b,'cke_pagebreak','div');var c=a.getSelection().getRanges();for(var d,e=0;e<c.length;e++){d=c[e];if(e>0)b=b.clone(true);d.splitBlock('p');d.insertNode(b);}}};
>>>>>>> repo-a/master
