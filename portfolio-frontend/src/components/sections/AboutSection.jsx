import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hover: { scale: 1.05, boxShadow: "0 0 15px rgba(236,72,153,0.7)" },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hover: { scale: 1.05, boxShadow: "0 0 15px rgba(236,72,153,0.7)" },
  };

  return (
    <section id="about" className="max-w-7xl mx-auto my-16 px-4 rounded-lg">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-white">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row gap-8 h-auto md:h-[500px] rounded-lg shadow-lg">
        {/* Bên trái: Ảnh */}
        <motion.div
          className="flex-grow md:flex-grow-0 md:basis-1/2 h-64 md:h-auto rounded-lg cursor-pointer"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: false, amount: 0.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
            alt="Ảnh IT Developer"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>

        {/* Bên phải: Nội dung */}
        <motion.div
          className="flex-grow md:flex-grow-0 md:basis-1/2 bg-gray-800 text-white flex flex-col justify-center p-10 shadow-xl rounded-lg cursor-pointer"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6 tracking-wide">Nguyễn Bá Hoài Nam</h2>
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            IT Developer | Frontend & Backend
          </h3>

          <p className="mb-4 leading-relaxed text-gray-300">
            Tôi là sinh viên năm 3 Đại học Đông Á chuyên ngành Công nghệ Thông tin, đam mê phát triển các ứng dụng web hiện đại. Tôi đã học và làm quen với ReactJS, Node.js, Express và MongoDB, luôn nỗ lực học hỏi để tạo ra các sản phẩm tối ưu, hiệu quả và thân thiện với người dùng.
          </p>

          <p className="mb-4 leading-relaxed text-gray-300">
            Tôi luôn đam mê khám phá công nghệ mới và không ngừng học hỏi để nâng cao kỹ năng. Tinh thần làm việc nhóm, tư duy logic và giải quyết vấn đề là thế mạnh giúp tôi vượt qua các thử thách trong dự án.
          </p>

          <p className="leading-relaxed text-gray-300">
            Ngoài phát triển phần mềm, tôi cũng quan tâm đến UX/UI để mang đến trải nghiệm người dùng mượt mà và dễ dàng nhất có thể.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
