#!/bin/bash

set -e

ROOT="$HOME/Desktop/Modulation/StackForge-PARAPair"

echo "🚀 PARAPAIR Architecture Restructure Starting..."

WEB="$ROOT/apps/web/src"
APP="$ROOT/apps/web/app"
API="$ROOT/apps/api/src"
DB="$ROOT/database"
PACKAGES="$ROOT/packages"
DOCS="$ROOT/docs"

############################################
# FRONTEND
############################################

mkdir -p "$WEB/shared/components"
mkdir -p "$WEB/shared/hooks"
mkdir -p "$WEB/shared/lib"
mkdir -p "$WEB/shared/utils"
mkdir -p "$WEB/shared/constants"
mkdir -p "$WEB/shared/types"
mkdir -p "$WEB/shared/layouts"

mkdir -p "$WEB/features/dashboard/components"
mkdir -p "$WEB/features/messaging/components"
mkdir -p "$WEB/features/profile/components"

############################################
# MOVE PLATFORM COMPONENTS
############################################

mv "$APP/(platform)/dashboard/components/analytics" \
   "$WEB/features/dashboard/" 2>/dev/null || true

mv "$APP/(platform)/dashboard/components/inbox" \
   "$WEB/features/messaging/" 2>/dev/null || true

mv "$APP/(platform)/dashboard/components/profile" \
   "$WEB/features/profile/" 2>/dev/null || true

mv "$APP/(platform)/dashboard/components/shared" \
   "$WEB/shared/components/" 2>/dev/null || true

############################################
# MOVE GLOBAL COMPONENTS
############################################

mv "$WEB/components/navigation" \
   "$WEB/shared/components/" 2>/dev/null || true

mv "$WEB/components/layout" \
   "$WEB/shared/layouts/" 2>/dev/null || true

mv "$WEB/components/ui" \
   "$WEB/shared/components/" 2>/dev/null || true

############################################
# BACKEND COMMON
############################################

mkdir -p "$API/common/interceptors"
mkdir -p "$API/common/filters"
mkdir -p "$API/common/pipes"
mkdir -p "$API/common/constants"
mkdir -p "$API/common/utils"

############################################
# REALTIME STANDARDIZATION
############################################

mkdir -p "$API/modules/realtime/gateways"

mv "$API/modules/chat/chat.gateway.ts" \
   "$API/modules/realtime/gateways/" 2>/dev/null || true

mv "$API/modules/socket/socket.gateway.ts" \
   "$API/modules/realtime/gateways/" 2>/dev/null || true

############################################
# MATCH MODULE
############################################

mkdir -p "$API/modules/match/services"

mv "$API/modules/match/match.service.ts" \
   "$API/modules/match/services/" 2>/dev/null || true

############################################
# DATABASE
############################################

mkdir -p "$DB/prisma/schema/auth"
mkdir -p "$DB/prisma/schema/core"
mkdir -p "$DB/prisma/schema/engagement"

mv "$DB/prisma/schema/user.prisma" \
   "$DB/prisma/schema/auth/" 2>/dev/null || true

mv "$DB/prisma/schema/profile.prisma" \
   "$DB/prisma/schema/core/" 2>/dev/null || true

mv "$DB/prisma/schema/swipe.prisma" \
   "$DB/prisma/schema/engagement/" 2>/dev/null || true

############################################
# PACKAGES
############################################

mkdir -p "$PACKAGES/ui/src/components"
mkdir -p "$PACKAGES/utils/src"
mkdir -p "$PACKAGES/config/src"

############################################
# DOCS
############################################

mkdir -p "$DOCS/frontend"
mkdir -p "$DOCS/backend"
mkdir -p "$DOCS/security"

############################################
# ARCHITECTURE FILE
############################################

cat > "$ROOT/ARCHITECTURE.md" <<EOF
# PARAPAIR Architecture

## Frontend
- Feature-based architecture
- Shared systems
- Next.js App Router

## Backend
- NestJS modular structure
- Realtime gateways

## Database
- Modular Prisma schemas
EOF

echo ""
echo "✅ PARAPAIR RESTRUCTURE COMPLETE"
echo ""
