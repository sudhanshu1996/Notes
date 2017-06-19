$(document).ready(function(){
  var alldetails="";
  var ol,olid;
    $('#body').on('click', 'button', function() {
      //alert("sss");
        var btn_id = $(this).attr('id')
        var id = $(this).closest('li').attr('id');
        var did= $(this).closest('details').attr('id');
        var name=did.slice(0,did.length-1)
        var store,summary,details;
        var ac = document.getElementById(id).innerHTML;
      var element= document.getElementById(id);
      var text=  element.textContent;
      var final=text.slice(0,text.length);
      alert(text);
      var x = parseInt(id);
        if(x%2==0){
       final+="`";
      }
      else final+="``";
      chrome.storage.sync.get(name,function(mynotes){
        alert(final);
       store=mynotes[name].replace(final,"");
       alert(store);
       chrome.storage.sync.set({[name]:store},function(){  });
      });


    });
   //}
    $('#deleteAll').on('click', 'button', function() {
       chrome.storage.sync.get(['notes'],function(mynotes){
         chrome.storage.sync.set({'notes':""},function(){  });
       });
    });
    $('#submit').on('click', 'button', function() {

      chrome.storage.sync.get(['alldetails'],function(mynotes){
        var k=0;
        var text=document.getElementById("new");
        var textd,p;
        //alert(text.value);
        for(i=0;i<mynotes.alldetails.length;i++){
          if(mynotes.alldetails[i]!="`"){
            textd+=mynotes.alldetails[i];
          }
          else{

            b=textd;
            p=textd.slice(0,textd.length-1);
            //alert(textd);
            textd="";

            if(p==text.value)
            {
              k=1;
            }
        }
      }
      //alert(k);
      if(k==1)
      {
        alert("Select some different name this name is already available");
      }
      else {

        details=document.createElement("details");
        ol=document.createElement("ol");
        olid=text.value+"3";
        //var k;
      //  alert(olid);
        ol.setAttribute("id",text.value); //li.setAttribute("id",countl);
        details.setAttribute("id",olid);
       //details.setAttribute(open);
         //alert(mynotes.alldetails);
        alldetails=mynotes.alldetails+olid+"`";
        summary=document.createElement("summary");
        tab=document.createTextNode(text.value);
        summary.appendChild(tab);
        details.appendChild(summary);
        details.appendChild(ol);
        document.getElementById("body").appendChild(details);
        chrome.storage.sync.set({'alldetails':alldetails},function(){  });
        alert(mynotes.alldetails);

      }

      });
    });
});
