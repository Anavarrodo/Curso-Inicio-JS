import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../service/project.service';
import { UploadService } from '../../service/upload.service';
import { Global } from '../../service/global';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [
    ProjectService,
    UploadService
  ]
})
export class CreateComponent implements OnInit {

      public tittle: String
      public project: Project
      public status: String
      public fileToUpload: Array<File>
      public save_project;


      constructor(

          private _projectService : ProjectService,
          private _uploadService : UploadService

      ) { 
        
          this.tittle = 'Crear Proyecto'
          this.project = new Project ("", "", "", "", "", 2019, "")
      }

  ngOnInit() {
  }

  onSubmit(form){

      // Guardar los datos
      this._projectService.saveProject(this.project).subscribe(
          response => {
            
              if(response.project){

                // Subir imagen 
                this._uploadService.makeFileRequest(Global.url + 'upload-image/' + response.project._id, [], this.fileToUpload, 'image')
                .then((result: any) => {
                  this.status = 'succes'
                  this.save_project = result.project;
                  form.reset()
                }); 
              }else{
                this.status = 'failed'
              }
          },
          error => {
              console.log(<any>error)
          }
      )
  };

  fileChangeEvent(fileInput: any){
    this.fileToUpload = <Array<File>>fileInput.target.files;
  }
}
