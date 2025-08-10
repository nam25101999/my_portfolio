export default function Footer() {
  // Hàm cuộn mượt về đầu trang
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition-colors duration-200"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-pink-500 transition-colors duration-200"
            aria-label="Email"
          >
            Email
          </a>

          {/* Nút về đầu trang */}
          <button
            onClick={scrollToTop}
            className="ml-4 p-2 rounded-full bg-pink-600 hover:bg-pink-700 transition-colors duration-200 text-white"
            aria-label="Back to top"
          >
            {/* Icon mũi tên lên */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
