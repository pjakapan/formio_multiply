// -----------------------------------------------------------------------------------------------------------------------------
// Load data form azure : start (API)
// -----------------------------------------------------------------------------------------------------------------------------
function getMuls() {
    var getsettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://togetherdemo.azure-api.net/calc/mul",
        "method": "GET"
    }

    $.ajax(getsettings).done(function (response) {

        var res_html = "";
        var res_id = "";
        var res_inputA = "";
        var res_inputB = "";
        var res_result = "";
        var res_datetimeStamp = "";

        // -----------------------------------------------
        // bind Results to inner.html
        // -----------------------------------------------

        $.each(response, function (key, value) {
            res_id = JSON.stringify(value.ID);
            res_inputA = value.InputA;
            res_inputB = value.InputB;
            res_result = value.Result;
            res_datetimeStamp = value.Datetimestamp;
            res_html += "<p class='info'>" + "<strong>ID: " + res_id + "</strong> " + "(" + res_inputA + " x " + res_inputB + ") = " + res_result + "<span class='pull-right' style='color:blue'>" + res_datetimeStamp + "</span>" + "</p>";
        });
        console.log(res_html);
        return res_html;

    });
}
