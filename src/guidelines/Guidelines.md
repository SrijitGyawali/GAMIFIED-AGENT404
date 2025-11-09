# Gamified Blockchain Learning Platform Implementation Plan

## Overview

Transform the existing Next.js application into a fully functional gamified learning platform with Hedera blockchain integration, following the provided roadmap structure.

## Current State Analysis

- Next.js 14 App Router structure exists
- Basic components (Dashboard, QuestBoard, BadgeCollection, Leaderboard) with hardcoded data
- UI components library (shadcn/ui) available
- No centralized mock data structure
- No blockchain integration
- No backend API routes
- Duplicate component structure (both `components/` and `src/components/`)

## Phase 1: UI/UX Implementation with Mock Data

### 1.1 Project Structure Cleanup

- Consolidate components to single location (`components/`)
- Remove duplicate `src/components/` structure
- Set up proper directory structure per roadmap

### 1.2 Mock Data Infrastructure

Create `lib/mock-data/` directory with:

- `quests.ts` - 35+ quest definitions organized by learning paths (Wallet, Transfer, Staking, Swap)
- `badges.ts` - Badge metadata with rarity tiers (Bronze, Silver, Gold, Platinum)
- `users.ts` - Mock user profiles with progress tracking
- `leaderboard.ts` - Leaderboard rankings with filters
- `rewards.ts` - Reward calculation logic (SP and LRN tokens)

### 1.3 Enhanced Dashboard (`app/(dashboard)/dashboard/page.tsx`)

- Active quest bar with real progress percentage
- Skill Points (SP) and LRN token counters from mock data
- Learning path cards (4 paths: Wallet, Transfer, Staking, Swap)
- Daily streak indicator with multiplier (1x-3x)
- Quick stats (badges earned, quests completed, rank)
- Consistency tracker calendar component

### 1.4 Quest Board Enhancement (`app/(dashboard)/quests/page.tsx`)

- Quest list organized by learning path
- Quest status system (locked, available, in-progress, completed)
- Quest details modal with requirements
- Filter by path, status, difficulty
- Prerequisite checking logic

### 1.5 Interactive Tutorial Screen (`app/(dashboard)/tutorial/[questId]/page.tsx`)

- Step-by-step guide with highlighted UI elements
- Context panel (What/Why/How explanations)
- Transaction inspector (mock transaction data)
- Navigation (Previous/Next buttons)
- Confirmation celebration animation
- Mock on-chain verification link

### 1.6 Badge Collection (`app/(dashboard)/badges/page.tsx`)

- Badge grid organized by category
- Rarity tier styling (Bronze, Silver, Gold, Platinum)
- Collection progress percentage
- Badge detail modal (earning date, requirements, rarity)
- Locked badge previews with requirements

### 1.7 Leaderboard (`app/(dashboard)/leaderboard/page.tsx`)

- Top 10 rankings with user cards
- User's highlighted position
- Filters (weekly, monthly, all-time)
- Streak indicators
- Achievement badges display

### 1.8 Wallet Onboarding (`app/(dashboard)/onboarding/page.tsx`)

- Wallet selection (MetaMask, HashPack, Blade)
- Connection flow with step indicators
- Network selection (Hedera Testnet)
- Test token distribution simulation

### 1.9 State Management Setup

- Install Zustand for global state
- Create stores for: user progress, wallet connection, quest state, rewards

### 1.10 Component Library Enhancements

- Create reusable components: ProgressBar, StreakTracker, RewardNotification
- Enhance existing QuestCard, BadgeCard components
- Create TutorialOverlay component

## Phase 2: Core Blockchain Integration

### 2.1 Hedera Configuration

- Create `lib/hedera/config.ts` with environment variables
- Setup instructions documentation
- Network configuration (testnet/mainnet)

### 2.2 HashConnect Integration (`lib/hedera/hashconnect.ts`)

- Initialize HashConnect SDK
- Wallet pairing flow
- Account connection/disconnection handlers
- Network switching logic
- Transaction signing helpers

### 2.3 HCS Quest Logging (`lib/hedera/hcs.ts`)

- Create HCS topic for quest completions
- Submit quest completion messages with structure:
  ```typescript
  {
    questID: string,
    userAddress: string,
    timestamp: string,
    txHash: string,
    status: "completed",
    reward: number
  }
  ```

- Query HCS messages for user history

### 2.4 HTS Badge Minting (`lib/hedera/hts.ts`)

- Create NFT token type for badges
- Mint NFT badges upon quest completion
- Associate badges with user accounts
- Query user's badge collection
- IPFS metadata integration

