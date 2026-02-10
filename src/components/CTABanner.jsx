import { HiArrowRight } from 'react-icons/hi';

export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #E53E3E 0%, #C53030 50%, #9B2C2C 100%)',
        padding: '80px 0',
      }}
    >
      <div className="container-center relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between" style={{ gap: '32px' }}>
          {/* 텍스트 */}
          <div className="text-center md:text-left">
            <h2 className="text-white font-bold text-3xl md:text-4xl" style={{ marginBottom: '16px', lineHeight: '1.3' }}>
              나도 전문가가 되어<br />
              수익을 창출해보세요
            </h2>
            <p className="text-white/80 text-base md:text-lg">
              과정 이수 후 라이센스 취득, 전문가로 활동하며 수익을 얻으세요
            </p>
          </div>

          {/* 버튼 */}
          <div className="flex justify-center md:justify-start" style={{ gap: '12px' }}>
            <button
              className="bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center whitespace-nowrap text-sm md:text-base"
              style={{ padding: '14px 20px', gap: '6px' }}
            >
              전문가 등록하기
              <HiArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              className="bg-white/20 text-white font-medium rounded-full hover:bg-white/30 transition-colors whitespace-nowrap text-sm md:text-base"
              style={{ padding: '14px 20px' }}
            >
              자세히 알아보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
