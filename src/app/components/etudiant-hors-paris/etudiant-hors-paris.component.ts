import { Component, OnInit } from '@angular/core';
import { EtudiantServiceService } from '../../services/etudiant-service.service';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrls: ['./etudiant-hors-paris.component.css']
})
export class EtudiantHorsParisComponent implements OnInit{

  tabEtud?: Etudiant[];
  etudiant?: Etudiant;
  
  constructor(private etudiantService: EtudiantServiceService) { }
  
  ngOnInit(): void {
    this.tabEtud = this.etudiantService.tabEtud;
  }
}
