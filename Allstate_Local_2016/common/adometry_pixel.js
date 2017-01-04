    /*******************************************************************************
         Start of Adometry Tag for DoubleClick Dynamic Creatives: DO NOT REMOVE.
         Append this entire block to enablerInitHandler(), ONLY AFTER executing
         Enabler.setDevDynamicContent(devDynamicContent).  Be sure to set 'nid'
         below according to your Adometry account ID.
         
         nid = Adometry account id, pid = DCM placement id, cid = dynamic element ID 
    ********************************************************************************/

    var nid=3700;
    var pid=(function(){p=Enabler.getDartPageId();if(!isNaN(p))return p;else return 0})();
    var cid=(function(){s='';d=dynamicContent;for(x in d){if(x!='_profileid')s+=(d[x][0].elemType+d[x][0].ID);}for(var h=0,i=0;i<s.length;i++)h=h*31+s.charCodeAt(i);return h&0x7FFFFFFF})();
    var str='https://js.dmtry.com/antenna2.js?0_'+nid+'_'+pid+'_'+cid;
    console.log(str);
    var script=document.createElement('script');
    script.src = str;
    document.body.appendChild(script);

   /*******************************************************************************
         End Adometry Tag for DoubleClick Dynamic Creatives: DO NOT REMOVE. 
   ********************************************************************************/