
$(function(){
     newnotes = "helo";
    chrome.storage.sync.get(['notes'],function(mynotes){
       mynotes.notes = "</br>" + mynotes.notes;
      // document.getElementById('bc').innerHTML=mynotes.notes;
        $('#notes').text(mynotes.notes);

    });

  //  $('#notes').text(newnotes);

});
