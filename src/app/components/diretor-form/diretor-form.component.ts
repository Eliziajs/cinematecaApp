import { Component } from '@angular/core';
import { Diretor } from 'src/app/domain/Diretor';
import { DiretorService } from 'src/app/services/diretor.service';

@Component({
  selector: 'app-diretor-form',
  templateUrl: './diretor-form.component.html',
  styleUrls: ['./diretor-form.component.css']
})
export class DiretorFormComponent{

  diretor!: Diretor;
  succsses!: boolean;

  constructor(diretorService:DiretorService){}

}
