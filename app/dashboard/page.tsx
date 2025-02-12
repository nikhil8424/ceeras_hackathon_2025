import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PollutionHotspots } from "@/components/pollution-hotspots"
import { TrafficTrends } from "@/components/traffic-trends"
import { SignalRecommendations } from "@/components/signal-recommendations"
import { Map } from "@/components/map"

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Smart Traffic Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Map className="h-[calc(100vh-8rem)]" />
        <Tabs defaultValue="pollution" className="h-[calc(100vh-8rem)] overflow-auto">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="pollution">Pollution Hotspots</TabsTrigger>
            <TabsTrigger value="traffic">Traffic Trends</TabsTrigger>
            <TabsTrigger value="signals">Signal Recommendations</TabsTrigger>
          </TabsList>
          <TabsContent value="pollution">
            <Card>
              <CardHeader>
                <CardTitle>Pollution Hotspots</CardTitle>
              </CardHeader>
              <CardContent>
                <PollutionHotspots />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="traffic">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <TrafficTrends />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="signals">
            <Card>
              <CardHeader>
                <CardTitle>Smart Traffic Signal Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <SignalRecommendations />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

