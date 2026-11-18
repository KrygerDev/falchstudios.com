# Falch Studios – hjemmeside

Hjemmesiden for Falch Studios: et alsidigt digitalt studie i Danmark (spil, apps, web, grafik og lyd).
Adresse: https://falchstudios.com/ (domænet er ved at blive sat op – se "Adresse og domæne" nederst).

Version 4 (17. november 2026): Studiet hedder nu Falch Studios (før: Emil Studio).
Nyt ordmærke i skriften Cinzel. Guld-ikonet med E'et er det samme – E'et står for Emil.

Version 3 (17. november 2026): Lyst og elegant tema (elfenben, hvide kort, mørkeblå tekst, guld).
Emil syntes, at det mørke tema var alt for mørkt. Kun bunden af siden er mørkeblå.

Version 2 (17. november 2026): Siden taler som et professionelt studie, ikke som en personlig
portefølje. Ydelser vises som kort med små levende billeder, de runde knapper om logoet hopper
og fører ned til hver ydelse, og spilsiden har en levende illustration.

## Hvad ligger hvor

| Fil | Indhold |
| --- | --- |
| `index.html` | Forsiden på dansk |
| `en/index.html` | Forsiden på engelsk |
| `kingdom-defense/index.html` | Spillets side på dansk |
| `en/kingdom-defense/index.html` | Spillets side på engelsk |
| `404.html` | Vises, hvis en side ikke findes |
| `assets/css/style.css` | Farver og udseende for alle sider |
| `assets/js/main.js` | Mobilmenu, stjernehimmel og blide animationer (siden virker også uden) |
| `assets/img/` | Logo, ikoner, delingsbilleder og spillets billeder |
| `assets/fonts/` | Skriften Outfit (fri licens, se `OFL.txt`) |

Siden er ren HTML og CSS. Der er ingen cookies, ingen statistik og intet hentes fra andre sider.

Vigtigt ved ændringer i `style.css` eller `main.js`: Alle fem sider henter dem med et
versionsnummer (`style.css?v=5` og `main.js?v=5`). Tæl nummeret én op i alle fem sider, hver gang
en af de to filer ændres. Ellers viser browsere den gamle udgave i op til ti minutter, og siden
ser forkert ud imens.

Kontakt-mailen `kontakt@falchstudios.com` står under Kontakt på begge forsider og i bunden af
alle sider (valgt af Emil 17. november 2026). Skifter adressen, skal den rettes alle de steder.

## Projekter på forsiden

- Kingdom Defense: Sealed Worlds (egen underside).
- Under "Apps" (tilføjet 18. november 2026): VIPE SEO Robot, Farmergo og Agrivyo.
  Deres kode ligger privat på GitHub, så kortene har ikke noget link ("Koden er privat").
  Agrivyo er ikke bygget endnu og står som "På vej".
- Under "Web og identitet": Falch Studios – identitet og hjemmeside (link til koden) og
  tre webprojekter fra GitHub, vist som "Koncept": webshop (`Grejfreak_produk`),
  nyhedssite (`News`) og `FindWay`.

Forsiderne på kortene er tegnede illustrationer, ikke skærmbilleder.

Alle links, der fører væk fra siden (GitHub, LinkedIn, privatlivspolitikken), åbner i en ny fane.
Knapperne til LinkedIn og GitHub bruger de to tjenesters egne logoer (`i-linkedin` og `i-github`).

## Når Kingdom Defense udkommer

Linket til Google Play skal ind to steder på hver spilside (dansk og engelsk):
knappen "Kommer snart på Google Play" og linjen under den. Brug Googles officielle
"Hent den på Google Play"-mærke, når spillet er offentligt.

## Nyt projekt

1. Kopiér `kingdom-defense/` til en ny mappe, fx `mit-projekt/`, og ret teksterne.
2. Gør det samme i `en/`.
3. Tilføj et kort under "Projekter" på begge forsider og et link i bunden af alle sider.
4. Tilføj de nye adresser i `sitemap.xml`.

## Logo (Play-E + FALCH STUDIOS)

Ikonet valgte Emil 16. november 2026: et guld-ikon med et E, hvor midten er en play-knap.
Ordmærket valgte han 17. november 2026: FALCH med store, kraftige bogstaver og STUDIOS
i guld nedenunder, begge i skriften Cinzel (fri licens, SIL Open Font License).

Bogstaverne er tegnet som vektor direkte i siderne (`logo-base`, `logo-play` og `logo-word`
øverst i hver side), så der hentes ingen ekstra skrift. Ikonet ligger også i `favicon.svg`.

Mappen `brand/` har logoet som filer til andre steder:
- `falch-studios-profilbillede.png` – profilbillede til LinkedIn og GitHub (tåler at blive klippet rundt)
- `falch-studios-ikon.svg` og `falch-studios-ikon-1024.png` – ikonet alene
- `falch-studios-logo-lys-baggrund.*` – ikon og navn til lyse baggrunde (mørk tekst)
- `falch-studios-logo-moerk-baggrund.*` – ikon og navn til mørke baggrunde (lys tekst)

## Billeder

Spillets billeder er kopier fra `Kingdom-Defense\03-Grafik\Til Test 8` (11. november 2026).
Delingsbillederne (`og-*.jpg`) og ikonerne er lavet til siden.

## Adresse og domæne

Siden skal ligge på Emils eget domæne, `falchstudios.com`. Alle adresser i siderne,
`sitemap.xml` og `robots.txt` peger derfor på `https://falchstudios.com/`.

Vigtigt: Privatlivspolitikken for Kingdom Defense skal blive på
`https://krygerdev.github.io/kingdom-defense-privacy/`, fordi den adresse bruges af spillet.
Derfor ligger siden i sit eget GitHub-projekt, `KrygerDev/falchstudios.com`, som har domænet
(filen `CNAME`), og ikke i `KrygerDev.github.io` (ellers flytter GitHub også
privatlivspolitikken over på domænet).

Domænet er købt hos Simply.com. Dér skal web-posterne pege på GitHub Pages:
- `falchstudios.com`: fire A-poster – `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153` og `185.199.111.153`
- `www.falchstudios.com`: én CNAME-post – `krygerdev.github.io`

Mail-posterne (MX og SPF) må ikke røres, ellers stopper mailen på domænet.

Den gamle adresse, https://krygerdev.github.io/, skal sende folk videre til
falchstudios.com, når domænet virker.
