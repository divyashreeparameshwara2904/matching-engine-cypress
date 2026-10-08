# Matching Engine - Cypress Automation

Automation solution for the Spanish Point / Matching Engine assessment.

## Technology

- Cypress
- JavaScript
- Google Chrome

## Automated scenarios

### 1. Validate Solutions menu

The test:
1. Opens `https://www.matchingengine.com/`
2. Expands **Solutions** in the header.
3. Verifies the following Solutions are displayed:
   - Repertoire management
   - Repertoire and usage matching
   - Data ingestion and integration
   - Distribution processing
   - Member management
   - Member self service

### 2. Validate Distribution Processing

The test:
1. Expands **Solutions**.
2. Clicks **Distribution processing**.
3. Verifies navigation to the Distribution Processing page.
4. Scrolls to **All-in-one solution for scale**.
5. Verifies the section heading and its key content:
   - Distribute royalty payments quickly
   - Provide full detail of music usage to members
   - Reduce cost-to-distribution ratios.

## Prerequisites

Install:

- Node.js 20+ recommended
- Google Chrome

## Install

```bash
npm install
```

## Run in Chrome

Headless:

```bash
npm test
```

Headed:

```bash
npm run test:headed
```

## Open Cypress

```bash
npm run cypress:open
```

Then select the E2E test and choose Chrome.

## Project structure

```text
matching-engine-cypress/
├── cypress/
│   └── e2e/
│       └── matching-engine.cy.js
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md
```

## Design notes

The assertions use user-visible text rather than brittle CSS classes. The test also verifies the destination URL before validating the target section.

The expected Solution names and Distribution Processing content are based on the live Matching Engine website at the time this project was prepared.
