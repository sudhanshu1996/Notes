
$(function(){
    var newnotes ="";
    chrome.storage.sync.get(['notes'],function(mynotes){
      // document.getElementById('bc').innerHTML=mynotes.notes;
      var x,t;
      var text = mynotes.notes;
      for(i=0;i<text.length;i++){
        if(text[i]!="`"){
          newnotes+=text[i];
        }
        else{
          x = document.createElement("li");
          t = document.createTextNode(newnotes);
          x.appendChild(t);
          document.getElementById("notes").appendChild(x);
          newnotes = "";
        }
      }
      x = document.createElement("li");
      t = document.createTextNode(newnotes);
      x.appendChild(t);
      document.getElementById("notes").appendChild(x);
      //  $('#notes').text(mynotes.notes);
     
    });

  //  $('#notes').text(newnotes);

});
