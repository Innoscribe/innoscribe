"use client";

import { useState, useRef, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import {
    Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import ScrollUp from "../Common/ScrollUp";
import { InfoDialog } from "../Popup";
import React from "react";

// Tag Input Component
const TagInput = ({
    label,
    placeholder,
    values,
    onValuesChange,
    maxTags = 3,
    error
}: {
    label: string;
    placeholder: string;
    values: string[];
    onValuesChange: (values: string[]) => void;
    maxTags?: number;
    error?: string;
}) => {
    const [inputValue, setInputValue] = useState("");

    const addTag = () => {
        const trimmedValue = inputValue.trim();
        if (!trimmedValue) return;

        if (values.length >= maxTags) {
            return; // Don't add if at max
        }

        if (!values.includes(trimmedValue)) {
            onValuesChange([...values, trimmedValue]);
        }
        setInputValue("");
    };

    const removeTag = (indexToRemove: number) => {
        onValuesChange(values.filter((_, index) => index !== indexToRemove));
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag();
        }
    };

    return (
        <div>
            <Label>{label}</Label>
            <div className="space-y-2">
                {/* Display existing tags */}
                {values.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-[#58c0c2] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
                            >
                                <span>{value}</span>
                                <button
                                    type="button"
                                    onClick={() => removeTag(index)}
                                    className="hover:bg-[#4dbabc] rounded-full p-1 transition-colors"
                                >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Input field for new tags */}
                <div className="flex gap-2">
                    <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={placeholder}
                        disabled={values.length >= maxTags}
                        className={error ? "border-red-500" : ""}
                    />
                    <Button
                        type="button"
                        onClick={addTag}
                        disabled={!inputValue.trim() || values.length >= maxTags}
                        className="bg-[#58c0c2] hover:bg-[#4dbabc] px-3"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    </Button>
                </div>

                {/* Error messages */}
                {values.length >= maxTags && (
                    <p className="text-orange-500 text-sm">Du kan legge til maks {maxTags} lenker</p>
                )}
                {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                )}
            </div>
        </div>
    );
};

// File Upload Area Component
const FileUploadArea = ({
    onFileSelect,
    disabled = false
}: {
    onFileSelect: (file: File) => void;
    disabled?: boolean;
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [dragActive, setDragActive] = useState(false);

    const handleFiles = (files: FileList) => {
        if (files.length === 0 || disabled) return;

        const file = files[0];
        const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];

        if (!allowedTypes.includes(file.type)) {
            alert('Kun PDF, DOCX og TXT filer er tillatt');
            return;
        }

        if (file.size > 10 * 1024 * 1024) { // 10MB limit
            alert('Filen er for stor. Maks størrelse er 10MB');
            return;
        }

        onFileSelect(file);
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (disabled) return;

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFiles(e.dataTransfer.files);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFiles(e.target.files);
        }
    };

    const openFileExplorer = () => {
        if (disabled) return;
        fileInputRef.current?.click();
    };

    return (
        <div
            className={`relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${disabled
                ? 'border-gray-300 bg-gray-50 cursor-not-allowed'
                : dragActive
                    ? 'border-[#58c0c2] bg-[#58c0c2]/5'
                    : 'border-gray-300 hover:border-[#58c0c2] hover:bg-gray-50'
                }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={openFileExplorer}
        >
            <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx,.txt"
                onChange={handleChange}
                className="hidden"
                disabled={disabled}
            />

            <div className={`flex flex-col items-center gap-2 ${disabled ? 'text-gray-400' : 'text-gray-600'}`}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <div>
                    <p className="text-sm font-medium">
                        {disabled ? 'Maksimum antall filer nådd' : 'Klikk eller dra for å laste opp'}
                    </p>
                    <p className="text-xs text-gray-500">PDF, DOCX eller TXT (maks 10MB)</p>
                </div>
            </div>
        </div>
    );
};


// Updated MultiFileUpload Component with Custom Categories
const MultiFileUpload = ({
    label,
    files,
    onFilesChange,
    maxFiles = 3,
    error,
    infoTitle,
    infoDescription,
    onInfoClick,
    categories // Add this new prop
}: {
    label: string;
    files: { file: File; category: string }[];
    onFilesChange: (files: { file: File; category: string }[]) => void;
    maxFiles?: number;
    error?: string;
    infoTitle: string;
    infoDescription: string;
    onInfoClick: () => void;
    categories: string[]; // Add this new prop type
}) => {
    const [pendingFile, setPendingFile] = useState<File | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [showCategorySelect, setShowCategorySelect] = useState(false);


    // Remove the hardcoded categories array - it will come from props now

    const handleFileSelect = (newFile: File) => {
        if (files.length >= maxFiles) {
            return;
        }

        // Check if file already exists
        const fileExists = files.some(f => f.file.name === newFile.name && f.file.size === newFile.size);
        if (fileExists) {
            return;
        }

        // Store the pending file and show category selection
        setPendingFile(newFile);
        setShowCategorySelect(true);
        setSelectedCategory("");
        setCategoryError("");
    };

    const handleCategorySelection = () => {
        if (!selectedCategory) {
            setCategoryError("Vennligst velg en kategori før du fortsetter.");
            return;
        }

        if (pendingFile) {
            onFilesChange([...files, { file: pendingFile, category: selectedCategory }]);
            setPendingFile(null);
            setShowCategorySelect(false);
            setSelectedCategory("");
            setCategoryError("");
        }
    };

    const removeFile = (indexToRemove: number) => {
        onFilesChange(files.filter((_, index) => index !== indexToRemove));
        // Reset states if removing files
        if (files.length === 1) {
            setPendingFile(null);
            setShowCategorySelect(false);
            setSelectedCategory("");
            setCategoryError("");
        }
    };

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value);
        setCategoryError("");
    };

    return (
        <div>
            <Label className="flex items-center gap-2">
                {label}
                <svg
                    onClick={onInfoClick}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-question-mark cursor-pointer text-[#58c0c2]"
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                </svg>
            </Label>

            <div className="space-y-3">
                {/* File Upload Area - Always show if not at max files and not showing category select */}
                {files.length < maxFiles && !showCategorySelect && (
                    <FileUploadArea
                        onFileSelect={handleFileSelect}
                        disabled={files.length >= maxFiles}
                    />
                )}

                {/* Display uploaded files */}
                {files.map(({ file, category }, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center gap-3">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <path d="M14 2v6h6" />
                                <path d="M16 13H8" />
                                <path d="M16 17H8" />
                                <path d="M10 9H8" />
                            </svg>
                            <div>
                                <p className="text-sm font-medium">{file.name}</p>
                                <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB • {category}</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700 p-1 rounded transition-colors"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                ))}

                {/* Category Selection - Shows after file is selected */}
                {showCategorySelect && pendingFile && (
                    <div className="space-y-3 bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div className="flex items-center gap-3 mb-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <path d="M14 2v6h6" />
                            </svg>
                            <div>
                                <p className="text-sm font-medium text-blue-800">Fil valgt: {pendingFile.name}</p>
                                <p className="text-xs text-blue-600">{(pendingFile.size / 1024).toFixed(1)} KB</p>
                            </div>
                        </div>

                        <div>
                            <Label>Velg kategori for denne filen</Label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => handleCategoryChange(e.target.value)}
                                className={`w-full px-3 py-2 border rounded-md bg-white ${categoryError ? "border-red-500" : "border-gray-300"
                                    } focus:outline-none focus:ring-2 focus:ring-[#58c0c2] focus:border-transparent`}
                            >
                                <option value="">Velg en kategori</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            {categoryError && (
                                <p className="text-red-500 text-sm mt-1">{categoryError}</p>
                            )}
                        </div>

                        <div className="flex gap-2">
                            <Button
                                type="button"
                                onClick={handleCategorySelection}
                                disabled={!selectedCategory}
                                className="bg-[#58c0c2] hover:bg-[#4dbabc] text-white px-4 py-2"
                            >
                                Legg til fil
                            </Button>
                            <Button
                                type="button"
                                onClick={() => {
                                    setPendingFile(null);
                                    setShowCategorySelect(false);
                                    setSelectedCategory("");
                                    setCategoryError("");
                                }}
                                variant="outline"
                                className="px-4 py-2"
                            >
                                Avbryt
                            </Button>
                        </div>
                    </div>
                )}

                {/* Error messages */}
                {files.length >= maxFiles && (
                    <p className="text-orange-500 text-sm">Du kan laste opp maks {maxFiles} filer</p>
                )}
                {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                )}
            </div>
        </div>
    );
};



