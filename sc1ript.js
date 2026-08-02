// 1. قاعدة بيانات الأقسام
const categoriesData = [
    { id: "hot", icon: "fa-mug-hot", nameAr: "مشروبات ساخنة", nameEn: "Hot Drinks" },
    { id: "cold", icon: "fa-snowflake", nameAr: "مشروبات باردة", nameEn: "Cold Drinks" },
    { id: "Soft Drinks", icon: "fa-solid fa-glass-water", nameAr: "المشروبات الغازية", nameEn: "Soft Drinks" },
    { id: "desserts", icon: "fa-cake-candles", nameAr: "حلويات وكيك", nameEn: "Desserts & Cake" },
    { id: "Winter Lucille", icon: "fa-solid fa-cloud", nameAr: "شتاء لوسيل", nameEn: "Winter Lucille" },
    { id: "specialty", icon: "fa-coffee", nameAr: "قهوة مختصة", nameEn: "Specialty Coffee" },
    { id: "baked", icon: "fa-bread-slice", nameAr: "مخبوزات", nameEn: "Baked goods" },
    { id: "Lucille Summer", icon: "fa-sun", nameAr: "صيف لوسيل", nameEn: "Lucille Summer" }
];

// 2. قاعدة بيانات المنتجات (أمثلة لتجربة النظام الديناميكي الجديد)
const menuItems = [
     {
        category: "hot", 
        image: "", 
        nameAr: "دلة قهوة عربية",
        nameEn: "Arabic Coffee Dallah",
        descAr: "",
        descEn: "",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "36.00 ريال", priceEn: "36.00 SAR", val: 36 }
        ]
    },
       {
        category: "hot",
        image: "", 
        nameAr: "براد شاهي",
        nameEn: "Teapot",
        descAr: "",
        descEn: "",
        sizes: [
            { nameAr: "وسط", nameEn: "Medium", priceAr: "18.00 ريال", priceEn: "18.00 SAR", val: 18 },
            { nameAr: "كبير", nameEn: "Large", priceAr: "22.00 ريال", priceEn: "22.00 SAR", val: 22 }
        ]
    },
    {
        category: "hot", 
        image: "", 
        nameAr: "إسبريسو",
        nameEn: "Espresso",
        descAr: "جرعة إسبريسو غنية وقوية",
        descEn: "Rich and bold espresso shot",
        calories: "5",
        sizes: [
            { nameAr: "سنجل شوت", nameEn: "Single Shot", priceAr: "9.00 ريال", priceEn: "9.00 SAR", val: 9 },
            { nameAr: "دبل شوت", nameEn: "Double Shot", priceAr: "11.00 ريال", priceEn: "11.00 SAR", val: 11 }
        ]
    },
    {
        category: "hot", 
        image: "", 
        nameAr: "كابتشينو",
        nameEn: "Cappuccino",
        descAr: "مزيج مثالي من الإسبريسو والحليب المبخر",
        descEn: "Perfect blend of espresso and steamed milk",
        calories: "120",
        allergensAr: "حليب",
        allergensEn: "Milk",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "17.00 ريال", priceEn: "17.00 SAR", val: 17 }
        ]
    },
    {
        category: "hot", 
        image: "", 
        nameAr: "لاتيه",
        nameEn: "Latte",
        descAr: "إسبريسو ناعم مع الحليب المبخر ورغوة خفيفة",
        descEn: "Smooth espresso with steamed milk and light foam",
        calories: "150",
        allergensAr: "حليب",
        allergensEn: "Milk",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "16.00 ريال", priceEn: "16.00 SAR", val: 16 }
        ]
    },
    {
        category: "hot", 
        image: "", 
        nameAr: "قهوة تركية",
        nameEn: "Turkish Coffee",
        descAr: "قهوة تركية تقليدية بالهيل",
        descEn: "Traditional Turkish coffee with cardamom",
        calories: "8",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "14.00 ريال", priceEn: "14.00 SAR", val: 14 }
        ]
    },
    {
        category: "hot", 
        image: "", 
        nameAr: "شاي",
        nameEn: "Tea",
        descAr: "شاي أحمر",
        descEn: "Red Tea",
        calories: "50",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "8.00 ريال", priceEn: "8.00 SAR", val: 8 }
        ]
    },
     {
        category: "hot", 
        image: "", 
        nameAr: "فلات وايت",
        nameEn: "Flat white",
        descAr: "",
        descEn: "",
        calories: "155",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "16.00 ريال", priceEn: "16.00 SAR", val: 16 }
        ]
    },
    {
        category: "hot", 
        image: "", 
        nameAr: "كورتادو",
        nameEn: "Cortado",
        descAr: "",
        descEn: "",
        calories: "150",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "15.00 ريال", priceEn: "15.00 SAR", val: 15 }
        ]
    },
    {
        category: "hot", 
        image: "", 
        nameAr: "ماكياتو",
        nameEn: "Machiato",
        descAr: "",
        descEn: "",
        calories: "115",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "12.00 ريال", priceEn: "12.00 SAR", val: 12 }
        ]
    },
     {
        category: "hot", 
        image: "", 
        nameAr: "قهوة فرنسية بالبندق",
        nameEn: "French Hazelnut Coffee",
        descAr: "",
        descEn: "",
        calories: "180",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "14.00 ريال", priceEn: "14.00 SAR", val: 14 }
        ]
    },
     {
        category: "hot", 
        image: "", 
        nameAr: "لاتيه بندق حار",
        nameEn: "Hazelnut Latte Hot",
        descAr: "",
        descEn: "",
        calories: "155",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "17.00 ريال", priceEn: "17.00 SAR", val: 17 }
        ]
    },
     {
        category: "hot", 
        image: "", 
        nameAr: "سبانش لاتيه حار",
        nameEn: "Spanish Latte Hot",
        descAr: "",
        descEn: "",
        calories: "155",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "17.00 ريال", priceEn: "17.00 SAR", val: 17 }
        ]
    },
     {
        category: "hot", 
        image: "", 
        nameAr: "موكا",
        nameEn: "Mocha",
        descAr: "",
        descEn: "",
        calories: "160",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "18.00 ريال", priceEn: "18.00 SAR", val: 18 }
        ]
    },
     {
        category: "hot", 
        image: "", 
        nameAr: "كراميل لاتيه",
        nameEn: "Caramel Latte",
        descAr: "",
        descEn: "",
        calories: "160",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "17.00 ريال", priceEn: "17.00 SAR", val: 17 }
        ]
    },
     {
        category: "hot", 
        image: "", 
        nameAr: "هوت شوكلت",
        nameEn: "Hot Chocolate",
        descAr: "",
        descEn: "",
        calories: "160",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "19.00 ريال", priceEn: "19.00 SAR", val: 19 }
        ]
    },

    {
        category: "cold",
        image: "assets/spanish-latte.jpg",
        nameAr: "سبانيش لاتيه",
        nameEn: "Iced Spanish Latte",
        descAr: "إسبريسو مع حليب مكثف وثلج",
        descEn: "Espresso, condensed milk & ice",
        // تم تمرير الحساسية فقط دون السعرات: مربع الحساسية سيتمدد
        allergensAr: "حليب",
        allergensEn: "Milk",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "50.00 ج.م", priceEn: "50.00 EGP", val: 50 }
        ]
    }
];

