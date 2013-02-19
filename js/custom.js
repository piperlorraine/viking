$(document).ready(function() {
	$("#ctl00_header_txtSearch").click(function() {
		if($(this).val() == "SEARCH") {
			$(this).val("");
		} else if($(this).val() == "") {
			$(this).val() = "SEARCH";
		}
	});
});