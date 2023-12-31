import { currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

async function getData() {
  // const data = await fetch("http://0.0.0.0:3000/api/applications");
  // return data.json();
  // const user = await currentUser();
  // const prisma = new PrismaClient();
  // const applications = await prisma.applications.findMany({
  //   where: { userId: { equals: user?.id } },
  // });
  return [];
}
const Dashboard = async () => {
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

export default Dashboard;
