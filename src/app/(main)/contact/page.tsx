"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ContactPage() {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (iframeRef.current) {
            iframeRef.current.setAttribute("data-layout", '{"id":"INLINE"}');
        }
    }, []);

    return (
        <>
            <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 -z-10 hero-mesh" />
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-2xl text-center mb-12">
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-primary">Strohm Interface</span>
                        </motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6 text-4xl font-bold md:text-5xl">
                            Initialize <span className="text-gradient">Growth Sequence</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground">
                            Configure your parameters and deploy our AI intelligence layer to your business.
                        </motion.p>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mx-auto max-w-xl">
                        <div className="glass rounded-3xl p-8 md:p-12" style={{ minHeight: "728px" }}>
                            <iframe
                                ref={iframeRef}
                                src="https://links.strohmmedia.com/widget/form/rluipHJAPnEj1XNCVD4k"
                                style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px", minHeight: "600px" }}
                                id="inline-rluipHJAPnEj1XNCVD4k"
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="Website Form"
                                data-height="728"
                                data-layout-iframe-id="inline-rluipHJAPnEj1XNCVD4k"
                                data-form-id="rluipHJAPnEj1XNCVD4k"
                                title="Website Form"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
            <script src="https://links.strohmmedia.com/js/form_embed.js" defer />
        </>
    );
}
