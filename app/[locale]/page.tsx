interface PageProps {
  params: {
    locale: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <main>
      <h1>WeightWise Health</h1>
      <p>O primeiro sistema global onde o humano é o laboratório</p>
      <p>Idioma: {params.locale}</p>
    </main>
  );
}
