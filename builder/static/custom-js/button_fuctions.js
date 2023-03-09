let headerurl = "/page_creator/";

function header(orderId) {   
    orderId = 1
    var csrftoken = '{{ csrf_token }}';
    $.post(headerurl, { 'csrfmiddlewaretoken': csrftoken, 'orderId': orderId }, function (data) 
    {
        console.log(data);
        window.location.reload();
     });
}

