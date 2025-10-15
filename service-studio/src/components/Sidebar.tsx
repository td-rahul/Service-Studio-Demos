'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Users,
  MessageSquare,
  Bot,
  Puzzle,
  Settings,
  Plus,
  Diamond
} from 'lucide-react'

/**
 * Navigation sidebar component for Service Studio
 * Displays logo, navigation links, and user profile section
 */
export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/customers', icon: Users, label: 'Customers' },
    { href: '/conversations', icon: MessageSquare, label: 'Conversations' },
    { href: '/ai-settings', icon: Bot, label: 'AI Agent Settings' },
    { href: '/integrations', icon: Puzzle, label: 'Integrations' },
  ]

  return (
    <div className="w-60 bg-slate-900 text-white h-screen fixed left-0 top-0 flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <Diamond className="h-8 w-8 text-purple-400" />
          <h1 className="text-xl font-bold">Service Studio</h1>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-purple-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Additional Action Buttons */}
        <div className="px-3 mt-6">
          <button className="flex items-center justify-center w-full p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-slate-700">
        {/* Settings */}
        <Link
          href="/settings"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors mb-3"
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </Link>

        {/* User Profile */}
        <div className="flex items-center space-x-3 px-3 py-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">A</span>
          </div>
          <span className="text-slate-300 text-sm">Admin User</span>
        </div>
      </div>
    </div>
  )
}