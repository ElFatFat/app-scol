import { Injectable } from '@angular/core';
import { Specialite } from '../models/specialite';

@Injectable({
  providedIn: 'root'
})
export class SpecServiceService {
  tabSpec = [
    new Specialite("Informatique", 1),
    new Specialite("Electronique", 2),
    new Specialite("Mecanique", 3),
    new Specialite("Mathematiques", 4),
    new Specialite("Physique", 5),
    new Specialite("Chimie", 6)
  ]


  constructor() { }
}
