<?php
    

    //Delete a file directory copied this script from online.
    //The normal rmdir function said I didnt have permission to delete a dir.
    //This function does some magic to allow it I guess.
    function rrmdir($src) {
        $dir = opendir($src);
        while(false !== ( $file = readdir($dir)) ) {
            if (( $file != '.' ) && ( $file != '..' )) {
                $full = $src . '/' . $file;
                if ( is_dir($full) ) {
                    rrmdir($full);
                }
                else {
                    unlink($full);
                }
            }
        }
        closedir($dir);
        rmdir($src);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST')
    {
        $content = $_POST["pythonField"];
        $user = $_SERVER['REMOTE_ADDR']; //127.0.0.1
        $user = str_replace('.', "", $user); //127001
        $fp = fopen("$user.py","wb"); //Creates / Opens files 127001.py
        fwrite($fp,$content); //Writes content to 127001.py
        fclose($fp);

        $file = $user . ".py"; //Get file directory location.
        $builddir =  $user . "/"; //Get build path location.

        //Remove the directory for the user if it exists.
        rrmdir($user);
        mkdir($user);


        //Compile using pyjsbuild with the $file and the output directory $builddir.
        $stri = "c:/Python27/Scripts/pyjsbuild -S ". $file ." -o " . $builddir;

        //This will execute the command with cmd.
        $command = escapeshellcmd($stri);

        //Out put shows the output from pyjsbuild.
        $output = shell_exec($command);

        //Print the output to show any compilation errors.
        echo "build/$user/$user.html";

    }
    else
    {

    }
 ?>