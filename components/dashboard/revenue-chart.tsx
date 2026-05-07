"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { revenueSeries } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue intelligence</CardTitle>
        <CardDescription>MRR, expenses, and AI forecast from the CFO agent.</CardDescription>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueSeries}>
            <defs>
              <linearGradient id="revenue" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#00e5ff" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#00e5ff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="forecast" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(255,255,255,.08)" vertical={false} />
            <XAxis dataKey="month" stroke="#94a3b8" tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" tickFormatter={(value) => formatCurrency(Number(value))} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{ background: "rgba(2,6,23,.92)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16 }}
              formatter={(value) => formatCurrency(Number(value))}
            />
            <Area type="monotone" dataKey="revenue" stroke="#00e5ff" fill="url(#revenue)" strokeWidth={3} />
            <Area type="monotone" dataKey="forecast" stroke="#8b5cf6" fill="url(#forecast)" strokeWidth={2} strokeDasharray="6 6" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
