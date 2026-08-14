import React, { useState } from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Information Technology",
    shortTitle: "IT Training",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    description:
      "Learn computer fundamentals, networking, operating systems, hardware, software, and modern IT concepts.",
    duration: "6 Months",
    level: "Beginner",
    instructor: "Top in Town Technology",
    lessons: "24 Lessons",
  },
  {
    id: 2,
    title: "Software Engineering",
    shortTitle: "Software Engineering",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    description:
      "Learn programming, software design, testing, project management, and real-world development practices.",
    duration: "8 Months",
    level: "Intermediate",
    instructor: "Top in Town Technology",
    lessons: "32 Lessons",
  },
  {
    id: 3,
    title: "CCTV & Security Systems",
    shortTitle: "CCTV",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85",
    description:
      "Learn CCTV installation, camera configuration, monitoring systems, and security fundamentals.",
    duration: "3 Months",
    level: "Beginner",
    instructor: "Top in Town Technology",
    lessons: "18 Lessons",
  },
  {
    id: 4,
    title: "Graphic Design",
    shortTitle: "Graphic Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85",
    description:
      "Learn typography, branding, composition, color theory, and modern graphic design tools.",
    duration: "5 Months",
    level: "Beginner",
    instructor: "Top in Town Technology",
    lessons: "22 Lessons",
  },
  {
    id: 5,
    title: "Data Science",
    shortTitle: "Data Science",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    description:
      "Learn data analysis, statistics, visualization, and the foundations of machine learning.",
    duration: "6 Months",
    level: "Intermediate",
    instructor: "Top in Town Technology",
    lessons: "28 Lessons",
  },
  {
    id: 6,
    title: "English Language",
    shortTitle: "Language",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
    description:
      "Improve speaking, writing, reading, vocabulary, and professional communication skills.",
    duration: "4 Months",
    level: "All Levels",
    instructor: "Top in Town Technology",
    lessons: "20 Lessons",
  },
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#101923] py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#101923] via-[#101923]/90 to-[#101923]/60" />

        <div className="relative mx-auto max-w-7xl px-5">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#f5a623]">
            Top in Town Technology
          </div>

          <h1 className="mt-3 text-5xl font-black text-white">
            Courses
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Explore our professional training programs and discover practical
            courses designed to build modern technology skills.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-5 py-4 text-sm">
          <Link to="/" className="text-[#f5a623]">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Courses</span>
        </div>
      </div>

      {/* Categories */}
      {!selectedCourse && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="text-center">
              <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#f5a623]">
                Course Categories
              </div>

              <h2 className="mt-3 text-4xl font-black text-[#101923]">
                Explore Our Courses
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
                Choose a course to view complete details including duration,
                level, instructor, lessons, and course overview.
              </p>
            </div>

            <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-black text-[#101923]">
                      {course.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-500">
                      {course.description}
                    </p>

                    <button
                      onClick={() => {
                        setSelectedCourse(course);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="mt-6 rounded-full border border-[#f5a623] px-6 py-3 font-bold text-[#f5a623] transition hover:bg-[#f5a623] hover:text-white"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Course Details */}
      {selectedCourse && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5">
            <button
              onClick={() => {
                setSelectedCourse(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mb-8 font-bold text-[#f5a623]"
            >
              ← Back to Courses
            </button>

            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <img
                  src={selectedCourse.image}
                  alt={selectedCourse.title}
                  className="w-full rounded-3xl object-cover shadow-xl"
                />
              </div>

              <div>
                <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#f5a623]">
                  Course Details
                </div>

                <h2 className="mt-3 text-4xl font-black text-[#101923]">
                  {selectedCourse.title}
                </h2>

                <p className="mt-6 leading-8 text-gray-600">
                  {selectedCourse.description}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-5">
                  <div className="rounded-xl bg-gray-50 p-5">
                    <div className="text-xs uppercase text-gray-400">
                      Duration
                    </div>
                    <div className="mt-2 font-bold text-[#101923]">
                      {selectedCourse.duration}
                    </div>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-5">
                    <div className="text-xs uppercase text-gray-400">
                      Level
                    </div>
                    <div className="mt-2 font-bold text-[#101923]">
                      {selectedCourse.level}
                    </div>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-5">
                    <div className="text-xs uppercase text-gray-400">
                      Instructor
                    </div>
                    <div className="mt-2 font-bold text-[#101923]">
                      {selectedCourse.instructor}
                    </div>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-5">
                    <div className="text-xs uppercase text-gray-400">
                      Lessons
                    </div>
                    <div className="mt-2 font-bold text-[#101923]">
                      {selectedCourse.lessons}
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-2xl font-black text-[#101923]">
                    What You'll Learn
                  </h3>

                  <ul className="mt-5 space-y-3 text-gray-600">
                    <li>✓ Practical hands-on training</li>
                    <li>✓ Modern industry-relevant concepts</li>
                    <li>✓ Real-world projects and exercises</li>
                    <li>✓ Guidance from experienced instructors</li>
                    <li>✓ Skills for academic and professional growth</li>
                  </ul>
                </div>

                <button className="mt-10 rounded-full bg-[#f5a623] px-8 py-4 font-bold text-white transition hover:bg-[#101923]">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-[#101923] py-12 text-white">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <h3 className="text-2xl font-black">
            Top in Town Technology
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400">
            Professional technology education focused on practical learning,
            modern skills, and career development.
          </p>

          <p className="mt-8 text-xs text-gray-500">
            © {new Date().getFullYear()} Top in Town Technology. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Courses