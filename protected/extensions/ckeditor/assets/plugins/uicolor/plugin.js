<<<<<<< HEAD
﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.add('uicolor',{requires:['dialog'],lang:['en'],init:function(a){if(CKEDITOR.env.ie6Compat)return;a.addCommand('uicolor',new CKEDITOR.dialogCommand('uicolor'));a.ui.addButton('UIColor',{label:a.lang.uicolor.title,command:'uicolor',icon:this.path+'uicolor.gif'});CKEDITOR.dialog.add('uicolor',this.path+'dialogs/uicolor.js');CKEDITOR.scriptLoader.load(CKEDITOR.getUrl('plugins/uicolor/yui/yui.js'));a.element.getDocument().appendStyleSheet(CKEDITOR.getUrl('plugins/uicolor/yui/assets/yui.css'));}});
=======
﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.add('uicolor',{requires:['dialog'],lang:['en'],init:function(a){if(CKEDITOR.env.ie6Compat)return;a.addCommand('uicolor',new CKEDITOR.dialogCommand('uicolor'));a.ui.addButton('UIColor',{label:a.lang.uicolor.title,command:'uicolor',icon:this.path+'uicolor.gif'});CKEDITOR.dialog.add('uicolor',this.path+'dialogs/uicolor.js');CKEDITOR.scriptLoader.load(CKEDITOR.getUrl('plugins/uicolor/yui/yui.js'));a.element.getDocument().appendStyleSheet(CKEDITOR.getUrl('plugins/uicolor/yui/assets/yui.css'));}});
>>>>>>> repo-a/master
