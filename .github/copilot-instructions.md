# CheatSheets Repository - GitHub Copilot Instructions

## Project Overview

This repository contains a collection of technical cheatsheets designed as quick reference guides for developers, sysadmins, and technical users. Each cheatsheet is a single-page HTML document optimized for maximum information density while maintaining readability and professional appearance.

**Key Characteristics:**
- Single A4 page constraint (210mm × 297mm) for all cheatsheets
- Dark mode optimized with branded color themes
- Print-friendly with consistent screen-to-print output
- Maximum information density per square inch
- No navigation elements - purely scannable content

## Repository Structure

```
/
├── *.html                    # Individual cheatsheet files (main deliverables)
├── styles/                   # CSS files for styling and themes
│   ├── styles.css           # Main stylesheet
│   ├── teams-styles.css     # Microsoft Teams specific styles
│   └── meetings-cheatsheet.css # Meetings specific styles
├── Archieve/                # Archived or previous versions
├── Rules-for-Cheatsheet.md  # Comprehensive design guidelines
├── Rules-Best-Practices.md  # Best practices documentation
└── .github/                 # Repository configuration
    └── workflows/           # GitHub Actions workflows
```

## Design Philosophy & Constraints

### Critical Requirements
- **A4 Page Limit**: Everything must fit on one standard A4 page when printed
- **Print Optimization**: Use `@media print` queries with `print-color-adjust: exact`
- **Information Density**: Maximize useful information per square inch
- **No Navigation**: Content must be scannable without interaction
- **Original Designs**: Do not replicate patterns from the `Archieve/` folder

### Typography Standards
- **Main Title**: 16-18px, bold
- **Section Headers**: 12-14px, bold
- **Subsections**: 10-11px, bold
- **Body Text**: 10-11px, regular
- **Code**: 8-10px, monospace
- **Line Height**: 1.2-1.4 maximum
- **Fonts**: System fonts for readability

### Layout Guidelines
- **Margins**: 10-15px maximum
- **Section Spacing**: 8-12px between sections
- **Internal Spacing**: 4-6px within elements
- **Grid System**: Use 2-4 column layouts to maximize space
- **Consistent alignment** and digestible chunks

### Color Scheme (Dark Mode Optimized)
- **Background**: Dark gray or black
- **Headers**: Branded color for technology/topic
- **Code Blocks**: Dark background, light text
- **Warnings**: Yellow/orange accents
- **Success**: Green accents
- **Info**: Blue accents
- **Error**: Red accents

## Content Standards

### What to Include ✅
- Essential commands and syntax
- Common use cases and examples
- Important options and flags
- Quick reference tables
- Error handling basics
- Technology-specific icons and branding

### What to Exclude ❌
- Long explanations or tutorials
- Complete code examples (keep to 2-4 lines max)
- Extensive documentation
- Multiple similar examples
- Navigation elements
- Unnecessary whitespace

### Content Structure
```
┌─────────────────────────────────────┐
│ TITLE & BRIEF DESCRIPTION           │
├─────────────────┬───────────────────┤
│ Section 1       │ Section 2         │
│ • Command       │ • Command         │
│ • Command       │ • Command         │
├─────────────────┼───────────────────┤
│ Section 3       │ Section 4         │
│ • Table format  │ • Quick examples  │
│ • Options       │ • Common patterns │
├─────────────────┴───────────────────┤
│ QUICK REFERENCE TABLE               │
└─────────────────────────────────────┘
```

## Technology Stack

- **Frontend**: HTML5, CSS3
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Output**: Static HTML files optimized for web and print
- **Design**: Responsive layouts with print media queries

## Development Process

### Research Phase
When creating new cheatsheets:
1. Research the technology/topic thoroughly online
2. Identify official color themes and branding
3. Gather relevant images, icons, and visual elements
4. Study official documentation for essential commands/concepts
5. Identify most common use cases and patterns

### Design Requirements
- Create original, topic-specific designs
- Apply appropriate technology branding and colors
- Use visual hierarchy instead of navigation
- Ensure content is scannable at a glance
- Test print output matches screen display

### Quality Checklist
Before publishing any cheatsheet:
- [ ] Fits on single A4 page when printed
- [ ] No horizontal scrolling needed
- [ ] All essential information included
- [ ] No redundant content
- [ ] Clean, professional appearance
- [ ] Works well in print/PDF format
- [ ] Easy to scan and find information
- [ ] Consistent formatting throughout
- [ ] Print output matches screen display
- [ ] Technology-appropriate color scheme applied

## Coding Standards

### HTML Structure
- Use semantic HTML5 elements
- Include proper meta tags for print optimization
- Structure content in logical, scannable sections
- Maintain clean, accessible markup

### CSS Guidelines
- Implement proper `@media print` queries
- Use `print-color-adjust: exact` for color printing
- Use CSS Grid and Flexbox for compact layouts
- Employ CSS custom properties for consistent theming
- Optimize for both screen and print viewing
- Avoid page breaks within important sections using `page-break-inside: avoid`

### File Organization
- Each cheatsheet is a self-contained HTML file
- Shared styles go in the `styles/` directory
- Follow consistent naming conventions (technology-purpose-cheatsheet.html)
- Archive old versions in `Archieve/` folder

## Team Information

- **Team**: TechxConf
- **Website**: [TechxConf](https://techxconf.com)
- **Contact**: Team@techxconf.com

## Copilot Behavior Guidelines

When working with this repository:

1. **Always reference design rules** in `Rules-for-Cheatsheet.md` before making suggestions
2. **Prioritize information density** - suggest compact, efficient layouts over verbose content
3. **Consider A4 constraints** - all suggestions must fit within single page print limits
4. **Research technology themes** - apply appropriate colors and branding for the specific topic
5. **Focus on essentials** - prioritize commands, syntax, and quick reference over explanations
6. **Create original designs** - don't replicate archived patterns, innovate new approaches
7. **Test print compatibility** - ensure suggestions work for both screen and print media
8. **Maintain consistency** - follow established CSS patterns and HTML structure

When suggesting new cheatsheets or modifications:
- Research the technology's official branding and color schemes
- Structure content for maximum scanability and quick reference
- Include only the most essential and commonly-used information
- Apply appropriate visual hierarchy without navigation elements
- Ensure the final result can be printed on a single A4 page while maintaining readability
