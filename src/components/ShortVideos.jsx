import { FaPlay } from 'react-icons/fa';

const videos = [
  {
    id: 1,
    title: '[3분 요약] React 상태관리의 핵심',
    instructor: '박준영 전문가',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=600&fit=crop',
    duration: '2:58',
  },
  {
    id: 2,
    title: '[실무팁] Figma 자동 레이아웃 활용법',
    instructor: '이서윤 전문가',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=600&fit=crop',
    duration: '0:57',
  },
  {
    id: 3,
    title: '[마케팅] 인스타 릴스로 매출 올리기',
    instructor: '강태호 전문가',
    thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=600&fit=crop',
    duration: '1:24',
  },
  {
    id: 4,
    title: '[영상편집] 프리미어 컷편집 꿀팁',
    instructor: '임지혜 전문가',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=600&fit=crop',
    duration: '0:30',
  },
];

export default function ShortVideos() {
  return (
    <section className="bg-white" style={{ padding: '64px 0' }}>
      <div className="container-center">
        {/* 섹션 헤더 */}
        <div className="flex items-center justify-between" style={{ marginBottom: '32px' }}>
          <h2 className="text-gray-900 font-bold" style={{ fontSize: '28px' }}>
            숏폼으로 배우는 꿀팁
          </h2>
          <button className="text-gray-500 hover:text-gray-700 transition-colors" style={{ fontSize: '15px' }}>
            더보기 >
          </button>
        </div>

        {/* 카드 목록 */}
        <div className="grid grid-cols-4" style={{ gap: '24px' }}>
          {videos.map((video) => (
            <div key={video.id} className="cursor-pointer group">
              {/* 썸네일 */}
              <div
                className="relative overflow-hidden bg-gray-100"
                style={{ borderRadius: '12px' }}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ aspectRatio: '9/16' }}
                />
                {/* 그라디언트 오버레이 */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)' }}
                />
                {/* 재생 시간 */}
                <div
                  className="absolute text-white font-medium group-hover:opacity-0 transition-opacity"
                  style={{ top: '12px', right: '12px', fontSize: '13px', background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '8px' }}
                >
                  {video.duration}
                </div>
                {/* 호버 오버레이 */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
                {/* 재생 버튼 */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div
                    className="flex items-center justify-center"
                    style={{ width: '56px', height: '56px', background: '#525755', borderRadius: '50%' }}
                  >
                    <FaPlay className="text-white" style={{ width: '18px', height: '18px', marginLeft: '3px' }} />
                  </div>
                </div>
                {/* 텍스트 정보 (좌측 하단) */}
                <div className="absolute" style={{ bottom: '16px', left: '16px', right: '16px' }}>
                  <h3
                    className="text-white font-medium"
                    style={{
                      fontSize: '15px',
                      marginBottom: '6px',
                      lineHeight: '1.4',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {video.title}
                  </h3>
                  <p className="text-white/70" style={{ fontSize: '13px' }}>
                    {video.instructor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
