var siteDomain = { usConsumer: "www.vikingrivercruises.com", auConsumer: "www.vikingrivercruises.com.au", ukConsumer: "www.vikingrivercruises.co.uk", semConsumer: "ww2.vikingrivercruises.com", localHost: "localhost", DEV: "192.168.215.228:915", UAT: "192.168.215.228:908", UATUK: "192.168.215.228:912", UATAU: "192.168.215.228:909", UATSSL: "192.168.215.228:4433", cookieDomain: window.location.hostname.toLowerCase().replace("www", "").replace("www2", "") };

var vrcCookies = { temp: "VRCSESS", perm: "VRCPERM", cobranded: "agentUrlId", sessCookie: null, permCookie: null };

var popupSubscribe = { enabled: 1, pageLoads: 6, maxPageLoads: 2, waitTimeDelay: 120000 };

var popupSurvey = { enabled: 0, pageLoads: 5, pageLoadsHome: 8, maxPageLoads: 4, waitTimeDelay: 65000 };

var permCookieExpire = { AddYear: 1, AddMonth: 0, AddDay: 0 };

var stlClasses = { watermark: "vMark", facSelect: "facSelect", brochureTrack: "brochureTrack" };

var dataDefaults = { defDate: "1901-3-1", defYear: 1901, defMonth: 3, defDay: 1, colorBoxOpen: false, redirectLocation: "", redirectNewWindow: false, videoPlaying: false, isMobileScroller: false, enableVideoToolbar: true, ShareSelector: "", isIE7OrLower: false };

var emailPrep = { type: "", header: "", body: "", Image: "", Link: "", Orig: "" };

var vlpSettings = { initialVideoURL: "", initialShareURL: "", vtbLoaded: false, countDownActive: false, detachedObj: null };

if (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod') {
    dataDefaults.isMobileScroller = true;
}

if (document.all && !document.querySelector) {
    dataDefaults.isIE7OrLower = true;
}

var vrcIsMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    any: function () {
        return (vrcIsMobile.Android() || vrcIsMobile.BlackBerry() || vrcIsMobile.iOS() || vrcIsMobile.Windows());
    }
};

function initSessionCookie() {
    return { pd: 0, ga: 0, go: 0, ps: 0, rv: 0, svt: 0, nst: 0, hp: 0, nso: 0, svo: 0, pu: 0, si: "", fv: "", ui: "", bid: "", vpp: "" };
}

function isValidDate(d) {
    if (Object.prototype.toString.call(d) !== "[object Date]")
        return false;
    return !isNaN(d.getTime());
}

function checkSessCookie(sessObject) {
    var saveCookie = false;
    if (sessObject == null) {
        sessObject = initSessionCookie();
        saveCookie = true;
    }
    else {
        if (sessObject.pd == undefined) {
            sessObject.pd = 0;
            saveCookie = true;
        }
        if (sessObject.ga == undefined) {
            sessObject.ga = 0;
            saveCookie = true;
        }
        if (sessObject.go == undefined) {
            sessObject.go = 0;
            saveCookie = true;
        }
        if (sessObject.ps == undefined) {
            sessObject.ps = 0;
            saveCookie = true;
        }
        if (sessObject.rv == undefined) {
            sessObject.rv = 0;
            saveCookie = true;
        }
        if (sessObject.nst == undefined) {
            sessObject.nst = 0;
            saveCookie = true;
        }
        if (sessObject.svt == undefined) {
            sessObject.svt = 0;
            saveCookie = true;
        }
        if (sessObject.hp == undefined) {
            sessObject.hp = 0;
            saveCookie = true;
        }
        if (sessObject.nso == undefined) {
            sessObject.nso = 0;
            saveCookie = true;
        }
        if (sessObject.svo == undefined) {
            sessObject.svo = 0;
            saveCookie = true;
        }
        if (sessObject.pu == undefined) {
            sessObject.pu = 0;
            saveCookie = true;
        }
        if (sessObject.si == undefined) {
            sessObject.si = "";
            saveCookie = true;
        }
        if (sessObject.fv == undefined) {
            sessObject.fv = "";
            saveCookie = true;
        }
        if (sessObject.ui == undefined) {
            sessObject.ui = "";
            saveCookie = true;
        }
        if (sessObject.bid == undefined) {
            sessObject.bid = "";
            saveCookie = true;
        }
        if (sessObject.vpp == undefined) {
            sessObject.vpp = "";
            saveCookie = true;
        }
    }
    if (saveCookie) {
        SaveSessCookie(sessObject);
    }
    return sessObject;
}

function GetSessCookie() {
    return checkSessCookie($.cookies.get(vrcCookies.temp));
}

