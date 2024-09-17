"use client";

import Button from '@tailus-ui/Button';
import { Text, Link, Caption, Title } from '@tailus-ui/typography';
import Input from '@tailus-ui/Input';
import Label from '@tailus-ui/Label';
import Separator from '@tailus-ui/Separator';
import { useRouter } from 'next/navigation';

export default function LoginPage() {

    const router = useRouter();

    const signin = () => {
        router.push('dashboard');
    }
    
    return (
        <>
            <img className="fixed inset-y-0 right-0 hidden h-screen w-1/2 object-cover object-left lg:block" src="https://images.unsplash.com/photo-1687720657052-c026be7f388c?q=80&w=2785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <main className="inset-0 z-10 m-auto h-fit px-6 py-12 lg:absolute lg:grid lg:w-screen lg:max-w-full lg:grid-cols-2 lg:gap-32 lg:px-0">
                <div>
                    <div className="mx-auto max-w-md lg:ml-auto lg:mr-0 lg:pr-12">
                        <div>
                            <div>

                                // your logo here    

                                <Title size="xl" className="mb-1 mt-12">
                                    Sign In to iDevops
                                </Title>
                                <Text className="my-0" size="sm">
                                    Welcome back! Sign in to continue
                                </Text>
                            </div>

                            <form className="mx-auto mt-8 space-y-6">
                                <div className="space-y-6">
                                    <div className="relative grid items-center gap-3 [grid-template-columns:1fr_auto_1fr]">
                                        <Separator className="h-px border-b" />
                                        <Caption as="span" className="block" size="sm">
                                            Or continue with
                                        </Caption>
                                        <Separator className="h-px border-b" />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-2.5">
                                            <Label size="sm" htmlFor="email">
                                                Your email
                                            </Label>
                                            <Input id="email" name="email" type="email" required size="md" />
                                        </div>
                                        <div className="space-y-2.5">
                                            <div className="flex items-center justify-between">
                                                <Label size="sm" htmlFor="password">
                                                    Password
                                                </Label>
                                                <Link href="#" size="sm">
                                                    Forgot your Password ?
                                                </Link>
                                            </div>
                                            <Input id="password" name="password" type="password" required size="md" />
                                        </div>
                                    </div>
                                </div>
                                <Button.Root className="w-full" onClick={signin}>
                                    <Button.Label>Sign In</Button.Label>
                                </Button.Root>
                            </form>
                        </div>

                        <div className="mt-12">
                            <Caption className="my-0" size="sm" align="center">
                                Don't have an account ?{' '}
                                <Link intent="neutral" size="sm" variant="underlined" href="/examples/forms/register3">
                                    Create account
                                </Link>
                            </Caption>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}