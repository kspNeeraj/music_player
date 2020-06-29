function apend(x,key){
    var elmnt=document.getElementsByClassName(key)[x]; 
    var x= document.createAttribute("class");
    x.value="queueSongs";
    
    console.log(elmnt); 
    var cln= elmnt.cloneNode(true);
    cln.setAttributeNode(x);
    console.log("Song  added to queue ");
                        new Noty({
                        theme: 'relax',
                        text: "Song  added to queue",
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500
                        
                    }).show()
    document.getElementById('queues').append(cln); 
    // window.alert('added to queue');
}

//change favartist link hover title
function changeTitle(n){
    var elmnt=document.getElementsByClassName('togglefavartist')[n];
    var x= document.createAttribute("title");
    x.value="remove from favartist";
    var y= document.createAttribute("onclick");
    y.value=`changetitle(${n})`;
    elmnt.setAttributeNode(x);
    elmnt.setAttributeNode(y);
}
//change favartist link hover title title
function changetitle(n){
    var elmnt=document.getElementsByClassName('togglefavartist')[n];
    var x= document.createAttribute("title");
    x.value="add to favartist";
    var y= document.createAttribute("onclick");
    y.value=`changeTitle(${n})`;
    elmnt.setAttributeNode(x);
    elmnt.setAttributeNode(y);
}



