SELECT J.nom as nom, J.position as pos, E.nom as nomEquipe, E.Acronyme as acrEquipe FROM JOUEURS J
JOIN EQUIPES E on J.equipe = E.Acronyme
WHERE J.annee = ':annee' AND E.nom = ':team'
GROUP BY J.nom