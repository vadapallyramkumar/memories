const events = [ 'BabyShower', 'Marriage', 'Reception', 'Manali']
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');

function showContent(tabId) {
    const contentDivs = document.querySelectorAll('.content');
    contentDivs.forEach(div => {
        if (div.id === tabId) {
            div.style.display = 'block';
            if (tabId === 'babyshower') {
                c1.innerHTML = '';
                c2.innerHTML = '';
                loadImages();
            }
        } else {
            div.style.display = 'none';
        }
    });
}

function loadImages() {
    const babyShower = [
        '67.jpg', 
        '85.jpg',
        '389.jpg',
        '78.jpg',
        '71.jpg',
        '97.jpg',
        '104.jpg',
        '107.jpg',
        '119.jpg',
        '151.jpg',
        '155.jpg',
        '176.jpg',
        '180.jpg',
        '198.jpg',
        '220.jpg',
        '224.jpg',
        '248.jpg',
        '254.jpg',
        '260.jpg',
        '299.jpg',
        '345.jpg',
        '349.jpg',
        '425.jpg',
        '354.jpg',
        '358.jpg',
        '363.jpg',
        '367.jpg',
        '370.jpg',
        '376.jpg',
        '241.jpg',
        '494.jpg',
        '454.jpg',
        '462.jpg',
        '381.jpg',
        '407.jpg',
        '387.jpg',
        '391.jpg',
        '393.jpg',
        '397.jpg',
        '413.jpg',
        '415.jpg',
        '419.jpg',
        '420.jpg',
        '424.jpg',
        '425.jpg',
        '426.jpg',
        '427.jpg',
        '432.jpg',
        '482.jpg',
        '496.jpg',
    ];

    const CHUNK_SIZE = 10;
    let currentIndex = 0;

    function loadImages(chunkSize) {
        const chunk = babyShower.slice(currentIndex, currentIndex + chunkSize);
        chunk.forEach(image => {
            const element = `<img src='./babyShower/${image}' class="image" load="lazy" alt=${image} style="width:100%" />`;
            currentIndex++;
            if (currentIndex % 2 === 0) {
                c1.innerHTML += element;
            } else {
                c2.innerHTML += element;
            }
        });
    }

    loadImages(CHUNK_SIZE);

    let content = document.querySelector('#babyshower');
    if (content) {
        content.addEventListener('scroll', function() {
            if (content.scrollTop + content.clientHeight >= content.scrollHeight - 10 || content.scrollTop <= 10) {
                loadImages(CHUNK_SIZE);
                console.log('load');
            }
        });
    }
}

const tabsElement = document.getElementById('tabs');
events.forEach((element, index) => {
    const tab = document.createElement('div');
    tab.classList.add('tab', element);
    tab.addEventListener('click', function() {
        const allTabs = document.querySelectorAll('.tab');
        allTabs.forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');
        showContent(element.toLowerCase());
    });
    if (index === 0) {
        tab.classList.add('active');
        showContent(element.toLowerCase());
    }
    tab.innerHTML = element;
    tabsElement.appendChild(tab);
});
