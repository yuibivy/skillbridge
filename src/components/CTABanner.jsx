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
        <div className="flex items-center justify-between">
          {/* 왼쪽: 텍스트 */}
          <div>
            <h2 className="text-white font-bold" style={{ fontSize: '36px', marginBottom: '16px', lineHeight: '1.3' }}>
              나도 전문가가 되어<br />
              수익을 창출해보세요
            </h2>
            <p className="text-white/80" style={{ fontSize: '18px' }}>
              과정 이수 후 라이센스 취득, 전문가로 활동하며 수익을 얻으세요
            </p>
          </div>

          {/* 오른쪽: 버튼 */}
          <div className="flex" style={{ gap: '16px' }}>
            <button
              className="bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors flex items-center"
              style={{ padding: '16px 32px', fontSize: '16px', gap: '8px' }}
            >
              전문가 등록하기
              <HiArrowRight className="w-5 h-5" />
            </button>
            <button
              className="bg-white/20 text-white font-medium rounded-full hover:bg-white/30 transition-colors"
              style={{ padding: '16px 32px', fontSize: '16px' }}
            >
              자세히 알아보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
