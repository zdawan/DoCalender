import { requireUser } from "../lib/hooks";

export default async function DashboardPage() {
  // this check Login or not
  const session = await requireUser();

  return (
    <div>
      <h1>Calenedr</h1>
    </div>
  );
}
