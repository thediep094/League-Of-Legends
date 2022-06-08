import './news.scss'
import Navbar from '../../components/navbar/Navbar'
import { NewsFeatured } from '../../components/newsfeatured/NewsFeatured'
import NewsAll from '../../components/newsAll/NewsAll'
import Footer from '../../components/footer/Footer'
import WatchNews from '../../components/watchNews/WatchNews'
const News = () => {
  return (
    <div className="news">
        <Navbar />
        <NewsFeatured />
        <NewsAll />
        <WatchNews />
        <Footer />
    </div>
  )
}

export default News