export type KnowledgeStatus = 0 | 1 | 2 | 3;
export type PageId = 'dashboard' | 'roadmap' | 'today' | 'resources' | 'activity' | 'reviews' | 'report' | 'data';
export type Area = 'SYSTEM' | 'WEB' | 'WEB SECURITY' | 'CODE' | 'SECURE CODING' | 'APPSEC' | 'DEVSECOPS' | 'ARCHITECTURE';
export type ResourceType = 'Основной материал' | 'Практика' | 'Справочник' | 'Дополнительно';

export interface RoadmapTopic { id: string; title: string; description: string; why: string; stageId: string; area: Area; prerequisites?: string[]; practice?: string[]; questions?: string[]; }
export interface RoadmapStage { id: string; number: string; title: string; month: number; description: string; checkpoint: string[]; topicIds: string[]; }
export interface Resource { id: string; title: string; type: ResourceType; language: 'RU' | 'EN'; free: boolean; url: string; description: string; relatedTopicIds: string[]; }
export interface TopicProgress { status: KnowledgeStatus; confidence: number; notes: string; explanation: string; updatedAt: string; }
export interface DailyLog { id: string; date: string; topicIds: string[]; minutes: number; learned: string; practiced: string; explanation: string; unclear: string; usefulness: number; createdAt: string; }
export interface ReviewState { stage: number; nextReview: string; answers: Record<string, string>; totalReviews: number; }
export interface AppSettings { startDate: string; weeklyTarget: number; compactMode: boolean; crtEnabled: boolean; bootSeen: boolean; }
export interface UserState { version: 1; progress: Record<string, TopicProgress>; dailyLogs: DailyLog[]; reviews: Record<string, ReviewState>; checkpoints: Record<string, 0 | 1 | 2>; settings: AppSettings; backup: { lastExportAt?: string }; }
