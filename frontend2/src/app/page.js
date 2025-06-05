import Banner from "@/app/components/Banner";
import CategoryGrid from "@/app/components/CategoryImageGrid";
import PageTitle from "@/app/components/PageTitle";
import CategoryListSection from "@/app/components/CategoryListSection";

export default function HomePage() {
  return (
      <main>
        <Banner
            title="DÉCOUVREZ NOTRE NOUVELLE COLLECTION"
            image="/web_global/banner_home.webp"
            position="top" // ou 'bottom', 'center', '50% 20%', etc.
        />
          <PageTitle>nos catégories phares</PageTitle>
          <CategoryGrid />
          <PageTitle>toutes nos catégories</PageTitle>
          <CategoryListSection></CategoryListSection>

      </main>
  )
}
