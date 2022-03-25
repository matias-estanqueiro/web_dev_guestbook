const express = require('express');
const router = express.Router();

const {
    render_home, 
    render_new_entry, 
    crear_new_entry
} = require('../controllers/guestbook_controllers');

router.get('/', render_home);
router.get('/new_entry', render_new_entry);
router.post('/new_entry', crear_new_entry);

module.exports = router;