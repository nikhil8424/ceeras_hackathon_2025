import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile & Insights</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>CO₂ Footprint</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">1.2 tons</p>
            <p className="text-sm text-muted-foreground">Last 30 days</p>
            <Progress value={60} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Pollution Exposure</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">AQI 62</p>
            <p className="text-sm text-muted-foreground">Moderate</p>
            <Progress value={62} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Route Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Eco-Friendly</Badge>
              <Badge variant="secondary">Balanced</Badge>
              <Badge variant="outline">Fastest</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Notifications and Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span>Route changes</span>
              <Badge>Enabled</Badge>
            </li>
            <li className="flex items-center justify-between">
              <span>Pollution updates</span>
              <Badge>Enabled</Badge>
            </li>
            <li className="flex items-center justify-between">
              <span>Traffic alerts</span>
              <Badge variant="outline">Disabled</Badge>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

