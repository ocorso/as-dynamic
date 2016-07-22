$(document).ready(function() {
    TweenLite.set("#atAd300x250", {visibility:"visible"});
    var tl, frame1, frame2, frame3, landing;

    frame1 = new SplitText('#frame1', {type: "words", wordsClass:"word++"});
    frame2 = new SplitText('#frame2', {type: "words", wordsClass:"word++"});
    frame3 = new SplitText('#frame3', {type: "words", wordsClass:"word++"});
    landing = new SplitText('#landing', {type: "lines"});
    $("#frame1 .word2").attr('class', 'whiteIN');
    $("#frame2 .word5").attr('class', 'colorIN'); 

    CSSPlugin.useSVGTransformAttr = true


    tl = new TimelineMax();

    tl.to("#flash", 0, {opacity:0, left:1000})

    tl.to(".in1", 0.2, {autoAlpha: 1});
    tl.to(".in2", 0.2, {autoAlpha: 1});
    tl.to(".in3", 0.2, {autoAlpha: 1});
    tl.to(".in4", 0.2, {autoAlpha: 1});
    tl.to(".in5", 0.2, {autoAlpha: 1});

    tl.from("#hands", .6, {scaleX:0,scaleY:0, ease:Back.easeInOut, easeParams:[2], transformOrigin: "40% 40%", opacity:0});
    
    tl.to(".message", .5, {autoAlpha:0, delay:1});

    tl.staggerFrom(frame1.words, 0.2, { left: -300 }, 0.07)

    tl.to("#frame1", 0.3, {autoAlpha: 0, delay:2});

    tl.to("#bkgReveal", 0.7, {left: 400,top: -200,ease: Sine.easeOut});
    
    tl.staggerFrom(frame2.words, 0.2, {left: -300}, 0.07)

    tl.to("#frame2", 0.3, {autoAlpha: 0, delay:2});

    tl.to("#bgImg1", 0.5, {left:300, ease: Sine.easeOut});

    tl.to("#bgImg2", 0.5, {left:0, ease: Sine.easeOut, delay:-0.5});

    tl.staggerFrom(frame3.words, 0.2, {left: -300}, 0.07)

    tl.to("#frame3", 0.3, {autoAlpha: 0, delay:2});

    tl.to("#bkgReveal", 0.7, {left: -100,top: -200,ease: Sine.easeOut});
	
	tl.to(".fade", 0.3, {autoAlpha: 1});
	
	tl.to(".fade1", 0.3, {autoAlpha: 1});
	
    tl.to("#endFrame_subText", 1, {autoAlpha: 1})

   tl.to("#btn_cta", 0.3, {right: -9,autoAlpha: 1, delay:-0.5 }); 

});


var div1 = $("div#btn_cta"),
    tn1 = TweenMax.to(div1, .3, {right: 0,repeat: -1,yoyo: true,ease: Linear.easeNone,paused: true});

div1.mouseenter(function() {
    tn1.play();
});

div1.mouseleave(function() {
    var currentTime = tn1.time();
    tn1.reverse(currentTime);
});