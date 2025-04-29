import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer relative pt-8 break-words">
      <div className="max-w-[1280px] mx-auto relative z-[2] overflow-hidden">
        <div className="flex flex-col lg:flex-row py-6 mb-4 space-x-4 px-4">
          <div className="mb-6 px-2 lg:w-1/3">
            <Image
              src="/rise_digital_logo.png"
              alt="Footer Logo"
              width={200}
              height={200}
              className="mb-2"
            />
            <div className="text-white">
              <h2 className="mt-4 font-semibold">
                Subscribe to our newsletter
              </h2>
              <p className="text-[14px] text-[#7d8590] mb-3">
                Get product updates, company news, and more.
              </p>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border-b border-white/25 bg-transparent py-2 outline-none transition-all placeholder:text-white/70 focus:border-blue/25 text-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-[14px] font-semibold border-[0.5px] border-gray-400 rounded-lg text-center hover:bg-white/10 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="lg:flex w-full lg:justify-around lg:w-4/5 lg:ml-20 grid md:grid-cols-3 grid-cols-2 gap-8">
            <div className="text-[#7d8590]">
              <h2 className="font-medium mb-2 font-mono">Think</h2>
              <ul className="text-[14px]">
                <li className="mb-2 hover:text-white transition-colors">
                  <Link href="/ai">AI Agents</Link>
                </li>
                <li className="mb-2 hover:text-white transition-colors">
                  <Link href="/technology">Predictive Platforms</Link>
                </li>
                <li className="mb-2 hover:text-white transition-colors">
                  <Link href="/technology">Automation</Link>
                </li>
              </ul>
            </div>
            <div className="text-[#7d8590]">
              <h2 className="font-medium mb-2 font-mono">Build</h2>
              <ul className="text-[14px]">
                <li className="mb-2 hover:text-white transition-colors">
                  <Link href="/technology">Tech Stack</Link>
                </li>
                <li className="mb-2 hover:text-white transition-colors">
                  <Link href="/technology">Custom Systems</Link>
                </li>
                <li className="mb-2 hover:text-white transition-colors">
                  <Link href="/technology">Cyber Safe</Link>
                </li>
              </ul>
            </div>
            <div className="text-[#7d8590]">
              <h2 className="font-medium mb-2 font-mono">Connect</h2>
              <ul className="text-[14px]">
                <li className="mb-2 hover:text-white transition-colors">
                  <Link href="https://twitter.com/RiseDigital">X</Link>
                </li>
                <li className="mb-2 hover:text-white transition-colors">
                  <Link href="https://www.instagram.com/inrise_digital?igsh=am5jZGdkeDM4c2lz">Instagram</Link>
                </li>
                <li className="mb-2 hover:text-white transition-colors">
                  <Link href="https://www.linkedin.com/company/104163548/admin/dashboard/">LinkedIn</Link>
                </li>
                <li className="mb-2 hover:text-white transition-colors">
                  <Link href="https://www.youtube.com/@risedigital">YouTube</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#161b22]">
        <div className="max-w-[1280px] mx-auto text-[12px] md:flex flex-row-reverse py-4 justify-between items-center px-4">
          <ul className="flex items-center max-md:mb-2">
            <li className="mr-3">
              <a href="https://www.instagram.com/inrise_digital?igsh=am5jZGdkeDM4c2lz" className="hover:opacity-80 transition-opacity">
                <Image
                  src="https://github.githubassets.com/images/modules/site/icons/footer/instagram.svg"
                  height={18}
                  width={22}
                  className="d-block"
                  loading="lazy"
                  decoding="async"
                  alt="Instagram icon"
                />
              </a>
            </li>
            <li className="mr-3">
              <a href="https://www.facebook.com/share/14su9ZjWWd/" className="hover:opacity-80 transition-opacity">
                <Image
                  src="https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg"
                  height={18}
                  width={22}
                  className="d-block"
                  loading="lazy"
                  decoding="async"
                  alt="Facebook icon"
                />
              </a>
            </li>
            <li className="mr-3">
              <a href="https://www.linkedin.com/company/104163548/admin/dashboard/" className="hover:opacity-80 transition-opacity">
                <Image
                  src="https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg"
                  height={18}
                  width={22}
                  className="d-block"
                  loading="lazy"
                  decoding="async"
                  alt="LinkedIn icon"
                />
              </a>
            </li>
          </ul>
          <ul className="flex items-center mb-2 sm:mb-0 text-[#7d8590] flex-wrap">
            <li className="mr-3">© {new Date().getFullYear()} Rise AI</li>
            <li className="mr-3"><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
            <li className="mr-3"><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
            <li className="mr-3"><Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