function SaveSessCookie(sessObject) {
    if (window.location.hostname.toLowerCase().indexOf(".viking") > -1) {
        $.cookies.del(vrcCookies.temp);
        $.cookies.set(vrcCookies.temp, sessObject, { domain: siteDomain.cookieDomain });
    }
    else {
        $.cookies.set(vrcCookies.temp, sessObject);
    }
}

function initPermCookie() {
    return { ts: 0, ss: 0, ns: 0, nso: 0, sv: 0, svo: 0, nsd: DateToCookieString(null), nsod: DateToCookieString(null), svd: DateToCookieString(null), svod: DateToCookieString(null), rvo: 0, cnl: 0, cnld: DateToCookieString(null), pi: "", mv: "", sl: "", vnd: DateToCookieString(null) };
}

function checkPermCookie(permObject) {
    var saveCookie = false;
    if (permObject == null) {
        permObject = initPermCookie();
        saveCookie = true;
    }
    else {
        if (permObject.ts == undefined) {
            permObject.ts = 0;
            saveCookie = true;
        }
        if (permObject.ss == undefined) {
            permObject.ss = 0;
            saveCookie = true;
        }
        if (permObject.ns == undefined) {
            permObject.ns = 0;
            saveCookie = true;
        }
        if (permObject.nso == undefined) {
            permObject.nso = 0;
            saveCookie = true;
        }
        if (permObject.sv == undefined) {
            permObject.sv = 0;
            saveCookie = true;
        }
        if (permObject.svo == undefined) {
            permObject.svo = 0;
            saveCookie = true;
        }
        if (permObject.nsd == undefined) {
            permObject.nsd = DateToCookieString(null);
            saveCookie = true;
        }
        if (permObject.nsod == undefined) {
            permObject.nsod = DateToCookieString(null);
            saveCookie = true;
        }
        if (permObject.svd == undefined) {
            permObject.svd = DateToCookieString(null);
            saveCookie = true;
        }
        if (permObject.svod == undefined) {
            permObject.svod = DateToCookieString(null);
            saveCookie = true;
        }
        if (permObject.rvo == undefined) {
            permObject.rvo = 0;
            saveCookie = true;
        }
        if (permObject.cnl == undefined) {
            permObject.cnl = 0;
            saveCookie = true;
        }
        if (permObject.cnld == undefined) {
            permObject.cnld = DateToCookieString(null);
            saveCookie = true;
        }
        if (permObject.pi == undefined) {
            permObject.pi = "";
            saveCookie = true;
        }
        if (permObject.mv == undefined) {
            permObject.mv = "";
            saveCookie = true;
        }
        if (permObject.sl == undefined) {
            permObject.sl = "";
            saveCookie = true;
        }
        if (permObject.vnd == undefined) {
            permObject.vnd = DateToCookieString(null);
            saveCookie = true;
        }
    }
    if (saveCookie) {
        SavePermCookie(permObject);
    }
    return permObject;
}

function GetPermCookie() {
    return checkPermCookie($.cookies.get(vrcCookies.perm));
}

function SavePermCookie(permObject) {
    if (window.location.hostname.toLowerCase().indexOf(".viking") > -1) {
        $.cookies.del(vrcCookies.perm);
        $.cookies.set(vrcCookies.perm, permObject, { expiresAt: initDateOffset(permCookieExpire.AddYear, permCookieExpire.AddMonth, permCookieExpire.AddDay), domain: siteDomain.cookieDomain });
    }
    else {
        $.cookies.set(vrcCookies.perm, permObject, { expiresAt: initDateOffset(permCookieExpire.AddYear, permCookieExpire.AddMonth, permCookieExpire.AddDay) });
    }
}

function initDateOffset(iYear, iMonth, iDay) {
    var pCurrentTime = new Date();
    var pYear = pCurrentTime.getFullYear() + iYear;
    var pMonth = pCurrentTime.getMonth() + iMonth;
    var pDday = pCurrentTime.getDate() + iDay;
    return new Date(pYear, pMonth, pDday);
}

$(document).bind('cbox_open', function () {
    dataDefaults.colorBoxOpen = true;
    if (dataDefaults.isMobileScroller) {
        $('#cboxOverlay').height($(document).height());
    }
});

$(document).bind('cbox_closed', function () {
    dataDefaults.colorBoxOpen = false;
});


function DateToCookieString(oDate) {
    if ((oDate != null) && (oDate != undefined)) {
        return (oDate.getFullYear() + "-" + (oDate.getMonth() + 1) + "-" + oDate.getDate()).toString();
    }
    else {
        return dataDefaults.defDate;
    }
}

