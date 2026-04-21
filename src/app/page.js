"use client";

import { useContext } from "react";
import { QuotesContext } from "@/app/QuotesContext";

export default function Home() {
  const { quotes, quoteIndex, handleQuoteIndexUpdate, handleLikeQuote } =
    useContext(QuotesContext);

  const { quote, author, isLiked } = quotes[quoteIndex];

  return (
    <main className="min-h-[calc(100vh-5rem)] flex items-center justify-center p-4 sm:p-8">
      <section className="card w-full max-w-2xl bg-base-200 shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-end">
            <button
              className={`btn btn-circle ${isLiked ? "btn-disabled" : "btn-ghost text-2xl"}`}
              onClick={handleLikeQuote}
              disabled={isLiked}
              aria-label={isLiked ? "Beğenildi" : "Sözü beğen"}
            >
              {isLiked ? "❤️" : "🤍"}
            </button>
          </div>

          <div className="text-center my-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold italic text-base-content leading-relaxed">
              "{quote}"
            </h1>
          </div>

          <div className="flex justify-end mb-4">
            <h2 className="text-lg font-bold text-base-content">- {author}</h2>
          </div>

          <div className="mt-4 w-full">
            <button
              className="btn btn-primary w-full sm:w-auto px-8 font-bold"
              onClick={handleQuoteIndexUpdate}
            >
              Next Quote
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
