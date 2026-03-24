const fs = require("fs");

function getUsers() {
    const data = fs.readFileSync("user.json");
    return JSON.parse(data);
}

function validateUser(email, password) {
    const users = getUsers();

    const user = users.find(
        (u) => u.email === email && u.password === password
    );

    return user || null;
}

module.exports = {
    validateUser
};