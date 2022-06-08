import './highlights.scss'
import {highlights} from '../../data/highlights'

const Highlights = () => {
  return (
    <div className="highlights">
        <div className="highlights-container">
            <div className="tag">
                HIGHTLIGHTS
            </div>
            <div className="highlight"> 
                {highlights.map((highlight,index) => {
                
                    return (
                            <div className="highlight__news" key={index}> 
                                <div className="highlight__news-image">
                                    <img src={process.env.PUBLIC_URL + highlight.img} alt=""/>
                                </div>
                                <div className="highlight__news-text">
                                    <p>{highlight.class}</p>
                                    <span>{highlight.title}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>
        <div className="highlights__champion__title">
            <div className="highlights__champion__title-text">
                <span>CHOOSE YOUR</span>    
                <h1>CHAMPION</h1>
                <p>With more than 140 champions, you’ll find the perfect match for your playstyle. Master one, or master them all.</p>
            </div>
        </div>
    </div>
  )
}

export default Highlights