function CookieStringToDate(sDate) {
    if ((sDate != null) && (sDate != undefined)) {
        try {
            var parts = sDate.split("-");
            if (parts.length == 3) {
                return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
            }
            else {
                return GetDefaultDate();
            }
        }
        catch (e1) {
            return GetDefaultDate();
        }
    }
    else {
        return GetDefaultDate();
    }
}

function GetDefaultDate() {
    return new Date(dataDefaults.defYear, dataDefaults.defMonth - 1, dataDefaults.defDay);
}

function InitWaterMark(sSelector) {
    var wsObj = $(sSelector);
    wsObj.addClass(stlClasses.watermark);
    if (wsObj != null) {
        var initVal = wsObj.val();
        wsObj.blur(function (e) {
            //alert('Handler for .blur() called.');
            var eObj = $(this);
            if ($.trim(eObj.val()).length == 0) {
                eObj.val(initVal);
                eObj.addClass(stlClasses.watermark);
            }
        }).focus(function (e) {
            //alert('Handler for .focus() called.');
            var eObj = $(this);
            if (eObj.val() == initVal) {
                eObj.val("");
                eObj.removeClass(stlClasses.watermark);
            }
        });
    }
}

function validateEmail(email) {
    var reg = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/;
    if (reg.test(email) == false) {
        return false;
        //alert("Invalide Email");
    }
    return true;
}

function CloseColorBox() {
    $.colorbox.close();
}

var cbox = { dH: "0", dW: "0" };

function ColoboxFullScreen() {
    var cObj = $("#cboxLoadedContent");
    if (cObj.length > 0) {

        cbox.dW = cObj.width();
        cbox.dH = cObj.height();

        var cWin = $(window);
        var wW = cWin.width();
        var wH = cWin.height();

        if ((wW > cbox.dW) && (wH > cbox.dH)) {
            var ratio;
            var nW;
            var nH;

            if (cbox.dW > cbox.dH) {
                // set full by width
                ratio = cbox.dH / cbox.dW;
                nW = wW - 60;
                nH = Math.floor(nW * ratio);
                if (nH > wH) {
                    nW = Math.floor((nW - (((nH - wH + 200) / nW) * nW)));
                    nH = Math.floor(nW * ratio);
                }
            }
            else {
                // set full by height
                ratio = cbox.dW / cbox.dH;
                nH = wH - 60;
                nW = Math.floor(nH * ratio);
                if (nW > wW) {
                    nH = Math.floor((nH - (((nW - wW + 200) / nH) * nH)));
                    nW = Math.floor(nH * ratio);
                }
            }

            $.colorbox.resize({ innerWidth: nW, innerHeight: nH });
        }

    }
}

function ColorBoxRestore() {
    if ((cbox.dW != "0") && (cbox.dH != "0")) {
        $.colorbox.resize({ innerWidth: cbox.dW, innerHeight: cbox.dH });
        $('#videoHtml, #videoHtml #vsWrapper').css({ 'width': cbox.dW, 'height': cbox.dH });
    }
}

function InitHomePage() {
    popupSubscribe.enabled = 0;
    popupSurvey.enabled = 0;

    $(document).ready(function () {
        $('#heroWrapper .videoPopupLink, .threeUp .videoPopupLink').click(function (event) {
            event.stopImmediatePropagation();
            event.preventDefault();
            var clickedObj = $(this);
            $('#heroWrapper .videoPopupLink, .threeUp .videoPopupLink').removeClass('clicked');
            clickedObj.addClass('clicked');
            $.colorbox({ 'transition': 'none', 'scrolling': false, 'slideshow': false, 'slideshowAuto': false, 'opacity': 0.50, 'innerWidth': 700, 'innerHeight': 360, 'html': GetColorboxSrcVideo(clickedObj.attr('href')), onComplete: function () {
                if (clickedObj.attr('share').length > 0) {
                    dataDefaults.ShareSelector = '#heroWrapper .clicked + .microSendTF';
                    InitVideoShare(clickedObj.attr('share'));
                }
            }
            });
        });
        var opts = $('#heroCarousel')
        .cycle({
            onPagerEvent: function () {
                opts.timeout = 0
            },
            timeout: 8000,
            pause: 1,
            fx: 'fade',
            speed: 1000,
            pager: '#heroCarousel-control',
            slideExpr: 'a.heroImg',
            pagerAnchorBuilder: function (idx, slide) {
                // return selector string for existing anchor 
                return '<li><a href="#"></a></li>';
            },
            pauseOnPagerHover: 1
        }).data('cycle.opts');

        BindFACDropdowns('#hpfac');
    });
}

