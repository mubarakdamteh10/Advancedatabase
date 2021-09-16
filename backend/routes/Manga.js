const express = require('express');

const { check } = require('express-validator')
const router = express.Router();

const MangaController = require('../controllers/Manga');
const CategoryController = require('../controllers/Category');
const CommentController = require('../controllers/Comment');
const UserController = require('../controllers/Users');
const EpisodeController = require('../controllers/Episode');
const HistoryController = require('../controllers/History');
// /admin/add-product => GET


router.get('/searchManga', MangaController.getSearchMangas);
router.get('/searchCategory', CategoryController.getSearchCategory);
router.get('/searcUser', UserController.getSearchUsers);
router.get('/searchComment', CommentController.getSearchComment); 
router.get('/searchHistory', HistoryController.getSearchHistory);
router.get('/searchEpisode', EpisodeController.getSearchEpisode);


///////////////////////////////////////....Insert....////////////////////////////////////////////////////////

router.post('/insertManga', [
    check('name').trim().not().isEmpty().withMessage("Manga name is required"),
    check('writer').trim().not().isEmpty().withMessage("Manga writer is required"),
    check('year').isFloat({ gt: 0 }).withMessage("year than zero"),
    check('description').trim().not().isEmpty().withMessage("Manga description is required"),
    check('cover').trim().not().isEmpty().withMessage("Manga cover is required"),
    check('score').isFloat({ gt: 0 }).withMessage("score than zero"),
    check('view').isFloat({ gt: 0 }).withMessage("view than zero"),
    check('categories').isArray().not().withMessage("Manga categories is required")

], MangaController.postAddMangas);



router.post('/insertCategory', [

    check('name').trim().not().isEmpty().withMessage("Manga name is required")
    
],CategoryController.postAddCategory);


router.post('/insertComment', [

    check('manga_id').not().isEmpty().withMessage('manga_id is require'),
    check('user_id').not().isEmpty().withMessage('manga_id is require'),
    check('comment').trim().not().isEmpty().withMessage("Comment  is required"),
    check('date').trim().not().isEmpty().withMessage("Date  is required")
    
],CommentController.postAddComment);



router.post('/insertUser', [

    check('user_name').trim().not().isEmpty().withMessage("username  is required"),
    check('password').isFloat({ gt: 0 }).withMessage("Password than zero"),
    check('favorite').not().isEmpty().withMessage('manga_id is require')
    
],UserController.postAddUsers);



router.post('/insertEpisode', [

    check('manga_ep').isArray().not().withMessage("manga_ep is required"),
    check('manga_id').not().isEmpty().withMessage('manga_id is require')
    
],EpisodeController.postAddEpisode);

router.post('/insertHistory', [
    check('user_id').not().isEmpty().withMessage('user_id is require'),
    check('history').not().isEmpty().withMessage('history is require')
], HistoryController.postAddHistory);


////////////////////////////////////////////....Update....//////////////////////////////////////////////////////////////

router.post('/updatemangas', 
[
    
    check('Manga_id').not().isEmpty().withMessage('manga_id is require'),
    check('name').trim().not().isEmpty().withMessage("Manga name is required"),
    check('writer').trim().not().isEmpty().withMessage("Manga writer is required"),
    check('year').isFloat({ gt: 0 }).withMessage("year than zero"),
    check('description').trim().not().isEmpty().withMessage("Manga description is required"),
    check('cover').trim().not().isEmpty().withMessage("Manga cover is required"),
    check('score').isFloat({ gt: 0 }).withMessage("score than zero"),
    check('view').isFloat({ gt: 0 }).withMessage("view than zero"),
    check('categories').isArray().not().withMessage("Manga categories is required")
], MangaController.postUpdateMangas);


router.post('/updatecategory', 
[
    check('Category_id').not().isEmpty().withMessage("empty"),
    check('name').trim().not().isEmpty().withMessage("Manga name is required")
], CategoryController.postUpdateCategory);


router.post('/updatecomment', 
[
    check('Comment_id').not().isEmpty().withMessage("empty"),
    check('manga_id').not().isEmpty().withMessage("episode than zero"),
    check('user_id').not().isEmpty().withMessage("episode than zero"),
    check('comment').trim().not().isEmpty().withMessage("manga name is required"),
    check('date').trim().not().isEmpty().withMessage("Date  is required")
], CommentController.postUpdateComment);

router.post('/updateUser', [
    check('Users_id').not().isEmpty().withMessage("empty"),
    check('user_name').trim().not().isEmpty().withMessage("username  is required"),
    check('password').isFloat({ gt: 0 }).withMessage("Password than zero"),
    check('favorite').not().isEmpty().withMessage('manga_id is require')
    
],UserController.postUpdateUsers);

router.post('/updateEpisode', [

    check('episode_id').not().isEmpty().withMessage('episode_id is require'),
    check('manga_ep').isArray().not().withMessage("manga_ep is required"),
    check('manga_id').not().isEmpty().withMessage('manga_id is require')
    
],EpisodeController.postUpdateEpisode);

router.post('/updateHistory', [
    check('History_id').not().isEmpty().withMessage('History_id is require'),
    check('user_id').not().isEmpty().withMessage('user_id is require'),
    check('history').not().isEmpty().withMessage('history is require')
], HistoryController.postUpdateHistory);

router.get('/deleteManga/:Manga_id', MangaController.getDeleteMangas);
router.get('/deleteUsers/:Users_id', UserController.getDeleteUsers);
router.get('/deleteCategory/:Category_id', CategoryController.getDeleteCategory);
router.get('/deleteComment/:Comment_id', CommentController.getDeleteComment);
router.get('/deleteEpisode/:episode_id', EpisodeController.getDeleteEpisode);
router.get('/deleteHistory/:History_id', HistoryController.getDeleteHistory);



router.get('/updateManga/:Manga_id', MangaController.getUpdateMangas);
router.get('/updateUsers/:Users_id', UserController.getUpdateUsers);
router.get('/updateCategory/:Category_id', CategoryController.getUpdateCategory);
router.get('/updateComment/:Comment_id', CommentController.getUpdateComment);
router.get('/updateEpisode/:episode_id', EpisodeController.getUpdateEpisode);
router.get('/updateHistory/:History_id', HistoryController.getUpdateHistory);





exports.routes = router;