// Modern Audio Player Component
const ModernAudioPlayer = ({ src, voiceName }: { src: string; voiceName: string }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        } else {
            audioRef.current.play();
            // Update progress more frequently for smooth animation
            intervalRef.current = setInterval(() => {
                if (audioRef.current) {
                    setCurrentTime(audioRef.current.currentTime);
                }
            }, 50); // Update every 50ms for smooth progress
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            const newTime = parseFloat(e.target.value);
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
        setCurrentTime(0);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        // Reset audio to beginning
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
        }
    };

    // Cleanup interval on unmount
    React.useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-3 w-full">
            <audio
                ref={audioRef}
                src={src}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleEnded}
                preload="metadata"
            />

            <button
                type="button"
                onClick={togglePlay}
                className="bg-[#58c0c2] hover:bg-[#4dbabc] text-white rounded-full p-2 transition-colors"
            >
                {isPlaying ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16" />
                        <rect x="14" y="4" width="4" height="16" />
                    </svg>
                ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5,3 19,12 5,21" />
                    </svg>
                )}
            </button>

            <div className="flex-1">
                <div className="text-sm font-medium text-gray-700 mb-1">{voiceName}</div>
                <div className="flex items-center gap-2">
                    <input
                        type="range"
                        min={0}
                        max={duration || 0}
                        value={currentTime}
                        onChange={handleSeek}
                        className="flex-1 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                            background: `linear-gradient(to right, #58c0c2 0%, #58c0c2 ${(currentTime / duration) * 100}%, #d1d5db ${(currentTime / duration) * 100}%, #d1d5db 100%)`
                        }}
                    />
                    <style jsx>{`
    .slider::-webkit-slider-thumb {
        appearance: none;
        width: 0;
        height: 0;
        background: transparent;
        cursor: pointer;
        border: none;
    }
    .slider::-moz-range-thumb {
        width: 0;
        height: 0;
        background: transparent;
        cursor: pointer;
        border: none;
        box-shadow: none;
    }
`}</style>
                    <span className="text-xs text-gray-500 min-w-[35px]">
                        {formatTime(currentTime)}/{formatTime(duration)}
                    </span>
                </div>
            </div>
        </div>
    );
};

