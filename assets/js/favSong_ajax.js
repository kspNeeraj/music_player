{
console.log("favsong ajax loaded");



class toggle_favsong{
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
                   
                    console.log("Song removed from Favroite");
                    new Noty({
                        theme: 'relax',
                        text: "Song removed from Favroite",
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500
                        
                    }).show()
                    let deletesong = DeleteSong(data.data.newFavSong);
                    
                }
                else{
                  
                    let newSong = newfavSongDom(data.data.newFavSong);
                    console.log("Song  added to Favroite");
                    new Noty({
                        theme: 'relax',
                        text: "Song  added to Favroite",
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500
                        
                    }).show()
                    $('#favsong').append(newSong);
                }
            })
            .fail(function(errData) {
                console.log('error in completing the request',errData);
            });
            

        });
    }
}

let newfavSongDom = function(song){
        return $(`<li id="favsong-${song.id}" class="lifavsong" >
        
            <div class="favsongs">
                <div class="baricon "></div>
                <div id="${song.id}" class="songimage " ><a onclick="${song.onclic}"  class="play" ></a><audio class="queue_songs" src="${song.source}"></audio></a></div>
                <div  class="songtexts " ><b>${song.name}</b></div>
            </div>
        
        
    </li>`);
}
let DeleteSong = function(newFavSong){
    $(`#favsong-${newFavSong.id}`).remove();
}


$('.togglefavSong').each(function(){
    let self= this;
    
    let toggle = new toggle_favsong(self);
});

}