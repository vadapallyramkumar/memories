const events = ['Marriage', 'Reception', 'Manali', 'BabyShower']

function showContent(tabId) {
    const contentDivs = document.querySelectorAll('.content');
    contentDivs.forEach(div => {
        if (div.id === tabId) {
            div.style.display = 'block';
            if (tabId === 'babyshower') {
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
        'DSC00085.jpg',
        'DSC00389.jpg',
        'DSC00078.jpg',
        'DSC00071.jpg',
        'DSC00097.jpg',
        'DSC00104.jpg',
        'DSC00107.jpg',
        'DSC00119.jpg',
        'DSC00151.jpg',
        'DSC00155.jpg',
        'DSC00176.jpg',
        'DSC00180.jpg',
        'DSC00198.jpg',
        'DSC00220.jpg',
        'DSC00224.jpg',
        'DSC00241.jpg',
        'DSC00248.jpg',
        'DSC00254.jpg',
        'DSC00260.jpg',
        'DSC00299.jpg',
        'DSC00345.jpg',
        'DSC00349.jpg',
        'DSC00425.jpg',
        'DSC00354.jpg',
        'DSC00358.jpg',
        'DSC00363.jpg',
        'DSC00367.jpg',
        'DSC00370.jpg',
        'DSC00376.jpg',
        'DSC00381.jpg',
        'DSC00387.jpg',
        'DSC00391.jpg',
        'DSC00393.jpg',
        'DSC00397.jpg',
        'DSC00407.jpg',
        'DSC00413.jpg',
        'DSC00415.jpg',
        'DSC00419.jpg',
        'DSC00420.jpg',
        'DSC00424.jpg',
        'DSC00425.jpg',
        'DSC00426.jpg',
        'DSC00427.jpg',
        'DSC00432.jpg',
        'DSC00454.jpg',
        'DSC00462.jpg',
        'DSC00482.jpg',
        'DSC00496.jpg',
        'DSC00494.jpg',
        'DSC00497.jpg',
    ];

    const CHUNK_SIZE = 10;
    let currentIndex = 0;

    function loadImages(chunkSize) {
        const c1 = document.getElementById('c1');
        const c2 = document.getElementById('c2');

        const chunk = babyShower.slice(currentIndex, currentIndex + chunkSize);
        chunk.forEach(image => {
            const element = `<img src='.babyShower/${image}' load="lazy" alt=${image} style="width:100%" />`;
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
            if (content.scrollTop + content.clientHeight >= content.scrollHeight) {
                loadImages(CHUNK_SIZE);
                console.log('load')
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
