
$(window).load(function () {
    if ($.cookies.test()) {
        var sessCookieVal = GetSessCookie();
        var permCookieVal = GetPermCookie();
        // Increment the pageload property and save it to the cookie
        sessCookieVal.pd = (sessCookieVal.pd + 1);
        SaveSessCookie(sessCookieVal);
        CheckVideoPlaying();
    }
});

function CheckVideoPlaying() {
    if (IsVideoPlayingFrame()) {
        window.setTimeout(CheckVideoPlaying, 15000);
    } else {
        LaunchPopups();
    }
}

function LaunchPopups() {

    var sessCookieVal = GetSessCookie();
    var permCookieVal = GetPermCookie();
    var referString = document.referrer;

    var popupSignup;
    popupSignup = false;

    // Check to see if we should launch the PopupEmailSubscribe
    if ((popupSubscribe.enabled == 1)
                && (restrictPopupToDomain())
                && (!IsVideoPlayingFrame())
                && (!IsCobrandedSite())
                && (CookieStringToDate(permCookieVal.nsd) < new Date())
                && (permCookieVal.ns == 0)
                && (permCookieVal.nso == 0)
                && (permCookieVal.cnl != 9)
                && (sessCookieVal.nso == 0)
                && (sessCookieVal.nst == 0)) {

        if ((sessCookieVal.pd >= popupSubscribe.pageLoads)
            && (sessCookieVal.pd <= (popupSubscribe.pageLoads + popupSubscribe.maxPageLoads))) {
            popupSignup = true;
            LaunchPopEmailSubForm();
        }
        else if (sessCookieVal.pd <= (popupSubscribe.pageLoads + popupSubscribe.maxPageLoads)) {
            popupSignup = true;
            window.setTimeout(LaunchPopEmailSubForm, popupSubscribe.waitTimeDelay);
        }
    }

    vrcCookies.sessCookie = sessCookieVal;
    vrcCookies.permCookie = permCookieVal;

    // Check to see if we should launch the PopupSurvey
    //        if ((!popupSignup)
    //        && (popupSurvey.enabled == 1)
    //        && (restrictToDomain())
    //        && (!IsVideoPlayingFrame())
    //        && (CookieStringToDate(permCookieVal.svd) < new Date())
    //        && (permCookieVal.sv == 0)
    //        && (permCookieVal.svo == 0)
    //        && (sessCookieVal.svo == 0)
    //        && (sessCookieVal.svt == 0)) {

    //            var pageDepthGoal = popupSurvey.pageLoads;
    //            if (sessCookieVal.hp != 0) {
    //                pageDepthGoal = popupSurvey.pageLoadsHome;
    //            }
    //            if ((sessCookieVal.pd >= pageDepthGoal)
    //            && (sessCookieVal.pd <= (pageDepthGoal + popupSurvey.maxPageLoads))) {
    //                LaunchPopSurvey();
    //            }
    //        }

}


function restrictPopupToDomain() {
    sHostName = window.location.hostname;
    sHost = window.location.host;
    if ((sHostName == siteDomain.usConsumer) || (sHostName == siteDomain.auConsumer) || (sHostName == siteDomain.ukConsumer) || (sHostName == siteDomain.localHost) || (sHost == siteDomain.DEV) || (sHost == siteDomain.UATAU) || (sHost == siteDomain.UATSSL) || (sHost == siteDomain.UATUK) || (sHost == siteDomain.UAT) || (sHostName == siteDomain.semConsumer)) {
        return true;
    }
    else {
        return false;
    }
}

function restrictToDomain() {
    //sHostName = window.location.hostname;
    //sHost = window.location.host;
    //if ((sHostName == sDomain) || (sHostName == siteDomain.localHost) || (sHost == siteDomain.DEV) || (sHost == siteDomain.UAT) || (sHost == siteDomain.UATSSL) || (sHostName == siteDomain.semConsumer)) {
    return false;
}

function IsCobrandedSite() {
    var retVal = false;
    if ($.cookies.get(vrcCookies.cobranded) != null) {
        retVal = true;
    }
    return retVal;
}

