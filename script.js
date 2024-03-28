$(document).ready(function() {
    const boxGrid = [
        {
            name: 'Box',
            display: true,
        },
        {
            name: 'Box',
            display: true,
        },
        {
            name: 'Box',
            display: true,
        },
        {
            name: 'Box',
            display: true,
        },
        {
            name: 'Box',
            display: true,
        },
        {
            name: 'Box',
            display: true,
        },
        {
            name: 'Box',
            display: true,
        },
        {
            name: 'Box',
            display: true,
        },
        {
            name: 'Box',
            display: true,
        },
        {
            name: 'Box',
            display: true,
        },
        {
            name: 'Box',
            display: true,
        },
        {
            name: 'Box',
            display: true,
        },
        {
            name: 'Box',
            display: true,
        },
        {
            name: 'Box',
            display: true,
        },
        {
            name: 'Box',
            display: true,
        },
        {
            name: 'Box',
            display: true,
        },
      
    ];
    let boxes = $('.boxDisplay');
    $(boxGrid).each(function() {
        let item = this;
        if (item.display) {
            $(boxes).append(`
            <div class = "boxContainer">
            <div class="box">
            
            </div>
            </div>
            `);
            
        } 
    });
$('.boxContainer').on('click', '.box' ,function(){
    $('.box').dblclick(function() {
    $(this).toggleClass('clicked');
});
});
});