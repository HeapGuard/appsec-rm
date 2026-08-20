export type KnowledgeStatus = 0 | 1 | 2 | 3;
export type PageId = 'dashboard' | 'roadmap' | 'today' | 'pomodoro' | 'practice' | 'resources' | 'activity' | 'reviews' | 'report' | 'data';
export type Area = 'SYSTEM' | 'WEB' | 'WEB SECURITY' | 'CODE' | 'SECURE CODING' | 'APPSEC' | 'DEVSECOPS' | 'ARCHITECTURE';
export type ResourceType = 'Основной материал' | 'Практика' | 'Справочник' | 'Дополнительно';

export interface RoadmapSubtopic { id: string; title: string; description: string; }
export interface RoadmapTopic { id: string; title: string; description: string; why: string; stageId: string; area: Area; prerequisites?: string[]; practice?: string[]; questions?: string[]; subtopics: RoadmapSubtopic[]; }
export interface RoadmapStage { id: string; number: string; title: string; month: number; description: string; checkpoint: string[]; topicIds: string[]; }
export interface Resource { id: string; title: string; type: ResourceType; language: 'RU' | 'EN'; free: boolean; url: string; description: string; relatedTopicIds: string[]; }
export interface TopicProgress { status: KnowledgeStatus; confidence: number; notes: string; explanation: string; updatedAt: string; }
export type PracticeCaseStatus = 'planned' | 'researching' | 'confirmed' | 'fix-proposed' | 'retested' | 'portfolio-ready';
export interface PracticeCase { id: string; title: string; source: string; scope: string; topicId: string; subtopicId?: string; vulnerabilityType: string; status: PracticeCaseStatus; severity: 'Низкая' | 'Средняя' | 'Высокая' | 'Критическая'; reproduction: string; impact: string; rootCause: string; fix: string; retest: string; evidence: string; takeaway: string; createdAt: string; updatedAt: string; }
export interface DailyLog { id: string; date: string; topicIds: string[]; subtopicIds?: string[]; practiceCaseId?: string; minutes: number; learned: string; practiced: string; explanation: string; unclear: string; usefulness: number; createdAt: string; }
export interface ReviewState { stage: number; nextReview: string; answers: Record<string, string>; totalReviews: number; }
export interface AppSettings { startDate: string; weeklyTarget: number; compactMode: boolean; crtEnabled: boolean; bootSeen: boolean; }
export interface UserState { version: 2; progress: Record<string, TopicProgress>; dailyLogs: DailyLog[]; reviews: Record<string, ReviewState>; checkpoints: Record<string, 0 | 1 | 2>; practiceCases: PracticeCase[]; settings: AppSettings; backup: { lastExportAt?: string }; }
export type StoredUserState = Omit<UserState, 'version'> & { version: 1 | 2; practiceCases?: PracticeCase[] };
