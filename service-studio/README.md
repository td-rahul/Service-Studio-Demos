# Service Studio

An AI-powered customer service management platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Dashboard**: AI performance metrics and command interface
- **Customer Management**: Customer lookup, profiles, and AI insights
- **Conversation Management**: Chat interface with AI thought process
- **AI Agent Settings**: Knowledge base and intervention rule configuration
- **Integrations**: Connect with popular tools like Zendesk, Slack, Salesforce

## Project Structure

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── page.tsx           # Home dashboard
│   ├── layout.tsx         # Root layout with sidebar
│   ├── globals.css        # Global styles
│   ├── customers/         # Customer management
│   │   ├── page.tsx       # Customer list and lookup
│   │   └── [id]/         # Dynamic customer detail pages
│   ├── conversations/     # Conversation management
│   │   ├── page.tsx       # Conversation list
│   │   └── [id]/         # Individual conversation view
│   ├── ai-settings/       # AI configuration
│   │   └── page.tsx       # Knowledge base and rules
│   └── integrations/      # Third-party integrations
│       └── page.tsx       # Integration management
└── components/            # Reusable components
    └── Sidebar.tsx        # Navigation sidebar
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Fix npm cache permissions (if needed):
```bash
sudo chown -R $(whoami) ~/.npm
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Dependencies

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

## Pages Overview

### Home Dashboard (`/`)
- AI command chatbox for querying customer data
- Performance metrics cards (AI Performance, Insights, Automations, Sentiment)

### Customers (`/customers`)
- Customer search and lookup functionality
- Proactive customer outreach list
- Individual customer profiles with AI insights

### Conversations (`/conversations`)
- List of conversations needing agent attention
- AI-handled conversation monitoring
- Individual conversation view with chat interface

### AI Settings (`/ai-settings`)
- Knowledge base source management
- Intervention rule configuration
- Performance metrics

### Integrations (`/integrations`)
- Connected and available integrations
- Integration status monitoring
- Custom integration requests

## Development Notes

- All components include TypeScript interfaces
- Responsive design with Tailwind CSS
- Mock data for demonstration purposes
- Client-side routing with Next.js App Router
- Modular component architecture

## Future Enhancements

- Real-time chat functionality
- Backend API integration
- Database connectivity
- Authentication and authorization
- Advanced AI configuration options
