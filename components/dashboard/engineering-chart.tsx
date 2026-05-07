"use client";

import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { engineeringSeries } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function EngineeringChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Engineering pulse</CardTitle>
        <CardDescription>GitHub activity, build throughput, and incident trend.</CardDescription>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={engineeringSeries}>
            <CartesianGrid stroke="rgba(255,255,255,.08)" vertical={false} />
            <XAxis dataKey="day" stroke="#94a3b8" tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ background: "rgba(2,6,23,.92)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16 }} />
            <Line type="monotone" dataKey="commits" stroke="#00e5ff" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="builds" stroke="#8b5cf6" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="incidents" stroke="#f43f5e" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
