'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function AuthPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [emailError, setEmailError] = useState('');

    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSendEmail = async () => {
        setEmailError('');

        if (!email.trim()) {
            setEmailError('Please enter an email address');
            return;
        }

        if (!isValidEmail(email)) {
            setEmailError('Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        try {
            localStorage.setItem('userEmail', email);
            localStorage.setItem('isVerified', 'false');

            const response = await fetch('/api/client/send-verification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setIsEmailSent(true);
            } else {
                setEmailError('Failed to send verification email. Please try again.');
            }
        } catch (error) {
            setEmailError('Network error. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (otp.length !== 4) {
            return;
        }

        setIsVerifying(true);

        try {
            const response = await fetch('/api/client/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp }),
            });

            if (response.ok) {
                localStorage.setItem('isVerified', 'true');

                router.push('/levelup');
            } else {
                setEmailError('Invalid OTP. Please try again.');
            }
        } catch (error) {
            setEmailError('Network error. Please try again.');
        } finally {
            setIsVerifying(false);
        }
    };

    useEffect(() => {
        const email = localStorage.getItem('userEmail');
        const isVerified = localStorage.getItem('isVerified');

        if (email || isVerified === 'true') {
            router.push('/levelup');
        }
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-card text-card-foreground p-8 rounded-xl border shadow-lg"
            >
                <div className="flex flex-col items-center gap-4">
                    <div className="w-[50px] h-[50px] rounded-lg p-[7px] bg-background border shadow-md flex items-center justify-center">
                        <Image
                            width={36}
                            height={36}
                            src="/Ankush.png"
                            alt="Logo"
                            className="border-none"
                        />
                    </div>
                    <h2 className="text-2xl font-semibold text-foreground">Email Verification</h2>
                    <p className="text-muted-foreground text-sm text-center">
                        Enter your email address below to receive a verification code and access your account
                    </p>
                </div>

                <div className="mt-6">

                    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                Email address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                disabled={isEmailSent}
                                className="w-full px-4 py-2 border bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-ring disabled:bg-muted disabled:cursor-not-allowed"
                            />
                            {emailError && (
                                <p className="text-destructive text-sm mt-1">{emailError}</p>
                            )}
                        </div>

                        <AnimatePresence mode="wait">
                            {!isEmailSent ? (
                                <motion.div
                                    key="send"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <button
                                        type="button"
                                        onClick={handleSendEmail}
                                        disabled={isLoading || !email.trim()}
                                        className="w-full bg-primary text-primary-foreground font-semibold py-2.5 rounded-lg hover:bg-primary/90 transition-colors disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? 'Sending...' : 'Send Verification Email'}
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="verify"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col gap-4"
                                >
                                    <div className="text-center py-2">
                                        <p className="text-sm text-foreground">
                                            We&apos;ve sent a verification code to your email.
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Please check your inbox and enter the 4-digit code below.
                                        </p>
                                    </div>

                                    <div>
                                        <label htmlFor="otp" className="block text-sm font-medium text-foreground mb-2">
                                            Verification Code
                                        </label>
                                        <input
                                            type="text"
                                            value={otp}
                                            onChange={(e) => {
                                                const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                                                setOtp(value);
                                            }}
                                            placeholder="----"
                                            maxLength={4}
                                            className="w-full px-4 py-2 border bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-center text-2xl tracking-[0.5em]"
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        onClick={handleVerifyOtp}
                                        disabled={otp.length !== 4 || isVerifying}
                                        className="w-full bg-primary text-primary-foreground font-semibold py-2.5 rounded-lg hover:bg-primary/90 transition-colors disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed"
                                    >
                                        {isVerifying ? 'Verifying...' : 'Verify Code'}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsEmailSent(false);
                                            setOtp('');
                                            setEmailError('');
                                        }}
                                        className="w-full text-muted-foreground text-sm underline hover:text-foreground transition-colors"
                                    >
                                        Change email address
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>

                    <p className="text-center text-xs text-muted-foreground mt-6">
                        Having trouble? Check your spam folder or contact support for assistance
                    </p>
                </div>
            </motion.div>
        </div>
    );
}