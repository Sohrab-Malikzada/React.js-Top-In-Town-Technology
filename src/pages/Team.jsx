import React, { useState } from "react";
import {
    Search,
    Moon,
    Sun,
    Menu,
    X,
    ChevronDown,
    ChevronRight,
    Globe,
    Phone,
    Mail,
    Users,
    Paperclip,
    MapPin,
    ArrowRight,
    Facebook,
    Instagram,
    Linkedin,
    Send,
} from "lucide-react";

const teamMembers = [
    {
        name: "Sohrab Ataei",
        role: "Programmer",
        image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=900&q=90",
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        whatsapp: "#",
        google: "#",
    },
    {
        name: "Sharif Khairy",
        role: "IT Officer",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=90",
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        whatsapp: "#",
        google: "#",
    },
    {
        name: "Habib Yadgar",
        role: "Programmer",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=90",
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        whatsapp: "#",
        google: "#",
    },
    {
        name: "Hayatullah Sadat",
        role: "Programmer",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=90",
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        whatsapp: "#",
        google: "#",
    },
];

const socialLinks = [
    {
        name: "LinkedIn",
        key: "linkedin",
        Icon: Linkedin,
    },
    {
        name: "Instagram",
        key: "instagram",
        Icon: Instagram,
    },
];

function SocialButton({ member, social, dark = false }) {
    const Icon = social.Icon;

    return (
        <a
            href={member[social.key]}
            aria-label={`${member.name} ${social.name}`}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${dark
                    ? "border border-slate-700 bg-slate-900 text-slate-400 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
                    : "bg-white/95 text-slate-700 shadow-lg hover:bg-indigo-600 hover:text-white"
                }`}
        >
            <Icon size={17} strokeWidth={2} />
        </a>
    );
}

function TeamCard({ member, second = false }) {
    return (
        <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">

            {/* IMAGE */}
            <div className="relative overflow-hidden">
                <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className={`w-full object-cover transition duration-700 group-hover:scale-110 ${second ? "h-[330px]" : "h-[360px]"
                        }`}
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* SOCIAL ICONS */}
                <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 translate-y-8 gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {socialLinks.map((social) => (
                        <SocialButton
                            key={social.name}
                            member={member}
                            social={social}
                        />
                    ))}
                </div>

                {/* BADGE */}
                <div className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                    Team Member
                </div>
            </div>

            {/* CONTENT */}
            <div className="p-5">
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                    {member.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {member.role}
                </p>

                {second && (
                    <div className="mt-5 flex gap-2">
                        {[
                            {
                                name: "LinkedIn",
                                key: "linkedin",
                                Icon: Linkedin,
                            },
                            {
                                name: "Instagram",
                                key: "instagram",
                                Icon: Instagram,
                            },
                        ].map((social) => (
                            <SocialButton
                                key={social.name}
                                member={member}
                                social={social}
                                dark
                            />
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}

export default function Team() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

                {/* =====================================================
                    TOP BAR
                ====================================================== */}
                <div className="bg-slate-950 text-slate-300">
                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-3 text-xs sm:flex-row lg:px-8">

                        {/* LANGUAGE */}
                        <div className="relative">
                            <button
                                onClick={() =>
                                    setLanguageOpen(!languageOpen)
                                }
                                className="flex items-center gap-2 transition hover:text-white"
                            >
                                <Globe size={15} />

                                <span>Language</span>

                                <ChevronDown
                                    size={12}
                                    className={`transition ${languageOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {languageOpen && (
                                <div className="absolute left-0 top-8 z-50 w-36 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl">
                                    <button className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm transition hover:bg-slate-800">
                                        🇬🇧 English
                                    </button>

                                    <button className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm transition hover:bg-slate-800">
                                        🇦🇫 فارسی
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* CONTACT */}
                        <div className="flex flex-wrap items-center justify-center gap-5">

                            <a
                                href="tel:+93788660118"
                                className="flex items-center gap-2 transition hover:text-white"
                            >
                                <Phone size={14} />
                                +93 788 660 118
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

                {/* =====================================================
                    NAVBAR
                ====================================================== */}
                <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">

                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">

                        {/* LOGO */}
                        <a href="/" className="flex items-center gap-3">

                            <img
                                src="https://dummyimage.com/120x120/4f46e5/ffffff&text=TT"
                                alt="Top in Town Technology"
                                className="h-12 w-12 rounded-xl object-cover shadow-lg"
                            />

                            <div className="hidden sm:block">
                                <p className="text-sm font-black tracking-wide text-slate-900 dark:text-white">
                                    TOP IN TOWN
                                </p>

                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-600">
                                    Technology
                                </p>
                            </div>
                        </a>

                        {/* DESKTOP NAV */}
                        <nav className="hidden items-center gap-1 lg:flex">

                            <a
                                href="/"
                                className="rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-800"
                            >
                                Home
                            </a>

                            {/* FEATURES */}
                            <div className="group relative">

                                <button className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-800">
                                    Features
                                    <ChevronDown size={13} />
                                </button>

                                <div className="invisible absolute left-0 top-full mt-2 w-52 translate-y-2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-900">

                                    <a
                                        href="/team"
                                        className="block rounded-xl px-4 py-3 text-sm transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-800"
                                    >
                                        Team Members
                                    </a>

                                    <a
                                        href="/testimonials"
                                        className="block rounded-xl px-4 py-3 text-sm transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-800"
                                    >
                                        Testimonials
                                    </a>
                                </div>
                            </div>

                            {/* ABOUT */}
                            <div className="group relative">

                                <button className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-800">
                                    About
                                    <ChevronDown size={13} />
                                </button>

                                <div className="invisible absolute left-0 top-full mt-2 w-48 translate-y-2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-900">

                                    <a
                                        href="/about"
                                        className="block rounded-xl px-4 py-3 text-sm transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-800"
                                    >
                                        About
                                    </a>

                                    <a
                                        href="/gallery"
                                        className="block rounded-xl px-4 py-3 text-sm transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-800"
                                    >
                                        Gallery
                                    </a>
                                </div>
                            </div>

                            {/* COURSES */}
                            <div className="group relative">

                                <button className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-800">
                                    Courses
                                    <ChevronDown size={13} />
                                </button>

                                <div className="invisible absolute left-0 top-full mt-2 w-56 translate-y-2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-900">

                                    <a
                                        href="/courses"
                                        className="block rounded-xl px-4 py-3 text-sm transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-800"
                                    >
                                        Course Categories
                                    </a>

                                    <a
                                        href="/course-details"
                                        className="block rounded-xl px-4 py-3 text-sm transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-800"
                                    >
                                        Course Details
                                    </a>
                                </div>
                            </div>

                            <a
                                href="/contact"
                                className="rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-800"
                            >
                                Contact Us
                            </a>
                        </nav>

                        {/* ACTIONS */}
                        <div className="flex items-center gap-2">

                            <button
                                onClick={() => setSearchOpen(true)}
                                aria-label="Search"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-800 dark:hover:bg-slate-900"
                            >
                                <Search size={18} />
                            </button>

                            <button
                                onClick={() =>
                                    setDarkMode(!darkMode)
                                }
                                aria-label="Toggle dark mode"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-800 dark:hover:bg-slate-900"
                            >
                                {darkMode ? (
                                    <Sun size={18} />
                                ) : (
                                    <Moon size={18} />
                                )}
                            </button>

                            <button
                                onClick={() =>
                                    setMobileMenu(!mobileMenu)
                                }
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 lg:hidden dark:border-slate-800"
                            >
                                {mobileMenu ? (
                                    <X size={20} />
                                ) : (
                                    <Menu size={20} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* MOBILE MENU */}
                    {mobileMenu && (
                        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 lg:hidden">

                            <nav className="mx-auto flex max-w-7xl flex-col gap-1">

                                <a
                                    href="/"
                                    className="rounded-xl px-4 py-3 font-medium transition hover:bg-indigo-50 dark:hover:bg-slate-900"
                                >
                                    Home
                                </a>

                                <a
                                    href="/team"
                                    className="rounded-xl bg-indigo-50 px-4 py-3 font-semibold text-indigo-600 dark:bg-slate-900"
                                >
                                    Team Members
                                </a>

                                <a
                                    href="/testimonials"
                                    className="rounded-xl px-4 py-3 font-medium transition hover:bg-indigo-50 dark:hover:bg-slate-900"
                                >
                                    Testimonials
                                </a>

                                <a
                                    href="/about"
                                    className="rounded-xl px-4 py-3 font-medium transition hover:bg-indigo-50 dark:hover:bg-slate-900"
                                >
                                    About
                                </a>

                                <a
                                    href="/gallery"
                                    className="rounded-xl px-4 py-3 font-medium transition hover:bg-indigo-50 dark:hover:bg-slate-900"
                                >
                                    Gallery
                                </a>

                                <a
                                    href="/courses"
                                    className="rounded-xl px-4 py-3 font-medium transition hover:bg-indigo-50 dark:hover:bg-slate-900"
                                >
                                    Courses
                                </a>

                                <a
                                    href="/contact"
                                    className="rounded-xl px-4 py-3 font-medium transition hover:bg-indigo-50 dark:hover:bg-slate-900"
                                >
                                    Contact Us
                                </a>
                            </nav>
                        </div>
                    )}
                </header>

                {/* =====================================================
                    SEARCH
                ====================================================== */}
                {searchOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 px-4 backdrop-blur-md">

                        <button
                            onClick={() => setSearchOpen(false)}
                            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                        >
                            <X size={25} />
                        </button>

                        <form className="w-full max-w-2xl">

                            <label className="mb-4 block text-center text-sm font-bold uppercase tracking-[0.3em] text-indigo-400">
                                Search Website
                            </label>

                            <div className="flex overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">

                                <input
                                    type="search"
                                    autoFocus
                                    placeholder="Search here..."
                                    className="min-w-0 flex-1 bg-transparent px-6 py-5 text-lg text-white outline-none placeholder:text-slate-400"
                                />

                                <button
                                    type="submit"
                                    className="flex items-center justify-center px-7 text-white transition hover:bg-indigo-600"
                                >
                                    <Search size={21} />
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* =====================================================
                    HERO
                ====================================================== */}
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 py-20 lg:py-28">

                    <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

                    <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

                    <div className="relative mx-auto max-w-7xl px-4 lg:px-8">

                        <div className="max-w-3xl">

                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm font-semibold text-indigo-300">

                                <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />

                                Meet Our Team
                            </div>

                            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">

                                The people behind

                                <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                    Top in Town Technology
                                </span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                                Meet the professionals, programmers, and IT
                                specialists working together to build better
                                technology and learning opportunities.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">

                                <a
                                    href="#team"
                                    className="rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-500"
                                >
                                    Meet the Team
                                </a>

                                <a
                                    href="/contact"
                                    className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/10"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    BREADCRUMB
                ====================================================== */}
                <div className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">

                    <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">

                        <div className="flex items-center gap-2 text-sm">

                            <a
                                href="/"
                                className="font-semibold text-indigo-600 hover:text-indigo-700"
                            >
                                Home
                            </a>

                            <ChevronRight
                                size={14}
                                className="text-slate-400"
                            />

                            <span className="text-slate-500 dark:text-slate-400">
                                Team
                            </span>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                    TEAM
                ====================================================== */}
                <main
                    id="team"
                    className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24"
                >

                    {/* HEADER */}
                    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

                        <div>

                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                                Our People
                            </span>

                            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                                Our Team
                            </h2>

                            <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
                                A collaborative team focused on programming,
                                information technology, and digital solutions.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                                <Users size={21} />
                            </div>

                            <div>

                                <p className="text-xl font-black text-slate-900 dark:text-white">
                                    {teamMembers.length}
                                </p>

                                <p className="text-xs text-slate-500">
                                    Team Members
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* FIRST GRID */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {teamMembers.map((member) => (
                            <TeamCard
                                key={member.name}
                                member={member}
                            />
                        ))}
                    </div>

                    {/* SECOND SECTION */}
                    <div className="mt-20">

                        <div className="mb-10">

                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                                Meet Our Specialists
                            </span>

                            <h2 className="mt-2 text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
                                Technology & IT Team
                            </h2>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                            {teamMembers.map((member) => (
                                <TeamCard
                                    key={`second-${member.name}`}
                                    member={member}
                                    second
                                />
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <section className="relative mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-700 px-6 py-12 shadow-2xl sm:px-10 lg:px-16">

                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

                        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

                            <div className="max-w-2xl">

                                <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-100">
                                    Let's Build Together
                                </span>

                                <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                                    Interested in working with us?
                                </h2>

                                <p className="mt-4 leading-7 text-indigo-100">
                                    Get in touch with Top in Town Technology
                                    and discover how we can work together on
                                    technology, training, and digital
                                    solutions.
                                </p>
                            </div>

                            <a
                                href="/contact"
                                className="flex shrink-0 items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-indigo-700 shadow-xl transition hover:-translate-y-1 hover:bg-slate-100"
                            >
                                Contact Us
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </section>
                </main>

                {/* =====================================================
                    NEWSLETTER
                ====================================================== */}
                <section className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">

                    <div className="mx-auto max-w-4xl px-4 py-16 text-center lg:px-8">

                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                            <Send size={22} />
                        </div>

                        <h2 className="mt-5 text-3xl font-black text-slate-900 dark:text-white">
                            Stay Updated
                        </h2>

                        <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-400">
                            Subscribe to receive updates about our courses,
                            technology programs, and latest activities.
                        </p>

                        <form className="mx-auto mt-7 flex max-w-xl flex-col gap-3 sm:flex-row">

                            <input
                                type="email"
                                required
                                placeholder="Your email address"
                                className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-950"
                            />

                            <button
                                type="submit"
                                className="rounded-xl bg-indigo-600 px-7 py-3.5 font-bold text-white transition hover:bg-indigo-500"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>

                {/* =====================================================
                    FOOTER
                ====================================================== */}
                <footer className="bg-slate-950 text-white">

                    <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">

                        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

                            {/* COMPANY */}
                            <div>

                                <div className="flex items-center gap-3">

                                    <img
                                        src="https://dummyimage.com/120x120/4f46e5/ffffff&text=TT"
                                        alt="Top in Town Technology"
                                        className="h-12 w-12 rounded-xl"
                                    />

                                    <div>

                                        <h3 className="font-black">
                                            Top in Town Technology
                                        </h3>

                                        <p className="text-xs text-indigo-400">
                                            Technology & Education
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                                    A technology and training organization
                                    focused on developing practical IT skills
                                    and creating opportunities for students
                                    and professionals.
                                </p>
                            </div>

                            {/* CONTACT */}
                            <div>

                                <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em]">
                                    Contact Us
                                </h3>

                                <div className="space-y-4 text-sm text-slate-400">

                                    <p className="flex items-start gap-3">
                                        <MapPin
                                            size={17}
                                            className="mt-0.5 shrink-0 text-indigo-400"
                                        />

                                        Karte-Parwan, Kabul, Afghanistan
                                    </p>

                                    <a
                                        href="tel:+93788660118"
                                        className="flex items-center gap-3 transition hover:text-white"
                                    >
                                        <Phone
                                            size={16}
                                            className="text-indigo-400"
                                        />

                                        +93 788 660 118
                                    </a>

                                    <a
                                        href="mailto:info@topintowntechnology.com"
                                        className="flex items-center gap-3 transition hover:text-white"
                                    >
                                        <Mail
                                            size={16}
                                            className="text-indigo-400"
                                        />

                                        info@topintowntechnology.com
                                    </a>
                                </div>
                            </div>

                            {/* LINKS */}
                            <div>

                                <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em]">
                                    Explore Our Site
                                </h3>

                                <div className="grid grid-cols-2 gap-3 text-sm text-slate-400">

                                    <a
                                        href="/about"
                                        className="transition hover:text-indigo-400"
                                    >
                                        About Us
                                    </a>

                                    <a
                                        href="/contact"
                                        className="transition hover:text-indigo-400"
                                    >
                                        Contact Us
                                    </a>

                                    <a
                                        href="/gallery"
                                        className="transition hover:text-indigo-400"
                                    >
                                        Gallery
                                    </a>

                                    <a
                                        href="/team"
                                        className="transition hover:text-indigo-400"
                                    >
                                        Team
                                    </a>

                                    <a
                                        href="/courses"
                                        className="transition hover:text-indigo-400"
                                    >
                                        Courses
                                    </a>

                                    <a
                                        href="/testimonials"
                                        className="transition hover:text-indigo-400"
                                    >
                                        Testimonials
                                    </a>
                                </div>

                                {/* SOCIAL */}
                                <div className="mt-7 flex gap-2">

                                    <a
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
                                    >
                                        <Facebook size={17} />
                                    </a>

                                    <a
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
                                    >
                                        <Instagram size={17} />
                                    </a>

                                    <a
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
                                    >
                                        <Linkedin size={17} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* COPYRIGHT */}
                        <div className="mt-12 border-t border-slate-800 pt-7 text-center text-sm text-slate-500">
                            © {new Date().getFullYear()} Top in Town
                            Technology. All rights reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}