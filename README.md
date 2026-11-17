# Falch Studios – hjemmeside

Hjemmesiden for Falch Studios: et alsidigt digitalt studie i Danmark (spil, apps, web, grafik og lyd).
Adresse: https://krygerdev.github.io/

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

## Projekter på forsiden

- Kingdom Defense: Sealed Worlds (egen underside).
- Falch Studios – identitet og hjemmeside (link til koden).
- Tre webprojekter fra GitHub, vist som "Koncept": webshop (`Grejfreak_produk`),
  nyhedssite (`News`) og `FindWay`. Forsiderne er tegnede illustrationer, ikke skærmbilleder.

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
