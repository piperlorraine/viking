    //ShopPopUp(string popUpId, int topOffset, int leftOffset)
    //Params:  popUpId     - the id of the html div control
    //         topOffset   - the offset from middle (typically -1 * half the height of your popup window if you want the popup centered)
    //         leftOffset  - the offset from center (typically -1 * half the width of your popup window if you want the popup centered)
    function ShowPopUp(popUpId, topOffset, leftOffset, setPositionFlag)
    {
    if(popUpId==null||popUpId==''){ popUpId = 'pnlPopUp'; }
        if (document.getElementById(popUpId)!=null){
            document.getElementById(popUpId).style.zIndex = 100;
            if (setPositionFlag){
                SetPopupPosition(document.getElementById(popUpId), topOffset, leftOffset);  
            }
            document.getElementById(popUpId).style.visibility = "visible";
        }
    }
    
    //ClosePopup(string popUpId)
    //Params:   popUpId     - the id of the html div control
    function ClosePopup(popUpId)
    {
        if(popUpId==null||popUpId==''){ popUpId = 'pnlPopUp'; }
        if (document.getElementById(popUpId)!=null){
            document.getElementById(popUpId).style.visibility = "hidden";
        }
    }

    //SetPopupPosition(div popup, int topOffset, int leftOffset)
    //Params:  popup       - the html div control
    //         topOffset   - the offset from middle (typically -1 * half the height of your popup window if you want the popup centered)
    //         leftOffset  - the offset from center (typically -1 * half the width of your popup window if you want the popup centered)
    function SetPopupPosition(popup, topOffset, leftOffset)
    {	
	    if (document.documentElement)
	    {            
		    l = (document.documentElement.offsetWidth / 2) + document.documentElement.scrollLeft;
		    t = (document.documentElement.offsetHeight / 2) + document.documentElement.scrollTop;
            if (navigator.appName.indexOf("Netscape")!=-1||navigator.userAgent.indexOf("Firefox")!=-1)
        	{
        	    t = document.documentElement.scrollTop + 450;
        	}
	    }
	    else if (document.body)
	    {
		    l = (document.body.offsetWidth / 2) + document.body.scrollLeft;
		    t = (document.body.offsetHeight / 2) + document.body.scrollTop;
	    }
	    if (leftOffset==null){l += 300;}else{l += leftOffset;}
        if (topOffset==null){t += 300;}else{t += topOffset;}		    

	    popup.style.left = l + "px" ;
	    popup.style.top = t + "px" ;
    }


	// ie6 modal popup fix for ajaxcontroltoolkit version 1.0.10920.32880
	function AjaxModalPopupExtIE6Hack()
	{
		var form = document.getElementById("aspnetForm");
		
		AjaxControlToolkit.ModalPopupBehavior.prototype._layoutForegroundElement = function(xCoord, yCoord) {
			if (this._isIE6) {
				var o = this._foregroundElement;
				var w = o.offsetWidth;
				var h = o.offsetHeight;
				var sw = document.documentElement.offsetWidth;
				var sh = document.documentElement.offsetHeight;
				var st = document.documentElement.scrollTop;
				var sl = document.documentElement.scrollLeft;
				
				
				var t = st + (sh / 2) - (h / 2);
				var l = sl + (sw / 2) - (w / 2);
				
				o.style.top = t + "px";
				o.style.left = l + "px";
				o.style.zIndex = 3912786;
				this._backgroundElement.appendChild(o);
			}
		};

		AjaxControlToolkit.ModalPopupBehavior.prototype._layoutBackgroundElement = function() {
			if (this._isIE6) {
				var backgroundLocation = $common.getLocation(this._backgroundElement);
				var backgroundXCoord = backgroundLocation.x;
				if (backgroundXCoord != 0) {
					this._backgroundElement.style.left = ( - backgroundXCoord) + 'px';
				}
				var backgroundYCoord = backgroundLocation.y;
				if (backgroundYCoord != 0) {
					this._backgroundElement.style.top = ( - backgroundYCoord) + 'px';
				}
	            
				this._backgroundElement.style.width = document.documentElement.scrollWidth + "px";
				this._backgroundElement.style.height = document.documentElement.scrollHeight + "px";
				this._backgroundElement.style.top = "0px";
				this._backgroundElement.style.left = "0px";
				form.appendChild(this._backgroundElement);
				this._backgroundElement.style.zIndex = 3912785;
				this._backgroundElement.style.filter = "alpha(opacity=70)";
				return;
			}
			var clientBounds = $common.getClientBounds();
			var clientWidth = clientBounds.width;
			var clientHeight = clientBounds.height;
			this._backgroundElement.style.width = Math.max(Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), clientWidth) + 'px';
			this._backgroundElement.style.height = Math.max(Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), clientHeight) + 'px';
		};
	}		