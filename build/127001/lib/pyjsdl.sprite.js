/* start module: pyjsdl.sprite */
$pyjs['loaded_modules']['pyjsdl.sprite'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.sprite']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.sprite'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.sprite'];
	$m['__repr__'] = function() { return '<module: pyjsdl.sprite>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.sprite';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['sprite'] = $pyjs['loaded_modules']['pyjsdl.sprite'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.sprite.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.sprite.py, line 4:\n    from pyjsdl.rect import rectPool';
		$m.__track_lines__[5] = 'pyjsdl.sprite.py, line 5:\n    from pyjsdl import mask';
		$m.__track_lines__[7] = "pyjsdl.sprite.py, line 7:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[10] = 'pyjsdl.sprite.py, line 10:\n    def id(sprite):';
		$m.__track_lines__[11] = 'pyjsdl.sprite.py, line 11:\n    return sprite._identity';
		$m.__track_lines__[13] = 'pyjsdl.sprite.py, line 13:\n    def id(group):';
		$m.__track_lines__[14] = 'pyjsdl.sprite.py, line 14:\n    return group._identity';
		$m.__track_lines__[17] = 'pyjsdl.sprite.py, line 17:\n    class Sprite(object):';
		$m.__track_lines__[29] = 'pyjsdl.sprite.py, line 29:\n    _identity = 0';
		$m.__track_lines__[31] = 'pyjsdl.sprite.py, line 31:\n    def __init__(self, *groups):';
		$m.__track_lines__[37] = 'pyjsdl.sprite.py, line 37:\n    self._identity = Sprite._identity';
		$m.__track_lines__[38] = 'pyjsdl.sprite.py, line 38:\n    Sprite._identity += 1';
		$m.__track_lines__[39] = 'pyjsdl.sprite.py, line 39:\n    self._groups = {}';
		$m.__track_lines__[40] = 'pyjsdl.sprite.py, line 40:\n    if groups:';
		$m.__track_lines__[41] = 'pyjsdl.sprite.py, line 41:\n    self.add(*groups)';
		$m.__track_lines__[43] = 'pyjsdl.sprite.py, line 43:\n    def __repr__(self):';
		$m.__track_lines__[47] = 'pyjsdl.sprite.py, line 47:\n    return "%s(in %d groups)" % (self.__class__, len(self._groups))';
		$m.__track_lines__[49] = 'pyjsdl.sprite.py, line 49:\n    def add(self, *groups):';
		$m.__track_lines__[53] = 'pyjsdl.sprite.py, line 53:\n    for group in groups:';
		$m.__track_lines__[54] = "pyjsdl.sprite.py, line 54:\n    if hasattr(group, '_sprites'):";
		$m.__track_lines__[55] = 'pyjsdl.sprite.py, line 55:\n    group.add(self)';
		$m.__track_lines__[57] = 'pyjsdl.sprite.py, line 57:\n    self.add(*group)';
		$m.__track_lines__[58] = 'pyjsdl.sprite.py, line 58:\n    return None';
		$m.__track_lines__[60] = 'pyjsdl.sprite.py, line 60:\n    def remove(self, *groups):';
		$m.__track_lines__[64] = 'pyjsdl.sprite.py, line 64:\n    for group in groups:';
		$m.__track_lines__[65] = "pyjsdl.sprite.py, line 65:\n    if hasattr(group, '_sprites'):";
		$m.__track_lines__[66] = 'pyjsdl.sprite.py, line 66:\n    group.remove(self)';
		$m.__track_lines__[68] = 'pyjsdl.sprite.py, line 68:\n    self.remove(*group)';
		$m.__track_lines__[69] = 'pyjsdl.sprite.py, line 69:\n    return None';
		$m.__track_lines__[71] = 'pyjsdl.sprite.py, line 71:\n    def kill(self):';
		$m.__track_lines__[75] = 'pyjsdl.sprite.py, line 75:\n    for group in self._groups.values():';
		$m.__track_lines__[76] = 'pyjsdl.sprite.py, line 76:\n    group.remove(self)';
		$m.__track_lines__[77] = 'pyjsdl.sprite.py, line 77:\n    return None';
		$m.__track_lines__[79] = 'pyjsdl.sprite.py, line 79:\n    def alive(self):';
		$m.__track_lines__[83] = 'pyjsdl.sprite.py, line 83:\n    if self._groups:';
		$m.__track_lines__[84] = 'pyjsdl.sprite.py, line 84:\n    return True';
		$m.__track_lines__[86] = 'pyjsdl.sprite.py, line 86:\n    return False';
		$m.__track_lines__[88] = 'pyjsdl.sprite.py, line 88:\n    def groups(self):';
		$m.__track_lines__[92] = 'pyjsdl.sprite.py, line 92:\n    return self._groups.values()';
		$m.__track_lines__[94] = 'pyjsdl.sprite.py, line 94:\n    def update(self, *args):';
		$m.__track_lines__[98] = 'pyjsdl.sprite.py, line 98:\n    pass';
		$m.__track_lines__[101] = 'pyjsdl.sprite.py, line 101:\n    class DirtySprite(Sprite):';
		$m.__track_lines__[109] = 'pyjsdl.sprite.py, line 109:\n    def __init__(self, *groups):';
		$m.__track_lines__[113] = 'pyjsdl.sprite.py, line 113:\n    Sprite.__init__(self, *groups)';
		$m.__track_lines__[116] = 'pyjsdl.sprite.py, line 116:\n    class Group(object):';
		$m.__track_lines__[131] = 'pyjsdl.sprite.py, line 131:\n    _identity = 0';
		$m.__track_lines__[133] = 'pyjsdl.sprite.py, line 133:\n    def __init__(self, *sprites):';
		$m.__track_lines__[138] = 'pyjsdl.sprite.py, line 138:\n    self._identity = Group._identity';
		$m.__track_lines__[139] = 'pyjsdl.sprite.py, line 139:\n    Group._identity += 1';
		$m.__track_lines__[140] = 'pyjsdl.sprite.py, line 140:\n    self._sprites = {}';
		$m.__track_lines__[141] = 'pyjsdl.sprite.py, line 141:\n    if sprites:';
		$m.__track_lines__[142] = 'pyjsdl.sprite.py, line 142:\n    self.add(*sprites)';
		$m.__track_lines__[143] = 'pyjsdl.sprite.py, line 143:\n    self._clear_active = False';
		$m.__track_lines__[144] = 'pyjsdl.sprite.py, line 144:\n    self._sprites_drawn = {}';
		$m.__track_lines__[146] = 'pyjsdl.sprite.py, line 146:\n    def __repr__(self):';
		$m.__track_lines__[150] = 'pyjsdl.sprite.py, line 150:\n    return "%s(%d sprites)" % (self.__class__, len(self._sprites))';
		$m.__track_lines__[152] = 'pyjsdl.sprite.py, line 152:\n    def __iter__(self):';
		$m.__track_lines__[156] = 'pyjsdl.sprite.py, line 156:\n    return self._sprites.itervalues()';
		$m.__track_lines__[158] = 'pyjsdl.sprite.py, line 158:\n    def __contains__(self, sprite):';
		$m.__track_lines__[162] = 'pyjsdl.sprite.py, line 162:\n    return id(sprite) in self._sprites';
		$m.__track_lines__[164] = 'pyjsdl.sprite.py, line 164:\n    def __len__(self):';
		$m.__track_lines__[168] = 'pyjsdl.sprite.py, line 168:\n    return len(self._sprites)';
		$m.__track_lines__[170] = 'pyjsdl.sprite.py, line 170:\n    def sprites(self):';
		$m.__track_lines__[174] = 'pyjsdl.sprite.py, line 174:\n    return self._sprites.values()';
		$m.__track_lines__[176] = 'pyjsdl.sprite.py, line 176:\n    def copy(self):';
		$m.__track_lines__[180] = 'pyjsdl.sprite.py, line 180:\n    newgroup = self.__class__()';
		$m.__track_lines__[181] = 'pyjsdl.sprite.py, line 181:\n    newgroup._sprites = self._sprites.copy()';
		$m.__track_lines__[182] = 'pyjsdl.sprite.py, line 182:\n    return newgroup';
		$m.__track_lines__[184] = 'pyjsdl.sprite.py, line 184:\n    def add(self, *sprites):';
		$m.__track_lines__[188] = 'pyjsdl.sprite.py, line 188:\n    for sprite in sprites:';
		$m.__track_lines__[189] = "pyjsdl.sprite.py, line 189:\n    if hasattr(sprite, '_groups'):";
		$m.__track_lines__[190] = 'pyjsdl.sprite.py, line 190:\n    spriteID = id(sprite)';
		$m.__track_lines__[191] = 'pyjsdl.sprite.py, line 191:\n    if spriteID not in self._sprites:';
		$m.__track_lines__[192] = 'pyjsdl.sprite.py, line 192:\n    self._sprites[spriteID] = sprite';
		$m.__track_lines__[193] = 'pyjsdl.sprite.py, line 193:\n    sprite._groups[id(self)] = self';
		$m.__track_lines__[195] = 'pyjsdl.sprite.py, line 195:\n    self.add(*sprite)';
		$m.__track_lines__[196] = 'pyjsdl.sprite.py, line 196:\n    return None';
		$m.__track_lines__[198] = 'pyjsdl.sprite.py, line 198:\n    def remove(self, *sprites):';
		$m.__track_lines__[202] = 'pyjsdl.sprite.py, line 202:\n    for sprite in sprites:';
		$m.__track_lines__[203] = "pyjsdl.sprite.py, line 203:\n    if hasattr(sprite, '_groups'):";
		$m.__track_lines__[204] = 'pyjsdl.sprite.py, line 204:\n    spriteID = id(sprite)';
		$m.__track_lines__[205] = 'pyjsdl.sprite.py, line 205:\n    if spriteID in self._sprites:';
		$m.__track_lines__[206] = 'pyjsdl.sprite.py, line 206:\n    del self._sprites[spriteID]';
		$m.__track_lines__[207] = 'pyjsdl.sprite.py, line 207:\n    del sprite._groups[id(self)]';
		$m.__track_lines__[209] = 'pyjsdl.sprite.py, line 209:\n    self.remove(*sprite)';
		$m.__track_lines__[210] = 'pyjsdl.sprite.py, line 210:\n    return None';
		$m.__track_lines__[212] = 'pyjsdl.sprite.py, line 212:\n    def has(self, *sprites):';
		$m.__track_lines__[216] = 'pyjsdl.sprite.py, line 216:\n    for sprite in sprites:';
		$m.__track_lines__[217] = "pyjsdl.sprite.py, line 217:\n    if hasattr(sprite, '_groups'):";
		$m.__track_lines__[218] = 'pyjsdl.sprite.py, line 218:\n    if id(sprite) not in self._sprites:';
		$m.__track_lines__[219] = 'pyjsdl.sprite.py, line 219:\n    return False';
		$m.__track_lines__[221] = 'pyjsdl.sprite.py, line 221:\n    if not self.has(*sprite):';
		$m.__track_lines__[222] = 'pyjsdl.sprite.py, line 222:\n    return False';
		$m.__track_lines__[223] = 'pyjsdl.sprite.py, line 223:\n    return True';
		$m.__track_lines__[225] = 'pyjsdl.sprite.py, line 225:\n    def draw(self, surface):';
		$m.__track_lines__[229] = 'pyjsdl.sprite.py, line 229:\n    surface._blits(self._sprites.itervalues())';
		$m.__track_lines__[230] = 'pyjsdl.sprite.py, line 230:\n    if self._clear_active:';
		$m.__track_lines__[231] = 'pyjsdl.sprite.py, line 231:\n    rectPool.extend(self._sprites_drawn.itervalues())';
		$m.__track_lines__[232] = 'pyjsdl.sprite.py, line 232:\n    self._sprites_drawn.clear()';
		$m.__track_lines__[233] = 'pyjsdl.sprite.py, line 233:\n    for sprite in self._sprites:';
		$m.__track_lines__[234] = 'pyjsdl.sprite.py, line 234:\n    self._sprites_drawn[sprite] = rectPool.copy(self._sprites[sprite].rect)';
		$m.__track_lines__[235] = 'pyjsdl.sprite.py, line 235:\n    return None';
		$m.__track_lines__[237] = 'pyjsdl.sprite.py, line 237:\n    def clear(self, surface, background):';
		$m.__track_lines__[242] = 'pyjsdl.sprite.py, line 242:\n    self._clear_active = True';
		$m.__track_lines__[243] = "pyjsdl.sprite.py, line 243:\n    if hasattr(background, 'width'):";
		$m.__track_lines__[244] = 'pyjsdl.sprite.py, line 244:\n    surface._blit_clear(background, self._sprites_drawn.itervalues())';
		$m.__track_lines__[246] = 'pyjsdl.sprite.py, line 246:\n    for sprite in self._sprites_drawn:';
		$m.__track_lines__[247] = 'pyjsdl.sprite.py, line 247:\n    background(surface, self._sprites_drawn[sprite])';
		$m.__track_lines__[249] = 'pyjsdl.sprite.py, line 249:\n    def empty(self):';
		$m.__track_lines__[253] = 'pyjsdl.sprite.py, line 253:\n    for sprite in self._sprites.itervalues():';
		$m.__track_lines__[254] = 'pyjsdl.sprite.py, line 254:\n    del sprite._groups[id(self)]';
		$m.__track_lines__[255] = 'pyjsdl.sprite.py, line 255:\n    self._sprites.clear()';
		$m.__track_lines__[256] = 'pyjsdl.sprite.py, line 256:\n    return None';
		$m.__track_lines__[258] = 'pyjsdl.sprite.py, line 258:\n    def update(self, *args):';
		$m.__track_lines__[262] = 'pyjsdl.sprite.py, line 262:\n    for sprite in self._sprites.values():';
		$m.__track_lines__[263] = 'pyjsdl.sprite.py, line 263:\n    sprite.update(*args)';
		$m.__track_lines__[264] = 'pyjsdl.sprite.py, line 264:\n    return None';
		$m.__track_lines__[267] = 'pyjsdl.sprite.py, line 267:\n    class GroupSingle(Group):';
		$m.__track_lines__[274] = 'pyjsdl.sprite.py, line 274:\n    def __init__(self, sprite=None):';
		$m.__track_lines__[279] = 'pyjsdl.sprite.py, line 279:\n    if sprite:';
		$m.__track_lines__[280] = 'pyjsdl.sprite.py, line 280:\n    Group.__init__(self, sprite)';
		$m.__track_lines__[282] = 'pyjsdl.sprite.py, line 282:\n    Group.__init__(self)';
		$m.__track_lines__[284] = 'pyjsdl.sprite.py, line 284:\n    def __getattr__(self, attr):';
		$m.__track_lines__[288] = "pyjsdl.sprite.py, line 288:\n    if attr == 'sprite':";
		$m.__track_lines__[289] = 'pyjsdl.sprite.py, line 289:\n    if self._sprites:';
		$m.__track_lines__[290] = 'pyjsdl.sprite.py, line 290:\n    return self._sprites.values()[0]';
		$m.__track_lines__[292] = 'pyjsdl.sprite.py, line 292:\n    return None';
		$m.__track_lines__[294] = 'pyjsdl.sprite.py, line 294:\n    def add(self, sprite):';
		$m.__track_lines__[298] = 'pyjsdl.sprite.py, line 298:\n    self.empty()';
		$m.__track_lines__[299] = 'pyjsdl.sprite.py, line 299:\n    self._sprites[id(sprite)] = sprite';
		$m.__track_lines__[300] = 'pyjsdl.sprite.py, line 300:\n    sprite._groups[id(self)] = self';
		$m.__track_lines__[301] = 'pyjsdl.sprite.py, line 301:\n    return None';
		$m.__track_lines__[303] = 'pyjsdl.sprite.py, line 303:\n    def update(self, *args):';
		$m.__track_lines__[307] = 'pyjsdl.sprite.py, line 307:\n    if self._sprites:';
		$m.__track_lines__[308] = 'pyjsdl.sprite.py, line 308:\n    self._sprites.values()[0].update(*args)';
		$m.__track_lines__[309] = 'pyjsdl.sprite.py, line 309:\n    return None';
		$m.__track_lines__[312] = 'pyjsdl.sprite.py, line 312:\n    class RenderUpdates(Group):';
		$m.__track_lines__[319] = 'pyjsdl.sprite.py, line 319:\n    def __init__(self, *sprites):';
		$m.__track_lines__[324] = 'pyjsdl.sprite.py, line 324:\n    Group.__init__(self, *sprites)';
		$m.__track_lines__[325] = 'pyjsdl.sprite.py, line 325:\n    self.changed_areas = []';
		$m.__track_lines__[327] = 'pyjsdl.sprite.py, line 327:\n    def draw(self, surface):';
		$m.__track_lines__[332] = 'pyjsdl.sprite.py, line 332:\n    surface._blits(self._sprites.itervalues())';
		$m.__track_lines__[333] = 'pyjsdl.sprite.py, line 333:\n    if self._clear_active:';
		$m.__track_lines__[334] = 'pyjsdl.sprite.py, line 334:\n    rectPool.extend(self.changed_areas)';
		$m.__track_lines__[335] = 'pyjsdl.sprite.py, line 335:\n    self.changed_areas[:] = []';
		$m.__track_lines__[336] = 'pyjsdl.sprite.py, line 336:\n    for sprite in self._sprites:';
		$m.__track_lines__[337] = 'pyjsdl.sprite.py, line 337:\n    if sprite in self._sprites_drawn:';
		$m.__track_lines__[338] = 'pyjsdl.sprite.py, line 338:\n    if self._sprites_drawn[sprite].intersects(self._sprites[sprite].rect):';
		$m.__track_lines__[339] = 'pyjsdl.sprite.py, line 339:\n    self._sprites_drawn[sprite].union_ip(self._sprites[sprite].rect)';
		$m.__track_lines__[341] = 'pyjsdl.sprite.py, line 341:\n    self.changed_areas.append(rectPool.copy(self._sprites[sprite].rect))';
		$m.__track_lines__[343] = 'pyjsdl.sprite.py, line 343:\n    self.changed_areas.append(rectPool.copy(self._sprites[sprite].rect))';
		$m.__track_lines__[344] = 'pyjsdl.sprite.py, line 344:\n    self.changed_areas.extend(self._sprites_drawn.itervalues())';
		$m.__track_lines__[345] = 'pyjsdl.sprite.py, line 345:\n    self._sprites_drawn.clear()';
		$m.__track_lines__[346] = 'pyjsdl.sprite.py, line 346:\n    for sprite in self._sprites:';
		$m.__track_lines__[347] = 'pyjsdl.sprite.py, line 347:\n    self._sprites_drawn[sprite] = rectPool.copy(self._sprites[sprite].rect)';
		$m.__track_lines__[349] = 'pyjsdl.sprite.py, line 349:\n    rectPool.extend(self.changed_areas)';
		$m.__track_lines__[350] = 'pyjsdl.sprite.py, line 350:\n    self.changed_areas[:] = []';
		$m.__track_lines__[351] = 'pyjsdl.sprite.py, line 351:\n    self.changed_areas.extend([rectPool.copy(sprite.rect) for sprite in self._sprites.itervalues()])';
		$m.__track_lines__[352] = 'pyjsdl.sprite.py, line 352:\n    return self.changed_areas';
		$m.__track_lines__[355] = 'pyjsdl.sprite.py, line 355:\n    class OrderedUpdates(RenderUpdates):';
		$m.__track_lines__[362] = 'pyjsdl.sprite.py, line 362:\n    def __init__(self, *sprites):';
		$m.__track_lines__[367] = 'pyjsdl.sprite.py, line 367:\n    self.order = {}';
		$m.__track_lines__[368] = 'pyjsdl.sprite.py, line 368:\n    self.place = {}';
		$m.__track_lines__[369] = 'pyjsdl.sprite.py, line 369:\n    self.range = 1000';
		$m.__track_lines__[370] = 'pyjsdl.sprite.py, line 370:\n    self.index = iter(xrange(self.range))';
		$m.__track_lines__[371] = 'pyjsdl.sprite.py, line 371:\n    self.sort = None';
		$m.__track_lines__[372] = 'pyjsdl.sprite.py, line 372:\n    for sprite in sprites:';
		$m.__track_lines__[373] = 'pyjsdl.sprite.py, line 373:\n    if sprite not in self._sprites:';
		$m.__track_lines__[374] = 'pyjsdl.sprite.py, line 374:\n    spriteID = id(sprite)';
		$m.__track_lines__[375] = 'pyjsdl.sprite.py, line 375:\n    index = self.index.next()';
		$m.__track_lines__[376] = 'pyjsdl.sprite.py, line 376:\n    self.order[index] = spriteID';
		$m.__track_lines__[377] = 'pyjsdl.sprite.py, line 377:\n    self.place[spriteID] = index';
		$m.__track_lines__[378] = 'pyjsdl.sprite.py, line 378:\n    RenderUpdates.__init__(self, *sprites)';
		$m.__track_lines__[380] = 'pyjsdl.sprite.py, line 380:\n    def __iter__(self):';
		$m.__track_lines__[384] = 'pyjsdl.sprite.py, line 384:\n    if self.sort:';
		$m.__track_lines__[385] = 'pyjsdl.sprite.py, line 385:\n    order_sprite = iter(self.sort)';
		$m.__track_lines__[387] = 'pyjsdl.sprite.py, line 387:\n    keys = self.order.keys()';
		$m.__track_lines__[388] = 'pyjsdl.sprite.py, line 388:\n    keys.sort()';
		$m.__track_lines__[389] = 'pyjsdl.sprite.py, line 389:\n    self.sort = [self._sprites[self.order[key]] for key in keys]';
		$m.__track_lines__[390] = 'pyjsdl.sprite.py, line 390:\n    order_sprite = iter(self.sort)';
		$m.__track_lines__[391] = 'pyjsdl.sprite.py, line 391:\n    return order_sprite';
		$m.__track_lines__[393] = 'pyjsdl.sprite.py, line 393:\n    def sprites(self):';
		$m.__track_lines__[397] = 'pyjsdl.sprite.py, line 397:\n    if self.sort:';
		$m.__track_lines__[398] = 'pyjsdl.sprite.py, line 398:\n    order_sprite = self.sort[:]';
		$m.__track_lines__[400] = 'pyjsdl.sprite.py, line 400:\n    keys = self.order.keys()';
		$m.__track_lines__[401] = 'pyjsdl.sprite.py, line 401:\n    keys.sort()';
		$m.__track_lines__[402] = 'pyjsdl.sprite.py, line 402:\n    self.sort = [self._sprites[self.order[key]] for key in keys]';
		$m.__track_lines__[403] = 'pyjsdl.sprite.py, line 403:\n    order_sprite = self.sort[:]';
		$m.__track_lines__[404] = 'pyjsdl.sprite.py, line 404:\n    return order_sprite';
		$m.__track_lines__[406] = 'pyjsdl.sprite.py, line 406:\n    def copy(self):';
		$m.__track_lines__[410] = 'pyjsdl.sprite.py, line 410:\n    newgroup = RenderUpdates.copy(self)';
		$m.__track_lines__[411] = 'pyjsdl.sprite.py, line 411:\n    newgroup.order = self.order.copy()';
		$m.__track_lines__[412] = 'pyjsdl.sprite.py, line 412:\n    newgroup.place = self.place.copy()';
		$m.__track_lines__[413] = 'pyjsdl.sprite.py, line 413:\n    newgroup.range = self.range';
		$m.__track_lines__[414] = 'pyjsdl.sprite.py, line 414:\n    newgroup.index = iter(xrange(max(self.order.keys())+1,self.range))';
		$m.__track_lines__[415] = 'pyjsdl.sprite.py, line 415:\n    return newgroup';
		$m.__track_lines__[417] = 'pyjsdl.sprite.py, line 417:\n    def add(self, *sprites):';
		$m.__track_lines__[421] = 'pyjsdl.sprite.py, line 421:\n    for sprite in sprites:';
		$m.__track_lines__[422] = 'pyjsdl.sprite.py, line 422:\n    if sprite not in self._sprites:';
		$m.__track_lines__[423] = 'pyjsdl.sprite.py, line 423:\n    index = self._get_index()';
		$m.__track_lines__[424] = 'pyjsdl.sprite.py, line 424:\n    if index is not None:';
		$m.__track_lines__[425] = 'pyjsdl.sprite.py, line 425:\n    spriteID = id(sprite)';
		$m.__track_lines__[426] = 'pyjsdl.sprite.py, line 426:\n    self.order[index] = spriteID';
		$m.__track_lines__[427] = 'pyjsdl.sprite.py, line 427:\n    self.place[spriteID] = index';
		$m.__track_lines__[429] = 'pyjsdl.sprite.py, line 429:\n    keys = self.order.keys()';
		$m.__track_lines__[430] = 'pyjsdl.sprite.py, line 430:\n    keys.sort()';
		$m.__track_lines__[431] = 'pyjsdl.sprite.py, line 431:\n    if len(keys)*2 > self.range:';
		$m.__track_lines__[432] = 'pyjsdl.sprite.py, line 432:\n    self.range = len(keys)*2';
		$m.__track_lines__[433] = 'pyjsdl.sprite.py, line 433:\n    self.index = iter(xrange(self.range))';
		$m.__track_lines__[434] = 'pyjsdl.sprite.py, line 434:\n    order = self.order';
		$m.__track_lines__[435] = 'pyjsdl.sprite.py, line 435:\n    self.order = {}';
		$m.__track_lines__[436] = 'pyjsdl.sprite.py, line 436:\n    self.place = {}';
		$m.__track_lines__[437] = 'pyjsdl.sprite.py, line 437:\n    for key in keys:';
		$m.__track_lines__[438] = 'pyjsdl.sprite.py, line 438:\n    index = self.index.next()';
		$m.__track_lines__[439] = 'pyjsdl.sprite.py, line 439:\n    self.order[index] = order[key]';
		$m.__track_lines__[440] = 'pyjsdl.sprite.py, line 440:\n    self.place[order[key]] = index';
		$m.__track_lines__[441] = 'pyjsdl.sprite.py, line 441:\n    index = self.index.next()';
		$m.__track_lines__[442] = 'pyjsdl.sprite.py, line 442:\n    spriteID = id(sprite)';
		$m.__track_lines__[443] = 'pyjsdl.sprite.py, line 443:\n    self.order[index] = spriteID';
		$m.__track_lines__[444] = 'pyjsdl.sprite.py, line 444:\n    self.place[spriteID] = index';
		$m.__track_lines__[445] = 'pyjsdl.sprite.py, line 445:\n    self.sort = None';
		$m.__track_lines__[446] = 'pyjsdl.sprite.py, line 446:\n    RenderUpdates.add(self, *sprites)';
		$m.__track_lines__[447] = 'pyjsdl.sprite.py, line 447:\n    return None';
		$m.__track_lines__[449] = 'pyjsdl.sprite.py, line 449:\n    def _get_index(self):';
		$m.__track_lines__[450] = 'pyjsdl.sprite.py, line 450:\n    try:';
		$m.__track_lines__[451] = 'pyjsdl.sprite.py, line 451:\n    return self.index.next()';
		$m.__track_lines__[453] = 'pyjsdl.sprite.py, line 453:\n    return None';
		$m.__track_lines__[455] = 'pyjsdl.sprite.py, line 455:\n    def remove(self, *sprites):';
		$m.__track_lines__[459] = 'pyjsdl.sprite.py, line 459:\n    for sprite in sprites:';
		$m.__track_lines__[460] = 'pyjsdl.sprite.py, line 460:\n    spriteID = id(sprite)';
		$m.__track_lines__[461] = 'pyjsdl.sprite.py, line 461:\n    if spriteID in self.place:';
		$m.__track_lines__[462] = 'pyjsdl.sprite.py, line 462:\n    del self.order[self.place[spriteID]]';
		$m.__track_lines__[463] = 'pyjsdl.sprite.py, line 463:\n    del self.place[spriteID]';
		$m.__track_lines__[464] = 'pyjsdl.sprite.py, line 464:\n    self.sort = None';
		$m.__track_lines__[465] = 'pyjsdl.sprite.py, line 465:\n    RenderUpdates.remove(self, *sprites)';
		$m.__track_lines__[466] = 'pyjsdl.sprite.py, line 466:\n    return None';
		$m.__track_lines__[468] = 'pyjsdl.sprite.py, line 468:\n    def empty(self):';
		$m.__track_lines__[472] = 'pyjsdl.sprite.py, line 472:\n    self.order = {}';
		$m.__track_lines__[473] = 'pyjsdl.sprite.py, line 473:\n    self.place = {}';
		$m.__track_lines__[474] = 'pyjsdl.sprite.py, line 474:\n    self.index = iter(xrange(self.range))';
		$m.__track_lines__[475] = 'pyjsdl.sprite.py, line 475:\n    self.sort = None';
		$m.__track_lines__[476] = 'pyjsdl.sprite.py, line 476:\n    RenderUpdates.empty(self)';
		$m.__track_lines__[478] = 'pyjsdl.sprite.py, line 478:\n    def draw(self, surface):';
		$m.__track_lines__[482] = 'pyjsdl.sprite.py, line 482:\n    if self.sort:';
		$m.__track_lines__[483] = 'pyjsdl.sprite.py, line 483:\n    order_sprite = iter(self.sort)';
		$m.__track_lines__[485] = 'pyjsdl.sprite.py, line 485:\n    keys = self.order.keys()';
		$m.__track_lines__[486] = 'pyjsdl.sprite.py, line 486:\n    keys.sort()';
		$m.__track_lines__[487] = 'pyjsdl.sprite.py, line 487:\n    self.sort = [self._sprites[self.order[key]] for key in keys]';
		$m.__track_lines__[488] = 'pyjsdl.sprite.py, line 488:\n    order_sprite = iter(self.sort)';
		$m.__track_lines__[489] = 'pyjsdl.sprite.py, line 489:\n    surface._blits(order_sprite)';
		$m.__track_lines__[490] = 'pyjsdl.sprite.py, line 490:\n    if self._clear_active:';
		$m.__track_lines__[491] = 'pyjsdl.sprite.py, line 491:\n    rectPool.extend(self.changed_areas)';
		$m.__track_lines__[492] = 'pyjsdl.sprite.py, line 492:\n    self.changed_areas[:] = []';
		$m.__track_lines__[493] = 'pyjsdl.sprite.py, line 493:\n    for sprite in self._sprites:';
		$m.__track_lines__[494] = 'pyjsdl.sprite.py, line 494:\n    if sprite in self._sprites_drawn:';
		$m.__track_lines__[495] = 'pyjsdl.sprite.py, line 495:\n    if self._sprites_drawn[sprite].intersects(self._sprites[sprite].rect):';
		$m.__track_lines__[496] = 'pyjsdl.sprite.py, line 496:\n    self._sprites_drawn[sprite].union_ip(self._sprites[sprite].rect)';
		$m.__track_lines__[498] = 'pyjsdl.sprite.py, line 498:\n    self.changed_areas.append(rectPool.copy(self._sprites[sprite].rect))';
		$m.__track_lines__[500] = 'pyjsdl.sprite.py, line 500:\n    self.changed_areas.append(rectPool.copy(self._sprites[sprite].rect))';
		$m.__track_lines__[501] = 'pyjsdl.sprite.py, line 501:\n    self.changed_areas.extend(self._sprites_drawn.itervalues())';
		$m.__track_lines__[502] = 'pyjsdl.sprite.py, line 502:\n    self._sprites_drawn.clear()';
		$m.__track_lines__[503] = 'pyjsdl.sprite.py, line 503:\n    for sprite in self._sprites:';
		$m.__track_lines__[504] = 'pyjsdl.sprite.py, line 504:\n    self._sprites_drawn[sprite] = rectPool.copy(self._sprites[sprite].rect)';
		$m.__track_lines__[506] = 'pyjsdl.sprite.py, line 506:\n    rectPool.extend(self.changed_areas)';
		$m.__track_lines__[507] = 'pyjsdl.sprite.py, line 507:\n    self.changed_areas[:] = []';
		$m.__track_lines__[508] = 'pyjsdl.sprite.py, line 508:\n    self.changed_areas.extend([rectPool.copy(sprite.rect) for sprite in self._sprites.itervalues()])';
		$m.__track_lines__[509] = 'pyjsdl.sprite.py, line 509:\n    return self.changed_areas';
		$m.__track_lines__[512] = 'pyjsdl.sprite.py, line 512:\n    class LayeredUpdates(OrderedUpdates):';
		$m.__track_lines__[520] = 'pyjsdl.sprite.py, line 520:\n    def __init__(self, *sprites):';
		$m.__track_lines__[524] = 'pyjsdl.sprite.py, line 524:\n    OrderedUpdates(self, *sprites)';
		$m.__track_lines__[527] = 'pyjsdl.sprite.py, line 527:\n    class LayeredDirty(LayeredUpdates):';
		$m.__track_lines__[535] = 'pyjsdl.sprite.py, line 535:\n    def __init__(self, *sprites):';
		$m.__track_lines__[539] = 'pyjsdl.sprite.py, line 539:\n    LayeredUpdates(self, *sprites)';
		$m.__track_lines__[542] = 'pyjsdl.sprite.py, line 542:\n    def spritecollide(sprite, group, dokill, collided=None):';
		$m.__track_lines__[550] = 'pyjsdl.sprite.py, line 550:\n    collide = []';
		$m.__track_lines__[551] = 'pyjsdl.sprite.py, line 551:\n    for sprites in group:';
		$m.__track_lines__[552] = 'pyjsdl.sprite.py, line 552:\n    if sprite.rect.intersects(sprites.rect):';
		$m.__track_lines__[553] = 'pyjsdl.sprite.py, line 553:\n    if collided:';
		$m.__track_lines__[554] = 'pyjsdl.sprite.py, line 554:\n    if not collided(sprite,sprites):';
		$m.__track_lines__[555] = 'pyjsdl.sprite.py, line 555:\n    continue';
		$m.__track_lines__[556] = 'pyjsdl.sprite.py, line 556:\n    collide.append(sprites)';
		$m.__track_lines__[557] = 'pyjsdl.sprite.py, line 557:\n    if collide and dokill:';
		$m.__track_lines__[558] = 'pyjsdl.sprite.py, line 558:\n    for sprite in collide:';
		$m.__track_lines__[559] = 'pyjsdl.sprite.py, line 559:\n    sprite.kill()';
		$m.__track_lines__[560] = 'pyjsdl.sprite.py, line 560:\n    return collide';
		$m.__track_lines__[563] = 'pyjsdl.sprite.py, line 563:\n    def collide_rect(sprite1, sprite2):';
		$m.__track_lines__[570] = 'pyjsdl.sprite.py, line 570:\n    return sprite1.rect.intersects(sprite2.rect)';
		$m.__track_lines__[573] = 'pyjsdl.sprite.py, line 573:\n    def collide_rect_ratio(ratio):';
		$m.__track_lines__[581] = 'pyjsdl.sprite.py, line 581:\n    obj = _collide_rect_ratio(ratio)';
		$m.__track_lines__[582] = 'pyjsdl.sprite.py, line 582:\n    return lambda sprite1,sprite2: obj.__call__(sprite1,sprite2)';
		$m.__track_lines__[585] = 'pyjsdl.sprite.py, line 585:\n    class _collide_rect_ratio(object):';
		$m.__track_lines__[587] = "pyjsdl.sprite.py, line 587:\n    __slots__ = ['ratio']";
		$m.__track_lines__[589] = 'pyjsdl.sprite.py, line 589:\n    def __init__(self, ratio):';
		$m.__track_lines__[590] = 'pyjsdl.sprite.py, line 590:\n    self.ratio = ratio';
		$m.__track_lines__[592] = 'pyjsdl.sprite.py, line 592:\n    def __call__(self, sprite1, sprite2):   #__call__ not implemented in pyjs';
		$m.__track_lines__[593] = 'pyjsdl.sprite.py, line 593:\n    r = sprite1.rect';
		$m.__track_lines__[594] = 'pyjsdl.sprite.py, line 594:\n    x = (r.width*self.ratio)-r.width';
		$m.__track_lines__[595] = 'pyjsdl.sprite.py, line 595:\n    y = (r.height*self.ratio)-r.height';
		$m.__track_lines__[596] = 'pyjsdl.sprite.py, line 596:\n    r1 = rectPool.get(r.x-int(x*0.5), r.y-int(y*0.5), r.width+int(x), r.height+int(y))';
		$m.__track_lines__[597] = 'pyjsdl.sprite.py, line 597:\n    r = sprite2.rect';
		$m.__track_lines__[598] = 'pyjsdl.sprite.py, line 598:\n    x = (r.width*self.ratio)-r.width';
		$m.__track_lines__[599] = 'pyjsdl.sprite.py, line 599:\n    y = (r.height*self.ratio)-r.height';
		$m.__track_lines__[600] = 'pyjsdl.sprite.py, line 600:\n    r2 = rectPool.get(r.x-int(x*0.5), r.y-int(y*0.5), r.width+int(x), r.height+int(y))';
		$m.__track_lines__[601] = 'pyjsdl.sprite.py, line 601:\n    collide = r1.intersects(r2)';
		$m.__track_lines__[602] = 'pyjsdl.sprite.py, line 602:\n    rectPool.extend((r1,r2))';
		$m.__track_lines__[603] = 'pyjsdl.sprite.py, line 603:\n    return collide';
		$m.__track_lines__[606] = 'pyjsdl.sprite.py, line 606:\n    def collide_circle(sprite1, sprite2):';
		$m.__track_lines__[614] = "pyjsdl.sprite.py, line 614:\n    if hasattr(sprite1, 'radius'):";
		$m.__track_lines__[615] = 'pyjsdl.sprite.py, line 615:\n    radius1 = sprite1.radius';
		$m.__track_lines__[617] = 'pyjsdl.sprite.py, line 617:\n    radius1 = ( (((sprite1.rect.width)**2) + ((sprite1.rect.height)**2))**0.5 ) * 0.5';
		$m.__track_lines__[618] = "pyjsdl.sprite.py, line 618:\n    if hasattr(sprite2, 'radius'):";
		$m.__track_lines__[619] = 'pyjsdl.sprite.py, line 619:\n    radius2 = sprite2.radius';
		$m.__track_lines__[621] = 'pyjsdl.sprite.py, line 621:\n    radius2 = ( (((sprite2.rect.width)**2) + ((sprite2.rect.height)**2))**0.5 ) * 0.5';
		$m.__track_lines__[622] = 'pyjsdl.sprite.py, line 622:\n    sx1 = (sprite1.rect.x+int(sprite1.rect.width*0.5))';
		$m.__track_lines__[623] = 'pyjsdl.sprite.py, line 623:\n    sy1 = (sprite1.rect.y+int(sprite1.rect.height*0.5))';
		$m.__track_lines__[624] = 'pyjsdl.sprite.py, line 624:\n    sx2 = (sprite2.rect.x+int(sprite2.rect.width*0.5))';
		$m.__track_lines__[625] = 'pyjsdl.sprite.py, line 625:\n    sy2 = (sprite2.rect.y+int(sprite2.rect.height*0.5))';
		$m.__track_lines__[626] = 'pyjsdl.sprite.py, line 626:\n    return ( ((sx1-sx2)**2 + (sy1-sy2)**2) ) < (radius1**2+radius2**2)';
		$m.__track_lines__[629] = 'pyjsdl.sprite.py, line 629:\n    def collide_circle_ratio(ratio):';
		$m.__track_lines__[638] = 'pyjsdl.sprite.py, line 638:\n    obj = _collide_circle_ratio(ratio)';
		$m.__track_lines__[639] = 'pyjsdl.sprite.py, line 639:\n    return lambda sprite1,sprite2: obj.__call__(sprite1,sprite2)';
		$m.__track_lines__[642] = 'pyjsdl.sprite.py, line 642:\n    class _collide_circle_ratio(object):';
		$m.__track_lines__[644] = "pyjsdl.sprite.py, line 644:\n    __slots__ = ['ratio']";
		$m.__track_lines__[646] = 'pyjsdl.sprite.py, line 646:\n    def __init__(self, ratio):';
		$m.__track_lines__[647] = 'pyjsdl.sprite.py, line 647:\n    self.ratio = ratio';
		$m.__track_lines__[649] = 'pyjsdl.sprite.py, line 649:\n    def __call__(self, sprite1, sprite2):   #__call__ not implemented in pyjs';
		$m.__track_lines__[650] = "pyjsdl.sprite.py, line 650:\n    if hasattr(sprite1, 'radius'):";
		$m.__track_lines__[651] = 'pyjsdl.sprite.py, line 651:\n    radius1 = sprite1.radius * self.ratio';
		$m.__track_lines__[653] = 'pyjsdl.sprite.py, line 653:\n    radius1 = ( (((sprite1.rect.width)**2) + ((sprite1.rect.height)**2))**0.5 ) * 0.5 * self.ratio';
		$m.__track_lines__[654] = "pyjsdl.sprite.py, line 654:\n    if hasattr(sprite2, 'radius'):";
		$m.__track_lines__[655] = 'pyjsdl.sprite.py, line 655:\n    radius2 = sprite2.radius * self.ratio';
		$m.__track_lines__[657] = 'pyjsdl.sprite.py, line 657:\n    radius2 = ( (((sprite2.rect.width)**2) + ((sprite2.rect.height)**2))**0.5 ) * 0.5 * self.ratio';
		$m.__track_lines__[658] = 'pyjsdl.sprite.py, line 658:\n    sx1 = (sprite1.rect.x+int(sprite1.rect.width*0.5))';
		$m.__track_lines__[659] = 'pyjsdl.sprite.py, line 659:\n    sy1 = (sprite1.rect.y+int(sprite1.rect.height*0.5))';
		$m.__track_lines__[660] = 'pyjsdl.sprite.py, line 660:\n    sx2 = (sprite2.rect.x+int(sprite2.rect.width*0.5))';
		$m.__track_lines__[661] = 'pyjsdl.sprite.py, line 661:\n    sy2 = (sprite2.rect.y+int(sprite2.rect.height*0.5))';
		$m.__track_lines__[662] = 'pyjsdl.sprite.py, line 662:\n    return ( ((sx1-sx2)**2 + (sy1-sy2)**2) ) < (radius1**2+radius2**2)';
		$m.__track_lines__[665] = 'pyjsdl.sprite.py, line 665:\n    def collide_mask(sprite1, sprite2):';
		$m.__track_lines__[673] = "pyjsdl.sprite.py, line 673:\n    if hasattr(sprite1, 'mask'):";
		$m.__track_lines__[674] = 'pyjsdl.sprite.py, line 674:\n    mask1 = sprite1.mask';
		$m.__track_lines__[676] = 'pyjsdl.sprite.py, line 676:\n    mask1 = mask.from_surface(sprite1.image)';
		$m.__track_lines__[677] = "pyjsdl.sprite.py, line 677:\n    if hasattr(sprite2, 'mask'):";
		$m.__track_lines__[678] = 'pyjsdl.sprite.py, line 678:\n    mask2 = sprite2.mask';
		$m.__track_lines__[680] = 'pyjsdl.sprite.py, line 680:\n    mask2 = mask.from_surface(sprite2.image)';
		$m.__track_lines__[681] = 'pyjsdl.sprite.py, line 681:\n    if mask1.overlap(mask2, (sprite2.rect.x-sprite1.rect.x,sprite2.rect.y-sprite1.rect.y)):';
		$m.__track_lines__[682] = 'pyjsdl.sprite.py, line 682:\n    return True';
		$m.__track_lines__[684] = 'pyjsdl.sprite.py, line 684:\n    return False';
		$m.__track_lines__[687] = 'pyjsdl.sprite.py, line 687:\n    def groupcollide(group1, group2, dokill1, dokill2):';
		$m.__track_lines__[694] = 'pyjsdl.sprite.py, line 694:\n    collide = {}';
		$m.__track_lines__[695] = 'pyjsdl.sprite.py, line 695:\n    for sprite1 in group1:';
		$m.__track_lines__[696] = 'pyjsdl.sprite.py, line 696:\n    for sprite2 in group2:';
		$m.__track_lines__[697] = 'pyjsdl.sprite.py, line 697:\n    if sprite1.rect.intersects(sprite2.rect):';
		$m.__track_lines__[698] = 'pyjsdl.sprite.py, line 698:\n    if sprite1 not in collide:';
		$m.__track_lines__[699] = 'pyjsdl.sprite.py, line 699:\n    collide[sprite1] = []';
		$m.__track_lines__[700] = 'pyjsdl.sprite.py, line 700:\n    collide[sprite1].append(sprite2)';
		$m.__track_lines__[701] = 'pyjsdl.sprite.py, line 701:\n    if collide:';
		$m.__track_lines__[702] = 'pyjsdl.sprite.py, line 702:\n    if dokill1:';
		$m.__track_lines__[703] = 'pyjsdl.sprite.py, line 703:\n    for sprite1 in collide:';
		$m.__track_lines__[704] = 'pyjsdl.sprite.py, line 704:\n    sprite1.kill()';
		$m.__track_lines__[705] = 'pyjsdl.sprite.py, line 705:\n    if dokill2:';
		$m.__track_lines__[706] = 'pyjsdl.sprite.py, line 706:\n    for sprite1 in collide:';
		$m.__track_lines__[707] = 'pyjsdl.sprite.py, line 707:\n    for sprite2 in collide[sprite1]:';
		$m.__track_lines__[708] = 'pyjsdl.sprite.py, line 708:\n    sprite2.kill()';
		$m.__track_lines__[709] = 'pyjsdl.sprite.py, line 709:\n    return collide';
		$m.__track_lines__[712] = 'pyjsdl.sprite.py, line 712:\n    def spritecollideany(sprite, group):';
		$m.__track_lines__[718] = 'pyjsdl.sprite.py, line 718:\n    for sprites in group:';
		$m.__track_lines__[719] = 'pyjsdl.sprite.py, line 719:\n    if sprite.rect.intersects(sprites.rect):';
		$m.__track_lines__[720] = 'pyjsdl.sprite.py, line 720:\n    return True';
		$m.__track_lines__[721] = 'pyjsdl.sprite.py, line 721:\n    return False';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_1000 = new $p['int'](1000);
		$pyjs['track']['module']='pyjsdl.sprite';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['rectPool'] = $p['___import___']('pyjsdl.rect.rectPool', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['mask'] = $p['___import___']('pyjsdl.mask', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=10;
		$m['id'] = function(sprite) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.sprite','lineno':10};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=10;
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=11;
			var $pyjs__ret = $p['getattr'](sprite, '_identity');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['id']['__name__'] = 'id';

		$m['id']['__bind_type__'] = 0;
		$m['id']['__args__'] = [null,null,['sprite']];
		$pyjs['track']['lineno']=13;
		$m['id'] = function(group) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.sprite','lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=13;
			$pyjs['track']['lineno']=14;
			$pyjs['track']['lineno']=14;
			var $pyjs__ret = $p['getattr'](group, '_identity');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['id']['__name__'] = 'id';

		$m['id']['__bind_type__'] = 0;
		$m['id']['__args__'] = [null,null,['group']];
		$pyjs['track']['lineno']=17;
		$m['Sprite'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '29c56b9355acbd0609dd97f3a83276bc';
			$pyjs['track']['lineno']=29;
			$cls_definition['_identity'] = $constant_int_0;
			$pyjs['track']['lineno']=31;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '29c56b9355acbd0609dd97f3a83276bc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=31;
				$pyjs['track']['lineno']=37;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_identity', $p['getattr']($m['Sprite'], '_identity')) : $p['setattr'](self, '_identity', $p['getattr']($m['Sprite'], '_identity')); 
				$pyjs['track']['lineno']=38;
				$m['Sprite']['__is_instance__'] && typeof $m['Sprite']['__setattr__'] == 'function' ? $m['Sprite']['__setattr__']('_identity', $p['__op_add']($add1=$p['getattr']($m['Sprite'], '_identity'),$add2=$constant_int_1)) : $p['setattr']($m['Sprite'], '_identity', $p['__op_add']($add1=$p['getattr']($m['Sprite'], '_identity'),$add2=$constant_int_1)); 
				$pyjs['track']['lineno']=39;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_groups', $p['dict']([])) : $p['setattr'](self, '_groups', $p['dict']([])); 
				$pyjs['track']['lineno']=40;
				if ($p['bool'](groups)) {
					$pyjs['track']['lineno']=41;
					$pyjs_kwargs_call(self, 'add', groups, null, [{}]);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['groups',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=43;
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
					if (self.prototype['__md5__'] !== '29c56b9355acbd0609dd97f3a83276bc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':43};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=43;
				$pyjs['track']['lineno']=47;
				$pyjs['track']['lineno']=47;
				var $pyjs__ret = $p['sprintf']('%s(in %d groups)', $p['tuple']([$p['getattr'](self, '__class__'), $p['len']($p['getattr'](self, '_groups'))]));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=49;
			$method = $pyjs__bind_method2('add', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '29c56b9355acbd0609dd97f3a83276bc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,group,$iter1_idx;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':49};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=49;
				$pyjs['track']['lineno']=53;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = groups;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					group = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=54;
					if ($p['bool']($p['hasattr'](group, '_sprites'))) {
						$pyjs['track']['lineno']=55;
						group['add'](self);
					}
					else {
						$pyjs['track']['lineno']=57;
						$pyjs_kwargs_call(self, 'add', group, null, [{}]);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=58;
				$pyjs['track']['lineno']=58;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['groups',null,['self']]);
			$cls_definition['add'] = $method;
			$pyjs['track']['lineno']=60;
			$method = $pyjs__bind_method2('remove', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '29c56b9355acbd0609dd97f3a83276bc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,$pyjs__trackstack_size_1,group,$iter2_array;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':60};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=60;
				$pyjs['track']['lineno']=64;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = groups;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					group = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=65;
					if ($p['bool']($p['hasattr'](group, '_sprites'))) {
						$pyjs['track']['lineno']=66;
						group['remove'](self);
					}
					else {
						$pyjs['track']['lineno']=68;
						$pyjs_kwargs_call(self, 'remove', group, null, [{}]);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=69;
				$pyjs['track']['lineno']=69;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['groups',null,['self']]);
			$cls_definition['remove'] = $method;
			$pyjs['track']['lineno']=71;
			$method = $pyjs__bind_method2('kill', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '29c56b9355acbd0609dd97f3a83276bc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,group,$iter3_type,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,$iter3_nextval;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':71};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=71;
				$pyjs['track']['lineno']=75;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = self['_groups']['values']();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					group = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=76;
					group['remove'](self);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=77;
				$pyjs['track']['lineno']=77;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['kill'] = $method;
			$pyjs['track']['lineno']=79;
			$method = $pyjs__bind_method2('alive', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '29c56b9355acbd0609dd97f3a83276bc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':79};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=79;
				$pyjs['track']['lineno']=83;
				if ($p['bool']($p['getattr'](self, '_groups'))) {
					$pyjs['track']['lineno']=84;
					$pyjs['track']['lineno']=84;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=86;
					$pyjs['track']['lineno']=86;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['alive'] = $method;
			$pyjs['track']['lineno']=88;
			$method = $pyjs__bind_method2('groups', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '29c56b9355acbd0609dd97f3a83276bc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':88};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=88;
				$pyjs['track']['lineno']=92;
				$pyjs['track']['lineno']=92;
				var $pyjs__ret = self['_groups']['values']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['groups'] = $method;
			$pyjs['track']['lineno']=94;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '29c56b9355acbd0609dd97f3a83276bc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':94};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=94;
				$pyjs['track']['lineno']=98;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=17;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Sprite', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=101;
		$m['DirtySprite'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = 'ab6b6cdded1eb08223fc035bcb23c978';
			$pyjs['track']['lineno']=109;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ab6b6cdded1eb08223fc035bcb23c978') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':109};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=109;
				$pyjs['track']['lineno']=113;
				$pyjs_kwargs_call($m['Sprite'], '__init__', groups, null, [{}, self]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['groups',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=101;
			var $bases = new Array($m['Sprite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DirtySprite', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=116;
		$m['Group'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = 'd5756fd3722747a87f63118c39afdba4';
			$pyjs['track']['lineno']=131;
			$cls_definition['_identity'] = $constant_int_0;
			$pyjs['track']['lineno']=133;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd5756fd3722747a87f63118c39afdba4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add3,$add4;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':133};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=133;
				$pyjs['track']['lineno']=138;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_identity', $p['getattr']($m['Group'], '_identity')) : $p['setattr'](self, '_identity', $p['getattr']($m['Group'], '_identity')); 
				$pyjs['track']['lineno']=139;
				$m['Group']['__is_instance__'] && typeof $m['Group']['__setattr__'] == 'function' ? $m['Group']['__setattr__']('_identity', $p['__op_add']($add3=$p['getattr']($m['Group'], '_identity'),$add4=$constant_int_1)) : $p['setattr']($m['Group'], '_identity', $p['__op_add']($add3=$p['getattr']($m['Group'], '_identity'),$add4=$constant_int_1)); 
				$pyjs['track']['lineno']=140;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_sprites', $p['dict']([])) : $p['setattr'](self, '_sprites', $p['dict']([])); 
				$pyjs['track']['lineno']=141;
				if ($p['bool'](sprites)) {
					$pyjs['track']['lineno']=142;
					$pyjs_kwargs_call(self, 'add', sprites, null, [{}]);
				}
				$pyjs['track']['lineno']=143;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_clear_active', false) : $p['setattr'](self, '_clear_active', false); 
				$pyjs['track']['lineno']=144;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_sprites_drawn', $p['dict']([])) : $p['setattr'](self, '_sprites_drawn', $p['dict']([])); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=146;
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
					if (self.prototype['__md5__'] !== 'd5756fd3722747a87f63118c39afdba4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':146};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=146;
				$pyjs['track']['lineno']=150;
				$pyjs['track']['lineno']=150;
				var $pyjs__ret = $p['sprintf']('%s(%d sprites)', $p['tuple']([$p['getattr'](self, '__class__'), $p['len']($p['getattr'](self, '_sprites'))]));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=152;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd5756fd3722747a87f63118c39afdba4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':152};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=152;
				$pyjs['track']['lineno']=156;
				$pyjs['track']['lineno']=156;
				var $pyjs__ret = self['_sprites']['itervalues']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs['track']['lineno']=158;
			$method = $pyjs__bind_method2('__contains__', function(sprite) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sprite = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd5756fd3722747a87f63118c39afdba4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':158};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=158;
				$pyjs['track']['lineno']=162;
				$pyjs['track']['lineno']=162;
				var $pyjs__ret = $p['getattr'](self, '_sprites')['__contains__']($m['id'](sprite));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sprite']]);
			$cls_definition['__contains__'] = $method;
			$pyjs['track']['lineno']=164;
			$method = $pyjs__bind_method2('__len__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd5756fd3722747a87f63118c39afdba4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':164};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=164;
				$pyjs['track']['lineno']=168;
				$pyjs['track']['lineno']=168;
				var $pyjs__ret = $p['len']($p['getattr'](self, '_sprites'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__len__'] = $method;
			$pyjs['track']['lineno']=170;
			$method = $pyjs__bind_method2('sprites', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd5756fd3722747a87f63118c39afdba4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':170};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=170;
				$pyjs['track']['lineno']=174;
				$pyjs['track']['lineno']=174;
				var $pyjs__ret = self['_sprites']['values']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['sprites'] = $method;
			$pyjs['track']['lineno']=176;
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
					if (self.prototype['__md5__'] !== 'd5756fd3722747a87f63118c39afdba4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var newgroup;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':176};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=176;
				$pyjs['track']['lineno']=180;
				newgroup = self['__class__']();
				$pyjs['track']['lineno']=181;
				newgroup['__is_instance__'] && typeof newgroup['__setattr__'] == 'function' ? newgroup['__setattr__']('_sprites', self['_sprites']['copy']()) : $p['setattr'](newgroup, '_sprites', self['_sprites']['copy']()); 
				$pyjs['track']['lineno']=182;
				$pyjs['track']['lineno']=182;
				var $pyjs__ret = newgroup;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['copy'] = $method;
			$pyjs['track']['lineno']=184;
			$method = $pyjs__bind_method2('add', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd5756fd3722747a87f63118c39afdba4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var sprite,$iter4_nextval,spriteID,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':184};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=184;
				$pyjs['track']['lineno']=188;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = sprites;
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					sprite = $iter4_nextval['$nextval'];
					$pyjs['track']['lineno']=189;
					if ($p['bool']($p['hasattr'](sprite, '_groups'))) {
						$pyjs['track']['lineno']=190;
						spriteID = $m['id'](sprite);
						$pyjs['track']['lineno']=191;
						if ($p['bool'](!$p['getattr'](self, '_sprites')['__contains__'](spriteID))) {
							$pyjs['track']['lineno']=192;
							$p['getattr'](self, '_sprites')['__setitem__'](spriteID, sprite);
							$pyjs['track']['lineno']=193;
							$p['getattr'](sprite, '_groups')['__setitem__']($m['id'](self), self);
						}
					}
					else {
						$pyjs['track']['lineno']=195;
						$pyjs_kwargs_call(self, 'add', sprite, null, [{}]);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=196;
				$pyjs['track']['lineno']=196;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['add'] = $method;
			$pyjs['track']['lineno']=198;
			$method = $pyjs__bind_method2('remove', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd5756fd3722747a87f63118c39afdba4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,sprite,$iter5_array,$pyjs__trackstack_size_1,spriteID,$iter5_iter,$iter5_idx,$iter5_type;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':198};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=198;
				$pyjs['track']['lineno']=202;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = sprites;
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					sprite = $iter5_nextval['$nextval'];
					$pyjs['track']['lineno']=203;
					if ($p['bool']($p['hasattr'](sprite, '_groups'))) {
						$pyjs['track']['lineno']=204;
						spriteID = $m['id'](sprite);
						$pyjs['track']['lineno']=205;
						if ($p['bool']($p['getattr'](self, '_sprites')['__contains__'](spriteID))) {
							$pyjs['track']['lineno']=206;
							$p['getattr'](self, '_sprites')['__delitem__'](spriteID);
							$pyjs['track']['lineno']=207;
							$p['getattr'](sprite, '_groups')['__delitem__']($m['id'](self));
						}
					}
					else {
						$pyjs['track']['lineno']=209;
						$pyjs_kwargs_call(self, 'remove', sprite, null, [{}]);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=210;
				$pyjs['track']['lineno']=210;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['remove'] = $method;
			$pyjs['track']['lineno']=212;
			$method = $pyjs__bind_method2('has', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd5756fd3722747a87f63118c39afdba4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var sprite,$iter6_idx,$iter6_type,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,$iter6_nextval;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':212};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=212;
				$pyjs['track']['lineno']=216;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter6_iter = sprites;
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					sprite = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=217;
					if ($p['bool']($p['hasattr'](sprite, '_groups'))) {
						$pyjs['track']['lineno']=218;
						if ($p['bool'](!$p['getattr'](self, '_sprites')['__contains__']($m['id'](sprite)))) {
							$pyjs['track']['lineno']=219;
							$pyjs['track']['lineno']=219;
							var $pyjs__ret = false;
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					}
					else {
						$pyjs['track']['lineno']=221;
						if ($p['bool'](!$p['bool']($pyjs_kwargs_call(self, 'has', sprite, null, [{}])))) {
							$pyjs['track']['lineno']=222;
							$pyjs['track']['lineno']=222;
							var $pyjs__ret = false;
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=223;
				$pyjs['track']['lineno']=223;
				var $pyjs__ret = true;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['has'] = $method;
			$pyjs['track']['lineno']=225;
			$method = $pyjs__bind_method2('draw', function(surface) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd5756fd3722747a87f63118c39afdba4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var sprite,$iter7_nextval,$iter7_iter,$iter7_array,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':225};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=225;
				$pyjs['track']['lineno']=229;
				surface['_blits'](self['_sprites']['itervalues']());
				$pyjs['track']['lineno']=230;
				if ($p['bool']($p['getattr'](self, '_clear_active'))) {
					$pyjs['track']['lineno']=231;
					$m['rectPool']['extend'](self['_sprites_drawn']['itervalues']());
					$pyjs['track']['lineno']=232;
					self['_sprites_drawn']['clear']();
					$pyjs['track']['lineno']=233;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter7_iter = $p['getattr'](self, '_sprites');
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						sprite = $iter7_nextval['$nextval'];
						$pyjs['track']['lineno']=234;
						$p['getattr'](self, '_sprites_drawn')['__setitem__'](sprite, $m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
				$pyjs['track']['lineno']=235;
				$pyjs['track']['lineno']=235;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface']]);
			$cls_definition['draw'] = $method;
			$pyjs['track']['lineno']=237;
			$method = $pyjs__bind_method2('clear', function(surface, background) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					background = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd5756fd3722747a87f63118c39afdba4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter8_idx,sprite,$iter8_array,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1,$iter8_type;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':237};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=237;
				$pyjs['track']['lineno']=242;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_clear_active', true) : $p['setattr'](self, '_clear_active', true); 
				$pyjs['track']['lineno']=243;
				if ($p['bool']($p['hasattr'](background, 'width'))) {
					$pyjs['track']['lineno']=244;
					surface['_blit_clear'](background, self['_sprites_drawn']['itervalues']());
				}
				else {
					$pyjs['track']['lineno']=246;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter8_iter = $p['getattr'](self, '_sprites_drawn');
					$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
					while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
						sprite = $iter8_nextval['$nextval'];
						$pyjs['track']['lineno']=247;
						background(surface, $p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['background']]);
			$cls_definition['clear'] = $method;
			$pyjs['track']['lineno']=249;
			$method = $pyjs__bind_method2('empty', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd5756fd3722747a87f63118c39afdba4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var sprite,$iter9_iter,$iter9_nextval,$iter9_idx,$iter9_type,$pyjs__trackstack_size_1,$iter9_array;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':249};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=249;
				$pyjs['track']['lineno']=253;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter9_iter = self['_sprites']['itervalues']();
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					sprite = $iter9_nextval['$nextval'];
					$pyjs['track']['lineno']=254;
					$p['getattr'](sprite, '_groups')['__delitem__']($m['id'](self));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=255;
				self['_sprites']['clear']();
				$pyjs['track']['lineno']=256;
				$pyjs['track']['lineno']=256;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['empty'] = $method;
			$pyjs['track']['lineno']=258;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd5756fd3722747a87f63118c39afdba4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter10_nextval,sprite,$iter10_array,$pyjs__trackstack_size_1,$iter10_type,$iter10_iter,$iter10_idx;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':258};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=258;
				$pyjs['track']['lineno']=262;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter10_iter = self['_sprites']['values']();
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					sprite = $iter10_nextval['$nextval'];
					$pyjs['track']['lineno']=263;
					$pyjs_kwargs_call(sprite, 'update', args, null, [{}]);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=264;
				$pyjs['track']['lineno']=264;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=116;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Group', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=267;
		$m['GroupSingle'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = 'e5fc03f55559e38a1e5e55409c582300';
			$pyjs['track']['lineno']=274;
			$method = $pyjs__bind_method2('__init__', function(sprite) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sprite = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e5fc03f55559e38a1e5e55409c582300') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sprite == 'undefined') sprite=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':274};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=274;
				$pyjs['track']['lineno']=279;
				if ($p['bool'](sprite)) {
					$pyjs['track']['lineno']=280;
					$m['Group']['__init__'](self, sprite);
				}
				else {
					$pyjs['track']['lineno']=282;
					$m['Group']['__init__'](self);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sprite', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=284;
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
					if (self.prototype['__md5__'] !== 'e5fc03f55559e38a1e5e55409c582300') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':284};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=284;
				$pyjs['track']['lineno']=288;
				if ($p['bool']($p['op_eq'](attr, 'sprite'))) {
					$pyjs['track']['lineno']=289;
					if ($p['bool']($p['getattr'](self, '_sprites'))) {
						$pyjs['track']['lineno']=290;
						$pyjs['track']['lineno']=290;
						var $pyjs__ret = self['_sprites']['values']()['__getitem__']($constant_int_0);
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=292;
						$pyjs['track']['lineno']=292;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['attr']]);
			$cls_definition['__getattr__'] = $method;
			$pyjs['track']['lineno']=294;
			$method = $pyjs__bind_method2('add', function(sprite) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sprite = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e5fc03f55559e38a1e5e55409c582300') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':294};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=294;
				$pyjs['track']['lineno']=298;
				self['empty']();
				$pyjs['track']['lineno']=299;
				$p['getattr'](self, '_sprites')['__setitem__']($m['id'](sprite), sprite);
				$pyjs['track']['lineno']=300;
				$p['getattr'](sprite, '_groups')['__setitem__']($m['id'](self), self);
				$pyjs['track']['lineno']=301;
				$pyjs['track']['lineno']=301;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sprite']]);
			$cls_definition['add'] = $method;
			$pyjs['track']['lineno']=303;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e5fc03f55559e38a1e5e55409c582300') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':303};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=303;
				$pyjs['track']['lineno']=307;
				if ($p['bool']($p['getattr'](self, '_sprites'))) {
					$pyjs['track']['lineno']=308;
					$pyjs_kwargs_call(self['_sprites']['values']()['__getitem__']($constant_int_0), 'update', args, null, [{}]);
				}
				$pyjs['track']['lineno']=309;
				$pyjs['track']['lineno']=309;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=267;
			var $bases = new Array($m['Group']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GroupSingle', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=312;
		$m['RenderUpdates'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '16357ed052bf34617954b42ac5fe903d';
			$pyjs['track']['lineno']=319;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '16357ed052bf34617954b42ac5fe903d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':319};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=319;
				$pyjs['track']['lineno']=324;
				$pyjs_kwargs_call($m['Group'], '__init__', sprites, null, [{}, self]);
				$pyjs['track']['lineno']=325;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('changed_areas', $p['list']([])) : $p['setattr'](self, 'changed_areas', $p['list']([])); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=327;
			$method = $pyjs__bind_method2('draw', function(surface) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '16357ed052bf34617954b42ac5fe903d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter12_idx,$iter12_type,sprite,$iter11_iter,$iter11_type,$iter12_array,$iter12_iter,$iter11_array,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1,$iter12_nextval;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':327};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=327;
				$pyjs['track']['lineno']=332;
				surface['_blits'](self['_sprites']['itervalues']());
				$pyjs['track']['lineno']=333;
				if ($p['bool']($p['getattr'](self, '_clear_active'))) {
					$pyjs['track']['lineno']=334;
					$m['rectPool']['extend']($p['getattr'](self, 'changed_areas'));
					$pyjs['track']['lineno']=335;
					$p['__setslice']($p['getattr'](self, 'changed_areas'), 0, null, $p['list']([]));
					$pyjs['track']['lineno']=336;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter11_iter = $p['getattr'](self, '_sprites');
					$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
					while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
						sprite = $iter11_nextval['$nextval'];
						$pyjs['track']['lineno']=337;
						if ($p['bool']($p['getattr'](self, '_sprites_drawn')['__contains__'](sprite))) {
							$pyjs['track']['lineno']=338;
							if ($p['bool']($p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite)['intersects']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')))) {
								$pyjs['track']['lineno']=339;
								$p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite)['union_ip']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect'));
							}
							else {
								$pyjs['track']['lineno']=341;
								self['changed_areas']['append']($m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
							}
						}
						else {
							$pyjs['track']['lineno']=343;
							self['changed_areas']['append']($m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
					$pyjs['track']['lineno']=344;
					self['changed_areas']['extend'](self['_sprites_drawn']['itervalues']());
					$pyjs['track']['lineno']=345;
					self['_sprites_drawn']['clear']();
					$pyjs['track']['lineno']=346;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter12_iter = $p['getattr'](self, '_sprites');
					$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
					while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
						sprite = $iter12_nextval['$nextval'];
						$pyjs['track']['lineno']=347;
						$p['getattr'](self, '_sprites_drawn')['__setitem__'](sprite, $m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
				else {
					$pyjs['track']['lineno']=349;
					$m['rectPool']['extend']($p['getattr'](self, 'changed_areas'));
					$pyjs['track']['lineno']=350;
					$p['__setslice']($p['getattr'](self, 'changed_areas'), 0, null, $p['list']([]));
					$pyjs['track']['lineno']=351;
					self['changed_areas']['extend'](function(){
						var $iter13_nextval,sprite,$iter13_iter,$collcomp1,$iter13_type,$iter13_idx,$pyjs__trackstack_size_1,$iter13_array;
	$collcomp1 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter13_iter = self['_sprites']['itervalues']();
					$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
					while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
						sprite = $iter13_nextval['$nextval'];
						$collcomp1['append']($m['rectPool']['copy']($p['getattr'](sprite, 'rect')));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp1;}());
				}
				$pyjs['track']['lineno']=352;
				$pyjs['track']['lineno']=352;
				var $pyjs__ret = $p['getattr'](self, 'changed_areas');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface']]);
			$cls_definition['draw'] = $method;
			$pyjs['track']['lineno']=312;
			var $bases = new Array($m['Group']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RenderUpdates', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=355;
		$m['OrderedUpdates'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '35d6c457e6978075b96bde178fa76c50';
			$pyjs['track']['lineno']=362;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '35d6c457e6978075b96bde178fa76c50') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var index,$iter14_array,$iter14_type,sprite,spriteID,$iter14_iter,$pyjs__trackstack_size_1,$iter14_idx,$iter14_nextval;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':362};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=362;
				$pyjs['track']['lineno']=367;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('order', $p['dict']([])) : $p['setattr'](self, 'order', $p['dict']([])); 
				$pyjs['track']['lineno']=368;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('place', $p['dict']([])) : $p['setattr'](self, 'place', $p['dict']([])); 
				$pyjs['track']['lineno']=369;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('range', $constant_int_1000) : $p['setattr'](self, 'range', $constant_int_1000); 
				$pyjs['track']['lineno']=370;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('index', $p['iter']($p['xrange']($p['getattr'](self, 'range')))) : $p['setattr'](self, 'index', $p['iter']($p['xrange']($p['getattr'](self, 'range')))); 
				$pyjs['track']['lineno']=371;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', null) : $p['setattr'](self, 'sort', null); 
				$pyjs['track']['lineno']=372;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter14_iter = sprites;
				$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
				while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
					sprite = $iter14_nextval['$nextval'];
					$pyjs['track']['lineno']=373;
					if ($p['bool'](!$p['getattr'](self, '_sprites')['__contains__'](sprite))) {
						$pyjs['track']['lineno']=374;
						spriteID = $m['id'](sprite);
						$pyjs['track']['lineno']=375;
						index = self['index']['next']();
						$pyjs['track']['lineno']=376;
						$p['getattr'](self, 'order')['__setitem__'](index, spriteID);
						$pyjs['track']['lineno']=377;
						$p['getattr'](self, 'place')['__setitem__'](spriteID, index);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=378;
				$pyjs_kwargs_call($m['RenderUpdates'], '__init__', sprites, null, [{}, self]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=380;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '35d6c457e6978075b96bde178fa76c50') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var order_sprite,keys;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':380};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=380;
				$pyjs['track']['lineno']=384;
				if ($p['bool']($p['getattr'](self, 'sort'))) {
					$pyjs['track']['lineno']=385;
					order_sprite = $p['iter']($p['getattr'](self, 'sort'));
				}
				else {
					$pyjs['track']['lineno']=387;
					keys = self['order']['keys']();
					$pyjs['track']['lineno']=388;
					keys['sort']();
					$pyjs['track']['lineno']=389;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', function(){
						var key,$iter15_iter,$iter15_array,$collcomp2,$iter15_idx,$iter15_nextval,$iter15_type,$pyjs__trackstack_size_1;
	$collcomp2 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter15_iter = keys;
					$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
					while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
						key = $iter15_nextval['$nextval'];
						$collcomp2['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp2;}()) : $p['setattr'](self, 'sort', function(){
						var key,$iter15_iter,$iter15_array,$collcomp2,$iter15_idx,$iter15_nextval,$iter15_type,$pyjs__trackstack_size_1;
	$collcomp2 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter15_iter = keys;
					$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
					while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
						key = $iter15_nextval['$nextval'];
						$collcomp2['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp2;}()); 
					$pyjs['track']['lineno']=390;
					order_sprite = $p['iter']($p['getattr'](self, 'sort'));
				}
				$pyjs['track']['lineno']=391;
				$pyjs['track']['lineno']=391;
				var $pyjs__ret = order_sprite;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs['track']['lineno']=393;
			$method = $pyjs__bind_method2('sprites', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '35d6c457e6978075b96bde178fa76c50') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var order_sprite,keys;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':393};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=393;
				$pyjs['track']['lineno']=397;
				if ($p['bool']($p['getattr'](self, 'sort'))) {
					$pyjs['track']['lineno']=398;
					order_sprite = $p['__getslice']($p['getattr'](self, 'sort'), 0, null);
				}
				else {
					$pyjs['track']['lineno']=400;
					keys = self['order']['keys']();
					$pyjs['track']['lineno']=401;
					keys['sort']();
					$pyjs['track']['lineno']=402;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', function(){
						var $iter16_array,$iter16_type,$collcomp3,$iter16_idx,key,$pyjs__trackstack_size_1,$iter16_nextval,$iter16_iter;
	$collcomp3 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter16_iter = keys;
					$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
					while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
						key = $iter16_nextval['$nextval'];
						$collcomp3['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp3;}()) : $p['setattr'](self, 'sort', function(){
						var $iter16_array,$iter16_type,$collcomp3,$iter16_idx,key,$pyjs__trackstack_size_1,$iter16_nextval,$iter16_iter;
	$collcomp3 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter16_iter = keys;
					$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
					while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
						key = $iter16_nextval['$nextval'];
						$collcomp3['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp3;}()); 
					$pyjs['track']['lineno']=403;
					order_sprite = $p['__getslice']($p['getattr'](self, 'sort'), 0, null);
				}
				$pyjs['track']['lineno']=404;
				$pyjs['track']['lineno']=404;
				var $pyjs__ret = order_sprite;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['sprites'] = $method;
			$pyjs['track']['lineno']=406;
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
					if (self.prototype['__md5__'] !== '35d6c457e6978075b96bde178fa76c50') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var newgroup,$add6,$add5;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':406};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=406;
				$pyjs['track']['lineno']=410;
				newgroup = $m['RenderUpdates']['copy'](self);
				$pyjs['track']['lineno']=411;
				newgroup['__is_instance__'] && typeof newgroup['__setattr__'] == 'function' ? newgroup['__setattr__']('order', self['order']['copy']()) : $p['setattr'](newgroup, 'order', self['order']['copy']()); 
				$pyjs['track']['lineno']=412;
				newgroup['__is_instance__'] && typeof newgroup['__setattr__'] == 'function' ? newgroup['__setattr__']('place', self['place']['copy']()) : $p['setattr'](newgroup, 'place', self['place']['copy']()); 
				$pyjs['track']['lineno']=413;
				newgroup['__is_instance__'] && typeof newgroup['__setattr__'] == 'function' ? newgroup['__setattr__']('range', $p['getattr'](self, 'range')) : $p['setattr'](newgroup, 'range', $p['getattr'](self, 'range')); 
				$pyjs['track']['lineno']=414;
				newgroup['__is_instance__'] && typeof newgroup['__setattr__'] == 'function' ? newgroup['__setattr__']('index', $p['iter']($p['xrange']($p['__op_add']($add5=$p['max'](self['order']['keys']()),$add6=$constant_int_1), $p['getattr'](self, 'range')))) : $p['setattr'](newgroup, 'index', $p['iter']($p['xrange']($p['__op_add']($add5=$p['max'](self['order']['keys']()),$add6=$constant_int_1), $p['getattr'](self, 'range')))); 
				$pyjs['track']['lineno']=415;
				$pyjs['track']['lineno']=415;
				var $pyjs__ret = newgroup;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['copy'] = $method;
			$pyjs['track']['lineno']=417;
			$method = $pyjs__bind_method2('add', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '35d6c457e6978075b96bde178fa76c50') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter18_type,spriteID,$iter17_type,index,$iter17_iter,$iter18_idx,$iter18_nextval,$iter17_nextval,$iter18_iter,sprite,keys,$iter17_array,key,$mul4,$mul3,$mul2,$mul1,$iter18_array,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,$iter17_idx,order;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':417};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=417;
				$pyjs['track']['lineno']=421;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter17_iter = sprites;
				$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
				while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
					sprite = $iter17_nextval['$nextval'];
					$pyjs['track']['lineno']=422;
					if ($p['bool'](!$p['getattr'](self, '_sprites')['__contains__'](sprite))) {
						$pyjs['track']['lineno']=423;
						index = self['_get_index']();
						$pyjs['track']['lineno']=424;
						if ($p['bool'](!$p['op_is'](index, null))) {
							$pyjs['track']['lineno']=425;
							spriteID = $m['id'](sprite);
							$pyjs['track']['lineno']=426;
							$p['getattr'](self, 'order')['__setitem__'](index, spriteID);
							$pyjs['track']['lineno']=427;
							$p['getattr'](self, 'place')['__setitem__'](spriteID, index);
						}
						else {
							$pyjs['track']['lineno']=429;
							keys = self['order']['keys']();
							$pyjs['track']['lineno']=430;
							keys['sort']();
							$pyjs['track']['lineno']=431;
							if ($p['bool'](($p['cmp']((typeof ($mul1=$p['len'](keys))==typeof ($mul2=$constant_int_2) && typeof $mul1=='number'?
								$mul1*$mul2:
								$p['op_mul']($mul1,$mul2)), $p['getattr'](self, 'range')) == 1))) {
								$pyjs['track']['lineno']=432;
								self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('range', (typeof ($mul3=$p['len'](keys))==typeof ($mul4=$constant_int_2) && typeof $mul3=='number'?
									$mul3*$mul4:
									$p['op_mul']($mul3,$mul4))) : $p['setattr'](self, 'range', (typeof ($mul3=$p['len'](keys))==typeof ($mul4=$constant_int_2) && typeof $mul3=='number'?
									$mul3*$mul4:
									$p['op_mul']($mul3,$mul4))); 
							}
							$pyjs['track']['lineno']=433;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('index', $p['iter']($p['xrange']($p['getattr'](self, 'range')))) : $p['setattr'](self, 'index', $p['iter']($p['xrange']($p['getattr'](self, 'range')))); 
							$pyjs['track']['lineno']=434;
							order = $p['getattr'](self, 'order');
							$pyjs['track']['lineno']=435;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('order', $p['dict']([])) : $p['setattr'](self, 'order', $p['dict']([])); 
							$pyjs['track']['lineno']=436;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('place', $p['dict']([])) : $p['setattr'](self, 'place', $p['dict']([])); 
							$pyjs['track']['lineno']=437;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter18_iter = keys;
							$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
							while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
								key = $iter18_nextval['$nextval'];
								$pyjs['track']['lineno']=438;
								index = self['index']['next']();
								$pyjs['track']['lineno']=439;
								$p['getattr'](self, 'order')['__setitem__'](index, order['__getitem__'](key));
								$pyjs['track']['lineno']=440;
								$p['getattr'](self, 'place')['__setitem__'](order['__getitem__'](key), index);
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.sprite';
							$pyjs['track']['lineno']=441;
							index = self['index']['next']();
							$pyjs['track']['lineno']=442;
							spriteID = $m['id'](sprite);
							$pyjs['track']['lineno']=443;
							$p['getattr'](self, 'order')['__setitem__'](index, spriteID);
							$pyjs['track']['lineno']=444;
							$p['getattr'](self, 'place')['__setitem__'](spriteID, index);
						}
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=445;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', null) : $p['setattr'](self, 'sort', null); 
				$pyjs['track']['lineno']=446;
				$pyjs_kwargs_call($m['RenderUpdates'], 'add', sprites, null, [{}, self]);
				$pyjs['track']['lineno']=447;
				$pyjs['track']['lineno']=447;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['add'] = $method;
			$pyjs['track']['lineno']=449;
			$method = $pyjs__bind_method2('_get_index', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '35d6c457e6978075b96bde178fa76c50') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':449};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=449;
				$pyjs['track']['lineno']=450;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=451;
					$pyjs['track']['lineno']=451;
					var $pyjs__ret = self['index']['next']();
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
					$pyjs['track']['module']='pyjsdl.sprite';
					if (($pyjs_try_err_name == $p['StopIteration']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						$pyjs['track']['lineno']=453;
						$pyjs['track']['lineno']=453;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_get_index'] = $method;
			$pyjs['track']['lineno']=455;
			$method = $pyjs__bind_method2('remove', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '35d6c457e6978075b96bde178fa76c50') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter19_idx,sprite,spriteID,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,$pyjs__trackstack_size_1;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':455};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=455;
				$pyjs['track']['lineno']=459;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter19_iter = sprites;
				$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
				while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
					sprite = $iter19_nextval['$nextval'];
					$pyjs['track']['lineno']=460;
					spriteID = $m['id'](sprite);
					$pyjs['track']['lineno']=461;
					if ($p['bool']($p['getattr'](self, 'place')['__contains__'](spriteID))) {
						$pyjs['track']['lineno']=462;
						$p['getattr'](self, 'order')['__delitem__']($p['getattr'](self, 'place')['__getitem__'](spriteID));
						$pyjs['track']['lineno']=463;
						$p['getattr'](self, 'place')['__delitem__'](spriteID);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=464;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', null) : $p['setattr'](self, 'sort', null); 
				$pyjs['track']['lineno']=465;
				$pyjs_kwargs_call($m['RenderUpdates'], 'remove', sprites, null, [{}, self]);
				$pyjs['track']['lineno']=466;
				$pyjs['track']['lineno']=466;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['remove'] = $method;
			$pyjs['track']['lineno']=468;
			$method = $pyjs__bind_method2('empty', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '35d6c457e6978075b96bde178fa76c50') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':468};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=468;
				$pyjs['track']['lineno']=472;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('order', $p['dict']([])) : $p['setattr'](self, 'order', $p['dict']([])); 
				$pyjs['track']['lineno']=473;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('place', $p['dict']([])) : $p['setattr'](self, 'place', $p['dict']([])); 
				$pyjs['track']['lineno']=474;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('index', $p['iter']($p['xrange']($p['getattr'](self, 'range')))) : $p['setattr'](self, 'index', $p['iter']($p['xrange']($p['getattr'](self, 'range')))); 
				$pyjs['track']['lineno']=475;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', null) : $p['setattr'](self, 'sort', null); 
				$pyjs['track']['lineno']=476;
				$m['RenderUpdates']['empty'](self);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['empty'] = $method;
			$pyjs['track']['lineno']=478;
			$method = $pyjs__bind_method2('draw', function(surface) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '35d6c457e6978075b96bde178fa76c50') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter22_array,$iter21_idx,sprite,keys,$iter21_nextval,$iter22_nextval,$iter22_idx,$iter21_type,$iter21_iter,$iter22_type,$iter21_array,$pyjs__trackstack_size_1,order_sprite,$iter22_iter;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':478};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=478;
				$pyjs['track']['lineno']=482;
				if ($p['bool']($p['getattr'](self, 'sort'))) {
					$pyjs['track']['lineno']=483;
					order_sprite = $p['iter']($p['getattr'](self, 'sort'));
				}
				else {
					$pyjs['track']['lineno']=485;
					keys = self['order']['keys']();
					$pyjs['track']['lineno']=486;
					keys['sort']();
					$pyjs['track']['lineno']=487;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', function(){
						var $iter20_iter,$iter20_nextval,$iter20_type,$collcomp4,$iter20_idx,key,$pyjs__trackstack_size_1,$iter20_array;
	$collcomp4 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter20_iter = keys;
					$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
					while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
						key = $iter20_nextval['$nextval'];
						$collcomp4['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp4;}()) : $p['setattr'](self, 'sort', function(){
						var $iter20_iter,$iter20_nextval,$iter20_type,$collcomp4,$iter20_idx,key,$pyjs__trackstack_size_1,$iter20_array;
	$collcomp4 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter20_iter = keys;
					$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
					while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
						key = $iter20_nextval['$nextval'];
						$collcomp4['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp4;}()); 
					$pyjs['track']['lineno']=488;
					order_sprite = $p['iter']($p['getattr'](self, 'sort'));
				}
				$pyjs['track']['lineno']=489;
				surface['_blits'](order_sprite);
				$pyjs['track']['lineno']=490;
				if ($p['bool']($p['getattr'](self, '_clear_active'))) {
					$pyjs['track']['lineno']=491;
					$m['rectPool']['extend']($p['getattr'](self, 'changed_areas'));
					$pyjs['track']['lineno']=492;
					$p['__setslice']($p['getattr'](self, 'changed_areas'), 0, null, $p['list']([]));
					$pyjs['track']['lineno']=493;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter21_iter = $p['getattr'](self, '_sprites');
					$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
					while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
						sprite = $iter21_nextval['$nextval'];
						$pyjs['track']['lineno']=494;
						if ($p['bool']($p['getattr'](self, '_sprites_drawn')['__contains__'](sprite))) {
							$pyjs['track']['lineno']=495;
							if ($p['bool']($p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite)['intersects']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')))) {
								$pyjs['track']['lineno']=496;
								$p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite)['union_ip']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect'));
							}
							else {
								$pyjs['track']['lineno']=498;
								self['changed_areas']['append']($m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
							}
						}
						else {
							$pyjs['track']['lineno']=500;
							self['changed_areas']['append']($m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
					$pyjs['track']['lineno']=501;
					self['changed_areas']['extend'](self['_sprites_drawn']['itervalues']());
					$pyjs['track']['lineno']=502;
					self['_sprites_drawn']['clear']();
					$pyjs['track']['lineno']=503;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter22_iter = $p['getattr'](self, '_sprites');
					$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
					while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
						sprite = $iter22_nextval['$nextval'];
						$pyjs['track']['lineno']=504;
						$p['getattr'](self, '_sprites_drawn')['__setitem__'](sprite, $m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
				else {
					$pyjs['track']['lineno']=506;
					$m['rectPool']['extend']($p['getattr'](self, 'changed_areas'));
					$pyjs['track']['lineno']=507;
					$p['__setslice']($p['getattr'](self, 'changed_areas'), 0, null, $p['list']([]));
					$pyjs['track']['lineno']=508;
					self['changed_areas']['extend'](function(){
						var $iter23_type,$iter23_nextval,$iter23_iter,$collcomp5,$iter23_idx,$pyjs__trackstack_size_1,$iter23_array,sprite;
	$collcomp5 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter23_iter = self['_sprites']['itervalues']();
					$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
					while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
						sprite = $iter23_nextval['$nextval'];
						$collcomp5['append']($m['rectPool']['copy']($p['getattr'](sprite, 'rect')));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp5;}());
				}
				$pyjs['track']['lineno']=509;
				$pyjs['track']['lineno']=509;
				var $pyjs__ret = $p['getattr'](self, 'changed_areas');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface']]);
			$cls_definition['draw'] = $method;
			$pyjs['track']['lineno']=355;
			var $bases = new Array($m['RenderUpdates']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('OrderedUpdates', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=512;
		$m['LayeredUpdates'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '9d0986f57a534a58737735ebdb1ff8cc';
			$pyjs['track']['lineno']=520;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d0986f57a534a58737735ebdb1ff8cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':520};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=520;
				$pyjs['track']['lineno']=524;
				$pyjs_kwargs_call(null, $m['OrderedUpdates'], sprites, null, [{}, self]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=512;
			var $bases = new Array($m['OrderedUpdates']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('LayeredUpdates', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=527;
		$m['LayeredDirty'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '0342738fe27f57a48cfb08eeeb7c80f2';
			$pyjs['track']['lineno']=535;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0342738fe27f57a48cfb08eeeb7c80f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':535};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=535;
				$pyjs['track']['lineno']=539;
				$pyjs_kwargs_call(null, $m['LayeredUpdates'], sprites, null, [{}, self]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=527;
			var $bases = new Array($m['LayeredUpdates']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('LayeredDirty', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=542;
		$m['spritecollide'] = function(sprite, group, dokill, collided) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
			if (typeof collided == 'undefined') collided=arguments['callee']['__args__'][5][1];
			var $iter25_array,sprites,$iter24_idx,$and2,$iter25_nextval,collide,$iter25_iter,$iter24_type,$iter24_array,$and1,$pyjs__trackstack_size_1,$iter25_idx,$iter25_type,$iter24_iter,$iter24_nextval;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':542};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=542;
			$pyjs['track']['lineno']=550;
			collide = $p['list']([]);
			$pyjs['track']['lineno']=551;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter24_iter = group;
			$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
			while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
				sprites = $iter24_nextval['$nextval'];
				$pyjs['track']['lineno']=552;
				if ($p['bool'](sprite['rect']['intersects']($p['getattr'](sprites, 'rect')))) {
					$pyjs['track']['lineno']=553;
					if ($p['bool'](collided)) {
						$pyjs['track']['lineno']=554;
						if ($p['bool'](!$p['bool'](collided(sprite, sprites)))) {
							$pyjs['track']['lineno']=555;
							continue;
						}
					}
					$pyjs['track']['lineno']=556;
					collide['append'](sprites);
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=557;
			if ($p['bool'](($p['bool']($and1=collide)?dokill:$and1))) {
				$pyjs['track']['lineno']=558;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter25_iter = collide;
				$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
				while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
					sprite = $iter25_nextval['$nextval'];
					$pyjs['track']['lineno']=559;
					sprite['kill']();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
			}
			$pyjs['track']['lineno']=560;
			$pyjs['track']['lineno']=560;
			var $pyjs__ret = collide;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['spritecollide']['__name__'] = 'spritecollide';

		$m['spritecollide']['__bind_type__'] = 0;
		$m['spritecollide']['__args__'] = [null,null,['sprite'],['group'],['dokill'],['collided', null]];
		$pyjs['track']['lineno']=563;
		$m['collide_rect'] = function(sprite1, sprite2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.sprite','lineno':563};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=563;
			$pyjs['track']['lineno']=570;
			$pyjs['track']['lineno']=570;
			var $pyjs__ret = sprite1['rect']['intersects']($p['getattr'](sprite2, 'rect'));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['collide_rect']['__name__'] = 'collide_rect';

		$m['collide_rect']['__bind_type__'] = 0;
		$m['collide_rect']['__args__'] = [null,null,['sprite1'],['sprite2']];
		$pyjs['track']['lineno']=573;
		$m['collide_rect_ratio'] = function(ratio) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var obj,$lambda1;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':573};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=573;
			$pyjs['track']['lineno']=581;
			obj = (typeof _collide_rect_ratio == "undefined"?$m['_collide_rect_ratio']:_collide_rect_ratio)(ratio);
			$pyjs['track']['lineno']=582;
			var 			$lambda1 = function(sprite1, sprite2) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.sprite','lineno':582};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=582;
				$pyjs['track']['lineno']=582;
				$pyjs['track']['lineno']=582;
				var $pyjs__ret = obj['__call__'](sprite1, sprite2);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null,['sprite1'],['sprite2']];
			$pyjs['track']['lineno']=582;
			var $pyjs__ret = $lambda1;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['collide_rect_ratio']['__name__'] = 'collide_rect_ratio';

		$m['collide_rect_ratio']['__bind_type__'] = 0;
		$m['collide_rect_ratio']['__args__'] = [null,null,['ratio']];
		$pyjs['track']['lineno']=585;
		$m['_collide_rect_ratio'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '482b0c16c7620440151206b60e4e893f';
			$pyjs['track']['lineno']=587;
			$cls_definition['__slots__'] = $p['list'](['ratio']);
			$pyjs['track']['lineno']=589;
			$method = $pyjs__bind_method2('__init__', function(ratio) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ratio = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '482b0c16c7620440151206b60e4e893f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':589};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=589;
				$pyjs['track']['lineno']=590;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ratio', ratio) : $p['setattr'](self, 'ratio', ratio); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['ratio']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=592;
			$method = $pyjs__bind_method2('__call__', function(sprite1, sprite2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sprite1 = arguments[1];
					sprite2 = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '482b0c16c7620440151206b60e4e893f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add12,$add13,r2,$mul20,collide,$sub9,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$sub13,$sub12,$sub11,$sub10,$sub16,$sub15,$sub14,$add14,$mul14,$add10,$add11,$mul9,$mul8,$mul7,$mul6,$mul5,r1,$mul17,$mul16,$mul15,$add9,$mul13,$mul12,$mul11,$mul10,$mul19,$mul18,r,$add7,y,x,$add8;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':592};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=592;
				$pyjs['track']['lineno']=593;
				r = $p['getattr'](sprite1, 'rect');
				$pyjs['track']['lineno']=594;
				x = $p['__op_sub']($sub1=(typeof ($mul5=$p['getattr'](r, 'width'))==typeof ($mul6=$p['getattr'](self, 'ratio')) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)),$sub2=$p['getattr'](r, 'width'));
				$pyjs['track']['lineno']=595;
				y = $p['__op_sub']($sub3=(typeof ($mul7=$p['getattr'](r, 'height'))==typeof ($mul8=$p['getattr'](self, 'ratio')) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)),$sub4=$p['getattr'](r, 'height'));
				$pyjs['track']['lineno']=596;
				r1 = $m['rectPool']['get']($p['__op_sub']($sub5=$p['getattr'](r, 'x'),$sub6=$p['int']((typeof ($mul9=x)==typeof ($mul10=0.5) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)))), $p['__op_sub']($sub7=$p['getattr'](r, 'y'),$sub8=$p['int']((typeof ($mul11=y)==typeof ($mul12=0.5) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)))), $p['__op_add']($add7=$p['getattr'](r, 'width'),$add8=$p['int'](x)), $p['__op_add']($add9=$p['getattr'](r, 'height'),$add10=$p['int'](y)));
				$pyjs['track']['lineno']=597;
				r = $p['getattr'](sprite2, 'rect');
				$pyjs['track']['lineno']=598;
				x = $p['__op_sub']($sub9=(typeof ($mul13=$p['getattr'](r, 'width'))==typeof ($mul14=$p['getattr'](self, 'ratio')) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)),$sub10=$p['getattr'](r, 'width'));
				$pyjs['track']['lineno']=599;
				y = $p['__op_sub']($sub11=(typeof ($mul15=$p['getattr'](r, 'height'))==typeof ($mul16=$p['getattr'](self, 'ratio')) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)),$sub12=$p['getattr'](r, 'height'));
				$pyjs['track']['lineno']=600;
				r2 = $m['rectPool']['get']($p['__op_sub']($sub13=$p['getattr'](r, 'x'),$sub14=$p['int']((typeof ($mul17=x)==typeof ($mul18=0.5) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)))), $p['__op_sub']($sub15=$p['getattr'](r, 'y'),$sub16=$p['int']((typeof ($mul19=y)==typeof ($mul20=0.5) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20)))), $p['__op_add']($add11=$p['getattr'](r, 'width'),$add12=$p['int'](x)), $p['__op_add']($add13=$p['getattr'](r, 'height'),$add14=$p['int'](y)));
				$pyjs['track']['lineno']=601;
				collide = r1['intersects'](r2);
				$pyjs['track']['lineno']=602;
				$m['rectPool']['extend']($p['tuple']([r1, r2]));
				$pyjs['track']['lineno']=603;
				$pyjs['track']['lineno']=603;
				var $pyjs__ret = collide;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sprite1'],['sprite2']]);
			$cls_definition['__call__'] = $method;
			$pyjs['track']['lineno']=585;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('_collide_rect_ratio', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=606;
		$m['collide_circle'] = function(sprite1, sprite2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var radius1,$sub20,radius2,sy2,sy1,$pow14,$add27,$pow19,$pow18,$pow17,$pow16,$pow15,$add26,$pow13,$pow12,$pow11,$pow10,$pow7,$pow6,$pow5,$pow4,$pow3,$pow2,$pow1,$add21,$add20,$add23,$add22,$add25,$add24,$pow9,$pow8,$mul28,$mul29,$mul26,$mul27,$mul24,$mul25,$mul22,$mul23,$mul21,$add29,$sub19,$sub18,$add28,$sub17,$add15,$add16,$add17,$pow20,$add18,$add19,sx1,$add30,sx2,$mul31,$mul30,$mul32;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':606};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=606;
			$pyjs['track']['lineno']=614;
			if ($p['bool']($p['hasattr'](sprite1, 'radius'))) {
				$pyjs['track']['lineno']=615;
				radius1 = $p['getattr'](sprite1, 'radius');
			}
			else {
				$pyjs['track']['lineno']=617;
				radius1 = (typeof ($mul21=(typeof ($pow5=$p['__op_add']($add15=(typeof ($pow1=$p['getattr']($p['getattr'](sprite1, 'rect'), 'width'))==typeof ($pow2=$constant_int_2) && typeof $pow1=='number'?
					Math['pow']($pow1,$pow2):
					$p['op_pow']($pow1,$pow2)),$add16=(typeof ($pow3=$p['getattr']($p['getattr'](sprite1, 'rect'), 'height'))==typeof ($pow4=$constant_int_2) && typeof $pow3=='number'?
					Math['pow']($pow3,$pow4):
					$p['op_pow']($pow3,$pow4))))==typeof ($pow6=0.5) && typeof $pow5=='number'?
					Math['pow']($pow5,$pow6):
					$p['op_pow']($pow5,$pow6)))==typeof ($mul22=0.5) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22));
			}
			$pyjs['track']['lineno']=618;
			if ($p['bool']($p['hasattr'](sprite2, 'radius'))) {
				$pyjs['track']['lineno']=619;
				radius2 = $p['getattr'](sprite2, 'radius');
			}
			else {
				$pyjs['track']['lineno']=621;
				radius2 = (typeof ($mul23=(typeof ($pow11=$p['__op_add']($add17=(typeof ($pow7=$p['getattr']($p['getattr'](sprite2, 'rect'), 'width'))==typeof ($pow8=$constant_int_2) && typeof $pow7=='number'?
					Math['pow']($pow7,$pow8):
					$p['op_pow']($pow7,$pow8)),$add18=(typeof ($pow9=$p['getattr']($p['getattr'](sprite2, 'rect'), 'height'))==typeof ($pow10=$constant_int_2) && typeof $pow9=='number'?
					Math['pow']($pow9,$pow10):
					$p['op_pow']($pow9,$pow10))))==typeof ($pow12=0.5) && typeof $pow11=='number'?
					Math['pow']($pow11,$pow12):
					$p['op_pow']($pow11,$pow12)))==typeof ($mul24=0.5) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24));
			}
			$pyjs['track']['lineno']=622;
			sx1 = $p['__op_add']($add19=$p['getattr']($p['getattr'](sprite1, 'rect'), 'x'),$add20=$p['int']((typeof ($mul25=$p['getattr']($p['getattr'](sprite1, 'rect'), 'width'))==typeof ($mul26=0.5) && typeof $mul25=='number'?
				$mul25*$mul26:
				$p['op_mul']($mul25,$mul26))));
			$pyjs['track']['lineno']=623;
			sy1 = $p['__op_add']($add21=$p['getattr']($p['getattr'](sprite1, 'rect'), 'y'),$add22=$p['int']((typeof ($mul27=$p['getattr']($p['getattr'](sprite1, 'rect'), 'height'))==typeof ($mul28=0.5) && typeof $mul27=='number'?
				$mul27*$mul28:
				$p['op_mul']($mul27,$mul28))));
			$pyjs['track']['lineno']=624;
			sx2 = $p['__op_add']($add23=$p['getattr']($p['getattr'](sprite2, 'rect'), 'x'),$add24=$p['int']((typeof ($mul29=$p['getattr']($p['getattr'](sprite2, 'rect'), 'width'))==typeof ($mul30=0.5) && typeof $mul29=='number'?
				$mul29*$mul30:
				$p['op_mul']($mul29,$mul30))));
			$pyjs['track']['lineno']=625;
			sy2 = $p['__op_add']($add25=$p['getattr']($p['getattr'](sprite2, 'rect'), 'y'),$add26=$p['int']((typeof ($mul31=$p['getattr']($p['getattr'](sprite2, 'rect'), 'height'))==typeof ($mul32=0.5) && typeof $mul31=='number'?
				$mul31*$mul32:
				$p['op_mul']($mul31,$mul32))));
			$pyjs['track']['lineno']=626;
			$pyjs['track']['lineno']=626;
			var $pyjs__ret = ($p['cmp']($p['__op_add']($add27=(typeof ($pow13=$p['__op_sub']($sub17=sx1,$sub18=sx2))==typeof ($pow14=$constant_int_2) && typeof $pow13=='number'?
				Math['pow']($pow13,$pow14):
				$p['op_pow']($pow13,$pow14)),$add28=(typeof ($pow15=$p['__op_sub']($sub19=sy1,$sub20=sy2))==typeof ($pow16=$constant_int_2) && typeof $pow15=='number'?
				Math['pow']($pow15,$pow16):
				$p['op_pow']($pow15,$pow16))), $p['__op_add']($add29=(typeof ($pow17=radius1)==typeof ($pow18=$constant_int_2) && typeof $pow17=='number'?
				Math['pow']($pow17,$pow18):
				$p['op_pow']($pow17,$pow18)),$add30=(typeof ($pow19=radius2)==typeof ($pow20=$constant_int_2) && typeof $pow19=='number'?
				Math['pow']($pow19,$pow20):
				$p['op_pow']($pow19,$pow20)))) == -1);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['collide_circle']['__name__'] = 'collide_circle';

		$m['collide_circle']['__bind_type__'] = 0;
		$m['collide_circle']['__args__'] = [null,null,['sprite1'],['sprite2']];
		$pyjs['track']['lineno']=629;
		$m['collide_circle_ratio'] = function(ratio) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var obj,$lambda2;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':629};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=629;
			$pyjs['track']['lineno']=638;
			obj = (typeof _collide_circle_ratio == "undefined"?$m['_collide_circle_ratio']:_collide_circle_ratio)(ratio);
			$pyjs['track']['lineno']=639;
			var 			$lambda2 = function(sprite1, sprite2) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.sprite','lineno':639};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=639;
				$pyjs['track']['lineno']=639;
				$pyjs['track']['lineno']=639;
				var $pyjs__ret = obj['__call__'](sprite1, sprite2);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = [null,null,['sprite1'],['sprite2']];
			$pyjs['track']['lineno']=639;
			var $pyjs__ret = $lambda2;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['collide_circle_ratio']['__name__'] = 'collide_circle_ratio';

		$m['collide_circle_ratio']['__bind_type__'] = 0;
		$m['collide_circle_ratio']['__args__'] = [null,null,['ratio']];
		$pyjs['track']['lineno']=642;
		$m['_collide_circle_ratio'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '04af5ae3a576acc044c7c4cb1a650aec';
			$pyjs['track']['lineno']=644;
			$cls_definition['__slots__'] = $p['list'](['ratio']);
			$pyjs['track']['lineno']=646;
			$method = $pyjs__bind_method2('__init__', function(ratio) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ratio = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '04af5ae3a576acc044c7c4cb1a650aec') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':646};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=646;
				$pyjs['track']['lineno']=647;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ratio', ratio) : $p['setattr'](self, 'ratio', ratio); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['ratio']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=649;
			$method = $pyjs__bind_method2('__call__', function(sprite1, sprite2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sprite1 = arguments[1];
					sprite2 = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '04af5ae3a576acc044c7c4cb1a650aec') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var radius1,$sub22,radius2,$mul50,$sub24,$sub23,$add43,$add42,$pow35,sy2,sy1,$sub21,$pow31,$pow30,$pow33,$pow32,$pow40,$add44,$add40,$pow39,$pow38,$mul48,$mul49,$pow36,$mul44,$mul45,$mul47,$mul40,$mul41,$mul42,$mul43,$pow37,$pow34,$add45,$pow26,$pow27,$pow24,$pow25,$pow22,$pow23,$pow21,$add46,$pow28,$pow29,sx2,$add38,$add39,sx1,$add32,$add33,$mul51,$add31,$add36,$add37,$add34,$add35,$add41,$mul39,$mul38,$mul52,$mul35,$mul34,$mul37,$mul36,$mul46,$mul33;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':649};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=649;
				$pyjs['track']['lineno']=650;
				if ($p['bool']($p['hasattr'](sprite1, 'radius'))) {
					$pyjs['track']['lineno']=651;
					radius1 = (typeof ($mul33=$p['getattr'](sprite1, 'radius'))==typeof ($mul34=$p['getattr'](self, 'ratio')) && typeof $mul33=='number'?
						$mul33*$mul34:
						$p['op_mul']($mul33,$mul34));
				}
				else {
					$pyjs['track']['lineno']=653;
					radius1 = (typeof ($mul37=(typeof ($mul35=(typeof ($pow25=$p['__op_add']($add31=(typeof ($pow21=$p['getattr']($p['getattr'](sprite1, 'rect'), 'width'))==typeof ($pow22=$constant_int_2) && typeof $pow21=='number'?
						Math['pow']($pow21,$pow22):
						$p['op_pow']($pow21,$pow22)),$add32=(typeof ($pow23=$p['getattr']($p['getattr'](sprite1, 'rect'), 'height'))==typeof ($pow24=$constant_int_2) && typeof $pow23=='number'?
						Math['pow']($pow23,$pow24):
						$p['op_pow']($pow23,$pow24))))==typeof ($pow26=0.5) && typeof $pow25=='number'?
						Math['pow']($pow25,$pow26):
						$p['op_pow']($pow25,$pow26)))==typeof ($mul36=0.5) && typeof $mul35=='number'?
						$mul35*$mul36:
						$p['op_mul']($mul35,$mul36)))==typeof ($mul38=$p['getattr'](self, 'ratio')) && typeof $mul37=='number'?
						$mul37*$mul38:
						$p['op_mul']($mul37,$mul38));
				}
				$pyjs['track']['lineno']=654;
				if ($p['bool']($p['hasattr'](sprite2, 'radius'))) {
					$pyjs['track']['lineno']=655;
					radius2 = (typeof ($mul39=$p['getattr'](sprite2, 'radius'))==typeof ($mul40=$p['getattr'](self, 'ratio')) && typeof $mul39=='number'?
						$mul39*$mul40:
						$p['op_mul']($mul39,$mul40));
				}
				else {
					$pyjs['track']['lineno']=657;
					radius2 = (typeof ($mul43=(typeof ($mul41=(typeof ($pow31=$p['__op_add']($add33=(typeof ($pow27=$p['getattr']($p['getattr'](sprite2, 'rect'), 'width'))==typeof ($pow28=$constant_int_2) && typeof $pow27=='number'?
						Math['pow']($pow27,$pow28):
						$p['op_pow']($pow27,$pow28)),$add34=(typeof ($pow29=$p['getattr']($p['getattr'](sprite2, 'rect'), 'height'))==typeof ($pow30=$constant_int_2) && typeof $pow29=='number'?
						Math['pow']($pow29,$pow30):
						$p['op_pow']($pow29,$pow30))))==typeof ($pow32=0.5) && typeof $pow31=='number'?
						Math['pow']($pow31,$pow32):
						$p['op_pow']($pow31,$pow32)))==typeof ($mul42=0.5) && typeof $mul41=='number'?
						$mul41*$mul42:
						$p['op_mul']($mul41,$mul42)))==typeof ($mul44=$p['getattr'](self, 'ratio')) && typeof $mul43=='number'?
						$mul43*$mul44:
						$p['op_mul']($mul43,$mul44));
				}
				$pyjs['track']['lineno']=658;
				sx1 = $p['__op_add']($add35=$p['getattr']($p['getattr'](sprite1, 'rect'), 'x'),$add36=$p['int']((typeof ($mul45=$p['getattr']($p['getattr'](sprite1, 'rect'), 'width'))==typeof ($mul46=0.5) && typeof $mul45=='number'?
					$mul45*$mul46:
					$p['op_mul']($mul45,$mul46))));
				$pyjs['track']['lineno']=659;
				sy1 = $p['__op_add']($add37=$p['getattr']($p['getattr'](sprite1, 'rect'), 'y'),$add38=$p['int']((typeof ($mul47=$p['getattr']($p['getattr'](sprite1, 'rect'), 'height'))==typeof ($mul48=0.5) && typeof $mul47=='number'?
					$mul47*$mul48:
					$p['op_mul']($mul47,$mul48))));
				$pyjs['track']['lineno']=660;
				sx2 = $p['__op_add']($add39=$p['getattr']($p['getattr'](sprite2, 'rect'), 'x'),$add40=$p['int']((typeof ($mul49=$p['getattr']($p['getattr'](sprite2, 'rect'), 'width'))==typeof ($mul50=0.5) && typeof $mul49=='number'?
					$mul49*$mul50:
					$p['op_mul']($mul49,$mul50))));
				$pyjs['track']['lineno']=661;
				sy2 = $p['__op_add']($add41=$p['getattr']($p['getattr'](sprite2, 'rect'), 'y'),$add42=$p['int']((typeof ($mul51=$p['getattr']($p['getattr'](sprite2, 'rect'), 'height'))==typeof ($mul52=0.5) && typeof $mul51=='number'?
					$mul51*$mul52:
					$p['op_mul']($mul51,$mul52))));
				$pyjs['track']['lineno']=662;
				$pyjs['track']['lineno']=662;
				var $pyjs__ret = ($p['cmp']($p['__op_add']($add43=(typeof ($pow33=$p['__op_sub']($sub21=sx1,$sub22=sx2))==typeof ($pow34=$constant_int_2) && typeof $pow33=='number'?
					Math['pow']($pow33,$pow34):
					$p['op_pow']($pow33,$pow34)),$add44=(typeof ($pow35=$p['__op_sub']($sub23=sy1,$sub24=sy2))==typeof ($pow36=$constant_int_2) && typeof $pow35=='number'?
					Math['pow']($pow35,$pow36):
					$p['op_pow']($pow35,$pow36))), $p['__op_add']($add45=(typeof ($pow37=radius1)==typeof ($pow38=$constant_int_2) && typeof $pow37=='number'?
					Math['pow']($pow37,$pow38):
					$p['op_pow']($pow37,$pow38)),$add46=(typeof ($pow39=radius2)==typeof ($pow40=$constant_int_2) && typeof $pow39=='number'?
					Math['pow']($pow39,$pow40):
					$p['op_pow']($pow39,$pow40)))) == -1);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sprite1'],['sprite2']]);
			$cls_definition['__call__'] = $method;
			$pyjs['track']['lineno']=642;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('_collide_circle_ratio', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=665;
		$m['collide_mask'] = function(sprite1, sprite2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $sub26,$sub27,$sub25,$sub28,mask1,mask2;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':665};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=665;
			$pyjs['track']['lineno']=673;
			if ($p['bool']($p['hasattr'](sprite1, 'mask'))) {
				$pyjs['track']['lineno']=674;
				mask1 = $p['getattr'](sprite1, 'mask');
			}
			else {
				$pyjs['track']['lineno']=676;
				mask1 = $m['mask']['from_surface']($p['getattr'](sprite1, 'image'));
			}
			$pyjs['track']['lineno']=677;
			if ($p['bool']($p['hasattr'](sprite2, 'mask'))) {
				$pyjs['track']['lineno']=678;
				mask2 = $p['getattr'](sprite2, 'mask');
			}
			else {
				$pyjs['track']['lineno']=680;
				mask2 = $m['mask']['from_surface']($p['getattr'](sprite2, 'image'));
			}
			$pyjs['track']['lineno']=681;
			if ($p['bool'](mask1['overlap'](mask2, $p['tuple']([$p['__op_sub']($sub25=$p['getattr']($p['getattr'](sprite2, 'rect'), 'x'),$sub26=$p['getattr']($p['getattr'](sprite1, 'rect'), 'x')), $p['__op_sub']($sub27=$p['getattr']($p['getattr'](sprite2, 'rect'), 'y'),$sub28=$p['getattr']($p['getattr'](sprite1, 'rect'), 'y'))])))) {
				$pyjs['track']['lineno']=682;
				$pyjs['track']['lineno']=682;
				var $pyjs__ret = true;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else {
				$pyjs['track']['lineno']=684;
				$pyjs['track']['lineno']=684;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['collide_mask']['__name__'] = 'collide_mask';

		$m['collide_mask']['__bind_type__'] = 0;
		$m['collide_mask']['__args__'] = [null,null,['sprite1'],['sprite2']];
		$pyjs['track']['lineno']=687;
		$m['groupcollide'] = function(group1, group2, dokill1, dokill2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
			var $iter29_type,$iter26_nextval,$iter28_idx,$iter26_idx,$iter26_array,$iter27_nextval,$iter30_nextval,$iter27_array,$iter26_type,$iter27_iter,sprite2,$iter27_type,sprite1,$iter30_type,collide,$iter29_nextval,$iter30_idx,$iter28_iter,$iter28_type,$iter26_iter,$iter28_array,$iter30_iter,$iter28_nextval,$iter27_idx,$pyjs__trackstack_size_2,$iter29_array,$pyjs__trackstack_size_1,$iter30_array,$iter29_idx,$iter29_iter;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':687};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=687;
			$pyjs['track']['lineno']=694;
			collide = $p['dict']([]);
			$pyjs['track']['lineno']=695;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter26_iter = group1;
			$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
			while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
				sprite1 = $iter26_nextval['$nextval'];
				$pyjs['track']['lineno']=696;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter27_iter = group2;
				$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
				while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
					sprite2 = $iter27_nextval['$nextval'];
					$pyjs['track']['lineno']=697;
					if ($p['bool'](sprite1['rect']['intersects']($p['getattr'](sprite2, 'rect')))) {
						$pyjs['track']['lineno']=698;
						if ($p['bool'](!collide['__contains__'](sprite1))) {
							$pyjs['track']['lineno']=699;
							collide['__setitem__'](sprite1, $p['list']([]));
						}
						$pyjs['track']['lineno']=700;
						collide['__getitem__'](sprite1)['append'](sprite2);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=701;
			if ($p['bool'](collide)) {
				$pyjs['track']['lineno']=702;
				if ($p['bool'](dokill1)) {
					$pyjs['track']['lineno']=703;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter28_iter = collide;
					$iter28_nextval=$p['__iter_prepare']($iter28_iter,false);
					while (typeof($p['__wrapped_next']($iter28_nextval)['$nextval']) != 'undefined') {
						sprite1 = $iter28_nextval['$nextval'];
						$pyjs['track']['lineno']=704;
						sprite1['kill']();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
				$pyjs['track']['lineno']=705;
				if ($p['bool'](dokill2)) {
					$pyjs['track']['lineno']=706;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter29_iter = collide;
					$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
					while (typeof($p['__wrapped_next']($iter29_nextval)['$nextval']) != 'undefined') {
						sprite1 = $iter29_nextval['$nextval'];
						$pyjs['track']['lineno']=707;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter30_iter = collide['__getitem__'](sprite1);
						$iter30_nextval=$p['__iter_prepare']($iter30_iter,false);
						while (typeof($p['__wrapped_next']($iter30_nextval)['$nextval']) != 'undefined') {
							sprite2 = $iter30_nextval['$nextval'];
							$pyjs['track']['lineno']=708;
							sprite2['kill']();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.sprite';
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
			}
			$pyjs['track']['lineno']=709;
			$pyjs['track']['lineno']=709;
			var $pyjs__ret = collide;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['groupcollide']['__name__'] = 'groupcollide';

		$m['groupcollide']['__bind_type__'] = 0;
		$m['groupcollide']['__args__'] = [null,null,['group1'],['group2'],['dokill1'],['dokill2']];
		$pyjs['track']['lineno']=712;
		$m['spritecollideany'] = function(sprite, group) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $iter31_array,$iter31_nextval,$iter31_idx,$iter31_type,$pyjs__trackstack_size_1,$iter31_iter,sprites;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':712};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=712;
			$pyjs['track']['lineno']=718;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter31_iter = group;
			$iter31_nextval=$p['__iter_prepare']($iter31_iter,false);
			while (typeof($p['__wrapped_next']($iter31_nextval)['$nextval']) != 'undefined') {
				sprites = $iter31_nextval['$nextval'];
				$pyjs['track']['lineno']=719;
				if ($p['bool'](sprite['rect']['intersects']($p['getattr'](sprites, 'rect')))) {
					$pyjs['track']['lineno']=720;
					$pyjs['track']['lineno']=720;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=721;
			$pyjs['track']['lineno']=721;
			var $pyjs__ret = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['spritecollideany']['__name__'] = 'spritecollideany';

		$m['spritecollideany']['__bind_type__'] = 0;
		$m['spritecollideany']['__args__'] = [null,null,['sprite'],['group']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.sprite */


/* end module: pyjsdl.sprite */


/*
PYJS_DEPS: ['pyjsdl.rect.rectPool', 'pyjsdl', 'pyjsdl.rect', 'pyjsdl.mask']
*/
