var key;var list;var l;
function play(x){
	key=x;
	console.log(key);
	list=document.getElementsByClassName(key);
	console.log(list);
	l=list.length
	i=-1;j=-1;
	playfirstsong();
}

function playfirstsong(){
	var y=document.getElementById('playing_song');
	//getting the source of song from the list of the songs
	changeBackgroundimage(0);
	chnagesongname(0);
		y.src=list[0].childNodes[3].childNodes[1].src;
		 var playPromise = y.play();
		 		//to prevent request was interrupted by a new load request.
			  if (playPromise !== undefined) {
			    playPromise.then(_ => {
			      // Automatic playback started!
			      // Show playing UI.
			    })
			    .catch(error => {
			      // Auto-play was prevented
			      // Show paused UI.
			    });
			  }
			  i=0;j=0;
}


//getting the values queue of song from queue
//var list=document.getElementsByClassName(key);
var i=-1;var j=-1;


function changeBackgroundimage(x){
	//getting the all values of footer 
	var styl=document.getElementsByClassName('footer');
	//geeting the style of songimage of playing music
	var change=styl[0].childNodes[1].childNodes[1].style;
	//changing the image of playing song
		//getting the values from list of songs
		var element = list[x].childNodes[3];
		//getting the styles of song
		var con = window.getComputedStyle(element);
		//getting the specific style background image of song
		to = con.getPropertyValue('background-image');
		//changing the previous image to currently playing song image
		change.setProperty("background-image",to);

}
function chnagesongname(x){
	//getting the all values of footer 
	var styl=document.getElementsByClassName('footer');
	
		//getting the songname of song from list of songs
		var element = list[x].childNodes[5].childNodes[0].innerHTML;
		//changing the songname of playing song
		styl[0].childNodes[3].childNodes[3].innerHTML=element;
}

//chnage song function for forward and backward 
function Changesong(x){
	//getting player values
	var y=document.getElementById('playing_song');
	//getting the source of song from the list of the songs
		y.src=list[x].childNodes[3].childNodes[1].src;
		 var playPromise = y.play();
		 		//to prevent request was interrupted by a new load request.
			  if (playPromise !== undefined) {
			    playPromise.then(_ => {
			      // Automatic playback started!
			      // Show playing UI.
			    })
			    .catch(error => {
			      // Auto-play was prevented
			      // Show paused UI.
			    });
			  }

}

//forward function of playing music
document.getElementById('forward').addEventListener("click", function(){
	if(i>=l-1 ){
		i=-1;
		j=-1;
	}
	 

   if(i<=l-1 && i>=0){
	  	 i++;
		j=i;
		//changing the image of playing song
		changeBackgroundimage(i);
		chnagesongname(i);
		Changesong(i);

	}
	 if(i==-1){
		
		i+=1;
		j=i;
		//changing the image of playing song
		changeBackgroundimage(i);
		chnagesongname(i);
		//changing song
		Changesong(i);	
	
				
	}
	console.log(i);
	console.log(j);

});

	
document.getElementById('backward').addEventListener("click", function(){
	
	if(j==-1){
		j=l=1;i=l-1;
	}
	if(j==0){
		j=l-1;
		i=l-1;
		//changing the image of playing song
		changeBackgroundimage(j);
		chnagesongname(j);
		Changesong(j);
	}
	

   else if(j<l && j>0){  	  
  	  j--;
	  i=j	
	//changing the image of playing song
	changeBackgroundimage(j);
	chnagesongname(j);
	//changing song
	Changesong(j);	
	}
	 
	console.log(i);
	console.log(j);
});


function changeBackgroundimag(x){
	var qu=document.getElementsByClassName('songs');
	//getting the all values of footer 
	var styl=document.getElementsByClassName('footer');
	//geeting the style of songimage of playing music
	var change=styl[0].childNodes[1].childNodes[1].style;
	//changing the image of playing song
		//getting the values from list of songs
		var element = qu[x].childNodes[3];
		//getting the styles of song
		var con = window.getComputedStyle(element);
		//getting the specific style background image of song
		to = con.getPropertyValue('background-image');
		//changing the previous image to currently playing song image
		change.setProperty("background-image",to);

}
function chnagesongnam(x){
	//getting the all values of footer 
	var styl=document.getElementsByClassName('footer');
	var qu=document.getElementsByClassName('songs');
		//getting the songname of song from list of songs
		var element = qu[x].childNodes[5].childNodes[0].innerHTML;
		//changing the songname of playing song
		styl[0].childNodes[3].childNodes[3].innerHTML=element;
}
//change song function for specific onclick song of queue
function changeSong(n){
	//getting the song from the list
	var qu=document.getElementsByClassName('songs');
	var x=qu[n].childNodes[3].childNodes[1];
	//getting the player
	var y=document.getElementById('playing_song');
	//changing player song source to chnage the music
	y.src=x.src;
	//after change playing the
	var playPromise = y.play();
		 		//to prevent request was interrupted by a new load request.
			  if (playPromise !== undefined) {
			    playPromise.then(_ => {
			      // Automatic playback started!
			      // Show playing UI.
			    })
			    .catch(error => {
			      // Auto-play was prevented
			      // Show paused UI.
			    });
			  }
	i=n,j=n
}


