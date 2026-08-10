let currentLang = 'ar';
let activeCategoryId = 'hot'; 

function renderCategories() {
    const grid = document.getElementById('categories-grid');
    if (!grid) return;
    grid.innerHTML = '';

    categoriesData.forEach(cat => {
        const isActive = cat.id === activeCategoryId ? 'active' : '';
        const catName = currentLang === 'ar' ? cat.nameAr : cat.nameEn;

        let mediaHTML = '';
        if (cat.image) {
            mediaHTML = `<img src="${cat.image}" alt="${catName}" class="category-img" onerror="this.style.display='none';">`;
        } else if (cat.icon) {
            mediaHTML = `<i class="fa-solid ${cat.icon} icon"></i>`;
        }

        grid.innerHTML += `
            <div class="category-circle ${isActive}" onclick="selectCategory('${cat.id}')">
                ${mediaHTML}
                <span data-ar="${cat.nameAr}" data-en="${cat.nameEn}">${catName}</span>
            </div>
        `;
    });
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    const title = document.getElementById('current-category-title');
    if (!grid || !title) return;
    grid.innerHTML = '';

    const activeCat = categoriesData.find(c => c.id === activeCategoryId);
    if (!activeCat) return;

    // إعادة العنوان ليعرض اسم القسم فقط
    title.setAttribute('data-ar', activeCat.nameAr);
    title.setAttribute('data-en', activeCat.nameEn);
    title.textContent = currentLang === 'ar' ? activeCat.nameAr : activeCat.nameEn;

    const filteredItems = menuItems.filter(item => item.category === activeCategoryId);

    if (filteredItems.length === 0) {
        grid.innerHTML = `<p style="grid-column: span 2; text-align: center; color: var(--main-navy); padding: 20px;">
                            ${currentLang === 'ar' ? 'عفواً، لا توجد منتجات متاحة حالياً في هذا القسم.' : 'Sorry, no products available in this category yet.'}
                          </p>`;
        return;
    }

    filteredItems.forEach((item, index) => {
        const itemName = currentLang === 'ar' ? item.nameAr : item.nameEn;
        
        let displayPrice = '';
        if (item.sizes && item.sizes.length > 1) {
            const prices = item.sizes.map(s => s.val);
            const minPrice = Math.min(...prices).toFixed(2);
            const maxPrice = Math.max(...prices).toFixed(2);
            const currencyAr = item.sizes[0].priceAr.replace(/[0-9.]/g, '').trim(); 
            const currencyEn = item.sizes[0].priceEn.replace(/[0-9.]/g, '').trim();
            
            displayPrice = currentLang === 'ar' ? `${minPrice} - ${maxPrice} ${currencyAr}` : `${minPrice} - ${maxPrice} ${currencyEn}`;
        } else if (item.sizes && item.sizes.length === 1) {
            displayPrice = currentLang === 'ar' ? item.sizes[0].priceAr : item.sizes[0].priceEn;
        } else {
            displayPrice = currentLang === 'ar' ? item.priceAr : item.priceEn; 
        }

        const animationDelay = index * 0.1;
        const originalIndex = menuItems.indexOf(item); 

        grid.innerHTML += `
            <div class="product-card" style="animation-delay: ${animationDelay}s" onclick="openModal(${originalIndex})">
                <img src="${item.image}" alt="${itemName}" onerror="this.onerror=null; this.src=''; this.alt='صورة غير متوفرة';">
                <h3 data-ar="${item.nameAr}" data-en="${item.nameEn}">${itemName}</h3>
                <span class="price">${displayPrice}</span>
            </div>
        `;
    });
}

function selectCategory(categoryId) {
    if (activeCategoryId === categoryId) return;
    activeCategoryId = categoryId;
    renderCategories();
    renderProducts();
}

const langBtn = document.getElementById('lang-btn');
const htmlRoot = document.getElementById('html-root');

