// fonction qui permet de savoir si un nombre est premier

function nbrPremier(nbr) {
    for(var i = 2; i < nbr; i++)
        if(nbr%i === 0) return false;
    return nbr > 1;
}

// fonction qui prend en paramètre un nombre et renvoie la liste des nombres premiers inférieurs ou égaux à ce nombre

function listePremiers(nbr) {
    let L = [];
    let i;
    for (i=0; i<nbr; i++){
        if (nbrPremier(i)){
            L.push(i);
        }
    }
    return L;
}

module.exports = listePremiers;
