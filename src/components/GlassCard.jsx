export default function GlassCard({ title, children }) {
  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 text-white shadow-lg">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
