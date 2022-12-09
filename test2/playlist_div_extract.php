<?php



function file_open_write($data, $file, $mode)
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


$url = "http://54.248.37.203/test/playlist.json";
$json = file_get_contents($url);
$decoded_json = json_decode($json, true);
$data_size = count($decoded_json);





$song_number = $data;

$fp = fopen("csv/play_song_list.csv",'wb');
flock($fp, LOCK_EX);
ftruncate($fp,0);
flock($fp, LOCK_UN);
fclose($fp);



for ($i = 0; $i < $song_number; $i++) {
    var_dump($i);
    $decoded_json["dev"+$i];



    $key = "div" . ($i + 1);
    // $key = "div1";
   

    file_open_write($decoded_json[$key],"csv/play_song_list.csv","a+b");
    
}

}

?>