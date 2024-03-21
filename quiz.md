# Neuseelandreise CSS Quiz

## Analysiert die CSS Regeln in [main.css](https://github.com/webmapping/nz/blob/main/main.css)

- Zeit: 30 Minuten
- Dreierteams
- Hilfsmittel
    - alles, in den CSS Tutorials der *Codecademy* Gelernte ;-)
    - Tooltips in VSCode sowie die von dort verlinkte MDN-Referenz
    - einfach ausprobieren: Werte (stark) ändern, Regeln ungültig machen und schauen was passiert ...
    - das Internet ...

### ... bevor ihr loslegt

Ladet [main.css](https://github.com/webmapping/nz/blob/main/main.css) herunter und bindet es im &lt;head> Bereich von `index.html` mit einem &lt;link> Element als externes Stylesheet `main.css` in eure Etappe ein - damit sieht eure Etappe nicht nur viel besser aus, sondern ihr könnt auch optisch nachvollziehen, was die einzelnen Regeln bewirken ...

## Folgende Fragen sollen beantwortet werden

1. was bewirkt die CSS Regel in Zeile [5-10](https://github.com/webmapping/nz/blob/main/main.css#L5-L10)?

auf alle Elemente im Body wird die schriftart, hintergrundfarbe, der body container auf maximal 1280px breite gesetzt und zentriert

2. wozu wird das Größerzeichen (`>`) in Zeile [12](https://github.com/webmapping/nz/blob/main/main.css#L12) verwendet?

für alle img die innerhalb des tags header sind

3. was passiert in der CSS Regel in Zeile [16-21](https://github.com/webmapping/nz/blob/main/main.css#L16-L21)?

es gilt nur für images die von einem a tag und der widerum von einem header tag umschlossen wird

4. was passiert in der CSS Regel in Zeile [23-30](https://github.com/webmapping/nz/blob/main/main.css#L23-L30)?

    max-width wird überschrieben
    immernoch zentriert (eigntlich im body gesetzt)
    das Element wird 50px nach oben verschoben
    links rechts und unten gibts eine graue gestrichelten rahmen

5. was bewirkt `padding` in Zeile [33](https://github.com/webmapping/nz/blob/main/main.css#L33)?

der inhalt wird 1em = 16px nach innen geschoben (Abstand zur border)

6. wo werden die Fonts *Roboto* und *Montserrat* in Zeile [37](https://github.com/webmapping/nz/blob/main/main.css#L37) & Zeile [45](https://github.com/webmapping/nz/blob/main/main.css#L45) definiert?

@import url(....)



7. findet die Quelle aller verwendeten Fonts im Internet
8. warum steht eine Raute (`#`) vor `map` in Zeile [52](https://github.com/webmapping/nz/blob/main/main.css#L52)?


9. wofür stehen die vier Werte bei `padding` in Zeile [61](https://github.com/webmapping/nz/blob/main/main.css#L61)?
10. was bewirkt die CSS Regel in Zeile [64-67](https://github.com/webmapping/nz/blob/main/main.css#L64-L67)?
11. welche Elemente werden mit dem Schatten in Zeile [76-78](https://github.com/webmapping/nz/blob/main/main.css#L76-L78) angesprochen?
12. was bewirkt die `@media` Regel in Zeile [81-90](https://github.com/webmapping/nz/blob/main/main.css#L81-L90)? Könnt ihr sie im Browser reproduzieren?
