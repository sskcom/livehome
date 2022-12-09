// var i_number_1 = 1;
// var i_number_2 = 1;
// var i_number_3 = 1;
// var i_number_4 = 1;
var drag = 0;
var before_edit_id = 0;
var now_edit_id;
var now_id;
var click = 0;
var edit_id = 0;
var initial_size;
var initial_position;
var edit_element;
var resize_stop_trigger = 0;



function Ajax(data, path) {

    $.ajax({
        type: 'POST', //　POSTかGET  
        url: path, //　送り先
        data: {
            'data': data
        }, //　渡したいデータ
        dataType: 'json', //　データ形式を指定
        scriptCharset: 'UTF-8' //　文字コードを指定
    })
}

function Ajax_parameter_element() {
    var array_data = new Array(i_number_1 + i_number_2 + i_number_3 + i_number_4 - 4);
    var array_data2 = new Array(i_number_1 + i_number_2 + i_number_3 + i_number_4 - 4);
    var j_save = 0;

    for (var i = 0; i < 4; i++) {
        var number;
        switch (i + 1) {
            case 1:
                number = i_number_1;
                break;
            case 2:
                number = i_number_2;
                break;
            case 3:
                number = i_number_3;
                break;
            case 4:
                number = i_number_4;
                break;
        }
        if (number) {

            for (var j = 0; j < number - 1; j++) {

                var id = "#i_" + (i + 1) + "_" + (j + 1);



                var id_element_color = $(id).css("background-color");

                var str = id_element_color.split("(");

                str = str[1].split(",");

                var red = Number(str[0]);
                var green = Number(str[1]);
                str = str[2].split(")");
                var blue = Number(str[0]);


                var id_element_width = parseInt($(id).css("width"));


                var time = Math.round(id_element_width * 0.2399130853932732);




                var interval = $(id).css("min-height");


                str = interval.split("%");
                interval = str[0];



                var id_element_text = $(id).text();

                str = id_element_text.split("e");

                var text_number = Number(str[1]);

                var off = $(id).offset();

                var left = off.left;



                var data = {
                    id: id,
                    red: red,
                    green: green,
                    blue: blue,
                    time: time,
                    interval: interval * 100000,
                    text_number: text_number,
                    left: left

                }

                console.log(data);
                array_data2[j] = data;
                array_data[j + j_save] = data;


            }
            console.log(array_data2);
           
            Ajax(array_data2, "directing_data_write/directing_data_write_" + (i + 1) + ".php");
            array_data2 = new Array(i_number_1 + i_number_2 + i_number_3 + i_number_4 - 4);
            j_save += j;
        }
    }


    Ajax(array_data, "parameter_html_save.php");
}

$(document).on("mouseover", ".i-i", function(e) {
    var id = e.currentTarget.id;



    $('#' + id).draggable({
        containment: "#" + before_edit_id,
        scroll: true,
        cancel: 'input',
        axis: 'x',

    });


    $("#" + id).resizable({
        minHeight: 97,
        minWidth: 7.6699,
        maxHeight: 97,
        maxWidth: 1277.65,
    });

});

$(document).on("mousedown", ".i-i", function(e) {
    var id = e.currentTarget.id;



    now_id = "#" + id;



    var str = id.split("_");


    //i_n_k
    var n = Number(str[1]);
    var k = Number(str[2]);

    var number;



    switch (n) {
        case 1:
            number = i_number_1;
            break;
        case 2:
            number = i_number_2;
            break;
        case 3:
            number = i_number_3;
            break;
        case 4:
            number = i_number_4;
            break;

    }





    initial_size = $('#' + id).width();



    if (number - 1 - k) {

        initial_position = new Array(number - 1 - k);

        for (var i = 0; i < number - 1 - k; i++) {

            if ($('#i_' + n + "_" + (k + i + 1)).length) {

                var off = $('#i_' + n + "_" + (k + i + 1)).offset();




                initial_position[i] = off.left;

            }
        }

    }








});



