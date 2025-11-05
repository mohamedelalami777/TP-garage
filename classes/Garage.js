import { Voiture } from "./Voiture.js";

export class Garage {
  constructor(nom) {
    this.nom = nom;
    this.voitures = []; 
  }

  ajouterVoiture(voiture) {
    if (!(voiture instanceof Voiture)) {
      console.log("Vous devez ajouter une instance de Voiture.");
      return;
    }
    this.voitures.push(voiture);
    console.log(`${voiture.marque} ${voiture.modele} ajoutée au garage.`);
  }

  supprimerVoiture(id) {
    const index = this.voitures.findIndex((v) => v.id === id);
    if (index === -1) {
      console.log(`Aucune voiture avec l'ID ${id}.`);
      return;
    }
    const removed = this.voitures.splice(index, 1)[0];
    console.log(`${removed.marque} ${removed.modele} supprimée du garage.`);
  }

  afficherVoitures() {
    if (this.voitures.length === 0) {
      console.log(` Aucune voiture dans le garage ${this.nom}.`);
      return;
    }
    console.log(` Liste des voitures dans le garage ${this.nom}:`);
    this.voitures.forEach((v) => v.afficher());
  }

}
