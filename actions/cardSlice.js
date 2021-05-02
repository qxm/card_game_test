import { createSlice } from '@reduxjs/toolkit'
import initCards from '../util/initCards'
import { CARD_PAIRS_VALUE } from '../util/initCards'

const initialState = { cards: initCards(CARD_PAIRS_VALUE ) }

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    flipCard(state, action) {
      console.log("flip card")
      var card = state.cards[action.payload]
       card.displayValue = card.value
      card.flipState = 1 //temp flip the card
    },
    flipCardBack(state, action) {
      console.log("flip card back")
      var card = state.cards[action.payload]
       card.displayValue = '?'
      card.flipState = 0
    },
    flipCardPerm(state, action) {
      var card = state.cards[action.payload]
      card.displayValue = card.value
      card.flipState = 2 //perm flip the card    
    },

    initCard(state) {
      console.log("intit cards")
      state.cards = initCards(CARD_PAIRS_VALUE )
    },
  },
})

export const { flipCard, flipCardPerm,flipCardBack, initCard } = cardSlice.actions
export default cardSlice.reducer
