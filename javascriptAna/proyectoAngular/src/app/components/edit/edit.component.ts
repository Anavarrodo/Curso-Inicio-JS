import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../service/project.service';
import { UploadService } from '../../service/upload.service';
import { Global } from '../../service/global';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [
    ProjectService,
    UploadService
  ]
})
export class EditComponent implements OnInit {

  public tittle: String
  public project: Project
  public status: String
  public fileToUpload: Array<File>
  public save_project;
  public url: String;
 


  constructor(

      private _projectService : ProjectService,
      private _uploadService : UploadService,
      private _router: Router,
      private _route: ActivatedRoute

  ) { 
    
      this.tittle = 'Editar Proyecto';
      this.url = Global.url;
      
      
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getProyect(id);
    })
  }


  getProyect(id){
      this._projectService.getProject(id).subscribe(
        result => {
          this.project = result.project
        },
        error => {
          console.log(<any>error)
        }
      )
  }

  onSubmit(){
    this._projectService.editProject(this.project).subscribe(
          response => {
                
            if(response.project){

              // Subir imagen 
              if(this.fileToUpload){

                this._uploadService.makeFileRequest(Global.url + 'upload-image/' + response.project._id, [], this.fileToUpload, 'image')
                .then((result: any) => {
                  this.status = 'succes'
                  this.save_project = result.project;
                  
                }); 
              }else{
                this.status = 'succes'
                  this.save_project = response.project;
              }
            }else{
              this.status = 'failed'
            }
        },
        error => {
            console.log(<any>error)
        }
    )
  }

  fileChangeEvent(fileInput: any){
    this.fileToUpload = <Array<File>>fileInput.target.files;
  }

}
