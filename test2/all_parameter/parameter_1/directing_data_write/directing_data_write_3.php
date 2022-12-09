<?php

if (isset($_POST['data'])) {

    $data = $_POST['data'];
    // $data=1;
   
    print_r($data);
    // $data=1;

    $encode_json = json_encode($data, JSON_UNESCAPED_UNICODE);

        $fp = fopen('json/directing_data_3.json', 'w+b');
        fwrite($fp, $encode_json);
        fclose($fp); 
    

   
}