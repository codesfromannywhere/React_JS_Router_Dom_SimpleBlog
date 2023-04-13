import data from '../data/data'
// console.log(data);
import BlogItem from '../components/BlogItem';

const Blog = () => {
    return (
        <section className='blog-grid'>
            {data.map((elt) => {
                return (
                    <BlogItem
                        key={elt.id}
                        img={elt.img_url}
                        title={elt.title}
                        id={elt.id}
                    />
                )
            })}
        </section>
    );
}

export default Blog;