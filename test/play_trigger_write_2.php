<?php

$data;

function file_open_write($data, $file, $mode)
{
    $fp = fopen($file, $mode);

    if ($fp) {
        if (flock($fp, LOCK_EX)) {
            if (fwrite($fp,  $data . ",") === FALSE) {
                print('ファイル書き込みに失敗しました<br>');
            } else {
                print($data . 'をファイルに書き込みました<br>');
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

switch (intval($data)) {
    case 1:
        file_open_write(3, "csv/play_trigger_1.csv", "w+b");
        break;
    case 2:
        file_open_write(3, "csv/play_trigger_2.csv", "w+b");
        break;
    case 3:
        file_open_write(3, "csv/play_trigger_3.csv", "w+b");
        break;
    case 4:
        file_open_write(3, "csv/play_trigger_4.csv", "w+b");
        break;
}



sleep(1.5);
file_open_write(0, "csv/play_trigger_1.csv", "w+b");
file_open_write(0, "csv/play_trigger_2.csv", "w+b");
file_open_write(0, "csv/play_trigger_3.csv", "w+b");
file_open_write(0, "csv/play_trigger_4.csv", "w+b");
