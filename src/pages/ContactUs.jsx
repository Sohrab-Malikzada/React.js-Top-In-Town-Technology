import React, { useState } from "react";
import {
    Search,
    Moon,
    Sun,
    Menu,
    X,
    ChevronDown,
    Globe,
    Phone,
    Mail,
    MapPin,
    Linkedin,
    Instagram,
    Facebook,
    Send,
    ArrowRight,
    Clock3,
    MessageCircle,
    CheckCircle2,
    Sparkles,
    GraduationCap,
    Headphones,
    Building2,
} from "lucide-react";

const contactInfo = [
    {
        icon: MapPin,
        title: "Our Location",
        text: "Karte-Parwan, Kabul, Afghanistan",
        href: "https://maps.google.com/?q=Karte-Parwan,Kabul,Afghanistan",
    },
    {
        icon: Phone,
        title: "Phone Number",
        text: "+93 788 660 118",
        href: "tel:+93788660118",
    },
    {
        icon: Mail,
        title: "Email Address",
        text: "info@topintowntechnology.com",
        href: "mailto:info@topintowntechnology.com",
    },
];

const socialLinks = [
    {
        icon: Facebook,
        label: "Facebook",
        href: "#",
    },
    {
        icon: Instagram,
        label: "Instagram",
        href: "#",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "#",
    },
];

const footerLinks = [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contactus" },
    { label: "Gallery", href: "/gallery" },
    { label: "Team", href: "/team" },
    { label: "Courses", href: "/courses" },
    { label: "Testimonials", href: "/testimonials" },
];

function Logo() {
    return (
        <a href="/" className="flex items-center gap-3">
            <img
                src="/assets/custom/images/Top in town .png"
                alt="Top in Town Technology"
                className="h-12 w-12 rounded-xl object-cover shadow-lg"
            />

            <div className="hidden sm:block">
                <div className="text-sm font-black tracking-wide text-slate-900 dark:text-white">
                    TOP IN TOWN
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-400">
                    Technology
                </div>
            </div>
        </a>
    );
}

