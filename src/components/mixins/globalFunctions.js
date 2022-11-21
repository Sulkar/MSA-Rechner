const globalFunctions = {
  data() {
    return { counter: 0 };
  },
  methods: {
    gHelloWorld(number) {
      alert("Hello world " + number);
    },
    //Mündliche Prüfung? Wenn Jahresnote und Pruefungsnote sich um eine Note unterscheiden und
    //die schlechtere Note als Gesamtnote festgelegt wurde (Hauptfächer)
    gIsMuendlichePruefungHauptfach(pruefungsnote, jahresnote, gesamtnote) {
      let pruefungsnoteJahresnoteDifferenz = Math.abs(pruefungsnote - jahresnote);
      if (pruefungsnoteJahresnoteDifferenz == 1 && (pruefungsnote > gesamtnote || pruefungsnote > jahresnote)) {
        return true;
      } else {
        return false;
      }
    },
    //Prüfungsnote besser als Jahresnote -> Prüfungsnote überwiegt
    gUpdatePruefungsnoteUeberwiegt(pruefungsnote, jahresnote, gesamtnote) {
      let pruefungsNoteBesser = false;
      if (pruefungsnote < jahresnote) {
        pruefungsNoteBesser = true;
      }
      //bei .5 und besserer Prüfungsnote -> Prüfungsnote überwiegt und Gesamtnote wird abgerundet
      if (gesamtnote % 1 == 0.5 && pruefungsNoteBesser) {
        gesamtnote = Math.floor(gesamtnote);
      } else {
        gesamtnote = Math.round(gesamtnote);
      }
      return gesamtnote;
    },
  },
};

export default globalFunctions;
