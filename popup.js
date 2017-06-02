$(function(){
    var newnotes ="";
    var count=0;
    var textd="",b,summary,tab;
    var ar=new Array(100);
    chrome.storage.sync.get('alldetails',function(mynotes){
      //alert(mynotes.alldetails);

      for(i=0;i<mynotes.alldetails.length;i++){
        if(mynotes.alldetails[i]!="`"){
          textd+=mynotes.alldetails[i];
        }
        else{
          b=textd;
          p=textd.slice(0,textd.length-1);
          if(p!="notes"){

          details=document.createElement("details");
          olk=document.createElement("ol");
          olk.setAttribute("id",p);
          //alert(p);
          details.setAttribute("id",b);
          summary=document.createElement("summary");
          tab=document.createTextNode(p);
          summary.appendChild(tab);
          details.appendChild(summary);
          details.appendChild(olk);
          document.getElementById("body").appendChild(details);
        }

          textd="";

          //alert(p);
          ar[count]=p;
          count=count+1;
          //alert("qqq");
         }
       }

     alert(count);
     var cc=count;
     for(j=0;j<count;j++){
        //p=ar[i];
      //  alert(ar[j]);

          chrome.storage.sync.get(ar[j],function(mynotes){
            //alert("jj");

            var li,t,a,button,abutton,span;
            var countt=0,countl=0;
            var ol;
            var color =["list-group-item list-group-item-success","list-group-item list-group-item-info",
                        "list-group-item list-group-item-danger","list-group-item list-group-item-warning"];
            p=ar[j-cc];cc=cc-1;
            alert(p);
            var text = mynotes[p];
            alert(text);
            //alert(mynotes.notes[17]);
            for(i=0;i<text.length;i++){
              if(text[i]!="`" ){
                newnotes+=text[i];
              }
              else{
                //alert(newnotes);
                if(text[i+1]=="`"){
                i++;
                li = document.createElement("li");    //if copied element is  link

                li.setAttribute("id",countl);
                alert("ss");
                li.setAttribute("class",color[countl%4]);
                a= document.createElement("a");
                span = document.createElement("span");
                span.setAttribute("class","glyphicon glyphicon-remove");
                abutton= document.createElement("a");
                t = document.createTextNode(newnotes);
              //  alert(newnotes.length);

                a.appendChild(t);
                a.setAttribute("href", newnotes);
                a.setAttribute("target", "_blank");
                button = document.createElement("button");
              //  button.innerHTML = "x";
                button.setAttribute("id",countl);countl=countl+2;
                button.setAttribute("class","btn btn-danger btn-xs");
                button.appendChild(span);
                abutton.appendChild(button);
                abutton.setAttribute("href","chrome-extension://ojffefdplfkjgcfilifkomfifmdbceme/popup.html");
                li.appendChild(a);
                li.appendChild(abutton);
                ol=document.getElementById(p);
                b=p+3;
                ol.appendChild(li);
                alert('qqq');
                if(p!='notes')
                document.getElementById(b).appendChild(ol);
                newnotes = "";
              }
                else {                                   //if copied element is text
                li = document.createElement("li");
                li.setAttribute("id",countt);
                li.setAttribute("class",color[countt%4]);
                span = document.createElement("span");
                span.setAttribute("class","glyphicon glyphicon-remove");
                t = document.createTextNode(newnotes);
              //  alert(newnotes.length);
                button = document.createElement("button");
                abutton= document.createElement("a");
              //  button.innerHTML = "x";
               button.setAttribute("class","btn btn-danger btn-xs");
                button.setAttribute("id",countt);countt=countt+2;
                button.appendChild(span);
                abutton.appendChild(button);
                abutton.setAttribute("href","chrome-extension://ojffefdplfkjgcfilifkomfifmdbceme/popup.html");
                li.appendChild(t);
                li.appendChild(abutton);

                ol=document.getElementById(p);
                //var srb=document.getElementById(p).innerHTML;
                b=p+"3";

                ol.appendChild(li);
               if(p!='notes')
                document.getElementById(b).appendChild(ol);
                newnotes = "";
                //alert(b);
                }
                //alert(text);
                //alert(i);
              }

            }
          });
        }




});

});
