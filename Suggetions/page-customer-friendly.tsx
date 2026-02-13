"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, X, Home, Building2, Factory, Sprout, Shield, Droplets, Leaf, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO - 5 Second Understanding */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-8">
            {/* Problem Hook */}
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl text-slate-600 font-medium">
                Tired of Scale, Spotting, and Dry Skin?
              </h2>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                E-SOFT Stops <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Hard Water Problems
                </span>
              </h1>
              <p className="text-2xl lg:text-3xl text-slate-700 font-medium">
                Without Salt. Without Chemicals. Forever.
              </p>
            </div>

            {/* Customer Type Selector */}
            <div className="pt-8">
              <p className="text-lg text-slate-600 mb-6">Which describes you best?</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  { icon: Home, label: "Homeowner", href: "/for-homes", color: "blue" },
                  { icon: Building2, label: "Business", href: "/for-businesses", color: "cyan" },
                  { icon: Factory, label: "Factory", href: "/for-factories", color: "indigo" },
                  { icon: Sprout, label: "Farmer", href: "/for-farms", color: "green" },
                ].map((type) => (
                  <Link
                    key={type.label}
                    href={type.href}
                    className="group relative rounded-2xl border-2 border-slate-200 bg-white p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="space-y-3 text-center">
                      <div className={`mx-auto w-16 h-16 rounded-xl bg-${type.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <type.icon className={`w-8 h-8 text-${type.color}-600`} />
                      </div>
                      <p className="font-semibold text-slate-900">{type.label}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg px-8 py-6">
                <Link href="/get-quote">
                  Get Free Quote in 2 Minutes
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8 py-6">
                <Link href="/how-it-works">
                  How It Works
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 pt-12 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                10,000+ Happy Customers
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                15 Years in Business
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                30-Year Warranty
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                Made in India
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEMS - Visual Grid */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Do You Face These Problems?
            </h2>
            <p className="text-xl text-slate-600">
              Hard water causes real damage and daily frustration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                problem: "White Scale Everywhere",
                desc: "On taps, tiles, glass - impossible to clean",
                icon: "❌",
              },
              {
                problem: "Dry Itchy Skin",
                desc: "After every shower, skin feels rough",
                icon: "❌",
              },
              {
                problem: "Appliances Breaking",
                desc: "Geysers, washing machines need constant repair",
                icon: "❌",
              },
              {
                problem: "Buying Salt Monthly",
                desc: "Heavy bags, storage space, ongoing cost",
                icon: "❌",
              },
              {
                problem: "Wasted Water",
                desc: "10-15% water waste from backwash",
                icon: "❌",
              },
              {
                problem: "High Electricity Bills",
                desc: "Scaled heating elements use more power",
                icon: "❌",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.problem}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SOLUTION - Simple 3 Steps */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              How E-SOFT Solves It
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple technology that changes how minerals behave
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Wrap Coil Around Pipe",
                desc: "No cutting, no plumbing changes. Works on any pipe.",
                icon: "🔧",
              },
              {
                step: "2",
                title: "Controller Sends Signals",
                desc: "Special electronic signals through the coil.",
                icon: "⚡",
              },
              {
                step: "3",
                title: "Minerals Flow Away",
                desc: "Changed mineral shape can't stick to surfaces.",
                icon: "💧",
              },
            ].map((step) => (
              <div key={step.step} className="text-center space-y-4">
                <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-4xl">
                  {step.step}
                </div>
                <div className="text-6xl">{step.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-600 text-lg">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Product Visual */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-12 text-center">
              <div className="space-y-6">
                <div className="text-6xl">🎛️</div>
                <h3 className="text-2xl font-bold text-slate-900">E-SOFT System</h3>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Controller + Coil = Complete solution. Wall-mounted, compact, works for 30+ years.
                </p>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/how-it-works">
                    See How It Works
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOT SALT - Direct Comparison */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Why Not a Salt Softener?
            </h2>
            <p className="text-xl text-slate-600">
              See the difference side-by-side
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Salt Softener Column */}
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-red-900">Salt Softener</h3>
                  <p className="text-red-700">Traditional Method</p>
                </div>
                <div className="space-y-4">
                  {[
                    "₹30K + ₹5K every year",
                    "Buy salt bags monthly",
                    "Wastes 10-15% water",
                    "Removes healthy minerals",
                    "Takes floor space",
                    "Lasts 10-15 years",
                    "Regular maintenance needed",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-red-100 rounded-xl">
                  <p className="font-bold text-red-900">5-Year Cost:</p>
                  <p className="text-3xl font-bold text-red-900">₹55,000+</p>
                </div>
              </div>

              {/* E-SOFT Column */}
              <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 relative">
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                  BETTER CHOICE
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-green-900">E-SOFT System</h3>
                  <p className="text-green-700">Modern Technology</p>
                </div>
                <div className="space-y-4">
                  {[
                    "₹40K one-time, zero ongoing",
                    "Nothing to buy ever",
                    "Zero water waste",
                    "Keeps healthy minerals",
                    "Wall-mounted (no space)",
                    "Lasts 30+ years",
                    "Zero maintenance",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-green-100 rounded-xl">
                  <p className="font-bold text-green-900">5-Year Cost:</p>
                  <p className="text-3xl font-bold text-green-900">₹40,000</p>
                  <p className="text-green-700 font-bold mt-2">You Save: ₹15,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO USES IT - Social Proof */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              10,000+ Customers Trust E-SOFT
            </h2>
            <p className="text-xl text-slate-600">
              From homes to hospitals, factories to farms
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "10,000+", label: "Happy Customers" },
              { number: "150+", label: "Commercial Buildings" },
              { number: "50+", label: "Government Projects" },
              { number: "99%", label: "Customer Retention" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Customer Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Sharma",
                type: "Homeowner, Ahmedabad",
                quote: "No more salt bags! Our skin feels so much better. Best decision we made for our home.",
                rating: 5,
              },
              {
                name: "Dr. Mehta",
                type: "Hospital Administrator",
                quote: "Reduced our water treatment costs by 40%. Equipment lasts longer. Highly recommend.",
                rating: 5,
              },
              {
                name: "Patel Industries",
                type: "Manufacturing Unit",
                quote: "Zero downtime for descaling. Energy bills dropped 25%. ROI in just 14 months.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-all hover:shadow-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-slate-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEE RESULTS - Timeline */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              What to Expect After Installation
            </h2>
            <p className="text-xl text-slate-600">
              Results happen gradually - here's the timeline
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { time: "Week 1", result: "Less spotting on glass and tiles", icon: "📍" },
              { time: "Week 4", result: "Softer feeling on skin after shower", icon: "✨" },
              { time: "Month 3", result: "Old scale starts loosening from pipes", icon: "🔧" },
              { time: "Month 6", result: "Noticeable reduction in appliance problems", icon: "⚙️" },
              { time: "Year 1", result: "Still zero maintenance, system working perfectly", icon: "🎉" },
            ].map((milestone, i) => (
              <div key={i} className="flex gap-6 items-start bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
                <div className="text-5xl">{milestone.icon}</div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.time}</div>
                  <div className="text-xl text-slate-700">{milestone.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIMPLE PRICING */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600">
              One-time cost. Zero ongoing expenses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { type: "Home", size: "2-4 people", price: "₹35K - ₹50K", icon: Home },
              { type: "Business", size: "50-100 people", price: "₹1.2L - ₹2.5L", icon: Building2 },
              { type: "Factory", size: "Industrial", price: "₹3L - ₹10L+", icon: Factory },
              { type: "Farm", size: "Per acre", price: "₹80K - ₹1.5L", icon: Sprout },
            ].map((pricing, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl p-8 text-center hover:border-blue-500 hover:shadow-xl transition-all">
                <pricing.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pricing.type}</h3>
                <p className="text-slate-600 mb-4">{pricing.size}</p>
                <p className="text-3xl font-bold text-blue-600">{pricing.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-slate-600 mb-6">What's Included:</p>
            <div className="flex flex-wrap justify-center gap-6 text-slate-700">
              {[
                "E-SOFT Controller",
                "Induction Coil",
                "Professional Installation",
                "30-Year Warranty",
                "Lifetime Support",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GET STARTED - Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to Stop Hard Water Problems?
          </h2>
          <p className="text-2xl opacity-90">
            Get your exact quote in 2 minutes
          </p>

          <div className="space-y-6 bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <select className="px-6 py-4 rounded-xl text-slate-900 text-lg">
                <option>Select Your Type</option>
                <option>Homeowner</option>
                <option>Business Owner</option>
                <option>Factory Manager</option>
                <option>Farmer</option>
              </select>
              <select className="px-6 py-4 rounded-xl text-slate-900 text-lg">
                <option>Main Water Problem</option>
                <option>Scale Buildup</option>
                <option>Dry Skin</option>
                <option>High Costs</option>
                <option>Appliance Damage</option>
              </select>
            </div>
            <input 
              type="text" 
              placeholder="Your Phone Number"
              className="w-full px-6 py-4 rounded-xl text-slate-900 text-lg"
            />
            <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-slate-100 text-xl py-6">
              Get My Free Quote Now
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <p className="text-sm opacity-75">
              ✓ Free consultation ✓ No obligation ✓ Response in 5 minutes
            </p>
          </div>

          <div className="pt-8">
            <p className="text-xl mb-4">Or Call Us Directly:</p>
            <a href="tel:+916356311101" className="text-4xl font-bold hover:underline">
              +91 63563 11101
            </a>
          </div>
        </div>
      </section>

      {/* 30-DAY GUARANTEE */}
      <section className="py-12 bg-green-50 border-t-4 border-green-500">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Shield className="w-12 h-12 text-green-600" />
            <h3 className="text-3xl font-bold text-slate-900">30-Day Money-Back Guarantee</h3>
          </div>
          <p className="text-xl text-slate-700">
            If you don't see improvement in 30 days, we'll remove it and refund 100%. No questions asked.
          </p>
        </div>
      </section>

    </main>
  );
}
