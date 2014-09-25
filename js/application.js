function injectContent(content, section) {
		$(section).html(content);
	}

function formatContent(content, section) {
	var i,
		trim = content.response.results;
		htmlContent = [];
	for (i=0; i<5; i += 1) {
		htmlContent = htmlContent + "<h3><a class= 'news-items' href='" + trim[i].webUrl;
		htmlContent = htmlContent + "'>" + trim[i].webTitle + "</a></h3><br>";
	}
	injectContent(htmlContent, section);
}

function getContent(link, section) {
	$.ajax({
		url: link,
		success: function(data){
			formatContent(data, section)
		}
	});
}

function sectionChange(newUrl, newSection){
	getContent(newUrl, newSection);
}

var main = function main() {

	var ukUrl = "http://content.guardianapis.com/search?api-key=test&show-elements=uk%20news&q=uk%20news",
		travelUrl = "http://content.guardianapis.com/search?api-key=test&show-fields=travel&show-elements=travel&order-by=newest&q=travel",
		footballUrl = "http://content.guardianapis.com/search?api-key=test&show-fields=football&show-elements=football&q=football";

	getContent(ukUrl, "#news"); //Load page on current

	$(".zone-news").click(sectionChange(ukUrl, "#news"));
	$(".zone-travel").click(sectionChange(travelUrl, "#travel"));
	$(".zone-football").click(sectionChange(footballUrl, "#football"));


	//$("#tabs").tabs(); //create tabs

};

$(document).ready(main);