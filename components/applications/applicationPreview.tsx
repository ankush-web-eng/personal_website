'use client';
import axios, { AxiosError } from 'axios';
import { useState, useEffect, useCallback } from 'react';

import { ApiResponse } from '@/types/ApiResponse';
import ApplicationGridSkeleton from '@/components/skeleton/ApplicationGridSkeleton';
import ApplicationCard from './applicationCard';
import Link from 'next/link';

export interface Application {
    id: string;
    title: string;
    image: string;
    description: string;
    github: string;
}

const ApplicationPreview = () => {
    const [applications, setApplications] = useState<Application[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    const shuffleArray = <T,>(array: T[]): T[] => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const fetchProjects = useCallback(async () => {
        try {
            const response = await axios.get('/api/applications/getapps');
            const shuffedApplications = shuffleArray(response.data.data) as Application[];
            setApplications(shuffedApplications.slice(0, 4));
        } catch (err) {
            const axiosError = err as AxiosError<ApiResponse>;
            const errorMessage = axiosError.response?.data.message || "An error occurred";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    if (loading) {
        return <ApplicationGridSkeleton />
    }

    if (error) {
        return <div className="text-center mt-8 text-red-500">Error: {error}</div>;
    }

    return (
        <div className="flex flex-col space-y-3 justify-center mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {applications && applications.map((application) => (
                    <ApplicationCard
                        application={application}
                        key={application.id}
                    />
                ))}
            </div>
            <h2 className="text-sky-500">
                <Link href="/freelance">View more on Projects section</Link>
            </h2>
        </div>
    );
};

export default ApplicationPreview;