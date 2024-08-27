const db = require('../config/db');

const addSchool = (school, callback) => {
    const query = 'INSERT INTO school_management (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    db.query(query, [school.name, school.address, school.latitude, school.longitude], callback);
};

const getAllSchools = (callback) => {
    const query = 'SELECT * FROM school_management';
    db.query(query, callback);
};

module.exports = { addSchool, getAllSchools };