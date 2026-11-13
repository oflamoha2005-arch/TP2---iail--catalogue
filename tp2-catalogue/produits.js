// ============================================================
// TP2 autonome : Logique métier - Gestion d'un catalogue
// Module : Développement mobile avec React Native (IAIL S5)
// ============================================================

// 02. Données de départ
const produits = [
  { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
  { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
  { id: 3, nom: "Écran", categorie: "Informatique", prix: 900, stock: 0 },
  { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 }
];

// Défi supplémentaire : validation des données
function estValide(produit) {
  return (
    typeof produit.prix === "number" &&
    Number.isFinite(produit.prix) &&
    produit.prix >= 0 &&
    typeof produit.stock === "number" &&
    Number.isFinite(produit.stock) &&
    produit.stock >= 0
  );
}

// Vérification de l'intégrité des données du catalogue
const donneesValides = produits.every(estValide);
if (!donneesValides) {
  console.error("Erreur : le catalogue contient des données invalides.");
}

// ------------------------------------------------------------
// 1. Affichage du catalogue (nom et prix)
// ------------------------------------------------------------
console.log("=== 1. Catalogue des produits ===");
produits.forEach((produit) => {
  console.log(`- ${produit.nom} : ${produit.prix} MAD`);
});

// ------------------------------------------------------------
// 2. Disponibilité (produits avec stock > 0)
// ------------------------------------------------------------
console.log("\n=== 2. Produits disponibles ===");
const produitsDisponibles = produits.filter((produit) => produit.stock > 0);

console.log(`Nombre de produits disponibles : ${produitsDisponibles.length}`);
produitsDisponibles.forEach((p) => {
  console.log(`- ${p.nom} (en stock : ${p.stock})`);
});

// ------------------------------------------------------------
// 3. Valeur totale du stock avec reduce()
// ------------------------------------------------------------
console.log("\n=== 3. Valeur totale du stock ===");
const valeurTotaleStock = produits.reduce((total, produit) => {
  return total + produit.prix * produit.stock;
}, 0);

console.log(`Valeur totale du stock : ${valeurTotaleStock} MAD`);

// ------------------------------------------------------------
// 4. Produit disponible le moins cher (avec déstructuration)
// ------------------------------------------------------------
console.log("\n=== 4. Produit disponible le moins cher ===");

function trouverProduitMoinsCher(liste) {
  if (liste.length === 0) {
    return null;
  }
  return liste.reduce((produitMin, produitCourant) => {
    return produitCourant.prix < produitMin.prix ? produitCourant : produitMin;
  });
}

const produitMoinsCher = trouverProduitMoinsCher(produitsDisponibles);

if (produitMoinsCher) {
  // Déstructuration des propriétés de l'objet
  const { nom, prix } = produitMoinsCher;
  console.log(`Produit disponible le moins cher : ${nom} (${prix} MAD)`);
} else {
  console.log("Aucun produit n'est disponible.");
}

// ------------------------------------------------------------
// 5. Résumé textuel avec map()
// ------------------------------------------------------------
console.log("\n=== 5. Résumé du catalogue ===");
const resume = produits.map((produit) => {
  return `${produit.nom} - ${produit.prix} MAD - ${produit.stock} unités`;
});

resume.forEach((ligne) => console.log(ligne));

