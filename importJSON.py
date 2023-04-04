import json
import requests

url = "https://apiv3.apifootball.com/?action=get_players&player_name=Messi&APIkey=3f9859f373c1a1ab32e64cc8aa2414ad547f8521d8308e5c206ae7095e540ba4"

response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    players = []

    for player in data:
        nom = player["player_name"]
        club = player["team_name"]
        poste = player["player_type"]
        age = player["player_age"]
        numero = player["player_number"]

        players.append({
            "id": len(players) + 1,
            "nom": nom,
            "club": club,
            "numero": numero,
            "poste": poste
        })

    output = {
        "joueurs": players
    }

    with open("joueurs.json", "w") as f:
        json.dump(output, f, indent=2)

else:
    print("Une erreur s'est produite lors de la demande.")
