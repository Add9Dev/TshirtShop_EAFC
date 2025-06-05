export default function PageTitle({ children }) {
    return (
        <div style={styles.wrapper}>
            <h1 style={styles.title}>{children}</h1>
        </div>
    )
}

const styles = {
    wrapper: {
        width: '100%',
        padding: '1rem 1rem',
        backgroundColor: 'cornflowerblue',
        textAlign: 'center',
    },
    title: {
        margin: 0,
        fontSize: '2.5rem',
        color: '#fff',
        fontWeight: 'bold',
        fontVariant: 'small-caps', // petites majuscules
        letterSpacing: '0.05em',
    },
}
