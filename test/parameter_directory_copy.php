<?php

function file_copy($path1,$path2)
{
    // $path1 = "parameter.html";
    // $path2 = "all_parameter/tt.php";

   

    copy($path1, $path2);
    if (copy($path1, $path2)) {
        // コピーに成功したら以下を表示
        echo $path1.'コピー成功です。<br />';
    } else {
        // コピーに失敗したら以下を表示
        echo $path1.'コピー失敗です。<br />';
    }


}

function permission_config($path){

    chmod($path, 0777);

    if(chmod($path, 0777)){
        echo $path.'permission成功です。<br />';
    }
    else{
        echo $path.'permission失敗です。<br />';
    }

}


if (isset($_POST['data'])) {

    $data = $_POST['data'];

    // $data=1;

    $dir="all_parameter/parameter_".$data;

    if (mkdir($dir)) {
        echo "OK<br />";
    } else {
        echo "エラー<br />";
    } 

 
    permission_config($dir);

    $path1="parameter/parameter.php";
    $path2=$dir."/parameter.php";
 
    file_copy($path1,$path2);

    $path1="parameter/parameter.css";
    $path2=$dir."/parameter.css";

    file_copy($path1,$path2);

    $path1="parameter/parameter.js";
    $path2=$dir."/parameter.js";

    file_copy($path1,$path2); 

    $path1="parameter/funcResizeBox.js";
    $path2=$dir."/funcResizeBox.js";

    file_copy($path1,$path2);

    $path1="parameter/edit_directing_data.write.php";
    $path2=$dir."/edit_directing_data.write.php";

    file_copy($path1,$path2);

    $path1="parameter/json_csv_conv_1.php";
    $path2=$dir."/json_csv_conv_1.php";

    file_copy($path1,$path2);

    $path1="parameter/json_csv_conv_2.php";
    $path2=$dir."/json_csv_conv_2.php";

    file_copy($path1,$path2);

    $path1="parameter/json_csv_conv_3.php";
    $path2=$dir."/json_csv_conv_3.php";

    file_copy($path1,$path2);

    $path1="parameter/json_csv_conv_4.php";
    $path2=$dir."/json_csv_conv_4.php";

    file_copy($path1,$path2);

    $path1="parameter/parameter.json";
    $path2=$dir."/parameter.json";
    file_copy($path1,$path2);

    
    permission_config($dir."/parameter.json");

    
    $path1="parameter/parameter_html_save.php";
    $path2=$dir."/parameter_html_save.php";

    file_copy($path1,$path2);

    $dir2=$dir."/csv";
    
    if (mkdir($dir2)) {
        echo "OK<br />"; 
    } else {
        echo "エラー<br />";
    } 

  
    permission_config($dir2);

    $path1="parameter/csv/directing_data_1.csv";
    $path2=$dir."/csv/directing_data_1.csv";

    file_copy($path1,$path2);
    permission_config($dir."/csv/directing_data_1.csv");

    $path1="parameter/csv/directing_data_2.csv";
    $path2=$dir."/csv/directing_data_2.csv";

    file_copy($path1,$path2);
    permission_config($dir."/csv/directing_data_2.csv");


    $path1="parameter/csv/directing_data_3.csv";
    $path2=$dir."/csv/directing_data_3.csv";

    file_copy($path1,$path2);
    permission_config($dir."/csv/directing_data_3.csv");
  

    $path1="parameter/csv/directing_data_4.csv";
    $path2=$dir."/csv/directing_data_4.csv";

    file_copy($path1,$path2);
    permission_config($dir."/csv/directing_data_4.csv");

    $path1="parameter/csv/edit_directing_data.csv";
    $path2=$dir."/csv/edit_directing_data.csv";

    file_copy($path1,$path2);
    permission_config($dir."/csv/edit_directing_data.csv");

    
    $dir3=$dir."/directing_data_write";
    
    if (mkdir($dir3)) {
        echo "OK<br />";
    } else {
        echo "エラー<br />";
    } 

    $path1="parameter/directing_data_write/directing_data_write_1.php";
    $path2=$dir."/directing_data_write/directing_data_write_1.php";

    file_copy($path1,$path2);

    $path1="parameter/directing_data_write/directing_data_write_2.php";
    $path2=$dir."/directing_data_write/directing_data_write_2.php";

    file_copy($path1,$path2);

    $path1="parameter/directing_data_write/directing_data_write_3.php";
    $path2=$dir."/directing_data_write/directing_data_write_3.php";

    file_copy($path1,$path2);

    $path1="parameter/directing_data_write/directing_data_write_4.php";
    $path2=$dir."/directing_data_write/directing_data_write_4.php";

    file_copy($path1,$path2);

    $dir4=$dir."/directing_data_write/json";
    
    if (mkdir($dir4)) {
        echo "OK<br />";
    } else { 
        echo "エラー<br />";
    } 

    

    $path1="parameter/directing_data_write/json/directing_data_1.json";
    $path2=$dir."/directing_data_write/json/directing_data_1.json";

    file_copy($path1,$path2);
    permission_config($dir."/directing_data_write/json/directing_data_1.json");

    $path1="parameter/directing_data_write/json/directing_data_2.json";
    $path2=$dir."/directing_data_write/json/directing_data_2.json"; 

    file_copy($path1,$path2);
    permission_config($dir."/directing_data_write/json/directing_data_2.json");

    $path1="parameter/directing_data_write/json/directing_data_3.json";
    $path2=$dir."/directing_data_write/json/directing_data_3.json";

    file_copy($path1,$path2);
    permission_config($dir."/directing_data_write/json/directing_data_3.json");

    $path1="parameter/directing_data_write/json/directing_data_4.json";
    $path2=$dir."/directing_data_write/json/directing_data_4.json";

    file_copy($path1,$path2); 
    permission_config($dir."/directing_data_write/json/directing_data_4.json");

}


