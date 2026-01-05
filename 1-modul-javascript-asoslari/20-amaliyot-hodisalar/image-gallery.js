/**
 * INTERACTIVE IMAGE GALLERY
 * 
 * Event-driven rasmlar galereyasi - interaktiv navigatsiya
 */

console.log("INTERACTIVE IMAGE GALLERY\n");

const demoContainer = document.getElementById('demo-container');
if (!demoContainer) {
    console.log("❌ Demo container topilmadi");
    return;
}

// Rasm ma'lumotlari (placeholder images)
const images = [
    {
        id: 1,
        title: "JavaScript Logo",
        url: "https://via.placeholder.com/400x300/667eea/ffffff?text=JavaScript",
        description: "JavaScript dasturlash tili"
    },
    {
        id: 2,
        title: "DOM Manipulation",
        url: "https://via.placeholder.com/400x300/764ba2/ffffff?text=DOM",
        description: "Document Object Model"
    },
    {
        id: 3,
        title: "Event Handling",
        url: "https://via.placeholder.com/400x300/f093fb/ffffff?text=Events",
        description: "Event handling va listeners"
    },
    {
        id: 4,
        title: "Interactive UI",
        url: "https://via.placeholder.com/400x300/4facfe/ffffff?text=UI",
        description: "Interaktiv foydalanuvchi interfeysi"
    },
    {
        id: 5,
        title: "Web Development",
        url: "https://via.placeholder.com/400x300/43e97b/ffffff?text=Web",
        description: "Web dasturlash"
    }
];

let currentIndex = 0;

