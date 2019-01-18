import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../service/project.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [
    ProjectService
  ]
})
export class CreateComponent implements OnInit {

  public tittle: String
  public project: Project


  constructor(
    private _projectService : ProjectService
  ) { 
    
    this.tittle = 'Crear Proyecto'
    this.project = new Project ("", "", "", "", "", 2019, "")
  }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.project)
  }
}
