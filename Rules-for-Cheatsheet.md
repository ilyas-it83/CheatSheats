# Cheatsheet Design Rules

## Core Principles

### 1. Single A4 Page Maximum
- **Everything must fit on one standard A4 page (210mm × 297mm)**
- Optimize for print and PDF export
- Use compact layouts and efficient spacing

### 2. Information Density
- **Maximize useful information per square inch**
- Prioritize essential commands/concepts over explanations
- Use tables, grids, and columns effectively
- Eliminate unnecessary whitespace

### 3. No Navigation Elements
- **No sidebars, menus, or navigation**
- Content should be scannable without interaction
- Use visual hierarchy instead of navigation

### 4. Visual Design
- Clean, professional typography
- Consistent spacing and alignment
- Color coding for different types of information
- Icons for quick visual identification

## Layout Guidelines

### Typography
- **Font Size:** 10-12px for body text, 8-10px for code
- **Line Height:** 1.2-1.4 maximum
- **Font:** System fonts for readability

### Spacing
- **Margins:** 10-15px maximum
- **Section Spacing:** 8-12px between sections
- **Internal Spacing:** 4-6px within elements

### Grid System
- Use 2-4 column layouts to maximize space
- Align elements consistently
- Break information into digestible chunks

### Content Organization
- **Header:** Title + brief description (1-2 lines)
- **Sections:** Logical grouping of related information
- **Tables:** For commands, options, parameters
- **Code Blocks:** Minimal, essential examples only
- **Quick Reference:** Summary table at the bottom

### Page Size
- **A4 (210mm × 297mm)**
- Ensure no horizontal scrolling on standard screens
- Use CSS for print media queries to maintain layout
# Cheatsheet Design Rules
## Purpose and Audience
- **Purpose:** Provide quick reference for developers
- **Audience:** Developers, sysadmins, and technical users
- **Tone:** Professional, concise, and practical

## Content Rules

### What to Include
- ✅ Essential commands and syntax
- ✅ Common use cases and examples
- ✅ Important options and flags
- ✅ Quick reference tables
- ✅ Error handling basics

### What to Exclude
- ❌ Long explanations or tutorials
- ❌ Complete code examples (keep snippets short)
- ❌ Extensive documentation
- ❌ Multiple similar examples
- ❌ Navigation elements

### Code Examples
- Keep to 2-4 lines maximum
- Show only essential syntax
- Use placeholder values
- Prioritize most common patterns

## Visual Elements

### Visual Elements

- Use icons for quick identification (e.g., warning, info, success)
- Use color coding for different types of information
- use emoticons sparingly for emphasis
- Use more graphics, focus on text and tables
- Add images or diagrams where helpful
- Use consistent iconography

### Color Coding
- Use Dark mode colors for better readability
- **Background:** Dark gray or black
- **Headers:** Branded color for sections
- **Code:** Dark background, light text
- **Warnings:** Yellow/orange accents
- **Success:** Green accents
- **Info:** Blue accents
- **Error:** Red accents


### Templates
- **Do not use existing designs given in the Archieve folder**
- Use a grid-based layout
- Maintain consistent margins and padding
- Use a single-column layout for small screens
- Use a two-column layout for larger screens
- Reduce the margin of the pages

### Typography Hierarchy
1. **Main Title:** 16-18px, bold
2. **Section Headers:** 12-14px, bold
3. **Subsections:** 10-11px, bold
4. **Body Text:** 10-11px, regular
5. **Code:** 8-10px, monospace

### Tables
- Compact rows (4-6px padding)
- Alternating row colors for readability
- Bold headers
- Consistent column widths

## Print Optimization
- Ensure no horizontal scrolling
- Use CSS media queries for print
- Optimize layout for A4 paper size
- Use @media print to adjust styles
- Remove unnecessary elements for print
- Ensure text remains readable
- Force important colors with print-color-adjust
- It should not exceed 1 A4 page when printed

### Media Queries
- Optimize for print with @media print
- Remove backgrounds that don't print well
- Ensure text remains readable
- Force important colors with print-color-adjust

### Page Breaks
- Avoid breaking tables or code blocks
- Use page-break-inside: avoid for important sections
- Keep related information together

## Examples of Good Cheatsheets

### Structure
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

### Information Density Examples
- **Good:** `docker run -d -p 80:80 nginx` → Run nginx container
- **Bad:** Long paragraph explaining Docker containerization concepts

## Quality Checklist

### Before Publishing
- [ ] Fits on single A4 page when printed
- [ ] No horizontal scrolling needed
- [ ] All essential information included
- [ ] No redundant content
- [ ] Clean, professional appearance
- [ ] Works well in print/PDF format
- [ ] Easy to scan and find information
- [ ] Consistent formatting throughout
- [ ] While printing, i need the same output as on screen

### Content Review
- [ ] Most common use cases covered
- [ ] Essential commands included
- [ ] Options and flags documented
- [ ] Examples are practical and brief
- [ ] No lengthy explanations

### Design Review
- [ ] Good contrast for readability
- [ ] Consistent spacing and alignment
- [ ] Logical information hierarchy
- [ ] Effective use of typography
- [ ] Appropriate color coding

## Contributor Information
- Team: TechxConf
- Web: [TechxConf](https://techxconf.com)
- Contact: Team@techxconf.com