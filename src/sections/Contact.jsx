import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useStore } from '../store/useStore';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

import { supabase } from '../lib/supabase';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const { setCursor, resetCursor } = useStore();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    const contactData = {
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      message: formData.get('message'),
      created_at: new Date().toISOString(),
    };

    try {
      // 1. Save to Database (Supabase)
      const { error: dbError } = await supabase
        .from('contacts')
        .insert([contactData]);

      if (dbError) {
        console.error('Supabase Error:', dbError);
        toast.error('Could not save to database. Did you create the "contacts" table?');
        setLoading(false);
        return;
      }

      // 2. Send Email (Optional)
      try {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID || 'dummy', 
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'dummy', 
          formRef.current, 
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'dummy'
        );
      } catch (emailErr) {
        console.warn('EmailJS ignored/failed:', emailErr);
        // We don't stop here, because the DB part succeeded!
      }

      toast.success('Message sent!');
      formRef.current.reset();
    } catch (error) {
      toast.error('A system error occurred.');
      console.error('General error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-[var(--line)] text-center">
      <div className="max-w-[1280px] mx-auto px-6" ref={ref}>
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <h2 className="font-serif italic text-[clamp(40px,6vw,78px)] font-normal tracking-[-2px] leading-[1.0] mb-5" style={{ color: 'var(--ink)' }}>
            Let's build<br />something real.
          </h2>
          <p className="text-[16px] mb-12" style={{ color: 'var(--ink2)' }}>
            Open to internships, collaborations, and interesting conversations.
          </p>

          {/* Contact form */}
          <form ref={formRef} onSubmit={sendEmail} className="max-w-[500px] mx-auto mb-16 space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <input
                    type="text" name="user_name" placeholder="Name" required
                    className="p-3 bg-[var(--surface)] rounded-lg border border-[var(--line)] text-[13px] outline-none transition-colors hover:border-[var(--ink3)] focus:border-[var(--ink2)]"
                    onMouseEnter={() => setCursor('text')} onMouseLeave={resetCursor}
                 />
                 <input
                    type="email" name="user_email" placeholder="Email" required
                    className="p-3 bg-[var(--surface)] rounded-lg border border-[var(--line)] text-[13px] outline-none transition-colors hover:border-[var(--ink3)] focus:border-[var(--ink2)]"
                    onMouseEnter={() => setCursor('text')} onMouseLeave={resetCursor}
                 />
            </div>
            <textarea
                name="message" placeholder="Message" required rows="4"
                className="w-full p-3 bg-[var(--surface)] rounded-lg border border-[var(--line)] text-[13px] outline-none transition-colors hover:border-[var(--ink3)] focus:border-[var(--ink2)]"
                onMouseEnter={() => setCursor('text')} onMouseLeave={resetCursor}
            />
            <button
                type="submit" disabled={loading}
                className="w-full py-3 bg-[var(--ink)] text-[var(--paper)] rounded-lg font-medium text-[13px] transition-opacity hover:opacity-80 disabled:opacity-50"
                onMouseEnter={() => setCursor('link')} onMouseLeave={resetCursor}
            >
                {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="flex justify-center gap-2.5 flex-wrap mb-20">
            {[
              { label: '✉ Email', href: 'mailto:gmoksh985@gmail.com' },
              { label: 'GitHub',   href: 'https://github.com/mokshxp' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/mokshgupta' },
              { label: 'LeetCode', href: 'https://leetcode.com/u/mokshxp' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursor('link')}
                onMouseLeave={resetCursor}
                className="px-5 py-2.5 bg-transparent rounded-lg border border-[var(--line)] font-mono text-[13px] transition-all hover:border-[var(--ink)] hover:text-[var(--ink)]"
                style={{ color: 'var(--ink2)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <footer className="font-mono text-[11px]" style={{ color: 'var(--ink3)' }}>
            © 2025 Moksh Gupta — Built with intention
          </footer>
        </motion.div>
      </div>
    </section>
  );
}
