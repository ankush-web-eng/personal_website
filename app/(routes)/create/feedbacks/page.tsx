'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from '@/components/ui/use-toast';

export default function Createfeedback () {
    const { data: session } = useSession();
    const [messageTooShort, setMessageTooShort] = useState(false);
    const [formData, setFormData] = useState({
        message: '',
        rating: 5,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (formData.message.trim().length < 20) {
            setMessageTooShort(true);
            setError('Your message must be at least 20 characters.');
            return;
        } else {
            setMessageTooShort(false);
        }
        if (!formData.message.trim()) {
            setError('Message cannot be empty.');
            return;
        }

        if (!session?.user?.email) {
            setError('You must be signed in to submit a feedback.');
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            const res = await fetch('/api/feedbacks/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    name: session.user.name,
                    email: session.user.email,
                    image: session.user.image,
                }),
            });

            if (!res.ok) throw new Error('Failed to submit');
            toast({
                title: 'Success',
                description: 'Your feedback has been submitted for verification by Ankush!',
                variant: 'default',
            })
            setSuccess(true);
            setFormData({ message: '', rating: 5 });
        } catch (err) {
            setError('Something went wrong. Please try again.');
            toast({
                title: 'Error',
                description: 'Failed to submit your feedback.',
                variant: 'destructive',
            })
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!session) {
        return (
            <div className="text-center text-gray-500 dark:text-gray-300 py-10">
                Please sign in to leave a feedback.
            </div>
        );
    }

    return (
        <div className="w-full mx-auto py-10 px-4">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-xl font-medium text-gray-700 dark:text-gray-200">
                        Your Rating
                    </label>
                    <div className="flex gap-2 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className={`text-xl ${star <= formData.rating ? 'text-yellow-500' : 'text-gray-400'
                                    }`}
                                onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Your Message
                    </label>
                    <textarea
                        rows={5}
                        maxLength={500}
                        placeholder="Tell us about your experience..."
                        className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        value={formData.message}
                        onChange={(e) => {
                            setFormData((prev) => ({ ...prev, message: e.target.value }));
                            if (e.target.value.trim().length >= 20) {
                                setMessageTooShort(false);
                                setError('');
                            }
                        }}
                        required
                    />
                    {messageTooShort && (
                        <p className="text-sm text-red-500 mt-1">
                            Message must be at least 20 characters to submit.
                        </p>
                    )}
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}
                {success && <p className="text-sm text-green-600 dark:text-green-400">Submitted successfully!</p>}

                <button
                    type="submit"
                    disabled={isSubmitting || formData.message.trim().length < 20}
                    className="bg-black dark:bg-white text-white dark:text-black py-2 px-4 rounded-md hover:opacity-90 disabled:opacity-50"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit feedback'}
                </button>
            </form>
        </div>
    );
};
