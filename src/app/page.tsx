export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="border-b border-black/10 pb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            An author archive
          </p>

          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tight">
            Jerome Beatty Jr.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-700">
            Jerome Beatty Jr. (1916–2002) wrote children’s books with the confidence and clarity of the
            mid‑century greats — stories that treat kids as smart, capable, and ready for wonder.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-700">
            He’s best known for the <span className="font-medium">Matthew &amp; Maria Looney</span> books and the
            <span className="font-medium"> Sofa Pop</span> titles. This site is a small, growing tribute to his life and work.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white"
              href="#works"
            >
              Browse the books
            </a>
            <a
              className="rounded-full border border-black/15 px-5 py-2 text-sm font-medium"
              href="#inquiries"
            >
              Inquiries
            </a>
          </div>
        </header>

        <section className="grid gap-10 pt-10 md:grid-cols-12">
          <article className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Feature</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight">
              Space‑age imagination. Grounded, humane storytelling.
            </h2>
            <div className="prose prose-zinc mt-5 max-w-none">
              <p>
                The Looney twins’ adventures have that rare mix: big ideas, clean sentences, and a warm belief that
                curiosity is a virtue. The Sofa Pop books carry a similar spirit — playful, readable, and oddly timeless.
              </p>
              <p>
                We’re building a simple, editorial archive: titles, publication details, and (when available) scans and
                excerpts. If you’re here because you grew up with these books, welcome.
              </p>
              <blockquote>
                This is a quiet celebration — the kind you’d find in the middle pages of an old magazine: generous
                margins, sharp captions, and a few lovingly chosen facts.
              </blockquote>
            </div>
          </article>

          <aside className="md:col-span-4">
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-600">At a glance</div>
              <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                <div>
                  <dt className="text-zinc-500">Born</dt>
                  <dd className="font-medium">1916</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Died</dt>
                  <dd className="font-medium">2002</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-zinc-500">Known for</dt>
                  <dd className="font-medium">Matthew &amp; Maria Looney • Sofa Pop</dd>
                </div>
              </dl>
            </div>

            <p className="mt-6 text-xs leading-5 text-zinc-600">
              Editor’s note: This site will stay simple and static. Over time we’ll refine details and add references.
            </p>
          </aside>
        </section>

        <section id="works" className="pt-14">
          <div className="flex items-end justify-between gap-6 border-b border-black/10 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Index</p>
              <h2 className="mt-2 text-2xl font-semibold">Works</h2>
            </div>
            <p className="text-sm text-zinc-600">(More detail to come)</p>
          </div>

          <div className="grid gap-4 pt-6 md:grid-cols-2">
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="text-sm font-medium">Matthew &amp; Maria Looney</div>
              <div className="mt-2 text-sm text-zinc-600">
                The iconic series — classic, space‑age children’s sci‑fi with heart.
              </div>
            </div>
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="text-sm font-medium">Sofa Pop</div>
              <div className="mt-2 text-sm text-zinc-600">
                A companion set of books: playful, readable, and full of charm.
              </div>
            </div>
          </div>
        </section>

        <section id="inquiries" className="pt-14">
          <div className="border-b border-black/10 pb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Contact</p>
            <h2 className="mt-2 text-2xl font-semibold">Inquiries</h2>
          </div>

          <div className="mt-6 rounded-xl border border-black/10 bg-white p-6">
            <p className="text-sm text-zinc-700">
              For questions about Jerome Beatty Jr.’s books, this archive, or publishing inquiries:
              <br />
              <a
                className="font-medium underline"
                href="mailto:inquiries@jeromebeatty.com?subject=Jerome%20Beatty%20Jr%20inquiry"
              >
                inquiries@jeromebeatty.com
              </a>
            </p>
          </div>
        </section>

        <footer className="mt-16 border-t border-black/10 pt-8 text-xs text-zinc-600">
          © {new Date().getFullYear()} Jerome Beatty Jr. Archive.
        </footer>
      </div>
    </main>
  );
}
