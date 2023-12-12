import { ISpecialite } from "./ispecialite";

export class Specialite implements ISpecialite{
    constructor(
        public _libelle:string,
        public _idSpec:number
    ){}

    public get libelle():string{
        return this._libelle;
    }
    public set libelle(libelle:string){
        this._libelle = libelle;
    }

    public get idSpec():number{
        return this._idSpec;
    }
    public set idSpec(idSpec:number){
        this._idSpec = idSpec;
    }
}
