<<<<<<< HEAD
﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

(function(){var a='.%2 p,.%2 div,.%2 pre,.%2 address,.%2 blockquote,.%2 h1,.%2 h2,.%2 h3,.%2 h4,.%2 h5,.%2 h6{background-repeat: no-repeat;border: 1px dotted gray;padding-top: 8px;padding-left: 8px;}.%2 p{%1p.png);}.%2 div{%1div.png);}.%2 pre{%1pre.png);}.%2 address{%1address.png);}.%2 blockquote{%1blockquote.png);}.%2 h1{%1h1.png);}.%2 h2{%1h2.png);}.%2 h3{%1h3.png);}.%2 h4{%1h4.png);}.%2 h5{%1h5.png);}.%2 h6{%1h6.png);}',b=/%1/g,c=/%2/g,d={preserveState:true,exec:function(e){this.toggleState();this.refresh(e);},refresh:function(e){var f=this.state==CKEDITOR.TRISTATE_ON?'addClass':'removeClass';e.document.getBody()[f]('cke_show_blocks');}};CKEDITOR.plugins.add('showblocks',{requires:['wysiwygarea'],init:function(e){var f=e.addCommand('showblocks',d);f.canUndo=false;if(e.config.startupOutlineBlocks)f.setState(CKEDITOR.TRISTATE_ON);e.addCss(a.replace(b,'background-image: url('+CKEDITOR.getUrl(this.path)+'images/block_').replace(c,'cke_show_blocks '));e.ui.addButton('ShowBlocks',{label:e.lang.showBlocks,command:'showblocks'});e.on('mode',function(){if(f.state!=CKEDITOR.TRISTATE_DISABLED)f.refresh(e);});e.on('contentDom',function(){if(f.state!=CKEDITOR.TRISTATE_DISABLED)f.refresh(e);});}});})();CKEDITOR.config.startupOutlineBlocks=false;
=======
﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

(function(){var a='.%2 p,.%2 div,.%2 pre,.%2 address,.%2 blockquote,.%2 h1,.%2 h2,.%2 h3,.%2 h4,.%2 h5,.%2 h6{background-repeat: no-repeat;border: 1px dotted gray;padding-top: 8px;padding-left: 8px;}.%2 p{%1p.png);}.%2 div{%1div.png);}.%2 pre{%1pre.png);}.%2 address{%1address.png);}.%2 blockquote{%1blockquote.png);}.%2 h1{%1h1.png);}.%2 h2{%1h2.png);}.%2 h3{%1h3.png);}.%2 h4{%1h4.png);}.%2 h5{%1h5.png);}.%2 h6{%1h6.png);}',b=/%1/g,c=/%2/g,d={preserveState:true,exec:function(e){this.toggleState();this.refresh(e);},refresh:function(e){var f=this.state==CKEDITOR.TRISTATE_ON?'addClass':'removeClass';e.document.getBody()[f]('cke_show_blocks');}};CKEDITOR.plugins.add('showblocks',{requires:['wysiwygarea'],init:function(e){var f=e.addCommand('showblocks',d);f.canUndo=false;if(e.config.startupOutlineBlocks)f.setState(CKEDITOR.TRISTATE_ON);e.addCss(a.replace(b,'background-image: url('+CKEDITOR.getUrl(this.path)+'images/block_').replace(c,'cke_show_blocks '));e.ui.addButton('ShowBlocks',{label:e.lang.showBlocks,command:'showblocks'});e.on('mode',function(){if(f.state!=CKEDITOR.TRISTATE_DISABLED)f.refresh(e);});e.on('contentDom',function(){if(f.state!=CKEDITOR.TRISTATE_DISABLED)f.refresh(e);});}});})();CKEDITOR.config.startupOutlineBlocks=false;
>>>>>>> repo-a/master
