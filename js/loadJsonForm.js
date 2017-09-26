
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
    var form = loadForm(val.name);
    arrForm.push(form);
});

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