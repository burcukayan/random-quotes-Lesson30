'use client';

import { createContext, useState } from 'react';
import { quotes as initialQuotes } from '@/quotes';
import { getRandomNumber } from '@/utils/helper-functions';

export const QuotesContext = createContext({});

export function QuotesContextProvider({ children }) {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quotes, setQuotes] = useState(initialQuotes);

  function handleQuoteIndexUpdate () {
    const nextIndex = getRandomNumber(0, quotes.length - 1);
    setQuoteIndex(nextIndex);
  }

  // Beğenme fonksiyonu: Seçili sözün isLiked değerini true yapar
  function handleLikeQuote () {
    const updatedQuotes = quotes.map((quote, id) => {
      if (id === quoteIndex) {
        return { ...quote, isLiked: true }; 
      } 
      return quote;
    });
    setQuotes(updatedQuotes);
  }

  // Beğenmekten vazgeçme fonksiyonu: Belirli bir id'deki sözün isLiked değerini false yapar
  function handleUnlikeQuote (idToUnlike) {
    const updatedQuotes = quotes.map((quote, id) => {
      if (id === idToUnlike) {
        return { ...quote, isLiked: false };
      }
      return quote;
    });
    setQuotes(updatedQuotes);
  }

  // QuotesContext.Provider olarak değiştirildi ve handleUnlikeQuote eklendi
  return (
    <QuotesContext.Provider value={{ quotes, quoteIndex, handleQuoteIndexUpdate, handleLikeQuote, handleUnlikeQuote }}>
      {children}
    </QuotesContext.Provider>
  );
}