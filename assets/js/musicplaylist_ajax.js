{
    console.log("musicplaylist ajax loaded");
    
    
    
    class toggle_playlist{
        constructor(toggleElement){
            this.toggler = toggleElement;
            this.toggle();
        }
    
    
        toggle(){
            $(this.toggler).click(function(e){
                e.preventDefault();
                let self = this;
               
                $.ajax({
                    type: 'GET',
                    url: $(self).attr('href'),
                    
                })
                .done(function(data) {
                    
                    if (data.data.deleted == true){
                        
                        console.log("Song removed from  playlist");
                        new Noty({
                        theme: 'relax',
                        text: "Song removed from  playlist",
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500
                        
                    }).show()
                        let deletesong = DeleteplaylistSong(data.data.newSong);
                        
                    }
                    else{
                        console.log(data);
                        let Song = newplaylistSongDom(data.data.newSong);
                        console.log("Song  added to playlist");
                        new Noty({
                        theme: 'relax',
                        text: "Song  added to playlist",
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500
                        
                    }).show()
                        $('#music_playlist').append(Song);
                    }
                })
                .fail(function(errData) {
                    console.log('error in completing the request',errData);
                });
                
    
            });
        }
    }
    
    let newplaylistSongDom = function(song){
            return $(`<li id="playlist-${song.id}" style="width: 100%;">
            
                <div  class="artistSong userplaylist" >   
                    <div class="baricon1 "></div>
                    <div id="${song.id}" class="songimage " ><a onclick="${song.onclic}"  class="play1" ></a><audio class="queue_songs" src="${song.source}"></audio></a></div>
                    <div  class="songtexts " ><b>${song.name}</b></div>
                </div>
                   
        </li>`);
    }
    let DeleteplaylistSong = function(newSong){
        $(`#playlist-${newSong.id}`).remove();
    }
    
    
    $('.toggleplaylist').each(function(){
        let self= this;
        
        let toggle = new toggle_playlist(self);
    });
    
    }