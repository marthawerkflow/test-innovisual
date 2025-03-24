Footer.tsx
export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100 py-10 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-lg font-semibold mb-2">💡 Innovisual</h3>
          <p>
            Wij brengen gerechten tot leven met 3D en AR-technologie. Restaurants innoveren moeiteloos met onze AR-technologie. Meer beleving, minder twijfel, hogere omzet. (scan qr code)
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">📂 Snelle links</h4>
          <ul className="space-y-1">
            <li><a href="/about" className="hover:underline">Over ons</a></li>
            <li><a href="/restaurants" className="hover:underline">Voor restaurants</a></li>
            <li><a href="/how-it-works" className="hover:underline">Hoe het werkt</a></li>
            <li><a href="/contact" className="hover:underline">Let’s talk</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">📍 Contactgegevens</h4>
          <ul className="space-y-1">
            <li>Email: <a href="mailto:info@innovisual.nl" className="hover:underline">@innovisual.nl</a></li>
            <li>Telefoon: +31 6 12345678</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">⚖️ Zakelijk</h4>
          <ul className="space-y-1">
            <li>KvK: [jullie nummer]</li>
            <li><a href="/terms" className="hover:underline">Algemene voorwaarden</a></li>
            <li><a href="/privacy" className="hover:underline">Privacyverklaring</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-slate-400">
        © 2025 Innovisual. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
