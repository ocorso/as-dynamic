function enablerInitialized() {
  Enabler.isVisible() ? asApp.init() : Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, asApp.init);
  var e = 3700,
    a = function() {
      return p = Enabler.getDartPageId(), isNaN(p) ? 0 : p
    }(),
    t = function() {
      s = "", d = dynamicContent;
      for (x in d) "_profileid" != x && (s += d[x][0].elemType + d[x][0].ID);
      for (var e = 0, a = 0; a < s.length; a++) e = 31 * e + s.charCodeAt(a);
      return 2147483647 & e
    }(),
    l = "https://js.dmtry.com/antenna2.js?0_" + e + "_" + a + "_" + t;
  console.log(l);
  var n = document.createElement("script");
  n.src = l, document.body.appendChild(n)
}

function onExitClick(e) {
  console.info("onExitClick()"), Enabler.exitOverride("CTA Exit", dynamicContent.aslocalfeed_Allstate_Local_Feed[0].Exit_URL.Url)
}
Enabler.setProfileId(1085016);
var devDynamicContent = {};
devDynamicContent.aslocalfeed_Allstate_Local_Feed = [{}],
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0]._id = 0,
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Variation = "DW2P",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Is_Default = !0,
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Exit_URL = {},
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Exit_URL.Url = "https://www.onallstate.com/LP/2016/brand-campaign/localagents/",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].elemType = "LI ID",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Savings_Percentage = "",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Market_Name = "Charleston-Huntington area",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Legal_Copy = "Savings &amp; coverage subject to terms, conditions and availability. Savings Vary. Allstate Indemnity Co. &amp; Allstate Fire and Casualty Insurance Co. &amp; their Affiliates: Northbrook, IL. &copy;2015 Allstate Insurance Co.",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Background_Color = "#FF9E16",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image1_160x600 = {},
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image1_160x600.Type = "file",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image1_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/44448670/37231879_20160721142255788_DF_image1_300x250.jpg",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image2_160x600 = {},
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image2_160x600.Type = "file",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image2_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/44448670/37231879_20160721142255788_DF_image1_300x250.jpg",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image3_160x600 = {},
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image3_160x600.Type = "file",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image3_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/44448670/37231879_20160721142255788_DF_image1_300x250.jpg",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image1_300x250 = {},
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image1_300x250.Type = "file",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image1_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/44448670/37231879_20160721142255788_DF_image1_300x250.jpg",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image2_300x250 = {},
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image2_300x250.Type = "file",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image2_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/44448670/37231879_20160721142255788_DF_image1_300x250.jpg",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image3_300x250 = {},
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image3_300x250.Type = "file",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image3_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/44448670/37231879_20160721142255788_DF_image1_300x250.jpg",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image1_728x90 = {},
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image1_728x90.Type = "file",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image1_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/44448670/37231879_20160721142255788_DF_image1_300x250.jpg",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image2_728x90 = {},
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image2_728x90.Type = "file",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image2_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/44448670/37231879_20160721142255788_DF_image1_300x250.jpg",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image3_728x90 = {},
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image3_728x90.Type = "file",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image3_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/44448670/37231879_20160721142255788_DF_image1_300x250.jpg",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image1_300x600 = {},
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image1_300x600.Type = "file",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image1_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/44448670/37231879_20160721142255788_DF_image1_300x250.jpg",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image2_300x600 = {},
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image2_300x600.Type = "file",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image2_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/44448670/37231879_20160721142255788_DF_image1_300x250.jpg",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image3_300x600 = {},
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image3_300x600.Type = "file",
devDynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image3_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/44448670/37231879_20160721142255788_DF_image1_300x250.jpg",
Enabler.setDevDynamicContent(devDynamicContent);
var asApp = {};
asApp.type = {},
asApp.type.AF = "AF",
asApp.type.BSAHLP = "BSAHLP",
asApp.type.BSAHL = "BSAHL",
asApp.type.BSHLI = "BSHLI",
asApp.type.BSALP = "BSALP",
asApp.type.BSAL = "BSAL",
asApp.type.BSAHMP = "BSAHMP",
asApp.type.BSAHM = "BSAHM",
asApp.type.BSACP = "BSACP",
asApp.type.BSAC = "BSAC",
asApp.type.CFD = "CFD",
asApp.type.CFDM = "CFDM",
asApp.type.CFR = "CFR",
asApp.type.CRG = "CRG",
asApp.type.CRGM = "CRGM",
asApp.type.CSG = "CSG",
asApp.type.CSGM = "CSGM",
asApp.type.DW = "DW1",
asApp.type.DW2P = "DW2P",
asApp.type.NR = "NR",
asApp.type.TA1 = "TA1",
asApp.type.TAM1 = "TAM1",
asApp.type.TAM2 = "TAM2",
asApp.type.WD = "WD",
asApp.type.DF = "DF",
Enabler.isInitialized() ? enablerInitialized() : Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitialized),
asApp.init = function() {
  switch (console.info("asApp.init(); Variation Code: " + dynamicContent.aslocalfeed_Allstate_Local_Feed[0].Variation),
  asApp.variation = dynamicContent.aslocalfeed_Allstate_Local_Feed[0].Variation,
  asApp.parseDynamicContent(), buildLegal(), asApp.splitText(), tl = new TimelineLite({
    paused: "true"
  }), dynamicContent.aslocalfeed_Allstate_Local_Feed[0].Variation) {
    case asApp.type.AF:
      asApp.accidentForgivenessInit();
      break;
    case asApp.type.BSAHLP:
      asApp.bundleSaveInitAHLP();
      break;
    case asApp.type.BSAHL:
      asApp.bundleSaveInitAHL();
      break;
    case asApp.type.BSHLI:
      asApp.bundleSaveInitHLI();
      break;
    case asApp.type.BSALP:
      asApp.bundleSaveInitALP();
      break;
    case asApp.type.BSAL:
      asApp.bundleSaveInitAL();
      break;
    case asApp.type.BSAHMP:
      asApp.bundleSaveInitAHMP();
      break;
    case asApp.type.BSAHM:
      asApp.bundleSaveInitAHM();
      break;
    case asApp.type.BSACP:
      asApp.bundleSaveInitACP();
      break;
    case asApp.type.BSAC:
      asApp.bundleSaveInitAC();
      break;
    case asApp.type.CFD:
      asApp.claimFreeDiscountInit();
      break;
    case asApp.type.CFDM:
      asApp.claimFreeDiscountInit("mob");
      break;
    case asApp.type.CFR:
      asApp.claimFreeRewardsInit();
      break;
    case asApp.type.CRG:
      asApp.claimRateGuardInit();
      break;
    case asApp.type.CRGM:
      asApp.claimRateGuardInit("mob");
      break;
    case asApp.type.CSG:
      asApp.claimSatGuardInit();
      break;
    case asApp.type.CSGM:
      asApp.claimSatGuardInit("mob");
      break;
    case asApp.type.DW:
      asApp.driveWiseInit();
      break;
    case asApp.type.DW2P:
      asApp.driveWiseInit2P();
      break;
    case asApp.type.NR:
      asApp.newRoofInit();
      break;
    case asApp.type.TA1:
      asApp.trustedAdvisorInit("opt1");
      break;
    case asApp.type.TAM1:
      asApp.trustedAdvisorInit("mobopt1");
      break;
    case asApp.type.TAM2:
      asApp.trustedAdvisorInit("mobopt2");
      break;
    case asApp.type.WD:
      asApp.welcomeDiscountInit();
      break;
    case asApp.type.DF:
      asApp.defaultInit();
      break;
    default:
      console.log("Run default ad"),
      asApp.defaultInit()
  }
  TweenLite.set("#atAd300x250", {
    visibility: "visible"
  }), $("#loader").hide(), tl.play()
}, asApp.parseDynamicContent = function() {
  console.info("asApp.parseDynamicContent()");
  var e = document.getElementById("atAd300x250"),
    a = document.getElementById("bkgReveal");
  a.style.backgroundColor = dynamicContent.aslocalfeed_Allstate_Local_Feed[0].Background_Color,
  e.style.backgroundColor = dynamicContent.aslocalfeed_Allstate_Local_Feed[0].Background_Color;
  var t = document.getElementById("img1");
  t.src = dynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image1_300x250.Url;
  var l = document.getElementById("img2");
  l.src = dynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image2_300x250.Url;
  var s = document.getElementById("img3");
  s.src = dynamicContent.aslocalfeed_Allstate_Local_Feed[0].Image3_300x250.Url;
  var n = document.getElementsByClassName("market-name"),
    o = document.getElementsByClassName("market-name-a-An"),
    d = dynamicContent.aslocalfeed_Allstate_Local_Feed[0].Market_Name,
    i = d.charAt(0);
  if (d == "Western New York") {
    document.getElementById("the").style.display = "none";
  }
  "" !== d ? "A" == i || "E" == i || "I" == i || "O" == i ? marketNameAOrAnText = "an " + d : marketNameAOrAnText = "a " + d : marketNameAOrAnText = "an ";
  for (var p = 0; p < n.length; p++) n[p].innerHTML = d; //oc: use html text from feed...n[p].innerText ? n[p].innerText = d : n[p].textContent && (n[p].textContent = d);
  for (var p = 0; p < o.length; p++) o[p].innerHTML = marketNameAOrAnText; //oc: use html text from feed... o[p].innerText ? o[p].innerText = marketNameAOrAnText : o[p].textContent && (o[p].textContent = marketNameAOrAnText);
  for (var r = document.getElementsByClassName("savings-percentage"), 
    m = dynamicContent.aslocalfeed_Allstate_Local_Feed[0].Savings_Percentage, p = 0; p < r.length; p++) r[p].innerText ? r[p].innerText = m : r[p].textContent && (r[p].textContent = m);
  var c = document.getElementById("aAd_legalTxt"),
    A = dynamicContent.aslocalfeed_Allstate_Local_Feed[0].Legal_Copy;
  c.innerText ? c.innerText = A : c.textContent && (c.textContent = A)
},
asApp.splitText = function() {
  console.info('asApp.splitText()');
  getIN = new SplitText("#getIN", {
    type: "words",
    wordsClass: "word++"
  }), hereIN = new SplitText("#hereIN", {
    type: "words",
    wordsClass: "word++"
  }), frame3 = new SplitText(".frame3", {
    type: "words",
    wordsClass: "word++"
  }), frame4 = new SplitText(".frame4", {
    type: "words",
    wordsClass: "word++"
  }), frame5 = new SplitText(".frame5", {
    type: "words",
    wordsClass: "word++"
  }), ("DW1" == asApp.variation || "DW2P" == asApp.variation) && (frame3 = new SplitText(".frame3", {
    type: "lines,words,chars",
    wordsClass: "word++",
    charsClass: "chars++"
  }), frame4 = new SplitText(".frame4", {
    type: "lines,words,chars",
    wordsClass: "word++",
    charsClass: "chars++"
  }), frame5 = new SplitText(".frame5", {
    type: "lines,words,chars",
    wordsClass: "word++",
    charsClass: "chars++"
  }), frame6 = new SplitText(".frame6", {
    type: "lines,words,chars",
    wordsClass: "word++",
    charsClass: "chars++"
  })), $("#getIN .word2").attr("class", "whiteIN"), $("#hereIN .word2").attr("class", "whiteIN");

}, asApp.addHandsFrameToTimeline = function() {
  tl.to(".in1", .2, {
    autoAlpha: 1
  }), tl.to(".in2", .2, {
    autoAlpha: 1
  }), tl.to(".in3", .2, {
    autoAlpha: 1
  }), tl.to(".in4", .2, {
    autoAlpha: 1
  }), tl.to(".in5", .2, {
    autoAlpha: 1
  }), tl.from("#hands", .6, {
    scaleX: 0,
    scaleY: 0,
    ease: Back.easeInOut,
    easeParams: [2],
    transformOrigin: "40% 40%",
    opacity: 0
  }), tl.to(".message", .5, {
    autoAlpha: 0,
    delay: 1
  })
}, asApp.addGetINFrameToTimeline = function() {
  tl.staggerFrom(getIN.words, .2, {
    left: -300
  }, .07), tl.to("#getIN", .3, {
    autoAlpha: 0,
    delay: 2
  })
}, asApp.addHereINFrameToTimeline = function() {

  if (asApp.variation == 'BSHLI') {
    jQuery('#hereIN .word3').css('display', 'none');
    console.info('STOP THE');
  }
  ;
  tl.staggerFrom(hereIN.words, .2, {
    left: -300
  }, .07), tl.to("#hereIN", .3, {
    autoAlpha: 0,
    delay: 2
  })
}, asApp.addImageFramesToTimeline = function(e) {
  tl.to("#bkgReveal", .7, {
    left: 400,
    top: -200,
    ease: Sine.easeOut
  }), tl.staggerFrom(frame3.words, .2, {
    left: -300
  }, .07), tl.to(".frame3", .3, {
    autoAlpha: 0,
    delay: 2
  }), tl.to("#bgImg2", .5, {
    left: 0,
    ease: Sine.easeOut
  }), tl.staggerFrom(frame4.words, .2, {
    left: -300
  }, .07), tl.to(".frame4", .3, {
    autoAlpha: 0,
    delay: 2
  }), ("DW1" == asApp.variation || "DW2P" == asApp.variation) && (console.log("only DW"),
  $(".frame3 .word2").attr("class", "txtLtBlue"),
  tl.staggerFrom(frame5.words, .2, {
    left: -300
  }, .07), tl.to(".frame5", .3, {
    autoAlpha: 0,
    delay: 2
  })), "DW2P" == asApp.variation && (console.log("only DW"),
  $(".frame3 .word2").attr("class", "txtLtBlue"),
  tl.staggerFrom(frame6.words, .2, {
    left: -300
  }, .07), tl.to(".frame6", .3, {
    autoAlpha: 0,
    delay: 2
  })), tl.to("#bkgReveal", .7, {
    left: -100,
    top: -200,
    ease: Sine.easeOut
  })
}, asApp.addNRImageFramesToTimeline = function(e) {
  tl.to("#bkgReveal", .7, {
    left: 400,
    top: -200,
    ease: Sine.easeOut
  }), tl.staggerFrom(frame3.words, .2, {
    left: -300
  }, .07), tl.to(".frame3", .3, {
    autoAlpha: 0,
    delay: 2
  }), tl.to("#bgImg1", .5, {
    left: 300,
    ease: Sine.easeOut
  }), tl.to("#bgImg2", .5, {
    left: 0,
    ease: Sine.easeOut,
    delay: -.5
  }), tl.staggerFrom(frame4.words, .2, {
    left: -300
  }, .07), tl.to(".frame4", .3, {
    autoAlpha: 0,
    delay: 2
  }), tl.to("#bgImg2", .5, {
    autoAlpha: 0,
    delay: -.5
  })
}, asApp.addTAImageFramesToTimeline = function(e) {
  tl.to("#bkgReveal", .7, {
    left: 400,
    top: -200,
    ease: Sine.easeOut
  }), tl.staggerFrom(frame3.words, .2, {
    left: -300
  }, .07), tl.to(".frame3", .3, {
    autoAlpha: 0,
    delay: .5
  }), tl.staggerFrom(frame4.words, .2, {
    left: -300
  }, .07), tl.to(".frame4", .3, {
    autoAlpha: 0,
    delay: .5
  }), tl.staggerFrom(frame5.words, .2, {
    left: -300
  }, .07), tl.to(".frame5", .3, {
    autoAlpha: 0,
    delay: .5
  }), tl.to("#bkgReveal", .7, {
    left: -100,
    top: -200,
    ease: Sine.easeOut
  })
}, asApp.addBS3FramesToTimeline = function(e) {
  $(".frame3 .word1").attr("class", "txtOrange"), tl.to("#bkgReveal", .7, {
    left: 400,
    top: -200,
    ease: Sine.easeOut
  }), tl.staggerFrom(frame3.words, .2, {
    left: -300
  }, .07), tl.to("#bgImg2", .5, {
    left: 0,
    ease: Sine.easeOut,
    delay: 1
  }), tl.staggerFrom(frame4.words, .2, {
    left: -300
  }, .07), tl.to("#bgImg3", .5, {
    left: 0,
    ease: Sine.easeOut,
    delay: 1
  }), tl.staggerFrom(frame5.words, .2, {
    left: -300
  }, .07), tl.to(".BShide", .3, {
    autoAlpha: 0,
    delay: 1
  }), tl.to("#bkgReveal", .7, {
    left: -100,
    top: -200,
    ease: Sine.easeOut
  })
}, asApp.addBS2FramesToTimeline = function(e) {
  $(".frame3 .word1").attr("class", "txtOrange"), tl.to("#bkgReveal", .7, {
    left: 400,
    top: -200,
    ease: Sine.easeOut
  }), tl.staggerFrom(frame3.words, .2, {
    left: -300
  }, .07), tl.staggerFrom(frame4.words, .2, {
    left: -300
  }, .07), tl.to("#bgImg2", .5, {
    left: 0,
    ease: Sine.easeOut,
    delay: -1
  }), tl.to(".BShide", .3, {
    autoAlpha: 0,
    delay: 1
  }), tl.to("#bkgReveal", .7, {
    left: -100,
    top: -200,
    ease: Sine.easeOut
  })
}, asApp.addWDTimeline = function(e) {
  tl.to("#bkgReveal", .7, {
    left: 400,
    top: -200,
    ease: Sine.easeOut
  }), tl.to("#bkgReveal", .7, {
    left: -100,
    top: -200,
    ease: Sine.easeOut,
    delay: 1
  }), tl.staggerFrom(frame3.words, .2, {
    left: -300
  }, .07), tl.to(".frame3", .3, {
    autoAlpha: 0,
    delay: 2
  })
}, asApp.addLandingToTimeline = function(e) {
  tl.to(".fade", .3, {
    autoAlpha: 1
  }), tl.to(".fade1", .3, {
    autoAlpha: 1
  }), tl.to("#landing", 1, {
    autoAlpha: 1
  }), "DW1" == asApp.variation && (tl.to("#onlyAllstate", .5, {
    left: 0
  }), console.log("version1")), "DW2P" == asApp.variation && (tl.to("#onlyAllstate2", .5, {
    left: 0
  }), console.log("version2")), tl.to("#btn_cta", .3, {
    right: -9,
    autoAlpha: 1,
    delay: -.5
  }), tl.to("#btn_cta", .3, {
    right: -20,
    repeat: 2,
    yoyo: !0,
    ease: Linear.easeNone
  })
},
asApp.defaultInit = function() {
  console.info("defaultInit"),
  $(".frame4 .word8").attr("class", "reg2"),
  $("#DF, #getIN").css("display", "block"),
  asApp.addHandsFrameToTimeline(),
  asApp.addGetINFrameToTimeline(),
  asApp.addImageFramesToTimeline(),
  asApp.addLandingToTimeline()
},
asApp.accidentForgivenessInit = function() {
  console.info("accidentForgivenessInit"), $("#AF, #getIN").css("display", "block"),
  asApp.addHandsFrameToTimeline(),
  asApp.addGetINFrameToTimeline(),
  asApp.addImageFramesToTimeline(),
  asApp.addLandingToTimeline()
},

