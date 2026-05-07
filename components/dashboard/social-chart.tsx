"use client";

import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { socialSeries } from "@/lib/constants";
import { formatCompact } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SocialChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Growth channels</CardTitle>
        <CardDescription>Cross-platform reach and engagement signals.</CardDescription>
      </CardHeader>
      <CardContent className="h-80">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={socialSeries}>
              <CartesianGrid stroke="rgba(255,255,255,.08)" vertical={false} />
              <XAxis dataKey="channel" stroke="#94a3b8" tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" tickFormatter={(value) => formatCompact(Number(value))} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ background: "rgba(2,6,23,.92)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16 }}
                formatter={(value, name) => (name === "reach" ? formatCompact(Number(value)) : `${value}%`)}
              />
              <Bar dataKey="reach" radius={[14, 14, 0, 0]} fill="#ff2bd6" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full rounded-2xl bg-white/[0.04]" />
        )}
      </CardContent>
    </Card>
  );
}
