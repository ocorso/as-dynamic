$(document).ready(function() {
    TweenLite.set("#atAd300x250", {
        visibility: "visible"
    });
    var tl, frame1, frame2, frame3, frame4, landing;


    // USE BOTTOM DIV FOR BASELINE ALIGNMENT 
    frame1 = new SplitText('#frame1 #bottom', {
        type: "lines,words,chars",
        wordsClass: "word++",
        charsClass: "char++",
    });


    frame3 = new SplitText('#frame3', {
        type: "lines,words,chars",
        wordsClass: "word++",
        charsClass: "char++",
    });

    // USE FOR CHANGING TEXT COLOR
    $("#frame3 .char2, #frame3 .char3").attr('class', 'txtBlue');

    // USE FOR ADDING ®
    $("#frame1 .char7").attr('class', 'sup');
    $("#frame3 .char6").attr('class', 'sup');


    CSSPlugin.useSVGTransformAttr = true

    tl = new TimelineMax();

    tl.staggerFrom(frame1.lines, 0.2, {
        left: -300,
        delay:0.5
    }, 0.07)

    tl.staggerFrom(frame3.lines, 0.2, {
        left: -300,
        delay:0.5
    }, 0.07)

    tl.to("#bgImg2", 0.3, {
        autoAlpha: 1
    });


   tl.to("#bkgColor", 0.3, {
        autoAlpha: 1,
    });


   tl.to("#landing", 0.3, {
        autoAlpha: 1,
    });


    tl.to("#btn_cta", 0.3, {
        right: -10,
        autoAlpha: 1
    });

    tl.to("#btn_cta", 0.3, {
        right: -20,
        repeat: 2,
        yoyo: true,
        ease: Linear.easeNone
    });

});


var div1 = $("div#btn_cta"),
    tn1 = TweenMax.to(div1, .3, {
        right: -10,
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
