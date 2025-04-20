// Array of image URLs from the optimized directory
const chairImages = [
    'img/optimized/3b3f2e197805815.663696228e4e7.webp',
    'img/optimized/til-the-common-plastic-garden-chair-is-called-a-monobloc-v0-Z8Fr37jXYeA25XyNj9BDkFQA8IB6BDiWNqlLErgfJ9M.webp',
    'img/optimized/ceramics-lawn-furniture.webp',
    'img/optimized/trill-monobloc-outdoor-armrest-chairs-set-of-4.webp',
    'img/optimized/11af89e7e767a9c49da2791d535e0c14.webp',
    'img/optimized/96ggeu0fm3361.webp',
    'img/optimized/j_77870_10.webp',
    'img/optimized/1239116_20250319_161658.webp',
    'img/optimized/csm_20_Ausstellungsansicht_Vitra_Design_Museum_Monobloc_Ein_Stuhl_fuer_die_Welt_Foto_Roland_Schmid__3__196c8ffcbc.webp',
    'img/optimized/white-plastic-patio-chair-flickr-group.webp',
    'img/optimized/domus-monobloc-5s.jpg.foto.rmedium.webp',
    'img/optimized/empty-chair-on-demolition-site-royalty-free-image-1688716831.webp',
];

function createMasonryGrid() {
    const grid = document.querySelector('.masonry-grid');
    
    chairImages.forEach((imageUrl, index) => {
        const item = document.createElement('div');
        item.className = 'masonry-item';
        item.setAttribute('data-number', String(index + 1).padStart(2, '0'));
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Monobloc Chair';
        img.loading = 'lazy';
        img.width = 1200; // Add width attribute for better loading performance
        
        item.appendChild(img);
        grid.appendChild(item);
    });
}

// Initialize the masonry grid when the page loads
document.addEventListener('DOMContentLoaded', createMasonryGrid); 