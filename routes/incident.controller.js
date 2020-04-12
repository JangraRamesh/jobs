const express = require('express');
const router = express.Router();
const recordService = require('../services/incident.service');
const multer = require('multer');
var storage = multer.diskStorage({
    // destination
    destination: function (req, file, cb) {
      cb(null, '/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  var upload = multer({ storage: storage });

// routes
router.post('/', upload.array("photos[]", 12), create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
    console.log(req.body);
    recordService.incident(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    console.log('reading.....');
    recordService.getAll()
        .then(records => res.json(records))
        .catch(err => next(err));
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