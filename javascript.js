$( document ).ready(function(){  
    $.getJSON('http://localhost:8080/api/links', function(result){
        $.each(result, function(i, link){
            $('#linksTable tr:last').after(getLinksTableRow(i+1, link.name, link.link)); 
        });
    });
});

var getLinksTableRow = function(n, linkstring, link){
    return '<tr>'+
        '<td align="right" valign="top" class="title"><span class="rank">'+n+'.</span></td>'+
        '<td class="title"><a href="'+link+'">'+linkstring+'</a></td>'+
        '</tr>'
};


