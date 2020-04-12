const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Record = db.incident;

module.exports = {
    incident,
    getAll,
    getById,
    update,
    delete: _delete
};

async function incident(newIncident){
    const inc = new Record(newIncident);
    await inc.save();
}

async function getAll() {
    return await Record.find().select('-hash');
}

async function getById(id) {
    return await Record.findById(id).select('-hash');
}

async function update(id, record) {
    const dbrecord = await Record.findById(id);

    // validate
    if (!user) throw 'User not found';

    Object.assign(dbrecord, record);

    await dbrecord.save();
}

async function _delete(id) {
    await Record.findByIdAndRemove(id);
}