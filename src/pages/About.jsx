import React, { useEffect, useState } from "react";

const historyData = [
    {
        year: "2013",
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
        text: "Top in Town Technology was established in Kabul, Afghanistan, with the goal of providing high-quality IT training to young Afghan students.",
    },
    {
        year: "2014",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
        text: "The center began offering specialized courses in networking, programming, and cybersecurity, rapidly gaining recognition in the field of IT education.",
    },
    {
        year: "2015",
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
        text: "Expansion of course offerings, including design and graphics, as well as continued growth in the number of students.",
    },
    {
        year: "2016",
        image:
            "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80",
        text: "Top in Town Technology began to provide international certifications, enhancing the credibility of its courses and students.",
    },
    {
        year: "2017",
        image:
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
        text: "The center hosted its first set of workshops and training sessions for industry professionals, further strengthening its role in the Afghan IT community.",
    },
    {
        year: "2018",
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
        text: "Successful collaborations with local and international organizations to provide internships and job opportunities for graduates.",
    },
    {
        year: "2019",
        image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
        text: "Introduction of more advanced IT courses and certification programs, including cloud computing and data analysis.",
    },
    {
        year: "2020",
        image:
            "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=900&q=80",
        text: "Shift to online education due to the COVID-19 pandemic, making courses accessible to students nationwide.",
    },
    {
        year: "2021",
        image:
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
        text: "Continued growth and partnership with international organizations to offer globally recognized IT certifications.",
    },
    {
        year: "2022",
        image:
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80",
        text: "Ongoing expansion of training facilities and increase in the number of successful graduates entering the job market.",
    },
    {
        year: "2023",
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
        text: "Focus on new technologies such as artificial intelligence, machine learning, and blockchain in the curriculum.",
    },
    {
        year: "2024",
        image:
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80",
        text: "Top in Town Technology continued to be one of the leading IT training providers in Afghanistan, with an ever-expanding range of courses and training programs.",
    },
    {
        year: "2025",
        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
        text: "Plans to introduce advanced technology programs and further strengthen collaborations with global technology firms.",
    },
];

const team = [
    {
        name: "Sohrab Ataei",
        position: "Programmer",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80",
    },
    {
        name: "Sharif Khairy",
        position: "IT Officer",
        image:
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=700&q=80",
    },
    {
        name: "Habib Yadgar",
        position: "Programmer",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
    },
    {
        name: "Hayatullah Sadat",
        position: "Programmer",
        image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80",
    },
];

const stats = [
    { value: 10000, label: "Students", suffix: "+" },
    { value: 64, label: "Courses", suffix: "+" },
    { value: 42, label: "Events", suffix: "+" },
    { value: 24, label: "Trainers", suffix: "+" },
];

