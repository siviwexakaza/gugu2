import { getNewOrders } from "@/app/actions/getOrders";
import { getSubscriptions } from "@/app/actions/getSubscriptions";
import { getUsers } from "@/app/actions/getUsers";
import StatCard from "@/app/components/StatCard";
import { CakeIcon, UserPlusIcon, UsersIcon } from "@heroicons/react/24/outline";

async function Dashboard() {
  const users = await getUsers();
  const newOrders = await getNewOrders();
  const subscriptions = await getSubscriptions();

  console.log(newOrders);
  console.log(subscriptions);
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <StatCard color="#16a085" stat={newOrders?.length!} text="NEW ORDERS">
          <CakeIcon className="bg-amber-600 text-white  rounded w-24 h-24" />
        </StatCard>
        <StatCard
          color="#16a085"
          stat={subscriptions?.length!}
          text="SUBSCRIPTIONS"
        >
          <UserPlusIcon className="bg-sky-600 text-white  rounded w-24 h-24" />
        </StatCard>
        <StatCard color="#16a085" stat={users?.length!} text="USERS">
          <UsersIcon className="bg-green-600 text-white  rounded w-24 h-24" />
        </StatCard>
      </div>
    </>
  );
}

export default Dashboard;
