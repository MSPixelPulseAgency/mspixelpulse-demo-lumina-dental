import { Button } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="eyebrow">A little detour · 404</p>
      <h1>
        This page took
        <br />
        <em>a different path.</em>
      </h1>
      <p>Let’s bring you back to a brighter beginning.</p>
      <Button href="/">Back to the studio</Button>
    </section>
  );
}
