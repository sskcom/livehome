<?php

if (isset($_POST['data'])) {

    $data = $_POST['data'];
   

$dir = glob('all_parameter/parameter_'.$data.'/*');

 var_dump($dir);


 
foreach ($dir as $file){
  //ファイルを削除する
  if (unlink($file)){
    echo $file.'の削除に成功しました。<br>';
  }else{
    echo $file.'の削除に失敗しました。<br>';
  }
} 

$dir = glob('all_parameter/parameter_'.$data.'/csv/*');

 var_dump($dir);


 
foreach ($dir as $file){
  //ファイルを削除する
  if (unlink($file)){
    echo $file.'の削除に成功しました。<br>';
  }else{
    echo $file.'の削除に失敗しました。<br>';
  }
} 

$dir = glob('all_parameter/parameter_'.$data.'/directing_data_write/*');

 var_dump($dir);


 
foreach ($dir as $file){
  //ファイルを削除する
  if (unlink($file)){
    echo $file.'の削除に成功しました。<br>';
  }else{
    echo $file.'の削除に失敗しました。<br>';
  }
} 

$dir = glob('all_parameter/parameter_'.$data.'/directing_data_write/json/*');

 var_dump($dir);


 
foreach ($dir as $file){
  //ファイルを削除する
  if (unlink($file)){
    echo $file.'の削除に成功しました。<br>';
  }else{
    echo $file.'の削除に失敗しました。<br>';
  }
} 

rmdir("all_parameter/parameter_".$data."/directing_data_write/json");
rmdir("all_parameter/parameter_".$data."/directing_data_write");
rmdir("all_parameter/parameter_".$data."/csv");
rmdir("all_parameter/parameter_".$data);

}