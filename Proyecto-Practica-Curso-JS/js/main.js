$(document).ready(function() {
    //Slider
    $('.bxslider').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 1200
    });

    //Posts-----------------------------------------------------------------------------------------------------
    var posts = [{
            Title: "Prueba de Titulo 1",
            Date: 'Publicado el ' + moment().format('Do') + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a tincidunt justo. Donec id orci lacinia, elementum lacus sit amet, bibendum felis. Fusce molestie bibendum mattis. Pellentesque faucibus tempus nisl, quis accumsan lorem venenatis hendrerit. Nam mattis, tellus nec euismod vulputate, velit lacus venenatis sapien, in porttitor mauris nulla nec justo. Sed bibendum urna sollicitudin commodo aliquet. Integer fringilla rhoncus sapien, vel iaculis dui.",
        },

        {
            Title: "Prueba de Titulo 2",
            Date: 'Publicado el ' + moment().format('Do') + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a tincidunt justo. Donec id orci lacinia, elementum lacus sit amet, bibendum felis. Fusce molestie bibendum mattis. Pellentesque faucibus tempus nisl, quis accumsan lorem venenatis hendrerit. Nam mattis, tellus nec euismod vulputate, velit lacus venenatis sapien, in porttitor mauris nulla nec justo. Sed bibendum urna sollicitudin commodo aliquet. Integer fringilla rhoncus sapien, vel iaculis dui.",
        },
        {
            Title: "Prueba de Titulo 3",
            Date: 'Publicado el ' + moment().format('Do') + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a tincidunt justo. Donec id orci lacinia, elementum lacus sit amet, bibendum felis. Fusce molestie bibendum mattis. Pellentesque faucibus tempus nisl, quis accumsan lorem venenatis hendrerit. Nam mattis, tellus nec euismod vulputate, velit lacus venenatis sapien, in porttitor mauris nulla nec justo. Sed bibendum urna sollicitudin commodo aliquet. Integer fringilla rhoncus sapien, vel iaculis dui.",
        },
        {
            Title: "Prueba de Titulo 4",
            Date: 'Publicado el ' + moment().format('Do') + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a tincidunt justo. Donec id orci lacinia, elementum lacus sit amet, bibendum felis. Fusce molestie bibendum mattis. Pellentesque faucibus tempus nisl, quis accumsan lorem venenatis hendrerit. Nam mattis, tellus nec euismod vulputate, velit lacus venenatis sapien, in porttitor mauris nulla nec justo. Sed bibendum urna sollicitudin commodo aliquet. Integer fringilla rhoncus sapien, vel iaculis dui.",
        },
        {
            Title: "Prueba de Titulo 5",
            Date: 'Publicado el ' + moment().format('Do') + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a tincidunt justo. Donec id orci lacinia, elementum lacus sit amet, bibendum felis. Fusce molestie bibendum mattis. Pellentesque faucibus tempus nisl, quis accumsan lorem venenatis hendrerit. Nam mattis, tellus nec euismod vulputate, velit lacus venenatis sapien, in porttitor mauris nulla nec justo. Sed bibendum urna sollicitudin commodo aliquet. Integer fringilla rhoncus sapien, vel iaculis dui.",
        },


    ];

    posts.forEach((item, index) => {
        var post = `
        <article class="post">
        <h2>${item.Title}</h2>
        <span class="date">${item.Date}</span>
        <p> ${item.Content}</p>
        <a href="#" class="button-more">Leer más</a>
    </article> `;

        $('#posts').append(post);
    });

    // selector de tema

    var tema = $("#Tema");
    //Seleciona Tema Default.
    $("#tema-default").click(function() {
        tema.attr("href", "css/tema-default.css");
    });

    //Selecciona Tema Verde.

    $("#tema-verde").click(function() {
        tema.attr("href", "css/tema-verde.css");
    });

    // Selecciona Tema Rojo.
    $("#tema-rojo").click(function() {
        tema.attr("href", "css/tema-rojo.css");
    });



    //Scroll arriba Web-----------------------------------------------------------------------------------------------
    $(".subir").click(function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //Login Falo-----------------------------------------------------------------------------------------------------

    $("#login form").submit(function() {
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);

    });
    var form_name = localStorage.getItem("form_name");
    $("#about p").html("Bienvenido " + form_name);
});