import json
import requests

url = "https://apiv3.apifootball.com/?action=get_players&player_name=Messi&APIkey=3f9859f373c1a1ab32e64cc8aa2414ad547f8521d8308e5c206ae7095e540ba4"

response = requests.get(url)

if response.status_code == 200:

    data = response.json()

    # Créer une liste pour stocker les données
    players = []

    # Définir un compteur d'ID
    id_counter = 1

    # Parcourir les données pour extraire les attributs que vous souhaitez récupérer
    for player in data:
        nom = player["player_name"]
        equipe = player["team_name"]
        poste = player["player_type"]
        age = player["player_age"]
        numero = player["player_number"]

        # Ajouter les attributs extraits à la liste avec l'ID auto-incrémenté
        players.append([id_counter, nom, equipe, poste, age, numero])
        
        # Incrémenter l'ID
        id_counter += 1

    # Écrire les données dans un fichier JSON
    with open("joueurs.json", "w") as f:
        json.dump(players, f)

else:
    print("Une erreur s'est produite lors de la demande.")
