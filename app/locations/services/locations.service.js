let { locations_db } = require("../../core/db.service");

const getAll = () => {
    return new Promise((res) => {
        res(locations_db);
    });
};

const get = (id) => {
    return new Promise((res) => {
        const location = locations_db.find((x) => x.id == id);
        res(location);
    });
};

const create = (data) => {
    return new Promise((res) => {
        let id = locations_db.length + 1;
        locations_db.push({ ...data, id });
        res({ ...data, id });
    });
};

const update = (id, data) => {
    return new Promise((res) => {
        let location = locations_db.find((x) => x.id == id);
        let locationIndex = locations_db.findIndex((x) => x.id == id);
        locations_db.splice(locationIndex, 1, { ...location, ...data });
        res(location);
    });
};

const remove = (id) => {
    return new Promise((res) => {
        let location = locations_db.findIndex((x) => x.id == id);
        locations_db.splice(location, 1);
        res(id);
    });
};

const locationsService = {
    getAll,
    get,
    create,
    update,
    remove,
};

module.exports = locationsService;
