"use client";

// Unexpected render failure. The rental form has its own field errors.
export default function AppError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto w-full max-w-lg px-4 py-16">
      <div className="notice notice--error">
        <h1 className="notice__title">The designer hit a snag</h1>
        <p className="notice__text">The room could not be drawn. Try again, and the last setup is still saved in this browser.</p>
        <div className="notice__actions">
          <button type="button" className="button" onClick={reset}>
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
