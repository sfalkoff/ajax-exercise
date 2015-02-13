// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    // Get the fortune and show it in the fortune-text div
    $("#fortune-text").load("/fortune");
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();
    var url = "/weather?zipcode=" + $("#zipcode-field").val();
    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, function(result) {
        $("#weather-info").append(result.forecast,"<br>", result.temp);
    });
}

$("#weather-form").on('submit', showWeather);


// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    $.post("/order-melons",
        $('#order-form').serialize(),
        function (result) {
            $("#order-status").text(result.msg);

            if(result.code === "ERROR") {
                $("#order-status").addClass("order-error");
            }

            if(result.code !== "ERROR") {
                $("#order-status").removeClass("order-error");
            }
        }
    );
}

$("#order-form").on('submit', orderMelons);


