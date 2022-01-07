
let pet_images = [
    'images/bart1.jpg', 'images/bob1.jpg','images/bree1.jpg',
    'images/buster1.png','images/champ1.jpg','images/charlie1.jpg',
    'images/cookie1.jpg','images/emo1.jpg','images/koko1.jpg',
    'images/tabby1.jpg'
]
let pet_names = [
    'Bart', 'Bob', 'Bree', 'Buster', 'Champ', 'Charlie', 'Cookie', 'Emo',
    'Koko', 'Tabby'
]

let hearted_pets = [];
let currently_viewed_pet = pet_names[0];
let currentpic = 0;
let lastpic = pet_images.length-1;
let xButton = document.getElementById("x-button");


xButton.addEventListener("click", ()=>{
    if (currentpic == lastpic){
        currentpic = 0;
        document.getElementById('pet-image').src = pet_images[currentpic];
        currently_viewed_pet = pet_names[currentpic];
    }else{
        currentpic++;
        document.getElementById('pet-image').src = pet_images[currentpic];
        currently_viewed_pet = pet_names[currentpic];
    }
    console.log(currently_viewed_pet);
})

let hearted_pet_image_1 = document.getElementById("hearted-pet-image-1");
let hearted_pet_image_2 = document.getElementById("hearted-pet-image-2");
let hearted_pet_image_3 = document.getElementById("hearted-pet-image-3");
let hearted_pet_image_4 = document.getElementById("hearted-pet-image-4");
let hearted_pet_image_5 = document.getElementById("hearted-pet-image-5");
let hearted_pet_image_6 = document.getElementById("hearted-pet-image-6");
let hearted_pet_name_1 = document.getElementById("hearted-pet-name-1");
let hearted_pet_name_2 = document.getElementById("hearted-pet-name-2");
let hearted_pet_name_3 = document.getElementById("hearted-pet-name-3");
let hearted_pet_name_4 = document.getElementById("hearted-pet-name-4");
let hearted_pet_name_5 = document.getElementById("hearted-pet-name-5");
let hearted_pet_name_6 = document.getElementById("hearted-pet-name-6");

let heartbutton = document.getElementById("heartbtn");
let heartbutton_click_counter = 0;

heartbutton.addEventListener("click", ()=>{
    currently_viewed_pet_name = pet_names[currentpic];
    currently_viewed_pet_image = pet_images[currentpic];
    
    if(!hearted_pets.includes(currently_viewed_pet)){
        heartbutton_click_counter++;
        hearted_pets.push(currently_viewed_pet);
        console.log(hearted_pets);
        if(heartbutton_click_counter==1){
            hearted_pet_image_1.src = currently_viewed_pet_image;
            hearted_pet_name_1.innerHTML = currently_viewed_pet_name;
            hearted_pet_image_1.style.display = "inline";
            hearted_pet_name_1.style.display = "inline";
    
        }else if(heartbutton_click_counter==2){
            hearted_pet_image_2.src = currently_viewed_pet_image;
            hearted_pet_name_2.innerHTML = currently_viewed_pet_name;
            hearted_pet_image_2.style.display = "inline";
            hearted_pet_name_2.style.display = "inline";
        
        }else if(heartbutton_click_counter==3){
            hearted_pet_image_3.src = currently_viewed_pet_image;
            hearted_pet_name_3.innerHTML = currently_viewed_pet_name;
            hearted_pet_image_3.style.display = "inline";
            hearted_pet_name_3.style.display = "inline";
    
        }else if(heartbutton_click_counter==4){
            hearted_pet_image_4.src = currently_viewed_pet_image;
            hearted_pet_name_4.innerHTML = currently_viewed_pet_name;
            hearted_pet_image_4.style.display = "inline";
            hearted_pet_name_4.style.display = "inline";
            
        }else if(heartbutton_click_counter==5){
            hearted_pet_image_5.src = currently_viewed_pet_image;
            hearted_pet_name_5.innerHTML = currently_viewed_pet_name;
            hearted_pet_image_5.style.display = "inline";
            hearted_pet_name_5.style.display = "inline";
    
        }else if(heartbutton_click_counter==6){
            hearted_pet_image_6.src = currently_viewed_pet_image;
            hearted_pet_name_6.innerHTML = currently_viewed_pet_name;
            hearted_pet_image_6.style.display = "inline";
            hearted_pet_name_6.style.display = "inline";
        }
    }
})