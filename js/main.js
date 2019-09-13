var srsListShown = false;
var thesisListShown = false;
$('#collapse-srs-list').hide();

// Highlight a card when hovered over.
$('.card').hover(
    function () {
        $(this).removeClass('bg-less border-less').addClass('bg-light text-dark');

    },
    function () {
        $(this).removeClass('bg-light text-dark').addClass('bg-less border-less');
    });

// Fill download button when hovered over.
$('.download-icon').hover(
    function () {
        $(this).addClass('fas').removeClass('far');
    },
    function () {
        $(this).addClass('far').removeClass('fas');
    }
)

// Highlight clicked navbar item.
$('.nav-item').click(function () {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
});

// Toggle SRS list.
$('#toggle-srs-list').click(function () {
   if (srsListShown) {
       $('#collapse-srs-list').hide();
       srsListShown = false;
   }
   else {
       $('#collapse-srs-list').show();
       srsListShown = true;
   }
});

// Toggle Thesis list.
$('#toggle-thesis-list').click(function () {
    if (thesisListShown) {
        $('#collapse-thesis-list').hide();
        thesisListShown = false;
    }
    else {
        $('#collapse-thesis-list').show();
        thesisListShown = true;
    }
});