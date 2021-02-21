import UserModel from './User.js';

const user1 = new UserModel({
    id: '123',
    usernam: 'jondoe',
    email: 'jondo@email.com',
    role: 'admin',
});

const user2 = new UserModel({
    id: '345',
    username: 'janedoe',
    email: 'janedoe@email.com',
    role: 'customer',
});

const users = [user1.getData(), user2.getData()];
console.log(users);

export default users;