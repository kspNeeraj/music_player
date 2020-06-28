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
    window.alert('added to queue');
}

