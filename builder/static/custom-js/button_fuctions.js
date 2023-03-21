function myFunction(type) {
    console.log(type); 
    url = '/'+ type +'/'
    $.ajax({
        type: "GET",
        url: url,
        
        success: function (data) {
            console.log(data);
        }
    });
    document.getElementById('thisframe').contentDocument.location.reload(true);
}
