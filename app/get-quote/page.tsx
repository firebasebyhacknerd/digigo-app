import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Clock, CheckCircle2 } from "lucide-react";
import { GetQuoteForm } from "@/components/get-quote-form";
import Link from "next/link";

export const metadata = {
  title: "Get Quote | DIGIGO E-SOFT",
  description: "Request a free consultation and quote for electronic water conditioning. Share your requirements and our technical team will respond with sizing and ROI analysis.",
};

export default function GetQuotePage() {
  return (
    <main className="min-h-screen">
      <PageHero
        kicker="Get Quote"
        title="Free Technical Consultation"
        subtitle="Share your water source, flow profile, and application. We propose configuration, installation notes, and ROI logic."
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Tell Us About Your Needs</h3>
                <p className="text-slate-600">
                  Fill in the details below and our technical team will prepare a customized proposal for your specific requirements.
                </p>
              </div>

              <Card className="border-0 bg-surface-2 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-slate-900">Request Quote</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <GetQuoteForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">Why Choose DIGIGO?</h3>
                  <div className="space-y-3">
                    {[
                      "Zero salt, zero chemicals, zero wastewater",
                      "Keeps essential minerals in water",
                      "Non-invasive installation",
                      "30+ year hardware lifespan",
                      "Proven across 500+ installations",
                    ].map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-neon" />
                        <span className="text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">What Happens Next?</h3>
                  <div className="space-y-4">
                    {[
                      { step: "1", title: "Technical Review", desc: "Our team analyzes your requirements" },
                      { step: "2", title: "Custom Proposal", desc: "We send sizing and configuration" },
                      { step: "3", title: "ROI Analysis", desc: "Detailed savings and payback calculation" },
                      { step: "4", title: "Installation Plan", desc: "Step-by-step installation guidance" },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-cyan-500 text-white font-bold text-sm">
                          {item.step}
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">{item.title}</p>
                          <p className="text-sm text-slate-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Card className="border-0 bg-gradient-to-br from-blue-700 to-cyan-500 p-6 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Contact Us Directly</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <Link href="mailto:info.digigo@gmail.com" className="text-white/80 hover:text-white">
                        info.digigo@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <Link href="tel:+916356311101" className="text-white/80 hover:text-white">
                        +91 63563 11101
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-white/80">Within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
