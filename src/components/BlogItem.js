import { Link } from "react-router-dom";
const BlogItem = (props) => {
    return (
        <section>
            <img src={props.img} />
            <h3>{props.title}</h3>
            <Link to={`/blog/${props.id}`}>Read more</Link>
        </section>
    );
}

export default BlogItem;