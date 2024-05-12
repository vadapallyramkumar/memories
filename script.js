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
        'DSC00067.JPG', 
        'DSC00085.JPG',
        'DSC00389.JPG',
        'DSC00078.JPG',
        'DSC00071.JPG',
        'DSC00097.JPG',
        'DSC00104.JPG',
        'DSC00107.JPG',
        'DSC00119.JPG',
        'DSC00151.JPG',
        'DSC00155.JPG',
        'DSC00176.JPG',
        'DSC00180.JPG',
        'DSC00198.JPG',
        'DSC00220.JPG',
        'DSC00224.JPG',
        'DSC00241.JPG',
        'DSC00248.JPG',
        'DSC00254.JPG',
        'DSC00260.JPG',
        'DSC00299.JPG',
        'DSC00345.JPG',
        'DSC00349.JPG',
        'DSC00425.JPG',
        'DSC00354.JPG',
        'DSC00358.JPG',
        'DSC00363.JPG',
        'DSC00367.JPG',
        'DSC00370.JPG',
        'DSC00376.JPG',
        'DSC00381.JPG',
        'DSC00387.JPG',
        'DSC00391.JPG',
        'DSC00393.JPG',
        'DSC00397.JPG',
        'DSC00407.JPG',
        'DSC00413.JPG',
        'DSC00415.JPG',
        'DSC00419.JPG',
        'DSC00420.JPG',
        'DSC00424.JPG',
        'DSC00425.JPG',
        'DSC00426.JPG',
        'DSC00427.JPG',
        'DSC00432.JPG',
        'DSC00454.JPG',
        'DSC00462.JPG',
        'DSC00482.JPG',
        'DSC00496.JPG',
        'DSC00494.JPG',
        'DSC00497.JPG',
    ];

    const CHUNK_SIZE = 10;
    let currentIndex = 0;

    function loadImages(chunkSize) {
        const c1 = document.getElementById('c1');
        const c2 = document.getElementById('c2');

        const chunk = babyShower.slice(currentIndex, currentIndex + chunkSize);
        chunk.forEach(image => {
            const element = `<img src='./${image}' load="lazy" alt=${image} style="width:100%" />`;
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
