import { loadCvData } from "../lib/cv";
import { LandingPage } from "../components/LandingPage";

export default async function HomePage() {
  const data = await loadCvData();
  return <LandingPage data={data} />;
}
