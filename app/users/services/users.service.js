let { users_db } = require("../../core/db.service");

const getAll = () => {
    return new Promise((res) => {
        res(users_db);
    });
};

const get = (id) => {
    return new Promise((res) => {
        const user = users_db.find((x) => x.id == id);
        res(user);
    });
};

const create = (data) => {
    return new Promise((res) => {
        let id = users_db.length + 1;
        users_db.push({ ...data, id });
        res({ ...data, id });
    });
};

const update = (id, data) => {
    return new Promise((res) => {
        let user = users_db.find((x) => x.id == id);
        let userIndex = users_db.findIndex((x) => x.id == id);
        users_db.splice(userIndex, 1, { ...user, ...data });
        res(user);
    });
};

const remove = (id) => {
    return new Promise((res) => {
        let user = users_db.findIndex((x) => x.id == id);
        users_db.splice(user, 1);
        res(id);
    });
};

const usersService = {
    getAll,
    get,
    create,
    update,
    remove,
};

module.exports = usersService;
