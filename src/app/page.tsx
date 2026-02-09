export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="border-b border-black/10 pb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            The Official Archive
          </p>

          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tight">
            Jerome Beatty Jr.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-700">
            Author, journalist, and the man who put children on the Moon —
            before NASA did.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-700">
            1916–2002
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white"
              href="#works"
            >
              Discover His Books
            </a>
            <a
              className="rounded-full border border-black/15 px-5 py-2 text-sm font-medium"
              href="#inquiries"
            >
              Get in Touch
            </a>
          </div>
        </header>

        <section className="grid gap-10 pt-10 md:grid-cols-12">
          <article className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
              The Books
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight">
              Meet the Looneys.
            </h2>
            <div className="prose prose-zinc mt-5 max-w-none">
              <p>
                In 1961 — two years before the first American orbited the Earth
                and eight years before anyone set foot on the Moon — Jerome
                Beatty Jr. was already there.
              </p>
              <p>
                His Matthew and Maria Looney series imagined a civilization of
                kids and families living in the town of Crater Plato, on the
                Moon, where Earthlings were the aliens and vacuum was perfectly
                good air. Matthew dreamed of space travel. Maria preferred
                sports and trouble. Their father worked at the powder factory.
                Their uncle was a rear admiral. It was, in every way that
                mattered, a perfectly normal childhood — just 238,000 miles from
                here.
              </p>
              <p>
                Illustrated by the legendary New Yorker cartoonist Gahan Wilson,
                the Looney books were a staple of school libraries through the
                1980s. They captured the wonder of the Space Age for a
                generation of kids who grew up watching Apollo missions on
                television and imagined that the Moon might just be looking
                back.
              </p>
            </div>
          </article>

          <aside className="md:col-span-4">
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                At a glance
              </div>
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
                  <dd className="font-medium">Matthew Looney • Bob Fulton</dd>
                </div>
              </dl>
            </div>
          </aside>
        </section>

        <section id="works" className="pt-14">
          <div className="flex items-end justify-between gap-6 border-b border-black/10 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Index
              </p>
              <h2 className="mt-2 text-2xl font-semibold">Selected works</h2>
            </div>
          </div>

          <div className="grid gap-4 pt-6 md:grid-cols-2">
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="text-sm font-medium">
                Matthew &amp; Maria Looney (series)
              </div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li>Matthew Looney&apos;s Voyage to the Earth (1961)</li>
                <li>Matthew Looney&apos;s Invasion of the Earth (1965)</li>
                <li>Matthew Looney in the Outback (1969)</li>
                <li>Matthew Looney and the Space Pirates (1972)</li>
                <li>Maria Looney on the Red Planet (1977)</li>
                <li>Maria Looney and the Cosmic Circus (1978)</li>
                <li>Maria Looney and the Remarkable Robot (1978)</li>
              </ul>
            </div>

            <div className="rounded-xl border border-black/10 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Also by Jerome
              </p>
              <div className="mt-2 text-sm font-medium">
                The kid with the soda-pop stretcher.
              </div>
              <p className="mt-3 text-sm text-zinc-700">
                Before there were spy kids, there was Bob Fulton — an ordinary
                boy who stumbles into an international espionage plot involving,
                of all things, a machine that stretches soda pop. The sequel
                sent him hurtling through time itself.
              </p>
              <p className="mt-3 text-sm text-zinc-700">
                Gahan Wilson illustrated these too, and the combination of
                Beatty&apos;s breezy plotting with Wilson&apos;s wonderfully weird
                drawings made them the kind of books you&apos;d read under the
                covers with a flashlight.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li>
                  Bob Fulton&apos;s Amazing Soda-Pop Stretcher: An International Spy
                  Story (1963)
                </li>
                <li>
                  Bob Fulton&apos;s Terrific Time Machine: An Adventure in Space and
                  Time (1963)
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pt-14">
          <div className="border-b border-black/10 pb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
              The Writer
            </p>
            <h2 className="mt-2 text-2xl font-semibold">A life in stories.</h2>
          </div>

          <div className="mt-6 rounded-xl border border-black/10 bg-white p-6 text-sm leading-7 text-zinc-700">
            <p>
              Jerome M. Beatty Jr. was born on December 9, 1916. Before he
              wrote children&apos;s books, he was a magazine man — the kind who got
              sent on assignment to write features for Collier&apos;s, Esquire, The
              American Magazine, and The Atlantic. He profiled Rita Hayworth at
              the height of her fame. He wrote a piece for Esquire called
              "Hanging Up on Hemingway" about the night Ernest called and talked
              so long that nobody could remember when the conversation started.
              He covered the South Pole, pipe smokers, and the White House.
            </p>
            <p className="mt-4">
              He served in the U.S. Army during World War II, reaching the rank
              of corporal.
            </p>
            <p className="mt-4">
              But it was children&apos;s fiction where he found his real voice.
              Starting with <em>Matthew Looney&apos;s Voyage to the Earth</em> in
              1961, Beatty created worlds that were funny, humane, and just
              strange enough to stick with you. He kept writing through the late
              1970s, producing seven Looney books and two Bob Fulton adventures.
            </p>
            <p className="mt-4">
              Jerome Beatty Jr. died on July 31, 2002. He is buried at the
              Massachusetts National Cemetery. His books are out of print — but
              not forgotten. Readers still find them in libraries, used
              bookstores, and passed down from parents who read them as kids.
            </p>
          </div>
        </section>

        <section id="inquiries" className="pt-14">
          <div className="border-b border-black/10 pb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
              Contact
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              We&apos;d love to hear from you.
            </h2>
          </div>

          <div className="mt-6 rounded-xl border border-black/10 bg-white p-6">
            <p className="text-sm leading-7 text-zinc-700">
              Whether you grew up reading the Looney books, discovered them at a
              library sale, or are interested in republishing Jerome&apos;s work —
              we want to hear from you.
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-700">
              The family estate manages all rights for Jerome Beatty Jr.&apos;s
              published works. We welcome inquiries about reprinting,
              translation, adaptation, and anything else.
            </p>
            <p className="mt-3 text-sm text-zinc-700">
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
          <p>© 2026 The Estate of Jerome Beatty Jr.</p>
          <p className="mt-2 flex flex-wrap gap-2">
            <a className="underline" href="#" aria-label="Wikipedia">
              Wikipedia
            </a>
            <span>·</span>
            <a className="underline" href="#" aria-label="ISFDB">
              ISFDB
            </a>
            <span>·</span>
            <a className="underline" href="#" aria-label="Library of Congress">
              Library of Congress
            </a>
            <span>·</span>
            <a className="underline" href="#" aria-label="Goodreads">
              Goodreads
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
