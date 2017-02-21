/* start module: pyjsdl.time */
$pyjs['loaded_modules']['pyjsdl.time'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.time']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.time'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.time'];
	$m['__repr__'] = function() { return '<module: pyjsdl.time>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.time';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['time'] = $pyjs['loaded_modules']['pyjsdl.time'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.time.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.time.py, line 4:\n    import pyjsdl.event';
		$m.__track_lines__[5] = 'pyjsdl.time.py, line 5:\n    from pyjsdl import env';
		$m.__track_lines__[6] = 'pyjsdl.time.py, line 6:\n    from __pyjamas__ import JS';
		$m.__track_lines__[8] = "pyjsdl.time.py, line 8:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[11] = 'pyjsdl.time.py, line 11:\n    class Clock(object):';
		$m.__track_lines__[21] = 'pyjsdl.time.py, line 21:\n    def __init__(self):';
		$m.__track_lines__[25] = 'pyjsdl.time.py, line 25:\n    self._time = self.time()';
		$m.__track_lines__[26] = 'pyjsdl.time.py, line 26:\n    self._time_init = self._time';
		$m.__track_lines__[27] = 'pyjsdl.time.py, line 27:\n    self._time_diff = [33 for i in range(10)]';
		$m.__track_lines__[28] = 'pyjsdl.time.py, line 28:\n    self._pos = 0';
		$m.__track_lines__[29] = 'pyjsdl.time.py, line 29:\n    self._framerate = 0';
		$m.__track_lines__[31] = 'pyjsdl.time.py, line 31:\n    def get_time(self):';
		$m.__track_lines__[35] = 'pyjsdl.time.py, line 35:\n    return self._time_diff[self._pos]';
		$m.__track_lines__[37] = 'pyjsdl.time.py, line 37:\n    def tick(self, framerate=0):';
		$m.__track_lines__[42] = 'pyjsdl.time.py, line 42:\n    if self._pos:';
		$m.__track_lines__[43] = 'pyjsdl.time.py, line 43:\n    self._pos -= 1';
		$m.__track_lines__[45] = 'pyjsdl.time.py, line 45:\n    self._pos = 9';
		$m.__track_lines__[46] = 'pyjsdl.time.py, line 46:\n    if self._framerate != framerate:';
		$m.__track_lines__[47] = 'pyjsdl.time.py, line 47:\n    self._framerate = framerate';
		$m.__track_lines__[48] = 'pyjsdl.time.py, line 48:\n    env.canvas._framerate = 1000/framerate';
		$m.__track_lines__[49] = 'pyjsdl.time.py, line 49:\n    self._time = self.time()';
		$m.__track_lines__[50] = 'pyjsdl.time.py, line 50:\n    self._time_diff[self._pos] = self._time-self._time_init';
		$m.__track_lines__[51] = 'pyjsdl.time.py, line 51:\n    self._time_init = self._time';
		$m.__track_lines__[52] = 'pyjsdl.time.py, line 52:\n    return self._time_diff[self._pos]';
		$m.__track_lines__[54] = 'pyjsdl.time.py, line 54:\n    def tick_busy_loop(self, framerate=0):';
		$m.__track_lines__[59] = 'pyjsdl.time.py, line 59:\n    return self.tick(framerate)';
		$m.__track_lines__[61] = 'pyjsdl.time.py, line 61:\n    def get_fps(self):';
		$m.__track_lines__[65] = 'pyjsdl.time.py, line 65:\n    return 1000/(sum(self._time_diff)/10)';
		$m.__track_lines__[67] = 'pyjsdl.time.py, line 67:\n    def time(self):';
		$m.__track_lines__[73] = 'pyjsdl.time.py, line 73:\n    ctime = JS("new Date()")';
		$m.__track_lines__[74] = 'pyjsdl.time.py, line 74:\n    return ctime.getTime()';
		$m.__track_lines__[77] = 'pyjsdl.time.py, line 77:\n    class Time(object):';
		$m.__track_lines__[79] = 'pyjsdl.time.py, line 79:\n    def __init__(self):';
		$m.__track_lines__[80] = 'pyjsdl.time.py, line 80:\n    self._time_init = self.time()';
		$m.__track_lines__[81] = 'pyjsdl.time.py, line 81:\n    self.run = lambda: self.wait()';
		$m.__track_lines__[82] = 'pyjsdl.time.py, line 82:\n    self.framerate = None';
		$m.__track_lines__[83] = 'pyjsdl.time.py, line 83:\n    self.Clock = Clock';
		$m.__track_lines__[85] = 'pyjsdl.time.py, line 85:\n    def get_ticks(self):';
		$m.__track_lines__[91] = 'pyjsdl.time.py, line 91:\n    return self.time() - self._time_init';
		$m.__track_lines__[93] = 'pyjsdl.time.py, line 93:\n    def delay(self, time):';
		$m.__track_lines__[99] = 'pyjsdl.time.py, line 99:\n    start = self.time()';
		$m.__track_lines__[100] = 'pyjsdl.time.py, line 100:\n    while self.time() - start < time:   #Use Timer';
		$m.__track_lines__[101] = 'pyjsdl.time.py, line 101:\n    pass';
		$m.__track_lines__[102] = 'pyjsdl.time.py, line 102:\n    return self.time() - start';
		$m.__track_lines__[104] = 'pyjsdl.time.py, line 104:\n    def wait(self, time=0):';
		$m.__track_lines__[110] = 'pyjsdl.time.py, line 110:\n    if time:';
		$m.__track_lines__[111] = 'pyjsdl.time.py, line 111:\n    if self.framerate is None:';
		$m.__track_lines__[112] = 'pyjsdl.time.py, line 112:\n    self.framerate = env.canvas._framerate';
		$m.__track_lines__[113] = 'pyjsdl.time.py, line 113:\n    env.canvas._framerate = time*10';
		$m.__track_lines__[114] = 'pyjsdl.time.py, line 114:\n    self.timeout(time, self)';
		$m.__track_lines__[116] = 'pyjsdl.time.py, line 116:\n    if self.framerate is not None:';
		$m.__track_lines__[117] = 'pyjsdl.time.py, line 117:\n    env.canvas._framerate = self.framerate';
		$m.__track_lines__[118] = 'pyjsdl.time.py, line 118:\n    self.framerate = None';
		$m.__track_lines__[120] = 'pyjsdl.time.py, line 120:\n    def set_timer(self, eventid, time):';
		$m.__track_lines__[127] = 'pyjsdl.time.py, line 127:\n    if eventid not in _EventTimer.timers:';
		$m.__track_lines__[128] = 'pyjsdl.time.py, line 128:\n    _EventTimer.timers[eventid] = _EventTimer(eventid)';
		$m.__track_lines__[129] = 'pyjsdl.time.py, line 129:\n    _EventTimer.timers[eventid].set_timer(time)';
		$m.__track_lines__[131] = 'pyjsdl.time.py, line 131:\n    def time(self):';
		$m.__track_lines__[137] = 'pyjsdl.time.py, line 137:\n    ctime = JS("new Date()")';
		$m.__track_lines__[138] = 'pyjsdl.time.py, line 138:\n    return ctime.getTime()';
		$m.__track_lines__[140] = 'pyjsdl.time.py, line 140:\n    def timeout(self, time=None, obj=None):';
		$m.__track_lines__[146] = 'pyjsdl.time.py, line 146:\n    run = lambda: obj.run()';
		$m.__track_lines__[147] = 'pyjsdl.time.py, line 147:\n    JS("""$wnd[\'setTimeout\'](function() {@{{run}}();}, @{{time}});""")';
		$m.__track_lines__[150] = 'pyjsdl.time.py, line 150:\n    class _EventTimer:';
		$m.__track_lines__[151] = 'pyjsdl.time.py, line 151:\n    timers = {}';
		$m.__track_lines__[153] = 'pyjsdl.time.py, line 153:\n    def __init__(self, eventid):';
		$m.__track_lines__[154] = 'pyjsdl.time.py, line 154:\n    self.event = pyjsdl.event.Event(eventid)';
		$m.__track_lines__[155] = 'pyjsdl.time.py, line 155:\n    self.timer = None';
		$m.__track_lines__[156] = 'pyjsdl.time.py, line 156:\n    self.time = 0';
		$m.__track_lines__[157] = 'pyjsdl.time.py, line 157:\n    self.repeat = True';
		$m.__track_lines__[159] = 'pyjsdl.time.py, line 159:\n    def set_timer(self, time):';
		$m.__track_lines__[160] = 'pyjsdl.time.py, line 160:\n    if self.timer:';
		$m.__track_lines__[161] = 'pyjsdl.time.py, line 161:\n    self.repeat = False';
		$m.__track_lines__[162] = 'pyjsdl.time.py, line 162:\n    self.clearTimeout()';
		$m.__track_lines__[163] = 'pyjsdl.time.py, line 163:\n    if time:';
		$m.__track_lines__[164] = 'pyjsdl.time.py, line 164:\n    self.time = time';
		$m.__track_lines__[165] = 'pyjsdl.time.py, line 165:\n    self.repeat = True';
		$m.__track_lines__[166] = 'pyjsdl.time.py, line 166:\n    self.setTimeout()';
		$m.__track_lines__[168] = 'pyjsdl.time.py, line 168:\n    def setTimeout(self):';
		$m.__track_lines__[170] = 'pyjsdl.time.py, line 170:\n    timer = JS("""$wnd[\'setTimeout\'](function() {@{{self}}[\'run\']();}, @{{self}}[\'time\']);""")';
		$m.__track_lines__[171] = 'pyjsdl.time.py, line 171:\n    self.timer = timer';
		$m.__track_lines__[173] = 'pyjsdl.time.py, line 173:\n    def clearTimeout(self):';
		$m.__track_lines__[174] = 'pyjsdl.time.py, line 174:\n    JS("""$wnd[\'clearTimeout\'](@{{self}}[\'timer\']);""")';
		$m.__track_lines__[175] = 'pyjsdl.time.py, line 175:\n    self.timer = None';
		$m.__track_lines__[177] = 'pyjsdl.time.py, line 177:\n    def run(self):';
		$m.__track_lines__[178] = 'pyjsdl.time.py, line 178:\n    pyjsdl.event.post(self.event)';
		$m.__track_lines__[179] = 'pyjsdl.time.py, line 179:\n    if self.repeat:';
		$m.__track_lines__[180] = 'pyjsdl.time.py, line 180:\n    self.setTimeout()';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_33 = new $p['int'](33);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_10 = new $p['int'](10);
		$pyjs['track']['module']='pyjsdl.time';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['pyjsdl'] = $p['___import___']('pyjsdl.event', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']['lineno']=8;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=11;
		$m['Clock'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.time';
			$cls_definition['__md5__'] = 'cb57b5bb5b5aa9a25bd295be9c867128';
			$pyjs['track']['lineno']=21;
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
					if (self.prototype['__md5__'] !== 'cb57b5bb5b5aa9a25bd295be9c867128') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.time', 'lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=21;
				$pyjs['track']['lineno']=25;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_time', self['time']()) : $p['setattr'](self, '_time', self['time']()); 
				$pyjs['track']['lineno']=26;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_time_init', $p['getattr'](self, '_time')) : $p['setattr'](self, '_time_init', $p['getattr'](self, '_time')); 
				$pyjs['track']['lineno']=27;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_time_diff', function(){
					var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['range']($constant_int_10);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					i = $iter1_nextval['$nextval'];
					$collcomp1['append']($constant_int_33);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.time';

	return $collcomp1;}()) : $p['setattr'](self, '_time_diff', function(){
					var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['range']($constant_int_10);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					i = $iter1_nextval['$nextval'];
					$collcomp1['append']($constant_int_33);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.time';

	return $collcomp1;}()); 
				$pyjs['track']['lineno']=28;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_pos', $constant_int_0) : $p['setattr'](self, '_pos', $constant_int_0); 
				$pyjs['track']['lineno']=29;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_framerate', $constant_int_0) : $p['setattr'](self, '_framerate', $constant_int_0); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=31;
			$method = $pyjs__bind_method2('get_time', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cb57b5bb5b5aa9a25bd295be9c867128') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.time', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=31;
				$pyjs['track']['lineno']=35;
				$pyjs['track']['lineno']=35;
				var $pyjs__ret = $p['getattr'](self, '_time_diff')['__getitem__']($p['getattr'](self, '_pos'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_time'] = $method;
			$pyjs['track']['lineno']=37;
			$method = $pyjs__bind_method2('tick', function(framerate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					framerate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cb57b5bb5b5aa9a25bd295be9c867128') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof framerate == 'undefined') framerate=arguments['callee']['__args__'][3][1];
				var $sub3,$div2,$sub2,$sub1,$div1,$sub4;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':37};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=37;
				$pyjs['track']['lineno']=42;
				if ($p['bool']($p['getattr'](self, '_pos'))) {
					$pyjs['track']['lineno']=43;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_pos', $p['__op_sub']($sub1=$p['getattr'](self, '_pos'),$sub2=$constant_int_1)) : $p['setattr'](self, '_pos', $p['__op_sub']($sub1=$p['getattr'](self, '_pos'),$sub2=$constant_int_1)); 
				}
				else {
					$pyjs['track']['lineno']=45;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_pos', $constant_int_9) : $p['setattr'](self, '_pos', $constant_int_9); 
					$pyjs['track']['lineno']=46;
					if ($p['bool'](!$p['op_eq']($p['getattr'](self, '_framerate'), framerate))) {
						$pyjs['track']['lineno']=47;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_framerate', framerate) : $p['setattr'](self, '_framerate', framerate); 
						$pyjs['track']['lineno']=48;
						$p['getattr']($m['env'], 'canvas')['__is_instance__'] && typeof $p['getattr']($m['env'], 'canvas')['__setattr__'] == 'function' ? $p['getattr']($m['env'], 'canvas')['__setattr__']('_framerate', (typeof ($div1=$constant_int_1000)==typeof ($div2=framerate) && typeof $div1=='number' && $div2 !== 0?
							$div1/$div2:
							$p['op_div']($div1,$div2))) : $p['setattr']($p['getattr']($m['env'], 'canvas'), '_framerate', (typeof ($div1=$constant_int_1000)==typeof ($div2=framerate) && typeof $div1=='number' && $div2 !== 0?
							$div1/$div2:
							$p['op_div']($div1,$div2))); 
					}
				}
				$pyjs['track']['lineno']=49;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_time', self['time']()) : $p['setattr'](self, '_time', self['time']()); 
				$pyjs['track']['lineno']=50;
				$p['getattr'](self, '_time_diff')['__setitem__']($p['getattr'](self, '_pos'), $p['__op_sub']($sub3=$p['getattr'](self, '_time'),$sub4=$p['getattr'](self, '_time_init')));
				$pyjs['track']['lineno']=51;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_time_init', $p['getattr'](self, '_time')) : $p['setattr'](self, '_time_init', $p['getattr'](self, '_time')); 
				$pyjs['track']['lineno']=52;
				$pyjs['track']['lineno']=52;
				var $pyjs__ret = $p['getattr'](self, '_time_diff')['__getitem__']($p['getattr'](self, '_pos'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['framerate', $constant_int_0]]);
			$cls_definition['tick'] = $method;
			$pyjs['track']['lineno']=54;
			$method = $pyjs__bind_method2('tick_busy_loop', function(framerate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					framerate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cb57b5bb5b5aa9a25bd295be9c867128') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof framerate == 'undefined') framerate=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.time', 'lineno':54};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=54;
				$pyjs['track']['lineno']=59;
				$pyjs['track']['lineno']=59;
				var $pyjs__ret = self['tick'](framerate);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['framerate', $constant_int_0]]);
			$cls_definition['tick_busy_loop'] = $method;
			$pyjs['track']['lineno']=61;
			$method = $pyjs__bind_method2('get_fps', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cb57b5bb5b5aa9a25bd295be9c867128') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div3,$div6,$div4,$div5;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':61};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=61;
				$pyjs['track']['lineno']=65;
				$pyjs['track']['lineno']=65;
				var $pyjs__ret = (typeof ($div5=$constant_int_1000)==typeof ($div6=(typeof ($div3=$p['sum']($p['getattr'](self, '_time_diff')))==typeof ($div4=$constant_int_10) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4))) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_fps'] = $method;
			$pyjs['track']['lineno']=67;
			$method = $pyjs__bind_method2('time', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cb57b5bb5b5aa9a25bd295be9c867128') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ctime;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':67};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=67;
				$pyjs['track']['lineno']=73;
				ctime = new Date();
				$pyjs['track']['lineno']=74;
				$pyjs['track']['lineno']=74;
				var $pyjs__ret = ctime['getTime']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['time'] = $method;
			$pyjs['track']['lineno']=11;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Clock', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=77;
		$m['Time'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.time';
			$cls_definition['__md5__'] = 'e78ca42e6337443e7247ea2d464774fd';
			$pyjs['track']['lineno']=79;
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
					if (self.prototype['__md5__'] !== 'e78ca42e6337443e7247ea2d464774fd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda1;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':79};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=79;
				$pyjs['track']['lineno']=80;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_time_init', self['time']()) : $p['setattr'](self, '_time_init', self['time']()); 
				$pyjs['track']['lineno']=81;
				var 				$lambda1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

					$pyjs['track']={'module':'pyjsdl.time','lineno':81};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.time';
					$pyjs['track']['lineno']=81;
					$pyjs['track']['lineno']=81;
					$pyjs['track']['lineno']=81;
					var $pyjs__ret = self['wait']();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = [null,null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('run', $lambda1) : $p['setattr'](self, 'run', $lambda1); 
				$pyjs['track']['lineno']=82;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('framerate', null) : $p['setattr'](self, 'framerate', null); 
				$pyjs['track']['lineno']=83;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('Clock', $m['Clock']) : $p['setattr'](self, 'Clock', $m['Clock']); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=85;
			$method = $pyjs__bind_method2('get_ticks', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e78ca42e6337443e7247ea2d464774fd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub6,$sub5;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':85};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=85;
				$pyjs['track']['lineno']=91;
				$pyjs['track']['lineno']=91;
				var $pyjs__ret = $p['__op_sub']($sub5=self['time'](),$sub6=$p['getattr'](self, '_time_init'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_ticks'] = $method;
			$pyjs['track']['lineno']=93;
			$method = $pyjs__bind_method2('delay', function(time) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					time = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e78ca42e6337443e7247ea2d464774fd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub10,start,$sub9,$sub8,$sub7;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':93};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=93;
				$pyjs['track']['lineno']=99;
				start = self['time']();
				$pyjs['track']['lineno']=100;
				while ($p['bool'](($p['cmp']($p['__op_sub']($sub7=self['time'](),$sub8=start), time) == -1))) {
					$pyjs['track']['lineno']=101;
				}
				$pyjs['track']['lineno']=102;
				$pyjs['track']['lineno']=102;
				var $pyjs__ret = $p['__op_sub']($sub9=self['time'](),$sub10=start);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['time']]);
			$cls_definition['delay'] = $method;
			$pyjs['track']['lineno']=104;
			$method = $pyjs__bind_method2('wait', function(time) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					time = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e78ca42e6337443e7247ea2d464774fd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof time == 'undefined') time=arguments['callee']['__args__'][3][1];
				var $mul2,$mul1;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':104};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=104;
				$pyjs['track']['lineno']=110;
				if ($p['bool'](time)) {
					$pyjs['track']['lineno']=111;
					if ($p['bool']($p['op_is']($p['getattr'](self, 'framerate'), null))) {
						$pyjs['track']['lineno']=112;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('framerate', $p['getattr']($p['getattr']($m['env'], 'canvas'), '_framerate')) : $p['setattr'](self, 'framerate', $p['getattr']($p['getattr']($m['env'], 'canvas'), '_framerate')); 
						$pyjs['track']['lineno']=113;
						$p['getattr']($m['env'], 'canvas')['__is_instance__'] && typeof $p['getattr']($m['env'], 'canvas')['__setattr__'] == 'function' ? $p['getattr']($m['env'], 'canvas')['__setattr__']('_framerate', (typeof ($mul1=time)==typeof ($mul2=$constant_int_10) && typeof $mul1=='number'?
							$mul1*$mul2:
							$p['op_mul']($mul1,$mul2))) : $p['setattr']($p['getattr']($m['env'], 'canvas'), '_framerate', (typeof ($mul1=time)==typeof ($mul2=$constant_int_10) && typeof $mul1=='number'?
							$mul1*$mul2:
							$p['op_mul']($mul1,$mul2))); 
						$pyjs['track']['lineno']=114;
						self['timeout'](time, self);
					}
				}
				else {
					$pyjs['track']['lineno']=116;
					if ($p['bool'](!$p['op_is']($p['getattr'](self, 'framerate'), null))) {
						$pyjs['track']['lineno']=117;
						$p['getattr']($m['env'], 'canvas')['__is_instance__'] && typeof $p['getattr']($m['env'], 'canvas')['__setattr__'] == 'function' ? $p['getattr']($m['env'], 'canvas')['__setattr__']('_framerate', $p['getattr'](self, 'framerate')) : $p['setattr']($p['getattr']($m['env'], 'canvas'), '_framerate', $p['getattr'](self, 'framerate')); 
						$pyjs['track']['lineno']=118;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('framerate', null) : $p['setattr'](self, 'framerate', null); 
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['time', $constant_int_0]]);
			$cls_definition['wait'] = $method;
			$pyjs['track']['lineno']=120;
			$method = $pyjs__bind_method2('set_timer', function(eventid, time) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventid = arguments[1];
					time = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e78ca42e6337443e7247ea2d464774fd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.time', 'lineno':120};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=120;
				$pyjs['track']['lineno']=127;
				if ($p['bool'](!$p['getattr']((typeof _EventTimer == "undefined"?$m['_EventTimer']:_EventTimer), 'timers')['__contains__'](eventid))) {
					$pyjs['track']['lineno']=128;
					$p['getattr']((typeof _EventTimer == "undefined"?$m['_EventTimer']:_EventTimer), 'timers')['__setitem__'](eventid, (typeof _EventTimer == "undefined"?$m['_EventTimer']:_EventTimer)(eventid));
				}
				$pyjs['track']['lineno']=129;
				$p['getattr']((typeof _EventTimer == "undefined"?$m['_EventTimer']:_EventTimer), 'timers')['__getitem__'](eventid)['set_timer'](time);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['eventid'],['time']]);
			$cls_definition['set_timer'] = $method;
			$pyjs['track']['lineno']=131;
			$method = $pyjs__bind_method2('time', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e78ca42e6337443e7247ea2d464774fd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ctime;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':131};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=131;
				$pyjs['track']['lineno']=137;
				ctime = new Date();
				$pyjs['track']['lineno']=138;
				$pyjs['track']['lineno']=138;
				var $pyjs__ret = ctime['getTime']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['time'] = $method;
			$pyjs['track']['lineno']=140;
			$method = $pyjs__bind_method2('timeout', function(time, obj) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					time = arguments[1];
					obj = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e78ca42e6337443e7247ea2d464774fd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof time == 'undefined') time=arguments['callee']['__args__'][3][1];
				if (typeof obj == 'undefined') obj=arguments['callee']['__args__'][4][1];
				var run,$lambda2;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':140};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=140;
				$pyjs['track']['lineno']=146;
				var 				$lambda2 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

					$pyjs['track']={'module':'pyjsdl.time','lineno':146};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.time';
					$pyjs['track']['lineno']=146;
					$pyjs['track']['lineno']=146;
					$pyjs['track']['lineno']=146;
					var $pyjs__ret = obj['run']();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = [null,null];
				run = $lambda2;
				$pyjs['track']['lineno']=147;
$wnd['setTimeout'](function() {run();}, time);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			}
	, 1, [null,null,['self'],['time', null],['obj', null]]);
			$cls_definition['timeout'] = $method;
			$pyjs['track']['lineno']=77;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Time', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=150;
		$m['_EventTimer'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.time';
			$cls_definition['__md5__'] = '5d9b464a702bdec26188002ee3078a74';
			$pyjs['track']['lineno']=151;
			$cls_definition['timers'] = $p['dict']([]);
			$pyjs['track']['lineno']=153;
			$method = $pyjs__bind_method2('__init__', function(eventid) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventid = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5d9b464a702bdec26188002ee3078a74') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.time', 'lineno':153};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=153;
				$pyjs['track']['lineno']=154;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('event', $m['pyjsdl']['event']['Event'](eventid)) : $p['setattr'](self, 'event', $m['pyjsdl']['event']['Event'](eventid)); 
				$pyjs['track']['lineno']=155;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('timer', null) : $p['setattr'](self, 'timer', null); 
				$pyjs['track']['lineno']=156;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time', $constant_int_0) : $p['setattr'](self, 'time', $constant_int_0); 
				$pyjs['track']['lineno']=157;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('repeat', true) : $p['setattr'](self, 'repeat', true); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['eventid']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=159;
			$method = $pyjs__bind_method2('set_timer', function(time) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					time = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5d9b464a702bdec26188002ee3078a74') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.time', 'lineno':159};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=159;
				$pyjs['track']['lineno']=160;
				if ($p['bool']($p['getattr'](self, 'timer'))) {
					$pyjs['track']['lineno']=161;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('repeat', false) : $p['setattr'](self, 'repeat', false); 
					$pyjs['track']['lineno']=162;
					self['clearTimeout']();
				}
				$pyjs['track']['lineno']=163;
				if ($p['bool'](time)) {
					$pyjs['track']['lineno']=164;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time', time) : $p['setattr'](self, 'time', time); 
					$pyjs['track']['lineno']=165;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('repeat', true) : $p['setattr'](self, 'repeat', true); 
					$pyjs['track']['lineno']=166;
					self['setTimeout']();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['time']]);
			$cls_definition['set_timer'] = $method;
			$pyjs['track']['lineno']=168;
			$method = $pyjs__bind_method2('setTimeout', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5d9b464a702bdec26188002ee3078a74') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var timer;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':168};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=168;
				$pyjs['track']['lineno']=170;
				timer = $wnd['setTimeout'](function() {self['run']();}, self['time']);;
				$pyjs['track']['lineno']=171;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('timer', timer) : $p['setattr'](self, 'timer', timer); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setTimeout'] = $method;
			$pyjs['track']['lineno']=173;
			$method = $pyjs__bind_method2('clearTimeout', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5d9b464a702bdec26188002ee3078a74') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.time', 'lineno':173};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=173;
				$pyjs['track']['lineno']=174;
$wnd['clearTimeout'](self['timer']);
				$pyjs['track']['lineno']=175;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('timer', null) : $p['setattr'](self, 'timer', null); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clearTimeout'] = $method;
			$pyjs['track']['lineno']=177;
			$method = $pyjs__bind_method2('run', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5d9b464a702bdec26188002ee3078a74') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.time', 'lineno':177};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=177;
				$pyjs['track']['lineno']=178;
				$m['pyjsdl']['event']['post']($p['getattr'](self, 'event'));
				$pyjs['track']['lineno']=179;
				if ($p['bool']($p['getattr'](self, 'repeat'))) {
					$pyjs['track']['lineno']=180;
					self['setTimeout']();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['run'] = $method;
			$pyjs['track']['lineno']=150;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('_EventTimer', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.time */


/* end module: pyjsdl.time */


/*
PYJS_DEPS: ['pyjsdl.event', 'pyjsdl', 'pyjsdl.env']
*/
