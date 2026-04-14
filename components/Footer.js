export default function Footer() {
  return (
    <footer className="py-10 flex items-center justify-between text-xs font-mono text-muted">
      <span>© {new Date().getFullYear()} Sirjanjeet Singh</span>
      <span>Built with Next.js</span>
    </footer>
  );
}
