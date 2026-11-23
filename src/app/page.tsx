import Link from "next/link";
import {
  FileText,
  MessageSquare,
  Cog,
  Shield,
  ArrowRight,
  Mail,
  Zap,
  ChevronRight,
  BookOpen,
  ExternalLink,
  RefreshCw,
  CalendarCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SERVICES = [
  {
    icon: FileText,
    title: "AI Document Processing",
    description:
      "Extract structured data from invoices, contracts, and forms in seconds. Upload one or fifty — get clean, export-ready results.",
    href: "/extract",
    cta: "Try the demo",
  },
  {
    icon: MessageSquare,
    title: "Smart Client Intake",
    description:
      "AI-powered intake chatbots that gather client information conversationally. Configured for law, medical, real estate, and accounting.",
    href: "/intake",
    cta: "Try the demo",
  },
  {
    icon: Cog,
    title: "Custom Automation & Integration",
    description:
      "End-to-end workflow automation connecting your existing tools. From data entry to reporting — we eliminate the manual steps.",
    href: null,
    cta: null,
  },
  {
    icon: Shield,
    title: "Network Infrastructure & Security",
    description:
      "Enterprise-grade network architecture, monitoring, and security. 15+ years of hands-on infrastructure experience.",
    href: null,
    cta: null,
  },
];

const GITHUB_URL = "https://github.com/tmtsolutions23";

const OPEN_SOURCE = [
  {
    name: "meraki-msp-dashboard",
    title: "Meraki MSP Dashboard",
    description:
      "One dashboard for every Cisco Meraki organization an MSP manages: device, uplink, client and license health, live webhook alerts, and one-click replacement quotes for end-of-life hardware.",
    tags: ["Next.js", "Meraki API", "TypeScript"],
  },
  {
    name: "pi-learning",
    title: "Self-Learning AI Agent",
    description:
      "Gives an AI coding agent long-term memory: it remembers preferences across sessions, writes reusable skills from its own work, and keeps an Obsidian knowledge vault.",
    tags: ["AI Agents", "TypeScript", "Obsidian"],
  },
  {
    name: "inkling-8gb",
    title: "Local AI on Consumer Hardware",
    description:
      "Runs a 16.5 GB AI model at 21 tokens/second on an 8 GB graphics card through measured tuning and two llama.cpp patches. Prompt reading is about 3x faster.",
    tags: ["llama.cpp", "CUDA", "Python"],
  },
];

function GitHubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -right-[20%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.06)_0%,transparent_70%)]" />
        <div className="absolute -bottom-[30%] -left-[20%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10">
        <Header />

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-6">
              <Zap className="w-3.5 h-3.5" />
              AI-Powered Automation
            </div>
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We build the systems
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                that run your business.
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl mb-8">
              TMT Tech Solutions helps businesses automate repetitive workflows
              with AI — from document processing to client intake to custom
              integrations. Less manual work, more growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#demos"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 font-semibold text-sm transition-all shadow-[0_0_20px_rgba(251,191,36,0.15)] hover:shadow-[0_0_30px_rgba(251,191,36,0.25)]"
              >
                See Live Demos
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-navy-800/60 border border-white/[0.08] text-slate-300 font-semibold text-sm hover:border-white/[0.16] hover:text-slate-100 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="border-y border-white/[0.06] bg-gradient-to-b from-amber-500/[0.02] to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
                Featured Products
              </p>
              <h3
                className="text-3xl sm:text-5xl font-bold tracking-tight mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Software we&apos;ve built,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                  running in production.
                </span>
              </h3>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                Two flagship platforms built from the ground up — shipping to
                real customers today.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
              <a
                href="https://libalexandria.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col rounded-3xl border border-white/[0.08] bg-navy-900/60 p-6 sm:p-8 hover:border-amber-500/40 hover:bg-amber-500/[0.04] transition-all shadow-[0_0_0_1px_rgba(251,191,36,0)] hover:shadow-[0_0_40px_rgba(251,191,36,0.08)]"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <BookOpen className="w-7 h-7 text-amber-400" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-400/80 mb-2">
                  Lib Alexandria
                </p>
                <h4
                  className="text-2xl sm:text-3xl font-bold tracking-tight mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  The ancient library, reimagined.
                </h4>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6 flex-1">
                  An AI-powered knowledge base we built from the ground up.
                  Organizations upload their documents and ask questions in
                  plain language — Alexandria answers using only their data,
                  with cited sources and zero hallucination. Private, secure,
                  and SOC 2 certified.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 group-hover:text-amber-300 transition-colors">
                  Visit libalexandria.org
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
              <a
                href="https://mspsync.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col rounded-3xl border border-white/[0.08] bg-navy-900/60 p-6 sm:p-8 hover:border-amber-500/40 hover:bg-amber-500/[0.04] transition-all shadow-[0_0_0_1px_rgba(251,191,36,0)] hover:shadow-[0_0_40px_rgba(251,191,36,0.08)]"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <RefreshCw className="w-7 h-7 text-amber-400" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-400/80 mb-2">
                  MSPSync
                </p>
                <h4
                  className="text-2xl sm:text-3xl font-bold tracking-tight mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  PSA-native knowledge for MSPs.
                </h4>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6 flex-1">
                  A knowledge platform built natively for Managed Service
                  Providers. MSPSync plugs directly into your PSA so technicians
                  get the right answers inside the tools they already use — no
                  context-switching, no stale wikis, no hunting through
                  SharePoint.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 group-hover:text-amber-300 transition-colors">
                  Visit mspsync.app
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* About / Experience */}
        <section className="border-y border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
                  Why TMT
                </p>
                <h3
                  className="text-3xl sm:text-4xl font-bold tracking-tight mb-5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  15+ years of IT expertise,
                  <br />
                  now focused on AI.
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  With a Senior Network Engineer background spanning enterprise
                  infrastructure, security, and systems administration, TMT Tech
                  Solutions brings deep technical fluency to every automation
                  project.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  We don&apos;t just bolt AI onto your workflow — we understand
                  the full stack underneath it. That means solutions that
                  actually integrate with your existing systems and scale with
                  your business.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "15+", label: "Years in IT" },
                  { value: "AI", label: "Automation Focus" },
                  { value: "Full", label: "Stack Expertise" },
                  { value: "WC", label: "Westchester, NY" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/[0.06] bg-navy-900/40 p-4 sm:p-6 text-center"
                  >
                    <p
                      className="text-2xl font-bold text-amber-400 mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services / What We Build */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
              Services
            </p>
            <h3
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What We Build
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-white/[0.06] bg-navy-900/40 p-4 sm:p-6 hover:border-white/[0.12] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {service.href && (
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      {service.cta}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Live Demos Banner */}
        <section id="demos" className="border-y border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <div className="text-center mb-8 sm:mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
                Try It Yourself
              </p>
              <h3
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Live Demos
              </h3>
              <p className="text-slate-400 max-w-lg mx-auto">
                See our AI and full-stack builds in action. No signup required.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              <Link
                href="/extract"
                className="group flex flex-col rounded-2xl border border-white/[0.08] bg-navy-900/60 p-6 hover:border-amber-500/30 hover:bg-amber-500/[0.03] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5 text-amber-400" />
                </div>
                <h4
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Document Extraction
                </h4>
                <p className="text-sm text-slate-400 mb-4 flex-1">
                  Upload PDFs, text, or CSV files and get structured data back
                  instantly. Batch processing and Excel export included.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-400 group-hover:text-amber-300 transition-colors">
                  Launch demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
              <Link
                href="/intake"
                className="group flex flex-col rounded-2xl border border-white/[0.08] bg-navy-900/60 p-6 hover:border-amber-500/30 hover:bg-amber-500/[0.03] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                  <MessageSquare className="w-5 h-5 text-amber-400" />
                </div>
                <h4
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Client Intake Chatbot
                </h4>
                <p className="text-sm text-slate-400 mb-4 flex-1">
                  AI chatbot that gathers client information through natural
                  conversation. Supports law, medical, real estate, and CPA
                  verticals.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-400 group-hover:text-amber-300 transition-colors">
                  Launch demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
              <a
                href="https://dafonte-booking.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-white/[0.08] bg-navy-900/60 p-6 hover:border-amber-500/30 hover:bg-amber-500/[0.03] transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <CalendarCheck className="w-5 h-5 text-amber-400" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>
                <h4
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Booking & Payments Site
                </h4>
                <p className="text-sm text-slate-400 mb-4 flex-1">
                  A customizable full-stack booking platform with live calendar,
                  Stripe payments, and an admin backend. Ready to brand for any
                  service business — gyms, studios, salons, clinics, and more.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-400 group-hover:text-amber-300 transition-colors">
                  View live site
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Open Source / GitHub */}
        <section id="github" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
              Open Source
            </p>
            <h3
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Explore the Code
            </h3>
            <p className="text-slate-400 max-w-lg mx-auto">
              A selection of projects we&apos;ve published on GitHub: network
              tooling, AI agents, and local AI.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {OPEN_SOURCE.map((repo) => (
              <a
                key={repo.name}
                href={`${GITHUB_URL}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-white/[0.08] bg-navy-900/60 p-6 hover:border-amber-500/30 hover:bg-amber-500/[0.03] transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <GitHubMark className="w-5 h-5 text-amber-400" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>
                <h4
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {repo.title}
                </h4>
                <p className="text-xs font-mono text-slate-500 mb-3">{repo.name}</p>
                <p className="text-sm text-slate-400 mb-4 flex-1">{repo.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium text-slate-300 bg-white/[0.04] border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.1] text-sm font-medium text-slate-200 hover:border-amber-500/40 hover:text-amber-300 transition-all"
            >
              <GitHubMark className="w-4 h-4" />
              View all on GitHub
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
              Get Started
            </p>
            <h3
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s talk about your
              <br />
              automation needs.
            </h3>
            <p className="text-slate-400 mb-8">
              Whether you need document processing, client intake automation, or
              a custom integration — we&apos;ll build it right.
            </p>
            <a
              href="mailto:info@tmtsolutions.tech"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 font-semibold text-sm transition-all shadow-[0_0_20px_rgba(251,191,36,0.15)] hover:shadow-[0_0_30px_rgba(251,191,36,0.25)]"
            >
              <Mail className="w-4 h-4" />
              info@tmtsolutions.tech
            </a>
            <p className="text-xs text-slate-500 mt-4">
              TMT Tech Solutions LLC, Ossining, NY
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
