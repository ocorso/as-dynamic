
/*
 * Dynamic Content Enable code for Profile: 1074584
 *
 * The following code initializes the following dynamic variables for
 * development testing and live serving of Fields associated to the above profile

<!-- DynamicContent Start: HTML5 invocation code. -->
*/

// Dynamic Content variables and sample values
    Enabler.setProfileId(1074584);
    var devDynamicContent = {};

    devDynamicContent._Auto_Strategies_Creative= [{}];
    devDynamicContent._Auto_Strategies_Creative[0]._id = 0;
    devDynamicContent._Auto_Strategies_Creative[0].Type = "Home";
    devDynamicContent._Auto_Strategies_Creative[0].Exit_URL = {};
    devDynamicContent._Auto_Strategies_Creative[0].Exit_URL.Url = "https://www.allstate.com/?zip=''";
    devDynamicContent._Auto_Strategies_Creative[0].CTA_Text = "Quote Now";
    devDynamicContent._Auto_Strategies_Creative[0].CTA_bgColor = "#001C68";
    devDynamicContent._Auto_Strategies_Creative[0].Background_Color = "#001C69";
    devDynamicContent._Auto_Strategies_Creative[0].Text_Color = "#001C70";
    devDynamicContent._Auto_Strategies_Creative[0].Logo_Color = "#001C71";
    devDynamicContent._Auto_Strategies_Creative[0].Image_160x600 = {};
    devDynamicContent._Auto_Strategies_Creative[0].Image_160x600.Type = "file";
    devDynamicContent._Auto_Strategies_Creative[0].Image_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/43458957/37231879_20160525171937590_auto-300x250_bg_image1.jpg";
    devDynamicContent._Auto_Strategies_Creative[0].Image_300x250 = {};
    devDynamicContent._Auto_Strategies_Creative[0].Image_300x250.Type = "file";
    devDynamicContent._Auto_Strategies_Creative[0].Image_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/43458957/37231879_20160525171937590_auto-300x250_bg_image1.jpg";
    devDynamicContent._Auto_Strategies_Creative[0].Image_728x90 = {};
    devDynamicContent._Auto_Strategies_Creative[0].Image_728x90.Type = "file";
    devDynamicContent._Auto_Strategies_Creative[0].Image_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/43458957/37231879_20160525171937590_auto-300x250_bg_image1.jpg";
    devDynamicContent._Auto_Strategies_Creative[0].Image_300x600 = {};
    devDynamicContent._Auto_Strategies_Creative[0].Image_300x600.Type = "file";
    devDynamicContent._Auto_Strategies_Creative[0].Image_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/43458957/37231879_20160525171937590_auto-300x250_bg_image1.jpg";
    devDynamicContent._Auto_Strategies_Creative[0].elemType = "LI ID";
    devDynamicContent._Auto_Strategies_Trafficking= [{}];
    devDynamicContent._Auto_Strategies_Trafficking[0]._id = 0;
    devDynamicContent._Auto_Strategies_Trafficking[0].ID = 0;
    devDynamicContent._Auto_Strategies_Trafficking[0].Type = "Default";
    devDynamicContent._Auto_Strategies_Trafficking[0].Placement_Name = " MaxPoint_Desk_DIS_Geo_160x600_B_HighProp_DCM";
    devDynamicContent._Auto_Strategies_Trafficking[0].Is_Default = true;
    devDynamicContent._Auto_Strategies_Geo= [{}];
    devDynamicContent._Auto_Strategies_Geo[0]._id = 0;
    devDynamicContent._Auto_Strategies_Geo[0].ID = 0;
    devDynamicContent._Auto_Strategies_Geo[0].Name = "Default";
    devDynamicContent._Auto_Strategies_Geo[0].Type = "Auto";
    devDynamicContent._Auto_Strategies_Geo[0].Is_Default = true;
    Enabler.setDevDynamicContent(devDynamicContent);


