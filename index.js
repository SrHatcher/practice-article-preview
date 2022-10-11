const socialIconsContainer = document.querySelector('.credits__social_media');
const shareButton = document.querySelector('.credits__share_button');

shareButton.addEventListener('click', ()=>{
    socialIconsContainer.classList.toggle("social_media--show");
})