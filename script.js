const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]
let text = document.querySelector('.scrolling-text')
const now = new Date();
let date = now.getDay() 
let hour = now.getHours()
let minutes = now.getMinutes()

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

/*text panner */

if(date === 0) {
    date = 'Sunday'
}else if (date === 1) {
    date = 'Monday'
} else if(date === 2){
    date = 'Tuesday'
}else if(date === 3) {
    date = 'Wednesday'
}else if(date === 4) {
    date = 'Thursday'
}else if(date === 5) {
    date = 'Friday'
}else if(date === 6) {
    date = 'Saturday'
}

text.innerHTML = `
    Welcome to the heroDev Website, Today is ${date}, and the time is ${hour}:${minutes}
`;

/*Photo Gallery */
let image1 = document.getElementById('image1')
let images1 = ["./images/photo1jpg.jpg", "./images/Wahiba-Sands9.jpg", "./images/DSCF5259.jpg"]
let image2 = document.getElementById('image2')
let images2 = ["./images/image3.jpg", "./images/image4.jpg", "./images/royal-opera-house.jpg"]
let image3 = document.getElementById('image3')
let images3 = ["./images/image5.jpg", "./images/daymanite.jpg", "./images/salendo-al-jebel-shams.jpg"]

function changeImages(image, imagesList) {
    setInterval(function(){
        let rnd = Math.floor(Math.random()*imagesList.length);
        image.src = imagesList[[rnd]]
    }, 3000)
}

changeImages(image1, images1)
changeImages(image2, images2)
changeImages(image3, images3)

