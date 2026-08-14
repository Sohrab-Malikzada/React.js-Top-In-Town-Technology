import React, { useState } from "react";
import {
    Menu,
    X,
    ChevronDown,
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Youtube,
    ArrowRight,
    CalendarDays,
    Tag,
    Globe,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const galleryItems = [
    {
        id: 1,
        title: "Launch of Specialized IT Courses",
        category: "IT Courses",
        year: "2014",
        description:
            "The center began offering specialized courses in networking, programming, and cybersecurity, rapidly gaining recognition in the field of IT education.",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    },
    {
        id: 2,
        title: "Introduction of International Certifications",
        category: "Courses",
        year: "2016",
        description:
            "Top in Town Technology began to provide international certifications, enhancing the credibility of its courses and students.",
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
    },
    {
        id: 3,
        title: "Continued Growth and Global Partnerships",
        category: "Partnerships",
        year: "2021",
        description:
            "Continued growth and partnership with international organizations to offer globally recognized IT certifications.",
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    },
    {
        id: 4,
        title: "Advanced IT and Certification Programs",
        category: "Advanced Certification",
        year: "2019",
        description:
            "Introduction of more advanced IT courses and certification programs, including cloud computing and data analysis.",
        image:
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85",
    },
];

const previousNews = [
    {
        year: "2013",
        title: "Foundation Year",
        description:
            "Top in Town Technology was established in Kabul, Afghanistan, with the goal of providing high-quality IT training to young Afghan students.",
        image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    },
    {
        year: "2014",
        title: "Launch of Specialized IT Courses",
        description:
            "The center began offering specialized courses in networking, programming, and cybersecurity.",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    },
    {
        year: "2015",
        title: "Growth in Courses and Enrollment",
        description:
            "Expansion of course offerings, including design and graphics, as well as continued growth in the number of students.",
        image:
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
    },
    {
        year: "2016",
        title: "Introduction of International Certifications",
        description:
            "Top in Town Technology began to provide international certifications, enhancing the credibility of its courses and students.",
        image:
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
    },
    {
        year: "2017",
        title: "Hosting Workshops for Professionals",
        description:
            "The center hosted workshops and training sessions for industry professionals, strengthening its role in the Afghan IT community.",
        image:
            "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=900&q=80",
    },
    {
        year: "2018",
        title: "Strategic Collaborations",
        description:
            "Successful collaborations with local and international organizations to provide internships and job opportunities for graduates.",
        image:
            "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
    },
    {
        year: "2019",
        title: "Advanced IT and Certification Programs",
        description:
            "Introduction of more advanced IT courses and certification programs, including cloud computing and data analysis.",
        image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    },
    {
        year: "2020",
        title: "Digital Transition Amid Pandemic",
        description:
            "Shift to online education due to the COVID-19 pandemic, making courses accessible to students nationwide.",
        image:
            "https://images.unsplash.com/photo-1584697964198-4f5b5f7c7e8b?auto=format&fit=crop&w=900&q=80",
    },
    {
        year: "2021",
        title: "Continued Growth and Global Partnerships",
        description:
            "Continued growth and partnership with international organizations to offer globally recognized IT certifications.",
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    },
    {
        year: "2022",
        title: "Facility Expansion and Graduate Success",
        description:
            "Ongoing expansion of training facilities and an increase in the number of successful graduates entering the job market.",
        image:
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
    },
    {
        year: "2023",
        title: "Embracing Emerging Technologies",
        description:
            "Focus on new technologies such as artificial intelligence, machine learning, and blockchain in the curriculum.",
        image:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    },
    {
        year: "2024",
        title: "Leading the Afghan IT Education Market",
        description:
            "Top in Town Technology continued to expand its range of courses and training programs.",
        image:
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
    },
    {
        year: "2025",
        title: "Future-Oriented Programs and Global Integration",
        description:
            "Plans to introduce advanced technology programs and strengthen collaborations with global technology firms.",
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    },
];

const navItems = [
    { label: "Home", href: "/" },
    {
        label: "Features",
        children: [
            { label: "Team Members", href: "/team" },
            { label: "Testimonials", href: "/testimonials" },
        ],
    },
    {
        label: "About",
        children: [
            { label: "About", href: "/about" },
            { label: "Gallery", href: "/gallery" },
        ],
    },
    {
        label: "Course",
        children: [
            { label: "Course Category", href: "/courses" },
            { label: "Course Details", href: "/courses" },
        ],
    },
    { label: "Contact Us", href: "/contact" },
];

function App() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const [languageOpen, setLanguageOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [newsStart, setNewsStart] = useState(0);

    const visibleNews = previousNews.slice(newsStart, newsStart + 4);

    const nextNews = () => {
        setNewsStart((current) =>
            current + 4 >= previousNews.length ? 0 : current + 4
        );
    };

    const previousNewsSlide = () => {
        setNewsStart((current) =>
            current - 4 < 0
                ? Math.max(previousNews.length - 4, 0)
                : current - 4
        );
    };

    return (
        <div className="min-h-screen bg-white text-slate-800">
            {/* TOP BAR */}
            <div className="bg-slate-950 text-slate-300">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
                    <div className="relative">
                        <button
                            onClick={() => setLanguageOpen(!languageOpen)}
                            className="flex items-center gap-2 rounded-lg px-2 py-1 transition hover:bg-white/10 hover:text-white"
                        >
                            <Globe size={15} />
                            Language
                            <ChevronDown
                                size={14}
                                className={`transition ${languageOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {languageOpen && (
                            <div className="absolute left-0 top-10 z-50 w-36 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl">
                                <button className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm hover:bg-white/10">
                                    🇬🇧 English
                                </button>
                                <button className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm hover:bg-white/10">
                                    🇦🇫 فارسی
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
                        <a
                            href="tel:+93788660118"
                            className="flex items-center gap-2 transition hover:text-white"
                        >
                            <Phone size={14} />
                            (+93) 788 660 118
                        </a>

                        <a
                            href="mailto:info@topintowntechnology.com"
                            className="flex items-center gap-2 transition hover:text-white"
                        >
                            <Mail size={14} />
                            info@topintowntechnology.com
                        </a>
                    </div>
                </div>
            </div>

            {/* NAVBAR */}
            <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-900/95 shadow-xl backdrop-blur-xl">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <a href="/" className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=200&q=80"
                                    alt="Top in Town Technology"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="hidden sm:block">
                                <p className="text-sm font-bold tracking-wide text-white">
                                    TOP IN TOWN
                                </p>
                                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-400">
                                    Technology
                                </p>
                            </div>
                        </a>

                        {/* DESKTOP NAV */}
                        <nav className="hidden items-center gap-1 lg:flex">
                            {navItems.map((item, index) => (
                                <div key={item.label} className="relative">
                                    {item.children ? (
                                        <>
                                            <button
                                                onClick={() =>
                                                    setOpenMenu(
                                                        openMenu === index ? null : index
                                                    )
                                                }
                                                className={`flex items-center gap-1.5 rounded-lg px-4 py-3 text-sm font-medium transition ${openMenu === index
                                                        ? "bg-white/10 text-cyan-400"
                                                        : "text-slate-200 hover:bg-white/10 hover:text-cyan-400"
                                                    }`}
                                            >
                                                {item.label}
                                                <ChevronDown
                                                    size={15}
                                                    className={`transition ${openMenu === index ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>

                                            {openMenu === index && (
                                                <div className="absolute left-0 top-14 w-56 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 p-2 shadow-2xl">
                                                    {item.children.map((child) => (
                                                        <a
                                                            key={child.label}
                                                            href={child.href}
                                                            className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-cyan-500/10 hover:text-cyan-400"
                                                        >
                                                            {child.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-cyan-400"
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* MOBILE BUTTON */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="rounded-xl border border-slate-700 p-2.5 text-white lg:hidden"
                        >
                            {mobileOpen ? <X size={23} /> : <Menu size={23} />}
                        </button>
                    </div>

                    {/* MOBILE NAV */}
                    {mobileOpen && (
                        <div className="border-t border-slate-800 py-4 lg:hidden">
                            <nav className="space-y-1">
                                {navItems.map((item, index) => (
                                    <div key={item.label}>
                                        {item.children ? (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        setOpenMenu(
                                                            openMenu === index ? null : index
                                                        )
                                                    }
                                                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-200 hover:bg-white/10"
                                                >
                                                    {item.label}
                                                    <ChevronDown
                                                        size={16}
                                                        className={`transition ${openMenu === index ? "rotate-180" : ""
                                                            }`}
                                                    />
                                                </button>

                                                {openMenu === index && (
                                                    <div className="ml-4 border-l border-slate-700 pl-3">
                                                        {item.children.map((child) => (
                                                            <a
                                                                key={child.label}
                                                                href={child.href}
                                                                className="block rounded-lg px-4 py-2.5 text-sm text-slate-400 hover:text-cyan-400"
                                                            >
                                                                {child.label}
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <a
                                                href={item.href}
                                                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-cyan-400"
                                            >
                                                {item.label}
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </header>

            {/* HERO */}
            <section className="relative overflow-hidden bg-slate-950">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=85"
                        alt=""
                        className="h-full w-full object-cover opacity-25"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
                    <div className="max-w-3xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                            Top in Town Technology
                        </div>

                        <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Our{" "}
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Gallery
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                            Explore our journey, achievements, educational milestones,
                            partnerships, and the moments that shaped Top in Town
                            Technology.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#gallery"
                                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
                            >
                                Explore Gallery
                                <ArrowRight size={18} />
                            </a>

                            <a
                                href="#timeline"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/10"
                            >
                                Our Journey
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB */}
            <div className="border-b border-slate-200 bg-slate-50">
                <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm lg:px-8">
                    <a
                        href="/"
                        className="font-medium text-cyan-600 hover:text-cyan-700"
                    >
                        Home
                    </a>
                    <span className="text-slate-400">/</span>
                    <span className="font-medium text-slate-500">Gallery</span>
                </div>
            </div>

            {/* GALLERY */}
            <section id="gallery" className="bg-white py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
                            Highlights
                        </span>

                        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                            Moments That Define Our Journey
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                            A collection of important milestones and achievements from
                            Top in Town Technology.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {galleryItems.map((item) => (
                            <article
                                key={item.id}
                                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                                    <div className="absolute left-5 top-5">
                                        <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-slate-800 shadow-lg backdrop-blur">
                                            {item.year}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 lg:p-7">
                                    <h3 className="text-2xl font-bold text-slate-900 transition group-hover:text-cyan-600">
                                        {item.title}
                                    </h3>

                                    <div className="mt-4 flex flex-wrap gap-4 text-sm">
                                        <span className="inline-flex items-center gap-1.5 font-medium text-slate-500">
                                            <Tag size={15} className="text-cyan-500" />
                                            {item.category}
                                        </span>

                                        <span className="inline-flex items-center gap-1.5 font-medium text-slate-500">
                                            <CalendarDays size={15} className="text-cyan-500" />
                                            {item.year}
                                        </span>
                                    </div>

                                    <p className="mt-4 leading-7 text-slate-500">
                                        {item.description}
                                    </p>

                                    <button
                                        onClick={() => setSelectedItem(item)}
                                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
                                    >
                                        View Details
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <section
                id="timeline"
                className="overflow-hidden bg-slate-950 py-16 lg:py-24"
            >
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                                Our History
                            </span>

                            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                                Previous News
                            </h2>

                            <p className="mt-4 max-w-2xl text-slate-400">
                                Follow the evolution of Top in Town Technology from its
                                foundation to its future-oriented programs.
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={previousNewsSlide}
                                className="rounded-xl border border-slate-700 bg-white/5 p-3 text-white transition hover:bg-cyan-500"
                                aria-label="Previous"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            <button
                                onClick={nextNews}
                                className="rounded-xl border border-slate-700 bg-white/5 p-3 text-white transition hover:bg-cyan-500"
                                aria-label="Next"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {visibleNews.map((item) => (
                            <article
                                key={item.year}
                                className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-500 hover:-translate-y-1 hover:border-cyan-500/40"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

                                    <span className="absolute bottom-4 left-4 rounded-lg bg-cyan-500 px-3 py-1.5 text-sm font-black text-white">
                                        {item.year}
                                    </span>
                                </div>

                                <div className="p-5">
                                    <h3 className="line-clamp-2 text-lg font-bold text-white transition group-hover:text-cyan-400">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-400">
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 flex justify-center gap-2">
                        {Array.from({
                            length: Math.ceil(previousNews.length / 4),
                        }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setNewsStart(index * 4)}
                                className={`h-2 rounded-full transition-all ${Math.floor(newsStart / 4) === index
                                        ? "w-8 bg-cyan-400"
                                        : "w-2 bg-slate-700"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* NEWSLETTER */}
            <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 to-blue-700 py-16">
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-950/20 blur-3xl" />

                <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-100">
                        Stay Connected
                    </span>

                    <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                        Subscribe to Our Newsletter
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-cyan-50">
                        Get the latest updates, educational opportunities, courses, and
                        technology news directly in your inbox.
                    </p>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
                    >
                        <input
                            type="email"
                            required
                            placeholder="Your Email Address"
                            className="min-w-0 flex-1 rounded-xl border border-white/20 bg-white px-5 py-3.5 text-slate-900 outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-white/20"
                        />

                        <button
                            type="submit"
                            className="rounded-xl bg-slate-950 px-7 py-3.5 font-bold text-white transition hover:bg-slate-800"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-slate-950 text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                        {/* ABOUT */}
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white">
                                    <img
                                        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=200&q=80"
                                        alt="Top in Town Technology"
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-bold">Top in Town Technology</h3>
                                    <p className="text-xs uppercase tracking-widest text-cyan-400">
                                        Technology & Education
                                    </p>
                                </div>
                            </div>

                            <p className="leading-7 text-slate-400">
                                Empowering students and professionals through practical IT
                                education, modern technology, professional training, and
                                globally relevant digital skills.
                            </p>

                            <div className="mt-6 flex gap-3">
                                <a
                                    href="#"
                                    className="rounded-lg border border-slate-800 p-2.5 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400"
                                >
                                    <Facebook size={18} />
                                </a>

                                <a
                                    href="#"
                                    className="rounded-lg border border-slate-800 p-2.5 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400"
                                >
                                    <Instagram size={18} />
                                </a>

                                <a
                                    href="#"
                                    className="rounded-lg border border-slate-800 p-2.5 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400"
                                >
                                    <Linkedin size={18} />
                                </a>

                                <a
                                    href="#"
                                    className="rounded-lg border border-slate-800 p-2.5 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400"
                                >
                                    <Twitter size={18} />
                                </a>

                                <a
                                    href="#"
                                    className="rounded-lg border border-slate-800 p-2.5 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400"
                                >
                                    <Youtube size={18} />
                                </a>
                            </div>
                        </div>

                        {/* CONTACT */}
                        <div>
                            <h3 className="mb-6 border-b border-slate-800 pb-4 text-lg font-bold">
                                Contact Us
                            </h3>

                            <div className="space-y-5">
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                                        <MapPin size={18} />
                                    </div>

                                    <div>
                                        <p className="font-semibold">Address</p>
                                        <p className="mt-1 text-sm text-slate-400">
                                            Karte-Parwan, Kabul, Afghanistan
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                                        <Phone size={18} />
                                    </div>

                                    <div>
                                        <p className="font-semibold">Call Now</p>
                                        <a
                                            href="tel:+93788660118"
                                            className="mt-1 block text-sm text-slate-400 hover:text-cyan-400"
                                        >
                                            (+93) 788 660 118
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                                        <Mail size={18} />
                                    </div>

                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <a
                                            href="mailto:info@topintowntechnology.com"
                                            className="mt-1 block text-sm text-slate-400 hover:text-cyan-400"
                                        >
                                            info@topintowntechnology.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* EXPLORE */}
                        <div>
                            <h3 className="mb-6 border-b border-slate-800 pb-4 text-lg font-bold">
                                Explore Our Site
                            </h3>

                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    ["About Us", "/about"],
                                    ["Contact Us", "/contact"],
                                    ["Gallery", "/gallery"],
                                    ["Team", "/team"],
                                    ["Courses", "/courses"],
                                    ["Testimonials", "/testimonials"],
                                ].map(([label, href]) => (
                                    <a
                                        key={label}
                                        href={href}
                                        className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
                                    >
                                        <ArrowRight
                                            size={14}
                                            className="transition group-hover:translate-x-1"
                                        />
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="border-t border-slate-800">
                    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-center text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
                        <p>
                            © {new Date().getFullYear()} Top in Town Technology. All rights
                            reserved.
                        </p>

                        <p>
                            Built for the future of{" "}
                            <span className="font-semibold text-cyan-400">
                                IT Education
                            </span>
                        </p>
                    </div>
                </div>
            </footer>

            {/* DETAILS MODAL */}
            {selectedItem && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedItem(null)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="max-h-[90vh] w-full max-w-2xl overflow-hidden overflow-y-auto rounded-3xl bg-white shadow-2xl"
                    >
                        <div className="relative aspect-video">
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                className="h-full w-full object-cover"
                            />

                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute right-4 top-4 rounded-full bg-slate-950/70 p-2 text-white backdrop-blur transition hover:bg-cyan-500"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-7">
                            <div className="flex flex-wrap gap-3">
                                <span className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-bold text-cyan-700">
                                    {selectedItem.category}
                                </span>

                                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                                    {selectedItem.year}
                                </span>
                            </div>

                            <h2 className="mt-4 text-3xl font-black text-slate-900">
                                {selectedItem.title}
                            </h2>

                            <p className="mt-4 leading-8 text-slate-500">
                                {selectedItem.description}
                            </p>

                            <button
                                onClick={() => setSelectedItem(null)}
                                className="mt-6 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;