<?php


$url = "http://54.248.37.203/test/playlist.json";
$json = file_get_contents($url);
$decoded_json = json_decode($json, true);

?>





<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <title>サイトタイトル</title>
    <meta name="description" content="ディスクリプションを入力">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="test2.css">

    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>

   
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="Sortable-master/Sortable.min.js"></script>
    <script src="test2.js"></script>
</head>

<body>

    <div id="at" class="form-group">

    </div>

    <button id="btn" class="button">Song Add</button>
    <button id="btn2" class="button">play</button>

    <script>
        var key = 3;
        var song_number_id;

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


     
        var json_array_size = (<?php echo count($decoded_json); ?>-2)/2 ;
        var json_data = <?php echo $json; ?>;


            console.log(json_data);

     
        var value = json_data["div1"];
        var tump = value;
        for (var j = 0; j < json_array_size; j++) {
            if (tump < Number(json_data["div" + (j + 1)])) {
                tump = Number(json_data["div" + (j + 1)]);
              
            }
        }
        key = Number(tump) + 2;

        if (isNaN(key)) {
            key = 3;
        }


        


        if (json_array_size == 0) {

            Ajax(1, "http://54.248.37.203/test/parameter_directory_copy.php");
            song_number_id=new Array(1);
            song_number_id[0]=1;
            AppendChild({
                element: "div",
                child_id: "d_1",
                class_value: "d",
                parent_id: "at",

            });

            AppendChild({
                element: "input",
                type: "text",
                class_value: "item",
                child_id: "i_1",
                parent_id: "d_1",
                placeholder: "Song title",



            });
            AppendChild({
                element: "input",
                child_id: "menu_b1_1",
                parent_id: "d_1",
                class_value: "button2",
                type: "button",
                value: "edit"
            });

            $('#menu_b1_1').hide();


            AppendChild({
                element: "input",
                child_id: "menu_b1_2",
                parent_id: "d_1",
                class_value: "button3",
                type: "button",
                value: "delete"
            });

            $('#menu_b1_2').hide();

        } else {
                        console.log("json_array_size:"+json_array_size);
            song_number_id=new Array(json_array_size);
            for (var i = 0; i < json_array_size; i++) {

               

                var div_value = json_data["div" + (i + 1)];

                var div_id = "d_" + div_value;
               song_number_id[i]=div_value;



                var tump = div_value;


                var input_id = "i_" + div_value;
              
                var text = json_data["text" + (i + 1)];
          

                AppendChild({
                    element: "div",
                    child_id: div_id,
                    class_value: "d",
                    parent_id: "at",

                });

                AppendChild({
                    element: "input",
                    type: "text",
                    class_value: "item",
                    child_id: input_id,
                    parent_id: div_id,
                    placeholder: "Song title",
                    value: text
                });

              
                AppendChild({
                    element: "input",
                    child_id: "menu_b1_" + div_value,
                    parent_id: div_id,
                    class_value: "button2",
                    type: "button",
                    value: "edit"
                });

                $('#menu_b1_' + div_value).hide();

            
                AppendChild({
                    element: "input",
                    child_id: "menu_b1_" + (Number(div_value) + 1),
                    parent_id: div_id,
                    class_value: "button3",
                    type: "button",
                    value: "delete"
                });

                $('#menu_b1_' + (Number(div_value) + 1)).hide();
            }
        }

        function Ajax(data, path) {


           
            $.ajax({
                    type: 'POST', //　POSTかGET  
                    url: path, //　送り先
                    data: {
                        'data': data
                    }, //　渡したいデータ
                    async: false,
                    cache: false,
                    success: function(result) {
                      
                    },
                    error: function(jqxhr, status, exception) {
                       

                    },

                    dataType: 'json', //　データ形式を指定
                    scriptCharset: 'UTF-8' //　文字コードを指定
                })
                .done(function(response) {
                    result = response;
                   
                })
                .fail(function() {
                    
                });
        }

        function $on(event, selector) {

            $(document).on(event, selector, function(el) {

                var element_child = $('.form-group').children("div");

                var target = element_child.get();

                var array_size = target.length;

                var data = {

                    div: 0,
                    text: 0,


                };
                song_number_id=new Array(array_size);
                for (var i = 0; i < array_size; i++) {

                    nodemap = target[i].attributes;

                    id = nodemap[0].nodeValue;

                  
                    var str = id.split("_");

                    song_number_id[i]=str[1];
                    value = parseInt(str[1]);
        
                    text = $('#i_' + value).val();
             

                    var name = "div" + (i + 1);
                    var name_2 = "text" + (i + 1);

                    data[name] = value;
                    data[name_2] = text;

                }

                console.log(data);
 
              

                Ajax(data, "http://54.248.37.203/test/test2_html_save.php");

            });

        }

        $on("change", ".item");
        $on("click", ".button3");
        $on("click", "#btn");
        $on("update", ".form-group");
    </script>

</body>

</html>