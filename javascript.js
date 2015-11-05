$( document ).ready(function(){  

	$.getJSON('http://localhost:8080/api/links', function(result){
		$.each(result, function(i, link){
			$('#linksTable tr:last').after(getLinksTableRow(i+1, link.name)); 
		});
	});
});

var getLinksTableRow = function(n, linkstring){
   return '<tr>'+
      '<td align="right" valign="top" class="title"><span class="rank">'+n+'.</span></td>'+
      '<td class="title"><a href="">'+linkstring+'</a></td>'+
      '</tr>'
};


