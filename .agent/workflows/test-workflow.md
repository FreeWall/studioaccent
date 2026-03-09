---
description: Nahrání změn s potvrzením přes tlačítko Run
---

Při spuštění tohoto workflow postupuj takto:

1. Nejprve zjisti stav projektu pomocí `git status`.
2. Vypiš uživateli stručný přehled toho, co se bude dít.
3. Poté navrhni provedení změn (add, commit, push) jako JEDEN terminálový příkaz:
   `git add . && git commit -m "Update from workflow" && git push origin main`
4. U tohoto příkazu v kroku 3 MUSÍŠ nechat uživatele kliknout na tlačítko "Run" (nastav `SafeToAutoRun: false`).
