<?php

if (isset($_POST['data'])) {

    $data = $_POST['data'];

    print("こんにちわ");
    print_r($data);
    // $data=1;

    $encode_json = json_encode($data, JSON_UNESCAPED_UNICODE);

        $fp = fopen('playlist.json', 'w+b');
        fwrite($fp, $encode_json);
        fclose($fp); 
    

  
}

  
