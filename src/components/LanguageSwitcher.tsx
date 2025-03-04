'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MobileLanguageSwitcher() {
  const pathname = usePathname();

  return (
    <select
      className="bg-transparent border border-neutral-300 rounded-md px-2 py-1 text-sm"
      onChange={(e) => (window.location.href = e.target.value)}
      value={pathname}
    >
      <option value="/">简体中文</option>
      <option value="/en">English</option>
    </select>
  );
}

export function DesktopLanguageSwitcher() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-x-3">
      <Link
        className={`px-3 py-1 rounded-md transition-colors ${
          '/' === pathname ? 'bg-primary text-white' : 'hover:bg-neutral-100'
        }`}
        href="/"
      >
        简体中文
      </Link>
      <Link
        className={`px-3 py-1 rounded-md transition-colors ${
          '/en' === pathname ? 'bg-primary text-white' : 'hover:bg-neutral-100'
        }`}
        href="/en"
      >
        English
      </Link>
    </div>
  );
}
