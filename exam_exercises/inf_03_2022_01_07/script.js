document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image');
    const mainblockimage = document.querySelector('.lanzarotte');
    const showicon = document.getElementById('showicon');
    const iconOn = document.getElementById('icon-on');
    const iconOff = document.getElementById('icon-off')
    images.forEach((image) => {
    image.addEventListener('click', () => {
        mainblockimage.src = image.src;
    })
    })
    let clicked = false;
    showicon.addEventListener('click', () => {
        if(clicked === false){
            showicon.src = iconOn.src;
            clicked = true;
        }else{
            showicon.src = iconOff.src;
            clicked = false;
        }
    })

})