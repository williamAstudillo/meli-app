import Card from "@app/components/atoms/card/Card";

export default function Home() {
  const URL =
    "https://media.es.wired.com/photos/648c9a1ba566376ee967bf6a/master/pass/459293406";
  const title =
    "Consola Microsoft Xbox Series X Digital 1tb Robot White. Color Blanco";
  return (
    <>
      <Card city="Bogota" price={1980} title={title} url={URL} />
      <Card city="Bogota" price={1980} title={title} url={URL} />
      <Card city="Bogota" price={1980} title={title} url={URL} />
      <Card city="Bogota" price={1980} title={title} url={URL} />
    </>
  );
}
