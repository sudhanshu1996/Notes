$(document).ready(function(){
  var alldetails="";
  var ol,olid;
    $('#notes').on('click', 'button', function() {
        var btn_id = $(this).attr('id')
        var id = $(this).closest('li').attr('id');
        var store,summary,details;
        var ac = document.getElementById(id).innerHTML;
      var element= document.getElementById(id);
      var text=  element.textContent;
      var final=text.slice(0,text.length);
      //alert(text);
    var x = parseInt(id);
        if(x%2==0){
       final+="`";
      }
      else final+="``";
      chrome.storage.sync.get(['notes'],function(mynotes){
       store=mynotes.notes.replace(final,"");
       //alert(final);
       chrome.storage.sync.set({'notes':store},function(){  });
      });


    });
   }
    $('#deleteAll').on('click', 'button', function() {
       chrome.storage.sync.get(['notes'],function(mynotes){
         chrome.storage.sync.set({'notes':""},function(){  });
       });
    });
    $('#submit').on('click', 'button', function() {
      chrome.storage.sync.get(['alldetails'],function(mynotes){
        var text=document.getElementById("new");
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
      });
    });
});