function Header({
    darkMode,
    setDarkMode,
    mobileMenu,
    setMobileMenu,
    setSearchOpen,
}) {
    const [languageOpen, setLanguageOpen] = useState(false);
    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [coursesOpen, setCoursesOpen] = useState(false);

    return (
        <>
            {/* TOP BAR */}
            <div className="bg-slate-950 text-slate-300">
                <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2.5 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-8">
                    <div className="relative">
                        <button
                            onClick={() => setLanguageOpen(!languageOpen)}
                            className="flex items-center gap-2 transition hover:text-white"
                        >
                            <Globe size={14} />
                            Language
                            <ChevronDown
                                size={12}
                                className={`transition-transform ${languageOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {languageOpen && (
                            <div className="absolute left-0 top-8 z-[100] w-40 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl">
                                <button className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-slate-800 hover:text-white">
                                    🇬🇧
                                    <span>English</span>
                                </button>

                                <button className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-slate-800 hover:text-white">
                                    🇦🇫
                                    <span>فارسی</span>
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center gap-5">
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

            {/* NAVBAR */}
            <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
                    <Logo />

                    <nav className="hidden items-center gap-1 lg:flex">
                        <a
                            href="/"
                            className="rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-900"
                        >
                            Home
                        </a>

                        {/* FEATURES */}
                        <div className="group relative">
                            <button
                                onClick={() => setFeaturesOpen(!featuresOpen)}
                                className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-900"
                            >
                                Features
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform ${featuresOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`absolute left-0 top-full mt-2 w-52 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl transition-all dark:border-slate-800 dark:bg-slate-900 ${featuresOpen
                                        ? "visible translate-y-0 opacity-100"
                                        : "invisible translate-y-2 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                                    }`}
                            >
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
                            <button
                                onClick={() => setAboutOpen(!aboutOpen)}
                                className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-900"
                            >
                                About
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform ${aboutOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`absolute left-0 top-full mt-2 w-48 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl transition-all dark:border-slate-800 dark:bg-slate-900 ${aboutOpen
                                        ? "visible translate-y-0 opacity-100"
                                        : "invisible translate-y-2 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                                    }`}
                            >
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
                            <button
                                onClick={() => setCoursesOpen(!coursesOpen)}
                                className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-900"
                            >
                                Courses
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform ${coursesOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`absolute left-0 top-full mt-2 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl transition-all dark:border-slate-800 dark:bg-slate-900 ${coursesOpen
                                        ? "visible translate-y-0 opacity-100"
                                        : "invisible translate-y-2 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                                    }`}
                            >
                                <a
                                    href="/course_catagory"
                                    className="block rounded-xl px-4 py-3 text-sm transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-800"
                                >
                                    Course Categories
                                </a>

                                <a
                                    href="/course_details"
                                    className="block rounded-xl px-4 py-3 text-sm transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-800"
                                >
                                    Course Details
                                </a>
                            </div>
                        </div>

                        <a
                            href="/contactus"
                            className="rounded-xl bg-indigo-50 px-4 py-2.5 text-sm font-bold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                        >
                            Contact Us
                        </a>
                    </nav>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setSearchOpen(true)}
                            aria-label="Search"
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-800 dark:hover:bg-slate-900"
                        >
                            <Search size={18} />
                        </button>

                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            aria-label="Toggle dark mode"
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-800 dark:hover:bg-slate-900"
                        >
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-800 lg:hidden"
                        >
                            {mobileMenu ? <X size={19} /> : <Menu size={19} />}
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                {mobileMenu && (
                    <div className="border-t border-slate-200 bg-white px-4 py-5 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
                        <nav className="mx-auto flex max-w-7xl flex-col gap-1">
                            {[
                                ["Home", "/"],
                                ["Team Members", "/team"],
                                ["Testimonials", "/testimonials"],
                                ["About", "/about"],
                                ["Gallery", "/gallery"],
                                ["Courses", "/courses"],
                                ["Contact Us", "/contactus"],
                            ].map(([label, href]) => (
                                <a
                                    key={label}
                                    href={href}
                                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${label === "Contact Us"
                                            ? "bg-indigo-600 text-white"
                                            : "hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-900"
                                        }`}
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
}

function SearchOverlay({ open, setOpen }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 px-4 backdrop-blur-md">
            <button
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
                <X size={22} />
            </button>

            <form className="w-full max-w-2xl">
                <div className="mb-5 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-600/30">
                        <Search size={24} />
                    </div>

                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400">
                        Search Website
                    </p>

                    <h2 className="mt-2 text-3xl font-black text-white">
                        What are you looking for?
                    </h2>
                </div>

                <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">
                    <input
                        type="search"
                        autoFocus
                        placeholder="Search here..."
                        className="min-w-0 flex-1 bg-transparent px-6 py-5 text-white outline-none placeholder:text-slate-400"
                    />

                    <button
                        type="submit"
                        className="px-7 text-white transition hover:bg-indigo-600"
                    >
                        <Search size={21} />
                    </button>
                </div>
            </form>
        </div>
    );
}

function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
            <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-3xl" />
            <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl" />

            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:40px_40px]" />

            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm font-bold text-indigo-300">
                        <Sparkles size={16} />
                        We're Here to Help
                    </div>

                    <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
                        Let's start a
                        <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            conversation.
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                        Have a question, need more information, or want to work
                        with us? Our team is ready to hear from you and help
                        turn your ideas into practical solutions.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <a
                            href="#contact-form"
                            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-bold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-500"
                        >
                            Send a Message
                            <ArrowRight size={18} />
                        </a>

                        <a
                            href="tel:+93788660118"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/10"
                        >
                            <Phone size={17} />
                            Call Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactCards() {
    return (
        <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 lg:px-8">
            <div className="grid gap-5 md:grid-cols-3">
                {contactInfo.map((item) => {
                    const Icon = item.icon;

                    return (
                        <a
                            key={item.title}
                            href={item.href}
                            target={
                                item.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                                item.href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-500/10 dark:text-indigo-400">
                                    <Icon size={21} />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                        {item.title}
                                    </p>

                                    <p className="mt-2 break-words text-sm font-bold text-slate-900 dark:text-white">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}

function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
        }, 4000);
    };

    return (
        <div
            id="contact-form"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10 dark:border-slate-800 dark:bg-slate-900"
        >
            <div className="mb-8">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
                    Send us a message
                </span>

                <h2 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">
                    How can we help?
                </h2>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    Fill out the form below and our team will get back to you
                    as soon as possible.
                </p>
            </div>

            {submitted && (
                <div className="mb-6 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm font-semibold text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-400">
                    <CheckCircle2 size={20} />
                    Your message has been submitted successfully.
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                            First Name
                        </label>

                        <input
                            required
                            type="text"
                            placeholder="Your first name"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-950"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                            Last Name
                        </label>

                        <input
                            required
                            type="text"
                            placeholder="Your last name"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-950"
                        />
                    </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                            Email Address
                        </label>

                        <input
                            required
                            type="email"
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-950"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                            Subject
                        </label>

                        <input
                            required
                            type="text"
                            placeholder="How can we help?"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-950"
                        />
                    </div>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                        Message
                    </label>

                    <textarea
                        required
                        rows="6"
                        placeholder="Tell us more about your question or project..."
                        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-950"
                    />
                </div>

                <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-500 sm:w-auto"
                >
                    Send Message
                    <Send size={18} />
                </button>
            </form>
        </div>
    );
}

function WhyContactUs() {
    const features = [
        {
            icon: Headphones,
            title: "Quick Response",
            text: "We value your time and aim to respond to inquiries promptly.",
        },
        {
            icon: GraduationCap,
            title: "Practical Education",
            text: "Our programs focus on practical and career-oriented technology skills.",
        },
        {
            icon: Building2,
            title: "Professional Team",
            text: "Connect with a team focused on technology, training, and digital solutions.",
        },
        {
            icon: MessageCircle,
            title: "Clear Communication",
            text: "We keep communication straightforward, professional, and transparent.",
        },
    ];

    return (
        <section className="py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <div>
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
                            Why Contact Us
                        </span>

                        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            More than a contact form.
                            <span className="block text-indigo-600 dark:text-indigo-400">
                                It's the start of something useful.
                            </span>
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
                            Whether you're interested in our courses, technology
                            programs, collaboration opportunities, or simply
                            need more information, we're ready to help.
                        </p>

                        <div className="mt-7 flex items-center gap-3 rounded-2xl border border-indigo-100 bg-indigo-50 p-4 dark:border-indigo-900/50 dark:bg-indigo-950/20">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                                <Clock3 size={18} />
                            </div>

                            <div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">
                                    We're ready to hear from you
                                </p>
                                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                                    Reach out and let's discuss your needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                                >
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-500/10 dark:text-indigo-400">
                                        <Icon size={21} />
                                    </div>

                                    <h3 className="font-black text-slate-900 dark:text-white">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                        {feature.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

function CTA() {
    return (
        <section className="px-4 pb-20 lg:px-8 lg:pb-24">
            <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 px-6 py-14 shadow-2xl sm:px-10 lg:px-16 lg:py-16">
                <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl" />

                <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-indigo-100">
                            <Sparkles size={16} />
                            Let's Build Together
                        </div>

                        <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                            Have an idea? Let's talk about it.
                        </h2>

                        <p className="mt-4 leading-7 text-indigo-100">
                            Connect with Top in Town Technology and discover
                            how we can work together on education, technology,
                            and digital solutions.
                        </p>
                    </div>

                    <a
                        href="#contact-form"
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-indigo-700 shadow-xl transition hover:-translate-y-1 hover:bg-slate-100"
                    >
                        Contact Us
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}

function Newsletter() {
    return (
        <section className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto max-w-4xl px-4 py-16 text-center lg:px-8">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    <Mail size={23} />
                </div>

                <h2 className="mt-5 text-3xl font-black text-slate-900 dark:text-white">
                    Stay Updated
                </h2>

                <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600 dark:text-slate-400">
                    Subscribe to receive updates about our courses, technology
                    programs, and latest activities.
                </p>

                <form className="mx-auto mt-7 flex max-w-xl flex-col gap-3 sm:flex-row">
                    <input
                        type="email"
                        required
                        placeholder="Your email address"
                        className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    />

                    <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 font-bold text-white transition hover:bg-indigo-500"
                    >
                        Subscribe
                        <Send size={17} />
                    </button>
                </form>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="bg-slate-950 text-white">
            <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
                    {/* BRAND */}
                    <div>
                        <Logo />

                        <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                            Top in Town Technology is focused on practical IT
                            education, technology development, and creating
                            meaningful opportunities for students and
                            professionals.
                        </p>

                        <div className="mt-6 flex gap-2">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
                                    >
                                        <Icon size={17} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-[0.2em]">
                            Contact Us
                        </h3>

                        <div className="mt-6 space-y-5">
                            <a
                                href="https://maps.google.com/?q=Karte-Parwan,Kabul,Afghanistan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-3 text-sm text-slate-400 transition hover:text-white"
                            >
                                <MapPin
                                    size={18}
                                    className="mt-0.5 shrink-0 text-indigo-400"
                                />
                                <span>Karte-Parwan, Kabul, Afghanistan</span>
                            </a>

                            <a
                                href="tel:+93788660118"
                                className="flex gap-3 text-sm text-slate-400 transition hover:text-white"
                            >
                                <Phone
                                    size={18}
                                    className="shrink-0 text-indigo-400"
                                />
                                <span>+93 788 660 118</span>
                            </a>

                            <a
                                href="mailto:info@topintowntechnology.com"
                                className="flex gap-3 break-all text-sm text-slate-400 transition hover:text-white"
                            >
                                <Mail
                                    size={18}
                                    className="shrink-0 text-indigo-400"
                                />
                                <span>info@topintowntechnology.com</span>
                            </a>
                        </div>
                    </div>

                    {/* LINKS */}
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-[0.2em]">
                            Explore Our Site
                        </h3>

                        <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 text-sm">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-slate-400 transition hover:text-indigo-400"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-800 pt-7">
                    <div className="flex flex-col gap-3 text-center text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
                        <p>
                            © {new Date().getFullYear()} Top in Town
                            Technology. All rights reserved.
                        </p>

                        <div className="flex justify-center gap-5 sm:justify-end">
                            <a
                                href="#"
                                className="transition hover:text-white"
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="#"
                                className="transition hover:text-white"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default function ContactUs() {
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
                <Header
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    mobileMenu={mobileMenu}
                    setMobileMenu={setMobileMenu}
                    setSearchOpen={setSearchOpen}
                />

                <SearchOverlay
                    open={searchOpen}
                    setOpen={setSearchOpen}
                />

                {/* HERO */}
                <Hero />

                {/* CONTACT CARDS */}
                <ContactCards />

                {/* MAIN CONTACT AREA */}
                <main>
                    <section className="py-20 lg:py-24">
                        <div className="mx-auto max-w-7xl px-4 lg:px-8">
                            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                                <ContactForm />

                                <div className="flex flex-col gap-6">
                                    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900">
                                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                                            <MapPin size={21} />
                                        </div>

                                        <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                                            Visit Our Office
                                        </h2>

                                        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                                            Find us in Karte-Parwan, Kabul,
                                            Afghanistan. We'd be happy to
                                            connect with you.
                                        </p>

                                        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
                                            <iframe
                                                title="Top in Town Technology Location"
                                                src="https://www.google.com/maps?q=Karte-Parwan,Kabul,Afghanistan&output=embed"
                                                className="h-72 w-full border-0 grayscale-[20%]"
                                                loading="lazy"
                                            />
                                        </div>

                                        <a
                                            href="https://maps.google.com/?q=Karte-Parwan,Kabul,Afghanistan"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400"
                                        >
                                            Open in Google Maps
                                            <ArrowRight size={16} />
                                        </a>
                                    </div>

                                    <div className="rounded-3xl bg-slate-950 p-7 text-white shadow-xl">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600">
                                                <Headphones size={21} />
                                            </div>

                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                                                    Need immediate help?
                                                </p>

                                                <h3 className="mt-1 text-xl font-black">
                                                    Talk to our team
                                                </h3>
                                            </div>
                                        </div>

                                        <p className="mt-5 text-sm leading-7 text-slate-400">
                                            For direct questions, you can
                                            contact us by phone or email.
                                        </p>

                                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                            <a
                                                href="tel:+93788660118"
                                                className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold transition hover:bg-indigo-500"
                                            >
                                                <Phone size={16} />
                                                Call Now
                                            </a>

                                            <a
                                                href="mailto:info@topintowntechnology.com"
                                                className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-sm font-bold transition hover:bg-slate-900"
                                            >
                                                <Mail size={16} />
                                                Email Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* WHY CONTACT */}
                    <WhyContactUs />

                    {/* CTA */}
                    <CTA />
                </main>

                {/* NEWSLETTER */}
                <Newsletter />

                {/* FOOTER */}
                <Footer />
            </div>
        </div>
    );
}