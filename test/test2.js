var number = 0;
var sort_value = 0;

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

function button_hide(event, value) {
    $(document).on(event, ".form-group", function(e) {

        sort_value = value;

    });
}

button_hide("start", 1);
button_hide("end", 0);

window.onload = function() {
    $('#menu_b1_1').hide();
    $('#menu_b1_2').hide();

    $(function() {

        Sortable.create($('.form-group')[0]);

    });

    Sortable.create($('.form-group')[0], {
        animation: 110 // ミリ秒で指定

    });

    function AppendChild({ element = null, child_id = null, parent_id = null, text = null, class_value = null, value = null, type = null, Function1 = null, Function2 = null, placeholder = null }) {
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

    function buttonAdd() {

        var AppendChild_div_id = "d_" + key;
        var AppendChild_input_id = "i_" + key;

        Ajax(key, "http://54.248.37.203/test/parameter_directory_copy.php");

        AppendChild({
            element: "div",
            child_id: AppendChild_div_id,
            class_value: "d",
            parent_id: "at",

        });


        AppendChild({
            element: "input",
            type: "text",
            class_value: "item",
            child_id: AppendChild_input_id,
            parent_id: AppendChild_div_id,
            placeholder: "Song title"

        });
        AppendChild({
            element: "input",
            child_id: "menu_b1_" + key,
            parent_id: AppendChild_div_id,
            class_value: "button2",
            type: "button",
            value: "edit"
        });

        $('#menu_b1_' + key).hide();

        key++;
        AppendChild({
            element: "input",
            child_id: "menu_b1_" + key,
            parent_id: AppendChild_div_id,
            class_value: "button3",
            type: "button",
            value: "delete"
        });

        $('#menu_b1_' + key).hide();


        key++;
    }


    const btn = document.getElementById('btn');


    btn.addEventListener('click', function() {

        buttonAdd();

    });


    $(".form-group input").change(function() {
        if ($(this).val() != "") {
            $(this).addClass('filled');
        } else {
            $(this).removeClass('filled');
        }
    })

}


$(document).on({
    "mouseenter": function(e) {
        var target = e.target;
        id = target.id;

        var str = id.split("_");
        number = parseInt(str[1]);

        if (sort_value == 0) {

            $('#menu_b1_' + number).show();
            $('#menu_b1_' + (number + 1)).show();

        }
    },
    "mouseleave": function(e) {
        $('#menu_b1_' + number).hide();

        $('#menu_b1_' + (number + 1)).hide();
    }
}, ".d");








$(document).on('click', ".button3", function(el) {
    console.log("こんにちわ");
    var target = el.target;
    var id = target.id;

    var str = id.split("_");
    var number = str[2];

    console.log("#d_" + (number - 1));

    $("#d_" + (number - 1)).remove();

    Ajax(number - 1, "http://54.248.37.203/test/parameter_directory_delete.php");



});

$(document).on('click', ".button2", function(el) {

    var target = el.target;
    var id = target.id;

    var str = id.split("_");
    var number = str[2];

    location.href = "http://54.248.37.203/test/all_parameter/parameter_" + number + "/parameter.php";

});

$(document).on('click', "#btn2", function() {
        console.log("key:"+key);
    var song_number = (key*0.5+0.5)-1;

    console.log("song_number:" + song_number); 

    for (var i = 0; i < song_number; i++) {
        // console.log(i)
        // console.log(song_number_id[i]);

        Ajax(1, "http://54.248.37.203/test/all_parameter/parameter_" + song_number_id[i] + "/json_csv_conv_1.php");
        Ajax(1, "http://54.248.37.203/test/all_parameter/parameter_" + song_number_id[i] + "/json_csv_conv_2.php");
        Ajax(1, "http://54.248.37.203/test/all_parameter/parameter_" + song_number_id[i] + "/json_csv_conv_3.php");
        Ajax(1, "http://54.248.37.203/test/all_parameter/parameter_" + song_number_id[i] + "/json_csv_conv_4.php");
    }
    // Ajax(1, "http://54.248.37.203/test/parameter/json_csv_conv_1.php");
    // Ajax(1, "http://54.248.37.203/test/parameter/json_csv_conv_2.php");
    // Ajax(1, "http://54.248.37.203/test/parameter/json_csv_conv_3.php");
    // Ajax(1, "http://54.248.37.203/test/parameter/json_csv_conv_4.php");
 
    // Ajax(1, "http://54.248.37.203/test/playlist_div_extract.php");

 

    Ajax("1," + song_number, "http://54.248.37.203/test/play_trigger_write.php");

    Ajax(song_number, "http://54.248.37.203/test/playlist_div_extract.php");
});