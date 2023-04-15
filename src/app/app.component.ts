import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import * as pick3 from './pick3.json';
import * as pick4 from './pick4.json';

const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  pick3a = Object(pick3)
  pick4a = Object(pick4)
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  datePickerForm: FormGroup
  mods = [{id:1,color:'red',name:'Diagonales'},{id:2,color:'blue',name:'Lunes'}, {id:3,color:'yellow',name:'Dias de la semana'}]
  constructor(private fb: FormBuilder){
    this.datePickerForm = this.fb.group({
        since: new FormControl(),
        to: new FormControl(),
        mod: new FormControl(),
        time: new FormControl(),
      })
  }

  ngOnInit() {
  }

}