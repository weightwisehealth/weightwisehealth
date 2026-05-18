import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();

  return (
    <main>
      <h1>WeightWise Health</h1>
      <p>O primeiro sistema global onde o humano é o laboratório</p>
    </main>
  );
}
