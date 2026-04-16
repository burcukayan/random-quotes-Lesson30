'use client';

import { Button } from '@/components/Button';
import { useContext } from 'react';
import { H3 } from '@/components/typography/H3';
import { QuotesContext } from '@/app/QuotesContext';

export default function Home() {
  const { quotes, quoteIndex, handleQuoteIndexUpdate, handleLikeQuote } =
    useContext(QuotesContext);
  
  // likedBy yerine isLiked'i çekiyoruz
  const { quote, author, isLiked } = quotes[quoteIndex];

  return (
    <main className='min-h-screen flex items-center justify-center bg-slate-200'>
      {/* Senin orijinal kart yapın (min-w ile genişliği sabitledik) */}
      <section className='bg-slate-50/50 rounded-md p-10 flex flex-col min-w-[600px]'>
        
        <div className='self-end'>
          {/* Sadece senin orijinal ikon kullanımını bıraktık */}
          <Button variant={'icon'} onClick={handleLikeQuote} disabled={isLiked}>
             {isLiked ? '❤️' : '🤍'}
          </Button>
        </div>
        
        {/* Sözün ortalanması için küçük bir div içine aldık */}
        <div className="text-center my-4">
          <H3 element='p'>{quote}</H3>
        </div>
        
        <span className='text-md font-semibold text-slate-900 self-end '>
          - {author}
        </span>
        
        <div className='mt-6 flex flex-col'>
          <Button variant={'primary'} onClick={handleQuoteIndexUpdate}>
            Next Quote
          </Button>
        </div>
        
      </section>
    </main>
  );
}