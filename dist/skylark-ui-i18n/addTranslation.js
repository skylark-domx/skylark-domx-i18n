/**
 * skylark-ui-i18n - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-utils-dom/query","./i18n","./Translator"],function(n,t,a){return t.addTranslation=function(n,t,i){a.create(n).getTranslation(t).then(function(n){assign(n,i)})}});
//# sourceMappingURL=sourcemaps/addTranslation.js.map
