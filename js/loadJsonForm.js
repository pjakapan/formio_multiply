
// -----------------------------------------------------------------------------------------------------------------------------
// Load form.io functions                                                                                        loadJsonForm.js 
// -----------------------------------------------------------------------------------------------------------------------------

var arrForm = [];
var myForm =
    [
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" }
    ];

jQuery.each(myForm, function (i, val) {
    arrForm.push(loadForm(val.name));
});

function loadForm(JsonFileName) {

    var json = null;
    var getsetting = {
        'async': false,
        'global': false,
        'url': './json/'+ JsonFileName +'.json',
        'dataType': "json",
        "method": "GET"
    }
    $.ajax(getsetting).done(function (data) {
        json = data;
    });
    return json;
}
