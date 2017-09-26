
function loadForm(JsonFileName) {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "json/" + JsonFileName + ".json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
}