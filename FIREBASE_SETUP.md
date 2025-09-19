# Configurazione Firebase per Album Foto

## Integrazione Completata ✅

L'integrazione Firebase è stata completata con successo! Sono stati implementati:

- ✅ **Autenticazione Firebase** con email e password
- ✅ **Storage Firebase** per il caricamento delle foto
- ✅ **Pagina Gallery** con upload e visualizzazione foto
- ✅ **LoginModal** per l'autenticazione
- ✅ **Routing** per navigare tra homepage e gallery
- ✅ **Pulsante Album Foto** nel header con autenticazione

## Configurazione Necessaria

### 1. Configurare Firebase Console

1. Vai su [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuovo progetto o seleziona quello esistente
3. Abilita **Authentication** con provider Email/Password
4. Abilita **Storage** e configura le regole di sicurezza
5. Ottieni le credenziali del progetto

### 2. Configurare le Credenziali

Sostituisci le credenziali nel file `.env` con quelle reali del tuo progetto Firebase:

```env
VITE_FIREBASE_API_KEY=la_tua_api_key_reale
VITE_FIREBASE_AUTH_DOMAIN=il_tuo_progetto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=il_tuo_project_id
VITE_FIREBASE_STORAGE_BUCKET=il_tuo_progetto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=il_tuo_sender_id
VITE_FIREBASE_APP_ID=il_tuo_app_id
```

### 3. Configurare Storage Rules ⚠️ IMPORTANTE

Nel Firebase Console, vai su **Storage > Rules** e sostituisci le regole esistenti con:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Regole per la cartella gallery - solo utenti autenticati
    match /gallery/{allPaths=**} {
      allow read, write: if request.auth != null;
    }
    
    // Regole per altre cartelle (opzionale)
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

**NOTA**: Senza queste regole otterrai l'errore `storage/unauthorized`!
      allow delete: if false;
    }
  }
}
```

### 4. Creare Utente Admin

Nel Firebase Console, vai su Authentication > Users e crea manualmente l'utente con:
- Email: la tua email scelta
- Password: la tua password scelta

## Come Funziona

1. **Homepage**: Gli utenti vedono il pulsante "Album Foto" nel header
2. **Click senza login**: Si apre il modal di login
3. **Login**: Dopo l'autenticazione, l'utente viene reindirizzato alla gallery
4. **Gallery**: Gli utenti possono:
   - Visualizzare tutte le foto caricate
   - Caricare nuove foto (drag & drop o click)
   - Visualizzare foto in modalità fullscreen
   - Fare logout
5. **Sicurezza**: Solo utenti autenticati possono accedere alla gallery e caricare foto

## Struttura File Creati

```
src/
├── firebase.ts              # Configurazione Firebase
├── contexts/
│   └── AuthContext.tsx      # Context per autenticazione
├── components/
│   ├── LoginModal.tsx       # Modal di login
│   └── Header.tsx           # Header aggiornato con pulsante
└── pages/
    └── Gallery.tsx          # Pagina gallery con upload
```

## Test

1. Avvia l'applicazione: `npm run dev`
2. Clicca su "Album Foto" nel header
3. Inserisci le credenziali dell'utente creato
4. Testa l'upload e la visualizzazione delle foto

L'integrazione è completa e pronta per l'uso! 🎉