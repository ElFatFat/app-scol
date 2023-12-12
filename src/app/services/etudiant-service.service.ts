import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {
  public tabEtud = [
    new Etudiant("Dupont", "Jean", "rue de la paix", "75000", "Paris", "jeandupont@gmail.com", "M", 25, 1),
    new Etudiant("Althommme", "Gilbert", "rue des beaux arts", "69000", "Lyon", "althommegilbert@gmail.com", "M", 30, 2),
    new Etudiant("Durand", "Marie", "rue de la liberté", "13000", "Marseille", "durantmarie@gmail.com", "F", 20, 3),
    new Etudiant("Dupuis", "Jeanne", "rue de la paix", "75000", "Paris", "dupuisjeanne@gmail.com", "F", 25, 4),
    new Etudiant("Lefebvre", "Jean", "rue de la paix", "75000", "Paris", "lefebvrejean@gmail.com", "M", 25, 5),
    new Etudiant("Leroy", "Jean", "rue de la dynastie", "77500", "Chelles", "leroyjean@gmail.com", "M", 25, 6)
  ]

  constructor() { }
}
