import { Garage } from "./classes/Garage.js";
import { VOITURES_INITIALES } from "./data/voitures.js";
import { Voiture } from "./classes/Voiture.js";

const garage = new Garage("AutoPlus");

// Charger les voitures initiales
VOITURES_INITIALES.forEach((v) => garage.ajouterVoiture(v));


garage.afficherVoitures();

const nouvelle = new Voiture(4, "Dacia", "Sandero", 2023, 95000);
garage.ajouterVoiture(nouvelle);

garage.supprimerVoiture(2);