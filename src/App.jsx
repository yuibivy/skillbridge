import Header from './components/Header';
import Hero from './components/Hero';
import CategoryIcons from './components/CategoryIcons';
import PopularCourses from './components/PopularCourses';
import PopularExperts from './components/PopularExperts';
import CTABanner from './components/CTABanner';
import ShortVideos from './components/ShortVideos';
import PopularServices from './components/PopularServices';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CategoryIcons />
      <PopularCourses />
      <PopularExperts />
      <CTABanner />
      <ShortVideos />
      <PopularServices />
      <Footer />
    </div>
  );
}

export default App;