function BindFACDropdowns(wselector) {
    $(wselector + ' select[id$="_ddDestination"], ' + wselector + ' select[id$="_ddMonth"]').change(function () {

        var oData = InitFACSearchJSON();

        oData.incoming.SvrSearchRequestId = 'dvFACCount';
        oData.incoming.IsPreSearch = true;

        var searchDate = $(wselector + ' select[id$="_ddMonth"]').val();
        if (searchDate != '') {
            var dateArr = decodeURIComponent(searchDate).split('|');
            oData.incoming.State.StartDate = dateArr[0];
            oData.incoming.State.EndDate = dateArr[1];
        }

        var destCodes = $(wselector + ' select[id$="_ddDestination"]').val();
        if (destCodes != '') {
            var delInd = destCodes.indexOf('=');
            var destCodesArr = destCodes.substring(delInd + 1).split('|');

            if (delInd == 2) {
                for (var i = 0, length = destCodesArr.length; i < length; i++) {
                    oData.incoming.State.Rivers.push(destCodesArr[i]);
                }
            } else {
                var PropP = destCodes.substr(0, 1);
                for (var i = 0, length = destCodesArr.length; i < length; i++) {
                    switch (PropP) {
                        case "r":
                            oData.incoming.State.Regions.push(destCodesArr[i]);
                            break;
                        case "c":
                            oData.incoming.State.Countries.push(destCodesArr[i]);
                            break;
                    }

                }
            }

        }

        GetFACResults(oData);
    });

}

function ResizeColorbox(width, height) {
    if (cbox != null) {
        cbox.dW = width;
        cbox.dH = height;
    }
    $.colorbox.resize({ innerWidth: width, innerHeight: height });
    $('#videoHtml, #videoHtml #vsWrapper').css({ 'width': width, 'height': height });
}

function ResizeColorboxHeight(selector) {
    $.colorbox.resize({ innerHeight: $(selector).outerHeight(true) });
}

function OmniFormValidate() {
    if (!Page_ClientValidate("")) {
        //alert('failed validation');
        var errorFields = "";
        if ((typeof Page_Validators != 'undefined') && (Page_Validators != null)) {
            //alert('found page validators');
            var i = 0;
            var j = 0;
            for (i = 0; i <= Page_Validators.length - 1; i++) {
                //alert('looping through validators');
                if (!Page_Validators[i].isvalid) {
                    var formEle = Page_Validators[i].controltovalidate;
                    if ((formEle != null) && (formEle.length > 0)) {
                        formEle = formEle.substring(formEle.lastIndexOf("_") + 1);
                        if (j == 0) {
                            errorFields = formEle;
                        } else {
                            errorFields += ("|" + formEle);
                        }

                    } else {
                        formEle = Page_Validators[i].id.substring(Page_Validators[i].id.lastIndexOf("_") + 1);
                        if (j == 0) {
                            errorFields = formEle;
                        } else {
                            errorFields += ("|" + formEle);
                        }
                    }
                    j++;
                }
            }
            //alert('stopped looping');
            if ((typeof s != 'undefined') && (s != null) && (typeof s.eVar20 != 'undefined') && (s.eVar20.length > 0) && (errorFields.length > 0)) {
                //alert('sending event');
                s.linkTrackVars = 'events,eVar23';
                s.linkTrackEvents = 'event23';
                s.eVar23 = errorFields.substr(0, 100);
                s.events = 'event23';
                s.tl(true, 'o', 'formerror');
                //alert('done sending event');
            }
        }
    }
}

function OmniChatClick(clickLabel) {
    if ((typeof s != 'undefined') && (s != null) && (clickLabel != null) && (clickLabel.length > 0)) {
        s.linkTrackVars = 'events,eVar44';
        s.linkTrackEvents = 'event24';
        s.eVar44 = clickLabel;
        s.events = 'event24';
        s.tl(true, 'o', 'chatclick');
    }
}

function SetFACSelection(anchorObj) {
    if ((typeof anchorObj != 'undefined') && (typeof s != 'undefined') && (s != null)) {
        var parentText = $.trim(replaceDiacritics(anchorObj.parents('.l1').children('a.l1').text().toUpperCase()));
        var destText = $.trim(replaceDiacritics(anchorObj.text().toUpperCase()));
        s.linkTrackVars = 'events,eVar18';
        s.linkTrackEvents = 'event15';
        if (parentText != destText && parentText != "") {
            s.eVar18 = 'TOP:' + parentText + '-' + destText;
        } else {
            s.eVar18 = 'TOP:' + destText;
        }
        s.events = 'event15';
        s.tl(true, 'o', 'navused');

    }
    if (anchorObj.attr('target') === '_blank') {
        dataDefaults.redirectNewWindow = true;
    } else {
        dataDefaults.redirectNewWindow = false;
    }
    dataDefaults.redirectLocation = anchorObj.attr('href');
    window.setTimeout(VkgRedirectLocation, 500);
}

