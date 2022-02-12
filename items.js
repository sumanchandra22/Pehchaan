
exports.getProducts = function() {
    const items = [ 
        {
            item_id:1,
            image : "p_img/img3.jfif",
            name :  "Porcelain Mugs",
            lady : "Dariya Bhat",
            Price : "₹50/unit",
            Rating : 5
        },

        {
            item_id:2,
            image : "p_img/img4.jfif",
            name :  "Laltern Hangings",
            lady : "Medha Devi",
            Price : "₹170/unit",
            Rating : 5
        },

        {
            item_id:3,
            image : "p_img/img6.jfif",
            name :  "Carry Bags",
            lady : "Tara Aggarwal",
            Price : "₹400/unit",
            Rating : 5
        },

        {
            item_id:4,
            image : "p_img/img7.jfif",
            name :  "Woolen Sweater",
            lady : "Medha Devi",
            Price : "₹600/unit",
            Rating : 4
        },

        {
            item_id:5,
            image :"p_img/img8.jfif",
            name :  "Beads Bracelet",
            lady : "Tara Agrawal",
            Price : "₹70/unit",
            Rating : 3
        },
        {
            item_id:6,
            image : "p_img/img9.jfif",
            name :  "Flower Vase",
            lady : "Sona Rani",
            Price : "₹380/unit",
            Rating : 4
        },
        {
            item_id:7,
            image : "p_img/img10.jfif",
            name :  "Procelain Basket",
            lady : "Dariya Bhat",
            Price : "₹300/unit",
            Rating : 5
        },
        {
            item_id:8,
            image : "p_img/img11",
            name :  "Procelain Stans",
            lady : "Dariya Bhat",
            Price : "₹360/unit",
            Rating : 3
        },
        {
            item_id:9,
            image : "p_img/p7.png",
            name :  "Child Woollen Dress",
            lady : "Nidhi Garg",
            Price : "₹700/unit",
            Rating : 3
        },
        {
            item_id:10,
            image : "p_img/p8.png",
            name :  "BabyGirl Woollen Frock",
            lady : "Ruchi Aggarwal",
            Price : "₹800/unit",
            Rating : 5
        },
        {
            item_id:11,
            image : "p_img/p9.png",
            name :  "Woollen Dools",
            lady : "Bindu Anand",
            Price : "₹1900/unit",
            Rating : 4
        },
        {
            item_id:12,
            image : "p_img/p10.png",
            name :  "Pillows",
            lady : "Seema Kumari",
            Price : "₹200/unit",
            Rating : 4
        },
        {
            item_id:13,
            image : "p_img/p11.png",
            name :  "Baby Boys Kurta",
            lady : "Sunita Kumari",
            Price : "₹200/unit",
            Rating : 5
        },
        {
            item_id:14,
            image : "p_img/p12.png",
            name :  "Full Baby Set",
            lady : "Sona Rani",
            Price : "₹4000 full set",
            Rating : 5
        },
        {
            item_id:15,
            image : "p_img/p13.png",
            name :  "Cotton BedSheet",
            lady : "Sandhya Jain",
            Price : "₹150/unit",
            Rating : 3
        },

        {
            item_id:16,
            image : "p_img/p14.png",
            name :  "NewBorn Clothing",
            lady : "Sandhya Jain",
            Price : "₹150/unit",
            Rating : 4
        },

        {
            item_id:17,
            image : "p_img/p15.png",
            name :  "Wooden Dolls",
            lady : "Nidhi Garg",
            Price : "₹150 per unit",
            Rating : 5
        },

        {
            item_id:18,
            image : "p_img/p17.png",
            name :  "White Woollen Top",
            lady : "Ruchi Aggarwal",
            Price : "₹400/unit",
            Rating : 4
        },

        {
            item_id:19,
            image : "p_img/p18.png",
            name :  "Grey Woollen Top",
            lady : "Bindu Aggarwal",
            Price : "₹600/unit",
            Rating : 4
        },

        {
            item_id:20,
            image : "p_img/p19.png",
            name :  "Beautiful Poonchu",
            lady : "Seema Kumari",
            Price : "₹400/unit",
            Rating : 5
        },
        {
            item_id:21,
            image : "p_img/p20.png",
            name :  "Bone China Plates",
            lady : "Sona Rani",
            Price : "₹500/unit",
            Rating : 5
        },
        {
            item_id:22,
            image : "p_img/p21.png",
            name :  "White Marble Plates",
            lady : "Sunita Kumari",
            Price : "₹600/unit",
            Rating : 5
        },
        {
            item_id:23,
            image : "p_img/p22.png",
            name :  "Wooden Wall Clock",
            lady : "Sandhya Jain",
            Price : "₹300/unit",
            Rating : 3
        },
        {
            item_id:24,
            image : "p_img/p23.png",
            name :  "Pillow Cover Set",
            lady : "Nidhi Garg",
            Price : "₹700/set",
            Rating : 4
        },
        {
            item_id:25,
            image : "p_img/p24.png",
            name :  "Cube Candels",
            lady : "Ruchi Aggarwal",
            Price : "₹800/set",
            Rating : 4
        },

        {
            item_id: 26,
            image: "p_img/p26.png",
            name: "Painted Terracotta Pot",
            lady: "Nidhi Garg",
            Price: "₹3500/unit",
            Rating: 4
        },

        {
            item_id: 27,
            image: "p_img/p27.png",
            name: "Multicolouered Carpet",
            lady: "Ruchi Aggarwal",
            Price: "₹900/unit",
            Rating: 2
        },

        {
            item_id: 28,
            image: "p_img/p28.png",
            name: "Floral Handmade Diary",
            lady: "Sona Rani",
            Price: "₹350/unit",
            Rating: 3
        },

        {
            item_id: 29,
            image: "p_img/p29.png",
            name: "Cloth Work Dairy",
            lady: "Sunita Kumari",
            Price: "₹300/unit",
            Rating: 4
        },

        {
            item_id: 30,
            image: "p_img/p30.png",
            name: "Embroidery Work",
            lady: "Ruchi Aggarwal",
            Price: "₹500/unit",
            Rating: 5
        },

        {
            item_id: 31,
            image: "p_img/p31.png",
            name: "Hangings for Everywhere",
            lady: "Bindu Anand",
            Price: "₹600/unit",
            Rating: 2
        },

        {
            item_id: 32,
            image: "p_img/p32.png",
            name: "Lanterns with Wool",
            lady: "Seema Kumari",
            Price: "₹1100/unit",
            Rating: 3
        },

        {
            item_id: 33,
            image: "p_img/p33.png",
            name: "Traditional Lantern",
            lady: "Ruchi Aggarwal",
            Price: "₹900/unit",
            Rating: 4
        },

        {
            item_id: 34,
            image: "p_img/p34.png",
            name: "Wooden Candle Holder",
            lady: "Nidhi Garg",
            Price: "₹1200/unit",
            Rating: 5
        },

        {
            item_id: 35,
            image: "p_img/p35.png",
            name: "Nandi Design Clay Diya",
            lady: "Bindu Anand",
            Price: "₹700/unit",
            Rating: 4
        },

        {
            item_id: 36,
            image: "p_img/p25.png" ,
            name: "Traditional Lantern",
            lady: "Sunita Kumari",
            Price: "₹900/unit",
            Rating: 4
        },

        {
            item_id: 37,
            image: "p_img/p37.png",
            name: "Bathroom Utitlites",
            lady: "Seema Kumari",
            Price: "₹1000/unit",
            Rating: 5
        },

        {
            item_id: 38,
            image: "p_img/p38.png",
            name: "Bird Hangings",
            lady: "Sona Rani",
            Price: "₹650/unit",
            Rating: 3
        },

        {
            item_id: 39,
            image: "p_img/p39.png",
            name: "Leather Hand Bag",
            lady: "Ruchi Aggarwal",
            Price: "₹1000/unit",
            Rating: 4
        },

        {
            item_id: 40,
            image:"p_img/p40.png",
            name: "Multi-purpose Pouch",
            lady: "Sona Rani",
            Price: "₹900/unit",
            Rating: 3
        },

        {
            item_id: 41,
            image: "p_img/p41.png",
            name: "Embroidery Work Diaries",
            lady: "Nidhi Garg",
            Price: "₹250/unit",
            Rating: 4
        },

        {
            item_id: 42,
            image: "p_img/p42.png",
            name: "Hut Candle Holder",
            lady: "Seema Kumari",
            Price: "₹800/unit",
            Rating: 5
        },

        {
            item_id: 43,
            image: "p_img/p43.png",
            name: "Elephant Caoster",
            lady: "Bindu Anand",
            Price: "₹100/unit",
            Rating: 4
        },

        {
            item_id: 44,
            image: "p_img/p44.png",
            name: "Clock Jute Design",
            lady: "Sunita Kumari",
            Price: "₹500/unit",
            Rating: 4
        },

        {
            item_id: 45,
            image: "p_img/p45.png",
            name: "Colorful Pillow Covers",
            lady: "Ruchi Aggarwal",
            Price: "₹400/unit",
            Rating: 5
        },

        {
            item_id: 46,
            image: "p_img/p46.png",
            name: "Light Blue Earings",
            lady: "Sandhya Jain",
            Price: "₹120/unit",
            Rating: 4
        },

        {
            item_id: 47,
            image: "p_img/p47.png",
            name: "Button Craft Earings",
            lady: "Nidhi Garg",
            Price: "₹120/unit",
            Rating: 2
        },

        {
            item_id: 48,
            image: "p_img/p48.png",
            name: "Earings-Blue",
            lady: "Seema Kumari",
            Price: "₹100/unit",
            Rating: 4
        },

        {
            item_id: 49,
            image: "p_img/p49.png",
            name: "Traditional Bamboo Fan",
            lady: "Sona Rani",
            Price: "₹850/unit",
            Rating: 5
        },

        {
            item_id: 50,
            image: "p_img/p50.png",
            name: "Embroidery Mask",
            lady: "Sunita Kumari",
            Price: "₹400/unit",
            Rating: 3
        },

        {
            item_id: 51,
            image: "p_img/p51.jpeg",
            name: "Woolen caosters",
            lady: "Sandhya Jain",
            Price: "₹100/unit",
            Rating: 5
        },

        {
            item_id: 52,
            image: "p_img/p52.jpeg",
            name: "Beautiful Wall Hangings",
            lady: "Sandhya Jain",
            Price: "₹200/unit",
            Rating: 3
        },


        {
            item_id: 53,
            image: "p_img/p53.jpeg",
            name: "Wool Carpets",
            lady: "Sandhya Jain",
            Price: "₹300/unit",
            Rating: 5
        },

        {
            item_id: 54,
            image:"p_img/p54.jpeg",
            name: "Woolen Colorful Dolls",
            lady: "Sandhya Jain",
            Price: "₹100/unit",
            Rating: 3
        },

        {
            item_id: 55,
            image: "p_img/p55.jpeg",
            name: "Winter Shoes for Kids",
            lady: "Sandhya Jain",
            Price: "₹200/unit",
            Rating: 4
        },

        {
            item_id: 56,
            image: "p_img/p56.jpeg",
            name: "Woolen Wall Hangings",
            lady: "Sandhya Jain",
            Price: "₹300/unit",
            Rating: 2
        },
        {
            item_id: 57,
            image: "p_img/m7.jpg",
            name: "Mithila Painting",
            lady: "Rekha Devi",
            Price: "₹1300/unit",
            Rating: 2
        },
        {
            item_id: 58,
            image: "p_img/m10",
            name: "Mithila Paintings",
            lady: "Rekha Devi",
            Price: "₹1500/unit",
            Rating: 4
        },
        {
            item_id: 59,
            image: "p_img/m3",
            name: "Mithila Painting",
            lady: "Rekha Devi",
            Price: "₹1000/unit",
            Rating: 5
        },
        {
            item_id: 60,
            image: "p_img/m2",
            name: "Mithila Painting",
            lady: "Rekha Devi",
            Price: "₹2000/unit",
            Rating: 3
        }
       

    ];
  return items;
}