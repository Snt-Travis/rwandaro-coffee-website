import { useState } from 'react';

const navItems = ['Home', 'About', 'Products', 'Impact', 'Processing', 'Export', 'Contact'];

const stats = [
  { value: '1,740', label: 'Total farmers' },
  { value: '1,183', label: 'Male farmers' },
  { value: '557', label: 'Female farmers' },
  { value: '644', label: 'Youth farmers' },
];

const products = [
  {
    title: 'Specialty Arabica',
    detail: 'Natural and washed Uganda Arabica with cup scores reaching 85-88.',
    note: 'Selective harvest, careful drying, export-ready lots.',
  },
  {
    title: 'Fine Robusta',
    detail: 'Natural Uganda Fine Robusta from farmer-managed gardens in South Western Uganda.',
    note: 'Clean processing, consistent bulking, strong buyer potential.',
  },
  {
    title: 'Vanilla',
    detail: 'Large-scale vanilla cultivated alongside coffee in diversified farm systems.',
    note: 'A premium complementary crop supporting farmer resilience.',
  },
];

const values = [
  'Integrity',
  'Fairness',
  'Accountability',
  'Customer satisfaction',
  'Efficiency & effectiveness',
  'Innovation',
  'Teamwork',
];

const services = [
  'Farmer training and extension services',
  'Coffee value addition through processing',
  'Market linkages',
  'Crop financing',
  'Bulking',
  'Exporting',
];

const journey = [
  'Farmer training',
  'Selective harvesting',
  'Bulking',
  'Processing',
  'Quality preparation',
  'Export inquiries',
];

function LeafIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 4C12.6 4.5 6.4 8.4 4.5 15.9c4.6 1 10.4-.2 13.3-4.5C19.1 9.5 19.8 7.1 20 4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 20c2.8-5.6 7-8.8 12.7-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function BeanIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15.8 3.8c4 2.3 5 8.1 2.3 12.8-2.8 4.7-8.2 6.6-12.2 4.3-4-2.4-5-8.1-2.2-12.8 2.7-4.8 8.2-6.7 12.1-4.3Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M14.9 4.5c-2 2.5-2.4 5.2-1.2 8 1 2.3.5 4.8-1.6 7.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold text-forest-900 md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-stone-700 md:text-lg">{text}</p> : null}
    </div>
  );
}

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-cream text-stone-900">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-forest-900/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex min-w-0 items-center gap-3 text-white" onClick={closeMenu}>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/60 bg-white/10 sm:h-11 sm:w-11">
              <LeafIcon className="h-5 w-5 text-gold sm:h-6 sm:w-6" />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block font-display text-sm font-extrabold uppercase tracking-[0.18em]">Rwandaro</span>
              <span className="block max-w-[8.5rem] truncate text-xs text-cream/75 sm:max-w-none">Coffee Farmers Cooperative Ltd.</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-cream/85 transition hover:text-gold">
                {item}
              </a>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-full bg-gold px-4 py-3 text-sm font-bold text-forest-900 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-oat md:px-5"
            >
              Inquiry
            </a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/15 lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="relative h-4 w-5">
                <span className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
              </span>
            </button>
          </div>
        </nav>
        <div className={`${menuOpen ? 'block' : 'hidden'} border-t border-white/10 bg-forest-900/95 shadow-2xl lg:hidden`}>
          <div className="mx-auto grid max-w-7xl gap-1 px-5 py-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-cream/85 transition hover:bg-white/10 hover:text-gold"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative isolate min-h-[92svh] overflow-hidden bg-hero-farm bg-cover bg-center pt-24 text-white md:min-h-screen md:pt-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(201,155,74,.35),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(255,255,255,.16),transparent_22%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:py-16 md:min-h-[calc(100vh-7rem)] md:gap-12 md:py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
            <div>
              <p className="mb-4 inline-flex max-w-[18rem] rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold leading-5 text-cream backdrop-blur sm:max-w-none sm:text-sm md:mb-5">
                Premium Ugandan coffee and vanilla for export buyers
              </p>
              <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.06] sm:text-5xl md:text-7xl md:leading-[1.02]">
                High quality coffee and vanilla from South Western Uganda.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-cream/90 sm:text-lg md:mt-6 md:max-w-2xl md:text-xl md:leading-8">
                Rwandaro Coffee Farmers Cooperative Ltd connects 1,740 farming families to quality-focused processing,
                reliable bulking, and international market opportunities.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-9 md:gap-4">
                <a href="#products" className="rounded-full bg-gold px-6 py-3.5 text-center font-bold text-forest-900 shadow-soft transition hover:-translate-y-1 hover:bg-oat md:px-7 md:py-4">
                  Explore products
                </a>
                <a href="#contact" className="rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-center font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20 md:px-7 md:py-4">
                  Request export details
                </a>
              </div>
            </div>
            <div className="rounded-[28px] border border-white/20 bg-white/12 p-5 shadow-soft backdrop-blur-md">
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white/88 p-5 text-forest-900">
                    <p className="font-display text-3xl font-extrabold">{stat.value}</p>
                    <p className="mt-1 text-sm font-semibold text-coffee-700">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl bg-forest-900/80 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-gold">Origin</p>
                <p className="mt-2 text-lg font-semibold">Rubirizi District, near Queen Elizabeth National Park and the Western Rift Valley.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-wrap bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
            <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-forest-700 shadow-soft">
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(23,67,45,.22),rgba(45,26,16,.32)),url('https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=1100&q=85')] bg-cover bg-center" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-cream/95 p-6 shadow-card">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Founded as a farmer group</p>
                <p className="mt-2 font-display text-4xl font-extrabold text-forest-900">2016</p>
              </div>
            </div>
            <div className="self-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-gold">About the cooperative</p>
              <h2 className="font-display text-3xl font-bold text-forest-900 md:text-5xl">Farmer-owned production with buyer-ready ambition.</h2>
              <p className="mt-6 text-lg leading-9 text-stone-700">
                Rwandaro Coffee Farmers Cooperative Ltd is a rural producer organization in Rubirizi District, South
                Western Uganda. The cooperative brings together farming households whose livelihoods depend mainly on
                coffee production, while also cultivating vanilla at meaningful scale through intercropped farm systems.
              </p>
              <p className="mt-5 text-lg leading-9 text-stone-700">
                Since its start as a farmers group in 2016, Rwandaro has strengthened farmer incomes through improved
                farming practices, training, crop financing, bulking, value addition, processing, marketing, and export
                services. The cooperative is built to serve both farmers and international buyers seeking traceable,
                quality-focused Ugandan coffee and vanilla.
              </p>
            </div>
          </div>
        </section>

        <section id="impact" className="section-wrap bg-cream">
          <SectionHeader
            eyebrow="Farmer impact"
            title="A cooperative built around livelihoods and quality."
            text="Rwandaro's work supports inclusive participation across men, women, and youth farmers while improving production standards for the export market."
          />
          <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {stats.map((stat) => (
              <div key={stat.label} className="group rounded-3xl border border-oat bg-white p-7 shadow-card transition duration-300 hover:-translate-y-2 hover:shadow-soft">
                <BeanIcon className="mb-8 h-10 w-10 text-gold transition group-hover:rotate-12" />
                <p className="font-display text-5xl font-extrabold text-forest-900">{stat.value}</p>
                <p className="mt-3 font-semibold text-coffee-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="section-wrap bg-white">
          <SectionHeader
            eyebrow="Products"
            title="Premium Ugandan coffee and vanilla."
            text="A focused product portfolio for buyers looking for origin character, farmer impact, and export potential."
          />
          <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3 lg:px-8">
            {products.map((product, index) => (
              <article key={product.title} className="product-card">
                <div className="mb-7 h-52 rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url(${productImage(index)})` }} />
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Rwandaro product</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-forest-900">{product.title}</h3>
                <p className="mt-4 leading-7 text-stone-700">{product.detail}</p>
                <p className="mt-5 rounded-2xl bg-forest-50 p-4 text-sm font-semibold leading-6 text-forest-700">{product.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="processing" className="section-wrap bg-forest-900 text-white">
          <SectionHeader
            eyebrow="Processing"
            title="From farmer gardens to export preparation."
            text="The cooperative supports the coffee journey through training, quality handling, aggregation, processing, and market readiness."
          />
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
              {journey.map((step, index) => (
                <div key={step} className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/12">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gold font-bold text-forest-900">{index + 1}</span>
                  <p className="mt-7 font-display text-lg font-bold">{step}</p>
                </div>
              ))}
            </div>
            <div id="export" className="mt-12 grid gap-6 rounded-[28px] bg-cream p-6 text-forest-900 shadow-soft md:grid-cols-[1fr_1.2fr] md:p-10">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">Export capacity</p>
                <h3 className="mt-3 font-display text-3xl font-extrabold">Prepared for serious buyer conversations.</h3>
              </div>
              <p className="text-lg leading-8 text-stone-700">
                Rwandaro combines farmer extension, bulking, processing, financing, and market linkage services so
                international buyers can engage a cooperative with clear origin identity, structured farmer membership,
                and an export-oriented quality mindset.
              </p>
            </div>
          </div>
        </section>

        <section className="section-wrap bg-cream">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-3 lg:px-8">
            <div className="rounded-3xl bg-forest-900 p-8 text-white shadow-soft">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">Vision</p>
              <p className="mt-5 font-display text-3xl font-bold leading-tight">A leading high quality certified coffee & vanilla producer and exporter in Uganda.</p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-card lg:col-span-2">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">Mission</p>
              <p className="mt-5 text-2xl font-semibold leading-10 text-forest-900">
                Promoting the living standards of our farmers through improved farming practices, marketing, crop financing, bulking and exporting.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {values.map((value) => (
                  <span key={value} className="rounded-full border border-oat bg-cream px-4 py-2 text-sm font-bold text-coffee-700">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap bg-white">
          <SectionHeader eyebrow="Services" title="Practical support from farm to market." />
          <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
            {services.map((service) => (
              <div key={service} className="rounded-3xl border border-oat bg-cream p-6 shadow-card transition hover:-translate-y-1 hover:bg-white">
                <LeafIcon className="mb-6 h-9 w-9 text-forest-700" />
                <p className="font-display text-xl font-bold text-forest-900">{service}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrap bg-cream">
          <SectionHeader eyebrow="Gallery" title="Replaceable image spaces for farms, farmers, processing, and products." />
          <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-4 lg:px-8">
            {[0, 1, 2, 3].map((item) => (
              <div key={item} className="gallery-tile" style={{ backgroundImage: `url(${galleryImage(item)})` }}>
                <span>Image placeholder</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-wrap bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-gold">Contact</p>
              <h2 className="font-display text-3xl font-bold text-forest-900 md:text-5xl">Start an export or partnership inquiry.</h2>
              <p className="mt-6 text-lg leading-8 text-stone-700">
                Share your requirements for coffee, vanilla, samples, quality details, or sourcing partnerships. The form is
                structured for future backend or email integration.
              </p>
              <div className="mt-8 space-y-4 text-stone-700">
                <p><strong className="text-forest-900">Phone:</strong> +256 772 439 958 / +256 752 039 958</p>
                <p><strong className="text-forest-900">Email:</strong> info@rwandarocoffee.com</p>
                <p><strong className="text-forest-900">Location:</strong> Rubirizi District, South Western Uganda, near Queen Elizabeth National Park / Western Rift Valley.</p>
              </div>
            </div>
            <form
              className="rounded-[28px] bg-cream p-6 shadow-soft md:p-8"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="form-field">Name<input type="text" placeholder="Your name" /></label>
                <label className="form-field">Company<input type="text" placeholder="Company or organization" /></label>
                <label className="form-field">Email<input type="email" placeholder="name@example.com" /></label>
                <label className="form-field">Interest<select defaultValue=""><option value="" disabled>Select product</option><option>Coffee</option><option>Vanilla</option><option>Partnership</option></select></label>
              </div>
              <label className="form-field mt-5">Message<textarea rows={5} placeholder="Tell us about volumes, samples, origin requirements, or buyer questions." /></label>
              {submitted ? (
                <p className="mt-6 rounded-2xl border border-forest-100 bg-white px-5 py-4 text-sm font-bold leading-6 text-forest-700">
                  Thank you. Your inquiry has been captured in this preview flow. This form is ready to connect to email or a backend next.
                </p>
              ) : null}
              <button type="submit" className="mt-6 w-full rounded-full bg-forest-700 px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-forest-900">
                Send inquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-forest-900 px-5 py-12 text-cream lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-extrabold">Rwandaro Coffee Farmers Cooperative Ltd.</p>
            <p className="mt-4 max-w-md leading-7 text-cream/75">Premium Ugandan specialty coffee and vanilla from Rubirizi District, South Western Uganda.</p>
          </div>
          <div>
            <p className="font-bold text-gold">Quick links</p>
            <div className="mt-4 grid gap-2">
              {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-cream/75 hover:text-gold">{item}</a>)}
            </div>
          </div>
          <div>
            <p className="font-bold text-gold">Contact</p>
            <p className="mt-4 text-cream/75">+256 772 439 958</p>
            <p className="mt-2 text-cream/75">info@rwandarocoffee.com</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/256772439958"
        className="fixed bottom-3 right-3 z-50 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-1 sm:bottom-5 sm:right-5 sm:px-5 sm:py-4"
        aria-label="Contact Rwandaro Coffee on WhatsApp"
      >
        <span className="sm:hidden">WA</span>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}

function productImage(index: number) {
  return [
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=900&q=80',
  ][index];
}

function galleryImage(index: number) {
  return [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=700&q=80',
  ][index];
}

export default App;
