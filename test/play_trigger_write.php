<?php

$data;

function file_open_write($data, $file,$mode)
{
    $fp = fopen($file, $mode);

    if ($fp) {
        if (flock($fp, LOCK_EX)) {
            if (fwrite($fp,  $data . ",") === FALSE) {
                 print('ファイル書き込みに失敗しました<br>');
            } else {
                 print($data.'をファイルに書き込みました<br>');

            }

            flock($fp, LOCK_UN);
        } else {
            print('ファイルロックに失敗しました<br>');
        }
    }

    $flag = fclose($fp);

    if ($flag) {

        print('無事クローズしました<br>');
    } else {
        print('クローズに失敗しました<br>');
    }
}

if (isset($_POST['data'])) {

    $data = $_POST['data'];
}
 
// file_open_write(0, "csv/player_trigger.csv","w+b");

file_open_write($data,"csv/play_trigger.csv","w+b"); 

sleep(3);
file_open_write(0, "csv/play_trigger.csv","w+b");


?>