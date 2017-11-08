
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
    var url = "json/" + JsonFileName + ".json";
    var urlwithcdn = loadcdn(url);
    var json = null;
    var getsetting = {
        'async': false,
        'global': false,
        'url': urlwithcdn,
        'dataType': "json",
        "method": "GET"
    }
    $.ajax(getsetting).done(function (data) {
        json = data;
    });
    return json;
}

function loadcdn(url) {
    var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJLVmN1enFBaWRPTHFXU2FvbDd3Z0ZSR0NZbyIsImtpZCI6IjJLVmN1enFBaWRPTHFXU2FvbDd3Z0ZSR0NZbyJ9.eyJhdWQiOiJjMzRiNDlmMS0yY2Q1LTQwMGYtODNjMi0zN2Y2ZWZhOWM2M2IiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zZTBiNmNiZC00OTU5LTRkMDEtODFiZi1jZTg4M2RkYWJkOTYvIiwiaWF0IjoxNTEwMTM3ODQ4LCJuYmYiOjE1MTAxMzc4NDgsImV4cCI6MTUxMDE0MTc0OCwiYWlvIjoiQVNRQTIvOEdBQUFBblNscm42dzlLK1Jod2JwNzVkZ3BHUTlBdHdkVDVvWkdVT1N6cnlXVlRMcz0iLCJhbXIiOlsicHdkIl0sImZhbWlseV9uYW1lIjoiUGV0Y2hhbiIsImdpdmVuX25hbWUiOiJKYWthcGFuIiwiaXBhZGRyIjoiMTAxLjEwOS4xMDguODAiLCJuYW1lIjoiUGV0Y2hhbiBKYWthcGFuIC0gVG9nZXRoZXIgVEgiLCJub25jZSI6IjZlYWEyMDI5LWI5NTUtNDRmOC1iNGI1LWJiNjc0YmQwMDgyYiIsIm9pZCI6ImQwMWE2ODE3LTI1NDItNDQyNi04OWE1LWQyYjM3NDUyZTNjYyIsInN1YiI6ImZVYzhFZDFTZ24tSzR5d0phWFJDQV9GaXJWakFTb1JlRnNNaUZxc1Vlck0iLCJ0aWQiOiIzZTBiNmNiZC00OTU5LTRkMDEtODFiZi1jZTg4M2RkYWJkOTYiLCJ1bmlxdWVfbmFtZSI6ImoucGV0Y2hhbkB0b2dldGhlcnRlYW0uY28udGgiLCJ1cG4iOiJqLnBldGNoYW5AdG9nZXRoZXJ0ZWFtLmNvLnRoIiwidmVyIjoiMS4wIn0.4s3V7Oi7KSYfuKlHBpPuSROHih_ROne8xTlJGKkw95oXCEZBa1Enxpe3DgMkUc_u6eWc-trOWZ5qn52Dy7bdw3uIDpVSP8AVwGAvS1Ne2Dgeczc31FWooHBa2LFgkCUuHyq3-3fyXgTGQcCxghSefSBA0kT3wqLrtbkIOWVZ9DVKMqnCw8Zs040kCuNZrqdFTgIOxQj-6H4mVj597KKe9HlZD9wq0BhupSQjTmEmGM0i7_RzPcIkxwAElt0XNOOjSPr4Q74K26rs7tlOK0Jnqu9-yxxk6SrDiZZd4N-tLbx5uTKjdbY2beWZzBiM183RH6kxwDR7KITX7JWNI2ykRw";
    var json = null;
    var getsetting = {
        'async': false,
        'global': false,
        'url': "https://jpetchan-oriurl.azurewebsites.net/api/cdntoken?oriurl=" + url,
        'dataType': "json",
        "method": "GET",
        "headers": {
            "cache-control": "no-cache",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, Authorization",
            "Authorization": "Bearer " + token
        }
    }
    $.ajax(getsetting).done(function (data) {
        json = data;
    });
    return json;
}