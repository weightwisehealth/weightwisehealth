import { useTranslations } from 'next-intl';
import { Hero } from '@/components/sections/Hero';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { BuiltFor } from '@/components/sections/BuiltFor';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export default function Home() {
  const t = useTranslations();

  const features = t.raw('features.items') || [];
  const builtForItems = t.raw('builtFor.items') || [];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        cta={t('hero.cta')}
        ctaSecondary={t('hero.ctaSecondary')}
        spotCount={47}
        spotLabel={t('hero.spotLabel')}
      />

      {/* Features Section */}
      <FeatureGrid
        title={t('features.title')}
        subtitle={t('features.subtitle')}
        features={features}
        columns={3}
      />

      {/* Built For Section */}
      <BuiltFor
        title={t('builtFor.title')}
        subtitle={t('builtFor.subtitle')}
        items={builtForItems}
      />

      {/* Final CTA Section */}
      <section className="relative py-20 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lab-gold opacity-5 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
          </div>

          <Button size="lg" variant="primary" className="shadow-glow-cyan">
            {t('cta.button')}
          </Button>
        </Container>
      </section>
    </main>
  );
}
