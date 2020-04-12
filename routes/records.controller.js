const express = require('express');
const router = express.Router();
const recordService = require('../services/record.service');

// routes
router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
    recordService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    recordService.getAll()
        .then(records => res.json(records))
        .catch(err => next(err));
}
function getAdvisor(){
    recordService.getAdvisor()
    .then(records =>res.json(records))
    .catch(err=>next(err));    
}

function getById(req, res, next) {
    recordService.getById(req.params.id)
        .then(record => record ? res.json(record) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    recordService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    recordService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}