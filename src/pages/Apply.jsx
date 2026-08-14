import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
    Check,
    CheckCircle2,
    ChevronDown,
    Clock3,
    FileText,
    GraduationCap,
    Mail,
    Moon,
    Phone,
    Send,
    ShieldCheck,
    Sparkles,
    Sun,
    Upload,
    User,
    X,
    BriefcaseBusiness,
    MapPin,
    Target,
    AlertCircle,
    CheckCircle,
} from "lucide-react";

/* =========================================================
   PROGRAMS
========================================================= */

const programs = [
    {
        id: "full-stack",
        title: "Full Stack Web Development",
        shortTitle: "Full Stack",
        description:
            "Build modern web applications from frontend interfaces to backend APIs, databases and deployment.",
        duration: "6 Months",
        level: "Professional",
        category: "Development",
        icon: "⚡",
        color: "from-indigo-500 to-violet-600",
    },
    {
        id: "frontend",
        title: "Frontend Web Development",
        shortTitle: "Frontend",
        description:
            "Learn to build responsive, interactive and modern web experiences using current frontend technologies.",
        duration: "4 Months",
        level: "Intermediate",
        category: "Development",
        icon: "◈",
        color: "from-cyan-500 to-blue-600",
    },
    {
        id: "mobile",
        title: "Mobile App Development",
        shortTitle: "Mobile Apps",
        description:
            "Develop modern cross-platform mobile applications and work on practical real-world projects.",
        duration: "6 Months",
        level: "Professional",
        category: "Mobile",
        icon: "◉",
        color: "from-emerald-500 to-teal-600",
    },
    {
        id: "graphic",
        title: "Graphic Design",
        shortTitle: "Graphic Design",
        description:
            "Develop practical skills in branding, digital content, visual communication and creative design.",
        duration: "4 Months",
        level: "Beginner",
        category: "Design",
        icon: "✦",
        color: "from-fuchsia-500 to-pink-600",
    },
    {
        id: "it",
        title: "IT Training",
        shortTitle: "IT Training",
        description:
            "Build a strong foundation in information technology, computer systems, networking and digital tools.",
        duration: "4 Months",
        level: "Beginner",
        category: "IT",
        icon: "⌘",
        color: "from-orange-500 to-red-600",
    },
    {
        id: "software",
        title: "Software Engineering",
        shortTitle: "Software Engineering",
        description:
            "Learn software development principles, programming, testing, architecture and project management.",
        duration: "6 Months",
        level: "Professional",
        category: "Engineering",
        icon: "◫",
        color: "from-violet-500 to-purple-700",
    },
    {
        id: "cctv",
        title: "CCTV Course",
        shortTitle: "CCTV",
        description:
            "Learn practical CCTV installation, monitoring, configuration and basic security system concepts.",
        duration: "3 Months",
        level: "Practical",
        category: "Security",
        icon: "◉",
        color: "from-slate-600 to-slate-900",
    },
    {
        id: "english",
        title: "English Course",
        shortTitle: "English",
        description:
            "Improve your English communication skills for education, work, technology and everyday communication.",
        duration: "4 Months",
        level: "All Levels",
        category: "Language",
        icon: "A",
        color: "from-sky-500 to-indigo-600",
    },
];

/* =========================================================
   STEPS
========================================================= */

const steps = [
    {
        id: 1,
        title: "Program",
        subtitle: "Choose your path",
        icon: BookOpen,
    },
    {
        id: 2,
        title: "Personal",
        subtitle: "Your information",
        icon: User,
    },
    {
        id: 3,
        title: "Education",
        subtitle: "Your background",
        icon: GraduationCap,
    },
    {
        id: 4,
        title: "Motivation",
        subtitle: "Your goals",
        icon: Target,
    },
    {
        id: 5,
        title: "Review",
        subtitle: "Check everything",
        icon: CheckCircle2,
    },
];

/* =========================================================
   LOGO
========================================================= */

function Logo() {
    return (
        <Link to="/" className="group flex items-center gap-3">
            <div className="relative">
                <img
                    src="/assets/custom/images/Top in town .png"
                    alt="Top in Town Technology"
                    className="h-11 w-11 rounded-xl object-cover shadow-lg transition duration-300 group-hover:scale-105"
                />

                <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-950" />
            </div>

            <div className="hidden sm:block">
                <div className="text-sm font-black tracking-wide text-slate-950 dark:text-white">
                    TOP IN TOWN
                </div>

                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-400">
                    Technology
                </div>
            </div>
        </Link>
    );
}

