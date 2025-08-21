export default function Story({ content, onComplete }) {
  return (
    <div className="p-6 bg-neutral-50 rounded-xl shadow">
      <p className="text-lg">{content}</p>
      <button
        onClick={onComplete}
        className="mt-4 px-4 py-2 rounded-lg bg-green-500 text-white"
      >
        Continue
      </button>
    </div>
  );
}