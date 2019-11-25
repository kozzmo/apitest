select
   e.groupe
  , sum(e.points) as 'PTS'
  , e.nom
  , sum(e.played) as 'P'
  , sum(e.win) as 'W'
  , sum(e.draw) as 'D'
  , sum(e.lose) as 'L' 
  , sum(e.goals) as 'F'
  , sum(e.against) as 'A'
  , sum(e.goals) - sum(e.against) as 'GD'
from
   (
     SELECT
       e1.groupe
       , e1.nom
	   , sum(1) as 'played'
       , sum(
            case
              when m.but1 > m.but2
                then '3'
              when m.but1 < m.but2
                then '0'
              when m.but1 = m.but2
                then '1'
            END)
       as 'points'
	   , sum(case when m.but1 > m.but2 then 1 else 0 end) as 'win'
	   , sum(case when m.but1 = m.but2 then 1 else 0 end) as 'draw'
	   , sum(case when m.but1 < m.but2 then 1 else 0 end) as 'lose'
	   , sum(but1) as 'goals'
	   , sum(but2) as 'against'
     from
       MATCHS m
       join
         EQUIPES e1
         on
            m.acr1 = e1.Acronyme AND e1.annee = '2018'
			where m.but1 != ' ' and m.but2 != ' ' and m.type = '1'
     group by
       e1.groupe
       , e1.nom
     UNION ALL
     SELECT
       e2.groupe
       , e2.nom
	   , sum(1) as 'played'
       , sum(
            case
              when m.but1 > m.but2
                then '0'
              when m.but1 < m.but2
                then '3'
              when m.but1 = m.but2
                then '1'
            END)
       as 'points'
	   , sum(case when m.but1 < m.but2 then 1 else 0 end) as 'win'
	   , sum(case when m.but1 = m.but2 then 1 else 0 end) as 'draw'
	   , sum(case when m.but1 > m.but2 then 1 else 0 end) as 'lose'
	   , sum(but2) as 'goals'
	   , sum(but1) as 'against'
     from
       MATCHS m
       join
         EQUIPES e2 
         on
            m.acr2 = e2.Acronyme AND e2.annee = '2018'
			where m.but1 != ' ' and m.but2 != ' ' and m.type = '1'  
     group by
       e2.groupe
       , e2.nom
	          UNION ALL
       SELECT 
		eq.groupe
       , eq.nom
	   , 0 as 'played'
       , 0 as 'points'
	   , 0 as 'win'
	   , 0 as 'draw'
	   , 0 as 'lose'
	   , 0 as 'goals'
	   , 0 as 'against'
       FROM EQUIPES eq where eq.annee = '2018'
   )
   e
group by
   e.groupe
  , e.nom
order by
   1 asc, 2 desc, 10 desc, 5 desc, 8 desc, 3 asc 