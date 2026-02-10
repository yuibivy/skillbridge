import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenu, HiOutlineX, HiOutlineChevronDown } from 'react-icons/hi';
import { BsChatDots } from 'react-icons/bs';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExpertMode, setIsExpertMode] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      {/* 1단: 상단 유틸리티 바 (모바일에서 숨김) */}
      <div className="hidden md:block bg-gray-50 border-b border-gray-200">
        <div className="container-center flex items-center justify-between h-10 text-sm text-gray-500">
          <nav className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">
              강의
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              전문가 찾기
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              의뢰하기
              <HiOutlineChevronDown className="w-3 h-3" />
            </a>
          </nav>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900 transition-colors">
              로그인
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-gray-900 transition-colors">
              회원가입
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-gray-900 transition-colors">
              고객센터
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <BsChatDots className="w-3.5 h-3.5" />
              1:1 상담
            </a>
          </nav>
        </div>
      </div>

      {/* 메인 네비게이션 */}
      <div className="border-b border-gray-200">
        <div className="container-center flex items-center justify-between h-16 md:h-16">
          {/* 왼쪽: 로고 + 토글 */}
          <div className="flex items-center gap-4">
            {/* 로고 */}
            <a href="#" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SB</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Skill<span className="text-primary">Bridge</span>
              </span>
            </a>

            {/* 구분선 */}
            <div className="hidden md:block w-px h-6 bg-gray-300"></div>

            {/* 토글 스위치 */}
            <div className="hidden md:flex items-center gap-2">
              <span className={`text-sm ${!isExpertMode ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                수강생
              </span>
              <button
                onClick={() => setIsExpertMode(!isExpertMode)}
                className={`relative w-12 h-6 rounded-full transition-colors ${isExpertMode ? 'bg-primary' : 'bg-gray-300'
                  }`}
              >
                <span
                  className="absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-300 ease-in-out"
                  style={{ left: isExpertMode ? '28px' : '4px' }}
                />
              </button>
              <span className={`text-sm ${isExpertMode ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                전문가
              </span>
            </div>
          </div>

          {/* 오른쪽: 메인 메뉴 (데스크탑) + 햄버거 (모바일) */}
          <div className="flex items-center">
            {/* 모바일 햄버거 */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <HiOutlineX className="w-6 h-6 text-gray-700" />
              ) : (
                <HiOutlineMenu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-normal text-gray-700">
            <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <HiOutlineMenu className="w-4 h-4" />
              전체 서비스
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              인기 강의
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              전문가 매칭
            </a>
            <a href="#" className="relative hover:text-primary transition-colors">
              이벤트
              <span className="absolute -top-0.5 -right-2 w-1.5 h-1.5 bg-primary rounded-full"></span>
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              교육문의
            </a>
          </nav>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* 반투명 배경 오버레이 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* 메뉴 패널 (오른쪽에서 슬라이드) */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="md:hidden fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 flex flex-col"
            >
              {/* 헤더 - 닫기 버튼 (햄버거 버튼과 동일 위치) */}
              <div className="flex items-center justify-end h-16 px-5 border-b border-gray-100">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2"
                >
                  <HiOutlineX className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* 토글 스위치 */}
              <div className="flex items-center justify-end gap-2 h-10 px-5 border-b border-gray-100">
                <span className={`text-sm ${!isExpertMode ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                  수강생
                </span>
                <button
                  onClick={() => setIsExpertMode(!isExpertMode)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    isExpertMode ? 'bg-primary' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${
                      isExpertMode ? 'left-7' : 'left-1'
                    }`}
                  />
                </button>
                <span className={`text-sm ${isExpertMode ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                  전문가
                </span>
              </div>

              {/* 서비스 섹션 */}
              <div className="px-5 pt-5 flex flex-col gap-1">
                <p className="text-gray-400 text-xs font-medium">서비스</p>
                <nav className="flex flex-col">
                  <a href="#" className="h-12 flex items-center text-gray-700 font-medium text-[15px] hover:text-primary transition-colors">
                    전체 서비스
                  </a>
                  <a href="#" className="h-12 flex items-center text-gray-700 font-medium text-[15px] hover:text-primary transition-colors">
                    인기 강의
                  </a>
                  <a href="#" className="h-12 flex items-center text-gray-700 font-medium text-[15px] hover:text-primary transition-colors">
                    전문가 매칭
                  </a>
                  <a href="#" className="h-12 flex items-center text-gray-700 font-medium text-[15px] hover:text-primary transition-colors">
                    의뢰하기
                  </a>
                  <a href="#" className="h-12 flex items-center gap-2 text-gray-700 font-medium text-[15px] hover:text-primary transition-colors">
                    이벤트
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  </a>
                </nav>
              </div>

              {/* 고객 지원 섹션 */}
              <div className="px-5 pt-5 flex flex-col gap-1 border-t border-gray-100">
                <p className="text-gray-400 text-xs font-medium">고객 지원</p>
                <nav className="flex flex-col">
                  <a href="#" className="h-12 flex items-center text-gray-700 font-medium text-[15px] hover:text-primary transition-colors">
                    교육문의
                  </a>
                  <a href="#" className="h-12 flex items-center text-gray-700 font-medium text-[15px] hover:text-primary transition-colors">
                    고객센터
                  </a>
                </nav>
              </div>

              {/* 하단 버튼 영역 */}
              <div className="mt-auto px-5 py-5 flex gap-3 border-t border-gray-100">
                <a
                  href="#"
                  className="flex-1 h-12 flex items-center justify-center text-gray-700 font-medium text-[15px] border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  로그인
                </a>
                <a
                  href="#"
                  className="flex-1 h-12 flex items-center justify-center text-white font-medium text-[15px] bg-primary rounded-lg hover:bg-primary-dark transition-colors"
                >
                  회원가입
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
