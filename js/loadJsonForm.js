
// -----------------------------------------------------------------------------------------------------------------------------
// Load form.io functions : start
// -----------------------------------------------------------------------------------------------------------------------------
var arrForm = [];
var myForm =
    [
        { "name": "fixedform.1" },
        { "name": "fixedform.2" },
        { "name": "fixedform.3" },
        { "name": "fixedform.4" },
        { "name": "fixedform.5" },
        { "name": "fixedform.6" },
    ];

jQuery.each(myForm, function (i, val) {
    arrForm.push(loadForm(val.name));
});

function loadForm(JsonFileName) {
    var json = null;
    var getsetting = {
        'async': false,
        'global': false,
        'url': "json/" + JsonFileName + ".json",
        'dataType': "json",
        "method": "GET"
    }
    $.ajax(getsetting).done(function (data) {
        json = data;
    });
    return json;
}