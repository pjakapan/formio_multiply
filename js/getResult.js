
// -----------------------------------------------------------------------------------------------------------------------------
// Load data form azure : start (API)
// -----------------------------------------------------------------------------------------------------------------------------

function getMuls(mul) {
    var res_html = "";
    var getsettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://togetherdemo.azure-api.net/calc/" + mul,
        "method": "GET"
    }
    res_html = $.ajax(getsettings).done(function (response) {
        var html = "";
        $.each(response, function (key, value) {
            var res_id = JSON.stringify(value.ID);
            var res_inputA = value.InputA;
            var res_inputB = value.InputB;
            var res_result = value.Result;
            var res_datetimeStamp = value.Datetimestamp;
            html += "<p class='info'>" + "<strong>ID: " + res_id + "</strong> " + "(" + res_inputA + " x " + res_inputB + ") = " + res_result + "<span class='pull-right' style='color:blue'>" + res_datetimeStamp + "</span>" + "</p>";
        });
        return html;
    });

    return res_html;
}
