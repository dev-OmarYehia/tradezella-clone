"use client"

import React from 'react';
import Link from 'next/link';

interface NavItem {
  href: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/trades', label: 'Trades' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/accounts', label: 'Accounts' },
  { href: '/strategies', label: 'Strategies' },
  { href: '/journal', label: 'Journal' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/replay', label: 'Replay' },
  { href: '/backtesting', label: 'Backtesting' },
];

export function AppSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 border-r border-gray-800 p-4 hidden md:block">
      <div className="flex items-center mb-8 px-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">T</span>
        </div>
        <span className="ml-2 text-xl font-bold text-white">TradeZella</span>
      </div>
      <nav className="space-y-1">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export function MobileHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-gray-900 border-b border-gray-800 px-4 py-3 md:hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="ml-2 text-xl font-bold text-white">TradeZella</span>
        </div>
        <button className="p-2 text-gray-300 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <AppSidebar />
      <MobileHeader />
      <main className="md:ml-64 pt-16 md:pt-4 p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-3xl font-bold text-gray-200 mb-4">{title}</h1>
      <p className="text-gray-400 max-w-md">
        Coming in a future milestone.
      </p>
    </div>
  );
}