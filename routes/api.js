const express = require('express');
const router = express.Router();
const multer = require('multer');
const komikController = require('../controllers/komikController');
const upload = multer({ storage: multer.memoryStorage() });

// Route to create a new komik with image upload
router.post('/komiks', upload.single('image'), komikController.createKomik);

// Route to get all komiks
router.get('/komiks', komikController.getAllKomiks);

// Route to get a komik by ID
router.get('/komiks/:id', komikController.getKomikById);

// Route to update a komik by ID with image upload
router.put('/komiks/:id', upload.single('image'), komikController.updateKomik);

// Route to delete a komik by ID
router.delete('/komiks/:id', komikController.deleteKomik);

module.exports = router;