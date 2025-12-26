/**
 * ملف البيانات الوهمية - Dummy Data
 * 
 * يحتوي على معلومات 24 مطعم في ليبيا موزعة على 4 مدن
 * كل مطعم يحتوي على: الاسم، الفئة، التقييم، الصور، ساعات العمل، الموقع
 * 
 * لا يوجد اتصال بقاعدة بيانات - جميع البيانات ثابتة
 */

const restaurants = [
    // ============================================
    // مطاعم طرابلس (6 مطاعم)
    // ============================================
    {
        id: 1,
        name: "مطعم البحر الأبيض المتوسط",
        category: ["بحري", "عصائر"],
        city: "طرابلس",
        rating: 4.8,
        priceRange: "مرتفع",
        address: "شارع الجمهورية، المدينة القديمة، طرابلس",
        description: "يقدم أشهى المأكولات البحرية الطازجة من البحر المتوسط مباشرة. يتميز بإطلالة خلابة على الميناء وأجواء راقية. خيار مثالي لعشاق الأسماك والمأكولات البحرية الفاخرة.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/TripoliSeafood1",
        workingHours: {
            weekdays: "11:00 ص - 11:30 م",
            weekend: "11:00 ص - 12:30 ص"
        }
    },
    {
        id: 2,
        name: "مخبز وحلويات الأصالة",
        category: ["معجنات", "افطار صباحي"],
        city: "طرابلس",
        rating: 4.5,
        priceRange: "رخيص",
        address: "شارع الزاوية، حي الأندلس، طرابلس",
        description: "مخبز تقليدي يقدم أشهى المعجنات والحلويات الليبية منذ 1985. متخصص في الخبز الطازج والمعجنات الصباحية. يشتهر بالكعك والبسكويت محلي الصنع.",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/TripoliBakery1",
        workingHours: {
            weekdays: "6:00 ص - 10:00 م",
            weekend: "6:00 ص - 11:00 م"
        }
    },
    {
        id: 3,
        name: "مطعم الكورنيش الليبي",
        category: ["شعبي", "بحري"],
        city: "طرابلس",
        rating: 4.3,
        priceRange: "متوسط",
        address: "كورنيش طرابلس، بجانب ميدان الشهداء",
        description: "مطعم شعبي محبوب يقدم الأطباق الليبية التقليدية بنكهة أصيلة. يتميز بموقعه المميز على الكورنيش. أسعار معقولة وجودة ممتازة.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/TripoliCorniche1",
        workingHours: {
            weekdays: "12:00 م - 11:00 م",
            weekend: "12:00 م - 12:00 ص"
        }
    },
    {
        id: 4,
        name: "كافيه النخيل الصحي",
        category: ["اكل صحي", "عصائر"],
        city: "طرابلس",
        rating: 4.6,
        priceRange: "متوسط",
        address: "شارع جمال عبدالناصر، طرابلس",
        description: "كافيه عصري متخصص في الأكل الصحي والعصائر الطبيعية. القائمة تشمل السلطات الطازجة، البروتين الصحي، والعصائر الطبيعية. مثالي للرياضيين وعشاق الصحة.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/TripoliHealthy1",
        workingHours: {
            weekdays: "8:00 ص - 10:00 م",
            weekend: "8:00 ص - 11:00 م"
        }
    },
    {
        id: 5,
        name: "سندوتشات المدينة السريعة",
        category: ["ساندوتش", "افطار صباحي"],
        city: "طرابلس",
        rating: 4.2,
        priceRange: "رخيص",
        address: "شارع عمر المختار، وسط البلد، طرابلس",
        description: "محل سندوتشات سريع وشهير يقدم مجموعة واسعة من السندوتشات اللذيذة. يتميز بسرعة التحضير وجودة المكونات. خيار مثالي للوجبات السريعة.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/TripoliSandwich1",
        workingHours: {
            weekdays: "7:00 ص - 11:00 م",
            weekend: "7:00 ص - 12:00 ص"
        }
    },
    {
        id: 6,
        name: "عصيرات الواحة الطبيعية",
        category: ["عصائر"],
        city: "طرابلس",
        rating: 4.7,
        priceRange: "رخيص",
        address: "شارع المجاهدين، طرابلس",
        description: "محل عصائر متخصص في العصائر الطبيعية الطازجة 100%. يقدم عصائر الفواكه الموسمية والمشروبات المنعشة. جودة عالية وأسعار ممتازة.",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/TripoliJuice1",
        workingHours: {
            weekdays: "9:00 ص - 12:00 ص",
            weekend: "9:00 ص - 1:00 ص"
        }
    },

    // ============================================
    // مطاعم بنغازي (6 مطاعم)
    // ============================================
    {
        id: 7,
        name: "مطعم قمة الشرق البحري",
        category: ["بحري", "شعبي"],
        city: "بنغازي",
        rating: 4.5,
        priceRange: "متوسط",
        address: "كورنيش بنغازي، المنطقة الشرقية",
        description: "مطعم بحري رائع يطل على البحر مباشرة. يقدم أسماك طازجة يومياً وأطباق ليبية تقليدية. الأجواء عائلية ومريحة.",
        image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/BenghaziSeafood1",
        workingHours: {
            weekdays: "12:00 م - 11:00 م",
            weekend: "12:00 م - 12:00 ص"
        }
    },
    {
        id: 8,
        name: "حلويات وموالح الجليل",
        category: ["معجنات", "افطار صباحي"],
        city: "بنغازي",
        rating: 4.4,
        priceRange: "رخيص",
        address: "شارع جمال عبدالناصر، بنغازي",
        description: "محل حلويات ومعجنات مشهور في بنغازي. يقدم الحلويات الليبية التقليدية والعصرية. متخصص في المعمول والكعك. جودة عالية وأسعار منافسة.",
        image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/BenghaziBakery1",
        workingHours: {
            weekdays: "6:00 ص - 10:00 م",
            weekend: "6:00 ص - 11:00 م"
        }
    },
    {
        id: 9,
        name: "مطعم الأصالة الليبية",
        category: ["شعبي"],
        city: "بنغازي",
        rating: 4.6,
        priceRange: "متوسط",
        address: "حي السلماني، بنغازي",
        description: "مطعم متخصص في الأكلات الليبية الشعبية الأصيلة. قائمة متنوعة من الأطباق التقليدية. طعم يذكرك بنكهة البيت الليبي الأصيل.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/BenghaziTraditional1",
        workingHours: {
            weekdays: "11:00 ص - 11:00 م",
            weekend: "11:00 ص - 12:00 ص"
        }
    },
    {
        id: 10,
        name: "جرين لايف للأكل الصحي",
        category: ["اكل صحي", "عصائر"],
        city: "بنغازي",
        rating: 4.8,
        priceRange: "مرتفع",
        address: "شارع الكيش، بنغازي",
        description: "مطعم حديث متخصص في الطعام الصحي العضوي. قائمة متكاملة من السلطات، البروتينات الصحية، والعصائر الطبيعية. بيئة عصرية ونظيفة.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/BenghaziHealthy1",
        workingHours: {
            weekdays: "8:00 ص - 10:00 م",
            weekend: "9:00 ص - 11:00 م"
        }
    },
    {
        id: 11,
        name: "سندوتشات الشارع الجديد",
        category: ["ساندوتش"],
        city: "بنغازي",
        rating: 4.1,
        priceRange: "رخيص",
        address: "شارع البلدية، بنغازي",
        description: "محل سندوتشات شهير يقدم تشكيلة واسعة من السندوتشات الطازجة. سريع نظيف ولذيذ. أسعار رخيصة جداً وجودة ممتازة.",
        image: "https://images.unsplash.com/photo-1619221882013-d0c8ef9d1b18?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/BenghaziSandwich1",
        workingHours: {
            weekdays: "7:00 ص - 12:00 ص",
            weekend: "7:00 ص - 1:00 ص"
        }
    },
    {
        id: 12,
        name: "كوكتيلات البحر المتوسط",
        category: ["عصائر", "افطار صباحي"],
        city: "بنغازي",
        rating: 4.3,
        priceRange: "رخيص",
        address: "كورنيش بنغازي، المنطقة السياحية",
        description: "محل عصائر وكوكتيلات على الكورنيش. يقدم عصائر طبيعية ومشروبات منعشة. إطلالة مميزة على البحر. مثالي للعائلات.",
        image: "https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/BenghaziJuice1",
        workingHours: {
            weekdays: "10:00 ص - 12:00 ص",
            weekend: "10:00 ص - 1:00 ص"
        }
    },

    // ============================================
    // مطاعم مصراتة (6 مطاعم)
    // ============================================
    {
        id: 13,
        name: "مطعم صيادي مصراتة",
        category: ["بحري"],
        city: "مصراتة",
        rating: 4.7,
        priceRange: "متوسط",
        address: "ميناء مصراتة، المنطقة الساحلية",
        description: "مطعم بحري أصيل على الميناء مباشرة. يقدم أسماك طازجة من صيادي مصراتة. مشوي أو مقلي حسب الطلب. طعم البحر الحقيقي.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/MisrataSeafood1",
        workingHours: {
            weekdays: "12:00 م - 11:00 م",
            weekend: "12:00 م - 12:00 ص"
        }
    },
    {
        id: 14,
        name: "معجنات النور الذهبي",
        category: ["معجنات", "افطار صباحي"],
        city: "مصراتة",
        rating: 4.5,
        priceRange: "رخيص",
        address: "شارع طرابلس، وسط مصراتة",
        description: "مخبز ومعجنات عريق في مصراتة منذ 1990. متخصص في الفطائر والمعجنات الطازجة. خبز ساخن طوال اليوم. نظافة وجودة عالية.",
        image: "https://images.unsplash.com/photo-1587372866255-ebfdf4481be0?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/MisrataBakery1",
        workingHours: {
            weekdays: "5:30 ص - 10:00 م",
            weekend: "5:30 ص - 11:00 م"
        }
    },
    {
        id: 15,
        name: "مطبخ مصراتة التقليدي",
        category: ["شعبي"],
        city: "مصراتة",
        rating: 4.4,
        priceRange: "متوسط",
        address: "حي الظهرة، مصراتة",
        description: "مطعم شعبي يقدم الأكلات الليبية التقليدية بطريقة أصيلة. البازين، الكسكسي، والمبطن من أشهر الأطباق. طعم البيت الليبي.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/MisrataTraditional1",
        workingHours: {
            weekdays: "11:00 ص - 10:30 م",
            weekend: "11:00 ص - 11:30 م"
        }
    },
    {
        id: 16,
        name: "فيت ويل للطعام الصحي",
        category: ["اكل صحي"],
        city: "مصراتة",
        rating: 4.2,
        priceRange: "متوسط",
        address: "شارع الجمهورية، مصراتة",
        description: "مطعم صحي يقدم وجبات متوازنة للرياضيين والباحثين عن نمط حياة صحي. بروتينات عالية الجودة وخضروات طازجة. خدمة التوصيل متوفرة.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/MisrataHealthy1",
        workingHours: {
            weekdays: "9:00 ص - 10:00 م",
            weekend: "10:00 ص - 10:00 م"
        }
    },
    {
        id: 17,
        name: "سندوتشات البرج السريعة",
        category: ["ساندوتش", "افطار صباحي"],
        city: "مصراتة",
        rating: 4.0,
        priceRange: "رخيص",
        address: "برج مصراتة، الدور الأرضي",
        description: "مطعم سندوتشات سريع في موقع مميز. يقدم سندوتشات طازجة ومشروبات ساخنة. مثالي للفطور والغداء السريع. أسعار معقولة.",
        image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/MisrataSandwich1",
        workingHours: {
            weekdays: "6:30 ص - 11:00 م",
            weekend: "7:00 ص - 12:00 ص"
        }
    },
    {
        id: 18,
        name: "عصيرات الفواكه الطازجة",
        category: ["عصائر"],
        city: "مصراتة",
        rating: 4.6,
        priceRange: "رخيص",
        address: "سوق الخميس، مصراتة",
        description: "محل عصائر في السوق الشعبي. عصائر طبيعية 100% بدون إضافات. أسعار رمزية وجودة ممتازة. فواكه موسمية طازجة يومياً.",
        image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/MisrataJuice1",
        workingHours: {
            weekdays: "8:00 ص - 11:00 م",
            weekend: "8:00 ص - 12:00 ص"
        }
    },

    // ============================================
    // مطاعم زليتن (6 مطاعم)
    // ============================================
    {
        id: 19,
        name: "مطعم شاطئ زليتن البحري",
        category: ["بحري", "شعبي"],
        city: "زليتن",
        rating: 4.3,
        priceRange: "متوسط",
        address: "شاطئ زليتن، المنطقة السياحية",
        description: "مطعم بحري على الشاطئ مباشرة. منظر رائع وأسماك طازجة. جو عائلي ومريح. مثالي للمناسبات والرحلات العائلية.",
        image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/ZlitenSeafood1",
        workingHours: {
            weekdays: "1:00 م - 11:00 م",
            weekend: "12:00 م - 12:00 ص"
        }
    },
    {
        id: 20,
        name: "حلويات زليتن الشهيرة",
        category: ["معجنات"],
        city: "زليتن",
        rating: 4.7,
        priceRange: "رخيص",
        address: "شارع البلدية، زليتن",
        description: "محل حلويات تقليدي مشهور في زليتن. يقدم الحلويات الليبية الأصيلة. متخصص في قرص العقيلة والمحلبية. وصفات توارثتها الأجيال.",
        image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/ZlitenBakery1",
        workingHours: {
            weekdays: "7:00 ص - 10:00 م",
            weekend: "7:00 ص - 11:00 م"
        }
    },
    {
        id: 21,
        name: "الأكلات الشعبية الزليتنية",
        category: ["شعبي", "افطار صباحي"],
        city: "زليتن",
        rating: 4.1,
        priceRange: "رخيص",
        address: "وسط المدينة، زليتن",
        description: "مطعم شعبي بسيط يقدم الأكلات الزليتنية المحلية. الشوربة الليبية والبسيسة من أشهر الأطباق. أسعار رخيصة جداً. جو شعبي أصيل.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/ZlitenTraditional1",
        workingHours: {
            weekdays: "7:00 ص - 10:00 م",
            weekend: "7:00 ص - 11:00 م"
        }
    },
    {
        id: 22,
        name: "صحتي للوجبات الصحية",
        category: ["اكل صحي", "عصائر"],
        city: "زليتن",
        rating: 3.9,
        priceRange: "متوسط",
        address: "شارع المجاهدين، زليتن",
        description: "كافيه صحي حديث في زليتن. يقدم سلطات متنوعة ووجبات صحية متوازنة. عصائر طبيعية طازجة. مكان نظيف وهادئ.",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/ZlitenHealthy1",
        workingHours: {
            weekdays: "9:00 ص - 9:00 م",
            weekend: "10:00 ص - 10:00 م"
        }
    },
    {
        id: 23,
        name: "سندوتشات الطريق السريع",
        category: ["ساندوتش"],
        city: "زليتن",
        rating: 4.2,
        priceRange: "رخيص",
        address: "الطريق الساحلي، مدخل زليتن",
        description: "محل سندوتشات على الطريق الرئيسي. خدمة سريعة ونظيفة. مثالي للمسافرين. سندوتشات طازجة ولذيذة بأسعار معقولة.",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/ZlitenSandwich1",
        workingHours: {
            weekdays: "6:00 ص - 12:00 ص",
            weekend: "6:00 ص - 1:00 ص"
        }
    },
    {
        id: 24,
        name: "عصائر النخيل الطبيعية",
        category: ["عصائر", "افطار صباحي"],
        city: "زليتن",
        rating: 4.4,
        priceRange: "رخيص",
        address: "شارع الساحل، زليتن",
        description: "محل عصائر طبيعية بجودة عالية. فواكه طازجة يومياً. تشكيلة واسعة من العصائر والمشروبات الباردة. نظافة تامة وخدمة سريعة.",
        image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&q=80",
        googleMapsLink: "https://goo.gl/maps/ZlitenJuice1",
        workingHours: {
            weekdays: "8:30 ص - 11:30 م",
            weekend: "8:30 ص - 12:00 ص"
        }
    }
];

// تصدير البيانات لاستخدامها في التطبيق
export default restaurants;
