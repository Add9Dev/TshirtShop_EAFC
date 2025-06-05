'use client'
import Image from 'next/image'

export default function Banner({ title, image, position = 'center' }) {
    return (
        <section style={styles.container}>
            <Image
                src={image}
                alt="Banner"
                fill
                style={{ ...styles.image, objectPosition: position }}
                priority
            />
            <div style={styles.overlay}>
                <h1 style={styles.title}>{title}</h1>
            </div>
        </section>
    )
}

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
    },
    image: {
        objectFit: 'cover',
        zIndex: 0,

    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        background: 'rgba(0,0,0,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: '3rem',
        fontWeight: 'bold',
        textAlign: 'center',
    },
}