/*
 * You may access the variables in the following manner
 * AFTER the Studio Enabler is initialized.
 * var Type = dynamicContent._Auto_Strategies_Creative[0].Type;
 * Note: be sure to use "dynamicContent", not "devDynamicContent"
 * Note: be sure to use ExitOverride to create your exit URL dynamically; follow the instructions on our Help center: https://support.google.com/richmedia/answer/2664807
 */

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
      adVisible);
  } else {
     adVisible();
  }
}//end function enabler init();

function adVisible() {
  console.log('adVisible(); Type : '+ dynamicContent._Auto_Strategies_Creative[0].Type);



  //oc: dynamic creative switching; 
  //TODO: display loader while Enabler initializes.
  switch(dynamicContent._Auto_Strategies_Creative[0].Type){
    
    case 'Home':

      //oc: hide loader here.
      $('#loader, #auto_aAd_legalTxt').hide();

      //oc: fade in Home div. 
      //onComplete, start animation
      $('#Home').fadeIn(400,function(){
        console.log('oc: play home');
        //Careful with specific elements.
        $('#frame1, #frame2, #landing, #hands').css('opacity',1);
        Home_play();
      });
      break; 
      
    case 'Auto':

      //oc: hide loader here.
      $('#loader, #home_aAd_legalTxt').hide();
      
       //oc: fade in Auto div. 
      //onComplete, start animation
      $('#Auto').fadeIn(400,function(){
        console.log('oc: play auto');
        //Careful with specific elements.
        $('#a_frame1, #a_frame2, #a_landing').css('opacity',1);
        Auto_play();
      });

      break; 
    default: console.error('Unknown creative type.');

      //oc: Consider adding default behavior here.
  
  }//end switch


}//end function adVisible()

//oc: Dynamic exits
var onClick = function(){
  console.log('onClick();');
  Enabler.exitOverride('bgExit', dynamicContent._Auto_Strategies_Creative[0].Exit_URL.Url);

}
function Home_play() {
   var tl, frame1, frame2, landing;

    frame1 = new SplitText('#frame1', {type: "words,chars", wordsClass:"word++",charsClass:"char++"});
    frame2 = new SplitText('#frame2', {type: "words,chars", wordsClass:"word++",charsClass:"char++"});
    landing = new SplitText('#landing', {type: "words", wordsClass:"word++"});
    $("#frame2 .word5 .char21, #frame2 .word5 .char22").attr('class', 'colorIN'); // Add id, lines, words for location of colored IN. Class is changed to .colorIN
    $("#frame1 .word6 .char25, #frame1 .word6 .char26").attr('class', 'colorIN');
    $("#frame2 .colorIN, #frame2 .whiteIN").wrapAll('<div id="wrapIN">');

    CSSPlugin.useSVGTransformAttr = true


    tl = new TimelineMax();

    tl.to("#flash", 0, {opacity:0, left:1000});

    tl.to(".in1", 0.2, {autoAlpha: 1});
    tl.to(".in2", 0.2, {autoAlpha: 1});
    tl.to(".in3", 0.2, {autoAlpha: 1});
    tl.to(".in4", 0.2, {autoAlpha: 1});
    tl.to(".in5", 0.2, {autoAlpha: 1});

    tl.from("#hands", .6, {scaleX:0,scaleY:0, ease:Back.easeInOut, easeParams:[2], transformOrigin: "40% 40%", opacity:0});
    
    tl.to(".message", .5, {autoAlpha:0, delay:1});

    tl.to("#bkgReveal", 0.7, {left: 400,top: -200,ease: Sine.easeOut, delay:-0.5});

    tl.staggerFrom(frame1.words, 0.2, { left: -300 }, 0.07)

    tl.to("#frame1", 0.3, {autoAlpha: 0, delay: 2});
    
    tl.staggerFrom(frame2.words, 0.2, {left: -300}, 0.07)

    tl.to(".whiteIN", 0, {css:{color:"#FF9E16"}, delay:2});

    tl.to("#wrapIN", 0.6, {scale: 110,ease: Sine.easeIn,force3D: false,transformOrigin: "78% 75%"});

    tl.to("#frame2 .word5 .char23,  #frame2 .word6,  #frame2 .word7, #frame2 .word8, #frame2 .word9", 0.5, {opacity: 0,delay: -0.7}); // used to hide words after IN animation

    tl.to("#bkgOrange", 0, {opacity: 1});

    tl.staggerFrom(landing.words, 0.2, {left: -300}, 0.07)

    tl.to("#onlyAllstate", 0.5, {left:17, delay:0.5})

    tl.to("#btn_cta", 0.3, {right: -10,autoAlpha: 1 });

    tl.to("#btn_cta", 0.3, {right: -20,repeat:2,yoyo: true,ease: Linear.easeNone});

};


     

