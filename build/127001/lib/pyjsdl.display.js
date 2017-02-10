/* start module: pyjsdl.display */
$pyjs['loaded_modules']['pyjsdl.display'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.display']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.display'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.display'];
	$m['__repr__'] = function() { return '<module: pyjsdl.display>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.display';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['display'] = $pyjs['loaded_modules']['pyjsdl.display'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.display.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.display.py, line 4:\n    import base64';
		$m.__track_lines__[5] = 'pyjsdl.display.py, line 5:\n    from pyjsdl.surface import Surface';
		$m.__track_lines__[6] = 'pyjsdl.display.py, line 6:\n    from pyjsdl.rect import Rect';
		$m.__track_lines__[7] = 'pyjsdl.display.py, line 7:\n    from pyjsdl.time import Time';
		$m.__track_lines__[8] = 'pyjsdl.display.py, line 8:\n    from pyjsdl.color import Color';
		$m.__track_lines__[9] = 'pyjsdl.display.py, line 9:\n    from pyjsdl import env';
		$m.__track_lines__[10] = 'pyjsdl.display.py, line 10:\n    import pyjsdl.event';
		$m.__track_lines__[11] = 'pyjsdl.display.py, line 11:\n    from pyjsdl.pyjsobj import DOM, Window, RootPanel, FocusPanel, VerticalPanel, loadImages, TextBox, TextArea, MouseWheelHandler, eventGetMouseWheelVelocityY, Event, requestAnimationFrameInit';
		$m.__track_lines__[12] = 'pyjsdl.display.py, line 12:\n    from __pyjamas__ import JS';
		$m.__track_lines__[14] = "pyjsdl.display.py, line 14:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[17] = 'pyjsdl.display.py, line 17:\n    _canvas = None';
		$m.__track_lines__[18] = 'pyjsdl.display.py, line 18:\n    _ctx = None';
		$m.__track_lines__[19] = 'pyjsdl.display.py, line 19:\n    _img = None';
		$m.__track_lines__[20] = 'pyjsdl.display.py, line 20:\n    _wnd = None';
		$m.__track_lines__[23] = 'pyjsdl.display.py, line 23:\n    class Canvas(Surface, MouseWheelHandler):';
		$m.__track_lines__[25] = 'pyjsdl.display.py, line 25:\n    def __init__(self, size, buffered):';
		$m.__track_lines__[26] = 'pyjsdl.display.py, line 26:\n    Surface.__init__(self, size)';
		$m.__track_lines__[27] = 'pyjsdl.display.py, line 27:\n    MouseWheelHandler.__init__(self, True)';
		$m.__track_lines__[28] = 'pyjsdl.display.py, line 28:\n    if isinstance(buffered, bool):';
		$m.__track_lines__[29] = 'pyjsdl.display.py, line 29:\n    self._bufferedimage = buffered';
		$m.__track_lines__[31] = 'pyjsdl.display.py, line 31:\n    self._bufferedimage = True';
		$m.__track_lines__[32] = 'pyjsdl.display.py, line 32:\n    try:';
		$m.__track_lines__[33] = 'pyjsdl.display.py, line 33:\n    if self.impl.canvasContext:';
		$m.__track_lines__[34] = 'pyjsdl.display.py, line 34:\n    self._isCanvas = True';
		$m.__track_lines__[36] = 'pyjsdl.display.py, line 36:\n    self._isCanvas = False';
		$m.__track_lines__[37] = 'pyjsdl.display.py, line 37:\n    self._bufferedimage = False';
		$m.__track_lines__[38] = 'pyjsdl.display.py, line 38:\n    if self._bufferedimage:';
		$m.__track_lines__[39] = 'pyjsdl.display.py, line 39:\n    self.surface = Surface(size)';
		$m.__track_lines__[41] = 'pyjsdl.display.py, line 41:\n    self.surface = self';
		$m.__track_lines__[42] = 'pyjsdl.display.py, line 42:\n    self.images = {}';
		$m.__track_lines__[43] = 'pyjsdl.display.py, line 43:\n    self.image_list = []';
		$m.__track_lines__[44] = 'pyjsdl.display.py, line 44:\n    self.callback = None';
		$m.__track_lines__[45] = 'pyjsdl.display.py, line 45:\n    self.time = Time()';
		$m.__track_lines__[46] = 'pyjsdl.display.py, line 46:\n    self.event = pyjsdl.event';
		$m.__track_lines__[47] = 'pyjsdl.display.py, line 47:\n    self.addMouseListener(self)';
		$m.__track_lines__[48] = 'pyjsdl.display.py, line 48:\n    self.addMouseWheelListener(self)';
		$m.__track_lines__[49] = 'pyjsdl.display.py, line 49:\n    self.addKeyboardListener(self)';
		$m.__track_lines__[50] = 'pyjsdl.display.py, line 50:\n    self.sinkEvents(Event.ONMOUSEDOWN | Event.ONMOUSEUP| Event.ONMOUSEMOVE | Event.ONMOUSEOUT | Event.ONMOUSEWHEEL | Event.ONKEYDOWN | Event.ONKEYPRESS | Event.ONKEYUP)';
		$m.__track_lines__[51] = 'pyjsdl.display.py, line 51:\n    self.modKey = pyjsdl.event.modKey';
		$m.__track_lines__[52] = 'pyjsdl.display.py, line 52:\n    self.specialKey = pyjsdl.event.specialKey';
		$m.__track_lines__[53] = 'pyjsdl.display.py, line 53:\n    self.event._initiate_touch_listener(self)';
		$m.__track_lines__[54] = 'pyjsdl.display.py, line 54:\n    self._touch_callback = self.event.touchlistener.callback';
		$m.__track_lines__[55] = 'pyjsdl.display.py, line 55:\n    self._repaint = False';
		$m.__track_lines__[56] = 'pyjsdl.display.py, line 56:\n    self._rect_list = []';
		$m.__track_lines__[57] = 'pyjsdl.display.py, line 57:\n    self._rect_len = 0';
		$m.__track_lines__[58] = 'pyjsdl.display.py, line 58:\n    self._rect_num = 0';
		$m.__track_lines__[59] = 'pyjsdl.display.py, line 59:\n    self._framerate = 0';
		$m.__track_lines__[60] = 'pyjsdl.display.py, line 60:\n    self._frametime = 0';
		$m.__track_lines__[61] = 'pyjsdl.display.py, line 61:\n    self._canvas_init()';
		$m.__track_lines__[62] = 'pyjsdl.display.py, line 62:\n    self.initialized = False';
		$m.__track_lines__[64] = 'pyjsdl.display.py, line 64:\n    def _canvas_init(self):';
		$m.__track_lines__[65] = 'pyjsdl.display.py, line 65:\n    global _canvas, _ctx, _img, _wnd';
		$m.__track_lines__[66] = 'pyjsdl.display.py, line 66:\n    _canvas = self';
		$m.__track_lines__[67] = 'pyjsdl.display.py, line 67:\n    _ctx = self.impl.canvasContext';
		$m.__track_lines__[68] = 'pyjsdl.display.py, line 68:\n    _img = self.surface.canvas';
		$m.__track_lines__[69] = 'pyjsdl.display.py, line 69:\n    _wnd = requestAnimationFrameInit()';
		$m.__track_lines__[71] = 'pyjsdl.display.py, line 71:\n    def onMouseMove(self, sender, x, y):';
		$m.__track_lines__[72] = 'pyjsdl.display.py, line 72:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[73] = 'pyjsdl.display.py, line 73:\n    event.pos = (x, y)';
		$m.__track_lines__[74] = "pyjsdl.display.py, line 74:\n    self.event.mouseMove['x'], self.event.mouseMove['y'] = x, y";
		$m.__track_lines__[75] = 'pyjsdl.display.py, line 75:\n    self.event._updateQueue(event)';
		$m.__track_lines__[77] = 'pyjsdl.display.py, line 77:\n    def onMouseDown(self, sender, x, y):';
		$m.__track_lines__[78] = 'pyjsdl.display.py, line 78:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[79] = 'pyjsdl.display.py, line 79:\n    event.pos = (x, y)';
		$m.__track_lines__[80] = 'pyjsdl.display.py, line 80:\n    self.event.mousePress[event.button] = True';
		$m.__track_lines__[81] = 'pyjsdl.display.py, line 81:\n    self.event._updateQueue(event)';
		$m.__track_lines__[83] = 'pyjsdl.display.py, line 83:\n    def onMouseUp(self, sender, x, y):';
		$m.__track_lines__[84] = 'pyjsdl.display.py, line 84:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[85] = 'pyjsdl.display.py, line 85:\n    event.pos = (x, y)';
		$m.__track_lines__[86] = 'pyjsdl.display.py, line 86:\n    self.event.mousePress[event.button] = False';
		$m.__track_lines__[87] = 'pyjsdl.display.py, line 87:\n    self.event._updateQueue(event)';
		$m.__track_lines__[89] = 'pyjsdl.display.py, line 89:\n    def onMouseLeave(self, sender):';
		$m.__track_lines__[90] = 'pyjsdl.display.py, line 90:\n    self.event.mousePress[0], self.event.mousePress[1], self.event.mousePress[2] = False, False, False';
		$m.__track_lines__[91] = "pyjsdl.display.py, line 91:\n    self.event.mouseMove['x'], self.event.mouseMove['y'] = -1, -1";
		$m.__track_lines__[92] = "pyjsdl.display.py, line 92:\n    self.event.mouseMoveRel['x'], self.event.mouseMoveRel['y'] = None, None";
		$m.__track_lines__[93] = 'pyjsdl.display.py, line 93:\n    for keycode in self.modKey:';
		$m.__track_lines__[94] = 'pyjsdl.display.py, line 94:\n    if self.event.keyPress[keycode]:';
		$m.__track_lines__[95] = 'pyjsdl.display.py, line 95:\n    self.event.keyPress[keycode] = False';
		$m.__track_lines__[97] = 'pyjsdl.display.py, line 97:\n    def onMouseWheel(self, sender, velocity):';
		$m.__track_lines__[98] = 'pyjsdl.display.py, line 98:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[99] = "pyjsdl.display.py, line 99:\n    if event.type == 'mousewheel':";
		$m.__track_lines__[101] = "pyjsdl.display.py, line 101:\n    if hasattr(event, 'wheelDeltaX'):";
		$m.__track_lines__[102] = 'pyjsdl.display.py, line 102:\n    self.onMouseWheel = self._onMouseWheel';
		$m.__track_lines__[103] = 'pyjsdl.display.py, line 103:\n    self._onMouseWheel(sender, velocity)';
		$m.__track_lines__[105] = 'pyjsdl.display.py, line 105:\n    self.onMouseWheel = self._onMouseWheelY';
		$m.__track_lines__[106] = 'pyjsdl.display.py, line 106:\n    DOM.eventGetMouseWheelVelocityY = eventGetMouseWheelVelocityY';
		$m.__track_lines__[107] = 'pyjsdl.display.py, line 107:\n    self._onMouseWheelY(sender, eventGetMouseWheelVelocityY(event))';
		$m.__track_lines__[109] = 'pyjsdl.display.py, line 109:\n    self.onMouseWheel = self._onMouseScroll';
		$m.__track_lines__[110] = 'pyjsdl.display.py, line 110:\n    self._onMouseScroll(sender, velocity)';
		$m.__track_lines__[112] = 'pyjsdl.display.py, line 112:\n    def _onMouseWheel(self, sender, velocity):';
		$m.__track_lines__[113] = 'pyjsdl.display.py, line 113:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[114] = 'pyjsdl.display.py, line 114:\n    if not event.wheelDeltaX:';
		$m.__track_lines__[115] = 'pyjsdl.display.py, line 115:\n    if velocity < 0:';
		$m.__track_lines__[116] = 'pyjsdl.display.py, line 116:\n    button = 4';
		$m.__track_lines__[117] = 'pyjsdl.display.py, line 117:\n    events = velocity / -3';
		$m.__track_lines__[119] = 'pyjsdl.display.py, line 119:\n    button = 5';
		$m.__track_lines__[120] = 'pyjsdl.display.py, line 120:\n    events = velocity / 3';
		$m.__track_lines__[122] = 'pyjsdl.display.py, line 122:\n    if velocity < 0:';
		$m.__track_lines__[123] = 'pyjsdl.display.py, line 123:\n    button = 6';
		$m.__track_lines__[124] = 'pyjsdl.display.py, line 124:\n    events = velocity / -3';
		$m.__track_lines__[126] = 'pyjsdl.display.py, line 126:\n    button = 7';
		$m.__track_lines__[127] = 'pyjsdl.display.py, line 127:\n    events = velocity / 3';
		$m.__track_lines__[128] = 'pyjsdl.display.py, line 128:\n    event.btn = button';
		$m.__track_lines__[129] = "pyjsdl.display.py, line 129:\n    event.pos = (self.event.mouseMove['x'], self.event.mouseMove['y'])";
		$m.__track_lines__[130] = 'pyjsdl.display.py, line 130:\n    for evt in range(events):';
		$m.__track_lines__[131] = 'pyjsdl.display.py, line 131:\n    self.event._updateQueue(event)';
		$m.__track_lines__[133] = 'pyjsdl.display.py, line 133:\n    def _onMouseWheelY(self, sender, velocity):';
		$m.__track_lines__[134] = 'pyjsdl.display.py, line 134:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[135] = 'pyjsdl.display.py, line 135:\n    if velocity < 0:';
		$m.__track_lines__[136] = 'pyjsdl.display.py, line 136:\n    button = 4';
		$m.__track_lines__[137] = 'pyjsdl.display.py, line 137:\n    events = velocity / -3';
		$m.__track_lines__[139] = 'pyjsdl.display.py, line 139:\n    button = 5';
		$m.__track_lines__[140] = 'pyjsdl.display.py, line 140:\n    events = velocity / 3';
		$m.__track_lines__[141] = 'pyjsdl.display.py, line 141:\n    event.btn = button';
		$m.__track_lines__[142] = "pyjsdl.display.py, line 142:\n    event.pos = (self.event.mouseMove['x'], self.event.mouseMove['y'])";
		$m.__track_lines__[143] = 'pyjsdl.display.py, line 143:\n    for evt in range(events):';
		$m.__track_lines__[144] = 'pyjsdl.display.py, line 144:\n    self.event._updateQueue(event)';
		$m.__track_lines__[146] = 'pyjsdl.display.py, line 146:\n    def _onMouseScroll(self, sender, velocity):';
		$m.__track_lines__[147] = 'pyjsdl.display.py, line 147:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[148] = 'pyjsdl.display.py, line 148:\n    if velocity > 1 or velocity < -1:';
		$m.__track_lines__[149] = 'pyjsdl.display.py, line 149:\n    if velocity < 0:';
		$m.__track_lines__[150] = 'pyjsdl.display.py, line 150:\n    button = 4';
		$m.__track_lines__[152] = 'pyjsdl.display.py, line 152:\n    button = 5';
		$m.__track_lines__[154] = 'pyjsdl.display.py, line 154:\n    if velocity < 0:';
		$m.__track_lines__[155] = 'pyjsdl.display.py, line 155:\n    button = 6';
		$m.__track_lines__[157] = 'pyjsdl.display.py, line 157:\n    button = 7';
		$m.__track_lines__[158] = 'pyjsdl.display.py, line 158:\n    event.btn = button';
		$m.__track_lines__[159] = "pyjsdl.display.py, line 159:\n    event.pos = (self.event.mouseMove['x'], self.event.mouseMove['y'])";
		$m.__track_lines__[160] = 'pyjsdl.display.py, line 160:\n    self.event._updateQueue(event)';
		$m.__track_lines__[162] = 'pyjsdl.display.py, line 162:\n    def onKeyDown(self, sender, keycode, modifiers):';
		$m.__track_lines__[163] = 'pyjsdl.display.py, line 163:\n    if keycode in self.modKey:';
		$m.__track_lines__[164] = 'pyjsdl.display.py, line 164:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[165] = 'pyjsdl.display.py, line 165:\n    self.event.keyPress[keycode] = True';
		$m.__track_lines__[166] = 'pyjsdl.display.py, line 166:\n    self.event._updateQueue(event)';
		$m.__track_lines__[167] = 'pyjsdl.display.py, line 167:\n    DOM.eventPreventDefault(event)';
		$m.__track_lines__[169] = 'pyjsdl.display.py, line 169:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[170] = 'pyjsdl.display.py, line 170:\n    self.event._updateQueue(event)';
		$m.__track_lines__[171] = 'pyjsdl.display.py, line 171:\n    DOM.eventPreventDefault(event)';
		$m.__track_lines__[173] = 'pyjsdl.display.py, line 173:\n    def onKeyPress(self, sender, keycode, modifiers):';
		$m.__track_lines__[174] = 'pyjsdl.display.py, line 174:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[175] = 'pyjsdl.display.py, line 175:\n    if not (event.keyCode and event.keyCode in self.specialKey):';
		$m.__track_lines__[176] = 'pyjsdl.display.py, line 176:\n    self.event._updateQueue(event)';
		$m.__track_lines__[177] = 'pyjsdl.display.py, line 177:\n    DOM.eventPreventDefault(event)';
		$m.__track_lines__[179] = 'pyjsdl.display.py, line 179:\n    def onKeyUp(self, sender, keycode, modifiers):';
		$m.__track_lines__[180] = 'pyjsdl.display.py, line 180:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[181] = 'pyjsdl.display.py, line 181:\n    if keycode in self.modKey:';
		$m.__track_lines__[182] = 'pyjsdl.display.py, line 182:\n    self.event.keyPress[keycode] = False';
		$m.__track_lines__[183] = 'pyjsdl.display.py, line 183:\n    self.event._updateQueue(event)';
		$m.__track_lines__[185] = 'pyjsdl.display.py, line 185:\n    def onTouchInitiate(self, event):';
		$m.__track_lines__[186] = 'pyjsdl.display.py, line 186:\n    self.event.touchlistener.activate()';
		$m.__track_lines__[187] = 'pyjsdl.display.py, line 187:\n    for callback in self._touch_callback:';
		$m.__track_lines__[188] = "pyjsdl.display.py, line 188:\n    if hasattr(callback, 'onTouchInitiate'):";
		$m.__track_lines__[189] = 'pyjsdl.display.py, line 189:\n    callback.onTouchInitiate(event)';
		$m.__track_lines__[190] = 'pyjsdl.display.py, line 190:\n    self.onTouchStart(event)';
		$m.__track_lines__[192] = 'pyjsdl.display.py, line 192:\n    def onTouchStart(self, event):';
		$m.__track_lines__[193] = 'pyjsdl.display.py, line 193:\n    for callback in self._touch_callback:';
		$m.__track_lines__[194] = 'pyjsdl.display.py, line 194:\n    callback.onTouchStart(event)';
		$m.__track_lines__[196] = 'pyjsdl.display.py, line 196:\n    def onTouchEnd(self, event):';
		$m.__track_lines__[197] = 'pyjsdl.display.py, line 197:\n    for callback in self._touch_callback:';
		$m.__track_lines__[198] = 'pyjsdl.display.py, line 198:\n    callback.onTouchEnd(event)';
		$m.__track_lines__[200] = 'pyjsdl.display.py, line 200:\n    def onTouchMove(self, event):';
		$m.__track_lines__[201] = 'pyjsdl.display.py, line 201:\n    for callback in self._touch_callback:';
		$m.__track_lines__[202] = 'pyjsdl.display.py, line 202:\n    callback.onTouchMove(event)';
		$m.__track_lines__[204] = 'pyjsdl.display.py, line 204:\n    def onTouchCancel(self, event):';
		$m.__track_lines__[205] = 'pyjsdl.display.py, line 205:\n    for callback in self._touch_callback:';
		$m.__track_lines__[206] = 'pyjsdl.display.py, line 206:\n    callback.onTouchCancel(event)';
		$m.__track_lines__[208] = 'pyjsdl.display.py, line 208:\n    def resize(self, width, height):';
		$m.__track_lines__[209] = 'pyjsdl.display.py, line 209:\n    Surface.resize(self, width, height)';
		$m.__track_lines__[210] = 'pyjsdl.display.py, line 210:\n    if self._bufferedimage:';
		$m.__track_lines__[211] = 'pyjsdl.display.py, line 211:\n    self.surface.resize(width, height)';
		$m.__track_lines__[212] = 'pyjsdl.display.py, line 212:\n    self.surface._display._surface_rect = self.surface.get_rect()';
		$m.__track_lines__[214] = 'pyjsdl.display.py, line 214:\n    def set_callback(self, cb):';
		$m.__track_lines__[215] = "pyjsdl.display.py, line 215:\n    if not hasattr(cb, 'run'):";
		$m.__track_lines__[216] = 'pyjsdl.display.py, line 216:\n    self.callback = Callback(cb)';
		$m.__track_lines__[218] = 'pyjsdl.display.py, line 218:\n    self.callback = cb';
		$m.__track_lines__[220] = 'pyjsdl.display.py, line 220:\n    def load_images(self, images):';
		$m.__track_lines__[221] = 'pyjsdl.display.py, line 221:\n    if images:';
		$m.__track_lines__[222] = 'pyjsdl.display.py, line 222:\n    image_list = []';
		$m.__track_lines__[223] = 'pyjsdl.display.py, line 223:\n    for image in images:';
		$m.__track_lines__[224] = 'pyjsdl.display.py, line 224:\n    if isinstance(image, str):';
		$m.__track_lines__[225] = 'pyjsdl.display.py, line 225:\n    image_list.append(image)';
		$m.__track_lines__[226] = 'pyjsdl.display.py, line 226:\n    self.image_list.append(image)';
		$m.__track_lines__[228] = 'pyjsdl.display.py, line 228:\n    name = image[0]';
		$m.__track_lines__[229] = 'pyjsdl.display.py, line 229:\n    if isinstance(image[1], str):';
		$m.__track_lines__[230] = 'pyjsdl.display.py, line 230:\n    data = image[1]';
		$m.__track_lines__[232] = 'pyjsdl.display.py, line 232:\n    data = base64.b64encode(image[1].getvalue())';
		$m.__track_lines__[233] = "pyjsdl.display.py, line 233:\n    if not data.startswith('data:'):";
		$m.__track_lines__[234] = "pyjsdl.display.py, line 234:\n    ext = name.strip().split('.')[-1]";
		$m.__track_lines__[235] = 'pyjsdl.display.py, line 235:\n    data = "data:%s;base64,%s" %(ext, data)';
		$m.__track_lines__[237] = 'pyjsdl.display.py, line 237:\n    image_list.append(data)';
		$m.__track_lines__[238] = 'pyjsdl.display.py, line 238:\n    self.image_list.append(name)';
		$m.__track_lines__[239] = 'pyjsdl.display.py, line 239:\n    loadImages(image_list, self)';
		$m.__track_lines__[241] = 'pyjsdl.display.py, line 241:\n    self.start()';
		$m.__track_lines__[243] = 'pyjsdl.display.py, line 243:\n    def onImagesLoaded(self, images):';
		$m.__track_lines__[244] = 'pyjsdl.display.py, line 244:\n    for i, image in enumerate(self.image_list):';
		$m.__track_lines__[245] = 'pyjsdl.display.py, line 245:\n    self.images[image] = images[i].getElement()';
		$m.__track_lines__[246] = 'pyjsdl.display.py, line 246:\n    self.start()';
		$m.__track_lines__[248] = 'pyjsdl.display.py, line 248:\n    def start(self):';
		$m.__track_lines__[249] = 'pyjsdl.display.py, line 249:\n    if not self.initialized:';
		$m.__track_lines__[250] = 'pyjsdl.display.py, line 250:\n    self.initialized = True';
		$m.__track_lines__[251] = 'pyjsdl.display.py, line 251:\n    _wnd.requestAnimationFrame(run)';
		$m.__track_lines__[252] = 'pyjsdl.display.py, line 252:\n    self.time.timeout(0, self)';
		$m.__track_lines__[254] = 'pyjsdl.display.py, line 254:\n    def stop(self):';
		$m.__track_lines__[255] = 'pyjsdl.display.py, line 255:\n    global run';
		$m.__track_lines__[256] = 'pyjsdl.display.py, line 256:\n    run = lambda ts: None';
		$m.__track_lines__[257] = 'pyjsdl.display.py, line 257:\n    self.run = lambda: None';
		$m.__track_lines__[259] = 'pyjsdl.display.py, line 259:\n    def _get_rect(self):';
		$m.__track_lines__[260] = 'pyjsdl.display.py, line 260:\n    if self._rect_num < self._rect_len:';
		$m.__track_lines__[261] = 'pyjsdl.display.py, line 261:\n    return self._rect_list[self._rect_num]';
		$m.__track_lines__[263] = 'pyjsdl.display.py, line 263:\n    self._rect_list.append(Rect(0,0,0,0))';
		$m.__track_lines__[264] = 'pyjsdl.display.py, line 264:\n    self._rect_len += 1';
		$m.__track_lines__[265] = 'pyjsdl.display.py, line 265:\n    return self._rect_list[self._rect_num]';
		$m.__track_lines__[267] = 'pyjsdl.display.py, line 267:\n    def run(self):';
		$m.__track_lines__[268] = 'pyjsdl.display.py, line 268:\n    if not self._repaint:';
		$m.__track_lines__[269] = 'pyjsdl.display.py, line 269:\n    self.callback.run()';
		$m.__track_lines__[270] = 'pyjsdl.display.py, line 270:\n    self._repaint = True';
		$m.__track_lines__[271] = 'pyjsdl.display.py, line 271:\n    self.time.timeout(0, self)';
		$m.__track_lines__[274] = 'pyjsdl.display.py, line 274:\n    def run(timestamp):';
		$m.__track_lines__[275] = 'pyjsdl.display.py, line 275:\n    _wnd.requestAnimationFrame(run)';
		$m.__track_lines__[276] = 'pyjsdl.display.py, line 276:\n    if _canvas._repaint:';
		$m.__track_lines__[277] = 'pyjsdl.display.py, line 277:\n    if (timestamp-_canvas._frametime) >= _canvas._framerate:';
		$m.__track_lines__[278] = 'pyjsdl.display.py, line 278:\n    _canvas._frametime = timestamp';
		$m.__track_lines__[279] = 'pyjsdl.display.py, line 279:\n    while _canvas._rect_num:';
		$m.__track_lines__[280] = 'pyjsdl.display.py, line 280:\n    rect = _canvas._rect_list[_canvas._rect_num-1]';
		$m.__track_lines__[281] = 'pyjsdl.display.py, line 281:\n    _ctx.drawImage(_img, rect.x,rect.y,rect.width,rect.height,';
		$m.__track_lines__[283] = 'pyjsdl.display.py, line 283:\n    _canvas._rect_num -= 1';
		$m.__track_lines__[284] = 'pyjsdl.display.py, line 284:\n    _canvas._repaint = False';
		$m.__track_lines__[287] = 'pyjsdl.display.py, line 287:\n    class Callback(object):';
		$m.__track_lines__[289] = "pyjsdl.display.py, line 289:\n    __slots__ = ['run']";
		$m.__track_lines__[291] = 'pyjsdl.display.py, line 291:\n    def __init__(self, cb):';
		$m.__track_lines__[292] = 'pyjsdl.display.py, line 292:\n    self.run = cb';
		$m.__track_lines__[295] = 'pyjsdl.display.py, line 295:\n    class Display(object):';
		$m.__track_lines__[323] = 'pyjsdl.display.py, line 323:\n    def __init__(self):';
		$m.__track_lines__[329] = 'pyjsdl.display.py, line 329:\n    self._initialized = False';
		$m.__track_lines__[330] = 'pyjsdl.display.py, line 330:\n    self.init()';
		$m.__track_lines__[332] = 'pyjsdl.display.py, line 332:\n    def init(self):';
		$m.__track_lines__[336] = 'pyjsdl.display.py, line 336:\n    if not self._initialized:';
		$m.__track_lines__[337] = "pyjsdl.display.py, line 337:\n    self.id = ''";
		$m.__track_lines__[338] = 'pyjsdl.display.py, line 338:\n    self.icon = None';
		$m.__track_lines__[339] = 'pyjsdl.display.py, line 339:\n    self._image_list = []';
		$m.__track_lines__[340] = 'pyjsdl.display.py, line 340:\n    self._nonimplemented_methods()';
		$m.__track_lines__[341] = 'pyjsdl.display.py, line 341:\n    self._initialized = True';
		$m.__track_lines__[343] = 'pyjsdl.display.py, line 343:\n    def set_mode(self, size, buffered=True, *args, **kwargs):';
		$m.__track_lines__[349] = 'pyjsdl.display.py, line 349:\n    self.canvas = Canvas(size, buffered)';
		$m.__track_lines__[350] = 'pyjsdl.display.py, line 350:\n    env.canvas = self.canvas';
		$m.__track_lines__[351] = 'pyjsdl.display.py, line 351:\n    self.frame = Window.getDocumentRoot()';
		$m.__track_lines__[352] = 'pyjsdl.display.py, line 352:\n    env.frame = self.frame';
		$m.__track_lines__[353] = 'pyjsdl.display.py, line 353:\n    panel = FocusPanel(Widget=self.canvas)';
		$m.__track_lines__[354] = 'pyjsdl.display.py, line 354:\n    RootPanel().add(panel)';
		$m.__track_lines__[355] = 'pyjsdl.display.py, line 355:\n    self.panel = panel';
		$m.__track_lines__[356] = 'pyjsdl.display.py, line 356:\n    self.vpanel = None';
		$m.__track_lines__[357] = 'pyjsdl.display.py, line 357:\n    self.textbox = None';
		$m.__track_lines__[358] = 'pyjsdl.display.py, line 358:\n    self.textarea = None';
		$m.__track_lines__[359] = 'pyjsdl.display.py, line 359:\n    self.Textbox = Textbox';
		$m.__track_lines__[360] = 'pyjsdl.display.py, line 360:\n    self.Textarea = Textarea';
		$m.__track_lines__[361] = 'pyjsdl.display.py, line 361:\n    self.surface = self.canvas.surface';
		$m.__track_lines__[362] = 'pyjsdl.display.py, line 362:\n    self.surface._display = self';
		$m.__track_lines__[363] = 'pyjsdl.display.py, line 363:\n    self._surface_rect = self.surface.get_rect()';
		$m.__track_lines__[364] = 'pyjsdl.display.py, line 364:\n    if not self.canvas._bufferedimage:';
		$m.__track_lines__[365] = 'pyjsdl.display.py, line 365:\n    self.flip = lambda: None';
		$m.__track_lines__[366] = 'pyjsdl.display.py, line 366:\n    self.update = lambda *arg: None';
		$m.__track_lines__[367] = 'pyjsdl.display.py, line 367:\n    return self.surface';
		$m.__track_lines__[369] = 'pyjsdl.display.py, line 369:\n    def setup(self, callback, images=None):';
		$m.__track_lines__[376] = 'pyjsdl.display.py, line 376:\n    self.canvas.set_callback(callback)';
		$m.__track_lines__[377] = 'pyjsdl.display.py, line 377:\n    image_list = []';
		$m.__track_lines__[378] = 'pyjsdl.display.py, line 378:\n    if self._image_list:';
		$m.__track_lines__[379] = 'pyjsdl.display.py, line 379:\n    image_list.extend(self._image_list)';
		$m.__track_lines__[380] = 'pyjsdl.display.py, line 380:\n    self._image_list[:] = []';
		$m.__track_lines__[381] = 'pyjsdl.display.py, line 381:\n    if images:';
		$m.__track_lines__[382] = 'pyjsdl.display.py, line 382:\n    image_list.extend(images)';
		$m.__track_lines__[383] = 'pyjsdl.display.py, line 383:\n    self.canvas.load_images(image_list)';
		$m.__track_lines__[385] = 'pyjsdl.display.py, line 385:\n    def set_callback(self, callback):';
		$m.__track_lines__[391] = 'pyjsdl.display.py, line 391:\n    if self.canvas.initialized:';
		$m.__track_lines__[392] = 'pyjsdl.display.py, line 392:\n    self.canvas.set_callback(callback)';
		$m.__track_lines__[394] = 'pyjsdl.display.py, line 394:\n    self.setup(callback)';
		$m.__track_lines__[396] = 'pyjsdl.display.py, line 396:\n    def setup_images(self, images):';
		$m.__track_lines__[402] = 'pyjsdl.display.py, line 402:\n    if isinstance(images, str):';
		$m.__track_lines__[403] = 'pyjsdl.display.py, line 403:\n    images = [images]';
		$m.__track_lines__[404] = 'pyjsdl.display.py, line 404:\n    self._image_list.extend(images)';
		$m.__track_lines__[406] = 'pyjsdl.display.py, line 406:\n    def textbox_init(self):';
		$m.__track_lines__[410] = 'pyjsdl.display.py, line 410:\n    if not self.textbox:';
		$m.__track_lines__[411] = 'pyjsdl.display.py, line 411:\n    self.textbox = Textbox()';
		$m.__track_lines__[412] = 'pyjsdl.display.py, line 412:\n    self.textarea = Textarea()';
		$m.__track_lines__[414] = 'pyjsdl.display.py, line 414:\n    def is_canvas(self):';
		$m.__track_lines__[418] = 'pyjsdl.display.py, line 418:\n    return self.canvas._isCanvas';
		$m.__track_lines__[420] = 'pyjsdl.display.py, line 420:\n    def get_surface(self):';
		$m.__track_lines__[424] = 'pyjsdl.display.py, line 424:\n    return self.surface';
		$m.__track_lines__[426] = 'pyjsdl.display.py, line 426:\n    def get_canvas(self):';
		$m.__track_lines__[430] = 'pyjsdl.display.py, line 430:\n    return self.canvas';
		$m.__track_lines__[432] = 'pyjsdl.display.py, line 432:\n    def get_panel(self):';
		$m.__track_lines__[436] = 'pyjsdl.display.py, line 436:\n    return self.panel';
		$m.__track_lines__[438] = 'pyjsdl.display.py, line 438:\n    def get_vpanel(self):';
		$m.__track_lines__[442] = 'pyjsdl.display.py, line 442:\n    if not self.vpanel:';
		$m.__track_lines__[443] = 'pyjsdl.display.py, line 443:\n    self.vpanel = VerticalPanel()';
		$m.__track_lines__[444] = 'pyjsdl.display.py, line 444:\n    RootPanel().add(self.vpanel)';
		$m.__track_lines__[445] = 'pyjsdl.display.py, line 445:\n    return self.vpanel';
		$m.__track_lines__[447] = 'pyjsdl.display.py, line 447:\n    def getAbsoluteLeft(self):';
		$m.__track_lines__[451] = 'pyjsdl.display.py, line 451:\n    return self.canvas.getAbsoluteLeft()';
		$m.__track_lines__[453] = 'pyjsdl.display.py, line 453:\n    def getAbsoluteTop(self):';
		$m.__track_lines__[457] = 'pyjsdl.display.py, line 457:\n    return self.canvas.getAbsoluteTop()';
		$m.__track_lines__[459] = 'pyjsdl.display.py, line 459:\n    def getScrollLeft(self):';
		$m.__track_lines__[463] = 'pyjsdl.display.py, line 463:\n    return self.frame.scrollLeft';
		$m.__track_lines__[465] = 'pyjsdl.display.py, line 465:\n    def getScrollTop(self):';
		$m.__track_lines__[469] = 'pyjsdl.display.py, line 469:\n    return self.frame.scrollTop';
		$m.__track_lines__[471] = 'pyjsdl.display.py, line 471:\n    def quit(self):';
		$m.__track_lines__[475] = 'pyjsdl.display.py, line 475:\n    self._initialized = False';
		$m.__track_lines__[476] = 'pyjsdl.display.py, line 476:\n    return None';
		$m.__track_lines__[478] = 'pyjsdl.display.py, line 478:\n    def get_init(self):';
		$m.__track_lines__[482] = 'pyjsdl.display.py, line 482:\n    return self._initialized';
		$m.__track_lines__[484] = 'pyjsdl.display.py, line 484:\n    def get_active(self):';
		$m.__track_lines__[488] = "pyjsdl.display.py, line 488:\n    if hasattr(self, 'canvas'):";
		$m.__track_lines__[489] = 'pyjsdl.display.py, line 489:\n    return True';
		$m.__track_lines__[491] = 'pyjsdl.display.py, line 491:\n    return False';
		$m.__track_lines__[493] = 'pyjsdl.display.py, line 493:\n    def set_caption(self, text):';
		$m.__track_lines__[498] = 'pyjsdl.display.py, line 498:\n    self.id = text';
		$m.__track_lines__[499] = 'pyjsdl.display.py, line 499:\n    try:';
		$m.__track_lines__[500] = 'pyjsdl.display.py, line 500:\n    self.canvas.setID(self.id)';
		$m.__track_lines__[502] = 'pyjsdl.display.py, line 502:\n    pass';
		$m.__track_lines__[503] = 'pyjsdl.display.py, line 503:\n    return None';
		$m.__track_lines__[505] = 'pyjsdl.display.py, line 505:\n    def get_caption(self):';
		$m.__track_lines__[509] = 'pyjsdl.display.py, line 509:\n    try:';
		$m.__track_lines__[510] = 'pyjsdl.display.py, line 510:\n    return self.canvas.getID()';
		$m.__track_lines__[512] = 'pyjsdl.display.py, line 512:\n    return self.id';
		$m.__track_lines__[514] = 'pyjsdl.display.py, line 514:\n    def clear(self):';
		$m.__track_lines__[518] = 'pyjsdl.display.py, line 518:\n    self.surface.beginPath()';
		$m.__track_lines__[519] = 'pyjsdl.display.py, line 519:\n    self.surface.setFillStyle(Color(0,0,0))';
		$m.__track_lines__[520] = 'pyjsdl.display.py, line 520:\n    self.surface.fillRect(0, 0, self.surface.width, self.surface.height)';
		$m.__track_lines__[522] = 'pyjsdl.display.py, line 522:\n    def _nonimplemented_methods(self):';
		$m.__track_lines__[526] = 'pyjsdl.display.py, line 526:\n    self.set_icon = lambda *arg: None';
		$m.__track_lines__[528] = 'pyjsdl.display.py, line 528:\n    def flip(self):';
		$m.__track_lines__[532] = 'pyjsdl.display.py, line 532:\n    self.canvas.impl.canvasContext.drawImage(self.surface.canvas, 0, 0)';
		$m.__track_lines__[533] = 'pyjsdl.display.py, line 533:\n    return None';
		$m.__track_lines__[535] = 'pyjsdl.display.py, line 535:\n    def update(self, rect_list=None):';
		$m.__track_lines__[540] = "pyjsdl.display.py, line 540:\n    if hasattr(rect_list, 'append'):";
		$m.__track_lines__[541] = 'pyjsdl.display.py, line 541:\n    _update(self.canvas, rect_list)';
		$m.__track_lines__[543] = 'pyjsdl.display.py, line 543:\n    _update(self.canvas, [rect_list])';
		$m.__track_lines__[545] = 'pyjsdl.display.py, line 545:\n    self.flip()';
		$m.__track_lines__[546] = 'pyjsdl.display.py, line 546:\n    return None';
		$m.__track_lines__[549] = 'pyjsdl.display.py, line 549:\n    def _update(canvas, rect_list):';
		$m.__track_lines__[550] = 'pyjsdl.display.py, line 550:\n    for rect in rect_list:';
		$m.__track_lines__[551] = "pyjsdl.display.py, line 551:\n    if hasattr(rect, 'width'):";
		$m.__track_lines__[552] = 'pyjsdl.display.py, line 552:\n    if (rect.width > 0) and (rect.height > 0):';
		$m.__track_lines__[553] = 'pyjsdl.display.py, line 553:\n    repaint_rect = canvas._get_rect()';
		$m.__track_lines__[554] = 'pyjsdl.display.py, line 554:\n    repaint_rect.x = rect.x';
		$m.__track_lines__[555] = 'pyjsdl.display.py, line 555:\n    repaint_rect.y = rect.y';
		$m.__track_lines__[556] = 'pyjsdl.display.py, line 556:\n    repaint_rect.width = rect.width';
		$m.__track_lines__[557] = 'pyjsdl.display.py, line 557:\n    repaint_rect.height = rect.height';
		$m.__track_lines__[558] = 'pyjsdl.display.py, line 558:\n    canvas._rect_num += 1';
		$m.__track_lines__[560] = 'pyjsdl.display.py, line 560:\n    if (rect[2] > 0) and (rect[3] > 0):';
		$m.__track_lines__[561] = 'pyjsdl.display.py, line 561:\n    repaint_rect = canvas._get_rect()';
		$m.__track_lines__[562] = 'pyjsdl.display.py, line 562:\n    repaint_rect.x = rect[0]';
		$m.__track_lines__[563] = 'pyjsdl.display.py, line 563:\n    repaint_rect.y = rect[1]';
		$m.__track_lines__[564] = 'pyjsdl.display.py, line 564:\n    repaint_rect.width = rect[2]';
		$m.__track_lines__[565] = 'pyjsdl.display.py, line 565:\n    repaint_rect.height = rect[3]';
		$m.__track_lines__[566] = 'pyjsdl.display.py, line 566:\n    canvas._rect_num += 1';
		$m.__track_lines__[569] = 'pyjsdl.display.py, line 569:\n    class Textbox(TextBox):';
		$m.__track_lines__[576] = 'pyjsdl.display.py, line 576:\n    def __init__(self, size=None, panel=None):';
		$m.__track_lines__[577] = 'pyjsdl.display.py, line 577:\n    TextBox.__init__(self)';
		$m.__track_lines__[578] = 'pyjsdl.display.py, line 578:\n    if not size:';
		$m.__track_lines__[579] = 'pyjsdl.display.py, line 579:\n    self.width, self.height = env.canvas.surface.width-5, 20';
		$m.__track_lines__[581] = 'pyjsdl.display.py, line 581:\n    self.width, self.height = int(size[0]), int(size[1])';
		$m.__track_lines__[582] = "pyjsdl.display.py, line 582:\n    self.setSize(str(self.width)+'px', str(self.height)+'px')";
		$m.__track_lines__[583] = 'pyjsdl.display.py, line 583:\n    self.setVisible(False)';
		$m.__track_lines__[584] = 'pyjsdl.display.py, line 584:\n    if panel:';
		$m.__track_lines__[585] = 'pyjsdl.display.py, line 585:\n    panel.add(self)';
		$m.__track_lines__[587] = 'pyjsdl.display.py, line 587:\n    try:';
		$m.__track_lines__[588] = 'pyjsdl.display.py, line 588:\n    env.canvas.surface._display.vpanel.add(self)';
		$m.__track_lines__[590] = 'pyjsdl.display.py, line 590:\n    env.canvas.surface._display.vpanel = VerticalPanel()';
		$m.__track_lines__[591] = 'pyjsdl.display.py, line 591:\n    RootPanel().add(env.canvas.surface._display.vpanel)';
		$m.__track_lines__[592] = 'pyjsdl.display.py, line 592:\n    env.canvas.surface._display.vpanel.add(self)';
		$m.__track_lines__[594] = 'pyjsdl.display.py, line 594:\n    def resize(self, width=None, height=None):';
		$m.__track_lines__[595] = 'pyjsdl.display.py, line 595:\n    if not (width or height):';
		$m.__track_lines__[596] = 'pyjsdl.display.py, line 596:\n    self.width, self.height = env.canvas.surface.width-5, 20';
		$m.__track_lines__[598] = 'pyjsdl.display.py, line 598:\n    if width:';
		$m.__track_lines__[599] = 'pyjsdl.display.py, line 599:\n    self.width = int(width)';
		$m.__track_lines__[600] = 'pyjsdl.display.py, line 600:\n    if height:';
		$m.__track_lines__[601] = 'pyjsdl.display.py, line 601:\n    self.height = int(height)';
		$m.__track_lines__[602] = "pyjsdl.display.py, line 602:\n    self.setSize(str(self.width)+'px', str(self.height)+'px')";
		$m.__track_lines__[604] = 'pyjsdl.display.py, line 604:\n    def toggle(self, visible=None):';
		$m.__track_lines__[605] = 'pyjsdl.display.py, line 605:\n    if visible:';
		$m.__track_lines__[606] = 'pyjsdl.display.py, line 606:\n    self.setVisible(visible)';
		$m.__track_lines__[608] = 'pyjsdl.display.py, line 608:\n    self.setVisible(not self.getVisible())';
		$m.__track_lines__[611] = 'pyjsdl.display.py, line 611:\n    class Textarea(TextArea):';
		$m.__track_lines__[618] = 'pyjsdl.display.py, line 618:\n    def __init__(self, size=None, panel=None):';
		$m.__track_lines__[619] = 'pyjsdl.display.py, line 619:\n    TextArea.__init__(self)';
		$m.__track_lines__[620] = 'pyjsdl.display.py, line 620:\n    if not size:';
		$m.__track_lines__[621] = 'pyjsdl.display.py, line 621:\n    self.width, self.height = env.canvas.surface.width-5, int(env.canvas.surface.height/5)-5';
		$m.__track_lines__[623] = 'pyjsdl.display.py, line 623:\n    self.width, self.height = int(size[0]), int(size[1])';
		$m.__track_lines__[624] = "pyjsdl.display.py, line 624:\n    self.setSize(str(self.width)+'px', str(self.height)+'px')";
		$m.__track_lines__[625] = "pyjsdl.display.py, line 625:\n    self.setStyleAttribute({'resize':'vertical'})";
		$m.__track_lines__[626] = 'pyjsdl.display.py, line 626:\n    self.setVisible(False)';
		$m.__track_lines__[627] = 'pyjsdl.display.py, line 627:\n    if panel:';
		$m.__track_lines__[628] = 'pyjsdl.display.py, line 628:\n    panel.add(self)';
		$m.__track_lines__[630] = 'pyjsdl.display.py, line 630:\n    try:';
		$m.__track_lines__[631] = 'pyjsdl.display.py, line 631:\n    env.canvas.surface._display.vpanel.add(self)';
		$m.__track_lines__[633] = 'pyjsdl.display.py, line 633:\n    env.canvas.surface._display.vpanel = VerticalPanel()';
		$m.__track_lines__[634] = 'pyjsdl.display.py, line 634:\n    RootPanel().add(env.canvas.surface._display.vpanel)';
		$m.__track_lines__[635] = 'pyjsdl.display.py, line 635:\n    env.canvas.surface._display.vpanel.add(self)';
		$m.__track_lines__[637] = 'pyjsdl.display.py, line 637:\n    def resize(self, width=None, height=None):';
		$m.__track_lines__[638] = 'pyjsdl.display.py, line 638:\n    if not (width or height):';
		$m.__track_lines__[639] = 'pyjsdl.display.py, line 639:\n    self.width, self.height = env.canvas.surface.width-5, int(env.canvas.surface.height/5)-5';
		$m.__track_lines__[641] = 'pyjsdl.display.py, line 641:\n    if width:';
		$m.__track_lines__[642] = 'pyjsdl.display.py, line 642:\n    self.width = int(width)';
		$m.__track_lines__[643] = 'pyjsdl.display.py, line 643:\n    if height:';
		$m.__track_lines__[644] = 'pyjsdl.display.py, line 644:\n    self.height = int(height)';
		$m.__track_lines__[645] = "pyjsdl.display.py, line 645:\n    self.setSize(str(self.width)+'px', str(self.height)+'px')";
		$m.__track_lines__[647] = 'pyjsdl.display.py, line 647:\n    def toggle(self, visible=None):';
		$m.__track_lines__[648] = 'pyjsdl.display.py, line 648:\n    if visible:';
		$m.__track_lines__[649] = 'pyjsdl.display.py, line 649:\n    self.setVisible(visible)';
		$m.__track_lines__[651] = 'pyjsdl.display.py, line 651:\n    self.setVisible(not self.getVisible())';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_20 = new $p['int'](20);
		$pyjs['track']['module']='pyjsdl.display';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['base64'] = $p['___import___']('base64', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Rect'] = $p['___import___']('pyjsdl.rect.Rect', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Time'] = $p['___import___']('pyjsdl.time.Time', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=8;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Color'] = $p['___import___']('pyjsdl.color.Color', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=9;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=10;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['pyjsdl'] = $p['___import___']('pyjsdl.event', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=11;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjsdl.pyjsobj.DOM', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Window'] = $p['___import___']('pyjsdl.pyjsobj.Window', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['RootPanel'] = $p['___import___']('pyjsdl.pyjsobj.RootPanel', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['FocusPanel'] = $p['___import___']('pyjsdl.pyjsobj.FocusPanel', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['VerticalPanel'] = $p['___import___']('pyjsdl.pyjsobj.VerticalPanel', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['loadImages'] = $p['___import___']('pyjsdl.pyjsobj.loadImages', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['TextBox'] = $p['___import___']('pyjsdl.pyjsobj.TextBox', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['TextArea'] = $p['___import___']('pyjsdl.pyjsobj.TextArea', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['MouseWheelHandler'] = $p['___import___']('pyjsdl.pyjsobj.MouseWheelHandler', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['eventGetMouseWheelVelocityY'] = $p['___import___']('pyjsdl.pyjsobj.eventGetMouseWheelVelocityY', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Event'] = $p['___import___']('pyjsdl.pyjsobj.Event', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['requestAnimationFrameInit'] = $p['___import___']('pyjsdl.pyjsobj.requestAnimationFrameInit', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=12;
		$pyjs['track']['lineno']=14;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=17;
		$m['_canvas'] = null;
		$pyjs['track']['lineno']=18;
		$m['_ctx'] = null;
		$pyjs['track']['lineno']=19;
		$m['_img'] = null;
		$pyjs['track']['lineno']=20;
		$m['_wnd'] = null;
		$pyjs['track']['lineno']=23;
		$m['Canvas'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.display';
			$cls_definition['__md5__'] = '52dcb7fdaad76f831bba9d71c37a536e';
			$pyjs['track']['lineno']=25;
			$method = $pyjs__bind_method2('__init__', function(size, buffered) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					buffered = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':25};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=25;
				$pyjs['track']['lineno']=26;
				$m['Surface']['__init__'](self, size);
				$pyjs['track']['lineno']=27;
				$m['MouseWheelHandler']['__init__'](self, true);
				$pyjs['track']['lineno']=28;
				if ($p['bool']($p['isinstance'](buffered, $p['bool']))) {
					$pyjs['track']['lineno']=29;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_bufferedimage', buffered) : $p['setattr'](self, '_bufferedimage', buffered); 
				}
				else {
					$pyjs['track']['lineno']=31;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_bufferedimage', true) : $p['setattr'](self, '_bufferedimage', true); 
				}
				$pyjs['track']['lineno']=32;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=33;
					if ($p['bool']($p['getattr']($p['getattr'](self, 'impl'), 'canvasContext'))) {
						$pyjs['track']['lineno']=34;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isCanvas', true) : $p['setattr'](self, '_isCanvas', true); 
					}
				} catch($pyjs_try_err) {
					$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
					$pyjs['__active_exception_stack__'] = null;
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.display';
					if (true) {
						$pyjs['track']['lineno']=36;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isCanvas', false) : $p['setattr'](self, '_isCanvas', false); 
						$pyjs['track']['lineno']=37;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_bufferedimage', false) : $p['setattr'](self, '_bufferedimage', false); 
					}
				}
				$pyjs['track']['lineno']=38;
				if ($p['bool']($p['getattr'](self, '_bufferedimage'))) {
					$pyjs['track']['lineno']=39;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('surface', $m['Surface'](size)) : $p['setattr'](self, 'surface', $m['Surface'](size)); 
				}
				else {
					$pyjs['track']['lineno']=41;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('surface', self) : $p['setattr'](self, 'surface', self); 
				}
				$pyjs['track']['lineno']=42;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('images', $p['dict']([])) : $p['setattr'](self, 'images', $p['dict']([])); 
				$pyjs['track']['lineno']=43;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('image_list', $p['list']([])) : $p['setattr'](self, 'image_list', $p['list']([])); 
				$pyjs['track']['lineno']=44;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('callback', null) : $p['setattr'](self, 'callback', null); 
				$pyjs['track']['lineno']=45;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time', $m['Time']()) : $p['setattr'](self, 'time', $m['Time']()); 
				$pyjs['track']['lineno']=46;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('event', $p['getattr']($m['pyjsdl'], 'event')) : $p['setattr'](self, 'event', $p['getattr']($m['pyjsdl'], 'event')); 
				$pyjs['track']['lineno']=47;
				self['addMouseListener'](self);
				$pyjs['track']['lineno']=48;
				self['addMouseWheelListener'](self);
				$pyjs['track']['lineno']=49;
				self['addKeyboardListener'](self);
				$pyjs['track']['lineno']=50;
				self['sinkEvents']($p['op_bitor']([$p['getattr']($m['Event'], 'ONMOUSEDOWN'), $p['getattr']($m['Event'], 'ONMOUSEUP'), $p['getattr']($m['Event'], 'ONMOUSEMOVE'), $p['getattr']($m['Event'], 'ONMOUSEOUT'), $p['getattr']($m['Event'], 'ONMOUSEWHEEL'), $p['getattr']($m['Event'], 'ONKEYDOWN'), $p['getattr']($m['Event'], 'ONKEYPRESS'), $p['getattr']($m['Event'], 'ONKEYUP')]));
				$pyjs['track']['lineno']=51;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modKey', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'modKey')) : $p['setattr'](self, 'modKey', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'modKey')); 
				$pyjs['track']['lineno']=52;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('specialKey', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'specialKey')) : $p['setattr'](self, 'specialKey', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'specialKey')); 
				$pyjs['track']['lineno']=53;
				self['event']['_initiate_touch_listener'](self);
				$pyjs['track']['lineno']=54;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_touch_callback', $p['getattr']($p['getattr']($p['getattr'](self, 'event'), 'touchlistener'), 'callback')) : $p['setattr'](self, '_touch_callback', $p['getattr']($p['getattr']($p['getattr'](self, 'event'), 'touchlistener'), 'callback')); 
				$pyjs['track']['lineno']=55;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_repaint', false) : $p['setattr'](self, '_repaint', false); 
				$pyjs['track']['lineno']=56;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_rect_list', $p['list']([])) : $p['setattr'](self, '_rect_list', $p['list']([])); 
				$pyjs['track']['lineno']=57;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_rect_len', $constant_int_0) : $p['setattr'](self, '_rect_len', $constant_int_0); 
				$pyjs['track']['lineno']=58;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_rect_num', $constant_int_0) : $p['setattr'](self, '_rect_num', $constant_int_0); 
				$pyjs['track']['lineno']=59;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_framerate', $constant_int_0) : $p['setattr'](self, '_framerate', $constant_int_0); 
				$pyjs['track']['lineno']=60;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_frametime', $constant_int_0) : $p['setattr'](self, '_frametime', $constant_int_0); 
				$pyjs['track']['lineno']=61;
				self['_canvas_init']();
				$pyjs['track']['lineno']=62;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('initialized', false) : $p['setattr'](self, 'initialized', false); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['size'],['buffered']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=64;
			$method = $pyjs__bind_method2('_canvas_init', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=64;
				$pyjs['track']['lineno']=65;
				$pyjs['track']['lineno']=66;
				$m['_canvas'] = self;
				$pyjs['track']['lineno']=67;
				$m['_ctx'] = $p['getattr']($p['getattr'](self, 'impl'), 'canvasContext');
				$pyjs['track']['lineno']=68;
				$m['_img'] = $p['getattr']($p['getattr'](self, 'surface'), 'canvas');
				$pyjs['track']['lineno']=69;
				$m['_wnd'] = $m['requestAnimationFrameInit']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_canvas_init'] = $method;
			$pyjs['track']['lineno']=71;
			$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':71};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=71;
				$pyjs['track']['lineno']=72;
				event = $m['DOM']['eventGetCurrentEvent']();
				$pyjs['track']['lineno']=73;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('pos', $p['tuple']([x, y])) : $p['setattr'](event, 'pos', $p['tuple']([x, y])); 
				$pyjs['track']['lineno']=74;
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([x, y]), 2, null);
				$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__setitem__']('x', $tupleassign1[0]);
				$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__setitem__']('y', $tupleassign1[1]);
				$pyjs['track']['lineno']=75;
				self['event']['_updateQueue'](event);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseMove'] = $method;
			$pyjs['track']['lineno']=77;
			$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':77};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=77;
				$pyjs['track']['lineno']=78;
				event = $m['DOM']['eventGetCurrentEvent']();
				$pyjs['track']['lineno']=79;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('pos', $p['tuple']([x, y])) : $p['setattr'](event, 'pos', $p['tuple']([x, y])); 
				$pyjs['track']['lineno']=80;
				$p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__']($p['getattr'](event, 'button'), true);
				$pyjs['track']['lineno']=81;
				self['event']['_updateQueue'](event);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseDown'] = $method;
			$pyjs['track']['lineno']=83;
			$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':83};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=83;
				$pyjs['track']['lineno']=84;
				event = $m['DOM']['eventGetCurrentEvent']();
				$pyjs['track']['lineno']=85;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('pos', $p['tuple']([x, y])) : $p['setattr'](event, 'pos', $p['tuple']([x, y])); 
				$pyjs['track']['lineno']=86;
				$p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__']($p['getattr'](event, 'button'), false);
				$pyjs['track']['lineno']=87;
				self['event']['_updateQueue'](event);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseUp'] = $method;
			$pyjs['track']['lineno']=89;
			$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
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
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,keycode;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':89};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=89;
				$pyjs['track']['lineno']=90;
				var $tupleassign2 = $p['__ass_unpack']($p['tuple']([false, false, false]), 3, null);
				$p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__']($constant_int_0, $tupleassign2[0]);
				$p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__']($constant_int_1, $tupleassign2[1]);
				$p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__']($constant_int_2, $tupleassign2[2]);
				$pyjs['track']['lineno']=91;
				var $tupleassign3 = $p['__ass_unpack']($p['tuple']([(typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))]), 2, null);
				$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__setitem__']('x', $tupleassign3[0]);
				$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__setitem__']('y', $tupleassign3[1]);
				$pyjs['track']['lineno']=92;
				var $tupleassign4 = $p['__ass_unpack']($p['tuple']([null, null]), 2, null);
				$p['getattr']($p['getattr'](self, 'event'), 'mouseMoveRel')['__setitem__']('x', $tupleassign4[0]);
				$p['getattr']($p['getattr'](self, 'event'), 'mouseMoveRel')['__setitem__']('y', $tupleassign4[1]);
				$pyjs['track']['lineno']=93;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['getattr'](self, 'modKey');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					keycode = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=94;
					if ($p['bool']($p['getattr']($p['getattr'](self, 'event'), 'keyPress')['__getitem__'](keycode))) {
						$pyjs['track']['lineno']=95;
						$p['getattr']($p['getattr'](self, 'event'), 'keyPress')['__setitem__'](keycode, false);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseLeave'] = $method;
			$pyjs['track']['lineno']=97;
			$method = $pyjs__bind_method2('onMouseWheel', function(sender, velocity) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					velocity = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':97};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=97;
				$pyjs['track']['lineno']=98;
				event = $m['DOM']['eventGetCurrentEvent']();
				$pyjs['track']['lineno']=99;
				if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), 'mousewheel'))) {
					$pyjs['track']['lineno']=101;
					if ($p['bool']($p['hasattr'](event, 'wheelDeltaX'))) {
						$pyjs['track']['lineno']=102;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('onMouseWheel', $p['getattr'](self, '_onMouseWheel')) : $p['setattr'](self, 'onMouseWheel', $p['getattr'](self, '_onMouseWheel')); 
						$pyjs['track']['lineno']=103;
						self['_onMouseWheel'](sender, velocity);
					}
					else {
						$pyjs['track']['lineno']=105;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('onMouseWheel', $p['getattr'](self, '_onMouseWheelY')) : $p['setattr'](self, 'onMouseWheel', $p['getattr'](self, '_onMouseWheelY')); 
						$pyjs['track']['lineno']=106;
						$m['DOM']['__is_instance__'] && typeof $m['DOM']['__setattr__'] == 'function' ? $m['DOM']['__setattr__']('eventGetMouseWheelVelocityY', $m['eventGetMouseWheelVelocityY']) : $p['setattr']($m['DOM'], 'eventGetMouseWheelVelocityY', $m['eventGetMouseWheelVelocityY']); 
						$pyjs['track']['lineno']=107;
						self['_onMouseWheelY'](sender, $m['eventGetMouseWheelVelocityY'](event));
					}
				}
				else {
					$pyjs['track']['lineno']=109;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('onMouseWheel', $p['getattr'](self, '_onMouseScroll')) : $p['setattr'](self, 'onMouseWheel', $p['getattr'](self, '_onMouseScroll')); 
					$pyjs['track']['lineno']=110;
					self['_onMouseScroll'](sender, velocity);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['velocity']]);
			$cls_definition['onMouseWheel'] = $method;
			$pyjs['track']['lineno']=112;
			$method = $pyjs__bind_method2('_onMouseWheel', function(sender, velocity) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					velocity = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,evt,button,$pyjs__trackstack_size_1,$iter2_idx,event,$div8,events,$iter2_array,$div3,$div2,$div7,$div1,$div6,$div4,$div5;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':112};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=112;
				$pyjs['track']['lineno']=113;
				event = $m['DOM']['eventGetCurrentEvent']();
				$pyjs['track']['lineno']=114;
				if ($p['bool'](!$p['bool']($p['getattr'](event, 'wheelDeltaX')))) {
					$pyjs['track']['lineno']=115;
					if ($p['bool'](($p['cmp'](velocity, $constant_int_0) == -1))) {
						$pyjs['track']['lineno']=116;
						button = $constant_int_4;
						$pyjs['track']['lineno']=117;
						events = (typeof ($div1=velocity)==typeof ($div2=(typeof ($usub3=$constant_int_3)=='number'?
							-$usub3:
							$p['op_usub']($usub3))) && typeof $div1=='number' && $div2 !== 0?
							$div1/$div2:
							$p['op_div']($div1,$div2));
					}
					else {
						$pyjs['track']['lineno']=119;
						button = $constant_int_5;
						$pyjs['track']['lineno']=120;
						events = (typeof ($div3=velocity)==typeof ($div4=$constant_int_3) && typeof $div3=='number' && $div4 !== 0?
							$div3/$div4:
							$p['op_div']($div3,$div4));
					}
				}
				else {
					$pyjs['track']['lineno']=122;
					if ($p['bool'](($p['cmp'](velocity, $constant_int_0) == -1))) {
						$pyjs['track']['lineno']=123;
						button = $constant_int_6;
						$pyjs['track']['lineno']=124;
						events = (typeof ($div5=velocity)==typeof ($div6=(typeof ($usub4=$constant_int_3)=='number'?
							-$usub4:
							$p['op_usub']($usub4))) && typeof $div5=='number' && $div6 !== 0?
							$div5/$div6:
							$p['op_div']($div5,$div6));
					}
					else {
						$pyjs['track']['lineno']=126;
						button = $constant_int_7;
						$pyjs['track']['lineno']=127;
						events = (typeof ($div7=velocity)==typeof ($div8=$constant_int_3) && typeof $div7=='number' && $div8 !== 0?
							$div7/$div8:
							$p['op_div']($div7,$div8));
					}
				}
				$pyjs['track']['lineno']=128;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('btn', button) : $p['setattr'](event, 'btn', button); 
				$pyjs['track']['lineno']=129;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('pos', $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')])) : $p['setattr'](event, 'pos', $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')])); 
				$pyjs['track']['lineno']=130;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = $p['range'](events);
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					evt = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=131;
					self['event']['_updateQueue'](event);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['velocity']]);
			$cls_definition['_onMouseWheel'] = $method;
			$pyjs['track']['lineno']=133;
			$method = $pyjs__bind_method2('_onMouseWheelY', function(sender, velocity) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					velocity = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,events,button,$iter3_array,$div10,$div11,$div12,event,$pyjs__trackstack_size_1,$div9,$iter3_iter,$iter3_type,$iter3_nextval,evt;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':133};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=133;
				$pyjs['track']['lineno']=134;
				event = $m['DOM']['eventGetCurrentEvent']();
				$pyjs['track']['lineno']=135;
				if ($p['bool'](($p['cmp'](velocity, $constant_int_0) == -1))) {
					$pyjs['track']['lineno']=136;
					button = $constant_int_4;
					$pyjs['track']['lineno']=137;
					events = (typeof ($div9=velocity)==typeof ($div10=(typeof ($usub5=$constant_int_3)=='number'?
						-$usub5:
						$p['op_usub']($usub5))) && typeof $div9=='number' && $div10 !== 0?
						$div9/$div10:
						$p['op_div']($div9,$div10));
				}
				else {
					$pyjs['track']['lineno']=139;
					button = $constant_int_5;
					$pyjs['track']['lineno']=140;
					events = (typeof ($div11=velocity)==typeof ($div12=$constant_int_3) && typeof $div11=='number' && $div12 !== 0?
						$div11/$div12:
						$p['op_div']($div11,$div12));
				}
				$pyjs['track']['lineno']=141;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('btn', button) : $p['setattr'](event, 'btn', button); 
				$pyjs['track']['lineno']=142;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('pos', $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')])) : $p['setattr'](event, 'pos', $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')])); 
				$pyjs['track']['lineno']=143;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = $p['range'](events);
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					evt = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=144;
					self['event']['_updateQueue'](event);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['velocity']]);
			$cls_definition['_onMouseWheelY'] = $method;
			$pyjs['track']['lineno']=146;
			$method = $pyjs__bind_method2('_onMouseScroll', function(sender, velocity) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					velocity = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or1,$or2,button,event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':146};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=146;
				$pyjs['track']['lineno']=147;
				event = $m['DOM']['eventGetCurrentEvent']();
				$pyjs['track']['lineno']=148;
				if ($p['bool'](($p['bool']($or1=($p['cmp'](velocity, $constant_int_1) == 1))?$or1:($p['cmp'](velocity, (typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6))) == -1)))) {
					$pyjs['track']['lineno']=149;
					if ($p['bool'](($p['cmp'](velocity, $constant_int_0) == -1))) {
						$pyjs['track']['lineno']=150;
						button = $constant_int_4;
					}
					else {
						$pyjs['track']['lineno']=152;
						button = $constant_int_5;
					}
				}
				else {
					$pyjs['track']['lineno']=154;
					if ($p['bool'](($p['cmp'](velocity, $constant_int_0) == -1))) {
						$pyjs['track']['lineno']=155;
						button = $constant_int_6;
					}
					else {
						$pyjs['track']['lineno']=157;
						button = $constant_int_7;
					}
				}
				$pyjs['track']['lineno']=158;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('btn', button) : $p['setattr'](event, 'btn', button); 
				$pyjs['track']['lineno']=159;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('pos', $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')])) : $p['setattr'](event, 'pos', $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')])); 
				$pyjs['track']['lineno']=160;
				self['event']['_updateQueue'](event);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['velocity']]);
			$cls_definition['_onMouseScroll'] = $method;
			$pyjs['track']['lineno']=162;
			$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keycode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':162};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=162;
				$pyjs['track']['lineno']=163;
				if ($p['bool']($p['getattr'](self, 'modKey')['__contains__'](keycode))) {
					$pyjs['track']['lineno']=164;
					event = $m['DOM']['eventGetCurrentEvent']();
					$pyjs['track']['lineno']=165;
					$p['getattr']($p['getattr'](self, 'event'), 'keyPress')['__setitem__'](keycode, true);
					$pyjs['track']['lineno']=166;
					self['event']['_updateQueue'](event);
					$pyjs['track']['lineno']=167;
					$m['DOM']['eventPreventDefault'](event);
				}
				else if ($p['bool']($p['getattr'](self, 'specialKey')['__contains__'](keycode))) {
					$pyjs['track']['lineno']=169;
					event = $m['DOM']['eventGetCurrentEvent']();
					$pyjs['track']['lineno']=170;
					self['event']['_updateQueue'](event);
					$pyjs['track']['lineno']=171;
					$m['DOM']['eventPreventDefault'](event);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
			$cls_definition['onKeyDown'] = $method;
			$pyjs['track']['lineno']=173;
			$method = $pyjs__bind_method2('onKeyPress', function(sender, keycode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keycode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and1,$and2,event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':173};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=173;
				$pyjs['track']['lineno']=174;
				event = $m['DOM']['eventGetCurrentEvent']();
				$pyjs['track']['lineno']=175;
				if ($p['bool'](!$p['bool'](($p['bool']($and1=$p['getattr'](event, 'keyCode'))?$p['getattr'](self, 'specialKey')['__contains__']($p['getattr'](event, 'keyCode')):$and1)))) {
					$pyjs['track']['lineno']=176;
					self['event']['_updateQueue'](event);
				}
				$pyjs['track']['lineno']=177;
				$m['DOM']['eventPreventDefault'](event);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
			$cls_definition['onKeyPress'] = $method;
			$pyjs['track']['lineno']=179;
			$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keycode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':179};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=179;
				$pyjs['track']['lineno']=180;
				event = $m['DOM']['eventGetCurrentEvent']();
				$pyjs['track']['lineno']=181;
				if ($p['bool']($p['getattr'](self, 'modKey')['__contains__'](keycode))) {
					$pyjs['track']['lineno']=182;
					$p['getattr']($p['getattr'](self, 'event'), 'keyPress')['__setitem__'](keycode, false);
				}
				$pyjs['track']['lineno']=183;
				self['event']['_updateQueue'](event);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
			$cls_definition['onKeyUp'] = $method;
			$pyjs['track']['lineno']=185;
			$method = $pyjs__bind_method2('onTouchInitiate', function(event) {
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
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter4_nextval,$iter4_idx,callback,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':185};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=185;
				$pyjs['track']['lineno']=186;
				self['event']['touchlistener']['activate']();
				$pyjs['track']['lineno']=187;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = $p['getattr'](self, '_touch_callback');
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					callback = $iter4_nextval['$nextval'];
					$pyjs['track']['lineno']=188;
					if ($p['bool']($p['hasattr'](callback, 'onTouchInitiate'))) {
						$pyjs['track']['lineno']=189;
						callback['onTouchInitiate'](event);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=190;
				self['onTouchStart'](event);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onTouchInitiate'] = $method;
			$pyjs['track']['lineno']=192;
			$method = $pyjs__bind_method2('onTouchStart', function(event) {
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
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$iter5_array,$pyjs__trackstack_size_1,callback,$iter5_iter,$iter5_idx,$iter5_type;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':192};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=192;
				$pyjs['track']['lineno']=193;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = $p['getattr'](self, '_touch_callback');
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					callback = $iter5_nextval['$nextval'];
					$pyjs['track']['lineno']=194;
					callback['onTouchStart'](event);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onTouchStart'] = $method;
			$pyjs['track']['lineno']=196;
			$method = $pyjs__bind_method2('onTouchEnd', function(event) {
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
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter6_idx,$iter6_type,callback,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,$iter6_nextval;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':196};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=196;
				$pyjs['track']['lineno']=197;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter6_iter = $p['getattr'](self, '_touch_callback');
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					callback = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=198;
					callback['onTouchEnd'](event);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onTouchEnd'] = $method;
			$pyjs['track']['lineno']=200;
			$method = $pyjs__bind_method2('onTouchMove', function(event) {
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
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter7_nextval,$iter7_iter,$iter7_array,callback,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':200};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=200;
				$pyjs['track']['lineno']=201;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter7_iter = $p['getattr'](self, '_touch_callback');
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					callback = $iter7_nextval['$nextval'];
					$pyjs['track']['lineno']=202;
					callback['onTouchMove'](event);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onTouchMove'] = $method;
			$pyjs['track']['lineno']=204;
			$method = $pyjs__bind_method2('onTouchCancel', function(event) {
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
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter8_idx,$iter8_array,$iter8_iter,callback,$iter8_nextval,$pyjs__trackstack_size_1,$iter8_type;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':204};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=204;
				$pyjs['track']['lineno']=205;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter8_iter = $p['getattr'](self, '_touch_callback');
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					callback = $iter8_nextval['$nextval'];
					$pyjs['track']['lineno']=206;
					callback['onTouchCancel'](event);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onTouchCancel'] = $method;
			$pyjs['track']['lineno']=208;
			$method = $pyjs__bind_method2('resize', function(width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':208};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=208;
				$pyjs['track']['lineno']=209;
				$m['Surface']['resize'](self, width, height);
				$pyjs['track']['lineno']=210;
				if ($p['bool']($p['getattr'](self, '_bufferedimage'))) {
					$pyjs['track']['lineno']=211;
					self['surface']['resize'](width, height);
				}
				$pyjs['track']['lineno']=212;
				$p['getattr']($p['getattr'](self, 'surface'), '_display')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'surface'), '_display')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'surface'), '_display')['__setattr__']('_surface_rect', self['surface']['get_rect']()) : $p['setattr']($p['getattr']($p['getattr'](self, 'surface'), '_display'), '_surface_rect', self['surface']['get_rect']()); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['resize'] = $method;
			$pyjs['track']['lineno']=214;
			$method = $pyjs__bind_method2('set_callback', function(cb) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					cb = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':214};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=214;
				$pyjs['track']['lineno']=215;
				if ($p['bool'](!$p['bool']($p['hasattr'](cb, 'run')))) {
					$pyjs['track']['lineno']=216;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('callback', (typeof Callback == "undefined"?$m['Callback']:Callback)(cb)) : $p['setattr'](self, 'callback', (typeof Callback == "undefined"?$m['Callback']:Callback)(cb)); 
				}
				else {
					$pyjs['track']['lineno']=218;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('callback', cb) : $p['setattr'](self, 'callback', cb); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['cb']]);
			$cls_definition['set_callback'] = $method;
			$pyjs['track']['lineno']=220;
			$method = $pyjs__bind_method2('load_images', function(images) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					images = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var name,$iter9_iter,image_list,$iter9_nextval,$iter9_idx,$iter9_array,ext,image,$pyjs__trackstack_size_1,data,$iter9_type;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':220};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=220;
				$pyjs['track']['lineno']=221;
				if ($p['bool'](images)) {
					$pyjs['track']['lineno']=222;
					image_list = $p['list']([]);
					$pyjs['track']['lineno']=223;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter9_iter = images;
					$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
					while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
						image = $iter9_nextval['$nextval'];
						$pyjs['track']['lineno']=224;
						if ($p['bool']($p['isinstance'](image, $p['str']))) {
							$pyjs['track']['lineno']=225;
							image_list['append'](image);
							$pyjs['track']['lineno']=226;
							self['image_list']['append'](image);
						}
						else {
							$pyjs['track']['lineno']=228;
							name = image['__getitem__']($constant_int_0);
							$pyjs['track']['lineno']=229;
							if ($p['bool']($p['isinstance'](image['__getitem__']($constant_int_1), $p['str']))) {
								$pyjs['track']['lineno']=230;
								data = image['__getitem__']($constant_int_1);
							}
							else {
								$pyjs['track']['lineno']=232;
								data = $m['base64']['b64encode'](image['__getitem__']($constant_int_1)['getvalue']());
							}
							$pyjs['track']['lineno']=233;
							if ($p['bool'](!$p['bool'](data['startswith']('data:')))) {
								$pyjs['track']['lineno']=234;
								ext = name['strip']()['$$split']('.')['__getitem__']((typeof ($usub7=$constant_int_1)=='number'?
									-$usub7:
									$p['op_usub']($usub7)));
								$pyjs['track']['lineno']=235;
								data = $p['sprintf']('data:%s;base64,%s', $p['tuple']([ext, data]));
							}
							$pyjs['track']['lineno']=237;
							image_list['append'](data);
							$pyjs['track']['lineno']=238;
							self['image_list']['append'](name);
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.display';
					$pyjs['track']['lineno']=239;
					$m['loadImages'](image_list, self);
				}
				else {
					$pyjs['track']['lineno']=241;
					self['start']();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['images']]);
			$cls_definition['load_images'] = $method;
			$pyjs['track']['lineno']=243;
			$method = $pyjs__bind_method2('onImagesLoaded', function(images) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					images = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter10_nextval,i,$iter10_array,$iter10_type,image,$pyjs__trackstack_size_1,$iter10_iter,$iter10_idx;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':243};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=243;
				$pyjs['track']['lineno']=244;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter10_iter = $p['enumerate']($p['getattr'](self, 'image_list'));
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					var $tupleassign5 = $p['__ass_unpack']($iter10_nextval['$nextval'], 2, null);
					i = $tupleassign5[0];
					image = $tupleassign5[1];
					$pyjs['track']['lineno']=245;
					$p['getattr'](self, 'images')['__setitem__'](image, images['__getitem__'](i)['getElement']());
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=246;
				self['start']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['images']]);
			$cls_definition['onImagesLoaded'] = $method;
			$pyjs['track']['lineno']=248;
			$method = $pyjs__bind_method2('start', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':248};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=248;
				$pyjs['track']['lineno']=249;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'initialized')))) {
					$pyjs['track']['lineno']=250;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('initialized', true) : $p['setattr'](self, 'initialized', true); 
					$pyjs['track']['lineno']=251;
					$m['_wnd']['requestAnimationFrame']((typeof run == "undefined"?$m['run']:run));
					$pyjs['track']['lineno']=252;
					self['time']['timeout']($constant_int_0, self);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['start'] = $method;
			$pyjs['track']['lineno']=254;
			$method = $pyjs__bind_method2('stop', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda2,$lambda1;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':254};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=254;
				$pyjs['track']['lineno']=255;
				$pyjs['track']['lineno']=256;
				var 				$lambda1 = function(ts) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

					$pyjs['track']={'module':'pyjsdl.display','lineno':256};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.display';
					$pyjs['track']['lineno']=256;
					$pyjs['track']['lineno']=256;
					$pyjs['track']['lineno']=256;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = [null,null,['ts']];
				$m['run'] = $lambda1;
				$pyjs['track']['lineno']=257;
				var 				$lambda2 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

					$pyjs['track']={'module':'pyjsdl.display','lineno':257};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.display';
					$pyjs['track']['lineno']=257;
					$pyjs['track']['lineno']=257;
					$pyjs['track']['lineno']=257;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = [null,null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('run', $lambda2) : $p['setattr'](self, 'run', $lambda2); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['stop'] = $method;
			$pyjs['track']['lineno']=259;
			$method = $pyjs__bind_method2('_get_rect', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':259};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=259;
				$pyjs['track']['lineno']=260;
				if ($p['bool'](($p['cmp']($p['getattr'](self, '_rect_num'), $p['getattr'](self, '_rect_len')) == -1))) {
					$pyjs['track']['lineno']=261;
					$pyjs['track']['lineno']=261;
					var $pyjs__ret = $p['getattr'](self, '_rect_list')['__getitem__']($p['getattr'](self, '_rect_num'));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=263;
					self['_rect_list']['append']($m['Rect']($constant_int_0, $constant_int_0, $constant_int_0, $constant_int_0));
					$pyjs['track']['lineno']=264;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_rect_len', $p['__op_add']($add1=$p['getattr'](self, '_rect_len'),$add2=$constant_int_1)) : $p['setattr'](self, '_rect_len', $p['__op_add']($add1=$p['getattr'](self, '_rect_len'),$add2=$constant_int_1)); 
					$pyjs['track']['lineno']=265;
					$pyjs['track']['lineno']=265;
					var $pyjs__ret = $p['getattr'](self, '_rect_list')['__getitem__']($p['getattr'](self, '_rect_num'));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_get_rect'] = $method;
			$pyjs['track']['lineno']=267;
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
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':267};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=267;
				$pyjs['track']['lineno']=268;
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_repaint')))) {
					$pyjs['track']['lineno']=269;
					self['callback']['run']();
					$pyjs['track']['lineno']=270;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_repaint', true) : $p['setattr'](self, '_repaint', true); 
				}
				$pyjs['track']['lineno']=271;
				self['time']['timeout']($constant_int_0, self);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['run'] = $method;
			$pyjs['track']['lineno']=23;
			var $bases = new Array($m['Surface'],$m['MouseWheelHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Canvas', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=274;
		$m['run'] = function(timestamp) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $sub5,$sub3,$sub2,$sub1,$sub6,rect,$sub4;
			$pyjs['track']={'module':'pyjsdl.display','lineno':274};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.display';
			$pyjs['track']['lineno']=274;
			$pyjs['track']['lineno']=275;
			$m['_wnd']['requestAnimationFrame']($m['run']);
			$pyjs['track']['lineno']=276;
			if ($p['bool']($p['getattr']($m['_canvas'], '_repaint'))) {
				$pyjs['track']['lineno']=277;
				if ($p['bool'](((($p['cmp']($p['__op_sub']($sub1=timestamp,$sub2=$p['getattr']($m['_canvas'], '_frametime')), $p['getattr']($m['_canvas'], '_framerate')))|1) == 1))) {
					$pyjs['track']['lineno']=278;
					$m['_canvas']['__is_instance__'] && typeof $m['_canvas']['__setattr__'] == 'function' ? $m['_canvas']['__setattr__']('_frametime', timestamp) : $p['setattr']($m['_canvas'], '_frametime', timestamp); 
					$pyjs['track']['lineno']=279;
					while ($p['bool']($p['getattr']($m['_canvas'], '_rect_num'))) {
						$pyjs['track']['lineno']=280;
						rect = $p['getattr']($m['_canvas'], '_rect_list')['__getitem__']($p['__op_sub']($sub3=$p['getattr']($m['_canvas'], '_rect_num'),$sub4=$constant_int_1));
						$pyjs['track']['lineno']=281;
						$m['_ctx']['drawImage']($m['_img'], $p['getattr'](rect, 'x'), $p['getattr'](rect, 'y'), $p['getattr'](rect, 'width'), $p['getattr'](rect, 'height'), $p['getattr'](rect, 'x'), $p['getattr'](rect, 'y'), $p['getattr'](rect, 'width'), $p['getattr'](rect, 'height'));
						$pyjs['track']['lineno']=283;
						$m['_canvas']['__is_instance__'] && typeof $m['_canvas']['__setattr__'] == 'function' ? $m['_canvas']['__setattr__']('_rect_num', $p['__op_sub']($sub5=$p['getattr']($m['_canvas'], '_rect_num'),$sub6=$constant_int_1)) : $p['setattr']($m['_canvas'], '_rect_num', $p['__op_sub']($sub5=$p['getattr']($m['_canvas'], '_rect_num'),$sub6=$constant_int_1)); 
					}
					$pyjs['track']['lineno']=284;
					$m['_canvas']['__is_instance__'] && typeof $m['_canvas']['__setattr__'] == 'function' ? $m['_canvas']['__setattr__']('_repaint', false) : $p['setattr']($m['_canvas'], '_repaint', false); 
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['run']['__name__'] = 'run';

		$m['run']['__bind_type__'] = 0;
		$m['run']['__args__'] = [null,null,['timestamp']];
		$pyjs['track']['lineno']=287;
		$m['Callback'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.display';
			$cls_definition['__md5__'] = '4645b1211e29a081c20f3fdf39388759';
			$pyjs['track']['lineno']=289;
			$cls_definition['__slots__'] = $p['list'](['run']);
			$pyjs['track']['lineno']=291;
			$method = $pyjs__bind_method2('__init__', function(cb) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					cb = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4645b1211e29a081c20f3fdf39388759') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':291};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=291;
				$pyjs['track']['lineno']=292;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('run', cb) : $p['setattr'](self, 'run', cb); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['cb']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=287;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Callback', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=295;
		$m['Display'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.display';
			$cls_definition['__md5__'] = '27b90d1167ec7b264d8d0bcfaddf68aa';
			$pyjs['track']['lineno']=323;
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
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':323};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=323;
				$pyjs['track']['lineno']=329;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_initialized', false) : $p['setattr'](self, '_initialized', false); 
				$pyjs['track']['lineno']=330;
				self['init']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=332;
			$method = $pyjs__bind_method2('init', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':332};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=332;
				$pyjs['track']['lineno']=336;
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_initialized')))) {
					$pyjs['track']['lineno']=337;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('id', '') : $p['setattr'](self, 'id', ''); 
					$pyjs['track']['lineno']=338;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('icon', null) : $p['setattr'](self, 'icon', null); 
					$pyjs['track']['lineno']=339;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_image_list', $p['list']([])) : $p['setattr'](self, '_image_list', $p['list']([])); 
					$pyjs['track']['lineno']=340;
					self['_nonimplemented_methods']();
					$pyjs['track']['lineno']=341;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_initialized', true) : $p['setattr'](self, '_initialized', true); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['init'] = $method;
			$pyjs['track']['lineno']=343;
			$method = $pyjs__bind_method2('set_mode', function(size, buffered) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					buffered = arguments[2];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof buffered != 'undefined') {
						if (buffered !== null && typeof buffered['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = buffered;
							buffered = arguments[3];
						}
					} else 					if (typeof size != 'undefined') {
						if (size !== null && typeof size['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = size;
							size = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				if (typeof buffered == 'undefined') buffered=arguments['callee']['__args__'][4][1];
				var $lambda4,$lambda3,panel;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':343};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=343;
				$pyjs['track']['lineno']=349;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('canvas', $m['Canvas'](size, buffered)) : $p['setattr'](self, 'canvas', $m['Canvas'](size, buffered)); 
				$pyjs['track']['lineno']=350;
				$m['env']['__is_instance__'] && typeof $m['env']['__setattr__'] == 'function' ? $m['env']['__setattr__']('canvas', $p['getattr'](self, 'canvas')) : $p['setattr']($m['env'], 'canvas', $p['getattr'](self, 'canvas')); 
				$pyjs['track']['lineno']=351;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('frame', $m['Window']['getDocumentRoot']()) : $p['setattr'](self, 'frame', $m['Window']['getDocumentRoot']()); 
				$pyjs['track']['lineno']=352;
				$m['env']['__is_instance__'] && typeof $m['env']['__setattr__'] == 'function' ? $m['env']['__setattr__']('frame', $p['getattr'](self, 'frame')) : $p['setattr']($m['env'], 'frame', $p['getattr'](self, 'frame')); 
				$pyjs['track']['lineno']=353;
				panel = $pyjs_kwargs_call(null, $m['FocusPanel'], null, null, [{'Widget':$p['getattr'](self, 'canvas')}]);
				$pyjs['track']['lineno']=354;
				$m['RootPanel']()['add'](panel);
				$pyjs['track']['lineno']=355;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('panel', panel) : $p['setattr'](self, 'panel', panel); 
				$pyjs['track']['lineno']=356;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('vpanel', null) : $p['setattr'](self, 'vpanel', null); 
				$pyjs['track']['lineno']=357;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('textbox', null) : $p['setattr'](self, 'textbox', null); 
				$pyjs['track']['lineno']=358;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('textarea', null) : $p['setattr'](self, 'textarea', null); 
				$pyjs['track']['lineno']=359;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('Textbox', (typeof Textbox == "undefined"?$m['Textbox']:Textbox)) : $p['setattr'](self, 'Textbox', (typeof Textbox == "undefined"?$m['Textbox']:Textbox)); 
				$pyjs['track']['lineno']=360;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('Textarea', (typeof Textarea == "undefined"?$m['Textarea']:Textarea)) : $p['setattr'](self, 'Textarea', (typeof Textarea == "undefined"?$m['Textarea']:Textarea)); 
				$pyjs['track']['lineno']=361;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('surface', $p['getattr']($p['getattr'](self, 'canvas'), 'surface')) : $p['setattr'](self, 'surface', $p['getattr']($p['getattr'](self, 'canvas'), 'surface')); 
				$pyjs['track']['lineno']=362;
				$p['getattr'](self, 'surface')['__is_instance__'] && typeof $p['getattr'](self, 'surface')['__setattr__'] == 'function' ? $p['getattr'](self, 'surface')['__setattr__']('_display', self) : $p['setattr']($p['getattr'](self, 'surface'), '_display', self); 
				$pyjs['track']['lineno']=363;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_surface_rect', self['surface']['get_rect']()) : $p['setattr'](self, '_surface_rect', self['surface']['get_rect']()); 
				$pyjs['track']['lineno']=364;
				if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'canvas'), '_bufferedimage')))) {
					$pyjs['track']['lineno']=365;
					var 					$lambda3 = function() {
						if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

						$pyjs['track']={'module':'pyjsdl.display','lineno':365};$pyjs['trackstack']['push']($pyjs['track']);
						$pyjs['track']['module']='pyjsdl.display';
						$pyjs['track']['lineno']=365;
						$pyjs['track']['lineno']=365;
						$pyjs['track']['lineno']=365;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					};
					$lambda3['__name__'] = '$lambda3';

					$lambda3['__bind_type__'] = 0;
					$lambda3['__args__'] = [null,null];
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('flip', $lambda3) : $p['setattr'](self, 'flip', $lambda3); 
					$pyjs['track']['lineno']=366;
					var 					$lambda4 = function() {
						if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
						var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


						$pyjs['track']={'module':'pyjsdl.display','lineno':366};$pyjs['trackstack']['push']($pyjs['track']);
						$pyjs['track']['module']='pyjsdl.display';
						$pyjs['track']['lineno']=366;
						$pyjs['track']['lineno']=366;
						$pyjs['track']['lineno']=366;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					};
					$lambda4['__name__'] = '$lambda4';

					$lambda4['__bind_type__'] = 0;
					$lambda4['__args__'] = ['arg',null];
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('update', $lambda4) : $p['setattr'](self, 'update', $lambda4); 
				}
				$pyjs['track']['lineno']=367;
				$pyjs['track']['lineno']=367;
				var $pyjs__ret = $p['getattr'](self, 'surface');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['args',['kwargs'],['self'],['size'],['buffered', true]]);
			$cls_definition['set_mode'] = $method;
			$pyjs['track']['lineno']=369;
			$method = $pyjs__bind_method2('setup', function(callback, images) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					callback = arguments[1];
					images = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof images == 'undefined') images=arguments['callee']['__args__'][4][1];
				var image_list;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':369};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=369;
				$pyjs['track']['lineno']=376;
				self['canvas']['set_callback'](callback);
				$pyjs['track']['lineno']=377;
				image_list = $p['list']([]);
				$pyjs['track']['lineno']=378;
				if ($p['bool']($p['getattr'](self, '_image_list'))) {
					$pyjs['track']['lineno']=379;
					image_list['extend']($p['getattr'](self, '_image_list'));
					$pyjs['track']['lineno']=380;
					$p['__setslice']($p['getattr'](self, '_image_list'), 0, null, $p['list']([]));
				}
				$pyjs['track']['lineno']=381;
				if ($p['bool'](images)) {
					$pyjs['track']['lineno']=382;
					image_list['extend'](images);
				}
				$pyjs['track']['lineno']=383;
				self['canvas']['load_images'](image_list);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['callback'],['images', null]]);
			$cls_definition['setup'] = $method;
			$pyjs['track']['lineno']=385;
			$method = $pyjs__bind_method2('set_callback', function(callback) {
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
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':385};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=385;
				$pyjs['track']['lineno']=391;
				if ($p['bool']($p['getattr']($p['getattr'](self, 'canvas'), 'initialized'))) {
					$pyjs['track']['lineno']=392;
					self['canvas']['set_callback'](callback);
				}
				else {
					$pyjs['track']['lineno']=394;
					self['setup'](callback);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['callback']]);
			$cls_definition['set_callback'] = $method;
			$pyjs['track']['lineno']=396;
			$method = $pyjs__bind_method2('setup_images', function(images) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					images = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':396};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=396;
				$pyjs['track']['lineno']=402;
				if ($p['bool']($p['isinstance'](images, $p['str']))) {
					$pyjs['track']['lineno']=403;
					images = $p['list']([images]);
				}
				$pyjs['track']['lineno']=404;
				self['_image_list']['extend'](images);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['images']]);
			$cls_definition['setup_images'] = $method;
			$pyjs['track']['lineno']=406;
			$method = $pyjs__bind_method2('textbox_init', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':406};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=406;
				$pyjs['track']['lineno']=410;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'textbox')))) {
					$pyjs['track']['lineno']=411;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('textbox', (typeof Textbox == "undefined"?$m['Textbox']:Textbox)()) : $p['setattr'](self, 'textbox', (typeof Textbox == "undefined"?$m['Textbox']:Textbox)()); 
					$pyjs['track']['lineno']=412;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('textarea', (typeof Textarea == "undefined"?$m['Textarea']:Textarea)()) : $p['setattr'](self, 'textarea', (typeof Textarea == "undefined"?$m['Textarea']:Textarea)()); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['textbox_init'] = $method;
			$pyjs['track']['lineno']=414;
			$method = $pyjs__bind_method2('is_canvas', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':414};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=414;
				$pyjs['track']['lineno']=418;
				$pyjs['track']['lineno']=418;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'canvas'), '_isCanvas');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['is_canvas'] = $method;
			$pyjs['track']['lineno']=420;
			$method = $pyjs__bind_method2('get_surface', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':420};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=420;
				$pyjs['track']['lineno']=424;
				$pyjs['track']['lineno']=424;
				var $pyjs__ret = $p['getattr'](self, 'surface');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_surface'] = $method;
			$pyjs['track']['lineno']=426;
			$method = $pyjs__bind_method2('get_canvas', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':426};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=426;
				$pyjs['track']['lineno']=430;
				$pyjs['track']['lineno']=430;
				var $pyjs__ret = $p['getattr'](self, 'canvas');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_canvas'] = $method;
			$pyjs['track']['lineno']=432;
			$method = $pyjs__bind_method2('get_panel', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':432};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=432;
				$pyjs['track']['lineno']=436;
				$pyjs['track']['lineno']=436;
				var $pyjs__ret = $p['getattr'](self, 'panel');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_panel'] = $method;
			$pyjs['track']['lineno']=438;
			$method = $pyjs__bind_method2('get_vpanel', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':438};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=438;
				$pyjs['track']['lineno']=442;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'vpanel')))) {
					$pyjs['track']['lineno']=443;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('vpanel', $m['VerticalPanel']()) : $p['setattr'](self, 'vpanel', $m['VerticalPanel']()); 
					$pyjs['track']['lineno']=444;
					$m['RootPanel']()['add']($p['getattr'](self, 'vpanel'));
				}
				$pyjs['track']['lineno']=445;
				$pyjs['track']['lineno']=445;
				var $pyjs__ret = $p['getattr'](self, 'vpanel');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_vpanel'] = $method;
			$pyjs['track']['lineno']=447;
			$method = $pyjs__bind_method2('getAbsoluteLeft', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':447};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=447;
				$pyjs['track']['lineno']=451;
				$pyjs['track']['lineno']=451;
				var $pyjs__ret = self['canvas']['getAbsoluteLeft']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAbsoluteLeft'] = $method;
			$pyjs['track']['lineno']=453;
			$method = $pyjs__bind_method2('getAbsoluteTop', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':453};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=453;
				$pyjs['track']['lineno']=457;
				$pyjs['track']['lineno']=457;
				var $pyjs__ret = self['canvas']['getAbsoluteTop']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAbsoluteTop'] = $method;
			$pyjs['track']['lineno']=459;
			$method = $pyjs__bind_method2('getScrollLeft', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':459};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=459;
				$pyjs['track']['lineno']=463;
				$pyjs['track']['lineno']=463;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'frame'), 'scrollLeft');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getScrollLeft'] = $method;
			$pyjs['track']['lineno']=465;
			$method = $pyjs__bind_method2('getScrollTop', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':465};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=465;
				$pyjs['track']['lineno']=469;
				$pyjs['track']['lineno']=469;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'frame'), 'scrollTop');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getScrollTop'] = $method;
			$pyjs['track']['lineno']=471;
			$method = $pyjs__bind_method2('quit', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':471};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=471;
				$pyjs['track']['lineno']=475;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_initialized', false) : $p['setattr'](self, '_initialized', false); 
				$pyjs['track']['lineno']=476;
				$pyjs['track']['lineno']=476;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['quit'] = $method;
			$pyjs['track']['lineno']=478;
			$method = $pyjs__bind_method2('get_init', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':478};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=478;
				$pyjs['track']['lineno']=482;
				$pyjs['track']['lineno']=482;
				var $pyjs__ret = $p['getattr'](self, '_initialized');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_init'] = $method;
			$pyjs['track']['lineno']=484;
			$method = $pyjs__bind_method2('get_active', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':484};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=484;
				$pyjs['track']['lineno']=488;
				if ($p['bool']($p['hasattr'](self, 'canvas'))) {
					$pyjs['track']['lineno']=489;
					$pyjs['track']['lineno']=489;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=491;
					$pyjs['track']['lineno']=491;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_active'] = $method;
			$pyjs['track']['lineno']=493;
			$method = $pyjs__bind_method2('set_caption', function(text) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':493};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=493;
				$pyjs['track']['lineno']=498;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('id', text) : $p['setattr'](self, 'id', text); 
				$pyjs['track']['lineno']=499;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=500;
					self['canvas']['setID']($p['getattr'](self, 'id'));
				} catch($pyjs_try_err) {
					$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
					$pyjs['__active_exception_stack__'] = null;
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.display';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=502;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=503;
				$pyjs['track']['lineno']=503;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['set_caption'] = $method;
			$pyjs['track']['lineno']=505;
			$method = $pyjs__bind_method2('get_caption', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':505};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=505;
				$pyjs['track']['lineno']=509;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=510;
					$pyjs['track']['lineno']=510;
					var $pyjs__ret = self['canvas']['getID']();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				} catch($pyjs_try_err) {
					$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
					$pyjs['__active_exception_stack__'] = null;
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.display';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=512;
						$pyjs['track']['lineno']=512;
						var $pyjs__ret = $p['getattr'](self, 'id');
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_caption'] = $method;
			$pyjs['track']['lineno']=514;
			$method = $pyjs__bind_method2('clear', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':514};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=514;
				$pyjs['track']['lineno']=518;
				self['surface']['beginPath']();
				$pyjs['track']['lineno']=519;
				self['surface']['setFillStyle']($m['Color']($constant_int_0, $constant_int_0, $constant_int_0));
				$pyjs['track']['lineno']=520;
				self['surface']['fillRect']($constant_int_0, $constant_int_0, $p['getattr']($p['getattr'](self, 'surface'), 'width'), $p['getattr']($p['getattr'](self, 'surface'), 'height'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clear'] = $method;
			$pyjs['track']['lineno']=522;
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
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda5;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':522};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=522;
				$pyjs['track']['lineno']=526;
				var 				$lambda5 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.display','lineno':526};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.display';
					$pyjs['track']['lineno']=526;
					$pyjs['track']['lineno']=526;
					$pyjs['track']['lineno']=526;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda5['__name__'] = '$lambda5';

				$lambda5['__bind_type__'] = 0;
				$lambda5['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set_icon', $lambda5) : $p['setattr'](self, 'set_icon', $lambda5); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_nonimplemented_methods'] = $method;
			$pyjs['track']['lineno']=528;
			$method = $pyjs__bind_method2('flip', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':528};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=528;
				$pyjs['track']['lineno']=532;
				self['canvas']['impl']['canvasContext']['drawImage']($p['getattr']($p['getattr'](self, 'surface'), 'canvas'), $constant_int_0, $constant_int_0);
				$pyjs['track']['lineno']=533;
				$pyjs['track']['lineno']=533;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['flip'] = $method;
			$pyjs['track']['lineno']=535;
			$method = $pyjs__bind_method2('update', function(rect_list) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					rect_list = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27b90d1167ec7b264d8d0bcfaddf68aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof rect_list == 'undefined') rect_list=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':535};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=535;
				$pyjs['track']['lineno']=540;
				if ($p['bool']($p['hasattr'](rect_list, 'append'))) {
					$pyjs['track']['lineno']=541;
					(typeof _update == "undefined"?$m['_update']:_update)($p['getattr'](self, 'canvas'), rect_list);
				}
				else if ($p['bool'](rect_list)) {
					$pyjs['track']['lineno']=543;
					(typeof _update == "undefined"?$m['_update']:_update)($p['getattr'](self, 'canvas'), $p['list']([rect_list]));
				}
				else {
					$pyjs['track']['lineno']=545;
					self['flip']();
				}
				$pyjs['track']['lineno']=546;
				$pyjs['track']['lineno']=546;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rect_list', null]]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=295;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Display', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=549;
		$m['_update'] = function(canvas, rect_list) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $and3,repaint_rect,$iter11_iter,$iter11_type,$and4,$and5,$and6,$add3,$add5,$add6,$add4,$iter11_array,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1,rect;
			$pyjs['track']={'module':'pyjsdl.display','lineno':549};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.display';
			$pyjs['track']['lineno']=549;
			$pyjs['track']['lineno']=550;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter11_iter = rect_list;
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
				rect = $iter11_nextval['$nextval'];
				$pyjs['track']['lineno']=551;
				if ($p['bool']($p['hasattr'](rect, 'width'))) {
					$pyjs['track']['lineno']=552;
					if ($p['bool'](($p['bool']($and3=($p['cmp']($p['getattr'](rect, 'width'), $constant_int_0) == 1))?($p['cmp']($p['getattr'](rect, 'height'), $constant_int_0) == 1):$and3))) {
						$pyjs['track']['lineno']=553;
						repaint_rect = canvas['_get_rect']();
						$pyjs['track']['lineno']=554;
						repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('x', $p['getattr'](rect, 'x')) : $p['setattr'](repaint_rect, 'x', $p['getattr'](rect, 'x')); 
						$pyjs['track']['lineno']=555;
						repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('y', $p['getattr'](rect, 'y')) : $p['setattr'](repaint_rect, 'y', $p['getattr'](rect, 'y')); 
						$pyjs['track']['lineno']=556;
						repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('width', $p['getattr'](rect, 'width')) : $p['setattr'](repaint_rect, 'width', $p['getattr'](rect, 'width')); 
						$pyjs['track']['lineno']=557;
						repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('height', $p['getattr'](rect, 'height')) : $p['setattr'](repaint_rect, 'height', $p['getattr'](rect, 'height')); 
						$pyjs['track']['lineno']=558;
						canvas['__is_instance__'] && typeof canvas['__setattr__'] == 'function' ? canvas['__setattr__']('_rect_num', $p['__op_add']($add3=$p['getattr'](canvas, '_rect_num'),$add4=$constant_int_1)) : $p['setattr'](canvas, '_rect_num', $p['__op_add']($add3=$p['getattr'](canvas, '_rect_num'),$add4=$constant_int_1)); 
					}
				}
				else if ($p['bool'](rect)) {
					$pyjs['track']['lineno']=560;
					if ($p['bool'](($p['bool']($and5=($p['cmp'](rect['__getitem__']($constant_int_2), $constant_int_0) == 1))?($p['cmp'](rect['__getitem__']($constant_int_3), $constant_int_0) == 1):$and5))) {
						$pyjs['track']['lineno']=561;
						repaint_rect = canvas['_get_rect']();
						$pyjs['track']['lineno']=562;
						repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('x', rect['__getitem__']($constant_int_0)) : $p['setattr'](repaint_rect, 'x', rect['__getitem__']($constant_int_0)); 
						$pyjs['track']['lineno']=563;
						repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('y', rect['__getitem__']($constant_int_1)) : $p['setattr'](repaint_rect, 'y', rect['__getitem__']($constant_int_1)); 
						$pyjs['track']['lineno']=564;
						repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('width', rect['__getitem__']($constant_int_2)) : $p['setattr'](repaint_rect, 'width', rect['__getitem__']($constant_int_2)); 
						$pyjs['track']['lineno']=565;
						repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('height', rect['__getitem__']($constant_int_3)) : $p['setattr'](repaint_rect, 'height', rect['__getitem__']($constant_int_3)); 
						$pyjs['track']['lineno']=566;
						canvas['__is_instance__'] && typeof canvas['__setattr__'] == 'function' ? canvas['__setattr__']('_rect_num', $p['__op_add']($add5=$p['getattr'](canvas, '_rect_num'),$add6=$constant_int_1)) : $p['setattr'](canvas, '_rect_num', $p['__op_add']($add5=$p['getattr'](canvas, '_rect_num'),$add6=$constant_int_1)); 
					}
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.display';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['_update']['__name__'] = '_update';

		$m['_update']['__bind_type__'] = 0;
		$m['_update']['__args__'] = [null,null,['canvas'],['rect_list']];
		$pyjs['track']['lineno']=569;
		$m['Textbox'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.display';
			$cls_definition['__md5__'] = '5027db410f1e2810c15a4df92c56ca96';
			$pyjs['track']['lineno']=576;
			$method = $pyjs__bind_method2('__init__', function(size, panel) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					panel = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5027db410f1e2810c15a4df92c56ca96') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
				if (typeof panel == 'undefined') panel=arguments['callee']['__args__'][4][1];
				var $add9,$pyjs_try_err,$sub8,$add10,$add7,$add8,$sub7;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':576};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=576;
				$pyjs['track']['lineno']=577;
				$m['TextBox']['__init__'](self);
				$pyjs['track']['lineno']=578;
				if ($p['bool'](!$p['bool'](size))) {
					$pyjs['track']['lineno']=579;
					var $tupleassign6 = $p['__ass_unpack']($p['tuple']([$p['__op_sub']($sub7=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'width'),$sub8=$constant_int_5), $constant_int_20]), 2, null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign6[0]) : $p['setattr'](self, 'width', $tupleassign6[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign6[1]) : $p['setattr'](self, 'height', $tupleassign6[1]); 
				}
				else {
					$pyjs['track']['lineno']=581;
					var $tupleassign7 = $p['__ass_unpack']($p['tuple']([$p['int'](size['__getitem__']($constant_int_0)), $p['int'](size['__getitem__']($constant_int_1))]), 2, null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign7[0]) : $p['setattr'](self, 'width', $tupleassign7[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign7[1]) : $p['setattr'](self, 'height', $tupleassign7[1]); 
				}
				$pyjs['track']['lineno']=582;
				self['setSize']($p['__op_add']($add7=$p['str']($p['getattr'](self, 'width')),$add8='px'), $p['__op_add']($add9=$p['str']($p['getattr'](self, 'height')),$add10='px'));
				$pyjs['track']['lineno']=583;
				self['setVisible'](false);
				$pyjs['track']['lineno']=584;
				if ($p['bool'](panel)) {
					$pyjs['track']['lineno']=585;
					panel['add'](self);
				}
				else {
					$pyjs['track']['lineno']=587;
					var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
					try {
						$pyjs['track']['lineno']=588;
						$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
					} catch($pyjs_try_err) {
						$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
						$pyjs['__active_exception_stack__'] = null;
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.display';
						if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
							$pyjs['track']['lineno']=590;
							$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['__is_instance__'] && typeof $p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['__setattr__'] == 'function' ? $p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['__setattr__']('vpanel', $m['VerticalPanel']()) : $p['setattr']($p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display'), 'vpanel', $m['VerticalPanel']()); 
							$pyjs['track']['lineno']=591;
							$m['RootPanel']()['add']($p['getattr']($p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display'), 'vpanel'));
							$pyjs['track']['lineno']=592;
							$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['size', null],['panel', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=594;
			$method = $pyjs__bind_method2('resize', function(width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5027db410f1e2810c15a4df92c56ca96') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
				if (typeof height == 'undefined') height=arguments['callee']['__args__'][4][1];
				var $or4,$or3,$sub10,$add14,$sub9,$add11,$add12,$add13;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':594};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=594;
				$pyjs['track']['lineno']=595;
				if ($p['bool'](!$p['bool'](($p['bool']($or3=width)?$or3:height)))) {
					$pyjs['track']['lineno']=596;
					var $tupleassign8 = $p['__ass_unpack']($p['tuple']([$p['__op_sub']($sub9=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'width'),$sub10=$constant_int_5), $constant_int_20]), 2, null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign8[0]) : $p['setattr'](self, 'width', $tupleassign8[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign8[1]) : $p['setattr'](self, 'height', $tupleassign8[1]); 
				}
				else {
					$pyjs['track']['lineno']=598;
					if ($p['bool'](width)) {
						$pyjs['track']['lineno']=599;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $p['int'](width)) : $p['setattr'](self, 'width', $p['int'](width)); 
					}
					$pyjs['track']['lineno']=600;
					if ($p['bool'](height)) {
						$pyjs['track']['lineno']=601;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $p['int'](height)) : $p['setattr'](self, 'height', $p['int'](height)); 
					}
				}
				$pyjs['track']['lineno']=602;
				self['setSize']($p['__op_add']($add11=$p['str']($p['getattr'](self, 'width')),$add12='px'), $p['__op_add']($add13=$p['str']($p['getattr'](self, 'height')),$add14='px'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width', null],['height', null]]);
			$cls_definition['resize'] = $method;
			$pyjs['track']['lineno']=604;
			$method = $pyjs__bind_method2('toggle', function(visible) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					visible = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5027db410f1e2810c15a4df92c56ca96') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof visible == 'undefined') visible=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':604};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=604;
				$pyjs['track']['lineno']=605;
				if ($p['bool'](visible)) {
					$pyjs['track']['lineno']=606;
					self['setVisible'](visible);
				}
				else {
					$pyjs['track']['lineno']=608;
					self['setVisible'](!$p['bool'](self['getVisible']()));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['visible', null]]);
			$cls_definition['toggle'] = $method;
			$pyjs['track']['lineno']=569;
			var $bases = new Array($m['TextBox']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Textbox', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=611;
		$m['Textarea'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.display';
			$cls_definition['__md5__'] = 'cb04c7a248e52671fb3da89d86af32f6';
			$pyjs['track']['lineno']=618;
			$method = $pyjs__bind_method2('__init__', function(size, panel) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					panel = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cb04c7a248e52671fb3da89d86af32f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
				if (typeof panel == 'undefined') panel=arguments['callee']['__args__'][4][1];
				var $add15,$div14,$sub12,$pyjs_try_err,$sub14,$div13,$sub13,$add16,$add17,$add18,$sub11;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':618};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=618;
				$pyjs['track']['lineno']=619;
				$m['TextArea']['__init__'](self);
				$pyjs['track']['lineno']=620;
				if ($p['bool'](!$p['bool'](size))) {
					$pyjs['track']['lineno']=621;
					var $tupleassign9 = $p['__ass_unpack']($p['tuple']([$p['__op_sub']($sub11=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'width'),$sub12=$constant_int_5), $p['__op_sub']($sub13=$p['int']((typeof ($div13=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'height'))==typeof ($div14=$constant_int_5) && typeof $div13=='number' && $div14 !== 0?
						$div13/$div14:
						$p['op_div']($div13,$div14))),$sub14=$constant_int_5)]), 2, null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign9[0]) : $p['setattr'](self, 'width', $tupleassign9[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign9[1]) : $p['setattr'](self, 'height', $tupleassign9[1]); 
				}
				else {
					$pyjs['track']['lineno']=623;
					var $tupleassign10 = $p['__ass_unpack']($p['tuple']([$p['int'](size['__getitem__']($constant_int_0)), $p['int'](size['__getitem__']($constant_int_1))]), 2, null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign10[0]) : $p['setattr'](self, 'width', $tupleassign10[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign10[1]) : $p['setattr'](self, 'height', $tupleassign10[1]); 
				}
				$pyjs['track']['lineno']=624;
				self['setSize']($p['__op_add']($add15=$p['str']($p['getattr'](self, 'width')),$add16='px'), $p['__op_add']($add17=$p['str']($p['getattr'](self, 'height')),$add18='px'));
				$pyjs['track']['lineno']=625;
				self['setStyleAttribute']($p['dict']([['resize', 'vertical']]));
				$pyjs['track']['lineno']=626;
				self['setVisible'](false);
				$pyjs['track']['lineno']=627;
				if ($p['bool'](panel)) {
					$pyjs['track']['lineno']=628;
					panel['add'](self);
				}
				else {
					$pyjs['track']['lineno']=630;
					var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
					try {
						$pyjs['track']['lineno']=631;
						$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
					} catch($pyjs_try_err) {
						$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
						$pyjs['__active_exception_stack__'] = null;
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.display';
						if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
							$pyjs['track']['lineno']=633;
							$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['__is_instance__'] && typeof $p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['__setattr__'] == 'function' ? $p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['__setattr__']('vpanel', $m['VerticalPanel']()) : $p['setattr']($p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display'), 'vpanel', $m['VerticalPanel']()); 
							$pyjs['track']['lineno']=634;
							$m['RootPanel']()['add']($p['getattr']($p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display'), 'vpanel'));
							$pyjs['track']['lineno']=635;
							$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['size', null],['panel', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=637;
			$method = $pyjs__bind_method2('resize', function(width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cb04c7a248e52671fb3da89d86af32f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
				if (typeof height == 'undefined') height=arguments['callee']['__args__'][4][1];
				var $or5,$or6,$add21,$div15,$add22,$sub17,$sub16,$sub15,$sub18,$add19,$add20,$div16;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':637};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=637;
				$pyjs['track']['lineno']=638;
				if ($p['bool'](!$p['bool'](($p['bool']($or5=width)?$or5:height)))) {
					$pyjs['track']['lineno']=639;
					var $tupleassign11 = $p['__ass_unpack']($p['tuple']([$p['__op_sub']($sub15=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'width'),$sub16=$constant_int_5), $p['__op_sub']($sub17=$p['int']((typeof ($div15=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'height'))==typeof ($div16=$constant_int_5) && typeof $div15=='number' && $div16 !== 0?
						$div15/$div16:
						$p['op_div']($div15,$div16))),$sub18=$constant_int_5)]), 2, null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign11[0]) : $p['setattr'](self, 'width', $tupleassign11[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign11[1]) : $p['setattr'](self, 'height', $tupleassign11[1]); 
				}
				else {
					$pyjs['track']['lineno']=641;
					if ($p['bool'](width)) {
						$pyjs['track']['lineno']=642;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $p['int'](width)) : $p['setattr'](self, 'width', $p['int'](width)); 
					}
					$pyjs['track']['lineno']=643;
					if ($p['bool'](height)) {
						$pyjs['track']['lineno']=644;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $p['int'](height)) : $p['setattr'](self, 'height', $p['int'](height)); 
					}
				}
				$pyjs['track']['lineno']=645;
				self['setSize']($p['__op_add']($add19=$p['str']($p['getattr'](self, 'width')),$add20='px'), $p['__op_add']($add21=$p['str']($p['getattr'](self, 'height')),$add22='px'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width', null],['height', null]]);
			$cls_definition['resize'] = $method;
			$pyjs['track']['lineno']=647;
			$method = $pyjs__bind_method2('toggle', function(visible) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					visible = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cb04c7a248e52671fb3da89d86af32f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof visible == 'undefined') visible=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':647};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=647;
				$pyjs['track']['lineno']=648;
				if ($p['bool'](visible)) {
					$pyjs['track']['lineno']=649;
					self['setVisible'](visible);
				}
				else {
					$pyjs['track']['lineno']=651;
					self['setVisible'](!$p['bool'](self['getVisible']()));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['visible', null]]);
			$cls_definition['toggle'] = $method;
			$pyjs['track']['lineno']=611;
			var $bases = new Array($m['TextArea']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Textarea', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.display */


/* end module: pyjsdl.display */


/*
PYJS_DEPS: ['base64', 'pyjsdl.surface.Surface', 'pyjsdl', 'pyjsdl.surface', 'pyjsdl.rect.Rect', 'pyjsdl.rect', 'pyjsdl.time.Time', 'pyjsdl.time', 'pyjsdl.color.Color', 'pyjsdl.color', 'pyjsdl.env', 'pyjsdl.event', 'pyjsdl.pyjsobj.DOM', 'pyjsdl.pyjsobj', 'pyjsdl.pyjsobj.Window', 'pyjsdl.pyjsobj.RootPanel', 'pyjsdl.pyjsobj.FocusPanel', 'pyjsdl.pyjsobj.VerticalPanel', 'pyjsdl.pyjsobj.loadImages', 'pyjsdl.pyjsobj.TextBox', 'pyjsdl.pyjsobj.TextArea', 'pyjsdl.pyjsobj.MouseWheelHandler', 'pyjsdl.pyjsobj.eventGetMouseWheelVelocityY', 'pyjsdl.pyjsobj.Event', 'pyjsdl.pyjsobj.requestAnimationFrameInit']
*/
