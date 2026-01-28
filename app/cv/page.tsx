import { loadCvData } from "../../lib/cv";
import { CvPage } from "../../components/CvPage";

export default async function CvRoute() {
  const data = await loadCvData();
  return <CvPage data={data} />;
}
