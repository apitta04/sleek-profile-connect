
import { useState, useEffect } from "react";
import { Eye, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Analytics = () => {
  const [visits, setVisits] = useState(0);
  const [todayVisits, setTodayVisits] = useState(0);

  useEffect(() => {
    // Get total visits
    const totalVisits = parseInt(localStorage.getItem('portfolioVisits') || '0');
    setVisits(totalVisits);

    // Get today's visits
    const today = new Date().toDateString();
    const todayKey = `visits_${today}`;
    const dailyVisits = parseInt(localStorage.getItem(todayKey) || '0');
    setTodayVisits(dailyVisits);

    // Track today's visit
    localStorage.setItem(todayKey, (dailyVisits + 1).toString());
    setTodayVisits(dailyVisits + 1);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="bg-gray-900/90 border-purple-500/20 backdrop-blur-sm w-64">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-purple-300 flex items-center space-x-2">
            <Eye className="w-4 h-4" />
            <span>Site Analytics (Private)</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs">Total Visits</span>
            </div>
            <span className="text-purple-300 font-bold">{visits}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span className="text-xs">Today</span>
            </div>
            <span className="text-pink-300 font-bold">{todayVisits}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
