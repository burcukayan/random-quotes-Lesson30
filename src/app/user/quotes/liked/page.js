"use client";

import { H3 } from "@/components/typography/H3";
import { useContext } from "react";
import { QuotesContext } from "@/app/QuotesContext";
import { Button } from "@/components/Button";

export default function LikedQuotesPage() {
  const { quotes, handleUnlikeQuote } = useContext(QuotesContext);

  const likedQuotes = quotes
    .map((quote, index) => ({ ...quote, originalIndex: index }))
    .filter((quote) => quote?.isLiked === true);

  return (
    <main className="min-h-screen flex flex-col items-center bg-slate-200 p-10">
      <div className="mb-10">
        <H3 element="h1">Liked Quotes</H3>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-2xl">
        {likedQuotes.length === 0 ? (
          <p className="text-center text-slate-500">No liked quotes yet.</p>
        ) : (
          likedQuotes.map((item) => (
            <section
              key={item.originalIndex}
              className="bg-slate-50/50 rounded-md p-6 flex justify-between items-center shadow-sm"
            >
              <div className="flex flex-col pr-4">
                <p className="italic text-lg text-slate-800">"{item.quote}"</p>
                <span className="text-sm font-semibold text-slate-900 mt-2">
                  - {item.author}
                </span>
              </div>
              <div>
                <Button
                  variant="primary"
                  onClick={() => handleUnlikeQuote(item.originalIndex)}
                >
                  Unlike ❌
                </Button>
              </div>
            </section>
          ))
        )}
      </div>
    </main>
  );
}
