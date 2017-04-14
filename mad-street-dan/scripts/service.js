(function() {
    'use strict';
    angular.module('MadStreet')
        .service('ItemService', ItemService);
    ItemService.$inject = ['$http'];

    function ItemService($http) {


        this.getItems = function() {
            var data = { "products": [{ "id": "1", "name": "Melange Slim Fit T-shirt", "image": "https:\/\/hackerearth.0x10.info\/api\/msd_img\/11471602762966-Colors-Couture-Men-Tshirts-5451471602761547-1_mini.jpg", "category": "0", "rating": "4", "price": "314", "color": "#DDDDDF", "quantity": "10", "description": "Look smart in this T-shirt from Colors Couture. Team it with a pair of jeans or trousers and sneakers for a great look." }, { "id": "2", "name": "Rapido Navy T-shirt", "image": "https:\/\/hackerearth.0x10.info\/api\/msd_img\/11454311700832-Moda-Rapido-Men-Tshirts-2601454311700243-1.jpg", "category": "0", "rating": "3.2", "price": "539", "color": "#2B2D42", "quantity": "110", "description": "Step up your style quotient with this tee from Moda Rapido Team it up with your favourite pair of jeans, a jacket and boat shoes or boots when you head out on the weekend." }, { "id": "3", "name": "Beige Floral Printed Top", "image": "https:\/\/hackerearth.0x10.info\/api\/msd_img\/11448027084637-All-About-You-from-Deepika-Padukone-Beige-Floral-Printed-Top-251448027084217-1.jpg", "category": "0", "rating": "4.5", "price": "999", "color": "#EAE3D1", "quantity": "5", "description": "This beautiful floral print top is influenced by Deepika's personal and everyday style. Deepika Padukone's All About You clothing line is here to give you the best of fashion. This piece will look irresistibly stunning when teamed with a skirt and pumps." }, { "id": "4", "name": "Denim Jacket", "image": "https:\/\/hackerearth.0x10.info\/api\/msd_img\/11474975946031-MANGO-Women-Jackets-5911474975945790-1.jpg", "category": "0", "rating": "4.2", "price": "3490", "color": "#586B8C", "quantity": "15", "description": "This denim jacket from MANGO would make an ideal choice this season. Layer it over a jersey dress and complete the look with a pair of casual shoes." }, { "id": "5", "name": "Mustard Yellow Sweater", "image": "https:\/\/hackerearth.0x10.info\/api\/msd_img\/11474098645255-Kook-N-Keech-Garfield-Women-Yellow--Sweater-951474098645052-1.jpg", "category": "0", "rating": "4.7", "price": "1049", "color": "#F0A618", "quantity": "351", "description": "Expand your cold-weather wardrobe with this chic sweater from Kook N Keech Garfield. When you're going to the movies, pair this mustard yellow piece with your favourite pair of trim denims and a cute tote." }, { "id": "6", "name": "Fibre Sleep Pillow", "image": "https:\/\/hackerearth.0x10.info\/api\/msd_img\/11467194818214-Recron-Certified-Unisex-Pillows-7341467194818123-1.jpg", "category": "1", "rating": "3.2", "price": "1499", "color": "#E7D2BE", "quantity": "10", "description": "Sleep well and wake up to a refreshing morning with this soft and cosy pillow. Made from soft fabric, this pillow is perfect for your neck and back." }, { "id": "7", "name": "Hobo Bag", "image": "https:\/\/hackerearth.0x10.info\/api\/msd_img\/11470830268338-Mast--Harbour-Green--Brown-Hobo-Bag-5321470830267980-1.jpg", "category": "1", "rating": "3.6", "price": "1159", "color": "#BCD885", "quantity": "45", "description": "Carry your essentials in style in this chic hobo bag from Mast & Harbour. Team it with a linen shirt, well-fitting trousers and matching heels for a glamorous ensemble." }, { "id": "8", "name": "Gold-Toned Dial Watch", "image": "https:\/\/hackerearth.0x10.info\/api\/msd_img\/11473846555863-Sonata-Women-Watches-8061473846555708-1.jpg", "category": "1", "rating": "4.8", "price": "959", "color": "#D9BD69", "quantity": "1", "description": "This smart and fashionable watch from Sonata Sona Sitara will definitely spruce up your look. Team it with your party outfits and flaunt your wrist around." }, { "id": "9", "name": "AT Gunmetal Trolley Suitcase", "image": "https:\/\/hackerearth.0x10.info\/api\/msd_img\/American-Tourister-Unisex-Gunmetal-Toned-Arona-Trolley-Suitcase_1_594d4f10ce1f27206eaa71d34c55c749.jpg", "category": "1", "rating": "5", "price": "4999", "color": "#5F6565", "quantity": "99", "description": "This stylish and unique trolley suitcase from AMERICAN TOURISTER is lightweight and easy to carry. This piece has enough space to store your essentials when heading out on a short trip." }, { "id": "10", "name": "Fade YTH T-shirt", "image": "https:\/\/hackerearth.0x10.info\/api\/msd_img\/11469428693861-Nike-Boys-Tshirts-3891469428693759-1.jpg", "category": "0", "rating": "3.9", "price": "999", "color": "#3A4F9D", "quantity": "61", "description": "Get your little athlete this stylish T-shirt from from Nike. Make him team it with sports shorts and sneakers when heading for a school game." }, { "id": "11", "name": "PUMA Sneakers", "image": "https:\/\/hackerearth.0x10.info\/api\/msd_img\/11474970424457-PUMA-Unisex-Grey-Nestor-DP-Sneakers-3491474970424411-1.jpg", "category": "1539", "rating": "4.1", "price": "1539", "color": "#818376", "quantity": "10", "description": "Look stylish in this trendy pair of sneakers from PUMA. Team it with jeans and a shirt or a tee when heading out." }, { "id": "12", "name": "Nike Air Cap", "image": "https:\/\/hackerearth.0x10.info\/api\/msd_img\/11461056612582-Nike-Unisex-Black-Air-Pivot-True-Snapback-Cap-9531461056612047-1.jpg", "category": "1", "rating": "3", "price": "796", "color": "#313131", "quantity": "20", "description": "This piece of accessory will add style to your look. Team it with denim overalls to up your fashion quotient by several notches." }], "quote_max": "100000", "quote_available": "942" }

            var items = data.products;

            for (var i = 0; i < items.length; i++) {
                items[i].price = parseInt(items[i].price);
                if (items[i].category == 0) {
                    items[i].category_name = "Apparel";
                } else if (items[i].category == 1) {
                    items[i].category_name = "Accessories";
                } else {
                    items[i].category_name = "Other";
                }
            }
            return data;


            // return $http({
            //     method: "GET",
            //     url: "https://hackerearth.0x10.info/api/fashion?type=json&query=list_products"
            // }).then(function(response) {

            //     var items = response.data.products;
            //     for (var i = 0; i < items.length; i++) {
            //         items[i].price = parseInt(items[i].price);
            //         if (items[i].category == 0) {
            //             items[i].category_name = "Apparel";
            //         } else if (items[i].category == 1) {
            //             items[i].category_name = "Accessories";
            //         } else {
            //             items[i].category_name = "Other";
            //         }
            //     }
            //     return response.data;
            // });
        };
    }

})();