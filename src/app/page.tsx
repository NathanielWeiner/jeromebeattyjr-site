export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="border-b border-black/10 pb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            An official archive
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tight">
            Jerome Beatty Jr.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700">
            Children’s author (1916–2002). A magazine-style archive of works,
            excerpts, and publication history.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white" href="#works">
              Browse works
            </a>
            <a className="rounded-full border border-black/15 px-5 py-2 text-sm font-medium" href="#inquiries">
              Rights & inquiries
            </a>
          </div>
        </header>

        <section className="grid gap-8 pt-10 md:grid-cols-12">
          <article className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
              Feature
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight">
              A life in stories — from magazines to the Looney twins.
            </h2>
            <div className="prose prose-zinc mt-5 max-w-none">
              <p>
                This site is a clean, editorial archive. Over time we’ll add
                publication credits, selected excerpts, and artifacts.
              </p>
              <blockquote>
                “A proper archive should read like a magazine feature: elegant
                typography, generous margins, and the occasional wry aside.”
              </blockquote>
              <p>
                The design goal: <strong>1960s Vanity Fair</strong> meets
                <strong> Gahan Wilson chic</strong> — high-contrast type, sharp
                captions, and restrained ink-like accents.
              </p>
            </div>
          </article>

          <aside className="md:col-span-4">
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Quick links
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a className="underline" href="#works">
                    Works
                  </a>
                </li>
                <li>
                  <a className="underline" href="#timeline">
                    Timeline
                  </a>
                </li>
                <li>
                  <a className="underline" href="#inquiries">
                    Rights & inquiries
                  </a>
                </li>
              </ul>
            </div>

            <p className="mt-6 text-xs leading-5 text-zinc-600">
              Editor’s note: We’re building this carefully. If you have scans,
              clippings, or publication info to contribute, we’d love to hear
              from you.
            </p>
          </aside>
        </section>

        <section id="works" className="pt-14">
          <div className="flex items-end justify-between gap-6 border-b border-black/10 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Index</p>
              <h2 className="mt-2 text-2xl font-semibold">Selected works</h2>
            </div>
            <p className="text-sm text-zinc-600">(Placeholders for now)</p>
          </div>

          <div className="grid gap-4 pt-6 md:grid-cols-2">
            {["Matthew & Maria Looney", "Magazine features", "Other books", "Interviews & ephemera"].map((t) => (
              <div key={t} className="rounded-xl border border-black/10 bg-white p-5">
                <div className="text-sm font-medium">{t}</div>
                <div className="mt-2 text-sm text-zinc-600">
                  Coming soon: credits, excerpts, and publication notes.
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="timeline" className="pt-14">
          <div className="border-b border-black/10 pb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Timeline</p>
            <h2 className="mt-2 text-2xl font-semibold">Milestones</h2>
          </div>
          <ol className="mt-6 space-y-4">
            {["1916 — Born", "Mid-century — Magazine writing", "Looney series — Published", "2002 — Passed"].map((t) => (
              <li key={t} className="flex gap-4">
                <div className="mt-2 h-2 w-2 rounded-full bg-black/60" />
                <div className="text-sm text-zinc-700">{t}</div>
              </li>
            ))}
          </ol>
        </section>

        <section id="inquiries" className="pt-14">
          <div className="border-b border-black/10 pb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Contact</p>
            <h2 className="mt-2 text-2xl font-semibold">Rights & inquiries</h2>
          </div>
          <div className="mt-6 rounded-xl border border-black/10 bg-white p-6">
            <p className="text-sm text-zinc-700">
              For publishing, permissions, or archival questions, email:
              <br />
              <a className="font-medium underline" href="mailto:inquiries@example.com?subject=Jerome%20Beatty%20Jr%20inquiry">
                inquiries@example.com
              </a>
            </p>
            <p className="mt-3 text-xs text-zinc-500">
              (We’ll swap in the real address once you confirm it.)
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