$(document).on("change", "#i", function() {
    var song_length = $("#i").val()

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


    var str = before_edit_id.split("_");

    var e_number = Number(str[1]);

    var number;



    switch (e_number) {
        case 1:
            number = i_number_1;
            break;
        case 2:
            number = i_number_2;
            break;
        case 3:
            number = i_number_3;
            break;
        case 4:
            number = i_number_4;
            break;

    }



    AppendChild({
        element: "div",
        child_id: "i_" + e_number + "_" + number,
        class_value: "i-i",
        parent_id: before_edit_id,
        text: "mode 1"

    });

    if ($("#i_" + e_number + "_" + (number - 1)).length) {

        var prev_element_off = $("#i_" + e_number + "_" + (number - 1)).offset();
        var prev_element_width = $("#i_" + e_number + "_" + (number - 1)).width();



        var add_element_left = prev_element_off.left + prev_element_width ;

        var add_element_position = {
            top: prev_element_off.top,
            left: add_element_left
        }



        $("#i_" + e_number + "_" + number).offset(add_element_position);

    }

    switch (e_number) {
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
    Ajax_parameter_element();
}



$(document).on("click", "#btn", function() {
   
    buttonAdd();
});

$(document).on("click", ".i-i", function(e) {
    var id = e.currentTarget.id;
    var str = id.split("_");
    edit_id = str[1];


    if (drag == 1) {
        drag = 0;

        $('#' + id).css('filter', 'brightness(100%)');

        $('#btn2').hide();

    } else {
        drag = 1;

        $('#' + id).css('filter', 'brightness(130%)');
        edit_element = '#' + id;
        $('#btn2').show();

    }

});

$(document).on("click", ".edit", function(e) {
    var id = e.currentTarget.id;



    $('#' + before_edit_id).css('background', '#03090c');
    $('#' + id).css('background', '#0a1f25');





    var str = id.split("_");
    now_edit_id = Number(str[1]);



    before_edit_id = id;




});
function all_element_ajax(event,selector,trigger){
$(document).on(event,selector, function() {

    function Conv_rgb_hex(col) {
        return "#" + col.match(/\d+/g).map(function(a) { return ("0" + parseInt(a).toString(16)).slice(-2) }).join("");
    }



    var now_id_element_color = $(now_id).css("background-color");

    var str = now_id_element_color.split("(");

    str = str[1].split(",");

    var red = Number(str[0]);
    var green = Number(str[1]);
    str = str[2].split(")");
    var blue = Number(str[0]);

    var rgb_hex = Conv_rgb_hex("rgb(" + red + "," + green + "," + blue + ")");

    $('#colorpicker').val(rgb_hex)

    var now_id_element_width = parseInt($(now_id).css("width"));


    var time = Math.round(now_id_element_width * 0.2399130853932732);


    if (time >= 60) {
        var time_1 = Math.round(time / 60);
        var time_2 = time % 60;


        if (1 < String(time_2).length) {
            $('#time_input').val(time_1 + ":" + time_2);

        } else {
            $('#time_input').val(time_1 + ":0" + time_2);
        }
    } else {
        if (1 < String(time).length) {
            $('#time_input').val("0:" + time);

        } else {
            $('#time_input').val("0:0" + time);
        }
    }

    var interval = $(now_id).css("min-height");


    str = interval.split("%");
    interval = str[0];

    $('#time_input2').val(interval);

    var now_id_element_text = $(now_id).text();

    str = now_id_element_text.split("e");

    var text_number = Number(str[1]);





    var slider_point = $("#slider").offset();
    var label_1_point = $("#label_1").offset();
    var label_2_point = $("#label_2").offset();


    var slider_move_amount = label_2_point.left - label_1_point.left;



    var new_position_data = {
        top: slider_point.top,
        left: label_1_point + slider_move_amount * text_number
    }

    $("#slider").offset(new_position_data);



    if(trigger==1){
    if (click == 1) {
        click = 0;

        $('#edit_space').css('visibility', 'hidden');
        $(edit_element).css('filter', 'brightness(100%)');
        $('#btn2').hide();
        drag = 0;

    } else {
        click = 1;


        $('#edit_space').css('visibility', 'visible');
    }

    }

});

}

all_element_ajax("click", "#btn2",1);


$(document).on("click", "#btn3", function() {

    Ajax(1, "json_csv_conv_1.php");
    Ajax(1, "json_csv_conv_2.php");
    Ajax(1, "json_csv_conv_3.php");
    Ajax(1, "json_csv_conv_4.php");
    Ajax("2," + folder_number, "http://54.248.37.203/test/play_trigger_write.php");


});

$(document).on("click", "#btn4", function() {
    location.href = "http://54.248.37.203/test/test2.php";
});

function $click_Ajax(event, selector, trigger) {



    $(document).on(event, selector, function(e) {
        var target = $('#colorpicker').val();

        var red = parseInt(target.substring(1, 3), 16);
        var green = parseInt(target.substring(3, 5), 16);
        var blue = parseInt(target.substring(5, 7), 16);



        var time = $('#time_input').val();

        var str = time.split(":");
        var time_value = (Number(str[0]) * 60) + Number(str[1]);


        $(edit_element).css('width', (time_value * 0.3266666666666667) + "%");



        var interval = $('#time_input2').val();



        var slider_point = $("#slider").offset();

        var x = slider_point.left;
        var y = slider_point.top;

        element = document.elementFromPoint(x, y);

        var str = element.id.split("_");

        var mode = str[1];



        $(edit_element).text("mode " + mode);
        $(edit_element).css('background', 'rgb(' + red + ',' + green + ',' + blue + ')');
        $(edit_element).css("min-height", interval + "%");

        Ajax_parameter_element();



        var data = {
            'text_number': mode,
            'time': time_value,
            'interval': interval * 100000,
            'red': red,
            'green': green,
            'blue': blue

        };






        Ajax(data, "edit_directing_data.write.php");


        if (trigger == 1) {
            Ajax("0," + folder_number, "http://54.248.37.203/test/play_trigger_write.php");
           
            switch (now_edit_id) {
                case 1:
                    Ajax(1, "http://54.248.37.203/test/play_trigger_write_2.php");
                    break;
                case 2:
                    Ajax(2, "http://54.248.37.203/test/play_trigger_write_2.php");
                    break;
                case 3:
                    Ajax(3, "http://54.248.37.203/test/play_trigger_write_2.php");
                    break;
                case 4:
                    Ajax(4, "http://54.248.37.203/test/play_trigger_write_2.php");
                    break;

            }

        }


    });

} 


$click_Ajax("click", "#play", 1); 
$click_Ajax("click", "#confirm", 0);

 

$(document).on("click", "#delete", function() {

    $(now_id).remove();

    var str = now_id.split("_");
    var n = Number(str[1]);
    var k = Number(str[2]);

    var now_element_number;

    //i_n_k
    switch (n) {
        case 1:
            now_element_number = i_number_1;
            i_number_1--;
            break;
        case 2:
            now_element_number = i_number_2;
            i_number_2--;
            break;
        case 3:
            now_element_number = i_number_3;
            i_number_3--;
            break;
        case 4:
            now_element_number = i_number_4;
            i_number_4--;
            break;
    }

    for (var i = 0; i < now_element_number - 1 - k; i++) {
        $("#i_" + n + "_" + (k + i + 1)).prop('id', "i_" + n + "_" + (k + i));
    }

    $('#edit_space').css('visibility', 'hidden');

    $('#btn2').hide();
    click = 0;
    drag = 0;
    // var data = edit_id;



    Ajax_parameter_element();
});

var initial_off;

$(document).on("dragstart", function(e) {
    var id = e.target.id;
    initial_off = $('#' + id).offset();

});


$(document).on("dragstop", function(e) {
    var now_element_number;

    switch (now_edit_id) {
        case 1:
            now_element_number = i_number_1;
            break;
        case 2:
            now_element_number = i_number_2;
            break;
        case 3:
            now_element_number = i_number_3;
            break;
        case 4:
            now_element_number = i_number_4;
            break;
    }

    var stop_trigger = 0;

    function get_coordnates(id) {
        var off = $(id).offset();




        var x_1_1 = off.left;

        var x_1_2 = $(id).width() + x_1_1;

        var x_data = {
            left: x_1_1,
            width: x_1_2
        }




        return x_data;
    }

    function id_replacement(id, id_2, x_1, x_2) {


        if (stop_trigger == 0) {

            if (x_1 > x_2) {


                var str = id.split("#");
                id_value = str[1];

                str = id_2.split("#");
                id_2_value = str[1];


                $(id).prop('id', "str");
                var log = $(id_2).prop('id', id_value);
                $("#str").prop('id', id_2_value);

                str = id_value.split("_");

                for (var j = Number(str[2] + 1); j < i; j++) {

                    $("#i_" + now_edit_id + "_" + j).prop('id', "i_" + now_edit_id + "_" + (j - 1));


                }


                stop_trigger = 1;

            }

        }
        Ajax_parameter_element();

    }

    var str = now_id.split("_");
    now_id_value = Number(str[2]);
    var now_edit_number = Number(str[1]);


    for (var i = now_element_number - 1; i > now_id_value; i--) {

        var id_2 = "#i_" + now_edit_id + "_" + i;


        var x1_data = get_coordnates(now_id);
        var x2_data = get_coordnates(id_2);

        id_replacement(now_id, id_2, x1_data.left, x2_data.width);

    }


    for (var i = 1; i < now_element_number - 1; i++) {

        var id_2 = "#i_" + now_edit_id + "_" + i;


        var x1_data = get_coordnates(id_2);
        var x2_data = get_coordnates(now_id);

        id_replacement(now_id, id_2, x1_data.left, x2_data.width);

    }



    //i_n_k
    function Duplicate_judgment(n, k, k2, i) {

        if ($('#i_' + n + "_" + k2).length) {

            if ($('#i_' + n + "_" + k).length) {

                var off = $('#i_' + n + "_" + k).offset();


                var d_height = $('#i_' + n + "_" + k).height();
                var d_width = $('#i_' + n + "_" + k).width();



                var off1 = $('#i_' + n + "_" + k2).offset();

                var i_height = $('#i_' + n + "_" + k2).height();
                var i_width = $('#i_' + n + "_" + k2).width();

                var i_y = off1.top + i_height
                var d_y = off.top + d_height;

                var i_x = off1.left + i_width
                var d_x = off.left + d_width;


                function Overlap_confirmation(x, y) {
                    var x_comp1 = x >= off1.left;
                    var x_comp2 = x <= i_x;
                    var y_comp1 = y <= i_y;
                    var y_comp2 = y >= off1.top;

                    if ((x_comp1 && x_comp2) && (y_comp1 && y_comp2)) {
                        return 1;
                    } else {
                        return 0;
                    }


                }


                var point1 = Overlap_confirmation(off.left, off.top);
                var point2 = Overlap_confirmation(off.left, d_y);
                var point3 = Overlap_confirmation(d_x, off.top);
                var point4 = Overlap_confirmation(d_x, d_y);
                var correction = 0;


                if (((d_x >= i_x) && (off.left <= off1.left))) {
                    correction = 1;
                }



                if (i == 1) {

                    if (point1 || point2 || point3 || point4 || correction) {
                        $('#i_' + n + "_" + k).offset(initial_off);
                    }
                }
                // else {
                //     if (point1 || point2 || point3 || point4 || correction) {
                //         // $('#i_' + n + "_" + k2).offset(initial_off);
                //     }
                // }


            }
        }

    }


    var id1 = e.target.id;

    str = id1.split("_");

    //i_n_k
    var n = Number(str[1]);
    var k = Number(str[2]);



    Duplicate_judgment(n, k, k + 1, 1);
    Duplicate_judgment(n, k + 1, k, 2);

    Duplicate_judgment(n, k, k - 1, 1);
    Duplicate_judgment(n, k - 1, k, 2);

});

// $(document).on("dragstop", ".i-i", function() {
//     Ajax_parameter_element();
   
// });


var off_after_left = 100000;
var position_data;

$(document).on("resize", function(e) {


    var id = e.target.id;
    var str = id.split("_");



    var now_element_number;


    //i_n_k
    var n = Number(str[1]);

    var k = Number(str[2]);



    switch (n) {
        case 1:
            now_element_number = i_number_1;
            break;
        case 2:
            now_element_number = i_number_2;
            break;
        case 3:
            now_element_number = i_number_3;
            break;
        case 4:
            now_element_number = i_number_4;
            break;
    }




    for (var i = 0; i < now_element_number - 1 - k; i++) {


        if ($('#i_' + n + "_" + (k + i + 1)).length) {

            var off_before = $('#i_' + n + "_" + (k + i + 1)).offset();



            position_data = {
                top: off_before.top,
                left: initial_position[i]

            }

            $('#i_' + n + "_" + (k + i + 1)).offset(position_data);




        }

    }


});

$(document).on("resizestop", function(e) {



    //i_n_k
    function Duplicate_judgment(n, k, k2, i) {

        if ($('#i_' + n + "_" + k2).length) {

            if ($('#i_' + n + "_" + k).length) {

                var off = $('#i_' + n + "_" + k).offset();


                var d_height = $('#i_' + n + "_" + k).height();
                var d_width = $('#i_' + n + "_" + k).width();




                var off1 = $('#i_' + n + "_" + k2).offset();

                var i_height = $('#i_' + n + "_" + k2).height();
                var i_width = $('#i_' + n + "_" + k2).width();


                var i_y = off1.top + i_height
                var d_y = off.top + d_height;

                var i_x = off1.left + i_width
                var d_x = off.left + d_width;




                function Overlap_confirmation(x, y) {
                    var x_comp1 = x >= off1.left;
                    var x_comp2 = x <= i_x;
                    var y_comp1 = y <= i_y;
                    var y_comp2 = y >= off1.top;




                    if ((x_comp1 && x_comp2) && (y_comp1 && y_comp2)) {
                        return 1;
                    } else {
                        return 0;
                    }


                }


                var point1 = Overlap_confirmation(off.left, off.top);
                var point2 = Overlap_confirmation(off.left, d_y);
                var point3 = Overlap_confirmation(d_x, off.top);
                var point4 = Overlap_confirmation(d_x, d_y);
                var correction = 0;

                if (((d_x >= i_x) && (off.left <= off1.left))) {
                    correction = 1;
                }



                if (i == 1) {

                    if (point1 || point2 || point3 || point4 || correction) {
                        $('#i_' + n + "_" + k).width(initial_size);

                        var now_element_number;

                        switch (n) {
                            case 1:
                                now_element_number = i_number_1;
                                break;
                            case 2:
                                now_element_number = i_number_2;
                                break;
                            case 3:
                                now_element_number = i_number_3;
                                break;
                            case 4:
                                now_element_number = i_number_4;
                                break;
                        }



                        for (var i = 0; i < now_element_number - 1 - k; i++) {
                            if ($('#i_' + n + "_" + (k + i + 1)).length) {

                                var off_before = $('#i_' + n + "_" + (k + i + 1)).offset();


                                position_data = {
                                    top: off_before.top,
                                    left: initial_position[i]

                                }

                                $('#i_' + n + "_" + (k + i + 1)).offset(position_data);


                            }

                        }
                    }


                }
            }

        }
    }



    var id = e.target.id;

    str = id.split("_");

    //i_n_k
    var n = Number(str[1]);
    var k = Number(str[2]);



    Duplicate_judgment(n, k, k + 1, 1);


});