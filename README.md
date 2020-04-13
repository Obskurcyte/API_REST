# API_REST

Une API REST codée en NodeJS à un seul endpoint qui accepte un nombre entier en paramètre et
retourne un objet JSON de la forme suivante où squareRoot est la racine carrée de ce nombre et primes la liste de
tous les nombres premiers inférieurs ou égaux à ce nombre :
{
“squareRoot”: …,
“primes”: []
}
Si le nombre n’est pas un entier positif, vous retournerez une erreur HTTP de status code 400 avec un message
d’erreur.
