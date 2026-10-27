# Design — Federico Del Pup

Evoluzione dell'identità esistente autorizzata dall'utente: semplice, personale, IT/EN, con interazioni discrete. Tema scuro/chiaro e accento indaco conservati.

- Colori semantici in :root e [data-theme=light]. Indaco per link e dettagli; pulsante pieno con testo bianco, senza glow.
- Inter come famiglia esistente; titoli a peso 500/600 e tracking -0.035em. Corpo a 1.65.
- Contenitore massimo 1120px, margini 40/24/20px. Sezioni da 92px su desktop e 64px su mobile.
- Progetti in righe con titoli e descrizioni, senza immagini o risultati inventati. Percorso con una linea temporale senza date accademiche non fornite.
- Un solo momento animato all'arrivo: linea indaco che si disegna in 700ms tramite scaleX, sempre non essenziale. Sezione attiva con aria-current e sottolineatura indaco; menu mobile 180ms e frecce 180ms anche al focus; niente motion magnetica né contenuto nascosto.
- prefers-reduced-motion rimuove animazioni e transizioni; focus visibili e controlli almeno 44px in altezza.
- Lingua via messaggi completi data-en con fallback italiano statico. Stesse azioni e struttura in entrambe le lingue; aggiornare anche etichette ARIA e lang.
