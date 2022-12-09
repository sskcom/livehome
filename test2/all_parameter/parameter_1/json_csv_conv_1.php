<?php

$data_name = array('text_number','time', 'interval', 'red', 'green', 'blue');

$url = "directing_data_write/json/directing_data_1.json";
$json = file_get_contents($url);
$decoded_json2 = json_decode($json, true);
$data_size=count($decoded_json2);

function file_open_write($data, $file)
{
    $fp = fopen($file, 'a+b');

    if ($fp) {
        if (flock($fp, LOCK_EX)) {
            if (fwrite($fp,  $data . ",") === FALSE) {
                //  print('ファイル書き込みに失敗しました<br>');
            } else {
                //  print($data.'をファイルに書き込みました<br>');

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

$fp = fopen("csv/directing_data_1.csv",'wb');
flock($fp, LOCK_EX);
ftruncate($fp,0);
flock($fp, LOCK_UN);
fclose($fp);


for($i=0;$i<$data_size;$i++){
    for($j=0;$j<6;$j++){
        

        file_open_write($decoded_json2[$i][$data_name[$j]],"csv/directing_data_1.csv");
    }
}
}