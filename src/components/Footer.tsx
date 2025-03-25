export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100 py-10 px-4 md:px-20 font-raleway">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm items-start">

        {/* Middenkolom met de tekst */}
        <div className="md:col-start-2 text-center">
          <p className="text-lg font-semibold mb-2">💡 Innovisual</p>
          <p>
            Wij brengen gerechten tot leven met 3D en AR-technologie. Restaurants innoveren moeiteloos met onze AR-technologie. Meer beleving, minder twijfel, hogere omzet. (scan qr code)
          </p>
        </div>

        {/* Rechterkolom met links & contactgegevens */}
        <div className="space-y-3 md:text-right">
          <ul className="space-y-1">
            <li><a href="/restaurants" className="hover:underline">Voor restaurants</a></li>
            <li><a href="/contact" className="hover:underline">Let’s talk</a></li>
            <li>Email: <a href="mailto:info@innovisual.nl" className="hover:underline">@innovisual.nl</a></li>
            <li>Tel: +31 6 12345678</li>
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
