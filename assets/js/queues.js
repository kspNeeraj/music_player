function apend(x,key){
    var elmnt=document.getElementsByClassName(key)[x]; 
    var x= document.createAttribute("class");
    x.value="queueSongs";
    
    console.log(elmnt); 
    var cln= elmnt.cloneNode(true);
    cln.setAttributeNode(x);
    console.log(cln);
    document.getElementById('queues').append(cln); 
    window.alert('added to queue');
}

