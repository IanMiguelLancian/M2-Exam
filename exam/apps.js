
let pet_images = [
    'images/bart.jpg', 'images/bob.jpg','images/bree.jpg',
    'images/buster.png','images/champ.jpg','images/charlie.jpg',
    'images/cookie.jpg','images/emo.jpg','images/koko.jpg',
    'images/tabby.jpg'
]

let hearted_pets = [];
let currently_viewed_pet = "";
let index_counter = 0;


function xButton(){
    if(index_counter<=pet_images.length-1){
        document.getElementById("pet-image").src = pet_images[index_counter];
        index_counter++;

    }else{
        index_counter = 0;
        document.getElementById("pet-image").src = pet_images[index_counter];
        index_counter++;
    }
}

function heartButton(){
    currently_viewed_pet = pet_images[index_counter];
    
    if(!hearted_pets.includes(currently_viewed_pet)){
        hearted_pets.push(currently_viewed_pet);
        document.getElementById("hearted-pets").innerHTML = hearted_pets;
    }else{
        console.log("ALREADY LIKED!");
    }
    
}





