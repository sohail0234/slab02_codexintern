import React from 'react';
import { useState } from 'react';

// Main App component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection setCurrentPage={setCurrentPage} />
            <FeaturesSection />
            <TestimonialsSection />
          </>
        );
      case 'courses':
        return <CoursesPage />;
      case 'features':
        return <FeaturesPage />;
      case 'events':
        return <EventsPage />;
      case 'blog':
        return <BlogPage />;
      case 'community':
        return <CommunityPage />;
      case 'login':
        return <LoginPage />;
      case 'signup':
        return <SignUpPage />;
      default:
        return (
          <>
            <HeroSection setCurrentPage={setCurrentPage} />
            <FeaturesSection />
            <TestimonialsSection />
          </>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <Navbar setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

// Navbar Component
const Navbar = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 sm:p-6 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center">
          <a href="#" onClick={() => setCurrentPage('home')} className="flex-shrink-0">
            <span className="font-extrabold text-2xl sm:text-3xl text-orange-500">
              Coding Ninjas
            </span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 sm:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-6 lg:space-x-10">
          <NavLink onClick={() => setCurrentPage('courses')}>Courses</NavLink>
          <NavLink onClick={() => setCurrentPage('features')}>Features</NavLink>
          <NavLink onClick={() => setCurrentPage('events')}>Events</NavLink>
          <NavLink onClick={() => setCurrentPage('blog')}>Blog</NavLink>
          <NavLink onClick={() => setCurrentPage('community')}>Community</NavLink>
        </div>
        
        {/* Auth Buttons */}
        <div className="hidden sm:flex items-center space-x-4">
          <a href="#" onClick={() => setCurrentPage('login')} className="py-2 px-4 rounded-full text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            Log In
          </a>
          <a href="#" onClick={() => setCurrentPage('signup')} className="py-2 px-6 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors duration-200">
            Sign Up
          </a>
        </div>

        {/* Mobile Menu */}
        <div className={`w-full sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-3">
            <NavLink onClick={() => setCurrentPage('courses')}>Courses</NavLink>
            <NavLink onClick={() => setCurrentPage('features')}>Features</NavLink>
            <NavLink onClick={() => setCurrentPage('events')}>Events</NavLink>
            <NavLink onClick={() => setCurrentPage('blog')}>Blog</NavLink>
            <NavLink onClick={() => setCurrentPage('community')}>Community</NavLink>
            <hr className="border-gray-200 dark:border-gray-700"/>
            <a href="#" onClick={() => setCurrentPage('login')} className="w-full py-2 px-4 rounded-lg text-center font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              Log In
            </a>
            <a href="#" onClick={() => setCurrentPage('signup')} className="w-full py-2 px-6 rounded-lg text-center bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors duration-200">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ onClick, children }) => (
  <a href="#" onClick={onClick} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 font-medium transition-colors duration-200 text-lg sm:text-base">
    {children}
  </a>
);

// Hero Section Component
const HeroSection = ({ setCurrentPage }) => (
  <section className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 text-white py-12 sm:py-24">
    <div className="container mx-auto text-center px-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
        Master Your Coding Skills
      </h1>
      <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 opacity-90">
        Start your coding journey with expertly crafted courses, live classes, and hands-on projects.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a href="#" onClick={() => setCurrentPage('courses')} className="w-full sm:w-auto py-3 px-8 rounded-full bg-white text-blue-600 font-bold text-lg shadow-xl hover:scale-105 transform transition-all duration-300">
          Explore Courses
        </a>
        <a href="#" className="w-full sm:w-auto py-3 px-8 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-blue-600 hover:scale-105 transform transition-all duration-300">
          Watch Free Demo
        </a>
      </div>
    </div>
  </section>
);

// Features Section Component
const FeaturesSection = () => (
  <section className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-12">
        Why Choose Coding Ninjas?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon="📚"
          title="Industry-Ready Curriculum"
          description="Learn from experts with a curriculum designed to meet modern industry demands."
        />
        <FeatureCard 
          icon="👩‍🏫"
          title="Expert Mentors"
          description="Get live doubt support from experienced mentors and instructors."
        />
        <FeatureCard 
          icon="🏆"
          title="Career Support"
          description="Resume building, mock interviews, and placement assistance with top companies."
        />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-700">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

// Testimonials Section Component
const TestimonialsSection = () => (
  <section className="py-12 sm:py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-12">
        What Our Students Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard 
          quote="The best platform to learn coding from scratch. The courses are very detailed and the instructors are excellent."
          name="Aisha Sharma"
          role="Software Engineer, Google"
        />
        <TestimonialCard 
          quote="Live doubt sessions were a game-changer for me. I was able to clarify my concepts instantly and ace my interviews."
          name="Rahul Verma"
          role="Data Scientist, Microsoft"
        />
        <TestimonialCard 
          quote="I got my first job through Coding Ninjas' placement support. The curriculum truly prepares you for the real world."
          name="Priya Singh"
          role="Full-Stack Developer, Amazon"
        />
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ quote, name, role }) => (
  <div className="p-6 rounded-2xl shadow-xl bg-gray-50 dark:bg-gray-800">
    <p className="italic text-gray-600 dark:text-gray-300 mb-4">"{quote}"</p>
    <div className="text-left">
      <p className="font-bold text-gray-900 dark:text-white">{name}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
    </div>
  </div>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-10">
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
      <div>
        <h4 className="font-bold text-white mb-4">Company</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-orange-500 transition-colors">Our Team</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-white mb-4">Products</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-orange-500 transition-colors">Courses</a></li>
          <li><a href="#" className="hover:text-orange-500 transition-colors">Free Demos</a></li>
          <li><a href="#" className="hover:text-orange-500 transition-colors">Placement Cell</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-white mb-4">Community</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-orange-500 transition-colors">Blogs</a></li>
          <li><a href="#" className="hover:text-orange-500 transition-colors">Events</a></li>
          <li><a href="#" className="hover:text-orange-500 transition-colors">Forum</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-white mb-4">Contact Us</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-orange-500 transition-colors">Support</a></li>
          <li><a href="#" className="hover:text-orange-500 transition-colors">Partnerships</a></li>
          <li><a href="#" className="hover:text-orange-500 transition-colors">Press</a></li>
        </ul>
      </div>
    </div>
    <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-6">
      &copy; 2024 Coding Ninjas Clone. All rights reserved.
    </div>
  </footer>
);

// New Page Components
const CoursesPage = () => (
  <section className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
        Our Courses
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        Explore our wide range of courses designed for all skill levels, from beginners to advanced professionals.
      </p>
      {/* Course Cards (Placeholder) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CourseCard title="Data Structures & Algorithms" description="Master DSA with our expert-led course." />
        <CourseCard title="Web Development" description="Become a full-stack web developer." />
        <CourseCard title="Competitive Programming" description="Sharpen your problem-solving skills." />
        <CourseCard title="Machine Learning" description="Dive into the world of AI and machine learning." />
      </div>
    </div>
  </section>
);

const CourseCard = ({ title, description }) => (
  <div className="p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-700">
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
    <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">Learn More →</a>
  </div>
);

const FeaturesPage = () => (
  <section className="py-12 sm:py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
        Our Unique Features
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        Discover what makes our learning experience stand out from the rest.
      </p>
      <div className="space-y-8">
        <FeatureItem 
          title="24x7 Doubt Support"
          description="Get your queries answered instantly by our team of teaching assistants."
        />
        <FeatureItem 
          title="Live Classes & Recordings"
          description="Attend live sessions with industry experts and access recordings anytime."
        />
        <FeatureItem 
          title="Dedicated Placement Cell"
          description="Receive personalized placement assistance, from resume building to interview prep."
        />
      </div>
    </div>
  </section>
);

const FeatureItem = ({ title, description }) => (
  <div className="p-6 rounded-2xl shadow-xl bg-gray-50 dark:bg-gray-800">
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const EventsPage = () => (
  <section className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
        Upcoming Events
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        Join our webinars, workshops, and coding challenges to level up your skills.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <EventCard 
          title="Web Dev Bootcamp"
          date="25th Oct 2024"
          description="A hands-on workshop to build your first full-stack application."
        />
        <EventCard 
          title="Cracking FAANG Interviews"
          date="10th Nov 2024"
          description="Tips and tricks to ace your interviews with top tech companies."
        />
        <EventCard 
          title="DSA Challenge 2024"
          date="1st Dec 2024"
          description="Compete with coders from around the world and win prizes."
        />
      </div>
    </div>
  </section>
);

const EventCard = ({ title, date, description }) => (
  <div className="p-6 rounded-2xl shadow-xl bg-white dark:bg-gray-700">
    <p className="text-sm font-semibold text-orange-500 mb-2">{date}</p>
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const BlogPage = () => (
  <section className="py-12 sm:py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
        Our Blog
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        Read our latest articles on technology, career advice, and industry trends.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogPost 
          title="Top 5 Programming Languages to Learn in 2024"
          author="By Jane Doe"
        />
        <BlogPost 
          title="A Beginner's Guide to Data Structures"
          author="By John Smith"
        />
        <BlogPost 
          title="From College to Corporate: My Journey"
          author="By Emily Chen"
        />
      </div>
    </div>
  </section>
);

const BlogPost = ({ title, author }) => (
  <div className="p-6 rounded-2xl shadow-xl bg-gray-50 dark:bg-gray-800">
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm">{author}</p>
    <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">Read Article →</a>
  </div>
);

const CommunityPage = () => (
  <section className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
        Join Our Community
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        Connect with fellow students, mentors, and alumni.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <CommunityButton icon="💬" text="Join Forum" />
        <CommunityButton icon="🤝" text="Connect on LinkedIn" />
        <CommunityButton icon="💻" text="Discord Server" />
      </div>
    </div>
  </section>
);

const CommunityButton = ({ icon, text }) => (
  <a href="#" className="flex items-center justify-center space-x-2 py-3 px-6 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors duration-200 shadow-lg">
    <span className="text-2xl">{icon}</span>
    <span>{text}</span>
  </a>
);

// New Login and Sign Up pages
const LoginPage = () => (
  <section className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800 flex justify-center items-center">
    <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl w-full max-w-sm">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">Log In</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  </section>
);

const SignUpPage = () => (
  <section className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800 flex justify-center items-center">
    <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl w-full max-w-sm">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">Sign Up</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </section>
);
