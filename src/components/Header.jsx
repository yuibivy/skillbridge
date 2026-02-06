import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenu, HiOutlineX, HiOutlineChevronDown } from 'react-icons/hi';
import { BsChatDots } from 'react-icons/bs';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExpertMode, setIsExpertMode] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      {/* 1단: 상단 유틸리티 바 */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-center flex items-center justify-between h-10 text-sm text-gray-500">
          <nav className="hidden md:flex items-center gap-6">
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
          <nav className="hidden md:flex items-center gap-4">
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
          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden ml-auto p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <HiOutlineX className="w-6 h-6 text-gray-700" />
            ) : (
              <HiOutlineMenu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* 2단: 메인 네비게이션 */}
      <div className="border-b border-gray-200">
        <div className="container-center flex items-center justify-between h-16">
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
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  isExpertMode ? 'bg-primary' : 'bg-gray-300'
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

          {/* 오른쪽: 메인 메뉴 */}
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
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {/* 모바일 토글 */}
              <div className="flex items-center justify-center gap-3 py-2">
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
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                      isExpertMode ? 'left-7' : 'left-1'
                    }`}
                  />
                </button>
                <span className={`text-sm ${isExpertMode ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                  전문가
                </span>
              </div>

              <hr className="border-gray-200" />

              {/* 모바일 메뉴 */}
              <nav className="space-y-3">
                <a href="#" className="block py-2 text-gray-700 hover:text-primary transition-colors">
                  강의
                </a>
                <a href="#" className="block py-2 text-gray-700 hover:text-primary transition-colors">
                  전문가 찾기
                </a>
                <a href="#" className="block py-2 text-gray-700 hover:text-primary transition-colors">
                  의뢰하기
                </a>
                <a href="#" className="block py-2 text-gray-700 hover:text-primary transition-colors">
                  전체 서비스
                </a>
                <a href="#" className="block py-2 text-gray-700 hover:text-primary transition-colors">
                  인기 강의
                </a>
                <a href="#" className="block py-2 text-gray-700 hover:text-primary transition-colors">
                  전문가 매칭
                </a>
                <a href="#" className="block py-2 text-gray-700 hover:text-primary transition-colors">
                  이벤트
                </a>
                <a href="#" className="block py-2 text-gray-700 hover:text-primary transition-colors">
                  교육문의
                </a>
              </nav>

              <hr className="border-gray-200" />

              <div className="flex items-center gap-4 text-sm">
                <a href="#" className="text-gray-600 hover:text-primary">
                  로그인
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  회원가입
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  고객센터
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
