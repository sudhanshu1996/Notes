var menuItem = {
  "id" : "addtonotes",
  "title" : "Add to Notes",
  "contexts" : ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
  if(clickData.menuItemId == "addtonotes" && clickData.selectionText){
     chrome.storage.sync.get('notes',function(mynotes){
       var newnotes = "";
       if(mynotes.notes){
        // alert(mynotes.notes);
         newnotes = mynotes.notes+"\n"+ clickData.selectionText;

       }else{
         newnotes += clickData.selectionText;
         alert('hello gals');
       }
       chrome.storage.sync.set({'notes':newnotes},function(){

        $('#notes').text(mynotes.notes);
       });
     });
  }
});
