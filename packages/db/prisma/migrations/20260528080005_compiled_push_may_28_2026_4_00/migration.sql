-- prisma:nonTransactional

/*
  Warnings:

  - You are about to drop the column `metadata` on the `AuditLog` table. All the data in the column will be lost.
  - You are about to drop the column `businessId` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `applicantId` on the `ListingApplication` table. All the data in the column will be lost.
  - You are about to drop the column `userOneId` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `userTwoId` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `seenAt` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `MessageAttachment` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `MessageAttachment` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `RefreshToken` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `RefreshToken` table. All the data in the column will be lost.
  - You are about to drop the column `birthDate` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `currentMode` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `fullname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isBanned` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isOnline` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastSeenAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `otpExpiresAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `otpHash` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profileCompleted` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `BusinessProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BusinessService` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DeviceSession` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmailVerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Media` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OtpVerification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PasswordResetToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PersonalProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Report` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Swipe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserBlock` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserInterest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserSettings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserSkill` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Listing` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[listingId,applicantPersonaId]` on the table `ListingApplication` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[createdBySwipeId]` on the table `Match` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[personaAId,personaBId]` on the table `Match` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tokenHash]` on the table `RefreshToken` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[primaryEmail]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[normalizedEmail]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[normalizedPhoneNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `personaId` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workspaceId` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `applicantPersonaId` to the `ListingApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ListingApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personaAId` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personaBId` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checksum` to the `MessageAttachment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileSize` to the `MessageAttachment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storageKey` to the `MessageAttachment` table without a default value. This is not possible if the table is not empty.
  - Made the column `mimeType` on table `MessageAttachment` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `sessionId` to the `RefreshToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tokenFamily` to the `RefreshToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tokenHash` to the `RefreshToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `normalizedEmail` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primaryEmail` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RecommendationType" AS ENUM ('MATCH', 'LISTING', 'BUSINESS', 'PERSONA', 'CONTENT');

-- CreateEnum
CREATE TYPE "RecommendationStatus" AS ENUM ('PENDING', 'ACTIVE', 'DISMISSED', 'ACCEPTED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "MLModelStatus" AS ENUM ('TRAINING', 'ACTIVE', 'DEPRECATED', 'DISABLED');

-- CreateEnum
CREATE TYPE "EmbeddingType" AS ENUM ('PROFILE', 'MESSAGE', 'LISTING', 'INTEREST', 'SKILL');

-- CreateEnum
CREATE TYPE "FeedbackType" AS ENUM ('LIKE', 'DISLIKE', 'HIDE', 'REPORT', 'BOOST');

-- CreateEnum
CREATE TYPE "AnalyticsEventType" AS ENUM ('AUTH', 'MATCHING', 'MESSAGE', 'PAYMENT', 'SUBSCRIPTION', 'PROFILE', 'LISTING', 'MODERATION', 'SYSTEM', 'SECURITY');

-- CreateEnum
CREATE TYPE "AnalyticsAggregationPeriod" AS ENUM ('HOURLY', 'DAILY', 'WEEKLY', 'MONTHLY');

-- CreateEnum
CREATE TYPE "ExperimentAssignmentStatus" AS ENUM ('ACTIVE', 'COMPLETED', 'REMOVED');

-- CreateEnum
CREATE TYPE "MetricSeverity" AS ENUM ('INFO', 'WARNING', 'CRITICAL');

-- CreateEnum
CREATE TYPE "EventStreamType" AS ENUM ('USER', 'SYSTEM', 'PAYMENT', 'FRAUD', 'SEARCH', 'MESSAGING');

-- CreateEnum
CREATE TYPE "ProjectionStatus" AS ENUM ('ACTIVE', 'REBUILDING', 'FAILED');

-- CreateEnum
CREATE TYPE "ArchiveStatus" AS ENUM ('PENDING', 'ARCHIVED', 'RESTORED', 'PURGED');

-- CreateEnum
CREATE TYPE "RecoveryJobStatus" AS ENUM ('PENDING', 'RUNNING', 'COMPLETED', 'FAILED', 'CANCELED');

-- CreateEnum
CREATE TYPE "BackupType" AS ENUM ('FULL', 'INCREMENTAL', 'DIFFERENTIAL');

-- CreateEnum
CREATE TYPE "StorageTier" AS ENUM ('HOT', 'WARM', 'COLD', 'GLACIER');

-- CreateEnum
CREATE TYPE "RecoveryPriority" AS ENUM ('LOW', 'NORMAL', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "DataClassification" AS ENUM ('PUBLIC', 'INTERNAL', 'CONFIDENTIAL', 'RESTRICTED');

-- CreateEnum
CREATE TYPE "DomainEventStatus" AS ENUM ('PENDING', 'PUBLISHED', 'FAILED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "WorkflowExecutionStatus" AS ENUM ('PENDING', 'RUNNING', 'WAITING', 'COMPLETED', 'FAILED', 'CANCELED');

-- CreateEnum
CREATE TYPE "WorkflowStepStatus" AS ENUM ('PENDING', 'RUNNING', 'COMPLETED', 'FAILED', 'SKIPPED');

-- CreateEnum
CREATE TYPE "SagaExecutionStatus" AS ENUM ('STARTED', 'PROCESSING', 'COMPENSATING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "OutboxStatus" AS ENUM ('PENDING', 'DISPATCHED', 'FAILED');

-- CreateEnum
CREATE TYPE "FlagType" AS ENUM ('BOOLEAN', 'STRING', 'NUMBER', 'JSON');

-- CreateEnum
CREATE TYPE "ExperimentStatus" AS ENUM ('DRAFT', 'RUNNING', 'PAUSED', 'COMPLETED', 'ABORTED');

-- CreateEnum
CREATE TYPE "AssignmentStrategy" AS ENUM ('RANDOM', 'USER_ID_HASH', 'GEO', 'DEVICE', 'WEIGHTED');

-- CreateEnum
CREATE TYPE "RiskLevel" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "FraudCaseStatus" AS ENUM ('OPEN', 'INVESTIGATING', 'CONFIRMED', 'FALSE_POSITIVE', 'RESOLVED');

-- CreateEnum
CREATE TYPE "DeviceTrustLevel" AS ENUM ('TRUSTED', 'UNKNOWN', 'SUSPICIOUS', 'BLOCKED');

-- CreateEnum
CREATE TYPE "ReputationStatus" AS ENUM ('GOOD', 'WATCHLIST', 'RESTRICTED', 'BANNED');

-- CreateEnum
CREATE TYPE "AbuseActionType" AS ENUM ('WARNING', 'SHADOW_BAN', 'TEMP_SUSPENSION', 'PERMANENT_BAN', 'RATE_LIMIT', 'CAPTCHA_REQUIRED', 'CONTENT_RESTRICTED');

-- CreateEnum
CREATE TYPE "FingerprintType" AS ENUM ('DEVICE', 'BROWSER', 'NETWORK', 'BEHAVIORAL');

-- CreateEnum
CREATE TYPE "ThreatSignalType" AS ENUM ('VPN', 'TOR', 'PROXY', 'BOT', 'SPAM', 'MULTI_ACCOUNT', 'DEVICE_FARM', 'GEO_ANOMALY', 'IMPOSSIBLE_TRAVEL', 'ACCOUNT_TAKEOVER');

-- CreateEnum
CREATE TYPE "WorkspaceType" AS ENUM ('PERSONAL', 'BUSINESS', 'ENTERPRISE');

-- CreateEnum
CREATE TYPE "WorkspaceStatus" AS ENUM ('ACTIVE', 'SUSPENDED', 'LOCKED', 'DELETED');

-- CreateEnum
CREATE TYPE "WorkspaceGovernanceRole" AS ENUM ('OWNER', 'ADMIN', 'MANAGER', 'MODERATOR', 'BILLING_ADMIN', 'ANALYST', 'MEMBER', 'READONLY');

-- CreateEnum
CREATE TYPE "InvitationStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'EXPIRED', 'REVOKED');

-- CreateEnum
CREATE TYPE "AuditActionSeverity" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "ApiEnvironment" AS ENUM ('SANDBOX', 'PRODUCTION');

-- CreateEnum
CREATE TYPE "FeatureAccessStatus" AS ENUM ('ENABLED', 'DISABLED', 'LIMITED');

-- CreateEnum
CREATE TYPE "PartitionStrategy" AS ENUM ('RANGE', 'HASH', 'LIST');

-- CreateEnum
CREATE TYPE "FeedItemType" AS ENUM ('MATCH', 'MESSAGE', 'LISTING', 'SYSTEM', 'NOTIFICATION', 'RECOMMENDATION');

-- CreateEnum
CREATE TYPE "FeedVisibility" AS ENUM ('PRIVATE', 'CONNECTIONS', 'PUBLIC');

-- CreateEnum
CREATE TYPE "CacheEntryStatus" AS ENUM ('ACTIVE', 'EXPIRED', 'INVALIDATED');

-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('PENDING_VERIFICATION', 'ACTIVE', 'SUSPENDED', 'LOCKED', 'BANNED', 'DELETED');

-- CreateEnum
CREATE TYPE "VerificationLevel" AS ENUM ('NONE', 'EMAIL_VERIFIED', 'PHONE_VERIFIED', 'BASIC_VERIFIED', 'BUSINESS_VERIFIED', 'PREMIUM_TRUSTED');

-- CreateEnum
CREATE TYPE "MFAType" AS ENUM ('EMAIL_OTP', 'SMS_OTP', 'TOTP', 'BACKUP_CODE');

-- CreateEnum
CREATE TYPE "SessionStatus" AS ENUM ('ACTIVE', 'REVOKED', 'EXPIRED', 'COMPROMISED');

-- CreateEnum
CREATE TYPE "AuthEventType" AS ENUM ('LOGIN_SUCCESS', 'LOGIN_FAILED', 'PASSWORD_RESET_REQUESTED', 'PASSWORD_RESET_COMPLETED', 'EMAIL_VERIFIED', 'PHONE_VERIFIED', 'MFA_CHALLENGE_SUCCESS', 'MFA_CHALLENGE_FAILED', 'SESSION_REVOKED', 'DEVICE_BLOCKED', 'ACCOUNT_LOCKED');

-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('REFRESH', 'EMAIL_VERIFICATION', 'PASSWORD_RESET', 'MFA_CHALLENGE', 'ACCOUNT_RECOVERY');

-- CreateEnum
CREATE TYPE "QueueJobStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'RETRYING', 'DEAD_LETTER');

-- CreateEnum
CREATE TYPE "WebhookDeliveryStatus" AS ENUM ('PENDING', 'DELIVERED', 'FAILED', 'RETRYING', 'DISABLED');

-- CreateEnum
CREATE TYPE "BackupStatus" AS ENUM ('RUNNING', 'SUCCESS', 'FAILED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "DeploymentEnvironment" AS ENUM ('DEVELOPMENT', 'STAGING', 'PRODUCTION');

-- CreateEnum
CREATE TYPE "ServiceHealthStatus" AS ENUM ('HEALTHY', 'DEGRADED', 'DOWN');

-- CreateEnum
CREATE TYPE "ApiKeyScope" AS ENUM ('READ', 'WRITE', 'ADMIN', 'BILLING', 'ANALYTICS');

-- CreateEnum
CREATE TYPE "ConsentType" AS ENUM ('TERMS_OF_SERVICE', 'PRIVACY_POLICY', 'MARKETING_EMAIL', 'MARKETING_SMS', 'DATA_PROCESSING', 'COOKIE_CONSENT', 'PROFILING_CONSENT', 'AI_PROCESSING', 'THIRD_PARTY_SHARING');

-- CreateEnum
CREATE TYPE "ConsentStatus" AS ENUM ('GRANTED', 'REVOKED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "DataRequestType" AS ENUM ('ACCESS', 'EXPORT', 'RECTIFICATION', 'DELETION', 'RESTRICTION', 'OBJECTION', 'PORTABILITY');

-- CreateEnum
CREATE TYPE "DataRequestStatus" AS ENUM ('PENDING', 'VERIFIED', 'PROCESSING', 'COMPLETED', 'REJECTED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "LegalHoldStatus" AS ENUM ('ACTIVE', 'RELEASED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "BreachSeverity" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "BreachStatus" AS ENUM ('DETECTED', 'INVESTIGATING', 'REPORTED', 'RESOLVED');

-- CreateEnum
CREATE TYPE "ComplianceRegion" AS ENUM ('GDPR', 'CCPA', 'PH_DPA', 'SOC2', 'ISO27001');

-- CreateEnum
CREATE TYPE "SwipeDecision" AS ENUM ('PASS', 'LIKE', 'SUPER_LIKE', 'PRIORITY_INTEREST');

-- CreateEnum
CREATE TYPE "RecommendationSource" AS ENUM ('ML_MODEL', 'RULE_ENGINE', 'TRENDING', 'GEO_PROXIMITY', 'MANUAL_PROMOTION', 'COLLAB_FILTERING', 'COLD_START');

-- CreateEnum
CREATE TYPE "FeedGenerationStatus" AS ENUM ('PENDING', 'READY', 'FAILED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "MatchInteractionType" AS ENUM ('PROFILE_VIEW', 'MESSAGE_SENT', 'MESSAGE_REPLY', 'CALL_STARTED', 'CALL_COMPLETED', 'BOOKMARKED', 'APPLICATION_STARTED', 'APPLICATION_SUBMITTED');

-- CreateEnum
CREATE TYPE "ConversationType" AS ENUM ('DIRECT_MATCH', 'GROUP', 'SYSTEM', 'SUPPORT');

-- CreateEnum
CREATE TYPE "ConversationStatus" AS ENUM ('ACTIVE', 'ARCHIVED', 'LOCKED', 'DELETED');

-- CreateEnum
CREATE TYPE "ParticipantRole" AS ENUM ('MEMBER', 'ADMIN', 'MODERATOR', 'OWNER');

-- CreateEnum
CREATE TYPE "MessageStatus" AS ENUM ('PENDING', 'SENT', 'DELIVERED', 'READ', 'FAILED', 'DELETED');

-- CreateEnum
CREATE TYPE "PresenceStatus" AS ENUM ('ONLINE', 'AWAY', 'DO_NOT_DISTURB', 'OFFLINE');

-- CreateEnum
CREATE TYPE "AttachmentScanStatus" AS ENUM ('PENDING', 'CLEAN', 'INFECTED', 'BLOCKED');

-- CreateEnum
CREATE TYPE "RealtimeConnectionStatus" AS ENUM ('CONNECTED', 'DISCONNECTED', 'TERMINATED');

-- CreateEnum
CREATE TYPE "LogSeverity" AS ENUM ('DEBUG', 'INFO', 'WARN', 'ERROR', 'CRITICAL');

-- CreateEnum
CREATE TYPE "TraceSpanType" AS ENUM ('HTTP', 'DB', 'CACHE', 'QUEUE', 'AUTH', 'INTERNAL', 'EXTERNAL_API');

-- CreateEnum
CREATE TYPE "IncidentSeverity" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "ForensicEventType" AS ENUM ('USER_ACTION', 'SYSTEM_EVENT', 'SECURITY_EVENT', 'FRAUD_EVENT', 'PAYMENT_EVENT');

-- CreateEnum
CREATE TYPE "BillingProvider" AS ENUM ('STRIPE', 'PAYPAL', 'XENDIT', 'PAYMONGO', 'ADYEN', 'GCASH', 'MAYA', 'PESONET', 'INSTAPAY', 'BANK_TRANSFER', 'WISE', 'MANUAL');

-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('DRAFT', 'OPEN', 'PAID', 'VOID', 'UNCOLLECTIBLE', 'REFUNDED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PROCESSING', 'SUCCEEDED', 'FAILED', 'REFUNDED', 'CHARGEBACK');

-- CreateEnum
CREATE TYPE "PaymentMethodType" AS ENUM ('CARD', 'BANK_TRANSFER', 'GCASH', 'MAYA', 'PESONET', 'INSTAPAY', 'EWALLET', 'PAYPAL', 'APPLE_PAY', 'GOOGLE_PAY');

-- CreateEnum
CREATE TYPE "RefundStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'PROCESSED');

-- CreateEnum
CREATE TYPE "BillingCycle" AS ENUM ('MONTHLY', 'QUARTERLY', 'YEARLY');

-- CreateEnum
CREATE TYPE "TaxType" AS ENUM ('VAT', 'SALES_TAX', 'WITHHOLDING');

-- CreateEnum
CREATE TYPE "PayoutStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'REVERSED', 'CANCELED');

-- CreateEnum
CREATE TYPE "PersonaType" AS ENUM ('INDIVIDUAL', 'BUSINESS', 'AGENCY', 'RECRUITER', 'CREATOR', 'FREELANCER');

-- CreateEnum
CREATE TYPE "PersonaStatus" AS ENUM ('DRAFT', 'ACTIVE', 'PAUSED', 'BANNED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "MarketplaceMode" AS ENUM ('WORK', 'HIRE', 'SELL', 'BUY');

-- CreateEnum
CREATE TYPE "VerificationBadge" AS ENUM ('NONE', 'VERIFIED', 'PREMIUM', 'ENTERPRISE', 'GOVERNMENT_VERIFIED');

-- CreateEnum
CREATE TYPE "AvailabilityStatus" AS ENUM ('AVAILABLE', 'LIMITED', 'UNAVAILABLE');

-- CreateEnum
CREATE TYPE "VisibilityLevel" AS ENUM ('PUBLIC', 'PLATFORM_ONLY', 'PRIVATE');

-- CreateEnum
CREATE TYPE "ListingType" AS ENUM ('SERVICE', 'JOB', 'PRODUCT', 'PROJECT', 'PARTNERSHIP');

-- CreateEnum
CREATE TYPE "ListingStatus" AS ENUM ('DRAFT', 'ACTIVE', 'PAUSED', 'FILLED', 'EXPIRED', 'REMOVED');

-- CreateEnum
CREATE TYPE "SearchEntityType" AS ENUM ('USER', 'PROFILE', 'MESSAGE', 'POST', 'MATCH', 'GROUP', 'EVENT', 'CONTENT');

-- CreateEnum
CREATE TYPE "SearchIndexType" AS ENUM ('PRIMARY', 'SECONDARY', 'VECTOR', 'GEO', 'FULLTEXT');

-- CreateEnum
CREATE TYPE "RankingStrategy" AS ENUM ('RELEVANCE', 'PERSONALIZED', 'POPULARITY', 'RECENCY', 'TRUST_WEIGHTED', 'HYBRID');

-- CreateEnum
CREATE TYPE "SearchEventType" AS ENUM ('QUERY', 'CLICK', 'IMPRESSION', 'CONVERSION', 'IGNORE');

-- CreateEnum
CREATE TYPE "SecurityEventType" AS ENUM ('LOGIN_SUCCESS', 'LOGIN_FAILED', 'MFA_CHALLENGE', 'MFA_SUCCESS', 'MFA_FAILED', 'PASSWORD_CHANGED', 'EMAIL_CHANGED', 'DEVICE_VERIFIED', 'ACCOUNT_LOCKED', 'ACCOUNT_UNLOCKED', 'TOKEN_REVOKED', 'API_ABUSE', 'RATE_LIMIT_TRIGGERED', 'SUSPICIOUS_ACTIVITY', 'IMPOSSIBLE_TRAVEL', 'DATA_EXPORT', 'DATA_DELETION', 'PRIVACY_REQUEST');

-- CreateEnum
CREATE TYPE "PrivacyRequestType" AS ENUM ('ACCESS', 'EXPORT', 'DELETE', 'RECTIFICATION', 'RESTRICT_PROCESSING');

-- CreateEnum
CREATE TYPE "PrivacyRequestStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'REJECTED');

-- CreateEnum
CREATE TYPE "ModerationCaseStatus" AS ENUM ('OPEN', 'INVESTIGATING', 'ACTIONED', 'CLOSED');

-- CreateEnum
CREATE TYPE "ModerationActionType" AS ENUM ('WARNING', 'TEMP_SUSPENSION', 'PERMANENT_BAN', 'CONTENT_REMOVAL', 'SHADOW_BAN', 'RESTRICTION');

-- CreateEnum
CREATE TYPE "MembershipStatus" AS ENUM ('INVITED', 'ACTIVE', 'SUSPENDED', 'REMOVED');

-- CreateEnum
CREATE TYPE "WorkspaceRole" AS ENUM ('OWNER', 'ADMIN', 'MODERATOR', 'RECRUITER', 'MEMBER', 'VIEWER');

-- CreateEnum
CREATE TYPE "PermissionEffect" AS ENUM ('ALLOW', 'DENY');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ApplicationStatus" ADD VALUE 'REVIEWING';
ALTER TYPE "ApplicationStatus" ADD VALUE 'SHORTLISTED';
ALTER TYPE "ApplicationStatus" ADD VALUE 'WITHDRAWN';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "MatchStatus" ADD VALUE 'MUTED';
ALTER TYPE "MatchStatus" ADD VALUE 'ARCHIVED';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "MessageType" ADD VALUE 'VIDEO';
ALTER TYPE "MessageType" ADD VALUE 'AUDIO';
ALTER TYPE "MessageType" ADD VALUE 'SYSTEM';
ALTER TYPE "MessageType" ADD VALUE 'EVENT';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "SubscriptionStatus" ADD VALUE 'TRIALING';
ALTER TYPE "SubscriptionStatus" ADD VALUE 'SUSPENDED';

-- DropForeignKey
ALTER TABLE "BusinessProfile" DROP CONSTRAINT "BusinessProfile_userId_fkey";

-- DropForeignKey
ALTER TABLE "BusinessService" DROP CONSTRAINT "BusinessService_businessId_fkey";

-- DropForeignKey
ALTER TABLE "BusinessService" DROP CONSTRAINT "BusinessService_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Conversation" DROP CONSTRAINT "Conversation_matchId_fkey";

-- DropForeignKey
ALTER TABLE "DeviceSession" DROP CONSTRAINT "DeviceSession_refreshTokenId_fkey";

-- DropForeignKey
ALTER TABLE "DeviceSession" DROP CONSTRAINT "DeviceSession_userId_fkey";

-- DropForeignKey
ALTER TABLE "EmailVerificationToken" DROP CONSTRAINT "EmailVerificationToken_userId_fkey";

-- DropForeignKey
ALTER TABLE "Listing" DROP CONSTRAINT "Listing_businessId_fkey";

-- DropForeignKey
ALTER TABLE "ListingApplication" DROP CONSTRAINT "ListingApplication_applicantId_fkey";

-- DropForeignKey
ALTER TABLE "ListingApplication" DROP CONSTRAINT "ListingApplication_listingId_fkey";

-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_userOneId_fkey";

-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_userTwoId_fkey";

-- DropForeignKey
ALTER TABLE "Media" DROP CONSTRAINT "Media_userId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_conversationId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_senderId_fkey";

-- DropForeignKey
ALTER TABLE "MessageAttachment" DROP CONSTRAINT "MessageAttachment_messageId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_userId_fkey";

-- DropForeignKey
ALTER TABLE "PasswordResetToken" DROP CONSTRAINT "PasswordResetToken_userId_fkey";

-- DropForeignKey
ALTER TABLE "PersonalProfile" DROP CONSTRAINT "PersonalProfile_userId_fkey";

-- DropForeignKey
ALTER TABLE "RefreshToken" DROP CONSTRAINT "RefreshToken_userId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_reportedUserId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_reporterId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_reviewedById_fkey";

-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_userId_fkey";

-- DropForeignKey
ALTER TABLE "Swipe" DROP CONSTRAINT "Swipe_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "Swipe" DROP CONSTRAINT "Swipe_senderId_fkey";

-- DropForeignKey
ALTER TABLE "UserBlock" DROP CONSTRAINT "UserBlock_blockedId_fkey";

-- DropForeignKey
ALTER TABLE "UserBlock" DROP CONSTRAINT "UserBlock_blockerId_fkey";

-- DropForeignKey
ALTER TABLE "UserInterest" DROP CONSTRAINT "UserInterest_interestId_fkey";

-- DropForeignKey
ALTER TABLE "UserInterest" DROP CONSTRAINT "UserInterest_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserSettings" DROP CONSTRAINT "UserSettings_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserSkill" DROP CONSTRAINT "UserSkill_skillId_fkey";

-- DropForeignKey
ALTER TABLE "UserSkill" DROP CONSTRAINT "UserSkill_userId_fkey";

-- DropIndex
DROP INDEX "Listing_businessId_idx";

-- DropIndex
DROP INDEX "Listing_category_idx";

-- DropIndex
DROP INDEX "ListingApplication_listingId_applicantId_key";

-- DropIndex
DROP INDEX "Match_status_createdAt_idx";

-- DropIndex
DROP INDEX "Match_userOneId_idx";

-- DropIndex
DROP INDEX "Match_userOneId_userTwoId_key";

-- DropIndex
DROP INDEX "Match_userTwoId_idx";

-- DropIndex
DROP INDEX "Message_conversationId_createdAt_idx";

-- DropIndex
DROP INDEX "Message_conversationId_seenAt_idx";

-- DropIndex
DROP INDEX "Message_senderId_idx";

-- DropIndex
DROP INDEX "RefreshToken_revokedAt_idx";

-- DropIndex
DROP INDEX "RefreshToken_token_key";

-- DropIndex
DROP INDEX "User_currentMode_idx";

-- DropIndex
DROP INDEX "User_currentMode_isActive_idx";

-- DropIndex
DROP INDEX "User_email_idx";

-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_isOnline_idx";

-- DropIndex
DROP INDEX "User_lastSeenAt_idx";

-- DropIndex
DROP INDEX "User_username_idx";

-- AlterTable
ALTER TABLE "AuditLog" DROP COLUMN "metadata",
ADD COLUMN     "afterState" JSONB,
ADD COLUMN     "beforeState" JSONB,
ADD COLUMN     "correlationId" TEXT,
ADD COLUMN     "requestId" TEXT;

-- AlterTable
ALTER TABLE "Conversation" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "encryptionVersion" TEXT,
ADD COLUMN     "lastMessageId" TEXT,
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "status" "ConversationStatus" NOT NULL DEFAULT 'ACTIVE',
ADD COLUMN     "title" TEXT,
ADD COLUMN     "totalMessages" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "type" "ConversationType" NOT NULL DEFAULT 'DIRECT_MATCH',
ALTER COLUMN "matchId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "businessId",
DROP COLUMN "isActive",
DROP COLUMN "location",
DROP COLUMN "price",
ADD COLUMN     "availableFrom" TIMESTAMP(3),
ADD COLUMN     "availableUntil" TIMESTAMP(3),
ADD COLUMN     "currency" TEXT,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "personaId" TEXT NOT NULL,
ADD COLUMN     "priceMax" DECIMAL(12,2),
ADD COLUMN     "priceMin" DECIMAL(12,2),
ADD COLUMN     "searchVector" tsvector,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "status" "ListingStatus" NOT NULL DEFAULT 'DRAFT',
ADD COLUMN     "summary" TEXT,
ADD COLUMN     "totalApplications" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalBookmarks" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalViews" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "type" "ListingType" NOT NULL,
ADD COLUMN     "visibility" "VisibilityLevel" NOT NULL DEFAULT 'PUBLIC',
ADD COLUMN     "workspaceId" TEXT NOT NULL,
ALTER COLUMN "category" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ListingApplication" DROP COLUMN "applicantId",
ADD COLUMN     "applicantPersonaId" TEXT NOT NULL,
ADD COLUMN     "coverLetter" TEXT,
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "proposedRate" DECIMAL(12,2),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Match" DROP COLUMN "userOneId",
DROP COLUMN "userTwoId",
ADD COLUMN     "createdBySwipeId" TEXT,
ADD COLUMN     "lastInteractionAt" TIMESTAMP(3),
ADD COLUMN     "matchScoreId" TEXT,
ADD COLUMN     "matchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "personaAId" TEXT NOT NULL,
ADD COLUMN     "personaBId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "content",
DROP COLUMN "seenAt",
DROP COLUMN "senderId",
ADD COLUMN     "deliveredAt" TIMESTAMP(3),
ADD COLUMN     "editedAt" TIMESTAMP(3),
ADD COLUMN     "encryptedPayload" BYTEA,
ADD COLUMN     "expiresAt" TIMESTAMP(3),
ADD COLUMN     "isEdited" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "moderationStatus" TEXT,
ADD COLUMN     "plainTextPreview" TEXT,
ADD COLUMN     "readAt" TIMESTAMP(3),
ADD COLUMN     "replyToMessageId" TEXT,
ADD COLUMN     "senderPersonaId" TEXT,
ADD COLUMN     "status" "MessageStatus" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "MessageAttachment" DROP COLUMN "size",
DROP COLUMN "url",
ADD COLUMN     "checksum" TEXT NOT NULL,
ADD COLUMN     "durationSeconds" INTEGER,
ADD COLUMN     "fileSize" INTEGER NOT NULL,
ADD COLUMN     "height" INTEGER,
ADD COLUMN     "malwareScanStatus" "AttachmentScanStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "moderationStatus" TEXT,
ADD COLUMN     "originalFileName" TEXT,
ADD COLUMN     "storageKey" TEXT NOT NULL,
ADD COLUMN     "width" INTEGER,
ALTER COLUMN "mimeType" SET NOT NULL;

-- AlterTable
ALTER TABLE "RefreshToken" DROP COLUMN "token",
DROP COLUMN "updatedAt",
ADD COLUMN     "replacedByTokenId" TEXT,
ADD COLUMN     "sessionId" TEXT NOT NULL,
ADD COLUMN     "tokenFamily" TEXT NOT NULL,
ADD COLUMN     "tokenHash" TEXT NOT NULL,
ADD COLUMN     "tokenVersion" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "category" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "birthDate",
DROP COLUMN "currentMode",
DROP COLUMN "email",
DROP COLUMN "fullname",
DROP COLUMN "isActive",
DROP COLUMN "isBanned",
DROP COLUMN "isOnline",
DROP COLUMN "isVerified",
DROP COLUMN "lastSeenAt",
DROP COLUMN "otpExpiresAt",
DROP COLUMN "otpHash",
DROP COLUMN "profileCompleted",
DROP COLUMN "role",
ADD COLUMN     "accountStatus" "AccountStatus" NOT NULL DEFAULT 'PENDING_VERIFICATION',
ADD COLUMN     "anonymizedAt" TIMESTAMP(3),
ADD COLUMN     "emailVerifiedAt" TIMESTAMP(3),
ADD COLUMN     "failedLoginAttempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "lastPasswordChangeAt" TIMESTAMP(3),
ADD COLUMN     "lockedUntil" TIMESTAMP(3),
ADD COLUMN     "normalizedEmail" TEXT NOT NULL,
ADD COLUMN     "normalizedPhoneNumber" TEXT,
ADD COLUMN     "passwordVersion" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "phoneVerifiedAt" TIMESTAMP(3),
ADD COLUMN     "primaryEmail" TEXT NOT NULL,
ADD COLUMN     "trustScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "verificationLevel" "VerificationLevel" NOT NULL DEFAULT 'NONE',
ALTER COLUMN "username" DROP NOT NULL;

-- DropTable
DROP TABLE "BusinessProfile";

-- DropTable
DROP TABLE "BusinessService";

-- DropTable
DROP TABLE "DeviceSession";

-- DropTable
DROP TABLE "EmailVerificationToken";

-- DropTable
DROP TABLE "Media";

-- DropTable
DROP TABLE "Notification";

-- DropTable
DROP TABLE "OtpVerification";

-- DropTable
DROP TABLE "PasswordResetToken";

-- DropTable
DROP TABLE "PersonalProfile";

-- DropTable
DROP TABLE "Report";

-- DropTable
DROP TABLE "Service";

-- DropTable
DROP TABLE "Subscription";

-- DropTable
DROP TABLE "Swipe";

-- DropTable
DROP TABLE "UserBlock";

-- DropTable
DROP TABLE "UserInterest";

-- DropTable
DROP TABLE "UserSettings";

-- DropTable
DROP TABLE "UserSkill";

-- DropEnum
DROP TYPE "AccountType";

-- DropEnum
DROP TYPE "MediaType";

-- DropEnum
DROP TYPE "NotificationType";

-- DropEnum
DROP TYPE "ReportStatus";

-- DropEnum
DROP TYPE "SubscriptionProvider";

-- DropEnum
DROP TYPE "SwipeType";

-- DropEnum
DROP TYPE "UserRole";

-- CreateTable
CREATE TABLE "RecommendationCandidate" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "targetPersonaId" TEXT,
    "targetListingId" TEXT,
    "targetBusinessId" TEXT,
    "recommendationType" "RecommendationType" NOT NULL,
    "recommendationStatus" "RecommendationStatus" NOT NULL DEFAULT 'PENDING',
    "rankingScore" DOUBLE PRECISION NOT NULL,
    "compatibilityScore" DOUBLE PRECISION,
    "relevanceScore" DOUBLE PRECISION,
    "diversityScore" DOUBLE PRECISION,
    "freshnessScore" DOUBLE PRECISION,
    "generatedByModelVersion" TEXT,
    "explanationPayload" JSONB,
    "expiresAt" TIMESTAMP(3),
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "RecommendationCandidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecommendationFeedback" (
    "id" TEXT NOT NULL,
    "recommendationCandidateId" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "feedbackType" "FeedbackType" NOT NULL,
    "feedbackScore" DOUBLE PRECISION,
    "feedbackReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "RecommendationFeedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmbeddingVector" (
    "id" TEXT NOT NULL,
    "embeddingType" "EmbeddingType" NOT NULL,
    "entityId" TEXT NOT NULL,
    "modelVersion" TEXT NOT NULL,
    "vectorDimensions" INTEGER NOT NULL,
    "vectorProvider" TEXT NOT NULL,
    "vectorStorageKey" TEXT NOT NULL,
    "checksum" TEXT,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "EmbeddingVector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MatchScore" (
    "id" TEXT NOT NULL,
    "personaAId" TEXT NOT NULL,
    "personaBId" TEXT NOT NULL,
    "compatibilityScore" DOUBLE PRECISION NOT NULL,
    "communicationScore" DOUBLE PRECISION,
    "intentScore" DOUBLE PRECISION,
    "trustScore" DOUBLE PRECISION,
    "activityScore" DOUBLE PRECISION,
    "behavioralScore" DOUBLE PRECISION,
    "modelVersion" TEXT NOT NULL,
    "scoredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "MatchScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SearchDocument" (
    "id" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "searchableText" TEXT NOT NULL,
    "language" TEXT,
    "searchTokens" JSONB,
    "rankingSignals" JSONB,
    "visibilityRules" JSONB,
    "indexedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SearchDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MLModelRegistry" (
    "id" TEXT NOT NULL,
    "modelKey" TEXT NOT NULL,
    "modelName" TEXT NOT NULL,
    "modelType" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "status" "MLModelStatus" NOT NULL DEFAULT 'TRAINING',
    "accuracyMetric" DOUBLE PRECISION,
    "precisionMetric" DOUBLE PRECISION,
    "recallMetric" DOUBLE PRECISION,
    "deployedAt" TIMESTAMP(3),
    "deprecatedAt" TIMESTAMP(3),
    "trainingDatasetVersion" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MLModelRegistry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiModerationSignal" (
    "id" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "modelVersion" TEXT NOT NULL,
    "toxicityScore" DOUBLE PRECISION,
    "spamScore" DOUBLE PRECISION,
    "fraudScore" DOUBLE PRECISION,
    "nsfwScore" DOUBLE PRECISION,
    "violenceScore" DOUBLE PRECISION,
    "confidenceScore" DOUBLE PRECISION,
    "moderationDecision" TEXT,
    "reviewedByHuman" BOOLEAN NOT NULL DEFAULT false,
    "reviewedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "AiModerationSignal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonalizationProfile" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "affinityScores" JSONB,
    "interactionPatterns" JSONB,
    "activityWindows" JSONB,
    "communicationPreferences" JSONB,
    "behavioralTraits" JSONB,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PersonalizationProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnalyticsEvent" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT,
    "userId" TEXT,
    "personaId" TEXT,
    "eventType" "AnalyticsEventType" NOT NULL,
    "eventName" TEXT NOT NULL,
    "eventVersion" TEXT,
    "sessionId" TEXT,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "country" TEXT,
    "region" TEXT,
    "city" TEXT,
    "sourcePlatform" TEXT,
    "correlationId" TEXT,
    "properties" JSONB,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalyticsEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnalyticsSession" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "personaId" TEXT,
    "sessionKey" TEXT NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "deviceType" TEXT,
    "browser" TEXT,
    "operatingSystem" TEXT,
    "country" TEXT,
    "region" TEXT,
    "city" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3),
    "durationSeconds" INTEGER,
    "bounce" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB,

    CONSTRAINT "AnalyticsSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeatureFlag" (
    "id" TEXT NOT NULL,
    "flagKey" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "rolloutPercentage" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "targetingRules" JSONB,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeatureFlag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeatureFlagAssignment" (
    "id" TEXT NOT NULL,
    "featureFlagId" TEXT NOT NULL,
    "userId" TEXT,
    "workspaceId" TEXT,
    "personaId" TEXT,
    "assignedVariant" TEXT,
    "status" "ExperimentAssignmentStatus" NOT NULL DEFAULT 'ACTIVE',
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "FeatureFlagAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductMetricSnapshot" (
    "id" TEXT NOT NULL,
    "metricKey" TEXT NOT NULL,
    "aggregationPeriod" "AnalyticsAggregationPeriod" NOT NULL,
    "metricDate" TIMESTAMP(3) NOT NULL,
    "metricValue" DOUBLE PRECISION NOT NULL,
    "dimensions" JSONB,
    "metadata" JSONB,
    "calculatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductMetricSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SearchAnalytics" (
    "id" TEXT NOT NULL,
    "personaId" TEXT,
    "searchQuery" TEXT NOT NULL,
    "filtersPayload" JSONB,
    "resultCount" INTEGER,
    "clickedResultId" TEXT,
    "searchDurationMs" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SearchAnalytics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SystemMetric" (
    "id" TEXT NOT NULL,
    "metricKey" TEXT NOT NULL,
    "metricValue" DOUBLE PRECISION NOT NULL,
    "severity" "MetricSeverity" NOT NULL DEFAULT 'INFO',
    "sourceService" TEXT,
    "sourceRegion" TEXT,
    "metadata" JSONB,
    "measuredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SystemMetric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ErrorLog" (
    "id" TEXT NOT NULL,
    "serviceName" TEXT NOT NULL,
    "environment" TEXT NOT NULL,
    "errorType" TEXT NOT NULL,
    "errorMessage" TEXT NOT NULL,
    "stackTrace" TEXT,
    "requestId" TEXT,
    "correlationId" TEXT,
    "endpoint" TEXT,
    "httpMethod" TEXT,
    "responseStatus" INTEGER,
    "userId" TEXT,
    "workspaceId" TEXT,
    "metadata" JSONB,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ErrorLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditExportJob" (
    "id" TEXT NOT NULL,
    "requestedByUserId" TEXT NOT NULL,
    "exportType" TEXT NOT NULL,
    "exportLocation" TEXT,
    "exportFormat" TEXT,
    "status" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "failedAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditExportJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventStream" (
    "id" TEXT NOT NULL,
    "streamType" "EventStreamType" NOT NULL,
    "aggregateId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "payload" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventStream_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventSnapshot" (
    "id" TEXT NOT NULL,
    "aggregateId" TEXT NOT NULL,
    "streamType" "EventStreamType" NOT NULL,
    "snapshot" JSONB NOT NULL,
    "version" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CQRSProjection" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sourceStream" "EventStreamType" NOT NULL,
    "status" "ProjectionStatus" NOT NULL DEFAULT 'ACTIVE',
    "lastProcessedVersion" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CQRSProjection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnalyticsFactTable" (
    "id" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "userId" TEXT,
    "dimensions" JSONB NOT NULL,
    "measures" JSONB NOT NULL,
    "eventTime" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalyticsFactTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataPipelineJob" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "inputSource" TEXT NOT NULL,
    "outputTarget" TEXT NOT NULL,
    "lastRunAt" TIMESTAMP(3),
    "nextRunAt" TIMESTAMP(3),
    "config" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DataPipelineJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArchiveRecord" (
    "id" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "archiveStatus" "ArchiveStatus" NOT NULL DEFAULT 'PENDING',
    "dataClassification" "DataClassification" NOT NULL DEFAULT 'CONFIDENTIAL',
    "archiveReason" TEXT,
    "archivedPayload" JSONB NOT NULL,
    "archiveChecksum" TEXT,
    "storageTier" "StorageTier" NOT NULL DEFAULT 'COLD',
    "storageLocation" TEXT NOT NULL,
    "retentionUntil" TIMESTAMP(3),
    "archivedAt" TIMESTAMP(3),
    "restoredAt" TIMESTAMP(3),
    "purgedAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ArchiveRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatabaseBackup" (
    "id" TEXT NOT NULL,
    "backupKey" TEXT NOT NULL,
    "backupType" "BackupType" NOT NULL,
    "environment" "DeploymentEnvironment" NOT NULL,
    "storageTier" "StorageTier" NOT NULL DEFAULT 'GLACIER',
    "encrypted" BOOLEAN NOT NULL DEFAULT true,
    "encryptionVersion" TEXT,
    "storageProvider" TEXT NOT NULL,
    "storageLocation" TEXT NOT NULL,
    "checksum" TEXT,
    "fileSizeBytes" BIGINT,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DatabaseBackup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecoveryJob" (
    "id" TEXT NOT NULL,
    "databaseBackupId" TEXT NOT NULL,
    "requestedByUserId" TEXT,
    "status" "RecoveryJobStatus" NOT NULL DEFAULT 'PENDING',
    "priority" "RecoveryPriority" NOT NULL DEFAULT 'NORMAL',
    "targetEnvironment" "DeploymentEnvironment" NOT NULL,
    "restorePoint" TIMESTAMP(3),
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "failedAt" TIMESTAMP(3),
    "failureReason" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RecoveryJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RetentionExecution" (
    "id" TEXT NOT NULL,
    "retentionPolicyId" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "processedRecords" INTEGER NOT NULL DEFAULT 0,
    "archivedRecords" INTEGER NOT NULL DEFAULT 0,
    "purgedRecords" INTEGER NOT NULL DEFAULT 0,
    "failedRecords" INTEGER NOT NULL DEFAULT 0,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "failureReason" TEXT,
    "metadata" JSONB,

    CONSTRAINT "RetentionExecution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CrossRegionReplication" (
    "id" TEXT NOT NULL,
    "sourceRegion" TEXT NOT NULL,
    "targetRegion" TEXT NOT NULL,
    "replicationLagMs" INTEGER,
    "replicationHealthy" BOOLEAN NOT NULL DEFAULT true,
    "lastSyncedAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CrossRegionReplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessContinuityPlan" (
    "id" TEXT NOT NULL,
    "planKey" TEXT NOT NULL,
    "planName" TEXT NOT NULL,
    "description" TEXT,
    "rtoMinutes" INTEGER NOT NULL,
    "rpoMinutes" INTEGER NOT NULL,
    "escalationMatrix" JSONB,
    "communicationPlan" JSONB,
    "recoveryProcedures" JSONB,
    "testFrequencyDays" INTEGER,
    "lastTestedAt" TIMESTAMP(3),
    "nextTestAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BusinessContinuityPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisasterRecoveryTest" (
    "id" TEXT NOT NULL,
    "businessContinuityPlanId" TEXT NOT NULL,
    "executedByUserId" TEXT,
    "testScenario" TEXT NOT NULL,
    "success" BOOLEAN NOT NULL DEFAULT true,
    "findings" TEXT,
    "remediationItems" JSONB,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DisasterRecoveryTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FailoverEvent" (
    "id" TEXT NOT NULL,
    "sourceRegion" TEXT NOT NULL,
    "targetRegion" TEXT NOT NULL,
    "triggerReason" TEXT NOT NULL,
    "initiatedBy" TEXT,
    "successful" BOOLEAN NOT NULL DEFAULT true,
    "downtimeSeconds" INTEGER,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FailoverEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComplianceEvidenceVault" (
    "id" TEXT NOT NULL,
    "evidenceKey" TEXT NOT NULL,
    "evidenceType" TEXT NOT NULL,
    "storageLocation" TEXT NOT NULL,
    "checksum" TEXT NOT NULL,
    "collectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),
    "legalHold" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ComplianceEvidenceVault_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DomainEvent" (
    "id" TEXT NOT NULL,
    "aggregateType" TEXT NOT NULL,
    "aggregateId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "eventVersion" TEXT NOT NULL,
    "eventStatus" "DomainEventStatus" NOT NULL DEFAULT 'PENDING',
    "correlationId" TEXT,
    "causationId" TEXT,
    "actorUserId" TEXT,
    "workspaceId" TEXT,
    "payload" JSONB NOT NULL,
    "metadata" JSONB,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publishedAt" TIMESTAMP(3),
    "archivedAt" TIMESTAMP(3),

    CONSTRAINT "DomainEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventOutbox" (
    "id" TEXT NOT NULL,
    "domainEventId" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "status" "OutboxStatus" NOT NULL DEFAULT 'PENDING',
    "retryCount" INTEGER NOT NULL DEFAULT 0,
    "nextRetryAt" TIMESTAMP(3),
    "dispatchedAt" TIMESTAMP(3),
    "failedAt" TIMESTAMP(3),
    "lastError" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkflowDefinition" (
    "id" TEXT NOT NULL,
    "workflowKey" TEXT NOT NULL,
    "workflowName" TEXT NOT NULL,
    "workflowVersion" TEXT NOT NULL,
    "description" TEXT,
    "definitionPayload" JSONB NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkflowDefinition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkflowExecution" (
    "id" TEXT NOT NULL,
    "workflowDefinitionId" TEXT NOT NULL,
    "status" "WorkflowExecutionStatus" NOT NULL DEFAULT 'PENDING',
    "startedByUserId" TEXT,
    "workspaceId" TEXT,
    "correlationId" TEXT,
    "inputPayload" JSONB,
    "outputPayload" JSONB,
    "failureReason" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "canceledAt" TIMESTAMP(3),
    "metadata" JSONB,

    CONSTRAINT "WorkflowExecution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkflowStepExecution" (
    "id" TEXT NOT NULL,
    "workflowExecutionId" TEXT NOT NULL,
    "stepKey" TEXT NOT NULL,
    "stepName" TEXT NOT NULL,
    "status" "WorkflowStepStatus" NOT NULL DEFAULT 'PENDING',
    "sequenceNumber" INTEGER NOT NULL,
    "inputPayload" JSONB,
    "outputPayload" JSONB,
    "failureReason" TEXT,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "metadata" JSONB,

    CONSTRAINT "WorkflowStepExecution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SagaExecution" (
    "id" TEXT NOT NULL,
    "sagaKey" TEXT NOT NULL,
    "status" "SagaExecutionStatus" NOT NULL DEFAULT 'STARTED',
    "correlationId" TEXT NOT NULL,
    "aggregateType" TEXT,
    "aggregateId" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "failedAt" TIMESTAMP(3),
    "compensationStartedAt" TIMESTAMP(3),
    "failureReason" TEXT,
    "metadata" JSONB,

    CONSTRAINT "SagaExecution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SagaStepExecution" (
    "id" TEXT NOT NULL,
    "sagaExecutionId" TEXT NOT NULL,
    "stepKey" TEXT NOT NULL,
    "actionType" TEXT NOT NULL,
    "sequenceNumber" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "compensated" BOOLEAN NOT NULL DEFAULT false,
    "completedAt" TIMESTAMP(3),
    "compensatedAt" TIMESTAMP(3),
    "payload" JSONB,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SagaStepExecution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommandExecution" (
    "id" TEXT NOT NULL,
    "commandType" TEXT NOT NULL,
    "aggregateType" TEXT,
    "aggregateId" TEXT,
    "issuedByUserId" TEXT,
    "correlationId" TEXT,
    "commandPayload" JSONB NOT NULL,
    "resultPayload" JSONB,
    "success" BOOLEAN NOT NULL DEFAULT true,
    "failureReason" TEXT,
    "executedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "CommandExecution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AggregateSnapshot" (
    "id" TEXT NOT NULL,
    "aggregateType" TEXT NOT NULL,
    "aggregateId" TEXT NOT NULL,
    "aggregateVersion" INTEGER NOT NULL,
    "snapshotPayload" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AggregateSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IdempotencyKey" (
    "id" TEXT NOT NULL,
    "idempotencyKey" TEXT NOT NULL,
    "requestHash" TEXT NOT NULL,
    "responseHash" TEXT,
    "endpoint" TEXT NOT NULL,
    "userId" TEXT,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IdempotencyKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlagAssignment" (
    "id" TEXT NOT NULL,
    "flagId" TEXT NOT NULL,
    "userId" TEXT,
    "value" JSONB NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FlagAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experiment" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" "ExperimentStatus" NOT NULL DEFAULT 'DRAFT',
    "strategy" "AssignmentStrategy" NOT NULL,
    "startAt" TIMESTAMP(3),
    "endAt" TIMESTAMP(3),
    "primaryMetric" TEXT NOT NULL,
    "config" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Experiment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExperimentVariant" (
    "id" TEXT NOT NULL,
    "experimentId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
    "config" JSONB,

    CONSTRAINT "ExperimentVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExperimentAssignment" (
    "id" TEXT NOT NULL,
    "experimentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "variantId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "ExperimentAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExperimentMetricEvent" (
    "id" TEXT NOT NULL,
    "experimentId" TEXT NOT NULL,
    "userId" TEXT,
    "variantId" TEXT,
    "metricName" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExperimentMetricEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeviceFingerprint" (
    "id" TEXT NOT NULL,
    "fingerprintHash" TEXT NOT NULL,
    "fingerprintType" "FingerprintType" NOT NULL,
    "deviceTrustLevel" "DeviceTrustLevel" NOT NULL DEFAULT 'UNKNOWN',
    "operatingSystem" TEXT,
    "browser" TEXT,
    "browserVersion" TEXT,
    "deviceModel" TEXT,
    "screenResolution" TEXT,
    "language" TEXT,
    "timezone" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DeviceFingerprint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDeviceFingerprint" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "deviceFingerprintId" TEXT NOT NULL,
    "firstSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "trusted" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB,

    CONSTRAINT "UserDeviceFingerprint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserReputation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "reputationScore" DOUBLE PRECISION NOT NULL DEFAULT 100,
    "trustScore" DOUBLE PRECISION NOT NULL DEFAULT 100,
    "fraudScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "spamScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "abuseReportsCount" INTEGER NOT NULL DEFAULT 0,
    "confirmedViolations" INTEGER NOT NULL DEFAULT 0,
    "successfulMatches" INTEGER NOT NULL DEFAULT 0,
    "failedPayments" INTEGER NOT NULL DEFAULT 0,
    "reputationStatus" "ReputationStatus" NOT NULL DEFAULT 'GOOD',
    "lastCalculatedAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserReputation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ThreatSignal" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "deviceFingerprintId" TEXT,
    "signalType" "ThreatSignalType" NOT NULL,
    "riskLevel" "RiskLevel" NOT NULL DEFAULT 'MEDIUM',
    "confidenceScore" DOUBLE PRECISION,
    "ipAddress" TEXT,
    "country" TEXT,
    "city" TEXT,
    "autonomousSystemNumber" TEXT,
    "provider" TEXT,
    "detectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),
    "metadata" JSONB,

    CONSTRAINT "ThreatSignal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FraudInvestigationCase" (
    "id" TEXT NOT NULL,
    "caseReference" TEXT NOT NULL,
    "userId" TEXT,
    "assignedModeratorId" TEXT,
    "status" "FraudCaseStatus" NOT NULL DEFAULT 'OPEN',
    "riskLevel" "RiskLevel" NOT NULL DEFAULT 'MEDIUM',
    "detectionSource" TEXT,
    "incidentSummary" TEXT,
    "evidencePayload" JSONB,
    "internalNotes" JSONB,
    "openedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),
    "metadata" JSONB,

    CONSTRAINT "FraudInvestigationCase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AbuseEnforcementAction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fraudInvestigationCaseId" TEXT,
    "actionType" "AbuseActionType" NOT NULL,
    "reason" TEXT,
    "automated" BOOLEAN NOT NULL DEFAULT false,
    "expiresAt" TIMESTAMP(3),
    "liftedAt" TIMESTAMP(3),
    "createdByUserId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AbuseEnforcementAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkedAccountCluster" (
    "id" TEXT NOT NULL,
    "clusterKey" TEXT NOT NULL,
    "riskLevel" "RiskLevel" NOT NULL DEFAULT 'MEDIUM',
    "detectionReason" TEXT,
    "confidenceScore" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "LinkedAccountCluster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkedAccount" (
    "id" TEXT NOT NULL,
    "linkedAccountClusterId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "linkageReason" TEXT,
    "confidenceScore" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LinkedAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserVelocityMetric" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "metricKey" TEXT NOT NULL,
    "metricValue" DOUBLE PRECISION NOT NULL,
    "aggregationWindow" TEXT NOT NULL,
    "calculatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "UserVelocityMetric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShadowBan" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "reason" TEXT,
    "hiddenFromDiscovery" BOOLEAN NOT NULL DEFAULT true,
    "hiddenFromMessaging" BOOLEAN NOT NULL DEFAULT false,
    "hiddenFromRecommendations" BOOLEAN NOT NULL DEFAULT true,
    "imposedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),
    "liftedAt" TIMESTAMP(3),
    "metadata" JSONB,

    CONSTRAINT "ShadowBan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RiskScoreHistory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "previousRiskScore" DOUBLE PRECISION,
    "newRiskScore" DOUBLE PRECISION NOT NULL,
    "riskFactors" JSONB,
    "calculatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "RiskScoreHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workspace" (
    "id" TEXT NOT NULL,
    "workspaceKey" TEXT NOT NULL,
    "type" "WorkspaceType" NOT NULL DEFAULT 'BUSINESS',
    "status" "WorkspaceStatus" NOT NULL DEFAULT 'ACTIVE',
    "displayName" TEXT NOT NULL,
    "legalBusinessName" TEXT,
    "slug" TEXT NOT NULL,
    "primaryEmail" TEXT,
    "primaryPhone" TEXT,
    "websiteUrl" TEXT,
    "taxId" TEXT,
    "registrationNumber" TEXT,
    "country" TEXT,
    "timezone" TEXT,
    "logoAssetId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Workspace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkspaceMember" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "WorkspaceGovernanceRole" NOT NULL DEFAULT 'MEMBER',
    "invitedByUserId" TEXT,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "removedAt" TIMESTAMP(3),
    "metadata" JSONB,

    CONSTRAINT "WorkspaceMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkspaceInvitation" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "invitedEmail" TEXT NOT NULL,
    "invitedRole" "WorkspaceGovernanceRole" NOT NULL,
    "invitationTokenHash" TEXT NOT NULL,
    "status" "InvitationStatus" NOT NULL DEFAULT 'PENDING',
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "acceptedAt" TIMESTAMP(3),
    "revokedAt" TIMESTAMP(3),
    "invitedByUserId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorkspaceInvitation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkspaceFeatureEntitlement" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "featureKey" TEXT NOT NULL,
    "status" "FeatureAccessStatus" NOT NULL DEFAULT 'ENABLED',
    "usageLimit" INTEGER,
    "currentUsage" INTEGER NOT NULL DEFAULT 0,
    "resetAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorkspaceFeatureEntitlement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkspaceApiKey" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "environment" "ApiEnvironment" NOT NULL DEFAULT 'PRODUCTION',
    "keyPrefix" TEXT NOT NULL,
    "keyHash" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "scopes" TEXT[],
    "allowedIps" TEXT[],
    "lastUsedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "revokedAt" TIMESTAMP(3),
    "createdByUserId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorkspaceApiKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkspaceAuditLog" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "actorUserId" TEXT,
    "action" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT,
    "severity" "AuditActionSeverity" NOT NULL DEFAULT 'LOW',
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "metadata" JSONB,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorkspaceAuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComplianceDocument" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "documentType" TEXT NOT NULL,
    "documentVersion" TEXT NOT NULL,
    "documentStorageKey" TEXT NOT NULL,
    "checksum" TEXT,
    "uploadedByUserId" TEXT,
    "effectiveAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ComplianceDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartitionRegistry" (
    "id" TEXT NOT NULL,
    "tableName" TEXT NOT NULL,
    "partitionName" TEXT NOT NULL,
    "strategy" "PartitionStrategy" NOT NULL,
    "partitionKey" TEXT NOT NULL,
    "boundaryStart" TIMESTAMP(3),
    "boundaryEnd" TIMESTAMP(3),
    "shardIdentifier" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PartitionRegistry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DistributedCounter" (
    "id" TEXT NOT NULL,
    "counterKey" TEXT NOT NULL,
    "counterValue" BIGINT NOT NULL DEFAULT 0,
    "lastAggregatedAt" TIMESTAMP(3),
    "metadata" JSONB,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DistributedCounter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityFeedItem" (
    "id" TEXT NOT NULL,
    "ownerUserId" TEXT NOT NULL,
    "actorUserId" TEXT,
    "itemType" "FeedItemType" NOT NULL,
    "visibility" "FeedVisibility" NOT NULL DEFAULT 'PRIVATE',
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "rankingScore" DOUBLE PRECISION,
    "payload" JSONB,
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ActivityFeedItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CacheEntry" (
    "id" TEXT NOT NULL,
    "cacheKey" TEXT NOT NULL,
    "cacheNamespace" TEXT NOT NULL,
    "cacheStatus" "CacheEntryStatus" NOT NULL DEFAULT 'ACTIVE',
    "payload" JSONB NOT NULL,
    "ttlSeconds" INTEGER NOT NULL,
    "invalidatedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CacheEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RateLimitBucket" (
    "id" TEXT NOT NULL,
    "bucketKey" TEXT NOT NULL,
    "requestCount" INTEGER NOT NULL DEFAULT 0,
    "windowStartedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RateLimitBucket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RealtimeConnection" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "connectionId" TEXT NOT NULL,
    "region" TEXT,
    "nodeIdentifier" TEXT,
    "ipAddress" TEXT,
    "connectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "disconnectedAt" TIMESTAMP(3),
    "lastHeartbeatAt" TIMESTAMP(3),
    "metadata" JSONB,

    CONSTRAINT "RealtimeConnection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RealtimeSubscription" (
    "id" TEXT NOT NULL,
    "realtimeConnectionId" TEXT NOT NULL,
    "channelName" TEXT NOT NULL,
    "subscribedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "RealtimeSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageDeliveryQueue" (
    "id" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "recipientUserId" TEXT NOT NULL,
    "deliveryRegion" TEXT,
    "delivered" BOOLEAN NOT NULL DEFAULT false,
    "deliveredAt" TIMESTAMP(3),
    "failedAt" TIMESTAMP(3),
    "retryCount" INTEGER NOT NULL DEFAULT 0,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MessageDeliveryQueue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SearchQueryCache" (
    "id" TEXT NOT NULL,
    "queryHash" TEXT NOT NULL,
    "queryText" TEXT NOT NULL,
    "filtersHash" TEXT,
    "resultPayload" JSONB NOT NULL,
    "hitCount" INTEGER NOT NULL DEFAULT 0,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SearchQueryCache_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ThroughputMetric" (
    "id" TEXT NOT NULL,
    "metricKey" TEXT NOT NULL,
    "metricValue" DOUBLE PRECISION NOT NULL,
    "sourceRegion" TEXT,
    "aggregationWindow" TEXT NOT NULL,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "ThroughputMetric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fingerprintHash" TEXT NOT NULL,
    "hardwareHash" TEXT,
    "deviceName" TEXT,
    "deviceType" TEXT,
    "osName" TEXT,
    "osVersion" TEXT,
    "browserName" TEXT,
    "browserVersion" TEXT,
    "trustLevel" "DeviceTrustLevel" NOT NULL DEFAULT 'UNKNOWN',
    "isEmulator" BOOLEAN NOT NULL DEFAULT false,
    "isRooted" BOOLEAN NOT NULL DEFAULT false,
    "isJailbroken" BOOLEAN NOT NULL DEFAULT false,
    "firstSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "status" "SessionStatus" NOT NULL DEFAULT 'ACTIVE',
    "ipAddress" TEXT NOT NULL,
    "geoCountry" TEXT,
    "geoRegion" TEXT,
    "geoCity" TEXT,
    "userAgent" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUsedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailVerification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "verifiedAt" TIMESTAMP(3),
    "attemptCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "requestIp" TEXT,

    CONSTRAINT "EmailVerification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhoneVerification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "otpHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "verifiedAt" TIMESTAMP(3),
    "attemptCount" INTEGER NOT NULL DEFAULT 0,
    "requestIp" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PhoneVerification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OTPChallenge" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "challengeType" "MFAType" NOT NULL,
    "target" TEXT NOT NULL,
    "otpHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "consumedAt" TIMESTAMP(3),
    "failedAttempts" INTEGER NOT NULL DEFAULT 0,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "riskLevel" "RiskLevel" NOT NULL DEFAULT 'LOW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OTPChallenge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MFAMethod" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "MFAType" NOT NULL,
    "secretHash" TEXT,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "isEnabled" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MFAMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BackupCode" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "codeHash" TEXT NOT NULL,
    "consumedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BackupCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PasswordHistory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PasswordHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountRecoveryRequest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "recoveryTokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),
    "failedAttempts" INTEGER NOT NULL DEFAULT 0,
    "requestIp" TEXT,
    "requestUserAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AccountRecoveryRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthEvent" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "eventType" "AuthEventType" NOT NULL,
    "success" BOOLEAN NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "geoCountry" TEXT,
    "geoRegion" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuthEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SecurityEvent" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "deviceId" TEXT,
    "eventName" TEXT NOT NULL,
    "riskLevel" "RiskLevel" NOT NULL,
    "ipAddress" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "workspaceId" TEXT,

    CONSTRAINT "SecurityEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRiskSignal" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "signalType" TEXT NOT NULL,
    "severity" "RiskLevel" NOT NULL,
    "confidenceScore" DOUBLE PRECISION NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "UserRiskSignal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserConsent" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "policyVersion" TEXT NOT NULL,
    "consentType" TEXT NOT NULL,
    "granted" BOOLEAN NOT NULL,
    "grantedAt" TIMESTAMP(3),
    "revokedAt" TIMESTAMP(3),
    "ipAddress" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserConsent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QueueJob" (
    "id" TEXT NOT NULL,
    "queueName" TEXT NOT NULL,
    "jobType" TEXT NOT NULL,
    "status" "QueueJobStatus" NOT NULL DEFAULT 'PENDING',
    "priority" INTEGER NOT NULL DEFAULT 0,
    "payload" JSONB NOT NULL,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "maxAttempts" INTEGER NOT NULL DEFAULT 5,
    "availableAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lockedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "failedAt" TIMESTAMP(3),
    "deadLetteredAt" TIMESTAMP(3),
    "lastError" TEXT,
    "correlationId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QueueJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScheduledJob" (
    "id" TEXT NOT NULL,
    "jobKey" TEXT NOT NULL,
    "cronExpression" TEXT NOT NULL,
    "jobType" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "lastRunAt" TIMESTAMP(3),
    "nextRunAt" TIMESTAMP(3),
    "lastSuccessAt" TIMESTAMP(3),
    "lastFailureAt" TIMESTAMP(3),
    "lastError" TEXT,
    "payload" JSONB,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ScheduledJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebhookEndpoint" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "endpointUrl" TEXT NOT NULL,
    "signingSecretHash" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "subscribedEvents" JSONB NOT NULL,
    "retryPolicy" JSONB,
    "lastDeliveredAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WebhookEndpoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebhookDelivery" (
    "id" TEXT NOT NULL,
    "webhookEndpointId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "responseStatus" INTEGER,
    "responseBody" TEXT,
    "deliveryStatus" "WebhookDeliveryStatus" NOT NULL DEFAULT 'PENDING',
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "deliveredAt" TIMESTAMP(3),
    "failedAt" TIMESTAMP(3),
    "nextRetryAt" TIMESTAMP(3),
    "lastError" TEXT,
    "requestSignature" TEXT,
    "correlationId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WebhookDelivery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BackupSnapshot" (
    "id" TEXT NOT NULL,
    "snapshotKey" TEXT NOT NULL,
    "environment" "DeploymentEnvironment" NOT NULL,
    "backupStatus" "BackupStatus" NOT NULL,
    "storageProvider" TEXT NOT NULL,
    "storageLocation" TEXT NOT NULL,
    "fileSizeBytes" BIGINT,
    "checksum" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "encryptionVersion" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BackupSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchemaMigrationAudit" (
    "id" TEXT NOT NULL,
    "migrationName" TEXT NOT NULL,
    "executedBy" TEXT,
    "environment" "DeploymentEnvironment" NOT NULL,
    "executionTimeMs" INTEGER,
    "success" BOOLEAN NOT NULL DEFAULT true,
    "rollbackSupported" BOOLEAN NOT NULL DEFAULT false,
    "checksum" TEXT,
    "metadata" JSONB,
    "executedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SchemaMigrationAudit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceRegistry" (
    "id" TEXT NOT NULL,
    "serviceName" TEXT NOT NULL,
    "environment" "DeploymentEnvironment" NOT NULL,
    "currentVersion" TEXT NOT NULL,
    "healthStatus" "ServiceHealthStatus" NOT NULL DEFAULT 'HEALTHY',
    "deployedAt" TIMESTAMP(3),
    "lastHeartbeatAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceRegistry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceHealthCheck" (
    "id" TEXT NOT NULL,
    "serviceRegistryId" TEXT NOT NULL,
    "cpuUsagePercent" DOUBLE PRECISION,
    "memoryUsagePercent" DOUBLE PRECISION,
    "diskUsagePercent" DOUBLE PRECISION,
    "requestLatencyMs" DOUBLE PRECISION,
    "errorRate" DOUBLE PRECISION,
    "activeConnections" INTEGER,
    "metadata" JSONB,
    "checkedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ServiceHealthCheck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApiKey" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "keyPrefix" TEXT NOT NULL,
    "keyHash" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "scopes" "ApiKeyScope"[],
    "lastUsedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "revokedAt" TIMESTAMP(3),
    "createdByUserId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ApiKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaAsset" (
    "id" TEXT NOT NULL,
    "storageKey" TEXT NOT NULL,
    "bucketName" TEXT NOT NULL,
    "cdnUrl" TEXT,
    "mimeType" TEXT NOT NULL,
    "fileSizeBytes" BIGINT NOT NULL,
    "checksum" TEXT NOT NULL,
    "encryptionKeyVersion" TEXT,
    "uploadedByUserId" TEXT,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "archivedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "metadata" JSONB,

    CONSTRAINT "MediaAsset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserConsentRecord" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "consentType" "ConsentType" NOT NULL,
    "consentStatus" "ConsentStatus" NOT NULL DEFAULT 'GRANTED',
    "policyVersion" TEXT NOT NULL,
    "acceptedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revokedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "consentEvidence" JSONB,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserConsentRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrivacyPolicyVersion" (
    "id" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "contentStorageKey" TEXT NOT NULL,
    "checksum" TEXT,
    "effectiveAt" TIMESTAMP(3) NOT NULL,
    "deprecatedAt" TIMESTAMP(3),
    "createdByUserId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PrivacyPolicyVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TermsOfServiceVersion" (
    "id" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "contentStorageKey" TEXT NOT NULL,
    "checksum" TEXT,
    "effectiveAt" TIMESTAMP(3) NOT NULL,
    "deprecatedAt" TIMESTAMP(3),
    "createdByUserId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TermsOfServiceVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataSubjectRequest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "requestType" "DataRequestType" NOT NULL,
    "status" "DataRequestStatus" NOT NULL DEFAULT 'PENDING',
    "requestReason" TEXT,
    "verificationTokenHash" TEXT,
    "verifiedAt" TIMESTAMP(3),
    "processedAt" TIMESTAMP(3),
    "rejectedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "exportLocation" TEXT,
    "processorNotes" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DataSubjectRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDataExport" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "exportFormat" TEXT NOT NULL,
    "exportLocation" TEXT NOT NULL,
    "checksum" TEXT,
    "encrypted" BOOLEAN NOT NULL DEFAULT true,
    "encryptionVersion" TEXT,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "downloadedAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserDataExport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LegalHold" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT,
    "userId" TEXT,
    "status" "LegalHoldStatus" NOT NULL DEFAULT 'ACTIVE',
    "legalCaseReference" TEXT,
    "reason" TEXT NOT NULL,
    "imposedBy" TEXT,
    "imposedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "releasedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "metadata" JSONB,

    CONSTRAINT "LegalHold_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SecurityBreachIncident" (
    "id" TEXT NOT NULL,
    "incidentKey" TEXT NOT NULL,
    "severity" "BreachSeverity" NOT NULL,
    "status" "BreachStatus" NOT NULL DEFAULT 'DETECTED',
    "affectedRegion" "ComplianceRegion",
    "detectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reportedAt" TIMESTAMP(3),
    "resolvedAt" TIMESTAMP(3),
    "affectedUsersCount" INTEGER,
    "rootCause" TEXT,
    "remediationActions" JSONB,
    "evidenceLocation" TEXT,
    "regulatorNotified" BOOLEAN NOT NULL DEFAULT false,
    "customerNotified" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SecurityBreachIncident_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LawEnforcementRequest" (
    "id" TEXT NOT NULL,
    "requestReference" TEXT NOT NULL,
    "requestingAgency" TEXT NOT NULL,
    "jurisdiction" TEXT,
    "legalBasis" TEXT,
    "requestedData" JSONB,
    "affectedUserId" TEXT,
    "receivedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "processedAt" TIMESTAMP(3),
    "rejectedAt" TIMESTAMP(3),
    "fulfilledAt" TIMESTAMP(3),
    "processorNotes" TEXT,
    "metadata" JSONB,

    CONSTRAINT "LawEnforcementRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataRetentionPolicy" (
    "id" TEXT NOT NULL,
    "policyKey" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "retentionDays" INTEGER NOT NULL,
    "archiveAfterDays" INTEGER,
    "purgeAfterDays" INTEGER,
    "legalBasis" TEXT,
    "region" "ComplianceRegion",
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DataRetentionPolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComplianceAudit" (
    "id" TEXT NOT NULL,
    "auditKey" TEXT NOT NULL,
    "framework" "ComplianceRegion" NOT NULL,
    "auditor" TEXT,
    "auditPeriodStart" TIMESTAMP(3),
    "auditPeriodEnd" TIMESTAMP(3),
    "findings" JSONB,
    "remediationPlan" JSONB,
    "passed" BOOLEAN,
    "completedAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ComplianceAudit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CookieConsentRecord" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "anonymousId" TEXT,
    "consentPayload" JSONB NOT NULL,
    "consentVersion" TEXT NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "grantedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revokedAt" TIMESTAMP(3),
    "metadata" JSONB,

    CONSTRAINT "CookieConsentRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeedGenerationJob" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "algorithmVersion" TEXT NOT NULL,
    "status" "FeedGenerationStatus" NOT NULL DEFAULT 'PENDING',
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "failureReason" TEXT,
    "candidateCount" INTEGER NOT NULL DEFAULT 0,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FeedGenerationJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeedSnapshot" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "generationJobId" TEXT,
    "algorithmVersion" TEXT NOT NULL,
    "source" "RecommendationSource" NOT NULL,
    "rankingScore" DOUBLE PRECISION NOT NULL,
    "recommendationReason" TEXT,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FeedSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeedCard" (
    "id" TEXT NOT NULL,
    "feedSnapshotId" TEXT NOT NULL,
    "sourcePersonaId" TEXT NOT NULL,
    "targetPersonaId" TEXT NOT NULL,
    "rankPosition" INTEGER NOT NULL,
    "recommendationSource" "RecommendationSource" NOT NULL,
    "totalScore" DOUBLE PRECISION NOT NULL,
    "skillScore" DOUBLE PRECISION,
    "intentScore" DOUBLE PRECISION,
    "availabilityScore" DOUBLE PRECISION,
    "behaviorScore" DOUBLE PRECISION,
    "proximityScore" DOUBLE PRECISION,
    "trustScore" DOUBLE PRECISION,
    "explanationPayload" JSONB,
    "wasViewed" BOOLEAN NOT NULL DEFAULT false,
    "viewedAt" TIMESTAMP(3),
    "wasExpanded" BOOLEAN NOT NULL DEFAULT false,
    "expandedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FeedCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SwipeEvent" (
    "id" TEXT NOT NULL,
    "sourcePersonaId" TEXT NOT NULL,
    "targetPersonaId" TEXT NOT NULL,
    "feedCardId" TEXT,
    "decision" "SwipeDecision" NOT NULL,
    "interactionDurationMs" INTEGER,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SwipeEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MatchInteraction" (
    "id" TEXT NOT NULL,
    "matchId" TEXT NOT NULL,
    "actorPersonaId" TEXT NOT NULL,
    "interactionType" "MatchInteractionType" NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MatchInteraction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecommendationExperiment" (
    "id" TEXT NOT NULL,
    "experimentKey" TEXT NOT NULL,
    "algorithmVersion" TEXT NOT NULL,
    "description" TEXT,
    "trafficPercentage" DOUBLE PRECISION NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "startedAt" TIMESTAMP(3),
    "endedAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RecommendationExperiment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonaEmbedding" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "embeddingVersion" TEXT NOT NULL,
    "embeddingVector" BYTEA NOT NULL,
    "dimensions" INTEGER NOT NULL,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "PersonaEmbedding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscoveryAnalytics" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "impressions" INTEGER NOT NULL DEFAULT 0,
    "profileViews" INTEGER NOT NULL DEFAULT 0,
    "likesReceived" INTEGER NOT NULL DEFAULT 0,
    "passesReceived" INTEGER NOT NULL DEFAULT 0,
    "matchConversions" INTEGER NOT NULL DEFAULT 0,
    "responseRate" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "calculatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "DiscoveryAnalytics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConversationParticipant" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "role" "ParticipantRole" NOT NULL DEFAULT 'MEMBER',
    "unreadCount" INTEGER NOT NULL DEFAULT 0,
    "lastReadMessageId" TEXT,
    "lastReadAt" TIMESTAMP(3),
    "notificationsMuted" BOOLEAN NOT NULL DEFAULT false,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "ConversationParticipant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageReceipt" (
    "id" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "deliveredAt" TIMESTAMP(3),
    "seenAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MessageReceipt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageReaction" (
    "id" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MessageReaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageModerationEvent" (
    "id" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "moderationAction" TEXT,
    "confidenceScore" DOUBLE PRECISION,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MessageModerationEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Presence" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "status" "PresenceStatus" NOT NULL DEFAULT 'OFFLINE',
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isTyping" BOOLEAN NOT NULL DEFAULT false,
    "activeConversationId" TEXT,
    "metadata" JSONB,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Presence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypingIndicator" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypingIndicator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebSocketConnection" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT,
    "personaId" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "connectionId" TEXT NOT NULL,
    "status" "RealtimeConnectionStatus" NOT NULL DEFAULT 'CONNECTED',
    "serverRegion" TEXT,
    "serverNode" TEXT,
    "connectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "disconnectedAt" TIMESTAMP(3),
    "lastHeartbeatAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "WebSocketConnection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PushNotificationDevice" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "deviceTokenHash" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "appVersion" TEXT,
    "locale" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastUsedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "PushNotificationDevice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationQueue" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "notificationType" TEXT NOT NULL,
    "title" TEXT,
    "body" TEXT,
    "payload" JSONB,
    "deliveryStatus" TEXT,
    "scheduledFor" TIMESTAMP(3),
    "deliveredAt" TIMESTAMP(3),
    "failedAt" TIMESTAMP(3),
    "retryCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NotificationQueue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DistributedTrace" (
    "id" TEXT NOT NULL,
    "traceId" TEXT NOT NULL,
    "userId" TEXT,
    "rootSpanId" TEXT,
    "latencyMs" INTEGER NOT NULL,
    "success" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DistributedTrace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TraceSpan" (
    "id" TEXT NOT NULL,
    "traceId" TEXT NOT NULL,
    "parentSpanId" TEXT,
    "spanType" "TraceSpanType" NOT NULL,
    "operationName" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3),
    "durationMs" INTEGER,
    "metadata" JSONB,

    CONSTRAINT "TraceSpan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogEvent" (
    "id" TEXT NOT NULL,
    "serviceName" TEXT NOT NULL,
    "severity" "LogSeverity" NOT NULL,
    "message" TEXT NOT NULL,
    "userId" TEXT,
    "traceId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LogEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IncidentReport" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "severity" "IncidentSeverity" NOT NULL,
    "isResolved" BOOLEAN NOT NULL DEFAULT false,
    "assignedTo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "IncidentReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ForensicEvent" (
    "id" TEXT NOT NULL,
    "eventType" "ForensicEventType" NOT NULL,
    "userId" TEXT,
    "traceId" TEXT,
    "payload" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "incidentReportId" TEXT,

    CONSTRAINT "ForensicEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillingCustomer" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "provider" "BillingProvider" NOT NULL,
    "providerCustomerId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "billingName" TEXT,
    "country" TEXT,
    "taxId" TEXT,
    "isTaxExempt" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BillingCustomer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentMethod" (
    "id" TEXT NOT NULL,
    "billingCustomerId" TEXT NOT NULL,
    "type" "PaymentMethodType" NOT NULL,
    "provider" "BillingProvider" NOT NULL,
    "providerPaymentMethodId" TEXT NOT NULL,
    "brand" TEXT,
    "last4" TEXT,
    "expiryMonth" INTEGER,
    "expiryYear" INTEGER,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "fingerprint" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PaymentMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubscriptionPlan" (
    "id" TEXT NOT NULL,
    "planKey" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "billingCycle" "BillingCycle" NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "currency" TEXT NOT NULL,
    "trialDays" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "featureFlags" JSONB,
    "limitsPayload" JSONB,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubscriptionPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillingSubscription" (
    "id" TEXT NOT NULL,
    "billingCustomerId" TEXT NOT NULL,
    "subscriptionPlanId" TEXT NOT NULL,
    "provider" "BillingProvider" NOT NULL,
    "providerSubscriptionId" TEXT NOT NULL,
    "status" "SubscriptionStatus" NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "currentPeriodStart" TIMESTAMP(3) NOT NULL,
    "currentPeriodEnd" TIMESTAMP(3) NOT NULL,
    "canceledAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "autoRenew" BOOLEAN NOT NULL DEFAULT true,
    "seats" INTEGER NOT NULL DEFAULT 1,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BillingSubscription_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "BillingSubscription"
ALTER COLUMN "status"
SET DEFAULT 'TRIALING';

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "billingCustomerId" TEXT NOT NULL,
    "billingSubscriptionId" TEXT,
    "invoiceNumber" TEXT NOT NULL,
    "status" "InvoiceStatus" NOT NULL DEFAULT 'DRAFT',
    "currency" TEXT NOT NULL,
    "subtotalAmount" DECIMAL(12,2) NOT NULL,
    "taxAmount" DECIMAL(12,2) NOT NULL,
    "totalAmount" DECIMAL(12,2) NOT NULL,
    "issuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueAt" TIMESTAMP(3),
    "paidAt" TIMESTAMP(3),
    "voidedAt" TIMESTAMP(3),
    "refundedAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvoiceLineItem" (
    "id" TEXT NOT NULL,
    "invoiceId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "unitPrice" DECIMAL(12,2) NOT NULL,
    "totalAmount" DECIMAL(12,2) NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InvoiceLineItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvoiceTax" (
    "id" TEXT NOT NULL,
    "invoiceId" TEXT NOT NULL,
    "taxType" "TaxType" NOT NULL,
    "taxRate" DECIMAL(5,2) NOT NULL,
    "taxAmount" DECIMAL(12,2) NOT NULL,
    "jurisdiction" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InvoiceTax_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "invoiceId" TEXT NOT NULL,
    "paymentMethodId" TEXT,
    "provider" "BillingProvider" NOT NULL,
    "providerPaymentId" TEXT NOT NULL,
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "amount" DECIMAL(12,2) NOT NULL,
    "currency" TEXT NOT NULL,
    "processedAt" TIMESTAMP(3),
    "failedAt" TIMESTAMP(3),
    "refundedAt" TIMESTAMP(3),
    "failureReason" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankAccount" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "accountName" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "accountNumberEncrypted" TEXT NOT NULL,
    "accountNumberLast4" TEXT NOT NULL,
    "routingNumberEncrypted" TEXT,
    "swiftCode" TEXT,
    "iban" TEXT,
    "country" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "verificationMethod" TEXT,
    "verifiedAt" TIMESTAMP(3),
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BankAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WalletAccount" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "provider" "PaymentMethodType" NOT NULL,
    "mobileNumberEncrypted" TEXT NOT NULL,
    "mobileNumberLast4" TEXT NOT NULL,
    "accountName" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "verifiedAt" TIMESTAMP(3),
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WalletAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payout" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "bankAccountId" TEXT,
    "walletAccountId" TEXT,
    "provider" "BillingProvider" NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "currency" TEXT NOT NULL,
    "status" "PayoutStatus" NOT NULL DEFAULT 'PENDING',
    "externalReferenceId" TEXT,
    "description" TEXT,
    "processedAt" TIMESTAMP(3),
    "failedAt" TIMESTAMP(3),
    "failureReason" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinancialRiskEvent" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT,
    "paymentId" TEXT,
    "payoutId" TEXT,
    "riskType" TEXT NOT NULL,
    "riskScore" DOUBLE PRECISION NOT NULL,
    "investigationStatus" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FinancialRiskEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Refund" (
    "id" TEXT NOT NULL,
    "paymentId" TEXT NOT NULL,
    "providerRefundId" TEXT,
    "status" "RefundStatus" NOT NULL DEFAULT 'PENDING',
    "amount" DECIMAL(12,2) NOT NULL,
    "currency" TEXT NOT NULL,
    "reason" TEXT,
    "processedAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Refund_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillingWebhookEvent" (
    "id" TEXT NOT NULL,
    "provider" "BillingProvider" NOT NULL,
    "eventId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "processed" BOOLEAN NOT NULL DEFAULT false,
    "processedAt" TIMESTAMP(3),
    "failedAt" TIMESTAMP(3),
    "failureReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BillingWebhookEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Persona" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "type" "PersonaType" NOT NULL,
    "status" "PersonaStatus" NOT NULL DEFAULT 'DRAFT',
    "displayName" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "headline" TEXT,
    "bio" TEXT,
    "marketplaceMode" "MarketplaceMode" NOT NULL,
    "trustScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "verificationBadge" "VerificationBadge" NOT NULL DEFAULT 'NONE',
    "verifiedAt" TIMESTAMP(3),
    "visibility" "VisibilityLevel" NOT NULL DEFAULT 'PUBLIC',
    "isDiscoverable" BOOLEAN NOT NULL DEFAULT true,
    "availabilityStatus" "AvailabilityStatus" NOT NULL DEFAULT 'AVAILABLE',
    "responseRate" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "responseTimeMinutes" INTEGER,
    "totalMatches" INTEGER NOT NULL DEFAULT 0,
    "totalProjects" INTEGER NOT NULL DEFAULT 0,
    "totalReviews" INTEGER NOT NULL DEFAULT 0,
    "averageRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "searchVector" tsvector,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Persona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonaProfile" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "yearsExperience" INTEGER,
    "hourlyRateMin" DECIMAL(12,2),
    "hourlyRateMax" DECIMAL(12,2),
    "currency" TEXT,
    "education" JSONB,
    "certifications" JSONB,
    "portfolioUrl" TEXT,
    "linkedinUrl" TEXT,
    "githubUrl" TEXT,
    "websiteUrl" TEXT,
    "country" TEXT,
    "region" TEXT,
    "city" TEXT,
    "timezone" TEXT,
    "remoteOnly" BOOLEAN NOT NULL DEFAULT false,
    "willingToRelocate" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PersonaProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonaSkill" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,
    "proficiency" INTEGER,
    "yearsExperience" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PersonaSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonaInterest" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "interestId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PersonaInterest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonaIntent" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "intentKey" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PersonaIntent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonaMedia" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "storageKey" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "checksum" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "altText" TEXT,
    "moderationStatus" TEXT,
    "malwareScanStatus" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PersonaMedia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonaBookmark" (
    "id" TEXT NOT NULL,
    "sourcePersonaId" TEXT NOT NULL,
    "targetPersonaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PersonaBookmark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListingBookmark" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ListingBookmark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonaReview" (
    "id" TEXT NOT NULL,
    "authorPersonaId" TEXT NOT NULL,
    "targetPersonaId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "title" TEXT,
    "reviewText" TEXT,
    "isVerifiedInteraction" BOOLEAN NOT NULL DEFAULT false,
    "moderationStatus" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PersonaReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonaBlock" (
    "id" TEXT NOT NULL,
    "blockerPersonaId" TEXT NOT NULL,
    "blockedPersonaId" TEXT NOT NULL,
    "reason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PersonaBlock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonaReport" (
    "id" TEXT NOT NULL,
    "reporterPersonaId" TEXT NOT NULL,
    "targetPersonaId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT,
    "evidencePayload" JSONB,
    "moderationStatus" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PersonaReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SearchIndexShard" (
    "id" TEXT NOT NULL,
    "indexType" "SearchIndexType" NOT NULL,
    "shardKey" TEXT NOT NULL,
    "nodeId" TEXT NOT NULL,
    "documentCount" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SearchIndexShard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SearchQueryLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "query" TEXT NOT NULL,
    "normalizedQuery" TEXT NOT NULL,
    "filters" JSONB,
    "resultCount" INTEGER NOT NULL,
    "latencyMs" INTEGER NOT NULL,
    "rankingStrategy" "RankingStrategy" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SearchQueryLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SearchEvent" (
    "id" TEXT NOT NULL,
    "queryId" TEXT,
    "userId" TEXT,
    "entityType" "SearchEntityType",
    "entityId" TEXT,
    "eventType" "SearchEventType" NOT NULL,
    "position" INTEGER,
    "weight" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SearchEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonalizedSearchProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "interestVector" vector,
    "negativeSignals" JSONB,
    "boostFactors" JSONB,
    "lastUpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PersonalizedSearchProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SearchRankingModel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "strategy" "RankingStrategy" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "weights" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SearchRankingModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrustedDevice" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "deviceFingerprint" TEXT NOT NULL,
    "deviceName" TEXT,
    "operatingSystem" TEXT,
    "browser" TEXT,
    "trustLevel" "DeviceTrustLevel" NOT NULL DEFAULT 'UNKNOWN',
    "lastIpAddress" TEXT,
    "firstSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revokedAt" TIMESTAMP(3),
    "metadata" JSONB,

    CONSTRAINT "TrustedDevice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrivacyRequest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "requestType" "PrivacyRequestType" NOT NULL,
    "status" "PrivacyRequestStatus" NOT NULL DEFAULT 'PENDING',
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "processedAt" TIMESTAMP(3),
    "rejectedAt" TIMESTAMP(3),
    "rejectionReason" TEXT,
    "verificationTokenHash" TEXT,
    "exportLocation" TEXT,
    "metadata" JSONB,

    CONSTRAINT "PrivacyRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModerationCase" (
    "id" TEXT NOT NULL,
    "targetPersonaId" TEXT,
    "targetMessageId" TEXT,
    "targetWorkspaceId" TEXT,
    "reportedByPersonaId" TEXT,
    "status" "ModerationCaseStatus" NOT NULL DEFAULT 'OPEN',
    "severity" "RiskLevel" NOT NULL DEFAULT 'MEDIUM',
    "category" TEXT NOT NULL,
    "description" TEXT,
    "assignedModeratorId" TEXT,
    "resolutionSummary" TEXT,
    "openedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),
    "metadata" JSONB,

    CONSTRAINT "ModerationCase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModerationAction" (
    "id" TEXT NOT NULL,
    "moderationCaseId" TEXT NOT NULL,
    "actionType" "ModerationActionType" NOT NULL,
    "performedByUserId" TEXT,
    "reason" TEXT,
    "expiresAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ModerationAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FraudCase" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "personaId" TEXT,
    "status" "FraudCaseStatus" NOT NULL DEFAULT 'OPEN',
    "riskScore" DOUBLE PRECISION NOT NULL,
    "fraudSignals" JSONB,
    "detectionModelVersion" TEXT,
    "assignedInvestigatorId" TEXT,
    "resolutionNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FraudCase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SecurityIncident" (
    "id" TEXT NOT NULL,
    "incidentKey" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "severity" "RiskLevel" NOT NULL,
    "detectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "acknowledgedAt" TIMESTAMP(3),
    "resolvedAt" TIMESTAMP(3),
    "rootCause" TEXT,
    "remediationSummary" TEXT,
    "affectedSystems" JSONB,
    "evidencePayload" JSONB,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SecurityIncident_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApiAccessAudit" (
    "id" TEXT NOT NULL,
    "workspaceApiKeyId" TEXT,
    "endpoint" TEXT NOT NULL,
    "httpMethod" TEXT NOT NULL,
    "responseStatus" INTEGER NOT NULL,
    "latencyMs" INTEGER,
    "ipAddress" TEXT,
    "requestId" TEXT,
    "metadata" JSONB,
    "accessedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ApiAccessAudit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkspaceCustomRole" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "isSystemRole" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkspaceCustomRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkspaceMemberRole" (
    "id" TEXT NOT NULL,
    "workspaceMemberId" TEXT NOT NULL,
    "customRoleId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorkspaceMemberRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkspacePermission" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "permissionKey" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorkspacePermission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkspaceRolePermission" (
    "id" TEXT NOT NULL,
    "customRoleId" TEXT NOT NULL,
    "permissionId" TEXT NOT NULL,
    "effect" "PermissionEffect" NOT NULL DEFAULT 'ALLOW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorkspaceRolePermission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkspaceComplianceRecord" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "complianceType" TEXT NOT NULL,
    "policyVersion" TEXT,
    "evidencePayload" JSONB,
    "verifiedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorkspaceComplianceRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RecommendationCandidate_personaId_idx" ON "RecommendationCandidate"("personaId");

-- CreateIndex
CREATE INDEX "RecommendationCandidate_targetPersonaId_idx" ON "RecommendationCandidate"("targetPersonaId");

-- CreateIndex
CREATE INDEX "RecommendationCandidate_targetListingId_idx" ON "RecommendationCandidate"("targetListingId");

-- CreateIndex
CREATE INDEX "RecommendationCandidate_recommendationType_idx" ON "RecommendationCandidate"("recommendationType");

-- CreateIndex
CREATE INDEX "RecommendationCandidate_rankingScore_idx" ON "RecommendationCandidate"("rankingScore");

-- CreateIndex
CREATE INDEX "RecommendationCandidate_generatedAt_idx" ON "RecommendationCandidate"("generatedAt");

-- CreateIndex
CREATE INDEX "RecommendationFeedback_recommendationCandidateId_idx" ON "RecommendationFeedback"("recommendationCandidateId");

-- CreateIndex
CREATE INDEX "RecommendationFeedback_personaId_idx" ON "RecommendationFeedback"("personaId");

-- CreateIndex
CREATE INDEX "RecommendationFeedback_feedbackType_idx" ON "RecommendationFeedback"("feedbackType");

-- CreateIndex
CREATE INDEX "EmbeddingVector_embeddingType_idx" ON "EmbeddingVector"("embeddingType");

-- CreateIndex
CREATE INDEX "EmbeddingVector_entityId_idx" ON "EmbeddingVector"("entityId");

-- CreateIndex
CREATE INDEX "EmbeddingVector_generatedAt_idx" ON "EmbeddingVector"("generatedAt");

-- CreateIndex
CREATE UNIQUE INDEX "EmbeddingVector_embeddingType_entityId_modelVersion_key" ON "EmbeddingVector"("embeddingType", "entityId", "modelVersion");

-- CreateIndex
CREATE INDEX "MatchScore_personaAId_idx" ON "MatchScore"("personaAId");

-- CreateIndex
CREATE INDEX "MatchScore_personaBId_idx" ON "MatchScore"("personaBId");

-- CreateIndex
CREATE INDEX "MatchScore_compatibilityScore_idx" ON "MatchScore"("compatibilityScore");

-- CreateIndex
CREATE UNIQUE INDEX "MatchScore_personaAId_personaBId_key" ON "MatchScore"("personaAId", "personaBId");

-- CreateIndex
CREATE INDEX "SearchDocument_entityType_idx" ON "SearchDocument"("entityType");

-- CreateIndex
CREATE INDEX "SearchDocument_indexedAt_idx" ON "SearchDocument"("indexedAt");

-- CreateIndex
CREATE UNIQUE INDEX "SearchDocument_entityType_entityId_key" ON "SearchDocument"("entityType", "entityId");

-- CreateIndex
CREATE UNIQUE INDEX "MLModelRegistry_modelKey_key" ON "MLModelRegistry"("modelKey");

-- CreateIndex
CREATE INDEX "MLModelRegistry_modelType_idx" ON "MLModelRegistry"("modelType");

-- CreateIndex
CREATE INDEX "MLModelRegistry_status_idx" ON "MLModelRegistry"("status");

-- CreateIndex
CREATE INDEX "AiModerationSignal_entityType_idx" ON "AiModerationSignal"("entityType");

-- CreateIndex
CREATE INDEX "AiModerationSignal_entityId_idx" ON "AiModerationSignal"("entityId");

-- CreateIndex
CREATE INDEX "AiModerationSignal_moderationDecision_idx" ON "AiModerationSignal"("moderationDecision");

-- CreateIndex
CREATE INDEX "AiModerationSignal_createdAt_idx" ON "AiModerationSignal"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalizationProfile_personaId_key" ON "PersonalizationProfile"("personaId");

-- CreateIndex
CREATE INDEX "PersonalizationProfile_updatedAt_idx" ON "PersonalizationProfile"("updatedAt");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_workspaceId_idx" ON "AnalyticsEvent"("workspaceId");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_userId_idx" ON "AnalyticsEvent"("userId");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_personaId_idx" ON "AnalyticsEvent"("personaId");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_eventType_idx" ON "AnalyticsEvent"("eventType");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_eventName_idx" ON "AnalyticsEvent"("eventName");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_occurredAt_idx" ON "AnalyticsEvent"("occurredAt");

-- CreateIndex
CREATE UNIQUE INDEX "AnalyticsSession_sessionKey_key" ON "AnalyticsSession"("sessionKey");

-- CreateIndex
CREATE INDEX "AnalyticsSession_userId_idx" ON "AnalyticsSession"("userId");

-- CreateIndex
CREATE INDEX "AnalyticsSession_personaId_idx" ON "AnalyticsSession"("personaId");

-- CreateIndex
CREATE INDEX "AnalyticsSession_startedAt_idx" ON "AnalyticsSession"("startedAt");

-- CreateIndex
CREATE UNIQUE INDEX "FeatureFlag_flagKey_key" ON "FeatureFlag"("flagKey");

-- CreateIndex
CREATE INDEX "FeatureFlag_enabled_idx" ON "FeatureFlag"("enabled");

-- CreateIndex
CREATE INDEX "FeatureFlagAssignment_featureFlagId_idx" ON "FeatureFlagAssignment"("featureFlagId");

-- CreateIndex
CREATE INDEX "FeatureFlagAssignment_userId_idx" ON "FeatureFlagAssignment"("userId");

-- CreateIndex
CREATE INDEX "FeatureFlagAssignment_workspaceId_idx" ON "FeatureFlagAssignment"("workspaceId");

-- CreateIndex
CREATE INDEX "FeatureFlagAssignment_personaId_idx" ON "FeatureFlagAssignment"("personaId");

-- CreateIndex
CREATE INDEX "ProductMetricSnapshot_metricKey_idx" ON "ProductMetricSnapshot"("metricKey");

-- CreateIndex
CREATE INDEX "ProductMetricSnapshot_metricDate_idx" ON "ProductMetricSnapshot"("metricDate");

-- CreateIndex
CREATE UNIQUE INDEX "ProductMetricSnapshot_metricKey_aggregationPeriod_metricDat_key" ON "ProductMetricSnapshot"("metricKey", "aggregationPeriod", "metricDate");

-- CreateIndex
CREATE INDEX "SearchAnalytics_personaId_idx" ON "SearchAnalytics"("personaId");

-- CreateIndex
CREATE INDEX "SearchAnalytics_createdAt_idx" ON "SearchAnalytics"("createdAt");

-- CreateIndex
CREATE INDEX "SystemMetric_metricKey_idx" ON "SystemMetric"("metricKey");

-- CreateIndex
CREATE INDEX "SystemMetric_severity_idx" ON "SystemMetric"("severity");

-- CreateIndex
CREATE INDEX "SystemMetric_measuredAt_idx" ON "SystemMetric"("measuredAt");

-- CreateIndex
CREATE INDEX "ErrorLog_serviceName_idx" ON "ErrorLog"("serviceName");

-- CreateIndex
CREATE INDEX "ErrorLog_errorType_idx" ON "ErrorLog"("errorType");

-- CreateIndex
CREATE INDEX "ErrorLog_occurredAt_idx" ON "ErrorLog"("occurredAt");

-- CreateIndex
CREATE INDEX "AuditExportJob_requestedByUserId_idx" ON "AuditExportJob"("requestedByUserId");

-- CreateIndex
CREATE INDEX "AuditExportJob_status_idx" ON "AuditExportJob"("status");

-- CreateIndex
CREATE INDEX "AuditExportJob_createdAt_idx" ON "AuditExportJob"("createdAt");

-- CreateIndex
CREATE INDEX "EventStream_streamType_aggregateId_idx" ON "EventStream"("streamType", "aggregateId");

-- CreateIndex
CREATE INDEX "EventStream_createdAt_idx" ON "EventStream"("createdAt");

-- CreateIndex
CREATE INDEX "EventSnapshot_aggregateId_idx" ON "EventSnapshot"("aggregateId");

-- CreateIndex
CREATE INDEX "CQRSProjection_name_idx" ON "CQRSProjection"("name");

-- CreateIndex
CREATE INDEX "AnalyticsFactTable_eventType_eventTime_idx" ON "AnalyticsFactTable"("eventType", "eventTime");

-- CreateIndex
CREATE INDEX "AnalyticsFactTable_userId_idx" ON "AnalyticsFactTable"("userId");

-- CreateIndex
CREATE INDEX "DataPipelineJob_status_idx" ON "DataPipelineJob"("status");

-- CreateIndex
CREATE INDEX "ArchiveRecord_archiveStatus_idx" ON "ArchiveRecord"("archiveStatus");

-- CreateIndex
CREATE INDEX "ArchiveRecord_storageTier_idx" ON "ArchiveRecord"("storageTier");

-- CreateIndex
CREATE INDEX "ArchiveRecord_retentionUntil_idx" ON "ArchiveRecord"("retentionUntil");

-- CreateIndex
CREATE INDEX "ArchiveRecord_createdAt_idx" ON "ArchiveRecord"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "ArchiveRecord_entityType_entityId_key" ON "ArchiveRecord"("entityType", "entityId");

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseBackup_backupKey_key" ON "DatabaseBackup"("backupKey");

-- CreateIndex
CREATE INDEX "DatabaseBackup_backupType_idx" ON "DatabaseBackup"("backupType");

-- CreateIndex
CREATE INDEX "DatabaseBackup_environment_idx" ON "DatabaseBackup"("environment");

-- CreateIndex
CREATE INDEX "DatabaseBackup_startedAt_idx" ON "DatabaseBackup"("startedAt");

-- CreateIndex
CREATE INDEX "RecoveryJob_databaseBackupId_idx" ON "RecoveryJob"("databaseBackupId");

-- CreateIndex
CREATE INDEX "RecoveryJob_status_idx" ON "RecoveryJob"("status");

-- CreateIndex
CREATE INDEX "RecoveryJob_priority_idx" ON "RecoveryJob"("priority");

-- CreateIndex
CREATE INDEX "RecoveryJob_createdAt_idx" ON "RecoveryJob"("createdAt");

-- CreateIndex
CREATE INDEX "RetentionExecution_retentionPolicyId_idx" ON "RetentionExecution"("retentionPolicyId");

-- CreateIndex
CREATE INDEX "RetentionExecution_startedAt_idx" ON "RetentionExecution"("startedAt");

-- CreateIndex
CREATE INDEX "CrossRegionReplication_replicationHealthy_idx" ON "CrossRegionReplication"("replicationHealthy");

-- CreateIndex
CREATE INDEX "CrossRegionReplication_lastSyncedAt_idx" ON "CrossRegionReplication"("lastSyncedAt");

-- CreateIndex
CREATE UNIQUE INDEX "CrossRegionReplication_sourceRegion_targetRegion_key" ON "CrossRegionReplication"("sourceRegion", "targetRegion");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessContinuityPlan_planKey_key" ON "BusinessContinuityPlan"("planKey");

-- CreateIndex
CREATE INDEX "BusinessContinuityPlan_nextTestAt_idx" ON "BusinessContinuityPlan"("nextTestAt");

-- CreateIndex
CREATE INDEX "DisasterRecoveryTest_businessContinuityPlanId_idx" ON "DisasterRecoveryTest"("businessContinuityPlanId");

-- CreateIndex
CREATE INDEX "DisasterRecoveryTest_success_idx" ON "DisasterRecoveryTest"("success");

-- CreateIndex
CREATE INDEX "DisasterRecoveryTest_startedAt_idx" ON "DisasterRecoveryTest"("startedAt");

-- CreateIndex
CREATE INDEX "FailoverEvent_sourceRegion_idx" ON "FailoverEvent"("sourceRegion");

-- CreateIndex
CREATE INDEX "FailoverEvent_targetRegion_idx" ON "FailoverEvent"("targetRegion");

-- CreateIndex
CREATE INDEX "FailoverEvent_startedAt_idx" ON "FailoverEvent"("startedAt");

-- CreateIndex
CREATE UNIQUE INDEX "ComplianceEvidenceVault_evidenceKey_key" ON "ComplianceEvidenceVault"("evidenceKey");

-- CreateIndex
CREATE INDEX "ComplianceEvidenceVault_evidenceType_idx" ON "ComplianceEvidenceVault"("evidenceType");

-- CreateIndex
CREATE INDEX "ComplianceEvidenceVault_legalHold_idx" ON "ComplianceEvidenceVault"("legalHold");

-- CreateIndex
CREATE INDEX "ComplianceEvidenceVault_expiresAt_idx" ON "ComplianceEvidenceVault"("expiresAt");

-- CreateIndex
CREATE INDEX "DomainEvent_aggregateType_aggregateId_idx" ON "DomainEvent"("aggregateType", "aggregateId");

-- CreateIndex
CREATE INDEX "DomainEvent_eventType_idx" ON "DomainEvent"("eventType");

-- CreateIndex
CREATE INDEX "DomainEvent_eventStatus_idx" ON "DomainEvent"("eventStatus");

-- CreateIndex
CREATE INDEX "DomainEvent_occurredAt_idx" ON "DomainEvent"("occurredAt");

-- CreateIndex
CREATE INDEX "DomainEvent_correlationId_idx" ON "DomainEvent"("correlationId");

-- CreateIndex
CREATE INDEX "EventOutbox_domainEventId_idx" ON "EventOutbox"("domainEventId");

-- CreateIndex
CREATE INDEX "EventOutbox_status_idx" ON "EventOutbox"("status");

-- CreateIndex
CREATE INDEX "EventOutbox_nextRetryAt_idx" ON "EventOutbox"("nextRetryAt");

-- CreateIndex
CREATE UNIQUE INDEX "WorkflowDefinition_workflowKey_key" ON "WorkflowDefinition"("workflowKey");

-- CreateIndex
CREATE INDEX "WorkflowDefinition_workflowKey_idx" ON "WorkflowDefinition"("workflowKey");

-- CreateIndex
CREATE INDEX "WorkflowDefinition_isActive_idx" ON "WorkflowDefinition"("isActive");

-- CreateIndex
CREATE INDEX "WorkflowExecution_workflowDefinitionId_idx" ON "WorkflowExecution"("workflowDefinitionId");

-- CreateIndex
CREATE INDEX "WorkflowExecution_status_idx" ON "WorkflowExecution"("status");

-- CreateIndex
CREATE INDEX "WorkflowExecution_startedAt_idx" ON "WorkflowExecution"("startedAt");

-- CreateIndex
CREATE INDEX "WorkflowExecution_correlationId_idx" ON "WorkflowExecution"("correlationId");

-- CreateIndex
CREATE INDEX "WorkflowStepExecution_workflowExecutionId_idx" ON "WorkflowStepExecution"("workflowExecutionId");

-- CreateIndex
CREATE INDEX "WorkflowStepExecution_status_idx" ON "WorkflowStepExecution"("status");

-- CreateIndex
CREATE INDEX "WorkflowStepExecution_sequenceNumber_idx" ON "WorkflowStepExecution"("sequenceNumber");

-- CreateIndex
CREATE INDEX "SagaExecution_sagaKey_idx" ON "SagaExecution"("sagaKey");

-- CreateIndex
CREATE INDEX "SagaExecution_status_idx" ON "SagaExecution"("status");

-- CreateIndex
CREATE INDEX "SagaExecution_correlationId_idx" ON "SagaExecution"("correlationId");

-- CreateIndex
CREATE INDEX "SagaStepExecution_sagaExecutionId_idx" ON "SagaStepExecution"("sagaExecutionId");

-- CreateIndex
CREATE INDEX "SagaStepExecution_completed_idx" ON "SagaStepExecution"("completed");

-- CreateIndex
CREATE INDEX "SagaStepExecution_compensated_idx" ON "SagaStepExecution"("compensated");

-- CreateIndex
CREATE INDEX "CommandExecution_commandType_idx" ON "CommandExecution"("commandType");

-- CreateIndex
CREATE INDEX "CommandExecution_aggregateType_aggregateId_idx" ON "CommandExecution"("aggregateType", "aggregateId");

-- CreateIndex
CREATE INDEX "CommandExecution_executedAt_idx" ON "CommandExecution"("executedAt");

-- CreateIndex
CREATE INDEX "CommandExecution_correlationId_idx" ON "CommandExecution"("correlationId");

-- CreateIndex
CREATE INDEX "AggregateSnapshot_aggregateType_aggregateId_idx" ON "AggregateSnapshot"("aggregateType", "aggregateId");

-- CreateIndex
CREATE UNIQUE INDEX "AggregateSnapshot_aggregateType_aggregateId_aggregateVersio_key" ON "AggregateSnapshot"("aggregateType", "aggregateId", "aggregateVersion");

-- CreateIndex
CREATE UNIQUE INDEX "IdempotencyKey_idempotencyKey_key" ON "IdempotencyKey"("idempotencyKey");

-- CreateIndex
CREATE INDEX "IdempotencyKey_endpoint_idx" ON "IdempotencyKey"("endpoint");

-- CreateIndex
CREATE INDEX "IdempotencyKey_expiresAt_idx" ON "IdempotencyKey"("expiresAt");

-- CreateIndex
CREATE INDEX "FlagAssignment_flagId_idx" ON "FlagAssignment"("flagId");

-- CreateIndex
CREATE INDEX "FlagAssignment_userId_idx" ON "FlagAssignment"("userId");

-- CreateIndex
CREATE INDEX "Experiment_status_idx" ON "Experiment"("status");

-- CreateIndex
CREATE INDEX "ExperimentVariant_experimentId_idx" ON "ExperimentVariant"("experimentId");

-- CreateIndex
CREATE INDEX "ExperimentAssignment_userId_idx" ON "ExperimentAssignment"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ExperimentAssignment_experimentId_userId_key" ON "ExperimentAssignment"("experimentId", "userId");

-- CreateIndex
CREATE INDEX "ExperimentMetricEvent_experimentId_idx" ON "ExperimentMetricEvent"("experimentId");

-- CreateIndex
CREATE INDEX "ExperimentMetricEvent_metricName_idx" ON "ExperimentMetricEvent"("metricName");

-- CreateIndex
CREATE UNIQUE INDEX "DeviceFingerprint_fingerprintHash_key" ON "DeviceFingerprint"("fingerprintHash");

-- CreateIndex
CREATE INDEX "DeviceFingerprint_deviceTrustLevel_idx" ON "DeviceFingerprint"("deviceTrustLevel");

-- CreateIndex
CREATE INDEX "DeviceFingerprint_createdAt_idx" ON "DeviceFingerprint"("createdAt");

-- CreateIndex
CREATE INDEX "UserDeviceFingerprint_userId_idx" ON "UserDeviceFingerprint"("userId");

-- CreateIndex
CREATE INDEX "UserDeviceFingerprint_deviceFingerprintId_idx" ON "UserDeviceFingerprint"("deviceFingerprintId");

-- CreateIndex
CREATE UNIQUE INDEX "UserDeviceFingerprint_userId_deviceFingerprintId_key" ON "UserDeviceFingerprint"("userId", "deviceFingerprintId");

-- CreateIndex
CREATE UNIQUE INDEX "UserReputation_userId_key" ON "UserReputation"("userId");

-- CreateIndex
CREATE INDEX "UserReputation_reputationStatus_idx" ON "UserReputation"("reputationStatus");

-- CreateIndex
CREATE INDEX "UserReputation_reputationScore_idx" ON "UserReputation"("reputationScore");

-- CreateIndex
CREATE INDEX "ThreatSignal_userId_idx" ON "ThreatSignal"("userId");

-- CreateIndex
CREATE INDEX "ThreatSignal_signalType_idx" ON "ThreatSignal"("signalType");

-- CreateIndex
CREATE INDEX "ThreatSignal_riskLevel_idx" ON "ThreatSignal"("riskLevel");

-- CreateIndex
CREATE INDEX "ThreatSignal_detectedAt_idx" ON "ThreatSignal"("detectedAt");

-- CreateIndex
CREATE UNIQUE INDEX "FraudInvestigationCase_caseReference_key" ON "FraudInvestigationCase"("caseReference");

-- CreateIndex
CREATE INDEX "FraudInvestigationCase_userId_idx" ON "FraudInvestigationCase"("userId");

-- CreateIndex
CREATE INDEX "FraudInvestigationCase_status_idx" ON "FraudInvestigationCase"("status");

-- CreateIndex
CREATE INDEX "FraudInvestigationCase_riskLevel_idx" ON "FraudInvestigationCase"("riskLevel");

-- CreateIndex
CREATE INDEX "AbuseEnforcementAction_userId_idx" ON "AbuseEnforcementAction"("userId");

-- CreateIndex
CREATE INDEX "AbuseEnforcementAction_actionType_idx" ON "AbuseEnforcementAction"("actionType");

-- CreateIndex
CREATE INDEX "AbuseEnforcementAction_expiresAt_idx" ON "AbuseEnforcementAction"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "LinkedAccountCluster_clusterKey_key" ON "LinkedAccountCluster"("clusterKey");

-- CreateIndex
CREATE INDEX "LinkedAccountCluster_riskLevel_idx" ON "LinkedAccountCluster"("riskLevel");

-- CreateIndex
CREATE INDEX "LinkedAccount_userId_idx" ON "LinkedAccount"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "LinkedAccount_linkedAccountClusterId_userId_key" ON "LinkedAccount"("linkedAccountClusterId", "userId");

-- CreateIndex
CREATE INDEX "UserVelocityMetric_userId_idx" ON "UserVelocityMetric"("userId");

-- CreateIndex
CREATE INDEX "UserVelocityMetric_metricKey_idx" ON "UserVelocityMetric"("metricKey");

-- CreateIndex
CREATE INDEX "UserVelocityMetric_calculatedAt_idx" ON "UserVelocityMetric"("calculatedAt");

-- CreateIndex
CREATE UNIQUE INDEX "ShadowBan_userId_key" ON "ShadowBan"("userId");

-- CreateIndex
CREATE INDEX "ShadowBan_expiresAt_idx" ON "ShadowBan"("expiresAt");

-- CreateIndex
CREATE INDEX "RiskScoreHistory_userId_idx" ON "RiskScoreHistory"("userId");

-- CreateIndex
CREATE INDEX "RiskScoreHistory_calculatedAt_idx" ON "RiskScoreHistory"("calculatedAt");

-- CreateIndex
CREATE UNIQUE INDEX "Workspace_workspaceKey_key" ON "Workspace"("workspaceKey");

-- CreateIndex
CREATE UNIQUE INDEX "Workspace_slug_key" ON "Workspace"("slug");

-- CreateIndex
CREATE INDEX "Workspace_workspaceKey_idx" ON "Workspace"("workspaceKey");

-- CreateIndex
CREATE INDEX "Workspace_slug_idx" ON "Workspace"("slug");

-- CreateIndex
CREATE INDEX "Workspace_status_idx" ON "Workspace"("status");

-- CreateIndex
CREATE INDEX "Workspace_deletedAt_idx" ON "Workspace"("deletedAt");

-- CreateIndex
CREATE INDEX "WorkspaceMember_workspaceId_idx" ON "WorkspaceMember"("workspaceId");

-- CreateIndex
CREATE INDEX "WorkspaceMember_userId_idx" ON "WorkspaceMember"("userId");

-- CreateIndex
CREATE INDEX "WorkspaceMember_role_idx" ON "WorkspaceMember"("role");

-- CreateIndex
CREATE UNIQUE INDEX "WorkspaceMember_workspaceId_userId_key" ON "WorkspaceMember"("workspaceId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkspaceInvitation_invitationTokenHash_key" ON "WorkspaceInvitation"("invitationTokenHash");

-- CreateIndex
CREATE INDEX "WorkspaceInvitation_workspaceId_idx" ON "WorkspaceInvitation"("workspaceId");

-- CreateIndex
CREATE INDEX "WorkspaceInvitation_status_idx" ON "WorkspaceInvitation"("status");

-- CreateIndex
CREATE INDEX "WorkspaceInvitation_expiresAt_idx" ON "WorkspaceInvitation"("expiresAt");

-- CreateIndex
CREATE INDEX "WorkspaceFeatureEntitlement_workspaceId_idx" ON "WorkspaceFeatureEntitlement"("workspaceId");

-- CreateIndex
CREATE INDEX "WorkspaceFeatureEntitlement_featureKey_idx" ON "WorkspaceFeatureEntitlement"("featureKey");

-- CreateIndex
CREATE UNIQUE INDEX "WorkspaceFeatureEntitlement_workspaceId_featureKey_key" ON "WorkspaceFeatureEntitlement"("workspaceId", "featureKey");

-- CreateIndex
CREATE UNIQUE INDEX "WorkspaceApiKey_keyHash_key" ON "WorkspaceApiKey"("keyHash");

-- CreateIndex
CREATE INDEX "WorkspaceApiKey_workspaceId_idx" ON "WorkspaceApiKey"("workspaceId");

-- CreateIndex
CREATE INDEX "WorkspaceApiKey_expiresAt_idx" ON "WorkspaceApiKey"("expiresAt");

-- CreateIndex
CREATE INDEX "WorkspaceApiKey_revokedAt_idx" ON "WorkspaceApiKey"("revokedAt");

-- CreateIndex
CREATE INDEX "WorkspaceAuditLog_workspaceId_idx" ON "WorkspaceAuditLog"("workspaceId");

-- CreateIndex
CREATE INDEX "WorkspaceAuditLog_actorUserId_idx" ON "WorkspaceAuditLog"("actorUserId");

-- CreateIndex
CREATE INDEX "WorkspaceAuditLog_action_idx" ON "WorkspaceAuditLog"("action");

-- CreateIndex
CREATE INDEX "WorkspaceAuditLog_occurredAt_idx" ON "WorkspaceAuditLog"("occurredAt");

-- CreateIndex
CREATE INDEX "ComplianceDocument_workspaceId_idx" ON "ComplianceDocument"("workspaceId");

-- CreateIndex
CREATE INDEX "ComplianceDocument_documentType_idx" ON "ComplianceDocument"("documentType");

-- CreateIndex
CREATE INDEX "ComplianceDocument_expiresAt_idx" ON "ComplianceDocument"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "PartitionRegistry_partitionName_key" ON "PartitionRegistry"("partitionName");

-- CreateIndex
CREATE INDEX "PartitionRegistry_tableName_idx" ON "PartitionRegistry"("tableName");

-- CreateIndex
CREATE INDEX "PartitionRegistry_active_idx" ON "PartitionRegistry"("active");

-- CreateIndex
CREATE UNIQUE INDEX "DistributedCounter_counterKey_key" ON "DistributedCounter"("counterKey");

-- CreateIndex
CREATE INDEX "DistributedCounter_updatedAt_idx" ON "DistributedCounter"("updatedAt");

-- CreateIndex
CREATE INDEX "ActivityFeedItem_ownerUserId_createdAt_idx" ON "ActivityFeedItem"("ownerUserId", "createdAt");

-- CreateIndex
CREATE INDEX "ActivityFeedItem_itemType_idx" ON "ActivityFeedItem"("itemType");

-- CreateIndex
CREATE INDEX "ActivityFeedItem_rankingScore_idx" ON "ActivityFeedItem"("rankingScore");

-- CreateIndex
CREATE INDEX "ActivityFeedItem_expiresAt_idx" ON "ActivityFeedItem"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "CacheEntry_cacheKey_key" ON "CacheEntry"("cacheKey");

-- CreateIndex
CREATE INDEX "CacheEntry_cacheNamespace_idx" ON "CacheEntry"("cacheNamespace");

-- CreateIndex
CREATE INDEX "CacheEntry_expiresAt_idx" ON "CacheEntry"("expiresAt");

-- CreateIndex
CREATE INDEX "CacheEntry_cacheStatus_idx" ON "CacheEntry"("cacheStatus");

-- CreateIndex
CREATE UNIQUE INDEX "RateLimitBucket_bucketKey_key" ON "RateLimitBucket"("bucketKey");

-- CreateIndex
CREATE INDEX "RateLimitBucket_expiresAt_idx" ON "RateLimitBucket"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "RealtimeConnection_connectionId_key" ON "RealtimeConnection"("connectionId");

-- CreateIndex
CREATE INDEX "RealtimeConnection_userId_idx" ON "RealtimeConnection"("userId");

-- CreateIndex
CREATE INDEX "RealtimeConnection_connectedAt_idx" ON "RealtimeConnection"("connectedAt");

-- CreateIndex
CREATE INDEX "RealtimeConnection_lastHeartbeatAt_idx" ON "RealtimeConnection"("lastHeartbeatAt");

-- CreateIndex
CREATE INDEX "RealtimeSubscription_channelName_idx" ON "RealtimeSubscription"("channelName");

-- CreateIndex
CREATE UNIQUE INDEX "RealtimeSubscription_realtimeConnectionId_channelName_key" ON "RealtimeSubscription"("realtimeConnectionId", "channelName");

-- CreateIndex
CREATE INDEX "MessageDeliveryQueue_recipientUserId_delivered_idx" ON "MessageDeliveryQueue"("recipientUserId", "delivered");

-- CreateIndex
CREATE INDEX "MessageDeliveryQueue_createdAt_idx" ON "MessageDeliveryQueue"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "SearchQueryCache_queryHash_key" ON "SearchQueryCache"("queryHash");

-- CreateIndex
CREATE INDEX "SearchQueryCache_expiresAt_idx" ON "SearchQueryCache"("expiresAt");

-- CreateIndex
CREATE INDEX "SearchQueryCache_hitCount_idx" ON "SearchQueryCache"("hitCount");

-- CreateIndex
CREATE INDEX "ThroughputMetric_metricKey_idx" ON "ThroughputMetric"("metricKey");

-- CreateIndex
CREATE INDEX "ThroughputMetric_recordedAt_idx" ON "ThroughputMetric"("recordedAt");

-- CreateIndex
CREATE INDEX "Device_userId_idx" ON "Device"("userId");

-- CreateIndex
CREATE INDEX "Device_fingerprintHash_idx" ON "Device"("fingerprintHash");

-- CreateIndex
CREATE INDEX "Device_trustLevel_idx" ON "Device"("trustLevel");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

-- CreateIndex
CREATE INDEX "Session_deviceId_idx" ON "Session"("deviceId");

-- CreateIndex
CREATE INDEX "Session_status_idx" ON "Session"("status");

-- CreateIndex
CREATE INDEX "Session_expiresAt_idx" ON "Session"("expiresAt");

-- CreateIndex
CREATE INDEX "Session_lastUsedAt_idx" ON "Session"("lastUsedAt");

-- CreateIndex
CREATE UNIQUE INDEX "EmailVerification_tokenHash_key" ON "EmailVerification"("tokenHash");

-- CreateIndex
CREATE INDEX "EmailVerification_userId_idx" ON "EmailVerification"("userId");

-- CreateIndex
CREATE INDEX "EmailVerification_email_idx" ON "EmailVerification"("email");

-- CreateIndex
CREATE INDEX "EmailVerification_expiresAt_idx" ON "EmailVerification"("expiresAt");

-- CreateIndex
CREATE INDEX "PhoneVerification_userId_idx" ON "PhoneVerification"("userId");

-- CreateIndex
CREATE INDEX "PhoneVerification_phoneNumber_idx" ON "PhoneVerification"("phoneNumber");

-- CreateIndex
CREATE INDEX "PhoneVerification_expiresAt_idx" ON "PhoneVerification"("expiresAt");

-- CreateIndex
CREATE INDEX "OTPChallenge_userId_idx" ON "OTPChallenge"("userId");

-- CreateIndex
CREATE INDEX "OTPChallenge_target_idx" ON "OTPChallenge"("target");

-- CreateIndex
CREATE INDEX "OTPChallenge_expiresAt_idx" ON "OTPChallenge"("expiresAt");

-- CreateIndex
CREATE INDEX "MFAMethod_userId_idx" ON "MFAMethod"("userId");

-- CreateIndex
CREATE INDEX "MFAMethod_type_idx" ON "MFAMethod"("type");

-- CreateIndex
CREATE UNIQUE INDEX "BackupCode_codeHash_key" ON "BackupCode"("codeHash");

-- CreateIndex
CREATE INDEX "BackupCode_userId_idx" ON "BackupCode"("userId");

-- CreateIndex
CREATE INDEX "PasswordHistory_userId_idx" ON "PasswordHistory"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AccountRecoveryRequest_recoveryTokenHash_key" ON "AccountRecoveryRequest"("recoveryTokenHash");

-- CreateIndex
CREATE INDEX "AccountRecoveryRequest_userId_idx" ON "AccountRecoveryRequest"("userId");

-- CreateIndex
CREATE INDEX "AccountRecoveryRequest_expiresAt_idx" ON "AccountRecoveryRequest"("expiresAt");

-- CreateIndex
CREATE INDEX "AuthEvent_userId_idx" ON "AuthEvent"("userId");

-- CreateIndex
CREATE INDEX "AuthEvent_eventType_idx" ON "AuthEvent"("eventType");

-- CreateIndex
CREATE INDEX "AuthEvent_createdAt_idx" ON "AuthEvent"("createdAt");

-- CreateIndex
CREATE INDEX "SecurityEvent_userId_idx" ON "SecurityEvent"("userId");

-- CreateIndex
CREATE INDEX "SecurityEvent_deviceId_idx" ON "SecurityEvent"("deviceId");

-- CreateIndex
CREATE INDEX "SecurityEvent_riskLevel_idx" ON "SecurityEvent"("riskLevel");

-- CreateIndex
CREATE INDEX "SecurityEvent_createdAt_idx" ON "SecurityEvent"("createdAt");

-- CreateIndex
CREATE INDEX "UserRiskSignal_userId_idx" ON "UserRiskSignal"("userId");

-- CreateIndex
CREATE INDEX "UserRiskSignal_severity_idx" ON "UserRiskSignal"("severity");

-- CreateIndex
CREATE INDEX "UserRiskSignal_createdAt_idx" ON "UserRiskSignal"("createdAt");

-- CreateIndex
CREATE INDEX "UserConsent_userId_idx" ON "UserConsent"("userId");

-- CreateIndex
CREATE INDEX "UserConsent_consentType_idx" ON "UserConsent"("consentType");

-- CreateIndex
CREATE INDEX "QueueJob_queueName_idx" ON "QueueJob"("queueName");

-- CreateIndex
CREATE INDEX "QueueJob_status_idx" ON "QueueJob"("status");

-- CreateIndex
CREATE INDEX "QueueJob_availableAt_idx" ON "QueueJob"("availableAt");

-- CreateIndex
CREATE INDEX "QueueJob_priority_idx" ON "QueueJob"("priority");

-- CreateIndex
CREATE UNIQUE INDEX "ScheduledJob_jobKey_key" ON "ScheduledJob"("jobKey");

-- CreateIndex
CREATE INDEX "ScheduledJob_enabled_idx" ON "ScheduledJob"("enabled");

-- CreateIndex
CREATE INDEX "ScheduledJob_nextRunAt_idx" ON "ScheduledJob"("nextRunAt");

-- CreateIndex
CREATE INDEX "WebhookEndpoint_workspaceId_idx" ON "WebhookEndpoint"("workspaceId");

-- CreateIndex
CREATE INDEX "WebhookEndpoint_enabled_idx" ON "WebhookEndpoint"("enabled");

-- CreateIndex
CREATE INDEX "WebhookDelivery_webhookEndpointId_idx" ON "WebhookDelivery"("webhookEndpointId");

-- CreateIndex
CREATE INDEX "WebhookDelivery_deliveryStatus_idx" ON "WebhookDelivery"("deliveryStatus");

-- CreateIndex
CREATE INDEX "WebhookDelivery_eventType_idx" ON "WebhookDelivery"("eventType");

-- CreateIndex
CREATE INDEX "WebhookDelivery_nextRetryAt_idx" ON "WebhookDelivery"("nextRetryAt");

-- CreateIndex
CREATE UNIQUE INDEX "BackupSnapshot_snapshotKey_key" ON "BackupSnapshot"("snapshotKey");

-- CreateIndex
CREATE INDEX "BackupSnapshot_environment_idx" ON "BackupSnapshot"("environment");

-- CreateIndex
CREATE INDEX "BackupSnapshot_backupStatus_idx" ON "BackupSnapshot"("backupStatus");

-- CreateIndex
CREATE INDEX "BackupSnapshot_createdAt_idx" ON "BackupSnapshot"("createdAt");

-- CreateIndex
CREATE INDEX "SchemaMigrationAudit_migrationName_idx" ON "SchemaMigrationAudit"("migrationName");

-- CreateIndex
CREATE INDEX "SchemaMigrationAudit_environment_idx" ON "SchemaMigrationAudit"("environment");

-- CreateIndex
CREATE INDEX "SchemaMigrationAudit_executedAt_idx" ON "SchemaMigrationAudit"("executedAt");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceRegistry_serviceName_key" ON "ServiceRegistry"("serviceName");

-- CreateIndex
CREATE INDEX "ServiceRegistry_environment_idx" ON "ServiceRegistry"("environment");

-- CreateIndex
CREATE INDEX "ServiceRegistry_healthStatus_idx" ON "ServiceRegistry"("healthStatus");

-- CreateIndex
CREATE INDEX "ServiceHealthCheck_serviceRegistryId_idx" ON "ServiceHealthCheck"("serviceRegistryId");

-- CreateIndex
CREATE INDEX "ServiceHealthCheck_checkedAt_idx" ON "ServiceHealthCheck"("checkedAt");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_keyHash_key" ON "ApiKey"("keyHash");

-- CreateIndex
CREATE INDEX "ApiKey_workspaceId_idx" ON "ApiKey"("workspaceId");

-- CreateIndex
CREATE INDEX "ApiKey_expiresAt_idx" ON "ApiKey"("expiresAt");

-- CreateIndex
CREATE INDEX "ApiKey_revokedAt_idx" ON "ApiKey"("revokedAt");

-- CreateIndex
CREATE UNIQUE INDEX "MediaAsset_storageKey_key" ON "MediaAsset"("storageKey");

-- CreateIndex
CREATE INDEX "MediaAsset_uploadedByUserId_idx" ON "MediaAsset"("uploadedByUserId");

-- CreateIndex
CREATE INDEX "MediaAsset_uploadedAt_idx" ON "MediaAsset"("uploadedAt");

-- CreateIndex
CREATE INDEX "MediaAsset_deletedAt_idx" ON "MediaAsset"("deletedAt");

-- CreateIndex
CREATE INDEX "UserConsentRecord_userId_idx" ON "UserConsentRecord"("userId");

-- CreateIndex
CREATE INDEX "UserConsentRecord_consentType_idx" ON "UserConsentRecord"("consentType");

-- CreateIndex
CREATE INDEX "UserConsentRecord_consentStatus_idx" ON "UserConsentRecord"("consentStatus");

-- CreateIndex
CREATE INDEX "UserConsentRecord_acceptedAt_idx" ON "UserConsentRecord"("acceptedAt");

-- CreateIndex
CREATE UNIQUE INDEX "PrivacyPolicyVersion_version_key" ON "PrivacyPolicyVersion"("version");

-- CreateIndex
CREATE INDEX "PrivacyPolicyVersion_effectiveAt_idx" ON "PrivacyPolicyVersion"("effectiveAt");

-- CreateIndex
CREATE UNIQUE INDEX "TermsOfServiceVersion_version_key" ON "TermsOfServiceVersion"("version");

-- CreateIndex
CREATE INDEX "TermsOfServiceVersion_effectiveAt_idx" ON "TermsOfServiceVersion"("effectiveAt");

-- CreateIndex
CREATE INDEX "DataSubjectRequest_userId_idx" ON "DataSubjectRequest"("userId");

-- CreateIndex
CREATE INDEX "DataSubjectRequest_requestType_idx" ON "DataSubjectRequest"("requestType");

-- CreateIndex
CREATE INDEX "DataSubjectRequest_status_idx" ON "DataSubjectRequest"("status");

-- CreateIndex
CREATE INDEX "DataSubjectRequest_createdAt_idx" ON "DataSubjectRequest"("createdAt");

-- CreateIndex
CREATE INDEX "UserDataExport_userId_idx" ON "UserDataExport"("userId");

-- CreateIndex
CREATE INDEX "UserDataExport_expiresAt_idx" ON "UserDataExport"("expiresAt");

-- CreateIndex
CREATE INDEX "LegalHold_workspaceId_idx" ON "LegalHold"("workspaceId");

-- CreateIndex
CREATE INDEX "LegalHold_userId_idx" ON "LegalHold"("userId");

-- CreateIndex
CREATE INDEX "LegalHold_status_idx" ON "LegalHold"("status");

-- CreateIndex
CREATE UNIQUE INDEX "SecurityBreachIncident_incidentKey_key" ON "SecurityBreachIncident"("incidentKey");

-- CreateIndex
CREATE INDEX "SecurityBreachIncident_severity_idx" ON "SecurityBreachIncident"("severity");

-- CreateIndex
CREATE INDEX "SecurityBreachIncident_status_idx" ON "SecurityBreachIncident"("status");

-- CreateIndex
CREATE INDEX "SecurityBreachIncident_detectedAt_idx" ON "SecurityBreachIncident"("detectedAt");

-- CreateIndex
CREATE UNIQUE INDEX "LawEnforcementRequest_requestReference_key" ON "LawEnforcementRequest"("requestReference");

-- CreateIndex
CREATE INDEX "LawEnforcementRequest_requestingAgency_idx" ON "LawEnforcementRequest"("requestingAgency");

-- CreateIndex
CREATE INDEX "LawEnforcementRequest_receivedAt_idx" ON "LawEnforcementRequest"("receivedAt");

-- CreateIndex
CREATE UNIQUE INDEX "DataRetentionPolicy_policyKey_key" ON "DataRetentionPolicy"("policyKey");

-- CreateIndex
CREATE INDEX "DataRetentionPolicy_entityType_idx" ON "DataRetentionPolicy"("entityType");

-- CreateIndex
CREATE INDEX "DataRetentionPolicy_enabled_idx" ON "DataRetentionPolicy"("enabled");

-- CreateIndex
CREATE UNIQUE INDEX "ComplianceAudit_auditKey_key" ON "ComplianceAudit"("auditKey");

-- CreateIndex
CREATE INDEX "ComplianceAudit_framework_idx" ON "ComplianceAudit"("framework");

-- CreateIndex
CREATE INDEX "ComplianceAudit_completedAt_idx" ON "ComplianceAudit"("completedAt");

-- CreateIndex
CREATE INDEX "CookieConsentRecord_userId_idx" ON "CookieConsentRecord"("userId");

-- CreateIndex
CREATE INDEX "CookieConsentRecord_anonymousId_idx" ON "CookieConsentRecord"("anonymousId");

-- CreateIndex
CREATE INDEX "CookieConsentRecord_grantedAt_idx" ON "CookieConsentRecord"("grantedAt");

-- CreateIndex
CREATE INDEX "FeedGenerationJob_personaId_idx" ON "FeedGenerationJob"("personaId");

-- CreateIndex
CREATE INDEX "FeedGenerationJob_status_idx" ON "FeedGenerationJob"("status");

-- CreateIndex
CREATE INDEX "FeedGenerationJob_createdAt_idx" ON "FeedGenerationJob"("createdAt");

-- CreateIndex
CREATE INDEX "FeedSnapshot_personaId_idx" ON "FeedSnapshot"("personaId");

-- CreateIndex
CREATE INDEX "FeedSnapshot_algorithmVersion_idx" ON "FeedSnapshot"("algorithmVersion");

-- CreateIndex
CREATE INDEX "FeedSnapshot_expiresAt_idx" ON "FeedSnapshot"("expiresAt");

-- CreateIndex
CREATE INDEX "FeedSnapshot_createdAt_idx" ON "FeedSnapshot"("createdAt");

-- CreateIndex
CREATE INDEX "FeedCard_feedSnapshotId_idx" ON "FeedCard"("feedSnapshotId");

-- CreateIndex
CREATE INDEX "FeedCard_sourcePersonaId_idx" ON "FeedCard"("sourcePersonaId");

-- CreateIndex
CREATE INDEX "FeedCard_targetPersonaId_idx" ON "FeedCard"("targetPersonaId");

-- CreateIndex
CREATE INDEX "FeedCard_rankPosition_idx" ON "FeedCard"("rankPosition");

-- CreateIndex
CREATE UNIQUE INDEX "FeedCard_feedSnapshotId_targetPersonaId_key" ON "FeedCard"("feedSnapshotId", "targetPersonaId");

-- CreateIndex
CREATE INDEX "SwipeEvent_sourcePersonaId_idx" ON "SwipeEvent"("sourcePersonaId");

-- CreateIndex
CREATE INDEX "SwipeEvent_targetPersonaId_idx" ON "SwipeEvent"("targetPersonaId");

-- CreateIndex
CREATE INDEX "SwipeEvent_decision_idx" ON "SwipeEvent"("decision");

-- CreateIndex
CREATE INDEX "SwipeEvent_createdAt_idx" ON "SwipeEvent"("createdAt");

-- CreateIndex
CREATE INDEX "MatchInteraction_matchId_idx" ON "MatchInteraction"("matchId");

-- CreateIndex
CREATE INDEX "MatchInteraction_actorPersonaId_idx" ON "MatchInteraction"("actorPersonaId");

-- CreateIndex
CREATE INDEX "MatchInteraction_interactionType_idx" ON "MatchInteraction"("interactionType");

-- CreateIndex
CREATE INDEX "MatchInteraction_createdAt_idx" ON "MatchInteraction"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "RecommendationExperiment_experimentKey_key" ON "RecommendationExperiment"("experimentKey");

-- CreateIndex
CREATE INDEX "RecommendationExperiment_algorithmVersion_idx" ON "RecommendationExperiment"("algorithmVersion");

-- CreateIndex
CREATE INDEX "RecommendationExperiment_isActive_idx" ON "RecommendationExperiment"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "PersonaEmbedding_personaId_key" ON "PersonaEmbedding"("personaId");

-- CreateIndex
CREATE INDEX "PersonaEmbedding_embeddingVersion_idx" ON "PersonaEmbedding"("embeddingVersion");

-- CreateIndex
CREATE INDEX "PersonaEmbedding_generatedAt_idx" ON "PersonaEmbedding"("generatedAt");

-- CreateIndex
CREATE INDEX "DiscoveryAnalytics_personaId_idx" ON "DiscoveryAnalytics"("personaId");

-- CreateIndex
CREATE INDEX "DiscoveryAnalytics_calculatedAt_idx" ON "DiscoveryAnalytics"("calculatedAt");

-- CreateIndex
CREATE INDEX "ConversationParticipant_conversationId_idx" ON "ConversationParticipant"("conversationId");

-- CreateIndex
CREATE INDEX "ConversationParticipant_personaId_idx" ON "ConversationParticipant"("personaId");

-- CreateIndex
CREATE INDEX "ConversationParticipant_lastReadAt_idx" ON "ConversationParticipant"("lastReadAt");

-- CreateIndex
CREATE UNIQUE INDEX "ConversationParticipant_conversationId_personaId_key" ON "ConversationParticipant"("conversationId", "personaId");

-- CreateIndex
CREATE INDEX "MessageReceipt_messageId_idx" ON "MessageReceipt"("messageId");

-- CreateIndex
CREATE INDEX "MessageReceipt_personaId_idx" ON "MessageReceipt"("personaId");

-- CreateIndex
CREATE INDEX "MessageReceipt_seenAt_idx" ON "MessageReceipt"("seenAt");

-- CreateIndex
CREATE UNIQUE INDEX "MessageReceipt_messageId_personaId_key" ON "MessageReceipt"("messageId", "personaId");

-- CreateIndex
CREATE INDEX "MessageReaction_messageId_idx" ON "MessageReaction"("messageId");

-- CreateIndex
CREATE INDEX "MessageReaction_personaId_idx" ON "MessageReaction"("personaId");

-- CreateIndex
CREATE UNIQUE INDEX "MessageReaction_messageId_personaId_emoji_key" ON "MessageReaction"("messageId", "personaId", "emoji");

-- CreateIndex
CREATE INDEX "MessageModerationEvent_messageId_idx" ON "MessageModerationEvent"("messageId");

-- CreateIndex
CREATE INDEX "MessageModerationEvent_eventType_idx" ON "MessageModerationEvent"("eventType");

-- CreateIndex
CREATE UNIQUE INDEX "Presence_personaId_key" ON "Presence"("personaId");

-- CreateIndex
CREATE INDEX "Presence_status_idx" ON "Presence"("status");

-- CreateIndex
CREATE INDEX "Presence_lastSeenAt_idx" ON "Presence"("lastSeenAt");

-- CreateIndex
CREATE INDEX "TypingIndicator_conversationId_idx" ON "TypingIndicator"("conversationId");

-- CreateIndex
CREATE INDEX "TypingIndicator_personaId_idx" ON "TypingIndicator"("personaId");

-- CreateIndex
CREATE INDEX "TypingIndicator_expiresAt_idx" ON "TypingIndicator"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "TypingIndicator_conversationId_personaId_key" ON "TypingIndicator"("conversationId", "personaId");

-- CreateIndex
CREATE UNIQUE INDEX "WebSocketConnection_connectionId_key" ON "WebSocketConnection"("connectionId");

-- CreateIndex
CREATE INDEX "WebSocketConnection_conversationId_idx" ON "WebSocketConnection"("conversationId");

-- CreateIndex
CREATE INDEX "WebSocketConnection_personaId_idx" ON "WebSocketConnection"("personaId");

-- CreateIndex
CREATE INDEX "WebSocketConnection_status_idx" ON "WebSocketConnection"("status");

-- CreateIndex
CREATE INDEX "WebSocketConnection_lastHeartbeatAt_idx" ON "WebSocketConnection"("lastHeartbeatAt");

-- CreateIndex
CREATE UNIQUE INDEX "PushNotificationDevice_deviceTokenHash_key" ON "PushNotificationDevice"("deviceTokenHash");

-- CreateIndex
CREATE INDEX "PushNotificationDevice_personaId_idx" ON "PushNotificationDevice"("personaId");

-- CreateIndex
CREATE INDEX "PushNotificationDevice_platform_idx" ON "PushNotificationDevice"("platform");

-- CreateIndex
CREATE INDEX "PushNotificationDevice_isActive_idx" ON "PushNotificationDevice"("isActive");

-- CreateIndex
CREATE INDEX "NotificationQueue_personaId_idx" ON "NotificationQueue"("personaId");

-- CreateIndex
CREATE INDEX "NotificationQueue_deliveryStatus_idx" ON "NotificationQueue"("deliveryStatus");

-- CreateIndex
CREATE INDEX "NotificationQueue_scheduledFor_idx" ON "NotificationQueue"("scheduledFor");

-- CreateIndex
CREATE UNIQUE INDEX "DistributedTrace_traceId_key" ON "DistributedTrace"("traceId");

-- CreateIndex
CREATE INDEX "DistributedTrace_traceId_idx" ON "DistributedTrace"("traceId");

-- CreateIndex
CREATE INDEX "DistributedTrace_userId_idx" ON "DistributedTrace"("userId");

-- CreateIndex
CREATE INDEX "TraceSpan_traceId_idx" ON "TraceSpan"("traceId");

-- CreateIndex
CREATE INDEX "TraceSpan_spanType_idx" ON "TraceSpan"("spanType");

-- CreateIndex
CREATE INDEX "LogEvent_serviceName_severity_idx" ON "LogEvent"("serviceName", "severity");

-- CreateIndex
CREATE INDEX "LogEvent_traceId_idx" ON "LogEvent"("traceId");

-- CreateIndex
CREATE INDEX "LogEvent_createdAt_idx" ON "LogEvent"("createdAt");

-- CreateIndex
CREATE INDEX "IncidentReport_severity_idx" ON "IncidentReport"("severity");

-- CreateIndex
CREATE INDEX "IncidentReport_isResolved_idx" ON "IncidentReport"("isResolved");

-- CreateIndex
CREATE INDEX "ForensicEvent_eventType_idx" ON "ForensicEvent"("eventType");

-- CreateIndex
CREATE INDEX "ForensicEvent_traceId_idx" ON "ForensicEvent"("traceId");

-- CreateIndex
CREATE INDEX "ForensicEvent_userId_idx" ON "ForensicEvent"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "BillingCustomer_workspaceId_key" ON "BillingCustomer"("workspaceId");

-- CreateIndex
CREATE INDEX "BillingCustomer_workspaceId_idx" ON "BillingCustomer"("workspaceId");

-- CreateIndex
CREATE INDEX "BillingCustomer_provider_idx" ON "BillingCustomer"("provider");

-- CreateIndex
CREATE UNIQUE INDEX "BillingCustomer_provider_providerCustomerId_key" ON "BillingCustomer"("provider", "providerCustomerId");

-- CreateIndex
CREATE INDEX "PaymentMethod_billingCustomerId_idx" ON "PaymentMethod"("billingCustomerId");

-- CreateIndex
CREATE INDEX "PaymentMethod_isDefault_idx" ON "PaymentMethod"("isDefault");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentMethod_provider_providerPaymentMethodId_key" ON "PaymentMethod"("provider", "providerPaymentMethodId");

-- CreateIndex
CREATE UNIQUE INDEX "SubscriptionPlan_planKey_key" ON "SubscriptionPlan"("planKey");

-- CreateIndex
CREATE INDEX "SubscriptionPlan_billingCycle_idx" ON "SubscriptionPlan"("billingCycle");

-- CreateIndex
CREATE INDEX "SubscriptionPlan_isActive_idx" ON "SubscriptionPlan"("isActive");

-- CreateIndex
CREATE INDEX "BillingSubscription_billingCustomerId_idx" ON "BillingSubscription"("billingCustomerId");

-- CreateIndex
CREATE INDEX "BillingSubscription_subscriptionPlanId_idx" ON "BillingSubscription"("subscriptionPlanId");

-- CreateIndex
CREATE INDEX "BillingSubscription_status_idx" ON "BillingSubscription"("status");

-- CreateIndex
CREATE INDEX "BillingSubscription_currentPeriodEnd_idx" ON "BillingSubscription"("currentPeriodEnd");

-- CreateIndex
CREATE UNIQUE INDEX "BillingSubscription_provider_providerSubscriptionId_key" ON "BillingSubscription"("provider", "providerSubscriptionId");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_invoiceNumber_key" ON "Invoice"("invoiceNumber");

-- CreateIndex
CREATE INDEX "Invoice_billingCustomerId_idx" ON "Invoice"("billingCustomerId");

-- CreateIndex
CREATE INDEX "Invoice_billingSubscriptionId_idx" ON "Invoice"("billingSubscriptionId");

-- CreateIndex
CREATE INDEX "Invoice_status_idx" ON "Invoice"("status");

-- CreateIndex
CREATE INDEX "Invoice_issuedAt_idx" ON "Invoice"("issuedAt");

-- CreateIndex
CREATE INDEX "InvoiceLineItem_invoiceId_idx" ON "InvoiceLineItem"("invoiceId");

-- CreateIndex
CREATE INDEX "InvoiceTax_invoiceId_idx" ON "InvoiceTax"("invoiceId");

-- CreateIndex
CREATE INDEX "InvoiceTax_taxType_idx" ON "InvoiceTax"("taxType");

-- CreateIndex
CREATE INDEX "Payment_invoiceId_idx" ON "Payment"("invoiceId");

-- CreateIndex
CREATE INDEX "Payment_paymentMethodId_idx" ON "Payment"("paymentMethodId");

-- CreateIndex
CREATE INDEX "Payment_status_idx" ON "Payment"("status");

-- CreateIndex
CREATE INDEX "Payment_processedAt_idx" ON "Payment"("processedAt");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_provider_providerPaymentId_key" ON "Payment"("provider", "providerPaymentId");

-- CreateIndex
CREATE INDEX "BankAccount_workspaceId_idx" ON "BankAccount"("workspaceId");

-- CreateIndex
CREATE INDEX "BankAccount_isDefault_idx" ON "BankAccount"("isDefault");

-- CreateIndex
CREATE INDEX "WalletAccount_workspaceId_idx" ON "WalletAccount"("workspaceId");

-- CreateIndex
CREATE INDEX "Payout_workspaceId_idx" ON "Payout"("workspaceId");

-- CreateIndex
CREATE INDEX "Payout_status_idx" ON "Payout"("status");

-- CreateIndex
CREATE INDEX "Payout_processedAt_idx" ON "Payout"("processedAt");

-- CreateIndex
CREATE INDEX "FinancialRiskEvent_workspaceId_idx" ON "FinancialRiskEvent"("workspaceId");

-- CreateIndex
CREATE INDEX "FinancialRiskEvent_riskScore_idx" ON "FinancialRiskEvent"("riskScore");

-- CreateIndex
CREATE INDEX "Refund_paymentId_idx" ON "Refund"("paymentId");

-- CreateIndex
CREATE INDEX "Refund_status_idx" ON "Refund"("status");

-- CreateIndex
CREATE INDEX "BillingWebhookEvent_provider_idx" ON "BillingWebhookEvent"("provider");

-- CreateIndex
CREATE INDEX "BillingWebhookEvent_eventType_idx" ON "BillingWebhookEvent"("eventType");

-- CreateIndex
CREATE INDEX "BillingWebhookEvent_processed_idx" ON "BillingWebhookEvent"("processed");

-- CreateIndex
CREATE UNIQUE INDEX "BillingWebhookEvent_provider_eventId_key" ON "BillingWebhookEvent"("provider", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "Persona_slug_key" ON "Persona"("slug");

-- CreateIndex
CREATE INDEX "Persona_workspaceId_idx" ON "Persona"("workspaceId");

-- CreateIndex
CREATE INDEX "Persona_type_idx" ON "Persona"("type");

-- CreateIndex
CREATE INDEX "Persona_status_idx" ON "Persona"("status");

-- CreateIndex
CREATE INDEX "Persona_marketplaceMode_idx" ON "Persona"("marketplaceMode");

-- CreateIndex
CREATE INDEX "Persona_verificationBadge_idx" ON "Persona"("verificationBadge");

-- CreateIndex
CREATE INDEX "Persona_trustScore_idx" ON "Persona"("trustScore");

-- CreateIndex
CREATE INDEX "Persona_isDiscoverable_idx" ON "Persona"("isDiscoverable");

-- CreateIndex
CREATE INDEX "Persona_deletedAt_idx" ON "Persona"("deletedAt");

-- CreateIndex
CREATE UNIQUE INDEX "PersonaProfile_personaId_key" ON "PersonaProfile"("personaId");

-- CreateIndex
CREATE INDEX "PersonaProfile_country_idx" ON "PersonaProfile"("country");

-- CreateIndex
CREATE INDEX "PersonaProfile_city_idx" ON "PersonaProfile"("city");

-- CreateIndex
CREATE INDEX "PersonaProfile_remoteOnly_idx" ON "PersonaProfile"("remoteOnly");

-- CreateIndex
CREATE INDEX "PersonaSkill_personaId_idx" ON "PersonaSkill"("personaId");

-- CreateIndex
CREATE INDEX "PersonaSkill_skillId_idx" ON "PersonaSkill"("skillId");

-- CreateIndex
CREATE UNIQUE INDEX "PersonaSkill_personaId_skillId_key" ON "PersonaSkill"("personaId", "skillId");

-- CreateIndex
CREATE INDEX "PersonaInterest_personaId_idx" ON "PersonaInterest"("personaId");

-- CreateIndex
CREATE INDEX "PersonaInterest_interestId_idx" ON "PersonaInterest"("interestId");

-- CreateIndex
CREATE UNIQUE INDEX "PersonaInterest_personaId_interestId_key" ON "PersonaInterest"("personaId", "interestId");

-- CreateIndex
CREATE INDEX "PersonaIntent_personaId_idx" ON "PersonaIntent"("personaId");

-- CreateIndex
CREATE INDEX "PersonaIntent_intentKey_idx" ON "PersonaIntent"("intentKey");

-- CreateIndex
CREATE INDEX "PersonaMedia_personaId_idx" ON "PersonaMedia"("personaId");

-- CreateIndex
CREATE INDEX "PersonaMedia_isPrimary_idx" ON "PersonaMedia"("isPrimary");

-- CreateIndex
CREATE INDEX "PersonaBookmark_sourcePersonaId_idx" ON "PersonaBookmark"("sourcePersonaId");

-- CreateIndex
CREATE INDEX "PersonaBookmark_targetPersonaId_idx" ON "PersonaBookmark"("targetPersonaId");

-- CreateIndex
CREATE UNIQUE INDEX "PersonaBookmark_sourcePersonaId_targetPersonaId_key" ON "PersonaBookmark"("sourcePersonaId", "targetPersonaId");

-- CreateIndex
CREATE INDEX "ListingBookmark_personaId_idx" ON "ListingBookmark"("personaId");

-- CreateIndex
CREATE INDEX "ListingBookmark_listingId_idx" ON "ListingBookmark"("listingId");

-- CreateIndex
CREATE UNIQUE INDEX "ListingBookmark_personaId_listingId_key" ON "ListingBookmark"("personaId", "listingId");

-- CreateIndex
CREATE INDEX "PersonaReview_authorPersonaId_idx" ON "PersonaReview"("authorPersonaId");

-- CreateIndex
CREATE INDEX "PersonaReview_targetPersonaId_idx" ON "PersonaReview"("targetPersonaId");

-- CreateIndex
CREATE INDEX "PersonaReview_rating_idx" ON "PersonaReview"("rating");

-- CreateIndex
CREATE INDEX "PersonaBlock_blockerPersonaId_idx" ON "PersonaBlock"("blockerPersonaId");

-- CreateIndex
CREATE INDEX "PersonaBlock_blockedPersonaId_idx" ON "PersonaBlock"("blockedPersonaId");

-- CreateIndex
CREATE UNIQUE INDEX "PersonaBlock_blockerPersonaId_blockedPersonaId_key" ON "PersonaBlock"("blockerPersonaId", "blockedPersonaId");

-- CreateIndex
CREATE INDEX "PersonaReport_reporterPersonaId_idx" ON "PersonaReport"("reporterPersonaId");

-- CreateIndex
CREATE INDEX "PersonaReport_targetPersonaId_idx" ON "PersonaReport"("targetPersonaId");

-- CreateIndex
CREATE INDEX "PersonaReport_category_idx" ON "PersonaReport"("category");

-- CreateIndex
CREATE INDEX "SearchIndexShard_indexType_idx" ON "SearchIndexShard"("indexType");

-- CreateIndex
CREATE INDEX "SearchIndexShard_shardKey_idx" ON "SearchIndexShard"("shardKey");

-- CreateIndex
CREATE INDEX "SearchQueryLog_normalizedQuery_idx" ON "SearchQueryLog"("normalizedQuery");

-- CreateIndex
CREATE INDEX "SearchQueryLog_createdAt_idx" ON "SearchQueryLog"("createdAt");

-- CreateIndex
CREATE INDEX "SearchEvent_queryId_idx" ON "SearchEvent"("queryId");

-- CreateIndex
CREATE INDEX "SearchEvent_userId_idx" ON "SearchEvent"("userId");

-- CreateIndex
CREATE INDEX "SearchEvent_entityType_entityId_idx" ON "SearchEvent"("entityType", "entityId");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalizedSearchProfile_userId_key" ON "PersonalizedSearchProfile"("userId");

-- CreateIndex
CREATE INDEX "PersonalizedSearchProfile_userId_idx" ON "PersonalizedSearchProfile"("userId");

-- CreateIndex
CREATE INDEX "SearchRankingModel_name_version_idx" ON "SearchRankingModel"("name", "version");

-- CreateIndex
CREATE INDEX "TrustedDevice_userId_idx" ON "TrustedDevice"("userId");

-- CreateIndex
CREATE INDEX "TrustedDevice_trustLevel_idx" ON "TrustedDevice"("trustLevel");

-- CreateIndex
CREATE INDEX "TrustedDevice_lastSeenAt_idx" ON "TrustedDevice"("lastSeenAt");

-- CreateIndex
CREATE UNIQUE INDEX "TrustedDevice_userId_deviceFingerprint_key" ON "TrustedDevice"("userId", "deviceFingerprint");

-- CreateIndex
CREATE INDEX "PrivacyRequest_userId_idx" ON "PrivacyRequest"("userId");

-- CreateIndex
CREATE INDEX "PrivacyRequest_requestType_idx" ON "PrivacyRequest"("requestType");

-- CreateIndex
CREATE INDEX "PrivacyRequest_status_idx" ON "PrivacyRequest"("status");

-- CreateIndex
CREATE INDEX "ModerationCase_status_idx" ON "ModerationCase"("status");

-- CreateIndex
CREATE INDEX "ModerationCase_severity_idx" ON "ModerationCase"("severity");

-- CreateIndex
CREATE INDEX "ModerationCase_category_idx" ON "ModerationCase"("category");

-- CreateIndex
CREATE INDEX "ModerationCase_openedAt_idx" ON "ModerationCase"("openedAt");

-- CreateIndex
CREATE INDEX "ModerationAction_moderationCaseId_idx" ON "ModerationAction"("moderationCaseId");

-- CreateIndex
CREATE INDEX "ModerationAction_actionType_idx" ON "ModerationAction"("actionType");

-- CreateIndex
CREATE INDEX "FraudCase_status_idx" ON "FraudCase"("status");

-- CreateIndex
CREATE INDEX "FraudCase_riskScore_idx" ON "FraudCase"("riskScore");

-- CreateIndex
CREATE INDEX "FraudCase_createdAt_idx" ON "FraudCase"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "SecurityIncident_incidentKey_key" ON "SecurityIncident"("incidentKey");

-- CreateIndex
CREATE INDEX "SecurityIncident_severity_idx" ON "SecurityIncident"("severity");

-- CreateIndex
CREATE INDEX "SecurityIncident_detectedAt_idx" ON "SecurityIncident"("detectedAt");

-- CreateIndex
CREATE INDEX "ApiAccessAudit_workspaceApiKeyId_idx" ON "ApiAccessAudit"("workspaceApiKeyId");

-- CreateIndex
CREATE INDEX "ApiAccessAudit_endpoint_idx" ON "ApiAccessAudit"("endpoint");

-- CreateIndex
CREATE INDEX "ApiAccessAudit_responseStatus_idx" ON "ApiAccessAudit"("responseStatus");

-- CreateIndex
CREATE INDEX "ApiAccessAudit_accessedAt_idx" ON "ApiAccessAudit"("accessedAt");

-- CreateIndex
CREATE INDEX "WorkspaceCustomRole_workspaceId_idx" ON "WorkspaceCustomRole"("workspaceId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkspaceCustomRole_workspaceId_slug_key" ON "WorkspaceCustomRole"("workspaceId", "slug");

-- CreateIndex
CREATE INDEX "WorkspaceMemberRole_workspaceMemberId_idx" ON "WorkspaceMemberRole"("workspaceMemberId");

-- CreateIndex
CREATE INDEX "WorkspaceMemberRole_customRoleId_idx" ON "WorkspaceMemberRole"("customRoleId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkspaceMemberRole_workspaceMemberId_customRoleId_key" ON "WorkspaceMemberRole"("workspaceMemberId", "customRoleId");

-- CreateIndex
CREATE INDEX "WorkspacePermission_workspaceId_idx" ON "WorkspacePermission"("workspaceId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkspacePermission_workspaceId_permissionKey_key" ON "WorkspacePermission"("workspaceId", "permissionKey");

-- CreateIndex
CREATE INDEX "WorkspaceRolePermission_customRoleId_idx" ON "WorkspaceRolePermission"("customRoleId");

-- CreateIndex
CREATE INDEX "WorkspaceRolePermission_permissionId_idx" ON "WorkspaceRolePermission"("permissionId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkspaceRolePermission_customRoleId_permissionId_key" ON "WorkspaceRolePermission"("customRoleId", "permissionId");

-- CreateIndex
CREATE INDEX "WorkspaceComplianceRecord_workspaceId_idx" ON "WorkspaceComplianceRecord"("workspaceId");

-- CreateIndex
CREATE INDEX "WorkspaceComplianceRecord_complianceType_idx" ON "WorkspaceComplianceRecord"("complianceType");

-- CreateIndex
CREATE INDEX "Conversation_type_idx" ON "Conversation"("type");

-- CreateIndex
CREATE INDEX "Conversation_status_idx" ON "Conversation"("status");

-- CreateIndex
CREATE INDEX "Conversation_deletedAt_idx" ON "Conversation"("deletedAt");

-- CreateIndex
CREATE UNIQUE INDEX "Listing_slug_key" ON "Listing"("slug");

-- CreateIndex
CREATE INDEX "Listing_workspaceId_idx" ON "Listing"("workspaceId");

-- CreateIndex
CREATE INDEX "Listing_personaId_idx" ON "Listing"("personaId");

-- CreateIndex
CREATE INDEX "Listing_type_idx" ON "Listing"("type");

-- CreateIndex
CREATE INDEX "Listing_status_idx" ON "Listing"("status");

-- CreateIndex
CREATE INDEX "Listing_visibility_idx" ON "Listing"("visibility");

-- CreateIndex
CREATE INDEX "Listing_deletedAt_idx" ON "Listing"("deletedAt");

-- CreateIndex
CREATE INDEX "ListingApplication_listingId_idx" ON "ListingApplication"("listingId");

-- CreateIndex
CREATE INDEX "ListingApplication_applicantPersonaId_idx" ON "ListingApplication"("applicantPersonaId");

-- CreateIndex
CREATE INDEX "ListingApplication_status_idx" ON "ListingApplication"("status");

-- CreateIndex
CREATE UNIQUE INDEX "ListingApplication_listingId_applicantPersonaId_key" ON "ListingApplication"("listingId", "applicantPersonaId");

-- CreateIndex
CREATE UNIQUE INDEX "Match_createdBySwipeId_key" ON "Match"("createdBySwipeId");

-- CreateIndex
CREATE INDEX "Match_personaAId_idx" ON "Match"("personaAId");

-- CreateIndex
CREATE INDEX "Match_personaBId_idx" ON "Match"("personaBId");

-- CreateIndex
CREATE INDEX "Match_matchedAt_idx" ON "Match"("matchedAt");

-- CreateIndex
CREATE INDEX "Match_lastInteractionAt_idx" ON "Match"("lastInteractionAt");

-- CreateIndex
CREATE UNIQUE INDEX "Match_personaAId_personaBId_key" ON "Match"("personaAId", "personaBId");

-- CreateIndex
CREATE INDEX "Message_senderPersonaId_idx" ON "Message"("senderPersonaId");

-- CreateIndex
CREATE INDEX "Message_status_idx" ON "Message"("status");

-- CreateIndex
CREATE INDEX "Message_replyToMessageId_idx" ON "Message"("replyToMessageId");

-- CreateIndex
CREATE INDEX "MessageAttachment_malwareScanStatus_idx" ON "MessageAttachment"("malwareScanStatus");

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_tokenHash_key" ON "RefreshToken"("tokenHash");

-- CreateIndex
CREATE INDEX "RefreshToken_sessionId_idx" ON "RefreshToken"("sessionId");

-- CreateIndex
CREATE INDEX "RefreshToken_tokenFamily_idx" ON "RefreshToken"("tokenFamily");

-- CreateIndex
CREATE INDEX "RefreshToken_expiresAt_idx" ON "RefreshToken"("expiresAt");

-- CreateIndex
CREATE INDEX "Skill_category_idx" ON "Skill"("category");

-- CreateIndex
CREATE UNIQUE INDEX "User_primaryEmail_key" ON "User"("primaryEmail");

-- CreateIndex
CREATE UNIQUE INDEX "User_normalizedEmail_key" ON "User"("normalizedEmail");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_normalizedPhoneNumber_key" ON "User"("normalizedPhoneNumber");

-- CreateIndex
CREATE INDEX "User_accountStatus_idx" ON "User"("accountStatus");

-- CreateIndex
CREATE INDEX "User_verificationLevel_idx" ON "User"("verificationLevel");

-- CreateIndex
CREATE INDEX "User_trustScore_idx" ON "User"("trustScore");

-- CreateIndex
CREATE INDEX "User_createdAt_idx" ON "User"("createdAt");

-- AddForeignKey
ALTER TABLE "RecommendationCandidate" ADD CONSTRAINT "RecommendationCandidate_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecommendationCandidate" ADD CONSTRAINT "RecommendationCandidate_targetPersonaId_fkey" FOREIGN KEY ("targetPersonaId") REFERENCES "Persona"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecommendationCandidate" ADD CONSTRAINT "RecommendationCandidate_targetListingId_fkey" FOREIGN KEY ("targetListingId") REFERENCES "Listing"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecommendationCandidate" ADD CONSTRAINT "RecommendationCandidate_targetBusinessId_fkey" FOREIGN KEY ("targetBusinessId") REFERENCES "Workspace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecommendationFeedback" ADD CONSTRAINT "RecommendationFeedback_recommendationCandidateId_fkey" FOREIGN KEY ("recommendationCandidateId") REFERENCES "RecommendationCandidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecommendationFeedback" ADD CONSTRAINT "RecommendationFeedback_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchScore" ADD CONSTRAINT "MatchScore_personaAId_fkey" FOREIGN KEY ("personaAId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchScore" ADD CONSTRAINT "MatchScore_personaBId_fkey" FOREIGN KEY ("personaBId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalizationProfile" ADD CONSTRAINT "PersonalizationProfile_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalyticsEvent" ADD CONSTRAINT "AnalyticsEvent_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalyticsEvent" ADD CONSTRAINT "AnalyticsEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalyticsEvent" ADD CONSTRAINT "AnalyticsEvent_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalyticsSession" ADD CONSTRAINT "AnalyticsSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalyticsSession" ADD CONSTRAINT "AnalyticsSession_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeatureFlagAssignment" ADD CONSTRAINT "FeatureFlagAssignment_featureFlagId_fkey" FOREIGN KEY ("featureFlagId") REFERENCES "FeatureFlag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeatureFlagAssignment" ADD CONSTRAINT "FeatureFlagAssignment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeatureFlagAssignment" ADD CONSTRAINT "FeatureFlagAssignment_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeatureFlagAssignment" ADD CONSTRAINT "FeatureFlagAssignment_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SearchAnalytics" ADD CONSTRAINT "SearchAnalytics_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ErrorLog" ADD CONSTRAINT "ErrorLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ErrorLog" ADD CONSTRAINT "ErrorLog_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditExportJob" ADD CONSTRAINT "AuditExportJob_requestedByUserId_fkey" FOREIGN KEY ("requestedByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecoveryJob" ADD CONSTRAINT "RecoveryJob_databaseBackupId_fkey" FOREIGN KEY ("databaseBackupId") REFERENCES "DatabaseBackup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecoveryJob" ADD CONSTRAINT "RecoveryJob_requestedByUserId_fkey" FOREIGN KEY ("requestedByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RetentionExecution" ADD CONSTRAINT "RetentionExecution_retentionPolicyId_fkey" FOREIGN KEY ("retentionPolicyId") REFERENCES "DataRetentionPolicy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisasterRecoveryTest" ADD CONSTRAINT "DisasterRecoveryTest_businessContinuityPlanId_fkey" FOREIGN KEY ("businessContinuityPlanId") REFERENCES "BusinessContinuityPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisasterRecoveryTest" ADD CONSTRAINT "DisasterRecoveryTest_executedByUserId_fkey" FOREIGN KEY ("executedByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DomainEvent" ADD CONSTRAINT "DomainEvent_actorUserId_fkey" FOREIGN KEY ("actorUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DomainEvent" ADD CONSTRAINT "DomainEvent_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventOutbox" ADD CONSTRAINT "EventOutbox_domainEventId_fkey" FOREIGN KEY ("domainEventId") REFERENCES "DomainEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkflowExecution" ADD CONSTRAINT "WorkflowExecution_workflowDefinitionId_fkey" FOREIGN KEY ("workflowDefinitionId") REFERENCES "WorkflowDefinition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkflowExecution" ADD CONSTRAINT "WorkflowExecution_startedByUserId_fkey" FOREIGN KEY ("startedByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkflowExecution" ADD CONSTRAINT "WorkflowExecution_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkflowStepExecution" ADD CONSTRAINT "WorkflowStepExecution_workflowExecutionId_fkey" FOREIGN KEY ("workflowExecutionId") REFERENCES "WorkflowExecution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SagaStepExecution" ADD CONSTRAINT "SagaStepExecution_sagaExecutionId_fkey" FOREIGN KEY ("sagaExecutionId") REFERENCES "SagaExecution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommandExecution" ADD CONSTRAINT "CommandExecution_issuedByUserId_fkey" FOREIGN KEY ("issuedByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IdempotencyKey" ADD CONSTRAINT "IdempotencyKey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlagAssignment" ADD CONSTRAINT "FlagAssignment_flagId_fkey" FOREIGN KEY ("flagId") REFERENCES "FeatureFlag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExperimentVariant" ADD CONSTRAINT "ExperimentVariant_experimentId_fkey" FOREIGN KEY ("experimentId") REFERENCES "Experiment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDeviceFingerprint" ADD CONSTRAINT "UserDeviceFingerprint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDeviceFingerprint" ADD CONSTRAINT "UserDeviceFingerprint_deviceFingerprintId_fkey" FOREIGN KEY ("deviceFingerprintId") REFERENCES "DeviceFingerprint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserReputation" ADD CONSTRAINT "UserReputation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ThreatSignal" ADD CONSTRAINT "ThreatSignal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ThreatSignal" ADD CONSTRAINT "ThreatSignal_deviceFingerprintId_fkey" FOREIGN KEY ("deviceFingerprintId") REFERENCES "DeviceFingerprint"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FraudInvestigationCase" ADD CONSTRAINT "FraudInvestigationCase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FraudInvestigationCase" ADD CONSTRAINT "FraudInvestigationCase_assignedModeratorId_fkey" FOREIGN KEY ("assignedModeratorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbuseEnforcementAction" ADD CONSTRAINT "AbuseEnforcementAction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbuseEnforcementAction" ADD CONSTRAINT "AbuseEnforcementAction_fraudInvestigationCaseId_fkey" FOREIGN KEY ("fraudInvestigationCaseId") REFERENCES "FraudInvestigationCase"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbuseEnforcementAction" ADD CONSTRAINT "AbuseEnforcementAction_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkedAccount" ADD CONSTRAINT "LinkedAccount_linkedAccountClusterId_fkey" FOREIGN KEY ("linkedAccountClusterId") REFERENCES "LinkedAccountCluster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkedAccount" ADD CONSTRAINT "LinkedAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserVelocityMetric" ADD CONSTRAINT "UserVelocityMetric_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShadowBan" ADD CONSTRAINT "ShadowBan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RiskScoreHistory" ADD CONSTRAINT "RiskScoreHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceMember" ADD CONSTRAINT "WorkspaceMember_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceMember" ADD CONSTRAINT "WorkspaceMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceMember" ADD CONSTRAINT "WorkspaceMember_invitedByUserId_fkey" FOREIGN KEY ("invitedByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceInvitation" ADD CONSTRAINT "WorkspaceInvitation_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceInvitation" ADD CONSTRAINT "WorkspaceInvitation_invitedByUserId_fkey" FOREIGN KEY ("invitedByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceFeatureEntitlement" ADD CONSTRAINT "WorkspaceFeatureEntitlement_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceApiKey" ADD CONSTRAINT "WorkspaceApiKey_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceApiKey" ADD CONSTRAINT "WorkspaceApiKey_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceAuditLog" ADD CONSTRAINT "WorkspaceAuditLog_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceAuditLog" ADD CONSTRAINT "WorkspaceAuditLog_actorUserId_fkey" FOREIGN KEY ("actorUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComplianceDocument" ADD CONSTRAINT "ComplianceDocument_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComplianceDocument" ADD CONSTRAINT "ComplianceDocument_uploadedByUserId_fkey" FOREIGN KEY ("uploadedByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityFeedItem" ADD CONSTRAINT "ActivityFeedItem_ownerUserId_fkey" FOREIGN KEY ("ownerUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityFeedItem" ADD CONSTRAINT "ActivityFeedItem_actorUserId_fkey" FOREIGN KEY ("actorUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RealtimeConnection" ADD CONSTRAINT "RealtimeConnection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RealtimeSubscription" ADD CONSTRAINT "RealtimeSubscription_realtimeConnectionId_fkey" FOREIGN KEY ("realtimeConnectionId") REFERENCES "RealtimeConnection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageDeliveryQueue" ADD CONSTRAINT "MessageDeliveryQueue_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageDeliveryQueue" ADD CONSTRAINT "MessageDeliveryQueue_recipientUserId_fkey" FOREIGN KEY ("recipientUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailVerification" ADD CONSTRAINT "EmailVerification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhoneVerification" ADD CONSTRAINT "PhoneVerification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OTPChallenge" ADD CONSTRAINT "OTPChallenge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MFAMethod" ADD CONSTRAINT "MFAMethod_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BackupCode" ADD CONSTRAINT "BackupCode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordHistory" ADD CONSTRAINT "PasswordHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountRecoveryRequest" ADD CONSTRAINT "AccountRecoveryRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthEvent" ADD CONSTRAINT "AuthEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SecurityEvent" ADD CONSTRAINT "SecurityEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SecurityEvent" ADD CONSTRAINT "SecurityEvent_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SecurityEvent" ADD CONSTRAINT "SecurityEvent_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRiskSignal" ADD CONSTRAINT "UserRiskSignal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserConsent" ADD CONSTRAINT "UserConsent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebhookEndpoint" ADD CONSTRAINT "WebhookEndpoint_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebhookDelivery" ADD CONSTRAINT "WebhookDelivery_webhookEndpointId_fkey" FOREIGN KEY ("webhookEndpointId") REFERENCES "WebhookEndpoint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceHealthCheck" ADD CONSTRAINT "ServiceHealthCheck_serviceRegistryId_fkey" FOREIGN KEY ("serviceRegistryId") REFERENCES "ServiceRegistry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiKey" ADD CONSTRAINT "ApiKey_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiKey" ADD CONSTRAINT "ApiKey_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MediaAsset" ADD CONSTRAINT "MediaAsset_uploadedByUserId_fkey" FOREIGN KEY ("uploadedByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserConsentRecord" ADD CONSTRAINT "UserConsentRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivacyPolicyVersion" ADD CONSTRAINT "PrivacyPolicyVersion_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TermsOfServiceVersion" ADD CONSTRAINT "TermsOfServiceVersion_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataSubjectRequest" ADD CONSTRAINT "DataSubjectRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDataExport" ADD CONSTRAINT "UserDataExport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegalHold" ADD CONSTRAINT "LegalHold_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegalHold" ADD CONSTRAINT "LegalHold_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LawEnforcementRequest" ADD CONSTRAINT "LawEnforcementRequest_affectedUserId_fkey" FOREIGN KEY ("affectedUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CookieConsentRecord" ADD CONSTRAINT "CookieConsentRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedGenerationJob" ADD CONSTRAINT "FeedGenerationJob_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedSnapshot" ADD CONSTRAINT "FeedSnapshot_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedSnapshot" ADD CONSTRAINT "FeedSnapshot_generationJobId_fkey" FOREIGN KEY ("generationJobId") REFERENCES "FeedGenerationJob"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedCard" ADD CONSTRAINT "FeedCard_feedSnapshotId_fkey" FOREIGN KEY ("feedSnapshotId") REFERENCES "FeedSnapshot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedCard" ADD CONSTRAINT "FeedCard_sourcePersonaId_fkey" FOREIGN KEY ("sourcePersonaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedCard" ADD CONSTRAINT "FeedCard_targetPersonaId_fkey" FOREIGN KEY ("targetPersonaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SwipeEvent" ADD CONSTRAINT "SwipeEvent_sourcePersonaId_fkey" FOREIGN KEY ("sourcePersonaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SwipeEvent" ADD CONSTRAINT "SwipeEvent_targetPersonaId_fkey" FOREIGN KEY ("targetPersonaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SwipeEvent" ADD CONSTRAINT "SwipeEvent_feedCardId_fkey" FOREIGN KEY ("feedCardId") REFERENCES "FeedCard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_personaAId_fkey" FOREIGN KEY ("personaAId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_personaBId_fkey" FOREIGN KEY ("personaBId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_matchScoreId_fkey" FOREIGN KEY ("matchScoreId") REFERENCES "MatchScore"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_createdBySwipeId_fkey" FOREIGN KEY ("createdBySwipeId") REFERENCES "SwipeEvent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchInteraction" ADD CONSTRAINT "MatchInteraction_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchInteraction" ADD CONSTRAINT "MatchInteraction_actorPersonaId_fkey" FOREIGN KEY ("actorPersonaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaEmbedding" ADD CONSTRAINT "PersonaEmbedding_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscoveryAnalytics" ADD CONSTRAINT "DiscoveryAnalytics_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConversationParticipant" ADD CONSTRAINT "ConversationParticipant_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConversationParticipant" ADD CONSTRAINT "ConversationParticipant_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderPersonaId_fkey" FOREIGN KEY ("senderPersonaId") REFERENCES "Persona"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_replyToMessageId_fkey" FOREIGN KEY ("replyToMessageId") REFERENCES "Message"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageAttachment" ADD CONSTRAINT "MessageAttachment_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageReceipt" ADD CONSTRAINT "MessageReceipt_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageReceipt" ADD CONSTRAINT "MessageReceipt_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageReaction" ADD CONSTRAINT "MessageReaction_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageReaction" ADD CONSTRAINT "MessageReaction_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageModerationEvent" ADD CONSTRAINT "MessageModerationEvent_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Presence" ADD CONSTRAINT "Presence_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypingIndicator" ADD CONSTRAINT "TypingIndicator_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypingIndicator" ADD CONSTRAINT "TypingIndicator_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebSocketConnection" ADD CONSTRAINT "WebSocketConnection_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebSocketConnection" ADD CONSTRAINT "WebSocketConnection_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PushNotificationDevice" ADD CONSTRAINT "PushNotificationDevice_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationQueue" ADD CONSTRAINT "NotificationQueue_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TraceSpan" ADD CONSTRAINT "TraceSpan_traceId_fkey" FOREIGN KEY ("traceId") REFERENCES "DistributedTrace"("traceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForensicEvent" ADD CONSTRAINT "ForensicEvent_incidentReportId_fkey" FOREIGN KEY ("incidentReportId") REFERENCES "IncidentReport"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillingCustomer" ADD CONSTRAINT "BillingCustomer_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentMethod" ADD CONSTRAINT "PaymentMethod_billingCustomerId_fkey" FOREIGN KEY ("billingCustomerId") REFERENCES "BillingCustomer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillingSubscription" ADD CONSTRAINT "BillingSubscription_billingCustomerId_fkey" FOREIGN KEY ("billingCustomerId") REFERENCES "BillingCustomer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillingSubscription" ADD CONSTRAINT "BillingSubscription_subscriptionPlanId_fkey" FOREIGN KEY ("subscriptionPlanId") REFERENCES "SubscriptionPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_billingCustomerId_fkey" FOREIGN KEY ("billingCustomerId") REFERENCES "BillingCustomer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_billingSubscriptionId_fkey" FOREIGN KEY ("billingSubscriptionId") REFERENCES "BillingSubscription"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoiceLineItem" ADD CONSTRAINT "InvoiceLineItem_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoiceTax" ADD CONSTRAINT "InvoiceTax_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_paymentMethodId_fkey" FOREIGN KEY ("paymentMethodId") REFERENCES "PaymentMethod"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankAccount" ADD CONSTRAINT "BankAccount_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WalletAccount" ADD CONSTRAINT "WalletAccount_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payout" ADD CONSTRAINT "Payout_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payout" ADD CONSTRAINT "Payout_bankAccountId_fkey" FOREIGN KEY ("bankAccountId") REFERENCES "BankAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payout" ADD CONSTRAINT "Payout_walletAccountId_fkey" FOREIGN KEY ("walletAccountId") REFERENCES "WalletAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Refund" ADD CONSTRAINT "Refund_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Persona" ADD CONSTRAINT "Persona_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaProfile" ADD CONSTRAINT "PersonaProfile_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaSkill" ADD CONSTRAINT "PersonaSkill_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaSkill" ADD CONSTRAINT "PersonaSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaInterest" ADD CONSTRAINT "PersonaInterest_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaInterest" ADD CONSTRAINT "PersonaInterest_interestId_fkey" FOREIGN KEY ("interestId") REFERENCES "Interest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaIntent" ADD CONSTRAINT "PersonaIntent_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaMedia" ADD CONSTRAINT "PersonaMedia_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListingApplication" ADD CONSTRAINT "ListingApplication_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListingApplication" ADD CONSTRAINT "ListingApplication_applicantPersonaId_fkey" FOREIGN KEY ("applicantPersonaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaBookmark" ADD CONSTRAINT "PersonaBookmark_sourcePersonaId_fkey" FOREIGN KEY ("sourcePersonaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaBookmark" ADD CONSTRAINT "PersonaBookmark_targetPersonaId_fkey" FOREIGN KEY ("targetPersonaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListingBookmark" ADD CONSTRAINT "ListingBookmark_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListingBookmark" ADD CONSTRAINT "ListingBookmark_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaReview" ADD CONSTRAINT "PersonaReview_authorPersonaId_fkey" FOREIGN KEY ("authorPersonaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaReview" ADD CONSTRAINT "PersonaReview_targetPersonaId_fkey" FOREIGN KEY ("targetPersonaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaBlock" ADD CONSTRAINT "PersonaBlock_blockerPersonaId_fkey" FOREIGN KEY ("blockerPersonaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaBlock" ADD CONSTRAINT "PersonaBlock_blockedPersonaId_fkey" FOREIGN KEY ("blockedPersonaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaReport" ADD CONSTRAINT "PersonaReport_reporterPersonaId_fkey" FOREIGN KEY ("reporterPersonaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaReport" ADD CONSTRAINT "PersonaReport_targetPersonaId_fkey" FOREIGN KEY ("targetPersonaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SearchEvent" ADD CONSTRAINT "SearchEvent_queryId_fkey" FOREIGN KEY ("queryId") REFERENCES "SearchQueryLog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrustedDevice" ADD CONSTRAINT "TrustedDevice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivacyRequest" ADD CONSTRAINT "PrivacyRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModerationCase" ADD CONSTRAINT "ModerationCase_targetPersonaId_fkey" FOREIGN KEY ("targetPersonaId") REFERENCES "Persona"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModerationCase" ADD CONSTRAINT "ModerationCase_targetMessageId_fkey" FOREIGN KEY ("targetMessageId") REFERENCES "Message"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModerationCase" ADD CONSTRAINT "ModerationCase_targetWorkspaceId_fkey" FOREIGN KEY ("targetWorkspaceId") REFERENCES "Workspace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModerationCase" ADD CONSTRAINT "ModerationCase_reportedByPersonaId_fkey" FOREIGN KEY ("reportedByPersonaId") REFERENCES "Persona"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModerationCase" ADD CONSTRAINT "ModerationCase_assignedModeratorId_fkey" FOREIGN KEY ("assignedModeratorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModerationAction" ADD CONSTRAINT "ModerationAction_moderationCaseId_fkey" FOREIGN KEY ("moderationCaseId") REFERENCES "ModerationCase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModerationAction" ADD CONSTRAINT "ModerationAction_performedByUserId_fkey" FOREIGN KEY ("performedByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FraudCase" ADD CONSTRAINT "FraudCase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FraudCase" ADD CONSTRAINT "FraudCase_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FraudCase" ADD CONSTRAINT "FraudCase_assignedInvestigatorId_fkey" FOREIGN KEY ("assignedInvestigatorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiAccessAudit" ADD CONSTRAINT "ApiAccessAudit_workspaceApiKeyId_fkey" FOREIGN KEY ("workspaceApiKeyId") REFERENCES "WorkspaceApiKey"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceCustomRole" ADD CONSTRAINT "WorkspaceCustomRole_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceMemberRole" ADD CONSTRAINT "WorkspaceMemberRole_workspaceMemberId_fkey" FOREIGN KEY ("workspaceMemberId") REFERENCES "WorkspaceMember"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceMemberRole" ADD CONSTRAINT "WorkspaceMemberRole_customRoleId_fkey" FOREIGN KEY ("customRoleId") REFERENCES "WorkspaceCustomRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspacePermission" ADD CONSTRAINT "WorkspacePermission_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceRolePermission" ADD CONSTRAINT "WorkspaceRolePermission_customRoleId_fkey" FOREIGN KEY ("customRoleId") REFERENCES "WorkspaceCustomRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceRolePermission" ADD CONSTRAINT "WorkspaceRolePermission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "WorkspacePermission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceComplianceRecord" ADD CONSTRAINT "WorkspaceComplianceRecord_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
