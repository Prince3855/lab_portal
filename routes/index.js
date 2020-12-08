const express = require('express');
const router = express.Router();

const { asyncErrorHandler } = require('../middlewares/index');
const { getHome ,
    getProject,
    getAcheivments,
    getMember,
    getNews,
    getBlog

} = require('../controllers/index');

/* GET home page. */
router.get('/', asyncErrorHandler(getHome));

/* GET Projects page. */
router.get('/projects', asyncErrorHandler(getProject));

/* GET Acheivments page. */
router.get('/acheivments', asyncErrorHandler(getAcheivments));

/* GET Members page. */
router.get('/members', asyncErrorHandler(getMember));

/* GET News page. */
router.get('/news', asyncErrorHandler(getNews));

/* GET Blogs page. */
router.get('/blogs', asyncErrorHandler(getBlog));

module.exports = router;