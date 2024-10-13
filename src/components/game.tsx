import Container from "./container";
import Rules from "./rules";

export default function Game() {
  return (
    <main className=" h-screen bg-[radial-gradient(at_top,_var(--bg-light)_30%,_var(--bg-dark))] text-white overflow-hidden relative flex">
      <Container />
      <Rules />
    </main>
  );
}
