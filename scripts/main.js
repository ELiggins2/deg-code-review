$(document).ready(function () {
    $('.btn-success').click(function () {
        var blah = $('#uxSearchInput').val()
        $('#uxZipResult').html(blah);
    })

    $('#rangeInput').on('change', function () {
        $('#uxMiles').html("Current: " + $('#rangeInput').val() + " Miles From")
    });

    $('#uxMiles').on('keyup', function () {
        $('#rangeInput').html($('#uxMiles').val());
    });

    $('input:checkbox').change(function () {
        if ($('#female').is(':checked')) {
            $('#doc1, #doc2').addClass('hide');
        } else if ($('#male').is(':checked')) {
            $('#doc3').addClass('hide');
        } else {
            $('#doc1, #doc2,#doc3').removeClass('hide');
        }
    });

});