const About = () => {
    const [selectedYear, setSelectedYear] = useState("2013");
    const [language, setLanguage] = useState("English");
    const [mobileMenu, setMobileMenu] = useState(false);
    const [email, setEmail] = useState("");

    const selectedHistory = historyData.find(
        (item) => item.year === selectedYear
    );

    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll(".animate-on-scroll").forEach((element) => {
                const position = element.getBoundingClientRect();

                if (position.top < window.innerHeight - 80) {
                    element.classList.add("show-animation");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email) return;

        alert(`Thank you! ${email} has been subscribed.`);
        setEmail("");
    };

    return (
        <div className="min-h-screen bg-white text-gray-700">
            {/* ================= TOP HEADER ================= */}
            <div className="bg-slate-900 text-white">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="flex flex-col gap-2 py-3 text-xs sm:flex-row sm:items-center sm:justify-between">
                        <div className="relative">
                            <button
                                onClick={() => setLanguage(language === "English" ? "فارسی" : "English")}
                                className="rounded px-2 py-1 transition hover:bg-white/10"
                            >
                                🌐 {language} ▾
                            </button>
                        </div>

                        <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                            <span>☎ (+93) 788660118</span>
                            <span>✉ info@topintowntechnology.com</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= NAVIGATION ================= */}
            <nav className="sticky top-0 z-50 bg-[#26374a] shadow-lg">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="flex min-h-[78px] items-center justify-between">
                        {/* Logo */}
                        <a href="/" className="flex items-center">
                            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow">
                                <img
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&q=80"
                                    alt="Top in Town Technology"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden items-center gap-1 lg:flex">
                            <a
                                href="/"
                                className="rounded px-5 py-6 text-sm font-medium text-white transition hover:bg-white/10"
                            >
                                Home
                            </a>

                            <div className="group relative">
                                <button className="rounded px-5 py-6 text-sm font-medium text-white transition hover:bg-white/10">
                                    Features ▾
                                </button>

                                <div className="invisible absolute left-0 top-full w-52 translate-y-2 rounded bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                    <a
                                        href="/team"
                                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Team Members
                                    </a>
                                    <a
                                        href="/testimonials"
                                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Testimonials
                                    </a>
                                </div>
                            </div>

                            <div className="group relative">
                                <button className="rounded px-5 py-6 text-sm font-medium text-white transition hover:bg-white/10">
                                    About ▾
                                </button>

                                <div className="invisible absolute left-0 top-full w-48 translate-y-2 rounded bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                    <a
                                        href="/about"
                                        className="block bg-gray-100 px-5 py-3 text-sm text-gray-700"
                                    >
                                        About
                                    </a>
                                    <a
                                        href="/gallery"
                                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Gallery
                                    </a>
                                </div>
                            </div>

                            <div className="group relative">
                                <button className="rounded px-5 py-6 text-sm font-medium text-white transition hover:bg-white/10">
                                    Course ▾
                                </button>

                                <div className="invisible absolute left-0 top-full w-56 translate-y-2 rounded bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                    <a
                                        href="/courses"
                                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Course Category
                                    </a>
                                    <a
                                        href="/course-details"
                                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Course Details
                                    </a>
                                </div>
                            </div>

                            <a
                                href="/contact"
                                className="rounded px-5 py-6 text-sm font-medium text-white transition hover:bg-white/10"
                            >
                                Contact Us
                            </a>
                        </div>

                        {/* Mobile button */}
                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="rounded border border-white/30 px-3 py-2 text-xl text-white lg:hidden"
                        >
                            ☰
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenu && (
                        <div className="border-t border-white/10 pb-4 lg:hidden">
                            <div className="flex flex-col">
                                <a href="/" className="px-4 py-3 text-white hover:bg-white/10">
                                    Home
                                </a>
                                <a href="/team" className="px-4 py-3 text-white hover:bg-white/10">
                                    Team Members
                                </a>
                                <a
                                    href="/testimonials"
                                    className="px-4 py-3 text-white hover:bg-white/10"
                                >
                                    Testimonials
                                </a>
                                <a href="/about" className="bg-white/10 px-4 py-3 text-white">
                                    About
                                </a>
                                <a
                                    href="/gallery"
                                    className="px-4 py-3 text-white hover:bg-white/10"
                                >
                                    Gallery
                                </a>
                                <a
                                    href="/courses"
                                    className="px-4 py-3 text-white hover:bg-white/10"
                                >
                                    Courses
                                </a>
                                <a
                                    href="/contact"
                                    className="px-4 py-3 text-white hover:bg-white/10"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* ================= HERO ================= */}
            <section
                className="relative overflow-hidden bg-cover bg-center py-28"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85')",
                }}
            >
                <div className="absolute inset-0 bg-slate-950/70" />

                <div className="relative mx-auto max-w-7xl px-4">
                    <div className="animate-on-scroll translate-x-[-30px] opacity-0 transition-all duration-1000">
                        <h1 className="inline-block border-l-4 border-orange-500 pl-5 text-4xl font-bold text-white md:text-5xl">
                            About
                        </h1>
                    </div>
                </div>
            </section>

            {/* ================= BREADCRUMB ================= */}
            <div className="bg-gray-100">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="flex items-center gap-2 py-4 text-sm">
                        <a href="/" className="text-orange-500 hover:text-orange-600">
                            Home
                        </a>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-500">About</span>
                    </div>
                </div>
            </div>

            {/* ================= ABOUT ================= */}
            <section className="overflow-hidden py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <SectionHeading
                        label="About us"
                        title="Our teaching expertise provides you great value"
                    />

                    <p className="mx-auto mt-6 max-w-4xl text-center text-base leading-8 text-gray-600">
                        At Top in Town Technology, expert instructors with international
                        certifications bring real-world experience into every course.
                        Their teaching approach emphasizes hands-on practice, up-to-date
                        tools, and personalized support to ensure students gain practical
                        skills that add real value. Whether you're diving into networking,
                        programming, cybersecurity, or design, their commitment to quality
                        education helps students confidently meet industry standards.
                    </p>
                </div>
            </section>

            {/* ================= HISTORY ================= */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <SectionHeading label="About us" title="Course History" />

                    <p className="mx-auto mt-5 max-w-3xl text-center leading-8 text-gray-600">
                        Top in Town Technology is a leading educational center in Kabul,
                        established in 2013. With over a decade of experience, it has
                        trained more than 10,000 students in various fields of information
                        technology.
                    </p>

                    {/* Year selector */}
                    <div className="mt-12 overflow-x-auto pb-3">
                        <div className="flex min-w-max justify-center gap-3">
                            {historyData.map((item) => (
                                <button
                                    key={item.year}
                                    onClick={() => setSelectedYear(item.year)}
                                    className={`rounded-full px-5 py-3 text-sm font-bold transition ${selectedYear === item.year
                                            ? "bg-orange-500 text-white shadow-lg"
                                            : "bg-white text-gray-600 shadow hover:bg-orange-50"
                                        }`}
                                >
                                    {item.year}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Selected history */}
                    <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl">
                        <div className="grid md:grid-cols-2">
                            <div className="h-72 md:h-full">
                                <img
                                    src={selectedHistory.image}
                                    alt={selectedHistory.year}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="flex flex-col justify-center p-8 md:p-12">
                                <span className="text-6xl font-black text-orange-500/20">
                                    {selectedHistory.year}
                                </span>

                                <h3 className="mt-[-25px] text-3xl font-bold text-slate-800">
                                    {selectedHistory.year}
                                </h3>

                                <p className="mt-5 leading-8 text-gray-600">
                                    {selectedHistory.text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= MISSION ================= */}
            <section className="py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <div className="overflow-hidden rounded-2xl shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85"
                                alt="Our Mission"
                                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
                            />
                        </div>

                        <div>
                            <div className="mb-5 text-5xl">🚀</div>

                            <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
                                Our Mission
                            </h2>

                            <div className="mt-6 leading-8 text-gray-600">
                                Our mission is to facilitate in providing the most credential
                                Technological training and certifications globally. We are
                                committed to provide standard Technological services to its
                                customers by keeping towards outcome-based Technology. We
                                instill curiosity, incept innovation and encourage
                                self-reliance in individuals to foster community in the world
                                of Technology.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= STATS ================= */}
            <section
                className="relative overflow-hidden bg-cover bg-center py-20"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=85')",
                }}
            >
                <div className="absolute inset-0 bg-slate-950/75" />

                <div className="relative mx-auto max-w-7xl px-4">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-xl border-2 border-orange-500 text-2xl font-bold text-white md:h-28 md:w-28 md:text-3xl">
                                    {stat.value.toLocaleString()}
                                    {stat.suffix}
                                </div>

                                <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-white">
                                    {stat.label}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= VISION ================= */}
            <section className="py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <div>
                            <div className="mb-5 text-5xl">👁️</div>

                            <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
                                Our Vision
                            </h2>

                            <p className="mt-6 leading-8 text-gray-600">
                                Our vision is to provide a global opportunity for a better
                                life.
                            </p>
                        </div>

                        <div className="overflow-hidden rounded-2xl shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                                alt="Our Vision"
                                className="h-[400px] w-full object-cover transition duration-700 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= TEAM ================= */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <SectionHeading label="Team" title="Meet The Team" />

                    <p className="mx-auto mt-5 max-w-3xl text-center leading-8 text-gray-600">
                        The teaching team at Top in Town Technology consists of experienced
                        instructors with international certifications, specializing in
                        various fields of information technology. These instructors use
                        modern teaching methods with a focus on practical training to
                        educate students in areas such as networking, programming,
                        cybersecurity, web design, and graphic design.
                    </p>

                    <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="group overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="h-64 w-full object-cover transition duration-700 group-hover:scale-110 md:h-80"
                                    />

                                    <div className="absolute inset-x-0 bottom-0 translate-y-full bg-orange-500/95 p-3 transition duration-300 group-hover:translate-y-0">
                                        <div className="flex justify-center gap-4 text-white">
                                            <a href="#" aria-label="LinkedIn">
                                                in
                                            </a>
                                            <a href="#" aria-label="Twitter">
                                                𝕏
                                            </a>
                                            <a href="#" aria-label="Instagram">
                                                ◎
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <h3 className="font-bold text-slate-800">
                                        {member.name}
                                    </h3>

                                    <p className="mt-2 text-sm italic text-gray-500">
                                        {member.position}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="relative overflow-hidden bg-slate-900 text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80')",
                    }}
                />

                <div className="relative mx-auto max-w-7xl px-4 py-16">
                    {/* Newsletter */}
                    <div className="mx-auto mb-16 max-w-2xl text-center">
                        <h2 className="text-3xl font-bold">Newsletter</h2>

                        <form
                            onSubmit={handleSubscribe}
                            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
                        >
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email"
                                className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-white outline-none placeholder:text-gray-400 focus:border-orange-500"
                            />

                            <button
                                type="submit"
                                className="rounded-full bg-orange-500 px-7 py-4 font-semibold transition hover:bg-orange-600"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Footer columns */}
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <h2 className="border-b border-orange-500 pb-3 text-xl font-bold">
                                Top in Town Technology
                            </h2>

                            <p className="mt-5 leading-8 text-gray-400">
                                Top in Town Technology is committed to providing quality
                                technological education and practical training to students and
                                professionals. Our goal is to help learners build real-world
                                skills and prepare for opportunities in the technology
                                industry.
                            </p>
                        </div>

                        <div>
                            <h2 className="border-b border-orange-500 pb-3 text-xl font-bold">
                                Contact us
                            </h2>

                            <div className="mt-5 space-y-5">
                                <div>
                                    <h4 className="font-semibold text-white">
                                        📍 Address Information
                                    </h4>
                                    <p className="mt-2 text-gray-400">
                                        Karte-Parwan, Kabul, Afghanistan
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white">☎ Call Now</h4>
                                    <p className="mt-2 text-gray-400">(+93) 788660118</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white">✉ Mail</h4>
                                    <p className="mt-2 text-gray-400">
                                        info@topintowntechnology.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="border-b border-orange-500 pb-3 text-xl font-bold">
                                EXPLORE OUR SITE
                            </h2>

                            <ul className="mt-5 space-y-3">
                                {[
                                    ["About Us", "/about"],
                                    ["Contact Us", "/contact"],
                                    ["Gallery", "/gallery"],
                                    ["Team", "/team"],
                                    ["Course", "/courses"],
                                    ["Testimonials", "/testimonials"],
                                ].map(([title, link]) => (
                                    <li key={title}>
                                        <a
                                            href={link}
                                            className="text-gray-400 transition hover:text-orange-500"
                                        >
                                            → {title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="relative border-t border-white/10 bg-slate-950">
                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Top in Town Technology. All rights
                            reserved.
                        </p>

                        <div className="flex gap-5">
                            <a href="#" className="text-gray-400 hover:text-orange-500">
                                Facebook
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500">
                                Instagram
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500">
                                LinkedIn
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500">
                                X
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

/* ================= SECTION HEADING ================= */

const SectionHeading = ({ label, title }) => {
    return (
        <div className="text-center">
            <div className="inline-flex items-center gap-4">
                <span className="h-px w-10 bg-orange-500" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                    {label}
                </span>
                <span className="h-px w-10 bg-orange-500" />
            </div>

            <h2 className="mt-4 text-3xl font-bold text-slate-800 md:text-4xl">
                {title}
            </h2>
        </div>
    );
};

export default About;