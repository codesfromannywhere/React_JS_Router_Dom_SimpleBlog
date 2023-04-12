import { useParams } from 'react-router-dom';
import data from '../data/data'

const BlogDetails = () => {
    const blogParams = useParams();
    console.log(blogParams);

    const detailsArticle = data.filter((elt) => {
        return elt.id.toString() === blogParams.id
    })
    console.log(detailsArticle);
    return (
        <section>
            <img src={detailsArticle[0].img_url} />
            <div>
                <h3>{detailsArticle[0].title}</h3>
                <h4>{detailsArticle[0].published_date}</h4>
            </div>
            <p>{detailsArticle[0].description}</p>
            <h4>by {detailsArticle[0].author}</h4>
        </section>
    );
}

export default BlogDetails;