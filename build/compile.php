<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST')
    {
        $content = $_POST["pythonField"];
        $user = $_SERVER['REMOTE_ADDR'];
        $user = str_replace('.', "", $user);
        $fp = fopen("$user.py","wb");
        fwrite($fp,$content);
        fclose($fp);

        $file = "" . $user . ".py";
        $builddir =  "" . $user . "/";

        $stri = "c:/Python27/Scripts/pyjsbuild -S ". $file ." -o " . $builddir;

        print( "$builddir \n");
        echo "$file \n";
        echo "$stri \n";

        $command = escapeshellcmd($stri);
        $output = shell_exec($command);

        echo "$output";

    }
    else
    {

    }
 ?>