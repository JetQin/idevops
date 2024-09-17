"use client";

import Button from '@tailus-ui/Button';
import { Display, Text, Title, Kbd, Caption } from '@tailus-ui/typography';
import { Lock, Plus } from 'lucide-react';
import SiteHeader from '@components/SiteHeader';

const links = [
    { href: '/', label: 'Features' },
    { href: '/', label: 'Enterprise' },
    { href: '/', label: 'Docs' },
    { href: '/examples/pricing', label: 'Pricing' }
];

export default function Home() {
    return (
        <>
            <SiteHeader />
            <main>
                <section className="pb-40 pt-32 lg:pt-16">
                    <div className="mx-auto max-w-6xl px-6">
                        <Display align="center" weight="bold" className="text-4xl md:text-5xl">
                            Ecommerce, Simplified
                        </Display>
                        <Text className="mx-auto mb-8 mt-6 max-w-2xl" size="lg" align="center">
                            Asperiores labore saepe veniam, quo in fugit? Consequuntur doloribus totam dolorem, nihil provident ratione nostrum lorem.
                        </Text>
                        <div className="flex justify-center gap-3">
                            <Button.Root href="/register">
                                <Button.Label>Start Building</Button.Label>
                            </Button.Root>
                            <Button.Root variant="outlined" intent="gray" href="/register">
                                <Button.Label>Learn More</Button.Label>
                            </Button.Root>
                        </div>
                        <Caption className="mb-8 mt-6" align="center">
                            Or Press <Kbd>G</Kbd> anytime to get started
                        </Caption>

                        <div data-rounded="2xlarge" className="mx-auto mb-12 mt-12 max-w-5xl rounded-[--card-radius] p-px shadow-xl shadow-gray-950/5 sm:mb-16 sm:mt-20 md:mb-20 dark:border-transparent dark:shadow-gray-950/50">
                            <div className="space-y-1 rounded-[calc(var(--card-radius)-1px)] border bg-[--ui-bg] p-1 backdrop-blur-2xl">
                                <div className="flex items-center justify-between px-3">
                                    <div className="flex gap-1.5">
                                        <div aria-hidden className="size-2.5 rounded-full border border-gray-300 bg-gray-200/50 dark:border-white/5 dark:bg-white/10"></div>
                                        <div aria-hidden className="size-2.5 rounded-full border border-gray-300 bg-gray-200/50 dark:border-white/5 dark:bg-white/10"></div>
                                        <div aria-hidden className="size-2.5 rounded-full border border-gray-300 bg-gray-200/50 dark:border-white/5 dark:bg-white/10"></div>
                                    </div>
                                    <div data-rounded="large" className="relative flex h-6 w-32 items-center justify-center gap-4 rounded-[--card-radius] bg-gray-200/50 px-3 text-xs text-[--caption-text-color] sm:w-56 dark:bg-[--ui-bg]">
                                        <Lock className="absolute left-3 size-2.5" />
                                        https://ui.tailus.io
                                    </div>
                                    <div className="flex size-6 rounded-full border bg-[--ui-bg]">
                                        <Plus aria-hidden className="m-auto size-4 text-[--caption-text-color]" />
                                    </div>
                                </div>
                                <img className="aspect-[4/3] rounded-[calc(var(--card-radius)-5px)] border dark:hidden" src="/images/showcase/card.png" alt="" />
                                <img className="hidden aspect-[4/3] rounded-[calc(var(--card-radius)-5px)] border dark:block dark:border-white/5" src="/images/showcase/card-layout-dark.webp" alt="" />
                            </div>
                        </div>
                        <div className="mx-auto max-w-3xl">
                            <Title size="lg" align="center" as="div" weight="normal">
                                Trusted by your favorite top 10 Tech companies
                            </Title>
                            <Title as="h2" className="sr-only">
                                Customers
                            </Title>
                            <div className="mt-12 space-y-4 opacity-75">
                                <div className="mt-12 flex flex-wrap items-center justify-center gap-6 brightness-0 grayscale sm:gap-x-12 md:gap-x-20 dark:invert">
                                    <img src="https://ampire.netlify.app/images/clients/lilly.png" alt="" className="h-10 w-auto" />
                                    <img src="https://ampire.netlify.app/images/clients/coty.svg" alt="" className="h-10 w-auto" />
                                    <img src="https://ampire.netlify.app/images/clients/ge.svg" alt="" className="h-9 w-auto" />
                                    <img src="https://ampire.netlify.app/images/clients/microsoft.svg" alt="" className="h-10 w-auto" />
                                    <img src="https://ampire.netlify.app/images/clients/airbnb.svg" alt="" className="h-10 w-auto" />
                                    <img src="https://ampire.netlify.app/images/clients/coty.svg" alt="" className="h-10 w-auto lg:hidden" />
                                    <img src="https://ampire.netlify.app/images/clients/ge.svg" alt="" className="h-9 w-auto lg:hidden" />
                                </div>
                                <div className="mt-12 hidden brightness-0 grayscale lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-20 dark:invert">
                                    <img src="https://ampire.netlify.app/images/clients/coty.svg" alt="" className="h-10 w-auto" />
                                    <img src="https://ampire.netlify.app/images/clients/ge.svg" alt="" className="h-9 w-auto" />
                                    <img src="https://ampire.netlify.app/images/clients/microsoft.svg" alt="" className="h-10 w-auto" />
                                    <img src="https://ampire.netlify.app/images/clients/airbnb.svg" alt="" className="h-10 w-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}


