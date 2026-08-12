// 0. إعدادات الموقع العامة
const siteSettings = {
    // ------------------------------------
    // إعدادات الشعار الأساسي (الهيدر)
    // ------------------------------------
    logo: "assets/logo.png",
    logoAltText: "Lucille Rooftop Cafe & Lounge",

    // ------------------------------------
    // إعدادات الشعار في الخلفية (Watermark)
    // ------------------------------------
    bgLogo: "assets/logo.png", // مسار صورة الخلفية (يمكن أن يكون نفس الشعار أو مختلف)
    bgOpacity: "0.6",         // شفافية الخلفية
    bgSize: "contain",         // نستخدم contain لضمان تناسق أبعاد الشعار في الخلفية
};

// 1. قاعدة بيانات الأقسام
const categoriesData = [
    { id: "hot", icon: "fa-mug-hot", nameAr: "مشروبات ساخنة", nameEn: "Hot Drinks" },
    { id: "cold", icon: "fa-snowflake", nameAr: "مشروبات باردة", nameEn: "Cold Drinks" },
    { id: "Soft Drinks", icon: "fa-solid fa-glass-water", nameAr: "المشروبات الغازية", nameEn: "Soft Drinks" },
    { id: "desserts", icon: "fa-cake-candles", nameAr: "حلويات وكيك", nameEn: "Desserts & Cake" },
    { id: "new", icon: "fa-fire", nameAr: "جديد لوسيل", nameEn: "New at Lucille" },
    { id: "specialty", icon: "fa-coffee", nameAr: "قهوة مختصة", nameEn: "Specialty Coffee" },
    { id: "baked", icon: "fa-bread-slice", nameAr: "مخبوزات", nameEn: "Baked goods" },
    { id: "Lucille Summer", icon: "fa-sun", nameAr: "صيف لوسيل", nameEn: "Lucille Summer" },
    { id: "Winter Lucille", icon: "fa-solid fa-cloud", nameAr: "شتاء لوسيل", nameEn: "Winter Lucille" }
];

