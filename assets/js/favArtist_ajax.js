{
// CHANGE :: create a class to toggle likes when a link is clicked, using AJAX
console.log("favArtist ajax loaded");
// $('#link').click(function(ev){
//     ev.preventDefault();
//     console.log("did");
// });




class toggle_favartist{
    constructor(toggleElement){
        this.toggler = toggleElement;
        this.toggle();
    }


    toggle(){
        $(this.toggler).click(function(e){
            e.preventDefault();
            let self = this;
            var m= "http://"+ $(self).attr('href');
  //          console.log(m);      
            var mi= new URL(m);
   //         console.log(mi);
            var name=mi.searchParams.get("name");
            var id=mi.searchParams.get("id");
            var image=mi.searchParams.get("image");
  //          console.log(name,id,image);
            // this is a new way of writing ajax which you might've studied, it looks like the same as promises
            $.ajax({
                type: 'GET',
                url: $(self).attr('href'),
                
            })
            .done(function(data) {
                
                if (data.data.deleted == true){
                    console.log(data);
                    console.log("deleted");
                    let deleteartist = DeleteArtist(data.data.newFavArtist);
                    
                }
                else{
                    console.log(data);
                    let newArtist = newfavartistDom(data.data.newFavArtist);
                    $('#favartist').append(newArtist);
                    new Noty({
                        theme: 'relax',
                        text: "fav artist added",
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500
                        
                    }).show();
                    
                }
            })
            .fail(function(errData) {
                console.log('error in completing the request',errData);
            });
            

        });
    }
}

let newfavartistDom = function(newFavArtist){
        return $(`<li id="fav-${newFavArtist.name}">
        <!-- <% console.log(locals.user.id==artist.user) %> -->
        
    
          
            <div class="favartist" id="${newFavArtist.name}"><a href="#${newFavArtist.image}" class="playicon" ></a></div>
        
        
    
    </li>`);
}
let DeleteArtist = function(newFavArtist){
    $(`#fav-${newFavArtist.name}`).remove();
}


$('.togglefavArtist').each(function(){
    let self= this;
//    console.log(self);
    let toggle = new toggle_favartist(self);
});

}