let currentLang = 'ar';
let activeCategoryId = 'hot'; 

function renderCategories() {
    const grid = document.getElementById('categories-grid');
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
    grid.innerHTML = '';

    const activeCat = categoriesData.find(c => c.id === activeCategoryId);
    title.setAttribute('data-ar', activeCat.nameAr);
    title.setAttribute('data-en', activeCat.nameEn);
    title.textContent = currentLang === 'ar' ? activeCat.nameAr : activeCat.nameEn;

    const filteredItems = menuItems.filter(item => item.category === activeCategoryId);

    if (filteredItems.length === 0) {
        grid.innerHTML = `<p style="grid-column: span 2; text-align: center; color: var(--gold); padding: 20px;">
                            ${currentLang === 'ar' ? 'عفواً، لا توجد منتجات متاحة حالياً في هذا القسم.' : 'Sorry, no products available in this category yet.'}
                          </p>`;
        return;
    }

    filteredItems.forEach((item, index) => {
        const itemName = currentLang === 'ar' ? item.nameAr : item.nameEn;
        const itemDesc = currentLang === 'ar' ? item.descAr : item.descEn;
        
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
                <p data-ar="${item.descAr}" data-en="${item.descEn}">${itemDesc}</p>
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

function updateLanguageTexts() {
    document.querySelectorAll('[data-ar]').forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLang}`);
    });
    renderCategories();
    renderProducts();
}

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    
    htmlRoot.setAttribute('lang', currentLang);
    htmlRoot.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    langBtn.textContent = currentLang === 'ar' ? 'English' : 'عربي';

    updateLanguageTexts();
});

// ================= نظام النافذة المنبثقة (Modal) =================
function openModal(index) {
    const item = menuItems[index];
    const modal = document.getElementById('product-modal');
    
    // تعبئة البيانات الأساسية
    document.getElementById('modal-img').src = item.image;
    document.getElementById('modal-title').textContent = currentLang === 'ar' ? item.nameAr : item.nameEn;
    document.getElementById('modal-desc').textContent = currentLang === 'ar' ? item.descAr : item.descEn;
    
    // التحكم الذكي في السعرات ومسببات الحساسية
    const caloriesSection = document.getElementById('modal-calories-section');
    const allergensSection = document.getElementById('modal-allergens-section');
    const infoGrid = document.getElementById('modal-info-grid');
    
    let hasCalories = false;
    let hasAllergens = false;
    
    // 1. فحص السعرات الحرارية
    if (item.calories) {
        hasCalories = true;
        const caloriesAr = `cal ${item.calories}`;
        const caloriesEn = `${item.calories} cal`;
        document.getElementById('modal-calories').textContent = currentLang === 'ar' ? caloriesAr : caloriesEn;
        caloriesSection.style.display = 'flex';
    } else {
        caloriesSection.style.display = 'none';
    }
    
    // 2. فحص مسببات الحساسية
    if (item.allergensAr || item.allergensEn) {
        hasAllergens = true;
        document.getElementById('modal-allergens').textContent = currentLang === 'ar' ? item.allergensAr : item.allergensEn;
        allergensSection.style.display = 'flex';
    } else {
        allergensSection.style.display = 'none';
    }
    
    // 3. ضبط شبكة العرض (Grid) بناءً على ما تم العثور عليه
    if (hasCalories && hasAllergens) {
        // الاثنان موجودان (شبكة من عمودين متساويين)
        infoGrid.style.display = 'grid';
        infoGrid.style.gridTemplateColumns = '1fr 1fr';
    } else if (hasCalories || hasAllergens) {
        // واحد فقط موجود (المربع الموجود يأخذ العرض بالكامل 100%)
        infoGrid.style.display = 'grid';
        infoGrid.style.gridTemplateColumns = '1fr';
    } else {
        // لا يوجد سعرات ولا حساسية (إخفاء الشبكة بالكامل)
        infoGrid.style.display = 'none';
    }
    
    // توليد الأحجام والأسعار
    const sizesContainer = document.getElementById('modal-sizes-container');
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
    document.getElementById('product-modal').classList.remove('active');
}

window.addEventListener('click', (event) => {
    const modal = document.getElementById('product-modal');
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts();
});