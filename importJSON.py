import requests

# Remplacez YOUR_API_KEY par votre clé d'API
url = "https://apiv3.apifootball.com/?action=get_players&player_name=Messi&APIkey=3f9859f373c1a1ab32e64cc8aa2414ad547f8521d8308e5c206ae7095e540ba4"

# Envoyez une demande GET pour obtenir les données JSON
response = requests.get(url)

# Vérifiez que la réponse est valide
if response.status_code == 200:

    # Convertir la réponse JSON en un objet Python
    data = response.json()

    # Parcourir les données pour extraire les attributs que vous souhaitez récupérer
    for player in data:
        nom = player["player_name"]
        equipe = player["team_name"]
        poste = player["player_type"]
        age = player["player_age"]
        numero = player["player_number"]

        # Imprimer les attributs extraits pour chaque joueur
        print("Nom :", nom)
        print("Équipe :", equipe)
        #print("Poste :", poste)
        print("Âge :", age)
        print("Numéro :", numero)
        print("\n")

else:
    print("Une erreur s'est produite lors de la demande.")