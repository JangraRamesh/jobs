﻿const express = require('express');
const router = express.Router();
const notificationService = require('../services/notification.service');

// routes
router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.get('/patient/:userId', getByPatientId);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
    notificationService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    notificationService.getAll()
        .then(records => res.json(records))
        .catch(err => next(err));
}

function getById(req, res, next) {
    notificationService.getById(req.params.id)
        .then(record => record ? res.json(record) : res.sendStatus(404))
        .catch(err => next(err));
}

function getByPatientId(req, res, next) {
    notificationService.getByPatientId(req.params.userId)
        .then(records => res.json(records))
        .catch(err => next(err));
}

function update(req, res, next) {
    notificationService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    notificationService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}