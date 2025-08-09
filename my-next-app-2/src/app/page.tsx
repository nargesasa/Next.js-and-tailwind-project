import MyButton from "./components/MyButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Hello Next.js + Tailwind!</h1>
      <MyButton text="Click Me" />
    </main>
  );
}
