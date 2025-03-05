"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import {
  Bell,
  User,
  Shield,
  HelpCircle,
  ChevronRight,
  Zap,
  Moon,
  Languages,
  CreditCard,
  MessageSquare,
  Share2,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container max-w-md mx-auto p-4 pb-24">
        <Header title="Settings" subtitle="Customize your power experience" />

        {/* Profile Section */}
        <Card className="mb-4 bg-white/85 backdrop-blur border-none">
          <CardContent className="p-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <User className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h2 className="font-medium">John Anderson</h2>
                <p className="text-sm text-muted-foreground">john@example.com</p>
              </div>
              <Button variant="ghost" className="ml-auto" size="icon">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Power Agreement */}
        <Card className="mb-6 bg-white/85 backdrop-blur border-none">
          <CardContent className="p-4">
            <h3 className="font-medium mb-4">Power Agreement</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Spot Price Agreement</p>
                    <p className="text-sm text-muted-foreground">Fjordkraft</p>
                  </div>
                </div>
                <Button variant="ghost" className="text-green-600">
                  View details
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Payment Method</p>
                    <p className="text-sm text-muted-foreground">Visa ****4321</p>
                  </div>
                </div>
                <Button variant="ghost" className="text-green-600">
                  Change
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="mb-6 bg-white/85 backdrop-blur border-none">
          <CardContent className="p-4">
            <h3 className="font-medium mb-4">Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Notifications</p>
                    <p className="text-sm text-muted-foreground">Price alerts and usage</p>
                  </div>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Moon className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-muted-foreground">Adjust appearance</p>
                  </div>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Languages className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Language</p>
                    <p className="text-sm text-muted-foreground">English</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security & Support */}
        <Card className="mb-6 bg-white/85 backdrop-blur border-none">
          <CardContent className="p-4">
            <h3 className="font-medium mb-4">Security & Support</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Privacy</p>
                    <p className="text-sm text-muted-foreground">Manage data and security</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Customer Service</p>
                    <p className="text-sm text-muted-foreground">Get help and support</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Share2 className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Share with Others</p>
                    <p className="text-sm text-muted-foreground">Invite family</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About & Legal */}
        <Card className="bg-white/85 backdrop-blur border-none">
          <CardContent className="p-4">
            <div className="space-y-4">
              <Button variant="ghost" className="w-full justify-start text-green-600">
                <HelpCircle className="w-5 h-5 mr-2" />
                About PowerSmart
              </Button>
              <Button variant="ghost" className="w-full justify-start text-green-600">
                Privacy Policy
              </Button>
              <Button variant="ghost" className="w-full justify-start text-green-600">
                Terms of Use
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}

