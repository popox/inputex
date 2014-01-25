if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/inputex-hidden/inputex-hidden.js']) {
   __coverage__['build/inputex-hidden/inputex-hidden.js'] = {"path":"build/inputex-hidden/inputex-hidden.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":45}}},"2":{"name":"(anonymous_2)","line":15,"loc":{"start":{"line":15,"column":22},"end":{"line":15,"column":40}}},"3":{"name":"(anonymous_3)","line":25,"loc":{"start":{"line":25,"column":11},"end":{"line":25,"column":22}}},"4":{"name":"(anonymous_4)","line":42,"loc":{"start":{"line":42,"column":13},"end":{"line":42,"column":43}}},"5":{"name":"(anonymous_5)","line":59,"loc":{"start":{"line":59,"column":13},"end":{"line":59,"column":24}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":69,"column":74}},"2":{"start":{"line":6,"column":2},"end":{"line":6,"column":26}},"3":{"start":{"line":15,"column":0},"end":{"line":17,"column":2}},"4":{"start":{"line":16,"column":1},"end":{"line":16,"column":63}},"5":{"start":{"line":19,"column":0},"end":{"line":63,"column":3}},"6":{"start":{"line":26,"column":6},"end":{"line":26,"column":38}},"7":{"start":{"line":27,"column":4},"end":{"line":27,"column":60}},"8":{"start":{"line":29,"column":4},"end":{"line":29,"column":52}},"9":{"start":{"line":30,"column":4},"end":{"line":30,"column":23}},"10":{"start":{"line":32,"column":4},"end":{"line":32,"column":59}},"11":{"start":{"line":32,"column":26},"end":{"line":32,"column":59}},"12":{"start":{"line":33,"column":4},"end":{"line":33,"column":36}},"13":{"start":{"line":45,"column":6},"end":{"line":45,"column":26}},"14":{"start":{"line":48,"column":6},"end":{"line":48,"column":26}},"15":{"start":{"line":51,"column":2},"end":{"line":51,"column":73}},"16":{"start":{"line":60,"column":6},"end":{"line":60,"column":27}},"17":{"start":{"line":66,"column":0},"end":{"line":66,"column":52}}},"branchMap":{"1":{"line":32,"type":"if","locations":[{"start":{"line":32,"column":4},"end":{"line":32,"column":4}},{"start":{"line":32,"column":4},"end":{"line":32,"column":4}}]}},"code":["(function () { YUI.add('inputex-hidden', function (Y, NAME) {","","/**"," * @module inputex-hidden"," */","  var inputEx = Y.inputEx;","","/**"," * Create a hidden input, inherits from inputEx.Field"," * @class inputEx.HiddenField"," * @extends inputEx.Field"," * @constructor"," * @param {Object} options inputEx.Field options object"," */","inputEx.HiddenField = function(options) {","\tinputEx.HiddenField.superclass.constructor.call(this,options);","};","","Y.extend(inputEx.HiddenField, inputEx.Field, {","   ","   /**","    * Doesn't render much...","    * @method render","    */","   render: function() {","      this.type = inputEx.HiddenField;","\t   this.divEl = inputEx.cn('div', null, {display: 'none'});","\t   ","\t   this.el = inputEx.cn('input', {type: 'hidden'});","\t   this.rawValue = ''; // initialize the rawValue with '' (default value of a hidden field)","\t","\t   if(this.options.name) this.el.name = this.options.name;","\t   this.divEl.appendChild(this.el);","   },","","   /**","    * Stores the typed value in a local variable, and store the value in the hidden input (cast as string by the input)","    * @method setValue","    * @param {Any} val The value to set","    * @param {boolean} [sendUpdatedEvt] (optional) Wether this setValue should fire the 'updated' event or not (default is true, pass false to NOT send the event)","    */","   setValue: function(val, sendUpdatedEvt) {","\t","\t   // store in the hidden input (so the value is sent as \"string\" if HTML form submit)","      this.el.value = val;","","      // store the value in a variable, so getValue can return it without type casting","      this.rawValue = val;","","      // Call Field.setValue to set class and fire updated event","\t\tinputEx.HiddenField.superclass.setValue.call(this,val, sendUpdatedEvt);","   },","","   /**","    * Get the previously stored value (respect the datatype of the value)","    * @method getValue","    * @return {Any} the previously stored value","    */","   getValue: function() {","      return this.rawValue;","   }","","});","   ","// Register this class as \"hidden\" type","inputEx.registerType(\"hidden\", inputEx.HiddenField);","","","}, '@VERSION@', {\"requires\": [\"inputex-field\"], \"ix_provides\": \"hidden\"});","","}());"]};
}
var __cov_aO__cd_BySRewJzcx8Kffg = __coverage__['build/inputex-hidden/inputex-hidden.js'];
__cov_aO__cd_BySRewJzcx8Kffg.s['1']++;YUI.add('inputex-hidden',function(Y,NAME){__cov_aO__cd_BySRewJzcx8Kffg.f['1']++;__cov_aO__cd_BySRewJzcx8Kffg.s['2']++;var inputEx=Y.inputEx;__cov_aO__cd_BySRewJzcx8Kffg.s['3']++;inputEx.HiddenField=function(options){__cov_aO__cd_BySRewJzcx8Kffg.f['2']++;__cov_aO__cd_BySRewJzcx8Kffg.s['4']++;inputEx.HiddenField.superclass.constructor.call(this,options);};__cov_aO__cd_BySRewJzcx8Kffg.s['5']++;Y.extend(inputEx.HiddenField,inputEx.Field,{render:function(){__cov_aO__cd_BySRewJzcx8Kffg.f['3']++;__cov_aO__cd_BySRewJzcx8Kffg.s['6']++;this.type=inputEx.HiddenField;__cov_aO__cd_BySRewJzcx8Kffg.s['7']++;this.divEl=inputEx.cn('div',null,{display:'none'});__cov_aO__cd_BySRewJzcx8Kffg.s['8']++;this.el=inputEx.cn('input',{type:'hidden'});__cov_aO__cd_BySRewJzcx8Kffg.s['9']++;this.rawValue='';__cov_aO__cd_BySRewJzcx8Kffg.s['10']++;if(this.options.name){__cov_aO__cd_BySRewJzcx8Kffg.b['1'][0]++;__cov_aO__cd_BySRewJzcx8Kffg.s['11']++;this.el.name=this.options.name;}else{__cov_aO__cd_BySRewJzcx8Kffg.b['1'][1]++;}__cov_aO__cd_BySRewJzcx8Kffg.s['12']++;this.divEl.appendChild(this.el);},setValue:function(val,sendUpdatedEvt){__cov_aO__cd_BySRewJzcx8Kffg.f['4']++;__cov_aO__cd_BySRewJzcx8Kffg.s['13']++;this.el.value=val;__cov_aO__cd_BySRewJzcx8Kffg.s['14']++;this.rawValue=val;__cov_aO__cd_BySRewJzcx8Kffg.s['15']++;inputEx.HiddenField.superclass.setValue.call(this,val,sendUpdatedEvt);},getValue:function(){__cov_aO__cd_BySRewJzcx8Kffg.f['5']++;__cov_aO__cd_BySRewJzcx8Kffg.s['16']++;return this.rawValue;}});__cov_aO__cd_BySRewJzcx8Kffg.s['17']++;inputEx.registerType('hidden',inputEx.HiddenField);},'@VERSION@',{'requires':['inputex-field'],'ix_provides':'hidden'});
