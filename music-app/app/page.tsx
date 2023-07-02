import { DashBoard, PlayList } from "@/components";
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../utils/fontAwesome';

export default function Home() {
  return (
    <main  className="music-app">
      <DashBoard />
      <PlayList />
    </main>
  );
}
