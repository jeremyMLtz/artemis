import ApplicationHeader from "@/app/components/ui/Applications/ApplicationHeader";
import ApplicationRow from "@/app/components/ui/Applications/ApplicationRow";
import { currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const user = await currentUser();
  const prisma = new PrismaClient();
  if (!user) {
    return;
  }
  const applications = await prisma.applications.findMany({
    where: { userId: user.id },
  });
  return applications;
}
const Applications = async () => {
  const data = await getData();

  return (
    <main>
      <ApplicationHeader />
      {data?.map((thing) => (
        <ApplicationRow {...thing} />
      ))}
    </main>
  );
};

export default Applications;
