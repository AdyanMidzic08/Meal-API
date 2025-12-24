# Meal DB API Search

Ein interaktives Web-Projekt, das die [TheMealDB API](https://www.themealdb.com/api.php) nutzt, um nach Kochrezepten und Gerichten zu suchen. Benutzer können gezielt nach Namen suchen oder Gerichte basierend auf dem Anfangsbuchstaben entdecken.

## 📋 Inhaltsverzeichnis

- [Funktionen](#funktionen)
- [Technologien](#technologien)
- [Installation & Start](#installation--start)
- [Projektstruktur](#projektstruktur)
- [Wichtige Hinweise](#wichtige-hinweise)

## ✨ Funktionen

- **Gericht-Suche**: Gib den Namen eines Gerichts in das Suchfeld ein und drücke "Enter", um spezifische Rezepte zu finden.
- **Alphabet-Filter**: Klicke auf einen der Buchstaben (A-Z), um alle Gerichte anzuzeigen, die mit diesem Buchstaben beginnen.
- **Detaillierte Anzeige**: Die Suchergebnisse präsentieren übersichtlich:
  - Name des Gerichts
  - Herkunft (Land/Region)
  - Kategorie
  - Hochauflösendes Vorschaubild
  - Button zum YouTube-Video (falls verfügbar)
- **Fehlerbehandlung**: Benutzerfreundliche Rückmeldung, falls keine Gerichte gefunden wurden.

## 🛠 Technologien

- **HTML5**: Semantische Struktur der Webseite.
- **CSS3**: Individuelles Styling, Flexbox-Layouts und Einbindung der Custom Font `SF-Pro-Display-Regular`.
- **JavaScript (Vanilla)**:
  - Asynchrone Datenabrufe mittels `fetch` API und `async/await`.
  - Dynamische DOM-Manipulation zur Anzeige der Ergebnisse.

## 🚀 Installation & Start

### Voraussetzungen

Du benötigst lediglich einen modernen Webbrowser (z.B. Google Chrome, Firefox, Safari, Edge). Es ist keine Installation von Node.js oder anderen Tools zwingend erforderlich.

### Schritte

1. **Projekt herunterladen**:
   Klone dieses Repository oder lade den Ordner auf deinen Computer herunter.

2. **Starten**:
   - **Option A (Einfach)**: Öffne die Datei `index.html` per Doppelklick. Sie wird in deinem Standard-Browser gestartet.
   - **Option B (Empfohlen für Entwickler)**: Nutze die "Live Server" Extension in VS Code, um die Seite zu hosten. Das ermöglicht automatisches Neuladen bei Änderungen.

## 📂 Projektstruktur

```text
.
├── index.html      # Hauptdatei mit der HTML-Struktur
├── script.js       # Beinhaltet die Logik (API-Calls, Event-Handler)
├── style.css       # Enthält alle Design-Anweisungen
├── Font/           # Ordner für lokale Schriftarten
│   └── SF-Pro-Display-Regular.otf
└── README.md       # Diese Dokumentation
```

## ⚠️ Wichtige Hinweise

1. **Internetverbindung**:
   Da die Rezeptdaten und Bilder live von der _TheMealDB API_ geladen werden, ist eine **aktive Internetverbindung** zwingend erforderlich. Ohne Internet wird die Seite keine Ergebnisse anzeigen.

2. **API-Nutzung**:
   Das Projekt verwendet den öffentlichen Test-Key der API. Dieser ist für Entwicklungszwecke gedacht.

3. **Schriftarten**:
   Das Design ist auf die Schriftart im Ordner `Font/` ausgelegt. Stelle sicher, dass die Datei `SF-Pro-Display-Regular.otf` vorhanden ist und der Pfad in der `style.css` stimmt, damit die Typografie korrekt dargestellt wird.

## 👨‍💻 Autor

Erstellt im Rahmen des Unterrichts "System-t-Sw." (Thema: FETCH-REQUEST).
