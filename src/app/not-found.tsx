import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-lg px-4 py-16">
      <div className="notice notice--empty">
        <h1 className="notice__title">That page is not part of the designer</h1>
        <p className="notice__text">Head back to the room and keep building the setup.</p>
        <div className="notice__actions">
          <Link className="button" href="/">
            Back to the room
          </Link>
        </div>
      </div>
    </div>
  );
}
