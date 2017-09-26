
// -----------------------------------------------------------------------------------------------------------------------------
// Load form.io functions : start
// -----------------------------------------------------------------------------------------------------------------------------

myForm =
    [
        { "name": "John", "age": 30, "car": null },
        { "name": "John", "age": 32, "car": null },
        { "name": "John", "age": 33, "car": null }
    ];
console.log(myForm);

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