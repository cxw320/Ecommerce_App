export const users = [
    { username: 'jw320', email: 'jeff@gmail.com', role: 'customer'},
    { username: 'em320', email: 'emily@gmail.com', role: 'customer'},
];

export const products = [
    // floating path math causes problems, they prefer to express currency in this way
    // can handle sales discount
    { name: 'Boden Rosie Dress', price: 2999, images: [
        'https://di2ponv0v5otw.cloudfront.net/posts/2019/02/16/5c688ecb180b3ff52160d0b8/m_5c688ed0de6f629f33afc941.jpeg',
                 'https://i.pinimg.com/originals/71/45/be/7145be61239d6ad2807c9fabe7a35792.jpg'
    ], categories: ['casual', 'summer']},
    { name: 'Verity Pocketed Sherpa Moto Jacket - CAMEL', price: 2999, images: [
        'https://cdn.shopify.com/s/files/1/0204/7208/products/IMG_2111_c1fe0803-f19c-4971-919d-62eeb71ed3bf_620x.jpg?v=1574787075',
'https://cdn.shopify.com/s/files/1/0204/7208/products/IMG_2125_e3da5891-98e2-461a-9d94-788dcac1b7c8.jpg?v=1574787075'
    ], categories: ['casual', 'winter']},
    { name: 'Pintuck Buttondown (Anchors)', price: 2999, images:[
        'https://i.pinimg.com/originals/1c/f0/46/1cf046c8dc68d83eb52cc21f35554cc2.jpg',
'https://i.ebayimg.com/images/g/G4kAAOSwNpZe5tFi/s-l300.jpg'
    ],categories: ['casual', 'fall']},
];

