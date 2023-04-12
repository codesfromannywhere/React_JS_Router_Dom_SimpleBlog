import { Link } from 'react-router-dom';
import HeroImg from '../resources/photo-1512295767273-ac109ac3acfa 1.jpg';

const Home = () => {
    return (
        <section className='header-section'>
            {/* <img src={HeroImg} /> */}
            <h1>Welcome to my simple Blog</h1>
            <Link to='/blog'>Go to articles</Link>
        </section>
    );
}

export default Home;