function Auto_play() {
   var tl2, a_frame1, a_frame2, a_landing;
     $('#test2').html($('#wrap').text());
    a_frame1 = new SplitText('#a_frame1', {type: 'words', wordsClass:"word++"});
    a_frame2 = new SplitText('#a_frame2', {type: "lines,words,chars", linesClass:"line++", wordsClass:"word++",charsClass:"char++"});
    a_landing = new SplitText('#a_landing', {type: 'words', wordsClass:"word++"});
    $("#a_frame2 .word8").attr('class', 'reg'); // Add id, lines, words for location for ®. Class is changed to .reg
    $("#a_landing .word4").attr('class', 'reg2');  // Add id, lines, words for location for ®. Class is changed to .reg2
    $('#a_frame2 .word6 .char27, #a_frame2 .word6 .char28').wrapAll('<div id="wrapIN">'); // When enlarged IN is part of a word, #wrapIN id is set to animate both characters

    tl = new TimelineMax();

    tl.to("#flash", 0, {opacity:0, left:1000});

    tl.staggerFrom(a_frame1.words, 0.2, { left: -300 }, 0.07)

    tl.to("#a_bkgReveal", 0.7, {left: 400,top: -200,ease: Sine.easeOut,delay: 2});

    tl.to("#a_frame1", 0.3, {autoAlpha: 0,delay: -0.8});

    tl.staggerFrom(a_frame2.lines, 0.2, {left: -300}, 0.07)

    tl.staggerFromTo("#a_frame2 .line2 .word4", 0.5, {scale:1.2}, {scale:1});

    tl.to("#wrapIN", 0.6, {scale: 110,ease: Sine.easeIn,force3D: false,transformOrigin: "75% 75%", delay:2});

    tl.to(".reg, #a_frame2 .word6 .char29, #a_frame2 .word6 .char30, #a_frame2 .word7, #a_frame2 .word8, #a_frame2 .word9, #a_frame2 .word10, #a_frame2 .word11", 0.5, {opacity:0, delay:-0.6}) // used to hide words after IN animation

    tl.staggerFrom(a_landing.words, 0.2, {left: -300}, 0.07)

    tl.to("#a_Allstate", .3, {left:300});

    tl.to("#a_onlyAllstate", 0.5, {left:200, delay:0.5})

    tl.to("#a_btn_cta", 0.5, {right: -10,autoAlpha: 1});
    tl.to("#a_btn_cta", 0.3, {right: -20,repeat:2,yoyo: true,ease: Linear.easeNone});

};



var div1 = $("div#Home_btn_cta"),
    tn1 = TweenMax.to(div1, .3, {right: -10,repeat: -1,yoyo: true,ease: Linear.easeNone,paused: true
    });

div1.mouseenter(function() {
    console.log('Home_btn_cta mouseenter');
    tn1.play();
});

div1.mouseleave(function() {
    var currentTime = tn1.time();
    tn1.reverse(currentTime);
});

var div2 = $("div#Auto_btn_cta"),
    tn2 = TweenMax.to(div2, .3, {right: 0,repeat: -1,yoyo: true,ease: Linear.easeNone,paused: true
    });

div2.mouseenter(function() {
    console.log('Auto_btn_cta mouseenter');
    tn2.play();
});

div2.mouseleave(function() {
    var currentTime = tn2.time();
    tn2.reverse(currentTime);
});

