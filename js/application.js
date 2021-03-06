function injectContent(content, section) {
		$(section).html(content);
	}

function formatContent(content, section) {
	var i,
		trim = content.response.results;
		htmlContent = [];
	for (i=0; i<5; i += 1) {
		htmlContent += "<h3><a class= 'news-items' href='" + trim[i].webUrl;
		htmlContent += "'>" + trim[i].webTitle + "</a></h3><br>";
	}
	injectContent(htmlContent, section);
}

function getContent(news, section) {
	$.ajax({
		url: "http://content.guardianapis.com/search?api-key=test&show-elements=" + news +"&q=" + news,
		//url: link,
		success: function(data){
			formatContent(data, section)
		}
	});
}

function sectionChange(newUrl, newSection){
	getContent(newUrl, newSection);
}

var main = function main() {

	var ukUrl = "uk-news",
		travelUrl = "travel",
		footballUrl = "football",
		currentUrl = ukUrl,
		currentTab = "#news";

	getContent(currentUrl, currentTab); //Load page on current

	$(".zone-news").click(function(){
		currentUrl = ukUrl;
		currentTab = "#news";
		sectionChange(currentUrl, currentTab);
	});


	$(".zone-travel").click(function(){
		currentUrl = travelUrl;
		currentTab = "#travel";
		sectionChange(currentUrl, currentTab);
	});


	$(".zone-football").click(function(){
		currentUrl = footballUrl;
		currentTab = "#football";
		sectionChange(currentUrl, currentTab);
	});

	$("#search-btn").click(function(){
		var searchCriteria = "+" + $("#search-box").val();
		sectionChange(currentUrl + searchCriteria, currentTab);
	});

function clickResponse(url, tab){
	currentUrl = url;
	currentTab = tab;
	sectionChange(currentUrl, currentTab);
}

};

$(document).ready(main);