asApp.bundleSaveInitAHL = function() {

  console.info("asApp.bundleSaveInitAHL():" + $option),
  $("#BSAHL, #getIN").css("display", "block"),
  asApp.addHandsFrameToTimeline(),
  asApp.addGetINFrameToTimeline(),
  asApp.addBS3FramesToTimeline(),
  asApp.addLandingToTimeline(),
  console.debug("Auto Home Life")
},

asApp.bundleSaveInitAHLP = function() {
  console.info("asApp.bundleSaveInitAHLP()"),
  $("#BSAHLP, #getIN").css("display", "block"),
  asApp.addHandsFrameToTimeline(),
  asApp.addGetINFrameToTimeline(),
  asApp.addBS3FramesToTimeline(),
  asApp.addLandingToTimeline(),
  console.debug("Auto Home Life %")
},

asApp.bundleSaveInitAL = function() {
  console.info("asApp.bundleSaveInitAL()"),
  $("#BSAL, #getIN").css("display", "block"),
  asApp.addHandsFrameToTimeline(),
  asApp.addGetINFrameToTimeline(),
  asApp.addBS2FramesToTimeline(),
  asApp.addLandingToTimeline(),
  console.debug("Auto Life")
},

asApp.bundleSaveInitALP = function() {
  console.info("asApp.bundleSaveInitALP()"),
  $("#BSALP, #getIN").css("display", "block"),
  asApp.addHandsFrameToTimeline(),
  asApp.addGetINFrameToTimeline(),
  asApp.addBS3FramesToTimeline(),
  asApp.addLandingToTimeline(),
  console.debug("Auto Life %")
},

