import { HiChevronRight, HiOutlineEye } from 'react-icons/hi';

const courses = [
  {
    id: 1,
    category: '디자인',
    title: '실무에서 바로 쓰는 Figma UI/UX 디자인 마스터',
    instructor: '장현우',
    lessons: 32,
    views: 1240,
    level: '초급',
    originalPrice: 59000,
    salePrice: null,
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=225&fit=crop',
  },
  {
    id: 2,
    category: 'IT · 프로그래밍',
    title: '비전공자를 위한 Python 데이터 분석 입문',
    instructor: '윤서연',
    lessons: 48,
    views: 3520,
    level: '초급',
    originalPrice: 129000,
    salePrice: 79000,
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=225&fit=crop',
  },
  {
    id: 3,
    category: '마케팅',
    title: '매출을 올리는 퍼포먼스 마케팅 전략',
    instructor: '강태호',
    lessons: 24,
    views: 890,
    level: '중급',
    originalPrice: 49000,
    salePrice: null,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop',
  },
  {
    id: 4,
    category: '영상 · 미디어',
    title: '프리미어 프로로 완성하는 영상 편집 클래스',
    instructor: '임지혜',
    lessons: 36,
    views: 2150,
    level: '초급',
    originalPrice: 69000,
    salePrice: null,
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=225&fit=crop',
  },
  {
    id: 5,
    category: 'IT · 프로그래밍',
    title: 'React와 Next.js로 풀스택 웹 개발하기',
    instructor: '박준영',
    lessons: 64,
    views: 4280,
    level: '중급',
    originalPrice: 159000,
    salePrice: 99000,
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
  },
  {
    id: 6,
    category: '비즈니스',
    title: '엑셀 마스터: 업무 자동화의 모든 것',
    instructor: '김민정',
    lessons: 28,
    views: 1890,
    level: '초급',
    originalPrice: 55000,
    salePrice: null,
    thumbnail: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=225&fit=crop',
  },
  {
    id: 7,
    category: '건축 · 인테리어',
    title: '건축 시각화를 위한 3D 모델링 입문',
    instructor: '이승훈',
    lessons: 42,
    views: 760,
    level: '초급',
    originalPrice: 89000,
    salePrice: null,
    thumbnail: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=225&fit=crop',
  },
  {
    id: 8,
    category: '컨설팅',
    title: '창업을 위한 비즈니스 모델 설계 전략',
    instructor: '최유진',
    lessons: 18,
    views: 1120,
    level: '초급',
    originalPrice: 39000,
    salePrice: null,
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop',
  },
];

export default function PopularCourses() {
  return (
    <section className="bg-white" style={{ padding: '64px 0' }}>
      <div className="container-center">
        {/* 섹션 헤더 */}
        <div className="flex items-center justify-between" style={{ marginBottom: '32px' }}>
          <h2 className="text-gray-900 font-bold" style={{ fontSize: '28px' }}>
            추천 강좌 리스트
          </h2>
          <button className="text-gray-500 hover:text-gray-700 transition-colors" style={{ fontSize: '15px' }}>
            더보기 >
          </button>
        </div>

        {/* 카드 목록 */}
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: '24px', rowGap: '48px' }}>
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`cursor-pointer group flex flex-col ${index >= 4 ? 'hidden md:flex' : ''}`}
            >
              {/* 썸네일 */}
              <div className="overflow-hidden rounded-[6px] md:rounded-xl" style={{ marginBottom: '16px' }}>
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ aspectRatio: '1/1' }}
                />
              </div>

              {/* 강의 정보 */}
              <div className="flex-1 flex flex-col" style={{ padding: '0 4px' }}>
                {/* 카테고리 */}
                <div className="flex items-center text-gray-500" style={{ fontSize: '13px', marginBottom: '8px' }}>
                  <span>{course.category}</span>
                  <HiChevronRight className="w-4 h-4" />
                </div>

                <h3
                  className="font-bold text-gray-900 group-hover:text-primary transition-colors"
                  style={{
                    fontSize: '18px',
                    marginBottom: '12px',
                    lineHeight: '1.4',
                    height: '50px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {course.title}
                </h3>

                <div className="flex flex-col md:flex-row md:items-center text-gray-500" style={{ fontSize: '14px', marginBottom: '12px', gap: '4px 8px' }}>
                  <span className="text-gray-700 font-medium whitespace-nowrap">{course.instructor} 전문가</span>
                  <span className="hidden md:inline text-gray-300">|</span>
                  <div className="flex items-center" style={{ gap: '6px' }}>
                    <span className="whitespace-nowrap">{course.lessons}강</span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center" style={{ gap: '3px' }}>
                      <HiOutlineEye className="w-4 h-4" />
                      {course.views.toLocaleString()}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span>{course.level}</span>
                  </div>
                </div>

                {/* 가격 */}
                <div className="flex flex-col md:flex-row md:items-center" style={{ gap: '2px' }}>
                  {course.salePrice ? (
                    <>
                      <span className="text-primary font-bold whitespace-nowrap" style={{ fontSize: '18px' }}>
                        {course.salePrice.toLocaleString()}원
                      </span>
                      <span className="text-gray-400 line-through whitespace-nowrap" style={{ fontSize: '14px' }}>
                        {course.originalPrice.toLocaleString()}원
                      </span>
                    </>
                  ) : (
                    <span className="text-gray-900 font-bold whitespace-nowrap" style={{ fontSize: '18px' }}>
                      {course.originalPrice.toLocaleString()}원
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
