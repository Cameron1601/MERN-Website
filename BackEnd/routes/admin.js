const express = require('express');
const router = express.Router();
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const {userProfile } = require("../controllers/auth");

router.get('/admin/isAdmin',  isAuthenticated, isAdmin, userProfile);

module.exports = router;