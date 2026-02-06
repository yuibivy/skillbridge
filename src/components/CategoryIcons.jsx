import iconIt from '../assets/icons/it.png';
import iconDesign from '../assets/icons/design_v3.png';
import iconMarketing from '../assets/icons/marketing_v3.png';
import iconMedia from '../assets/icons/media_front_v3.png';
import iconEducation from '../assets/icons/education_v3.png';
import iconBusiness from '../assets/icons/business_v3.png';
import iconBuilding from '../assets/icons/building_v3.png';
import iconLifestyle from '../assets/icons/lifestyle_v3.png';
import iconConsulting from '../assets/icons/consulting_v3.png';
import iconAll from '../assets/icons/all_front_v3.png';

const categories = [
  {
    id: 1,
    name: 'IT · 프로그래밍',
    icon: iconIt,
    badge: null,
  },
  {
    id: 2,
    name: '디자인',
    icon: iconDesign,
    badge: null,
  },
  {
    id: 3,
    name: '마케팅',
    icon: iconMarketing,
    badge: null,
  },
  {
    id: 4,
    name: '영상 · 미디어',
    icon: iconMedia,
    badge: null,
  },
  {
    id: 5,
    name: '교육',
    icon: iconEducation,
    badge: '업종별',
  },
  {
    id: 6,
    name: '비즈니스',
    icon: iconBusiness,
    badge: null,
  },
  {
    id: 7,
    name: '건축 · 인테리어',
    icon: iconBuilding,
    badge: '업종별',
  },
  {
    id: 8,
    name: '라이프스타일',
    icon: iconLifestyle,
    badge: null,
  },
  {
    id: 9,
    name: '컨설팅',
    icon: iconConsulting,
    badge: 'Best',
  },
  {
    id: 10,
    name: '전체보기',
    icon: iconAll,
    badge: null,
    isLast: true,
  },
];

export default function CategoryIcons() {
  return (
    <section className="bg-white border-t border-gray-100" style={{ padding: '60px 0' }}>
      <div className="container-center">
        <div className="flex justify-between">
          {categories.map((category) => {
            return (
              <a
                key={category.id}
                href="#"
                className="group flex flex-col items-center rounded-[24px] hover:bg-gray-50 transition-all duration-300"
                style={{ width: '100px', gap: '16px', padding: '12px 0' }}
              >
                <div className="relative">
                  {/* 뱃지: 3D 아이콘과 어울리게 약간 조정 */}
                  {category.badge && (
                    <span
                      className={`absolute font-bold z-10 shadow-sm ${category.badge === 'Best'
                        ? 'bg-primary text-white'
                        : 'bg-red-50 text-primary border border-red-100'
                        }`}
                      style={{
                        top: '-8px',
                        right: '-10px',
                        fontSize: '10px',
                        padding: category.badge === 'Best' ? '2px 8px' : '2px 6px',
                        borderRadius: '12px'
                      }}
                    >
                      {category.badge}
                    </span>
                  )}
                  {/* 아이콘 컨테이너 */}
                  <div
                    className="flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '24px',
                      background: 'transparent',
                    }}
                  >
                    <img
                      src={category.icon}
                      alt={category.name}
                      style={{
                        width: '56px',
                        height: '56px',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.05))'
                      }}
                    />
                  </div>
                </div>
                <span
                  className="text-center whitespace-nowrap text-gray-600 font-medium group-hover:text-gray-900 transition-colors"
                  style={{ fontSize: '14px' }}
                >
                  {category.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
// Verified V4 Icons Applied
