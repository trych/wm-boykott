# WM-Boykott

Eine Chrome-Extension, die Artikel-Teaser zur Fußballweltmeisterschaft 2022 in Katar auf deutschen News-Websites ausblendet. Unterstützt aktuell folgende Websites:

- [spiegel.de](https://www.spiegel.de)
- [zeit.de](https://www.zeit.de)
- [sueddeutsche.de](https://www.sueddeutsche.de)
- [tagesschau.de](https://www.tagesschau.de)
- [tagesspiegel.de](https://www.tagesspiegel.de)
- [faz.net](https://www.faz.net)

----

## Installation

### Chrome

Die Extension befindet sich aktuell im Review-Prozess des Google-Webstores. Da dieser möglicherweise so lange dauert, dass die die WM schon längst vorbei ist, wenn die Extension endlich im Webstore verfügbar ist, muss die Extension aktuell manuell in Google Chrome installiert werden.

#### Manuelle Installation in Google Chrome

1. [Zip-Datei der Extension](https://github.com/trych/wm-boykott/releases/download/v1.0.2/wm_boykott_chrome_v1.0.2.zip) downloaden.
2. Zip-Datei in einen Ordner entpacken.
3. Die Extension-Seite in Google Chrome öffnen. Dazu `chrome://extensions` in die URL-Leiste eingeben.
4. Oben rechts "Entwicklermodus" aktivieren.
5. Oben links auf "Entpackte Erweiterung laden" und dann zum entpackten Ordner navigieren und diesen laden.
6. Fertig. Die Extension sollte nun WM-Artikel auf den entsprechenden Websites verbergen.

### Firefox

Das Firefox-Addon kann direkt über die [Firefox-Addon-Seite](https://addons.mozilla.org/de/firefox/addon/wm-boykott/) installiert werden.

----

## Funktionsweise

Die Extension filtert Wm-Content in zwei Schritten.

1. Zunächst wird Content ausgeblendet, der über die Klasse o.Ä. immer als eindeutiger WM-Content zu identifizieren ist, beispielsweise ein `<div>` mit der Klasse `wm-ticker`.

2. Dann werden alle "generischen" Titelseiten-Teaser durchgeloopt und deren `innerText` auf die vordefinierten Keywords durchsucht. Wenn etwas gefunden wird, wird der jeweilige Teaser ausgeblendet.

Das Ausblenden funktioniert über das Hinzufügen einer CSS-Klasse.

Das Vorgehen hat den Seiteneffekt, dass z.B. auch andere Artikel zum Thema Katar ausgeblendet werden. Wenn man also auf keinen Falls News zum Handelsabkommen zwischen China und Katar verpassen will, dann würde ich dir empfehlen, die Extension nicht zu installieren. Auch Artikel, die sich kritisch mit der WM beschäftigen werden aktuell ausgeblendet.

Die aktuelle Liste der Keywords findet sich [hier](https://github.com/trych/wm-boykott/blob/8c10125368d0732364a795142317986c03e599a0/js/main.js#L1).

----

## Zusätzliche Websites und Verbesserungen

Wenn weitere deutsche News-Websites zur Extension hinzugefügt werden sollen, gerne ein neues Issue erstellen oder alternativ eine [E-Mail an mich](mailto:wm-boykott@trych.dev) senden.

PRs welcome!
