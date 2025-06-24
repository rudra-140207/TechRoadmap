
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, Mail, X, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">TechRoadmap</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Your comprehensive guide to navigating the tech industry. From beginner resources 
              to advanced career paths, we help you build the skills that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/first-year" className="text-gray-400 hover:text-white transition-colors">
                  1st Year
                </a>
              </li>
              <li>
                <a href="/second-year" className="text-gray-400 hover:text-white transition-colors">
                  2nd Year
                </a>
              </li>
              <li>
                <a href="/third-year" className="text-gray-400 hover:text-white transition-colors">
                  3rd Year
                </a>
              </li>
              <li>
                <a href="/fourth-year" className="text-gray-400 hover:text-white transition-colors">
                  4th Year
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <a 
                href="mailto:techroadmap7@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                techroadmap7@gmail.com
              </a>
              <p className="text-gray-400">
                Building the future of tech education
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TechRoadmap. All rights reserved. <br></br>Built with ❤ by{" "}
            <a 
              href="https://www.linkedin.com/in/sumit-mishra77" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Sumit Mishra
            </a>
            {" "}for aspiring developers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
