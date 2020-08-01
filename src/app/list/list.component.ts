import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { FormService} from '../form.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service:FormService) { }
   data:any=[];
  
  ngOnInit(): void {
    this.service.senddata().subscribe(x=>this.data=x)
  }
  

}
