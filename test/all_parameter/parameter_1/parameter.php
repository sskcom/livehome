 <?php

    $url = "parameter.json";
    $json = file_get_contents($url);
    $decoded_json = json_decode($json, true);

    print("こんこん");

 

    if(empty($json)){
        $json=0;
        print("こんにちわ");
    }
   
    
    ?> -->

 <!DOCTYPE html>
 <html lang="ja">

 <head>
     <meta charset="utf-8">
     <title>タイトル</title>
     <meta name="description" content="ディスクリプションを入力">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="parameter.css">

     <script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js' id='jquery-js'></script>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
     <!-- <script src="pattern_1/pattern_1.js"></script> -->

     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
     <!-- <script type="text/javascript" src="http://code.jquery.com/ui/1.10.3/jquery-ui.min.js"></script> -->

     <script type="text/javascript" src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
     <link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
     <script src="funcResizeBox.js"></script>
     <script src="parameter.js"></script>



 </head>

 <body>

     <div id="d_1">
         <p id="timeboad">

         </p>

         <h3 id="time_1_0" class="time">0:00</h3>
         <!-- <p id="line0" class="line"> -->
         <!-- </p> -->
         <h3 id="time_1_1" class="time">1:00</h3>
         <p id="line1" class="line">
         </p>
         <h3 id="time_1_2" class="time">2:00</h3>
         <p id="line2" class="line">
         </p>
         <h3 id="time_1_3" class="time">3:00</h3>
         <p id="line3" class="line">
         </p>
         <h3 id="time_1_4" class="time">4:00</h3>
         <p id="line4" class="line">
         </p>
         <h3 id="time_1_5" class="time">5:00</h3>
         <p id="line5" class="line">
         <div id="pp">
             </p>
             <p id="edit_1" class="edit">

             <h3 id="light1" class="mode">light1</h3>
             </p>



             <!-- </div> -->

             <!-- <div id="d_2"> -->

             <p id="edit_2" class="edit">
             <h3 id="light2" class="mode">light2</h3>

             </p>

             <!-- </div> -->

             <!-- <div id="d_3"> -->

             <p id="edit_3" class="edit">
             <h3 id="light3" class="mode">light3</h3>

             </p>
             <!-- </div> -->

             <!-- <div id="d_4"> -->

             <p id="edit_4" class="edit">
             <h3 id="penlight" class="mode">penlight</h3>

             </p>
         </div>
     </div>
     <div>
         <h3　id="t1" class="text">Song length</h3>
     </div>
     <input class="button" type="text" id="i" placeholder="0:00 " />
     <button id="btn" class="button">data add</button>
     <button id="btn2" class="button">edit</button>
     <button id="btn3" class="button">play</button>
     <button id="btn4" class="button">home</button>

     <div id="edit_space">

         <input id="colorpicker" class="color" type="color" />

         <input class="button" type="text" id="time_input" placeholder="0:00 " />
         <input class="button" type="text" id="time_input2" placeholder="0.00 " />

         <button id="play" class="button">play</button>
         <button id="delete" class="button">delete</button>
         <button id="confirm" class="button">confirm</button>


         <h3 id="mode" class="text">[mode]</h3>
         <h3 id="light_color" class="text">color</h3>
         <h3 id="time" class="text">time</h3>
         <h3 id="interval" class="text">interval</h3>


         <div id="radio_buttons">
             <h3 id="n_1" class="text">1</h3>
             <input type="radio" name="sec" id="input1" />
             <label id="label_1" for="input1"></label>
             <h3 id="n_2" class="text">2</h3>
             <input type="radio" name="sec" id="input2" />
             <label id="label_2" for="input2"></label>
             <h3 id="n_3" class="text">3</h3>
             <input type="radio" name="sec" id="input3" />
             <label id="label_3" for="input3"></label>
             <h3 id="n_4" class="text">4</h3>
             <input type="radio" name="sec" id="input4" />
             <label id="label_4" for="input4"></label>
             <h3 id="n_5" class="text">5</h3>
             <input type="radio" name="sec" id="input5" />
             <label id="label_5" for="input5"></label>
             <span id="slider"></span>
         </div>



     </div>
     <!-- </div> -->

     <script>
         var i_number_1 = 1;
         var i_number_2 = 1;
         var i_number_3 = 1;
         var i_number_4 = 1;

         var url = location.href;

         str = url.split("/");
         console.log(str);

         str = str[5].split("_");
         var folder_number = str[1];

         function AppendChild({
             element = null,
             child_id = null,
             parent_id = null,
             text = null,
             class_value = null,
             value = null,
             type = null,
             Function1 = null,
             Function2 = null,
             placeholder = null
         }) {
             const child_node = document.createElement(element);
             if (child_id != null) {
                 child_node.id = child_id;
             }
             if (class_value != null) {
                 child_node.classList = class_value;
             }
             if (value != null) {
                 child_node.value = value;
             }
             if (Function1 != null) {
                 child_node.onmouseover = Function1;
             }
             if (Function2 != null) {
                 child_node.onmouseout = Function2;
             }
             child_node.textContent = text;

             child_node.type = type;

             if (placeholder != null) {
                 child_node.placeholder = placeholder;
             }



             var parent_node = document.getElementById(parent_id);



             parent_node.appendChild(child_node);




         }



         window.onload = function() {
             $('#btn2').hide();


             var json_array_size = <?php echo count($decoded_json); ?>;
             var json_data=<?php echo $json; ?>;

             




             for (var i = 0; i < json_array_size; i++) {

                 var id = json_data[i]["id"];
                 var str = id.split("_");
                 var n = Number(str[1]);
                 var k = str[2];

                 switch (n) {
                     case 1:
                         i_number_1++;
                         break;
                     case 2:
                         i_number_2++;
                         break;
                     case 3:
                         i_number_3++;
                         break;
                     case 4:
                         i_number_4++;
                         break;
                 }


                 var text_number = json_data[i]["text_number"];

                 var red = json_data[i]["red"];
                 var green = json_data[i]["green"];
                 var blue = json_data[i]["blue"];
                 var time_value = json_data[i]["time"];
                 var interval = json_data[i]["interval"];

                 AppendChild({
                     element: "div",
                     child_id: "i_" + n + "_" + k,
                     class_value: "i-i",
                     parent_id: "edit_" + n,
                     text: "mode " + text_number

                 });

                 var off = $(id).offset();

                 var poistion = {
                     top: off.top,
                     left: json_data[i].left
                 }

                 $(id).css('width', (time_value * 0.3266666666666667) + "%");
                 $(id).css('background', 'rgb(' + red + ',' + green + ',' + blue + ')');
                 $(id).css("min-height", (Number(interval)/100000) + "%");
                 $(id).offset(poistion);
             }

         }
     </script>





 </body>



 </html>