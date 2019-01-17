'use strict'

var ProjectSchema = require ('../models/project');
var fs = require ('fs');

var controller = {

    home: function(req, res){
        return res.status(200).send({
            message: 'Soy la home'
        });
    },

    test: function(req, res){
        return res.status(200).send({
            message: 'Soy el método o acción test del controlador de project'
        });
    },

    saveProject: function(req, res){
        var project = new ProjectSchema();
        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.langs = params.langs;
        project.year = params.year;
        project.image = null;

        project.save((err, projectStored) => {
            if(err){
                return res.status(500).send({message: 'Error al guardar el documento'})
            }else if(!projectStored){
                return res.status(404).send({message: 'No se ha podido guardar el documento'})
            }else{
                return res.status(200).send({project: projectStored})
            };
        });
    },
//get project
    getProyect: function(req, res){
        var projectId = req.params.id;

        if(projectId == null){
            return res.status(404).send({message: 'El proyecto no existe'})
        };

        ProjectSchema.findById(projectId, (err, project) => {
            if(err){
                return res.status(500).send({message: 'Error al devolver los datos'})
            }else if(!project){
                return res.status(404).send({message: 'El proyecto no existe'})
            }else{
                return res.status(200).send({ project })
            };
        });
    },

    getProjects: function(req, res){
        ProjectSchema.find({}).sort('year').exec((err, projects) => {
            if(err){
                return res.status(500).send({message: 'Error al devolver los datos'})
            }else if(!projects){
                return res.status(404).send({message: 'No hay proyectos para mostrar'})
            }else{
                return res.status(200).send({ projects })
            };
        });
    },

    updateProject: function(req, res){
        var projectId = req.params.id;
        var update = req.body;

        ProjectSchema.findByIdAndUpdate(projectId, update, {new: true}, (err, projectUpdate) => {
            if(err){
                return res.status(500).send({message: 'Error al actualizar'})
            }else if(!projectUpdate){
                return res.status(404).send({message: 'No existe el proyecto a actualizar'})
            }else{
                return res.status(200).send({ project: projectUpdate })
            };
        });
    },

    removeProject: function(req, res){
        var projectId = req.params.id;

        ProjectSchema.findByIdAndRemove(projectId, (err, projectRemove) => {
            if(err){
                return res.status(500).send({message: 'Error al eliminar'})
            }else if(!projectRemove){
                return res.status(404).send({message: 'No existe el proyecto a eliminar'})
            }else{
                return res.status(200).send({ project: projectRemove })
            };
        });
    },
    
  uploadImage: function(req, res){
      var projectId = req.params.id;
      var fileName = "Imagen no cargada...";

      if(req.files){
         var filePath = req.files.image.path;
         var fileSplit = filePath.split('\\');
         var fileName = fileSplit[1];
         var extSplit = fileName.split('\.');
         var fileExt = extSplit[1];

            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
                ProjectSchema.findByIdAndUpdate(projectId, { image: fileName }, { new: true }, (err, projectUpdate) => {
                    if(err){
                        return res.status(500).send({message: 'Error al subir la imagen'})
                    }else if(!projectUpdate){
                        return res.status(404).send({message: 'No existe el proyecto'})
                    }else{
                        return res.status(200).send({ project: projectUpdate })
                    };
                 })
            }else{
                fs.unlink(filePath, (err) => {
                    return res.status(200).send({ message: 'La extensión del archivo no es válida' })
                }) 
            }
      }else{
          return res.status(200).send({ message: fileName })
      };
  }
};

module.exports = controller;