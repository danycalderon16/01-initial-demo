import MainLayout from "../../components/layouts/MainLayout";
import Link from "next/link";

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h2 className={'title'}>
        Ir a <Link href="/pricing">Pricing</Link>
      </h2>

      <p className={'description'}>
        Get started by editing <code className={'code'}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
