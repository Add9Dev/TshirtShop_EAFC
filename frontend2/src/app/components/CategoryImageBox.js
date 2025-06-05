'use client'
import { useState } from 'react'
import Image from 'next/image'
import {redirect} from "next/navigation";

export default function CategoryImageBox({ title, image, ratio = '4/5', position = 'center', offset = 0, link = '/' }) {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            style={{
                ...styles.container,
                aspectRatio: ratioMap[ratio] || ratioMap['4/5'],
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseDown={() => redirect(link)}
        >
            <div style={{ ...styles.imageWrapper, bottom: offset }}>
                <Image

                    src={image}
                    alt={title}
                    fill
                    style={{
                        ...styles.image,
                        objectPosition: position,
                        transform: hovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                    priority
                />
            </div>
            <div style={styles.overlay}>
                <h2 style={styles.title}>{title}</h2>
            </div>
        </div>
    )
}

const ratioMap = {
    '4/5': '4 / 5',
    '16/9': '16 / 9',
    '4/3': '4 / 3',
}

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        cursor: 'pointer',
    },
    imageWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
    },
    image: {
        objectFit: 'cover',
        transition: 'transform 0.5s ease',
        position: 'absolute',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    title: {
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 800,
        textAlign: 'center',
        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
    },
}
