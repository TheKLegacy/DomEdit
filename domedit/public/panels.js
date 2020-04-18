console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight-59);

jQuery(function($) 
{
    $('#split-me')
        .width(document.documentElement.clientWidth)
        .height(document.documentElement.clientHeight-59)
        .split({
        orientation:'vertical',
        position: '200px'
        })

});