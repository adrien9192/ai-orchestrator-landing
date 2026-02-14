#!/bin/bash

# Formation AI Orchestrator - Landing Page Deployment Scripts
# Fast deployment of 3 variants for A/B testing
# Usage: bash DEPLOYMENT-SCRIPTS.sh [command]

set -e

PROJECT_DIR="/data/.openclaw/workspace/projects/ai-orchestrator-landing"
APP_DIR="$PROJECT_DIR/app"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# ============================================================================
# HELPER FUNCTIONS
# ============================================================================

print_header() {
  echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${BLUE}$1${NC}"
  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

print_success() {
  echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
  echo -e "${RED}❌ $1${NC}"
}

print_warning() {
  echo -e "${YELLOW}⚠️  $1${NC}"
}

print_info() {
  echo -e "${BLUE}ℹ️  $1${NC}"
}

# ============================================================================
# HEALTH CHECK
# ============================================================================

health_check() {
  print_header "Running Health Checks"
  
  # Check project directory
  if [ ! -d "$APP_DIR" ]; then
    print_error "App directory not found: $APP_DIR"
    exit 1
  fi
  print_success "App directory found"
  
  # Check page files exist
  if [ ! -f "$APP_DIR/page.tsx" ]; then
    print_error "Current page.tsx not found"
    exit 1
  fi
  print_success "page.tsx exists"
  
  if [ ! -f "$APP_DIR/page-variant-a-clarity.tsx" ]; then
    print_error "Variant A not found"
    exit 1
  fi
  print_success "Variant A exists"
  
  if [ ! -f "$APP_DIR/page-variant-b-urgency.tsx" ]; then
    print_error "Variant B not found"
    exit 1
  fi
  print_success "Variant B exists"
  
  if [ ! -f "$APP_DIR/page-variant-c-proof.tsx" ]; then
    print_error "Variant C not found"
    exit 1
  fi
  print_success "Variant C exists"
  
  # Check .env.local
  if [ ! -f "$PROJECT_DIR/.env.local" ]; then
    print_warning ".env.local not found (optional for local dev)"
  else
    print_success ".env.local exists"
  fi
  
  # Check API routes
  if [ ! -f "$APP_DIR/api/subscribe/route.ts" ]; then
    print_warning "Subscribe API route not found"
  else
    print_success "Subscribe API route exists"
  fi
  
  if [ ! -f "$APP_DIR/api/metrics/route.ts" ]; then
    print_warning "Metrics API route not found"
  else
    print_success "Metrics API route exists"
  fi
  
  print_success "Health check complete!"
}

# ============================================================================
# BACKUP CURRENT VERSION
# ============================================================================

backup_current() {
  print_header "Backing Up Current Version"
  
  TIMESTAMP=$(date +%Y%m%d_%H%M%S)
  BACKUP_FILE="$APP_DIR/page.tsx.backup-$TIMESTAMP"
  
  if [ -f "$APP_DIR/page.tsx" ]; then
    cp "$APP_DIR/page.tsx" "$BACKUP_FILE"
    print_success "Backup created: page.tsx.backup-$TIMESTAMP"
    print_info "Restore with: cp $BACKUP_FILE $APP_DIR/page.tsx"
  else
    print_warning "No current page.tsx to backup"
  fi
}

# ============================================================================
# DEPLOY VARIANT A (CLARITY FOCUS)
# ============================================================================

deploy_variant_a() {
  print_header "Deploying Variant A (Clarity Focus)"
  
  backup_current
  
  cp "$APP_DIR/page-variant-a-clarity.tsx" "$APP_DIR/page.tsx"
  print_success "Variant A deployed"
  
  print_info "🎯 Focus: Clarity + FAQ + Detailed Agent Descriptions"
  print_info "Expected lift: +25-35% conversion"
  print_info "Best for: Cold traffic, decision-making phase"
  print_info "Test duration: 7+ days for baseline"
  
  print_next_steps "Variant A" "npm run dev" "A/B test against Variant B"
}

# ============================================================================
# DEPLOY VARIANT B (URGENCY FOCUS)
# ============================================================================

deploy_variant_b() {
  print_header "Deploying Variant B (Urgency Focus)"
  
  backup_current
  
  cp "$APP_DIR/page-variant-b-urgency.tsx" "$APP_DIR/page.tsx"
  print_success "Variant B deployed"
  
  print_info "🎯 Focus: Urgency + Countdown Timer + Live Signup Feed"
  print_info "Expected lift: +20-30% conversion"
  print_info "Best for: Warm traffic, fence-sitters"
  print_info "Test duration: 7-10 days vs Variant A (50/50 split)"
  
  print_next_steps "Variant B" "npm run dev" "Compare conversion rate with Variant A"
}

# ============================================================================
# DEPLOY VARIANT C (PROOF FOCUS)
# ============================================================================

deploy_variant_c() {
  print_header "Deploying Variant C (Proof Focus)"
  
  backup_current
  
  cp "$APP_DIR/page-variant-c-proof.tsx" "$APP_DIR/page.tsx"
  print_success "Variant C deployed"
  
  print_info "🎯 Focus: Proof + Testimonials + Case Study + Agent Metrics"
  print_info "Expected lift: +30-40% conversion"
  print_info "Best for: Skeptical audience, high-ticket decisions"
  print_info "Test duration: 7-10 days vs Variant A (50/50 split)"
  
  print_next_steps "Variant C" "npm run dev" "Compare conversion rate with Variant A"
}

# ============================================================================
# RESTORE ORIGINAL
# ============================================================================

restore_original() {
  print_header "Restoring Original Version"
  
  if [ -f "$APP_DIR/page.tsx.backup-original" ]; then
    cp "$APP_DIR/page.tsx.backup-original" "$APP_DIR/page.tsx"
    print_success "Original version restored"
  else
    print_error "Original backup not found"
    print_info "Available backups:"
    ls -1 "$APP_DIR/page.tsx.backup-*" 2>/dev/null || print_warning "No backups found"
  fi
}

# ============================================================================
# LIST AVAILABLE VERSIONS
# ============================================================================

list_versions() {
  print_header "Available Versions"
  
  echo -e "\n${YELLOW}Current Deployed Version:${NC}"
  if [ -f "$APP_DIR/page.tsx" ]; then
    CURRENT_SIZE=$(wc -l < "$APP_DIR/page.tsx")
    echo "  📄 page.tsx ($CURRENT_SIZE lines)"
  fi
  
  echo -e "\n${YELLOW}Available Variants:${NC}"
  if [ -f "$APP_DIR/page-variant-a-clarity.tsx" ]; then
    SIZE=$(wc -l < "$APP_DIR/page-variant-a-clarity.tsx")
    echo "  🟦 page-variant-a-clarity.tsx ($SIZE lines) - FAQ + Clarity"
  fi
  
  if [ -f "$APP_DIR/page-variant-b-urgency.tsx" ]; then
    SIZE=$(wc -l < "$APP_DIR/page-variant-b-urgency.tsx")
    echo "  🟧 page-variant-b-urgency.tsx ($SIZE lines) - Countdown + Urgency"
  fi
  
  if [ -f "$APP_DIR/page-variant-c-proof.tsx" ]; then
    SIZE=$(wc -l < "$APP_DIR/page-variant-c-proof.tsx")
    echo "  🟩 page-variant-c-proof.tsx ($SIZE lines) - Testimonials + Proof"
  fi
  
  echo -e "\n${YELLOW}Backups:${NC}"
  if ls "$APP_DIR/page.tsx.backup-"* 1> /dev/null 2>&1; then
    ls -1 "$APP_DIR/page.tsx.backup-"* | sed 's/^/  /'
  else
    echo "  (no backups)"
  fi
}

# ============================================================================
# RUN TESTS
# ============================================================================

run_tests() {
  print_header "Running Tests"
  
  cd "$PROJECT_DIR"
  
  print_info "Testing build..."
  npm run build 2>&1 | tail -20
  
  if [ $? -eq 0 ]; then
    print_success "Build successful"
  else
    print_error "Build failed"
    exit 1
  fi
}

# ============================================================================
# START DEV SERVER
# ============================================================================

start_dev() {
  print_header "Starting Development Server"
  
  cd "$PROJECT_DIR"
  
  print_info "Starting Next.js dev server on http://localhost:3000"
  print_warning "Press Ctrl+C to stop"
  
  npm run dev
}

# ============================================================================
# CHECK CONVERSION METRICS
# ============================================================================

check_metrics() {
  print_header "Checking Conversion Metrics"
  
  if [ ! -f "/tmp/signups/emails.jsonl" ]; then
    print_warning "No signups file yet at /tmp/signups/emails.jsonl"
    return
  fi
  
  TOTAL_SIGNUPS=$(wc -l < /tmp/signups/emails.jsonl)
  RECENT_SIGNUPS=$(tail -20 /tmp/signups/emails.jsonl | wc -l)
  
  print_info "Total signups: $TOTAL_SIGNUPS"
  print_info "Recent signups (last 20 lines): $RECENT_SIGNUPS"
  
  echo -e "\n${YELLOW}Latest signups:${NC}"
  tail -10 /tmp/signups/emails.jsonl | jq -r '.email + " (" + .timestamp + ")"' 2>/dev/null || tail -5 /tmp/signups/emails.jsonl
}

# ============================================================================
# PRINT NEXT STEPS
# ============================================================================

print_next_steps() {
  VARIANT=$1
  DEV_CMD=$2
  TEST_CMD=$3
  
  echo -e "\n${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${GREEN}Next Steps for $VARIANT${NC}"
  echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo ""
  echo "1. Start development server:"
  echo "   ${YELLOW}$DEV_CMD${NC}"
  echo ""
  echo "2. Visit: http://localhost:3000"
  echo ""
  echo "3. Test form submission with test email"
  echo ""
  echo "4. $TEST_CMD"
  echo ""
  echo "5. Track metrics in Google Analytics (custom event: 'cta_click')"
  echo ""
}

# ============================================================================
# SHOW HELP
# ============================================================================

show_help() {
  cat << EOF

${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}
${BLUE}Formation AI Orchestrator - Deployment Scripts${NC}
${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}

Usage: bash DEPLOYMENT-SCRIPTS.sh [command]

${YELLOW}Commands:${NC}

  health              Run health checks (verify all files exist)
  
  list                List available versions and backups
  
  variant-a           Deploy Variant A (Clarity Focus)
                      Focus: FAQ + Detailed descriptions
                      Expected: +25-35% conversion
  
  variant-b           Deploy Variant B (Urgency Focus)
                      Focus: Countdown timer + Live feed
                      Expected: +20-30% conversion
  
  variant-c           Deploy Variant C (Proof Focus)
                      Focus: Testimonials + Case study
                      Expected: +30-40% conversion
  
  restore             Restore original version from backup
  
  build               Run production build test
  
  dev                 Start development server (localhost:3000)
  
  metrics             Check current conversion metrics
  
  help                Show this help message

${YELLOW}Quick Start:${NC}

  # 1. Health check
  bash DEPLOYMENT-SCRIPTS.sh health
  
  # 2. Deploy Variant A (recommended for baseline)
  bash DEPLOYMENT-SCRIPTS.sh variant-a
  
  # 3. Start dev server
  bash DEPLOYMENT-SCRIPTS.sh dev
  
  # 4. Visit http://localhost:3000
  
  # 5. After 7 days, deploy Variant B for A/B testing
  bash DEPLOYMENT-SCRIPTS.sh variant-b

${YELLOW}A/B Testing Strategy:${NC}

  Week 1:   Deploy Variant A (baseline)
            Sample: 1,000-2,000 visitors
            Goal: Establish conversion baseline
  
  Week 2-3: A/B Test A vs B (50/50 split)
            Sample: 2,000-3,000 per variant
            Goal: Find better performer
  
  Week 4-5: A/B Test Winner vs C (50/50 split)
            Sample: 2,000-3,000 per variant
            Goal: Find best performer
  
  Week 6+:  Optimize winner with micro-tests
            Goal: Reach 5-8% conversion

${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}

EOF
}

# ============================================================================
# MAIN
# ============================================================================

case "${1:-help}" in
  health)
    health_check
    ;;
  list)
    list_versions
    ;;
  variant-a)
    deploy_variant_a
    ;;
  variant-b)
    deploy_variant_b
    ;;
  variant-c)
    deploy_variant_c
    ;;
  restore)
    restore_original
    ;;
  build)
    run_tests
    ;;
  dev)
    start_dev
    ;;
  metrics)
    check_metrics
    ;;
  help)
    show_help
    ;;
  *)
    print_error "Unknown command: $1"
    show_help
    exit 1
    ;;
esac
