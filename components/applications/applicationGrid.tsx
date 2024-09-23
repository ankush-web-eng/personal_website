'use client';
import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';

import { ApiResponse } from '@/types/ApiResponse';
import ApplicationGridSkeleton from '@/components/skeleton/ApplicationGridSkeleton';
import ApplicationCard from './applicationCard';

export interface Application {
    id: string;
    title: string;
    image: string;
    description: string;
    github: string;
}

const ApplicationGrid = () => {
    const [applications, setApplications] = useState<Application[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.get('/api/applications/getapps');
            setApplications(response.data.data);
            console.log(response.data);
            console.log(response.data);
            setLoading(false);
        } catch (err) {
            const axiosError = err as AxiosError<ApiResponse>;
            const errorMessage = axiosError.response?.data.message || "An error occurred";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <ApplicationGridSkeleton />
    }

    if (error) {
        return <div className="text-center mt-8 text-red-500">Error: {error}</div>;
    }

    return (
        <div className="flex justify-center mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {applications && applications.map((application) => (
                    <ApplicationCard
                        application={application}
                        key={application.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default ApplicationGrid;