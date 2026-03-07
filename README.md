# Accent Recording Studio – Web

Prezentační web nahrávacího studia Accent v Plzni.

## Stránky

| Soubor | Stránka |
|--------|---------|
| `index.html` | Úvod / Home |
| `studio.html` | Studio & galerie |
| `sluzby.html` | Služby & Ceník |
| `reference.html` | Reference & Ukázky |
| `karaoke.html` | Karaoke produkce |
| `kontakt.html` | Kontakt |

## Technologie

- Čisté HTML5 + CSS3 + Vanilla JS
- Žádné závislosti (framework-free)
- Plně kompatibilní s **GitHub Pages**

## Spuštění lokálně

```bash
python3 -m http.server 8080
# nebo
npx serve .
```

Poté otevřete http://localhost:8080

## GitHub Pages nasazení

1. Nahrajte repozitář na GitHub
2. Jděte na Settings → Pages
3. Source: **Deploy from a branch** → branch `main` → folder `/ (root)`
4. Uložte — web bude dostupný na `https://vaseuzivatelskeime.github.io/nazev-repa/`

Nebo použijte automatický GitHub Actions workflow v `.github/workflows/pages.yml`.
