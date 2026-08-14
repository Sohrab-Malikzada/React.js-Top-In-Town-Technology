import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* =========================================================
   ONLINE IMAGES
========================================================= */

const images = {
    hero:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85",

    about:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85",

    programming:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",

    students:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=85",

    team:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",

    cybersecurity:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=85",

    design:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=85",

    laptop:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",

    office:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",

    learning:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85",
};

/* =========================================================
   HERO SLIDES
========================================================= */

const heroSlides = [
    {
        title: "Top in Town",
        highlight: "Technology",
        description:
            "Build practical technology skills through professional training, experienced instructors, and modern learning resources.",
        image: images.hero,
    },
    {
        title: "Learn Today.",
        highlight: "Build Tomorrow.",
        description:
            "Develop the skills you need for programming, networking, cybersecurity, graphic design, and the modern digital world.",
        image: images.students,
    },
    {
        title: "Your Future.",
        highlight: "Our Mission.",
        description:
            "We combine practical education, technology, and professional guidance to help students turn knowledge into real opportunities.",
        image: images.programming,
    },
];

/* =========================================================
   COURSES
========================================================= */

const courses = [
    {
        title: "Information",
        highlight: "Technology",
        icon: "💻",
        description:
            "Learn computer fundamentals, operating systems, networking, hardware, software, and modern IT concepts.",
        image: images.laptop,
    },
    {
        title: "Software",
        highlight: "Engineering",
        icon: "⚙️",
        description:
            "Develop practical programming, software design, development, testing, and problem-solving skills.",
        image: images.programming,
    },
    {
        title: "Cyber",
        highlight: "Security",
        icon: "🔐",
        description:
            "Understand cybersecurity fundamentals, networks, threats, digital security, and information protection.",
        image: images.cybersecurity,
    },
    {
        title: "Graphic",
        highlight: "Design",
        icon: "🎨",
        description:
            "Learn visual communication, typography, branding, digital design, composition, and creative tools.",
        image: images.design,
    },
    {
        title: "Data",
        highlight: "Science",
        icon: "📊",
        description:
            "Learn how to work with data, discover patterns, generate insights, and support better decisions.",
        image: images.office,
    },
    {
        title: "English",
        highlight: "Language",
        icon: "🌐",
        description:
            "Improve speaking, writing, reading, vocabulary, and professional communication skills.",
        image: images.learning,
    },
];

/* =========================================================
   FEATURES
========================================================= */

const features = [
    {
        icon: "🎯",
        title: "Practical Learning",
        description:
            "Our learning approach focuses on practical skills that students can apply in real-world situations.",
    },
    {
        icon: "👨‍🏫",
        title: "Expert Guidance",
        description:
            "Students receive guidance from instructors throughout their learning journey.",
    },
    {
        icon: "💡",
        title: "Modern Education",
        description:
            "We focus on modern technologies, current industry requirements, and continuous learning.",
    },
    {
        icon: "🚀",
        title: "Career Growth",
        description:
            "Our goal is to help students develop skills that create better academic and professional opportunities.",
    },
];

/* =========================================================
   GALLERY
========================================================= */

const gallery = [
    {
        category: "Technology",
        title: "Modern Computer Lab",
        image: images.students,
    },
    {
        category: "Development",
        title: "Programming",
        image: images.programming,
    },
    {
        category: "Cybersecurity",
        title: "Digital Security",
        image: images.cybersecurity,
    },
    {
        category: "Design",
        title: "Creative Design",
        image: images.design,
    },
    {
        category: "Education",
        title: "Collaborative Learning",
        image: images.learning,
    },
    {
        category: "Technology",
        title: "Digital Education",
        image: images.laptop,
    },
];

/* =========================================================
   NEWS
========================================================= */

const news = [
    {
        date: "2026",
        title: "Modern Technology Education",
        description:
            "Technology education continues to evolve with programming, cybersecurity, digital design, and online learning opportunities.",
        image: images.students,
    },
    {
        date: "2026",
        title: "Practical Programming Training",
        description:
            "Hands-on programming education helps learners move from theoretical concepts toward real-world software development.",
        image: images.programming,
    },
    {
        date: "2026",
        title: "Digital Skills for the Future",
        description:
            "Developing strong digital skills can help students prepare for modern academic and professional environments.",
        image: images.laptop,
    },
];

