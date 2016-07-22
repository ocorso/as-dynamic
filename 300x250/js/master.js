var asDynamic = {};


if (!Enabler.isInitialized()) {
  Enabler.addEventListener(
    studio.events.StudioEvent.INIT,
    enablerInitialized);
} else {
  enablerInitialized();
}

function enablerInitialized() {
  // Enabler initialized.
  // In App ads are rendered offscreen so animation should wait for
  // the visible event. These are simulated with delays in the local
  // environment.
  if (!Enabler.isVisible()) {
    Enabler.addEventListener(
      studio.events.StudioEvent.VISIBLE,
      asDynamic.init);
  } else {
    asDynamic.init();
  }
} //end function enabler init();

/**
 * This function is called when the Enabler is initialized.
 * Uses dynamic content to determine which variation to display
 *
 */
asDynamic.init = function() {
  console.info('asDynamic.init();');

  //oc: handle variations independently.
  switch ('BSAHLP') { //oc: placeholder for now
    case 'AF':
      asDynamic.accidentForgivenessInit();

      break;
    case 'BSAHLP':
      asDynamic.bundleSaveInit('ahlp');

      //cw:
      break;
    case 'BSAHL':
      asDynamic.bundleSaveInit('ahl');
      break;
    case 'BSALP':
      asDynamic.bundleSaveInit('alp');
      break;
    case 'BSAL':
      asDynamic.bundleSaveInit('al');
      break;
    case 'BSAHMP':
      asDynamic.bundleSaveInit('ahmp');
      break;
    case 'BSAHM':
      asDynamic.bundleSave('ahm');
      break;
    case 'BSHLI':
      asDynamic.bundleSave('hli');
      break;
    case 'BSACP':
      asDynamic.bundleSave('acp');
      break;
    case 'BSAC':
      asDynamic.bundleSave('ac');
      break;
    case 'BSIP':
      asDynamic.bundleSave('ip');
      break;
    case 'BSI':
      asDynamic.bundleSave('i');
      break;
    case 'CFD':
      asDynamic.claimFreeDiscount();
      break;
    case 'CFDM':
      asDynamic.claimFreeDiscount('mob');
      break;
    case 'CFR':
      asDynamic.claimFreeRewards();
      break;
    case 'CRG':
      asDynamic.claimRateGuard();
      break;
    case 'CRGM':
      asDynamic.claimRateGuard(mob);
      break;
    case 'CSG':
      asDynamic.claimSatGuard();
      break;
    case 'CSGM':
      asDynamic.claimSatGuard(mob);
      break;
    case 'DW':
      asDynamic.driveWise(opt1);
      break;
    case 'DW2P':
      asDynamic.driveWise(opt2p);
      break;
    case 'NR':
      asDynamic.newRoof();
      break;
    case 'TA1':
      asDynamic.trustedAdvisor(opt1);
      break;
    case 'TAM1':
      asDynamic.trustedAdvisor(mobopt1);
      break;
    case 'TAM2':
      asDynamic.trustedAdvisor(mobopt2);
      break;
    case 'WD':
      asDynamic.welcomeDiscount();
      break;
    case 'DF':
      asDynamic.default();
      break;

    default:
      asDynamic.default();
      console.log('run default ad');
  } //end switch
}; //end asDynamic.init