asApp.bundleSaveInitAHMP = function() {
  console.info("asApp.bundleSaveInitAHMP()"),
  $("#BSAHMP, #getIN").css("display", "block"),
  asApp.addHandsFrameToTimeline(),
  asApp.addGetINFrameToTimeline(),
  asApp.addBS3FramesToTimeline(),
  asApp.addLandingToTimeline(),
  console.debug("Auto home moto %")
},

asApp.bundleSaveInitAHL = function() {
  $("#BSAHL, #getIN").css("display", "block"),
  asApp.addHandsFrameToTimeline(),
  asApp.addGetINFrameToTimeline(),
  asApp.addBS3FramesToTimeline(),
  asApp.addLandingToTimeline(),
  console.debug("Auto Home Life ")
},

asApp.bundleSaveInitACP = function(e) {
  console.info("asApp.bundleSaveInitACP()"),
  $("#BSACP, #getIN").css("display", "block"),
  asApp.addHandsFrameToTimeline(),
  asApp.addGetINFrameToTimeline(),
  asApp.addBS2FramesToTimeline(),
  asApp.addLandingToTimeline(),
  console.debug("Auto Condo percent")
},

asApp.bundleSaveInitHLI = function(e) {
  console.info("asApp.bundleSaveInitHLI()");
  if(dynamicContent.aslocalfeed_Allstate_Local_Feed[0].Market_Name == 'Massachusetts'){
    console.debug('Massachusetts!');
    $("#hereIN").css('margin-left','-5px');
  }
  $(".frame4 .word5").attr("class", "txtOrange"),
  $("#BSHLI, #hereIN").css("display", "block"),
  asApp.addHereINFrameToTimeline(),
  asApp.addHandsFrameToTimeline(),
  asApp.addImageFramesToTimeline(),
  asApp.addLandingToTimeline(),
  console.debug("home+life")
},

