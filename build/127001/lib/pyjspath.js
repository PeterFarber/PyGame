/* start module: pyjspath */
$pyjs['loaded_modules']['pyjspath'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjspath']['__was_initialized__']) return $pyjs['loaded_modules']['pyjspath'];
	var $m = $pyjs['loaded_modules']['pyjspath'];
	$m['__repr__'] = function() { return '<module: pyjspath>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjspath';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'pyjspath.py, line 1:\n    """Common operations on Posix pathnames.';
		$m.__track_lines__[13] = 'pyjspath.py, line 13:\n    import os';
		$m.__track_lines__[14] = 'pyjspath.py, line 14:\n    import sys';
		$m.__track_lines__[15] = 'pyjspath.py, line 15:\n    import stat';
		$m.__track_lines__[16] = 'pyjspath.py, line 16:\n    import genericpath';
		$m.__track_lines__[17] = 'pyjspath.py, line 17:\n    from genericpath import *';
		$m.__track_lines__[19] = 'pyjspath.py, line 19:\n    __all__ = ["normcase","isabs","join","splitdrive","split","splitext",';
		$m.__track_lines__[28] = "pyjspath.py, line 28:\n    curdir = '.'";
		$m.__track_lines__[29] = "pyjspath.py, line 29:\n    pardir = '..'";
		$m.__track_lines__[30] = "pyjspath.py, line 30:\n    extsep = '.'";
		$m.__track_lines__[31] = "pyjspath.py, line 31:\n    sep = '/'";
		$m.__track_lines__[32] = "pyjspath.py, line 32:\n    pathsep = ':'";
		$m.__track_lines__[33] = "pyjspath.py, line 33:\n    defpath = ':/bin:/usr/bin'";
		$m.__track_lines__[34] = 'pyjspath.py, line 34:\n    altsep = None';
		$m.__track_lines__[35] = "pyjspath.py, line 35:\n    devnull = '/dev/null'";
		$m.__track_lines__[42] = 'pyjspath.py, line 42:\n    def normcase(s):';
		$m.__track_lines__[44] = 'pyjspath.py, line 44:\n    return s';
		$m.__track_lines__[50] = 'pyjspath.py, line 50:\n    def isabs(s):';
		$m.__track_lines__[52] = "pyjspath.py, line 52:\n    return s.startswith('/')";
		$m.__track_lines__[59] = 'pyjspath.py, line 59:\n    def join(a, *p):';
		$m.__track_lines__[63] = 'pyjspath.py, line 63:\n    path = a';
		$m.__track_lines__[64] = 'pyjspath.py, line 64:\n    for b in p:';
		$m.__track_lines__[65] = "pyjspath.py, line 65:\n    if b.startswith('/'):";
		$m.__track_lines__[66] = 'pyjspath.py, line 66:\n    path = b';
		$m.__track_lines__[68] = 'pyjspath.py, line 68:\n    path +=  b';
		$m.__track_lines__[70] = "pyjspath.py, line 70:\n    path += '/' + b";
		$m.__track_lines__[71] = 'pyjspath.py, line 71:\n    return path';
		$m.__track_lines__[79] = 'pyjspath.py, line 79:\n    def split(p):';
		$m.__track_lines__[82] = "pyjspath.py, line 82:\n    i = p.rfind('/') + 1";
		$m.__track_lines__[83] = 'pyjspath.py, line 83:\n    head, tail = p[:i], p[i:]';
		$m.__track_lines__[84] = "pyjspath.py, line 84:\n    if head and head != '/'*len(head):";
		$m.__track_lines__[85] = "pyjspath.py, line 85:\n    head = head.rstrip('/')";
		$m.__track_lines__[86] = 'pyjspath.py, line 86:\n    return head, tail';
		$m.__track_lines__[94] = 'pyjspath.py, line 94:\n    def splitext(p):';
		$m.__track_lines__[95] = 'pyjspath.py, line 95:\n    return genericpath._splitext(p, sep, altsep, extsep)';
		$m.__track_lines__[100] = 'pyjspath.py, line 100:\n    def splitdrive(p):';
		$m.__track_lines__[103] = "pyjspath.py, line 103:\n    return '', p";
		$m.__track_lines__[108] = 'pyjspath.py, line 108:\n    def basename(p):';
		$m.__track_lines__[110] = "pyjspath.py, line 110:\n    i = p.rfind('/') + 1";
		$m.__track_lines__[111] = 'pyjspath.py, line 111:\n    return p[i:]';
		$m.__track_lines__[116] = 'pyjspath.py, line 116:\n    def dirname(p):';
		$m.__track_lines__[118] = "pyjspath.py, line 118:\n    i = p.rfind('/') + 1";
		$m.__track_lines__[119] = 'pyjspath.py, line 119:\n    head = p[:i]';
		$m.__track_lines__[120] = "pyjspath.py, line 120:\n    if head and head != '/'*len(head):";
		$m.__track_lines__[121] = "pyjspath.py, line 121:\n    head = head.rstrip('/')";
		$m.__track_lines__[122] = 'pyjspath.py, line 122:\n    return head';
		$m.__track_lines__[124] = 'pyjspath.py, line 124:\n    def samestat(s1, s2):';
		$m.__track_lines__[126] = 'pyjspath.py, line 126:\n    return s1.st_ino == s2.st_ino and \\';
		$m.__track_lines__[129] = 'pyjspath.py, line 129:\n    def normpath(path):';
		$m.__track_lines__[131] = "pyjspath.py, line 131:\n    slash, dot = ('/', '.')";
		$m.__track_lines__[132] = "pyjspath.py, line 132:\n    if path == '':";
		$m.__track_lines__[133] = 'pyjspath.py, line 133:\n    return dot';
		$m.__track_lines__[134] = "pyjspath.py, line 134:\n    initial_slashes = path.startswith('/')";
		$m.__track_lines__[137] = 'pyjspath.py, line 137:\n    if (initial_slashes and';
		$m.__track_lines__[139] = 'pyjspath.py, line 139:\n    initial_slashes = 2';
		$m.__track_lines__[140] = "pyjspath.py, line 140:\n    comps = path.split('/')";
		$m.__track_lines__[141] = 'pyjspath.py, line 141:\n    new_comps = []';
		$m.__track_lines__[142] = 'pyjspath.py, line 142:\n    for comp in comps:';
		$m.__track_lines__[143] = "pyjspath.py, line 143:\n    if comp in ('', '.'):";
		$m.__track_lines__[144] = 'pyjspath.py, line 144:\n    continue';
		$m.__track_lines__[145] = "pyjspath.py, line 145:\n    if (comp != '..' or (not initial_slashes and not new_comps) or";
		$m.__track_lines__[147] = 'pyjspath.py, line 147:\n    new_comps.append(comp)';
		$m.__track_lines__[149] = 'pyjspath.py, line 149:\n    new_comps.pop()';
		$m.__track_lines__[150] = 'pyjspath.py, line 150:\n    comps = new_comps';
		$m.__track_lines__[151] = 'pyjspath.py, line 151:\n    path = slash.join(comps)';
		$m.__track_lines__[152] = 'pyjspath.py, line 152:\n    if initial_slashes:';
		$m.__track_lines__[153] = 'pyjspath.py, line 153:\n    path = slash*initial_slashes + path';
		$m.__track_lines__[154] = 'pyjspath.py, line 154:\n    return path or dot';
		$m.__track_lines__[156] = 'pyjspath.py, line 156:\n    def abspath(path):';
		$m.__track_lines__[158] = 'pyjspath.py, line 158:\n    return normpath(path)';
		$m.__track_lines__[160] = 'pyjspath.py, line 160:\n    def realpath(filename):';
		$m.__track_lines__[161] = 'pyjspath.py, line 161:\n    return abspath(filename)';
		$m.__track_lines__[169] = 'pyjspath.py, line 169:\n    def islink(path):';
		$m.__track_lines__[170] = 'pyjspath.py, line 170:\n    raise NotImplemented()';
		$m.__track_lines__[172] = 'pyjspath.py, line 172:\n    def lexists(path):';
		$m.__track_lines__[173] = 'pyjspath.py, line 173:\n    raise NotImplemented()';
		$m.__track_lines__[175] = 'pyjspath.py, line 175:\n    def samefile(f1, f2):';
		$m.__track_lines__[176] = 'pyjspath.py, line 176:\n    raise NotImplemented()';
		$m.__track_lines__[178] = 'pyjspath.py, line 178:\n    def sameopenfile(fp1, fp2):';
		$m.__track_lines__[179] = 'pyjspath.py, line 179:\n    raise NotImplemented()';
		$m.__track_lines__[181] = 'pyjspath.py, line 181:\n    def ismount(path):';
		$m.__track_lines__[182] = 'pyjspath.py, line 182:\n    raise NotImplemented()';
		$m.__track_lines__[184] = 'pyjspath.py, line 184:\n    def walk(top, func, arg):';
		$m.__track_lines__[185] = 'pyjspath.py, line 185:\n    raise NotImplemented()';
		$m.__track_lines__[187] = 'pyjspath.py, line 187:\n    def expanduser(path):';
		$m.__track_lines__[188] = 'pyjspath.py, line 188:\n    raise NotImplemented()';
		$m.__track_lines__[190] = 'pyjspath.py, line 190:\n    def expandvars(path):';
		$m.__track_lines__[191] = 'pyjspath.py, line 191:\n    raise NotImplemented()';
		$m.__track_lines__[193] = "pyjspath.py, line 193:\n    supports_unicode_filenames = (sys.platform == 'darwin')";
		$m.__track_lines__[195] = 'pyjspath.py, line 195:\n    def relpath(path, start=curdir):';
		$m.__track_lines__[196] = 'pyjspath.py, line 196:\n    raise NotImplemented()';

		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$pyjs['track']['module']='pyjspath';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=13;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['os'] = $p['___import___']('os', null);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=14;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=15;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['stat'] = $p['___import___']('stat', null);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=16;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['genericpath'] = $p['___import___']('genericpath', null);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=17;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=19;
		$m['__all__'] = $p['list'](['normcase', 'isabs', 'join', 'splitdrive', 'split', 'splitext', 'basename', 'dirname', 'commonprefix', 'getsize', 'getmtime', 'getatime', 'getctime', 'islink', 'exists', 'lexists', 'isdir', 'isfile', 'ismount', 'walk', 'expanduser', 'expandvars', 'normpath', 'abspath', 'samefile', 'sameopenfile', 'samestat', 'curdir', 'pardir', 'sep', 'pathsep', 'defpath', 'altsep', 'extsep', 'devnull', 'realpath', 'supports_unicode_filenames', 'relpath']);
		$pyjs['track']['lineno']=28;
		$m['curdir'] = '.';
		$pyjs['track']['lineno']=29;
		$m['pardir'] = '..';
		$pyjs['track']['lineno']=30;
		$m['extsep'] = '.';
		$pyjs['track']['lineno']=31;
		$m['sep'] = '/';
		$pyjs['track']['lineno']=32;
		$m['pathsep'] = ':';
		$pyjs['track']['lineno']=33;
		$m['defpath'] = ':/bin:/usr/bin';
		$pyjs['track']['lineno']=34;
		$m['altsep'] = null;
		$pyjs['track']['lineno']=35;
		$m['devnull'] = '/dev/null';
		$pyjs['track']['lineno']=42;
		$m['normcase'] = function(s) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjspath','lineno':42};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=42;
			$pyjs['track']['lineno']=44;
			$pyjs['track']['lineno']=44;
			var $pyjs__ret = s;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['normcase']['__name__'] = 'normcase';

		$m['normcase']['__bind_type__'] = 0;
		$m['normcase']['__args__'] = [null,null,['s']];
		$pyjs['track']['lineno']=50;
		$m['isabs'] = function(s) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjspath','lineno':50};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=50;
			$pyjs['track']['lineno']=52;
			$pyjs['track']['lineno']=52;
			var $pyjs__ret = s['startswith']('/');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['isabs']['__name__'] = 'isabs';

		$m['isabs']['__bind_type__'] = 0;
		$m['isabs']['__args__'] = [null,null,['s']];
		$pyjs['track']['lineno']=59;
		$m['join'] = function(a) {
			if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
			var p = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			var b,$iter1_nextval,$iter1_type,$or2,$add3,$iter1_iter,$add2,$add5,$add1,$add6,$iter1_array,$add4,$pyjs__trackstack_size_1,path,$or1,$iter1_idx;
			$pyjs['track']={'module':'pyjspath','lineno':59};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=59;
			$pyjs['track']['lineno']=63;
			path = a;
			$pyjs['track']['lineno']=64;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = p;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				b = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=65;
				if ($p['bool'](b['startswith']('/'))) {
					$pyjs['track']['lineno']=66;
					path = b;
				}
				else if ($p['bool'](($p['bool']($or1=$p['op_eq'](path, ''))?$or1:path['endswith']('/')))) {
					$pyjs['track']['lineno']=68;
					path = $p['__op_add']($add1=path,$add2=b);
				}
				else {
					$pyjs['track']['lineno']=70;
					path = $p['__op_add']($add5=path,$add6=$p['__op_add']($add3='/',$add4=b));
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=71;
			$pyjs['track']['lineno']=71;
			var $pyjs__ret = path;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['join']['__name__'] = 'join';

		$m['join']['__bind_type__'] = 0;
		$m['join']['__args__'] = ['p',null,['a']];
		$pyjs['track']['lineno']=79;
		$m['$$split'] = function(p) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var head,i,$and1,$and2,tail,$add7,$add8,$mul2,$mul1;
			$pyjs['track']={'module':'pyjspath','lineno':79};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=79;
			$pyjs['track']['lineno']=82;
			i = $p['__op_add']($add7=p['rfind']('/'),$add8=$constant_int_1);
			$pyjs['track']['lineno']=83;
			var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$p['__getslice'](p, 0, i), $p['__getslice'](p, i, null)]), 2, null);
			head = $tupleassign1[0];
			tail = $tupleassign1[1];
			$pyjs['track']['lineno']=84;
			if ($p['bool'](($p['bool']($and1=head)?!$p['op_eq'](head, (typeof ($mul1='/')==typeof ($mul2=$p['len'](head)) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2))):$and1))) {
				$pyjs['track']['lineno']=85;
				head = head['rstrip']('/');
			}
			$pyjs['track']['lineno']=86;
			$pyjs['track']['lineno']=86;
			var $pyjs__ret = $p['tuple']([head, tail]);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['$$split']['__name__'] = 'split';

		$m['$$split']['__bind_type__'] = 0;
		$m['$$split']['__args__'] = [null,null,['p']];
		$pyjs['track']['lineno']=94;
		$m['splitext'] = function(p) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjspath','lineno':94};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=94;
			$pyjs['track']['lineno']=95;
			$pyjs['track']['lineno']=95;
			var $pyjs__ret = $m['genericpath']['_splitext'](p, $m['sep'], $m['altsep'], $m['extsep']);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['splitext']['__name__'] = 'splitext';

		$m['splitext']['__bind_type__'] = 0;
		$m['splitext']['__args__'] = [null,null,['p']];
		$pyjs['track']['lineno']=100;
		$m['splitdrive'] = function(p) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjspath','lineno':100};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=100;
			$pyjs['track']['lineno']=103;
			$pyjs['track']['lineno']=103;
			var $pyjs__ret = $p['tuple'](['', p]);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['splitdrive']['__name__'] = 'splitdrive';

		$m['splitdrive']['__bind_type__'] = 0;
		$m['splitdrive']['__args__'] = [null,null,['p']];
		$pyjs['track']['lineno']=108;
		$m['basename'] = function(p) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var i,$add9,$add10;
			$pyjs['track']={'module':'pyjspath','lineno':108};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=108;
			$pyjs['track']['lineno']=110;
			i = $p['__op_add']($add9=p['rfind']('/'),$add10=$constant_int_1);
			$pyjs['track']['lineno']=111;
			$pyjs['track']['lineno']=111;
			var $pyjs__ret = $p['__getslice'](p, i, null);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['basename']['__name__'] = 'basename';

		$m['basename']['__bind_type__'] = 0;
		$m['basename']['__args__'] = [null,null,['p']];
		$pyjs['track']['lineno']=116;
		$m['dirname'] = function(p) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var head,i,$and3,$and4,$add11,$add12,$mul4,$mul3;
			$pyjs['track']={'module':'pyjspath','lineno':116};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=116;
			$pyjs['track']['lineno']=118;
			i = $p['__op_add']($add11=p['rfind']('/'),$add12=$constant_int_1);
			$pyjs['track']['lineno']=119;
			head = $p['__getslice'](p, 0, i);
			$pyjs['track']['lineno']=120;
			if ($p['bool'](($p['bool']($and3=head)?!$p['op_eq'](head, (typeof ($mul3='/')==typeof ($mul4=$p['len'](head)) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4))):$and3))) {
				$pyjs['track']['lineno']=121;
				head = head['rstrip']('/');
			}
			$pyjs['track']['lineno']=122;
			$pyjs['track']['lineno']=122;
			var $pyjs__ret = head;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['dirname']['__name__'] = 'dirname';

		$m['dirname']['__bind_type__'] = 0;
		$m['dirname']['__args__'] = [null,null,['p']];
		$pyjs['track']['lineno']=124;
		$m['samestat'] = function(s1, s2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $and5,$and6;
			$pyjs['track']={'module':'pyjspath','lineno':124};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=124;
			$pyjs['track']['lineno']=126;
			$pyjs['track']['lineno']=126;
			var $pyjs__ret = ($p['bool']($and5=$p['op_eq']($p['getattr'](s1, 'st_ino'), $p['getattr'](s2, 'st_ino')))?$p['op_eq']($p['getattr'](s1, 'st_dev'), $p['getattr'](s2, 'st_dev')):$and5);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['samestat']['__name__'] = 'samestat';

		$m['samestat']['__bind_type__'] = 0;
		$m['samestat']['__args__'] = [null,null,['s1'],['s2']];
		$pyjs['track']['lineno']=129;
		$m['normpath'] = function(path) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $or5,$or4,initial_slashes,$mul6,$iter2_iter,slash,new_comps,$and8,$and9,$or7,$or6,$iter2_type,$or3,comp,$and7,$and12,comps,$and10,$and11,$add13,$mul5,$add14,$iter2_nextval,$and13,$iter2_idx,dot,$pyjs__trackstack_size_1,$iter2_array;
			$pyjs['track']={'module':'pyjspath','lineno':129};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=129;
			$pyjs['track']['lineno']=131;
			var $tupleassign2 = $p['__ass_unpack']($p['tuple'](['/', '.']), 2, null);
			slash = $tupleassign2[0];
			dot = $tupleassign2[1];
			$pyjs['track']['lineno']=132;
			if ($p['bool']($p['op_eq'](path, ''))) {
				$pyjs['track']['lineno']=133;
				$pyjs['track']['lineno']=133;
				var $pyjs__ret = dot;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=134;
			initial_slashes = path['startswith']('/');
			$pyjs['track']['lineno']=137;
			if ($p['bool'](($p['bool']($and7=initial_slashes)?($p['bool']($and8=path['startswith']('//'))?!$p['bool'](path['startswith']('///')):$and8):$and7))) {
				$pyjs['track']['lineno']=139;
				initial_slashes = $constant_int_2;
			}
			$pyjs['track']['lineno']=140;
			comps = path['$$split']('/');
			$pyjs['track']['lineno']=141;
			new_comps = $p['list']([]);
			$pyjs['track']['lineno']=142;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = comps;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				comp = $iter2_nextval['$nextval'];
				$pyjs['track']['lineno']=143;
				if ($p['bool']($p['tuple'](['', '.'])['__contains__'](comp))) {
					$pyjs['track']['lineno']=144;
					continue;
				}
				$pyjs['track']['lineno']=145;
				if ($p['bool'](($p['bool']($or3=!$p['op_eq'](comp, '..'))?$or3:($p['bool']($or4=($p['bool']($and10=!$p['bool'](initial_slashes))?!$p['bool'](new_comps):$and10))?$or4:($p['bool']($and12=new_comps)?$p['op_eq'](new_comps['__getitem__']((typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))), '..'):$and12))))) {
					$pyjs['track']['lineno']=147;
					new_comps['append'](comp);
				}
				else if ($p['bool'](new_comps)) {
					$pyjs['track']['lineno']=149;
					new_comps['pop']();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=150;
			comps = new_comps;
			$pyjs['track']['lineno']=151;
			path = slash['join'](comps);
			$pyjs['track']['lineno']=152;
			if ($p['bool'](initial_slashes)) {
				$pyjs['track']['lineno']=153;
				path = $p['__op_add']($add13=(typeof ($mul5=slash)==typeof ($mul6=initial_slashes) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)),$add14=path);
			}
			$pyjs['track']['lineno']=154;
			$pyjs['track']['lineno']=154;
			var $pyjs__ret = ($p['bool']($or6=path)?$or6:dot);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['normpath']['__name__'] = 'normpath';

		$m['normpath']['__bind_type__'] = 0;
		$m['normpath']['__args__'] = [null,null,['path']];
		$pyjs['track']['lineno']=156;
		$m['abspath'] = function(path) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjspath','lineno':156};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=156;
			$pyjs['track']['lineno']=158;
			$pyjs['track']['lineno']=158;
			var $pyjs__ret = $m['normpath'](path);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['abspath']['__name__'] = 'abspath';

		$m['abspath']['__bind_type__'] = 0;
		$m['abspath']['__args__'] = [null,null,['path']];
		$pyjs['track']['lineno']=160;
		$m['realpath'] = function(filename) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjspath','lineno':160};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=160;
			$pyjs['track']['lineno']=161;
			$pyjs['track']['lineno']=161;
			var $pyjs__ret = $m['abspath'](filename);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['realpath']['__name__'] = 'realpath';

		$m['realpath']['__bind_type__'] = 0;
		$m['realpath']['__args__'] = [null,null,['filename']];
		$pyjs['track']['lineno']=169;
		$m['islink'] = function(path) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjspath','lineno':169};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=169;
			$pyjs['track']['lineno']=170;
			$pyjs['__active_exception_stack__'] = null;
			throw ($p['NotImplemented']());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['islink']['__name__'] = 'islink';

		$m['islink']['__bind_type__'] = 0;
		$m['islink']['__args__'] = [null,null,['path']];
		$pyjs['track']['lineno']=172;
		$m['lexists'] = function(path) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjspath','lineno':172};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=172;
			$pyjs['track']['lineno']=173;
			$pyjs['__active_exception_stack__'] = null;
			throw ($p['NotImplemented']());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['lexists']['__name__'] = 'lexists';

		$m['lexists']['__bind_type__'] = 0;
		$m['lexists']['__args__'] = [null,null,['path']];
		$pyjs['track']['lineno']=175;
		$m['samefile'] = function(f1, f2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			$pyjs['track']={'module':'pyjspath','lineno':175};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=175;
			$pyjs['track']['lineno']=176;
			$pyjs['__active_exception_stack__'] = null;
			throw ($p['NotImplemented']());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['samefile']['__name__'] = 'samefile';

		$m['samefile']['__bind_type__'] = 0;
		$m['samefile']['__args__'] = [null,null,['f1'],['f2']];
		$pyjs['track']['lineno']=178;
		$m['sameopenfile'] = function(fp1, fp2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			$pyjs['track']={'module':'pyjspath','lineno':178};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=178;
			$pyjs['track']['lineno']=179;
			$pyjs['__active_exception_stack__'] = null;
			throw ($p['NotImplemented']());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['sameopenfile']['__name__'] = 'sameopenfile';

		$m['sameopenfile']['__bind_type__'] = 0;
		$m['sameopenfile']['__args__'] = [null,null,['fp1'],['fp2']];
		$pyjs['track']['lineno']=181;
		$m['ismount'] = function(path) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjspath','lineno':181};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=181;
			$pyjs['track']['lineno']=182;
			$pyjs['__active_exception_stack__'] = null;
			throw ($p['NotImplemented']());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['ismount']['__name__'] = 'ismount';

		$m['ismount']['__bind_type__'] = 0;
		$m['ismount']['__args__'] = [null,null,['path']];
		$pyjs['track']['lineno']=184;
		$m['walk'] = function(top, func, arg) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			$pyjs['track']={'module':'pyjspath','lineno':184};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=184;
			$pyjs['track']['lineno']=185;
			$pyjs['__active_exception_stack__'] = null;
			throw ($p['NotImplemented']());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['walk']['__name__'] = 'walk';

		$m['walk']['__bind_type__'] = 0;
		$m['walk']['__args__'] = [null,null,['top'],['func'],['arg']];
		$pyjs['track']['lineno']=187;
		$m['expanduser'] = function(path) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjspath','lineno':187};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=187;
			$pyjs['track']['lineno']=188;
			$pyjs['__active_exception_stack__'] = null;
			throw ($p['NotImplemented']());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['expanduser']['__name__'] = 'expanduser';

		$m['expanduser']['__bind_type__'] = 0;
		$m['expanduser']['__args__'] = [null,null,['path']];
		$pyjs['track']['lineno']=190;
		$m['expandvars'] = function(path) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjspath','lineno':190};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=190;
			$pyjs['track']['lineno']=191;
			$pyjs['__active_exception_stack__'] = null;
			throw ($p['NotImplemented']());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['expandvars']['__name__'] = 'expandvars';

		$m['expandvars']['__bind_type__'] = 0;
		$m['expandvars']['__args__'] = [null,null,['path']];
		$pyjs['track']['lineno']=193;
		$m['supports_unicode_filenames'] = $p['op_eq']($p['getattr']($m['sys'], 'platform'), 'darwin');
		$pyjs['track']['lineno']=195;
		$m['relpath'] = function(path, start) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof start == 'undefined') start=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'pyjspath','lineno':195};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjspath';
			$pyjs['track']['lineno']=195;
			$pyjs['track']['lineno']=196;
			$pyjs['__active_exception_stack__'] = null;
			throw ($p['NotImplemented']());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['relpath']['__name__'] = 'relpath';

		$m['relpath']['__bind_type__'] = 0;
		$m['relpath']['__args__'] = [null,null,['path'],['start', $m['curdir']]];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjspath */


/* end module: pyjspath */


/*
PYJS_DEPS: ['os', 'sys', 'stat', 'genericpath']
*/
