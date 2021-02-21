export const users = [
    { username: 'jw320', email: 'jeff@gmail.com', role: 'customer'},
    { username: 'em320', email: 'emily@gmail.com', role: 'customer'},
];

export const products = [
    // floating path math causes problems, they prefer to express currency in this way
    // can handle sales discount
    { name: 'T-Shirt Black', price: 1999, images: [], categories: ['casual', 'summer']},
    { name: 'Winter Jacket Navy', price: 7999, images: [], categories: ['casual', 'winter']},
    { name: 'Sneakers Fly by Night', price: 9999, images:[],categories: ['sneakers', 'sporty']},
];
