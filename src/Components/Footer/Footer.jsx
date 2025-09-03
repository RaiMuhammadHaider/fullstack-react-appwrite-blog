import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Github } from 'lucide-react'
import Logo from '../Logo'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + About */}
          <div>
            <div className="mb-4">
              <Logo width="120px" />
            </div>
            <p className="text-sm leading-6">
              Building beautiful, functional web experiences with React and
              Appwrite.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/alihaiderrsharif/"
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-400 transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/alihaiderrsharif/"
                className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://github.com/RaiMuhammadHaider"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-500 transition"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Legals
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Rai Muhammad Haider All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
