let getUserReview = function(){
    fetch("./index.json")
    .then(rawData => rawData.json())
    .then(users => {
        let testimonialSlider = document.querySelector("#testimonial-slider>div");
        let totalReviews = 1 ;
        users.forEach( user => {
            if(user.review != ""){
                ++totalReviews;
            }
        });
        console.log((totalReviews*100)+"vw");
        testimonialSlider.style.width = ((totalReviews*100))+"vw";
        let sliderContainer = document.getElementById("slider-container");
        sliderContainer.innerHTML = users.map( user => `<div class="reviews">
        <i class="fas fa-quote-left"></i>
        <p>${user.review}</p> <span>- ${user.name}</span>
        </div>`).join(' ');
        sliderContainer.innerHTML += `<div class="reviews">
        <i class="fas fa-quote-left"></i>
        <p>${users[0].review}</p> <span>- ${users[0].name}</span>
        </div>`;
    
    });
}
getUserReview();
