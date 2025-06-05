import Banner from "@/app/components/Banner";
import CategoryGrid from "@/app/components/CategoryImageGrid";

export default function HomePage() {
  return (
      <main>
        <Banner
            title="DÉCOUVREZ NOTRE NOUVELLE COLLECTION"
            image="/web_global/banner_home.webp"
            position="top" // ou 'bottom', 'center', '50% 20%', etc.
        />
          <CategoryGrid />
      </main>
  )
}
