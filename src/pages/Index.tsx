
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import YearCard from "@/components/YearCard";
import DomainCard from "@/components/DomainCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const yearData = [
    {
      year: "1st Year",
      title: "Foundation Phase",
      description: "Build your programming fundamentals and start your coding journey with the basics of computer science.",
      phase: "Foundation",
      highlights: ["Learn C++ or Python", "Basic DSA", "Git & GitHub", "OOPs Concepts"],
      path: "/first-year",
      gradient: "bg-gradient-to-r from-blue-500 to-blue-700"
    },
    {
      year: "2nd Year",
      title: "Core + Development",
      description: "Master data structures, algorithms and start building real-world projects with web development.",
      phase: "Development",
      highlights: ["Advanced DSA", "Web Development", "Database Management", "Projects"],
      path: "/second-year",
      gradient: "bg-gradient-to-r from-cyan-500 to-blue-600"
    },
    {
      year: "3rd Year",
      title: "Specialization Phase",
      description: "Choose your domain, contribute to open source, and build advanced projects to showcase your skills.",
      phase: "Specialization",
      highlights: ["Domain Selection", "Open Source", "Advanced Projects", "Internships"],
      path: "/third-year",
      gradient: "bg-gradient-to-r from-blue-600 to-indigo-600"
    },
    {
      year: "4th Year",
      title: "Career Preparation",
      description: "Focus on placement preparation, system design, and choose between job opportunities or higher studies.",
      phase: "Career Ready",
      highlights: ["Placement Prep", "System Design", "Mock Interviews", "Higher Studies"],
      path: "/fourth-year",
      gradient: "bg-gradient-to-r from-indigo-600 to-purple-600"
    }
  ];

  const domainData = [
    {
      title: "DSA & Competitive Programming",
      description: "Master problem-solving skills and algorithmic thinking through competitive programming.",
      skills: ["C++", "Algorithms", "Data Structures", "Problem Solving"],
      avgSalary: "₹15-40 LPA",
      jobRoles: ["Software Engineer", "Problem Setter", "Algorithm Developer"],
      color: "bg-blue-500",
      roadmapUrl: "/dsa-roadmap"
    },
    {
      title: "Full Stack Development",
      description: "Build complete web applications from frontend to backend with modern technologies.",
      skills: ["React", "Node.js", "Databases", "Cloud"],
      avgSalary: "₹12-35 LPA",
      jobRoles: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
      color: "bg-cyan-500",
      roadmapUrl: "/webdev-roadmap"
    },
    {
      title: "Machine Learning & AI",
      description: "Work with data, build intelligent systems and create AI-powered applications.",
      skills: ["Python", "TensorFlow", "Statistics", "Data Analysis"],
      avgSalary: "₹18-50 LPA",
      jobRoles: ["ML Engineer", "Data Scientist", "AI Researcher"],
      color: "bg-indigo-500",
      roadmapUrl: "/ml-roadmap"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Your 4-Year B.Tech
            <span className="block text-blue-300">Tech Roadmap</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Navigate your engineering journey with confidence. From programming basics to placement success - we guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/first-year">
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-gray-900 font-semibold px-8 py-4 text-lg">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/domains">
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-gray-900 px-8 py-4 text-lg">
                Explore Domains
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Year-wise Guide Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Year-wise Learning Path</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Follow our structured approach to make the most of your B.Tech years. Each year builds upon the previous one.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {yearData.map((year, index) => (
              <YearCard key={index} {...year} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Domains Section */}
      <section className="py-16 bg-gradient-to-br from-gray-800 via-blue-800 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Popular Tech Domains</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore different career paths in technology and find your passion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {domainData.map((domain, index) => (
              <DomainCard key={index} {...domain} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/domains">
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-gray-900">
                View All Domains
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Tech Journey?</h2>
          <p className="text-xl mb-8">
            Join thousands of B.Tech students who are already following our roadmap to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/first-year">
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-gray-900 px-8 py-4 text-lg">
                Begin 1st Year Guide
              </Button>
            </Link>
            <Link to="/resources">
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-gray-900 px-8 py-4 text-lg">
                Browse Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
