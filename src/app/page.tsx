export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="border-b border-black/10 pb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">An author archive</p>

          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tight">Jerome Beatty Jr.</h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-700">
            Jerome M. Beatty Jr. (December 9, 1916 – July 31, 2002) was an American author of children’s literature and
            a magazine feature writer.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-700">
            He’s best known for the <span className="font-medium">Matthew &amp; Maria Looney</span> science‑fiction series —
            published in the early Space Age — and for the Bob Fulton soda‑pop adventure books.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white" href="#works">
              Browse works
            </a>
            <a className="rounded-full border border-black/15 px-5 py-2 text-sm font-medium" href="#inquiries">
              Inquiries
            </a>
          </div>
        </header>

        <section className="grid gap-10 pt-10 md:grid-cols-12">
          <article className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Feature</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight">A Space‑Age series with a human heartbeat.</h2>
            <div className="prose prose-zinc mt-5 max-w-none">
              <p>
                The Looney books follow brother‑and‑sister Matthew and Maria, who live on the Moon in a civilization that
                turns out to be wonderfully (and sometimes wryly) familiar to Earthlings.
              </p>
              <p>
                Beatty served in the U.S. Army during World War II, reaching the rank of corporal, and is buried at the
                Massachusetts National Cemetery.
              </p>
              <blockquote>
                The aim here is simple: celebrate the stories, preserve the publication trail, and make it easy to ask
                the right questions about rights and reprints.
              </blockquote>
            </div>
          </article>

          <aside className="md:col-span-4">
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-600">At a glance</div>
              <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                <div>
                  <dt className="text-zinc-500">Born</dt>
                  <dd className="font-medium">Dec 9, 1916</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Died</dt>
                  <dd className="font-medium">Jul 31, 2002</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-zinc-500">Known for</dt>
                  <dd className="font-medium">Matthew &amp; Maria Looney • Bob Fulton</dd>
                </div>
              </dl>
            </div>

            <p className="mt-6 text-xs leading-5 text-zinc-600">
              Editor’s note: This site is intentionally simple and static.
            </p>
          </aside>
        </section>

        <section id="works" className="pt-14">
          <div className="flex items-end justify-between gap-6 border-b border-black/10 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Index</p>
              <h2 className="mt-2 text-2xl font-semibold">Selected works</h2>
            </div>
            <p className="text-sm text-zinc-600">(from public sources)</p>
          </div>

          <div className="grid gap-4 pt-6 md:grid-cols-2">
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="text-sm font-medium">Matthew &amp; Maria Looney (series)</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li>Matthew Looney’s Voyage to the Earth (1961)</li>
                <li>Matthew Looney’s Invasion of the Earth (1965)</li>
                <li>Matthew Looney in the Outback (1969)</li>
                <li>Matthew Looney and the Space Pirates (1972)</li>
                <li>Maria Looney on the Red Planet (1977)</li>
                <li>Maria Looney and the Cosmic Circus (1978)</li>
                <li>Maria Looney and the Remarkable Robot (1978)</li>
              </ul>
            </div>

            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="text-sm font-medium">Bob Fulton (soda‑pop adventures)</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li>Bob Fulton’s Amazing Soda‑Pop Stretcher: An International Spy Story (1963)</li>
                <li>Bob Fulton’s Terrific Time Machine: An Adventure in Space and Time (1963)</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-xs text-zinc-600">
            (If you have corrections, publication details, or scans, we’d love to incorporate them.)
          </p>
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
