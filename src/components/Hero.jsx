import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineSearch } from 'react-icons/hi';
import { BsStars } from 'react-icons/bs';

const slides = [
  {
    title: '원하는 모든 서비스,',
    subtitle: '전문가 추천으로 똑똑하게 찾기',
    description: '나에게 딱 맞는 서비스 추천 받기',
    buttonText: '추천 받기',
  },
  {
    title: '전문가로 등록하고',
    subtitle: '수익을 창출해보세요',
    description: '라이센스 취득 후 전문가 활동 가능',
    buttonText: '전문가 등록',
  },
  {
    title: '체계적인 강의로',
    subtitle: '전문가가 되어보세요',
    description: '16과정 이수 후 라이센스 취득',
    buttonText: '강의 보기',
  },
];

const popularTags = ['로고', '명함', '상세페이지', '리뷰', '블로그', 'PPT', '영상편집'];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchValue, setSearchValue] = useState('');

  // 자동 슬라이드
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white" style={{ padding: '80px 0' }}>
      <div className="container-center">
        <div className="flex flex-col lg:flex-row items-center" style={{ gap: '80px' }}>
          {/* 왼쪽: 타이틀 + 검색 */}
          <div className="flex-1 w-full flex flex-col" style={{ gap: '24px' }}>
            {/* 프로모션 배너 */}
            <p className="text-gray-900" style={{ fontSize: '16px' }}>
              전문가 등록하고 <span className="text-primary font-semibold">수익 창출</span> 해보세요!
            </p>

            {/* 메인 타이틀 */}
            <h1 className="font-bold text-gray-900 leading-tight" style={{ fontSize: '40px', letterSpacing: '-1px' }}>
              성공이 필요한 순간,<br />
              <span className="text-primary">딱 맞는 전문가</span> 를 찾아보세요
            </h1>

            {/* 검색 바 */}
            <div className="relative">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="어떤 전문가가 필요하세요?"
                className="w-full border-2 border-gray-200 rounded-full focus:border-primary focus:outline-none transition-colors"
                style={{ height: '72px', paddingLeft: '32px', paddingRight: '80px', fontSize: '18px' }}
              />
              <button className="absolute top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors" style={{ right: '8px', width: '56px', height: '56px' }}>
                <HiOutlineSearch className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* 인기 태그 */}
            <div className="flex flex-wrap max-h-[82px] md:max-h-none overflow-hidden" style={{ gap: '10px' }}>
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  className="text-gray-600 rounded-full hover:border-gray-400 hover:text-gray-900 transition-colors"
                  style={{ padding: '6px 16px', fontSize: '14px', border: '0.5px solid #d1d5db' }}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* 오른쪽: 카드 슬라이더 */}
          <div className="w-[calc(100%+40px)] -mx-5 lg:mx-0 lg:w-[500px] shrink-0" style={{ height: '380px' }}>
            <div
              className="relative overflow-hidden h-full rounded-none lg:rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, #E53E3E 0%, #C53030 50%, #9B2C2C 100%)',
              }}
            >
              {/* 슬라이드 콘텐츠 */}
              <div className="relative h-full flex flex-col justify-between" style={{ padding: '48px', gap: '24px' }}>
                {/* 버튼 */}
                <div className="flex justify-center">
                  <button className="flex items-center bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors" style={{ gap: '5px', padding: '8px 16px' }}>
                    <BsStars className="w-3.5 h-3.5" />
                    <span className="font-medium" style={{ fontSize: '12px' }}>{slides[currentSlide].buttonText}</span>
                  </button>
                </div>

                {/* 텍스트 */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="text-white text-center"
                  >
                    <h3 className="font-bold" style={{ fontSize: '28px', marginBottom: '8px' }}>
                      {slides[currentSlide].title}
                    </h3>
                    <h3 className="font-bold" style={{ fontSize: '28px', marginBottom: '16px' }}>
                      {slides[currentSlide].subtitle}
                    </h3>
                    <p className="text-white/80" style={{ fontSize: '16px' }}>
                      {slides[currentSlide].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* 페이지 인디케이터 */}
                <div className="flex items-center justify-center" style={{ gap: '8px' }}>
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`rounded-full transition-all ${
                        currentSlide === index ? 'bg-white' : 'bg-white/40'
                      }`}
                      style={{
                        width: currentSlide === index ? '24px' : '8px',
                        height: '8px',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
