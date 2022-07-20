
let users = [
    { id: 1, firstname: 'Ibrokhim', lastname: 'Shukrullaev', username: 'algo1998', password: '123456' },
    { id: 2, firstname: 'Draymond', lastname: 'Green', username: 'user1', password: '123456' },
    { id: 3, firstname: 'Steph', lastname: 'Curry', username: 'user2', password: '123456' },
    { id: 3, firstname: 'Kevin', lastname: 'Durant', username: 'user3', password: '123456' }
]

module.exports = class User {

    constructor(id, username, password, firstname, lastname) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    static login(username, password) {
        const foundUsers = users.filter(u => u.username === username);
        if (foundUsers.length === 0) {
            throw new Error(`User doesn't exist!`);
        }
        const foundUser = foundUsers.find(u => u.password === password);
    
        if (foundUser) {
            foundUser.accessToken = `${foundUser.id}-${foundUser.username}-${Date.now().toString()}`;
            return foundUser.accessToken;
        } else {
            throw new Error(`Incorrect password!`);
        }
    }

    static verify(accessToken) {
        return users.find(u => u.accessToken === accessToken);
    }
}