asApp.claimFreeDiscountInit = function() {
  console.info("claimFreeDiscountInit"),
  jQuery('#hereIN .word3').css('display', 'none');
  $("#CFD, #hereIN").css("display", "block"),
  asApp.addHereINFrameToTimeline(),
  asApp.addHandsFrameToTimeline(),
  asApp.addImageFramesToTimeline(),
  asApp.addLandingToTimeline()
},

asApp.claimFreeRewardsInit = function() {
  console.info("claimFreeRewardsInit"),
  $("#CFR, #hereIN").css("display", "block"),
  asApp.addHereINFrameToTimeline(),
  asApp.addHandsFrameToTimeline(),
  asApp.addImageFramesToTimeline(),
  asApp.addLandingToTimeline()
},

asApp.claimRateGuardInit = function() {
  console.info("claimRateGuardInit"),
  $("#CFR, #hereIN").css("display", "block"),
  asApp.addHereINFrameToTimeline(),
  asApp.addHandsFrameToTimeline(),
  asApp.addImageFramesToTimeline(),
  asApp.addLandingToTimeline()
},


asApp.claimSatGuardInit = function() {
  console.info("claimSatGuardInit"),
  $("#CSG, #hereIN").css("display", "block"),
  asApp.addHereINFrameToTimeline(),
  asApp.addHandsFrameToTimeline(),
  asApp.addImageFramesToTimeline(),
  asApp.addLandingToTimeline()
},

