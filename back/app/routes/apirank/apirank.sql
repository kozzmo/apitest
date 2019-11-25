SELECT e.pseudo, sum(e.points) as points 
                            FROM (
                            SELECT
                                D.pseudo,
                                (CASE WHEN JGK.id = D.cap THEN 2 * (
                                JGK.but * 10 + JGK.assist + 2*JGK.cs - 2*JGK.cj - 5*JGK.cr - 3*JGK.og - 2*JGK.ghost - JGK.ge + 5*JGK.winner)
                                ELSE 
                                JGK.but * 10 + JGK.assist + 2*JGK.cs - 2*JGK.cj - 5*JGK.cr - 3*JGK.og - 2*JGK.ghost - JGK.ge + 5*JGK.winner 
                                END +
                                CASE WHEN JD1.id = D.cap THEN 2 * (
                                JD1.but * 4 + JD1.assist + 1*JD1.cs - 2*JD1.cj - 5*JD1.cr - 3*JD1.og - 2*JD1.ghost + 5*JD1.winner)
                                ELSE
                                JD1.but * 4 + JD1.assist + 1*JD1.cs - 2*JD1.cj - 5*JD1.cr - 3*JD1.og - 2*JD1.ghost + 5*JD1.winner
                                END    +
                                CASE WHEN JD2.id = D.cap THEN 2 * (    
                                JD2.but * 4 + JD2.assist + 1*JD2.cs - 2*JD2.cj - 5*JD2.cr - 3*JD2.og - 2*JD2.ghost + 5*JD2.winner)
                                ELSE
                                JD2.but * 4 + JD2.assist + 1*JD2.cs - 2*JD2.cj - 5*JD2.cr - 3*JD2.og - 2*JD2.ghost + 5*JD2.winner
                                END    +
                                CASE WHEN JD3.id = D.cap THEN 2 * (
                                JD3.but * 4 + JD3.assist + 1*JD3.cs - 2*JD3.cj - 5*JD3.cr - 3*JD3.og - 2*JD3.ghost + 5*JD3.winner)
                                ELSE
                                JD3.but * 4 + JD3.assist + 1*JD3.cs - 2*JD3.cj - 5*JD3.cr - 3*JD3.og - 2*JD3.ghost + 5*JD3.winner
                                END    +
                                CASE WHEN JD4.id = D.cap THEN 2 * (
                                JD4.but * 4 + JD4.assist + 1*JD4.cs - 2*JD4.cj - 5*JD4.cr - 3*JD4.og - 2*JD4.ghost + 5*JD4.winner)
                                ELSE
                                JD4.but * 4 + JD4.assist + 1*JD4.cs - 2*JD4.cj - 5*JD4.cr - 3*JD4.og - 2*JD4.ghost + 5*JD4.winner
                                END    +
                                CASE WHEN JM1.id = D.cap THEN 2 * (
                                JM1.but * 3 + JM1.assist - 2*JM1.cj - 5*JM1.cr - 3*JM1.og - 2*JM1.ghost + 5*JM1.winner) 
                                ELSE
                                JM1.but * 3 + JM1.assist - 2*JM1.cj - 5*JM1.cr - 3*JM1.og - 2*JM1.ghost + 5*JM1.winner
                                END    +
                                CASE WHEN JM2.id = D.cap THEN 2 * (
                                JM2.but * 3 + JM2.assist - 2*JM2.cj - 5*JM2.cr - 3*JM2.og - 2*JM2.ghost + 5*JM2.winner)
                                ELSE
                                JM2.but * 3 + JM2.assist - 2*JM2.cj - 5*JM2.cr - 3*JM2.og - 2*JM2.ghost + 5*JM2.winner
                                END    +
                                CASE WHEN JM3.id = D.cap THEN 2 * (
                                JM3.but * 3 + JM3.assist - 2*JM3.cj - 5*JM3.cr - 3*JM3.og - 2*JM3.ghost + 5*JM3.winner)
                                ELSE
                                JM3.but * 3 + JM3.assist - 2*JM3.cj - 5*JM3.cr - 3*JM3.og - 2*JM3.ghost + 5*JM3.winner
                                END    +
                                CASE WHEN JM4.id = D.cap THEN 2 * (
                                JM4.but * 3 + JM4.assist - 2*JM4.cj - 5*JM4.cr - 3*JM4.og - 2*JM4.ghost + 5*JM4.winner)
                                ELSE
                                JM4.but * 3 + JM4.assist - 2*JM4.cj - 5*JM4.cr - 3*JM4.og - 2*JM4.ghost + 5*JM4.winner
                                END    +
                                CASE WHEN JA1.id = D.cap THEN 2 * (
                                JA1.but * 2 + JA1.assist - 2*JA1.cj - 5*JA1.cr - 3*JA1.og - 2*JA1.ghost + 5*JA1.winner)
                                ELSE
                                JA1.but * 2 + JA1.assist - 2*JA1.cj - 5*JA1.cr - 3*JA1.og - 2*JA1.ghost + 5*JA1.winner
                                END    +
                                CASE WHEN JA2.id = D.cap THEN 2 * (
                                JA2.but * 2 + JA2.assist - 2*JA2.cj - 5*JA2.cr - 3*JA2.og - 2*JA2.ghost + 5*JA2.winner)
                                ELSE
                                JA2.but * 2 + JA2.assist - 2*JA2.cj - 5*JA2.cr - 3*JA2.og - 2*JA2.ghost + 5*JA2.winner
                                END) AS points
                                FROM DREAMTEAM D JOIN JOUEURS JGK ON D.gk = JGK.id
                                                 JOIN JOUEURS JD1 ON D.def1 = JD1.id
                                                 JOIN JOUEURS JD2 ON D.def2 = JD2.id
                                                 JOIN JOUEURS JD3 ON D.def3 = JD3.id
                                                 JOIN JOUEURS JD4 ON D.def4 = JD4.id
                                                 JOIN JOUEURS JM1 ON D.mil1 = JM1.id
                                                 JOIN JOUEURS JM2 ON D.mil2 = JM2.id
                                                 JOIN JOUEURS JM3 ON D.mil3 = JM3.id
                                                 JOIN JOUEURS JM4 ON D.mil4 = JM4.id
                                                 JOIN JOUEURS JA1 ON D.at1 = JA1.id
                                                 JOIN JOUEURS JA2 ON D.at2 = JA2.id

                            UNION ALL
select DREAMTEAM.pseudo, 
(case when EGA1.classement = '1' then 5
      when EGA1.classement = '2' then 3
      when EGA1.classement = '3' then 0
      when EGA1.classement = '4' then -3
      else 0 end)
      +
(case when EGA2.classement = '1' then 3
      when EGA2.classement = '2' then 5
      when EGA2.classement = '3' then 0
      when EGA2.classement = '4' then -3
      else 0 end)
      +
(case when EGA3.classement = '1' then 0
      when EGA3.classement = '2' then 0
      when EGA3.classement = '3' then 2
      when EGA3.classement = '4' then 0
      else 0 end)
      +
(case when EGA4.classement = '1' then -3
      when EGA4.classement = '2' then -3
      when EGA4.classement = '3' then 0
      when EGA4.classement = '4' then 2
      else 0 end)  
      +
(case when EGB1.classement = '1' then 5
      when EGB1.classement = '2' then 3
      when EGB1.classement = '3' then 0
      when EGB1.classement = '4' then -3
      else 0 end)
      +
(case when EGB2.classement = '1' then 3
      when EGB2.classement = '2' then 5
      when EGB2.classement = '3' then 0
      when EGB2.classement = '4' then -3
      else 0 end)
      +
(case when EGB3.classement = '1' then 0
      when EGB3.classement = '2' then 0
      when EGB3.classement = '3' then 2
      when EGB3.classement = '4' then 0
      else 0 end)
      +
(case when EGB4.classement = '1' then -3
      when EGB4.classement = '2' then -3
      when EGB4.classement = '3' then 0
      when EGB4.classement = '4' then 2
      else 0 end)  
      +
(case when EGC1.classement = '1' then 5
      when EGC1.classement = '2' then 3
      when EGC1.classement = '3' then 0
      when EGC1.classement = '4' then -3
      else 0 end)
      +
(case when EGC2.classement = '1' then 3
      when EGC2.classement = '2' then 5
      when EGC2.classement = '3' then 0
      when EGC2.classement = '4' then -3
      else 0 end)
      +
(case when EGC3.classement = '1' then 0
      when EGC3.classement = '2' then 0
      when EGC3.classement = '3' then 2
      when EGC3.classement = '4' then 0
      else 0 end)
      +
(case when EGC4.classement = '1' then -3
      when EGC4.classement = '2' then -3
      when EGC4.classement = '3' then 0
      when EGC4.classement = '4' then 2
      else 0 end)  
      +
(case when EGD1.classement = '1' then 5
      when EGD1.classement = '2' then 3
      when EGD1.classement = '3' then 0
      when EGD1.classement = '4' then -3
      else 0 end)
      +
(case when EGD2.classement = '1' then 3
      when EGD2.classement = '2' then 5
      when EGD2.classement = '3' then 0
      when EGD2.classement = '4' then -3
      else 0 end)
      +
(case when EGD3.classement = '1' then 0
      when EGD3.classement = '2' then 0
      when EGD3.classement = '3' then 2
      when EGD3.classement = '4' then 0
      else 0 end)
      +
(case when EGD4.classement = '1' then -3
      when EGD4.classement = '2' then -3
      when EGD4.classement = '3' then 0
      when EGD4.classement = '4' then 2
      else 0 end)  
      +
(case when EGE1.classement = '1' then 5
      when EGE1.classement = '2' then 3
      when EGE1.classement = '3' then 0
      when EGE1.classement = '4' then -3
      else 0 end)
      +
(case when EGE2.classement = '1' then 3
      when EGE2.classement = '2' then 5
      when EGE2.classement = '3' then 0
      when EGE2.classement = '4' then -3
      else 0 end)
      +
(case when EGE3.classement = '1' then 0
      when EGE3.classement = '2' then 0
      when EGE3.classement = '3' then 2
      when EGE3.classement = '4' then 0
      else 0 end)
      +
(case when EGE4.classement = '1' then -3
      when EGE4.classement = '2' then -3
      when EGE4.classement = '3' then 0
      when EGE4.classement = '4' then 2
      else 0 end)  
      +
(case when EGF1.classement = '1' then 5
      when EGF1.classement = '2' then 3
      when EGF1.classement = '3' then 0
      when EGF1.classement = '4' then -3
      else 0 end)
      +
(case when EGF2.classement = '1' then 3
      when EGF2.classement = '2' then 5
      when EGF2.classement = '3' then 0
      when EGF2.classement = '4' then -3
      else 0 end)
      +
(case when EGF3.classement = '1' then 0
      when EGF3.classement = '2' then 0
      when EGF3.classement = '3' then 2
      when EGF3.classement = '4' then 0
      else 0 end)
      +
(case when EGF4.classement = '1' then -3
      when EGF4.classement = '2' then -3
      when EGF4.classement = '3' then 0
      when EGF4.classement = '4' then 2
      else 0 end)  
      +
(case when EGG1.classement = '1' then 5
      when EGG1.classement = '2' then 3
      when EGG1.classement = '3' then 0
      when EGG1.classement = '4' then -3
      else 0 end)
      +
(case when EGG2.classement = '1' then 3
      when EGG2.classement = '2' then 5
      when EGG2.classement = '3' then 0
      when EGG2.classement = '4' then -3
      else 0 end)
      +
(case when EGG3.classement = '1' then 0
      when EGG3.classement = '2' then 0
      when EGG3.classement = '3' then 2
      when EGG3.classement = '4' then 0
      else 0 end)
      +
(case when EGG4.classement = '1' then -3
      when EGG4.classement = '2' then -3
      when EGG4.classement = '3' then 0
      when EGG4.classement = '4' then 2
      else 0 end)  
      +
(case when EGH1.classement = '1' then 5
      when EGH1.classement = '2' then 3
      when EGH1.classement = '3' then 0
      when EGH1.classement = '4' then -3
      else 0 end)
      +
(case when EGH2.classement = '1' then 3
      when EGH2.classement = '2' then 5
      when EGH2.classement = '3' then 0
      when EGH2.classement = '4' then -3
      else 0 end)
      +
(case when EGH3.classement = '1' then 0
      when EGH3.classement = '2' then 0
      when EGH3.classement = '3' then 2
      when EGH3.classement = '4' then 0
      else 0 end)
      +
(case when EGH4.classement = '1' then -3
      when EGH4.classement = '2' then -3
      when EGH4.classement = '3' then 0
      when EGH4.classement = '4' then 2
      else 0 end) as  
      points
from DREAMTEAM, CLASSEMENTS

 join EQUIPES EGA1 on CLASSEMENTS.GA1 = EGA1.id
 join EQUIPES EGA2 on CLASSEMENTS.GA2 = EGA2.id
 join EQUIPES EGA3 on CLASSEMENTS.GA3 = EGA3.id
 join EQUIPES EGA4 on CLASSEMENTS.GA4 = EGA4.id
 join EQUIPES EGB1 on CLASSEMENTS.GB1 = EGB1.id
 join EQUIPES EGB2 on CLASSEMENTS.GB2 = EGB2.id
 join EQUIPES EGB3 on CLASSEMENTS.GB3 = EGB3.id
 join EQUIPES EGB4 on CLASSEMENTS.GB4 = EGB4.id
 join EQUIPES EGC1 on CLASSEMENTS.GC1 = EGC1.id
 join EQUIPES EGC2 on CLASSEMENTS.GC2 = EGC2.id
 join EQUIPES EGC3 on CLASSEMENTS.GC3 = EGC3.id
 join EQUIPES EGC4 on CLASSEMENTS.GC4 = EGC4.id
 join EQUIPES EGD1 on CLASSEMENTS.GD1 = EGD1.id
 join EQUIPES EGD2 on CLASSEMENTS.GD2 = EGD2.id
 join EQUIPES EGD3 on CLASSEMENTS.GD3 = EGD3.id
 join EQUIPES EGD4 on CLASSEMENTS.GD4 = EGD4.id
 join EQUIPES EGE1 on CLASSEMENTS.GE1 = EGE1.id
 join EQUIPES EGE2 on CLASSEMENTS.GE2 = EGE2.id
 join EQUIPES EGE3 on CLASSEMENTS.GE3 = EGE3.id
 join EQUIPES EGE4 on CLASSEMENTS.GE4 = EGE4.id
 join EQUIPES EGF1 on CLASSEMENTS.GF1 = EGF1.id
 join EQUIPES EGF2 on CLASSEMENTS.GF2 = EGF2.id
 join EQUIPES EGF3 on CLASSEMENTS.GF3 = EGF3.id
 join EQUIPES EGF4 on CLASSEMENTS.GF4 = EGF4.id
 join EQUIPES EGG1 on CLASSEMENTS.GG1 = EGG1.id
 join EQUIPES EGG2 on CLASSEMENTS.GG2 = EGG2.id
 join EQUIPES EGG3 on CLASSEMENTS.GG3 = EGG3.id
 join EQUIPES EGG4 on CLASSEMENTS.GG4 = EGG4.id
 join EQUIPES EGH1 on CLASSEMENTS.GH1 = EGH1.id
 join EQUIPES EGH2 on CLASSEMENTS.GH2 = EGH2.id
 join EQUIPES EGH3 on CLASSEMENTS.GH3 = EGH3.id
 join EQUIPES EGH4 on CLASSEMENTS.GH4 = EGH4.id
 where DREAMTEAM.pseudo = CLASSEMENTS.pseudo

																							UNION ALL
																								SELECT TOPSCORERS.pseudo, SUM(
																									(CASE WHEN J0.elimine = 1 and J0.but = 0 THEN -5 ELSE 0 END
																									 +
																									CASE WHEN J1.elimine = 1 and J1.but = 0 THEN -5 ELSE 0 END
																									 +
																									 CASE  WHEN J2.elimine = 1 and J2.but = 0 THEN -5 ELSE 0 END
																									 + 
																									 CASE WHEN J0.but = 6 THEN 15 ELSE 0 END
																									 +
																									 CASE WHEN J1.but = 6 THEN 15 ELSE 0 END
																									 +
																									 CASE WHEN J2.but = 6 THEN 15 ELSE 0 END
																									)) as points    
																									from TOPSCORERS
																									JOIN JOUEURS J0 on TOPSCORERS.ts0 = J0.id
																									join JOUEURS J1 on TOPSCORERS.ts1 = J1.id
																									JOIN JOUEURS J2 on TOPSCORERS.ts2 = J2.id																									
																									group by TOPSCORERS.pseudo
																							UNION ALL
																							select 
																							PHASEFINALE.pseudo, 
																							SUM(CASE 
																							WHEN MATCHS.type = 2 AND MATCHS.but1 > MATCHS.but2 AND PHASEFINALE.prono = MATCHS.acr1 THEN 5
																							WHEN MATCHS.type = 2 AND MATCHS.but1 < MATCHS.but2 AND PHASEFINALE.prono = MATCHS.acr1 THEN 0
																							WHEN MATCHS.type = 2 AND MATCHS.but1 > MATCHS.but2 AND PHASEFINALE.prono = MATCHS.acr2 THEN 0
																							WHEN MATCHS.type = 2 AND MATCHS.but1 < MATCHS.but2 AND PHASEFINALE.prono = MATCHS.acr2 THEN 5
																							ELSE 0 END) as points
																							FROM PHASEFINALE
																							JOIN MATCHS on MATCHS.id = PHASEFINALE.matchId
																							GROUP BY PHASEFINALE.PSEUDO
																							UNION ALL
																							select 
																							PHASEFINALE.pseudo, 
																							SUM(CASE 
																							WHEN MATCHS.type = 3 AND MATCHS.but1 > MATCHS.but2 AND PHASEFINALE.prono = MATCHS.acr1 THEN 10
																							WHEN MATCHS.type = 3 AND MATCHS.but1 < MATCHS.but2 AND PHASEFINALE.prono = MATCHS.acr1 THEN 0
																							WHEN MATCHS.type = 3 AND MATCHS.but1 > MATCHS.but2 AND PHASEFINALE.prono = MATCHS.acr2 THEN 0
																							WHEN MATCHS.type = 3 AND MATCHS.but1 < MATCHS.but2 AND PHASEFINALE.prono = MATCHS.acr2 THEN 10
																							ELSE 0 END) as points
																							FROM PHASEFINALE
																							JOIN MATCHS on MATCHS.id = PHASEFINALE.matchId
																							GROUP BY PHASEFINALE.PSEUDO
																							UNION ALL
																							SELECT VAINQUEUR.pseudo, 
																							SUM(
																							CASE 
																							WHEN EQUIPES.WIN2018 = '1' THEN 15
																							ELSE 0 
																							END) as points
																							FROM VAINQUEUR
																							JOIN EQUIPES ON EQUIPES.id = VAINQUEUR.vainqueur
																							group by VAINQUEUR.pseudo
																																													
							 UNION ALL
                            select 
                                PRONOS.pseudo, 
                                SUM(CASE WHEN MATCHS.type = 1 AND MATCHS.TOPMATCH = 0
                                        AND    ((MATCHS.but1 > MATCHS.but2 AND PRONOS.prono = '1') 
                                             OR (MATCHS.but1 = MATCHS.but2 AND PRONOS.prono = '0') 
                                             OR (MATCHS.but1 < MATCHS.but2 AND PRONOS.prono = '2'))
                                        THEN 1
                                      WHEN MATCHS.type = 1 AND MATCHS.TOPMATCH = 0
                                        AND    ((MATCHS.but1 < MATCHS.but2 AND PRONOS.prono = '1') 
                                             OR (MATCHS.but1 > MATCHS.but2 AND PRONOS.prono = '2'))
                                        THEN -1
                                      WHEN MATCHS.type = 1 AND MATCHS.TOPMATCH = 1
                                        AND    ((MATCHS.but1 > MATCHS.but2 AND PRONOS.prono = '1') 
                                             OR (MATCHS.but1 = MATCHS.but2 AND PRONOS.prono = '0') 
                                             OR (MATCHS.but1 < MATCHS.but2 AND PRONOS.prono = '2'))
                                        THEN 3
                                      WHEN MATCHS.type = 1 AND MATCHS.TOPMATCH = 1
                                        AND    ((MATCHS.but1 < MATCHS.but2 AND PRONOS.prono = '1') 
                                             OR (MATCHS.but1 > MATCHS.but2 AND PRONOS.prono = '2'))
                                        THEN -3
                                      ELSE 0
                                END) AS points
                            from MATCHS 
                            JOIN PRONOS on MATCHS.id = PRONOS.match
                            where MATCHS.but1 != ' ' and MATCHS.but2 != ' '
                            GROUP BY PRONOS.pseudo
                            UNION ALL
                            select USERS.pseudo, 0 from USERS
                            UNION ALL
                            select REPONSES.pseudo, 
                            SUM(CASE WHEN QUESTIONS.reponse = REPONSES.answer THEN 2
                                 WHEN QUESTIONS.reponse <> REPONSES.answer THEN -1
                                 ELSE 0 END) points
                            from REPONSES
                            join QUESTIONS on REPONSES.question = QUESTIONS.id
                            WHERE QUESTIONS.reponse <> 0
                            GROUP BY REPONSES.pseudo
                            ) e
                            GROUP BY e.pseudo
                            ORDER BY 2 DESC, 1 ASC 