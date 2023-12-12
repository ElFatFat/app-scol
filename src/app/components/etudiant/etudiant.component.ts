import { Component, OnInit } from '@angular/core';
import { EtudiantServiceService } from '../../services/etudiant-service.service';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit{

  tabEtud?: Etudiant[];
  etudiant?: Etudiant;

  constructor(private etudiantService: EtudiantServiceService) { }

  ngOnInit(): void {
    this.tabEtud = this.etudiantService.tabEtud;
  }

}
