export default function Footer() {
  return (
    <footer className="bg-gray-50" style={{ padding: '64px 0 48px' }}>
      <div className="container-center">
        {/* 로고 */}
        <h3 className="text-gray-900 font-bold" style={{ fontSize: '28px', marginBottom: '32px' }}>
          SkillBridge
        </h3>

        {/* 상단 영역 */}
        <div className="grid grid-cols-4" style={{ gap: '48px', marginBottom: '48px' }}>
          {/* 서비스 */}
          <div>
            <h4 className="text-gray-900 font-semibold" style={{ fontSize: '15px', marginBottom: '16px' }}>
              서비스
            </h4>
            <ul className="flex flex-col" style={{ gap: '12px' }}>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" style={{ fontSize: '14px' }}>강좌 찾기</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" style={{ fontSize: '14px' }}>전문가 찾기</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" style={{ fontSize: '14px' }}>의뢰하기</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" style={{ fontSize: '14px' }}>숏폼 콘텐츠</a></li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h4 className="text-gray-900 font-semibold" style={{ fontSize: '15px', marginBottom: '16px' }}>
              고객지원
            </h4>
            <ul className="flex flex-col" style={{ gap: '12px' }}>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" style={{ fontSize: '14px' }}>자주 묻는 질문</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" style={{ fontSize: '14px' }}>1:1 문의</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" style={{ fontSize: '14px' }}>공지사항</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" style={{ fontSize: '14px' }}>이용가이드</a></li>
            </ul>
          </div>

          {/* 전문가 */}
          <div>
            <h4 className="text-gray-900 font-semibold" style={{ fontSize: '15px', marginBottom: '16px' }}>
              전문가
            </h4>
            <ul className="flex flex-col" style={{ gap: '12px' }}>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" style={{ fontSize: '14px' }}>전문가 등록</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" style={{ fontSize: '14px' }}>강의 등록</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" style={{ fontSize: '14px' }}>수익 정산</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" style={{ fontSize: '14px' }}>전문가 가이드</a></li>
            </ul>
          </div>

          {/* 고객센터 */}
          <div style={{ marginTop: '-31px' }}>
            {/* 버튼들 */}
            <div className="flex" style={{ gap: '8px', marginBottom: '16px' }}>
              <button
                className="flex-1 bg-white text-gray-700 font-bold border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors"
                style={{ padding: '16px 0', fontSize: '15px', borderRadius: '8px' }}
              >
                고객센터
              </button>
              <button
                className="flex-1 bg-white text-gray-700 font-bold border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors"
                style={{ padding: '16px 0', fontSize: '15px', borderRadius: '8px' }}
              >
                전문가센터
              </button>
            </div>

            {/* 운영시간 */}
            <div style={{ marginBottom: '12px' }}>
              <p className="text-gray-700 font-bold" style={{ fontSize: '20px', marginBottom: '4px' }}>
                10:30~18:00
              </p>
              <p className="text-gray-500" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                (점심시간 13:00~14:00)<br />
                주말, 공휴일 휴무
              </p>
            </div>

            {/* 안내 문구 */}
            <p className="text-gray-400" style={{ fontSize: '13px', lineHeight: '1.6' }}>
              SkillBridge는 서비스 중개 플랫폼이에요.<br />
              작업 의뢰는 전문가에게 직접 문의해 주세요.
            </p>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-200" style={{ marginBottom: '24px' }} />

        {/* 하단 정보 */}
        <div className="flex items-center justify-between">
          <div className="text-gray-400" style={{ fontSize: '13px' }}>
            <p style={{ marginBottom: '4px' }}>
              (주)스킬브릿지 | 대표: 홍길동 | 사업자등록번호: 123-45-67890
            </p>
            <p>
              서울특별시 강남구 테헤란로 123, 4층 | 고객센터: 1588-0000
            </p>
          </div>
          <p className="text-gray-400" style={{ fontSize: '13px' }}>
            © 2024 SkillBridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
