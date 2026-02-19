import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Strohm Media",
    description: "Learn how Strohm Media collects, uses, and protects your data.",
};

export default function PrivacyPage() {
    return (
        <section className="relative min-h-screen pt-32 pb-20">
            <div className="container mx-auto max-w-3xl px-6">
                <h1 className="mb-8 text-4xl font-bold tracking-tight">Privacy Policy</h1>
                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                    <p className="text-lg">Last updated: February 1, 2026</p>

                    <h2 className="mt-8 text-2xl font-semibold text-foreground">1. Information We Collect</h2>
                    <p>We collect information you provide directly, including names, email addresses, company information, and any other details submitted through our forms.</p>

                    <h2 className="mt-8 text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
                    <p>We use collected information to provide our services, communicate with you, improve our platform, and send relevant marketing communications with your consent.</p>

                    <h2 className="mt-8 text-2xl font-semibold text-foreground">3. Data Security</h2>
                    <p>We implement industry-standard security measures to protect your data. All data is encrypted in transit and at rest.</p>

                    <h2 className="mt-8 text-2xl font-semibold text-foreground">4. Your Rights</h2>
                    <p>You have the right to access, correct, or delete your personal data. Contact us at privacy@strohmmedia.com for any requests.</p>

                    <h2 className="mt-8 text-2xl font-semibold text-foreground">5. Contact Us</h2>
                    <p>For questions about this policy, please contact us at privacy@strohmmedia.com.</p>
                </div>
            </div>
        </section>
    );
}