asApp.driveWiseInit = function() {
  console.info("driveWiseInit"),
  $(".frame4 .word5 .chars27,.frame4 .word5 .chars28").attr("class", "txtLtBlue"),
  $(".frame5 .word4 .chars20, .frame5 .word4 .chars21").attr("class", "txtLtBlue"),
  $("#DW").css("display", "block"),
  asApp.addHandsFrameToTimeline(),
  asApp.addImageFramesToTimeline(),
  asApp.addLandingToTimeline(),
  console.log("DW")
},

asApp.driveWiseInit2P = function() {

  console.info("driveWiseInit2P"), $(".frame4 .word3 .chars13,.frame4 .word3 .chars14").attr("class", "txtLtBlue"),
  $(".frame5 .word4 .chars20, .frame5 .word4 .chars21").attr("class", "txtLtBlue"),
  $(".frame6 .word2 .chars9, .frame6 .word2 .chars10").attr("class", "txtLtBlue"),
  $("#DW2P").css("display", "block"),
  asApp.addHandsFrameToTimeline(),
  asApp.addImageFramesToTimeline(),
  asApp.addLandingToTimeline(),
  console.log("DW")
},

asApp.welcomeDiscountInit = function(e) {
  console.info("asApp.welcomeDiscountInit()"),
  $("#WD, #getIN").css("display", "block"),
  asApp.addHandsFrameToTimeline(),
  asApp.addGetINFrameToTimeline(),
  asApp.addWDTimeline(),
  asApp.addLandingToTimeline(),
  console.debug("welcome Discount")
},

