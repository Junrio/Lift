"use client";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-muted/30 bg-black/20 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary text-lg">
                ⚡
              </span>
              <span className="text-xl font-semibold tracking-wide">LIFT</span>
            </div>
            <p className="text-sm text-textMuted">
              Push Limits. Achieve Greatness.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-textPrimary mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-textMuted">
              <li>
                <a href="#about" className="hover:text-textPrimary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-textPrimary transition-colors">
                  Training
                </a>
              </li>
              <li>
                <a href="#classes" className="hover:text-textPrimary transition-colors">
                  Classes
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-textPrimary transition-colors">
                  Membership
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-textPrimary mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-textMuted">
              <li>
                <a href="mailto:junriolomongo.ph@gmail.com" className="hover:text-primary transition-colors">
                  junriolomongo.ph@gmail.com
                </a>
              </li>
              <li>+63 900 000 0000</li>
              <li className="flex gap-4 mt-4">
                <a href="#" className="hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="https://www.facebook.com/share/1CdGzavZBN/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                  Facebook
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-muted/30 text-center text-xs text-textMuted">
          <p>© 2024 LIFT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

