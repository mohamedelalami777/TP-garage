export class Voiture {
  constructor(id, marque, modele, annee, prix) {
    this.id = id;
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.prix = prix;
  }

  afficher() {
    console.log(
      `Voiture [ID:${this.id}] ${this.marque} ${this.modele} (${this.annee}) - ${this.prix} MAD`
    );
  }
}
