let menu = document.querySelector('.circle');
menu.addEventListener('click', toggleInfo);

function toggleInfo() {
    let infoBlock = document.getElementById('info');
    let blockLink = document.querySelector('.block-link');

    if (blockLink) {
        infoBlock.removeChild(blockLink);
    } else {
        blockLink = document.createElement('div');
        blockLink.classList.add('block-link');
        blockLink.textContent = 'SHARE';

        let facebook = document.createElement('div');
        facebook.classList.add('facebook');

        let twitter = document.createElement('div');
        twitter.classList.add('twitter');

        let pinterest = document.createElement('div');
        pinterest.classList.add('pinterest');

        blockLink.appendChild(facebook);
        blockLink.appendChild(twitter);
        blockLink.appendChild(pinterest);
        infoBlock.appendChild(blockLink);
    }
}
