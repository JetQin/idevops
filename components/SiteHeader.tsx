"use client";

import Button from '@tailus-ui/Button';
import { Menu, X } from 'lucide-react';
import { BrandIcon } from '@components/utilities/Brand';
import { Link } from '@tailus-ui/typography';
import { useState, useEffect } from 'react';
import Separator from '@tailus-ui/Separator';
import { ThemeSwitcher } from '@components/ThemeSwitcher';

const links = [
    { href: '/', label: 'Features' },
    { href: '/', label: 'Enterprise' },
    { href: '/', label: 'Docs' },
    { href: '/', label: 'Pricing' }
];

const NavLink = ({ href, children }) => <Link variant="plain" intent="gray" size="sm" href={href} children={children} />;

export default function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const root = document.querySelector('body') as HTMLElement;
        const navItems = document.querySelector('#navItems') as HTMLElement;

        if (isOpen) {
            navItems.style.setProperty('--nav-items-height', `${navItems.scrollHeight}px`);
            root.classList.add('overflow-hidden');
        } else {
            root.classList.remove('overflow-hidden');
            navItems.style.setProperty('--nav-items-height', '0px');
        }
    }, [isOpen]);
    return (
        <>
            <header data-state={isOpen ? 'open' : 'closed'} className="group feedback-bg fixed inset-x-0 z-10 border-b bg-white/50 backdrop-blur-3xl lg:relative lg:border-transparent dark:bg-gray-925/50">
                <div className="mx-auto max-w-6xl px-6 py-4 lg:flex lg:justify-between lg:py-12">
                    <div className="lg:flex lg:items-center lg:gap-8">
                        <div className="flex w-full items-center justify-between lg:w-fit">
                            <a href="/" aria-label="Tailus UI Logo">
                                <BrandIcon />
                            </a>
                            <div className="flex items-center gap-2 lg:hidden">
                                <Button.Root href="/login" size="sm" intent="neutral">
                                    <Button.Label>Login</Button.Label>
                                </Button.Root>
                                <Separator orientation="vertical" className="h-3" />
                                <ThemeSwitcher size="sm" />
                                <Button.Root onClick={() => setIsOpen(!isOpen)} intent="gray" size="sm" variant="ghost" aria-label="toggle menu button" className="relative -mr-3 lg:hidden">
                                    <Button.Icon size="md" type="only" className="absolute inset-0 m-auto -rotate-90 scale-125 opacity-0 duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:scale-100 group-data-[state=open]:opacity-100">
                                        <X />
                                    </Button.Icon>
                                    <Button.Icon size="md" type="only" className="duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:scale-0">
                                        <Menu />
                                    </Button.Icon>
                                </Button.Root>
                            </div>
                        </div>
                        <nav id="navItems" className="hidden h-[--nav-items-height] w-full flex-col gap-8 overflow-hidden transition-[height] [--nav-items-height:0px] group-data-[state=open]:flex group-data-[state=open]:pb-4 group-data-[state=open]:pt-8 lg:flex lg:h-auto lg:w-fit lg:flex-row lg:py-0">
                            {links.map(({ href, label }) => (
                                <NavLink key={label} href={href}>{label}</NavLink>
                            ))}
                        </nav>
                    </div>

                    <div className="hidden gap-6 lg:flex">
                        <Button.Root href="/login" size="xs" intent="gray" variant="outlined">
                            <Button.Label>Login</Button.Label>
                        </Button.Root>

                        <ThemeSwitcher size="xs" />
                    </div>
                </div>
            </header>
            {isOpen && <div onClick={() => setIsOpen(false)} data-state={isOpen ? 'open' : 'closed'} className="fixed inset-0 z-[9] bg-white/50 data-[state=open]:animate-overlayShow lg:hidden dark:bg-[--overlay-bg]" aria-hidden data-aria-hidden="true" />}
        </>
    );
}