/**
  * This function handles the Accident Forgiveness variations
  * @param - ad variation option
  * Global syles:
      - Background: #8b86ca
      - CTA:    “GET IN”
  * Keyframes :
      1 : Logo Lockup
      2 :
        Top-aligned paragraph -
        Font size: 36 px
        Copy: “GET IN ON THIS, [MARKET NAME]”
      3 : Photo w/ ⅓ - top White Copy
        Copy : “FORGIVENESS”
      4 : Photo w/ ⅓ - bottom white copy
        Copy : “EVEN IF IT’S YOUR FAULT”
      5 : End Frame
        OPTION ONE:
          Top-aligned large copy - 36 px
          Larger copy: “ACCIDENT FORGIVENESS”
          Smaller copy - 18px
            “Connect with a [Market Name] Allstate Agent”
        OPTION TWO:
          Top-aligned large copy - 36 px
          Larger opy: “ACCIDENT FORGIVENESS”
          Smaller copy - 18px

*/
asDynamic.accidentForgivenessInit = function() {
  console.log('accidentForgivenessInit');

  //oc: from banner.js
  TweenLite.set("#atAd300x250", {
    visibility: "visible"
  });
  var tl,
    frame1,
    frame2,
    frame3,
    landing;

  frame1 = new SplitText('#frame1', {
    type: "words",
    wordsClass: "word++"
  });
  frame2 = new SplitText('#frame2', {
    type: "words",
    wordsClass: "word++"
  });
  frame3 = new SplitText('#frame3', {
    type: "words",
    wordsClass: "word++"
  });
  landing = new SplitText('#landing', {
    type: "lines"
  });
  $("#frame1 .word2").attr('class', 'whiteIN');
  $("#frame2 .word5").attr('class', 'colorIN');

  CSSPlugin.useSVGTransformAttr = true


  tl = new TimelineMax();

  tl.to("#flash", 0, {
    opacity: 0,
    left: 1000
  })

  tl.to(".in1", 0.2, {
    autoAlpha: 1
  });
  tl.to(".in2", 0.2, {
    autoAlpha: 1
  });
  tl.to(".in3", 0.2, {
    autoAlpha: 1
  });
  tl.to(".in4", 0.2, {
    autoAlpha: 1
  });
  tl.to(".in5", 0.2, {
    autoAlpha: 1
  });

  tl.from("#hands", .6, {
    scaleX: 0,
    scaleY: 0,
    ease: Back.easeInOut,
    easeParams: [2],
    transformOrigin: "40% 40%",
    opacity: 0
  });

  tl.to(".message", .5, {
    autoAlpha: 0,
    delay: 1
  });

  tl.staggerFrom(frame1.words, 0.2, {
    left: -300
  }, 0.07)

  tl.to("#frame1", 0.3, {
    autoAlpha: 0,
    delay: 2
  });

  tl.to("#bkgReveal", 0.7, {
    left: 400,
    top: -200,
    ease: Sine.easeOut
  });

  tl.staggerFrom(frame2.words, 0.2, {
    left: -300
  }, 0.07)

  tl.to("#frame2", 0.3, {
    autoAlpha: 0,
    delay: 2
  });

  tl.to("#bgImg1", 0.5, {
    left: 300,
    ease: Sine.easeOut
  });

  tl.to("#bgImg2", 0.5, {
    left: 0,
    ease: Sine.easeOut,
    delay: -0.5
  });

  tl.staggerFrom(frame3.words, 0.2, {
    left: -300
  }, 0.07)

  tl.to("#frame3", 0.3, {
    autoAlpha: 0,
    delay: 2
  });

  tl.to("#bkgReveal", 0.7, {
    left: -100,
    top: -200,
    ease: Sine.easeOut
  });

  tl.to(".fade", 0.3, {
    autoAlpha: 1
  });

  tl.to(".fade1", 0.3, {
    autoAlpha: 1
  });

  tl.to("#endFrame_subText", 1, {
    autoAlpha: 1
  })

  tl.to("#btn_cta", 0.3, {
    right: -9,
    autoAlpha: 1,
    delay: -0.5
  });


} //end function

asDynamic.bundleSaveInit = function($option) {
  console.info('asDynamic.bundleSaveInit');

  console.debug('is this working?');
}; //end function bundleSaveInit

// oc: CTA Mouseover handlers
var div1 = $("div#btn_cta"),
  tn1 = TweenMax.to(div1, .3, {
    right: 0,
    repeat: -1,
    yoyo: true,
    ease: Linear.easeNone,
    paused: true
  });

div1.mouseenter(function() {
  tn1.play();
});

div1.mouseleave(function() {
  var currentTime = tn1.time();
  tn1.reverse(currentTime);
});
