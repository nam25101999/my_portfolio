export default function ExperienceSection() { 
  return (
    <section id="experience" className="min-h-screen p-8 rounded shadow-none">
      <h2 className="text-3xl font-semibold mb-4 text-pink-600">Kinh nghiệm làm việc</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-purple-700 hover:text-pink-500 transition-colors duration-300 cursor-default">
            EAGODI - Thực tập sinh Frontend Developer
          </h3>
          <span className="text-white italic">06/2023 - 08/2023</span>
          <p className="text-white">
            Tham gia phát triển và bảo trì giao diện web sử dụng ReactJS và Tailwind CSS.<br />
            Hỗ trợ xây dựng các thành phần UI, tối ưu trải nghiệm người dùng và cải thiện hiệu suất.<br />
            Làm việc trong môi trường Agile với đội ngũ phát triển, tham gia họp daily và code review.<br />
            Học hỏi và áp dụng kiến thức về RESTful API, quản lý state với Redux.<br />
            Đóng góp vào việc sửa lỗi và viết tài liệu hướng dẫn sử dụng component.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-purple-700 hover:text-pink-500 transition-colors duration-300 cursor-default">
            Công ty ABC - Frontend Developer
          </h3>
          <span className="text-white italic">2021 - Hiện tại</span>
          <p className="text-white">Mô tả công việc, thành tựu và kỹ năng áp dụng.</p>
        </div>
        <div>
          <h3 className="font-bold text-purple-700 hover:text-pink-500 transition-colors duration-300 cursor-default">
            Công ty XYZ - Intern
          </h3>
          <span className="text-white italic">2020 - 2021</span>
          <p className="text-white">Mô tả công việc, các dự án tham gia.</p>
        </div>
      </div>
    </section>
  );
}
