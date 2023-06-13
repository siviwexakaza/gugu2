"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  TagIcon,
  ChartBarSquareIcon,
  WifiIcon,
  CakeIcon,
  UsersIcon,
  BanknotesIcon,
  UserIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";

function Sidebar() {
  const path = usePathname();
  const [showConnection, setShowConnection] = useState(false);
  const [showFood, setShowFood] = useState(false);
  return (
    <div className="fixed h-full w-56 bg-gray-800 py-10 shadow-md">
      <div className="flex flex-col text-white">
        <Link href="/protected/dashboard">
          <div
            className={`pl-6 py-3 text-center cursor-pointer mb-3 flex items-center transition-colors ${
              path == "/protected/dashboard" ? "bg-gray-600" : "transparent"
            }`}
          >
            <div className="mr-2">
              <ChartBarSquareIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </Link>
        <Link href="/protected/orders">
          <div
            className={`pl-6 py-3 text-center cursor-pointer mb-3 flex items-center transition-colors ${
              path == "/protected/orders" ? "bg-gray-600" : "transparent"
            }`}
          >
            <div className="mr-2">
              <TagIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Food Orders</p>
            </div>
          </div>
        </Link>

        <div
          className={`pl-6 py-3 rounded text-center cursor-pointer mb-3 flex items-center`}
          onClick={() => setShowConnection((prev) => !prev)}
        >
          <div className="mr-2">
            <WifiIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Connection</p>
          </div>
        </div>
        {showConnection && (
          <div className="bg-gray-500/20">
            <Link href="/protected/packages">
              <div
                className={`pl-6 py-3 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                  path == "/protected/packages" ? "bg-gray-600" : "transparent"
                }`}
              >
                <div className="mr-2"></div>
                <div>
                  <p>Packages</p>
                </div>
              </div>
            </Link>

            <Link href="/protected/subscriptions">
              <div
                className={`pl-6 py-3 rounded text-center cursor-pointer flex items-center transition-colors ${
                  path == "/protected/subscriptions"
                    ? "bg-gray-600"
                    : "transparent"
                }`}
              >
                <div className="mr-2"></div>
                <div>
                  <p>Subscriptions</p>
                </div>
              </div>
            </Link>
          </div>
        )}

        <div
          className={`pl-6 py-3 rounded text-center cursor-pointer mb-3 flex items-center`}
          onClick={() => setShowFood((prev) => !prev)}
        >
          <div className="mr-2">
            <CakeIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Food Menu</p>
          </div>
        </div>
        {showFood && (
          <div className="bg-gray-500/20">
            <Link href="/protected/menu/category">
              <div
                className={`pl-6 py-3 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                  path == "/protected/menu/category"
                    ? "bg-gray-600"
                    : "transparent"
                }`}
              >
                <div className="mr-2"></div>
                <div>
                  <p>Category</p>
                </div>
              </div>
            </Link>

            <Link href="/protected/menu/list">
              <div
                className={`pl-6 py-3 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                  path == "/protected/menu/list" ? "bg-gray-600" : "transparent"
                }`}
              >
                <div className="mr-2"></div>
                <div>
                  <p>Menu</p>
                </div>
              </div>
            </Link>

            <Link href="/protected/menu/add">
              <div
                className={`pl-6 py-3 rounded text-center cursor-pointer flex items-center transition-colors ${
                  path == "/protected/menu/add" ? "bg-gray-600" : "transparent"
                }`}
              >
                <div className="mr-2"></div>
                <div>
                  <p>Add Menu</p>
                </div>
              </div>
            </Link>
          </div>
        )}

        <Link href="/protected/users">
          <div
            className={`pl-6 py-3 text-center cursor-pointer mb-3 flex items-center transition-colors ${
              path == "/protected/users" ? "bg-gray-600" : "transparent"
            }`}
          >
            <div className="mr-2">
              <UsersIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Users</p>
            </div>
          </div>
        </Link>

        <Link href="/protected/billing">
          <div
            className={`pl-6 py-3 text-center cursor-pointer mb-3 flex items-center transition-colors ${
              path == "/protected/billing" ? "bg-gray-600" : "transparent"
            }`}
          >
            <div className="mr-2">
              <BanknotesIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Billing</p>
            </div>
          </div>
        </Link>
        <Link href="/protected/account">
          <div
            className={`pl-6 py-3 text-center cursor-pointer mb-3 flex items-center transition-colors ${
              path == "/protected/account" ? "bg-gray-600" : "transparent"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Account</p>
            </div>
          </div>
        </Link>
        <div className="mt-5 mb-5 bg-gray-300 w-full h-[0.01rem]"></div>
        <div
          className={`pl-6 py-3 rounded text-center cursor-pointer mb-3 flex items-center`}
          onClick={() => signOut()}
        >
          <div className="mr-2">
            <LockClosedIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
