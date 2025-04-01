import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle, UploadCloud } from 'lucide-react';
import { FormEventHandler, useEffect, useState } from 'react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from "@/components/ui/textarea";
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, Job } from '@/types';


interface JobFormData extends Omit<Job, 'logo'> {
    logo: string | File;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Job',
        href: '/create-job',
    },
];

export default function CreateJob() {
    const [preview, setPreview] = useState<string | null>(null);
    const { data, setData, post, processing, errors, reset } = useForm<Required<JobFormData>>({
        id: 0,
        company: '',
        logo: '',
        title: '',
        location: '',
        type: '',
        salary: '',
        description: '',
        created_at: '',
    });

    const submit: FormEventHandler<HTMLFormElement> = (e) => { 
        e.preventDefault();
        const formData = new FormData();

        Object.entries(data).forEach(([key, value]) => {
            if (key === 'logo' && value instanceof File) {
                formData.append(key, value);
            } else {
                formData.append(key, String(value));
            }
        });

        post(route('home'), {
            onFinish: () => reset('company', 'logo', 'title', 'location', 'type', 'salary', 'description'),
        })
    };

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => { 
        const file = e.target.files?.[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setPreview(previewUrl);
            setData('logo', file);
        }
    };

    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Post your job" />
            <form className="flex flex-col gap-6 p-6" onSubmit={submit}>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                    <div className="grid gap-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                            id="company"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="company"
                            value={data.company}
                            onChange={(e) => setData('company', e.target.value)}
                            disabled={processing}
                            placeholder="Company name"
                        />
                        <InputError message={errors.company} className="mt-2" />
                    </div> 

                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            type="title"
                            required
                            tabIndex={3}
                            autoComplete="new-title"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            disabled={processing}
                            placeholder="title"
                        />
                        <InputError message={errors.title} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                            id="location"
                            type="location"
                            required
                            tabIndex={3}
                            autoComplete="new-location"
                            value={data.location}
                            onChange={(e) => setData('location', e.target.value)}
                            disabled={processing}
                            placeholder="location"
                        />
                        <InputError message={errors.location} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="type">Type of work</Label>
                        <Input
                            id="type"
                            type="type"
                            required
                            tabIndex={3}
                            autoComplete="new-type"
                            value={data.type}
                            onChange={(e) => setData('type', e.target.value)}
                            disabled={processing}
                            placeholder="type"
                        />
                        <InputError message={errors.title} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="salary">Salary</Label>
                        <Input
                            id="salary"
                            type="salary"
                            required
                            tabIndex={3}
                            autoComplete="new-salary"
                            value={data.salary}
                            onChange={(e) => setData('salary', e.target.value)}
                            disabled={processing}
                            placeholder="salary"
                        />
                        <InputError message={errors.salary} />
                    </div>
                </div>    
                
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                    <div className="grid gap-2">
                        <Label htmlFor="logo">Company Logo</Label>
                        <div className="flex items-start justify-start w-full">
                            <label htmlFor="logo" className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 relative">
                                {preview ? (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <img 
                                            src={preview} 
                                            alt="Preview" 
                                            className="max-h-full max-w-full p-2 object-contain"
                                        />
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setPreview(null);
                                                setData('logo', '');
                                            }}
                                            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <UploadCloud className="w-8 h-8 mb-4 text-gray-500" />
                                        <p className="mb-2 text-sm text-gray-500">
                                            <span className="font-semibold">Click to upload</span> or drag and drop
                                        </p>
                                        <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                )}
                                <input
                                    id="logo"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleLogoUpload}
                                    disabled={processing}
                                />
                            </label>
                        </div>
                        <InputError message={errors.logo} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Job Description</Label>
                        <Textarea
                            id="description"
                            required
                            tabIndex={3}
                            rows={5}
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            disabled={processing}
                            placeholder="Enter the job description..."
                            className="resize-none"
                        />
                        <InputError message={errors.description} />
                    </div>
                </div>

                <Button type="submit" className="mt-2 w-24" tabIndex={5} disabled={processing}>
                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                    Submit
                </Button>
            </form>
        </AppLayout>
    )
}