function LaunchPopEmailSubForm() {
    if (!dataDefaults.colorBoxOpen) {
        $.ajax({
            type: "POST",
            url: "/svc/global.asmx/GetPopupEmailSubscribeFormHtml",
            data: "",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(msg) {
                if (msg.hasOwnProperty("d")) {
                    RenderPopEmailSub(msg.d);
                }
                else {
                    RenderPopEmailSub(msg);
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                //alert(xhr.status + " " + textStatus + " " + errorThrown);
            }
        });
    }
}

function RenderPopEmailSub(pHtml) {
    if ((pHtml.length > 0) && (!dataDefaults.colorBoxOpen) && (!IsVideoPlayingFrame())) {
        $.colorbox(
			    {  href: pHtml, transition: 'none', scrolling: false, slideshow: false, opacity: 0.50, fastIframe: false, iframe: true, innerWidth: "768px", innerHeight: "470px", 
			        onClosed: function() {
			            if ($.cookies.test()) {

			                var sessCookieVal = GetSessCookie();
			                sessCookieVal.nso = 1;
			                SaveSessCookie(sessCookieVal);

			                var permCookieVal = GetPermCookie();
			                permCookieVal.nsd = DateToCookieString(initDateOffset(0, 0, 1));
			                SavePermCookie(permCookieVal);
			            }
			        }
			    });
    }
    else {
        //alert("No email sub for you!");
        if ($.cookies.test()) {
            var sessCookieVal = GetSessCookie();
            sessCookieVal.nst = 1;
            SaveSessCookie(sessCookieVal);
        }
    }

}

function PopEmailSubSuccess(closeColobox) {
    if (closeColobox) { $.colorbox.close(); }
    if ($.cookies.test()) {
        var permCookieVal = GetPermCookie();
        permCookieVal.ns = 1;
        permCookieVal.svd = DateToCookieString(new Date());
        SavePermCookie(permCookieVal);
    }
}

function PopEmailSubClose(closeColobox) {
    if (closeColobox) { $.colorbox.close(); }
    if ($.cookies.test()) {

        var sessCookieVal = GetSessCookie();
        sessCookieVal.nso = 1;
        SaveSessCookie(sessCookieVal);

        var permCookieVal = GetPermCookie();
        permCookieVal.nsd = DateToCookieString(initDateOffset(0, 0, 1));
        SavePermCookie(permCookieVal);
    }
}

function PopEmailSubOptOut(closeColobox) {
    if (closeColobox) { $.colorbox.close(); }

    if ($.cookies.test()) {

        var sessCookieVal = GetSessCookie();
        sessCookieVal.nso = 1;
        SaveSessCookie(sessCookieVal);

        var permCookieVal = GetPermCookie();
        permCookieVal.nso = 1;
        permCookieVal.nsod = DateToCookieString(new Date());
        SavePermCookie(permCookieVal);
    }
}

function mycarousel_initCallback(carousel) {
    carousel.buttonNext.bind('click', function() {
        carousel.startAuto(0);
    });

    carousel.buttonPrev.bind('click', function() {
        carousel.startAuto(0);
    });

    carousel.clip.hover(function() {
        carousel.stopAuto();
    }, function() {
        carousel.startAuto();
    });

    $('.jcarousel-container').addClass('three-by');

};


$(document).ready(function () {

    $("#heroWrapper .facMask select, #heroWrapper .sweepsMask select, #dvSweepsHeader select, #hpfac select, #brochureForm .facForm select").chosen();

    $('#mycarousel').jcarousel({
        wrap: 'circular',
        scroll: 1,
        auto: 5,
        initCallback: mycarousel_initCallback
    });

    var permCookieVal = GetPermCookie();
    SavePermCookie(permCookieVal);

    $(".quote_request").unbind().colorbox({ transition: 'none', scrolling: false, slideshow: false, opacity: 0.50, fastIframe: false, iframe: true, innerWidth: "550px", innerHeight: "700px" });

    $("." + stlClasses.facSelect + " a").click(function (event) {
        SetFACSelection($(this));
        event.stopImmediatePropagation();
        event.preventDefault();
    });

    $("." + stlClasses.brochureTrack).click(function (event) {
        SetBrochureSelection($(this));
        event.stopImmediatePropagation();
        event.preventDefault();
    });

    $('#contentWrapper .videoKeyLink').click(function (event) {
        event.stopImmediatePropagation();
        event.preventDefault();
        var clickedObj = $(this);
        $('#contentWrapper .videoKeyLink').removeClass('clicked');
        clickedObj.addClass('clicked');
        $('#videoIframe').attr('src', '');
        vlpSettings.vtbLoaded = false;
        vlpSettings.detachedObj = $('.cruiseHeading #videoWrapper').detach();
        $.colorbox({ 'transition': 'none', 'scrolling': false, 'slideshow': false, 'slideshowAuto': false, 'opacity': 0.50, 'current': 'Video: {current} of {total}', 'innerWidth': 700, 'innerHeight': 360, 'html': GetColorboxSrcVideo(clickedObj.attr('href')), onComplete: function () {
            if (clickedObj.attr('share').length > 0) {
                dataDefaults.ShareSelector = '#contentWrapper .clicked + .microSendTF';
                InitVideoShare(clickedObj.attr('share'));
            }
        }, onClosed: function () {
            if (vlpSettings.detachedObj) {
                $('#aExpandVideo').after(vlpSettings.detachedObj);
                vlpSettings.detachedObj = null;
            }
        }
        });
    });

    if (vrcIsMobile.any()) {
        $("#mainNav li.submenu").hover(
          function () {
              SendHideVideo();
          },
          function () {
              //SendShowVideo();
          }
        );
          $("#mainNav").click(function () {
              //we just need to attach a click event listener to provoke iPhone/iPod/iPad's hover event
              //strange
          });
          $("#mainNav").bind('touchstart', function () {
              SendHideVideo();
          });
          $("#mainNav").bind('touchend', function () {
              SendHideVideo();
          });
    }

    //if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
    //            $("#mainNav .submenu").mouseenter(function () {
    //            SendHideVideo();
    //          });
    //        $("#mainNav li.submenu").bind('touchstart', function () {
    //            SendHideVideo();
    //        });
    //        $("#mainNav li.submenu").bind('touchend', function () {
    //            SendHideVideo();
    //        });
    //}

    BindSendToFriend('.lnkSendToFriend');

});





function InitHomepageABTest(sParam, sValue) {
    $(document).ready(function() {
        // Gets all non Javascript a tags that do not start with #
        $('a').not('[href^="#"]').each(function (i) {
            aObj = $(this);
            if (aObj != null) {
                var href = aObj.attr("href");
                if ((href != null) && (href.length > 0)) {
                    if ((href.toLowerCase().indexOf(sParam + '=') < 0) && (href.toLowerCase().indexOf('javascript') < 0)) {
                        var sep = "?";
                        if (href.indexOf('?') > -1) {
                            sep = "&";
                        }
                        aObj.attr("href", href + sep + sParam +"=" + sValue);
                    }
                } // href null
            } // aObj null
        });
    });
}