function Avici(){
	//changing the image of playing song
		changeBackgroundimag(0);
	//changing song
	changeSong(0);
	chnagesongnam(0);
}
function charlie(){
	//changing the image of playing song
		changeBackgroundimag(1);
	//changing song
	changeSong(1);
	chnagesongnam(1);
}
function pharell(){
	//changing the image of playing song
		changeBackgroundimag(2);
	//changing song
	changeSong(2);
	chnagesongnam(2);
}
function william(){
	//changing the image of playing song
		changeBackgroundimag(3);
	//changing song
	changeSong(3);
	chnagesongnam(3);
}
function sam_smith(){
	//changing the image of playing song
		changeBackgroundimag(4);
	//changing song
	changeSong(4);
	chnagesongnam(4);
}
function tommy_trash(){
	//changing the image of playing song
		changeBackgroundimag(5);
	//changing song
	changeSong(5);
	chnagesongnam(5);
}
function selena(){
	//changing the image of playing song
		changeBackgroundimag(6);
	changeSong(6);
	chnagesongnam(6);
}
function jack(){
	//changing the image of playing song
		changeBackgroundimag(7);
	changeSong(7);
	chnagesongnam(7);
}
function passengers(){
	//changing the image of playing song
		changeBackgroundimag(8);
	changeSong(8);
	chnagesongnam(8);
}
function pharrell(){
	//changing the image of playing song
		changeBackgroundimag(9);
	changeSong(9);
	chnagesongnam(9);
}
function jason_derullo(){
	//changing the image of playing song
		changeBackgroundimag(10);
	changeSong(10);
	chnagesongnam(10);
}
function taylor_swift(){
	//changing the image of playing song
		changeBackgroundimag(11);
	changeSong(11);
	chnagesongnam(11);
}
function Avril(){
	//changing the image of playing song
		changeBackgroundimag(12);
	changeSong(12);
	chnagesongnam(12);
}
function bruno(){
	//changing the image of playing song
		changeBackgroundimag(13);
	//changing song
	changeSong(13);
	chnagesongnam(13);
}
function timberlake(){
	//changing the image of playing song
		changeBackgroundimag(14);
	changeSong(14);
	chnagesongnam(14);
}
function louis(){
	//changing the image of playing song
		changeBackgroundimag(15);
	changeSong(15);
	chnagesongnam(15);
}
function murs(){
	//changing the image of playing song
		changeBackgroundimag(16);
	changeSong(16);
	chnagesongnam(16);
}
function lawson(){
	//changing the image of playing song
		changeBackgroundimag(17);
	changeSong(17);
	chnagesongnam(17);
}
function jessie(){
	//changing the image of playing song
		changeBackgroundimag(18);
	changeSong(18);
	chnagesongnam(18);
}
function Arctic(){
	//changing the image of playing song
		changeBackgroundimag(19);
	changeSong(19);
	chnagesongnam(19);
}




//change favsong heart icon hover title after adding to favartisst  channge to remove from favartist 
function changeTitlesong(n){
	//get the element from song  where title is add to fvorites
	var elmnt=document.getElementsByClassName('togglefavSong')[n];
	//craete attribute of title
	var x= document.createAttribute("title");
	//changee the title onclick
	x.value="remove from favorite songs";
	//craete  on click function 
    var y= document.createAttribute("onclick");
	y.value=`changetitlesong(${n})`;
	//added to the element
    elmnt.setAttributeNode(x);
    elmnt.setAttributeNode(y);
}
//change favsong heart icon hover title after adding to favsong  channge to remove from favsoong
function changetitlesong(n){
	//get the element from song  where title is remove from favsong
	var elmnt=document.getElementsByClassName('togglefavSong')[n];
	//craete attribute of title
	var x= document.createAttribute("title");
	//changee the title onclick
	x.value="add to favroite songs";
	//craete  on click function back to changeTitlesong
    var y= document.createAttribute("onclick");
	y.value=`changeTitlesong(${n})`;
	//added to the element
    elmnt.setAttributeNode(x);
    elmnt.setAttributeNode(y);
}


//change user add to playlist  , plus icon hover title
function changeTitleAdd(n){
    var elmnt=document.getElementsByClassName('toggleplaylist')[n];
    var x= document.createAttribute("title");
    x.value="remove from playlist";
    var y= document.createAttribute("onclick");
    y.value=`changetitleremove(${n})`;
    elmnt.setAttributeNode(x);
    elmnt.setAttributeNode(y);
}
//change user add to playlist plus icon   hover title after adding to playlist  channge to remove from playlist 
function changetitleremove(n){
    var elmnt=document.getElementsByClassName('toggleplaylist')[n];
    var x= document.createAttribute("title");
    x.value="add to playlist";
    var y= document.createAttribute("onclick");
    y.value=`changeTitleAdd(${n})`;
    elmnt.setAttributeNode(x);
    elmnt.setAttributeNode(y);
}










// var styl=document.getElementsByClassName('footer');
	
// 	var change=styl[0].childNodes[3].childNodes[3].innerHTML;
// 	console.log(change);
// 		var element = list[0].childNodes[5].childNodes[0].innerHTML;
// 		console.log(element);



// var drop=document.getElementsByClassName('songs');

//console.log(drop[1].childNodes[3].childNodes[2].src);
// console.log(drop[0].childNodes[3].childNodes);
// var element = drop[0].childNodes[3];
// console.log(element);
// var con = window.getComputedStyle(element);
// to = con.getPropertyValue('background-image');
// console.log(to.slice(3));
// var z="images/seeyou.jpg"
// var styl=document.getElementsByClassName('footer');

// var y=styl[0].childNodes[1].childNodes[1].style;
// y.setProperty("background-image",to);
// console.log(y);
// var y1=styl[0].childNodes[1].childNodes[1];
//  var v =window.getComputedStyle(y1);
//  console.log(v.getPropertyValue('background-image'));



// var elemen = document.getElementById('image_1'),
//     style = window.getComputedStyle(element),
//     top = style.getPropertyValue('top');