function SetBrochureSelection(anchorObj) {
    if ((typeof anchorObj != 'undefined') && (typeof s != 'undefined') && (s != null)) {
        s.linkTrackVars = 'events,eVar63';
        s.linkTrackEvents = 'event16';
        s.eVar63 = 'true';
        s.events = 'event16';
        s.tl(true, 'o', 'brochurectaclicked');
    }
    dataDefaults.redirectLocation = anchorObj.attr('href');
    window.setTimeout(VkgRedirectLocation, 500);
}

function replaceDiacritics(s) {
    var s;
    var diacritics = [
        /[\300-\306]/g, /[\340-\346]/g,  // A, a
        /[\310-\313]/g, /[\350-\353]/g,  // E, e
        /[\314-\317]/g, /[\354-\357]/g,  // I, i
        /[\322-\330]/g, /[\362-\370]/g,  // O, o
        /[\331-\334]/g, /[\371-\374]/g,  // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
        /[^a-zA-Z0-9 ]/g // All non alphanumeric
    ];
    var chars = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u', 'N', 'n', 'C', 'c', ''];
    for (var i = 0; i < diacritics.length; i++) {
        s = s.replace(diacritics[i], chars[i]);
    }
    return s.replace("  ", " ");
}


function VkgRedirectLocation() {
    if (dataDefaults.redirectNewWindow) {
        window.open(dataDefaults.redirectLocation, 'newwin');
    } else {
        window.location = dataDefaults.redirectLocation;
    }
}

function IsVideoPlayingFrame() {
    var returnVal = false;
    $('iframe[src^="/videos.aspx"]').each(function (index) {
        try {
            var iFramer = $(this).get(0);
            if ((iFramer != null) && (typeof iFramer.contentWindow.IsVideoPlaying == 'function')) {
                if (iFramer.contentWindow.IsVideoPlaying()) {
                    returnVal = true;
                }
            }
        } catch (e) { }
    });
    return returnVal;
}

function VkgSleep() {
    return null;
}

function InitVideoShare(url, disableHover) {
    //alert('InitVideoShare');
    if (dataDefaults.enableVideoToolbar) {
        url = "http://" + document.location.host + url;
        var facebookObj = $('#vtbFBLike');
        var googleplusObj = $('#vtbPlusOne');

        //Facebook like
        facebookObj.append('<iframe src="//www.facebook.com/plugins/like.php?href=' + escape(url) + '&amp;send=false&amp;layout=button_count&amp;width=90&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:90px; height:21px;" allowTransparency="true"></iframe');

        //Google plus one
        $('#vtbGoogle').attr('href', 'https://plus.google.com/u/0/share?url=' + escape(url));

        $('#vtbTwitter').attr('href', 'https://twitter.com/share?url=' + escape(url));
        $('#vtbEmail').attr('href', '/send/index.aspx?ref=' + escape(url)).attr('share', url);

        BindSendToFriend('#vtbEmail');

        if (dataDefaults.ShareSelector.length > 0) {
            //alert('BindSendToFriend');
            $(dataDefaults.ShareSelector).clone().insertAfter('#vtbEmail');
        }

        if (!disableHover) {
            BindVideoToolbarFade();
        }
    }
}


function BindVideoToolbarFade() {
    if (!vrcIsMobile.any()) {
        $('#vsWrapper').unbind().hover(
      function () {
          SocialBarFadeIn();
      },
      function () {
          SocialBarFadeOut();
      });
    }
}

function SocialBarFadeIn() {
    $('#tbrToolbar').fadeIn();
}

function SocialBarFadeOut() {
    $('#tbrToolbar').fadeOut();
}

function GetVideoToolbarHtml(disableHide) {
    var tblrHTML = '';
    if (dataDefaults.enableVideoToolbar) {
        tblrHTML = '<div id="tbrToolbar" class="toolbar '+ ((!disableHide) ? 'hide' : '') + '">' +
                        '<ul class="shareBar">' +
                            '<li class="cta"><strong>Share with a friend</strong> </li>' +
                            '<li id="vtbFBLike" class="liFBShare"></li>' +
                            '<li class="liGooglePlus"><a id="vtbGoogle" class="GoPSmall" target="_blank"><span>Goolge Plus 1</span></a></li>' +
                            '<li><a id="vtbTwitter" target="_blank"><img src="/Images/share/share_tweet.gif" alt="Tweet Icon" title="Tweet this page" /></a></li>' +
                            '<li><a id="vtbEmail" class="lnkSendToFriend" rel="nofollow"><img src="/images/share/share_email.gif" alt="Email to friend" title="Email to friend" /></a></li>' +
                        '</ul>' +
                        '<div class="clear"> </div>' +
                    '</div>';
    }
    return tblrHTML;
}

