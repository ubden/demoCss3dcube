$(function() {

    $('#dateOver').datepicker({
        numberOfMonths: 3,
        prevText: '<',
        nextText: '>'
    });

    $('#date').addClass('hidden');
    $('#dateTrigger').on('focus', function() {

        $('#dateOver').find('*').addClass('NotMe');

        $('.ui-corner-all').on('mousedown', function() {
            $('#dateOver').find('*').addClass('NotMe');
        });

        setTimeout(function() {
            $('#dateOver').fadeIn(200);
        },400);
    });

    $('body').on('click', function(e) {
        if( !$(e.target).hasClass('NotMe') ) {
            if( $('#dateOver').is(':visible') ) {

                var gDate = $('#dateOver').datepicker({ dateFormat: 'dd-mm-yy' }).val();
                $('#dateTrigger').val(gDate);

                $('#dateOver').fadeOut(400);
            }
        }
    });

    $('#wrap').find('*').addClass('NotMe');


    // Add classes for animation
    $('#input-nxt').on('focus', function() {
        $('#cube').removeClass().addClass('rf');
    })

    $('#r-back').on('click', function() {
        $('#cube').removeClass();
    })

    $('#r-next').on('click', function() {
        $('#cube').removeClass().addClass('bf');
    })

    $('#b-back').on('click', function() {
        $('#cube').removeClass().addClass('rf');
    })

    $('#b-next').on('click', function() {
        $('#cube').removeClass().addClass('lf');
    })

    $('#finish').on('click', function() {
        $('#cube').removeClass().addClass('tf');
    })

    $('#backwards').on('click', function() {
        $('#cube').removeClass().addClass('ff');
    })

});