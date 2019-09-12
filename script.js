function button() {
    $('button').click(function(event) {
        let but = $(this).text()
        console.log(but);
        $('section').addClass('hidden');
        $(`.${but}`).removeClass('hidden');
    })
}



$(button);