asApp.newRoofInit = function() {
  console.info("asApp.newRoofInit()"),
  $("#NR, #hereIN").css("display", "block"),
  asApp.addHereINFrameToTimeline(),
  asApp.addHandsFrameToTimeline(),
  asApp.addNRImageFramesToTimeline(),
  asApp.addLandingToTimeline(),
  console.debug("new roof")
},

asApp.trustedAdvisorInit = function() {
  console.info("asApp.trustedAdvisorInit()");

  if(dynamicContent.aslocalfeed_Allstate_Local_Feed[0].Market_Name == 'Massachusetts'){
    console.debug('Massachusetts!');
    $(".frame5").css('margin-left','-5px');
  }
  $(".frame3 .word1").attr("class", "txtGreen"),
  $(".frame4 .word1").attr("class", "txtGreen"),
  $(".frame5 .word1").attr("class", "txtGreen"),
  $("#TA1").css("display", "block"),
  asApp.addHandsFrameToTimeline(),
  asApp.addTAImageFramesToTimeline(),
  asApp.addLandingToTimeline(),
  console.debug("trustedAdvisorInit end")
};

var div1 = $("div#btn_cta"),
  tn1 = TweenMax.to(div1, .3, {
    right: 0,
    repeat: 10,
    yoyo: !0,
    ease: Linear.easeNone,
    paused: !0
  });
div1.mouseenter(function() {
  tn1.play()
}), div1.mouseleave(function() {
  var e = tn1.time();
  tn1.reverse(e)
});
