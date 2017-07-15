$(function(){
    var newnotes ="";
    var count=0;
    var textd="",b,summary,tab;
    var ar=new Array(100);
    chrome.storage.sync.get('alldetails',function(mynotes){


      for(i=0;i<mynotes.alldetails.length;i++){
        if(mynotes.alldetails[i]!="`"){
          textd+=mynotes.alldetails[i];
        }
        else{
          b=textd;
          p=textd.slice(0,textd.length-1);
          var node="",aid="";
          var an,bt,bttext,linebreak;

          if(p!="notes"){

          aid=p+"4";
          node="delete "+p;
          details=document.createElement("details");
          an=document.createElement("a");
          linebreak=document.createElement("br");
          bt=document.createElement("button");
          bt.setAttribute("type","button");
          bt.setAttribute("class","btn btn-danger");
          bt.setAttribute("id",aid);
          an.setAttribute("href","chrome-extension://ojffefdplfkjgcfilifkomfifmdbceme/popup.html");
          bttext=document.createTextNode(node);
          bt.appendChild(bttext);
          an.appendChild(bt);
          olk=document.createElement("ol");
          olk.setAttribute("id",p);
          details.setAttribute("id",b);
          strong=document.createElement("strong");
          summary=document.createElement("summary");
          tab=document.createTextNode(p);
          strong.appendChild(tab);
          summary.appendChild(strong);

          details.appendChild(summary);
          details.appendChild(an);
          details.appendChild(linebreak);
          details.appendChild(olk);
          document.getElementById("body").appendChild(details);

        }

          textd="";


          ar[count]=p;
          count=count+1;

         }
       }

    // alert(count);
     var cc=count;
     var countt=0,countl=1;
     for(j=0;j<count;j++){

          chrome.storage.sync.get(ar[j],function(mynotes){


            var li,t,a,button,abutton,span;

            var ol;
            var color =["list-group-item list-group-item-success","list-group-item list-group-item-info",
                        "list-group-item list-group-item-danger","list-group-item list-group-item-warning"];
            p=ar[j-cc];cc=cc-1;
            //alert(p);
            var text = mynotes[p];
            //alert(text);

            for(i=0;i<text.length;i++){
              if(text[i]!="`" ){
                newnotes+=text[i];
              }
              else{
                if(text[i+1]=="`"){
                i++;
                li = document.createElement("li");    //if copied element is  link

                li.setAttribute("id",countl);
                //alert("ss");
                li.setAttribute("class",color[countl%4]);
                a= document.createElement("a");
                span = document.createElement("span");
                span.setAttribute("class","glyphicon glyphicon-remove");
                abutton= document.createElement("a");
                t = document.createTextNode(newnotes);

                a.appendChild(t);
                a.setAttribute("href", newnotes);
                a.setAttribute("target", "_blank");
                button = document.createElement("button");
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
                //alert('qqq');
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
               //alert(countt);
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
              }

            }
          });
        }

});
});
