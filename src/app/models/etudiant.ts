import { IEtudiant } from "./ietudiant";

export class Etudiant implements IEtudiant{
    constructor(
        public _nom:string,
        public _prenom:string,
        public _rue:string,
        public _cp:string,
        public _ville:string,
        public _courriel:string,
        public _genre:string,
        public _age:number,
        public _idCand: number
    ){}

    public get nom():string{
        return this._nom;
    }
    public set nom(nom:string){
        this._nom = nom;
    }

    public get prenom():string{
        return this._prenom;
    }
    public set prenom(prenom:string){
        this._prenom = prenom;
    }

    public get rue():string{
        return this._rue;
    }
    public set rue(rue:string){
        this._rue = rue;
    }

    public get cp():string{
        return this._cp;
    }
    public set cp(cp:string){
        this._cp = cp;
    }

    public get ville():string{
        return this._ville;
    }
    public set ville(ville:string){
        this._ville = ville;
    }

    public get courriel():string{
        return this._courriel;
    }
    public set courriel(courriel:string){
        this._courriel = courriel;
    }

    public get genre():string{
        return this._genre;
    }
    public set genre(genre:string){
        this._genre = genre;
    }

    public get age():number{
        return this._age;
    }
    public set age(age:number){
        this._age = age;
    }

    public get idCand():number{
        return this._idCand;
    }
    public set idCand(idCand:number){
        this._idCand = idCand;
    }
}
