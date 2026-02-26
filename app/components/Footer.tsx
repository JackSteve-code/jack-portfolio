export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-4 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's build something <span className="text-[#00FF41]">great</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          I'm currently available for freelance work and full-time opportunities. 
          Based in Ruiru, Kenya — available globally.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:jack@jacksteve.dev"
            className="px-8 py-3 bg-[#00FF41] text-black font-medium rounded-lg hover:bg-[#00dd39] transition-colors"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/jacksteve"
            className="px-8 py-3 border border-gray-800 rounded-lg hover:border-[#00FF41] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jacksteve-code"
            className="px-8 py-3 border border-gray-800 rounded-lg hover:border-[#00FF41] transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="text-sm text-gray-600">
          © 2026 Jack Steve. All rights reserved.
        </div>
      </div>
    </footer>
  );
}