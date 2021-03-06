/* start module: pyjamas.ui.Image */
$pyjs['loaded_modules']['pyjamas.ui.Image'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.Image']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.Image'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.Image'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.Image>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Image';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.ui']['Image'] = $pyjs['loaded_modules']['pyjamas.ui.Image'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.Image.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.Image.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.Image.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[18] = 'pyjamas.ui.Image.py, line 18:\n    from pyjamas.ui.Widget import Widget';
		$m.__track_lines__[19] = 'pyjamas.ui.Image.py, line 19:\n    from pyjamas.ui import Event';
		$m.__track_lines__[20] = 'pyjamas.ui.Image.py, line 20:\n    from pyjamas.ui.MouseListener import MouseHandler';
		$m.__track_lines__[21] = 'pyjamas.ui.Image.py, line 21:\n    from pyjamas.ui.ClickListener import ClickHandler';
		$m.__track_lines__[23] = 'pyjamas.ui.Image.py, line 23:\n    prefetchImages = {}';
		$m.__track_lines__[25] = 'pyjamas.ui.Image.py, line 25:\n    class Image(Widget, MouseHandler, ClickHandler):';
		$m.__track_lines__[27] = 'pyjamas.ui.Image.py, line 27:\n    _props = [("url", "Url", "Url", None),';
		$m.__track_lines__[30] = 'pyjamas.ui.Image.py, line 30:\n    def __init__(self, url="", **kwargs):';
		$m.__track_lines__[31] = 'pyjamas.ui.Image.py, line 31:\n    if not kwargs.has_key(\'StyleName\'): kwargs[\'StyleName\']="gwt-Image"';
		$m.__track_lines__[32] = "pyjamas.ui.Image.py, line 32:\n    if url: kwargs['Url'] = url";
		$m.__track_lines__[34] = "pyjamas.ui.Image.py, line 34:\n    self.setElement(kwargs.pop('Element', None) or DOM.createImg())";
		$m.__track_lines__[35] = 'pyjamas.ui.Image.py, line 35:\n    Widget.__init__(self, **kwargs)';
		$m.__track_lines__[36] = 'pyjamas.ui.Image.py, line 36:\n    MouseHandler.__init__(self)';
		$m.__track_lines__[37] = 'pyjamas.ui.Image.py, line 37:\n    ClickHandler.__init__(self)';
		$m.__track_lines__[38] = 'pyjamas.ui.Image.py, line 38:\n    self.sinkEvents(Event.ONLOAD | Event.ONERROR)';
		$m.__track_lines__[39] = 'pyjamas.ui.Image.py, line 39:\n    self.loadListeners = []';
		$m.__track_lines__[42] = 'pyjamas.ui.Image.py, line 41:\n    @classmethod ... def _getProps(self):';
		$m.__track_lines__[43] = 'pyjamas.ui.Image.py, line 43:\n    return Widget._getProps() + self._props';
		$m.__track_lines__[45] = 'pyjamas.ui.Image.py, line 45:\n    def addLoadListener(self, listener):';
		$m.__track_lines__[46] = 'pyjamas.ui.Image.py, line 46:\n    self.loadListeners.append(listener)';
		$m.__track_lines__[48] = 'pyjamas.ui.Image.py, line 48:\n    def removeLoadListener(self, listener):';
		$m.__track_lines__[49] = 'pyjamas.ui.Image.py, line 49:\n    self.loadListeners.remove(listener)';
		$m.__track_lines__[51] = 'pyjamas.ui.Image.py, line 51:\n    def getUrl(self):';
		$m.__track_lines__[52] = 'pyjamas.ui.Image.py, line 52:\n    return DOM.getAttribute(self.getElement(), "src")';
		$m.__track_lines__[54] = 'pyjamas.ui.Image.py, line 54:\n    def onBrowserEvent(self, event):';
		$m.__track_lines__[55] = 'pyjamas.ui.Image.py, line 55:\n    Widget.onBrowserEvent(self, event)';
		$m.__track_lines__[56] = 'pyjamas.ui.Image.py, line 56:\n    type = DOM.eventGetType(event)';
		$m.__track_lines__[57] = 'pyjamas.ui.Image.py, line 57:\n    if type == "load":';
		$m.__track_lines__[58] = 'pyjamas.ui.Image.py, line 58:\n    for listener in self.loadListeners:';
		$m.__track_lines__[59] = 'pyjamas.ui.Image.py, line 59:\n    listener.onImageLoad(self)';
		$m.__track_lines__[61] = 'pyjamas.ui.Image.py, line 61:\n    for listener in self.loadListeners:';
		$m.__track_lines__[62] = 'pyjamas.ui.Image.py, line 62:\n    listener.onImageError(self)';
		$m.__track_lines__[64] = 'pyjamas.ui.Image.py, line 64:\n    def prefetch(self, url):';
		$m.__track_lines__[65] = 'pyjamas.ui.Image.py, line 65:\n    img = DOM.createImg()';
		$m.__track_lines__[66] = 'pyjamas.ui.Image.py, line 66:\n    DOM.setElemAttribute(img, "src", url)';
		$m.__track_lines__[67] = 'pyjamas.ui.Image.py, line 67:\n    prefetchImages[url] = img';
		$m.__track_lines__[69] = 'pyjamas.ui.Image.py, line 69:\n    def setUrl(self, url):';
		$m.__track_lines__[70] = 'pyjamas.ui.Image.py, line 70:\n    DOM.setElemAttribute(self.getElement(), "src", url)';
		$m.__track_lines__[72] = "pyjamas.ui.Image.py, line 72:\n    Factory.registerClass('pyjamas.ui.Image', 'Image', Image)";


		$pyjs['track']['module']='pyjamas.ui.Image';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=15;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=16;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=18;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=19;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=20;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=21;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=23;
		$m['prefetchImages'] = $p['dict']([]);
		$pyjs['track']['lineno']=25;
		$m['Image'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.Image';
			$cls_definition['__md5__'] = '4e38dcc0ce4e414475e2615c5a3ae37f';
			$pyjs['track']['lineno']=27;
			$cls_definition['_props'] = $p['list']([$p['tuple'](['url', 'Url', 'Url', null])]);
			$pyjs['track']['lineno']=30;
			$method = $pyjs__bind_method2('__init__', function(url) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4e38dcc0ce4e414475e2615c5a3ae37f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof url != 'undefined') {
						if (url !== null && typeof url['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = url;
							url = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				if (typeof url == 'undefined') url=arguments['callee']['__args__'][3][1];
				var $or2,$or1;
				$pyjs['track']={'module':'pyjamas.ui.Image', 'lineno':30};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.Image';
				$pyjs['track']['lineno']=30;
				$pyjs['track']['lineno']=31;
				if ($p['bool'](!$p['bool'](kwargs['has_key']('StyleName')))) {
					$pyjs['track']['lineno']=31;
					kwargs['__setitem__']('StyleName', 'gwt-Image');
				}
				$pyjs['track']['lineno']=32;
				if ($p['bool'](url)) {
					$pyjs['track']['lineno']=32;
					kwargs['__setitem__']('Url', url);
				}
				$pyjs['track']['lineno']=34;
				self['setElement'](($p['bool']($or1=kwargs['pop']('Element', null))?$or1:$m['DOM']['createImg']()));
				$pyjs['track']['lineno']=35;
				$pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
				$pyjs['track']['lineno']=36;
				$m['MouseHandler']['__init__'](self);
				$pyjs['track']['lineno']=37;
				$m['ClickHandler']['__init__'](self);
				$pyjs['track']['lineno']=38;
				self['sinkEvents']($p['op_bitor2']($p['getattr']($m['Event'], 'ONLOAD'), $p['getattr']($m['Event'], 'ONERROR')));
				$pyjs['track']['lineno']=39;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loadListeners', $p['list']([])) : $p['setattr'](self, 'loadListeners', $p['list']([])); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['url', '']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=42;
			$method = $pyjs__bind_method2('_getProps', function() {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 0, arguments['length']);
    var self = this['prototype'];
				var $add2,$add1;
				$pyjs['track']={'module':'pyjamas.ui.Image', 'lineno':42};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.Image';
				$pyjs['track']['lineno']=42;
				$pyjs['track']['lineno']=43;
				$pyjs['track']['lineno']=43;
				var $pyjs__ret = $p['__op_add']($add1=$m['Widget']['_getProps'](),$add2=$p['getattr'](self, '_props'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 2, [null,null,['self']]);
			$cls_definition['_getProps'] = $method;
			$pyjs['track']['lineno']=45;
			$method = $pyjs__bind_method2('addLoadListener', function(listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4e38dcc0ce4e414475e2615c5a3ae37f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.Image', 'lineno':45};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.Image';
				$pyjs['track']['lineno']=45;
				$pyjs['track']['lineno']=46;
				self['loadListeners']['append'](listener);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addLoadListener'] = $method;
			$pyjs['track']['lineno']=48;
			$method = $pyjs__bind_method2('removeLoadListener', function(listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4e38dcc0ce4e414475e2615c5a3ae37f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.Image', 'lineno':48};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.Image';
				$pyjs['track']['lineno']=48;
				$pyjs['track']['lineno']=49;
				self['loadListeners']['remove'](listener);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeLoadListener'] = $method;
			$pyjs['track']['lineno']=51;
			$method = $pyjs__bind_method2('getUrl', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4e38dcc0ce4e414475e2615c5a3ae37f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.Image', 'lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.Image';
				$pyjs['track']['lineno']=51;
				$pyjs['track']['lineno']=52;
				$pyjs['track']['lineno']=52;
				var $pyjs__ret = $m['DOM']['getAttribute'](self['getElement'](), 'src');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getUrl'] = $method;
			$pyjs['track']['lineno']=54;
			$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4e38dcc0ce4e414475e2615c5a3ae37f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_iter,listener,$iter2_idx,$iter1_array,$pyjs__trackstack_size_1,$iter2_type,type,$iter2_array,$iter1_idx;
				$pyjs['track']={'module':'pyjamas.ui.Image', 'lineno':54};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.Image';
				$pyjs['track']['lineno']=54;
				$pyjs['track']['lineno']=55;
				$m['Widget']['onBrowserEvent'](self, event);
				$pyjs['track']['lineno']=56;
				type = $m['DOM']['eventGetType'](event);
				$pyjs['track']['lineno']=57;
				if ($p['bool']($p['op_eq'](type, 'load'))) {
					$pyjs['track']['lineno']=58;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter1_iter = $p['getattr'](self, 'loadListeners');
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						listener = $iter1_nextval['$nextval'];
						$pyjs['track']['lineno']=59;
						listener['onImageLoad'](self);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjamas.ui.Image';
				}
				else if ($p['bool']($p['op_eq'](type, 'error'))) {
					$pyjs['track']['lineno']=61;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter2_iter = $p['getattr'](self, 'loadListeners');
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						listener = $iter2_nextval['$nextval'];
						$pyjs['track']['lineno']=62;
						listener['onImageError'](self);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjamas.ui.Image';
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$pyjs['track']['lineno']=64;
			$method = $pyjs__bind_method2('prefetch', function(url) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4e38dcc0ce4e414475e2615c5a3ae37f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var img;
				$pyjs['track']={'module':'pyjamas.ui.Image', 'lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.Image';
				$pyjs['track']['lineno']=64;
				$pyjs['track']['lineno']=65;
				img = $m['DOM']['createImg']();
				$pyjs['track']['lineno']=66;
				$m['DOM']['setElemAttribute'](img, 'src', url);
				$pyjs['track']['lineno']=67;
				$m['prefetchImages']['__setitem__'](url, img);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['url']]);
			$cls_definition['prefetch'] = $method;
			$pyjs['track']['lineno']=69;
			$method = $pyjs__bind_method2('setUrl', function(url) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4e38dcc0ce4e414475e2615c5a3ae37f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.Image', 'lineno':69};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.Image';
				$pyjs['track']['lineno']=69;
				$pyjs['track']['lineno']=70;
				$m['DOM']['setElemAttribute'](self['getElement'](), 'src', url);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['url']]);
			$cls_definition['setUrl'] = $method;
			$pyjs['track']['lineno']=25;
			var $bases = new Array($m['Widget'],$m['MouseHandler'],$m['ClickHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Image', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=72;
		$m['Factory']['registerClass']('pyjamas.ui.Image', 'Image', $m['Image']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.Image */


/* end module: pyjamas.ui.Image */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.ui.Event', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener']
*/