function GetColorboxSrcVideo(iframeURL) {
    var html = '<div class="videoHtml" id="videoHtml">' +
                        '<div id="vsWrapper">' +
                            '<div id="videoSocial">' +
                                GetVideoToolbarHtml() +
                            '</div>' +
			            '<iframe class="videoIframe" id="videoIframe" src="' + iframeURL + '"  scrolling="no" frameborder="0"></iframe>' +
                        '</div>' +
		            '</div>';
    return html;
}

function BindSendToFriend(selector) {
    // .lnkSendToFriend
    $(selector).unbind().bind('click', function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        var microLink = $(this);
        var microSend = microLink.siblings('.microSendTF');
        var foundMicro = false;
        if ((microLink.attr('share') != null) && (microLink.attr('share').length > 0)) {
            emailPrep.Link = microLink.attr('share');
        } else {
            emailPrep.Link = document.URL;
        }
        emailPrep.Orig = document.URL;
        if (microSend != null && microSend.size() > 0) {
            foundMicro = true;
            emailPrep.type = microSend.children('.mstfType').text();
            emailPrep.header = microSend.children('.mstfHeader').text();
            emailPrep.body = microSend.children('.mstfBody').text();
            emailPrep.Image = microSend.children('.mstfImage').text();
        }
        window.open('/interstitial/send-to-friend.html', '_blank', 'width=630,height=630,scrollbars=yes,resizable=yes,location=yes');

    });

}

function GetEmailPrep() {
    return emailPrep;
}

function BindHeroVideo() {
    $('#videoHeroOverlay').css({ "opacity": +0.5 });

    $('#aExpandVideo').bind('click', function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        RevealHeroVideo();
    });

    $('#aCloseVideo, #videoHeroOverlay').bind('click', function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        HideHeroVideo();
    });
}

function LoadHeroVideoToolBar() {
    $('#videoSocial').html(GetVideoToolbarHtml());
    dataDefaults.ShareSelector = '.floatVideo #vsWrapper .microSendTF';
    InitVideoShare(vlpSettings.initialShareURL);
}

function FadeInOverlay() {
    window.setTimeout(PlayVideoCleanup, 500);
}

function FadeOutOverlay() {
    $('#videoHeroOverlay').fadeOut();
    $('.sideBar .fb_iframe_widget').fadeIn();
}

function SlideDown() {
    if (dataDefaults.isIE7OrLower) { $('.sideBar .fb_iframe_widget').css({ 'display': 'none' }); }
    $('#videoWrapper').animate({ 'height': '425px' }, { 'complete': FadeInOverlay });
    $('#videoHeroOverlay').fadeIn(400);
}

function PlayVideoCleanup() {
    if (vlpSettings.vtbLoaded) {
        SendPlayVideo();
    } else {
        vlpSettings.vtbLoaded = true;
        $('#videoIframe').attr('src', vlpSettings.initialVideoURL);
        window.setTimeout(LoadHeroVideoToolBar, 2000);
    }
}

function RevealHeroVideo() {
    if (dataDefaults.isMobileScroller) { $('#vshWrapper').css({ visibility: 'visible', left: '0px' }); }
    $('#secNav, .cruiseDetails, #aExpandVideo, #aExpandVideo img').fadeOut(400);
    window.setTimeout(SlideDown, 500);
}

function HideHeroVideo() {
    SendPauseVideo();
    $('#videoHeroOverlay').fadeOut();
    $('#videoWrapper').animate({ 'height': '262px' }, { 'complete': FadeInHero });

}

function FadeInHero() {
    $('#secNav, .cruiseDetails, #aExpandVideo, #aExpandVideo img').fadeIn(400);
    window.setTimeout(FadeInHeroCleanup, 500);
}

function FadeInHeroCleanup() {
    if (dataDefaults.isIE7OrLower) { $('.sideBar .fb_iframe_widget').css({ 'display': 'block' }); }
    if (dataDefaults.isMobileScroller) { $('#vshWrapper').css({ visibility: 'hidden', left: '1030px' }); }
}

function SendPlayVideo() {
    var iFramer = $('#videoIframe')
    if ((iFramer != null) && (typeof iFramer.contentWindow.PlayVideoNow == 'function')) {
        if (iFramer.contentWindow.PlayVideoNow()) {
            returnVal = true;
        }
    }
}

function SendPauseVideo() {
    var iFramer = $('#videoIframe').get(0);
    if ((iFramer != null) && (typeof iFramer.contentWindow.PausePlayer == 'function')) {
        if (iFramer.contentWindow.PausePlayer()) {
            returnVal = true;
        }
    }
}

function SendHideVideo() {
    var iFramer = $('#videoIframe').get(0);
    if ((iFramer != null) && (typeof iFramer.contentWindow.HidePlayer == 'function')) {
        if (iFramer.contentWindow.HidePlayer()) {
            returnVal = true;
        }
    }
}

