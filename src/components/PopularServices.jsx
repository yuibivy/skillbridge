import { FaStar } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: '후기가 증명하는 홈페이지형 블로그 디자인 고퀄리티 제작',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 1097,
    price: '60,000',
    expert: '김민수 전문가',
    expertImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    badge: null,
  },
  {
    id: 2,
    title: '언론홍보 보도자료 당일 송출, 온라인 기사 작성부터',
    thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 1849,
    price: '120,000',
    expert: '이정훈 전문가',
    expertImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    badge: null,
  },
  {
    id: 3,
    title: '키워드만 입력하면 강력 SEO 최적화 글을 생성드려요',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 70,
    price: '390,000',
    expert: '박소연 전문가',
    expertImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    badge: null,
  },
  {
    id: 4,
    title: '고퀄리티 2D, 3D 모션그래픽 영상 제작해 드립니다',
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 50,
    price: '598,000',
    expert: '최영진 전문가',
    expertImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop',
    badge: null,
  },
  {
    id: 5,
    title: '어디서나 눈에 확 띄는 웹툰형 홍보 콘텐츠 제작',
    thumbnail: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 142,
    price: '60,000',
    expert: '한지우 전문가',
    expertImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    badge: null,
  },
];

export default function PopularServices() {
  return (
    <section className="bg-white" style={{ padding: '64px 0' }}>
      <div className="container-center">
        {/* 섹션 헤더 */}
        <div className="flex items-center justify-between" style={{ marginBottom: '32px' }}>
          <h2 className="text-gray-900 font-bold" style={{ fontSize: '28px' }}>
            인기 의뢰 서비스
          </h2>
          <button className="text-gray-500 hover:text-gray-700 transition-colors" style={{ fontSize: '15px' }}>
            더보기 >
          </button>
        </div>

        {/* 카드 목록 */}
        <div className="grid grid-cols-2 md:grid-cols-5" style={{ gap: '24px' }}>
          {services.map((service, index) => (
            <div key={service.id} className={`cursor-pointer group ${index >= 4 ? 'hidden md:block' : ''}`}>
              {/* 썸네일 */}
              <div
                className="relative overflow-hidden bg-gray-100 rounded-[6px] md:rounded-xl"
                style={{ marginBottom: '16px' }}
              >
                <img
                  src={service.thumbnail}
                  alt={service.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ aspectRatio: '1/1' }}
                />
              </div>

              {/* 정보 */}
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
                {service.title}
              </h3>

              {/* 전문가 정보 + 별점 */}
              <div className="flex flex-col md:flex-row md:items-center" style={{ gap: '4px 8px', marginBottom: '6px', marginTop: '16px' }}>
                <span className="text-gray-700 font-medium" style={{ fontSize: '14px' }}>
                  {service.expert}
                </span>
                <span className="hidden md:inline text-gray-300">|</span>
                <div className="flex items-center" style={{ gap: '4px' }}>
                  <FaStar className="text-yellow-400" style={{ width: '14px', height: '14px' }} />
                  <span className="text-primary font-medium" style={{ fontSize: '14px' }}>
                    {service.rating}
                  </span>
                  <span className="text-gray-400" style={{ fontSize: '14px' }}>
                    ({service.reviews.toLocaleString()})
                  </span>
                </div>
              </div>

              {/* 가격 */}
              <p className="text-gray-900 font-bold" style={{ fontSize: '18px' }}>
                {service.price}원~
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
