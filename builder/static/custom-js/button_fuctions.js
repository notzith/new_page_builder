function myFunction() {
    $.ajax({
        type: "GET",
        url: "/creator/",
        success: function (data) {
            console.log(data);
        }
    });
    document.getElementById('thisframe').contentDocument.location.reload(true);
}
