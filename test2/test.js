var flag = 0;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

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

    var img_number = 3;

    for (var i = 0; i < img_number; i++) {
        AppendChild({
            element: "img",
            child_id: "img_" + (i + 1),
            parent_id: "img",


        });
        $('#img_' + (i + 1)).attr('src', 'image/img_' + (i + 1) + '.jpg');
        $('#img_' + (i + 1)).width("20%");
        $('#img_' + (i + 1)).height("20%");
    }

    var window_w = window.innerWidth;
    var window_h = window.innerHeight;



    // for (var i = 0; i < img_number; i++) {



    setInterval(() => {
        // for (var i = 1; i < img_number + 1; i++) {
        console.log("2:" + i);
        // var random_w = getRandomInt(window_w - 250);
        // var random_h = getRandomInt(window_h - 250);

        // var data = {
        //     top: random_h,
        //     left: random_w

        // }

        // if (j == img_number + 1) {
        //     j = 1;
        // }

        if (flag == 1) {
            for (var i = 1; i < img_number + 1; i++) {
                console.log("3:" + i);

                var random_w = getRandomInt(window_w - 250);
                var random_h = getRandomInt(window_h - 250);

                var data = {
                    top: random_h,
                    left: random_w

                }

                $("#img_" + i).fadeIn();
                $("#img_" + i).offset(data);
                // console.log(1);
            }
            flag = 0;
        } else {
            for (var i = 1; i < img_number + 1; i++) {
                console.log("4:" + i);
                $("#img_" + i).fadeOut();
                // console.log(0);
            }
            flag = 1;

        }


        // }
    }, 1500);


    // }


}