/* =========================================================
   TEAM
========================================================= */

const team = [
    {
        name: "Technology Instructor",
        role: "IT & Technology",
        image: images.team,
    },
    {
        name: "Software Instructor",
        role: "Software Development",
        image: images.programming,
    },
    {
        name: "Design Instructor",
        role: "Graphic Design",
        image: images.design,
    },
    {
        name: "Cybersecurity Instructor",
        role: "Cybersecurity",
        image: images.cybersecurity,
    },
];

/* =========================================================
   TESTIMONIALS
========================================================= */

const testimonials = [
    {
        name: "Student Feedback",
        role: "Technology Student",
        text:
            "The practical learning environment helped me understand technology concepts much better and gave me more confidence to work on real projects.",
        image: images.learning,
    },
    {
        name: "Course Participant",
        role: "Software Development",
        text:
            "The combination of instructors, practical exercises, and modern learning resources created a valuable learning experience.",
        image: images.programming,
    },
];

/* =========================================================
   COUNTER COMPONENT
========================================================= */

function Counter({ value, label, suffix = "+" }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let current = 0;
        const duration = 1600;
        const intervalTime = 30;
        const increment = value / (duration / intervalTime);

        const interval = setInterval(() => {
            current += increment;

            if (current >= value) {
                current = value;
                clearInterval(interval);
            }

            setCount(Math.floor(current));
        }, intervalTime);

        return () => clearInterval(interval);
    }, [value]);

    return (
        <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-[#f5a623]">
                {count}
                {suffix}
            </div>

            <div className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-500">
                {label}
            </div>
        </div>
    );
}

