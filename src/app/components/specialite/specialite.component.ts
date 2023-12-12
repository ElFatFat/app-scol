import { Component, OnInit } from '@angular/core';
import { SpecServiceService } from 'src/app/services/spec-service.service';
import { Specialite } from 'src/app/models/specialite';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit{
  tabSpec? : Specialite[];
  constructor(private specService: SpecServiceService){}
  ngOnInit(): void {
    this.tabSpec = this.specService.tabSpec;
  }

}
