import CategoryImageBox from "./CategoryImageBox"

const categories = [
    { title: "T-shirts manches longue", image: "/cat_img/1.webp", ratio: "4/3", link: "1" },
    { title: "T-shirts classiques", image: "/cat_img/2.webp", ratio: "4/5", link: "2" },
    { title: "T-shirts Large", image: "/cat_img/3.webp", ratio: "4/5", link: "3" },
    { title: "T-shirts de sport", image: "/cat_img/4.webp", ratio: "4/3", link: "4" },
]

export default function CategoryGrid() {
    return (
        <div style={styles.wrapper}>
            {categories.map((cat, i) => (
                <div
                    key={i}
                    style={{
                        ...styles.item,
                        ...(i >= 2 ? styles.offset : {}),
                    }}
                >
                    <CategoryImageBox {...cat} />
                </div>
            ))}
        </div>
    )
}


const styles = {
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1.5rem',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '2rem 1rem',
    },
    item: {
        flex: '1 1 45%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    offset: {
        marginTop: '-120px',
    },
}