/* =========================================================
   HOME
========================================================= */

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [openAccordion, setOpenAccordion] = useState(0);
    const [activeFilter, setActiveFilter] = useState("All");
    const [lightbox, setLightbox] = useState(null);
    const [testimonial, setTestimonial] = useState(0);

    /* Hero autoplay */
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    /* Testimonial autoplay */
    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const slide = heroSlides[currentSlide];

    const filteredGallery =
        activeFilter === "All"
            ? gallery
            : gallery.filter((item) => item.category === activeFilter);

    return (
        <div className="min-h-screen bg-white text-gray-800">

            {/* =====================================================
          NAVBAR
      ====================================================== */}

            <header className="fixed top-0 left-0 right-0 z-50 bg-[#101923]/95 backdrop-blur-md border-b border-white/10">
                <div className="mx-auto max-w-7xl px-5">
                    <nav className="flex h-20 items-center justify-between">

                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center gap-3"
                            onClick={() => setMobileMenu(false)}
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5a623] text-xl font-black text-white">
                                TT
                            </div>

                            <div className="hidden sm:block">
                                <div className="text-sm font-bold tracking-wide text-white">
                                    TOP IN TOWN
                                </div>

                                <div className="text-[10px] tracking-[0.25em] text-[#f5a623]">
                                    TECHNOLOGY
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-8">

                            <Link
                                to="/"
                                className="text-sm font-medium text-[#f5a623]"
                            >
                                Home
                            </Link>

                            <Link
                                to="/about"
                                className="text-sm font-medium text-white transition hover:text-[#f5a623]"
                            >
                                About
                            </Link>

                            <Link
                                to="/courses"
                                className="text-sm font-medium text-white transition hover:text-[#f5a623]"
                            >
                                Courses
                            </Link>

                            <Link
                                to="/gallery"
                                className="text-sm font-medium text-white transition hover:text-[#f5a623]"
                            >
                                Gallery
                            </Link>

                            <Link
                                to="/team"
                                className="text-sm font-medium text-white transition hover:text-[#f5a623]"
                            >
                                Team
                            </Link>

                            <Link
                                to="/contact"
                                className="text-sm font-medium text-white transition hover:text-[#f5a623]"
                            >
                                Contact
                            </Link>

                            <Link
                                to="/courses/apply"
                                className="rounded-full bg-[#f5a623] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#101923]"
                            >
                                Apply Now
                            </Link>
                        </div>

                        {/* Mobile Button */}
                        <button
                            type="button"
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="lg:hidden rounded-lg border border-white/20 px-3 py-2 text-white"
                        >
                            {mobileMenu ? "✕" : "☰"}
                        </button>
                    </nav>

                    {/* Mobile Menu */}
                    {mobileMenu && (
                        <div className="border-t border-white/10 py-5 lg:hidden">
                            <div className="flex flex-col gap-4">

                                {[
                                    ["Home", "/"],
                                    ["About", "/about"],
                                    ["Courses", "/courses"],
                                    ["Gallery", "/gallery"],
                                    ["Team", "/team"],
                                    ["Contact", "/contact"],
                                ].map(([name, path]) => (
                                    <Link
                                        key={path}
                                        to={path}
                                        onClick={() => setMobileMenu(false)}
                                        className="text-white hover:text-[#f5a623]"
                                    >
                                        {name}
                                    </Link>
                                ))}

                                <Link
                                    to="/courses/apply"
                                    onClick={() => setMobileMenu(false)}
                                    className="w-fit rounded-full bg-[#f5a623] px-5 py-2.5 font-bold text-white"
                                >
                                    Apply Now
                                </Link>

                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* =====================================================
          HERO
      ====================================================== */}

            <section className="relative min-h-[700px] overflow-hidden">

                <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
                />

                <div className="absolute inset-0 bg-[#07111b]/75" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#07111b] via-[#07111b]/70 to-transparent" />

                <div className="relative z-10 mx-auto flex min-h-[700px] max-w-7xl items-center px-5 pt-20">

                    <div className="max-w-3xl">

                        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#f5a623]/40 bg-[#f5a623]/10 px-4 py-2 text-sm text-[#f5a623] backdrop-blur">
                            <span className="h-2 w-2 rounded-full bg-[#f5a623]" />
                            Professional Technology Education
                        </div>

                        <h1 className="text-5xl font-black leading-[1.05] text-white sm:text-6xl md:text-7xl">

                            {slide.title}

                            <span className="block text-[#f5a623]">
                                {slide.highlight}
                            </span>

                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
                            {slide.description}
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">

                            <Link
                                to="/courses"
                                className="rounded-full bg-[#f5a623] px-7 py-3.5 font-bold text-white shadow-lg shadow-[#f5a623]/20 transition hover:-translate-y-1 hover:bg-white hover:text-[#101923]"
                            >
                                Explore Courses
                            </Link>

                            <Link
                                to="/about"
                                className="rounded-full border border-white/50 bg-white/5 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:border-[#f5a623] hover:text-[#f5a623]"
                            >
                                Learn More
                            </Link>

                        </div>

                        {/* Slider dots */}
                        <div className="mt-10 flex gap-2">

                            {heroSlides.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-2.5 rounded-full transition-all ${currentSlide === index
                                            ? "w-10 bg-[#f5a623]"
                                            : "w-2.5 bg-white/40"
                                        }`}
                                />
                            ))}

                        </div>

                    </div>
                </div>

                {/* Hero bottom stats */}
                <div className="absolute bottom-0 left-0 right-0 z-20 hidden border-t border-white/10 bg-[#07111b]/60 backdrop-blur-md md:block">
                    <div className="mx-auto grid max-w-7xl grid-cols-4 px-5 py-6">

                        <div className="border-r border-white/10 text-center">
                            <strong className="text-2xl font-bold text-white">
                                10K+
                            </strong>
                            <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                                Students
                            </p>
                        </div>

                        <div className="border-r border-white/10 text-center">
                            <strong className="text-2xl font-bold text-white">
                                60+
                            </strong>
                            <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                                Courses
                            </p>
                        </div>

                        <div className="border-r border-white/10 text-center">
                            <strong className="text-2xl font-bold text-white">
                                10+
                            </strong>
                            <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                                Years
                            </p>
                        </div>

                        <div className="text-center">
                            <strong className="text-2xl font-bold text-white">
                                24+
                            </strong>
                            <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                                Trainers
                            </p>
                        </div>

                    </div>
                </div>

            </section>

            {/* =====================================================
          FEATURES
      ====================================================== */}

            <section className="bg-white py-20">

                <div className="mx-auto max-w-7xl px-5">

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#f5a623]/30 hover:shadow-xl"
                            >

                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5a623]/10 text-3xl transition group-hover:bg-[#f5a623]">
                                    {feature.icon}
                                </div>

                                <h2 className="text-xl font-bold text-[#101923]">
                                    {feature.title}
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-gray-500">
                                    {feature.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
          ABOUT / WHY CHOOSE US
      ====================================================== */}

            <section className="bg-gray-50 py-24">

                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">

                    <div className="relative">

                        <img
                            src={images.about}
                            alt="Technology education"
                            className="h-[550px] w-full rounded-3xl object-cover shadow-2xl"
                        />

                        <div className="absolute -bottom-6 -right-5 hidden rounded-2xl bg-[#101923] p-7 text-white shadow-2xl sm:block">
                            <div className="text-4xl font-black text-[#f5a623]">
                                10K+
                            </div>

                            <div className="mt-1 text-sm text-gray-300">
                                Students Trained
                            </div>
                        </div>

                    </div>

                    <div>

                        <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#f5a623]">
                            Why Choose Us
                        </div>

                        <h2 className="text-4xl font-black leading-tight text-[#101923] md:text-5xl">
                            Education that turns
                            <span className="block text-[#f5a623]">
                                knowledge into skills.
                            </span>
                        </h2>

                        <p className="mt-6 leading-8 text-gray-600">
                            Top in Town Technology focuses on practical technology
                            education. Our goal is to provide learners with useful skills,
                            modern knowledge, and the confidence to build their future.
                        </p>

                        <div className="mt-8 space-y-3">

                            {[
                                {
                                    title: "Skill-Oriented Learning",
                                    text: "We focus on practical skills that students can apply beyond the classroom.",
                                },
                                {
                                    title: "Expert Guidance",
                                    text: "Our instructors help learners understand concepts and develop practical abilities.",
                                },
                                {
                                    title: "Modern Learning Environment",
                                    text: "Students learn through technology, practical exercises, projects, and collaborative activities.",
                                },
                                {
                                    title: "Career-Focused Development",
                                    text: "Our courses are designed around useful skills for today's digital environment.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={item.title}
                                    className="overflow-hidden rounded-xl border border-gray-200 bg-white"
                                >

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenAccordion(
                                                openAccordion === index ? null : index
                                            )
                                        }
                                        className="flex w-full items-center justify-between px-5 py-4 text-left font-bold text-[#101923]"
                                    >
                                        <span>{item.title}</span>

                                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f5a623] text-white">
                                            {openAccordion === index ? "−" : "+"}
                                        </span>
                                    </button>

                                    {openAccordion === index && (
                                        <div className="border-t border-gray-100 px-5 pb-5 pt-4 text-sm leading-7 text-gray-500">
                                            {item.text}
                                        </div>
                                    )}

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
          COUNTERS
      ====================================================== */}

            <section className="bg-white py-20">

                <div className="mx-auto max-w-7xl px-5">

                    <div className="mx-auto max-w-3xl text-center">

                        <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#f5a623]">
                            Our Impact
                        </div>

                        <h2 className="mt-3 text-4xl font-black text-[#101923]">
                            Building skills for a digital future
                        </h2>

                        <p className="mt-5 leading-8 text-gray-500">
                            Our learning community continues to grow through technology
                            education, practical training, and professional development.
                        </p>

                    </div>

                    <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">

                        <Counter value={10000} label="Students" />

                        <Counter value={64} label="Courses" />

                        <Counter value={42} label="Events" />

                        <Counter value={24} label="Trainers" />

                    </div>

                </div>

            </section>

            {/* =====================================================
          COURSES
      ====================================================== */}

            <section className="bg-[#101923] py-24">

                <div className="mx-auto max-w-7xl px-5">

                    <div className="mx-auto max-w-3xl text-center">

                        <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#f5a623]">
                            What We Teach
                        </div>

                        <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
                            Our Courses
                        </h2>

                        <p className="mt-5 leading-8 text-gray-400">
                            Explore practical courses designed to develop technical,
                            creative, and professional skills.
                        </p>

                    </div>

                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {courses.map((course) => (
                            <div
                                key={course.title}
                                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-[#f5a623]/50"
                            >

                                <div className="relative h-52 overflow-hidden">

                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#101923] via-transparent to-transparent" />

                                    <div className="absolute bottom-4 left-5 text-3xl">
                                        {course.icon}
                                    </div>

                                </div>

                                <div className="p-6">

                                    <h3 className="text-2xl font-black text-white">
                                        {course.title}
                                        <span className="block text-[#f5a623]">
                                            {course.highlight}
                                        </span>
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-gray-400">
                                        {course.description}
                                    </p>

                                    <Link
                                        to="/courses"
                                        className="mt-6 inline-flex items-center font-bold text-[#f5a623] transition hover:text-white"
                                    >
                                        View Course
                                        <span className="ml-2 transition group-hover:translate-x-1">
                                            →
                                        </span>
                                    </Link>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
          GALLERY
      ====================================================== */}

            <section className="bg-white py-24">

                <div className="mx-auto max-w-7xl px-5">

                    <div className="text-center">

                        <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#f5a623]">
                            Our Work
                        </div>

                        <h2 className="mt-3 text-4xl font-black text-[#101923] md:text-5xl">
                            Latest Works
                        </h2>

                    </div>

                    {/* Filters */}
                    <div className="mt-10 flex flex-wrap justify-center gap-2">

                        {[
                            "All",
                            "Technology",
                            "Development",
                            "Cybersecurity",
                            "Design",
                            "Education",
                        ].map((filter) => (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setActiveFilter(filter)}
                                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${activeFilter === filter
                                        ? "bg-[#f5a623] text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}

                    </div>

                    {/* Gallery */}
                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {filteredGallery.map((item, index) => (
                            <button
                                key={`${item.title}-${index}`}
                                type="button"
                                onClick={() => setLightbox(item)}
                                className="group relative h-72 overflow-hidden rounded-2xl bg-gray-100 text-left"
                            >

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-6 opacity-0 transition duration-300 group-hover:opacity-100">

                                    <span className="text-xs font-bold uppercase tracking-widest text-[#f5a623]">
                                        {item.category}
                                    </span>

                                    <h3 className="mt-2 text-xl font-bold text-white">
                                        {item.title}
                                    </h3>

                                </div>

                            </button>
                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
          INVESTMENT CTA
      ====================================================== */}

            <section className="relative overflow-hidden bg-[#f5a623] py-20">

                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />

                <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-black/5" />

                <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 text-center lg:flex-row lg:text-left">

                    <div className="max-w-3xl">

                        <h2 className="text-3xl font-black text-[#101923] md:text-4xl">
                            The best investment is education.
                        </h2>

                        <p className="mt-4 max-w-2xl leading-8 text-[#101923]/75">
                            Build your knowledge, develop practical skills, and prepare
                            yourself for the opportunities of a digital future.
                        </p>

                    </div>

                    <Link
                        to="/contact"
                        className="shrink-0 rounded-full bg-[#101923] px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#101923]"
                    >
                        Contact Us
                    </Link>

                </div>

            </section>

            {/* =====================================================
          NEWS
      ====================================================== */}

            <section className="bg-gray-50 py-24">

                <div className="mx-auto max-w-7xl px-5">

                    <div className="text-center">

                        <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#f5a623]">
                            Updates
                        </div>

                        <h2 className="mt-3 text-4xl font-black text-[#101923]">
                            Latest News
                        </h2>

                    </div>

                    <div className="mt-14 grid gap-7 md:grid-cols-3">

                        {news.map((item) => (
                            <article
                                key={item.title}
                                className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div className="h-56 overflow-hidden">

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                    />

                                </div>

                                <div className="p-7">

                                    <div className="text-sm font-bold text-[#f5a623]">
                                        {item.date}
                                    </div>

                                    <h3 className="mt-2 text-xl font-bold text-[#101923]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-gray-500">
                                        {item.description}
                                    </p>

                                    <button
                                        type="button"
                                        className="mt-5 font-bold text-[#f5a623]"
                                    >
                                        Read More →
                                    </button>

                                </div>

                            </article>
                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
          TESTIMONIAL
      ====================================================== */}

            <section className="relative overflow-hidden bg-[#101923] py-24">

                <div className="absolute inset-0 opacity-10">
                    <img
                        src={images.hero}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="relative mx-auto max-w-5xl px-5">

                    <div className="text-center">

                        <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#f5a623]">
                            Student Experience
                        </div>

                        <h2 className="mt-3 text-4xl font-black text-white">
                            Testimonials
                        </h2>

                    </div>

                    <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12">

                        <div className="flex flex-col items-center gap-8 md:flex-row">

                            <img
                                src={testimonials[testimonial].image}
                                alt={testimonials[testimonial].name}
                                className="h-28 w-28 shrink-0 rounded-full object-cover ring-4 ring-[#f5a623]"
                            />

                            <div>

                                <div className="text-4xl text-[#f5a623]">
                                    “
                                </div>

                                <p className="text-lg leading-8 text-gray-200">
                                    {testimonials[testimonial].text}
                                </p>

                                <div className="mt-5">

                                    <h3 className="font-bold text-white">
                                        {testimonials[testimonial].name}
                                    </h3>

                                    <p className="text-sm text-gray-400">
                                        {testimonials[testimonial].role}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="mt-7 flex justify-center gap-2">

                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setTestimonial(index)}
                                className={`h-2.5 rounded-full transition-all ${testimonial === index
                                        ? "w-10 bg-[#f5a623]"
                                        : "w-2.5 bg-white/30"
                                    }`}
                            />
                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
          TEAM
      ====================================================== */}

            <section className="bg-white py-24">

                <div className="mx-auto max-w-7xl px-5">

                    <div className="text-center">

                        <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#f5a623]">
                            Our People
                        </div>

                        <h2 className="mt-3 text-4xl font-black text-[#101923]">
                            Our Team
                        </h2>

                    </div>

                    <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">

                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div className="h-72 overflow-hidden">

                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />

                                </div>

                                <div className="p-5 text-center">

                                    <h3 className="font-bold text-[#101923]">
                                        {member.name}
                                    </h3>

                                    <p className="mt-1 text-sm text-[#f5a623]">
                                        {member.role}
                                    </p>

                                    <div className="mt-4 flex justify-center gap-2">

                                        {["f", "in", "x"].map((social) => (
                                            <a
                                                href="#"
                                                key={social}
                                                onClick={(e) => e.preventDefault()}
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500 transition hover:bg-[#f5a623] hover:text-white"
                                            >
                                                {social}
                                            </a>
                                        ))}

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
          NEWSLETTER
      ====================================================== */}

            <section className="bg-gray-100 py-16">

                <div className="mx-auto max-w-3xl px-5 text-center">

                    <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#f5a623]">
                        Stay Connected
                    </div>

                    <h2 className="mt-3 text-3xl font-black text-[#101923] md:text-4xl">
                        Subscribe to our Newsletter
                    </h2>

                    <p className="mt-4 text-gray-500">
                        Receive updates about courses, technology education, and new
                        opportunities.
                    </p>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Thank you for subscribing!");
                        }}
                        className="mx-auto mt-7 flex max-w-xl flex-col gap-3 sm:flex-row"
                    >

                        <input
                            type="email"
                            required
                            placeholder="Enter your email address"
                            className="min-w-0 flex-1 rounded-full border border-gray-200 bg-white px-6 py-4 outline-none transition focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/20"
                        />

                        <button
                            type="submit"
                            className="rounded-full bg-[#101923] px-7 py-4 font-bold text-white transition hover:bg-[#f5a623]"
                        >
                            Subscribe
                        </button>

                    </form>

                </div>

            </section>

            {/* =====================================================
          FOOTER
      ====================================================== */}

            <footer className="bg-[#0b121a] text-white">

                <div className="mx-auto max-w-7xl px-5 py-16">

                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                        {/* About */}

                        <div>

                            <div className="flex items-center gap-3">

                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5a623] font-black">
                                    TT
                                </div>

                                <div>
                                    <div className="font-bold">
                                        TOP IN TOWN
                                    </div>

                                    <div className="text-[10px] tracking-[0.25em] text-[#f5a623]">
                                        TECHNOLOGY
                                    </div>
                                </div>

                            </div>

                            <p className="mt-6 text-sm leading-7 text-gray-400">
                                A technology education platform focused on practical learning,
                                professional skills, and digital opportunities.
                            </p>

                        </div>

                        {/* Explore */}

                        <div>

                            <h3 className="text-lg font-bold">
                                Explore
                            </h3>

                            <div className="mt-5 flex flex-col gap-3">

                                <Link
                                    to="/about"
                                    className="text-sm text-gray-400 hover:text-[#f5a623]"
                                >
                                    About Us
                                </Link>

                                <Link
                                    to="/courses"
                                    className="text-sm text-gray-400 hover:text-[#f5a623]"
                                >
                                    Courses
                                </Link>

                                <Link
                                    to="/gallery"
                                    className="text-sm text-gray-400 hover:text-[#f5a623]"
                                >
                                    Gallery
                                </Link>

                                <Link
                                    to="/team"
                                    className="text-sm text-gray-400 hover:text-[#f5a623]"
                                >
                                    Team
                                </Link>

                            </div>

                        </div>

                        {/* Courses */}

                        <div>

                            <h3 className="text-lg font-bold">
                                Courses
                            </h3>

                            <div className="mt-5 flex flex-col gap-3">

                                {courses.slice(0, 4).map((course) => (
                                    <Link
                                        key={course.title}
                                        to="/courses"
                                        className="text-sm text-gray-400 hover:text-[#f5a623]"
                                    >
                                        {course.title} {course.highlight}
                                    </Link>
                                ))}

                            </div>

                        </div>

                        {/* Contact */}

                        <div>

                            <h3 className="text-lg font-bold">
                                Contact Us
                            </h3>

                            <div className="mt-5 space-y-5 text-sm">

                                <div>
                                    <div className="font-bold text-[#f5a623]">
                                        Address
                                    </div>

                                    <div className="mt-1 text-gray-400">
                                        Karte-Parwan, Kabul, Afghanistan
                                    </div>
                                </div>

                                <div>
                                    <div className="font-bold text-[#f5a623]">
                                        Phone
                                    </div>

                                    <div className="mt-1 text-gray-400">
                                        +93 788 660 118
                                    </div>
                                </div>

                                <div>
                                    <div className="font-bold text-[#f5a623]">
                                        Email
                                    </div>

                                    <div className="mt-1 text-gray-400">
                                        info@topintowntechnology.com
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Footer bottom */}

                    <div className="mt-14 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 md:flex-row md:items-center">

                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Top in Town Technology.
                            All Rights Reserved.
                        </p>

                        <div className="flex gap-2">

                            {["f", "in", "x", "ig"].map((social) => (
                                <a
                                    href="#"
                                    key={social}
                                    onClick={(e) => e.preventDefault()}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs text-gray-400 transition hover:border-[#f5a623] hover:bg-[#f5a623] hover:text-white"
                                >
                                    {social}
                                </a>
                            ))}

                        </div>

                    </div>

                </div>

            </footer>

            {/* =====================================================
          LIGHTBOX
      ====================================================== */}

            {lightbox && (
                <div
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-5"
                    onClick={() => setLightbox(null)}
                >

                    <button
                        type="button"
                        onClick={() => setLightbox(null)}
                        className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-[#f5a623]"
                    >
                        ×
                    </button>

                    <img
                        src={lightbox.image}
                        alt={lightbox.title}
                        onClick={(e) => e.stopPropagation()}
                        className="max-h-[85vh] max-w-6xl rounded-xl object-contain shadow-2xl"
                    />

                </div>
            )}

        </div>
    );
};

export default Home;