// 2. قاعدة بيانات المنتجات
const menuItems = [
   {
        category: "hot", 
        image: "assets/1.jpg", 
        nameAr: " قهوة عربية",
        nameEn: "Arabic Coffee",
        descAr: "",
        descEn: "",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "36.00 ريال", priceEn: "36.00 SAR", val: 36 }
        ]
    },
       {
        category: "hot",
        image: "assets/sh.jpg", 
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
        image: "assets/3.jpg", 
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
        image: "assets/Cappuccino.png", 
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
        image: "assets/Latte.png", 
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
        image: "assets/Turkish Coffee.png", 
        nameAr: "قهوة تركية",
        nameEn: "Turkish Coffee",
        descAr: "قهوة تركية تقليدية بالهيل",
        descEn: "Traditional Turkish Coffee with cardamom",
        calories: "8",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "14.00 ريال", priceEn: "14.00 SAR", val: 14 }
        ]
    },
     {
        category: "hot", 
        image: "assets/Flat white.png", 
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
        image: "assets/Cortado.png", 
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
        image: "assets/Machiato.png", 
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
        image: "assets/French Hazelnut Coffee.jpeg", 
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
        image: "assets/Hazelnut Latte Hot.png", 
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
        image: "assets/Hazelnut Latte Hot.png", 
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
        image: "assets/Mocha.png", 
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
        image: "assets/Caramel Latte.png", 
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
        image: "assets/Hot Chocolate.jpeg", 
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
        image: "assets/Hazelnut Latte Cold.png",
        nameAr: "لاتيه بندق بارد",
        nameEn: "Hazelnut Latte Cold",
        descAr: "",
        descEn: "",
        calories: "150",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "18.00 ريال", priceEn: "18.00 SAR", val: 18 }
        ]
    },
     {
        category: "cold",
        image: "assets/Iced Americano.png",
        nameAr: "ايس أمريكانو",
        nameEn: "Iced Americano",
        descAr: "",
        descEn: "",
        calories: "15",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "14.00 ريال", priceEn: "14.00 SAR", val: 14 }
        ]
    },
     {
        category: "cold",
        image: "assets/Spanish Latte.png",
        nameAr: "سبانش لاتيه",
        nameEn: "Spanish Latte",
        descAr: "",
        descEn: "",
        calories: "150",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "18.00 ريال", priceEn: "18.00 SAR", val: 18 }
        ]
    },
     {
        category: "cold",
        image: "assets/Pistachio Latte.png",
        nameAr: "بستاشيو لاتيه",
        nameEn: "Pistachio Latte",
        descAr: "",
        descEn: "",
        calories: "150",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr:"25.00 ريال", priceEn:"25.00 SAR", val: 25 }
        ]
    },
     {
        category: "cold",
        image: "assets/Iced Mocha.png",
        nameAr: "آيس موكا",
        nameEn: "Iced Mocha",
        descAr: "",
        descEn: "",
        calories: "150",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "19.00 ريال", priceEn:"19.00 SAR", val: 19 }
        ]
    },
     {
        category: "cold",
        image: "assets/Iced Shaken White Mocha.png",
        nameAr: "آيس شيكن وايت موكا",
        nameEn: "Iced Shaken White Mocha",
        descAr: "",
        descEn: "",
        calories: "150",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "19.00 ريال", priceEn:"19.00 SAR", val: 19 }
        ]
    },
     {
        category: "cold",
        image: "assets/Iced Latte.png",
        nameAr: "آيس لاتيه",
        nameEn: "Iced Latte",
        descAr: "",
        descEn: "",
        calories: "150",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr:"17.00 ريال", priceEn: "17.00 SAR", val: 17 }
        ]
    },
     {
        category: "cold",
        image: "assets/Iced Vanilla Latte.jpeg",
        nameAr: "آيس فانيليا لاتيه",
        nameEn: "Iced Vanilla Latte",
        descAr: "",
        descEn: "",
        calories: "150",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr:"17.00 ريال", priceEn: "17.00 SAR", val: 17 }
        ]
    },
     {
        category: "cold",
        image: "assets/Iced Caramel.png",
        nameAr: "آيس كراميل",
        nameEn: "Iced Caramel",
        descAr: "",
        descEn: "",
        calories: "150",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "18.00 ريال", priceEn: "18.00 SAR", val: 18 }
        ]
    },
     {
        category: "cold",
        image: "assets/Signature Special Drink.png",
        nameAr: "مشروب سقنتشر سبيشل",
        nameEn: "Signature Special Drink",
        descAr: "",
        descEn: "",
        calories: "150",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr:"25.00 ريال", priceEn: "25.00 SAR", val: 25 }
        ]
    },
     {
        category: "cold",
        image: "assets/Water.png",
        nameAr: "ماء",
        nameEn: "Water",
        descAr: "",
        descEn: "",
        calories: "5",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "5.00 ريال", priceEn: "5.00 SAR", val: 5 }
        ]
    },
     {
        category: "Soft Drinks",
        image: "assets/Codred Flavor.png",
        nameAr: "موهيتو كودرد",
        nameEn: "Codred Flavor",
        descAr: "بعدة نكهات فراوله - بطيخ - توت ازرق - توت احمر",
        descEn: "",
        calories: "180",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "17.00 ريال", priceEn: "17.00 SAR", val: 17 }
        ]
    },
     {
        category: "Soft Drinks",
        image: "assets/Seven Mojito.png",
        nameAr: "موهيتو سفن",
        nameEn: "Seven Mojito",
        descAr: "بعدة نكهات فراوله - بطيخ - توت ازرق - توت احمر",
        descEn: "",
        calories: "85",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "17.00 ريال", priceEn: "17.00 SAR", val: 17 }
        ]
    },
     {
        category: "Soft Drinks",
        image: "assets/Moheto mix.png",
        nameAr: "موهيتو مكس",
        nameEn: "Moheto mix",
        descAr: "مشروب منعش ولذيذ حيث يجمع بين نكهات متعددة",
        descEn: "",
        calories: "130",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "20.00 ريال", priceEn: "20.00 SAR", val: 20 }
        ]
    },
     {
        category: "Soft Drinks",
        image: "assets/Peach Ice Tea.png",
        nameAr: "أيس تي خوخ",
        nameEn: "Peach Ice Tea",
        descAr: "",
        descEn: "",
        calories: "185",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "15.00 ريال", priceEn: "15.00 SAR", val: 15 }
        ]
    },
     {
        category: "Soft Drinks",
        image: "assets/Passion Fruit Ice Tea.png",
        nameAr: "آيس تي باشن فروت",
        nameEn: "Passion Fruit Ice Tea",
        descAr: "",
        descEn: "",
        calories: "185",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "15.00 ريال", priceEn: "15.00 SAR", val: 15 }
        ]
    },
    {
        category: "desserts", 
        image: "assets/Blueberry Cheesecake.png", 
        nameAr: "تشيز كيك بالتوت",
        nameEn: "Blueberry Cheesecake",
        descAr: "",
        descEn: "",
        calories: "400",
        allergensAr: "الحليب - المكسرات - القمح",
        allergensEn: "Milk - nuts - wheat",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "24.00 ريال", priceEn: "24.00 SAR", val: 24 }
        ]
    },
     {
        category: "desserts", 
        image: "assets/Mango Cheesecake.png", 
        nameAr: "تشيز كيك مانجو",
        nameEn: "Mango Cheesecake",
        descAr: "",
        descEn: "",
        calories: "400",
        allergensAr: "حليب - بيض - جلوتين",
        allergensEn: "Milk - Eggs - Gluten",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "27.00 ريال", priceEn: "27.00 SAR", val: 27 }
        ]
    },
     {
        category: "desserts", 
        image: "assets/London Cake.png", 
        nameAr: "لندن كيك",
        nameEn: "London Cake",
        descAr: "",
        descEn: "",
        calories: "380",
        allergensAr: "حليب - بيض - جلوتين - مكسرات",
        allergensEn: "Milk - Eggs - Gluten - nuts",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "30.00 ريال", priceEn: "30.00 SAR", val: 30 }
        ]
    },
     {
        category: "desserts", 
        image: "assets/Mini pancakes.png", 
        nameAr: "ميني بان كيك",
        nameEn: "Mini pancakes",
        descAr: "",
        descEn: "",
        calories: "520",
        allergensAr: "القمح , الحليب , البيض",
        allergensEn: "Milk , Eggs , Gluten",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "25.00 ريال", priceEn: "25.00 SAR", val: 25 }
        ]
    },
     {
        category: "desserts", 
        image: "assets/Chocolate Cake with Ice Cream.png", 
        nameAr: "شوكو كيك كريم",
        nameEn: "Chocolate Cake Cream",
        descAr: "",
        descEn: "",
        calories: "620",
        allergensAr: "حليب - بيض - جلوتين",
        allergensEn: "Milk - Eggs - Gluten",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "26.00 ريال", priceEn: "26.00 SAR", val: 26 }
        ]
    },
     {
        category: "desserts", 
        image: "assets/Snickers Cheesecake.png", 
        nameAr: "تشيز كيك سنيكرس",
        nameEn: "Snickers Cheesecake",
        descAr: "",
        descEn: "",
        calories: "450",
        allergensAr: "المكسرات الشجرية - مشتقات الألبان - الصويا",
        allergensEn: "Tree nuts - Dairy products - soy",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "30.00 ريال", priceEn: "30.00 SAR", val: 30 }
        ]
    },
     {
        category: "desserts", 
        image: "assets/Honey Cake.png", 
        nameAr: "كيكة العسل",
        nameEn: "Honey Cake",
        descAr: "",
        descEn: "",
        calories: "",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "24.00 ريال", priceEn: "24.00 SAR", val: 24 }
        ]
    },
     {
        category: "desserts", 
        image: "assets/Chocolate Soufflé Fondant.png", 
        nameAr: "سوفليه فوندوم",
        nameEn: "Chocolate Soufflé Fondant",
        descAr: "",
        descEn: "",
        calories: "45",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "22.00 ريال", priceEn: "22.00 SAR", val: 22 }
        ]
    }, 
    {
        category: "desserts", 
        image: "assets/galaxy cake.png", 
        nameAr: "كيكة الجالكسي",
        nameEn: "galaxy cake",
        descAr: "",
        descEn: "",
        calories: "320",
        allergensAr: "حليب - بيض - جلوتين",
        allergensEn: "Milk - Eggs - Gluten",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "27.00 ريال", priceEn: "27.00 SAR", val: 27 }
        ]
    }, 
    {
        category: "desserts", 
        image: "assets/chees rose berry.png", 
        nameAr: "تشيز روز بيري",
        nameEn: "chees rose berry",
        descAr: "",
        descEn: "",
        calories: "320",
        allergensAr: "(الجلوتين+البيض+الحليب ومشتقاته+المكسرات واثارها)",
        allergensEn: "Milk - Eggs - Gluten - Nuts",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "28.00 ريال", priceEn: "28.00 SAR", val: 28 }
        ]
    }, 
    {
        category: "desserts", 
        image: "assets/chocolate fudge.png", 
        nameAr: "شوكليت فودج",
        nameEn: "chocolate fudge",
        descAr: "",
        descEn: "",
        calories: "310",
        allergensAr: "حليب - بيض - جلوتين",
        allergensEn: "Milk - Eggs - Gluten",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "24.00 ريال", priceEn: "24.00 SAR", val: 24 }
        ]
    },
     {
        category: "desserts", 
        image: "assets/Cream Ma Latzer.png", 
        nameAr: "ما لتيزر كريم",
        nameEn: "Cream Ma Latzer",
        descAr: "",
        descEn: "",
        calories: "530",
        allergensAr: "حليب - المكسرات - جلوتين",
        allergensEn: "Milk - Nuts - Gluten",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "24.00 ريال", priceEn: "24.00 SAR", val: 24 }
        ]
    },
     {
        category: "desserts", 
        image: "assets/san sebastian.png", 
        nameAr: "سان سبيستيان",
        nameEn: "san sebastian",
        descAr: "",
        descEn: "",
        calories: "430",
        allergensAr: "حليب - المكسرات - جلوتين - بيض",
        allergensEn: "Milk - Nuts - Gluten- Eggs",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "24.00 ريال", priceEn: "24.00 SAR", val: 24 }
        ]
    },
     {
        category: "desserts", 
        image: "assets/cookies.png", 
        nameAr: "كوكيز",
        nameEn: "cookies",
        descAr: "",
        descEn: "",
        calories: "",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "12.00 ريال", priceEn: "12.00 SAR", val: 12 }
        ]
    },
     {
        category: "desserts", 
        image: "assets/Crunch Choco Cake.jpeg", 
        nameAr: "كرانش شوكو كيك",
        nameEn: "Crunch Choco Cake",
        descAr: "كيكة شوكولاتة غنية بطبقات من الكيك الطري مع لمسة كرانش مقرمشة وصوص شوكولاتة لذيذ.",
        descEn: "Rich chocolate cake with soft cake layers, a delicious crunchy texture, and a smooth chocolate sauce.",
        calories: "520",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "24.00 ريال", priceEn: "24.00 SAR", val: 24 }
        ]
    },
     {
        category: "desserts", 
        image: "assets/Lava Cake.jpeg", 
        nameAr: "لافا كيك",
        nameEn: "Lava Cake",
        descAr: "",
        descEn: "",
        calories: "480",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "29.00 ريال", priceEn: "29.00 SAR", val: 29 }
        ]
    },
     {
        category: "desserts", 
        image: "assets/Cheesecake.jpeg", 
        nameAr: "تشيز كيك مقلوب",
        nameEn: "Cheesecake",
        descAr: "",
        descEn: "",
        calories: "450",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "28.00 ريال", priceEn: "28.00 SAR", val: 28 }
        ]
    },
     {
        category: "cold", 
        image: "assets/Matcha.jpeg", 
        nameAr: "ماتشا",
        nameEn: "Matcha",
        descAr: "مشروب ماتشا ناعم ومنعش، يتميز بنكهة الشاي الأخضر الغنية ولمسة خفيفة من المرارة.",
        descEn: "Smooth and refreshing matcha drink with a rich green tea flavor and a subtle hint of bitterness.",
        calories: "120",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "22.00 ريال", priceEn: "22.00 SAR", val: 22 }
        ]
    },
    {
        category: "Winter Lucille", 
        image: "assets/Karak tea.jpeg", 
        nameAr: "شاي كرك",
        nameEn: "Karak tea",
        descAr: "كركنا غير ..",
        descEn: "",
        calories: "125",
        allergensAr: "(الحليب ومشتقاته)",
        allergensEn: "Milk",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "10.00 ريال", priceEn: "10.00 SAR", val: 10 }
        ]
    },
     {
        category: "Winter Lucille", 
        image: "assets/Hot sahlab.jpeg", 
        nameAr: "سحلب",
        nameEn: "Hot sahlab",
        descAr: "أجواء الشتا والدفا عند كوفي لوسيل غير",
        descEn: "",
        calories: "170",
        allergensAr: "(الحليب ومشتقاته +المكسرات واثارها)",
        allergensEn: "Milk - Nuts",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "14.00 ريال", priceEn: "14.00 SAR", val: 14 }
        ]
    },
     {
        category: "specialty", 
        image: "assets/Brazilian Premium V60 Coffee.jpeg", 
        nameAr: "V60 برازيلي فاخر",
        nameEn: "Brazilian Premium V60 Coffee",
        descAr: "V60 برازيلي فاخر",
        descEn: "Brazilian Premium V60 Coffee",
        calories: "",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "25.00 ريال", priceEn: "25.00 SAR", val: 25 }
        ]
    },
     {
        category: "specialty", 
        image: "assets/Brazilian Premium V60 Coffee.jpeg", 
        nameAr: "V60 كولومبي",
        nameEn: "Colombian V60",
        descAr: "",
        descEn: "",
        calories: "50",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "20.00 ريال", priceEn: "20.00 SAR", val: 20 }
        ]
    }, 
    {
        category: "specialty", 
        image: "assets/Today’s Coffee.jpeg", 
        nameAr: "قهوة اليوم",
        nameEn: "Today’s Coffee",
        descAr: "",
        descEn: "",
        calories: "50",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "14.00 ريال", priceEn: "14.00 SAR", val: 14 }
        ]
    }, 
    {
        category: "specialty", 
        image: "assets/Ethiopian V60.jpeg", 
        nameAr: "V60 أثيوبي",
        nameEn: "Ethiopian V60",
        descAr: "",
        descEn: "",
        calories: "50",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "20.00 ريال", priceEn: "20.00 SAR", val: 20 }
        ]
    },
    {
        category: "baked", 
        image: "assets/H.M.Freeze.jpeg", 
        nameAr: "الو ميت فريز",
        nameEn: "H.M.Freeze",
        descAr: "",
        descEn: "",
        calories: "",
        allergensAr: "جلوتين + بيض + حليب +اثار المكسرات",
        allergensEn: "(Gluten + Eggs + Milk and dairy products + Nuts and their effects)",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "15.00 ريال", priceEn: "15.00 SAR", val: 15 }
        ]
    },
     {
        category: "baked", 
        image: "assets/Croissant.jpeg", 
        nameAr: "كرواسون",
        nameEn: "Croissant",
        descAr: "بحشوات متعدده جبنه بيضاء - جبنه تشيدر",
        descEn: "",
        calories: "350",
        allergensAr: "جلوتين - الحليب - البيض",
        allergensEn: "Gluten - Milk - Eggs",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "15.00 ريال", priceEn: "15.00 SAR", val: 15 }
        ]
    },
     {
        category: "baked", 
        image: "assets/Raspberry Almonds & custard.jpeg", 
        nameAr: "راسبيري بالوز والكاسترد",
        nameEn: "Raspberry Almonds & custard",
        descAr: "",
        descEn: "",
        calories: "",
        allergensAr: "جلوتين - بيض - حليب - المكسرات",
        allergensEn: "(Gluten + Eggs + Milk and dairy products + Nuts and their effects)",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "15.00 ريال", priceEn: "15.00 SAR", val: 15 }
        ]
    },
     {
        category: "baked", 
        image: "assets/danish fruit.jpeg", 
        nameAr: "دانيش فواكة",
        nameEn: "danish fruit",
        descAr: "",
        descEn: "",
        calories: "184",
        allergensAr: "جلوتين + بيض + حليب +اثار المكسرات",
        allergensEn: "(Gluten + Eggs + Milk and dairy products + Nuts and their effects)",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "16.00 ريال", priceEn: "16.00 SAR", val: 16 }
        ]
    },
     {
        category: "baked", 
        image: "assets/danish fondan.jpeg", 
        nameAr: "دانيش بالفوندان",
        nameEn: "danish fondan",
        descAr: "",
        descEn: "",
        calories: "115",
        allergensAr: "(الجلوتين+البيض+الحليب ومشتقاته+المكسرات واثارها)",
        allergensEn: "(Gluten + Eggs + Milk and dairy products + Nuts and their effects)",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "15.00 ريال", priceEn: "15.00 SAR", val: 15 }
        ]
    },
     {
        category: "baked", 
        image: "assets/Labneh & Za'atar Danish.jpeg", 
        nameAr: "دانيش لبنة وزعتر",
        nameEn: "Labneh & Za'atar Danish",
        descAr: "",
        descEn: "",
        calories: "",
        allergensAr: "(الجلوتين+البيض+الحليب ومشتقاته+المكسرات واثارها)",
        allergensEn: "(Gluten + Eggs + Milk and dairy products + Nuts and their effects)",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "16.00 ريال", priceEn: "16.00 SAR", val: 16 }
        ]
    },
     {
        category: "Lucille Summer", 
        image: "assets/Ice cream.jpeg", 
        nameAr: "ايسكريم",
        nameEn: "Ice cream",
        descAr: "متعدد النكهات فانيلا - فراوله",
        descEn: "",
        calories: "137",
        allergensAr: "الحليب - المكسرات",
        allergensEn: "Milk - Nuts",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "10.00 ريال", priceEn: "10.00 SAR", val: 10 }
        ]
    },
     {
        category: "Lucille Summer", 
        image: "assets/Ice Cream with cookie.jpeg", 
        nameAr: "ايسكريم مع كوكيز",
        nameEn: "Ice Cream with cookie",
        descAr: "",
        descEn: "",
        calories: "714",
        allergensAr: "حليب - بيض - القمح",
        allergensEn: "Milk - egg - wheat",
        sizes: [
            { nameAr: "عادي", nameEn: "Regular", priceAr: "18.00 ريال", priceEn: "18.00 SAR", val: 18 }
        ]
    },
];