const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

	res.render("store.ejs", {title: "Store"});
});

module.exports = router;
