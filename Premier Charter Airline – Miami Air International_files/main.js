$(document).ready(function () {

    var d = new Date();
    $('#copyright').html('Copyright &copy; ' + d.getFullYear() + ' Miami Air International, Inc. All Rights Reserved.');

    //forms
    $("#quote-form").Fvalidate({ attrForName: "Fname" });
    $("#contact-form").Fvalidate({ attrForName: "Fname" });

    $("#show1").hide();
    $("#show2").hide();

    $('#trip_type').change(function () {

        if ($("#trip_type").val() == "Round-trip") {
            $("#show1").slideDown("fast"); //Slide Down Effect
            $("#show2").slideUp("fast");  //Slide Up Effect
        }
        else if ($("#trip_type").val() == "Multiple Destinations") {
            $("#show1").slideDown("fast"); //Slide Down Effect
            $("#show2").slideDown("fast"); //Slide Down Effect
        } else {
            $("#show1").slideUp("fast");  //Slide Up Effect
            $("#show2").slideUp("fast");  //Slide Up Effect
        }
    });

    $("#depart_date_input_1").datepicker({ showOn: "focus", dateFormat: "mm-dd-yy", altField: "#depart_date_1", altFormat: "yy-mm-dd", changeYear: true, changeMonth: true, onClose: function (dateText, int) { if ($("#depart_date_input_1").val() == "") { $("#depart_date_1").val(""); } } });
    $("#depart_date_input_2").datepicker({ showOn: "focus", dateFormat: "mm-dd-yy", altField: "#depart_date_2", altFormat: "yy-mm-dd", changeYear: true, changeMonth: true, onClose: function (dateText, int) { if ($("#depart_date_input_2").val() == "") { $("#depart_date_2").val(""); } } });
    $("#depart_date_input_3").datepicker({ showOn: "focus", dateFormat: "mm-dd-yy", altField: "#depart_date_3", altFormat: "yy-mm-dd", changeYear: true, changeMonth: true, onClose: function (dateText, int) { if ($("#depart_date_input_3").val() == "") { $("#depart_date_3").val(""); } } });
    $("#depart_date_input_4").datepicker({ showOn: "focus", dateFormat: "mm-dd-yy", altField: "#depart_date_4", altFormat: "yy-mm-dd", changeYear: true, changeMonth: true, onClose: function (dateText, int) { if ($("#depart_date_input_4").val() == "") { $("#depart_date_4").val(""); } } });
    $("#depart_date_input_5").datepicker({ showOn: "focus", dateFormat: "mm-dd-yy", altField: "#depart_date_5", altFormat: "yy-mm-dd", changeYear: true, changeMonth: true, onClose: function (dateText, int) { if ($("#depart_date_input_5").val() == "") { $("#depart_date_5").val(""); } } });

    //tools expand/collapse
    $('#customer-tools dd').each(function () {
        if ($(this).children().length > 1) {
            $(this).prev().addClass("expandable");
            minHeight = $(this).children().first().height();
            $(this).children().wrapAll('<div class="more-less-wrapper"><div class="more-less-content"></div></div>');
            $(this).children().css('height', minHeight);
        }
    });

    $('#customer-tools dt.expandable').click(function () {
        $moreLessContent = $(this).next().find(".more-less-content");
        if ($(this).hasClass('open')) {
            // it's opened or being opened so animate down to minHeight
            minHeight = $moreLessContent.children(":first").height();
            $moreLessContent.parent().animate({ height: minHeight });
        }
        else {
            //it's closed or being closed so animate to auto height
            maxHeight = $moreLessContent.height();
            $moreLessContent.parent().animate({ height: maxHeight });
        }
        $(this).toggleClass('open');
    });

    $('#tools #expandall').click(function () {
        $("#customer-tools dt.expandable").each(function () {
            if (!$(this).hasClass('open')) {
                maxHeight = $(this).next().find(".more-less-content").height();
                $(this).next().children().animate({ height: maxHeight });
                $(this).addClass('open');
            }
        });
    });

    $('#tools #collapseall').click(function () {
        $("#customer-tools dt.expandable.open").each(function () {
            minHeight = $(this).next().find(".more-less-content").children(":first").height();
            $(this).next().children().animate({ height: minHeight });
            $(this).removeClass('open');
        });
    });

    //management expand/collapse
    $('.profile').each(function () {
        if ($(this).children().length > 1) {
            minHeight = $(this).children().first().height();
            $(this).children().wrapAll('<div class="more-less-wrapper"><div class="more-less-content"></div></div>');
            $(this).find('.more-less-wrapper').after('<a href="#" class="more-less-btn">Read More</a>');
            $(this).children().first().css('height', minHeight);
        }
    });

    $('.more-less-btn').click(function (event) {
        event.preventDefault();
        $moreLessContent = $(this).prev().find(".more-less-content");
        if ($(this).hasClass('open')) {
            // it's opened or being opened so animate down to minHeight
            minHeight = $moreLessContent.children(":first").height();
            $moreLessContent.parent().animate({ height: minHeight });
            $(this).text('Read More');
        }
        else {
            //it's closed or being closed so animate to auto height
            maxHeight = $moreLessContent.height();
            $moreLessContent.parent().animate({ height: maxHeight });
            $(this).text('Close View');
        }
        $(this).toggleClass('open');
    });

    //faq and careers expand/collapse
    $('#main-faq dd, #positions dd').hide();
    $('#main-faq dt, #positions dt').addClass("expandable");
    $('#main-faq dt, #positions dt').click(function () {
        $(this).toggleClass("open");
        $(this).next().slideToggle('fast');
    }); //end toggle

    $('#faq #expandall, #careers #expandall').click(function () {
        $('#main-faq dd, #positions dd').slideDown('fast');
        $('#main-faq dt, #positions dt').addClass("open");
    });

    $('#faq #collapseall, #careers #collapseall').click(function () {
        $('#main-faq dd, #positions dd').slideUp('fast');
        $('#main-faq dt, #positions dt').removeClass("open");
    });

    //fancybox initialization
    $(".fancybox").fancybox({
        type: 'image',
        fitToView: false,
        aspectRatio: true,
        openEffect: 'fade',
        closeEffect: 'fade'
    });

    $("#ceo-message, #cat-ii").hide();
    $("#news .fancybox-inline").fancybox({
        fitToView: false,
        width: 592,
        height: 'auto',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none'
    });

    $('#about-video').hide();
    $("#about .fancybox-inline").fancybox({
        fitToView: false,
        width: 480,
        height: 380,
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none'
    });

    $(".fancybox-ajax").fancybox({
        // maxWidth	: 800,
        // maxHeight	: 600,
        fitToView: false,
        width: 592,
        height: 'auto',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none',
        ajax: {
            dataFilter: function (data) {
                return $(data).find('#baggage-claim-info')[0];
            }
        }
    });

    //fleet 378 slider
    $("#split-config").addClass("active");

    $("#split-config").click(function (event) {
        event.preventDefault();
        $(this).addClass("active");
        $("#single-config").removeClass("active");
        $("#seating-charts").animate({ left: 0 });
    });

    $("#single-config").click(function (event) {
        event.preventDefault();
        $(this).addClass("active");
        $("#split-config").removeClass("active");
        $("#seating-charts").animate({ left: -290 });
    });

    $("#Itinerary_1").css("display", "inline");
    $("#depart_city_1").attr("required", "true");
    $("#destin_city_1").attr("required", "true");
    $("#depart_date_input_1").attr("required", "true");
    $("#depart_time_1").attr("required", "true");
});

