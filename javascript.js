$( document ).ready(function(){  
	var linksModel = []; 


	$.getJSON('http://localhost:8080/api/links', function(data){
		var i = 0;
		for(; i < data.length; i++){
			$('#linksTable tr:last').after(getLinksTableRow(i+1, data[i].name)); 
		}
	});
});

var getLinksTableRow = function(n, linkstring){
   return '<tr>'+
      '<td align="right" valign="top" class="title"><span class="rank">'+n+'.</span></td>'+
      '<td class="title"><a href="">'+linkstring+'</a></td>'+
      '</tr>'
};


