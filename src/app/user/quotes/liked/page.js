"use client";

import { useContext } from "react";
import { QuotesContext } from "@/app/QuotesContext";

export default function LikedQuotesPage() {
  const { quotes, handleUnlikeQuote } = useContext(QuotesContext);

  const likedQuotes = quotes
    .map((quote, index) => ({ ...quote, originalIndex: index }))
    .filter((quote) => quote?.isLiked === true);

  return (
    <main className="min-h-[calc(100vh-5rem)] flex flex-col items-center p-4 sm:p-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-base-content">
          Liked Quotes ❤️
        </h1>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-3xl">
        {likedQuotes.length === 0 ? (
          <div className="alert bg-base-200 shadow-md justify-center">
            <span className="text-base-content font-bold">
              No liked quotes yet.
            </span>
          </div>
        ) : (
          likedQuotes.map((item) => (
            <section
              key={item.originalIndex}
              className="card bg-base-200 shadow-md flex-row items-center justify-between p-4 sm:p-6"
            >
              <div className="flex flex-col pr-4 flex-grow">
                <p className="italic text-lg sm:text-xl text-base-content font-bold">
                  "{item.quote}"
                </p>

                <span className="text-sm sm:text-base font-bold text-base-content mt-2">
                  - {item.author}
                </span>
              </div>
              <div className="flex-none">
                <button
                  className="btn btn-error btn-sm sm:btn-md text-white font-bold tracking-wide"
                  onClick={() => handleUnlikeQuote(item.originalIndex)}
                  aria-label="Unlike quote"
                >
                  <span className="hidden sm:inline">Unlike</span> ❌
                </button>
              </div>
            </section>
          ))
        )}
      </div>
    </main>
  );
}