function SendShowVideo() {
    var iFramer = $('#videoIframe').get(0);
    if ((iFramer != null) && (typeof iFramer.contentWindow.ShowPlayer == 'function')) {
        if (iFramer.contentWindow.ShowPlayer()) {
            returnVal = true;
        }
    }
}

function ScrollEle(selector, dist, duration, up) {
    var scrollObject = $(selector);
    var currentScroll = scrollObject.scrollTop();
    if (up) {
        currentScroll = (currentScroll - dist);
    } else {
        currentScroll = (currentScroll + dist);
    }
    if (duration === 0) {
        scrollObject.scrollTop(currentScroll);
    } else {
        scrollObject.animate({ scrollTop: currentScroll }, duration);
    }
}

function SlideEle(selector, dist, duration, left) {
    var scrollObject = $(selector);
    var currentScroll = scrollObject.scrollLeft();
    if (left) {
        currentScroll = (currentScroll - dist);
    } else {
        currentScroll = (currentScroll + dist);
    }
    if (duration === 0) {
        scrollObject.scrollLeft(currentScroll);
    } else {
        scrollObject.animate({ scrollLeft: currentScroll }, duration);
    }
}

function VideoEnded() {
    setTimeout(NextVideo, 5000);
}

function NextVideo() {
    if ($('#videoCarouselList').size() > 0) {
        NextVideoCarousel();
    } else {
        NextVideoPlacard();
    }

}

function NextVideoPlacard() {
    var nextVid = $('#videoPlacard a.current').parent().next();
    if (nextVid != null) {
        if (nextVid.size() > 0) {
            var vidind = nextVid.index();
            if (typeof vidind == 'number') {
                if (vidind % 3 == 0) {
                    window.setTimeout(function () { nextVid.children('a').click() }, 500);
                    ScrollEle('#videoPlacard', 345, 300, false);
                } else {
                    nextVid.children('a').click();
                }
            }
        }
    }
}

function NextVideoCarousel() {
    var nextVid = $('#videoCarouselList a.current').parent().next();
    if (nextVid != null) {
        if (nextVid.size() > 0) {
            var vidind = nextVid.index();
            if (typeof vidind == 'number') {
                if (vidind % 4 == 0) {
                    window.setTimeout(function () { nextVid.children('a').click() }, 500);
                    SlideEle('#videoCarousel', 540, 300, false);
                } else {
                    nextVid.children('a').click();
                }
            }
        }
    }
}


function GetCruiseVideo(videoFilter, videoSubFilter, selectIndex) {
    var oData = '{ "packageGroupLookupID":"' + videoFilter + '", "cruiseTab":"' + videoSubFilter + '"}';

    $.ajax({
        type: "POST",
        url: "/svc/cruises.asmx/GetCruiseTabVideoPopup",
        data: oData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            if (msg.hasOwnProperty("d")) {
                RenderVideoPopup(msg.d, selectIndex);
            }
            else {
                RenderVideoPopup(msg, selectIndex);
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            alert(xhr.status + " " + textStatus + " " + errorThrown);
        }
    });
}

function RenderVideoPopup(html, selectIndex) {
    $.colorbox({ 'html': html, opacity: 0.62, onComplete: function () {
        BindVideoPopup(selectIndex);
    }
    });
}

function BindVideoPopup(selectIndex) {
    $('#videoCarouselList td a').bind('click', function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        var clickObj = $(this);

        $('#videoCarouselList a').removeClass('current').children('.nowPlaying').remove();

        clickObj.addClass('current').children('img').before('<img class="nowPlaying" alt="Now Playing" src="/images/video/video_now_playing_sml.gif" />');

        var shareData = $('#videoCarouselList a.current + .microSendTF');

        if (shareData.size() > 0) {
            $('#videoTitle').html(shareData.children('.mstfHeader').html());
            $('#videoDescription').html(shareData.children('.mstfBody').html());
        }

        dataDefaults.ShareSelector = '#videoCarouselList a.current + .microSendTF';
        $('#videoSocial').html(GetVideoToolbarHtml(true));
        InitVideoShare(clickObj.attr('share'), true);

        $('#videoIframe').css({ 'height': '0px' }).attr('src', clickObj.attr('href'));
        //$('#videoIframe').attr('src', clickObj.attr('href'));

        if (typeof SetCurrentPlacard === 'function') {
            SetCurrentPlacard(clickObj.parent().index(), true);
        }

    });

    if (selectIndex != 0) {
        var moveInt = Math.abs(Math.floor(selectIndex / 4));
        if (moveInt >= 1) {
            SlideEle('#videoCarousel', (540 * moveInt), 0, false);
        }
        $('#videoCarouselList td a:eq(' + selectIndex + ')').click();
    }

    dataDefaults.ShareSelector = '#videoCarouselList a.current + .microSendTF';
    $('#videoSocial').html(GetVideoToolbarHtml(true));
    InitVideoShare($('#videoCarouselList a.current').attr('share'), true);

}

