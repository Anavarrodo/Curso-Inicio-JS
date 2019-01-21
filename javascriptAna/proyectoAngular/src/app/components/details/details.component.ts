import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../service/project.service';
import { Global } from '../../service/global';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [
    ProjectService
  ]
})
export class DetailsComponent implements OnInit {

  public url: String
  public project: Project
  public confirm: Boolean;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = Global.url
    this.confirm = false
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

  deleteProject(id){
    this._projectService.deleteService(id).subscribe(
      response => {
        if(response.project){
          this._router.navigate(['/proyectos'])
        }
      },
      error => {
        console.log(<any>error)
      }
    )
  }

  setConfirm(confirm){
    this.confirm = confirm
  }
}
