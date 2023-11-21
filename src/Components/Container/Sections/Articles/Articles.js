import './Articles.css'
import MainTitle from '../compo/MainTitle/MainTitle'
import ArticlesCard from '../../../../Data/ArticlesData/ArticlesData'

const Articles = () => {
    return (
        <section className="articles section" id="Articles">
            <MainTitle>articles</MainTitle>
            <div className="articles__container container grid">
                {ArticlesCard}
            </div>
        </section>
    )
}

export default Articles