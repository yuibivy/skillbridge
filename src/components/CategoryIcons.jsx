import {
  HiOutlineCode,
  HiOutlineColorSwatch,
  HiOutlineSpeakerphone,
  HiOutlineFilm,
  HiOutlineBookOpen,
  HiOutlineBriefcase,
  HiOutlineHeart,
  HiOutlineViewGrid,
} from 'react-icons/hi';
import { BsBuilding, BsLightbulb } from 'react-icons/bs';

const categories = [
  {
    id: 1,
    name: 'IT · 프로그래밍',
    icon: HiOutlineCode,
    badge: null,
  },
  {
    id: 2,
    name: '디자인',
    icon: HiOutlineColorSwatch,
    badge: null,
  },
  {
    id: 3,
    name: '마케팅',
    icon: HiOutlineSpeakerphone,
    badge: null,
  },
  {
    id: 4,
    name: '영상 · 미디어',
    icon: HiOutlineFilm,
    badge: null,
  },
  {
    id: 5,
    name: '교육',
    icon: HiOutlineBookOpen,
    badge: '업종별',
  },
  {
    id: 6,
    name: '비즈니스',
    icon: HiOutlineBriefcase,
    badge: null,
  },
  {
    id: 7,
    name: '건축 · 인테리어',
    icon: BsBuilding,
    badge: '업종별',
  },
  {
    id: 8,
    name: '라이프스타일',
    icon: HiOutlineHeart,
    badge: null,
  },
  {
    id: 9,
    name: '컨설팅',
    icon: BsLightbulb,
    badge: 'Best',
  },
  {
    id: 10,
    name: '전체보기',
    icon: HiOutlineViewGrid,
    badge: null,
    isLast: true,
  },
];

export default function CategoryIcons() {
  return (
    <section className="bg-white border-t border-gray-200" style={{ padding: '48px 0' }}>
      <div className="container-center">
        <div className="flex justify-between">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <a
                key={category.id}
                href="#"
                className={`flex flex-col items-center rounded-xl transition-colors hover:bg-gray-50 ${
                  category.isLast ? 'text-gray-400' : 'text-gray-700'
                }`}
                style={{ width: '100px', gap: '16px' }}
              >
                <div className="relative">
                  {/* 뱃지 */}
                  {category.badge && (
                    <span
                      className={`absolute font-bold ${
                        category.badge === 'Best'
                          ? 'bg-primary text-white'
                          : 'bg-red-100 text-primary'
                      }`}
                      style={{
                        top: '-8px',
                        right: '-8px',
                        fontSize: '10px',
                        padding: category.badge === 'Best' ? '2px 8px' : '2px 6px',
                        borderRadius: '10px'
                      }}
                    >
                      {category.badge}
                    </span>
                  )}
                  <div
                    className={`flex items-center justify-center ${
                      category.isLast ? 'bg-gray-100' : 'bg-gray-50'
                    }`}
                    style={{ width: '64px', height: '64px', borderRadius: '16px' }}
                  >
                    <IconComponent
                      className={category.isLast ? 'text-gray-400' : ''}
                      style={{ width: '28px', height: '28px' }}
                    />
                  </div>
                </div>
                <span
                  className="text-center whitespace-nowrap"
                  style={{ fontSize: '14px', fontWeight: 500 }}
                >
                  {category.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* 스크롤바 숨기기 스타일 */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
