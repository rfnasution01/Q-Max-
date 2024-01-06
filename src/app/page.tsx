import { DashboardCoverPage, DashboardIntro } from "./component";

export default function Home() {
  return (
    <div className="mt-20 mx-8 lg:my-8 lg:mx-24 md:my-8 md:mx-16">
      <DashboardCoverPage />
      <DashboardIntro />
    </div>
  );
}
