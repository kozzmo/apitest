select * from MATCHS M
LEFT JOIN PRONOS P on M.id = P.match and P.pseudo = ':pseudo'
where M.date > '2019%'
 