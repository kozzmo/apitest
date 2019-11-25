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
                                                 order by points desc