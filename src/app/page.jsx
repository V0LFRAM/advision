export default function Home() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border p-6">
        <h2 className="mb-2 text-xl font-semibold">Вітаю 👋</h2>
        <p>
          Це стартовий шаблон Next.js + Tailwind з перемикачем теми.
          Спробуй натиснути кнопку у хедері.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border p-4">
          <h3 className="mb-1 font-medium">Світла тема</h3>
          <p className="text-sm opacity-80">
            У світлій темі фон — білий, текст — темний.
          </p>
        </div>
        <div className="rounded-xl border p-4">
          <h3 className="mb-1 font-medium">Темна тема</h3>
          <p className="text-sm opacity-80">
            У темній темі фон — slate-900, текст — світлий.
          </p>
        </div>
      </section>
    </div>
  );
}
