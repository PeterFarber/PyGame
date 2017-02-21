/* start module: pyjsdl.surface */
$pyjs['loaded_modules']['pyjsdl.surface'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.surface']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.surface'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.surface'];
	$m['__repr__'] = function() { return '<module: pyjsdl.surface>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.surface';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['surface'] = $pyjs['loaded_modules']['pyjsdl.surface'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.surface.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.surface.py, line 4:\n    from pyjsdl.pyjsobj import HTML5Canvas';
		$m.__track_lines__[5] = 'pyjsdl.surface.py, line 5:\n    from pyjsdl.rect import Rect, rectPool';
		$m.__track_lines__[6] = 'pyjsdl.surface.py, line 6:\n    from pyjsdl.color import Color';
		$m.__track_lines__[7] = 'pyjsdl.surface.py, line 7:\n    from __pyjamas__ import JS';
		$m.__track_lines__[9] = "pyjsdl.surface.py, line 9:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[12] = 'pyjsdl.surface.py, line 12:\n    class Surface(HTML5Canvas):';
		$m.__track_lines__[35] = 'pyjsdl.surface.py, line 35:\n    def __init__(self, size, *args, **kwargs):';
		$m.__track_lines__[42] = 'pyjsdl.surface.py, line 42:\n    self.width = int(size[0])';
		$m.__track_lines__[43] = 'pyjsdl.surface.py, line 43:\n    self.height = int(size[1])';
		$m.__track_lines__[44] = 'pyjsdl.surface.py, line 44:\n    HTML5Canvas.__init__(self, self.width, self.height)';
		$m.__track_lines__[45] = 'pyjsdl.surface.py, line 45:\n    HTML5Canvas.resize(self, self.width, self.height)';
		$m.__track_lines__[46] = 'pyjsdl.surface.py, line 46:\n    self._display = None    #display surface';
		$m.__track_lines__[47] = 'pyjsdl.surface.py, line 47:\n    self._super_surface = None';
		$m.__track_lines__[48] = 'pyjsdl.surface.py, line 48:\n    self._offset = (0,0)';
		$m.__track_lines__[49] = 'pyjsdl.surface.py, line 49:\n    self._colorkey = None';
		$m.__track_lines__[50] = 'pyjsdl.surface.py, line 50:\n    self._nonimplemented_methods()';
		$m.__track_lines__[52] = 'pyjsdl.surface.py, line 52:\n    def __repr__(self):';
		$m.__track_lines__[56] = 'pyjsdl.surface.py, line 56:\n    return "%s(%d,%d)" % (self.__class__, self.width, self.height)';
		$m.__track_lines__[58] = 'pyjsdl.surface.py, line 58:\n    def get_size(self):';
		$m.__track_lines__[62] = 'pyjsdl.surface.py, line 62:\n    return (self.width, self.height)';
		$m.__track_lines__[64] = 'pyjsdl.surface.py, line 64:\n    def get_width(self):';
		$m.__track_lines__[68] = 'pyjsdl.surface.py, line 68:\n    return self.width';
		$m.__track_lines__[70] = 'pyjsdl.surface.py, line 70:\n    def get_height(self):';
		$m.__track_lines__[74] = 'pyjsdl.surface.py, line 74:\n    return self.height';
		$m.__track_lines__[76] = 'pyjsdl.surface.py, line 76:\n    def resize(self, width, height):';
		$m.__track_lines__[77] = 'pyjsdl.surface.py, line 77:\n    self.width = int(width)';
		$m.__track_lines__[78] = 'pyjsdl.surface.py, line 78:\n    self.height = int(height)';
		$m.__track_lines__[79] = 'pyjsdl.surface.py, line 79:\n    HTML5Canvas.resize(self, self.width, self.height)';
		$m.__track_lines__[81] = 'pyjsdl.surface.py, line 81:\n    def get_rect(self, **attr):';
		$m.__track_lines__[86] = 'pyjsdl.surface.py, line 86:\n    rect = Rect(0, 0, self.width, self.height)';
		$m.__track_lines__[87] = 'pyjsdl.surface.py, line 87:\n    for key in attr:';
		$m.__track_lines__[88] = 'pyjsdl.surface.py, line 88:\n    rect.__setattr__(key,attr[key])';
		$m.__track_lines__[89] = 'pyjsdl.surface.py, line 89:\n    return rect';
		$m.__track_lines__[91] = 'pyjsdl.surface.py, line 91:\n    def copy(self):';
		$m.__track_lines__[95] = 'pyjsdl.surface.py, line 95:\n    surface = Surface((self.width,self.height))';
		$m.__track_lines__[96] = 'pyjsdl.surface.py, line 96:\n    surface.drawImage(self.canvas, 0, 0)';
		$m.__track_lines__[97] = 'pyjsdl.surface.py, line 97:\n    return surface';
		$m.__track_lines__[99] = 'pyjsdl.surface.py, line 99:\n    def subsurface(self, rect):';
		$m.__track_lines__[105] = "pyjsdl.surface.py, line 105:\n    if rect in ('t', 'f'):";
		$m.__track_lines__[106] = 'pyjsdl.surface.py, line 106:\n    if not self._super_surface:';
		$m.__track_lines__[107] = 'pyjsdl.surface.py, line 107:\n    return';
		$m.__track_lines__[108] = "pyjsdl.surface.py, line 108:\n    if rect == 't':";
		$m.__track_lines__[109] = 'pyjsdl.surface.py, line 109:\n    self.drawImage(self._super_surface.canvas, self._offset[0], self._offset[1], self.width, self.height, 0, 0, self.width, self.height)';
		$m.__track_lines__[111] = 'pyjsdl.surface.py, line 111:\n    self._super_surface.drawImage(self.canvas, self._offset[0], self._offset[1])';
		$m.__track_lines__[112] = 'pyjsdl.surface.py, line 112:\n    return';
		$m.__track_lines__[113] = "pyjsdl.surface.py, line 113:\n    if hasattr(rect, 'width'):";
		$m.__track_lines__[114] = 'pyjsdl.surface.py, line 114:\n    _rect = rect';
		$m.__track_lines__[116] = 'pyjsdl.surface.py, line 116:\n    _rect = Rect(rect)';
		$m.__track_lines__[117] = 'pyjsdl.surface.py, line 117:\n    surf_rect = self.get_rect()';
		$m.__track_lines__[118] = 'pyjsdl.surface.py, line 118:\n    if not surf_rect.contains(_rect):';
		$m.__track_lines__[119] = "pyjsdl.surface.py, line 119:\n    raise ValueError('subsurface outside surface area')";
		$m.__track_lines__[120] = 'pyjsdl.surface.py, line 120:\n    surface = self.getSubimage(_rect.x, _rect.y, _rect.width, _rect.height)';
		$m.__track_lines__[121] = 'pyjsdl.surface.py, line 121:\n    surface._super_surface = self';
		$m.__track_lines__[122] = 'pyjsdl.surface.py, line 122:\n    surface._offset = (_rect.x,_rect.y)';
		$m.__track_lines__[123] = 'pyjsdl.surface.py, line 123:\n    surface._colorkey = self._colorkey';
		$m.__track_lines__[124] = 'pyjsdl.surface.py, line 124:\n    return surface';
		$m.__track_lines__[126] = 'pyjsdl.surface.py, line 126:\n    def getSubimage(self, x, y, width, height):';
		$m.__track_lines__[131] = 'pyjsdl.surface.py, line 131:\n    surface = Surface((width,height))';
		$m.__track_lines__[132] = 'pyjsdl.surface.py, line 132:\n    surface.drawImage(self.canvas, x, y, width, height, 0, 0, width, height)';
		$m.__track_lines__[133] = 'pyjsdl.surface.py, line 133:\n    return surface';
		$m.__track_lines__[135] = 'pyjsdl.surface.py, line 135:\n    def blit(self, surface, position, area=None):';
		$m.__track_lines__[140] = 'pyjsdl.surface.py, line 140:\n    if not area:';
		$m.__track_lines__[141] = 'pyjsdl.surface.py, line 141:\n    rect = rectPool.get(position[0],position[1],surface.width,surface.height)';
		$m.__track_lines__[142] = 'pyjsdl.surface.py, line 142:\n    self.impl.canvasContext.drawImage(surface.canvas, rect.x, rect.y)';
		$m.__track_lines__[144] = 'pyjsdl.surface.py, line 144:\n    rect = rectPool.get(position[0],position[1],area[2], area[3])';
		$m.__track_lines__[145] = 'pyjsdl.surface.py, line 145:\n    self.impl.canvasContext.drawImage(surface.canvas, area[0], area[1], area[2], area[3], rect.x, rect.y, area[2], area[3])';
		$m.__track_lines__[146] = 'pyjsdl.surface.py, line 146:\n    if self._display:';
		$m.__track_lines__[147] = 'pyjsdl.surface.py, line 147:\n    surface_rect = self._display._surface_rect';
		$m.__track_lines__[149] = 'pyjsdl.surface.py, line 149:\n    surface_rect = self.get_rect()';
		$m.__track_lines__[150] = 'pyjsdl.surface.py, line 150:\n    changed_rect = surface_rect.clip(rect)';
		$m.__track_lines__[151] = 'pyjsdl.surface.py, line 151:\n    rectPool.append(rect)';
		$m.__track_lines__[152] = 'pyjsdl.surface.py, line 152:\n    return changed_rect';
		$m.__track_lines__[154] = 'pyjsdl.surface.py, line 154:\n    def _blits(self, surfaces):';
		$m.__track_lines__[155] = 'pyjsdl.surface.py, line 155:\n    ctx = self.impl.canvasContext';
		$m.__track_lines__[156] = 'pyjsdl.surface.py, line 156:\n    for s in surfaces:';
		$m.__track_lines__[157] = 'pyjsdl.surface.py, line 157:\n    ctx.drawImage(s.image.canvas, s.rect.x, s.rect.y)';
		$m.__track_lines__[159] = 'pyjsdl.surface.py, line 159:\n    def _blit_clear(self, surface, rect_list):';
		$m.__track_lines__[160] = 'pyjsdl.surface.py, line 160:\n    ctx = self.impl.canvasContext';
		$m.__track_lines__[161] = 'pyjsdl.surface.py, line 161:\n    for r in rect_list:';
		$m.__track_lines__[162] = 'pyjsdl.surface.py, line 162:\n    ctx.drawImage(surface.canvas, r.x,r.y,r.width,r.height, r.x,r.y,r.width,r.height)';
		$m.__track_lines__[164] = 'pyjsdl.surface.py, line 164:\n    def set_colorkey(self, color, flags=None):';
		$m.__track_lines__[168] = 'pyjsdl.surface.py, line 168:\n    if self._colorkey:';
		$m.__track_lines__[169] = 'pyjsdl.surface.py, line 169:\n    r = self._colorkey.r';
		$m.__track_lines__[170] = 'pyjsdl.surface.py, line 170:\n    g = self._colorkey.g';
		$m.__track_lines__[171] = 'pyjsdl.surface.py, line 171:\n    b = self._colorkey.b';
		$m.__track_lines__[172] = 'pyjsdl.surface.py, line 172:\n    self._colorkey = None';
		$m.__track_lines__[173] = 'pyjsdl.surface.py, line 173:\n    if color:';
		$m.__track_lines__[174] = 'pyjsdl.surface.py, line 174:\n    try:';
		$m.__track_lines__[175] = 'pyjsdl.surface.py, line 175:\n    color = Color(color)';
		$m.__track_lines__[176] = 'pyjsdl.surface.py, line 176:\n    self._colorkey = color';
		$m.__track_lines__[177] = 'pyjsdl.surface.py, line 177:\n    self.replace_color((color.r,color.g,color.b))';
		$m.__track_lines__[179] = 'pyjsdl.surface.py, line 179:\n    pass';
		$m.__track_lines__[180] = 'pyjsdl.surface.py, line 180:\n    return None';
		$m.__track_lines__[182] = 'pyjsdl.surface.py, line 182:\n    def get_colorkey(self):';
		$m.__track_lines__[186] = 'pyjsdl.surface.py, line 186:\n    try:';
		$m.__track_lines__[187] = 'pyjsdl.surface.py, line 187:\n    return self._colorkey.r, self._colorkey.g, self._colorkey.b, 255';
		$m.__track_lines__[189] = 'pyjsdl.surface.py, line 189:\n    return None';
		$m.__track_lines__[191] = 'pyjsdl.surface.py, line 191:\n    def _getPixel(self, imagedata, index):';
		$m.__track_lines__[192] = 'pyjsdl.surface.py, line 192:\n    return JS("""imagedata.data[@{{index}}];""")';
		$m.__track_lines__[194] = 'pyjsdl.surface.py, line 194:\n    def _setPixel(self, imagedata, index, dat):';
		$m.__track_lines__[195] = 'pyjsdl.surface.py, line 195:\n    data = str(dat)';
		$m.__track_lines__[196] = 'pyjsdl.surface.py, line 196:\n    JS("""imagedata.data[@{{index}}]=@{{data}};""")';
		$m.__track_lines__[197] = 'pyjsdl.surface.py, line 197:\n    return';
		$m.__track_lines__[199] = 'pyjsdl.surface.py, line 199:\n    def replace_color(self, color, new_color=None):';
		$m.__track_lines__[203] = 'pyjsdl.surface.py, line 203:\n    pixels = self.impl.getImageData(0, 0, self.width, self.height)';
		$m.__track_lines__[204] = "pyjsdl.surface.py, line 204:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[205] = 'pyjsdl.surface.py, line 205:\n    color1 = color';
		$m.__track_lines__[207] = 'pyjsdl.surface.py, line 207:\n    color1 = Color(color)';
		$m.__track_lines__[208] = 'pyjsdl.surface.py, line 208:\n    if new_color:';
		$m.__track_lines__[209] = "pyjsdl.surface.py, line 209:\n    if hasattr(new_color, 'a'):";
		$m.__track_lines__[210] = 'pyjsdl.surface.py, line 210:\n    color2 = new_color';
		$m.__track_lines__[212] = 'pyjsdl.surface.py, line 212:\n    color2 = Color(new_color)';
		$m.__track_lines__[214] = 'pyjsdl.surface.py, line 214:\n    color2 = Color(color1.r,color1.g,color1.b,0)';
		$m.__track_lines__[215] = 'pyjsdl.surface.py, line 215:\n    col1 = (color1.r, color1.g, color1.b, color1.a)';
		$m.__track_lines__[216] = 'pyjsdl.surface.py, line 216:\n    col2 = (color2.r, color2.g, color2.b, color2.a)';
		$m.__track_lines__[217] = 'pyjsdl.surface.py, line 217:\n    for i in xrange(0,len(pixels.data),4):';
		$m.__track_lines__[218] = 'pyjsdl.surface.py, line 218:\n    if (self._getPixel(pixels, i), self._getPixel(pixels, i+1), self._getPixel(pixels, i+2), self._getPixel(pixels, i+3)) == col1:';
		$m.__track_lines__[219] = 'pyjsdl.surface.py, line 219:\n    for j in range(4):';
		$m.__track_lines__[220] = 'pyjsdl.surface.py, line 220:\n    self._setPixel(pixels, i+j, col2[j])';
		$m.__track_lines__[221] = 'pyjsdl.surface.py, line 221:\n    self.impl.putImageData(pixels, 0, 0, 0, 0, self.width, self.height)';
		$m.__track_lines__[222] = 'pyjsdl.surface.py, line 222:\n    return None';
		$m.__track_lines__[224] = 'pyjsdl.surface.py, line 224:\n    def get_at(self, pos):';
		$m.__track_lines__[229] = 'pyjsdl.surface.py, line 229:\n    pixel = self.impl.getImageData(pos[0], pos[1], 1, 1)';
		$m.__track_lines__[230] = 'pyjsdl.surface.py, line 230:\n    return self._getPixel(pixel,0), self._getPixel(pixel,1), self._getPixel(pixel,2), self._getPixel(pixel,3)';
		$m.__track_lines__[232] = 'pyjsdl.surface.py, line 232:\n    def set_at(self, pos, color):';
		$m.__track_lines__[237] = "pyjsdl.surface.py, line 237:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[238] = 'pyjsdl.surface.py, line 238:\n    _color = color';
		$m.__track_lines__[240] = 'pyjsdl.surface.py, line 240:\n    _color = Color(color)';
		$m.__track_lines__[241] = 'pyjsdl.surface.py, line 241:\n    self.setFillStyle(_color)';
		$m.__track_lines__[242] = 'pyjsdl.surface.py, line 242:\n    self.fillRect(pos[0], pos[1], 1, 1)';
		$m.__track_lines__[243] = 'pyjsdl.surface.py, line 243:\n    return None';
		$m.__track_lines__[245] = 'pyjsdl.surface.py, line 245:\n    def fill(self, color=None, rect=None):';
		$m.__track_lines__[249] = 'pyjsdl.surface.py, line 249:\n    if color is None:';
		$m.__track_lines__[250] = 'pyjsdl.surface.py, line 250:\n    HTML5Canvas.fill(self)';
		$m.__track_lines__[251] = 'pyjsdl.surface.py, line 251:\n    return';
		$m.__track_lines__[252] = 'pyjsdl.surface.py, line 252:\n    if color:';
		$m.__track_lines__[253] = "pyjsdl.surface.py, line 253:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[254] = 'pyjsdl.surface.py, line 254:\n    self.setFillStyle(color)';
		$m.__track_lines__[256] = 'pyjsdl.surface.py, line 256:\n    self.setFillStyle(Color(color))';
		$m.__track_lines__[257] = 'pyjsdl.surface.py, line 257:\n    if not rect:';
		$m.__track_lines__[258] = 'pyjsdl.surface.py, line 258:\n    _rect = Rect(0, 0, self.width, self.height)';
		$m.__track_lines__[260] = 'pyjsdl.surface.py, line 260:\n    if self._display:';
		$m.__track_lines__[261] = 'pyjsdl.surface.py, line 261:\n    surface_rect = self._display._surface_rect';
		$m.__track_lines__[263] = 'pyjsdl.surface.py, line 263:\n    surface_rect = self.get_rect()';
		$m.__track_lines__[264] = "pyjsdl.surface.py, line 264:\n    if hasattr(rect, 'width'):";
		$m.__track_lines__[265] = 'pyjsdl.surface.py, line 265:\n    _rect = surface_rect.clip( rect )';
		$m.__track_lines__[267] = 'pyjsdl.surface.py, line 267:\n    _rect = surface_rect.clip( Rect(rect) )';
		$m.__track_lines__[268] = 'pyjsdl.surface.py, line 268:\n    if not _rect.width or not _rect.height:';
		$m.__track_lines__[269] = 'pyjsdl.surface.py, line 269:\n    return _rect';
		$m.__track_lines__[270] = 'pyjsdl.surface.py, line 270:\n    self.fillRect(_rect.x, _rect.y, _rect.width, _rect.height)';
		$m.__track_lines__[272] = 'pyjsdl.surface.py, line 272:\n    _rect = Rect(0, 0, self.width, self.height)';
		$m.__track_lines__[273] = 'pyjsdl.surface.py, line 273:\n    self.clear()';
		$m.__track_lines__[274] = 'pyjsdl.surface.py, line 274:\n    return _rect';
		$m.__track_lines__[276] = 'pyjsdl.surface.py, line 276:\n    def get_parent(self):';
		$m.__track_lines__[280] = 'pyjsdl.surface.py, line 280:\n    return self._super_surface   #if delete, delete subsurface...';
		$m.__track_lines__[282] = 'pyjsdl.surface.py, line 282:\n    def get_offset(self):';
		$m.__track_lines__[286] = 'pyjsdl.surface.py, line 286:\n    return self._offset';
		$m.__track_lines__[288] = 'pyjsdl.surface.py, line 288:\n    def toDataURL(self, datatype=None):';
		$m.__track_lines__[294] = 'pyjsdl.surface.py, line 294:\n    if not datatype:';
		$m.__track_lines__[295] = 'pyjsdl.surface.py, line 295:\n    return self.canvas.toDataURL()';
		$m.__track_lines__[297] = 'pyjsdl.surface.py, line 297:\n    return self.canvas.toDataURL(datatype)';
		$m.__track_lines__[299] = 'pyjsdl.surface.py, line 299:\n    def _nonimplemented_methods(self):';
		$m.__track_lines__[303] = 'pyjsdl.surface.py, line 303:\n    self.convert = lambda *arg: self';
		$m.__track_lines__[304] = 'pyjsdl.surface.py, line 304:\n    self.convert_alpha = lambda *arg: self';
		$m.__track_lines__[305] = 'pyjsdl.surface.py, line 305:\n    self.set_alpha = lambda *arg: None';
		$m.__track_lines__[306] = 'pyjsdl.surface.py, line 306:\n    self.get_alpha = lambda *arg: None';
		$m.__track_lines__[307] = 'pyjsdl.surface.py, line 307:\n    self.lock = lambda *arg: None';
		$m.__track_lines__[308] = 'pyjsdl.surface.py, line 308:\n    self.unlock = lambda *arg: None';
		$m.__track_lines__[309] = 'pyjsdl.surface.py, line 309:\n    self.mustlock = lambda *arg: False';
		$m.__track_lines__[310] = 'pyjsdl.surface.py, line 310:\n    self.get_locked = lambda *arg: False';
		$m.__track_lines__[311] = 'pyjsdl.surface.py, line 311:\n    self.get_locks = lambda *arg: ()';
		$m.__track_lines__[314] = 'pyjsdl.surface.py, line 314:\n    class Surf(object):';
		$m.__track_lines__[316] = 'pyjsdl.surface.py, line 316:\n    def __init__(self, image):';
		$m.__track_lines__[317] = 'pyjsdl.surface.py, line 317:\n    self.canvas = image';
		$m.__track_lines__[318] = 'pyjsdl.surface.py, line 318:\n    self.width, self.height = self.canvas.width, self.canvas.height';
		$m.__track_lines__[319] = 'pyjsdl.surface.py, line 319:\n    self._nonimplemented_methods()';
		$m.__track_lines__[321] = 'pyjsdl.surface.py, line 321:\n    def get_size(self):';
		$m.__track_lines__[322] = 'pyjsdl.surface.py, line 322:\n    return (self.width, self.height)';
		$m.__track_lines__[324] = 'pyjsdl.surface.py, line 324:\n    def get_width(self):';
		$m.__track_lines__[325] = 'pyjsdl.surface.py, line 325:\n    return self.width';
		$m.__track_lines__[327] = 'pyjsdl.surface.py, line 327:\n    def get_height(self):';
		$m.__track_lines__[328] = 'pyjsdl.surface.py, line 328:\n    return self.height';
		$m.__track_lines__[330] = 'pyjsdl.surface.py, line 330:\n    def get_rect(self, **attr):';
		$m.__track_lines__[331] = 'pyjsdl.surface.py, line 331:\n    rect = Rect(0, 0, self.width, self.height)';
		$m.__track_lines__[332] = 'pyjsdl.surface.py, line 332:\n    for key in attr:';
		$m.__track_lines__[333] = 'pyjsdl.surface.py, line 333:\n    rect.__setattr__(key,attr[key])';
		$m.__track_lines__[334] = 'pyjsdl.surface.py, line 334:\n    return rect';
		$m.__track_lines__[336] = 'pyjsdl.surface.py, line 336:\n    def _nonimplemented_methods(self):';
		$m.__track_lines__[337] = 'pyjsdl.surface.py, line 337:\n    self.convert = lambda *arg: self';
		$m.__track_lines__[338] = 'pyjsdl.surface.py, line 338:\n    self.convert_alpha = lambda *arg: self';
		$m.__track_lines__[339] = 'pyjsdl.surface.py, line 339:\n    self.set_alpha = lambda *arg: None';
		$m.__track_lines__[340] = 'pyjsdl.surface.py, line 340:\n    self.get_alpha = lambda *arg: None';
		$m.__track_lines__[341] = 'pyjsdl.surface.py, line 341:\n    self.lock = lambda *arg: None';
		$m.__track_lines__[342] = 'pyjsdl.surface.py, line 342:\n    self.unlock = lambda *arg: None';
		$m.__track_lines__[343] = 'pyjsdl.surface.py, line 343:\n    self.mustlock = lambda *arg: False';
		$m.__track_lines__[344] = 'pyjsdl.surface.py, line 344:\n    self.get_locked = lambda *arg: False';
		$m.__track_lines__[345] = 'pyjsdl.surface.py, line 345:\n    self.get_locks = lambda *arg: ()';
		$m.__track_lines__[348] = 'pyjsdl.surface.py, line 348:\n    class IndexSizeError(Exception):';
		$m.__track_lines__[349] = 'pyjsdl.surface.py, line 349:\n    pass';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_255 = new $p['int'](255);
		$pyjs['track']['module']='pyjsdl.surface';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['HTML5Canvas'] = $p['___import___']('pyjsdl.pyjsobj.HTML5Canvas', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Rect'] = $p['___import___']('pyjsdl.rect.Rect', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['rectPool'] = $p['___import___']('pyjsdl.rect.rectPool', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Color'] = $p['___import___']('pyjsdl.color.Color', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$pyjs['track']['lineno']=9;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=12;
		$m['Surface'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.surface';
			$cls_definition['__md5__'] = '509fd81738b87e5fff46732e9ff2add7';
			$pyjs['track']['lineno']=35;
			$method = $pyjs__bind_method2('__init__', function(size) {
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
					size = arguments[1];
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
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof size != 'undefined') {
						if (size !== null && typeof size['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = size;
							size = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':35};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=35;
				$pyjs['track']['lineno']=42;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $p['int'](size['__getitem__']($constant_int_0))) : $p['setattr'](self, 'width', $p['int'](size['__getitem__']($constant_int_0))); 
				$pyjs['track']['lineno']=43;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $p['int'](size['__getitem__']($constant_int_1))) : $p['setattr'](self, 'height', $p['int'](size['__getitem__']($constant_int_1))); 
				$pyjs['track']['lineno']=44;
				$m['HTML5Canvas']['__init__'](self, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				$pyjs['track']['lineno']=45;
				$m['HTML5Canvas']['resize'](self, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				$pyjs['track']['lineno']=46;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_display', null) : $p['setattr'](self, '_display', null); 
				$pyjs['track']['lineno']=47;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_super_surface', null) : $p['setattr'](self, '_super_surface', null); 
				$pyjs['track']['lineno']=48;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_offset', $p['tuple']([$constant_int_0, $constant_int_0])) : $p['setattr'](self, '_offset', $p['tuple']([$constant_int_0, $constant_int_0])); 
				$pyjs['track']['lineno']=49;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_colorkey', null) : $p['setattr'](self, '_colorkey', null); 
				$pyjs['track']['lineno']=50;
				self['_nonimplemented_methods']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['size']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=52;
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
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':52};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=52;
				$pyjs['track']['lineno']=56;
				$pyjs['track']['lineno']=56;
				var $pyjs__ret = $p['sprintf']('%s(%d,%d)', $p['tuple']([$p['getattr'](self, '__class__'), $p['getattr'](self, 'width'), $p['getattr'](self, 'height')]));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=58;
			$method = $pyjs__bind_method2('get_size', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=58;
				$pyjs['track']['lineno']=62;
				$pyjs['track']['lineno']=62;
				var $pyjs__ret = $p['tuple']([$p['getattr'](self, 'width'), $p['getattr'](self, 'height')]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_size'] = $method;
			$pyjs['track']['lineno']=64;
			$method = $pyjs__bind_method2('get_width', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=64;
				$pyjs['track']['lineno']=68;
				$pyjs['track']['lineno']=68;
				var $pyjs__ret = $p['getattr'](self, 'width');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_width'] = $method;
			$pyjs['track']['lineno']=70;
			$method = $pyjs__bind_method2('get_height', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':70};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=70;
				$pyjs['track']['lineno']=74;
				$pyjs['track']['lineno']=74;
				var $pyjs__ret = $p['getattr'](self, 'height');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_height'] = $method;
			$pyjs['track']['lineno']=76;
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
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':76};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=76;
				$pyjs['track']['lineno']=77;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $p['int'](width)) : $p['setattr'](self, 'width', $p['int'](width)); 
				$pyjs['track']['lineno']=78;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $p['int'](height)) : $p['setattr'](self, 'height', $p['int'](height)); 
				$pyjs['track']['lineno']=79;
				$m['HTML5Canvas']['resize'](self, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['resize'] = $method;
			$pyjs['track']['lineno']=81;
			$method = $pyjs__bind_method2('get_rect', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var attr = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (attr === null || typeof attr != 'object' || attr['__name__'] != 'dict' || typeof attr['$pyjs_is_kwarg'] == 'undefined') {
						var attr = arguments[arguments['length']+1];
					} else {
						delete attr['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					var attr = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (attr === null || typeof attr != 'object' || attr['__name__'] != 'dict' || typeof attr['$pyjs_is_kwarg'] == 'undefined') {
						attr = arguments[arguments['length']+1];
					} else {
						delete attr['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof attr == 'undefined') {
					attr = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							attr = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,$iter1_array,key,$pyjs__trackstack_size_1,rect;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':81};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=81;
				$pyjs['track']['lineno']=86;
				rect = $m['Rect']($constant_int_0, $constant_int_0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				$pyjs['track']['lineno']=87;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = attr;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					key = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=88;
					rect['__setattr__'](key, attr['__getitem__'](key));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=89;
				$pyjs['track']['lineno']=89;
				var $pyjs__ret = rect;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,['attr'],['self']]);
			$cls_definition['get_rect'] = $method;
			$pyjs['track']['lineno']=91;
			$method = $pyjs__bind_method2('copy', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var surface;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':91};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=91;
				$pyjs['track']['lineno']=95;
				surface = $m['Surface']($p['tuple']([$p['getattr'](self, 'width'), $p['getattr'](self, 'height')]));
				$pyjs['track']['lineno']=96;
				surface['drawImage']($p['getattr'](self, 'canvas'), $constant_int_0, $constant_int_0);
				$pyjs['track']['lineno']=97;
				$pyjs['track']['lineno']=97;
				var $pyjs__ret = surface;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['copy'] = $method;
			$pyjs['track']['lineno']=99;
			$method = $pyjs__bind_method2('subsurface', function(rect) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					rect = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var _rect,surf_rect,surface;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':99};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=99;
				$pyjs['track']['lineno']=105;
				if ($p['bool']($p['tuple'](['t', 'f'])['__contains__'](rect))) {
					$pyjs['track']['lineno']=106;
					if ($p['bool'](!$p['bool']($p['getattr'](self, '_super_surface')))) {
						$pyjs['track']['lineno']=107;
						$pyjs['track']['lineno']=107;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					$pyjs['track']['lineno']=108;
					if ($p['bool']($p['op_eq'](rect, 't'))) {
						$pyjs['track']['lineno']=109;
						self['drawImage']($p['getattr']($p['getattr'](self, '_super_surface'), 'canvas'), $p['getattr'](self, '_offset')['__getitem__']($constant_int_0), $p['getattr'](self, '_offset')['__getitem__']($constant_int_1), $p['getattr'](self, 'width'), $p['getattr'](self, 'height'), $constant_int_0, $constant_int_0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
					}
					else {
						$pyjs['track']['lineno']=111;
						self['_super_surface']['drawImage']($p['getattr'](self, 'canvas'), $p['getattr'](self, '_offset')['__getitem__']($constant_int_0), $p['getattr'](self, '_offset')['__getitem__']($constant_int_1));
					}
					$pyjs['track']['lineno']=112;
					$pyjs['track']['lineno']=112;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=113;
				if ($p['bool']($p['hasattr'](rect, 'width'))) {
					$pyjs['track']['lineno']=114;
					_rect = rect;
				}
				else {
					$pyjs['track']['lineno']=116;
					_rect = $m['Rect'](rect);
				}
				$pyjs['track']['lineno']=117;
				surf_rect = self['get_rect']();
				$pyjs['track']['lineno']=118;
				if ($p['bool'](!$p['bool'](surf_rect['contains'](_rect)))) {
					$pyjs['track']['lineno']=119;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['ValueError']('subsurface outside surface area'));
				}
				$pyjs['track']['lineno']=120;
				surface = self['getSubimage']($p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y'), $p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height'));
				$pyjs['track']['lineno']=121;
				surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_super_surface', self) : $p['setattr'](surface, '_super_surface', self); 
				$pyjs['track']['lineno']=122;
				surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_offset', $p['tuple']([$p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y')])) : $p['setattr'](surface, '_offset', $p['tuple']([$p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y')])); 
				$pyjs['track']['lineno']=123;
				surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_colorkey', $p['getattr'](self, '_colorkey')) : $p['setattr'](surface, '_colorkey', $p['getattr'](self, '_colorkey')); 
				$pyjs['track']['lineno']=124;
				$pyjs['track']['lineno']=124;
				var $pyjs__ret = surface;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rect']]);
			$cls_definition['subsurface'] = $method;
			$pyjs['track']['lineno']=126;
			$method = $pyjs__bind_method2('getSubimage', function(x, y, width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					width = arguments[3];
					height = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var surface;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':126};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=126;
				$pyjs['track']['lineno']=131;
				surface = $m['Surface']($p['tuple']([width, height]));
				$pyjs['track']['lineno']=132;
				surface['drawImage']($p['getattr'](self, 'canvas'), x, y, width, height, $constant_int_0, $constant_int_0, width, height);
				$pyjs['track']['lineno']=133;
				$pyjs['track']['lineno']=133;
				var $pyjs__ret = surface;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['x'],['y'],['width'],['height']]);
			$cls_definition['getSubimage'] = $method;
			$pyjs['track']['lineno']=135;
			$method = $pyjs__bind_method2('blit', function(surface, position, area) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					position = arguments[2];
					area = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof area == 'undefined') area=arguments['callee']['__args__'][5][1];
				var surface_rect,changed_rect,rect;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':135};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=135;
				$pyjs['track']['lineno']=140;
				if ($p['bool'](!$p['bool'](area))) {
					$pyjs['track']['lineno']=141;
					rect = $m['rectPool']['get'](position['__getitem__']($constant_int_0), position['__getitem__']($constant_int_1), $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
					$pyjs['track']['lineno']=142;
					self['impl']['canvasContext']['drawImage']($p['getattr'](surface, 'canvas'), $p['getattr'](rect, 'x'), $p['getattr'](rect, 'y'));
				}
				else {
					$pyjs['track']['lineno']=144;
					rect = $m['rectPool']['get'](position['__getitem__']($constant_int_0), position['__getitem__']($constant_int_1), area['__getitem__']($constant_int_2), area['__getitem__']($constant_int_3));
					$pyjs['track']['lineno']=145;
					self['impl']['canvasContext']['drawImage']($p['getattr'](surface, 'canvas'), area['__getitem__']($constant_int_0), area['__getitem__']($constant_int_1), area['__getitem__']($constant_int_2), area['__getitem__']($constant_int_3), $p['getattr'](rect, 'x'), $p['getattr'](rect, 'y'), area['__getitem__']($constant_int_2), area['__getitem__']($constant_int_3));
				}
				$pyjs['track']['lineno']=146;
				if ($p['bool']($p['getattr'](self, '_display'))) {
					$pyjs['track']['lineno']=147;
					surface_rect = $p['getattr']($p['getattr'](self, '_display'), '_surface_rect');
				}
				else {
					$pyjs['track']['lineno']=149;
					surface_rect = self['get_rect']();
				}
				$pyjs['track']['lineno']=150;
				changed_rect = surface_rect['clip'](rect);
				$pyjs['track']['lineno']=151;
				$m['rectPool']['append'](rect);
				$pyjs['track']['lineno']=152;
				$pyjs['track']['lineno']=152;
				var $pyjs__ret = changed_rect;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['position'],['area', null]]);
			$cls_definition['blit'] = $method;
			$pyjs['track']['lineno']=154;
			$method = $pyjs__bind_method2('_blits', function(surfaces) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					surfaces = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,ctx,s,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':154};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=154;
				$pyjs['track']['lineno']=155;
				ctx = $p['getattr']($p['getattr'](self, 'impl'), 'canvasContext');
				$pyjs['track']['lineno']=156;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = surfaces;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					s = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=157;
					ctx['drawImage']($p['getattr']($p['getattr'](s, 'image'), 'canvas'), $p['getattr']($p['getattr'](s, 'rect'), 'x'), $p['getattr']($p['getattr'](s, 'rect'), 'y'));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surfaces']]);
			$cls_definition['_blits'] = $method;
			$pyjs['track']['lineno']=159;
			$method = $pyjs__bind_method2('_blit_clear', function(surface, rect_list) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					rect_list = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,$iter3_array,ctx,r,$iter3_iter,$iter3_type,$pyjs__trackstack_size_1,$iter3_nextval;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':159};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=159;
				$pyjs['track']['lineno']=160;
				ctx = $p['getattr']($p['getattr'](self, 'impl'), 'canvasContext');
				$pyjs['track']['lineno']=161;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = rect_list;
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					r = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=162;
					ctx['drawImage']($p['getattr'](surface, 'canvas'), $p['getattr'](r, 'x'), $p['getattr'](r, 'y'), $p['getattr'](r, 'width'), $p['getattr'](r, 'height'), $p['getattr'](r, 'x'), $p['getattr'](r, 'y'), $p['getattr'](r, 'width'), $p['getattr'](r, 'height'));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['rect_list']]);
			$cls_definition['_blit_clear'] = $method;
			$pyjs['track']['lineno']=164;
			$method = $pyjs__bind_method2('set_colorkey', function(color, flags) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					color = arguments[1];
					flags = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][4][1];
				var b,g,$pyjs_try_err,r;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':164};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=164;
				$pyjs['track']['lineno']=168;
				if ($p['bool']($p['getattr'](self, '_colorkey'))) {
					$pyjs['track']['lineno']=169;
					r = $p['getattr']($p['getattr'](self, '_colorkey'), 'r');
					$pyjs['track']['lineno']=170;
					g = $p['getattr']($p['getattr'](self, '_colorkey'), 'g');
					$pyjs['track']['lineno']=171;
					b = $p['getattr']($p['getattr'](self, '_colorkey'), 'b');
					$pyjs['track']['lineno']=172;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_colorkey', null) : $p['setattr'](self, '_colorkey', null); 
				}
				$pyjs['track']['lineno']=173;
				if ($p['bool'](color)) {
					$pyjs['track']['lineno']=174;
					var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
					try {
						$pyjs['track']['lineno']=175;
						color = $m['Color'](color);
						$pyjs['track']['lineno']=176;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_colorkey', color) : $p['setattr'](self, '_colorkey', color); 
						$pyjs['track']['lineno']=177;
						self['replace_color']($p['tuple']([$p['getattr'](color, 'r'), $p['getattr'](color, 'g'), $p['getattr'](color, 'b')]));
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
						$pyjs['track']['module']='pyjsdl.surface';
						if (true) {
							$pyjs['track']['lineno']=179;
						}
					}
				}
				$pyjs['track']['lineno']=180;
				$pyjs['track']['lineno']=180;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['color'],['flags', null]]);
			$cls_definition['set_colorkey'] = $method;
			$pyjs['track']['lineno']=182;
			$method = $pyjs__bind_method2('get_colorkey', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':182};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=182;
				$pyjs['track']['lineno']=186;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=187;
					$pyjs['track']['lineno']=187;
					var $pyjs__ret = $p['tuple']([$p['getattr']($p['getattr'](self, '_colorkey'), 'r'), $p['getattr']($p['getattr'](self, '_colorkey'), 'g'), $p['getattr']($p['getattr'](self, '_colorkey'), 'b'), $constant_int_255]);
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
					$pyjs['track']['module']='pyjsdl.surface';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=189;
						$pyjs['track']['lineno']=189;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_colorkey'] = $method;
			$pyjs['track']['lineno']=191;
			$method = $pyjs__bind_method2('_getPixel', function(imagedata, index) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					imagedata = arguments[1];
					index = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':191};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=191;
				$pyjs['track']['lineno']=192;
				$pyjs['track']['lineno']=192;
				var $pyjs__ret = imagedata.data[index];;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['imagedata'],['index']]);
			$cls_definition['_getPixel'] = $method;
			$pyjs['track']['lineno']=194;
			$method = $pyjs__bind_method2('_setPixel', function(imagedata, index, dat) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					imagedata = arguments[1];
					index = arguments[2];
					dat = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':194};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=194;
				$pyjs['track']['lineno']=195;
				data = $p['str'](dat);
				$pyjs['track']['lineno']=196;
imagedata.data[index]=data;
				$pyjs['track']['lineno']=197;
				$pyjs['track']['lineno']=197;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['imagedata'],['index'],['dat']]);
			$cls_definition['_setPixel'] = $method;
			$pyjs['track']['lineno']=199;
			$method = $pyjs__bind_method2('replace_color', function(color, new_color) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					color = arguments[1];
					new_color = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof new_color == 'undefined') new_color=arguments['callee']['__args__'][4][1];
				var $iter5_nextval,$iter5_array,$iter5_iter,$iter4_type,$iter5_type,$iter4_iter,$add2,$iter5_idx,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,col2,col1,color1,color2,pixels,i,$iter4_nextval,j,$iter4_idx,$add3,$add1,$add6,$add7,$add4,$add5,$iter4_array,$add8;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':199};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=199;
				$pyjs['track']['lineno']=203;
				pixels = self['impl']['getImageData']($constant_int_0, $constant_int_0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				$pyjs['track']['lineno']=204;
				if ($p['bool']($p['hasattr'](color, 'a'))) {
					$pyjs['track']['lineno']=205;
					color1 = color;
				}
				else {
					$pyjs['track']['lineno']=207;
					color1 = $m['Color'](color);
				}
				$pyjs['track']['lineno']=208;
				if ($p['bool'](new_color)) {
					$pyjs['track']['lineno']=209;
					if ($p['bool']($p['hasattr'](new_color, 'a'))) {
						$pyjs['track']['lineno']=210;
						color2 = new_color;
					}
					else {
						$pyjs['track']['lineno']=212;
						color2 = $m['Color'](new_color);
					}
				}
				else {
					$pyjs['track']['lineno']=214;
					color2 = $m['Color']($p['getattr'](color1, 'r'), $p['getattr'](color1, 'g'), $p['getattr'](color1, 'b'), $constant_int_0);
				}
				$pyjs['track']['lineno']=215;
				col1 = $p['tuple']([$p['getattr'](color1, 'r'), $p['getattr'](color1, 'g'), $p['getattr'](color1, 'b'), $p['getattr'](color1, 'a')]);
				$pyjs['track']['lineno']=216;
				col2 = $p['tuple']([$p['getattr'](color2, 'r'), $p['getattr'](color2, 'g'), $p['getattr'](color2, 'b'), $p['getattr'](color2, 'a')]);
				$pyjs['track']['lineno']=217;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = $p['xrange']($constant_int_0, $p['len']($p['getattr'](pixels, 'data')), $constant_int_4);
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					i = $iter4_nextval['$nextval'];
					$pyjs['track']['lineno']=218;
					if ($p['bool']($p['op_eq']($p['tuple']([self['_getPixel'](pixels, i), self['_getPixel'](pixels, $p['__op_add']($add1=i,$add2=$constant_int_1)), self['_getPixel'](pixels, $p['__op_add']($add3=i,$add4=$constant_int_2)), self['_getPixel'](pixels, $p['__op_add']($add5=i,$add6=$constant_int_3))]), col1))) {
						$pyjs['track']['lineno']=219;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter5_iter = $p['range']($constant_int_4);
						$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
						while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
							j = $iter5_nextval['$nextval'];
							$pyjs['track']['lineno']=220;
							self['_setPixel'](pixels, $p['__op_add']($add7=i,$add8=j), col2['__getitem__'](j));
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.surface';
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=221;
				self['impl']['putImageData'](pixels, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				$pyjs['track']['lineno']=222;
				$pyjs['track']['lineno']=222;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['color'],['new_color', null]]);
			$cls_definition['replace_color'] = $method;
			$pyjs['track']['lineno']=224;
			$method = $pyjs__bind_method2('get_at', function(pos) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					pos = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var pixel;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':224};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=224;
				$pyjs['track']['lineno']=229;
				pixel = self['impl']['getImageData'](pos['__getitem__']($constant_int_0), pos['__getitem__']($constant_int_1), $constant_int_1, $constant_int_1);
				$pyjs['track']['lineno']=230;
				$pyjs['track']['lineno']=230;
				var $pyjs__ret = $p['tuple']([self['_getPixel'](pixel, $constant_int_0), self['_getPixel'](pixel, $constant_int_1), self['_getPixel'](pixel, $constant_int_2), self['_getPixel'](pixel, $constant_int_3)]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['pos']]);
			$cls_definition['get_at'] = $method;
			$pyjs['track']['lineno']=232;
			$method = $pyjs__bind_method2('set_at', function(pos, color) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					pos = arguments[1];
					color = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var _color;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':232};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=232;
				$pyjs['track']['lineno']=237;
				if ($p['bool']($p['hasattr'](color, 'a'))) {
					$pyjs['track']['lineno']=238;
					_color = color;
				}
				else {
					$pyjs['track']['lineno']=240;
					_color = $m['Color'](color);
				}
				$pyjs['track']['lineno']=241;
				self['setFillStyle'](_color);
				$pyjs['track']['lineno']=242;
				self['fillRect'](pos['__getitem__']($constant_int_0), pos['__getitem__']($constant_int_1), $constant_int_1, $constant_int_1);
				$pyjs['track']['lineno']=243;
				$pyjs['track']['lineno']=243;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['pos'],['color']]);
			$cls_definition['set_at'] = $method;
			$pyjs['track']['lineno']=245;
			$method = $pyjs__bind_method2('fill', function(color, rect) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					color = arguments[1];
					rect = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof color == 'undefined') color=arguments['callee']['__args__'][3][1];
				if (typeof rect == 'undefined') rect=arguments['callee']['__args__'][4][1];
				var _rect,surface_rect,$or1,$or2;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':245};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=245;
				$pyjs['track']['lineno']=249;
				if ($p['bool']($p['op_is'](color, null))) {
					$pyjs['track']['lineno']=250;
					$m['HTML5Canvas']['fill'](self);
					$pyjs['track']['lineno']=251;
					$pyjs['track']['lineno']=251;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=252;
				if ($p['bool'](color)) {
					$pyjs['track']['lineno']=253;
					if ($p['bool']($p['hasattr'](color, 'a'))) {
						$pyjs['track']['lineno']=254;
						self['setFillStyle'](color);
					}
					else {
						$pyjs['track']['lineno']=256;
						self['setFillStyle']($m['Color'](color));
					}
					$pyjs['track']['lineno']=257;
					if ($p['bool'](!$p['bool'](rect))) {
						$pyjs['track']['lineno']=258;
						_rect = $m['Rect']($constant_int_0, $constant_int_0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
					}
					else {
						$pyjs['track']['lineno']=260;
						if ($p['bool']($p['getattr'](self, '_display'))) {
							$pyjs['track']['lineno']=261;
							surface_rect = $p['getattr']($p['getattr'](self, '_display'), '_surface_rect');
						}
						else {
							$pyjs['track']['lineno']=263;
							surface_rect = self['get_rect']();
						}
						$pyjs['track']['lineno']=264;
						if ($p['bool']($p['hasattr'](rect, 'width'))) {
							$pyjs['track']['lineno']=265;
							_rect = surface_rect['clip'](rect);
						}
						else {
							$pyjs['track']['lineno']=267;
							_rect = surface_rect['clip']($m['Rect'](rect));
						}
						$pyjs['track']['lineno']=268;
						if ($p['bool'](($p['bool']($or1=!$p['bool']($p['getattr'](_rect, 'width')))?$or1:!$p['bool']($p['getattr'](_rect, 'height'))))) {
							$pyjs['track']['lineno']=269;
							$pyjs['track']['lineno']=269;
							var $pyjs__ret = _rect;
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					}
					$pyjs['track']['lineno']=270;
					self['fillRect']($p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y'), $p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height'));
				}
				else {
					$pyjs['track']['lineno']=272;
					_rect = $m['Rect']($constant_int_0, $constant_int_0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
					$pyjs['track']['lineno']=273;
					self['clear']();
				}
				$pyjs['track']['lineno']=274;
				$pyjs['track']['lineno']=274;
				var $pyjs__ret = _rect;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['color', null],['rect', null]]);
			$cls_definition['fill'] = $method;
			$pyjs['track']['lineno']=276;
			$method = $pyjs__bind_method2('get_parent', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':276};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=276;
				$pyjs['track']['lineno']=280;
				$pyjs['track']['lineno']=280;
				var $pyjs__ret = $p['getattr'](self, '_super_surface');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_parent'] = $method;
			$pyjs['track']['lineno']=282;
			$method = $pyjs__bind_method2('get_offset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':282};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=282;
				$pyjs['track']['lineno']=286;
				$pyjs['track']['lineno']=286;
				var $pyjs__ret = $p['getattr'](self, '_offset');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_offset'] = $method;
			$pyjs['track']['lineno']=288;
			$method = $pyjs__bind_method2('toDataURL', function(datatype) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					datatype = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof datatype == 'undefined') datatype=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':288};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=288;
				$pyjs['track']['lineno']=294;
				if ($p['bool'](!$p['bool'](datatype))) {
					$pyjs['track']['lineno']=295;
					$pyjs['track']['lineno']=295;
					var $pyjs__ret = self['canvas']['toDataURL']();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=297;
					$pyjs['track']['lineno']=297;
					var $pyjs__ret = self['canvas']['toDataURL'](datatype);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['datatype', null]]);
			$cls_definition['toDataURL'] = $method;
			$pyjs['track']['lineno']=299;
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
					if (self.prototype['__md5__'] !== '509fd81738b87e5fff46732e9ff2add7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda7,$lambda6,$lambda5,$lambda4,$lambda3,$lambda2,$lambda1,$lambda9,$lambda8;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':299};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=299;
				$pyjs['track']['lineno']=303;
				var 				$lambda1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':303};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=303;
					$pyjs['track']['lineno']=303;
					$pyjs['track']['lineno']=303;
					var $pyjs__ret = self;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('convert', $lambda1) : $p['setattr'](self, 'convert', $lambda1); 
				$pyjs['track']['lineno']=304;
				var 				$lambda2 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':304};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=304;
					$pyjs['track']['lineno']=304;
					$pyjs['track']['lineno']=304;
					var $pyjs__ret = self;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('convert_alpha', $lambda2) : $p['setattr'](self, 'convert_alpha', $lambda2); 
				$pyjs['track']['lineno']=305;
				var 				$lambda3 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':305};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=305;
					$pyjs['track']['lineno']=305;
					$pyjs['track']['lineno']=305;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda3['__name__'] = '$lambda3';

				$lambda3['__bind_type__'] = 0;
				$lambda3['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set_alpha', $lambda3) : $p['setattr'](self, 'set_alpha', $lambda3); 
				$pyjs['track']['lineno']=306;
				var 				$lambda4 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':306};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=306;
					$pyjs['track']['lineno']=306;
					$pyjs['track']['lineno']=306;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda4['__name__'] = '$lambda4';

				$lambda4['__bind_type__'] = 0;
				$lambda4['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_alpha', $lambda4) : $p['setattr'](self, 'get_alpha', $lambda4); 
				$pyjs['track']['lineno']=307;
				var 				$lambda5 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':307};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=307;
					$pyjs['track']['lineno']=307;
					$pyjs['track']['lineno']=307;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda5['__name__'] = '$lambda5';

				$lambda5['__bind_type__'] = 0;
				$lambda5['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lock', $lambda5) : $p['setattr'](self, 'lock', $lambda5); 
				$pyjs['track']['lineno']=308;
				var 				$lambda6 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':308};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=308;
					$pyjs['track']['lineno']=308;
					$pyjs['track']['lineno']=308;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda6['__name__'] = '$lambda6';

				$lambda6['__bind_type__'] = 0;
				$lambda6['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('unlock', $lambda6) : $p['setattr'](self, 'unlock', $lambda6); 
				$pyjs['track']['lineno']=309;
				var 				$lambda7 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':309};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=309;
					$pyjs['track']['lineno']=309;
					$pyjs['track']['lineno']=309;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda7['__name__'] = '$lambda7';

				$lambda7['__bind_type__'] = 0;
				$lambda7['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mustlock', $lambda7) : $p['setattr'](self, 'mustlock', $lambda7); 
				$pyjs['track']['lineno']=310;
				var 				$lambda8 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':310};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=310;
					$pyjs['track']['lineno']=310;
					$pyjs['track']['lineno']=310;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda8['__name__'] = '$lambda8';

				$lambda8['__bind_type__'] = 0;
				$lambda8['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_locked', $lambda8) : $p['setattr'](self, 'get_locked', $lambda8); 
				$pyjs['track']['lineno']=311;
				var 				$lambda9 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':311};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=311;
					$pyjs['track']['lineno']=311;
					$pyjs['track']['lineno']=311;
					var $pyjs__ret = $p['tuple']([]);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda9['__name__'] = '$lambda9';

				$lambda9['__bind_type__'] = 0;
				$lambda9['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_locks', $lambda9) : $p['setattr'](self, 'get_locks', $lambda9); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_nonimplemented_methods'] = $method;
			$pyjs['track']['lineno']=12;
			var $bases = new Array($m['HTML5Canvas']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Surface', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=314;
		$m['Surf'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.surface';
			$cls_definition['__md5__'] = '4c52a1e5ce3da499d718acde74656836';
			$pyjs['track']['lineno']=316;
			$method = $pyjs__bind_method2('__init__', function(image) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					image = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4c52a1e5ce3da499d718acde74656836') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':316};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=316;
				$pyjs['track']['lineno']=317;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('canvas', image) : $p['setattr'](self, 'canvas', image); 
				$pyjs['track']['lineno']=318;
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$p['getattr']($p['getattr'](self, 'canvas'), 'width'), $p['getattr']($p['getattr'](self, 'canvas'), 'height')]), 2, null);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign1[0]) : $p['setattr'](self, 'width', $tupleassign1[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign1[1]) : $p['setattr'](self, 'height', $tupleassign1[1]); 
				$pyjs['track']['lineno']=319;
				self['_nonimplemented_methods']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['image']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=321;
			$method = $pyjs__bind_method2('get_size', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4c52a1e5ce3da499d718acde74656836') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':321};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=321;
				$pyjs['track']['lineno']=322;
				$pyjs['track']['lineno']=322;
				var $pyjs__ret = $p['tuple']([$p['getattr'](self, 'width'), $p['getattr'](self, 'height')]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_size'] = $method;
			$pyjs['track']['lineno']=324;
			$method = $pyjs__bind_method2('get_width', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4c52a1e5ce3da499d718acde74656836') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':324};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=324;
				$pyjs['track']['lineno']=325;
				$pyjs['track']['lineno']=325;
				var $pyjs__ret = $p['getattr'](self, 'width');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_width'] = $method;
			$pyjs['track']['lineno']=327;
			$method = $pyjs__bind_method2('get_height', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4c52a1e5ce3da499d718acde74656836') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':327};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=327;
				$pyjs['track']['lineno']=328;
				$pyjs['track']['lineno']=328;
				var $pyjs__ret = $p['getattr'](self, 'height');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_height'] = $method;
			$pyjs['track']['lineno']=330;
			$method = $pyjs__bind_method2('get_rect', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var attr = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (attr === null || typeof attr != 'object' || attr['__name__'] != 'dict' || typeof attr['$pyjs_is_kwarg'] == 'undefined') {
						var attr = arguments[arguments['length']+1];
					} else {
						delete attr['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					var attr = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (attr === null || typeof attr != 'object' || attr['__name__'] != 'dict' || typeof attr['$pyjs_is_kwarg'] == 'undefined') {
						attr = arguments[arguments['length']+1];
					} else {
						delete attr['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4c52a1e5ce3da499d718acde74656836') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof attr == 'undefined') {
					attr = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							attr = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var $iter6_idx,$iter6_type,$iter6_array,key,$pyjs__trackstack_size_1,$iter6_iter,rect,$iter6_nextval;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':330};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=330;
				$pyjs['track']['lineno']=331;
				rect = $m['Rect']($constant_int_0, $constant_int_0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				$pyjs['track']['lineno']=332;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter6_iter = attr;
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					key = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=333;
					rect['__setattr__'](key, attr['__getitem__'](key));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=334;
				$pyjs['track']['lineno']=334;
				var $pyjs__ret = rect;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,['attr'],['self']]);
			$cls_definition['get_rect'] = $method;
			$pyjs['track']['lineno']=336;
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
					if (self.prototype['__md5__'] !== '4c52a1e5ce3da499d718acde74656836') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda13,$lambda12,$lambda11,$lambda10,$lambda17,$lambda16,$lambda15,$lambda14,$lambda18;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':336};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=336;
				$pyjs['track']['lineno']=337;
				var 				$lambda10 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':337};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=337;
					$pyjs['track']['lineno']=337;
					$pyjs['track']['lineno']=337;
					var $pyjs__ret = self;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda10['__name__'] = '$lambda10';

				$lambda10['__bind_type__'] = 0;
				$lambda10['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('convert', $lambda10) : $p['setattr'](self, 'convert', $lambda10); 
				$pyjs['track']['lineno']=338;
				var 				$lambda11 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':338};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=338;
					$pyjs['track']['lineno']=338;
					$pyjs['track']['lineno']=338;
					var $pyjs__ret = self;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda11['__name__'] = '$lambda11';

				$lambda11['__bind_type__'] = 0;
				$lambda11['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('convert_alpha', $lambda11) : $p['setattr'](self, 'convert_alpha', $lambda11); 
				$pyjs['track']['lineno']=339;
				var 				$lambda12 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':339};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=339;
					$pyjs['track']['lineno']=339;
					$pyjs['track']['lineno']=339;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda12['__name__'] = '$lambda12';

				$lambda12['__bind_type__'] = 0;
				$lambda12['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set_alpha', $lambda12) : $p['setattr'](self, 'set_alpha', $lambda12); 
				$pyjs['track']['lineno']=340;
				var 				$lambda13 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':340};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=340;
					$pyjs['track']['lineno']=340;
					$pyjs['track']['lineno']=340;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda13['__name__'] = '$lambda13';

				$lambda13['__bind_type__'] = 0;
				$lambda13['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_alpha', $lambda13) : $p['setattr'](self, 'get_alpha', $lambda13); 
				$pyjs['track']['lineno']=341;
				var 				$lambda14 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':341};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=341;
					$pyjs['track']['lineno']=341;
					$pyjs['track']['lineno']=341;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda14['__name__'] = '$lambda14';

				$lambda14['__bind_type__'] = 0;
				$lambda14['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lock', $lambda14) : $p['setattr'](self, 'lock', $lambda14); 
				$pyjs['track']['lineno']=342;
				var 				$lambda15 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':342};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=342;
					$pyjs['track']['lineno']=342;
					$pyjs['track']['lineno']=342;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda15['__name__'] = '$lambda15';

				$lambda15['__bind_type__'] = 0;
				$lambda15['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('unlock', $lambda15) : $p['setattr'](self, 'unlock', $lambda15); 
				$pyjs['track']['lineno']=343;
				var 				$lambda16 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':343};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=343;
					$pyjs['track']['lineno']=343;
					$pyjs['track']['lineno']=343;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda16['__name__'] = '$lambda16';

				$lambda16['__bind_type__'] = 0;
				$lambda16['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mustlock', $lambda16) : $p['setattr'](self, 'mustlock', $lambda16); 
				$pyjs['track']['lineno']=344;
				var 				$lambda17 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':344};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=344;
					$pyjs['track']['lineno']=344;
					$pyjs['track']['lineno']=344;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda17['__name__'] = '$lambda17';

				$lambda17['__bind_type__'] = 0;
				$lambda17['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_locked', $lambda17) : $p['setattr'](self, 'get_locked', $lambda17); 
				$pyjs['track']['lineno']=345;
				var 				$lambda18 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':345};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=345;
					$pyjs['track']['lineno']=345;
					$pyjs['track']['lineno']=345;
					var $pyjs__ret = $p['tuple']([]);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda18['__name__'] = '$lambda18';

				$lambda18['__bind_type__'] = 0;
				$lambda18['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_locks', $lambda18) : $p['setattr'](self, 'get_locks', $lambda18); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_nonimplemented_methods'] = $method;
			$pyjs['track']['lineno']=314;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Surf', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=348;
		$m['IndexSizeError'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.surface';
			$cls_definition['__md5__'] = 'c5970b92689bdfde45fbd2cccce814f8';
			$pyjs['track']['lineno']=349;
			$pyjs['track']['lineno']=348;
			var $bases = new Array($p['Exception']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('IndexSizeError', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.surface */


/* end module: pyjsdl.surface */


/*
PYJS_DEPS: ['pyjsdl.pyjsobj.HTML5Canvas', 'pyjsdl', 'pyjsdl.pyjsobj', 'pyjsdl.rect.Rect', 'pyjsdl.rect', 'pyjsdl.rect.rectPool', 'pyjsdl.color.Color', 'pyjsdl.color']
*/
