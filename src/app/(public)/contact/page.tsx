import Navbar from "@/components/layout/Navbar";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Header */}
      <div className="bg-pharma-blue py-24 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
        <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
          Interested in Third-Party Manufacturing or Distribution? Reach out to
          our corporate team below.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 pb-24">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          {/* LEFT: Info & Map */}
          <div className="lg:w-5/12 bg-slate-900 text-white p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            <div className="space-y-8 relative z-10">
              <h3 className="text-2xl font-bold mb-8">Corporate Office</h3>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <MapPin className="text-pharma-teal" size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">
                    Roxane Laboratories Pvt. Ltd.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Plot No. 12, EPIP Phase-1,
                    <br />
                    Jharmajri, Baddi,
                    <br />
                    Himachal Pradesh - 173205
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Phone className="text-pharma-teal" size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">Phone Support</p>
                  <p className="text-slate-400">+91 98XXX XXXXX (Sales)</p>
                  <p className="text-slate-400">+91 17XXX XXXXX (Plant)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Mail className="text-pharma-teal" size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">Email</p>
                  <p className="text-slate-400">info@roxane.com</p>
                  <p className="text-slate-400">export@roxane.com</p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map (Static Image or Iframe) */}
            <div className="mt-12 rounded-xl overflow-hidden h-48 bg-slate-800 border border-slate-700 relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5!2d76.7!3d30.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU2JzUyLjkiTiA3NsKwNDcnMjQuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="opacity-70 group-hover:opacity-100 transition duration-500 grayscale hover:grayscale-0"
              ></iframe>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:w-7/12 p-12 bg-white">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Send us a Message
            </h3>
            <p className="text-gray-500 mb-8">
              We usually reply within 24 hours.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-pharma-blue focus:ring-2 focus:ring-blue-50 outline-none transition"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-pharma-blue focus:ring-2 focus:ring-blue-50 outline-none transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-pharma-blue focus:ring-2 focus:ring-blue-50 outline-none transition"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Subject
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-pharma-blue focus:ring-2 focus:ring-blue-50 outline-none transition bg-white">
                  <option>Inquiry for Third Party Manufacturing</option>
                  <option>Distributorship Application</option>
                  <option>Export Inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-pharma-blue focus:ring-2 focus:ring-blue-50 outline-none transition"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-4 bg-pharma-blue text-white font-bold rounded-lg hover:bg-blue-900 transition flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
