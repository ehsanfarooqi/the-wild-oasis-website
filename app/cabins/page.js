import Counter from "@/app/_components/Counter";

export const metadata = {
  title: "Cabins",
};

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Counter />
      <h1>Cabins page</h1>
    </div>
  );
}