const voices = [
    { name: "Erick", url: "/audio/erik.mp3" },
    { name: "Jonas", url: "/audio/johan.mp3" },
    { name: "Nora", url: "/audio/sarah.mp3" },
    { name: "Lars", url: "/audio/oscar.mp3" },
    { name: "Ida", url: "/audio/ola.mp3" },
    { name: "Emil", url: "/audio/olaf.mp3" },
    { name: "Helge", url: "/audio/helge.mp3" },
    { name: "Anna", url: "/audio/emma.mp3" },
];

const automations = [
    "Kundeservice",
    "Teknisk støtte",
    "Timebestilling",
    "Ordrebehandling",
    "Mat- og serveringsbestilling",
    "Lead-kvalifisering",
    "Salgsstøtte",
    "Påminnelser og varsler",
    "Other",

];

const scriptCategories = [
    "Salgsmanus",
    "Supportmanus",
    "Bestillingsmanus",
    "Oppfølgingsmanus",
    "Undersøkelsesmanus",
    "Informasjonsmanus"
];


const faqCategories = [
    "Produkter & tjenester",
    "Kundeservice & FAQ",
    "Avtaler & vilkår",
    "Prosesser & rutiner",
    "Salg & markedsføring ",
    "Rapporter & analyser"
];

export default function OnboardingForm() {
    const [step, setStep] = useState(1);
    const headingRef = useRef<HTMLHeadingElement>(null);

    type FormType = {
        fullName: string;
        email: string;
        phone: string;
        assistantName: string;
        voice: string;
        script: string;
        scriptFiles: { file: File; category: string }[];
        automations: string[];
        customAutomation: string;
        otherAutomationChecked: boolean;
        otherAutomation: string;
        welcomeMessage: string;
        faq: string;
        faqFiles: { file: File; category: string }[];
        businessHours: string;
        businessName: string;
        businessType: string;
        industry: string;
        website: string[];  // Changed to array
        language: string;
        social: string[];   // Changed to array
        goal: string[];
        role: string[];
        apiKeyStatus: string;
        apiKeyValue: string;
        thirdPartyApps: string;
    };

    const [form, setForm] = useState<FormType>({
        fullName: "",
        email: "",
        phone: "",
        assistantName: "",
        voice: "",
        script: "",
        scriptFiles: [],   // Changed to array
        automations: [],
        customAutomation: "",
        otherAutomationChecked: false,
        otherAutomation: "",
        welcomeMessage: "",
        faq: "",
        faqFiles: [],      // Changed to array
        businessHours: "",
        businessName: "",
        businessType: "",
        industry: "",
        website: [],       // Changed to array
        language: "",
        social: [],        // Changed to array
        goal: [],
        role: [],
        apiKeyStatus: "",
        apiKeyValue: "",
        thirdPartyApps: "",
    });

    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateStep = (stepNumber: number) => {
        let newErrors: { [key: string]: string } = {};

        if (stepNumber === 2) {
            if (!form.fullName) newErrors.fullName = "Dette feltet er påkrevd";
            if (!form.email) newErrors.email = "Dette feltet er påkrevd";
            if (!form.phone) newErrors.phone = "Dette feltet er påkrevd";
            if (!form.businessName) newErrors.businessName = "Dette feltet er påkrevd";
            if (!form.businessType) newErrors.businessType = "Dette feltet er påkrevd";
            if (!form.industry) newErrors.industry = "Dette feltet er påkrevd";
            if (form.website.length === 0) newErrors.website = "Legg til minst én nettside";
            if (!form.language) newErrors.language = "Dette feltet er påkrevd";
            if (form.social.length === 0) newErrors.social = "Legg til minst én sosiale medier lenke";
            if (!form.goal) newErrors.goal = "Dette feltet er påkrevd";
        }

        if (stepNumber === 3) {
            if (!form.assistantName) newErrors.assistantName = "Dette feltet er påkrevd";
            if (!form.welcomeMessage) newErrors.welcomeMessage = "Dette feltet er påkrevd";
            if (!form.voice) newErrors.voice = "Dette feltet er påkrevd";
            if (form.scriptFiles.length === 0) newErrors.scriptFiles = "Last opp minst én fil";
            if (form.faqFiles.length === 0) newErrors.faqFiles = "Last opp minst én fil";
            if (form.automations.length === 0) newErrors.automations = "Velg minst en oppgave";
            if (!form.thirdPartyApps) newErrors.thirdPartyApps = "Dette feltet er påkrevd";
            if (!form.apiKeyStatus) newErrors.apiKeyStatus = "Dette feltet er påkrevd";
            if (form.apiKeyStatus === "yes" && !form.apiKeyValue) {
                newErrors.apiKeyValue = "Dette feltet er påkrevd";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState({ title: '', description: '' });

    const openDialog = (title: string, description: string) => {
        setDialogContent({ title, description });
        setDialogOpen(true);
        headingRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = async () => {
        // Final validation before submit
        if (!validateStep(3)) {
            return;
        }

        setSubmitting(true);
        try {
            // Upload script files
            const scriptFileUrls: { url: string; category: string }[] = [];
            for (const { file, category } of form.scriptFiles) {
                const uploadData = new FormData();
                uploadData.append("file", file);

                const uploadRes = await fetch("/api/upload", {
                    method: "POST",
                    body: uploadData,
                });

                const uploadJson = await uploadRes.json();
                if (uploadJson?.fileUrl) {
                    scriptFileUrls.push({ url: uploadJson.fileUrl, category });
                }
            }

            // Upload FAQ files
            const faqFileUrls: { url: string; category: string }[] = [];
            for (const { file, category } of form.faqFiles) {
                const uploadData = new FormData();
                uploadData.append("file", file);

                const uploadRes = await fetch("/api/upload", {
                    method: "POST",
                    body: uploadData,
                });

                const uploadJson = await uploadRes.json();
                if (uploadJson?.fileUrl) {
                    faqFileUrls.push({ url: uploadJson.fileUrl, category });
                }
            }
            // Ensure arrays are properly formatted as simple string arrays
            const finalForm = {
                fullName: form.fullName,
                email: form.email,
                phone: form.phone,
                assistantName: form.assistantName,
                voice: form.voice,
                script: form.script,
                scriptFiles: scriptFileUrls, // This is already a string array
                automations: form.automations, // This is already a string array
                customAutomation: form.customAutomation,
                welcomeMessage: form.welcomeMessage,
                faq: form.faq,
                faqFiles: faqFileUrls, // This is already a string array
                businessHours: form.businessHours,
                businessName: form.businessName,
                businessType: form.businessType,
                industry: form.industry,
                website: form.website, // This should be a simple string array
                language: form.language,
                social: form.social, // This should be a simple string array
                goal: form.goal,
                apiKeyStatus: form.apiKeyStatus,
                apiKeyValue: form.apiKeyValue,
                thirdPartyApps: form.thirdPartyApps,
            };

            console.log('Form data being sent:', finalForm); // Debug log

            const response = await fetch("/api/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(finalForm),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const errorData = await response.text();
                console.error('Server response:', errorData);
                alert("Noe gikk galt. Prøv igjen.");
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert("Feil ved innsending av skjema.");
        }
        setSubmitting(false);
    };

    if (submitted) {
        return (
            <div className="flex items-center justify-center min-h-screen mt-32 bg-gray-50 px-4">
                <ScrollUp />
                <div className="max-w-md w-full text-center">
                    {/* Success Illustration */}
                    <div className="mb-8">
                        <div className="w-32 h-32 mx-auto mb-6 relative">
                            <div className="w-32 h-32 bg-[#58c0c2] rounded-full flex items-center justify-center relative overflow-hidden">
                                {/* Three people illustration */}
                                <div className="flex items-center justify-center space-x-1">
                                    {/* Person 1 - Orange hair */}
                                    <div className="w-8 h-10 relative">
                                        <div className="w-6 h-6 bg-white rounded-full mb-1 mx-auto"></div>
                                        <div className="w-8 h-4 bg-white rounded-t-lg"></div>
                                    </div>
                                    {/* Person 2 - Dark skin, center */}
                                    <div className="w-8 h-10 relative -mt-2">
                                        <div className="w-6 h-6 bg-white rounded-full mb-1 mx-auto"></div>
                                        <div className="w-8 h-4 bg-white rounded-t-lg"></div>
                                    </div>
                                    {/* Person 3 - Dark hair */}
                                    <div className="w-8 h-10 relative">
                                        <div className="w-6 h-6 bg-white rounded-full mb-1 mx-auto"></div>
                                        <div className="w-8 h-4 bg-white rounded-t-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Success Message */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Your order is placed successfully!
                    </h2>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Congratulations on making it very, very easy to get paid! We&apos;ll get in touch as soon as we&apos;ve looked at your order. Our current processing time is about one week.
                    </p>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <button
                            className="w-full bg-[#58c0c2] hover:bg-[#46c2c5] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                            onClick={() => {
                                // Add your order new solution logic here
                                window.location.reload();
                            }}
                        >
                            Order new solution
                        </button>

                        <button
                            className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                            onClick={() => {
                                // Add your home page navigation logic here
                                window.location.href = '/';
                            }}
                        >
                            Go to home page
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-white to-aqua-50 min-h-screen py-10 px-4 md:px-10 text-aqua-800">
            <form className="max-w-5xl mx-auto bg-white p-6 md:p-8 shadow-xl rounded-3xl space-y-6 border border-aqua-200">
                {step === 1 && (
                    <>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#4dbabc]">
                            Onboarding-skjema
                        </h2>
                        <p className="mb-4">
                            Velkommen til <span className="font-semibold">Innoscribe</span> – din partner for AI-drevne løsninger. <br />
                            <br />
                            Vi gjør teknologi enkelt, nyttig og lønnsomt. <br />Vårt mål er å hjelpe bedrifter med å forbedre kundeopplevelser, frigjøre tid og skape vekstmuligheter gjennom kunstig intelligens.
                        </p>

                        <div className="space-y-2 mb-4">
                            <p className="font-semibold text-[#4dbabc]">Våre løsninger:</p>
                            <ul className="list-disc list-inside  ml-2">
                                <li><span className="font-semibold">Telefonassistenter</span>: Vi tar oss av innkommende og utgående samtaler døgnet rundt.
                                </li>
                                <li><span className="font-semibold">AI-agenter</span>: Digitale medarbeidere automatiserer oppgavene, samler data og integreres i systemene du bruker.</li>
                                <li><span className="font-semibold">Chatbots</span>: AI hjelper med alt fra bestillinger,  betalinger og spørsmål.</li>

                            </ul>
                        </div>


                        <div className="mb-2">
                            <p className="font-semibold text-[#4dbabc] ">Slik fungerer onboardingen:</p>
                            <ol className="list-decimal list-inside  ml-2">
                                <li>Fortell oss om deg og bedriften din.</li>
                                <li>Velg assistent!</li>
                                <li>Du er i gang – vi tar kontakt innen 24 timer.</li>
                            </ol>
                        </div>


                        <div className="text-center mt-6">
                            <Button onClick={() => setStep(2)} type="button" className="bg-[#58c0c2] w-full sm:w-auto">
                                Next
                            </Button>
                        </div>
                    </>
                )}


                {step === 2 && (
                    <>
                        <ScrollUp />
                        <h3 className="text-3xl md:text-4xl font-bold text-center text-aqua-700">
                            Kontakt-Info
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Input
                                    name="fullName"
                                    placeholder="Fullt Navn"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    className={errors.fullName ? "border-red-500" : ""}
                                />
                                {errors.fullName && (
                                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                                )}
                            </div>

                            <div>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="E-postadresse"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={errors.email ? "border-red-500" : ""}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <Input
                                    name="phone"
                                    placeholder="Telefonnummer"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className={errors.phone ? "border-red-500" : ""}
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm">{errors.phone}</p>
                                )}
                            </div>
                            <div>
                                <select
                                    name="role"
                                    value={form.role}
                                    onChange={handleChange}
                                    className={`w-full border rounded-md px-3 py-2  text-sm   ${errors.role ? "border-red-500" : "border-gray-300"
                                        } ${form.role ? "text-gray-500" : "text-gray-900"}`}
                                >

                                    <option value="" disabled hidden >
                                        Velg rolle
                                    </option>

                                    <option value="Owner" >Eier</option>
                                    <option value="Manager">Leder</option>
                                    <option value="Employee">Ansatt</option>
                                </select>

                                {errors.role && (
                                    <p className="text-red-500 text-sm">{errors.role}</p>
                                )}
                            </div>

                        </div>



                        <h3 className="text-3xl md:text-4xl font-bold text-center text-aqua-700">
                            Bedrift-Info
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { name: "businessName", placeholder: "Bedriftsnavn" },
                                { name: "businessType", placeholder: "Organisasjonsnummer" },
                                { name: "industry", placeholder: "Type virksomhet" },
                                { name: "language", placeholder: "Bransje / sektor" },

                            ].map((field) => (
                                <div key={field.name}>
                                    <Input
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        value={(form as any)[field.name]}
                                        onChange={handleChange}
                                        className={errors[field.name] ? "border-red-500" : ""}
                                    />
                                    {errors[field.name] && (
                                        <p className="text-red-500 text-sm">{errors[field.name]}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Website Links - Tag Input */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <TagInput
                                label="bedriftens nettsted (URL)"
                                placeholder="f.eks. https://innoscribe.no"
                                values={form.goal}
                                onValuesChange={(values) => {
                                    setForm(prev => ({ ...prev, goal: values }));
                                    if (errors.goal) setErrors(prev => ({ ...prev, goal: "" }));
                                }}
                                maxTags={3}
                                error={errors.goal}
                            />
                            <TagInput
                                label="Sosiale medier (lenker)"
                                placeholder="f.eks. https://din-nettside.no"
                                values={form.website}
                                onValuesChange={(values) => {
                                    setForm(prev => ({ ...prev, website: values }));
                                    if (errors.website) setErrors(prev => ({ ...prev, website: "" }));
                                }}
                                maxTags={3}
                                error={errors.website}
                            />

                            <TagInput
                                label="Språk (flere mulig)"
                                placeholder="f.eks. english"
                                values={form.social}
                                onValuesChange={(values) => {
                                    setForm(prev => ({ ...prev, social: values }));
                                    if (errors.social) setErrors(prev => ({ ...prev, social: "" }));
                                }}
                                maxTags={3}
                                error={errors.social}
                            />
                        </div>

                        <div className="flex justify-between mt-6">
                            <Button
                                onClick={() => setStep(1)}
                                type="button"
                                className="bg-[#58c0c2] w-[15%]"
                            >
                                Tilbake
                            </Button>

                            <Button
                                onClick={() => {
                                    if (validateStep(2)) setStep(3);
                                }}
                                type="button"
                                className="bg-[#58c0c2] w-[15%]"
                            >
                                Neste
                            </Button>
                        </div>
                    </>
                )}

                {step === 3 && (
                    <div className="px-4 py-6 max-w-4xl mx-auto">
                        <ScrollUp />
                        <h3 className="text-3xl md:text-4xl font-bold text-center text-aqua-700 mb-6">
                            Tilpass assistenten
                        </h3>

                        <div className="space-y-6">
                            {/* Assistant Name + Welcome */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="flex items-center gap-2">
                                        Assistentnavn
                                        <svg
                                            onClick={() =>
                                                openDialog(
                                                    "Assistentnavn",
                                                    `Dette er navnet kundene dine vil høre når assistenten presenterer seg.<br/>
                  <span class='text-sm italic'>(Du kan endre navnet senere om du ønsker det).</span>`
                                                )
                                            }
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-circle-question-mark cursor-pointer text-[#58c0c2] mb-1"
                                        >
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                            <path d="M12 17h.01" />
                                        </svg>
                                    </Label>
                                    <Input
                                        name="assistantName"
                                        placeholder="Velg navn på AI-Assistent din"
                                        value={form.assistantName}
                                        onChange={handleChange}
                                        className={errors.assistantName ? "border-red-500" : ""}
                                    />
                                    {errors.assistantName && (
                                        <p className="text-red-500 text-sm">{errors.assistantName}</p>
                                    )}
                                </div>

                                <div>
                                    <Label className="flex items-center gap-2">
                                        Intromelding
                                        <svg
                                            onClick={() =>
                                                openDialog(
                                                    "Intromelding",
                                                    `Dette er det første kundene dine hører. Det setter tonen for hele samtalen. <br/> 
                                                    <span class='text-sm italic'>(Du kan endre meldingen senere om du ønsker det). <span/>`
                                                )
                                            }
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-circle-question-mark cursor-pointer text-[#58c0c2] mb-1"
                                        >
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                            <path d="M12 17h.01" />
                                        </svg>
                                    </Label>
                                    <Input
                                        name="welcomeMessage"
                                        placeholder="Innledende melding fra assistenten"
                                        value={form.welcomeMessage}
                                        onChange={handleChange}
                                        className={errors.welcomeMessage ? "border-red-500" : ""}
                                    />
                                    {errors.welcomeMessage && (
                                        <p className="text-red-500 text-sm">{errors.welcomeMessage}</p>
                                    )}
                                </div>
                            </div>

                            {/* Voice Selection */}
                            <div>
                                <Label className="flex items-center gap-2">
                                    Velg en stemme
                                    <svg 
                                        onClick={() =>
                                            openDialog(
                                                "Velg en stemme",
                                                `Dette blir stemmen assistenten bruker når den snakker med kundene dine. <br/> Velg den som passer best til merkevaren din og kundeopplevelsen. <br/>
                                                <span class='text-sm italic'> (Du kan endre stemmen senere om du ønsker det).</span>`
                                            )
                                        }
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-circle-question-mark cursor-pointer text-[#58c0c2] mb-1"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                        <path d="M12 17h.01" />
                                    </svg>
                                </Label>
                                <RadioGroup
                                    value={form.voice}
                                    onValueChange={(val) => {
                                        setForm({ ...form, voice: val });
                                        if (errors.voice) setErrors({ ...errors, voice: "" });
                                    }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2"
                                >
                                    {voices.map((voice, idx) => (
                                        <Card key={idx} className="p-4">
                                            <div className="flex items-center justify-between mb-3">
                                                <Label className="flex items-center gap-2">
                                                    <RadioGroupItem id={`voice-${idx}`} value={voice.name} />
                                                    {voice.name}
                                                </Label>
                                            </div>
                                            <ModernAudioPlayer src={voice.url} voiceName={voice.name} />
                                        </Card>
                                    ))}
                                </RadioGroup>
                                {errors.voice && (
                                    <p className="text-red-500 text-sm">{errors.voice}</p>
                                )}
                            </div>

                            {/* Script Files - Multi-File Upload */}
                            <MultiFileUpload
                                label="Last opp manus til assistenten"
                                files={form.scriptFiles}
                                onFilesChange={(files) => {
                                    setForm(prev => ({ ...prev, scriptFiles: files }));
                                    if (errors.scriptFiles) setErrors(prev => ({ ...prev, scriptFiles: "" }));
                                }}
                                maxFiles={3}
                                error={errors.scriptFiles}
                                infoTitle="Last opp manus til assistenten"
                                infoDescription="Last opp manus slik at assistenten kan følge dine retningslinjer i samtaler. <br/> <span class='text-sm italic'>(Du kan oppdatere eller bytte ut manuset senere om du ønsker det).</span>"
                                onInfoClick={() =>
                                    openDialog(
                                        "Last opp manus til assistenten",
                                        `Last opp manus slik at assistenten kan følge dine retningslinjer i samtaler. <br/> 
                                        <span class='text-sm italic'>(Du kan oppdatere eller bytte ut manuset senere om du ønsker det).</span>`
                                    )
                                }
                                categories={scriptCategories} // Add this line
                            />

                            {/* FAQ Files - Multi-File Upload */}
                            <MultiFileUpload
                                label="Bedriftsinformasjon og kundespørsmål"
                                files={form.faqFiles}
                                onFilesChange={(files) => {
                                    setForm(prev => ({ ...prev, faqFiles: files }));
                                    if (errors.faqFiles) setErrors(prev => ({ ...prev, faqFiles: "" }));
                                }}
                                maxFiles={3}
                                error={errors.faqFiles}
                                infoTitle="Bedriftsinformasjon og kundespørsmål"
                                infoDescription="Legg inn viktige detaljer om bedriften din og de mest vanlige spørsmålene fra kundene.Dette hjelper assistenten å gi riktige og relevante svar. (Du kan oppdatere denne informasjonen senere om du ønsker det)."
                                onInfoClick={() =>
                                    openDialog(
                                        "Bedriftsinformasjon og kundespørsmål",
                                        `Legg inn viktige detaljer om bedriften din og de mest vanlige spørsmålene fra kundene.<br/> Dette hjelper assistenten å gi riktige og relevante svar. <br/>
                                        <span class='text-sm italic'>(Du kan oppdatere denne informasjonen senere om du ønsker det).</span>`
                                    )
                                }
                                categories={faqCategories} // Add this line
                            />

                            {/* Automations */}
                           <div>
  <Label className="flex items-center gap-2">
    Velg oppgaver
    <svg
      onClick={() =>
        openDialog(
          "Velg oppgaver",
          `Automatisering lar deg koble assistenten til arbeidsflyter som påminnelser, timebestillinger og oppfølginger.<br/>
           <span class='text-sm italic'>(Du kan justere eller endre disse oppgavene senere om du ønsker det).</span>`
        )
      }
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-circle-question-mark cursor-pointer text-[#58c0c2] mb-1"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  </Label>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
    {automations.map((opt, idx) => (
      <Label key={idx} className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <Checkbox
            checked={
              opt === "Other"
                ? !!form.otherAutomationChecked
                : form.automations.includes(opt)
            }
            onCheckedChange={(checked) => {
              if (opt === "Other") {
                setForm((prev) => ({
                  ...prev,
                  otherAutomationChecked: checked === true,
                  // reset if unchecked
                  otherAutomation: checked ? prev.otherAutomation : "",
                }));
              } else {
                if (checked === true) {
                  setForm((prev) => ({
                    ...prev,
                    automations: [...prev.automations, opt],
                  }));
                } else {
                  setForm((prev) => ({
                    ...prev,
                    automations: prev.automations.filter((a) => a !== opt),
                  }));
                }
              }
              if (errors.automations) setErrors({ ...errors, automations: "" });
            }}
          />

          {opt === "Other" ? "Other" : opt}
        </div>

        {/* Show input only if Other is checked */}
        {opt === "Other" && form.otherAutomationChecked && (
          <input
            type="text"
            placeholder="Skriv oppgave"
            className="border rounded px-2 py-1 text-sm w-full"
            value={form.otherAutomation || ""}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, otherAutomation: e.target.value }))
            }
          />
        )}
      </Label>
    ))}
  </div>

  {errors.automations && (
    <p className="text-red-500 text-sm">{errors.automations}</p>
  )}
</div>

                            {/* Third-party */}
                            <div>
                                <Label className="flex items-center gap-2">
                                    Integrasjoner
                                    <svg
                                        onClick={() =>
                                            openDialog(
                                                " Hvorfor spør vi om tredjepartsplattformer?",
                                                `Integrasjoner med verktøy du allerede bruker som Outlook, Google eller Slack gjør opplevelsen mer sømløs. <br/>Dette lar oss koble oss mot systemene deres for å automatisere prosesser. <br/>
                                                <span class='text-sm italic'>(Du kan enkelt legge til eller endre integrasjoner senere ved behov.)</span>`
                                            )
                                        }
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-circle-question-mark cursor-pointer text-[#58c0c2] mb-1"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                        <path d="M12 17h.01" />
                                    </svg>
                                </Label>
                                <Textarea
                                    name="thirdPartyApps"
                                    placeholder="f.eks. Outlook, Leadesk, Google Calendar"
                                    value={form.thirdPartyApps}
                                    onChange={handleChange}
                                    className={errors.thirdPartyApps ? "border-red-500" : ""}
                                />
                                {errors.thirdPartyApps && (
                                    <p className="text-red-500 text-sm">{errors.thirdPartyApps}</p>
                                )}
                            </div>

                            {/* API Key */}
                            <div>
                                <Label className="flex items-center gap-2">
                                    API-nøkkel
                                    <svg
                                        onClick={() =>
                                            openDialog(
                                                "API-nøkkel",
                                                `Hvis du allerede har et API, lar nøkkelen oss koble til eksterne systemer med en gang.<br/>
                                                <span class='text-sm italic'> (Dette er valgfritt og kan også legges til senere).</span>`
                                            )
                                        }
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-circle-question-mark cursor-pointer text-[#58c0c2] mb-1"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                        <path d="M12 17h.01" />
                                    </svg>
                                </Label>
                                <RadioGroup
                                    value={form.apiKeyStatus}
                                    onValueChange={(val) => {
                                        setForm({ ...form, apiKeyStatus: val });
                                        if (errors.apiKeyStatus) setErrors({ ...errors, apiKeyStatus: "" });
                                    }}
                                    className="flex gap-4 mt-2 flex-wrap"
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem id="api-yes" value="yes" />
                                        <Label htmlFor="api-yes">Ja</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem id="api-no" value="no" />
                                        <Label htmlFor="api-no">Nei</Label>
                                    </div>
                                </RadioGroup>
                                {errors.apiKeyStatus && (
                                    <p className="text-red-500 text-sm">{errors.apiKeyStatus}</p>
                                )}

                                {form.apiKeyStatus === "yes" && (
                                    <Input
                                        name="apiKeyValue"
                                        placeholder="Skriv inn API-nøkkelen din"
                                        value={form.apiKeyValue}
                                        onChange={handleChange}
                                        className={`mt-2 w-full md:w-2/3 ${errors.apiKeyValue ? "border-red-500" : ""
                                            }`}
                                    />
                                )}
                                {errors.apiKeyValue && (
                                    <p className="text-red-500 text-sm">{errors.apiKeyValue}</p>
                                )}
                            </div>

                            {/* Navigation */}
                            <div className="flex justify-between mt-6">
                                <Button
                                    onClick={() => setStep(2)}
                                    type="button"
                                    className="bg-[#58c0c2] w-[15%]"
                                >
                                    Tilbake
                                </Button>

                                <Button
                                    onClick={handleSubmit}
                                    type="button"
                                    disabled={submitting}
                                    className={`w-[15%] ${submitting
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-[#58c0c2] hover:bg-[#45a0a1]"
                                        }`}
                                >
                                    {submitting ? "Sender..." : "Send inn"}
                                </Button>
                            </div>
                        </div>

                        <InfoDialog
                            open={dialogOpen}
                            onClose={() => setDialogOpen(false)}
                            title={dialogContent.title}
                            description={dialogContent.description}
                        />
                    </div>
                )}

            </form>
        </div>
    );
}