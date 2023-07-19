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
    <div>
      <h1>API Response:</h1>
      {data?.map((thing: { companyName: string }) => (
        <span>{thing.companyName}</span>
      ))}
    </div>
  );
};

export default Applications;
