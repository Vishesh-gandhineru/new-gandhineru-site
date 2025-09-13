"use client";

import React from "react";
import TeamCard from "./TeamCard";
import { motion } from "framer-motion";
import useDragScroll from "@/hooks/useDragScroll";

const TeamsSection = ({ teams }: any) => {
  const ref = useDragScroll<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="flex flex-wrap flex-row gap-10 justify-center items-center"
    >
      {teams.map((item: any) => {
        return <TeamCard key={item.id} team={item} />;
      })}
    </div>
  );
};

export default TeamsSection;
