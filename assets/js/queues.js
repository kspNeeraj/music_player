function apend(x,key){
    var elmnt=document.getElementsByClassName(key)[x]; 
    console.log(elmnt); 
    var cln= elmnt.cloneNode(true);
    
    document.getElementById('queues').append(cln); 
    window.alert('added to queue');
}