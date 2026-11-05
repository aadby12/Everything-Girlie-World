import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-wide flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-4xl sm:text-5xl">This page left the fitting room.</h1>
      <p className="mt-4 max-w-md text-sm leading-7 text-muted">
        The page you&apos;re looking for isn&apos;t here. Browse the collection or head back home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
        <Link href="/shop" className="btn btn-secondary">
          Shop All
        </Link>
      </div>
    </div>
  );
}
