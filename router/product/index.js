const express = require('express');
const controller = require('./controller')

const router = express.Router();
const {
    getAll,
    getById,
    insert,
    upsert,
    update,
    remove
} = controller;

router.get('/', getAll);
router.get('/', getById);
router.post('/', insert);
router.put('/:id', upsert );
router.patch('/:id', update);
router.delete('/:id' , remove);

module.exports = router;