import { Mail, Phone, Linkedin, Globe } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 hidden md:block border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex space-x-6">
          <div className="flex items-center gap-2 hover:text-white transition cursor-pointer">
            <Mail size={14} className="text-pharma-teal" />
            <span>info@roxane.com</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition cursor-pointer">
            <Phone size={14} className="text-pharma-teal" />
            <span>+91-9050320999</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition cursor-pointer">
            <Globe size={14} className="text-pharma-teal" />
            <span>Inquiry</span>
          </div>
        </div>

        <div className="flex space-x-4 items-center">
          <span>
            NSE: ROXANE <span className="text-green-400">Not Listed Yet</span>
          </span>
          <div className="w-px h-3 bg-slate-700"></div>
          <a href="#" className="hover:text-white">
            <Linkedin size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
