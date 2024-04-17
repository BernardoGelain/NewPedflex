import { useTheme } from "@/hooks/useTheme";

export default function Home() {
  const { toggleTheme } = useTheme();
  return (
    <>
      <h1>Home</h1>
      <button onClick={toggleTheme}>change Theme</button>
    </>
  );
}
