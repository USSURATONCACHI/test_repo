$('.preview-photos-list div').click(function(event) {
    let image = $(this).children('img');

    if (image.length <= 0) return;

    $('#main-photo-container img').attr('src', image[0].src);
});


function onHover(x, y, container_id){
    let image = $(`#${container_id} img`);
    const bgSize = 1200;
    const imageSize = image.width();
    const scale = bgSize / imageSize;

    let container = $('.zoomed-image-container');

    const posX = -x * scale + container.width() / 2;
    const posY = -y * scale + container.height() / 2;
    container.css('background-position', `${posX}px ${posY}px`);
    container.css('background-image', `url(${image.attr('src')})`);

    let overlay = $(`#${container_id} .overlay`);
    overlay.css('width', `${image.width() * container.width() / bgSize}px`);
    overlay.css('height', `${image.height() * container.height() / (image.height() * scale)}px`);

    overlay.css('left', `${x - overlay.width() / 2}px`);
    overlay.css('top', `${y - overlay.height() / 2}px`);
}


function onMouseEnterLeave(container_id) {
    let hover = $(`#${container_id} img`).is(":hover") || 
        $(`#${container_id} .overlay`).is(':hover');

    if (!hover) {
        $('.zoomed-image-container').css('display', 'none');
        $(`#${container_id} .overlay`).css('display', 'none');
    } else {
        $('.zoomed-image-container').css('display', 'inline-block');
        $(`#${container_id} .overlay`).css('display', 'inline-block');
    }
}

function SetUpPhotoZoom(container_id) {

    $(`#${container_id} img`).on('mousemove', event => onHover(event.offsetX, event.offsetY, container_id));


    $(`#${container_id} .overlay`).on('mousemove', event => {
        let overlay = $(`#${container_id} .overlay`);
        let pos = overlay.position();
        onHover(event.offsetX + pos.left, event.offsetY + pos.top, container_id);
    });

    $(`#${container_id} img`).on('mouseleave', event => onMouseEnterLeave(container_id));
    $(`#${container_id} img`).on('mouseenter', event => onMouseEnterLeave(container_id));
    $(`#${container_id} .overlay`).on('mouseleave', event => onMouseEnterLeave(container_id));
    $(`#${container_id} .overlay`).on('mouseenter', event => onMouseEnterLeave(container_id));
}

SetUpPhotoZoom('main-photo-container');
SetUpPhotoZoom('preview-small-1');
SetUpPhotoZoom('preview-small-2');
SetUpPhotoZoom('preview-small-3');