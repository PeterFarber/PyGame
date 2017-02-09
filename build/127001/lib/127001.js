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
		$m.__track_lines__[1] = '127001.py, line 1:\n    import pygame';


		$pyjs['track']['module']='127001';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=1;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['pygame'] = $p['___import___']('pygame', null);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end 127001 */


/* end module: 127001 */


/*
PYJS_DEPS: ['pygame']
*/
