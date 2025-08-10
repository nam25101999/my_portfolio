export default function IntroSection() {
    return (
        <div className="w-1/2 flex flex-col justify-center pr-8">
        {/* Phần đầu có nền nhẹ và chữ trắng */}
        <div className="inline-block bg-purple-600 bg-opacity-30 text-white rounded-lg px-3 py-1 mb-8 w-max hover:bg-purple-700 transition-colors cursor-pointer flex justify-center items-center h-12">
            Full Stack Developer
        </div>


        <h1 className="text-4xl font-bold mb-4">HI, I'm</h1>
        <h1 className="text-4xl font-bold mb-2">NB The Dev</h1>

        {/* Gạch ngang dưới tên */}
        <div className="w-full h-1 rounded mb-6 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500" />

        <p className="text-lg leading-relaxed mb-8">
            Tôi là một lập trình viên đam mê Frontend và Backend với kinh nghiệm phát triển
            ứng dụng web hiện đại. Tôi yêu thích học hỏi công nghệ mới và tạo ra những sản phẩm
            thân thiện, hiệu quả.
        </p>

        {/* Nút */}
        <div className="flex gap-6">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition">
            Xem Project
            </button>
            <button className="px-6 py-3 border border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition">
            Liên hệ
            </button>
        </div>
        </div>
    );
}
