<?php

$data_name = array('text_number', 'time', 'interval', 'red', 'green', 'blue');

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

    $fp = fopen("csv/edit_directing_data.csv", 'w+b');
    flock($fp, LOCK_EX);
    ftruncate($fp, 0);
    flock($fp, LOCK_UN);
    fclose($fp);

    for ($i = 0; $i < 6; $i++) {

        file_open_write($data[$data_name[$i]], "csv/edit_directing_data.csv", "a+b");
    }
}
