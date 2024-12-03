"use client";

import { useEffect, useState } from "react";
import { getOrganizationById } from "@/app/api/apiCall";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const CardHoverEffectDemo = ({ UserId }: any) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getOrganizationById(UserId);
        console.log(res?.response?.data);
        setItems(res?.response?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [UserId]);

  return (
    <div className="max-w-5xl mx-auto px-8">
      {items.length > 0 ? (
        <HoverEffect items={items} />
      ) : (
        <p className="text-neutral-400 text-center">No organizations available.</p>
      )}
    </div>
  );
};

export default CardHoverEffectDemo;
