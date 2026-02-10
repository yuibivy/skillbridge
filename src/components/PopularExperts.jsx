import { useState, useEffect } from 'react';

const experts = [
  {
    id: 1,
    category: 'IT · 프로그래밍',
    name: '김도현',
    subtitle: '실무 경력 10년차 개발자에게 배우는',
    title: '풀스택 웹 개발 마스터',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop',
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%)',
  },
  {
    id: 2,
    category: '디자인',
    name: '이서윤',
    subtitle: '현직 대기업 디자이너가 알려주는',
    title: 'UI/UX 디자인 실무 클래스',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop',
    gradient: 'linear-gradient(135deg, #E53E3E 0%, #C53030 100%)',
  },
  {
    id: 3,
    category: '마케팅',
    name: '박준혁',
    subtitle: '매출 200% 성장시킨 마케터의',
    title: '퍼포먼스 마케팅 전략',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
  },
];

export default function PopularExperts() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 5초마다 자동 슬라이드 (모바일용)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % experts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white" style={{ padding: '64px 0' }}>
      <div className="container-center">
        {/* 섹션 헤더 */}
        <div className="flex items-center justify-between" style={{ marginBottom: '32px' }}>
          <h2 className="text-gray-900 font-bold" style={{ fontSize: '28px' }}>
            이번 달 인기 전문가
          </h2>
          <button className="text-gray-500 hover:text-gray-700 transition-colors" style={{ fontSize: '15px' }}>
            더보기 >
          </button>
        </div>

        {/* 모바일: 슬라이드 */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {experts.map((expert) => (
                <div key={expert.id} className="w-full flex-shrink-0 flex flex-col" style={{ gap: '16px' }}>
                  {/* 카드 */}
                  <div
                    className="relative overflow-hidden cursor-pointer group h-[450px]"
                    style={{ borderRadius: '8px' }}
                  >
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)',
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: '24px' }}>
                      <div>
                        <h3 className="text-white font-bold" style={{ fontSize: '22px', lineHeight: '1.3' }}>
                          {expert.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <p className="text-white/70" style={{ fontSize: '13px' }}>
                          {expert.category} 부문
                        </p>
                        <p className="text-white font-semibold" style={{ fontSize: '15px' }}>
                          {expert.name} 전문가
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 버튼들 */}
                  <div className="flex" style={{ gap: '12px' }}>
                    <button
                      className="flex-1 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                      style={{ padding: '14px 0', fontSize: '15px' }}
                    >
                      수강신청하기
                    </button>
                    <button
                      className="flex-1 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors"
                      style={{ padding: '14px 0', fontSize: '15px' }}
                    >
                      의뢰하기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 인디케이터 */}
          <div className="flex justify-center" style={{ gap: '8px', marginTop: '32px' }}>
            {experts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`rounded-full transition-all ${
                  index === currentSlide ? 'bg-primary w-6' : 'bg-gray-300 w-2'
                }`}
                style={{ height: '8px' }}
              />
            ))}
          </div>
        </div>

        {/* 데스크톱: 그리드 */}
        <div className="hidden md:grid grid-cols-3" style={{ gap: '24px' }}>
          {experts.map((expert) => (
            <div key={expert.id} className="flex flex-col" style={{ gap: '16px' }}>
              <div
                className="relative overflow-hidden cursor-pointer group h-[620px]"
                style={{ borderRadius: '8px' }}
              >
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)',
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: '24px' }}>
                  <div>
                    <h3 className="text-white font-bold" style={{ fontSize: '22px', lineHeight: '1.3' }}>
                      {expert.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-white/70" style={{ fontSize: '13px' }}>
                      {expert.category} 부문
                    </p>
                    <p className="text-white font-semibold" style={{ fontSize: '15px' }}>
                      {expert.name} 전문가
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex" style={{ gap: '12px' }}>
                <button
                  className="flex-1 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                  style={{ padding: '14px 0', fontSize: '15px' }}
                >
                  수강신청하기
                </button>
                <button
                  className="flex-1 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors"
                  style={{ padding: '14px 0', fontSize: '15px' }}
                >
                  의뢰하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
