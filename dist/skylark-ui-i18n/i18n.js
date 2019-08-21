/**
 * skylark-ui-i18n - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark"],function(e){return e.attach("ui.i18n",{escape:function(e){return"string"==typeof e?e.replace(/\[\[/g,"&lsqb;&lsqb;").replace(/\]\]/g,"&rsqb;&rsqb;"):e},unescape:function(e){return"string"==typeof e?e.replace(/&lsqb;|\\\[/g,"[").replace(/&rsqb;|\\\]/g,"]"):e},compile:function(){return"[["+Array.prototype.slice.call(arguments,0).map(function(e){return String(e).replace(/%/g,"&#37;").replace(/,/g,"&#44;")}).join(", ")+"]]"}})});
//# sourceMappingURL=sourcemaps/i18n.js.map
