export const state = () => ({
    gesamtnoteMathe: "",
    gesamtnoteDeutsch: "",
    
    inputfields: {
        1: "jahresnote_mathe",
        2: "pruefungsnote_mathe",
        3: "jahresnote_deutsch",
        4: "pruefungsnote_deutsch",
      },

  })
  
  export const mutations = {
    setGesamtnoteMathe(state, note){
        state.gesamtnoteMathe = note;
    },
    setGesamtnoteDeutsch(state, note){
        state.gesamtnoteDeutsch = note;
    },

  }