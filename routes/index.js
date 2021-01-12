const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../cloudinary/index');
const upload = multer({ storage });

const { asyncErrorHandler } = require('../middlewares/index');
const { getHome ,
    getProject,
    getCreateProject,
    postCreateProject,
    getAcheivments,
    getMember,
    getNews,
    getBlog

} = require('../controllers/index');

/* GET home page. */
router.get('/', asyncErrorHandler(getHome));

/* GET Projects page. */
router.get('/projects', asyncErrorHandler(getProject));

/* GET createProject page. */
router.get('/createProject', getCreateProject);

/* POST createProject page. */
router.post('/createProject',upload.single('image'), asyncErrorHandler(postCreateProject));

/* GET Acheivments page. */
router.get('/acheivments', asyncErrorHandler(getAcheivments));

/* GET Members page. */
router.get('/members', asyncErrorHandler(getMember));

/* GET News page. */
router.get('/news', asyncErrorHandler(getNews));

/* GET Blogs page. */
router.get('/blogs', asyncErrorHandler(getBlog));

module.exports = router;