import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oooopssss !!!!!!!</h2>
            <Link to='/' ><button>Go Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;