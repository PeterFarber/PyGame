<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST')
    {
        $command = escapeshellcmd('c:/Python27/Scripts/pyjsbuild -S serpentduel.py -o output');
        $output = shell_exec($command);
        echo $output;
    }
    else
    {

    }
 ?>