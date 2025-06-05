import './globals.css'
import { Search, Heart, User, ShoppingCart } from 'lucide-react'

export const metadata = {
    title: 'TShop',
    description: 'Boutique de T-shirts en ligne basée à EAFC - Uccle',
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
        <body>
        <Header />
        <main>{children}</main>
        </body>
        </html>
    )
}

function Header() {
    return (
        <header style={headerStyle}>
            <div style={logoStyle}>
                TSHOP
            </div>

            <nav style={navStyle}>
                <a href="/">COLLECTIONS</a>
                <a href="/">CATEGORIES</a>

            </nav>

            <div style={iconStyle}>
                <Search color="var(--foreground)" size={20} />
                <Heart color="var(--foreground)" size={20} />
                <User color="var(--foreground)" size={20} />
                <div style={badgeStyle}>
                    <ShoppingCart color="var(--foreground)" size={20} />
                    <span style={circleBadge}>0</span>
                </div>

            </div>
        </header>
    )
}


const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: 'var(--background)',
    color: 'var(--foreground)',
    fontFamily: 'var(--font-sans)',
    borderBottom: '1px solid var(--foreground)',
}

const logoStyle = {
    flex: 1,
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'var(--foreground)',
    textDecoration: 'none',

}

const navStyle = {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    fontWeight: 'bold',
    color: 'var(--foreground)',
}

const iconStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1.5rem',
    alignItems: 'center',
}

const badgeStyle = {
    position: 'relative',
    display: 'inline-block',
}

const circleBadge = {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    background: '#00d9ff',
    color: 'black',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '0.7rem',
    fontWeight: 'bold',
}