### 2.5 Mirror Node API Client (`lib/hedera/mirror-node.ts`)

- Transaction verification queries
- Account balance checks
- Transaction history retrieval
- Real-time transaction status
- Display transaction confirmations in UI

### 2.6 Wallet Components

- Create `components/wallet/WalletConnector.tsx`
- Replace mock wallet connection with HashConnect
- Update WalletModal to use real connections

### 2.7 Integration Points

- Replace mock quest completion with HCS logging
- Replace mock badge issuance with HTS minting
- Replace mock transaction verification with Mirror Node queries
- Update UI to show real blockchain data

## Phase 3: Backend Services

### 3.1 Next.js API Routes (`app/api/`)

- `app/api/quests/[id]/route.ts` - Get quest details, update progress
- `app/api/quests/[id]/complete/route.ts` - Mark quest complete, trigger rewards
- `app/api/rewards/calculate/route.ts` - Calculate SP and LRN rewards
- `app/api/user/progress/route.ts` - Get user progress, badges, stats
- `app/api/leaderboard/route.ts` - Get leaderboard rankings

### 3.2 Database Setup

- Choose database (PostgreSQL recommended)
- Create schema:
  - Users table (wallet address, progress, stats)
  - Quest completions table (quest ID, user, timestamp, rewards)
  - Badge ownership table (badge ID, user, mint date)
  - Leaderboard entries (user, score, period, rank)
- Setup database connection utilities

### 3.3 Express Backend Structure (`server/`)

- `server/routes/` - API route handlers
- `server/services/` - Business logic:
  - Quest Management Service
  - Reward Distribution Service
  - Leaderboard Service
  - User Progress Service
- `server/models/` - Database models

### 3.4 Reward System

- Batch reward calculations
- LRN token distribution via HTS
- Skill point accumulation
- Streak multiplier application

## Phase 4: Full-Stack Integration

### 4.1 Frontend-Backend Connection

- Connect frontend to backend APIs
- Replace all mock data with real blockchain/database queries
- Implement error handling and loading states

### 4.2 Real-time Updates

- Implement WebSocket or polling for real-time updates
- Quest completion notifications
- Leaderboard updates
- Reward distribution notifications

### 4.3 Authentication/Authorization

- Wallet-based authentication
- Session management
- Protected routes

### 4.4 Performance Optimization

- Code splitting
- Image optimization
- Caching strategies
- Database query optimization

### 4.5 Advanced Features (Optional)

- Social learning elements
- Advanced DeFi track
- Marketplace integration

## Key Files to Create/Modify

### Phase 1 Priority

- `lib/mock-data/quests.ts`
- `lib/mock-data/badges.ts`
- `lib/mock-data/users.ts`
- `lib/mock-data/leaderboard.ts`
- `lib/mock-data/rewards.ts`
- `lib/stores/userStore.ts` (Zustand)
- `lib/stores/walletStore.ts` (Zustand)
- `app/(dashboard)/onboarding/page.tsx`
- `app/(dashboard)/leaderboard/page.tsx`
- `components/quest/QuestDetailsModal.tsx`
- `components/tutorial/TutorialOverlay.tsx`
- `components/ui/ProgressBar.tsx`
- `components/ui/StreakTracker.tsx`

### Phase 2 Priority

- `lib/hedera/config.ts`
- `lib/hedera/hashconnect.ts`
- `lib/hedera/hcs.ts`
- `lib/hedera/hts.ts`
- `lib/hedera/mirror-node.ts`
- `components/wallet/WalletConnector.tsx`
- `.env.local.example`

### Phase 3 Priority

- `app/api/quests/[id]/route.ts`
- `app/api/rewards/calculate/route.ts`
- `app/api/user/progress/route.ts`
- `app/api/leaderboard/route.ts`
- `server/` directory structure
- Database migration files

## Dependencies to Install

### Phase 1

- `zustand` - State management

### Phase 2

- `@hashgraph/hashconnect` - HashConnect SDK
- `@hashgraph/sdk` - Hedera SDK
- `ipfs-http-client` - IPFS integration

### Phase 3

- `pg` or `@prisma/client` - Database client
- `express` - Backend server (if separate)
- `prisma` - ORM (if using Prisma)

## Environment Variables

Create `.env.local.example` with:

- Hedera account ID and private key
- HashConnect app name/description
- Database URL
- IPFS API credentials
- Mirror Node API URL

## Design System

- Maintain existing glass-morphism aesthetic
- Green tones for success/CTA
- Blue for information
- Gold for rewards/badges
- Dark theme support
- Smooth animations for progress, badges, rewards