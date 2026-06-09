export default function BiblePage() {
  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">The Optimization Bible</h1>
        <p className="text-xl text-gray-400 mb-8">87 pages of verified science on hormone optimization, peptides, and metabolic health.</p>
        <a href="https://gumroad.com/l/grmohs" target="_blank" rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-lg text-white font-bold text-lg"
          style={{backgroundColor: '#FF6B2B'}}>
          Get The Bible — $79.90
        </a>
      </div>
    </div>
  );
}
