SELECT M.id AS IDMATCH, P.prono, DATE_FORMAT(M.date, '%d/%m %H:%i') AS datematch, E1.nom AS E1nom, M.but1 AS E1but, M.but2 AS E2but, E2.nom AS E2nom, M.acr1 AS M1acr1, 
M.acr2 AS M2acr2, M.TOPMATCH AS TOPMATCH
FROM MATCHS M, EQUIPES E1, EQUIPES E2, PRONOS P 
          WHERE M.acr1 = E1.Acronyme AND M.acr2 = E2.Acronyme
AND (M.id = P.match or P.match IS NULL) 
            AND P.pseudo =  ':pseudo' 
and M.type = '1'
UNION
  SELECT M.id AS IDMATCH, null, DATE_FORMAT(M.date, '%d/%m %H:%i') AS datematch, E1.nom AS E1nom, M.but1 AS E1but, M.but2 AS E2but, E2.nom AS E2nom, M.acr1 AS M1acr1, 
              M.acr2 AS M2acr2, M.TOPMATCH AS TOPMATCH
              FROM MATCHS M, EQUIPES E1, EQUIPES E2
              WHERE M.acr1 = E1.Acronyme AND M.acr2 = E2.Acronyme
              and M.type = '1'
              AND NOT EXISTS (select 1 from PRONOS where pseudo =  ':pseudo' and PRONOS.match = M.id)
  ORDER BY 1 ASC 