function IFrameLoaded(selector) {
    $(selector).css({ 'height': '360px' });
}

function limitCounter(limitField_id, limitCount_id, limitNum) {
    var limitField = document.getElementById(limitField_id);
    var limitCount = document.getElementById(limitCount_id);
    var fieldLEN = limitField.value.length;
    if (fieldLEN > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    }
    else {
        limitCount.innerHTML = '(' + (limitNum - fieldLEN) + ' characters left)';
    }
}

function InitFACSearchJSON() {
    return {
        "incoming": {
            "IsPaging": false,
            "IsPreSearch": false,
            "UserId": "",
            "SearchRequestId": 0,
            "SvrSearchRequestId": "",
            "SearchGUID": "",
            "Sort": {
                "SortBy": "cruise",
                "Page": "1",
                "PageSize": "5"
            },
            "State": {
                "PackageGroups": [],
                "Regions": [],
                "Ships": [],
                "Rivers": [],
                "Countries": [],
                "StartDate": "",
                "EndDate": "",
                "DurationGroup": "",
                "ResultCount": 0
            }, "AvailableMonths": [], "AvailableRegions": []
        }
    };
}

function GetFACResults(FACSearchJSON) {
    $.ajax({
        type: "POST",
        url: "/svc/fac.asmx/GetSearchResults",
        data: JSON.stringify(FACSearchJSON),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            if (msg.hasOwnProperty("d")) {
                RenderFACResults(msg.d);
            }
            else {
                RenderFACResults(msg);
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            alert(xhr.status + " " + textStatus + " " + errorThrown);
        }
    });
}

function RenderFACResults(FACSearchJSON) {
    if (typeof FACSearchJSON !== 'undefined' && FACSearchJSON != null) {
        var vrcsubj = '';
        if (FACSearchJSON.State.ResultCount == 1) {
            vrcsubj = '(' + FACSearchJSON.State.ResultCount + ' cruise)';
        } else if (FACSearchJSON.State.ResultCount == 0) {
            vrcsubj = '<em>(' + FACSearchJSON.State.ResultCount + ' cruises)</em>';
        } else {
            vrcsubj = '(' + FACSearchJSON.State.ResultCount + ' cruises)';
        }
        $('#' + FACSearchJSON.SvrSearchRequestId).html(vrcsubj);
        //if (1 === 0) {
        if (FACSearchJSON.AvailableMonths.length > 0) {
            $('select[id$="_ddMonth"] option:gt(0)').each(function (index) {
                var match = false;
                var selObj = $(this);
                for (var i = 0; i < FACSearchJSON.AvailableMonths.length; i++) {
                    if (FACSearchJSON.AvailableMonths[i] == selObj.attr('value')) {
                        match = true;
                    }
                }
                if (!match) {
                    $('div[id$="_ddMonth_chzn"] .chzn-results li').eq(index + 1).addClass('forceHide');
                    //alert($('div[id$="_ddMonth_chzn"] .chzn-results li').eq(index + 1).text() + ' no match ' + selObj.text());
                }
                else {
                    $('div[id$="_ddMonth_chzn"] .chzn-results li').eq(index + 1).removeClass('forceHide');
                    //alert($('div[id$="_ddMonth_chzn"] .chzn-results li').eq(index + 1).text() + ' is match ' + selObj.text());
                }
            });
        }
        //if (1 === 0) {
        if (FACSearchJSON.AvailableRegions.length > 0) {
            $('select[id$="_ddDestination"] option:gt(0)').each(function (index) {
                var match = false;
                var selObj = $(this);
                for (var i = 0; i < FACSearchJSON.AvailableRegions.length; i++) {
                    if (selObj.attr('value').indexOf(FACSearchJSON.AvailableRegions[i]) > -1) {
                        match = true;
                    }
                }
                if (!match) {
                    $('div[id$="_ddDestination_chzn"] .chzn-results li').eq(index + 1).addClass('forceHide');
                    //alert($('div[id$="_ddMonth_chzn"] .chzn-results li').eq(index + 1).text() + ' no match ' + selObj.text());
                }
                else {
                    $('div[id$="_ddDestination_chzn"] .chzn-results li').eq(index + 1).removeClass('forceHide');
                    //alert($('div[id$="_ddMonth_chzn"] .chzn-results li').eq(index + 1).text() + ' is match ' + selObj.text());
                }
            });
        }
    }
}



