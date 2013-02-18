/*  PopUp Vars  */
var win;

/*  PopUps  */
  function pop ($scase) {
    switch ($scase) {
      case 'enlarge':
        var url = pop.arguments [1];
        popup (url, 600, 500, 'largemap', 'yes', 'no', 'auto', 'no', 'no', 'no');
        break;
    }
  }
  // Make Popup Windows
  function popup (url, w, h, windowName, r, st, s, l, m, t) {
    win = null;
    // Fudge Size
    h += 20;
    w += 20;
    // Set Too Center
    var winl = (screen.width-w)/2;
    var wint = (screen.height-h)/2;
   // Call popup
    win = window.open (url, windowName, 'height=' +h+ ', width=' +w+ ', resizable=' +r+ ', status= ' +st+ ', scrollbars=' +s+ ', location=' +l+ ', menubar=' +m+ ', toolbar= ' +t+ ', left=' +winl+ ', top=' +wint);
    // Focus
    win.focus();    
  }

/* New Window */
  function FixedWindow (url, windowName) {
	  win = null;
	  win = window.open (url, windowName, '');
	  win.focus();
  }

/* online booking */
function cb_ExportFilterState(res) {
	curState = res.value;
	prevState = $.extend(true, {}, curState);
}
function cb_ExportFilterSort(res) {
	curSort = res.value;
}
function cb_UpdateResults(res)
{
    var ret_searchRequestId = res.value[5];
	if (searchRequestId == ret_searchRequestId)
	{
		document.getElementById("pnlResults").innerHTML = res.value[0];
		document.getElementById("fac_result_count").innerHTML = res.value[1];
		document.getElementById("fac_result_count_bottom").innerHTML = res.value[1];
		document.getElementById("fac_result_paging").innerHTML = res.value[2]; 
        document.getElementById("fac_result_paging_bottom").innerHTML = res.value[2];
		curState.ResultCount = res.value[4];
		svrSearchRequestId = res.value[6];
    }
    if (typeof(BindEvents) == "function") {
        BindEvents(svrSearchRequestId); 
    }
}
function cb_updateFormResults(res)
{
	var ret_searchRequestId = res.value[5];
	if (searchRequestId == ret_searchRequestId)
	{
		document.getElementById("fac_result_count").innerHTML = res.value[4];
		document.getElementById("fac_result_count2").innerHTML = res.value[4];
		//check for 0 results
		if (res.value[4] == 0)
		{
			//document.getElementById("topFormResultCount").style.color = 'red';
			document.getElementById("bottomFormResultCount").style.color = 'red';
		}
		else
		{
			//document.getElementById("topFormResultCount").style.color = '#000';
			document.getElementById("bottomFormResultCount").style.color = '#000';
		}
		svrSearchRequestId = res.value[6];
	}
}

function setPrevFilter()
{
	if (curState.ResultCount > 0)
	{
		prevState = $.extend(true, {}, curState);
	}
}

function cb_updatePopup(res)
{
	var pnlPopupExt = $find(res.value[0]);
	var pnlPopupContent = document.getElementById(res.value[1]);
	if (pnlPopupExt != null && pnlPopupContent != null)
	{
		pnlPopupContent.innerHTML = res.value[2];
		var originalOffsetY = pnlPopupExt.get_OffsetY();
		
		//loop through offsetParents to get the current popup Y position
		var ypos = pnlPopupExt.get_element().offsetTop;
		var initialOffset = ypos;
		var varParent = pnlPopupExt.get_element().offsetParent;
		while (varParent != null)
		{
			ypos = ypos + varParent.offsetTop;
			varParent = varParent.offsetParent;
		}
		
		var iScrollY = 0;
		if (Sys.Browser.agent === Sys.Browser.InternetExplorer)
		{
			if (!document.documentElement.scrollTop)
				iScrollY = document.body.scrollTop;
			else
				iScrollY = document.documentElement.scrollTop;
		}
		else
		{
			iScrollY = window.pageYOffset;
		}
		
		
		if (iScrollY - ypos >= 0) //scroll is after popup
		{
			pnlPopupExt.set_OffsetY(iScrollY - ypos + 100);
		}
		else if (ypos - iScrollY < 100)
		{
			pnlPopupExt.set_OffsetY(100 - (ypos - iScrollY));
		}
		
		pnlPopupExt.showPopup();
		pnlPopupExt.set_OffsetY(originalOffsetY);
	}
}

function cb_Book(res)
{
    if (res.value.length > 0) {
        window.location = res.value;
    }
}
