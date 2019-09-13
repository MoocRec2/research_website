// Highlight a card when hovered over.
$('.card').hover(
    function () {
        $(this).removeClass('bg-less border-less').addClass('bg-light text-dark');

    },
    function () {
        $(this).removeClass('bg-light text-dark').addClass('bg-less border-less');
    });