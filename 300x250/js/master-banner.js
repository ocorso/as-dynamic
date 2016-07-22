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
}//end function enabler init();

/**
 * This function is called when the Enabler is initialized.
 * Uses dynamic content to determine which variation to display
 * 
*/
asDynamic.init = function () {
  console.log('asDynamic.init();');

  //oc: handle variations independently.
  switch ('AF'){//oc: placeholder for now
    case 'AF': 
      asDynamic.accidentForgivenessInit();

      break;

    default : console.log('run default ad');
  }//end switch
};//end asDynamic.init


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
asDynamic.accidentForgivenessInit = function(){
  console.log('accidentForgivenessInit');

  //oc: se

}//end
