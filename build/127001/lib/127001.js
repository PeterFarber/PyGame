/* start module: 127001 */
$pyjs['loaded_modules']['127001'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['127001']['__was_initialized__']) return $pyjs['loaded_modules']['127001'];
	var $m = $pyjs['loaded_modules']['127001'];
	$m['__repr__'] = function() { return '<module: 127001>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = '127001';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = '127001.py, line 1:\n    #!/usr/bin/env python';
		$m.__track_lines__[2] = '127001.py, line 2:\n    from __future__ import division';
		$m.__track_lines__[4] = '127001.py, line 4:\n    """';
		$m.__track_lines__[27] = '127001.py, line 27:\n    import os, sys';
		$m.__track_lines__[28] = "127001.py, line 28:\n    if os.name in ('posix', 'nt', 'os2', 'ce', 'riscos'):";
		$m.__track_lines__[29] = '127001.py, line 29:\n    import pygame';
		$m.__track_lines__[30] = '127001.py, line 30:\n    java = False';
		$m.__track_lines__[31] = '127001.py, line 31:\n    js = False';
		$m.__track_lines__[33] = '127001.py, line 33:\n    import pyj2d';
		$m.__track_lines__[34] = "127001.py, line 34:\n    sys.modules['pygame'] = pyj2d";
		$m.__track_lines__[35] = '127001.py, line 35:\n    pygame = pyj2d';
		$m.__track_lines__[36] = '127001.py, line 36:\n    java = True';
		$m.__track_lines__[37] = '127001.py, line 37:\n    js = False';
		$m.__track_lines__[39] = '127001.py, line 39:\n    import pyjsdl as pygame';
		$m.__track_lines__[40] = '127001.py, line 40:\n    java = False';
		$m.__track_lines__[41] = '127001.py, line 41:\n    js = True';
		$m.__track_lines__[42] = '127001.py, line 42:\n    import random';
		$m.__track_lines__[44] = '127001.py, line 44:\n    load_images = True      ###';
		$m.__track_lines__[47] = '127001.py, line 47:\n    class Matrix(object):';
		$m.__track_lines__[51] = '127001.py, line 51:\n    def __init__(self, x, y, screen, background):';
		$m.__track_lines__[52] = '127001.py, line 52:\n    self.x, self.y = x, y';
		$m.__track_lines__[53] = '127001.py, line 53:\n    self.screen = screen';
		$m.__track_lines__[54] = '127001.py, line 54:\n    self.background = background';
		$m.__track_lines__[55] = '127001.py, line 55:\n    self.clock = pygame.time.Clock()';
		$m.__track_lines__[56] = '127001.py, line 56:\n    self.level = 2';
		$m.__track_lines__[57] = '127001.py, line 57:\n    self.speed = 2';
		$m.__track_lines__[58] = "127001.py, line 58:\n    self.mode = {'Serpent1':'AI', 'Serpent2':'AI'}";
		$m.__track_lines__[59] = "127001.py, line 59:\n    self.ctrl = {'Pad':'Serpent1', 'Key1':'Serpent1', 'Key2':None}";
		$m.__track_lines__[60] = "127001.py, line 60:\n    self.points = {'Serpent1':0, 'Serpent2':0}";
		$m.__track_lines__[61] = '127001.py, line 61:\n    self.match = 0';
		$m.__track_lines__[62] = '127001.py, line 62:\n    self.auto = True';
		$m.__track_lines__[63] = '127001.py, line 63:\n    self.controls = {}';
		$m.__track_lines__[64] = '127001.py, line 64:\n    self.dirn = {}';
		$m.__track_lines__[65] = "127001.py, line 65:\n    self.dirn['U'] = {'U':'U', 'D':'D', 'L':'L', 'R':'R'}";
		$m.__track_lines__[66] = "127001.py, line 66:\n    self.dirn['D'] = {'U':'D', 'D':'U', 'L':'R', 'R':'L'}";
		$m.__track_lines__[67] = "127001.py, line 67:\n    self.dirn['L'] = {'U':'R', 'D':'L', 'L':'D', 'R':'U'}";
		$m.__track_lines__[68] = "127001.py, line 68:\n    self.dirn['R'] = {'U':'L', 'D':'R', 'L':'U', 'R':'D'}";
		$m.__track_lines__[69] = '127001.py, line 69:\n    self.serpent_control = self.serpent_control_scr';
		$m.__track_lines__[70] = '127001.py, line 70:\n    self.update_rect = []';
		$m.__track_lines__[71] = '127001.py, line 71:\n    self.clear_screen()';
		$m.__track_lines__[72] = '127001.py, line 72:\n    self.active = False';
		$m.__track_lines__[74] = '127001.py, line 74:\n    def start(self):';
		$m.__track_lines__[76] = '127001.py, line 76:\n    self.treat = pygame.sprite.RenderUpdates()';
		$m.__track_lines__[77] = "127001.py, line 77:\n    self.serpent = {'Serpent1':None, 'Serpent2':None}";
		$m.__track_lines__[78] = '127001.py, line 78:\n    for serpent in self.mode:';
		$m.__track_lines__[79] = "127001.py, line 79:\n    if self.mode[serpent] in ('USER', 'AI'):";
		$m.__track_lines__[80] = '127001.py, line 80:\n    self.serpent_initiate(serpent)';
		$m.__track_lines__[82] = '127001.py, line 82:\n    self.match = 0';
		$m.__track_lines__[83] = "127001.py, line 83:\n    self.auto = not 'USER' in self.mode.values()";
		$m.__track_lines__[84] = '127001.py, line 84:\n    self.clear_screen()';
		$m.__track_lines__[85] = '127001.py, line 85:\n    for serpent in self.points:';
		$m.__track_lines__[86] = '127001.py, line 86:\n    self.points[serpent] = 0';
		$m.__track_lines__[87] = '127001.py, line 87:\n    self.active = True';
		$m.__track_lines__[89] = '127001.py, line 89:\n    def clear_screen(self):';
		$m.__track_lines__[91] = '127001.py, line 91:\n    self.screen.blit(self.background, (0,0))';
		$m.__track_lines__[92] = '127001.py, line 92:\n    self.draw_edge()';
		$m.__track_lines__[93] = '127001.py, line 93:\n    pygame.display.flip()';
		$m.__track_lines__[95] = '127001.py, line 95:\n    def draw_edge(self):';
		$m.__track_lines__[97] = '127001.py, line 97:\n    self.edges = []';
		$m.__track_lines__[98] = '127001.py, line 98:\n    for rect in [ (0,0,self.x,5), (0,self.y-5,self.x,5), (0,0,5,self.y), (self.x-5,0,5,self.y-5) ]:';
		$m.__track_lines__[99] = '127001.py, line 99:\n    edge_rect = pygame.Rect(rect)';
		$m.__track_lines__[100] = '127001.py, line 100:\n    self.edges.append(pygame.draw.rect(self.screen, (43,50,58), edge_rect, 0))';
		$m.__track_lines__[101] = '127001.py, line 101:\n    self.update_rect.append(edge_rect)';
		$m.__track_lines__[103] = '127001.py, line 103:\n    def update_screen(self):';
		$m.__track_lines__[105] = '127001.py, line 105:\n    if self.treat:';
		$m.__track_lines__[106] = '127001.py, line 106:\n    self.treat.clear(self.screen, self.background)';
		$m.__track_lines__[107] = '127001.py, line 107:\n    self.update_rect.extend( self.treat.draw(self.screen) )';
		$m.__track_lines__[108] = '127001.py, line 108:\n    for serpent in self.serpent:';
		$m.__track_lines__[109] = '127001.py, line 109:\n    if not self.serpent[serpent]:';
		$m.__track_lines__[110] = '127001.py, line 110:\n    continue';
		$m.__track_lines__[111] = '127001.py, line 111:\n    self.serpent[serpent].segments.clear(self.screen, self.background)';
		$m.__track_lines__[112] = '127001.py, line 112:\n    self.update_rect.extend( self.serpent[serpent].segments.draw(self.screen) )';
		$m.__track_lines__[113] = '127001.py, line 113:\n    pygame.display.update(self.update_rect)';
		$m.__track_lines__[114] = '127001.py, line 114:\n    self.update_rect = []';
		$m.__track_lines__[116] = '127001.py, line 116:\n    def set_active(self, state=None, pause=False):';
		$m.__track_lines__[118] = '127001.py, line 118:\n    if state is None:';
		$m.__track_lines__[119] = '127001.py, line 119:\n    self.active = not self.active';
		$m.__track_lines__[121] = '127001.py, line 121:\n    self.active = state';
		$m.__track_lines__[122] = '127001.py, line 122:\n    if self.active:';
		$m.__track_lines__[123] = '127001.py, line 123:\n    if not pause:';
		$m.__track_lines__[124] = '127001.py, line 124:\n    self.start()';
		$m.__track_lines__[126] = '127001.py, line 126:\n    def set_mode(self, serpent, mode):';
		$m.__track_lines__[128] = '127001.py, line 128:\n    self.mode[serpent] = mode';
		$m.__track_lines__[130] = '127001.py, line 130:\n    def set_control_mode(self, mode):';
		$m.__track_lines__[132] = "127001.py, line 132:\n    if mode == 'SCR':";
		$m.__track_lines__[133] = '127001.py, line 133:\n    self.serpent_control = self.serpent_control_scr';
		$m.__track_lines__[135] = '127001.py, line 135:\n    self.serpent_control = self.serpent_control_usr';
		$m.__track_lines__[137] = '127001.py, line 137:\n    def set_difficulty(self, level):';
		$m.__track_lines__[139] = '127001.py, line 139:\n    self.level = level';
		$m.__track_lines__[140] = '127001.py, line 140:\n    self.speed = { 1:1, 2:2, 3:5, 4:10 }[level]';
		$m.__track_lines__[142] = '127001.py, line 142:\n    def set_control(self, serpent, control):';
		$m.__track_lines__[144] = '127001.py, line 144:\n    for ctr in self.ctrl:';
		$m.__track_lines__[145] = '127001.py, line 145:\n    if self.ctrl[ctr] == serpent:';
		$m.__track_lines__[146] = '127001.py, line 146:\n    self.ctrl[ctr] = None';
		$m.__track_lines__[147] = "127001.py, line 147:\n    if control == 'Pad/Key1':";
		$m.__track_lines__[148] = "127001.py, line 148:\n    self.ctrl['Pad'] = serpent";
		$m.__track_lines__[149] = "127001.py, line 149:\n    self.ctrl['Key1'] = serpent";
		$m.__track_lines__[151] = '127001.py, line 151:\n    self.ctrl[control] = serpent';
		$m.__track_lines__[153] = "127001.py, line 153:\n    def serpent_control_scr(self, direction, ctrl='Pad'):";
		$m.__track_lines__[155] = '127001.py, line 155:\n    try:';
		$m.__track_lines__[156] = '127001.py, line 156:\n    self.serpent[self.ctrl[ctrl]].control(direction)';
		$m.__track_lines__[158] = '127001.py, line 158:\n    pass';
		$m.__track_lines__[160] = "127001.py, line 160:\n    def serpent_control_usr(self, direction, ctrl='Pad'):";
		$m.__track_lines__[162] = '127001.py, line 162:\n    try:';
		$m.__track_lines__[163] = '127001.py, line 163:\n    dirn = self.serpent[self.ctrl[ctrl]].direction';
		$m.__track_lines__[164] = '127001.py, line 164:\n    direction = self.dirn[dirn][direction]';
		$m.__track_lines__[165] = '127001.py, line 165:\n    self.serpent[self.ctrl[ctrl]].control(direction)';
		$m.__track_lines__[167] = '127001.py, line 167:\n    pass';
		$m.__track_lines__[169] = '127001.py, line 169:\n    def serpent_initiate(self, identity):';
		$m.__track_lines__[171] = "127001.py, line 171:\n    if identity == 'Serpent1':";
		$m.__track_lines__[172] = "127001.py, line 172:\n    self.serpent['Serpent1'] = Serpent(self, (self.x//2)+50,(self.y//3)+30, identity, self.speed, self.mode['Serpent1'])";
		$m.__track_lines__[174] = "127001.py, line 174:\n    self.serpent['Serpent2'] = Serpent(self, (self.x//2)-50,(self.y//3)+30, identity, self.speed, self.mode['Serpent2'])";
		$m.__track_lines__[176] = '127001.py, line 176:\n    def pause(self):';
		$m.__track_lines__[177] = '127001.py, line 177:\n    tm = pygame.time.wait(100)';
		$m.__track_lines__[179] = '127001.py, line 179:\n    def update(self):';
		$m.__track_lines__[181] = '127001.py, line 181:\n    if self.active:';
		$m.__track_lines__[182] = '127001.py, line 182:\n    if not self.treat:';
		$m.__track_lines__[183] = '127001.py, line 183:\n    self.treat.clear(self.screen, self.background)';
		$m.__track_lines__[184] = '127001.py, line 184:\n    self.update_rect.extend( self.treat.draw(self.screen) )';
		$m.__track_lines__[185] = '127001.py, line 185:\n    if self.serpent and random.random() > 0.95:';
		$m.__track_lines__[186] = '127001.py, line 186:\n    self.treat.add( Treat(self) )';
		$m.__track_lines__[187] = '127001.py, line 187:\n    self.treat.clear(self.screen, self.background)';
		$m.__track_lines__[188] = '127001.py, line 188:\n    self.update_rect.extend( self.treat.draw(self.screen) )';
		$m.__track_lines__[189] = '127001.py, line 189:\n    self.treat.update()';
		$m.__track_lines__[190] = '127001.py, line 190:\n    for serpent in self.serpent:';
		$m.__track_lines__[191] = '127001.py, line 191:\n    if not self.serpent[serpent]:';
		$m.__track_lines__[192] = '127001.py, line 192:\n    continue';
		$m.__track_lines__[193] = '127001.py, line 193:\n    if not self.serpent[serpent].alive:';
		$m.__track_lines__[194] = '127001.py, line 194:\n    if not self.match and not self.auto:';
		$m.__track_lines__[195] = '127001.py, line 195:\n    self.active = False';
		$m.__track_lines__[197] = '127001.py, line 197:\n    self.serpent_initiate(self.serpent[serpent].identity)';
		$m.__track_lines__[198] = '127001.py, line 198:\n    self.draw_edge()';
		$m.__track_lines__[199] = '127001.py, line 199:\n    self.serpent[serpent].update()';
		$m.__track_lines__[200] = '127001.py, line 200:\n    self.serpent[serpent].segments.clear(self.screen, self.background)';
		$m.__track_lines__[201] = '127001.py, line 201:\n    self.update_rect.extend( self.serpent[serpent].segments.draw(self.screen) )';
		$m.__track_lines__[203] = '127001.py, line 203:\n    self.pause()';
		$m.__track_lines__[206] = '127001.py, line 206:\n    class Serpent(object):';
		$m.__track_lines__[210] = '127001.py, line 210:\n    def __init__(self, matrix, x, y, identity, speed, mode):';
		$m.__track_lines__[211] = '127001.py, line 211:\n    self.matrix = matrix';
		$m.__track_lines__[212] = '127001.py, line 212:\n    self.identity = identity';
		$m.__track_lines__[213] = '127001.py, line 213:\n    self.mode = mode';
		$m.__track_lines__[214] = '127001.py, line 214:\n    self.x, self.y = x, y';
		$m.__track_lines__[215] = '127001.py, line 215:\n    self.speed = speed';
		$m.__track_lines__[216] = "127001.py, line 216:\n    self.DIR = { 'U':(0,-1), 'D':(0,1), 'L':(-1,0), 'R':(1,0) }";
		$m.__track_lines__[217] = "127001.py, line 217:\n    self.DEG = { 'U':0, 'D':180, 'L':90, 'R':-90 }";
		$m.__track_lines__[218] = "127001.py, line 218:\n    if self.identity == 'Serpent1':";
		$m.__track_lines__[219] = "127001.py, line 219:\n    self.direction = 'R'";
		$m.__track_lines__[221] = "127001.py, line 221:\n    self.direction = 'L'";
		$m.__track_lines__[222] = '127001.py, line 222:\n    self.new_direction = None';
		$m.__track_lines__[223] = '127001.py, line 223:\n    self.step, self.growing, self.rate = 0, 0, 0';
		$m.__track_lines__[224] = '127001.py, line 224:\n    self.segments = pygame.sprite.RenderUpdates()';
		$m.__track_lines__[225] = '127001.py, line 225:\n    self.segment_spares = []';
		$m.__track_lines__[226] = '127001.py, line 226:\n    self.serpent_body = {}';
		$m.__track_lines__[227] = '127001.py, line 227:\n    self.grow(self.x, self.y, self.DIR[self.direction])';
		$m.__track_lines__[228] = "127001.py, line 228:\n    self.serpent_body[0].image = self.serpent_body[0].images[self.identity+'_head'][self.direction]";
		$m.__track_lines__[229] = '127001.py, line 229:\n    self.scan_rect = pygame.sprite.Sprite()';
		$m.__track_lines__[230] = '127001.py, line 230:\n    self.scan_rect.rect = pygame.Rect(0,0,10,10)';
		$m.__track_lines__[231] = '127001.py, line 231:\n    self.scan_detect = False';
		$m.__track_lines__[232] = '127001.py, line 232:\n    self.pause = 20';
		$m.__track_lines__[233] = '127001.py, line 233:\n    self.active = True';
		$m.__track_lines__[234] = '127001.py, line 234:\n    self.alive = True';
		$m.__track_lines__[236] = '127001.py, line 236:\n    def grow(self, x, y, direction, number=5):';
		$m.__track_lines__[238] = '127001.py, line 238:\n    for num in range(0,number*10,10):';
		$m.__track_lines__[239] = '127001.py, line 239:\n    if not self.segment_spares:';
		$m.__track_lines__[240] = '127001.py, line 240:\n    self.segment_spares.append(Segment(self.identity, (0,0)))';
		$m.__track_lines__[241] = '127001.py, line 241:\n    segment = self.segment_spares.pop()';
		$m.__track_lines__[242] = '127001.py, line 242:\n    segment.x, segment.y = ((x-(direction[0]*num)),(y-(direction[1]*num)))';
		$m.__track_lines__[243] = '127001.py, line 243:\n    segment.x_pre, segment.y_pre = segment.x, segment.y';
		$m.__track_lines__[244] = "127001.py, line 244:\n    segment.rect.__setattr__('center',(segment.x,segment.y))";
		$m.__track_lines__[245] = '127001.py, line 245:\n    segment.direction = direction';
		$m.__track_lines__[246] = '127001.py, line 246:\n    segment.speed = self.speed';
		$m.__track_lines__[247] = '127001.py, line 247:\n    self.segments.add(segment)';
		$m.__track_lines__[248] = '127001.py, line 248:\n    self.serpent_body[len(self.serpent_body)] = segment';
		$m.__track_lines__[250] = '127001.py, line 250:\n    def control(self, direction):';
		$m.__track_lines__[252] = "127001.py, line 252:\n    for dirn in ( ('L','R'),('U','D') ):";
		$m.__track_lines__[253] = '127001.py, line 253:\n    if (direction in dirn) and (self.direction not in dirn):';
		$m.__track_lines__[254] = '127001.py, line 254:\n    self.new_direction = direction';
		$m.__track_lines__[255] = '127001.py, line 255:\n    self.last_move = direction';
		$m.__track_lines__[257] = '127001.py, line 257:\n    def move(self):';
		$m.__track_lines__[259] = "127001.py, line 259:\n    if self.mode == 'AI':";
		$m.__track_lines__[260] = '127001.py, line 260:\n    self.move_auto()';
		$m.__track_lines__[261] = '127001.py, line 261:\n    self.step += 1';
		$m.__track_lines__[262] = '127001.py, line 262:\n    if self.step >= 10/self.speed:';
		$m.__track_lines__[263] = '127001.py, line 263:\n    for i in range(len(self.serpent_body)-1, 0, -1):';
		$m.__track_lines__[264] = '127001.py, line 264:\n    self.serpent_body[i].direction = self.serpent_body[i-1].direction';
		$m.__track_lines__[265] = '127001.py, line 265:\n    if self.new_direction:';
		$m.__track_lines__[266] = '127001.py, line 266:\n    self.direction = self.new_direction';
		$m.__track_lines__[267] = '127001.py, line 267:\n    self.serpent_body[0].direction = self.DIR[self.direction]';
		$m.__track_lines__[268] = "127001.py, line 268:\n    self.serpent_body[0].image = self.serpent_body[0].images[self.identity+'_head'][self.direction]";
		$m.__track_lines__[269] = '127001.py, line 269:\n    self.new_direction = None';
		$m.__track_lines__[270] = '127001.py, line 270:\n    self.step = 0';
		$m.__track_lines__[271] = '127001.py, line 271:\n    self.segments.update()';
		$m.__track_lines__[273] = '127001.py, line 273:\n    def move_auto(self):';
		$m.__track_lines__[275] = '127001.py, line 275:\n    def collide(direction):';
		$m.__track_lines__[276] = '127001.py, line 276:\n    direction = self.DIR[direction]';
		$m.__track_lines__[277] = '127001.py, line 277:\n    self.scan_rect.rect.x = self.serpent_body[0].x+(direction[0]*10) - (self.scan_rect.rect.width//2)';
		$m.__track_lines__[278] = '127001.py, line 278:\n    self.scan_rect.rect.y = self.serpent_body[0].y+(direction[1]*10) - (self.scan_rect.rect.height//2)';
		$m.__track_lines__[279] = '127001.py, line 279:\n    collide = False';
		$m.__track_lines__[280] = '127001.py, line 280:\n    for serpent in self.matrix.serpent:';
		$m.__track_lines__[281] = '127001.py, line 281:\n    if not self.matrix.serpent[serpent]:';
		$m.__track_lines__[282] = '127001.py, line 282:\n    continue';
		$m.__track_lines__[283] = '127001.py, line 283:\n    if pygame.sprite.spritecollideany(self.scan_rect, self.matrix.serpent[serpent].segments):';
		$m.__track_lines__[284] = '127001.py, line 284:\n    collide = True';
		$m.__track_lines__[285] = '127001.py, line 285:\n    return collide';
		$m.__track_lines__[286] = '127001.py, line 286:\n    if self.scan_rect.rect.collidelist(self.matrix.edges) != -1:';
		$m.__track_lines__[287] = '127001.py, line 287:\n    collide = True';
		$m.__track_lines__[288] = '127001.py, line 288:\n    return collide';
		$m.__track_lines__[289] = '127001.py, line 289:\n    return collide';
		$m.__track_lines__[290] = '127001.py, line 290:\n    try:';
		$m.__track_lines__[291] = '127001.py, line 291:\n    treat = [treat for treat in self.matrix.treat][0]';
		$m.__track_lines__[293] = '127001.py, line 293:\n    treat = None';
		$m.__track_lines__[294] = '127001.py, line 294:\n    if treat and not self.new_direction:';
		$m.__track_lines__[295] = '127001.py, line 295:\n    x, y = self.serpent_body[0].x, self.serpent_body[0].y';
		$m.__track_lines__[296] = '127001.py, line 296:\n    if x <= treat.x and y <= treat.y:';
		$m.__track_lines__[297] = "127001.py, line 297:\n    direct = ('R','D')";
		$m.__track_lines__[299] = "127001.py, line 299:\n    direct = ('R','U')";
		$m.__track_lines__[301] = "127001.py, line 301:\n    direct = ('L','D')";
		$m.__track_lines__[303] = "127001.py, line 303:\n    direct = ('L','U')";
		$m.__track_lines__[304] = '127001.py, line 304:\n    if self.direction not in direct:';
		$m.__track_lines__[305] = '127001.py, line 305:\n    new_direction = []';
		$m.__track_lines__[306] = '127001.py, line 306:\n    for direction in direct:';
		$m.__track_lines__[307] = '127001.py, line 307:\n    if not collide(direction):';
		$m.__track_lines__[308] = '127001.py, line 308:\n    new_direction.append(direction)';
		$m.__track_lines__[309] = '127001.py, line 309:\n    if new_direction:';
		$m.__track_lines__[310] = '127001.py, line 310:\n    self.control(random.choice(new_direction))';
		$m.__track_lines__[311] = '127001.py, line 311:\n    if collide(self.direction):';
		$m.__track_lines__[312] = '127001.py, line 312:\n    self.new_direction = None';
		$m.__track_lines__[313] = '127001.py, line 313:\n    new_direction = []';
		$m.__track_lines__[314] = "127001.py, line 314:\n    if self.direction in ('U','D'):";
		$m.__track_lines__[315] = "127001.py, line 315:\n    for direction in ('L','R'):";
		$m.__track_lines__[316] = '127001.py, line 316:\n    if not collide(direction):';
		$m.__track_lines__[317] = '127001.py, line 317:\n    new_direction.append(direction)';
		$m.__track_lines__[319] = "127001.py, line 319:\n    for direction in ('U','D'):";
		$m.__track_lines__[320] = '127001.py, line 320:\n    if not collide(direction):';
		$m.__track_lines__[321] = '127001.py, line 321:\n    new_direction.append(direction)';
		$m.__track_lines__[322] = '127001.py, line 322:\n    if new_direction:';
		$m.__track_lines__[323] = '127001.py, line 323:\n    self.control(random.choice(new_direction))';
		$m.__track_lines__[324] = '127001.py, line 324:\n    self.scan_detect = True';
		$m.__track_lines__[326] = '127001.py, line 326:\n    self.scan_detect = False';
		$m.__track_lines__[328] = '127001.py, line 328:\n    def growth(self):';
		$m.__track_lines__[330] = '127001.py, line 330:\n    if pygame.sprite.spritecollide(self.serpent_body[0], self.matrix.treat, False, pygame.sprite.collide_mask):';
		$m.__track_lines__[331] = '127001.py, line 331:\n    points = 0';
		$m.__track_lines__[332] = '127001.py, line 332:\n    treat = [treat for treat in self.matrix.treat][0]';
		$m.__track_lines__[333] = "127001.py, line 333:\n    if treat.identity == 'Food':";
		$m.__track_lines__[334] = '127001.py, line 334:\n    if self.growing >= 0:';
		$m.__track_lines__[335] = '127001.py, line 335:\n    self.growing += 5';
		$m.__track_lines__[337] = '127001.py, line 337:\n    points += 5';
		$m.__track_lines__[339] = '127001.py, line 339:\n    if len(self.serpent_body) > 5 and self.growing >= 0:';
		$m.__track_lines__[340] = '127001.py, line 340:\n    self.growing = -(len(self.serpent_body)-5)';
		$m.__track_lines__[341] = '127001.py, line 341:\n    self.rate = 0';
		$m.__track_lines__[342] = '127001.py, line 342:\n    points += 10';
		$m.__track_lines__[343] = '127001.py, line 343:\n    if points:';
		$m.__track_lines__[344] = '127001.py, line 344:\n    self.set_points(points)';
		$m.__track_lines__[345] = '127001.py, line 345:\n    self.matrix.treat.empty()';
		$m.__track_lines__[346] = '127001.py, line 346:\n    if self.growing:';
		$m.__track_lines__[347] = '127001.py, line 347:\n    self.rate += 1';
		$m.__track_lines__[348] = '127001.py, line 348:\n    if self.rate > 10/self.speed:';
		$m.__track_lines__[349] = '127001.py, line 349:\n    points = 0';
		$m.__track_lines__[350] = '127001.py, line 350:\n    if self.growing > 0:';
		$m.__track_lines__[351] = '127001.py, line 351:\n    tail = self.serpent_body[len(self.serpent_body)-1]';
		$m.__track_lines__[352] = '127001.py, line 352:\n    self.grow(tail.x-(tail.direction[0]*10), tail.y-(tail.direction[1]*10), tail.direction, number=1)';
		$m.__track_lines__[353] = '127001.py, line 353:\n    self.growing -= 1';
		$m.__track_lines__[354] = '127001.py, line 354:\n    points += 1';
		$m.__track_lines__[356] = '127001.py, line 356:\n    tail = len(self.serpent_body)-1';
		$m.__track_lines__[357] = '127001.py, line 357:\n    self.segment_spares.append(self.serpent_body[tail])';
		$m.__track_lines__[358] = '127001.py, line 358:\n    self.segments.remove(self.serpent_body[tail])';
		$m.__track_lines__[359] = '127001.py, line 359:\n    del self.serpent_body[tail]';
		$m.__track_lines__[360] = '127001.py, line 360:\n    self.growing += 1';
		$m.__track_lines__[361] = '127001.py, line 361:\n    points += 1';
		$m.__track_lines__[362] = '127001.py, line 362:\n    self.rate = 0';
		$m.__track_lines__[363] = '127001.py, line 363:\n    if points:';
		$m.__track_lines__[364] = '127001.py, line 364:\n    self.set_points(points)';
		$m.__track_lines__[366] = '127001.py, line 366:\n    def set_points(self, points):';
		$m.__track_lines__[368] = '127001.py, line 368:\n    self.matrix.points[self.identity] += points';
		$m.__track_lines__[369] = '127001.py, line 369:\n    if self.matrix.match and not self.matrix.auto:';
		$m.__track_lines__[370] = '127001.py, line 370:\n    if self.matrix.points[self.identity] >= self.matrix.match and not self.growing:';
		$m.__track_lines__[371] = '127001.py, line 371:\n    self.matrix.set_active(False)';
		$m.__track_lines__[373] = '127001.py, line 373:\n    def collision(self):';
		$m.__track_lines__[375] = "127001.py, line 375:\n    if self.mode == 'AI' and not self.scan_detect:";
		$m.__track_lines__[376] = '127001.py, line 376:\n    return';
		$m.__track_lines__[377] = '127001.py, line 377:\n    for serpent in self.matrix.serpent:';
		$m.__track_lines__[378] = '127001.py, line 378:\n    if not self.matrix.serpent[serpent]:';
		$m.__track_lines__[379] = '127001.py, line 379:\n    continue';
		$m.__track_lines__[380] = '127001.py, line 380:\n    for segment in pygame.sprite.spritecollide(self.serpent_body[0], self.matrix.serpent[serpent].segments, False):';
		$m.__track_lines__[381] = '127001.py, line 381:\n    if segment not in (self.serpent_body[0], self.serpent_body[1]):';
		$m.__track_lines__[382] = '127001.py, line 382:\n    return True';
		$m.__track_lines__[383] = '127001.py, line 383:\n    if self.serpent_body[0].rect.collidelist(self.matrix.edges) != -1:';
		$m.__track_lines__[384] = '127001.py, line 384:\n    return True';
		$m.__track_lines__[385] = '127001.py, line 385:\n    return False';
		$m.__track_lines__[387] = '127001.py, line 387:\n    def update(self):';
		$m.__track_lines__[389] = '127001.py, line 389:\n    if self.active:';
		$m.__track_lines__[390] = '127001.py, line 390:\n    self.move()';
		$m.__track_lines__[391] = '127001.py, line 391:\n    self.growth()';
		$m.__track_lines__[392] = '127001.py, line 392:\n    self.active = not self.collision()';
		$m.__track_lines__[393] = '127001.py, line 393:\n    if not self.active:';
		$m.__track_lines__[394] = "127001.py, line 394:\n    self.serpent_body[0].image = self.serpent_body[0].images[self.identity+'_ko'][self.direction]";
		$m.__track_lines__[395] = '127001.py, line 395:\n    if (self.matrix.match or self.matrix.auto):';
		$m.__track_lines__[396] = '127001.py, line 396:\n    if len(self.serpent_body) > 5:';
		$m.__track_lines__[397] = '127001.py, line 397:\n    penalty = 5+(len(self.serpent_body)//5)';
		$m.__track_lines__[398] = '127001.py, line 398:\n    if self.matrix.points[self.identity] - penalty < 0:';
		$m.__track_lines__[399] = '127001.py, line 399:\n    penalty = self.matrix.points[self.identity]';
		$m.__track_lines__[400] = '127001.py, line 400:\n    self.set_points(-penalty)';
		$m.__track_lines__[402] = '127001.py, line 402:\n    if not self.matrix.match and not self.matrix.auto:';
		$m.__track_lines__[403] = '127001.py, line 403:\n    self.alive = False';
		$m.__track_lines__[405] = '127001.py, line 405:\n    self.pause -= 1';
		$m.__track_lines__[406] = '127001.py, line 406:\n    if not self.pause:';
		$m.__track_lines__[407] = '127001.py, line 407:\n    self.segment_spares.extend(self.segments.sprites())';
		$m.__track_lines__[408] = '127001.py, line 408:\n    self.segments.empty()';
		$m.__track_lines__[409] = '127001.py, line 409:\n    self.alive = False';
		$m.__track_lines__[412] = '127001.py, line 412:\n    class Segment(pygame.sprite.Sprite):';
		$m.__track_lines__[416] = '127001.py, line 416:\n    images = None';
		$m.__track_lines__[417] = '127001.py, line 417:\n    mask = None';
		$m.__track_lines__[418] = '127001.py, line 418:\n    def __init__(self, serpent, position, direction=None, speed=0):';
		$m.__track_lines__[419] = '127001.py, line 419:\n    pygame.sprite.Sprite.__init__(self)';
		$m.__track_lines__[420] = "127001.py, line 420:\n    self.type = {'Serpent1':(0,0,255), 'Serpent2':(255,0,0)}";
		$m.__track_lines__[421] = '127001.py, line 421:\n    if not Segment.images:';
		$m.__track_lines__[422] = '127001.py, line 422:\n    Segment.images = {}';
		$m.__track_lines__[423] = "127001.py, line 423:\n    for species in ('Serpent1', 'Serpent2'):";
		$m.__track_lines__[424] = '127001.py, line 424:\n    if load_images:';
		$m.__track_lines__[425] = "127001.py, line 425:\n    path = 'data'";
		$m.__track_lines__[426] = "127001.py, line 426:\n    image = {'Serpent1':'../../../data/segment1.png', 'Serpent2':'../../../data/segment2.png'}[species]";
		$m.__track_lines__[427] = '127001.py, line 427:\n    image_path = os.path.join(path, image)';
		$m.__track_lines__[428] = '127001.py, line 428:\n    Segment.images[species] = pygame.image.load(image_path)';
		$m.__track_lines__[430] = '127001.py, line 430:\n    Segment.images[species] = pygame.Surface((10,10))';
		$m.__track_lines__[431] = '127001.py, line 431:\n    pygame.draw.circle(Segment.images[species], self.type[species], (5,5), 6, 0)';
		$m.__track_lines__[432] = '127001.py, line 432:\n    Segment.images[species].set_colorkey((0,0,0))';
		$m.__track_lines__[433] = '127001.py, line 433:\n    segment_head = Segment.images[species].copy()';
		$m.__track_lines__[434] = '127001.py, line 434:\n    pygame.draw.line(segment_head, (0,255,0), (2,2), (0,5), 3)';
		$m.__track_lines__[435] = '127001.py, line 435:\n    pygame.draw.line(segment_head, (0,255,0), (7,2), (9,5), 3)';
		$m.__track_lines__[436] = '127001.py, line 436:\n    segment_ko = Segment.images[species].copy()';
		$m.__track_lines__[437] = '127001.py, line 437:\n    pygame.draw.circle(segment_ko, (0,255,0), (2,3), 2, 1)';
		$m.__track_lines__[438] = '127001.py, line 438:\n    pygame.draw.circle(segment_ko, (0,255,0), (8,3), 2, 1)';
		$m.__track_lines__[439] = "127001.py, line 439:\n    Segment.images[species+'_head'] = {}";
		$m.__track_lines__[440] = "127001.py, line 440:\n    Segment.images[species+'_ko'] = {}";
		$m.__track_lines__[441] = "127001.py, line 441:\n    deg = { 'U':0, 'D':180, 'L':90, 'R':-90 }";
		$m.__track_lines__[442] = "127001.py, line 442:\n    for dirn in ('U','D','L','R'):";
		$m.__track_lines__[443] = "127001.py, line 443:\n    Segment.images[species+'_head'][dirn] = pygame.transform.rotate(segment_head, deg[dirn])";
		$m.__track_lines__[444] = "127001.py, line 444:\n    Segment.images[species+'_ko'][dirn] = pygame.transform.rotate(segment_ko, deg[dirn])";
		$m.__track_lines__[445] = "127001.py, line 445:\n    Segment.mask = pygame.mask.from_surface(Segment.images['Serpent1'])";
		$m.__track_lines__[446] = '127001.py, line 446:\n    self.x, self.y = position';
		$m.__track_lines__[447] = '127001.py, line 447:\n    self.direction = direction';
		$m.__track_lines__[448] = '127001.py, line 448:\n    self.speed = speed';
		$m.__track_lines__[449] = '127001.py, line 449:\n    self.image = Segment.images[serpent]';
		$m.__track_lines__[450] = '127001.py, line 450:\n    self.rect = self.image.get_rect(center=(self.x,self.y))';
		$m.__track_lines__[451] = '127001.py, line 451:\n    self.x_pre, self.y_pre = self.x, self.y';
		$m.__track_lines__[452] = '127001.py, line 452:\n    self.mask = Segment.mask';
		$m.__track_lines__[454] = '127001.py, line 454:\n    def update(self):';
		$m.__track_lines__[456] = '127001.py, line 456:\n    self.x += self.direction[0]*self.speed';
		$m.__track_lines__[457] = '127001.py, line 457:\n    self.y += self.direction[1]*self.speed';
		$m.__track_lines__[458] = '127001.py, line 458:\n    self.rect.move_ip(self.x-self.x_pre, self.y-self.y_pre)';
		$m.__track_lines__[459] = '127001.py, line 459:\n    self.x_pre, self.y_pre = self.x, self.y';
		$m.__track_lines__[462] = '127001.py, line 462:\n    class Treat(pygame.sprite.Sprite):';
		$m.__track_lines__[466] = '127001.py, line 466:\n    images = None';
		$m.__track_lines__[467] = '127001.py, line 467:\n    mask = None';
		$m.__track_lines__[468] = '127001.py, line 468:\n    def __init__(self, matrix):';
		$m.__track_lines__[469] = '127001.py, line 469:\n    pygame.sprite.Sprite.__init__(self)';
		$m.__track_lines__[470] = '127001.py, line 470:\n    self.matrix = matrix';
		$m.__track_lines__[471] = '127001.py, line 471:\n    if not Treat.images:';
		$m.__track_lines__[472] = '127001.py, line 472:\n    Treat.images = {}';
		$m.__track_lines__[473] = '127001.py, line 473:\n    Treat.mask = {}';
		$m.__track_lines__[474] = "127001.py, line 474:\n    Treat.images['Food'] = pygame.Surface((15,15))";
		$m.__track_lines__[475] = "127001.py, line 475:\n    pygame.draw.circle(Treat.images['Food'], (0,255,0), (7,7), 5, 0)";
		$m.__track_lines__[476] = "127001.py, line 476:\n    Treat.images['Food'].set_colorkey((0,0,0))";
		$m.__track_lines__[477] = "127001.py, line 477:\n    Treat.images['Bonus'] = pygame.Surface((15,15))";
		$m.__track_lines__[478] = "127001.py, line 478:\n    pygame.draw.circle(Treat.images['Bonus'], (255,0,0), (7,10), 5, 0)";
		$m.__track_lines__[479] = "127001.py, line 479:\n    pygame.draw.arc(Treat.images['Bonus'], (0,255,0), (-7,0,15,15), 0, 1, 1)";
		$m.__track_lines__[480] = "127001.py, line 480:\n    Treat.images['Bonus'].set_colorkey((0,0,0))";
		$m.__track_lines__[481] = "127001.py, line 481:\n    Treat.mask['Food'] = pygame.mask.from_surface(Treat.images['Food'])";
		$m.__track_lines__[482] = "127001.py, line 482:\n    Treat.mask['Bonus'] = pygame.mask.from_surface(Treat.images['Bonus'])";
		$m.__track_lines__[483] = '127001.py, line 483:\n    placed = False';
		$m.__track_lines__[484] = '127001.py, line 484:\n    while not placed:';
		$m.__track_lines__[485] = '127001.py, line 485:\n    x, y = random.randrange(20,self.matrix.x-20), random.randrange(20,self.matrix.y-20)';
		$m.__track_lines__[486] = '127001.py, line 486:\n    self.x, self.y = x, y';
		$m.__track_lines__[487] = '127001.py, line 487:\n    if random.random() > 0.1+(matrix.clock.get_time()/300.0):';
		$m.__track_lines__[488] = "127001.py, line 488:\n    self.identity = 'Food'";
		$m.__track_lines__[489] = '127001.py, line 489:\n    self.duration = random.randrange(800,2000)';
		$m.__track_lines__[491] = "127001.py, line 491:\n    self.identity = 'Bonus'";
		$m.__track_lines__[492] = '127001.py, line 492:\n    self.duration = random.randrange(400,800)';
		$m.__track_lines__[493] = '127001.py, line 493:\n    self.duration //= matrix.level';
		$m.__track_lines__[494] = '127001.py, line 494:\n    self.image = Treat.images[self.identity]';
		$m.__track_lines__[495] = '127001.py, line 495:\n    self.rect = self.image.get_rect(center=(x,y))';
		$m.__track_lines__[496] = '127001.py, line 496:\n    self.mask = Treat.mask[self.identity]';
		$m.__track_lines__[497] = '127001.py, line 497:\n    disrupt = False';
		$m.__track_lines__[498] = '127001.py, line 498:\n    for serpent in self.matrix.serpent:';
		$m.__track_lines__[499] = '127001.py, line 499:\n    if not self.matrix.serpent[serpent]:';
		$m.__track_lines__[500] = '127001.py, line 500:\n    continue';
		$m.__track_lines__[501] = '127001.py, line 501:\n    if pygame.sprite.spritecollideany(self, self.matrix.serpent[serpent].segments):';
		$m.__track_lines__[502] = '127001.py, line 502:\n    disrupt = True';
		$m.__track_lines__[503] = '127001.py, line 503:\n    break';
		$m.__track_lines__[504] = '127001.py, line 504:\n    if not disrupt:';
		$m.__track_lines__[505] = '127001.py, line 505:\n    placed = True';
		$m.__track_lines__[507] = '127001.py, line 507:\n    def update(self):';
		$m.__track_lines__[509] = '127001.py, line 509:\n    self.duration -= 1';
		$m.__track_lines__[510] = '127001.py, line 510:\n    if not self.duration:';
		$m.__track_lines__[511] = '127001.py, line 511:\n    self.matrix.treat.remove(self)';
		$m.__track_lines__[514] = '127001.py, line 514:\n    class Control(object):';
		$m.__track_lines__[515] = '127001.py, line 515:\n    def __init__(self, matrix):';
		$m.__track_lines__[516] = '127001.py, line 516:\n    self.matrix = matrix';
		$m.__track_lines__[517] = '127001.py, line 517:\n    pygame.font.init()';
		$m.__track_lines__[518] = '127001.py, line 518:\n    font = pygame.font.get_default_font()';
		$m.__track_lines__[519] = '127001.py, line 519:\n    self.font = pygame.font.Font(font, 24)';
		$m.__track_lines__[520] = '127001.py, line 520:\n    self.font2 = pygame.font.Font(font, 14)';
		$m.__track_lines__[521] = '127001.py, line 521:\n    self.matrix_start = False';
		$m.__track_lines__[522] = '127001.py, line 522:\n    self.quit_request = False';
		$m.__track_lines__[523] = '127001.py, line 523:\n    pygame.event.set_blocked(pygame.MOUSEMOTION)';
		$m.__track_lines__[524] = '127001.py, line 524:\n    self.quit = False';
		$m.__track_lines__[525] = '127001.py, line 525:\n    self.pause = True';
		$m.__track_lines__[526] = "127001.py, line 526:\n    self.pause_program('Serpent Duel', 'Click to run/pause', '[r]estart [p]ause [q]uit')";
		$m.__track_lines__[527] = '127001.py, line 527:\n    def pause_program(self, text1, text2=None, text3=None):';
		$m.__track_lines__[528] = '127001.py, line 528:\n    self.matrix.screen.fill((0,0,0))';
		$m.__track_lines__[529] = '127001.py, line 529:\n    text = self.font.render(text1, True, (100,100,100))';
		$m.__track_lines__[530] = '127001.py, line 530:\n    size = self.font.size(text1)';
		$m.__track_lines__[531] = '127001.py, line 531:\n    self.matrix.screen.blit(text, (self.matrix.x//2-size[0]//2, (self.matrix.y//2-size[1]//2)-12))';
		$m.__track_lines__[532] = '127001.py, line 532:\n    if text2:';
		$m.__track_lines__[533] = '127001.py, line 533:\n    text = self.font2.render(text2, True, (100,100,100))';
		$m.__track_lines__[534] = '127001.py, line 534:\n    size = self.font2.size(text2)';
		$m.__track_lines__[535] = '127001.py, line 535:\n    self.matrix.screen.blit(text, (self.matrix.x//2-size[0]//2, (self.matrix.y//2-size[1]//2)+25))';
		$m.__track_lines__[536] = '127001.py, line 536:\n    if text3:';
		$m.__track_lines__[537] = '127001.py, line 537:\n    text = self.font2.render(text3, True, (100,100,100))';
		$m.__track_lines__[538] = '127001.py, line 538:\n    size = self.font2.size(text3)';
		$m.__track_lines__[539] = '127001.py, line 539:\n    self.matrix.screen.blit(text, (self.matrix.x//2-size[0]//2, (self.matrix.y//2-size[1]//2)+40))';
		$m.__track_lines__[540] = '127001.py, line 540:\n    pygame.display.flip()';
		$m.__track_lines__[541] = '127001.py, line 541:\n    self.matrix.active = False';
		$m.__track_lines__[542] = '127001.py, line 542:\n    def matrix_control(self):';
		$m.__track_lines__[543] = '127001.py, line 543:\n    if not self.pause:';
		$m.__track_lines__[544] = "127001.py, line 544:\n    self.pause_program('Serpent Duel', 'Click to run/pause', '[r]estart [p]ause [q]uit')";
		$m.__track_lines__[545] = '127001.py, line 545:\n    self.pause = True';
		$m.__track_lines__[547] = '127001.py, line 547:\n    if self.matrix_start:';
		$m.__track_lines__[548] = '127001.py, line 548:\n    self.matrix.clear_screen()';
		$m.__track_lines__[549] = '127001.py, line 549:\n    self.matrix.update_screen()';
		$m.__track_lines__[550] = '127001.py, line 550:\n    self.matrix.active = True';
		$m.__track_lines__[552] = '127001.py, line 552:\n    self.matrix.start()';
		$m.__track_lines__[553] = '127001.py, line 553:\n    self.matrix_start = True';
		$m.__track_lines__[554] = '127001.py, line 554:\n    self.quit_request = False';
		$m.__track_lines__[555] = '127001.py, line 555:\n    self.pause = False';
		$m.__track_lines__[556] = '127001.py, line 556:\n    def check_control(self):';
		$m.__track_lines__[557] = '127001.py, line 557:\n    for event in pygame.event.get():';
		$m.__track_lines__[558] = '127001.py, line 558:\n    if event.type == pygame.MOUSEBUTTONDOWN:';
		$m.__track_lines__[559] = '127001.py, line 559:\n    if event.button == 1:';
		$m.__track_lines__[560] = '127001.py, line 560:\n    self.matrix_control()';
		$m.__track_lines__[562] = '127001.py, line 562:\n    if event.key == pygame.K_p:';
		$m.__track_lines__[563] = '127001.py, line 563:\n    self.matrix_control()';
		$m.__track_lines__[565] = '127001.py, line 565:\n    self.pause = False';
		$m.__track_lines__[566] = '127001.py, line 566:\n    self.quit_request = False';
		$m.__track_lines__[567] = '127001.py, line 567:\n    self.matrix.start()';
		$m.__track_lines__[569] = "127001.py, line 569:\n    self.pause_program('Serpent Duel', 'Quit (y/n)?')";
		$m.__track_lines__[570] = '127001.py, line 570:\n    self.pause = True';
		$m.__track_lines__[571] = '127001.py, line 571:\n    self.quit_request = True';
		$m.__track_lines__[573] = '127001.py, line 573:\n    if self.quit_request:';
		$m.__track_lines__[574] = '127001.py, line 574:\n    if event.key == pygame.K_n:';
		$m.__track_lines__[575] = '127001.py, line 575:\n    self.matrix_control()';
		$m.__track_lines__[577] = '127001.py, line 577:\n    self.matrix.screen.fill((0,0,0))';
		$m.__track_lines__[578] = '127001.py, line 578:\n    pygame.display.flip()';
		$m.__track_lines__[579] = '127001.py, line 579:\n    pygame.time.delay(10)';
		$m.__track_lines__[580] = '127001.py, line 580:\n    pygame.quit()';
		$m.__track_lines__[581] = '127001.py, line 581:\n    self.quit = True';
		$m.__track_lines__[583] = '127001.py, line 583:\n    self.quit = True';
		$m.__track_lines__[584] = '127001.py, line 584:\n    return self.quit';
		$m.__track_lines__[587] = '127001.py, line 587:\n    def setup(x=500,y=500,screen=None):';
		$m.__track_lines__[588] = '127001.py, line 588:\n    pygame.display.init()   #pygame.init()';
		$m.__track_lines__[589] = "127001.py, line 589:\n    pygame.display.set_caption('Serpent Duel')";
		$m.__track_lines__[590] = '127001.py, line 590:\n    if not screen:';
		$m.__track_lines__[591] = '127001.py, line 591:\n    screen = pygame.display.set_mode((x,y))';
		$m.__track_lines__[592] = '127001.py, line 592:\n    background = pygame.Surface((x,y))';
		$m.__track_lines__[593] = '127001.py, line 593:\n    background.fill((50,50,50))';
		$m.__track_lines__[594] = '127001.py, line 594:\n    for line in range(0,500,25):';
		$m.__track_lines__[595] = '127001.py, line 595:\n    pygame.draw.line(background, (43,50,58), (0,line), (500,line), 1)';
		$m.__track_lines__[596] = '127001.py, line 596:\n    for line in range(0,500,25):';
		$m.__track_lines__[597] = '127001.py, line 597:\n    pygame.draw.line(background, (43,50,58), (line,0), (line,500), 1)';
		$m.__track_lines__[598] = '127001.py, line 598:\n    matrix = Matrix(x,y,screen,background)';
		$m.__track_lines__[599] = '127001.py, line 599:\n    control = Control(matrix)';
		$m.__track_lines__[600] = '127001.py, line 600:\n    return matrix, control';
		$m.__track_lines__[603] = '127001.py, line 603:\n    def program_exec(matrix, control):';
		$m.__track_lines__[604] = '127001.py, line 604:\n    matrix.update_rect = []';
		$m.__track_lines__[605] = '127001.py, line 605:\n    matrix.update()';
		$m.__track_lines__[606] = '127001.py, line 606:\n    pygame.display.update(matrix.update_rect)';
		$m.__track_lines__[607] = '127001.py, line 607:\n    matrix.clock.tick(30)';
		$m.__track_lines__[608] = '127001.py, line 608:\n    quit = control.check_control()';
		$m.__track_lines__[609] = '127001.py, line 609:\n    return quit';
		$m.__track_lines__[612] = '127001.py, line 612:\n    def run():      #pyjsdl executed function';
		$m.__track_lines__[613] = '127001.py, line 613:\n    program_exec(matrix, control)';
		$m.__track_lines__[616] = '127001.py, line 616:\n    matrix, control = None, None';
		$m.__track_lines__[619] = '127001.py, line 619:\n    def main():';
		$m.__track_lines__[620] = '127001.py, line 620:\n    global matrix, control';
		$m.__track_lines__[621] = '127001.py, line 621:\n    matrix, control = setup(400,300)';
		$m.__track_lines__[622] = "127001.py, line 622:\n    images = ['../../data/segment1.png', '../../data/segment2.png']    ###";
		$m.__track_lines__[623] = '127001.py, line 623:\n    pygame.display.setup(run, images)     #pyjsdl setup     ###';
		$m.__track_lines__[626] = '127001.py, line 626:\n    def main2():';
		$m.__track_lines__[627] = '127001.py, line 627:\n    matrix, control = setup(400,300)';
		$m.__track_lines__[628] = '127001.py, line 628:\n    quit = False';
		$m.__track_lines__[629] = '127001.py, line 629:\n    while not quit:';
		$m.__track_lines__[630] = '127001.py, line 630:\n    quit = program_exec(matrix, control)';
		$m.__track_lines__[633] = "127001.py, line 633:\n    if __name__ == '__main__':";
		$m.__track_lines__[634] = '127001.py, line 634:\n    if js:  ###';
		$m.__track_lines__[635] = '127001.py, line 635:\n    main()';
		$m.__track_lines__[637] = '127001.py, line 637:\n    main2()';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_14 = new $p['int'](14);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_400 = new $p['int'](400);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_25 = new $p['int'](25);
		var $constant_int_30 = new $p['int'](30);
		var $constant_int_800 = new $p['int'](800);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_43 = new $p['int'](43);
		var $constant_int_300 = new $p['int'](300);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_180 = new $p['int'](180);
		var $constant_int_58 = new $p['int'](58);
		var $constant_int_2000 = new $p['int'](2000);
		var $constant_int_90 = new $p['int'](90);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_500 = new $p['int'](500);
		var $constant_int_255 = new $p['int'](255);
		$pyjs['track']['module']='127001';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=2;
		$pyjs['track']['lineno']=4;
		$pyjs['track']['lineno']=27;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['os'] = $p['___import___']('os', null);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=28;
		if ($p['bool']($p['tuple'](['posix', 'nt', 'os2', 'ce', 'riscos'])['__contains__']($p['getattr']($m['os'], '$$name')))) {
			$pyjs['track']['lineno']=29;
			$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
			$m['pygame'] = $p['___import___']('pygame', null);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['lineno']=30;
			$m['java'] = false;
			$pyjs['track']['lineno']=31;
			$m['js'] = false;
		}
		else if ($p['bool']($p['op_eq']($p['getattr']($m['os'], '$$name'), 'java'))) {
			$pyjs['track']['lineno']=33;
			$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
			$m['pyj2d'] = $p['___import___']('pyj2d', null);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['lineno']=34;
			$p['getattr']($m['sys'], 'modules')['__setitem__']('pygame', $m['pyj2d']);
			$pyjs['track']['lineno']=35;
			$m['pygame'] = $m['pyj2d'];
			$pyjs['track']['lineno']=36;
			$m['java'] = true;
			$pyjs['track']['lineno']=37;
			$m['js'] = false;
		}
		else {
			$pyjs['track']['lineno']=39;
			$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
			$m['pygame'] = $p['___import___']('pyjsdl', null, null, false);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['lineno']=40;
			$m['java'] = false;
			$pyjs['track']['lineno']=41;
			$m['js'] = true;
		}
		$pyjs['track']['lineno']=42;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['random'] = $p['___import___']('random', null);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=44;
		$m['load_images'] = true;
		$pyjs['track']['lineno']=47;
		$m['Matrix'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = '127001';
			$cls_definition['__md5__'] = 'd41897b20b46091e4abf1b6704cd634a';
			$pyjs['track']['lineno']=51;
			$method = $pyjs__bind_method2('__init__', function(x, y, screen, background) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					screen = arguments[3];
					background = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd41897b20b46091e4abf1b6704cd634a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'127001', 'lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=51;
				$pyjs['track']['lineno']=52;
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([x, y]), 2, null);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', $tupleassign1[0]) : $p['setattr'](self, 'x', $tupleassign1[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', $tupleassign1[1]) : $p['setattr'](self, 'y', $tupleassign1[1]); 
				$pyjs['track']['lineno']=53;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('screen', screen) : $p['setattr'](self, 'screen', screen); 
				$pyjs['track']['lineno']=54;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('background', background) : $p['setattr'](self, 'background', background); 
				$pyjs['track']['lineno']=55;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('clock', $m['pygame']['time']['Clock']()) : $p['setattr'](self, 'clock', $m['pygame']['time']['Clock']()); 
				$pyjs['track']['lineno']=56;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('level', $constant_int_2) : $p['setattr'](self, 'level', $constant_int_2); 
				$pyjs['track']['lineno']=57;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('speed', $constant_int_2) : $p['setattr'](self, 'speed', $constant_int_2); 
				$pyjs['track']['lineno']=58;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mode', $p['dict']([['Serpent1', 'AI'], ['Serpent2', 'AI']])) : $p['setattr'](self, 'mode', $p['dict']([['Serpent1', 'AI'], ['Serpent2', 'AI']])); 
				$pyjs['track']['lineno']=59;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ctrl', $p['dict']([['Pad', 'Serpent1'], ['Key1', 'Serpent1'], ['Key2', null]])) : $p['setattr'](self, 'ctrl', $p['dict']([['Pad', 'Serpent1'], ['Key1', 'Serpent1'], ['Key2', null]])); 
				$pyjs['track']['lineno']=60;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('points', $p['dict']([['Serpent1', $constant_int_0], ['Serpent2', $constant_int_0]])) : $p['setattr'](self, 'points', $p['dict']([['Serpent1', $constant_int_0], ['Serpent2', $constant_int_0]])); 
				$pyjs['track']['lineno']=61;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('match', $constant_int_0) : $p['setattr'](self, 'match', $constant_int_0); 
				$pyjs['track']['lineno']=62;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('auto', true) : $p['setattr'](self, 'auto', true); 
				$pyjs['track']['lineno']=63;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('controls', $p['dict']([])) : $p['setattr'](self, 'controls', $p['dict']([])); 
				$pyjs['track']['lineno']=64;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dirn', $p['dict']([])) : $p['setattr'](self, 'dirn', $p['dict']([])); 
				$pyjs['track']['lineno']=65;
				$p['getattr'](self, 'dirn')['__setitem__']('U', $p['dict']([['U', 'U'], ['D', 'D'], ['L', 'L'], ['R', 'R']]));
				$pyjs['track']['lineno']=66;
				$p['getattr'](self, 'dirn')['__setitem__']('D', $p['dict']([['U', 'D'], ['D', 'U'], ['L', 'R'], ['R', 'L']]));
				$pyjs['track']['lineno']=67;
				$p['getattr'](self, 'dirn')['__setitem__']('L', $p['dict']([['U', 'R'], ['D', 'L'], ['L', 'D'], ['R', 'U']]));
				$pyjs['track']['lineno']=68;
				$p['getattr'](self, 'dirn')['__setitem__']('R', $p['dict']([['U', 'L'], ['D', 'R'], ['L', 'U'], ['R', 'D']]));
				$pyjs['track']['lineno']=69;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('serpent_control', $p['getattr'](self, 'serpent_control_scr')) : $p['setattr'](self, 'serpent_control', $p['getattr'](self, 'serpent_control_scr')); 
				$pyjs['track']['lineno']=70;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('update_rect', $p['list']([])) : $p['setattr'](self, 'update_rect', $p['list']([])); 
				$pyjs['track']['lineno']=71;
				self['clear_screen']();
				$pyjs['track']['lineno']=72;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('active', false) : $p['setattr'](self, 'active', false); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['screen'],['background']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=74;
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
					if (self.prototype['__md5__'] !== 'd41897b20b46091e4abf1b6704cd634a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_iter,$iter2_nextval,$iter1_nextval,$iter1_type,serpent,$iter1_iter,$iter2_idx,$iter1_array,$pyjs__trackstack_size_1,$iter2_type,$iter2_array,$iter1_idx;
				$pyjs['track']={'module':'127001', 'lineno':74};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=74;
				$pyjs['track']['lineno']=76;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('treat', $m['pygame']['sprite']['RenderUpdates']()) : $p['setattr'](self, 'treat', $m['pygame']['sprite']['RenderUpdates']()); 
				$pyjs['track']['lineno']=77;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('serpent', $p['dict']([['Serpent1', null], ['Serpent2', null]])) : $p['setattr'](self, 'serpent', $p['dict']([['Serpent1', null], ['Serpent2', null]])); 
				$pyjs['track']['lineno']=78;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['getattr'](self, 'mode');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					serpent = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=79;
					if ($p['bool']($p['tuple'](['USER', 'AI'])['__contains__']($p['getattr'](self, 'mode')['__getitem__'](serpent)))) {
						$pyjs['track']['lineno']=80;
						self['serpent_initiate'](serpent);
					}
					else {
						$pyjs['track']['lineno']=82;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('match', $constant_int_0) : $p['setattr'](self, 'match', $constant_int_0); 
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=83;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('auto', !$p['bool'](self['mode']['values']()['__contains__']('USER'))) : $p['setattr'](self, 'auto', !$p['bool'](self['mode']['values']()['__contains__']('USER'))); 
				$pyjs['track']['lineno']=84;
				self['clear_screen']();
				$pyjs['track']['lineno']=85;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = $p['getattr'](self, 'points');
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					serpent = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=86;
					$p['getattr'](self, 'points')['__setitem__'](serpent, $constant_int_0);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=87;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('active', true) : $p['setattr'](self, 'active', true); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['start'] = $method;
			$pyjs['track']['lineno']=89;
			$method = $pyjs__bind_method2('clear_screen', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd41897b20b46091e4abf1b6704cd634a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'127001', 'lineno':89};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=89;
				$pyjs['track']['lineno']=91;
				self['screen']['blit']($p['getattr'](self, 'background'), $p['tuple']([$constant_int_0, $constant_int_0]));
				$pyjs['track']['lineno']=92;
				self['draw_edge']();
				$pyjs['track']['lineno']=93;
				$m['pygame']['display']['flip']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clear_screen'] = $method;
			$pyjs['track']['lineno']=95;
			$method = $pyjs__bind_method2('draw_edge', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd41897b20b46091e4abf1b6704cd634a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,$sub5,$iter3_type,edge_rect,$sub6,$iter3_iter,$iter3_array,$sub3,$sub2,$sub1,$pyjs__trackstack_size_1,$iter3_nextval,rect,$sub4;
				$pyjs['track']={'module':'127001', 'lineno':95};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=95;
				$pyjs['track']['lineno']=97;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('edges', $p['list']([])) : $p['setattr'](self, 'edges', $p['list']([])); 
				$pyjs['track']['lineno']=98;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = $p['list']([$p['tuple']([$constant_int_0, $constant_int_0, $p['getattr'](self, 'x'), $constant_int_5]), $p['tuple']([$constant_int_0, $p['__op_sub']($sub1=$p['getattr'](self, 'y'),$sub2=$constant_int_5), $p['getattr'](self, 'x'), $constant_int_5]), $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_5, $p['getattr'](self, 'y')]), $p['tuple']([$p['__op_sub']($sub3=$p['getattr'](self, 'x'),$sub4=$constant_int_5), $constant_int_0, $constant_int_5, $p['__op_sub']($sub5=$p['getattr'](self, 'y'),$sub6=$constant_int_5)])]);
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					rect = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=99;
					edge_rect = $m['pygame']['Rect'](rect);
					$pyjs['track']['lineno']=100;
					self['edges']['append']($m['pygame']['draw']['rect']($p['getattr'](self, 'screen'), $p['tuple']([$constant_int_43, $constant_int_50, $constant_int_58]), edge_rect, $constant_int_0));
					$pyjs['track']['lineno']=101;
					self['update_rect']['append'](edge_rect);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='127001';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['draw_edge'] = $method;
			$pyjs['track']['lineno']=103;
			$method = $pyjs__bind_method2('update_screen', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd41897b20b46091e4abf1b6704cd634a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var serpent,$iter4_nextval,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter;
				$pyjs['track']={'module':'127001', 'lineno':103};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=103;
				$pyjs['track']['lineno']=105;
				if ($p['bool']($p['getattr'](self, 'treat'))) {
					$pyjs['track']['lineno']=106;
					self['treat']['clear']($p['getattr'](self, 'screen'), $p['getattr'](self, 'background'));
					$pyjs['track']['lineno']=107;
					self['update_rect']['extend'](self['treat']['draw']($p['getattr'](self, 'screen')));
				}
				$pyjs['track']['lineno']=108;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = $p['getattr'](self, 'serpent');
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					serpent = $iter4_nextval['$nextval'];
					$pyjs['track']['lineno']=109;
					if ($p['bool'](!$p['bool']($p['getattr'](self, 'serpent')['__getitem__'](serpent)))) {
						$pyjs['track']['lineno']=110;
						continue;
					}
					$pyjs['track']['lineno']=111;
					$p['getattr'](self, 'serpent')['__getitem__'](serpent)['segments']['clear']($p['getattr'](self, 'screen'), $p['getattr'](self, 'background'));
					$pyjs['track']['lineno']=112;
					self['update_rect']['extend']($p['getattr'](self, 'serpent')['__getitem__'](serpent)['segments']['draw']($p['getattr'](self, 'screen')));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=113;
				$m['pygame']['display']['update']($p['getattr'](self, 'update_rect'));
				$pyjs['track']['lineno']=114;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('update_rect', $p['list']([])) : $p['setattr'](self, 'update_rect', $p['list']([])); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update_screen'] = $method;
			$pyjs['track']['lineno']=116;
			$method = $pyjs__bind_method2('set_active', function(state, pause) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					state = arguments[1];
					pause = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd41897b20b46091e4abf1b6704cd634a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof state == 'undefined') state=arguments['callee']['__args__'][3][1];
				if (typeof pause == 'undefined') pause=arguments['callee']['__args__'][4][1];

				$pyjs['track']={'module':'127001', 'lineno':116};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=116;
				$pyjs['track']['lineno']=118;
				if ($p['bool']($p['op_is'](state, null))) {
					$pyjs['track']['lineno']=119;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('active', !$p['bool']($p['getattr'](self, 'active'))) : $p['setattr'](self, 'active', !$p['bool']($p['getattr'](self, 'active'))); 
				}
				else {
					$pyjs['track']['lineno']=121;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('active', state) : $p['setattr'](self, 'active', state); 
				}
				$pyjs['track']['lineno']=122;
				if ($p['bool']($p['getattr'](self, 'active'))) {
					$pyjs['track']['lineno']=123;
					if ($p['bool'](!$p['bool'](pause))) {
						$pyjs['track']['lineno']=124;
						self['start']();
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['state', null],['pause', false]]);
			$cls_definition['set_active'] = $method;
			$pyjs['track']['lineno']=126;
			$method = $pyjs__bind_method2('set_mode', function(serpent, mode) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					serpent = arguments[1];
					mode = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd41897b20b46091e4abf1b6704cd634a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'127001', 'lineno':126};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=126;
				$pyjs['track']['lineno']=128;
				$p['getattr'](self, 'mode')['__setitem__'](serpent, mode);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['serpent'],['mode']]);
			$cls_definition['set_mode'] = $method;
			$pyjs['track']['lineno']=130;
			$method = $pyjs__bind_method2('set_control_mode', function(mode) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					mode = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd41897b20b46091e4abf1b6704cd634a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'127001', 'lineno':130};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=130;
				$pyjs['track']['lineno']=132;
				if ($p['bool']($p['op_eq'](mode, 'SCR'))) {
					$pyjs['track']['lineno']=133;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('serpent_control', $p['getattr'](self, 'serpent_control_scr')) : $p['setattr'](self, 'serpent_control', $p['getattr'](self, 'serpent_control_scr')); 
				}
				else if ($p['bool']($p['op_eq'](mode, 'USR'))) {
					$pyjs['track']['lineno']=135;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('serpent_control', $p['getattr'](self, 'serpent_control_usr')) : $p['setattr'](self, 'serpent_control', $p['getattr'](self, 'serpent_control_usr')); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['mode']]);
			$cls_definition['set_control_mode'] = $method;
			$pyjs['track']['lineno']=137;
			$method = $pyjs__bind_method2('set_difficulty', function(level) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd41897b20b46091e4abf1b6704cd634a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'127001', 'lineno':137};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=137;
				$pyjs['track']['lineno']=139;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('level', level) : $p['setattr'](self, 'level', level); 
				$pyjs['track']['lineno']=140;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('speed', $p['dict']([[$constant_int_1, $constant_int_1], [$constant_int_2, $constant_int_2], [$constant_int_3, $constant_int_5], [$constant_int_4, $constant_int_10]])['__getitem__'](level)) : $p['setattr'](self, 'speed', $p['dict']([[$constant_int_1, $constant_int_1], [$constant_int_2, $constant_int_2], [$constant_int_3, $constant_int_5], [$constant_int_4, $constant_int_10]])['__getitem__'](level)); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['level']]);
			$cls_definition['set_difficulty'] = $method;
			$pyjs['track']['lineno']=142;
			$method = $pyjs__bind_method2('set_control', function(serpent, control) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					serpent = arguments[1];
					control = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd41897b20b46091e4abf1b6704cd634a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,ctr,$iter5_array,$pyjs__trackstack_size_1,$iter5_iter,$iter5_idx,$iter5_type;
				$pyjs['track']={'module':'127001', 'lineno':142};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=142;
				$pyjs['track']['lineno']=144;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = $p['getattr'](self, 'ctrl');
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					ctr = $iter5_nextval['$nextval'];
					$pyjs['track']['lineno']=145;
					if ($p['bool']($p['op_eq']($p['getattr'](self, 'ctrl')['__getitem__'](ctr), serpent))) {
						$pyjs['track']['lineno']=146;
						$p['getattr'](self, 'ctrl')['__setitem__'](ctr, null);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=147;
				if ($p['bool']($p['op_eq'](control, 'Pad/Key1'))) {
					$pyjs['track']['lineno']=148;
					$p['getattr'](self, 'ctrl')['__setitem__']('Pad', serpent);
					$pyjs['track']['lineno']=149;
					$p['getattr'](self, 'ctrl')['__setitem__']('Key1', serpent);
				}
				else if ($p['bool'](!$p['op_eq'](control, '-'))) {
					$pyjs['track']['lineno']=151;
					$p['getattr'](self, 'ctrl')['__setitem__'](control, serpent);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['serpent'],['control']]);
			$cls_definition['set_control'] = $method;
			$pyjs['track']['lineno']=153;
			$method = $pyjs__bind_method2('serpent_control_scr', function(direction, ctrl) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					direction = arguments[1];
					ctrl = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd41897b20b46091e4abf1b6704cd634a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof ctrl == 'undefined') ctrl=arguments['callee']['__args__'][4][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'127001', 'lineno':153};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=153;
				$pyjs['track']['lineno']=155;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=156;
					$p['getattr'](self, 'serpent')['__getitem__']($p['getattr'](self, 'ctrl')['__getitem__'](ctrl))['control'](direction);
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
					$pyjs['track']['module']='127001';
					if (true) {
						$pyjs['track']['lineno']=158;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['direction'],['ctrl', 'Pad']]);
			$cls_definition['serpent_control_scr'] = $method;
			$pyjs['track']['lineno']=160;
			$method = $pyjs__bind_method2('serpent_control_usr', function(direction, ctrl) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					direction = arguments[1];
					ctrl = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd41897b20b46091e4abf1b6704cd634a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof ctrl == 'undefined') ctrl=arguments['callee']['__args__'][4][1];
				var dirn,$pyjs_try_err;
				$pyjs['track']={'module':'127001', 'lineno':160};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=160;
				$pyjs['track']['lineno']=162;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=163;
					dirn = $p['getattr']($p['getattr'](self, 'serpent')['__getitem__']($p['getattr'](self, 'ctrl')['__getitem__'](ctrl)), 'direction');
					$pyjs['track']['lineno']=164;
					direction = $p['getattr'](self, 'dirn')['__getitem__'](dirn)['__getitem__'](direction);
					$pyjs['track']['lineno']=165;
					$p['getattr'](self, 'serpent')['__getitem__']($p['getattr'](self, 'ctrl')['__getitem__'](ctrl))['control'](direction);
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
					$pyjs['track']['module']='127001';
					if (true) {
						$pyjs['track']['lineno']=167;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['direction'],['ctrl', 'Pad']]);
			$cls_definition['serpent_control_usr'] = $method;
			$pyjs['track']['lineno']=169;
			$method = $pyjs__bind_method2('serpent_initiate', function(identity) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					identity = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd41897b20b46091e4abf1b6704cd634a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $floordiv7,$add4,$floordiv6,$add5,$add2,$add3,$floordiv5,$add1,$floordiv3,$floordiv2,$floordiv1,$floordiv4,$add6,$sub7,$sub8,$floordiv8;
				$pyjs['track']={'module':'127001', 'lineno':169};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=169;
				$pyjs['track']['lineno']=171;
				if ($p['bool']($p['op_eq'](identity, 'Serpent1'))) {
					$pyjs['track']['lineno']=172;
					$p['getattr'](self, 'serpent')['__setitem__']('Serpent1', (typeof Serpent == "undefined"?$m['Serpent']:Serpent)(self, $p['__op_add']($add1=(typeof ($floordiv1=$p['getattr'](self, 'x'))==typeof ($floordiv2=$constant_int_2) && typeof $floordiv1=='number' && $floordiv2 !== 0?
						Math['floor']($floordiv1/$floordiv2):
						$p['op_floordiv']($floordiv1,$floordiv2)),$add2=$constant_int_50), $p['__op_add']($add3=(typeof ($floordiv3=$p['getattr'](self, 'y'))==typeof ($floordiv4=$constant_int_3) && typeof $floordiv3=='number' && $floordiv4 !== 0?
						Math['floor']($floordiv3/$floordiv4):
						$p['op_floordiv']($floordiv3,$floordiv4)),$add4=$constant_int_30), identity, $p['getattr'](self, 'speed'), $p['getattr'](self, 'mode')['__getitem__']('Serpent1')));
				}
				else {
					$pyjs['track']['lineno']=174;
					$p['getattr'](self, 'serpent')['__setitem__']('Serpent2', (typeof Serpent == "undefined"?$m['Serpent']:Serpent)(self, $p['__op_sub']($sub7=(typeof ($floordiv5=$p['getattr'](self, 'x'))==typeof ($floordiv6=$constant_int_2) && typeof $floordiv5=='number' && $floordiv6 !== 0?
						Math['floor']($floordiv5/$floordiv6):
						$p['op_floordiv']($floordiv5,$floordiv6)),$sub8=$constant_int_50), $p['__op_add']($add5=(typeof ($floordiv7=$p['getattr'](self, 'y'))==typeof ($floordiv8=$constant_int_3) && typeof $floordiv7=='number' && $floordiv8 !== 0?
						Math['floor']($floordiv7/$floordiv8):
						$p['op_floordiv']($floordiv7,$floordiv8)),$add6=$constant_int_30), identity, $p['getattr'](self, 'speed'), $p['getattr'](self, 'mode')['__getitem__']('Serpent2')));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['identity']]);
			$cls_definition['serpent_initiate'] = $method;
			$pyjs['track']['lineno']=176;
			$method = $pyjs__bind_method2('pause', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd41897b20b46091e4abf1b6704cd634a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tm;
				$pyjs['track']={'module':'127001', 'lineno':176};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=176;
				$pyjs['track']['lineno']=177;
				tm = $m['pygame']['time']['wait']($constant_int_100);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['pause'] = $method;
			$pyjs['track']['lineno']=179;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd41897b20b46091e4abf1b6704cd634a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var serpent,$iter6_idx,$iter6_type,$and1,$and3,$and4,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,$and2,$iter6_nextval;
				$pyjs['track']={'module':'127001', 'lineno':179};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=179;
				$pyjs['track']['lineno']=181;
				if ($p['bool']($p['getattr'](self, 'active'))) {
					$pyjs['track']['lineno']=182;
					if ($p['bool'](!$p['bool']($p['getattr'](self, 'treat')))) {
						$pyjs['track']['lineno']=183;
						self['treat']['clear']($p['getattr'](self, 'screen'), $p['getattr'](self, 'background'));
						$pyjs['track']['lineno']=184;
						self['update_rect']['extend'](self['treat']['draw']($p['getattr'](self, 'screen')));
						$pyjs['track']['lineno']=185;
						if ($p['bool'](($p['bool']($and1=$p['getattr'](self, 'serpent'))?($p['cmp']($m['random']['random'](), 0.95) == 1):$and1))) {
							$pyjs['track']['lineno']=186;
							self['treat']['add']((typeof Treat == "undefined"?$m['Treat']:Treat)(self));
							$pyjs['track']['lineno']=187;
							self['treat']['clear']($p['getattr'](self, 'screen'), $p['getattr'](self, 'background'));
							$pyjs['track']['lineno']=188;
							self['update_rect']['extend'](self['treat']['draw']($p['getattr'](self, 'screen')));
						}
					}
					$pyjs['track']['lineno']=189;
					self['treat']['update']();
					$pyjs['track']['lineno']=190;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter6_iter = $p['getattr'](self, 'serpent');
					$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
					while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
						serpent = $iter6_nextval['$nextval'];
						$pyjs['track']['lineno']=191;
						if ($p['bool'](!$p['bool']($p['getattr'](self, 'serpent')['__getitem__'](serpent)))) {
							$pyjs['track']['lineno']=192;
							continue;
						}
						$pyjs['track']['lineno']=193;
						if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'serpent')['__getitem__'](serpent), 'alive')))) {
							$pyjs['track']['lineno']=194;
							if ($p['bool'](($p['bool']($and3=!$p['bool']($p['getattr'](self, 'match')))?!$p['bool']($p['getattr'](self, 'auto')):$and3))) {
								$pyjs['track']['lineno']=195;
								self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('active', false) : $p['setattr'](self, 'active', false); 
							}
							else {
								$pyjs['track']['lineno']=197;
								self['serpent_initiate']($p['getattr']($p['getattr'](self, 'serpent')['__getitem__'](serpent), 'identity'));
								$pyjs['track']['lineno']=198;
								self['draw_edge']();
							}
						}
						$pyjs['track']['lineno']=199;
						$p['getattr'](self, 'serpent')['__getitem__'](serpent)['update']();
						$pyjs['track']['lineno']=200;
						$p['getattr'](self, 'serpent')['__getitem__'](serpent)['segments']['clear']($p['getattr'](self, 'screen'), $p['getattr'](self, 'background'));
						$pyjs['track']['lineno']=201;
						self['update_rect']['extend']($p['getattr'](self, 'serpent')['__getitem__'](serpent)['segments']['draw']($p['getattr'](self, 'screen')));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='127001';
				}
				else {
					$pyjs['track']['lineno']=203;
					self['pause']();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=47;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Matrix', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=206;
		$m['Serpent'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = '127001';
			$cls_definition['__md5__'] = '84d822e270bbe2dfcd0e00f222ec7512';
			$pyjs['track']['lineno']=210;
			$method = $pyjs__bind_method2('__init__', function(matrix, x, y, identity, speed, mode) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					matrix = arguments[1];
					x = arguments[2];
					y = arguments[3];
					identity = arguments[4];
					speed = arguments[5];
					mode = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '84d822e270bbe2dfcd0e00f222ec7512') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add8,$add7;
				$pyjs['track']={'module':'127001', 'lineno':210};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=210;
				$pyjs['track']['lineno']=211;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('matrix', matrix) : $p['setattr'](self, 'matrix', matrix); 
				$pyjs['track']['lineno']=212;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('identity', identity) : $p['setattr'](self, 'identity', identity); 
				$pyjs['track']['lineno']=213;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mode', mode) : $p['setattr'](self, 'mode', mode); 
				$pyjs['track']['lineno']=214;
				var $tupleassign2 = $p['__ass_unpack']($p['tuple']([x, y]), 2, null);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', $tupleassign2[0]) : $p['setattr'](self, 'x', $tupleassign2[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', $tupleassign2[1]) : $p['setattr'](self, 'y', $tupleassign2[1]); 
				$pyjs['track']['lineno']=215;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('speed', speed) : $p['setattr'](self, 'speed', speed); 
				$pyjs['track']['lineno']=216;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('DIR', $p['dict']([['U', $p['tuple']([$constant_int_0, (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))])], ['D', $p['tuple']([$constant_int_0, $constant_int_1])], ['L', $p['tuple']([(typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)), $constant_int_0])], ['R', $p['tuple']([$constant_int_1, $constant_int_0])]])) : $p['setattr'](self, 'DIR', $p['dict']([['U', $p['tuple']([$constant_int_0, (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))])], ['D', $p['tuple']([$constant_int_0, $constant_int_1])], ['L', $p['tuple']([(typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)), $constant_int_0])], ['R', $p['tuple']([$constant_int_1, $constant_int_0])]])); 
				$pyjs['track']['lineno']=217;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('DEG', $p['dict']([['U', $constant_int_0], ['D', $constant_int_180], ['L', $constant_int_90], ['R', (typeof ($usub3=$constant_int_90)=='number'?
					-$usub3:
					$p['op_usub']($usub3))]])) : $p['setattr'](self, 'DEG', $p['dict']([['U', $constant_int_0], ['D', $constant_int_180], ['L', $constant_int_90], ['R', (typeof ($usub3=$constant_int_90)=='number'?
					-$usub3:
					$p['op_usub']($usub3))]])); 
				$pyjs['track']['lineno']=218;
				if ($p['bool']($p['op_eq']($p['getattr'](self, 'identity'), 'Serpent1'))) {
					$pyjs['track']['lineno']=219;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('direction', 'R') : $p['setattr'](self, 'direction', 'R'); 
				}
				else {
					$pyjs['track']['lineno']=221;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('direction', 'L') : $p['setattr'](self, 'direction', 'L'); 
				}
				$pyjs['track']['lineno']=222;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('new_direction', null) : $p['setattr'](self, 'new_direction', null); 
				$pyjs['track']['lineno']=223;
				var $tupleassign3 = $p['__ass_unpack']($p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]), 3, null);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('step', $tupleassign3[0]) : $p['setattr'](self, 'step', $tupleassign3[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('growing', $tupleassign3[1]) : $p['setattr'](self, 'growing', $tupleassign3[1]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rate', $tupleassign3[2]) : $p['setattr'](self, 'rate', $tupleassign3[2]); 
				$pyjs['track']['lineno']=224;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('segments', $m['pygame']['sprite']['RenderUpdates']()) : $p['setattr'](self, 'segments', $m['pygame']['sprite']['RenderUpdates']()); 
				$pyjs['track']['lineno']=225;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('segment_spares', $p['list']([])) : $p['setattr'](self, 'segment_spares', $p['list']([])); 
				$pyjs['track']['lineno']=226;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('serpent_body', $p['dict']([])) : $p['setattr'](self, 'serpent_body', $p['dict']([])); 
				$pyjs['track']['lineno']=227;
				self['grow']($p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'DIR')['__getitem__']($p['getattr'](self, 'direction')));
				$pyjs['track']['lineno']=228;
				$p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__is_instance__'] && typeof $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__setattr__'] == 'function' ? $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__setattr__']('image', $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'images')['__getitem__']($p['__op_add']($add7=$p['getattr'](self, 'identity'),$add8='_head'))['__getitem__']($p['getattr'](self, 'direction'))) : $p['setattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'image', $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'images')['__getitem__']($p['__op_add']($add7=$p['getattr'](self, 'identity'),$add8='_head'))['__getitem__']($p['getattr'](self, 'direction'))); 
				$pyjs['track']['lineno']=229;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('scan_rect', $m['pygame']['sprite']['Sprite']()) : $p['setattr'](self, 'scan_rect', $m['pygame']['sprite']['Sprite']()); 
				$pyjs['track']['lineno']=230;
				$p['getattr'](self, 'scan_rect')['__is_instance__'] && typeof $p['getattr'](self, 'scan_rect')['__setattr__'] == 'function' ? $p['getattr'](self, 'scan_rect')['__setattr__']('rect', $m['pygame']['Rect']($constant_int_0, $constant_int_0, $constant_int_10, $constant_int_10)) : $p['setattr']($p['getattr'](self, 'scan_rect'), 'rect', $m['pygame']['Rect']($constant_int_0, $constant_int_0, $constant_int_10, $constant_int_10)); 
				$pyjs['track']['lineno']=231;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('scan_detect', false) : $p['setattr'](self, 'scan_detect', false); 
				$pyjs['track']['lineno']=232;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pause', $constant_int_20) : $p['setattr'](self, 'pause', $constant_int_20); 
				$pyjs['track']['lineno']=233;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('active', true) : $p['setattr'](self, 'active', true); 
				$pyjs['track']['lineno']=234;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('alive', true) : $p['setattr'](self, 'alive', true); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['matrix'],['x'],['y'],['identity'],['speed'],['mode']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=236;
			$method = $pyjs__bind_method2('grow', function(x, y, direction, number) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					direction = arguments[3];
					number = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '84d822e270bbe2dfcd0e00f222ec7512') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof number == 'undefined') number=arguments['callee']['__args__'][6][1];
				var num,segment,$sub9,$sub12,$iter7_type,$iter7_iter,$sub11,$sub10,$iter7_idx,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$iter7_nextval,$iter7_array,$pyjs__trackstack_size_1;
				$pyjs['track']={'module':'127001', 'lineno':236};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=236;
				$pyjs['track']['lineno']=238;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter7_iter = $p['range']($constant_int_0, (typeof ($mul1=number)==typeof ($mul2=$constant_int_10) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)), $constant_int_10);
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					num = $iter7_nextval['$nextval'];
					$pyjs['track']['lineno']=239;
					if ($p['bool'](!$p['bool']($p['getattr'](self, 'segment_spares')))) {
						$pyjs['track']['lineno']=240;
						self['segment_spares']['append']((typeof Segment == "undefined"?$m['Segment']:Segment)($p['getattr'](self, 'identity'), $p['tuple']([$constant_int_0, $constant_int_0])));
					}
					$pyjs['track']['lineno']=241;
					segment = self['segment_spares']['pop']();
					$pyjs['track']['lineno']=242;
					var $tupleassign4 = $p['__ass_unpack']($p['tuple']([$p['__op_sub']($sub9=x,$sub10=(typeof ($mul3=direction['__getitem__']($constant_int_0))==typeof ($mul4=num) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4))), $p['__op_sub']($sub11=y,$sub12=(typeof ($mul5=direction['__getitem__']($constant_int_1))==typeof ($mul6=num) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6)))]), 2, null);
					segment['__is_instance__'] && typeof segment['__setattr__'] == 'function' ? segment['__setattr__']('x', $tupleassign4[0]) : $p['setattr'](segment, 'x', $tupleassign4[0]); 
					segment['__is_instance__'] && typeof segment['__setattr__'] == 'function' ? segment['__setattr__']('y', $tupleassign4[1]) : $p['setattr'](segment, 'y', $tupleassign4[1]); 
					$pyjs['track']['lineno']=243;
					var $tupleassign5 = $p['__ass_unpack']($p['tuple']([$p['getattr'](segment, 'x'), $p['getattr'](segment, 'y')]), 2, null);
					segment['__is_instance__'] && typeof segment['__setattr__'] == 'function' ? segment['__setattr__']('x_pre', $tupleassign5[0]) : $p['setattr'](segment, 'x_pre', $tupleassign5[0]); 
					segment['__is_instance__'] && typeof segment['__setattr__'] == 'function' ? segment['__setattr__']('y_pre', $tupleassign5[1]) : $p['setattr'](segment, 'y_pre', $tupleassign5[1]); 
					$pyjs['track']['lineno']=244;
					segment['rect']['__setattr__']('center', $p['tuple']([$p['getattr'](segment, 'x'), $p['getattr'](segment, 'y')]));
					$pyjs['track']['lineno']=245;
					segment['__is_instance__'] && typeof segment['__setattr__'] == 'function' ? segment['__setattr__']('direction', direction) : $p['setattr'](segment, 'direction', direction); 
					$pyjs['track']['lineno']=246;
					segment['__is_instance__'] && typeof segment['__setattr__'] == 'function' ? segment['__setattr__']('speed', $p['getattr'](self, 'speed')) : $p['setattr'](segment, 'speed', $p['getattr'](self, 'speed')); 
					$pyjs['track']['lineno']=247;
					self['segments']['add'](segment);
					$pyjs['track']['lineno']=248;
					$p['getattr'](self, 'serpent_body')['__setitem__']($p['len']($p['getattr'](self, 'serpent_body')), segment);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='127001';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['direction'],['number', $constant_int_5]]);
			$cls_definition['grow'] = $method;
			$pyjs['track']['lineno']=250;
			$method = $pyjs__bind_method2('control', function(direction) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					direction = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '84d822e270bbe2dfcd0e00f222ec7512') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter8_idx,$iter8_array,$and5,$and6,dirn,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1,$iter8_type;
				$pyjs['track']={'module':'127001', 'lineno':250};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=250;
				$pyjs['track']['lineno']=252;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter8_iter = $p['tuple']([$p['tuple'](['L', 'R']), $p['tuple'](['U', 'D'])]);
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					dirn = $iter8_nextval['$nextval'];
					$pyjs['track']['lineno']=253;
					if ($p['bool'](($p['bool']($and5=dirn['__contains__'](direction))?!dirn['__contains__']($p['getattr'](self, 'direction')):$and5))) {
						$pyjs['track']['lineno']=254;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('new_direction', direction) : $p['setattr'](self, 'new_direction', direction); 
						$pyjs['track']['lineno']=255;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('last_move', direction) : $p['setattr'](self, 'last_move', direction); 
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='127001';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['direction']]);
			$cls_definition['control'] = $method;
			$pyjs['track']['lineno']=257;
			$method = $pyjs__bind_method2('move', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '84d822e270bbe2dfcd0e00f222ec7512') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div1,$iter9_iter,i,$iter9_nextval,$iter9_idx,$sub14,$iter9_array,$sub13,$sub16,$add10,$sub15,$add12,$pyjs__trackstack_size_1,$div2,$add9,$iter9_type,$add11;
				$pyjs['track']={'module':'127001', 'lineno':257};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=257;
				$pyjs['track']['lineno']=259;
				if ($p['bool']($p['op_eq']($p['getattr'](self, 'mode'), 'AI'))) {
					$pyjs['track']['lineno']=260;
					self['move_auto']();
				}
				$pyjs['track']['lineno']=261;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('step', $p['__op_add']($add9=$p['getattr'](self, 'step'),$add10=$constant_int_1)) : $p['setattr'](self, 'step', $p['__op_add']($add9=$p['getattr'](self, 'step'),$add10=$constant_int_1)); 
				$pyjs['track']['lineno']=262;
				if ($p['bool'](((($p['cmp']($p['getattr'](self, 'step'), (typeof ($div1=$constant_int_10)==typeof ($div2=$p['getattr'](self, 'speed')) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_truediv']($div1,$div2))))|1) == 1))) {
					$pyjs['track']['lineno']=263;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter9_iter = $p['range']($p['__op_sub']($sub13=$p['len']($p['getattr'](self, 'serpent_body')),$sub14=$constant_int_1), $constant_int_0, (typeof ($usub4=$constant_int_1)=='number'?
						-$usub4:
						$p['op_usub']($usub4)));
					$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
					while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
						i = $iter9_nextval['$nextval'];
						$pyjs['track']['lineno']=264;
						$p['getattr'](self, 'serpent_body')['__getitem__'](i)['__is_instance__'] && typeof $p['getattr'](self, 'serpent_body')['__getitem__'](i)['__setattr__'] == 'function' ? $p['getattr'](self, 'serpent_body')['__getitem__'](i)['__setattr__']('direction', $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($p['__op_sub']($sub15=i,$sub16=$constant_int_1)), 'direction')) : $p['setattr']($p['getattr'](self, 'serpent_body')['__getitem__'](i), 'direction', $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($p['__op_sub']($sub15=i,$sub16=$constant_int_1)), 'direction')); 
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='127001';
					$pyjs['track']['lineno']=265;
					if ($p['bool']($p['getattr'](self, 'new_direction'))) {
						$pyjs['track']['lineno']=266;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('direction', $p['getattr'](self, 'new_direction')) : $p['setattr'](self, 'direction', $p['getattr'](self, 'new_direction')); 
						$pyjs['track']['lineno']=267;
						$p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__is_instance__'] && typeof $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__setattr__'] == 'function' ? $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__setattr__']('direction', $p['getattr'](self, 'DIR')['__getitem__']($p['getattr'](self, 'direction'))) : $p['setattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'direction', $p['getattr'](self, 'DIR')['__getitem__']($p['getattr'](self, 'direction'))); 
						$pyjs['track']['lineno']=268;
						$p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__is_instance__'] && typeof $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__setattr__'] == 'function' ? $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__setattr__']('image', $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'images')['__getitem__']($p['__op_add']($add11=$p['getattr'](self, 'identity'),$add12='_head'))['__getitem__']($p['getattr'](self, 'direction'))) : $p['setattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'image', $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'images')['__getitem__']($p['__op_add']($add11=$p['getattr'](self, 'identity'),$add12='_head'))['__getitem__']($p['getattr'](self, 'direction'))); 
						$pyjs['track']['lineno']=269;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('new_direction', null) : $p['setattr'](self, 'new_direction', null); 
					}
					$pyjs['track']['lineno']=270;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('step', $constant_int_0) : $p['setattr'](self, 'step', $constant_int_0); 
				}
				$pyjs['track']['lineno']=271;
				self['segments']['update']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['move'] = $method;
			$pyjs['track']['lineno']=273;
			$method = $pyjs__bind_method2('move_auto', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '84d822e270bbe2dfcd0e00f222ec7512') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter14_iter,direct,$iter13_idx,$iter14_array,$pyjs_try_err,treat,$iter13_type,$and8,$and9,direction,$iter14_type,new_direction,$iter12_array,collide,$and7,$and12,$and13,$and10,$and11,$and16,$and14,$and15,$iter14_idx,$iter14_nextval,$iter13_nextval,$iter13_iter,$iter12_type,$iter13_array,$iter12_iter,$pyjs__trackstack_size_1,y,x,$iter12_idx,$iter12_nextval;
				$pyjs['track']={'module':'127001', 'lineno':273};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=273;
				$pyjs['track']['lineno']=275;
				collide = function(direction) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var $sub20,$iter10_nextval,serpent,$add13,$sub19,$iter10_iter,collide,$iter10_idx,$sub18,$sub17,$floordiv12,$floordiv11,$floordiv10,$add14,$add15,$add16,$mul9,$mul8,$mul7,$mul10,$iter10_array,$pyjs__trackstack_size_1,$iter10_type,$floordiv9;
					$pyjs['track']={'module':'127001','lineno':275};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='127001';
					$pyjs['track']['lineno']=275;
					$pyjs['track']['lineno']=276;
					direction = $p['getattr'](self, 'DIR')['__getitem__'](direction);
					$pyjs['track']['lineno']=277;
					$p['getattr']($p['getattr'](self, 'scan_rect'), 'rect')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'scan_rect'), 'rect')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'scan_rect'), 'rect')['__setattr__']('x', $p['__op_sub']($sub17=$p['__op_add']($add13=$p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'x'),$add14=(typeof ($mul7=direction['__getitem__']($constant_int_0))==typeof ($mul8=$constant_int_10) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8))),$sub18=(typeof ($floordiv9=$p['getattr']($p['getattr']($p['getattr'](self, 'scan_rect'), 'rect'), 'width'))==typeof ($floordiv10=$constant_int_2) && typeof $floordiv9=='number' && $floordiv10 !== 0?
						Math['floor']($floordiv9/$floordiv10):
						$p['op_floordiv']($floordiv9,$floordiv10)))) : $p['setattr']($p['getattr']($p['getattr'](self, 'scan_rect'), 'rect'), 'x', $p['__op_sub']($sub17=$p['__op_add']($add13=$p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'x'),$add14=(typeof ($mul7=direction['__getitem__']($constant_int_0))==typeof ($mul8=$constant_int_10) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8))),$sub18=(typeof ($floordiv9=$p['getattr']($p['getattr']($p['getattr'](self, 'scan_rect'), 'rect'), 'width'))==typeof ($floordiv10=$constant_int_2) && typeof $floordiv9=='number' && $floordiv10 !== 0?
						Math['floor']($floordiv9/$floordiv10):
						$p['op_floordiv']($floordiv9,$floordiv10)))); 
					$pyjs['track']['lineno']=278;
					$p['getattr']($p['getattr'](self, 'scan_rect'), 'rect')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'scan_rect'), 'rect')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'scan_rect'), 'rect')['__setattr__']('y', $p['__op_sub']($sub19=$p['__op_add']($add15=$p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'y'),$add16=(typeof ($mul9=direction['__getitem__']($constant_int_1))==typeof ($mul10=$constant_int_10) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10))),$sub20=(typeof ($floordiv11=$p['getattr']($p['getattr']($p['getattr'](self, 'scan_rect'), 'rect'), 'height'))==typeof ($floordiv12=$constant_int_2) && typeof $floordiv11=='number' && $floordiv12 !== 0?
						Math['floor']($floordiv11/$floordiv12):
						$p['op_floordiv']($floordiv11,$floordiv12)))) : $p['setattr']($p['getattr']($p['getattr'](self, 'scan_rect'), 'rect'), 'y', $p['__op_sub']($sub19=$p['__op_add']($add15=$p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'y'),$add16=(typeof ($mul9=direction['__getitem__']($constant_int_1))==typeof ($mul10=$constant_int_10) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10))),$sub20=(typeof ($floordiv11=$p['getattr']($p['getattr']($p['getattr'](self, 'scan_rect'), 'rect'), 'height'))==typeof ($floordiv12=$constant_int_2) && typeof $floordiv11=='number' && $floordiv12 !== 0?
						Math['floor']($floordiv11/$floordiv12):
						$p['op_floordiv']($floordiv11,$floordiv12)))); 
					$pyjs['track']['lineno']=279;
					collide = false;
					$pyjs['track']['lineno']=280;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter10_iter = $p['getattr']($p['getattr'](self, 'matrix'), 'serpent');
					$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
					while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
						serpent = $iter10_nextval['$nextval'];
						$pyjs['track']['lineno']=281;
						if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'matrix'), 'serpent')['__getitem__'](serpent)))) {
							$pyjs['track']['lineno']=282;
							continue;
						}
						$pyjs['track']['lineno']=283;
						if ($p['bool']($m['pygame']['sprite']['spritecollideany']($p['getattr'](self, 'scan_rect'), $p['getattr']($p['getattr']($p['getattr'](self, 'matrix'), 'serpent')['__getitem__'](serpent), 'segments')))) {
							$pyjs['track']['lineno']=284;
							collide = true;
							$pyjs['track']['lineno']=285;
							$pyjs['track']['lineno']=285;
							var $pyjs__ret = collide;
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='127001';
					$pyjs['track']['lineno']=286;
					if ($p['bool'](!$p['op_eq'](self['scan_rect']['rect']['collidelist']($p['getattr']($p['getattr'](self, 'matrix'), 'edges')), (typeof ($usub5=$constant_int_1)=='number'?
						-$usub5:
						$p['op_usub']($usub5))))) {
						$pyjs['track']['lineno']=287;
						collide = true;
						$pyjs['track']['lineno']=288;
						$pyjs['track']['lineno']=288;
						var $pyjs__ret = collide;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					$pyjs['track']['lineno']=289;
					$pyjs['track']['lineno']=289;
					var $pyjs__ret = collide;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				collide['__name__'] = 'collide';

				collide['__bind_type__'] = 0;
				collide['__args__'] = [null,null,['direction']];
				$pyjs['track']['lineno']=290;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=291;
					treat = function(){
						var $iter11_iter,$iter11_type,$collcomp1,$pyjs__trackstack_size_2,treat,$iter11_array,$iter11_nextval,$iter11_idx;
	$collcomp1 = $p['list']();
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter11_iter = $p['getattr']($p['getattr'](self, 'matrix'), 'treat');
					$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
					while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
						treat = $iter11_nextval['$nextval'];
						$collcomp1['append'](treat);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='127001';

	return $collcomp1;}()['__getitem__']($constant_int_0);
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
					$pyjs['track']['module']='127001';
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						$pyjs['track']['lineno']=293;
						treat = null;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=294;
				if ($p['bool'](($p['bool']($and7=treat)?!$p['bool']($p['getattr'](self, 'new_direction')):$and7))) {
					$pyjs['track']['lineno']=295;
					var $tupleassign6 = $p['__ass_unpack']($p['tuple']([$p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'x'), $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'y')]), 2, null);
					x = $tupleassign6[0];
					y = $tupleassign6[1];
					$pyjs['track']['lineno']=296;
					if ($p['bool'](($p['bool']($and9=($p['cmp'](x, $p['getattr'](treat, 'x')) < 1))?($p['cmp'](y, $p['getattr'](treat, 'y')) < 1):$and9))) {
						$pyjs['track']['lineno']=297;
						direct = $p['tuple'](['R', 'D']);
					}
					else if ($p['bool'](($p['bool']($and11=($p['cmp'](x, $p['getattr'](treat, 'x')) < 1))?((($p['cmp'](y, $p['getattr'](treat, 'y')))|1) == 1):$and11))) {
						$pyjs['track']['lineno']=299;
						direct = $p['tuple'](['R', 'U']);
					}
					else if ($p['bool'](($p['bool']($and13=((($p['cmp'](x, $p['getattr'](treat, 'x')))|1) == 1))?($p['cmp'](y, $p['getattr'](treat, 'y')) < 1):$and13))) {
						$pyjs['track']['lineno']=301;
						direct = $p['tuple'](['L', 'D']);
					}
					else if ($p['bool'](($p['bool']($and15=((($p['cmp'](x, $p['getattr'](treat, 'x')))|1) == 1))?((($p['cmp'](y, $p['getattr'](treat, 'y')))|1) == 1):$and15))) {
						$pyjs['track']['lineno']=303;
						direct = $p['tuple'](['L', 'U']);
					}
					$pyjs['track']['lineno']=304;
					if ($p['bool'](!direct['__contains__']($p['getattr'](self, 'direction')))) {
						$pyjs['track']['lineno']=305;
						new_direction = $p['list']([]);
						$pyjs['track']['lineno']=306;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter12_iter = direct;
						$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
						while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
							direction = $iter12_nextval['$nextval'];
							$pyjs['track']['lineno']=307;
							if ($p['bool'](!$p['bool'](collide(direction)))) {
								$pyjs['track']['lineno']=308;
								new_direction['append'](direction);
							}
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='127001';
						$pyjs['track']['lineno']=309;
						if ($p['bool'](new_direction)) {
							$pyjs['track']['lineno']=310;
							self['control']($m['random']['choice'](new_direction));
						}
					}
				}
				$pyjs['track']['lineno']=311;
				if ($p['bool'](collide($p['getattr'](self, 'direction')))) {
					$pyjs['track']['lineno']=312;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('new_direction', null) : $p['setattr'](self, 'new_direction', null); 
					$pyjs['track']['lineno']=313;
					new_direction = $p['list']([]);
					$pyjs['track']['lineno']=314;
					if ($p['bool']($p['tuple'](['U', 'D'])['__contains__']($p['getattr'](self, 'direction')))) {
						$pyjs['track']['lineno']=315;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter13_iter = $p['tuple'](['L', 'R']);
						$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
						while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
							direction = $iter13_nextval['$nextval'];
							$pyjs['track']['lineno']=316;
							if ($p['bool'](!$p['bool'](collide(direction)))) {
								$pyjs['track']['lineno']=317;
								new_direction['append'](direction);
							}
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='127001';
					}
					else if ($p['bool']($p['tuple'](['L', 'R'])['__contains__']($p['getattr'](self, 'direction')))) {
						$pyjs['track']['lineno']=319;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter14_iter = $p['tuple'](['U', 'D']);
						$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
						while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
							direction = $iter14_nextval['$nextval'];
							$pyjs['track']['lineno']=320;
							if ($p['bool'](!$p['bool'](collide(direction)))) {
								$pyjs['track']['lineno']=321;
								new_direction['append'](direction);
							}
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='127001';
					}
					$pyjs['track']['lineno']=322;
					if ($p['bool'](new_direction)) {
						$pyjs['track']['lineno']=323;
						self['control']($m['random']['choice'](new_direction));
					}
					$pyjs['track']['lineno']=324;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('scan_detect', true) : $p['setattr'](self, 'scan_detect', true); 
				}
				else {
					$pyjs['track']['lineno']=326;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('scan_detect', false) : $p['setattr'](self, 'scan_detect', false); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['move_auto'] = $method;
			$pyjs['track']['lineno']=328;
			$method = $pyjs__bind_method2('growth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '84d822e270bbe2dfcd0e00f222ec7512') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub22,$sub23,$sub21,$sub26,$sub27,$sub24,$sub25,$sub28,$sub29,$add29,$add28,$add21,$add20,$add22,$add25,$add24,$add27,$add26,tail,treat,$sub31,$sub30,$sub32,$add17,$and17,$div3,$and18,$add18,$add19,$div4,$mul14,$mul13,$mul12,$mul11,$add30,points,$add23;
				$pyjs['track']={'module':'127001', 'lineno':328};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=328;
				$pyjs['track']['lineno']=330;
				if ($p['bool']($m['pygame']['sprite']['spritecollide']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), $p['getattr']($p['getattr'](self, 'matrix'), 'treat'), false, $p['getattr']($p['getattr']($m['pygame'], 'sprite'), 'collide_mask')))) {
					$pyjs['track']['lineno']=331;
					points = $constant_int_0;
					$pyjs['track']['lineno']=332;
					treat = function(){
						var $iter15_iter,$iter15_array,$collcomp2,$iter15_idx,treat,$iter15_nextval,$iter15_type,$pyjs__trackstack_size_1;
	$collcomp2 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter15_iter = $p['getattr']($p['getattr'](self, 'matrix'), 'treat');
					$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
					while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
						treat = $iter15_nextval['$nextval'];
						$collcomp2['append'](treat);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='127001';

	return $collcomp2;}()['__getitem__']($constant_int_0);
					$pyjs['track']['lineno']=333;
					if ($p['bool']($p['op_eq']($p['getattr'](treat, 'identity'), 'Food'))) {
						$pyjs['track']['lineno']=334;
						if ($p['bool'](((($p['cmp']($p['getattr'](self, 'growing'), $constant_int_0))|1) == 1))) {
							$pyjs['track']['lineno']=335;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('growing', $p['__op_add']($add17=$p['getattr'](self, 'growing'),$add18=$constant_int_5)) : $p['setattr'](self, 'growing', $p['__op_add']($add17=$p['getattr'](self, 'growing'),$add18=$constant_int_5)); 
						}
						else {
							$pyjs['track']['lineno']=337;
							points = $p['__op_add']($add19=points,$add20=$constant_int_5);
						}
					}
					else if ($p['bool']($p['op_eq']($p['getattr'](treat, 'identity'), 'Bonus'))) {
						$pyjs['track']['lineno']=339;
						if ($p['bool'](($p['bool']($and17=($p['cmp']($p['len']($p['getattr'](self, 'serpent_body')), $constant_int_5) == 1))?((($p['cmp']($p['getattr'](self, 'growing'), $constant_int_0))|1) == 1):$and17))) {
							$pyjs['track']['lineno']=340;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('growing', (typeof ($usub6=$p['__op_sub']($sub21=$p['len']($p['getattr'](self, 'serpent_body')),$sub22=$constant_int_5))=='number'?
								-$usub6:
								$p['op_usub']($usub6))) : $p['setattr'](self, 'growing', (typeof ($usub6=$p['__op_sub']($sub21=$p['len']($p['getattr'](self, 'serpent_body')),$sub22=$constant_int_5))=='number'?
								-$usub6:
								$p['op_usub']($usub6))); 
							$pyjs['track']['lineno']=341;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rate', $constant_int_0) : $p['setattr'](self, 'rate', $constant_int_0); 
						}
						$pyjs['track']['lineno']=342;
						points = $p['__op_add']($add21=points,$add22=$constant_int_10);
					}
					$pyjs['track']['lineno']=343;
					if ($p['bool'](points)) {
						$pyjs['track']['lineno']=344;
						self['set_points'](points);
					}
					$pyjs['track']['lineno']=345;
					self['matrix']['treat']['empty']();
				}
				$pyjs['track']['lineno']=346;
				if ($p['bool']($p['getattr'](self, 'growing'))) {
					$pyjs['track']['lineno']=347;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rate', $p['__op_add']($add23=$p['getattr'](self, 'rate'),$add24=$constant_int_1)) : $p['setattr'](self, 'rate', $p['__op_add']($add23=$p['getattr'](self, 'rate'),$add24=$constant_int_1)); 
					$pyjs['track']['lineno']=348;
					if ($p['bool'](($p['cmp']($p['getattr'](self, 'rate'), (typeof ($div3=$constant_int_10)==typeof ($div4=$p['getattr'](self, 'speed')) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_truediv']($div3,$div4))) == 1))) {
						$pyjs['track']['lineno']=349;
						points = $constant_int_0;
						$pyjs['track']['lineno']=350;
						if ($p['bool'](($p['cmp']($p['getattr'](self, 'growing'), $constant_int_0) == 1))) {
							$pyjs['track']['lineno']=351;
							tail = $p['getattr'](self, 'serpent_body')['__getitem__']($p['__op_sub']($sub23=$p['len']($p['getattr'](self, 'serpent_body')),$sub24=$constant_int_1));
							$pyjs['track']['lineno']=352;
							$pyjs_kwargs_call(self, 'grow', null, null, [{'number':$constant_int_1}, $p['__op_sub']($sub25=$p['getattr'](tail, 'x'),$sub26=(typeof ($mul11=$p['getattr'](tail, 'direction')['__getitem__']($constant_int_0))==typeof ($mul12=$constant_int_10) && typeof $mul11=='number'?
								$mul11*$mul12:
								$p['op_mul']($mul11,$mul12))), $p['__op_sub']($sub27=$p['getattr'](tail, 'y'),$sub28=(typeof ($mul13=$p['getattr'](tail, 'direction')['__getitem__']($constant_int_1))==typeof ($mul14=$constant_int_10) && typeof $mul13=='number'?
								$mul13*$mul14:
								$p['op_mul']($mul13,$mul14))), $p['getattr'](tail, 'direction')]);
							$pyjs['track']['lineno']=353;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('growing', $p['__op_sub']($sub29=$p['getattr'](self, 'growing'),$sub30=$constant_int_1)) : $p['setattr'](self, 'growing', $p['__op_sub']($sub29=$p['getattr'](self, 'growing'),$sub30=$constant_int_1)); 
							$pyjs['track']['lineno']=354;
							points = $p['__op_add']($add25=points,$add26=$constant_int_1);
						}
						else {
							$pyjs['track']['lineno']=356;
							tail = $p['__op_sub']($sub31=$p['len']($p['getattr'](self, 'serpent_body')),$sub32=$constant_int_1);
							$pyjs['track']['lineno']=357;
							self['segment_spares']['append']($p['getattr'](self, 'serpent_body')['__getitem__'](tail));
							$pyjs['track']['lineno']=358;
							self['segments']['remove']($p['getattr'](self, 'serpent_body')['__getitem__'](tail));
							$pyjs['track']['lineno']=359;
							$p['getattr'](self, 'serpent_body')['__delitem__'](tail);
							$pyjs['track']['lineno']=360;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('growing', $p['__op_add']($add27=$p['getattr'](self, 'growing'),$add28=$constant_int_1)) : $p['setattr'](self, 'growing', $p['__op_add']($add27=$p['getattr'](self, 'growing'),$add28=$constant_int_1)); 
							$pyjs['track']['lineno']=361;
							points = $p['__op_add']($add29=points,$add30=$constant_int_1);
						}
						$pyjs['track']['lineno']=362;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rate', $constant_int_0) : $p['setattr'](self, 'rate', $constant_int_0); 
						$pyjs['track']['lineno']=363;
						if ($p['bool'](points)) {
							$pyjs['track']['lineno']=364;
							self['set_points'](points);
						}
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['growth'] = $method;
			$pyjs['track']['lineno']=366;
			$method = $pyjs__bind_method2('set_points', function(points) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					points = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '84d822e270bbe2dfcd0e00f222ec7512') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $augexpr1,$and20,$add32,$add31,$augsub1,$and22,$and21,$and19;
				$pyjs['track']={'module':'127001', 'lineno':366};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=366;
				$pyjs['track']['lineno']=368;
				var $augsub1 = $p['getattr'](self, 'identity');
				var $augexpr1 = $p['getattr']($p['getattr'](self, 'matrix'), 'points');
				$augexpr1['__setitem__']($augsub1, $p['__op_add']($add31=$augexpr1['__getitem__']($augsub1),$add32=points));
				$pyjs['track']['lineno']=369;
				if ($p['bool'](($p['bool']($and19=$p['getattr']($p['getattr'](self, 'matrix'), 'match'))?!$p['bool']($p['getattr']($p['getattr'](self, 'matrix'), 'auto')):$and19))) {
					$pyjs['track']['lineno']=370;
					if ($p['bool'](($p['bool']($and21=((($p['cmp']($p['getattr']($p['getattr'](self, 'matrix'), 'points')['__getitem__']($p['getattr'](self, 'identity')), $p['getattr']($p['getattr'](self, 'matrix'), 'match')))|1) == 1))?!$p['bool']($p['getattr'](self, 'growing')):$and21))) {
						$pyjs['track']['lineno']=371;
						self['matrix']['set_active'](false);
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['points']]);
			$cls_definition['set_points'] = $method;
			$pyjs['track']['lineno']=373;
			$method = $pyjs__bind_method2('collision', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '84d822e270bbe2dfcd0e00f222ec7512') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter16_array,$iter17_nextval,$iter17_iter,$iter17_type,serpent,$iter16_type,segment,$iter16_idx,$iter17_array,$iter17_idx,$pyjs__trackstack_size_1,$and23,$iter16_nextval,$pyjs__trackstack_size_2,$iter16_iter,$and24;
				$pyjs['track']={'module':'127001', 'lineno':373};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=373;
				$pyjs['track']['lineno']=375;
				if ($p['bool'](($p['bool']($and23=$p['op_eq']($p['getattr'](self, 'mode'), 'AI'))?!$p['bool']($p['getattr'](self, 'scan_detect')):$and23))) {
					$pyjs['track']['lineno']=376;
					$pyjs['track']['lineno']=376;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=377;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter16_iter = $p['getattr']($p['getattr'](self, 'matrix'), 'serpent');
				$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
				while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
					serpent = $iter16_nextval['$nextval'];
					$pyjs['track']['lineno']=378;
					if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'matrix'), 'serpent')['__getitem__'](serpent)))) {
						$pyjs['track']['lineno']=379;
						continue;
					}
					$pyjs['track']['lineno']=380;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter17_iter = $m['pygame']['sprite']['spritecollide']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), $p['getattr']($p['getattr']($p['getattr'](self, 'matrix'), 'serpent')['__getitem__'](serpent), 'segments'), false);
					$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
					while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
						segment = $iter17_nextval['$nextval'];
						$pyjs['track']['lineno']=381;
						if ($p['bool'](!$p['tuple']([$p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_1)])['__contains__'](segment))) {
							$pyjs['track']['lineno']=382;
							$pyjs['track']['lineno']=382;
							var $pyjs__ret = true;
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='127001';
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=383;
				if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['rect']['collidelist']($p['getattr']($p['getattr'](self, 'matrix'), 'edges')), (typeof ($usub7=$constant_int_1)=='number'?
					-$usub7:
					$p['op_usub']($usub7))))) {
					$pyjs['track']['lineno']=384;
					$pyjs['track']['lineno']=384;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=385;
				$pyjs['track']['lineno']=385;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['collision'] = $method;
			$pyjs['track']['lineno']=387;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '84d822e270bbe2dfcd0e00f222ec7512') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add36,$sub33,$or1,$sub34,$or2,$add33,$floordiv14,$floordiv13,$add34,$add35,penalty,$sub35,$sub36,$and26,$and25;
				$pyjs['track']={'module':'127001', 'lineno':387};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=387;
				$pyjs['track']['lineno']=389;
				if ($p['bool']($p['getattr'](self, 'active'))) {
					$pyjs['track']['lineno']=390;
					self['move']();
					$pyjs['track']['lineno']=391;
					self['growth']();
					$pyjs['track']['lineno']=392;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('active', !$p['bool'](self['collision']())) : $p['setattr'](self, 'active', !$p['bool'](self['collision']())); 
					$pyjs['track']['lineno']=393;
					if ($p['bool'](!$p['bool']($p['getattr'](self, 'active')))) {
						$pyjs['track']['lineno']=394;
						$p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__is_instance__'] && typeof $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__setattr__'] == 'function' ? $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__setattr__']('image', $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'images')['__getitem__']($p['__op_add']($add33=$p['getattr'](self, 'identity'),$add34='_ko'))['__getitem__']($p['getattr'](self, 'direction'))) : $p['setattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'image', $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'images')['__getitem__']($p['__op_add']($add33=$p['getattr'](self, 'identity'),$add34='_ko'))['__getitem__']($p['getattr'](self, 'direction'))); 
						$pyjs['track']['lineno']=395;
						if ($p['bool'](($p['bool']($or1=$p['getattr']($p['getattr'](self, 'matrix'), 'match'))?$or1:$p['getattr']($p['getattr'](self, 'matrix'), 'auto')))) {
							$pyjs['track']['lineno']=396;
							if ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, 'serpent_body')), $constant_int_5) == 1))) {
								$pyjs['track']['lineno']=397;
								penalty = $p['__op_add']($add35=$constant_int_5,$add36=(typeof ($floordiv13=$p['len']($p['getattr'](self, 'serpent_body')))==typeof ($floordiv14=$constant_int_5) && typeof $floordiv13=='number' && $floordiv14 !== 0?
									Math['floor']($floordiv13/$floordiv14):
									$p['op_floordiv']($floordiv13,$floordiv14)));
								$pyjs['track']['lineno']=398;
								if ($p['bool'](($p['cmp']($p['__op_sub']($sub33=$p['getattr']($p['getattr'](self, 'matrix'), 'points')['__getitem__']($p['getattr'](self, 'identity')),$sub34=penalty), $constant_int_0) == -1))) {
									$pyjs['track']['lineno']=399;
									penalty = $p['getattr']($p['getattr'](self, 'matrix'), 'points')['__getitem__']($p['getattr'](self, 'identity'));
								}
								$pyjs['track']['lineno']=400;
								self['set_points']((typeof ($usub8=penalty)=='number'?
									-$usub8:
									$p['op_usub']($usub8)));
							}
						}
					}
				}
				else {
					$pyjs['track']['lineno']=402;
					if ($p['bool'](($p['bool']($and25=!$p['bool']($p['getattr']($p['getattr'](self, 'matrix'), 'match')))?!$p['bool']($p['getattr']($p['getattr'](self, 'matrix'), 'auto')):$and25))) {
						$pyjs['track']['lineno']=403;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('alive', false) : $p['setattr'](self, 'alive', false); 
					}
					else {
						$pyjs['track']['lineno']=405;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pause', $p['__op_sub']($sub35=$p['getattr'](self, 'pause'),$sub36=$constant_int_1)) : $p['setattr'](self, 'pause', $p['__op_sub']($sub35=$p['getattr'](self, 'pause'),$sub36=$constant_int_1)); 
						$pyjs['track']['lineno']=406;
						if ($p['bool'](!$p['bool']($p['getattr'](self, 'pause')))) {
							$pyjs['track']['lineno']=407;
							self['segment_spares']['extend'](self['segments']['sprites']());
							$pyjs['track']['lineno']=408;
							self['segments']['empty']();
							$pyjs['track']['lineno']=409;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('alive', false) : $p['setattr'](self, 'alive', false); 
						}
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=206;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Serpent', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=412;
		$m['Segment'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = '127001';
			$cls_definition['__md5__'] = '27019d5fea47cdc3daaa1884eec841d7';
			$pyjs['track']['lineno']=416;
			$cls_definition['images'] = null;
			$pyjs['track']['lineno']=417;
			$cls_definition['mask'] = null;
			$pyjs['track']['lineno']=418;
			$method = $pyjs__bind_method2('__init__', function(serpent, position, direction, speed) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					serpent = arguments[1];
					position = arguments[2];
					direction = arguments[3];
					speed = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27019d5fea47cdc3daaa1884eec841d7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof direction == 'undefined') direction=arguments['callee']['__args__'][5][1];
				if (typeof speed == 'undefined') speed=arguments['callee']['__args__'][6][1];
				var image,$add42,species,$add44,$add43,$iter19_nextval,$add41,$add40,segment_head,$iter19_iter,$iter18_idx,$iter18_nextval,$iter18_type,$iter18_iter,image_path,$iter19_array,$iter19_idx,path,dirn,$add38,$add39,segment_ko,$iter18_array,$add37,$iter19_type,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,deg;
				$pyjs['track']={'module':'127001', 'lineno':418};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=418;
				$pyjs['track']['lineno']=419;
				$m['pygame']['sprite']['Sprite']['__init__'](self);
				$pyjs['track']['lineno']=420;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['dict']([['Serpent1', $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_255])], ['Serpent2', $p['tuple']([$constant_int_255, $constant_int_0, $constant_int_0])]])) : $p['setattr'](self, 'type', $p['dict']([['Serpent1', $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_255])], ['Serpent2', $p['tuple']([$constant_int_255, $constant_int_0, $constant_int_0])]])); 
				$pyjs['track']['lineno']=421;
				if ($p['bool'](!$p['bool']($p['getattr']($m['Segment'], 'images')))) {
					$pyjs['track']['lineno']=422;
					$m['Segment']['__is_instance__'] && typeof $m['Segment']['__setattr__'] == 'function' ? $m['Segment']['__setattr__']('images', $p['dict']([])) : $p['setattr']($m['Segment'], 'images', $p['dict']([])); 
					$pyjs['track']['lineno']=423;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter18_iter = $p['tuple'](['Serpent1', 'Serpent2']);
					$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
					while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
						species = $iter18_nextval['$nextval'];
						$pyjs['track']['lineno']=424;
						if ($p['bool']($m['load_images'])) {
							$pyjs['track']['lineno']=425;
							path = 'data';
							$pyjs['track']['lineno']=426;
							image = $p['dict']([['Serpent1', '../../../data/segment1.png'], ['Serpent2', '../../../data/segment2.png']])['__getitem__'](species);
							$pyjs['track']['lineno']=427;
							image_path = $m['os']['path']['join'](path, image);
							$pyjs['track']['lineno']=428;
							$p['getattr']($m['Segment'], 'images')['__setitem__'](species, $m['pygame']['image']['load'](image_path));
						}
						else {
							$pyjs['track']['lineno']=430;
							$p['getattr']($m['Segment'], 'images')['__setitem__'](species, $m['pygame']['Surface']($p['tuple']([$constant_int_10, $constant_int_10])));
							$pyjs['track']['lineno']=431;
							$m['pygame']['draw']['circle']($p['getattr']($m['Segment'], 'images')['__getitem__'](species), $p['getattr'](self, 'type')['__getitem__'](species), $p['tuple']([$constant_int_5, $constant_int_5]), $constant_int_6, $constant_int_0);
							$pyjs['track']['lineno']=432;
							$p['getattr']($m['Segment'], 'images')['__getitem__'](species)['set_colorkey']($p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]));
						}
						$pyjs['track']['lineno']=433;
						segment_head = $p['getattr']($m['Segment'], 'images')['__getitem__'](species)['copy']();
						$pyjs['track']['lineno']=434;
						$m['pygame']['draw']['line'](segment_head, $p['tuple']([$constant_int_0, $constant_int_255, $constant_int_0]), $p['tuple']([$constant_int_2, $constant_int_2]), $p['tuple']([$constant_int_0, $constant_int_5]), $constant_int_3);
						$pyjs['track']['lineno']=435;
						$m['pygame']['draw']['line'](segment_head, $p['tuple']([$constant_int_0, $constant_int_255, $constant_int_0]), $p['tuple']([$constant_int_7, $constant_int_2]), $p['tuple']([$constant_int_9, $constant_int_5]), $constant_int_3);
						$pyjs['track']['lineno']=436;
						segment_ko = $p['getattr']($m['Segment'], 'images')['__getitem__'](species)['copy']();
						$pyjs['track']['lineno']=437;
						$m['pygame']['draw']['circle'](segment_ko, $p['tuple']([$constant_int_0, $constant_int_255, $constant_int_0]), $p['tuple']([$constant_int_2, $constant_int_3]), $constant_int_2, $constant_int_1);
						$pyjs['track']['lineno']=438;
						$m['pygame']['draw']['circle'](segment_ko, $p['tuple']([$constant_int_0, $constant_int_255, $constant_int_0]), $p['tuple']([$constant_int_8, $constant_int_3]), $constant_int_2, $constant_int_1);
						$pyjs['track']['lineno']=439;
						$p['getattr']($m['Segment'], 'images')['__setitem__']($p['__op_add']($add37=species,$add38='_head'), $p['dict']([]));
						$pyjs['track']['lineno']=440;
						$p['getattr']($m['Segment'], 'images')['__setitem__']($p['__op_add']($add39=species,$add40='_ko'), $p['dict']([]));
						$pyjs['track']['lineno']=441;
						deg = $p['dict']([['U', $constant_int_0], ['D', $constant_int_180], ['L', $constant_int_90], ['R', (typeof ($usub9=$constant_int_90)=='number'?
							-$usub9:
							$p['op_usub']($usub9))]]);
						$pyjs['track']['lineno']=442;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter19_iter = $p['tuple'](['U', 'D', 'L', 'R']);
						$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
						while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
							dirn = $iter19_nextval['$nextval'];
							$pyjs['track']['lineno']=443;
							$p['getattr']($m['Segment'], 'images')['__getitem__']($p['__op_add']($add41=species,$add42='_head'))['__setitem__'](dirn, $m['pygame']['transform']['rotate'](segment_head, deg['__getitem__'](dirn)));
							$pyjs['track']['lineno']=444;
							$p['getattr']($m['Segment'], 'images')['__getitem__']($p['__op_add']($add43=species,$add44='_ko'))['__setitem__'](dirn, $m['pygame']['transform']['rotate'](segment_ko, deg['__getitem__'](dirn)));
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='127001';
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='127001';
					$pyjs['track']['lineno']=445;
					$m['Segment']['__is_instance__'] && typeof $m['Segment']['__setattr__'] == 'function' ? $m['Segment']['__setattr__']('mask', $m['pygame']['mask']['from_surface']($p['getattr']($m['Segment'], 'images')['__getitem__']('Serpent1'))) : $p['setattr']($m['Segment'], 'mask', $m['pygame']['mask']['from_surface']($p['getattr']($m['Segment'], 'images')['__getitem__']('Serpent1'))); 
				}
				$pyjs['track']['lineno']=446;
				var $tupleassign7 = $p['__ass_unpack'](position, 2, null);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', $tupleassign7[0]) : $p['setattr'](self, 'x', $tupleassign7[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', $tupleassign7[1]) : $p['setattr'](self, 'y', $tupleassign7[1]); 
				$pyjs['track']['lineno']=447;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('direction', direction) : $p['setattr'](self, 'direction', direction); 
				$pyjs['track']['lineno']=448;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('speed', speed) : $p['setattr'](self, 'speed', speed); 
				$pyjs['track']['lineno']=449;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('image', $p['getattr']($m['Segment'], 'images')['__getitem__'](serpent)) : $p['setattr'](self, 'image', $p['getattr']($m['Segment'], 'images')['__getitem__'](serpent)); 
				$pyjs['track']['lineno']=450;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rect', $pyjs_kwargs_call(self['image'], 'get_rect', null, null, [{'center':$p['tuple']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y')])}])) : $p['setattr'](self, 'rect', $pyjs_kwargs_call(self['image'], 'get_rect', null, null, [{'center':$p['tuple']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y')])}])); 
				$pyjs['track']['lineno']=451;
				var $tupleassign8 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y')]), 2, null);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x_pre', $tupleassign8[0]) : $p['setattr'](self, 'x_pre', $tupleassign8[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y_pre', $tupleassign8[1]) : $p['setattr'](self, 'y_pre', $tupleassign8[1]); 
				$pyjs['track']['lineno']=452;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mask', $p['getattr']($m['Segment'], 'mask')) : $p['setattr'](self, 'mask', $p['getattr']($m['Segment'], 'mask')); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['serpent'],['position'],['direction', null],['speed', $constant_int_0]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=454;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27019d5fea47cdc3daaa1884eec841d7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul17,$mul16,$mul15,$sub37,$add48,$add47,$add46,$mul18,$sub39,$sub38,$sub40,$add45;
				$pyjs['track']={'module':'127001', 'lineno':454};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=454;
				$pyjs['track']['lineno']=456;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', $p['__op_add']($add45=$p['getattr'](self, 'x'),$add46=(typeof ($mul15=$p['getattr'](self, 'direction')['__getitem__']($constant_int_0))==typeof ($mul16=$p['getattr'](self, 'speed')) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)))) : $p['setattr'](self, 'x', $p['__op_add']($add45=$p['getattr'](self, 'x'),$add46=(typeof ($mul15=$p['getattr'](self, 'direction')['__getitem__']($constant_int_0))==typeof ($mul16=$p['getattr'](self, 'speed')) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)))); 
				$pyjs['track']['lineno']=457;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', $p['__op_add']($add47=$p['getattr'](self, 'y'),$add48=(typeof ($mul17=$p['getattr'](self, 'direction')['__getitem__']($constant_int_1))==typeof ($mul18=$p['getattr'](self, 'speed')) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)))) : $p['setattr'](self, 'y', $p['__op_add']($add47=$p['getattr'](self, 'y'),$add48=(typeof ($mul17=$p['getattr'](self, 'direction')['__getitem__']($constant_int_1))==typeof ($mul18=$p['getattr'](self, 'speed')) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)))); 
				$pyjs['track']['lineno']=458;
				self['rect']['move_ip']($p['__op_sub']($sub37=$p['getattr'](self, 'x'),$sub38=$p['getattr'](self, 'x_pre')), $p['__op_sub']($sub39=$p['getattr'](self, 'y'),$sub40=$p['getattr'](self, 'y_pre')));
				$pyjs['track']['lineno']=459;
				var $tupleassign9 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y')]), 2, null);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x_pre', $tupleassign9[0]) : $p['setattr'](self, 'x_pre', $tupleassign9[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y_pre', $tupleassign9[1]) : $p['setattr'](self, 'y_pre', $tupleassign9[1]); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=412;
			var $bases = new Array($p['getattr']($p['getattr']($m['pygame'], 'sprite'), 'Sprite'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Segment', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=462;
		$m['Treat'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = '127001';
			$cls_definition['__md5__'] = '39dfd32e2e8e6054a7e5a82597170fa8';
			$pyjs['track']['lineno']=466;
			$cls_definition['images'] = null;
			$pyjs['track']['lineno']=467;
			$cls_definition['mask'] = null;
			$pyjs['track']['lineno']=468;
			$method = $pyjs__bind_method2('__init__', function(matrix) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					matrix = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '39dfd32e2e8e6054a7e5a82597170fa8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter20_nextval,serpent,$sub41,$sub42,$sub43,$sub44,$iter20_array,$add49,disrupt,$iter20_iter,$floordiv16,$floordiv15,$div6,$div5,$add50,$iter20_type,placed,$iter20_idx,$pyjs__trackstack_size_1,y,x;
				$pyjs['track']={'module':'127001', 'lineno':468};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=468;
				$pyjs['track']['lineno']=469;
				$m['pygame']['sprite']['Sprite']['__init__'](self);
				$pyjs['track']['lineno']=470;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('matrix', matrix) : $p['setattr'](self, 'matrix', matrix); 
				$pyjs['track']['lineno']=471;
				if ($p['bool'](!$p['bool']($p['getattr']($m['Treat'], 'images')))) {
					$pyjs['track']['lineno']=472;
					$m['Treat']['__is_instance__'] && typeof $m['Treat']['__setattr__'] == 'function' ? $m['Treat']['__setattr__']('images', $p['dict']([])) : $p['setattr']($m['Treat'], 'images', $p['dict']([])); 
					$pyjs['track']['lineno']=473;
					$m['Treat']['__is_instance__'] && typeof $m['Treat']['__setattr__'] == 'function' ? $m['Treat']['__setattr__']('mask', $p['dict']([])) : $p['setattr']($m['Treat'], 'mask', $p['dict']([])); 
					$pyjs['track']['lineno']=474;
					$p['getattr']($m['Treat'], 'images')['__setitem__']('Food', $m['pygame']['Surface']($p['tuple']([$constant_int_15, $constant_int_15])));
					$pyjs['track']['lineno']=475;
					$m['pygame']['draw']['circle']($p['getattr']($m['Treat'], 'images')['__getitem__']('Food'), $p['tuple']([$constant_int_0, $constant_int_255, $constant_int_0]), $p['tuple']([$constant_int_7, $constant_int_7]), $constant_int_5, $constant_int_0);
					$pyjs['track']['lineno']=476;
					$p['getattr']($m['Treat'], 'images')['__getitem__']('Food')['set_colorkey']($p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]));
					$pyjs['track']['lineno']=477;
					$p['getattr']($m['Treat'], 'images')['__setitem__']('Bonus', $m['pygame']['Surface']($p['tuple']([$constant_int_15, $constant_int_15])));
					$pyjs['track']['lineno']=478;
					$m['pygame']['draw']['circle']($p['getattr']($m['Treat'], 'images')['__getitem__']('Bonus'), $p['tuple']([$constant_int_255, $constant_int_0, $constant_int_0]), $p['tuple']([$constant_int_7, $constant_int_10]), $constant_int_5, $constant_int_0);
					$pyjs['track']['lineno']=479;
					$m['pygame']['draw']['arc']($p['getattr']($m['Treat'], 'images')['__getitem__']('Bonus'), $p['tuple']([$constant_int_0, $constant_int_255, $constant_int_0]), $p['tuple']([(typeof ($usub10=$constant_int_7)=='number'?
						-$usub10:
						$p['op_usub']($usub10)), $constant_int_0, $constant_int_15, $constant_int_15]), $constant_int_0, $constant_int_1, $constant_int_1);
					$pyjs['track']['lineno']=480;
					$p['getattr']($m['Treat'], 'images')['__getitem__']('Bonus')['set_colorkey']($p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]));
					$pyjs['track']['lineno']=481;
					$p['getattr']($m['Treat'], 'mask')['__setitem__']('Food', $m['pygame']['mask']['from_surface']($p['getattr']($m['Treat'], 'images')['__getitem__']('Food')));
					$pyjs['track']['lineno']=482;
					$p['getattr']($m['Treat'], 'mask')['__setitem__']('Bonus', $m['pygame']['mask']['from_surface']($p['getattr']($m['Treat'], 'images')['__getitem__']('Bonus')));
				}
				$pyjs['track']['lineno']=483;
				placed = false;
				$pyjs['track']['lineno']=484;
				while ($p['bool'](!$p['bool'](placed))) {
					$pyjs['track']['lineno']=485;
					var $tupleassign10 = $p['__ass_unpack']($p['tuple']([$m['random']['randrange']($constant_int_20, $p['__op_sub']($sub41=$p['getattr']($p['getattr'](self, 'matrix'), 'x'),$sub42=$constant_int_20)), $m['random']['randrange']($constant_int_20, $p['__op_sub']($sub43=$p['getattr']($p['getattr'](self, 'matrix'), 'y'),$sub44=$constant_int_20))]), 2, null);
					x = $tupleassign10[0];
					y = $tupleassign10[1];
					$pyjs['track']['lineno']=486;
					var $tupleassign11 = $p['__ass_unpack']($p['tuple']([x, y]), 2, null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', $tupleassign11[0]) : $p['setattr'](self, 'x', $tupleassign11[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', $tupleassign11[1]) : $p['setattr'](self, 'y', $tupleassign11[1]); 
					$pyjs['track']['lineno']=487;
					if ($p['bool'](($p['cmp']($m['random']['random'](), $p['__op_add']($add49=0.1,$add50=(typeof ($div5=matrix['clock']['get_time']())==typeof ($div6=300.0) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_truediv']($div5,$div6)))) == 1))) {
						$pyjs['track']['lineno']=488;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('identity', 'Food') : $p['setattr'](self, 'identity', 'Food'); 
						$pyjs['track']['lineno']=489;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('duration', $m['random']['randrange']($constant_int_800, $constant_int_2000)) : $p['setattr'](self, 'duration', $m['random']['randrange']($constant_int_800, $constant_int_2000)); 
					}
					else {
						$pyjs['track']['lineno']=491;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('identity', 'Bonus') : $p['setattr'](self, 'identity', 'Bonus'); 
						$pyjs['track']['lineno']=492;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('duration', $m['random']['randrange']($constant_int_400, $constant_int_800)) : $p['setattr'](self, 'duration', $m['random']['randrange']($constant_int_400, $constant_int_800)); 
					}
					$pyjs['track']['lineno']=493;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('duration', (typeof ($floordiv15=$p['getattr'](self, 'duration'))==typeof ($floordiv16=$p['getattr'](matrix, 'level')) && typeof $floordiv15=='number' && $floordiv16 !== 0?
						Math['floor']($floordiv15/$floordiv16):
						$p['op_floordiv']($floordiv15,$floordiv16))) : $p['setattr'](self, 'duration', (typeof ($floordiv15=$p['getattr'](self, 'duration'))==typeof ($floordiv16=$p['getattr'](matrix, 'level')) && typeof $floordiv15=='number' && $floordiv16 !== 0?
						Math['floor']($floordiv15/$floordiv16):
						$p['op_floordiv']($floordiv15,$floordiv16))); 
					$pyjs['track']['lineno']=494;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('image', $p['getattr']($m['Treat'], 'images')['__getitem__']($p['getattr'](self, 'identity'))) : $p['setattr'](self, 'image', $p['getattr']($m['Treat'], 'images')['__getitem__']($p['getattr'](self, 'identity'))); 
					$pyjs['track']['lineno']=495;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rect', $pyjs_kwargs_call(self['image'], 'get_rect', null, null, [{'center':$p['tuple']([x, y])}])) : $p['setattr'](self, 'rect', $pyjs_kwargs_call(self['image'], 'get_rect', null, null, [{'center':$p['tuple']([x, y])}])); 
					$pyjs['track']['lineno']=496;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mask', $p['getattr']($m['Treat'], 'mask')['__getitem__']($p['getattr'](self, 'identity'))) : $p['setattr'](self, 'mask', $p['getattr']($m['Treat'], 'mask')['__getitem__']($p['getattr'](self, 'identity'))); 
					$pyjs['track']['lineno']=497;
					disrupt = false;
					$pyjs['track']['lineno']=498;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter20_iter = $p['getattr']($p['getattr'](self, 'matrix'), 'serpent');
					$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
					while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
						serpent = $iter20_nextval['$nextval'];
						$pyjs['track']['lineno']=499;
						if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'matrix'), 'serpent')['__getitem__'](serpent)))) {
							$pyjs['track']['lineno']=500;
							continue;
						}
						$pyjs['track']['lineno']=501;
						if ($p['bool']($m['pygame']['sprite']['spritecollideany'](self, $p['getattr']($p['getattr']($p['getattr'](self, 'matrix'), 'serpent')['__getitem__'](serpent), 'segments')))) {
							$pyjs['track']['lineno']=502;
							disrupt = true;
							$pyjs['track']['lineno']=503;
							break;
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='127001';
					$pyjs['track']['lineno']=504;
					if ($p['bool'](!$p['bool'](disrupt))) {
						$pyjs['track']['lineno']=505;
						placed = true;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['matrix']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=507;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '39dfd32e2e8e6054a7e5a82597170fa8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub45,$sub46;
				$pyjs['track']={'module':'127001', 'lineno':507};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=507;
				$pyjs['track']['lineno']=509;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('duration', $p['__op_sub']($sub45=$p['getattr'](self, 'duration'),$sub46=$constant_int_1)) : $p['setattr'](self, 'duration', $p['__op_sub']($sub45=$p['getattr'](self, 'duration'),$sub46=$constant_int_1)); 
				$pyjs['track']['lineno']=510;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'duration')))) {
					$pyjs['track']['lineno']=511;
					self['matrix']['treat']['remove'](self);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=462;
			var $bases = new Array($p['getattr']($p['getattr']($m['pygame'], 'sprite'), 'Sprite'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Treat', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=514;
		$m['Control'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = '127001';
			$cls_definition['__md5__'] = 'a944e10fbb2556e2730516baa252bbcb';
			$pyjs['track']['lineno']=515;
			$method = $pyjs__bind_method2('__init__', function(matrix) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					matrix = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a944e10fbb2556e2730516baa252bbcb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var font;
				$pyjs['track']={'module':'127001', 'lineno':515};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=515;
				$pyjs['track']['lineno']=516;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('matrix', matrix) : $p['setattr'](self, 'matrix', matrix); 
				$pyjs['track']['lineno']=517;
				$m['pygame']['font']['init']();
				$pyjs['track']['lineno']=518;
				font = $m['pygame']['font']['get_default_font']();
				$pyjs['track']['lineno']=519;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('font', $m['pygame']['font']['Font'](font, $constant_int_24)) : $p['setattr'](self, 'font', $m['pygame']['font']['Font'](font, $constant_int_24)); 
				$pyjs['track']['lineno']=520;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('font2', $m['pygame']['font']['Font'](font, $constant_int_14)) : $p['setattr'](self, 'font2', $m['pygame']['font']['Font'](font, $constant_int_14)); 
				$pyjs['track']['lineno']=521;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('matrix_start', false) : $p['setattr'](self, 'matrix_start', false); 
				$pyjs['track']['lineno']=522;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('quit_request', false) : $p['setattr'](self, 'quit_request', false); 
				$pyjs['track']['lineno']=523;
				$m['pygame']['event']['set_blocked']($p['getattr']($m['pygame'], 'MOUSEMOTION'));
				$pyjs['track']['lineno']=524;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('quit', false) : $p['setattr'](self, 'quit', false); 
				$pyjs['track']['lineno']=525;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pause', true) : $p['setattr'](self, 'pause', true); 
				$pyjs['track']['lineno']=526;
				self['pause_program']('Serpent Duel', 'Click to run/pause', '[r]estart [p]ause [q]uit');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['matrix']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=527;
			$method = $pyjs__bind_method2('pause_program', function(text1, text2, text3) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					text1 = arguments[1];
					text2 = arguments[2];
					text3 = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a944e10fbb2556e2730516baa252bbcb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof text2 == 'undefined') text2=arguments['callee']['__args__'][4][1];
				if (typeof text3 == 'undefined') text3=arguments['callee']['__args__'][5][1];
				var $floordiv26,$floordiv27,$floordiv24,$floordiv25,$floordiv22,$floordiv23,$floordiv20,$floordiv21,text,$floordiv33,$floordiv28,$floordiv29,$sub48,$sub49,$floordiv32,$floordiv35,$floordiv34,$sub47,$sub56,$sub51,$sub50,$floordiv39,$sub60,size,$floordiv37,$floordiv31,$floordiv30,$sub55,$sub54,$sub53,$sub52,$floordiv19,$floordiv18,$floordiv17,$floordiv38,$sub59,$sub58,$floordiv36,$floordiv40,$add51,$add52,$add53,$add54,$sub57;
				$pyjs['track']={'module':'127001', 'lineno':527};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=527;
				$pyjs['track']['lineno']=528;
				self['matrix']['screen']['fill']($p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]));
				$pyjs['track']['lineno']=529;
				text = self['font']['render'](text1, true, $p['tuple']([$constant_int_100, $constant_int_100, $constant_int_100]));
				$pyjs['track']['lineno']=530;
				size = self['font']['size'](text1);
				$pyjs['track']['lineno']=531;
				self['matrix']['screen']['blit'](text, $p['tuple']([$p['__op_sub']($sub47=(typeof ($floordiv17=$p['getattr']($p['getattr'](self, 'matrix'), 'x'))==typeof ($floordiv18=$constant_int_2) && typeof $floordiv17=='number' && $floordiv18 !== 0?
					Math['floor']($floordiv17/$floordiv18):
					$p['op_floordiv']($floordiv17,$floordiv18)),$sub48=(typeof ($floordiv19=size['__getitem__']($constant_int_0))==typeof ($floordiv20=$constant_int_2) && typeof $floordiv19=='number' && $floordiv20 !== 0?
					Math['floor']($floordiv19/$floordiv20):
					$p['op_floordiv']($floordiv19,$floordiv20))), $p['__op_sub']($sub51=$p['__op_sub']($sub49=(typeof ($floordiv21=$p['getattr']($p['getattr'](self, 'matrix'), 'y'))==typeof ($floordiv22=$constant_int_2) && typeof $floordiv21=='number' && $floordiv22 !== 0?
					Math['floor']($floordiv21/$floordiv22):
					$p['op_floordiv']($floordiv21,$floordiv22)),$sub50=(typeof ($floordiv23=size['__getitem__']($constant_int_1))==typeof ($floordiv24=$constant_int_2) && typeof $floordiv23=='number' && $floordiv24 !== 0?
					Math['floor']($floordiv23/$floordiv24):
					$p['op_floordiv']($floordiv23,$floordiv24))),$sub52=$constant_int_12)]));
				$pyjs['track']['lineno']=532;
				if ($p['bool'](text2)) {
					$pyjs['track']['lineno']=533;
					text = self['font2']['render'](text2, true, $p['tuple']([$constant_int_100, $constant_int_100, $constant_int_100]));
					$pyjs['track']['lineno']=534;
					size = self['font2']['size'](text2);
					$pyjs['track']['lineno']=535;
					self['matrix']['screen']['blit'](text, $p['tuple']([$p['__op_sub']($sub53=(typeof ($floordiv25=$p['getattr']($p['getattr'](self, 'matrix'), 'x'))==typeof ($floordiv26=$constant_int_2) && typeof $floordiv25=='number' && $floordiv26 !== 0?
						Math['floor']($floordiv25/$floordiv26):
						$p['op_floordiv']($floordiv25,$floordiv26)),$sub54=(typeof ($floordiv27=size['__getitem__']($constant_int_0))==typeof ($floordiv28=$constant_int_2) && typeof $floordiv27=='number' && $floordiv28 !== 0?
						Math['floor']($floordiv27/$floordiv28):
						$p['op_floordiv']($floordiv27,$floordiv28))), $p['__op_add']($add51=$p['__op_sub']($sub55=(typeof ($floordiv29=$p['getattr']($p['getattr'](self, 'matrix'), 'y'))==typeof ($floordiv30=$constant_int_2) && typeof $floordiv29=='number' && $floordiv30 !== 0?
						Math['floor']($floordiv29/$floordiv30):
						$p['op_floordiv']($floordiv29,$floordiv30)),$sub56=(typeof ($floordiv31=size['__getitem__']($constant_int_1))==typeof ($floordiv32=$constant_int_2) && typeof $floordiv31=='number' && $floordiv32 !== 0?
						Math['floor']($floordiv31/$floordiv32):
						$p['op_floordiv']($floordiv31,$floordiv32))),$add52=$constant_int_25)]));
				}
				$pyjs['track']['lineno']=536;
				if ($p['bool'](text3)) {
					$pyjs['track']['lineno']=537;
					text = self['font2']['render'](text3, true, $p['tuple']([$constant_int_100, $constant_int_100, $constant_int_100]));
					$pyjs['track']['lineno']=538;
					size = self['font2']['size'](text3);
					$pyjs['track']['lineno']=539;
					self['matrix']['screen']['blit'](text, $p['tuple']([$p['__op_sub']($sub57=(typeof ($floordiv33=$p['getattr']($p['getattr'](self, 'matrix'), 'x'))==typeof ($floordiv34=$constant_int_2) && typeof $floordiv33=='number' && $floordiv34 !== 0?
						Math['floor']($floordiv33/$floordiv34):
						$p['op_floordiv']($floordiv33,$floordiv34)),$sub58=(typeof ($floordiv35=size['__getitem__']($constant_int_0))==typeof ($floordiv36=$constant_int_2) && typeof $floordiv35=='number' && $floordiv36 !== 0?
						Math['floor']($floordiv35/$floordiv36):
						$p['op_floordiv']($floordiv35,$floordiv36))), $p['__op_add']($add53=$p['__op_sub']($sub59=(typeof ($floordiv37=$p['getattr']($p['getattr'](self, 'matrix'), 'y'))==typeof ($floordiv38=$constant_int_2) && typeof $floordiv37=='number' && $floordiv38 !== 0?
						Math['floor']($floordiv37/$floordiv38):
						$p['op_floordiv']($floordiv37,$floordiv38)),$sub60=(typeof ($floordiv39=size['__getitem__']($constant_int_1))==typeof ($floordiv40=$constant_int_2) && typeof $floordiv39=='number' && $floordiv40 !== 0?
						Math['floor']($floordiv39/$floordiv40):
						$p['op_floordiv']($floordiv39,$floordiv40))),$add54=$constant_int_40)]));
				}
				$pyjs['track']['lineno']=540;
				$m['pygame']['display']['flip']();
				$pyjs['track']['lineno']=541;
				$p['getattr'](self, 'matrix')['__is_instance__'] && typeof $p['getattr'](self, 'matrix')['__setattr__'] == 'function' ? $p['getattr'](self, 'matrix')['__setattr__']('active', false) : $p['setattr']($p['getattr'](self, 'matrix'), 'active', false); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['text1'],['text2', null],['text3', null]]);
			$cls_definition['pause_program'] = $method;
			$pyjs['track']['lineno']=542;
			$method = $pyjs__bind_method2('matrix_control', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a944e10fbb2556e2730516baa252bbcb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'127001', 'lineno':542};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=542;
				$pyjs['track']['lineno']=543;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'pause')))) {
					$pyjs['track']['lineno']=544;
					self['pause_program']('Serpent Duel', 'Click to run/pause', '[r]estart [p]ause [q]uit');
					$pyjs['track']['lineno']=545;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pause', true) : $p['setattr'](self, 'pause', true); 
				}
				else {
					$pyjs['track']['lineno']=547;
					if ($p['bool']($p['getattr'](self, 'matrix_start'))) {
						$pyjs['track']['lineno']=548;
						self['matrix']['clear_screen']();
						$pyjs['track']['lineno']=549;
						self['matrix']['update_screen']();
						$pyjs['track']['lineno']=550;
						$p['getattr'](self, 'matrix')['__is_instance__'] && typeof $p['getattr'](self, 'matrix')['__setattr__'] == 'function' ? $p['getattr'](self, 'matrix')['__setattr__']('active', true) : $p['setattr']($p['getattr'](self, 'matrix'), 'active', true); 
					}
					else {
						$pyjs['track']['lineno']=552;
						self['matrix']['start']();
						$pyjs['track']['lineno']=553;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('matrix_start', true) : $p['setattr'](self, 'matrix_start', true); 
					}
					$pyjs['track']['lineno']=554;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('quit_request', false) : $p['setattr'](self, 'quit_request', false); 
					$pyjs['track']['lineno']=555;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pause', false) : $p['setattr'](self, 'pause', false); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['matrix_control'] = $method;
			$pyjs['track']['lineno']=556;
			$method = $pyjs__bind_method2('check_control', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a944e10fbb2556e2730516baa252bbcb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter21_idx,$iter21_nextval,$iter21_type,$iter21_iter,$iter21_array,$pyjs__trackstack_size_1,event;
				$pyjs['track']={'module':'127001', 'lineno':556};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=556;
				$pyjs['track']['lineno']=557;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter21_iter = $m['pygame']['event']['get']();
				$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
				while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
					event = $iter21_nextval['$nextval'];
					$pyjs['track']['lineno']=558;
					if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), $p['getattr']($m['pygame'], 'MOUSEBUTTONDOWN')))) {
						$pyjs['track']['lineno']=559;
						if ($p['bool']($p['op_eq']($p['getattr'](event, 'button'), $constant_int_1))) {
							$pyjs['track']['lineno']=560;
							self['matrix_control']();
						}
					}
					else if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), $p['getattr']($m['pygame'], 'KEYDOWN')))) {
						$pyjs['track']['lineno']=562;
						if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), $p['getattr']($m['pygame'], 'K_p')))) {
							$pyjs['track']['lineno']=563;
							self['matrix_control']();
						}
						else if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), $p['getattr']($m['pygame'], 'K_r')))) {
							$pyjs['track']['lineno']=565;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pause', false) : $p['setattr'](self, 'pause', false); 
							$pyjs['track']['lineno']=566;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('quit_request', false) : $p['setattr'](self, 'quit_request', false); 
							$pyjs['track']['lineno']=567;
							self['matrix']['start']();
						}
						else if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), $p['getattr']($m['pygame'], 'K_q')))) {
							$pyjs['track']['lineno']=569;
							self['pause_program']('Serpent Duel', 'Quit (y/n)?');
							$pyjs['track']['lineno']=570;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pause', true) : $p['setattr'](self, 'pause', true); 
							$pyjs['track']['lineno']=571;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('quit_request', true) : $p['setattr'](self, 'quit_request', true); 
						}
						else if ($p['bool']($p['tuple']([$p['getattr']($m['pygame'], 'K_y'), $p['getattr']($m['pygame'], 'K_n')])['__contains__']($p['getattr'](event, 'key')))) {
							$pyjs['track']['lineno']=573;
							if ($p['bool']($p['getattr'](self, 'quit_request'))) {
								$pyjs['track']['lineno']=574;
								if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), $p['getattr']($m['pygame'], 'K_n')))) {
									$pyjs['track']['lineno']=575;
									self['matrix_control']();
								}
								else {
									$pyjs['track']['lineno']=577;
									self['matrix']['screen']['fill']($p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]));
									$pyjs['track']['lineno']=578;
									$m['pygame']['display']['flip']();
									$pyjs['track']['lineno']=579;
									$m['pygame']['time']['delay']($constant_int_10);
									$pyjs['track']['lineno']=580;
									$m['pygame']['quit']();
									$pyjs['track']['lineno']=581;
									self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('quit', true) : $p['setattr'](self, 'quit', true); 
								}
							}
						}
					}
					else if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), $p['getattr']($m['pygame'], 'QUIT')))) {
						$pyjs['track']['lineno']=583;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('quit', true) : $p['setattr'](self, 'quit', true); 
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='127001';
				$pyjs['track']['lineno']=584;
				$pyjs['track']['lineno']=584;
				var $pyjs__ret = $p['getattr'](self, 'quit');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['check_control'] = $method;
			$pyjs['track']['lineno']=514;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Control', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=587;
		$m['setup'] = function(x, y, screen) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 3, arguments['length']);
			if (typeof x == 'undefined') x=arguments['callee']['__args__'][2][1];
			if (typeof y == 'undefined') y=arguments['callee']['__args__'][3][1];
			if (typeof screen == 'undefined') screen=arguments['callee']['__args__'][4][1];
			var control,$iter23_type,$iter22_array,$iter23_idx,$iter23_iter,$iter22_nextval,$iter22_idx,matrix,$iter23_nextval,$iter23_array,$iter22_type,background,$pyjs__trackstack_size_1,line,$iter22_iter;
			$pyjs['track']={'module':'127001','lineno':587};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='127001';
			$pyjs['track']['lineno']=587;
			$pyjs['track']['lineno']=588;
			$m['pygame']['display']['init']();
			$pyjs['track']['lineno']=589;
			$m['pygame']['display']['set_caption']('Serpent Duel');
			$pyjs['track']['lineno']=590;
			if ($p['bool'](!$p['bool'](screen))) {
				$pyjs['track']['lineno']=591;
				screen = $m['pygame']['display']['set_mode']($p['tuple']([x, y]));
			}
			$pyjs['track']['lineno']=592;
			background = $m['pygame']['Surface']($p['tuple']([x, y]));
			$pyjs['track']['lineno']=593;
			background['fill']($p['tuple']([$constant_int_50, $constant_int_50, $constant_int_50]));
			$pyjs['track']['lineno']=594;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter22_iter = $p['range']($constant_int_0, $constant_int_500, $constant_int_25);
			$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
			while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
				line = $iter22_nextval['$nextval'];
				$pyjs['track']['lineno']=595;
				$m['pygame']['draw']['line'](background, $p['tuple']([$constant_int_43, $constant_int_50, $constant_int_58]), $p['tuple']([$constant_int_0, line]), $p['tuple']([$constant_int_500, line]), $constant_int_1);
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='127001';
			$pyjs['track']['lineno']=596;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter23_iter = $p['range']($constant_int_0, $constant_int_500, $constant_int_25);
			$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
			while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
				line = $iter23_nextval['$nextval'];
				$pyjs['track']['lineno']=597;
				$m['pygame']['draw']['line'](background, $p['tuple']([$constant_int_43, $constant_int_50, $constant_int_58]), $p['tuple']([line, $constant_int_0]), $p['tuple']([line, $constant_int_500]), $constant_int_1);
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='127001';
			$pyjs['track']['lineno']=598;
			matrix = $m['Matrix'](x, y, screen, background);
			$pyjs['track']['lineno']=599;
			control = $m['Control'](matrix);
			$pyjs['track']['lineno']=600;
			$pyjs['track']['lineno']=600;
			var $pyjs__ret = $p['tuple']([matrix, control]);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['setup']['__name__'] = 'setup';

		$m['setup']['__bind_type__'] = 0;
		$m['setup']['__args__'] = [null,null,['x', $constant_int_500],['y', $constant_int_500],['screen', null]];
		$pyjs['track']['lineno']=603;
		$m['program_exec'] = function(matrix, control) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var quit;
			$pyjs['track']={'module':'127001','lineno':603};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='127001';
			$pyjs['track']['lineno']=603;
			$pyjs['track']['lineno']=604;
			matrix['__is_instance__'] && typeof matrix['__setattr__'] == 'function' ? matrix['__setattr__']('update_rect', $p['list']([])) : $p['setattr'](matrix, 'update_rect', $p['list']([])); 
			$pyjs['track']['lineno']=605;
			matrix['update']();
			$pyjs['track']['lineno']=606;
			$m['pygame']['display']['update']($p['getattr'](matrix, 'update_rect'));
			$pyjs['track']['lineno']=607;
			matrix['clock']['tick']($constant_int_30);
			$pyjs['track']['lineno']=608;
			quit = control['check_control']();
			$pyjs['track']['lineno']=609;
			$pyjs['track']['lineno']=609;
			var $pyjs__ret = quit;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['program_exec']['__name__'] = 'program_exec';

		$m['program_exec']['__bind_type__'] = 0;
		$m['program_exec']['__args__'] = [null,null,['matrix'],['control']];
		$pyjs['track']['lineno']=612;
		$m['run'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'127001','lineno':612};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='127001';
			$pyjs['track']['lineno']=612;
			$pyjs['track']['lineno']=613;
			$m['program_exec']((typeof matrix == "undefined"?$m['matrix']:matrix), (typeof control == "undefined"?$m['control']:control));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['run']['__name__'] = 'run';

		$m['run']['__bind_type__'] = 0;
		$m['run']['__args__'] = [null,null];
		$pyjs['track']['lineno']=616;
		var $tupleassign12 = $p['__ass_unpack']($p['tuple']([null, null]), 2, null);
		$m['matrix'] = $tupleassign12[0];
		$m['control'] = $tupleassign12[1];
		$pyjs['track']['lineno']=619;
		$m['main'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var images;
			$pyjs['track']={'module':'127001','lineno':619};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='127001';
			$pyjs['track']['lineno']=619;
			$pyjs['track']['lineno']=620;
			$pyjs['track']['lineno']=621;
			var $tupleassign13 = $p['__ass_unpack']($m['setup']($constant_int_400, $constant_int_300), 2, null);
			$m['matrix'] = $tupleassign13[0];
			$m['control'] = $tupleassign13[1];
			$pyjs['track']['lineno']=622;
			images = $p['list'](['../../data/segment1.png', '../../data/segment2.png']);
			$pyjs['track']['lineno']=623;
			$m['pygame']['display']['setup']($m['run'], images);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['main']['__name__'] = 'main';

		$m['main']['__bind_type__'] = 0;
		$m['main']['__args__'] = [null,null];
		$pyjs['track']['lineno']=626;
		$m['main2'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var control,quit,matrix;
			$pyjs['track']={'module':'127001','lineno':626};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='127001';
			$pyjs['track']['lineno']=626;
			$pyjs['track']['lineno']=627;
			var $tupleassign14 = $p['__ass_unpack']($m['setup']($constant_int_400, $constant_int_300), 2, null);
			matrix = $tupleassign14[0];
			control = $tupleassign14[1];
			$pyjs['track']['lineno']=628;
			quit = false;
			$pyjs['track']['lineno']=629;
			while ($p['bool'](!$p['bool'](quit))) {
				$pyjs['track']['lineno']=630;
				quit = $m['program_exec'](matrix, control);
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['main2']['__name__'] = 'main2';

		$m['main2']['__bind_type__'] = 0;
		$m['main2']['__args__'] = [null,null];
		$pyjs['track']['lineno']=633;
		if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
			$pyjs['track']['lineno']=634;
			if ($p['bool']($m['js'])) {
				$pyjs['track']['lineno']=635;
				$m['main']();
			}
			else {
				$pyjs['track']['lineno']=637;
				$m['main2']();
			}
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end 127001 */


/* end module: 127001 */


/*
PYJS_DEPS: ['os', 'sys', 'pygame', 'pyj2d', 'pyjsdl', 'random']
*/
