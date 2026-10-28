$(function () {
    var duration=300;
// btn1
$('.btn1')
.on('mouseover', function () {
    $(this).stop(true).animate({
        'background-color' : '#FFBD60',
        color:'#000'
    },duration
    );
    
});
.on('mouseout', function () {
    $(this).stop(true).animate({
        'background-color' : '#F3D05A',
        color:'#000'
    },duration
    );
    
});


});