"use client";

import { useContext } from "react";
import { QuotesContext } from "@/app/QuotesContext";
import Button from "@/components/Button";

export default function Home() {
  const { quotes, quoteIndex, handleQuoteIndexUpdate, handleLikeQuote } =
    useContext(QuotesContext);

  const { quote, author, isLiked } = quotes[quoteIndex];

  return (
    <main className="min-h-[calc(100vh-5rem)] flex items-center justify-center p-4 sm:p-8">
      <section className="card w-full max-w-2xl bg-base-200 shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-end">
            <Button
              variant="ghost"
              className={`btn-circle text-2xl ${isLiked ? "hover:bg-transparent cursor-default" : ""}`}
              onClick={() => {
                if (!isLiked) handleLikeQuote();
              }}
              aria-label={isLiked ? "Beğenildi" : "Sözü beğen"}
            >
              {isLiked ? "❤️" : "🤍"}
            </Button>
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
            <Button
              variant="primary"
              className="w-full sm:w-auto px-8 font-bold"
              onClick={handleQuoteIndexUpdate}
            >
              Next Quote
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
