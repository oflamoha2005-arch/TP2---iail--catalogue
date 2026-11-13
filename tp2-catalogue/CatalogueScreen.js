import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CatalogueScreen() {
  // Données du catalogue
  const produits = [
    { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
    { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
    { id: 3, nom: "Écran", categorie: "Informatique", prix: 900, stock: 0 },
    { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 }
  ];

  // Calculs de logique métier
  const nbDisponibles = produits.filter((p) => p.stock > 0).length;
  const valeurStock = produits.reduce((acc, p) => acc + p.prix * p.stock, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Catalogue CampusStock</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Produits disponibles :</Text>
        <Text style={styles.valeur}>{nbDisponibles}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Valeur totale du stock :</Text>
        <Text style={styles.valeur}>{valeurStock} MAD</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  titre: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#1a365d',
  },
  card: {
    width: '90%',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  label: {
    fontSize: 15,
    color: '#4a5568',
  },
  valeur: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2b6cb0',
    marginTop: 4,
  },
});

