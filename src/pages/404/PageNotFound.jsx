


import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
            <Link to="/" style={styles.link}>Go back to the homepage</Link>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '50px',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        fontSize: '100px',
        margin: '0',
        color: '#ff4c4c',
    },
    message: {
        fontSize: '24px',
        margin: '20px 0',
        color: '#333',
    },
    link: {
        fontSize: '18px',
        textDecoration: 'none',
        color: '#007bff',
    }
};

export default PageNotFound;

