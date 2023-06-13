"use client";
import React, { useEffect } from "react";
import * as OutlineIcons from "@heroicons/react/24/outline";
import Icon from "./Icon";
import { icons } from "@/types";

type Props = {
  color: string;
  stat: number;
  text: string;
  children: React.ReactNode;
};

function StatCard({ color, stat, text, children }: Props) {
  useEffect(() => {
    console.log("Hello icon");
  }, []);
  return (
    <div className="card rounded bg-white shadow-md flex flex-row justify-between p-3 mb-4">
      {children}
      <div className="flex flex-col justify-center">
        <div>
          <h3
            className="text-5xl tracking-tight 
            text-gray-900"
          >
            {stat}
          </h3>
          <p className="text-sm text-gray-600">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
