'use strict'

var express = require ('express');
var ProjectController = require ('../controllers/project');

var router = express.Router();

var multipart = require ('connect-multiparty');
var multipartMiddleware = multipart ({ uploadDir: ('./uploads' )});

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProyect);
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.removeProject);
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage)

module.exports = router;