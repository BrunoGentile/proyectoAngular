import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillService } from 'src/app/services/api-rest/skill.service';
import { Skill } from 'src/app/services/interface/Skill';
import { SkillsModalComponent } from '../modales/skills-modal/skills-modal.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  

 //inyecta el servicio de modal
 constructor(private skillService:SkillService,  private modalService: NgbModal) {}
  
 skill!: any [] ;

 getById(id: number) {
   this.skillService.getById(id).subscribe (
     data => { this.skill = data; }
   );
 }

 getAll() {
   this.skillService.getAll().subscribe (
     data => { this.skill = data; }
   );
 }
 delete(id: number) {
   this.skillService.delete(id).subscribe (
     data => { this.skill = data; }
   );
 }

 save(skill:any) {
   this.skillService.save(skill).subscribe (
     data => { this.skill = data; }
   );
 }

 update(id: number, skill: any) {
   this.skillService.update(id,skill).subscribe (
     data => { this.skill = data; }
   );
 }


 ngOnInit(): void {this.getAll()}


  skills: any[] = [
 /*   {   porcentaje: 12,
        area: "Git"
  },
    {   porcentaje: 92,
      area: "LIDERAZGO"
  },
  {   porcentaje: 52,
    area: "COMUNICACIÓN"
},
{   porcentaje: 42,
  area: "MYSQL"
},
{   porcentaje: 10,
  area: "JAVA"
},
{   porcentaje: 32,
  area: "ANGULAR"
}*/]; 

abrirModal(){
  //utiliza el metodo open de NgbModal para abrir el modal. El parametro es el componente que se va a mostrar en el modal. "centred" se usa para centrar el modal.
  const modalRef = this.modalService.open(SkillsModalComponent, { centered: true }   );   //{ centered: true }     
  //modalRef.componentInstance.id = id;      pasa el id del elemento que se quiere editar al componente del modal
}

}
