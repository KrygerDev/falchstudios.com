# Emil Studio – hjemmeside

Hjemmesiden for Emil Studio: et alsidigt digitalt studie i Danmark (spil, apps, web, grafik og lyd).
Adresse: https://krygerdev.github.io/

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
- Emil Studio – identitet og hjemmeside (link til koden).
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

## Logo (Play-E)

Valgt af Emil 16. november 2026: et guld-ikon med et E, hvor midten er en play-knap,
og ordmærket EMIL STUDIO. Logoet er tegnet som vektor direkte i siderne
(`logo-base`, `logo-play` og `logo-word` øverst i hver side) og i `favicon.svg`.

Mappen `brand/` har logoet som filer til andre steder:
- `emil-studio-profilbillede.png` – profilbillede til LinkedIn og GitHub (tåler at blive klippet rundt)
- `emil-studio-ikon.svg` og `emil-studio-ikon-1024.png` – ikonet alene
- `emil-studio-logo-moerk-baggrund.*` og `emil-studio-logo-lys-baggrund.*` – ikon og navn

## Billeder

Spillets billeder er kopier fra `Kingdom-Defense\03-Grafik\Til Test 8` (11. november 2026).
Delingsbillederne (`og-*.jpg`) og ikonerne er lavet til siden.
