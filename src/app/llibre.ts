export class Llibre {
  nom!: string

  tematiques: string[] = []

  constructor(nom: string, tematica1: string,tematica2: string, tematica3: string ) {
    this.nom = nom;
    this.tematiques.push(tematica1)
    this.tematiques.push(tematica2)
    this.tematiques.push(tematica3)
  }
}
