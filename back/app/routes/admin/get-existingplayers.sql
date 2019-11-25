SELECT JOUEURS.nom as nomJoueur, JOUEURS.position as posJoueur, EQUIPES.nom as nomEquipe FROM JOUEURS
JOIN EQUIPES on EQUIPES.Acronyme = JOUEURS.equipe
WHERE EQUIPES.nom = ':team' 
GROUP BY JOUEURS.nom ORDER BY JOUEURS.nom asc 