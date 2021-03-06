/* start module: pyjamas.ui.ChangeListener */
$pyjs['loaded_modules']['pyjamas.ui.ChangeListener'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.ChangeListener']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.ChangeListener'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.ChangeListener'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.ChangeListener>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ChangeListener';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.ui']['ChangeListener'] = $pyjs['loaded_modules']['pyjamas.ui.ChangeListener'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.ChangeListener.py, line 1:\n    # Copyright (C) 2009, 2012 Luke Kenneth Casson Leighton <lkcl@lkcl.net>';
		$m.__track_lines__[15] = 'pyjamas.ui.ChangeListener.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.ChangeListener.py, line 16:\n    from pyjamas.ui import Event';
		$m.__track_lines__[19] = 'pyjamas.ui.ChangeListener.py, line 19:\n    def fireChangeEvent(listeners, sender, event):';
		$m.__track_lines__[20] = 'pyjamas.ui.ChangeListener.py, line 20:\n    etype = DOM.eventGetType(event)';
		$m.__track_lines__[21] = 'pyjamas.ui.ChangeListener.py, line 21:\n    if etype != "change":';
		$m.__track_lines__[22] = 'pyjamas.ui.ChangeListener.py, line 22:\n    return';
		$m.__track_lines__[23] = 'pyjamas.ui.ChangeListener.py, line 23:\n    for listener in listeners:';
		$m.__track_lines__[24] = "pyjamas.ui.ChangeListener.py, line 24:\n    if hasattr(listener, 'onChange'):";
		$m.__track_lines__[25] = 'pyjamas.ui.ChangeListener.py, line 25:\n    listener.onChange(sender)';
		$m.__track_lines__[27] = 'pyjamas.ui.ChangeListener.py, line 27:\n    listener(sender)';
		$m.__track_lines__[30] = 'pyjamas.ui.ChangeListener.py, line 30:\n    class ChangeHandler(object):';
		$m.__track_lines__[32] = 'pyjamas.ui.ChangeListener.py, line 32:\n    def __init__(self):';
		$m.__track_lines__[34] = 'pyjamas.ui.ChangeListener.py, line 34:\n    self._changeListeners = []';
		$m.__track_lines__[35] = 'pyjamas.ui.ChangeListener.py, line 35:\n    self.sinkEvents(Event.ONCHANGE)';
		$m.__track_lines__[37] = 'pyjamas.ui.ChangeListener.py, line 37:\n    def onBrowserEvent(self, event):';
		$m.__track_lines__[38] = 'pyjamas.ui.ChangeListener.py, line 38:\n    etype = DOM.eventGetType(event)';
		$m.__track_lines__[39] = "pyjamas.ui.ChangeListener.py, line 39:\n    if etype == 'change':";
		$m.__track_lines__[40] = 'pyjamas.ui.ChangeListener.py, line 40:\n    fireChangeEvent(self._changeListeners, self, event)';
		$m.__track_lines__[42] = 'pyjamas.ui.ChangeListener.py, line 42:\n    def addChangeListener(self, listener):';
		$m.__track_lines__[43] = 'pyjamas.ui.ChangeListener.py, line 43:\n    self._changeListeners.append(listener)';
		$m.__track_lines__[45] = 'pyjamas.ui.ChangeListener.py, line 45:\n    def removeChangeListener(self, listener):';
		$m.__track_lines__[46] = 'pyjamas.ui.ChangeListener.py, line 46:\n    self._changeListeners.remove(listener)';
		$m.__track_lines__[48] = 'pyjamas.ui.ChangeListener.py, line 48:\n    def onChange(self, sender):';
		$m.__track_lines__[49] = 'pyjamas.ui.ChangeListener.py, line 49:\n    pass';


		$pyjs['track']['module']='pyjamas.ui.ChangeListener';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=15;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=16;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=19;
		$m['fireChangeEvent'] = function(listeners, sender, event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var $iter1_nextval,$iter1_idx,$iter1_iter,listener,$iter1_array,$pyjs__trackstack_size_1,etype,$iter1_type;
			$pyjs['track']={'module':'pyjamas.ui.ChangeListener','lineno':19};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.ui.ChangeListener';
			$pyjs['track']['lineno']=19;
			$pyjs['track']['lineno']=20;
			etype = $m['DOM']['eventGetType'](event);
			$pyjs['track']['lineno']=21;
			if ($p['bool'](!$p['op_eq'](etype, 'change'))) {
				$pyjs['track']['lineno']=22;
				$pyjs['track']['lineno']=22;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=23;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = listeners;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				listener = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=24;
				if ($p['bool']($p['hasattr'](listener, 'onChange'))) {
					$pyjs['track']['lineno']=25;
					listener['onChange'](sender);
				}
				else {
					$pyjs['track']['lineno']=27;
					listener(sender);
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjamas.ui.ChangeListener';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['fireChangeEvent']['__name__'] = 'fireChangeEvent';

		$m['fireChangeEvent']['__bind_type__'] = 0;
		$m['fireChangeEvent']['__args__'] = [null,null,['listeners'],['sender'],['event']];
		$pyjs['track']['lineno']=30;
		$m['ChangeHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.ChangeListener';
			$cls_definition['__md5__'] = '33b7cba2de55bec6e0f2d3d727f08550';
			$pyjs['track']['lineno']=32;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '33b7cba2de55bec6e0f2d3d727f08550') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.ChangeListener', 'lineno':32};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.ChangeListener';
				$pyjs['track']['lineno']=32;
				$pyjs['track']['lineno']=34;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_changeListeners', $p['list']([])) : $p['setattr'](self, '_changeListeners', $p['list']([])); 
				$pyjs['track']['lineno']=35;
				self['sinkEvents']($p['getattr']($m['Event'], 'ONCHANGE'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=37;
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
					if (self.prototype['__md5__'] !== '33b7cba2de55bec6e0f2d3d727f08550') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var etype;
				$pyjs['track']={'module':'pyjamas.ui.ChangeListener', 'lineno':37};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.ChangeListener';
				$pyjs['track']['lineno']=37;
				$pyjs['track']['lineno']=38;
				etype = $m['DOM']['eventGetType'](event);
				$pyjs['track']['lineno']=39;
				if ($p['bool']($p['op_eq'](etype, 'change'))) {
					$pyjs['track']['lineno']=40;
					$m['fireChangeEvent']($p['getattr'](self, '_changeListeners'), self, event);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$pyjs['track']['lineno']=42;
			$method = $pyjs__bind_method2('addChangeListener', function(listener) {
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
					if (self.prototype['__md5__'] !== '33b7cba2de55bec6e0f2d3d727f08550') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.ChangeListener', 'lineno':42};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.ChangeListener';
				$pyjs['track']['lineno']=42;
				$pyjs['track']['lineno']=43;
				self['_changeListeners']['append'](listener);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addChangeListener'] = $method;
			$pyjs['track']['lineno']=45;
			$method = $pyjs__bind_method2('removeChangeListener', function(listener) {
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
					if (self.prototype['__md5__'] !== '33b7cba2de55bec6e0f2d3d727f08550') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.ChangeListener', 'lineno':45};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.ChangeListener';
				$pyjs['track']['lineno']=45;
				$pyjs['track']['lineno']=46;
				self['_changeListeners']['remove'](listener);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeChangeListener'] = $method;
			$pyjs['track']['lineno']=48;
			$method = $pyjs__bind_method2('onChange', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '33b7cba2de55bec6e0f2d3d727f08550') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.ChangeListener', 'lineno':48};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.ChangeListener';
				$pyjs['track']['lineno']=48;
				$pyjs['track']['lineno']=49;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onChange'] = $method;
			$pyjs['track']['lineno']=30;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ChangeHandler', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.ChangeListener */


/* end module: pyjamas.ui.ChangeListener */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
