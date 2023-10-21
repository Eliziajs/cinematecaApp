import { Component, OnInit } from '@angular/core';
import { Diretor } from 'src/app/domain/Diretor';

@Component({
  selector: 'app-diretor-form',
  templateUrl: './diretor-form.component.html',
  styleUrls: ['./diretor-form.component.css']
})
export class DiretorFormComponent implements OnInit{

  diretor!: Diretor;
  succsses: boolean;

}
