import MainLayout from "../../components/layouts/MainLayout";
import Link from "next/link";

export default function PricingPage() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h2 className={'title'}>
        Ir a <Link href="/contact">Contact</Link>
      </h2>

      <p className={'description'}>
        Get started by editing <code className={'code'}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
