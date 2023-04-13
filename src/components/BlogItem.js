import { Link } from "react-router-dom";
const BlogItem = (props) => {
    return (
        <div>
            <img src={props.img} />
            <h3>{props.title}</h3>
            <Link to={`/blog/${props.id}`}>Read more</Link>
        </div>
    );
}

export default BlogItem;