// Galereya UI yaratish
function createGallery() {
    const galleryContainer = document.createElement('div');
    galleryContainer.id = 'image-gallery';
    galleryContainer.style.cssText = `
        max-width: 700px;
        margin: 0 auto;
        background: white;
        border-radius: 12px;
        padding: 25px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    `;

    // Sarlavha
    const title = document.createElement('h3');
    title.textContent = '🖼️ Rasmlar Galereyasi';
    title.style.cssText = 'color: #667eea; margin-bottom: 20px; text-align: center;';
    galleryContainer.appendChild(title);

    // Asosiy rasm ko'rsatish
    const mainImageContainer = document.createElement('div');
    mainImageContainer.style.cssText = `
        position: relative;
        margin-bottom: 20px;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;

    const mainImage = document.createElement('img');
    mainImage.id = 'main-image';
    mainImage.src = images[currentIndex].url;
    mainImage.alt = images[currentIndex].title;
    mainImage.style.cssText = `
        width: 100%;
        height: 400px;
        object-fit: cover;
        display: block;
        transition: opacity 0.3s;
    `;

    // Navigation buttons
    const prevBtn = document.createElement('button');
    prevBtn.id = 'prev-image';
    prevBtn.innerHTML = '←';
    prevBtn.style.cssText = `
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0,0,0,0.7);
        color: white;
        border: none;
        padding: 15px 20px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5em;
        transition: all 0.3s;
    `;
    prevBtn.addEventListener('click', () => navigateImage(-1));
    prevBtn.addEventListener('mouseenter', () => {
        prevBtn.style.background = 'rgba(0,0,0,0.9)';
        prevBtn.style.transform = 'translateY(-50%) scale(1.1)';
    });
    prevBtn.addEventListener('mouseleave', () => {
        prevBtn.style.background = 'rgba(0,0,0,0.7)';
        prevBtn.style.transform = 'translateY(-50%) scale(1)';
    });

    const nextBtn = document.createElement('button');
    nextBtn.id = 'next-image';
    nextBtn.innerHTML = '→';
    nextBtn.style.cssText = `
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0,0,0,0.7);
        color: white;
        border: none;
        padding: 15px 20px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5em;
        transition: all 0.3s;
    `;
    nextBtn.addEventListener('click', () => navigateImage(1));
    nextBtn.addEventListener('mouseenter', () => {
        nextBtn.style.background = 'rgba(0,0,0,0.9)';
        nextBtn.style.transform = 'translateY(-50%) scale(1.1)';
    });
    nextBtn.addEventListener('mouseleave', () => {
        nextBtn.style.background = 'rgba(0,0,0,0.7)';
        nextBtn.style.transform = 'translateY(-50%) scale(1)';
    });

    mainImageContainer.appendChild(mainImage);
    mainImageContainer.appendChild(prevBtn);
    mainImageContainer.appendChild(nextBtn);
    galleryContainer.appendChild(mainImageContainer);

    // Rasm ma'lumotlari
    const imageInfo = document.createElement('div');
    imageInfo.id = 'image-info';
    imageInfo.style.cssText = 'text-align: center; margin-bottom: 20px;';

    const imageTitle = document.createElement('h4');
    imageTitle.id = 'image-title';
    imageTitle.style.cssText = 'color: #333; margin-bottom: 5px; font-size: 1.2em;';

    const imageDescription = document.createElement('p');
    imageDescription.id = 'image-description';
    imageDescription.style.cssText = 'color: #666; font-size: 0.9em;';

    imageInfo.appendChild(imageTitle);
    imageInfo.appendChild(imageDescription);
    galleryContainer.appendChild(imageInfo);

    // Thumbnail galereya
    const thumbnailContainer = document.createElement('div');
    thumbnailContainer.id = 'thumbnail-container';
    thumbnailContainer.style.cssText = `
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
    `;

    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image.url;
        thumbnail.alt = image.title;
        thumbnail.style.cssText = `
            width: 100%;
            height: 80px;
            object-fit: cover;
            border-radius: 8px;
            cursor: pointer;
            border: 3px solid ${index === currentIndex ? '#667eea' : 'transparent'};
            transition: all 0.3s;
            opacity: ${index === currentIndex ? '1' : '0.7'};
        `;

        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateGallery();
            console.log(`Rasm tanlandi: ${image.title}`);
        });

        thumbnail.addEventListener('mouseenter', () => {
            thumbnail.style.opacity = '1';
            thumbnail.style.transform = 'scale(1.05)';
        });

        thumbnail.addEventListener('mouseleave', () => {
            if (index !== currentIndex) {
                thumbnail.style.opacity = '0.7';
            }
            thumbnail.style.transform = 'scale(1)';
        });

        thumbnailContainer.appendChild(thumbnail);
    });

    galleryContainer.appendChild(thumbnailContainer);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            navigateImage(-1);
        } else if (e.key === 'ArrowRight') {
            navigateImage(1);
        }
    });

    // Eski galereyani olib tashlash
    const oldGallery = document.getElementById('image-gallery');
    if (oldGallery) {
        oldGallery.remove();
    }

    demoContainer.appendChild(galleryContainer);
    updateGallery();
    console.log("✅ Galereya yaratildi");
}

// Rasm navigatsiyasi
function navigateImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateGallery();
    console.log(`Navigatsiya: ${direction > 0 ? 'Keyingi' : 'Oldingi'} rasm (${currentIndex + 1}/${images.length})`);
}

// Galereyani yangilash
function updateGallery() {
    const mainImage = document.getElementById('main-image');
    const imageTitle = document.getElementById('image-title');
    const imageDescription = document.getElementById('image-description');
    const thumbnails = document.querySelectorAll('#thumbnail-container img');

    if (mainImage && imageTitle && imageDescription) {
        mainImage.src = images[currentIndex].url;
        mainImage.alt = images[currentIndex].title;
        imageTitle.textContent = images[currentIndex].title;
        imageDescription.textContent = images[currentIndex].description;

        thumbnails.forEach((thumb, index) => {
            thumb.style.borderColor = index === currentIndex ? '#667eea' : 'transparent';
            thumb.style.opacity = index === currentIndex ? '1' : '0.7';
        });
    }
}

// Galereyani yaratish
createGallery();
console.log("✅ Galereya tayyor va ishga tushirildi");
console.log("Klaviatura yordamida ham navigatsiya qilishingiz mumkin (← →)");
