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
		$m.__track_lines__[1] = '127001.py, line 1:\n    import pyjsdl as pygame';
		$m.__track_lines__[3] = '127001.py, line 3:\n    BLACK = (  0,   0,   0)';
		$m.__track_lines__[4] = '127001.py, line 4:\n    WHITE = (255, 255, 255)';
		$m.__track_lines__[5] = '127001.py, line 5:\n    BLUE =  (  0,   0, 255)';
		$m.__track_lines__[6] = '127001.py, line 6:\n    GREEN = (  0, 255,   0)';
		$m.__track_lines__[7] = '127001.py, line 7:\n    RED =   (255,   0,   0)';
		$m.__track_lines__[9] = '127001.py, line 9:\n    pygame.init()';
		$m.__track_lines__[11] = '127001.py, line 11:\n    screen = pygame.display.set_mode([640,480])';
		$m.__track_lines__[13] = '127001.py, line 13:\n    screen.fill(WHITE)';
		$m.__track_lines__[15] = '127001.py, line 15:\n    pygame.draw.rect(screen, BLACK, [150, 10, 50, 20])';
		$m.__track_lines__[17] = '127001.py, line 17:\n    pygame.display.flip()';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_640 = new $p['int'](640);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_480 = new $p['int'](480);
		var $constant_int_150 = new $p['int'](150);
		var $constant_int_255 = new $p['int'](255);
		$pyjs['track']['module']='127001';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=1;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['pygame'] = $p['___import___']('pyjsdl', null, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=3;
		$m['BLACK'] = $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]);
		$pyjs['track']['lineno']=4;
		$m['WHITE'] = $p['tuple']([$constant_int_255, $constant_int_255, $constant_int_255]);
		$pyjs['track']['lineno']=5;
		$m['BLUE'] = $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_255]);
		$pyjs['track']['lineno']=6;
		$m['GREEN'] = $p['tuple']([$constant_int_0, $constant_int_255, $constant_int_0]);
		$pyjs['track']['lineno']=7;
		$m['RED'] = $p['tuple']([$constant_int_255, $constant_int_0, $constant_int_0]);
		$pyjs['track']['lineno']=9;
		$m['pygame']['init']();
		$pyjs['track']['lineno']=11;
		$m['screen'] = $m['pygame']['display']['set_mode']($p['list']([$constant_int_640, $constant_int_480]));
		$pyjs['track']['lineno']=13;
		$m['screen']['fill']($m['WHITE']);
		$pyjs['track']['lineno']=15;
		$m['pygame']['draw']['rect']($m['screen'], $m['BLACK'], $p['list']([$constant_int_150, $constant_int_10, $constant_int_50, $constant_int_20]));
		$pyjs['track']['lineno']=17;
		$m['pygame']['display']['flip']();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end 127001 */


/* end module: 127001 */


/*
PYJS_DEPS: ['pyjsdl']
*/
