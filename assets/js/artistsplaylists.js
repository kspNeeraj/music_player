function changeArtist(x){
	key=x;
	console.log(key);
	list=document.getElementsByClassName(key);
	console.log(list);
	l=list.length;
	i=-1;j=-1;
	playfirstsong();
}


function changeimageforArtistPlaylist(x,y){
	var qu=document.getElementsByClassName(y);
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
function chnagesongnamforartistplaylist(x,y){
	//getting the all values of footer 
	var styl=document.getElementsByClassName('footer');
	var qu=document.getElementsByClassName(y);
		//getting the songname of song from list of songs
		var element = qu[x].childNodes[5].childNodes[0].innerHTML;
		//changing the songname of playing song
		styl[0].childNodes[3].childNodes[3].innerHTML=element;
}
//change song function for specific onclick song of queue
function changeSongforartistplaylist(n,y){
	//getting the song from the list
	var qu=document.getElementsByClassName(y);
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
	
}



function lighters(y){
	changeimageforArtistPlaylist(0,y);
	chnagesongnamforartistplaylist(0,y);
	changeSongforartistplaylist(0,y);
}
function whatilove(y){
	changeimageforArtistPlaylist(1,y);
	chnagesongnamforartistplaylist(1,y);
	changeSongforartistplaylist(1,y);
}
function pompeii(y){
	changeimageforArtistPlaylist(2,y);
	chnagesongnamforartistplaylist(2,y);
	changeSongforartistplaylist(2,y);
}
function radioactive(y){
	changeimageforArtistPlaylist(3,y);
	chnagesongnamforartistplaylist(3,y);
	changeSongforartistplaylist(3,y);
}
function ringaling(y){
	changeimageforArtistPlaylist(4,y);
	chnagesongnamforartistplaylist(4,y);
	changeSongforartistplaylist(4,y);
}