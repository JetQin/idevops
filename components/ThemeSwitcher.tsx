"use client";

import Button from '@tailus-ui/Button';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from "react";

export const ThemeSwitcher = ({ size = 'md' }: { size?: 'md' | 'sm' | 'xs' }) => {
    const [darkMode, setDarkMode] = useState(() => {
        console.log('checking dark mode');

        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark');
        }
        return false;
    });

    useEffect(() => {
        setDarkMode(document.documentElement.classList.contains('dark'));
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('color-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <Button.Root onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} variant="ghost" intent="gray" size={size} className="relative">
            <Button.Icon type="only" size={size} className="-rotate-180 scale-150 opacity-0 duration-300 dark:rotate-0 dark:scale-100 dark:opacity-100">
                <Sun />
            </Button.Icon>
            <Button.Icon type="only" size={size} className="absolute inset-0 duration-300 dark:rotate-180 dark:scale-0 dark:opacity-0">
                <Moon />
            </Button.Icon>
        </Button.Root>
    );
};