<<<<<<< HEAD
﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.add('richcombo',{requires:['floatpanel','listblock','button'],beforeInit:function(a){a.ui.addHandler(CKEDITOR.UI_RICHCOMBO,CKEDITOR.ui.richCombo.handler);}});CKEDITOR.UI_RICHCOMBO=3;CKEDITOR.ui.richCombo=CKEDITOR.tools.createClass({$:function(a){var c=this;CKEDITOR.tools.extend(c,a,{title:a.label,modes:{wysiwyg:1}});var b=c.panel||{};delete c.panel;c.id=CKEDITOR.tools.getNextNumber();c.document=b&&b.parent&&b.parent.getDocument()||CKEDITOR.document;b.className=(b.className||'')+(' cke_rcombopanel');c._={panelDefinition:b,items:{},state:CKEDITOR.TRISTATE_OFF};},statics:{handler:{create:function(a){return new CKEDITOR.ui.richCombo(a);}}},proto:{renderHtml:function(a){var b=[];this.render(a,b);return b.join('');},render:function(a,b){var c='cke_'+this.id,d=CKEDITOR.tools.addFunction(function(g){var j=this;var h=j._;if(h.state==CKEDITOR.TRISTATE_DISABLED)return;j.createPanel(a);if(h.on){h.panel.hide();return;}if(!h.committed){h.list.commit();h.committed=1;}var i=j.getValue();if(i)h.list.mark(i);else h.list.unmarkAll();h.panel.showBlock(j.id,new CKEDITOR.dom.element(g),4);},this),e={id:c,combo:this,focus:function(){var g=CKEDITOR.document.getById(c).getChild(1);g.focus();},execute:d};a.on('mode',function(){this.setState(this.modes[a.mode]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);},this);var f=CKEDITOR.tools.addFunction(function(g,h){g=new CKEDITOR.dom.event(g);var i=g.getKeystroke();switch(i){case 13:case 32:case 40:CKEDITOR.tools.callFunction(d,h);break;default:e.onkey(e,i);}g.preventDefault();});b.push('<span class="cke_rcombo">','<span id=',c);if(this.className)b.push(' class="',this.className,' cke_off"');b.push('><span class=cke_label>',this.label,'</span><a hidefocus=true title="',this.title,'" tabindex="-1" href="javascript:void(\'',this.label,"')\"");if(CKEDITOR.env.opera||CKEDITOR.env.gecko&&CKEDITOR.env.mac)b.push(' onkeypress="return false;"');if(CKEDITOR.env.gecko)b.push(' onblur="this.style.cssText = this.style.cssText;"');b.push(' onkeydown="CKEDITOR.tools.callFunction( ',f,', event, this );" onclick="CKEDITOR.tools.callFunction(',d,', this); return false;"><span><span class="cke_accessibility">'+(this.voiceLabel?this.voiceLabel+' ':'')+'</span>'+'<span id="'+c+'_text" class="cke_text cke_inline_label">'+this.label+'</span>'+'</span>'+'<span class=cke_openbutton></span>'+'</a>'+'</span>'+'</span>');if(this.onRender)this.onRender();return e;},createPanel:function(a){if(this._.panel)return;var b=this._.panelDefinition,c=b.parent||CKEDITOR.document.getBody(),d=new CKEDITOR.ui.floatPanel(a,c,b),e=d.addListBlock(this.id,this.multiSelect),f=this;
d.onShow=function(){if(f.className)this.element.getFirst().addClass(f.className+'_panel');f.setState(CKEDITOR.TRISTATE_ON);e.focus(!f.multiSelect&&f.getValue());f._.on=1;if(f.onOpen)f.onOpen();};d.onHide=function(){if(f.className)this.element.getFirst().removeClass(f.className+'_panel');f.setState(CKEDITOR.TRISTATE_OFF);f._.on=0;if(f.onClose)f.onClose();};d.onEscape=function(){d.hide();f.document.getById('cke_'+f.id).getFirst().getNext().focus();};e.onClick=function(g,h){f.document.getWindow().focus();if(f.onClick)f.onClick.call(f,g,h);if(h)f.setValue(g,f._.items[g]);else f.setValue('');d.hide();};this._.panel=d;this._.list=e;d.getBlock(this.id).onHide=function(){f._.on=0;f.setState(CKEDITOR.TRISTATE_OFF);};if(this.init)this.init();},setValue:function(a,b){var d=this;d._.value=a;var c=d.document.getById('cke_'+d.id+'_text');if(!a){b=d.label;c.addClass('cke_inline_label');}else c.removeClass('cke_inline_label');c.setHtml(typeof b!='undefined'?b:a);},getValue:function(){return this._.value||'';},unmarkAll:function(){this._.list.unmarkAll();},mark:function(a){this._.list.mark(a);},hideItem:function(a){this._.list.hideItem(a);},hideGroup:function(a){this._.list.hideGroup(a);},showAll:function(){this._.list.showAll();},add:function(a,b,c){this._.items[a]=c||a;this._.list.add(a,b,c);},startGroup:function(a){this._.list.startGroup(a);},commit:function(){this._.list.commit();},setState:function(a){var b=this;if(b._.state==a)return;b.document.getById('cke_'+b.id).setState(a);b._.state=a;}}});CKEDITOR.ui.prototype.addRichCombo=function(a,b){this.add(a,CKEDITOR.UI_RICHCOMBO,b);};
=======
﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.add('richcombo',{requires:['floatpanel','listblock','button'],beforeInit:function(a){a.ui.addHandler(CKEDITOR.UI_RICHCOMBO,CKEDITOR.ui.richCombo.handler);}});CKEDITOR.UI_RICHCOMBO=3;CKEDITOR.ui.richCombo=CKEDITOR.tools.createClass({$:function(a){var c=this;CKEDITOR.tools.extend(c,a,{title:a.label,modes:{wysiwyg:1}});var b=c.panel||{};delete c.panel;c.id=CKEDITOR.tools.getNextNumber();c.document=b&&b.parent&&b.parent.getDocument()||CKEDITOR.document;b.className=(b.className||'')+(' cke_rcombopanel');c._={panelDefinition:b,items:{},state:CKEDITOR.TRISTATE_OFF};},statics:{handler:{create:function(a){return new CKEDITOR.ui.richCombo(a);}}},proto:{renderHtml:function(a){var b=[];this.render(a,b);return b.join('');},render:function(a,b){var c='cke_'+this.id,d=CKEDITOR.tools.addFunction(function(g){var j=this;var h=j._;if(h.state==CKEDITOR.TRISTATE_DISABLED)return;j.createPanel(a);if(h.on){h.panel.hide();return;}if(!h.committed){h.list.commit();h.committed=1;}var i=j.getValue();if(i)h.list.mark(i);else h.list.unmarkAll();h.panel.showBlock(j.id,new CKEDITOR.dom.element(g),4);},this),e={id:c,combo:this,focus:function(){var g=CKEDITOR.document.getById(c).getChild(1);g.focus();},execute:d};a.on('mode',function(){this.setState(this.modes[a.mode]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);},this);var f=CKEDITOR.tools.addFunction(function(g,h){g=new CKEDITOR.dom.event(g);var i=g.getKeystroke();switch(i){case 13:case 32:case 40:CKEDITOR.tools.callFunction(d,h);break;default:e.onkey(e,i);}g.preventDefault();});b.push('<span class="cke_rcombo">','<span id=',c);if(this.className)b.push(' class="',this.className,' cke_off"');b.push('><span class=cke_label>',this.label,'</span><a hidefocus=true title="',this.title,'" tabindex="-1" href="javascript:void(\'',this.label,"')\"");if(CKEDITOR.env.opera||CKEDITOR.env.gecko&&CKEDITOR.env.mac)b.push(' onkeypress="return false;"');if(CKEDITOR.env.gecko)b.push(' onblur="this.style.cssText = this.style.cssText;"');b.push(' onkeydown="CKEDITOR.tools.callFunction( ',f,', event, this );" onclick="CKEDITOR.tools.callFunction(',d,', this); return false;"><span><span class="cke_accessibility">'+(this.voiceLabel?this.voiceLabel+' ':'')+'</span>'+'<span id="'+c+'_text" class="cke_text cke_inline_label">'+this.label+'</span>'+'</span>'+'<span class=cke_openbutton></span>'+'</a>'+'</span>'+'</span>');if(this.onRender)this.onRender();return e;},createPanel:function(a){if(this._.panel)return;var b=this._.panelDefinition,c=b.parent||CKEDITOR.document.getBody(),d=new CKEDITOR.ui.floatPanel(a,c,b),e=d.addListBlock(this.id,this.multiSelect),f=this;
d.onShow=function(){if(f.className)this.element.getFirst().addClass(f.className+'_panel');f.setState(CKEDITOR.TRISTATE_ON);e.focus(!f.multiSelect&&f.getValue());f._.on=1;if(f.onOpen)f.onOpen();};d.onHide=function(){if(f.className)this.element.getFirst().removeClass(f.className+'_panel');f.setState(CKEDITOR.TRISTATE_OFF);f._.on=0;if(f.onClose)f.onClose();};d.onEscape=function(){d.hide();f.document.getById('cke_'+f.id).getFirst().getNext().focus();};e.onClick=function(g,h){f.document.getWindow().focus();if(f.onClick)f.onClick.call(f,g,h);if(h)f.setValue(g,f._.items[g]);else f.setValue('');d.hide();};this._.panel=d;this._.list=e;d.getBlock(this.id).onHide=function(){f._.on=0;f.setState(CKEDITOR.TRISTATE_OFF);};if(this.init)this.init();},setValue:function(a,b){var d=this;d._.value=a;var c=d.document.getById('cke_'+d.id+'_text');if(!a){b=d.label;c.addClass('cke_inline_label');}else c.removeClass('cke_inline_label');c.setHtml(typeof b!='undefined'?b:a);},getValue:function(){return this._.value||'';},unmarkAll:function(){this._.list.unmarkAll();},mark:function(a){this._.list.mark(a);},hideItem:function(a){this._.list.hideItem(a);},hideGroup:function(a){this._.list.hideGroup(a);},showAll:function(){this._.list.showAll();},add:function(a,b,c){this._.items[a]=c||a;this._.list.add(a,b,c);},startGroup:function(a){this._.list.startGroup(a);},commit:function(){this._.list.commit();},setState:function(a){var b=this;if(b._.state==a)return;b.document.getById('cke_'+b.id).setState(a);b._.state=a;}}});CKEDITOR.ui.prototype.addRichCombo=function(a,b){this.add(a,CKEDITOR.UI_RICHCOMBO,b);};
>>>>>>> repo-a/master