/* =========================================================
   HEADER
========================================================= */

function Header({ darkMode, setDarkMode }) {
    return (
        <header className="sticky top-0 z-[100] border-b border-slate-200/70 bg-white/85 backdrop-blur-2xl dark:border-slate-800/70 dark:bg-slate-950/85">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
                <Logo />

                <div className="flex items-center gap-3">
                    <div className="hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700 md:flex dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-400">
                        <ShieldCheck size={15} />
                        Secure Application
                    </div>

                    <button
                        type="button"
                        onClick={() => setDarkMode((prev) => !prev)}
                        aria-label="Toggle dark mode"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </div>
            </div>
        </header>
    );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
    return (
        <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
            {/* Glow */}
            <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-3xl" />

            <div className="absolute -bottom-60 -right-40 h-[600px] w-[600px] rounded-full bg-fuchsia-500/10 blur-3xl" />

            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#6366f1_1px,transparent_1px),linear-gradient(90deg,#6366f1_1px,transparent_1px)] [background-size:48px_48px]" />

            <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
                <Link
                    to="/courses"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                    <ArrowLeft size={16} />
                    Back to Courses
                </Link>

                <div className="max-w-4xl">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-500/10 dark:text-indigo-400">
                        <Sparkles size={14} />
                        Admissions 2026
                    </div>

                    <h1 className="text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-7xl dark:text-white">
                        Don't just learn.
                        <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                            Build your future.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg dark:text-slate-400">
                        Apply to a practical technology program at Top in Town
                        Technology and take the next step toward your academic
                        and professional goals.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold shadow-sm dark:border-slate-800 dark:bg-slate-900">
                            <Clock3
                                size={17}
                                className="text-indigo-500"
                            />
                            Simple process
                        </div>

                        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold shadow-sm dark:border-slate-800 dark:bg-slate-900">
                            <ShieldCheck
                                size={17}
                                className="text-emerald-500"
                            />
                            Private information
                        </div>

                        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold shadow-sm dark:border-slate-800 dark:bg-slate-900">
                            <BriefcaseBusiness
                                size={17}
                                className="text-violet-500"
                            />
                            Career-focused
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* =========================================================
   DESKTOP STEP INDICATOR
========================================================= */

function StepIndicator({ currentStep }) {
    const progress =
        ((currentStep - 1) / (steps.length - 1)) * 100;

    return (
        <div className="mb-12 hidden lg:block">
            <div className="relative flex items-start justify-between">
                <div className="absolute left-0 right-0 top-6 h-px bg-slate-200 dark:bg-slate-800" />

                <div
                    className="absolute left-0 top-6 h-px bg-gradient-to-r from-indigo-500 to-violet-600 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />

                {steps.map((step) => {
                    const Icon = step.icon;
                    const active = currentStep >= step.id;
                    const completed = currentStep > step.id;

                    return (
                        <div
                            key={step.id}
                            className="relative z-10 flex w-32 flex-col items-center text-center"
                        >
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-2xl border-4 border-[#f7f8fc] transition-all duration-300 dark:border-[#070a12] ${
                                    active
                                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                                        : "bg-white text-slate-400 dark:bg-slate-900"
                                }`}
                            >
                                {completed ? (
                                    <Check size={19} strokeWidth={3} />
                                ) : (
                                    <Icon size={19} />
                                )}
                            </div>

                            <p
                                className={`mt-3 text-xs font-black ${
                                    active
                                        ? "text-slate-900 dark:text-white"
                                        : "text-slate-400"
                                }`}
                            >
                                {step.title}
                            </p>

                            <p className="mt-1 text-[10px] text-slate-400">
                                {step.subtitle}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

/* =========================================================
   MOBILE PROGRESS
========================================================= */

function MobileProgress({ currentStep }) {
    const progress = (currentStep / steps.length) * 100;

    return (
        <div className="mb-7 lg:hidden">
            <div className="mb-3 flex items-center justify-between">
                <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
                        Application
                    </p>

                    <h3 className="mt-1 text-lg font-black text-slate-900 dark:text-white">
                        {steps[currentStep - 1].title}
                    </h3>
                </div>

                <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-black text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    {currentStep} / {steps.length}
                </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({ eyebrow, title, description }) {
    return (
        <div className="mb-8">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-indigo-600 dark:text-indigo-400">
                {eyebrow}
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl dark:text-white">
                {title}
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">
                {description}
            </p>
        </div>
    );
}

/* =========================================================
   INPUT FIELD
========================================================= */

function Field({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = "text",
    required = true,
}) {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300"
            >
                {label}

                {required && (
                    <span className="ml-1 text-indigo-500">*</span>
                )}
            </label>

            <input
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                required={required}
                placeholder={placeholder}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:hover:border-slate-700 dark:focus:bg-slate-950"
            />
        </div>
    );
}

/* =========================================================
   SELECT
========================================================= */

function SelectField({
    label,
    name,
    value,
    onChange,
    children,
    required = true,
}) {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300"
            >
                {label}

                {required && (
                    <span className="ml-1 text-indigo-500">*</span>
                )}
            </label>

            <div className="relative">
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-10 text-sm text-slate-900 outline-none transition hover:border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                >
                    {children}
                </select>

                <ChevronDown
                    size={17}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
            </div>
        </div>
    );
}

/* =========================================================
   ERROR BOX
========================================================= */

function ErrorBox({ message }) {
    if (!message) return null;

    return (
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm font-semibold text-red-700 dark:border-red-900/60 dark:bg-red-950/20 dark:text-red-400">
            <AlertCircle
                size={19}
                className="mt-0.5 shrink-0"
            />

            <span>{message}</span>
        </div>
    );
}

/* =========================================================
   REVIEW BLOCK
========================================================= */

function ReviewBlock({ icon: Icon, title, items }) {
    return (
        <div className="rounded-3xl border border-slate-200 p-5 dark:border-slate-800">
            <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-indigo-600 dark:bg-slate-800 dark:text-indigo-400">
                    <Icon size={18} />
                </div>

                <h3 className="font-black text-slate-900 dark:text-white">
                    {title}
                </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                {items.map(([label, value]) => (
                    <div key={label}>
                        <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                            {label}
                        </p>

                        <p className="mt-1 break-words text-sm font-semibold text-slate-700 dark:text-slate-300">
                            {value || "—"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* =========================================================
   SIDEBAR POINT
========================================================= */

function SidebarPoint({ number, text }) {
    return (
        <div className="flex gap-3">
            <span className="font-mono text-xs font-bold text-indigo-400">
                {number}
            </span>

            <p className="text-xs leading-5 text-slate-400">
                {text}
            </p>
        </div>
    );
}

/* =========================================================
   SIDEBAR
========================================================= */

function Sidebar() {
    return (
        <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-5">
                <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl">
                    <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-indigo-600/20 blur-3xl" />

                    <div className="relative">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-600/30">
                            <Sparkles size={21} />
                        </div>

                        <h3 className="mt-6 text-xl font-black">
                            Your application.
                            <span className="block text-indigo-400">
                                Your opportunity.
                            </span>
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-400">
                            We've designed the process to be simple,
                            transparent and focused on your potential.
                        </p>

                        <div className="mt-7 space-y-4">
                            <SidebarPoint
                                number="01"
                                text="Choose the program that fits your goals."
                            />

                            <SidebarPoint
                                number="02"
                                text="Tell us about your background."
                            />

                            <SidebarPoint
                                number="03"
                                text="Share your motivation."
                            />

                            <SidebarPoint
                                number="04"
                                text="Review and submit your application."
                            />
                        </div>
                    </div>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                        Need help?
                    </p>

                    <div className="mt-5 space-y-5">
                        <a
                            href="tel:+93788660118"
                            className="flex items-center gap-3 text-sm font-bold transition hover:text-indigo-600"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                                <Phone size={17} />
                            </span>

                            <span>
                                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                    Phone
                                </span>

                                +93 788 660 118
                            </span>
                        </a>

                        <a
                            href="mailto:info@topintowntechnology.com"
                            className="flex items-center gap-3 text-sm font-bold transition hover:text-indigo-600"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                                <Mail size={17} />
                            </span>

                            <span className="min-w-0">
                                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                    Email
                                </span>

                                <span className="block truncate">
                                    info@topintowntechnology.com
                                </span>
                            </span>
                        </a>

                        <a
                            href="https://maps.google.com/?q=Karte-Parwan,Kabul,Afghanistan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-sm font-bold transition hover:text-indigo-600"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                                <MapPin size={17} />
                            </span>

                            <span>
                                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                    Location
                                </span>

                                Karte-Parwan, Kabul
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    );
}

/* =========================================================
   SUCCESS SCREEN
========================================================= */

function SuccessScreen({
    darkMode,
    setDarkMode,
    selectedProgramData,
    form,
    resetApplication,
}) {
    return (
        <div
            className={
                darkMode
                    ? "dark"
                    : ""
            }
        >
            <div className="min-h-screen bg-[#f7f8fc] text-slate-900 dark:bg-[#070a12] dark:text-white">
                <Header
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />

                <main className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden px-4 py-16">
                    <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

                    <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

                    <div className="relative w-full max-w-3xl text-center">
                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] bg-emerald-500 text-white shadow-2xl shadow-emerald-500/25">
                            <CheckCircle2 size={46} />
                        </div>

                        <p className="mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">
                            Application Received
                        </p>

                        <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
                            You're officially
                            <span className="block bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
                                on your way.
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-500 dark:text-slate-400">
                            Thank you{" "}
                            {form.firstName
                                ? form.firstName
                                : "for applying"}{" "}
                            for applying to{" "}
                            <strong className="text-slate-900 dark:text-white">
                                {selectedProgramData?.title}
                            </strong>
                            . Our team will review your application and contact
                            you using the information provided.
                        </p>

                        <div className="mx-auto mt-10 max-w-xl rounded-[2rem] border border-slate-200 bg-white p-6 text-left shadow-xl dark:border-slate-800 dark:bg-slate-900">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                                    <FileText size={21} />
                                </div>

                                <div className="flex-1">
                                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                                        Application Status
                                    </p>

                                    <div className="mt-1 flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-amber-500" />

                                        <p className="font-black">
                                            Under Review
                                        </p>
                                    </div>
                                </div>

                                <CheckCircle
                                    size={20}
                                    className="text-emerald-500"
                                />
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-500"
                            >
                                Back to Home
                            </Link>

                            <button
                                type="button"
                                onClick={resetApplication}
                                className="rounded-2xl border border-slate-200 bg-white px-7 py-3.5 font-bold transition hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
                            >
                                Submit Another Application
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

/* =========================================================
   MAIN APPLY COMPONENT
========================================================= */

export default function Apply() {
    const [darkMode, setDarkMode] = useState(false);

    const [currentStep, setCurrentStep] = useState(1);

    const [selectedProgram, setSelectedProgram] =
        useState("");

    const [document, setDocument] = useState(null);

    const [submitted, setSubmitted] = useState(false);

    const [error, setError] = useState("");

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        dateOfBirth: "",
        city: "",
        education: "",
        institution: "",
        fieldOfStudy: "",
        experience: "",
        motivation: "",
        goals: "",
        hearAboutUs: "",
    });

    const selectedProgramData = useMemo(
        () =>
            programs.find(
                (program) => program.id === selectedProgram
            ),
        [selectedProgram]
    );

    /* =====================================================
       HANDLE INPUT
    ===================================================== */

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));

        setError("");
    };

    /* =====================================================
       VALIDATION
    ===================================================== */

    const validateStep = () => {
        setError("");

        if (currentStep === 1 && !selectedProgram) {
            setError(
                "Please select a program before continuing."
            );
            return false;
        }

        if (currentStep === 2) {
            if (
                !form.firstName.trim() ||
                !form.lastName.trim() ||
                !form.email.trim() ||
                !form.phone.trim() ||
                !form.city.trim()
            ) {
                setError(
                    "Please complete all required personal information."
                );
                return false;
            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(form.email)) {
                setError(
                    "Please enter a valid email address."
                );
                return false;
            }
        }

        if (currentStep === 3) {
            if (
                !form.education ||
                !form.institution.trim()
            ) {
                setError(
                    "Please complete your education information."
                );
                return false;
            }
        }

        if (currentStep === 4) {
            if (
                !form.motivation.trim() ||
                !form.goals.trim()
            ) {
                setError(
                    "Please tell us about your motivation and goals."
                );
                return false;
            }

            if (form.motivation.trim().length < 30) {
                setError(
                    "Your motivation should contain at least 30 characters."
                );
                return false;
            }
        }

        return true;
    };

    /* =====================================================
       NEXT
    ===================================================== */

    const nextStep = () => {
        if (!validateStep()) return;

        if (currentStep < steps.length) {
            setCurrentStep((previous) => previous + 1);

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    /* =====================================================
       PREVIOUS
    ===================================================== */

    const previousStep = () => {
        setError("");

        if (currentStep > 1) {
            setCurrentStep((previous) => previous - 1);

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    /* =====================================================
       SUBMIT
    ===================================================== */

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateStep()) return;

        setSubmitted(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    /* =====================================================
       RESET
    ===================================================== */

    const resetApplication = () => {
        setCurrentStep(1);
        setSelectedProgram("");
        setDocument(null);
        setSubmitted(false);
        setError("");

        setForm({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            gender: "",
            dateOfBirth: "",
            city: "",
            education: "",
            institution: "",
            fieldOfStudy: "",
            experience: "",
            motivation: "",
            goals: "",
            hearAboutUs: "",
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    /* =====================================================
       SUCCESS
    ===================================================== */

    if (submitted) {
        return (
            <SuccessScreen
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                selectedProgramData={selectedProgramData}
                form={form}
                resetApplication={resetApplication}
            />
        );
    }

    /* =====================================================
       MAIN UI
    ===================================================== */

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="min-h-screen bg-[#f7f8fc] text-slate-900 transition-colors duration-300 dark:bg-[#070a12] dark:text-white">
                <Header
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />

                <Hero />

                <main className="relative mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
                    <StepIndicator currentStep={currentStep} />

                    <MobileProgress currentStep={currentStep} />

                    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
                        {/* =====================================
                            FORM
                        ====================================== */}

                        <form
                            onSubmit={handleSubmit}
                            className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/[0.04] sm:p-8 lg:p-10 dark:border-slate-800 dark:bg-slate-900"
                        >
                            <ErrorBox message={error} />

                            {/* =================================
                                STEP 1
                            ================================== */}

                            {currentStep === 1 && (
                                <div>
                                    <SectionTitle
                                        eyebrow="Step 01 / Program"
                                        title="Choose your learning path"
                                        description="Select the program that best matches your interests, skills and future goals."
                                    />

                                    <div className="grid gap-4 md:grid-cols-2">
                                        {programs.map(
                                            (program) => {
                                                const selected =
                                                    selectedProgram ===
                                                    program.id;

                                                return (
                                                    <button
                                                        type="button"
                                                        key={
                                                            program.id
                                                        }
                                                        onClick={() => {
                                                            setSelectedProgram(
                                                                program.id
                                                            );
                                                            setError(
                                                                ""
                                                            );
                                                        }}
                                                        className={`group relative overflow-hidden rounded-[1.75rem] border p-6 text-left transition-all duration-300 ${
                                                            selected
                                                                ? "border-indigo-500 bg-indigo-50 shadow-xl shadow-indigo-500/10 dark:border-indigo-500 dark:bg-indigo-950/20"
                                                                : "border-slate-200 bg-white hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
                                                        }`}
                                                    >
                                                        {/* Gradient accent */}
                                                        <div
                                                            className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${program.color}`}
                                                        />

                                                        {selected && (
                                                            <div className="absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg">
                                                                <Check
                                                                    size={
                                                                        15
                                                                    }
                                                                />
                                                            </div>
                                                        )}

                                                        <div className="mb-5 flex items-center justify-between">
                                                            <div
                                                                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${program.color} text-xl text-white shadow-lg`}
                                                            >
                                                                {
                                                                    program.icon
                                                                }
                                                            </div>

                                                            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                                                                {
                                                                    program.category
                                                                }
                                                            </span>
                                                        </div>

                                                        <h3 className="pr-8 text-lg font-black text-slate-950 dark:text-white">
                                                            {
                                                                program.title
                                                            }
                                                        </h3>

                                                        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                                            {
                                                                program.description
                                                            }
                                                        </p>

                                                        <div className="mt-5 flex flex-wrap gap-2">
                                                            <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1.5 text-[11px] font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                                                                <Clock3
                                                                    size={
                                                                        12
                                                                    }
                                                                />
                                                                {
                                                                    program.duration
                                                                }
                                                            </span>

                                                            <span className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-[11px] font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                                                                {
                                                                    program.level
                                                                }
                                                            </span>
                                                        </div>
                                                    </button>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* =================================
                                STEP 2
                            ================================== */}

                            {currentStep === 2 && (
                                <div>
                                    <SectionTitle
                                        eyebrow="Step 02 / Personal"
                                        title="Tell us about yourself"
                                        description="We need a few basic details so our admissions team can contact you about your application."
                                    />

                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <Field
                                            label="First Name"
                                            name="firstName"
                                            value={
                                                form.firstName
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="Your first name"
                                        />

                                        <Field
                                            label="Last Name"
                                            name="lastName"
                                            value={
                                                form.lastName
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="Your last name"
                                        />

                                        <Field
                                            label="Email Address"
                                            name="email"
                                            type="email"
                                            value={
                                                form.email
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="you@example.com"
                                        />

                                        <Field
                                            label="Phone Number"
                                            name="phone"
                                            value={
                                                form.phone
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="+93 7XX XXX XXX"
                                        />

                                        <SelectField
                                            label="Gender"
                                            name="gender"
                                            value={
                                                form.gender
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            required={false}
                                        >
                                            <option value="">
                                                Prefer not to
                                                say
                                            </option>

                                            <option value="male">
                                                Male
                                            </option>

                                            <option value="female">
                                                Female
                                            </option>
                                        </SelectField>

                                        <Field
                                            label="Date of Birth"
                                            name="dateOfBirth"
                                            type="date"
                                            value={
                                                form.dateOfBirth
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            required={false}
                                        />

                                        <div className="sm:col-span-2">
                                            <Field
                                                label="City / Location"
                                                name="city"
                                                value={
                                                    form.city
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                placeholder="e.g. Kabul, Afghanistan"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* =================================
                                STEP 3
                            ================================== */}

                            {currentStep === 3 && (
                                <div>
                                    <SectionTitle
                                        eyebrow="Step 03 / Education"
                                        title="Your educational background"
                                        description="Help us understand your current academic level and previous experience."
                                    />

                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <SelectField
                                            label="Highest Education"
                                            name="education"
                                            value={
                                                form.education
                                            }
                                            onChange={
                                                handleChange
                                            }
                                        >
                                            <option value="">
                                                Select education
                                                level
                                            </option>

                                            <option value="school">
                                                High School
                                            </option>

                                            <option value="diploma">
                                                Diploma
                                            </option>

                                            <option value="bachelor">
                                                Bachelor's Degree
                                            </option>

                                            <option value="master">
                                                Master's Degree
                                            </option>

                                            <option value="other">
                                                Other
                                            </option>
                                        </SelectField>

                                        <Field
                                            label="Institution"
                                            name="institution"
                                            value={
                                                form.institution
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="School / University"
                                        />

                                        <Field
                                            label="Field of Study"
                                            name="fieldOfStudy"
                                            value={
                                                form.fieldOfStudy
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="e.g. Computer Science"
                                            required={false}
                                        />

                                        <SelectField
                                            label="Previous Experience"
                                            name="experience"
                                            value={
                                                form.experience
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            required={false}
                                        >
                                            <option value="">
                                                Select experience
                                            </option>

                                            <option value="none">
                                                No experience
                                            </option>

                                            <option value="beginner">
                                                Beginner
                                            </option>

                                            <option value="intermediate">
                                                Intermediate
                                            </option>

                                            <option value="advanced">
                                                Advanced
                                            </option>
                                        </SelectField>
                                    </div>

                                    {/* FILE UPLOAD */}

                                    <div className="mt-8 rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50 p-7 dark:border-slate-700 dark:bg-slate-950">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-sm dark:bg-slate-900 dark:text-indigo-400">
                                                <Upload size={22} />
                                            </div>

                                            <h3 className="mt-4 font-black">
                                                Supporting Document
                                            </h3>

                                            <p className="mt-2 max-w-md text-xs leading-6 text-slate-500 dark:text-slate-400">
                                                Upload your CV,
                                                certificate or
                                                another supporting
                                                document. PDF, JPG
                                                and PNG are
                                                supported.
                                            </p>

                                            <label className="mt-5 cursor-pointer rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-500">
                                                Choose File

                                                <input
                                                    type="file"
                                                    accept=".pdf,.jpg,.jpeg,.png"
                                                    className="hidden"
                                                    onChange={(
                                                        event
                                                    ) => {
                                                        const file =
                                                            event
                                                                .target
                                                                .files?.[0];

                                                        if (
                                                            file
                                                        ) {
                                                            const maxSize =
                                                                5 *
                                                                1024 *
                                                                1024;

                                                            if (
                                                                file.size >
                                                                maxSize
                                                            ) {
                                                                setError(
                                                                    "The selected file must be smaller than 5MB."
                                                                );
                                                                return;
                                                            }

                                                            setDocument(
                                                                file
                                                            );
                                                            setError(
                                                                ""
                                                            );
                                                        }
                                                    }}
                                                />
                                            </label>

                                            {document && (
                                                <div className="mt-5 flex w-full max-w-md items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left shadow-sm dark:border-slate-800 dark:bg-slate-900">
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                                                        <FileText
                                                            size={
                                                                17
                                                            }
                                                        />
                                                    </div>

                                                    <div className="min-w-0 flex-1">
                                                        <p className="truncate text-sm font-bold">
                                                            {
                                                                document.name
                                                            }
                                                        </p>

                                                        <p className="mt-0.5 text-[10px] text-slate-400">
                                                            {(
                                                                document.size /
                                                                1024
                                                            ).toFixed(
                                                                0
                                                            )}{" "}
                                                            KB
                                                        </p>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setDocument(
                                                                null
                                                            )
                                                        }
                                                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-950/20"
                                                    >
                                                        <X
                                                            size={
                                                                16
                                                            }
                                                        />
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* =================================
                                STEP 4
                            ================================== */}

                            {currentStep === 4 && (
                                <div>
                                    <SectionTitle
                                        eyebrow="Step 04 / Motivation"
                                        title="What drives you?"
                                        description="There are no perfect answers. We want to understand your goals, motivation and expectations."
                                    />

                                    <div className="space-y-6">
                                        <div>
                                            <label
                                                htmlFor="motivation"
                                                className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300"
                                            >
                                                Why do you want
                                                to join this
                                                program?
                                                <span className="ml-1 text-indigo-500">
                                                    *
                                                </span>
                                            </label>

                                            <textarea
                                                id="motivation"
                                                name="motivation"
                                                value={
                                                    form.motivation
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                required
                                                rows={7}
                                                placeholder="Tell us what motivated you to apply..."
                                                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                                            />

                                            <div className="mt-2 flex justify-end text-[10px] text-slate-400">
                                                {
                                                    form.motivation
                                                        .length
                                                }{" "}
                                                characters
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="goals"
                                                className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300"
                                            >
                                                What do you want
                                                to achieve?
                                                <span className="ml-1 text-indigo-500">
                                                    *
                                                </span>
                                            </label>

                                            <textarea
                                                id="goals"
                                                name="goals"
                                                value={
                                                    form.goals
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                required
                                                rows={6}
                                                placeholder="Describe your career, education or personal goals..."
                                                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                                            />
                                        </div>

                                        <SelectField
                                            label="How did you hear about us?"
                                            name="hearAboutUs"
                                            value={
                                                form.hearAboutUs
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            required={false}
                                        >
                                            <option value="">
                                                Select an option
                                            </option>

                                            <option value="facebook">
                                                Facebook
                                            </option>

                                            <option value="instagram">
                                                Instagram
                                            </option>

                                            <option value="linkedin">
                                                LinkedIn
                                            </option>

                                            <option value="friend">
                                                Friend / Family
                                            </option>

                                            <option value="google">
                                                Google Search
                                            </option>

                                            <option value="website">
                                                Website
                                            </option>

                                            <option value="other">
                                                Other
                                            </option>
                                        </SelectField>
                                    </div>
                                </div>
                            )}

                            {/* =================================
                                STEP 5
                            ================================== */}

                            {currentStep === 5 && (
                                <div>
                                    <SectionTitle
                                        eyebrow="Step 05 / Review"
                                        title="Everything looks good?"
                                        description="Review your application before submitting it to the admissions team."
                                    />

                                    <div className="space-y-5">
                                        {/* PROGRAM */}

                                        <div className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-indigo-50 p-5 dark:border-indigo-900/50 dark:bg-indigo-950/20">
                                            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl" />

                                            <div className="relative flex items-start gap-4">
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
                                                    <BookOpen
                                                        size={20}
                                                    />
                                                </div>

                                                <div>
                                                    <p className="text-[10px] font-black uppercase tracking-wider text-indigo-500">
                                                        Selected
                                                        Program
                                                    </p>

                                                    <h3 className="mt-1 text-lg font-black text-slate-900 dark:text-white">
                                                        {
                                                            selectedProgramData?.title
                                                        }
                                                    </h3>

                                                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                                        {
                                                            selectedProgramData?.duration
                                                        }{" "}
                                                        ·{" "}
                                                        {
                                                            selectedProgramData?.level
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <ReviewBlock
                                            icon={User}
                                            title="Personal Information"
                                            items={[
                                                [
                                                    "Name",
                                                    `${form.firstName} ${form.lastName}`,
                                                ],
                                                [
                                                    "Email",
                                                    form.email,
                                                ],
                                                [
                                                    "Phone",
                                                    form.phone,
                                                ],
                                                [
                                                    "Location",
                                                    form.city,
                                                ],
                                            ]}
                                        />

                                        <ReviewBlock
                                            icon={GraduationCap}
                                            title="Education"
                                            items={[
                                                [
                                                    "Education",
                                                    form.education,
                                                ],
                                                [
                                                    "Institution",
                                                    form.institution,
                                                ],
                                                [
                                                    "Field",
                                                    form.fieldOfStudy ||
                                                        "—",
                                                ],
                                                [
                                                    "Experience",
                                                    form.experience ||
                                                        "—",
                                                ],
                                            ]}
                                        />

                                        <ReviewBlock
                                            icon={Sparkles}
                                            title="Motivation"
                                            items={[
                                                [
                                                    "Motivation",
                                                    form.motivation,
                                                ],
                                                [
                                                    "Goals",
                                                    form.goals,
                                                ],
                                            ]}
                                        />

                                        {document && (
                                            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                                                <FileText
                                                    size={19}
                                                    className="text-indigo-500"
                                                />

                                                <div className="min-w-0">
                                                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                                                        Supporting
                                                        Document
                                                    </p>

                                                    <p className="truncate text-sm font-bold">
                                                        {
                                                            document.name
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        {/* CONSENT */}

                                        <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                                            <input
                                                type="checkbox"
                                                required
                                                className="mt-1 h-4 w-4 accent-indigo-600"
                                            />

                                            <span className="text-xs leading-6 text-slate-500 dark:text-slate-400">
                                                I confirm that the
                                                information provided
                                                in this application is
                                                accurate and complete,
                                                and I understand that
                                                Top in Town Technology
                                                may contact me regarding
                                                my application.
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            )}

                            {/* =================================
                                NAVIGATION
                            ================================== */}

                            <div className="mt-10 flex flex-col-reverse gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">
                                <button
                                    type="button"
                                    onClick={previousStep}
                                    disabled={currentStep === 1}
                                    className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-bold transition ${
                                        currentStep === 1
                                            ? "pointer-events-none opacity-30"
                                            : "border border-slate-200 bg-white hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
                                    }`}
                                >
                                    <ArrowLeft size={17} />
                                    Previous
                                </button>

                                {currentStep <
                                steps.length ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-500"
                                    >
                                        Continue
                                        <ArrowRight
                                            size={17}
                                        />
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:from-indigo-500 hover:to-violet-500"
                                    >
                                        Submit Application
                                        <Send size={17} />
                                    </button>
                                )}
                            </div>
                        </form>

                        {/* =====================================
                            SIDEBAR
                        ====================================== */}

                        <Sidebar />
                    </div>
                </main>

                {/* =============================================
                    FOOTER
                ============================================== */}

                <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-7 text-center text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">
                        <p>
                            © {new Date().getFullYear()} Top in Town
                            Technology. All rights reserved.
                        </p>

                        <div className="flex justify-center gap-5 sm:justify-end">
                            <Link
                                to="/"
                                className="transition hover:text-indigo-500"
                            >
                                Home
                            </Link>

                            <Link
                                to="/courses"
                                className="transition hover:text-indigo-500"
                            >
                                Courses
                            </Link>

                            <Link
                                to="/contactus"
                                className="transition hover:text-indigo-500"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}