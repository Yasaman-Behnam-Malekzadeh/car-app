export default function Footer() {
  return (
    <div className="footer relative h-[200px] overflow-hidden">
      <img
        src="/hero-bg.png"
        alt="hero-background"
        className="absolute z-0 right-[-200px]"
      />
      <div className="text-white absolute z-1 bottom-5 right-14">
      Copyright©2025 yasaman.dev
      </div>
    </div>
  );
}
