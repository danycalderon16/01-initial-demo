import { DarkLayout } from "../components/layouts/DarkLayout";
import MainLayout from "../components/layouts/MainLayout";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h2 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h2>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.js</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page:JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
