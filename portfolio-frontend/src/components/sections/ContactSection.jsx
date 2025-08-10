export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen p-8 relative text-purple-700"
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      <h2 className="text-3xl font-semibold mb-12 text-center text-pink-600">
        Contact / Liên hệ
      </h2>

      {/* Container dùng relative để chứa 4 phần absolute */}
      <div className="relative w-full h-[60vh] max-w-6xl mx-auto">

        {/* Góc trên trái */}
        <div className="absolute top-0 left-0 max-w-xs">
          <h3 className="font-bold mb-2 text-pink-600">Email</h3>
          <p>
            <a href="mailto:youremail@example.com" className="underline">
              youremail@example.com
            </a>
          </p>
        </div>

        {/* Góc trên phải */}
        <div className="absolute top-0 right-0 max-w-xs text-right">
          <h3 className="font-bold mb-2 text-pink-600">Phone / Điện thoại</h3>
          <p>
            <a href="tel:+849xxxxxxxx" className="underline">
              +84 9xx xxx xxx
            </a>
          </p>
        </div>

        {/* Góc dưới trái */}
        <div className="absolute bottom-0 left-0 max-w-xs">
          <h3 className="font-bold mb-2 text-pink-600">Địa chỉ</h3>
          <p>Thành phố XYZ, Việt Nam</p>
        </div>

        {/* Góc dưới phải */}
        <div className="absolute bottom-0 right-0 max-w-xs text-right">
          <h3 className="font-bold mb-2 text-pink-600">Mạng xã hội</h3>
          <ul className="list-disc list-inside">
            <li>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="underline">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer" className="underline">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
