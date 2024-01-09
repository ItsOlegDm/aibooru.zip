function getRandomElement(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function setIntroBackground() {
    const postIds = ["33995","38175","44125","48780","53683","54283","54767","55712"];
    const postId = getRandomElement(postIds);
    const introImg = document.getElementById('introImg');
    const postLink = document.getElementById('postlink');
    introImg.style.backgroundImage = 'url(/assets/img/intro/' + postId + '.jpg)';
    postLink.href = "https://aibooru.online/posts/"+postId;
    postLink.innerText = "post #"+postId;
    var img = new Image();
    img.src = '/assets/img/intro/' + postId + '.jpg';
    
    img.onload = function() {
        hidePreloader();
    };
}

function hidePreloader() {
    console.log("ya pidoras");
    const preloader = document.getElementById("preloader");
    setTimeout(function() {
        preloader.className = "hide";
    }, 1000);
    setTimeout(function() {
        preloader.style.display = "none";    
    }, 2500);
}

function toggleModal(id) {
    const modal = document.getElementById("modal-"+id);
    if (modal.style.display === 'none') {
        console.log("none")
        modal.style.display = 'flex';
        modal.style.opacity = '1';
    } else {
        modal.style.opacity = '0';
        setTimeout(function() {
            modal.style.display = 'none';    
        }, 350);
    }

}

function copyToClipboard(id) {
    var spanText = document.getElementById(id).innerText;
    navigator.clipboard.writeText(spanText)
  }