function AddItinerary() {
    var num = $("#ItineraryNumber").val();
    if (num == 1) {
        $("#Itinerary_2").css("display", "inline");
        $("#depart_city_2").attr("required", "true");
        $("#destin_city_2").attr("required", "true");
        $("#depart_date_input_2").attr("required", "true");
        $("#depart_time_2").attr("required", "true");
        $("#ItineraryNumber").val("2");
    }
    if (num == 2) {
        $("#Itinerary_3").css("display", "inline");
        $("#depart_city_3").attr("required", "true");
        $("#destin_city_3").attr("required", "true");
        $("#depart_date_input_3").attr("required", "true");
        $("#depart_time_3").attr("required", "true");
        $("#ItineraryNumber").val("3");
    }
    if (num == 3) {
        $("#Itinerary_4").css("display", "inline");
        $("#depart_city_4").attr("required", "true");
        $("#destin_city_4").attr("required", "true");
        $("#depart_date_input_4").attr("required", "true");
        $("#depart_time_4").attr("required", "true");
        $("#ItineraryNumber").val("4");
    }


};

function RemoveItinerary(number) {
    var itNum = $("#ItineraryNumber").val();
    if (number == 2) {
        if (itNum == 2) {
            $("#depart_city_2").val("");
            $("#destin_city_2").val("");
            $("#depart_date_input_2").val("");

            $("#depart_city_2").removeAttr("required");
            $("#destin_city_2").removeAttr("required");
            $("#depart_date_input_2").removeAttr("required");
            $("#depart_time_2").removeAttr("required");

            $("#Itinerary_2").css("display", "none");
            $("#ItineraryNumber").val("1");
        }

        if (itNum == 3) {
            $("#depart_city_2").val($("#depart_city_3").val());
            $("#destin_city_2").val($("#destin_city_3").val());
            $("#depart_date_input_2").val($("#depart_date_input_3").val());

            $("#depart_city_3").val("");
            $("#destin_city_3").val("");
            $("#depart_date_input_3").val("");

            $("#depart_city_3").removeAttr("required");
            $("#destin_city_3").removeAttr("required");
            $("#depart_date_input_3").removeAttr("required");
            $("#depart_time_3").removeAttr("required");

            $("#Itinerary_3").css("display", "none");
            $("#ItineraryNumber").val("2");
        }
        if (itNum == 4) {

            $("#depart_city_2").val($("#depart_city_3").val());
            $("#destin_city_2").val($("#destin_city_3").val());
            $("#depart_date_input_2").val($("#depart_date_input_3").val());
            $("#depart_city_3").val($("#depart_city_4").val());
            $("#destin_city_3").val($("#destin_city_4").val());
            $("#depart_date_input_3").val($("#depart_date_input_4").val());

            $("#depart_city_4").val("");
            $("#destin_city_4").val("");
            $("#depart_date_input_4").val("");

            $("#depart_city_4").removeAttr("required");
            $("#destin_city_4").removeAttr("required");
            $("#depart_date_input_4").removeAttr("required");
            $("#depart_time_4").removeAttr("required");

            $("#Itinerary_4").css("display", "none");
            $("#ItineraryNumber").val("3");
        }
    }

    if (number == 3) {
        if (itNum == 3) {
            $("#depart_city_3").val("");
            $("#destin_city_3").val("");
            $("#depart_date_input_3").val("");

            $("#depart_city_3").removeAttr("required");
            $("#destin_city_3").removeAttr("required");
            $("#depart_date_input_3").removeAttr("required");
            $("#depart_time_3").removeAttr("required");

            $("#Itinerary_3").css("display", "none");
            $("#ItineraryNumber").val("2");
        }
        if (itNum == 4) {

            $("#depart_city_3").val($("#depart_city_4").val());
            $("#destin_city_3").val($("#destin_city_4").val());
            $("#depart_date_input_3").val($("#depart_date_input_4").val());

            $("#depart_city_4").val("");
            $("#destin_city_4").val("");
            $("#depart_date_input_4").val("");

            $("#depart_city_4").removeAttr("required");
            $("#destin_city_4").removeAttr("required");
            $("#depart_date_input_4").removeAttr("required");
            $("#depart_time_4").removeAttr("required");

            $("#Itinerary_4").css("display", "none");
            $("#ItineraryNumber").val("3");
        }
    }
    if (number == 4) {
        $("#depart_city_4").val("");
        $("#destin_city_4").val("");
        $("#depart_date_input_4").val("");

        $("#depart_city_4").removeAttr("required");
        $("#destin_city_4").removeAttr("required");
        $("#depart_date_input_4").removeAttr("required");
        $("#depart_time_4").removeAttr("required");

        $("#Itinerary_4").css("display", "none");
        $("#ItineraryNumber").val("3");
    }


};