/* start module: pyjsdl.event */
$pyjs['loaded_modules']['pyjsdl.event'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.event']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.event'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.event'];
	$m['__repr__'] = function() { return '<module: pyjsdl.event>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.event';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['event'] = $pyjs['loaded_modules']['pyjsdl.event'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.event.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.event.py, line 4:\n    from pyjsdl import env';
		$m.__track_lines__[5] = 'pyjsdl.event.py, line 5:\n    from pyjsdl import locals as Const';
		$m.__track_lines__[7] = "pyjsdl.event.py, line 7:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[10] = 'pyjsdl.event.py, line 10:\n    class Event(object):';
		$m.__track_lines__[28] = 'pyjsdl.event.py, line 28:\n    def __init__(self):';
		$m.__track_lines__[34] = 'pyjsdl.event.py, line 34:\n    self.eventQueue = [None for i in range(256)]      #max 256: Error: Event queue full';
		$m.__track_lines__[36] = 'pyjsdl.event.py, line 36:\n    self.eventNum = 0';
		$m.__track_lines__[37] = 'pyjsdl.event.py, line 37:\n    self.eventQueueTmp = [None for i in range(256)]   #used when main queue is locked';
		$m.__track_lines__[39] = 'pyjsdl.event.py, line 39:\n    self.eventNumTmp = 0';
		$m.__track_lines__[40] = 'pyjsdl.event.py, line 40:\n    self.queueLock = False';
		$m.__track_lines__[41] = 'pyjsdl.event.py, line 41:\n    self.queueAccess = False';
		$m.__track_lines__[42] = 'pyjsdl.event.py, line 42:\n    self.queue = []';
		$m.__track_lines__[43] = 'pyjsdl.event.py, line 43:\n    self.mousePress = {0:False, 1:False, 2:False}';
		$m.__track_lines__[44] = "pyjsdl.event.py, line 44:\n    self.mouseMove = {'x':-1, 'y':-1}";
		$m.__track_lines__[45] = "pyjsdl.event.py, line 45:\n    self.mouseMoveRel = {'x':None, 'y':None}";
		$m.__track_lines__[46] = 'pyjsdl.event.py, line 46:\n    self.keyPress = {Const.K_ALT:False, Const.K_CTRL:False, Const.K_SHIFT:False}';
		$m.__track_lines__[47] = 'pyjsdl.event.py, line 47:\n    self.keyMod = {Const.K_ALT:{True:Const.KMOD_ALT,False:0}, Const.K_CTRL:{True:Const.KMOD_CTRL,False:0}, Const.K_SHIFT:{True:Const.KMOD_SHIFT,False:0}}';
		$m.__track_lines__[48] = "pyjsdl.event.py, line 48:\n    self.eventName = {'mousemove':'MouseMotion', 'mousedown':'MouseButtonDown', 'mouseup':'MouseButtonUp', 'keydown':'KeyDown', 'keyup':'KeyUp'}";
		$m.__track_lines__[49] = "pyjsdl.event.py, line 49:\n    self.eventType = ['mousemove', 'mousedown', 'mouseup', 'wheel', 'mousewheel', 'DOMMouseScroll', 'keydown', 'keypress', 'keyup']";
		$m.__track_lines__[50] = 'pyjsdl.event.py, line 50:\n    self.events = set(self.eventType)';
		$m.__track_lines__[51] = "pyjsdl.event.py, line 51:\n    self.eventTypes = {Const.MOUSEMOTION:['mousemove'], Const.MOUSEBUTTONDOWN:['mousedown','wheel','mousewheel', 'DOMMouseScroll'], Const.MOUSEBUTTONUP:['mouseup'], Const.KEYDOWN:['keydown','keypress'], Const.KEYUP:['keyup']}";
		$m.__track_lines__[52] = 'pyjsdl.event.py, line 52:\n    if env.pyjs_mode.optimized:';
		$m.__track_lines__[53] = 'pyjsdl.event.py, line 53:\n    self.modKey = set([Const.K_ALT, Const.K_CTRL, Const.K_SHIFT])';
		$m.__track_lines__[54] = 'pyjsdl.event.py, line 54:\n    self.specialKey = set([Const.K_UP, Const.K_DOWN, Const.K_LEFT, Const.K_RIGHT, Const.K_HOME, Const.K_END, Const.K_PAGEDOWN, Const.K_PAGEUP, Const.K_BACKSPACE, Const.K_DELETE, Const.K_INSERT, Const.K_RETURN, Const.K_TAB, Const.K_ESCAPE])';
		$m.__track_lines__[56] = 'pyjsdl.event.py, line 56:\n    self.modKey = set([keycode.valueOf() for keycode in (Const.K_ALT, Const.K_CTRL, Const.K_SHIFT)])';
		$m.__track_lines__[57] = 'pyjsdl.event.py, line 57:\n    self.specialKey = set([keycode.valueOf() for keycode in (Const.K_UP, Const.K_DOWN, Const.K_LEFT, Const.K_RIGHT, Const.K_HOME, Const.K_END, Const.K_PAGEDOWN, Const.K_PAGEUP, Const.K_BACKSPACE, Const.K_DELETE, Const.K_INSERT, Const.K_RETURN, Const.K_TAB, Const.K_ESCAPE)])';
		$m.__track_lines__[59] = 'pyjsdl.event.py, line 59:\n    self.touchlistener = None';
		$m.__track_lines__[60] = 'pyjsdl.event.py, line 60:\n    self.Event = UserEvent';
		$m.__track_lines__[61] = 'pyjsdl.event.py, line 61:\n    self._nonimplemented_methods()';
		$m.__track_lines__[63] = 'pyjsdl.event.py, line 63:\n    def _lock(self):';
		$m.__track_lines__[64] = 'pyjsdl.event.py, line 64:\n    self.queueLock = True';
		$m.__track_lines__[66] = 'pyjsdl.event.py, line 66:\n    def _unlock(self):';
		$m.__track_lines__[67] = 'pyjsdl.event.py, line 67:\n    self.queueLock = False';
		$m.__track_lines__[69] = 'pyjsdl.event.py, line 69:\n    def _updateQueue(self, event):';
		$m.__track_lines__[70] = 'pyjsdl.event.py, line 70:\n    if event.type not in self.events:';
		$m.__track_lines__[71] = 'pyjsdl.event.py, line 71:\n    return';
		$m.__track_lines__[72] = 'pyjsdl.event.py, line 72:\n    self.queueAccess = True';
		$m.__track_lines__[73] = 'pyjsdl.event.py, line 73:\n    if not self.queueLock:';
		$m.__track_lines__[74] = 'pyjsdl.event.py, line 74:\n    if self.eventNumTmp:';
		$m.__track_lines__[75] = 'pyjsdl.event.py, line 75:\n    self._appendMerge()';
		$m.__track_lines__[76] = 'pyjsdl.event.py, line 76:\n    self._append(event)';
		$m.__track_lines__[78] = 'pyjsdl.event.py, line 78:\n    self._appendTmp(event)';
		$m.__track_lines__[79] = 'pyjsdl.event.py, line 79:\n    self.queueAccess = False';
		$m.__track_lines__[81] = 'pyjsdl.event.py, line 81:\n    def _append(self, event):';
		$m.__track_lines__[82] = 'pyjsdl.event.py, line 82:\n    if self.eventNum < 255:';
		$m.__track_lines__[83] = 'pyjsdl.event.py, line 83:\n    self.eventQueue[self.eventNum] = event';
		$m.__track_lines__[84] = 'pyjsdl.event.py, line 84:\n    self.eventNum += 1';
		$m.__track_lines__[86] = 'pyjsdl.event.py, line 86:\n    def _appendTmp(self, event):';
		$m.__track_lines__[87] = 'pyjsdl.event.py, line 87:\n    if self.eventNumTmp < 255:';
		$m.__track_lines__[88] = 'pyjsdl.event.py, line 88:\n    self.eventQueueTmp[self.eventNumTmp] = event';
		$m.__track_lines__[89] = 'pyjsdl.event.py, line 89:\n    self.eventNumTmp += 1';
		$m.__track_lines__[91] = 'pyjsdl.event.py, line 91:\n    def _appendMerge(self):';
		$m.__track_lines__[92] = 'pyjsdl.event.py, line 92:\n    for i in range(self.eventNumTmp):';
		$m.__track_lines__[93] = 'pyjsdl.event.py, line 93:\n    self._append( self.eventQueueTmp[i] )';
		$m.__track_lines__[94] = 'pyjsdl.event.py, line 94:\n    self.eventQueueTmp[i] = None';
		$m.__track_lines__[95] = 'pyjsdl.event.py, line 95:\n    self.eventNumTmp = 0';
		$m.__track_lines__[97] = 'pyjsdl.event.py, line 97:\n    def pump(self):';
		$m.__track_lines__[101] = 'pyjsdl.event.py, line 101:\n    if self.eventNum > 250:';
		$m.__track_lines__[102] = 'pyjsdl.event.py, line 102:\n    self._lock()';
		$m.__track_lines__[103] = 'pyjsdl.event.py, line 103:\n    self._pump()';
		$m.__track_lines__[104] = 'pyjsdl.event.py, line 104:\n    self._unlock()';
		$m.__track_lines__[105] = 'pyjsdl.event.py, line 105:\n    return None';
		$m.__track_lines__[107] = 'pyjsdl.event.py, line 107:\n    def _pump(self):';
		$m.__track_lines__[108] = 'pyjsdl.event.py, line 108:\n    queue = self.eventQueue[50:self.eventNum]';
		$m.__track_lines__[109] = 'pyjsdl.event.py, line 109:\n    self.eventNum -= 50';
		$m.__track_lines__[110] = 'pyjsdl.event.py, line 110:\n    for i in range(self.eventNum):';
		$m.__track_lines__[111] = 'pyjsdl.event.py, line 111:\n    self.eventQueue[i] = queue[i]';
		$m.__track_lines__[113] = 'pyjsdl.event.py, line 113:\n    def get(self, eventType=None):';
		$m.__track_lines__[118] = 'pyjsdl.event.py, line 118:\n    self._lock()';
		$m.__track_lines__[119] = 'pyjsdl.event.py, line 119:\n    if not eventType:';
		$m.__track_lines__[120] = 'pyjsdl.event.py, line 120:\n    self.queue = [ JEvent(event) for event in self.eventQueue[0:self.eventNum] ]';
		$m.__track_lines__[121] = 'pyjsdl.event.py, line 121:\n    self.eventNum = 0';
		$m.__track_lines__[123] = 'pyjsdl.event.py, line 123:\n    if not isinstance(eventType, (tuple,list)):';
		$m.__track_lines__[124] = 'pyjsdl.event.py, line 124:\n    evtType = [et for et in self.eventTypes[eventType]]';
		$m.__track_lines__[126] = 'pyjsdl.event.py, line 126:\n    evtType = [et for t in eventType for et in self.eventTypes[t]]';
		$m.__track_lines__[127] = 'pyjsdl.event.py, line 127:\n    queue = []';
		$m.__track_lines__[128] = 'pyjsdl.event.py, line 128:\n    self.queue = []';
		$m.__track_lines__[129] = 'pyjsdl.event.py, line 129:\n    for i in range(self.eventNum):';
		$m.__track_lines__[130] = 'pyjsdl.event.py, line 130:\n    if self.eventQueue[i].type not in evtType:';
		$m.__track_lines__[131] = 'pyjsdl.event.py, line 131:\n    queue.append(self.eventQueue[i])';
		$m.__track_lines__[133] = 'pyjsdl.event.py, line 133:\n    self.queue.append( JEvent(self.eventQueue[i]) )';
		$m.__track_lines__[134] = 'pyjsdl.event.py, line 134:\n    if len(queue) != self.eventNum:';
		$m.__track_lines__[135] = 'pyjsdl.event.py, line 135:\n    self.eventNum = len(queue)';
		$m.__track_lines__[136] = 'pyjsdl.event.py, line 136:\n    for i in range(self.eventNum):';
		$m.__track_lines__[137] = 'pyjsdl.event.py, line 137:\n    self.eventQueue[i] = queue[i]';
		$m.__track_lines__[138] = 'pyjsdl.event.py, line 138:\n    if self.eventNum > 250:';
		$m.__track_lines__[139] = 'pyjsdl.event.py, line 139:\n    self._pump()';
		$m.__track_lines__[140] = 'pyjsdl.event.py, line 140:\n    self._unlock()';
		$m.__track_lines__[141] = 'pyjsdl.event.py, line 141:\n    return self.queue';
		$m.__track_lines__[143] = 'pyjsdl.event.py, line 143:\n    def poll(self):';
		$m.__track_lines__[147] = 'pyjsdl.event.py, line 147:\n    self._lock()';
		$m.__track_lines__[148] = 'pyjsdl.event.py, line 148:\n    if self.eventNum:';
		$m.__track_lines__[149] = 'pyjsdl.event.py, line 149:\n    evt = JEvent( self.eventQueue.pop(0) )';
		$m.__track_lines__[150] = 'pyjsdl.event.py, line 150:\n    self.eventNum -= 1';
		$m.__track_lines__[151] = 'pyjsdl.event.py, line 151:\n    self.eventQueue.append(None)';
		$m.__track_lines__[152] = 'pyjsdl.event.py, line 152:\n    if self.eventNum > 250:';
		$m.__track_lines__[153] = 'pyjsdl.event.py, line 153:\n    self._pump()';
		$m.__track_lines__[155] = 'pyjsdl.event.py, line 155:\n    evt = self.Event(Const.NOEVENT)';
		$m.__track_lines__[156] = 'pyjsdl.event.py, line 156:\n    self._unlock()';
		$m.__track_lines__[157] = 'pyjsdl.event.py, line 157:\n    return evt';
		$m.__track_lines__[159] = 'pyjsdl.event.py, line 159:\n    def wait(self):     #not implemented in js';
		$m.__track_lines__[163] = 'pyjsdl.event.py, line 163:\n    while True:';
		$m.__track_lines__[164] = 'pyjsdl.event.py, line 164:\n    if self.eventNum:';
		$m.__track_lines__[165] = 'pyjsdl.event.py, line 165:\n    self._lock()';
		$m.__track_lines__[166] = 'pyjsdl.event.py, line 166:\n    evt = JEvent( self.eventQueue.pop(0) )';
		$m.__track_lines__[167] = 'pyjsdl.event.py, line 167:\n    self.eventNum -= 1';
		$m.__track_lines__[168] = 'pyjsdl.event.py, line 168:\n    self.eventQueue.append(None)';
		$m.__track_lines__[169] = 'pyjsdl.event.py, line 169:\n    if self.eventNum > 250:';
		$m.__track_lines__[170] = 'pyjsdl.event.py, line 170:\n    self._pump()';
		$m.__track_lines__[171] = 'pyjsdl.event.py, line 171:\n    self._unlock()';
		$m.__track_lines__[172] = 'pyjsdl.event.py, line 172:\n    return evt';
		$m.__track_lines__[174] = 'pyjsdl.event.py, line 174:\n    self._unlock()';
		$m.__track_lines__[175] = 'pyjsdl.event.py, line 175:\n    return None';
		$m.__track_lines__[177] = 'pyjsdl.event.py, line 177:\n    def peek(self, eventType):';
		$m.__track_lines__[182] = 'pyjsdl.event.py, line 182:\n    if not self.eventNum:';
		$m.__track_lines__[183] = 'pyjsdl.event.py, line 183:\n    return False';
		$m.__track_lines__[184] = 'pyjsdl.event.py, line 184:\n    if not isinstance(eventType, (tuple,list)):';
		$m.__track_lines__[185] = 'pyjsdl.event.py, line 185:\n    evtType = [et for et in self.eventTypes[eventType]]';
		$m.__track_lines__[187] = 'pyjsdl.event.py, line 187:\n    evtType = [et for t in eventType for et in self.eventTypes[t]]';
		$m.__track_lines__[188] = 'pyjsdl.event.py, line 188:\n    self._lock()';
		$m.__track_lines__[189] = 'pyjsdl.event.py, line 189:\n    evt = [event.type for event in self.eventQueue[0:self.eventNum]]';
		$m.__track_lines__[190] = 'pyjsdl.event.py, line 190:\n    if self.eventNum > 250:';
		$m.__track_lines__[191] = 'pyjsdl.event.py, line 191:\n    self._pump()';
		$m.__track_lines__[192] = 'pyjsdl.event.py, line 192:\n    self._unlock()';
		$m.__track_lines__[193] = 'pyjsdl.event.py, line 193:\n    for et in evtType:';
		$m.__track_lines__[194] = 'pyjsdl.event.py, line 194:\n    if et in evt:';
		$m.__track_lines__[195] = 'pyjsdl.event.py, line 195:\n    return True';
		$m.__track_lines__[196] = 'pyjsdl.event.py, line 196:\n    return False';
		$m.__track_lines__[198] = 'pyjsdl.event.py, line 198:\n    def clear(self, eventType=None):';
		$m.__track_lines__[203] = 'pyjsdl.event.py, line 203:\n    if not self.eventNum:';
		$m.__track_lines__[204] = 'pyjsdl.event.py, line 204:\n    return None';
		$m.__track_lines__[205] = 'pyjsdl.event.py, line 205:\n    self._lock()';
		$m.__track_lines__[206] = 'pyjsdl.event.py, line 206:\n    if eventType is None:';
		$m.__track_lines__[207] = 'pyjsdl.event.py, line 207:\n    self.eventNum = 0';
		$m.__track_lines__[209] = 'pyjsdl.event.py, line 209:\n    if not isinstance(eventType, (tuple,list)):';
		$m.__track_lines__[210] = 'pyjsdl.event.py, line 210:\n    evtType = [et for et in self.eventTypes[eventType]]';
		$m.__track_lines__[212] = 'pyjsdl.event.py, line 212:\n    evtType = [et for t in eventType for et in self.eventTypes[t]]';
		$m.__track_lines__[213] = 'pyjsdl.event.py, line 213:\n    queue = []';
		$m.__track_lines__[214] = 'pyjsdl.event.py, line 214:\n    for i in range(self.eventNum):';
		$m.__track_lines__[215] = 'pyjsdl.event.py, line 215:\n    if self.eventQueue[i].type not in evtType:';
		$m.__track_lines__[216] = 'pyjsdl.event.py, line 216:\n    queue.append(self.eventQueue[i])';
		$m.__track_lines__[217] = 'pyjsdl.event.py, line 217:\n    if len(queue) != self.eventNum:';
		$m.__track_lines__[218] = 'pyjsdl.event.py, line 218:\n    self.eventNum = len(queue)';
		$m.__track_lines__[219] = 'pyjsdl.event.py, line 219:\n    for i in range(self.eventNum):';
		$m.__track_lines__[220] = 'pyjsdl.event.py, line 220:\n    self.eventQueue[i] = queue[i]';
		$m.__track_lines__[221] = 'pyjsdl.event.py, line 221:\n    if self.eventNum > 250:';
		$m.__track_lines__[222] = 'pyjsdl.event.py, line 222:\n    self._pump()';
		$m.__track_lines__[223] = 'pyjsdl.event.py, line 223:\n    self._unlock()';
		$m.__track_lines__[224] = 'pyjsdl.event.py, line 224:\n    return None';
		$m.__track_lines__[226] = 'pyjsdl.event.py, line 226:\n    def event_name(self, eventType):';
		$m.__track_lines__[230] = 'pyjsdl.event.py, line 230:\n    evtType = self.eventTypes[eventType][0]';
		$m.__track_lines__[231] = 'pyjsdl.event.py, line 231:\n    if evtType in self.eventName:';
		$m.__track_lines__[232] = 'pyjsdl.event.py, line 232:\n    return self.eventName[evtType]';
		$m.__track_lines__[234] = 'pyjsdl.event.py, line 234:\n    return None';
		$m.__track_lines__[236] = 'pyjsdl.event.py, line 236:\n    def set_blocked(self, eventType):';
		$m.__track_lines__[240] = 'pyjsdl.event.py, line 240:\n    if eventType is not None:';
		$m.__track_lines__[241] = 'pyjsdl.event.py, line 241:\n    if not isinstance(eventType, (tuple,list)):';
		$m.__track_lines__[242] = 'pyjsdl.event.py, line 242:\n    evtType = [et for et in self.eventTypes[eventType]]';
		$m.__track_lines__[244] = 'pyjsdl.event.py, line 244:\n    evtType = [et for t in eventType for et in self.eventTypes[t]]';
		$m.__track_lines__[245] = 'pyjsdl.event.py, line 245:\n    for et in evtType:';
		$m.__track_lines__[246] = 'pyjsdl.event.py, line 246:\n    if et in self.events:';
		$m.__track_lines__[247] = 'pyjsdl.event.py, line 247:\n    self.events.remove(et)';
		$m.__track_lines__[249] = 'pyjsdl.event.py, line 249:\n    for event in self.eventType:';
		$m.__track_lines__[250] = 'pyjsdl.event.py, line 250:\n    self.events.add(event)';
		$m.__track_lines__[251] = 'pyjsdl.event.py, line 251:\n    return None';
		$m.__track_lines__[253] = 'pyjsdl.event.py, line 253:\n    def set_allowed(self, eventType):';
		$m.__track_lines__[257] = 'pyjsdl.event.py, line 257:\n    if eventType is not None:';
		$m.__track_lines__[258] = 'pyjsdl.event.py, line 258:\n    if not isinstance(eventType, (tuple,list)):';
		$m.__track_lines__[259] = 'pyjsdl.event.py, line 259:\n    evtType = [et for et in self.eventTypes[eventType]]';
		$m.__track_lines__[261] = 'pyjsdl.event.py, line 261:\n    evtType = [et for t in eventType for et in self.eventTypes[t]]';
		$m.__track_lines__[262] = 'pyjsdl.event.py, line 262:\n    for et in evtType:';
		$m.__track_lines__[263] = 'pyjsdl.event.py, line 263:\n    self.events.add(et)';
		$m.__track_lines__[265] = 'pyjsdl.event.py, line 265:\n    self.events.clear()';
		$m.__track_lines__[266] = 'pyjsdl.event.py, line 266:\n    return None';
		$m.__track_lines__[268] = 'pyjsdl.event.py, line 268:\n    def get_blocked(self, eventType):';
		$m.__track_lines__[272] = 'pyjsdl.event.py, line 272:\n    evtType = [et for et in self.eventTypes[eventType]][0]';
		$m.__track_lines__[273] = 'pyjsdl.event.py, line 273:\n    if evtType not in self.events:';
		$m.__track_lines__[274] = 'pyjsdl.event.py, line 274:\n    return True';
		$m.__track_lines__[276] = 'pyjsdl.event.py, line 276:\n    return False';
		$m.__track_lines__[278] = 'pyjsdl.event.py, line 278:\n    def post(self, event):';
		$m.__track_lines__[282] = 'pyjsdl.event.py, line 282:\n    self._lock()';
		$m.__track_lines__[283] = 'pyjsdl.event.py, line 283:\n    self._append(event)';
		$m.__track_lines__[284] = 'pyjsdl.event.py, line 284:\n    if event.type not in self.events:';
		$m.__track_lines__[285] = 'pyjsdl.event.py, line 285:\n    self.eventTypes[event.type] = [event.type]';
		$m.__track_lines__[286] = 'pyjsdl.event.py, line 286:\n    self._unlock()';
		$m.__track_lines__[287] = 'pyjsdl.event.py, line 287:\n    return None';
		$m.__track_lines__[289] = 'pyjsdl.event.py, line 289:\n    def _initiate_touch_listener(self, canvas):';
		$m.__track_lines__[290] = 'pyjsdl.event.py, line 290:\n    self.touchlistener = TouchListener(canvas)';
		$m.__track_lines__[291] = 'pyjsdl.event.py, line 291:\n    return None';
		$m.__track_lines__[293] = 'pyjsdl.event.py, line 293:\n    def _nonimplemented_methods(self):';
		$m.__track_lines__[297] = 'pyjsdl.event.py, line 297:\n    self.set_grab = lambda *arg: None';
		$m.__track_lines__[298] = 'pyjsdl.event.py, line 298:\n    self.get_grab = lambda *arg: False';
		$m.__track_lines__[301] = 'pyjsdl.event.py, line 301:\n    class UserEvent(object):';
		$m.__track_lines__[303] = "pyjsdl.event.py, line 303:\n    __slots__ = ['type', 'attr']";
		$m.__track_lines__[305] = 'pyjsdl.event.py, line 305:\n    def __init__(self, eventType, *args, **kwargs):';
		$m.__track_lines__[311] = 'pyjsdl.event.py, line 311:\n    if args:';
		$m.__track_lines__[312] = 'pyjsdl.event.py, line 312:\n    attr = args[0]';
		$m.__track_lines__[314] = 'pyjsdl.event.py, line 314:\n    attr = kwargs';
		$m.__track_lines__[315] = 'pyjsdl.event.py, line 315:\n    object.__setattr__(self, "type", eventType)';
		$m.__track_lines__[316] = 'pyjsdl.event.py, line 316:\n    object.__setattr__(self, "attr", attr)';
		$m.__track_lines__[318] = 'pyjsdl.event.py, line 318:\n    def __repr__(self):';
		$m.__track_lines__[322] = 'pyjsdl.event.py, line 322:\n    return "%s(%s-UserEvent %r)" % (self.__class__, self.type, self.attr)';
		$m.__track_lines__[324] = 'pyjsdl.event.py, line 324:\n    def __getattr__(self, attr):';
		$m.__track_lines__[325] = 'pyjsdl.event.py, line 325:\n    if attr in self.attr:';
		$m.__track_lines__[326] = 'pyjsdl.event.py, line 326:\n    return self.attr[attr]';
		$m.__track_lines__[328] = 'pyjsdl.event.py, line 328:\n    raise AttributeError("\'Event\' object has no attribute \'%s\'" % attr)';
		$m.__track_lines__[330] = 'pyjsdl.event.py, line 330:\n    def __setattr__(self, attr, value):';
		$m.__track_lines__[331] = 'pyjsdl.event.py, line 331:\n    raise AttributeError("\'Event\' object has no attribute \'%s\'" % attr)';
		$m.__track_lines__[334] = 'pyjsdl.event.py, line 334:\n    class JEvent(object):';
		$m.__track_lines__[336] = 'pyjsdl.event.py, line 336:\n    _mouse_pos = (0, 0)';
		$m.__track_lines__[337] = "pyjsdl.event.py, line 337:\n    _types = {'mousemove':Const.MOUSEMOTION, 'mousedown':Const.MOUSEBUTTONDOWN, 'mouseup':Const.MOUSEBUTTONUP, 'wheel':Const.MOUSEBUTTONDOWN, 'mousewheel':Const.MOUSEBUTTONDOWN, 'DOMMouseScroll':Const.MOUSEBUTTONDOWN, 'keydown':Const.KEYDOWN, 'keypress':Const.KEYDOWN, 'keyup':Const.KEYUP}";
		$m.__track_lines__[338] = 'pyjsdl.event.py, line 338:\n    _charCode = {33:Const.K_EXCLAIM, 34:Const.K_QUOTEDBL, 35:Const.K_HASH, 36:Const.K_DOLLAR, 38:Const.K_AMPERSAND, 39:Const.K_QUOTE, 40:Const.K_LEFTPAREN, 41:Const.K_RIGHTPAREN, 42:Const.K_ASTERISK, 43:Const.K_PLUS, 44:Const.K_COMMA, 45:Const.K_MINUS, 46:Const.K_PERIOD, 97:Const.K_a, 98:Const.K_b, 99:Const.K_c, 100:Const.K_d, 101:Const.K_e, 102:Const.K_f, 103:Const.K_g, 104:Const.K_h, 105:Const.K_i, 106:Const.K_j, 107:Const.K_k, 108:Const.K_l, 109:Const.K_m, 110:Const.K_n, 111:Const.K_o, 112:Const.K_p, 113:Const.K_q, 114:Const.K_r, 115:Const.K_s, 116:Const.K_t, 117:Const.K_u, 118:Const.K_v, 119:Const.K_w, 120:Const.K_x, 121:Const.K_y, 122:Const.K_z}';
		$m.__track_lines__[340] = 'pyjsdl.event.py, line 340:\n    def __init__(self, event):';
		$m.__track_lines__[352] = 'pyjsdl.event.py, line 352:\n    self.event = event      #__getattr__ not implemented in pyjs -O';
		$m.__track_lines__[353] = "pyjsdl.event.py, line 353:\n    if event.type in ('mousedown', 'mouseup'):";
		$m.__track_lines__[354] = 'pyjsdl.event.py, line 354:\n    self.type = self.__class__._types[event.type]';
		$m.__track_lines__[355] = 'pyjsdl.event.py, line 355:\n    self.button = event.button + 1';
		$m.__track_lines__[356] = 'pyjsdl.event.py, line 356:\n    self.pos = event.pos[0]+env.frame.scrollLeft, event.pos[1]+env.frame.scrollTop';
		$m.__track_lines__[358] = 'pyjsdl.event.py, line 358:\n    self.type = self.__class__._types[event.type]';
		$m.__track_lines__[359] = 'pyjsdl.event.py, line 359:\n    self.button = event.button + 1';
		$m.__track_lines__[360] = 'pyjsdl.event.py, line 360:\n    self.pos = event.pos[0]+env.frame.scrollLeft, event.pos[1]+env.frame.scrollTop';
		$m.__track_lines__[361] = 'pyjsdl.event.py, line 361:\n    self.rel = (self.pos[0]-self.__class__._mouse_pos[0], self.pos[1]-self.__class__._mouse_pos[1])';
		$m.__track_lines__[362] = 'pyjsdl.event.py, line 362:\n    self.__class__._mouse_pos = self.pos';
		$m.__track_lines__[364] = 'pyjsdl.event.py, line 364:\n    self.type = self.__class__._types[event.type]';
		$m.__track_lines__[365] = 'pyjsdl.event.py, line 365:\n    self.button = event.btn';
		$m.__track_lines__[366] = 'pyjsdl.event.py, line 366:\n    self.pos = event.pos[0]+env.frame.scrollLeft, event.pos[1]+env.frame.scrollTop';
		$m.__track_lines__[368] = 'pyjsdl.event.py, line 368:\n    self.type = self.__class__._types[event.type]';
		$m.__track_lines__[369] = 'pyjsdl.event.py, line 369:\n    self.key = event.keyCode';
		$m.__track_lines__[371] = 'pyjsdl.event.py, line 371:\n    self.type = self.__class__._types[event.type]';
		$m.__track_lines__[372] = 'pyjsdl.event.py, line 372:\n    if event.keyCode:';
		$m.__track_lines__[373] = 'pyjsdl.event.py, line 373:\n    code = event.keyCode';
		$m.__track_lines__[375] = 'pyjsdl.event.py, line 375:\n    code = event.which';
		$m.__track_lines__[376] = 'pyjsdl.event.py, line 376:\n    if code in self.__class__._charCode:';
		$m.__track_lines__[377] = 'pyjsdl.event.py, line 377:\n    self.key = self.__class__._charCode[code]';
		$m.__track_lines__[379] = 'pyjsdl.event.py, line 379:\n    self.key = code';
		$m.__track_lines__[381] = 'pyjsdl.event.py, line 381:\n    self.type = event.type';
		$m.__track_lines__[382] = 'pyjsdl.event.py, line 382:\n    for attr in event.attr:';
		$m.__track_lines__[383] = 'pyjsdl.event.py, line 383:\n    object.__setattr__(self, attr, event.attr[attr])';
		$m.__track_lines__[385] = 'pyjsdl.event.py, line 385:\n    def __repr__(self):';
		$m.__track_lines__[389] = "pyjsdl.event.py, line 389:\n    if hasattr(self.event, 'toString'):";
		$m.__track_lines__[390] = 'pyjsdl.event.py, line 390:\n    return "%s(%s)" % (self.__class__, self.event.toString())';
		$m.__track_lines__[392] = 'pyjsdl.event.py, line 392:\n    return self.event.__repr__()';
		$m.__track_lines__[394] = 'pyjsdl.event.py, line 394:\n    def getEvent(self):';
		$m.__track_lines__[398] = 'pyjsdl.event.py, line 398:\n    return self.event';
		$m.__track_lines__[401] = 'pyjsdl.event.py, line 401:\n    class TouchListener:';
		$m.__track_lines__[409] = 'pyjsdl.event.py, line 409:\n    def __init__(self, canvas):';
		$m.__track_lines__[423] = 'pyjsdl.event.py, line 423:\n    global _canvas';
		$m.__track_lines__[424] = 'pyjsdl.event.py, line 424:\n    _canvas = canvas';
		$m.__track_lines__[425] = 'pyjsdl.event.py, line 425:\n    self.element = canvas.getElement()';
		$m.__track_lines__[426] = "pyjsdl.event.py, line 426:\n    self.element.addEventListener('touchstart', _touch_detect)";
		$m.__track_lines__[427] = 'pyjsdl.event.py, line 427:\n    self.active = False';
		$m.__track_lines__[428] = 'pyjsdl.event.py, line 428:\n    self.callback = []';
		$m.__track_lines__[430] = 'pyjsdl.event.py, line 430:\n    def activate(self):';
		$m.__track_lines__[431] = "pyjsdl.event.py, line 431:\n    self.element.removeEventListener('touchstart', _touch_detect)";
		$m.__track_lines__[432] = "pyjsdl.event.py, line 432:\n    self.element.addEventListener('touchstart', _touch_start)";
		$m.__track_lines__[433] = "pyjsdl.event.py, line 433:\n    self.element.addEventListener('touchend', _touch_end)";
		$m.__track_lines__[434] = "pyjsdl.event.py, line 434:\n    self.element.addEventListener('touchmove', _touch_move)";
		$m.__track_lines__[435] = "pyjsdl.event.py, line 435:\n    self.element.addEventListener('touchcancel', _touch_cancel)";
		$m.__track_lines__[436] = 'pyjsdl.event.py, line 436:\n    self.active = True';
		$m.__track_lines__[438] = 'pyjsdl.event.py, line 438:\n    def add_callback(self, callback):';
		$m.__track_lines__[445] = 'pyjsdl.event.py, line 445:\n    self.callback.append(callback)';
		$m.__track_lines__[446] = 'pyjsdl.event.py, line 446:\n    return None';
		$m.__track_lines__[448] = 'pyjsdl.event.py, line 448:\n    def is_active(self):';
		$m.__track_lines__[452] = 'pyjsdl.event.py, line 452:\n    return self.active';
		$m.__track_lines__[454] = 'pyjsdl.event.py, line 454:\n    _canvas = None';
		$m.__track_lines__[456] = 'pyjsdl.event.py, line 456:\n    def _touch_detect(event):';
		$m.__track_lines__[457] = 'pyjsdl.event.py, line 457:\n    _canvas.onTouchInitiate(event)';
		$m.__track_lines__[459] = 'pyjsdl.event.py, line 459:\n    def _touch_start(event):';
		$m.__track_lines__[460] = 'pyjsdl.event.py, line 460:\n    _canvas.onTouchStart(event)';
		$m.__track_lines__[462] = 'pyjsdl.event.py, line 462:\n    def _touch_end(event):';
		$m.__track_lines__[463] = 'pyjsdl.event.py, line 463:\n    _canvas.onTouchEnd(event)';
		$m.__track_lines__[465] = 'pyjsdl.event.py, line 465:\n    def _touch_move(event):';
		$m.__track_lines__[466] = 'pyjsdl.event.py, line 466:\n    _canvas.onTouchMove(event)';
		$m.__track_lines__[468] = 'pyjsdl.event.py, line 468:\n    def _touch_cancel(event):';
		$m.__track_lines__[469] = 'pyjsdl.event.py, line 469:\n    _canvas.onTouchCancel(event)';

		var $constant_int_256 = new $p['int'](256);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_33 = new $p['int'](33);
		var $constant_int_34 = new $p['int'](34);
		var $constant_int_35 = new $p['int'](35);
		var $constant_int_36 = new $p['int'](36);
		var $constant_int_38 = new $p['int'](38);
		var $constant_int_39 = new $p['int'](39);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_41 = new $p['int'](41);
		var $constant_int_42 = new $p['int'](42);
		var $constant_int_43 = new $p['int'](43);
		var $constant_int_44 = new $p['int'](44);
		var $constant_int_45 = new $p['int'](45);
		var $constant_int_46 = new $p['int'](46);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_122 = new $p['int'](122);
		var $constant_int_97 = new $p['int'](97);
		var $constant_int_98 = new $p['int'](98);
		var $constant_int_99 = new $p['int'](99);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_101 = new $p['int'](101);
		var $constant_int_102 = new $p['int'](102);
		var $constant_int_103 = new $p['int'](103);
		var $constant_int_104 = new $p['int'](104);
		var $constant_int_105 = new $p['int'](105);
		var $constant_int_106 = new $p['int'](106);
		var $constant_int_107 = new $p['int'](107);
		var $constant_int_108 = new $p['int'](108);
		var $constant_int_109 = new $p['int'](109);
		var $constant_int_110 = new $p['int'](110);
		var $constant_int_111 = new $p['int'](111);
		var $constant_int_112 = new $p['int'](112);
		var $constant_int_113 = new $p['int'](113);
		var $constant_int_114 = new $p['int'](114);
		var $constant_int_115 = new $p['int'](115);
		var $constant_int_116 = new $p['int'](116);
		var $constant_int_117 = new $p['int'](117);
		var $constant_int_118 = new $p['int'](118);
		var $constant_int_119 = new $p['int'](119);
		var $constant_int_120 = new $p['int'](120);
		var $constant_int_121 = new $p['int'](121);
		var $constant_int_250 = new $p['int'](250);
		var $constant_int_255 = new $p['int'](255);
		$pyjs['track']['module']='pyjsdl.event';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Const'] = $p['___import___']('pyjsdl.locals', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=10;
		$m['Event'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.event';
			$cls_definition['__md5__'] = 'c70d62a5d5a00e5945d88c1ddd20814b';
			$pyjs['track']['lineno']=28;
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
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':28};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=28;
				$pyjs['track']['lineno']=34;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventQueue', function(){
					var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['range']($constant_int_256);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					i = $iter1_nextval['$nextval'];
					$collcomp1['append'](null);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';

	return $collcomp1;}()) : $p['setattr'](self, 'eventQueue', function(){
					var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['range']($constant_int_256);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					i = $iter1_nextval['$nextval'];
					$collcomp1['append'](null);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';

	return $collcomp1;}()); 
				$pyjs['track']['lineno']=36;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $constant_int_0) : $p['setattr'](self, 'eventNum', $constant_int_0); 
				$pyjs['track']['lineno']=37;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventQueueTmp', function(){
					var $iter2_nextval,$iter2_type,$iter2_iter,i,$collcomp2,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
	$collcomp2 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = $p['range']($constant_int_256);
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					i = $iter2_nextval['$nextval'];
					$collcomp2['append'](null);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';

	return $collcomp2;}()) : $p['setattr'](self, 'eventQueueTmp', function(){
					var $iter2_nextval,$iter2_type,$iter2_iter,i,$collcomp2,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
	$collcomp2 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = $p['range']($constant_int_256);
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					i = $iter2_nextval['$nextval'];
					$collcomp2['append'](null);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';

	return $collcomp2;}()); 
				$pyjs['track']['lineno']=39;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNumTmp', $constant_int_0) : $p['setattr'](self, 'eventNumTmp', $constant_int_0); 
				$pyjs['track']['lineno']=40;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueLock', false) : $p['setattr'](self, 'queueLock', false); 
				$pyjs['track']['lineno']=41;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueAccess', false) : $p['setattr'](self, 'queueAccess', false); 
				$pyjs['track']['lineno']=42;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queue', $p['list']([])) : $p['setattr'](self, 'queue', $p['list']([])); 
				$pyjs['track']['lineno']=43;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mousePress', $p['dict']([[$constant_int_0, false], [$constant_int_1, false], [$constant_int_2, false]])) : $p['setattr'](self, 'mousePress', $p['dict']([[$constant_int_0, false], [$constant_int_1, false], [$constant_int_2, false]])); 
				$pyjs['track']['lineno']=44;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mouseMove', $p['dict']([['x', (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))], ['y', (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))]])) : $p['setattr'](self, 'mouseMove', $p['dict']([['x', (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))], ['y', (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))]])); 
				$pyjs['track']['lineno']=45;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mouseMoveRel', $p['dict']([['x', null], ['y', null]])) : $p['setattr'](self, 'mouseMoveRel', $p['dict']([['x', null], ['y', null]])); 
				$pyjs['track']['lineno']=46;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('keyPress', $p['dict']([[$p['getattr']($m['Const'], 'K_ALT'), false], [$p['getattr']($m['Const'], 'K_CTRL'), false], [$p['getattr']($m['Const'], 'K_SHIFT'), false]])) : $p['setattr'](self, 'keyPress', $p['dict']([[$p['getattr']($m['Const'], 'K_ALT'), false], [$p['getattr']($m['Const'], 'K_CTRL'), false], [$p['getattr']($m['Const'], 'K_SHIFT'), false]])); 
				$pyjs['track']['lineno']=47;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('keyMod', $p['dict']([[$p['getattr']($m['Const'], 'K_ALT'), $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_ALT')], [false, $constant_int_0]])], [$p['getattr']($m['Const'], 'K_CTRL'), $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_CTRL')], [false, $constant_int_0]])], [$p['getattr']($m['Const'], 'K_SHIFT'), $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_SHIFT')], [false, $constant_int_0]])]])) : $p['setattr'](self, 'keyMod', $p['dict']([[$p['getattr']($m['Const'], 'K_ALT'), $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_ALT')], [false, $constant_int_0]])], [$p['getattr']($m['Const'], 'K_CTRL'), $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_CTRL')], [false, $constant_int_0]])], [$p['getattr']($m['Const'], 'K_SHIFT'), $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_SHIFT')], [false, $constant_int_0]])]])); 
				$pyjs['track']['lineno']=48;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventName', $p['dict']([['mousemove', 'MouseMotion'], ['mousedown', 'MouseButtonDown'], ['mouseup', 'MouseButtonUp'], ['keydown', 'KeyDown'], ['keyup', 'KeyUp']])) : $p['setattr'](self, 'eventName', $p['dict']([['mousemove', 'MouseMotion'], ['mousedown', 'MouseButtonDown'], ['mouseup', 'MouseButtonUp'], ['keydown', 'KeyDown'], ['keyup', 'KeyUp']])); 
				$pyjs['track']['lineno']=49;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventType', $p['list'](['mousemove', 'mousedown', 'mouseup', 'wheel', 'mousewheel', 'DOMMouseScroll', 'keydown', 'keypress', 'keyup'])) : $p['setattr'](self, 'eventType', $p['list'](['mousemove', 'mousedown', 'mouseup', 'wheel', 'mousewheel', 'DOMMouseScroll', 'keydown', 'keypress', 'keyup'])); 
				$pyjs['track']['lineno']=50;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('events', $p['set']($p['getattr'](self, 'eventType'))) : $p['setattr'](self, 'events', $p['set']($p['getattr'](self, 'eventType'))); 
				$pyjs['track']['lineno']=51;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventTypes', $p['dict']([[$p['getattr']($m['Const'], 'MOUSEMOTION'), $p['list'](['mousemove'])], [$p['getattr']($m['Const'], 'MOUSEBUTTONDOWN'), $p['list'](['mousedown', 'wheel', 'mousewheel', 'DOMMouseScroll'])], [$p['getattr']($m['Const'], 'MOUSEBUTTONUP'), $p['list'](['mouseup'])], [$p['getattr']($m['Const'], 'KEYDOWN'), $p['list'](['keydown', 'keypress'])], [$p['getattr']($m['Const'], 'KEYUP'), $p['list'](['keyup'])]])) : $p['setattr'](self, 'eventTypes', $p['dict']([[$p['getattr']($m['Const'], 'MOUSEMOTION'), $p['list'](['mousemove'])], [$p['getattr']($m['Const'], 'MOUSEBUTTONDOWN'), $p['list'](['mousedown', 'wheel', 'mousewheel', 'DOMMouseScroll'])], [$p['getattr']($m['Const'], 'MOUSEBUTTONUP'), $p['list'](['mouseup'])], [$p['getattr']($m['Const'], 'KEYDOWN'), $p['list'](['keydown', 'keypress'])], [$p['getattr']($m['Const'], 'KEYUP'), $p['list'](['keyup'])]])); 
				$pyjs['track']['lineno']=52;
				if ($p['bool']($p['getattr']($p['getattr']($m['env'], 'pyjs_mode'), 'optimized'))) {
					$pyjs['track']['lineno']=53;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modKey', $p['set']($p['list']([$p['getattr']($m['Const'], 'K_ALT'), $p['getattr']($m['Const'], 'K_CTRL'), $p['getattr']($m['Const'], 'K_SHIFT')]))) : $p['setattr'](self, 'modKey', $p['set']($p['list']([$p['getattr']($m['Const'], 'K_ALT'), $p['getattr']($m['Const'], 'K_CTRL'), $p['getattr']($m['Const'], 'K_SHIFT')]))); 
					$pyjs['track']['lineno']=54;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('specialKey', $p['set']($p['list']([$p['getattr']($m['Const'], 'K_UP'), $p['getattr']($m['Const'], 'K_DOWN'), $p['getattr']($m['Const'], 'K_LEFT'), $p['getattr']($m['Const'], 'K_RIGHT'), $p['getattr']($m['Const'], 'K_HOME'), $p['getattr']($m['Const'], 'K_END'), $p['getattr']($m['Const'], 'K_PAGEDOWN'), $p['getattr']($m['Const'], 'K_PAGEUP'), $p['getattr']($m['Const'], 'K_BACKSPACE'), $p['getattr']($m['Const'], 'K_DELETE'), $p['getattr']($m['Const'], 'K_INSERT'), $p['getattr']($m['Const'], 'K_RETURN'), $p['getattr']($m['Const'], 'K_TAB'), $p['getattr']($m['Const'], 'K_ESCAPE')]))) : $p['setattr'](self, 'specialKey', $p['set']($p['list']([$p['getattr']($m['Const'], 'K_UP'), $p['getattr']($m['Const'], 'K_DOWN'), $p['getattr']($m['Const'], 'K_LEFT'), $p['getattr']($m['Const'], 'K_RIGHT'), $p['getattr']($m['Const'], 'K_HOME'), $p['getattr']($m['Const'], 'K_END'), $p['getattr']($m['Const'], 'K_PAGEDOWN'), $p['getattr']($m['Const'], 'K_PAGEUP'), $p['getattr']($m['Const'], 'K_BACKSPACE'), $p['getattr']($m['Const'], 'K_DELETE'), $p['getattr']($m['Const'], 'K_INSERT'), $p['getattr']($m['Const'], 'K_RETURN'), $p['getattr']($m['Const'], 'K_TAB'), $p['getattr']($m['Const'], 'K_ESCAPE')]))); 
				}
				else {
					$pyjs['track']['lineno']=56;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modKey', $p['set'](function(){
						var $iter3_idx,$iter3_nextval,$iter3_type,$collcomp3,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,keycode;
	$collcomp3 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter3_iter = $p['tuple']([$p['getattr']($m['Const'], 'K_ALT'), $p['getattr']($m['Const'], 'K_CTRL'), $p['getattr']($m['Const'], 'K_SHIFT')]);
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						keycode = $iter3_nextval['$nextval'];
						$collcomp3['append'](keycode['valueOf']());
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp3;}())) : $p['setattr'](self, 'modKey', $p['set'](function(){
						var $iter3_idx,$iter3_nextval,$iter3_type,$collcomp3,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,keycode;
	$collcomp3 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter3_iter = $p['tuple']([$p['getattr']($m['Const'], 'K_ALT'), $p['getattr']($m['Const'], 'K_CTRL'), $p['getattr']($m['Const'], 'K_SHIFT')]);
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						keycode = $iter3_nextval['$nextval'];
						$collcomp3['append'](keycode['valueOf']());
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp3;}())); 
					$pyjs['track']['lineno']=57;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('specialKey', $p['set'](function(){
						var $iter4_nextval,$collcomp4,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter,keycode;
	$collcomp4 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter4_iter = $p['tuple']([$p['getattr']($m['Const'], 'K_UP'), $p['getattr']($m['Const'], 'K_DOWN'), $p['getattr']($m['Const'], 'K_LEFT'), $p['getattr']($m['Const'], 'K_RIGHT'), $p['getattr']($m['Const'], 'K_HOME'), $p['getattr']($m['Const'], 'K_END'), $p['getattr']($m['Const'], 'K_PAGEDOWN'), $p['getattr']($m['Const'], 'K_PAGEUP'), $p['getattr']($m['Const'], 'K_BACKSPACE'), $p['getattr']($m['Const'], 'K_DELETE'), $p['getattr']($m['Const'], 'K_INSERT'), $p['getattr']($m['Const'], 'K_RETURN'), $p['getattr']($m['Const'], 'K_TAB'), $p['getattr']($m['Const'], 'K_ESCAPE')]);
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						keycode = $iter4_nextval['$nextval'];
						$collcomp4['append'](keycode['valueOf']());
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp4;}())) : $p['setattr'](self, 'specialKey', $p['set'](function(){
						var $iter4_nextval,$collcomp4,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter,keycode;
	$collcomp4 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter4_iter = $p['tuple']([$p['getattr']($m['Const'], 'K_UP'), $p['getattr']($m['Const'], 'K_DOWN'), $p['getattr']($m['Const'], 'K_LEFT'), $p['getattr']($m['Const'], 'K_RIGHT'), $p['getattr']($m['Const'], 'K_HOME'), $p['getattr']($m['Const'], 'K_END'), $p['getattr']($m['Const'], 'K_PAGEDOWN'), $p['getattr']($m['Const'], 'K_PAGEUP'), $p['getattr']($m['Const'], 'K_BACKSPACE'), $p['getattr']($m['Const'], 'K_DELETE'), $p['getattr']($m['Const'], 'K_INSERT'), $p['getattr']($m['Const'], 'K_RETURN'), $p['getattr']($m['Const'], 'K_TAB'), $p['getattr']($m['Const'], 'K_ESCAPE')]);
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						keycode = $iter4_nextval['$nextval'];
						$collcomp4['append'](keycode['valueOf']());
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp4;}())); 
				}
				$pyjs['track']['lineno']=59;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('touchlistener', null) : $p['setattr'](self, 'touchlistener', null); 
				$pyjs['track']['lineno']=60;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('Event', (typeof UserEvent == "undefined"?$m['UserEvent']:UserEvent)) : $p['setattr'](self, 'Event', (typeof UserEvent == "undefined"?$m['UserEvent']:UserEvent)); 
				$pyjs['track']['lineno']=61;
				self['_nonimplemented_methods']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=63;
			$method = $pyjs__bind_method2('_lock', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':63};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=63;
				$pyjs['track']['lineno']=64;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueLock', true) : $p['setattr'](self, 'queueLock', true); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_lock'] = $method;
			$pyjs['track']['lineno']=66;
			$method = $pyjs__bind_method2('_unlock', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':66};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=66;
				$pyjs['track']['lineno']=67;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueLock', false) : $p['setattr'](self, 'queueLock', false); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_unlock'] = $method;
			$pyjs['track']['lineno']=69;
			$method = $pyjs__bind_method2('_updateQueue', function(event) {
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
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':69};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=69;
				$pyjs['track']['lineno']=70;
				if ($p['bool'](!$p['getattr'](self, 'events')['__contains__']($p['getattr'](event, 'type')))) {
					$pyjs['track']['lineno']=71;
					$pyjs['track']['lineno']=71;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=72;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueAccess', true) : $p['setattr'](self, 'queueAccess', true); 
				$pyjs['track']['lineno']=73;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'queueLock')))) {
					$pyjs['track']['lineno']=74;
					if ($p['bool']($p['getattr'](self, 'eventNumTmp'))) {
						$pyjs['track']['lineno']=75;
						self['_appendMerge']();
					}
					$pyjs['track']['lineno']=76;
					self['_append'](event);
				}
				else {
					$pyjs['track']['lineno']=78;
					self['_appendTmp'](event);
				}
				$pyjs['track']['lineno']=79;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueAccess', false) : $p['setattr'](self, 'queueAccess', false); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_updateQueue'] = $method;
			$pyjs['track']['lineno']=81;
			$method = $pyjs__bind_method2('_append', function(event) {
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
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':81};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=81;
				$pyjs['track']['lineno']=82;
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_255) == -1))) {
					$pyjs['track']['lineno']=83;
					$p['getattr'](self, 'eventQueue')['__setitem__']($p['getattr'](self, 'eventNum'), event);
					$pyjs['track']['lineno']=84;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $p['__op_add']($add1=$p['getattr'](self, 'eventNum'),$add2=$constant_int_1)) : $p['setattr'](self, 'eventNum', $p['__op_add']($add1=$p['getattr'](self, 'eventNum'),$add2=$constant_int_1)); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_append'] = $method;
			$pyjs['track']['lineno']=86;
			$method = $pyjs__bind_method2('_appendTmp', function(event) {
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
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add3,$add4;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':86};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=86;
				$pyjs['track']['lineno']=87;
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNumTmp'), $constant_int_255) == -1))) {
					$pyjs['track']['lineno']=88;
					$p['getattr'](self, 'eventQueueTmp')['__setitem__']($p['getattr'](self, 'eventNumTmp'), event);
					$pyjs['track']['lineno']=89;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNumTmp', $p['__op_add']($add3=$p['getattr'](self, 'eventNumTmp'),$add4=$constant_int_1)) : $p['setattr'](self, 'eventNumTmp', $p['__op_add']($add3=$p['getattr'](self, 'eventNumTmp'),$add4=$constant_int_1)); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_appendTmp'] = $method;
			$pyjs['track']['lineno']=91;
			$method = $pyjs__bind_method2('_appendMerge', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,i,$iter5_idx,$pyjs__trackstack_size_1,$iter5_iter,$iter5_array,$iter5_type;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':91};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=91;
				$pyjs['track']['lineno']=92;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = $p['range']($p['getattr'](self, 'eventNumTmp'));
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					i = $iter5_nextval['$nextval'];
					$pyjs['track']['lineno']=93;
					self['_append']($p['getattr'](self, 'eventQueueTmp')['__getitem__'](i));
					$pyjs['track']['lineno']=94;
					$p['getattr'](self, 'eventQueueTmp')['__setitem__'](i, null);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=95;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNumTmp', $constant_int_0) : $p['setattr'](self, 'eventNumTmp', $constant_int_0); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_appendMerge'] = $method;
			$pyjs['track']['lineno']=97;
			$method = $pyjs__bind_method2('pump', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':97};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=97;
				$pyjs['track']['lineno']=101;
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_250) == 1))) {
					$pyjs['track']['lineno']=102;
					self['_lock']();
					$pyjs['track']['lineno']=103;
					self['_pump']();
					$pyjs['track']['lineno']=104;
					self['_unlock']();
				}
				$pyjs['track']['lineno']=105;
				$pyjs['track']['lineno']=105;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['pump'] = $method;
			$pyjs['track']['lineno']=107;
			$method = $pyjs__bind_method2('_pump', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter6_idx,$iter6_type,queue,i,$iter6_array,$pyjs__trackstack_size_1,$sub2,$sub1,$iter6_iter,$iter6_nextval;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':107};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=107;
				$pyjs['track']['lineno']=108;
				queue = $p['__getslice']($p['getattr'](self, 'eventQueue'), $constant_int_50, $p['getattr'](self, 'eventNum'));
				$pyjs['track']['lineno']=109;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $p['__op_sub']($sub1=$p['getattr'](self, 'eventNum'),$sub2=$constant_int_50)) : $p['setattr'](self, 'eventNum', $p['__op_sub']($sub1=$p['getattr'](self, 'eventNum'),$sub2=$constant_int_50)); 
				$pyjs['track']['lineno']=110;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter6_iter = $p['range']($p['getattr'](self, 'eventNum'));
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					i = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=111;
					$p['getattr'](self, 'eventQueue')['__setitem__'](i, queue['__getitem__'](i));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_pump'] = $method;
			$pyjs['track']['lineno']=113;
			$method = $pyjs__bind_method2('get', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof eventType == 'undefined') eventType=arguments['callee']['__args__'][3][1];
				var evtType,$iter12_iter,$iter12_idx,i,$iter11_type,$iter12_array,$iter11_array,queue,$iter11_iter,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1,$iter12_nextval,$iter12_type;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':113};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=113;
				$pyjs['track']['lineno']=118;
				self['_lock']();
				$pyjs['track']['lineno']=119;
				if ($p['bool'](!$p['bool'](eventType))) {
					$pyjs['track']['lineno']=120;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queue', function(){
						var $iter7_nextval,$iter7_iter,$collcomp5,$iter7_array,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1,event;
	$collcomp5 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter7_iter = $p['__getslice']($p['getattr'](self, 'eventQueue'), $constant_int_0, $p['getattr'](self, 'eventNum'));
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						event = $iter7_nextval['$nextval'];
						$collcomp5['append']((typeof JEvent == "undefined"?$m['JEvent']:JEvent)(event));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp5;}()) : $p['setattr'](self, 'queue', function(){
						var $iter7_nextval,$iter7_iter,$collcomp5,$iter7_array,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1,event;
	$collcomp5 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter7_iter = $p['__getslice']($p['getattr'](self, 'eventQueue'), $constant_int_0, $p['getattr'](self, 'eventNum'));
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						event = $iter7_nextval['$nextval'];
						$collcomp5['append']((typeof JEvent == "undefined"?$m['JEvent']:JEvent)(event));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp5;}()); 
					$pyjs['track']['lineno']=121;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $constant_int_0) : $p['setattr'](self, 'eventNum', $constant_int_0); 
				}
				else {
					$pyjs['track']['lineno']=123;
					if ($p['bool'](!$p['bool']($p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))))) {
						$pyjs['track']['lineno']=124;
						evtType = function(){
							var $iter8_idx,$collcomp6,$iter8_type,$iter8_array,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1,et;
	$collcomp6 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter8_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
						$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
						while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
							et = $iter8_nextval['$nextval'];
							$collcomp6['append'](et);
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp6;}();
					}
					else {
						$pyjs['track']['lineno']=126;
						evtType = function(){
							var $iter10_nextval,$iter9_iter,$collcomp7,$iter10_idx,$iter9_nextval,$iter9_idx,$iter10_array,$iter9_type,$pyjs__trackstack_size_2,t,$pyjs__trackstack_size_1,$iter10_type,et,$iter10_iter,$iter9_array;
	$collcomp7 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter9_iter = eventType;
						$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
						while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
							t = $iter9_nextval['$nextval'];
							$pyjs['track']['lineno']=126;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter10_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](t);
							$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
							while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
								et = $iter10_nextval['$nextval'];
								$collcomp7['append'](et);
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.event';
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp7;}();
					}
					$pyjs['track']['lineno']=127;
					queue = $p['list']([]);
					$pyjs['track']['lineno']=128;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queue', $p['list']([])) : $p['setattr'](self, 'queue', $p['list']([])); 
					$pyjs['track']['lineno']=129;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter11_iter = $p['range']($p['getattr'](self, 'eventNum'));
					$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
					while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
						i = $iter11_nextval['$nextval'];
						$pyjs['track']['lineno']=130;
						if ($p['bool'](!evtType['__contains__']($p['getattr']($p['getattr'](self, 'eventQueue')['__getitem__'](i), 'type')))) {
							$pyjs['track']['lineno']=131;
							queue['append']($p['getattr'](self, 'eventQueue')['__getitem__'](i));
						}
						else {
							$pyjs['track']['lineno']=133;
							self['queue']['append']((typeof JEvent == "undefined"?$m['JEvent']:JEvent)($p['getattr'](self, 'eventQueue')['__getitem__'](i)));
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';
					$pyjs['track']['lineno']=134;
					if ($p['bool'](!$p['op_eq']($p['len'](queue), $p['getattr'](self, 'eventNum')))) {
						$pyjs['track']['lineno']=135;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $p['len'](queue)) : $p['setattr'](self, 'eventNum', $p['len'](queue)); 
						$pyjs['track']['lineno']=136;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter12_iter = $p['range']($p['getattr'](self, 'eventNum'));
						$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
						while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
							i = $iter12_nextval['$nextval'];
							$pyjs['track']['lineno']=137;
							$p['getattr'](self, 'eventQueue')['__setitem__'](i, queue['__getitem__'](i));
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';
					}
					$pyjs['track']['lineno']=138;
					if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_250) == 1))) {
						$pyjs['track']['lineno']=139;
						self['_pump']();
					}
				}
				$pyjs['track']['lineno']=140;
				self['_unlock']();
				$pyjs['track']['lineno']=141;
				$pyjs['track']['lineno']=141;
				var $pyjs__ret = $p['getattr'](self, 'queue');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['eventType', null]]);
			$cls_definition['get'] = $method;
			$pyjs['track']['lineno']=143;
			$method = $pyjs__bind_method2('poll', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub3,evt,$sub4;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':143};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=143;
				$pyjs['track']['lineno']=147;
				self['_lock']();
				$pyjs['track']['lineno']=148;
				if ($p['bool']($p['getattr'](self, 'eventNum'))) {
					$pyjs['track']['lineno']=149;
					evt = (typeof JEvent == "undefined"?$m['JEvent']:JEvent)(self['eventQueue']['pop']($constant_int_0));
					$pyjs['track']['lineno']=150;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $p['__op_sub']($sub3=$p['getattr'](self, 'eventNum'),$sub4=$constant_int_1)) : $p['setattr'](self, 'eventNum', $p['__op_sub']($sub3=$p['getattr'](self, 'eventNum'),$sub4=$constant_int_1)); 
					$pyjs['track']['lineno']=151;
					self['eventQueue']['append'](null);
					$pyjs['track']['lineno']=152;
					if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_250) == 1))) {
						$pyjs['track']['lineno']=153;
						self['_pump']();
					}
				}
				else {
					$pyjs['track']['lineno']=155;
					evt = self['Event']($p['getattr']($m['Const'], 'NOEVENT'));
				}
				$pyjs['track']['lineno']=156;
				self['_unlock']();
				$pyjs['track']['lineno']=157;
				$pyjs['track']['lineno']=157;
				var $pyjs__ret = evt;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['poll'] = $method;
			$pyjs['track']['lineno']=159;
			$method = $pyjs__bind_method2('wait', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var evt,$sub6,$sub5;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':159};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=159;
				$pyjs['track']['lineno']=163;
				while ($p['bool'](true)) {
					$pyjs['track']['lineno']=164;
					if ($p['bool']($p['getattr'](self, 'eventNum'))) {
						$pyjs['track']['lineno']=165;
						self['_lock']();
						$pyjs['track']['lineno']=166;
						evt = (typeof JEvent == "undefined"?$m['JEvent']:JEvent)(self['eventQueue']['pop']($constant_int_0));
						$pyjs['track']['lineno']=167;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $p['__op_sub']($sub5=$p['getattr'](self, 'eventNum'),$sub6=$constant_int_1)) : $p['setattr'](self, 'eventNum', $p['__op_sub']($sub5=$p['getattr'](self, 'eventNum'),$sub6=$constant_int_1)); 
						$pyjs['track']['lineno']=168;
						self['eventQueue']['append'](null);
						$pyjs['track']['lineno']=169;
						if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_250) == 1))) {
							$pyjs['track']['lineno']=170;
							self['_pump']();
						}
						$pyjs['track']['lineno']=171;
						self['_unlock']();
						$pyjs['track']['lineno']=172;
						$pyjs['track']['lineno']=172;
						var $pyjs__ret = evt;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=174;
						self['_unlock']();
						$pyjs['track']['lineno']=175;
						$pyjs['track']['lineno']=175;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['wait'] = $method;
			$pyjs['track']['lineno']=177;
			$method = $pyjs__bind_method2('peek', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var evtType,$iter17_nextval,$iter17_iter,et,$pyjs__trackstack_size_1,$iter17_array,$iter17_idx,$iter17_type,evt;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':177};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=177;
				$pyjs['track']['lineno']=182;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'eventNum')))) {
					$pyjs['track']['lineno']=183;
					$pyjs['track']['lineno']=183;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=184;
				if ($p['bool'](!$p['bool']($p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))))) {
					$pyjs['track']['lineno']=185;
					evtType = function(){
						var $iter13_nextval,$iter13_iter,$collcomp8,$iter13_type,$iter13_idx,$pyjs__trackstack_size_1,et,$iter13_array;
	$collcomp8 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter13_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
					$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
					while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
						et = $iter13_nextval['$nextval'];
						$collcomp8['append'](et);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp8;}();
				}
				else {
					$pyjs['track']['lineno']=187;
					evtType = function(){
						var $iter14_array,$iter15_array,$iter14_type,$iter15_iter,$collcomp9,et,$iter15_type,$iter15_idx,$pyjs__trackstack_size_2,t,$iter14_iter,$pyjs__trackstack_size_1,$iter15_nextval,$iter14_idx,$iter14_nextval;
	$collcomp9 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter14_iter = eventType;
					$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
					while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
						t = $iter14_nextval['$nextval'];
						$pyjs['track']['lineno']=187;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter15_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](t);
						$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
						while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
							et = $iter15_nextval['$nextval'];
							$collcomp9['append'](et);
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp9;}();
				}
				$pyjs['track']['lineno']=188;
				self['_lock']();
				$pyjs['track']['lineno']=189;
				evt = function(){
					var $iter16_array,$iter16_type,$pyjs__trackstack_size_1,$iter16_idx,$collcomp10,$iter16_nextval,$iter16_iter,event;
	$collcomp10 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter16_iter = $p['__getslice']($p['getattr'](self, 'eventQueue'), $constant_int_0, $p['getattr'](self, 'eventNum'));
				$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
				while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
					event = $iter16_nextval['$nextval'];
					$collcomp10['append']($p['getattr'](event, 'type'));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';

	return $collcomp10;}();
				$pyjs['track']['lineno']=190;
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_250) == 1))) {
					$pyjs['track']['lineno']=191;
					self['_pump']();
				}
				$pyjs['track']['lineno']=192;
				self['_unlock']();
				$pyjs['track']['lineno']=193;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter17_iter = evtType;
				$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
				while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
					et = $iter17_nextval['$nextval'];
					$pyjs['track']['lineno']=194;
					if ($p['bool'](evt['__contains__'](et))) {
						$pyjs['track']['lineno']=195;
						$pyjs['track']['lineno']=195;
						var $pyjs__ret = true;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=196;
				$pyjs['track']['lineno']=196;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['eventType']]);
			$cls_definition['peek'] = $method;
			$pyjs['track']['lineno']=198;
			$method = $pyjs__bind_method2('clear', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof eventType == 'undefined') eventType=arguments['callee']['__args__'][3][1];
				var evtType,$iter21_type,$iter21_idx,$iter22_array,i,$iter21_nextval,$iter22_nextval,$iter22_idx,queue,$iter21_iter,$iter22_type,$iter21_array,$pyjs__trackstack_size_1,$iter22_iter;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':198};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=198;
				$pyjs['track']['lineno']=203;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'eventNum')))) {
					$pyjs['track']['lineno']=204;
					$pyjs['track']['lineno']=204;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=205;
				self['_lock']();
				$pyjs['track']['lineno']=206;
				if ($p['bool']($p['op_is'](eventType, null))) {
					$pyjs['track']['lineno']=207;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $constant_int_0) : $p['setattr'](self, 'eventNum', $constant_int_0); 
				}
				else {
					$pyjs['track']['lineno']=209;
					if ($p['bool'](!$p['bool']($p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))))) {
						$pyjs['track']['lineno']=210;
						evtType = function(){
							var $iter18_type,$iter18_iter,$iter18_array,$iter18_idx,$collcomp11,$pyjs__trackstack_size_1,et,$iter18_nextval;
	$collcomp11 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter18_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
						$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
						while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
							et = $iter18_nextval['$nextval'];
							$collcomp11['append'](et);
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp11;}();
					}
					else {
						$pyjs['track']['lineno']=212;
						evtType = function(){
							var $iter20_iter,$iter20_nextval,$iter19_idx,$iter20_type,$iter20_idx,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,$pyjs__trackstack_size_2,$collcomp12,$pyjs__trackstack_size_1,et,$iter20_array,t;
	$collcomp12 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter19_iter = eventType;
						$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
						while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
							t = $iter19_nextval['$nextval'];
							$pyjs['track']['lineno']=212;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter20_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](t);
							$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
							while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
								et = $iter20_nextval['$nextval'];
								$collcomp12['append'](et);
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.event';
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp12;}();
					}
					$pyjs['track']['lineno']=213;
					queue = $p['list']([]);
					$pyjs['track']['lineno']=214;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter21_iter = $p['range']($p['getattr'](self, 'eventNum'));
					$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
					while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
						i = $iter21_nextval['$nextval'];
						$pyjs['track']['lineno']=215;
						if ($p['bool'](!evtType['__contains__']($p['getattr']($p['getattr'](self, 'eventQueue')['__getitem__'](i), 'type')))) {
							$pyjs['track']['lineno']=216;
							queue['append']($p['getattr'](self, 'eventQueue')['__getitem__'](i));
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';
					$pyjs['track']['lineno']=217;
					if ($p['bool'](!$p['op_eq']($p['len'](queue), $p['getattr'](self, 'eventNum')))) {
						$pyjs['track']['lineno']=218;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $p['len'](queue)) : $p['setattr'](self, 'eventNum', $p['len'](queue)); 
						$pyjs['track']['lineno']=219;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter22_iter = $p['range']($p['getattr'](self, 'eventNum'));
						$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
						while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
							i = $iter22_nextval['$nextval'];
							$pyjs['track']['lineno']=220;
							$p['getattr'](self, 'eventQueue')['__setitem__'](i, queue['__getitem__'](i));
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';
					}
					$pyjs['track']['lineno']=221;
					if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_250) == 1))) {
						$pyjs['track']['lineno']=222;
						self['_pump']();
					}
				}
				$pyjs['track']['lineno']=223;
				self['_unlock']();
				$pyjs['track']['lineno']=224;
				$pyjs['track']['lineno']=224;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['eventType', null]]);
			$cls_definition['clear'] = $method;
			$pyjs['track']['lineno']=226;
			$method = $pyjs__bind_method2('event_name', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var evtType;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':226};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=226;
				$pyjs['track']['lineno']=230;
				evtType = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType)['__getitem__']($constant_int_0);
				$pyjs['track']['lineno']=231;
				if ($p['bool']($p['getattr'](self, 'eventName')['__contains__'](evtType))) {
					$pyjs['track']['lineno']=232;
					$pyjs['track']['lineno']=232;
					var $pyjs__ret = $p['getattr'](self, 'eventName')['__getitem__'](evtType);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=234;
					$pyjs['track']['lineno']=234;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['eventType']]);
			$cls_definition['event_name'] = $method;
			$pyjs['track']['lineno']=236;
			$method = $pyjs__bind_method2('set_blocked', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var evtType,$iter27_nextval,$iter26_idx,$iter26_nextval,$pyjs__trackstack_size_1,$iter26_type,$iter27_array,$iter27_iter,$iter27_idx,et,$iter26_array,$iter26_iter,event,$iter27_type;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':236};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=236;
				$pyjs['track']['lineno']=240;
				if ($p['bool'](!$p['op_is'](eventType, null))) {
					$pyjs['track']['lineno']=241;
					if ($p['bool'](!$p['bool']($p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))))) {
						$pyjs['track']['lineno']=242;
						evtType = function(){
							var $iter23_type,$iter23_nextval,$iter23_iter,$iter23_idx,$pyjs__trackstack_size_1,$iter23_array,et,$collcomp13;
	$collcomp13 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter23_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
						$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
						while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
							et = $iter23_nextval['$nextval'];
							$collcomp13['append'](et);
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp13;}();
					}
					else {
						$pyjs['track']['lineno']=244;
						evtType = function(){
							var $collcomp14,$iter24_idx,$iter25_array,$iter25_nextval,$iter25_iter,$iter24_type,$iter24_array,$pyjs__trackstack_size_2,t,$iter25_idx,$pyjs__trackstack_size_1,et,$iter25_type,$iter24_iter,$iter24_nextval;
	$collcomp14 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter24_iter = eventType;
						$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
						while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
							t = $iter24_nextval['$nextval'];
							$pyjs['track']['lineno']=244;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter25_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](t);
							$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
							while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
								et = $iter25_nextval['$nextval'];
								$collcomp14['append'](et);
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.event';
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp14;}();
					}
					$pyjs['track']['lineno']=245;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter26_iter = evtType;
					$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
					while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
						et = $iter26_nextval['$nextval'];
						$pyjs['track']['lineno']=246;
						if ($p['bool']($p['getattr'](self, 'events')['__contains__'](et))) {
							$pyjs['track']['lineno']=247;
							self['events']['remove'](et);
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';
				}
				else {
					$pyjs['track']['lineno']=249;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter27_iter = $p['getattr'](self, 'eventType');
					$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
					while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
						event = $iter27_nextval['$nextval'];
						$pyjs['track']['lineno']=250;
						self['events']['add'](event);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';
				}
				$pyjs['track']['lineno']=251;
				$pyjs['track']['lineno']=251;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['eventType']]);
			$cls_definition['set_blocked'] = $method;
			$pyjs['track']['lineno']=253;
			$method = $pyjs__bind_method2('set_allowed', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var evtType,$iter31_array,$iter31_nextval,$iter31_idx,$iter31_type,$pyjs__trackstack_size_1,et,$iter31_iter;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':253};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=253;
				$pyjs['track']['lineno']=257;
				if ($p['bool'](!$p['op_is'](eventType, null))) {
					$pyjs['track']['lineno']=258;
					if ($p['bool'](!$p['bool']($p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))))) {
						$pyjs['track']['lineno']=259;
						evtType = function(){
							var $iter28_array,$iter28_nextval,$iter28_idx,$collcomp15,et,$iter28_iter,$iter28_type,$pyjs__trackstack_size_1;
	$collcomp15 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter28_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
						$iter28_nextval=$p['__iter_prepare']($iter28_iter,false);
						while (typeof($p['__wrapped_next']($iter28_nextval)['$nextval']) != 'undefined') {
							et = $iter28_nextval['$nextval'];
							$collcomp15['append'](et);
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp15;}();
					}
					else {
						$pyjs['track']['lineno']=261;
						evtType = function(){
							var $iter30_type,$iter30_nextval,et,$iter29_type,$iter29_iter,$collcomp16,$iter29_nextval,$iter30_array,t,$pyjs__trackstack_size_1,$iter30_idx,$iter29_idx,$pyjs__trackstack_size_2,$iter30_iter,$iter29_array;
	$collcomp16 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter29_iter = eventType;
						$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
						while (typeof($p['__wrapped_next']($iter29_nextval)['$nextval']) != 'undefined') {
							t = $iter29_nextval['$nextval'];
							$pyjs['track']['lineno']=261;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter30_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](t);
							$iter30_nextval=$p['__iter_prepare']($iter30_iter,false);
							while (typeof($p['__wrapped_next']($iter30_nextval)['$nextval']) != 'undefined') {
								et = $iter30_nextval['$nextval'];
								$collcomp16['append'](et);
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.event';
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp16;}();
					}
					$pyjs['track']['lineno']=262;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter31_iter = evtType;
					$iter31_nextval=$p['__iter_prepare']($iter31_iter,false);
					while (typeof($p['__wrapped_next']($iter31_nextval)['$nextval']) != 'undefined') {
						et = $iter31_nextval['$nextval'];
						$pyjs['track']['lineno']=263;
						self['events']['add'](et);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';
				}
				else {
					$pyjs['track']['lineno']=265;
					self['events']['clear']();
				}
				$pyjs['track']['lineno']=266;
				$pyjs['track']['lineno']=266;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['eventType']]);
			$cls_definition['set_allowed'] = $method;
			$pyjs['track']['lineno']=268;
			$method = $pyjs__bind_method2('get_blocked', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var evtType;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':268};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=268;
				$pyjs['track']['lineno']=272;
				evtType = function(){
					var $iter32_type,$iter32_idx,$iter32_nextval,$collcomp17,$iter32_iter,$iter32_array,$pyjs__trackstack_size_1,et;
	$collcomp17 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter32_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
				$iter32_nextval=$p['__iter_prepare']($iter32_iter,false);
				while (typeof($p['__wrapped_next']($iter32_nextval)['$nextval']) != 'undefined') {
					et = $iter32_nextval['$nextval'];
					$collcomp17['append'](et);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';

	return $collcomp17;}()['__getitem__']($constant_int_0);
				$pyjs['track']['lineno']=273;
				if ($p['bool'](!$p['getattr'](self, 'events')['__contains__'](evtType))) {
					$pyjs['track']['lineno']=274;
					$pyjs['track']['lineno']=274;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=276;
					$pyjs['track']['lineno']=276;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['eventType']]);
			$cls_definition['get_blocked'] = $method;
			$pyjs['track']['lineno']=278;
			$method = $pyjs__bind_method2('post', function(event) {
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
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':278};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=278;
				$pyjs['track']['lineno']=282;
				self['_lock']();
				$pyjs['track']['lineno']=283;
				self['_append'](event);
				$pyjs['track']['lineno']=284;
				if ($p['bool'](!$p['getattr'](self, 'events')['__contains__']($p['getattr'](event, 'type')))) {
					$pyjs['track']['lineno']=285;
					$p['getattr'](self, 'eventTypes')['__setitem__']($p['getattr'](event, 'type'), $p['list']([$p['getattr'](event, 'type')]));
				}
				$pyjs['track']['lineno']=286;
				self['_unlock']();
				$pyjs['track']['lineno']=287;
				$pyjs['track']['lineno']=287;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['post'] = $method;
			$pyjs['track']['lineno']=289;
			$method = $pyjs__bind_method2('_initiate_touch_listener', function(canvas) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					canvas = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':289};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=289;
				$pyjs['track']['lineno']=290;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('touchlistener', (typeof TouchListener == "undefined"?$m['TouchListener']:TouchListener)(canvas)) : $p['setattr'](self, 'touchlistener', (typeof TouchListener == "undefined"?$m['TouchListener']:TouchListener)(canvas)); 
				$pyjs['track']['lineno']=291;
				$pyjs['track']['lineno']=291;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['canvas']]);
			$cls_definition['_initiate_touch_listener'] = $method;
			$pyjs['track']['lineno']=293;
			$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c70d62a5d5a00e5945d88c1ddd20814b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda2,$lambda1;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':293};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=293;
				$pyjs['track']['lineno']=297;
				var 				$lambda1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.event','lineno':297};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.event';
					$pyjs['track']['lineno']=297;
					$pyjs['track']['lineno']=297;
					$pyjs['track']['lineno']=297;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set_grab', $lambda1) : $p['setattr'](self, 'set_grab', $lambda1); 
				$pyjs['track']['lineno']=298;
				var 				$lambda2 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.event','lineno':298};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.event';
					$pyjs['track']['lineno']=298;
					$pyjs['track']['lineno']=298;
					$pyjs['track']['lineno']=298;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_grab', $lambda2) : $p['setattr'](self, 'get_grab', $lambda2); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_nonimplemented_methods'] = $method;
			$pyjs['track']['lineno']=10;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Event', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=301;
		$m['UserEvent'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.event';
			$cls_definition['__md5__'] = '050a60d2601ef7f62267ea03516cc3ca';
			$pyjs['track']['lineno']=303;
			$cls_definition['__slots__'] = $p['list'](['type', 'attr']);
			$pyjs['track']['lineno']=305;
			$method = $pyjs__bind_method2('__init__', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '050a60d2601ef7f62267ea03516cc3ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof eventType != 'undefined') {
						if (eventType !== null && typeof eventType['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = eventType;
							eventType = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var attr;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':305};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=305;
				$pyjs['track']['lineno']=311;
				if ($p['bool'](args)) {
					$pyjs['track']['lineno']=312;
					attr = args['__getitem__']($constant_int_0);
				}
				else {
					$pyjs['track']['lineno']=314;
					attr = kwargs;
				}
				$pyjs['track']['lineno']=315;
				$p['object']['__setattr__'](self, 'type', eventType);
				$pyjs['track']['lineno']=316;
				$p['object']['__setattr__'](self, 'attr', attr);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['eventType']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=318;
			$method = $pyjs__bind_method2('__repr__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '050a60d2601ef7f62267ea03516cc3ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':318};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=318;
				$pyjs['track']['lineno']=322;
				$pyjs['track']['lineno']=322;
				var $pyjs__ret = $p['sprintf']('%s(%s-UserEvent %r)', $p['tuple']([$p['getattr'](self, '__class__'), $p['getattr'](self, 'type'), $p['getattr'](self, 'attr')]));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=324;
			$method = $pyjs__bind_method2('__getattr__', function(attr) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					attr = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '050a60d2601ef7f62267ea03516cc3ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':324};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=324;
				$pyjs['track']['lineno']=325;
				if ($p['bool']($p['getattr'](self, 'attr')['__contains__'](attr))) {
					$pyjs['track']['lineno']=326;
					$pyjs['track']['lineno']=326;
					var $pyjs__ret = $p['getattr'](self, 'attr')['__getitem__'](attr);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=328;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['AttributeError']($p['sprintf']("'Event' object has no attribute '%s'", attr)));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['attr']]);
			$cls_definition['__getattr__'] = $method;
			$pyjs['track']['lineno']=330;
			$method = $pyjs__bind_method2('__setattr__', function(attr, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					attr = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '050a60d2601ef7f62267ea03516cc3ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':330};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=330;
				$pyjs['track']['lineno']=331;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['AttributeError']($p['sprintf']("'Event' object has no attribute '%s'", attr)));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['attr'],['value']]);
			$cls_definition['__setattr__'] = $method;
			$pyjs['track']['lineno']=301;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('UserEvent', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=334;
		$m['JEvent'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.event';
			$cls_definition['__md5__'] = '9ad7c23a7a74344a17198e43f0dced6c';
			$pyjs['track']['lineno']=336;
			$cls_definition['_mouse_pos'] = $p['tuple']([$constant_int_0, $constant_int_0]);
			$pyjs['track']['lineno']=337;
			$cls_definition['_types'] = $p['dict']([['mousemove', $p['getattr']($m['Const'], 'MOUSEMOTION')], ['mousedown', $p['getattr']($m['Const'], 'MOUSEBUTTONDOWN')], ['mouseup', $p['getattr']($m['Const'], 'MOUSEBUTTONUP')], ['wheel', $p['getattr']($m['Const'], 'MOUSEBUTTONDOWN')], ['mousewheel', $p['getattr']($m['Const'], 'MOUSEBUTTONDOWN')], ['DOMMouseScroll', $p['getattr']($m['Const'], 'MOUSEBUTTONDOWN')], ['keydown', $p['getattr']($m['Const'], 'KEYDOWN')], ['keypress', $p['getattr']($m['Const'], 'KEYDOWN')], ['keyup', $p['getattr']($m['Const'], 'KEYUP')]]);
			$pyjs['track']['lineno']=338;
			$cls_definition['_charCode'] = $p['dict']([[$constant_int_33, $p['getattr']($m['Const'], 'K_EXCLAIM')], [$constant_int_34, $p['getattr']($m['Const'], 'K_QUOTEDBL')], [$constant_int_35, $p['getattr']($m['Const'], 'K_HASH')], [$constant_int_36, $p['getattr']($m['Const'], 'K_DOLLAR')], [$constant_int_38, $p['getattr']($m['Const'], 'K_AMPERSAND')], [$constant_int_39, $p['getattr']($m['Const'], 'K_QUOTE')], [$constant_int_40, $p['getattr']($m['Const'], 'K_LEFTPAREN')], [$constant_int_41, $p['getattr']($m['Const'], 'K_RIGHTPAREN')], [$constant_int_42, $p['getattr']($m['Const'], 'K_ASTERISK')], [$constant_int_43, $p['getattr']($m['Const'], 'K_PLUS')], [$constant_int_44, $p['getattr']($m['Const'], 'K_COMMA')], [$constant_int_45, $p['getattr']($m['Const'], 'K_MINUS')], [$constant_int_46, $p['getattr']($m['Const'], 'K_PERIOD')], [$constant_int_97, $p['getattr']($m['Const'], 'K_a')], [$constant_int_98, $p['getattr']($m['Const'], 'K_b')], [$constant_int_99, $p['getattr']($m['Const'], 'K_c')], [$constant_int_100, $p['getattr']($m['Const'], 'K_d')], [$constant_int_101, $p['getattr']($m['Const'], 'K_e')], [$constant_int_102, $p['getattr']($m['Const'], 'K_f')], [$constant_int_103, $p['getattr']($m['Const'], 'K_g')], [$constant_int_104, $p['getattr']($m['Const'], 'K_h')], [$constant_int_105, $p['getattr']($m['Const'], 'K_i')], [$constant_int_106, $p['getattr']($m['Const'], 'K_j')], [$constant_int_107, $p['getattr']($m['Const'], 'K_k')], [$constant_int_108, $p['getattr']($m['Const'], 'K_l')], [$constant_int_109, $p['getattr']($m['Const'], 'K_m')], [$constant_int_110, $p['getattr']($m['Const'], 'K_n')], [$constant_int_111, $p['getattr']($m['Const'], 'K_o')], [$constant_int_112, $p['getattr']($m['Const'], 'K_p')], [$constant_int_113, $p['getattr']($m['Const'], 'K_q')], [$constant_int_114, $p['getattr']($m['Const'], 'K_r')], [$constant_int_115, $p['getattr']($m['Const'], 'K_s')], [$constant_int_116, $p['getattr']($m['Const'], 'K_t')], [$constant_int_117, $p['getattr']($m['Const'], 'K_u')], [$constant_int_118, $p['getattr']($m['Const'], 'K_v')], [$constant_int_119, $p['getattr']($m['Const'], 'K_w')], [$constant_int_120, $p['getattr']($m['Const'], 'K_x')], [$constant_int_121, $p['getattr']($m['Const'], 'K_y')], [$constant_int_122, $p['getattr']($m['Const'], 'K_z')]]);
			$pyjs['track']['lineno']=340;
			$method = $pyjs__bind_method2('__init__', function(event) {
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
					if (self.prototype['__md5__'] !== '9ad7c23a7a74344a17198e43f0dced6c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter33_iter,code,$pyjs__trackstack_size_1,$iter33_idx,$iter33_type,$add20,$sub9,$sub8,$sub7,$iter33_nextval,$sub10,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add18,$add19,$iter33_array,attr,$add6,$add7,$add5,$add8,$add9;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':340};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=340;
				$pyjs['track']['lineno']=352;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('event', event) : $p['setattr'](self, 'event', event); 
				$pyjs['track']['lineno']=353;
				if ($p['bool']($p['tuple'](['mousedown', 'mouseup'])['__contains__']($p['getattr'](event, 'type')))) {
					$pyjs['track']['lineno']=354;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))) : $p['setattr'](self, 'type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))); 
					$pyjs['track']['lineno']=355;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('button', $p['__op_add']($add5=$p['getattr'](event, 'button'),$add6=$constant_int_1)) : $p['setattr'](self, 'button', $p['__op_add']($add5=$p['getattr'](event, 'button'),$add6=$constant_int_1)); 
					$pyjs['track']['lineno']=356;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pos', $p['tuple']([$p['__op_add']($add7=$p['getattr'](event, 'pos')['__getitem__']($constant_int_0),$add8=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add9=$p['getattr'](event, 'pos')['__getitem__']($constant_int_1),$add10=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))])) : $p['setattr'](self, 'pos', $p['tuple']([$p['__op_add']($add7=$p['getattr'](event, 'pos')['__getitem__']($constant_int_0),$add8=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add9=$p['getattr'](event, 'pos')['__getitem__']($constant_int_1),$add10=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))])); 
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), 'mousemove'))) {
					$pyjs['track']['lineno']=358;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))) : $p['setattr'](self, 'type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))); 
					$pyjs['track']['lineno']=359;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('button', $p['__op_add']($add11=$p['getattr'](event, 'button'),$add12=$constant_int_1)) : $p['setattr'](self, 'button', $p['__op_add']($add11=$p['getattr'](event, 'button'),$add12=$constant_int_1)); 
					$pyjs['track']['lineno']=360;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pos', $p['tuple']([$p['__op_add']($add13=$p['getattr'](event, 'pos')['__getitem__']($constant_int_0),$add14=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add15=$p['getattr'](event, 'pos')['__getitem__']($constant_int_1),$add16=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))])) : $p['setattr'](self, 'pos', $p['tuple']([$p['__op_add']($add13=$p['getattr'](event, 'pos')['__getitem__']($constant_int_0),$add14=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add15=$p['getattr'](event, 'pos')['__getitem__']($constant_int_1),$add16=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))])); 
					$pyjs['track']['lineno']=361;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rel', $p['tuple']([$p['__op_sub']($sub7=$p['getattr'](self, 'pos')['__getitem__']($constant_int_0),$sub8=$p['getattr']($p['getattr'](self, '__class__'), '_mouse_pos')['__getitem__']($constant_int_0)), $p['__op_sub']($sub9=$p['getattr'](self, 'pos')['__getitem__']($constant_int_1),$sub10=$p['getattr']($p['getattr'](self, '__class__'), '_mouse_pos')['__getitem__']($constant_int_1))])) : $p['setattr'](self, 'rel', $p['tuple']([$p['__op_sub']($sub7=$p['getattr'](self, 'pos')['__getitem__']($constant_int_0),$sub8=$p['getattr']($p['getattr'](self, '__class__'), '_mouse_pos')['__getitem__']($constant_int_0)), $p['__op_sub']($sub9=$p['getattr'](self, 'pos')['__getitem__']($constant_int_1),$sub10=$p['getattr']($p['getattr'](self, '__class__'), '_mouse_pos')['__getitem__']($constant_int_1))])); 
					$pyjs['track']['lineno']=362;
					$p['getattr'](self, '__class__')['__is_instance__'] && typeof $p['getattr'](self, '__class__')['__setattr__'] == 'function' ? $p['getattr'](self, '__class__')['__setattr__']('_mouse_pos', $p['getattr'](self, 'pos')) : $p['setattr']($p['getattr'](self, '__class__'), '_mouse_pos', $p['getattr'](self, 'pos')); 
				}
				else if ($p['bool']($p['tuple'](['wheel', 'mousewheel', 'DOMMouseScroll'])['__contains__']($p['getattr'](event, 'type')))) {
					$pyjs['track']['lineno']=364;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))) : $p['setattr'](self, 'type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))); 
					$pyjs['track']['lineno']=365;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('button', $p['getattr'](event, 'btn')) : $p['setattr'](self, 'button', $p['getattr'](event, 'btn')); 
					$pyjs['track']['lineno']=366;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pos', $p['tuple']([$p['__op_add']($add17=$p['getattr'](event, 'pos')['__getitem__']($constant_int_0),$add18=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add19=$p['getattr'](event, 'pos')['__getitem__']($constant_int_1),$add20=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))])) : $p['setattr'](self, 'pos', $p['tuple']([$p['__op_add']($add17=$p['getattr'](event, 'pos')['__getitem__']($constant_int_0),$add18=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add19=$p['getattr'](event, 'pos')['__getitem__']($constant_int_1),$add20=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))])); 
				}
				else if ($p['bool']($p['tuple'](['keydown', 'keyup'])['__contains__']($p['getattr'](event, 'type')))) {
					$pyjs['track']['lineno']=368;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))) : $p['setattr'](self, 'type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))); 
					$pyjs['track']['lineno']=369;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key', $p['getattr'](event, 'keyCode')) : $p['setattr'](self, 'key', $p['getattr'](event, 'keyCode')); 
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), 'keypress'))) {
					$pyjs['track']['lineno']=371;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))) : $p['setattr'](self, 'type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))); 
					$pyjs['track']['lineno']=372;
					if ($p['bool']($p['getattr'](event, 'keyCode'))) {
						$pyjs['track']['lineno']=373;
						code = $p['getattr'](event, 'keyCode');
					}
					else {
						$pyjs['track']['lineno']=375;
						code = $p['getattr'](event, 'which');
					}
					$pyjs['track']['lineno']=376;
					if ($p['bool']($p['getattr']($p['getattr'](self, '__class__'), '_charCode')['__contains__'](code))) {
						$pyjs['track']['lineno']=377;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key', $p['getattr']($p['getattr'](self, '__class__'), '_charCode')['__getitem__'](code)) : $p['setattr'](self, 'key', $p['getattr']($p['getattr'](self, '__class__'), '_charCode')['__getitem__'](code)); 
					}
					else {
						$pyjs['track']['lineno']=379;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key', code) : $p['setattr'](self, 'key', code); 
					}
				}
				else {
					$pyjs['track']['lineno']=381;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['getattr'](event, 'type')) : $p['setattr'](self, 'type', $p['getattr'](event, 'type')); 
					$pyjs['track']['lineno']=382;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter33_iter = $p['getattr'](event, 'attr');
					$iter33_nextval=$p['__iter_prepare']($iter33_iter,false);
					while (typeof($p['__wrapped_next']($iter33_nextval)['$nextval']) != 'undefined') {
						attr = $iter33_nextval['$nextval'];
						$pyjs['track']['lineno']=383;
						$p['object']['__setattr__'](self, attr, $p['getattr'](event, 'attr')['__getitem__'](attr));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=385;
			$method = $pyjs__bind_method2('__repr__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9ad7c23a7a74344a17198e43f0dced6c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':385};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=385;
				$pyjs['track']['lineno']=389;
				if ($p['bool']($p['hasattr']($p['getattr'](self, 'event'), 'toString'))) {
					$pyjs['track']['lineno']=390;
					$pyjs['track']['lineno']=390;
					var $pyjs__ret = $p['sprintf']('%s(%s)', $p['tuple']([$p['getattr'](self, '__class__'), self['event']['toString']()]));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=392;
					$pyjs['track']['lineno']=392;
					var $pyjs__ret = self['event']['__repr__']();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=394;
			$method = $pyjs__bind_method2('getEvent', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9ad7c23a7a74344a17198e43f0dced6c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':394};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=394;
				$pyjs['track']['lineno']=398;
				$pyjs['track']['lineno']=398;
				var $pyjs__ret = $p['getattr'](self, 'event');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getEvent'] = $method;
			$pyjs['track']['lineno']=334;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('JEvent', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=401;
		$m['TouchListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.event';
			$cls_definition['__md5__'] = 'a11ba8bb2e8a857865e2e61dbe226f7e';
			$pyjs['track']['lineno']=409;
			$method = $pyjs__bind_method2('__init__', function(canvas) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					canvas = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a11ba8bb2e8a857865e2e61dbe226f7e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':409};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=409;
				$pyjs['track']['lineno']=423;
				$pyjs['track']['lineno']=424;
				$m['_canvas'] = canvas;
				$pyjs['track']['lineno']=425;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('element', canvas['getElement']()) : $p['setattr'](self, 'element', canvas['getElement']()); 
				$pyjs['track']['lineno']=426;
				self['element']['addEventListener']('touchstart', (typeof _touch_detect == "undefined"?$m['_touch_detect']:_touch_detect));
				$pyjs['track']['lineno']=427;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('active', false) : $p['setattr'](self, 'active', false); 
				$pyjs['track']['lineno']=428;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('callback', $p['list']([])) : $p['setattr'](self, 'callback', $p['list']([])); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['canvas']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=430;
			$method = $pyjs__bind_method2('activate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a11ba8bb2e8a857865e2e61dbe226f7e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':430};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=430;
				$pyjs['track']['lineno']=431;
				self['element']['removeEventListener']('touchstart', (typeof _touch_detect == "undefined"?$m['_touch_detect']:_touch_detect));
				$pyjs['track']['lineno']=432;
				self['element']['addEventListener']('touchstart', (typeof _touch_start == "undefined"?$m['_touch_start']:_touch_start));
				$pyjs['track']['lineno']=433;
				self['element']['addEventListener']('touchend', (typeof _touch_end == "undefined"?$m['_touch_end']:_touch_end));
				$pyjs['track']['lineno']=434;
				self['element']['addEventListener']('touchmove', (typeof _touch_move == "undefined"?$m['_touch_move']:_touch_move));
				$pyjs['track']['lineno']=435;
				self['element']['addEventListener']('touchcancel', (typeof _touch_cancel == "undefined"?$m['_touch_cancel']:_touch_cancel));
				$pyjs['track']['lineno']=436;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('active', true) : $p['setattr'](self, 'active', true); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['activate'] = $method;
			$pyjs['track']['lineno']=438;
			$method = $pyjs__bind_method2('add_callback', function(callback) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					callback = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a11ba8bb2e8a857865e2e61dbe226f7e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':438};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=438;
				$pyjs['track']['lineno']=445;
				self['callback']['append'](callback);
				$pyjs['track']['lineno']=446;
				$pyjs['track']['lineno']=446;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['callback']]);
			$cls_definition['add_callback'] = $method;
			$pyjs['track']['lineno']=448;
			$method = $pyjs__bind_method2('is_active', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a11ba8bb2e8a857865e2e61dbe226f7e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':448};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=448;
				$pyjs['track']['lineno']=452;
				$pyjs['track']['lineno']=452;
				var $pyjs__ret = $p['getattr'](self, 'active');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['is_active'] = $method;
			$pyjs['track']['lineno']=401;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TouchListener', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=454;
		$m['_canvas'] = null;
		$pyjs['track']['lineno']=456;
		$m['_touch_detect'] = function(event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.event','lineno':456};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.event';
			$pyjs['track']['lineno']=456;
			$pyjs['track']['lineno']=457;
			$m['_canvas']['onTouchInitiate'](event);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['_touch_detect']['__name__'] = '_touch_detect';

		$m['_touch_detect']['__bind_type__'] = 0;
		$m['_touch_detect']['__args__'] = [null,null,['event']];
		$pyjs['track']['lineno']=459;
		$m['_touch_start'] = function(event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.event','lineno':459};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.event';
			$pyjs['track']['lineno']=459;
			$pyjs['track']['lineno']=460;
			$m['_canvas']['onTouchStart'](event);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['_touch_start']['__name__'] = '_touch_start';

		$m['_touch_start']['__bind_type__'] = 0;
		$m['_touch_start']['__args__'] = [null,null,['event']];
		$pyjs['track']['lineno']=462;
		$m['_touch_end'] = function(event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.event','lineno':462};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.event';
			$pyjs['track']['lineno']=462;
			$pyjs['track']['lineno']=463;
			$m['_canvas']['onTouchEnd'](event);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['_touch_end']['__name__'] = '_touch_end';

		$m['_touch_end']['__bind_type__'] = 0;
		$m['_touch_end']['__args__'] = [null,null,['event']];
		$pyjs['track']['lineno']=465;
		$m['_touch_move'] = function(event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.event','lineno':465};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.event';
			$pyjs['track']['lineno']=465;
			$pyjs['track']['lineno']=466;
			$m['_canvas']['onTouchMove'](event);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['_touch_move']['__name__'] = '_touch_move';

		$m['_touch_move']['__bind_type__'] = 0;
		$m['_touch_move']['__args__'] = [null,null,['event']];
		$pyjs['track']['lineno']=468;
		$m['_touch_cancel'] = function(event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.event','lineno':468};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.event';
			$pyjs['track']['lineno']=468;
			$pyjs['track']['lineno']=469;
			$m['_canvas']['onTouchCancel'](event);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['_touch_cancel']['__name__'] = '_touch_cancel';

		$m['_touch_cancel']['__bind_type__'] = 0;
		$m['_touch_cancel']['__args__'] = [null,null,['event']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.event */


/* end module: pyjsdl.event */


/*
PYJS_DEPS: ['pyjsdl.env', 'pyjsdl', 'pyjsdl.locals']
*/
