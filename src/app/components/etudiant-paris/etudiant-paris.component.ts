import { Component, OnInit } from '@angular/core';
import { EtudiantServiceService } from '../../services/etudiant-service.service';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-etudiant-paris',
  templateUrl: './etudiant-paris.component.html',
  styleUrls: ['./etudiant-paris.component.css']
})
export class EtudiantParisComponent {

  tabEtud?: Etudiant[];
  etudiant?: Etudiant;
  
  constructor(private etudiantService: EtudiantServiceService) { }
  
  ngOnInit(): void {
    this.tabEtud = this.etudiantService.tabEtud;
  }
}
