"use client";

import { usePathname } from 'next/navigation'
import { BrandIcon } from '@components/utilities/Brand';
import { Home, Inbox, Menu, Settings, Store, HelpCircle } from 'lucide-react';
import { Caption, Title } from '@tailus-ui/typography';
import { useState } from 'react';
import Button from '@tailus-ui/Button';
import { WorkspaceIcon } from '@components/WorkspaceIcon';
import { twMerge } from 'tailwind-merge';
import * as Link from '@components/Link';

import Separator from '@tailus-ui/Separator';
import { Notifications } from '@components/Notifications';
import { UserDropdown } from '@components/UserDropdown';

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

  const path = usePathname();
  const title = path.charAt(1).toUpperCase() + path.slice(2);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="h-screen overflow-visible lg:flex">
        <div
          className={twMerge(
            'fixed inset-y-0 left-0 z-20 flex -translate-x-72 border-r transition-transform duration-300 lg:translate-x-0',
            isMenuOpen && 'translate-x-0'
          )}
        >
          <div data-shade="900" className="feedback-bg flex w-72 flex-col gap-4 p-4 lg:w-64">
            <div className="flex w-10">
              <BrandIcon className="mx-auto" />
            </div>
            <div className="mt-4 space-y-1">
              <Link.Root link="/dashboard" isActive>
                <Link.Icon>
                  <Home />
                </Link.Icon>
                <Link.Label>Home</Link.Label>
              </Link.Root>
              <Link.Root link="/issues">
                <Link.Icon>
                  <Store />
                </Link.Icon>
                <Link.Label>Issues</Link.Label>
              </Link.Root>
              <Link.Root link="/tasks">
                <Link.Icon>
                  <Inbox />
                </Link.Icon>
                <Link.Label>Tasks</Link.Label>
              </Link.Root>
            </div>
            <div>
              <Caption className="mx-2">Workspaces</Caption>
              <div className="mt-4 space-y-1">
                <Link.Root link="#">
                  <Link.Icon>
                    <WorkspaceIcon intent="primary" />
                  </Link.Icon>
                  <Link.Label>Tailus UI React</Link.Label>
                </Link.Root>
                <Link.Root link="#">
                  <Link.Icon>
                    <WorkspaceIcon intent="secondary" />
                  </Link.Icon>
                  <Link.Label>Tailus UI Themer</Link.Label>
                </Link.Root>
                <Link.Root link="#">
                  <Link.Icon>
                    <WorkspaceIcon intent="accent" />
                  </Link.Icon>
                  <Link.Label>Tailus UI HTML</Link.Label>
                </Link.Root>
              </div>
            </div>
            <div className="mt-auto h-fit">
              <Separator className="my-4" />
              <div className="space-y-1">
                <Link.Root link="#">
                  <Link.Icon>
                    <HelpCircle />
                  </Link.Icon>
                  <Link.Label>Help</Link.Label>
                </Link.Root>
                <Link.Root link="#">
                  <Link.Icon>
                    <Settings />
                  </Link.Icon>
                  <Link.Label>Settings</Link.Label>
                </Link.Root>
              </div>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div
            aria-hidden
            className="fixed inset-0 z-[11] bg-[--overlay-bg] transition duration-300 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        <main className={twMerge('relative h-screen overflow-auto border-x bg-[--ui-bg] transition-transform duration-300 lg:ml-auto lg:mr-1 lg:mt-1 lg:h-[calc(100vh-4px)] lg:w-[calc(100vw-18rem)] lg:rounded-t-[--card-radius] lg:border-t lg:shadow-md lg:shadow-gray-600/10', isMenuOpen && 'translate-x-72 lg:translate-x-0')}>
           <div className="feedback-bg sticky top-0 z-10 flex items-center justify-between border-b px-6 py-3 lg:py-4">
                <div className="flex items-center gap-2">
                    <Button.Root
                        size="sm"
                        variant="ghost"
                        intent="gray"
                        className="-ml-2 focus:bg-transparent lg:hidden dark:focus:bg-transparent"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Button.Icon type="only">
                        <Menu />
                        </Button.Icon>
                    </Button.Root>
                    <Title size="base" weight="medium">
                        {title}
                    </Title>
                </div>
                <div className="flex items-center gap-4">
                    {/* <ThemeSwitcher /> */}
                    <Notifications />
                    <UserDropdown />
                </div>
            </div>
            <div className="feedback-bg p-6 space-y-6">
                {children}
            </div>
        </main>
      </div>
    </>
  );
}