// دالة مخصصة لتغيير الخط المميز بناءً على اللغة (لعنوان الترحيب)
function updateWelcomeFont() {
    const welcomeMsg = document.getElementById('welcome-message');
    const subtitleMsg = document.getElementById('subtitle-message');
    if (welcomeMsg) {
        if (currentLang === 'ar') {
            welcomeMsg.style.fontFamily = "'Amiri', 'Tajawal', serif";
            welcomeMsg.style.letterSpacing = '0px';
            welcomeMsg.style.fontSize = '1.7rem';
            
            if (subtitleMsg) {
                subtitleMsg.style.fontFamily = "'Amiri', 'Tajawal', serif";
                subtitleMsg.style.letterSpacing = '0px';
            }
        } else {
            welcomeMsg.style.fontFamily = "'Cinzel', 'Playfair Display', 'Poppins', serif";
            welcomeMsg.style.letterSpacing = '2px';
            welcomeMsg.style.fontSize = '1.5rem';
            
            if (subtitleMsg) {
                subtitleMsg.style.fontFamily = "'Cinzel', 'Playfair Display', 'Poppins', serif";
                subtitleMsg.style.letterSpacing = '1px';
            }
        }
    }
}

function updateLanguageTexts() {
    document.querySelectorAll('[data-ar]').forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLang}`);
    });
    
    updateWelcomeFont(); // تحديث خط الترحيب عند تغيير اللغة
    renderCategories();
    renderProducts();
}

if (langBtn) {
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        
        htmlRoot.setAttribute('lang', currentLang);
        htmlRoot.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
        langBtn.textContent = currentLang === 'ar' ? 'English' : 'عربي';

        updateLanguageTexts();
    });
}

function openModal(index) {
    const item = menuItems[index];
    const modal = document.getElementById('product-modal');
    if (!item || !modal) return;
    
    document.getElementById('modal-img').src = item.image;
    document.getElementById('modal-title').textContent = currentLang === 'ar' ? item.nameAr : item.nameEn;
    document.getElementById('modal-desc').textContent = currentLang === 'ar' ? item.descAr : item.descEn;
    
    const caloriesSection = document.getElementById('modal-calories-section');
    const allergensSection = document.getElementById('modal-allergens-section');
    const infoGrid = document.getElementById('modal-info-grid');
    
    let hasCalories = false;
    let hasAllergens = false;
    
    if (item.calories) {
        hasCalories = true;
        const caloriesAr = `cal ${item.calories}`;
        const caloriesEn = `${item.calories} cal`;
        document.getElementById('modal-calories').textContent = currentLang === 'ar' ? caloriesAr : caloriesEn;
        caloriesSection.style.display = 'flex';
    } else {
        caloriesSection.style.display = 'none';
    }
    
    if (item.allergensAr || item.allergensEn) {
        hasAllergens = true;
        document.getElementById('modal-allergens').textContent = currentLang === 'ar' ? item.allergensAr : item.allergensEn;
        allergensSection.style.display = 'flex';
    } else {
        allergensSection.style.display = 'none';
    }
    
    if (hasCalories && hasAllergens) {
        infoGrid.style.display = 'grid';
        infoGrid.style.gridTemplateColumns = '1fr 1fr';
    } else if (hasCalories || hasAllergens) {
        infoGrid.style.display = 'grid';
        infoGrid.style.gridTemplateColumns = '1fr';
    } else {
        infoGrid.style.display = 'none';
    }
    
    const sizesContainer = document.getElementById('modal-sizes-container');
    if (!sizesContainer) return;
    sizesContainer.innerHTML = ''; 

    if (item.sizes && item.sizes.length > 0) {
        item.sizes.forEach(size => {
            const sizeName = currentLang === 'ar' ? size.nameAr : size.nameEn;
            const sizePrice = currentLang === 'ar' ? size.priceAr : size.priceEn;
            
            sizesContainer.innerHTML += `
                <div class="size-row">
                    <span class="size-name">${sizeName}</span>
                    <span class="size-price">${sizePrice}</span>
                </div>
            `;
        });
    } else {
        const fallbackName = currentLang === 'ar' ? 'عادي' : 'Regular';
        const fallbackPrice = currentLang === 'ar' ? item.priceAr : item.priceEn;
        sizesContainer.innerHTML = `
            <div class="size-row">
                <span class="size-name">${fallbackName}</span>
                <span class="size-price">${fallbackPrice}</span>
            </div>
        `;
    }
    
    modal.classList.add('active');
    updateLanguageTexts();
}

function closeModal() {
    const modal = document.getElementById('product-modal');
    if (modal) modal.classList.remove('active');
}

window.addEventListener('click', (event) => {
    const modal = document.getElementById('product-modal');
    if (event.target === modal) {
        closeModal();
    }
});

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // 1. تحديث الشعار في الهيدر الرئيسي
    const logoElement = document.getElementById('brand-logo');
    if (logoElement && typeof siteSettings !== 'undefined') {
        logoElement.src = siteSettings.logo;
        logoElement.alt = siteSettings.logoAltText;
    }

    // 2. إنشاء عبارة الترحيب أسفل الشعار الرئيسي برمجياً
    const logoArea = document.querySelector('.logo-area');
    if (logoArea && !document.getElementById('welcome-message')) {
        // تعديل الـ CSS الخاص بالهيدر ليكون ترتيب الشعار والنص عمودياً
        logoArea.style.flexDirection = 'column';

        const welcomeMsg = document.createElement('h2');
        welcomeMsg.id = 'welcome-message';
        // إضافة السمات الخاصة باللغتين ليتم التبديل بينهما تلقائياً
        welcomeMsg.setAttribute('data-ar', 'مرحباً بكم في لوسيل');
        welcomeMsg.setAttribute('data-en', 'Welcome to Lusail');
        welcomeMsg.textContent = currentLang === 'ar' ? 'مرحباً بكم في لوسيل' : 'Welcome to Lusail';
        
        // تنسيقات النص ليكون أنيقاً ومتناسقاً
        welcomeMsg.style.marginTop = '15px';
        welcomeMsg.style.marginBottom = '0';
        welcomeMsg.style.color = 'var(--main-navy)';
        welcomeMsg.style.fontWeight = '700';
        welcomeMsg.style.textAlign = 'center';

        // إضافة النص تحت الشعار
        logoArea.appendChild(welcomeMsg);

        // -- إضافة الجملة الجديدة أسفل الترحيب --
        const subtitleMsg = document.createElement('h3');
        subtitleMsg.id = 'subtitle-message';
        subtitleMsg.setAttribute('data-ar', 'مقهي لوسيل الدور الثالث');
        subtitleMsg.setAttribute('data-en', 'Lusail Cafe 3rd Floor');
        subtitleMsg.textContent = currentLang === 'ar' ? 'مقهي لوسيل الدور الثالث' : 'Lusail Cafe 3rd Floor';
        
        subtitleMsg.style.marginTop = '5px'; // مسافة بسيطة من العنوان الذي فوقه
        subtitleMsg.style.marginBottom = '0';
        subtitleMsg.style.color = 'var(--main-navy)';
        subtitleMsg.style.fontWeight = '600';
        subtitleMsg.style.textAlign = 'center';
        subtitleMsg.style.fontSize = '1.1rem';

        logoArea.appendChild(subtitleMsg);
        
        // تطبيق الخط المخصص للغة الحالية
        updateWelcomeFont();
    }

    // 3. التأكد من إخفاء شعار الخلفية المائية تماماً
    const bgWatermark = document.getElementById('bg-watermark');
    if (bgWatermark) {
        bgWatermark.style.display = 'none';
        bgWatermark.style.backgroundImage = 'none';
    }

    renderCategories();
    renderProducts();
});