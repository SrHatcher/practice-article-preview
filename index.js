const socialIconsContainer = document.querySelector('.credits__social_media');
const globeArrow = document.querySelector('.credits__globe')
const shareButton = document.querySelector('.credits__share_button');


shareButton.addEventListener('click', ()=>{
    socialIconsContainer.classList.toggle("social_media--show");
    globeArrow.classList.toggle('social_media--show')
    shareButton.classList.toggle("share_button--active")
})